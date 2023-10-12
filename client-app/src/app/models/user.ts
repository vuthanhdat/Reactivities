export interface User {
    userName: string;
    displayName: string;
    token: string;
    image?: string;
}

export interface UserFormValuse {
    email: string;
    displayName?: string;
    password: string;
    userName?: string;
}