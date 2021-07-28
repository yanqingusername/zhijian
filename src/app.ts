import nbp from '@/services/nbp';
import type { RequestConfig } from 'umi';

export const request: RequestConfig = {
    errorHandler: nbp.request.errorHandler,
    requestInterceptors: [nbp.request.headerInterceptor, nbp.request.prefixUrlInterceptor]
};