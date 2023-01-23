import React from 'react';

export default function Cart({isOpen}) {
  return (
    <div className={isOpen ? 'Cart open' : 'Cart'}>
      <h2>My Cart</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
  );
}
