import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ActionButton from './ActionButton'

interface ActionButtonContainerProps {
    newDog: () => void;
    saveDog: () => void;
}

const ActionButtonContainer: React.FC<ActionButtonContainerProps> = ({newDog, saveDog}) => {
  return (
    <View style={styles.container}>
      <ActionButton title='New Dog' onPress={newDog} />
      <ActionButton title='Save Dog' onPress={saveDog} />
    </View>
  )
}

export default ActionButtonContainer

const styles = StyleSheet.create({
    container: {
        
    }
})