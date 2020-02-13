import React from 'react';
import Boards from '../assets/images/boards.png';

function BoardShop() {

const shopStyle = {
  width: '80%',
  margin: '0 auto',
  padding: '2.5px'
}

  return <img style={shopStyle} src={Boards} alt="BoardShop" />;
}
export default BoardShop;
