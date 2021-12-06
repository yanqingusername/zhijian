import request from "./zhijianrequest";


export const getHomeBanner= val => request('/api.php/index?is_dev=1&code=HOME-BANNER&action=home', val, 'post');

export const companylists = val => request("/api.php/index?action=home&code=LINKS&is_dev=1", val, "get");

export const shoplists = val => request("/api.php/index", val, "post");

export const shopInfo = val => request("/api.php/index", val, "post");

export const shopColumn = val => request("/api.php/index", val, "post");

export const strategyList = val => request("/api.php/index", val, "post");

export const strategyInfo = val => request("/api.php/index", val, "post");

export const about = val => request("/api.php/index", val, "post");


