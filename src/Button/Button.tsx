import React from 'react';

type PropsType = {
    content: string
    onClickHandler: () => void
    disabled: boolean
    className: string
}

function Button(props: PropsType) {
  return (
      <button
      onClick={ props.onClickHandler }
      disabled={props.disabled}
      className={props.className}
      >{props.content}</button>
  );
}

export default Button;
