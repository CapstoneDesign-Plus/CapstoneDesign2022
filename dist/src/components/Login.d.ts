import { Component, ReactNode } from "react";
export interface LoginProps {
    login(email: string, password: string): Promise<boolean>;
}
interface LoginState {
    email: string;
    password: string;
    success: boolean;
}
export default class Login extends Component<LoginProps, LoginState> {
    constructor(props: LoginProps);
    setPassword(text: string): void;
    setEmail(text: string): void;
    login(): Promise<void>;
    render(): ReactNode;
}
export {};
