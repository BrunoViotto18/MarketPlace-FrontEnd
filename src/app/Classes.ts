export interface Usuario{
    id: Number,
    name: string,
    dateOfBirth: Date,
    document: string,
    email: string,
    phone: string,
    login: string,
    passwd: string,
    address: Address | undefined
}

export interface Address{
    street: string,
    city: string,
    state: string,
    country: string,
    postal_code: string
}

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
    name: string,
    cnpj: string,
    owner: Usuario | null
    purchases : Array<Purchase> | null
}

export interface Purchase {
    id: number,
    clientId : number
    storeId : number
    data_purchase : Date,
    purchase_value: number,
    payment_type : number,
    purchase_status : number,
    confirmation_number : number,
    number_nf : number,
    product : Product
}