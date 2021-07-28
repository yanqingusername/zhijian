import { notification } from 'antd';
import CryptoJs from 'crypto-js';
import type { RequestOptionsInit, ResponseError } from 'umi-request';

const APIKey = 'e2ec065d6da8ebf3';
const APISecret = 'AD0846792639A9BF67A33ADD46F66631';
const APIHost = 'https://pubapp.qinchi.lililai.com';
const Tenant = 'ccaa1968-8dab-10c5-5971-39fd07bdc381';
const ResourceHost = '/api/nbp/file/upload';

const getNonceStr = (len?: number) => {
  len = len || 16;
  const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  const maxPos = $chars.length;
  let nonceStr = '';
  for (let i = 0; i < len; i++) {
    nonceStr += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return nonceStr;
};

export const createRequestData = (data: any) => {
  const noncestr = getNonceStr();
  const timestamp = Math.floor(new Date().getTime() / 1000);
  const query = JSON.stringify(data);
  const sig = CryptoJs.MD5(
    `${query}${timestamp}${noncestr}${APISecret}`,
  ).toString();
  return {
    key: APIKey,
    timestamp,
    noncestr,
    query,
    sig,
  };
};

export const mediaUrl = (blob: string) => {
  if (blob) {
    let path = `${APIHost}${ResourceHost}/${blob}?__tenant=${Tenant}`;
    return path;
  }
  return undefined;
};

const codeMessage: { [key: number]: string } = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  405: '请求方法不被允许。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

export const errorHandler = (error: ResponseError) => {
  const { response, data } = error;
  if (data) {
    notification.error({
      message: '请求异常',
      description: data.error.message,
    });
  } else if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  }

  if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  throw error;
};

export const headerInterceptor = (url: string, options: RequestOptionsInit) => {
  let headers = {
    ...options.headers,
    __tenant: Tenant,
  };
  options = {
    ...options,
    headers,
  };
  return {
    url: `${url}`,
    options: { ...options, interceptors: true },
  };
};

export const prefixUrlInterceptor = (
  url: string,
  options: RequestOptionsInit,
) => {
  url = `${APIHost}${url}`;
  return {
    url: `${url}`,
    options: { ...options, interceptors: true },
  };
};
