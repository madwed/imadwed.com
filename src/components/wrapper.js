import React from 'react';

export default function wrapper(style, type = 'div') {
  return ({
    children,
    onBlur,
    onClick,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    disabled,
    ...overrides
  }) => {
    const props = {
      style: { ...style, ...overrides },
      onBlur,
      onClick,
      onFocus,
      onMouseEnter,
      onMouseLeave,
      disabled,
    };

    return React.createElement(
      type,
      props,
      children
    );
  }
}
