import { StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import DogBox from '../components/dogs/DogBox'
import ActionButtonContainer from '../components/buttons/ActionButtonContainer'
import { Dog } from '../context/types'
import { DogContext } from '../context/DogContext'
import { SafeAreaView } from 'react-native-safe-area-context'

interface DogResponse {
  message: string;
  status: string
}

const Home = () => {

  const [currentDog, setCurrentDog] = useState<Dog>({
    url: '',
    name: '',
  })

  const {addDog} = useContext(DogContext);

  const getNewDog = () => {
      fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then((data: DogResponse) => {
          const dogNameArr = data.message.split('/');
          const dogName = dogNameArr[4];
          setCurrentDog({url: data.message, name: dogName})
      })
      .catch(e => console.error('Failed to Fetch Cute Image', JSON.stringify(e)))
  }

  useEffect(() => {
    getNewDog();
  }, [])

  const saveDog = () => {
    addDog(currentDog);
    getNewDog();
  }

  return (
    <SafeAreaView style={styles.container}>
      {
        currentDog.url && (
          <DogBox url={currentDog.url} dogName={currentDog.name} />
        )
      }
      <ActionButtonContainer newDog={getNewDog} saveDog={saveDog} />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#5d5d5d'
  }
})