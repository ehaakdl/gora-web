export interface LoginRequest{
    email:string,
    password:string
}
export const defautlLoginRequest:LoginRequest = {
  email: '',
  password: '',
};
export interface SignupRequest{
    email:string,
    password:string
}
