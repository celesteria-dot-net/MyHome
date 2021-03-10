/// <reference types="node" />

declare namespace NodeJS {
  export interface ProcessEnv {
    /**
     * MicroCMSにアクセスするのに必要なAPIキー。GETメソッドしか受け付けない。
     */
    readonly REACT_APP_CMS_KEY: string
  }
}