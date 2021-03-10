import { FC } from 'react';
import { Card } from 'semantic-ui-react';
import format from 'date-fns/format';

import { Post } from 'domains/microCms';

const PostList: FC<{ posts: Post[] }> = ({ posts }) => (
  <Card.Group>
    {posts.map((post) => (
      <Card key={post.id} href="#">
        <Card.Content>
          <Card.Header content={post.title} />
          <Card.Meta
            content={format(new Date(post.publishedAt), 'yyyy/MM/dd HH:mm')}
          />
          <Card.Description
            content={post.content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')}
          />
        </Card.Content>
      </Card>
    ))}
  </Card.Group>
);

export default PostList;
