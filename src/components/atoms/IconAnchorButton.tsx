import { FC } from 'react';
import { Button, SemanticICONS } from 'semantic-ui-react';

type Props = {
  iconName: SemanticICONS;
  link: string;
  ariaLabel?: string;
};

/**
 * 外部サイトへのアイコン付きリンクボタン
 */
const IconAnchor: FC<Props> = ({
  iconName,
  link,
  ariaLabel = `${iconName}を開く`,
}) => (
  <Button
    circular
    color="grey"
    icon={iconName}
    as="a"
    href={link}
    aria-label={ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
  />
);

export default IconAnchor;
