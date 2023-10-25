import React from 'react';
import Slider from './Slider';

const images = [
  'https://images.pexels.com/photos/327434/pexels-photo-327434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/533854/pexels-photo-533854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/389724/pexels-photo-389724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/433524/pexels-photo-433524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const App = () => {
  return <Slider images={images} slideInterval={5000} />;
};

export default App;
