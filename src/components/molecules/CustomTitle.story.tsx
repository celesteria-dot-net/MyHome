/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { text } from '@storybook/addon-knobs';

import CustomTitle from './CustomTitle';

export default { title: 'Molecules/CustomTitle' };

export const initial: FC = () => <CustomTitle mainTitle="Storybook" />;
export const withTitles: FC = () => (
  <CustomTitle
    mainTitle={text('main title', 'これはメインタイトルです')}
    subTitle={text('sub title', 'これはサブタイトルです')}
  />
);
