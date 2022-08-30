import React from 'react';
import { LoginProps } from './Login';
import { AppState } from './App';
interface RouteProps {
    appState: AppState;
    loginProps: LoginProps;
}
declare const RouterInfo: React.FC<RouteProps>;
export default RouterInfo;
