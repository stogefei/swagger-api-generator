import API from './core/index';
// const baseUrl: string = process.env.NODE_ENV === 'development'? '/api': 'http://159.75.221.84:8080/api';
const localUrl: any = (window as any).localStorage.getItem('baseUrl');
const baseUrl: string = localUrl ? localUrl + `/api` : '/api';
//console.log(process.env.NODE_ENV, 'process.env.NODE_ENV')
function createInstance() {
  const instance = new API(baseUrl);
  return instance;
}

const api = createInstance();
export default api;
