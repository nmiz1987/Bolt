import { useState } from 'react';

export function useCheckBoxState(status: boolean) {
  const [isChecked, setIsChecked] = useState<boolean>(status ?? false);

  const handlePress = () => {
    setIsChecked(cur => !cur);
  };

  return {
    isChecked,
    handlePress,
  };
}
