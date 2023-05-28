import { Dimensions } from 'react-native'
import React from 'react'
import { Dog, SavedDog } from '../../context/types'
import ActionButton from '../buttons/ActionButton'
import styled from '@emotion/native';

interface SlideProps {
    dog: SavedDog;
    onDeletePress: (dog: Dog) => void;
}

const Container = styled.View`
  alignItems: center;
`

const Image = styled.Image`
  width: 90%;
  height: undefined;
  aspectRatio: 1;
  resizeMode: contain;
`

const Text = styled.Text`
  fontSize: 24px;
  color: #D3D3D3;
`

const Slide: React.FC<SlideProps> = ({dog, onDeletePress}) => {

    const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

    return (
        <Container
          style={{
            height: windowHeight,
            width: windowWidth,
          }}
        >
          <Image source={{ uri: dog.dogDetails.url }} />
          <Text>{dog.dogsName}</Text>
          <ActionButton title='Remove Dog from Gallery' onPress={() => onDeletePress(dog.dogDetails)} />
        </Container>
      );
}

export default Slide