import React from 'react';
import { styles } from './RadioIcons.styles';

export const RadioIcon = React.forwardRef<HTMLSpanElement>((props, ref) =>
  React.createElement('span', {
    ref,
    ...props,
    style: styles.radioIcon,
  })
);

export const RadioCheckedIcon = React.forwardRef<HTMLSpanElement>((props, ref) =>
  React.createElement('span', {
    ref,
    ...props,
    style: styles.radioCheckedIcon,
    children: React.createElement('span', {
      style: styles.radioCheckedIconDot,
    }),
  })
);

