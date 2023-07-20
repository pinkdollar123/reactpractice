import React from 'react'

function Circle(props) {
    const cirStyle = {backgroundColor: props.color};

  return (
    <div className="circle" style={cirStyle}></div>
  )
}

function RandomCircle(props) {
    const Circles = [PurpleCircle, GreenCircle, RedCircle, BlackCircle];
    const SomeCircle = Circles[props.index];
    return <SomeCircle />;
}

function PurpleCircle() {
    return <Circle color="purple" />;
  }
  
  function GreenCircle() {
    return <Circle color="green" />;
  }
  
  function RedCircle() {
    return <Circle color="red" />;
  }
  
  function BlackCircle() {
    return <Circle color="black" />;
  }

function CircleWrapper() {
    return (
        <div>
            <Circle color="pink" />
            <PurpleCircle />
            <GreenCircle />
            <RedCircle />
            <BlackCircle />
            <RandomCircle index={Math.floor(Math.random() * 4)} />
        </div>
    )
}

export default CircleWrapper;