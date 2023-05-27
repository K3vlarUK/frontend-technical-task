import { View, Modal, StyleSheet } from 'react-native'
import React from 'react'
import ActionButton from '../buttons/ActionButton';

interface BottomSheetProps {
    showBottomSheet: boolean;
    confirmDelete: () => void;
    onDismiss: () => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({showBottomSheet, confirmDelete, onDismiss}) => {
  return (
    <Modal 
        animationType='slide'
        transparent 
        visible={showBottomSheet} 
        onDismiss={onDismiss}
    >
        <View style={styles.bottomSheet}>
            <ActionButton title='Confirm Delete Dog' onPress={confirmDelete} />
            <ActionButton title='Cancel and Exit' onPress={onDismiss} />
        </View>
    </Modal>
  )
}

export default BottomSheet

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomSheet: {
        position: 'absolute',
        left: 0,
        right: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#dfdfdf',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingVertical: 23,
        paddingHorizontal: 25,
        bottom: 0,
        borderWidth: 1,
        borderColor: '#000'
    },
});