import { Reducer } from 'umi';

export interface ArticleModelState {
  positions?: any[];
  strategies?: any[];
}

export interface ArticleModelType {
  namespace: 'article';
  state: ArticleModelState;
  reducers: {
    save: Reducer<ArticleModelState>;
  };
}

const ArticleModel: ArticleModelType = {
  namespace: 'article',
  state: {
    positions: undefined,
    strategies: undefined,
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};

export default ArticleModel;
