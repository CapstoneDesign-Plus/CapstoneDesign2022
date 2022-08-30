import React from 'react';
import { LoginProps } from './Login';
import { AppState } from './App';
interface RouteBundleProps {
    appState: AppState;
    loginProps: LoginProps;
}
declare const RouteBundle: React.FC<RouteBundleProps>;
export default RouteBundle;
