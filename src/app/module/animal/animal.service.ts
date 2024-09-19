import { TAnimal } from "./animal.interface";
import { Animal } from "./animal.model";

const createAnimalIntoDB = async (payload:TAnimal) => {

    const result = await Animal.create(payload)
    return result
}


export const animalService = {
    createAnimalIntoDB
}