import React from 'react';
import './formInput.css';

const FormInput = ({ handleChange, label, ...otherProps  })=> {
    return (
         <div className = 'formRow'>
             {label &&(
                 <label>
                     {label}
                 </label>
             )}

              <input className = 'inputForm' onChange = {handleChange} {...otherProps} />
         </div>
    )
};

export default FormInput;