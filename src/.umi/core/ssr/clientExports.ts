// @ts-nocheck
import { IRouteComponentProps } from 'umi';

// only export isBrowser for user
export { isBrowser } from '/Users/user/zhjian20210728/zhijian/node_modules/@umijs/utils/lib/ssr.js';

interface IParams<Params> extends Pick<IRouteComponentProps<Params>, 'match'> {
  isServer: Boolean;
  [k: string]: any;
}

export type IGetInitialProps<
  T = any,
  Params extends {
    [K in keyof Params]?: string;
  } = {}
> = (params: IParams<Params>) => Promise<T>;
