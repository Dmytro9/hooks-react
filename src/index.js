import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UseStateComponent from './useState';
import UseEffectComponent from './useEffect';
import UserefComponent from './useRef';
import UseLayoutComponent from './useLayoutEffect';
import UseCallbackComponent from './useCallback';
import UseMemoComponent from './useMemo';

ReactDOM.render(
  <>
    <UseStateComponent />
    <UseEffectComponent />
    <UserefComponent />
    <UseLayoutComponent />
    <UseCallbackComponent />
    <UseMemoComponent />
  </>,
  document.getElementById('root')
);
