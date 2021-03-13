import { FC } from 'react';
import { Card } from 'semantic-ui-react';

import { Post } from 'domains/microCms';
import { formatDateTime } from 'utils/date';

/**
 * HTMLタグを取り除く正規表現
 * https://qiita.com/miiitaka/items/793555b4ccb0259a4cb8
 */
const reg = /<("[^"]*"|'[^']*'|[^'">])*>/g;

const PostList: FC<{ posts: Post[] }> = ({ posts }) => (
  <Card.Group>
    {posts.map((post) => (
      <Card key={post.id} href="#">
        <Card.Content>
          <Card.Header content={post.title} />
          <Card.Meta content={formatDateTime(post.publishedAt)} />
          <Card.Description content={post.content.replace(reg, '')} />
        </Card.Content>
      </Card>
    ))}
  </Card.Group>
);

export default PostList;
