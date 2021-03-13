import { FC } from 'react';
import { Card } from 'semantic-ui-react';

import { Post } from 'domains/microCms';
import { formatDateTime } from 'utils/date';

const PostList: FC<{ posts: Post[] }> = ({ posts }) => (
  <Card.Group>
    {posts.map((post) => (
      <Card key={post.id} href="#">
        <Card.Content>
          <Card.Header content={post.title} />
          <Card.Meta content={formatDateTime(post.publishedAt)} />
          <Card.Description
            content={post.content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')}
          />
        </Card.Content>
      </Card>
    ))}
  </Card.Group>
);

export default PostList;
