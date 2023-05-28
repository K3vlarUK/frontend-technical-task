import { Image, StyleSheet, Text } from 'react-native'
import React from 'react'
import styled from '@emotion/native'

interface DogBoxProps {
    url: string,
    dogName: string,
}

const View = styled.View`
    justifyContent: center;
    alignItems: center;
    padding: 20px;
    backgroundColor: #000;
    borderRadius: 20px;
    width: 90%;
`

const DogBox: React.FC<DogBoxProps> = ({url, dogName}) => {
  return (
    <View>
        <Image style={styles.image} source={{uri: url}} />
        <Text style={styles.text}>{dogName}</Text>
    </View>
  )
}

export default DogBox

const styles = StyleSheet.create({
    image: { 
        width: '90%',
        height: undefined,
        aspectRatio: 1, 
        resizeMode: 'contain'
    },
    text: {
        fontSize: 24,
        paddingTop: 10,
        textAlign: 'center',
        color: '#fff'
    }
})