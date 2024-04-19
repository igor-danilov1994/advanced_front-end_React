export interface LoginSchema {
    username: string;
    password: string;
    id: string;
    isLoading: boolean;
    error?: string
}
