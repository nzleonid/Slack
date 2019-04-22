import React from 'react';
import { FormControl } from 'react-bootstrap';

const FormControlComponent = ({
  input, onChange, inputRef, ...rest
}) => (
  <FormControl
    value={input.value}
    onChange={input.onChange}
    ref={inputRef}
    {...rest}
  />
);

export default FormControlComponent;
