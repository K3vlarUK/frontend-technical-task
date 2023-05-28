import React from 'react'
import ToggleButton, { ButtonType } from '../buttons/ToggleButton'
import { useNavigation, useRoute } from '@react-navigation/native'
import { NavigationProps } from '../../navigation/navigation'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from '@emotion/native'

const MainContainer = styled.View`
  alignItems: center;
  backgroundColor: #D3D3D3;
  height: 125px;
  borderBottomColor: #000;
  borderBottomWidth: 2px;
`

const ButtonContainer = styled.View`
  flexDirection: row;
  width: 100%;
  justifyContent: space-evenly;
  paddingTop: 10px;
`

const Text = styled.Text`
  fontSize: 18px;
  fontWeight: bold;
`

const NavBar = () => {

  const navigation = useNavigation<NavigationProps>();
  const route = useRoute();
  const insets = useSafeAreaInsets();

  const navigateToScreen = (buttonPressed: ButtonType) => {
    navigation.navigate(buttonPressed);
  }

  return (
    <MainContainer style={{paddingTop: insets.top}}>
      <Text>Happy Doggy Randomiser</Text>
      <ButtonContainer>
        <ToggleButton onPress={navigateToScreen} title={ButtonType.Home} isActive={route.name === ButtonType.Home} />
        <ToggleButton onPress={navigateToScreen} title={ButtonType.Gallery} isActive={route.name === ButtonType.Gallery} />
      </ButtonContainer>
    </MainContainer>
  )
}

export default NavBar