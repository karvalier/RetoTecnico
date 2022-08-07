export interface Product {
    id?: number;
    name: string;
    price: number;
    amount: number;
}

export interface Cart {
    products: Product[]
}