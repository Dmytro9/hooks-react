import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UseStateComponent from './useState';
import UseEffectComponent from './useEffect';
import UserefComponent from './useRef';
import UseLayoutComponent from './useLayoutEffect';
import UseCallbackComponent from './useCallback';
import UseMemoComponent from './useMemo';
import UseReducerComponent from './useReducer';
import UseContextComponent from './useContext';

ReactDOM.render(
  <>
    <UseStateComponent />
    <UseEffectComponent />
    <UserefComponent />
    <UseLayoutComponent />
    <UseCallbackComponent />
    <UseMemoComponent />
    <UseReducerComponent />
    <UseContextComponent />
  </>,
  document.getElementById('root')
);
