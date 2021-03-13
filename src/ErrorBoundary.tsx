import { ErrorInfo, PureComponent, ReactNode } from 'react';
import ky from 'ky';
import { Message } from 'semantic-ui-react';

type StatusMessages = { [status: number]: string };
type Prop = { statusMessages?: StatusMessages };
type State = { hasError: boolean; error: Error | null };

const DEFAULT_MESSAGES: StatusMessages = {
  0: 'サーバエラーです',
  401: '認証エラーです',
};

/**
 * API通信などに用いるもので、kyのHTTPステータスコードに応じたエラーメッセージを表示してくれる
 */
class ErrorBoundary extends PureComponent<Prop, State> {
  constructor(prop: Prop) {
    super(prop);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError = (error: Error): State => ({
    hasError: true,
    error,
  });

  componentDidCatch = (error: Error, info: ErrorInfo): void => {
    console.error(error, info); // eslint-disable-line no-console
  };

  render = (): ReactNode => {
    const { children, statusMessages = {} } = this.props;
    const { hasError, error } = this.state;
    const messages = { ...DEFAULT_MESSAGES, ...statusMessages };

    if (hasError) {
      const statusCode = (error as ky.HTTPError)?.response?.status;

      if (statusCode && Object.keys(messages).includes(String(statusCode))) {
        return <Message warning content={messages[statusCode]} />;
      }

      return <Message error content={messages[0]} />;
    }

    return children;
  };
}

export default ErrorBoundary;
