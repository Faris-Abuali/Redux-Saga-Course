export * from "./cartAction";
export * from "./productAction";

export type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    url: string;
}