export type Dog = {
    url: string,
    name: string
}

export type SavedDog = {
    dogDetails: Dog,
    dogsName: string,
}

export interface SavedDogs {
    dogsName: string,
    dogDetails: Dog,
}

export interface DogContextProps {
    dogs: SavedDogs[],
    addDog: (dog: Dog, dogsName: string) => void,
    removeDog: (dogToRemove: Dog) => void,
}