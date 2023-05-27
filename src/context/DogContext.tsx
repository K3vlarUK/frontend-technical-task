import React, { createContext, useState} from "react";
import { Dog, DogContextProps } from "./types";

const initialState: DogContextProps = {
    dogs: [],
    addDog: (dog: Dog) => {},
    removeDog: (dogToRemove: Dog) => {}
};

export const DogContext = createContext(initialState);

export interface DogProviderProps {
    children: React.ReactNode;
}

export const DogContextProvider = (children: DogProviderProps) => {
    const [dogs, setDogs] = useState<Dog[]>([]);

    const addDog = (dogToAdd: Dog) => {
        setDogs(initialArray => [...initialArray, dogToAdd])
        console.log({dogs})
    }

    const removeDog = (dogToRemove: Dog) => {
        setDogs(dogs.filter(dog => dog !== dogToRemove))
    }

    return (
        <DogContext.Provider value={{dogs, addDog, removeDog}}>
            {children.children}
        </DogContext.Provider>
    )
}