import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import ActionButton from './ActionButton'

interface ActionButtonContainerProps {
    newDog: () => void;
    saveDog: (dogName: string) => void;
}

const ActionButtonContainer: React.FC<ActionButtonContainerProps> = ({newDog, saveDog}) => {

  const [dogsName, setDogsName] = useState('')
  const [actionRequired, setActionRequired] = useState(false)
  const [addedDog, setAddedDog] = useState(false)

  const saveNewDog = () => {
    if (dogsName === '') {
      setActionRequired(true);
      return;
    }
    saveDog(dogsName);
    setAddedDog(true);
    setDogsName('');
  }

  const getNewDog = () => {
    setDogsName('');
    newDog();
  }

  return (
    <View>
      {
        addedDog && (
          <Text>Successfully added dog!</Text>
        )
      }
      <Text style={[styles.label, {color: actionRequired ? '#ff0000' : '#D3D3D3'}]}>Please name dog to add. *</Text>
      <TextInput 
        style={styles.input} 
        placeholder='Name Dog' 
        defaultValue={dogsName}
        onFocus={() => setAddedDog(false)}
        onSubmitEditing={saveNewDog} 
        onChangeText={(value: string) => {
          setDogsName(value);
          setActionRequired(false);
          setAddedDog(false);
        }
        }  
      />
      <ActionButton title='New Dog' onPress={getNewDog} />
      <ActionButton title='Save Dog' onPress={saveNewDog} />
    </View>
  )
}

export default ActionButtonContainer

const styles = StyleSheet.create({
  label: {
    paddingBottom: 5,
  },
  input: {
    width: 150,
    color: '#000',
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 2,
    alignSelf: 'center',
    backgroundColor: '#D3D3D3'
  }
})