import { action } from "mobx"
import state from './state'
import { Car } from './../Interfaces'

const addNewCar = action('addCar' ,(payload: Car) => {
    state.cars = [
        ...state.cars,
        payload
    ];
})

export { state, addNewCar };