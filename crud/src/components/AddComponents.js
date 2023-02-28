
import React, { useState } from 'react';
import AddProduct from './AddProduct';

function AddComponents() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  
  return (
    <div>
      <button onClick={handleClick}>Open Form</button>
      {isOpen && <AddProduct onClose={handleClose} />}
    </div>
  );
}


export default AddComponents;