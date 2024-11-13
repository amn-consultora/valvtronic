import { Carousel } from './Carousel';
import { WordsRotate } from './WordsRotate';

export const Hero = () => {
  return (
  <section className={`flex flex-col lg:flex-row items-center justify-center mx-auto lg:h-screen `}>
    <WordsRotate />
    <Carousel />    
  </section>)
};