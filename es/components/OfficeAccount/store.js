import { createContext } from 'react'; // import { IMenuItem } from '../../typings/menu';

export var storeStateDefault = {
  name: '',
  menu: []
};
var storeStateCtx = /*#__PURE__*/createContext(storeStateDefault);
var storeDispatcherCtx = /*#__PURE__*/createContext({});
export { storeStateCtx, storeDispatcherCtx };