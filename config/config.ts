import { defineConfig } from 'umi';
import proxy from './proxy';
import routes from './routes';

export default defineConfig({
  title: '指间礼物',
  hash: true,
  dva: {
    hmr: true,
  },
  ssr: {},
  routes,
  request: {
    dataField: '',
  },
  proxy,
});
