import React from 'react'

const Button = (props) => {
  return (
    <button className="w-32 h-10 rounded-md bg-orange-400 text-white font-inter font-semibold text-md leading-60">
      {props.text}
    </button>
  );
}

export default Button