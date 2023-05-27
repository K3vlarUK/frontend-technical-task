import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import ToggleButton, { ButtonType } from '../buttons/ToggleButton'
import { useNavigation } from '@react-navigation/native'
import { NavigationProps } from '../../navigation/navigation'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const NavBar = () => {

  const navigation = useNavigation<NavigationProps>();
  const insets = useSafeAreaInsets();

  const navigateToScreen = (buttonPressed: ButtonType) => {
    navigation.navigate(buttonPressed);
  }

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <Text>Happy Doggy Randomiser</Text>
      <View style={styles.buttonContainer}>
        <ToggleButton onPress={navigateToScreen} title={ButtonType.Home} />
        <ToggleButton onPress={navigateToScreen} title={ButtonType.Gallery} />
      </View>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#D3D3D3',
        height: 125,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#D3D3D3',
        paddingTop: 10
    }
})