import React from 'react';

import wrapper from './wrapper';

import { TEXT_PRIMARY } from '../colors';

export default function Link ({ ...props }) {
  return (
    <Text { ...props } />
  );
}

const Text = wrapper({
  color: TEXT_PRIMARY,
  cursor: 'pointer',
});
