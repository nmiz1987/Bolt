import { constant } from '@/constants/setting';
import { useQuery, useQueryClient, UseQueryResult, QueryOptions } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

export interface UseQueryCustomProps<T> extends QueryOptions<T> {
  queryKey: unknown[];
  queryFn: ({ signal }: { signal?: AbortSignal }) => Promise<T>;
  abortOnTimeOut?: boolean;
  timeOutDuration?: number;
  enabled?: boolean;
}

export type UseQueryCustomResult<T> = UseQueryResult<T> & {
  isAborted: boolean; // Custom field to indicate if the request was aborted
};

export function useQueryCustom<T extends any>({
  queryKey,
  queryFn,
  abortOnTimeOut = true,
  timeOutDuration = constant.useQueryTimeOut,
  enabled = true,
}: UseQueryCustomProps<T>): UseQueryCustomResult<T> {
  const queryClient = useQueryClient();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isAborted, setIsAborted] = useState(false);

  const response = useQuery<T>({
    queryKey,
    queryFn: async ({ signal }) => {
      try {
        const result = await queryFn({ signal });
        setIsAborted(false); // Reset if the query completes successfully
        return result;
      } catch (error) {
        if (axios.isCancel(error)) {
          setIsAborted(true); // Set the abort flag if the error was due to cancellation
        }
        throw error; // Let react-query handle the error state
      }
    },
    enabled,
  });

  useEffect(() => {
    if (abortOnTimeOut && response.isFetching) {
      timerRef.current = setTimeout(() => {
        if (response.isFetching) {
          queryClient.cancelQueries({ queryKey, exact: true });
        }
      }, timeOutDuration);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [abortOnTimeOut, queryClient, queryKey, response.isFetching, timeOutDuration]);

  // Return the response with the additional isAborted field
  return { ...response, isAborted };
}
