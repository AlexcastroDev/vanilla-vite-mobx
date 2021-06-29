import { observable } from 'mobx'
import { Car } from './../Interfaces'

const state = observable({
    cars: [] as Car[]
});

export default state