import React from 'react';

function PropsIntro() {
  const messages = [
    "Hello Developers",
    "React is definitely more fun, isn't it?"
  ];

  return (
    <div>
      {messages.map((message, index) => (
        <h2 key={index}>{message}</h2>
      ))}
    </div>
  );
}

export default PropsIntro;
