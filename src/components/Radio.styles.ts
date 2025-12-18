import React from 'react';
import { RadioIcon, RadioCheckedIcon } from './RadioIcons';
import { tokens } from '../tokens';

export const radioStyles = {
  defaultProps: {
    icon: React.createElement(RadioIcon),
    checkedIcon: React.createElement(RadioCheckedIcon),
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      padding: 3,
      backgroundColor: tokens.colors.black,
      marginRight: 12,
      '&:hover': {
        backgroundColor: tokens.colors.black,
      },
      '&.Mui-checked': {
        backgroundColor: tokens.colors.warning,
      },
    },
  },
};

