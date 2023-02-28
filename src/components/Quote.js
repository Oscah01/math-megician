import React from 'react';
import generator from '../functions/generator';

const random = Math.floor(Math.random() * generator.length);

const Quote = () => (
  <div className="row left card_position">
    <div className="quote">
      <p style={{ color: 'var(--secondary)' }}>
        <span>{generator[random].quote}</span>
        <span>{generator[random].by}</span>
      </p>
    </div>
  </div>
);

export default Quote;
