
export interface ILogin {
    identity: string;
    password: string;
}

export interface IAuth {
    token: string;
    isAuthenticated: boolean;
}