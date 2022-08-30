import { UserDTO } from "@/types/dto";
import React, { Component } from "react";
interface ProfileProps {
    authenticated: boolean;
}
export default class Profile extends Component<ProfileProps, UserDTO> {
    constructor(props: ProfileProps);
    componentDidMount(): Promise<void>;
    render(): React.ReactNode;
}
export {};
