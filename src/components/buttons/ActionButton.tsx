import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'

interface ActionButtonProps {
    title: string;
    onPress: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({title, onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default ActionButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 10,
        alignSelf: 'center'
    },
    text: {
        color: '#F5F5DC',
    }
})