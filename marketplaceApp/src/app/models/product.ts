import { User } from "./user";

export interface product{
    id: number;
    authorId: number;
    author: User;
    title: string;
    description: string;
    price: number;
}