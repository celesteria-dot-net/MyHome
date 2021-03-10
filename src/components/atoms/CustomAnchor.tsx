import { FC } from 'react';
import { List } from 'semantic-ui-react';

export type AnchorType = {
  content: string;
  url: string;
};

const CustomAnchorListItem: FC<AnchorType> = ({ content, url }) => (
  <List.Item
    href={url}
    content={content}
    target="_blank"
    rel="noreferrer noopener"
  />
);

export default CustomAnchorListItem;
