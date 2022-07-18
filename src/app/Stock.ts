export interface Stock{
    id: number
    quantity: number
    unit_price: number
    product: Product | undefined
    store: Store | undefined
}

export interface Product{
    id: number;
    name: string;
    image: string;
    unit_price: number;
    description: string;
}

export interface Store{
    id: number,
}
