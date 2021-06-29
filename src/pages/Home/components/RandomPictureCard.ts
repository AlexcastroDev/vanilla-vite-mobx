import { Car } from '../../../Interfaces';
import { state } from '../../../store'
import { reaction } from 'mobx'

const RandomPictureCard: HTMLUListElement = document.createElement('ul');
RandomPictureCard.classList.add('StyledRandomPictureCard');

const buildList = (cars: Car[]): void => {
    const ListItem: HTMLLIElement = document.createElement('li')
    const Picture: HTMLImageElement = document.createElement('img')

    cars.forEach((car) => {
        Picture.src = car.picture
        RandomPictureCard.append(ListItem)
        ListItem.append(Picture)
    })
}

reaction((): Car[] => state.cars, (car: Car[]): void => buildList(car))

export default RandomPictureCard