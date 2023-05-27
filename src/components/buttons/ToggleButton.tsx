import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'

export enum ButtonType {
  Home = 'Home',
  Gallery = 'Gallery'
}

interface ToggleButtonProps {
    title: ButtonType;
    onPress: (buttonPress: ButtonType) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({title, onPress}) => {
  return (
    <Pressable onPress={() => onPress(title)} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default ToggleButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#5A5A5A',
        borderRadius: 10,
        padding: 10
    },
    text: {
        color: '#F5F5DC',
    }
})