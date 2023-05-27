import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { DogContext } from '../context/DogContext';
import { Dog } from '../context/types';
import Carousel from '../components/carousel/Carousel';
import BottomSheet from '../components/bottomSheet/BottomSheet';

const Gallery = () => {

  const {dogs, removeDog} = useContext(DogContext);
  const [showBottomSheet, setShowBottomSheet] = useState(false)
  const [dogToDelete, setDogToDelete] = useState<Dog>({url: '', name: ''})

  const toggleConfirmDelete = (dog: Dog) => {
    setShowBottomSheet(true);
    setDogToDelete(dog);
  }

  const confirmDelete = () => {
    removeDog(dogToDelete);
    setShowBottomSheet(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Super Cute Doggy Gallery</Text>
      <Carousel dogData={dogs} onDeleteDogPress={toggleConfirmDelete} />
      <BottomSheet showBottomSheet={showBottomSheet} confirmDelete={confirmDelete} onDismiss={() => setShowBottomSheet(false)} />
    </View>
  )

}

export default Gallery

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#5d5d5d'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold'
  }
})