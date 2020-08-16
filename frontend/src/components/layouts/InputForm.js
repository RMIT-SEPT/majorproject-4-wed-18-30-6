import React from "react";

const InputForm = ({ style, name, type, header, onChange }) => {
  return (
    <div className='input-container' style={style}>
      <span className='header' htmlFor={name}>
        {header}
      </span>
      <input onChange={onChange} className='input' id={name} type={type} name={name} />
    </div>
  );
};

export default InputForm;
