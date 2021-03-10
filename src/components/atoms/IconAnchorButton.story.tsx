/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { object, text } from '@storybook/addon-knobs';

import IconAnchor from './IconAnchorButton';

export default { title: 'Atoms/IconAnchorButton' };

export const initial: FC = () => (
  <IconAnchor
    iconName={object('icon name', 'twitter')}
    link={text('link target', '#')}
    ariaLabel={text('aria-label', 'twitterへ')}
  />
);
