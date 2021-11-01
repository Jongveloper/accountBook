import React from 'react';
import InputStyle from './style';

export interface Props {
  border?: string;
  radius?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  color?: string;
  fs?: string;
  padding?: string;
  addstyle?: any;
  id?: string;
  type?: string;
  margin?: string;
  name?: string;
  value?: string;
  accept?: string;
  placeholder?: string;
  _onChange?: any;
  _onKeyPress?: any;
  _onFocus?: any;
}

const Input: React.FC<Props> = ({
  id,
  type,
  value,
  accept,
  placeholder,
  _onChange,
  _onKeyPress,
  _onFocus,
  ...props
}): React.ReactElement => {
  return (
    <InputStyle
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      accept={accept}
      onChange={_onChange}
      onKeyPress={_onKeyPress}
      onFocus={_onFocus}
      {...props} />
  )
}

Input.defaultProps = {
  _onChange: () => { },
  _onKeyPress: () => { },
  _onFocus: () => { },
  type: 'text',
  placeholder: '',
  width: '100%',
  height: '48px',
  bgColor: 'white',
  padding: '0 12px',
  radius: '14px',
  border: '1px solid white',
  margin: '20px auto'
}

export default Input;