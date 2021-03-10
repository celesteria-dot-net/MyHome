import React, { FC } from 'react';
import { object, text } from '@storybook/addon-knobs';

import Loading from './Loading';

export default { title: 'Molecules/Loading' };

export const initial: FC = () => <Loading />;
export const withCustomText: FC = () => (
  <Loading message={text('message', 'Loading now...')} />
);
export const withCustomSize: FC = () => (
  <Loading size={object('size', 'medium')} />
);
