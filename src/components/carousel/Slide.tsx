import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { Dog } from '../../context/types'
import ActionButton from '../buttons/ActionButton'

interface SlideProps {
    dog: Dog;
    onDeletePress: (dog: Dog) => void;
}

const Slide: React.FC<SlideProps> = ({dog, onDeletePress}) => {

    const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

    return (
        <View
          style={{
            height: windowHeight,
            width: windowWidth,
            alignItems: "center",
            paddingTop: 10,
          }}
        >
          <Image
            source={{ uri: dog.url }}
            style={{ 
                width: '90%',
                height: undefined,
                aspectRatio: 1, 
                resizeMode: 'contain'
            }}
          />
          <Text style={{ fontSize: 24 }}>{dog.name}</Text>
          <View style={{paddingTop: 20}}>
            <ActionButton title='Remove Dog from Gallery' onPress={() => onDeletePress(dog)} />
          </View>
        </View>
      );
}

export default Slide