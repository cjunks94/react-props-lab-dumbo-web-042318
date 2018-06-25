// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component{
render(){
  const {name, speed, hasRockets, colors} = this.props;
  // this.props = {
  //     name: 'cat',
  //     speed: 'slow',
  //     hasRockets: false,
  //     colors: ['black', 'red']
  // }

  return(
    <div>
      <h1>Ship Name {name}</h1>
    <p>Speed {speed}</p>
    <p>Rockets? {hasRockets}</p>
    <p>colors {colors}</p>
    </div>
  )}

}
Spaceship.defaultProps={
  name: 'cat',
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
