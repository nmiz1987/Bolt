import { Screen } from '@/components/Screen/Screen';
import { Button } from '@/components/Button/Button';
import { useCallback, useMemo, useRef } from 'react';
import { ModalContent } from '@/components/ModalContent';
import BottomSheet, { BottomSheetBackdrop, BottomSheetScrollView } from '@gorhom/bottom-sheet';

export default function PopupScreen() {
  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['25%', '50%', '85%'], []);

  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // renders
  const renderBackdrop = useCallback(props => <BottomSheetBackdrop disappearsOnIndex={-1} {...props} appearsOnIndex={0} />, []);

  return (
    <Screen>
      <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
      <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
      <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
      <Button title="Close" onPress={() => handleClosePress()} />
      <BottomSheet backdropComponent={renderBackdrop} ref={sheetRef} index={-1} snapPoints={snapPoints}>
        <BottomSheetScrollView>
          <ModalContent />
        </BottomSheetScrollView>
      </BottomSheet>
    </Screen>
  );
}
