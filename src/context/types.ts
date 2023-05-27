export type Dog = {
    url: string,
    name: string
}

export interface DogContextProps {
    dogs: Dog[],
    addDog: (dog: Dog) => void,
    removeDog: (dogToRemove: Dog) => void,
}