/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import { Button, IconProps, SemanticShorthandItem } from 'semantic-ui-react';

type Props = {
  icon: SemanticShorthandItem<IconProps>;
  ariaLabel: string;
  onClick?: () => void;
};

const BackTo: FC<Props> = ({ icon, ariaLabel, onClick = () => undefined }) => (
  <Button
    circular
    icon={icon}
    size="big"
    color="grey"
    aria-label={ariaLabel}
    onClick={onClick}
    css={css`
      margin-bottom: 0.5rem !important;
      opacity: 0.7;
    `}
  />
);

export default BackTo;
