/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { text } from '@storybook/addon-knobs';

import LargeTitle from './LargeTitle';

export default { title: 'Molecules/LargeTitle' };

export const initial: FC = () => <LargeTitle mainTitle="Storybook" />;
export const withTitles: FC = () => (
  <LargeTitle
    mainTitle={text('main title', 'これはメインタイトルです')}
    subTitle={text('sub title', 'これはサブタイトルです')}
  />
);
