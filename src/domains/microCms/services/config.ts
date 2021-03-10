import keyConfig from 'keyConfig';
import { NormalizedOptions, Options } from 'ky';

/**
 * microCMSにアクセスするためのkyのオプション設定
 */
const DEFAULT_API_OPTIONS: Options = {
  prefixUrl: 'https://celesteria.microcms.io/api/v1',
  timeout: 7000,
  retry: 0,
  headers: {
    'X-API-KEY': keyConfig.blogApiKey,
  },
  hooks: {
    afterResponse: [
      async (
        _request: Request,
        _options: NormalizedOptions,
        response: Response,
      ): Promise<Response> => {
        const body = new Blob(
          [JSON.stringify(await response.json(), null, 2)],
          { type: 'application/json' },
        );
        const { headers, status, statusText } = response;
        const init = { headers, status, statusText };

        return new Response(body, init);
      },
    ],
  },
};

export default DEFAULT_API_OPTIONS;
