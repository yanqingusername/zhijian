import nbp from '@/services/nbp';
import { Effect, Reducer, Subscription } from 'umi';

export interface GlobalModelState {
  provider?: string;
  logos?: string[];
  mpIcon?: string;
  miniIcon?: string;
  categories?: any[];
  currentCategory?: string;
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  reducers: {
    save: Reducer<GlobalModelState>;
  };
  effects: {
    getLogos: Effect;
    getMiniIcon: Effect;
    getMPIcon: Effect;
    getCategories: Effect;
  };
  subscriptions: { setup: Subscription };
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',
  state: {
    provider: 'P',
    logos: undefined,
    mpIcon: undefined,
    miniIcon: undefined,
    categories: undefined,
    currentCategory: undefined,
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
  effects: {
    *getLogos({ payload }, { call, put }) {
      try {
        const { items } = yield call(nbp.api.getAdverts, payload);
        const logos = items.map((i: any) => nbp.util.mediaUrl(i.source));
        yield put({
          type: 'save',
          payload: {
            logos,
          },
        });
        return logos;
      } catch (error) {
        console.log(error);
      }
    },
    *getMiniIcon({ payload }, { call, put }) {
      const { space } = yield call(nbp.api.getAdverts, payload);
      if (space) {
        const miniIcon = nbp.util.mediaUrl(space.source);
        yield put({
          type: 'save',
          payload: {
            miniIcon,
          },
        });
        return miniIcon;
      }
    },
    *getMPIcon({ payload }, { call, put }) {
      const { space } = yield call(nbp.api.getAdverts, payload);
      if (space) {
        const mpIcon = nbp.util.mediaUrl(space.source);
        yield put({
          type: 'save',
          payload: {
            mpIcon,
          },
        });
        return mpIcon;
      }
    },
    *getCategories({ payload }, { call, put }) {},
  },
  subscriptions: {
    setup({ dispatch }) {},
  },
};

export default GlobalModel;
