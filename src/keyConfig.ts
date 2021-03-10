type Config = {
  blogApiKey: string;
};

const keyConfig: Config = {
  blogApiKey: process.env.REACT_APP_CMS_KEY,
};

export default keyConfig;
