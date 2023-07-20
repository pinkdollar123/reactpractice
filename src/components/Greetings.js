import React from 'react';

function Greetings() {
  const casual = Math.floor(Math.random() * 2) % 2 === 0;

  if (casual) {
    return <Hi />;
  } else {
    return <Hello />;
  }
}

function Hello() {
  const now = new Date();
  return (
    <div className="pink">
      Hello! The current year is {now.getFullYear()}
    </div>
  );
}

function Hi() {
  const now = new Date();

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return (
    <div className="blue">
      Hi! Today is {days[now.getDay()]}
    </div>
  );
}

export default Greetings;
