
export interface ILogin {
    email: string;
    password: string;
}

export interface IAuth {
    token: string;
    isAuthenticated: boolean;
}