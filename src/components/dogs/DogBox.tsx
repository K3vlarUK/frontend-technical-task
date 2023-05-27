import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface DogBoxProps {
    url: string,
    dogName: string,
}

const DogBox: React.FC<DogBoxProps> = ({url, dogName}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#000', borderRadius: 20, width: '90%'}}>
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
        paddingTop: 10,
        textAlign: 'center',
        color: '#fff'
    }
})