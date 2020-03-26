import React from 'react';
import Card from './card'

function CardsArray({robots}) {
  console.log(robots)
  return (
    
robots.map(robot => 
      <Card className= 'flex flex-wrap'
      key={robot.id}
      id={robot.id}
      name={robot.name}
      email={robot.email}  />
   )  
    
  );
}

export default CardsArray;
