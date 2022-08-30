import React, { Component } from "react";
interface SignupState {
    email: string;
    password: string;
    test_password: string;
    username: string;
    success: boolean;
    information: string;
}
export default class Signup extends Component<any, SignupState> {
    constructor(props: any);
    setEmail(text: string): void;
    setPassword(text: string): void;
    setTestPassword(text: string): void;
    setUsername(text: string): void;
    onClickSignup(): Promise<void>;
    render(): React.ReactNode;
}
export {};
