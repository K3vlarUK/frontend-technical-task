import React from 'react'
import styled from '@emotion/native';

export enum ButtonType {
  Home = 'Home',
  Gallery = 'Gallery'
}

interface ToggleButtonProps {
    title: ButtonType;
    onPress: (buttonPress: ButtonType) => void;
    isActive: boolean;
}

const Pressable = styled.Pressable`
  backgroundColor: #5A5A5A;
  borderRadius: 10px;
  padding: 10px;
  marginLeft: 10px;
`

const Text = styled.Text`
  color: #F5F5DC;
`

const ToggleButton: React.FC<ToggleButtonProps> = ({title, onPress, isActive}) => {
  return (
    <Pressable onPress={() => onPress(title)} style={isActive ? {backgroundColor: '#000'} : {}}>
      <Text>{title}</Text>
    </Pressable>
  )
}

export default ToggleButton