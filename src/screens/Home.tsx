import React, { useContext, useEffect, useState } from 'react'
import DogBox from '../components/dogs/DogBox'
import ActionButtonContainer from '../components/buttons/ActionButtonContainer'
import { Dog } from '../context/types'
import { DogContext } from '../context/DogContext'
import styled, { css } from '@emotion/native'

interface DogResponse {
  message: string;
  status: string
}

// I've used a mixture of Emotion Styling and standard Stylesheets throughout the app
// I had never used Emotion before so was interested in seeing what it was like

const CustomSafeAreaView = styled.SafeAreaView`
  justifyContent: space-evenly;
  alignItems: center;
  height: 100%;
  backgroundColor: #5d5d5d;
`

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

  const saveDog = (dogsName: string) => {
    addDog(currentDog, dogsName);
    getNewDog();
  }

  return (
    <CustomSafeAreaView>
      {
        currentDog.url && (
          <DogBox url={currentDog.url} dogName={currentDog.name} />
        )
      }
      <ActionButtonContainer newDog={getNewDog} saveDog={saveDog} />
    </CustomSafeAreaView>
  )
}

export default Home