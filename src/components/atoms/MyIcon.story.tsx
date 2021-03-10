/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { object } from '@storybook/addon-knobs';

import MyIcon from './MyIcon';

export default { title: 'Atoms/MyIcon' };

export const initial: FC = () => <MyIcon />;
export const withCustomSize: FC = () => (
  <MyIcon size={object('size', 'medium')} />
);
