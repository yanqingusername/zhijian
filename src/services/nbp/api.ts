import { request } from 'umi';
import nbp from '@/services/nbp';

export const getAdverts = (data: NBP.AdvertShowRequest) => {
  const requestData = nbp.request.createRequestData(data);
  return request<NBP.AdvertShow>('/api/nbp/advert/show', {
    method: 'POST',
    data: requestData,
  });
};

export const getCategories = (provider: string, data: NBP.CategoryRequest) => {
  const requestData = nbp.request.createRequestData(data);
  return request<NBP.CategoryResponse>(`/api/nbp/category/list/${provider}`, {
    method: 'POST',
    data: requestData,
  });
};

export const getArticles = (data: NBP.ArticleRequest) => {
  const requestData = nbp.request.createRequestData(data);
  return request<NBP.PagedResultDto<NBP.ArticleItem>>('/api/nbp/article/list', {
    method: 'POST',
    data: requestData,
  });
};

export const getArticleCount = (data: NBP.ArticleRequest) => {
  const requestData = nbp.request.createRequestData(data);
  return request<number>('/api/nbp/article/count', {
    method: 'POST',
    data: requestData,
  });
};

export const getArticleIds = (data: NBP.ArticleRequest) => {
  const requestData = nbp.request.createRequestData(data);
  return request<string[]>('/api/nbp/article/ids', {
    method: 'POST',
    data: requestData,
  });
};

export const getArticle = (id: string) => {
  const requestData = nbp.request.createRequestData({ id });
  return request<NBP.ArticleDto>(`/api/nbp/article/${id}`, {
    method: 'POST',
    data: requestData,
  });
};

export const viewArticle = (id: string) => {
  const requestData = nbp.request.createRequestData({ id });
  return request<number>(`/api/nbp/article/${id}/view`, {
    method: 'POST',
    data: requestData,
  });
};

export const getProducts = (data: NBP.ProductRequest) => {
  const requestData = nbp.request.createRequestData(data);
  return request<NBP.PagedResultDto<NBP.ProductItem>>('/api/nbp/product/list', {
    method: 'POST',
    data: requestData,
  });
};

export const getProduct = (id: string) => {
  const requestData = nbp.request.createRequestData({ id });
  return request<NBP.ProductDto>(`/api/nbp/product/${id}`, {
    method: 'POST',
    data: requestData,
  });
};

export const viewProduct = (id: string) => {
  const requestData = nbp.request.createRequestData({ id });
  return request<number>(`/api/nbp/product/${id}/view`, {
    method: 'POST',
    data: requestData,
  });
};
