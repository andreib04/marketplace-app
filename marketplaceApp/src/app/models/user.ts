import { product } from "./product";

export interface User{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: number;
    products: product[];
}