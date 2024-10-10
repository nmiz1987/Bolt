import { forwardRef, PropsWithChildren, Ref, useMemo } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Box } from '@/components/Box/Box';

type BottomSheetModalProps = PropsWithChildren & Partial<BottomSheetModal>;

const BottomSheetModalPreset = forwardRef(({ children, ...props }: BottomSheetModalProps, ref: Ref<BottomSheetModal>) => {
  const snapPoints = useMemo(() => ['48%', '85%'], []);

  return (
    <BottomSheetModal
      name="modal"
      backdropComponent={backdropProps => <Box {...backdropProps} />}
      containerStyle={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
      enablePanDownToClose
      index={0}
      snapPoints={snapPoints}
      backgroundStyle={{ borderRadius: 25 }}
      {...props}>
      {children}
    </BottomSheetModal>
  );
});

export { BottomSheetModalPreset };

BottomSheetModalPreset.displayName = 'BottomSheetModalPreset';
