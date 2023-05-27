import { StackNavigationProp } from "@react-navigation/stack";

export type NavStackParamList = {
    Home: undefined;
    Gallery: undefined;
}

export type NavigationProps = StackNavigationProp<NavStackParamList>;