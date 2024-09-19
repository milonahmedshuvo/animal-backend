import express from 'express'
import { animalController } from './animal.controller'

const router = express.Router()

router.post('/create', animalController.createAnimal)




export const animalRoute = router