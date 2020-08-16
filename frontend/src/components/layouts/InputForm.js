import React from "react";

const InputForm = ({name, type, header}) => {
  return (
    <div className='input-container'>
      <span className='header' for={name}>
        {header}
      </span>
      <input type={type} name={name} />
    </div>
  );
};

export default InputForm;
