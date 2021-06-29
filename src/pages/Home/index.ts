import { addNewCar } from './../../store';
import { Car } from './../../Interfaces';
import ListCar from './components/RandomPictureCard'

const car: Car = {
    brand: 'Toyota',
    year: 2020,
    color: 'black',
    model: 'Corolla',
    picture: ''
  };

  const Home: HTMLElement = document.createElement('div');

  const FloatingButton: HTMLButtonElement = document.createElement('button');

  FloatingButton.onclick = (): void => {
    addNewCar({
      ...car,
      picture: `https://picsum.photos/200/150?q=${Math.floor(Math.random() * 100)}`
    });
  }
  
  FloatingButton.innerText = '+'
  FloatingButton.classList.add('FloatingButton')

  Home.append(ListCar)
  Home.append(FloatingButton)
  
  export default Home