import React, { createContext, useState} from "react";
import { Dog, DogContextProps, SavedDogs } from "./types";

const initialState: DogContextProps = {
    dogs: [],
    addDog: (dog: Dog, dogsName: string) => {},
    removeDog: (dogToRemove: Dog) => {}
};

export const DogContext = createContext(initialState);

export interface DogProviderProps {
    children: React.ReactNode;
}

export const DogContextProvider = (children: DogProviderProps) => {
    const [dogs, setDogs] = useState<SavedDogs[]>([]);

    const addDog = (dogToAdd: Dog, dogName: string) => {
        setDogs(initialArray => [...initialArray, {dogDetails: dogToAdd, dogsName: dogName}])
        console.log({dogs})
    }

    const removeDog = (dogToRemove: Dog) => {
        setDogs(dogs.filter(dog => dog.dogDetails !== dogToRemove))
    }

    return (
        <DogContext.Provider value={{dogs, addDog, removeDog}}>
            {children.children}
        </DogContext.Provider>
    )
}