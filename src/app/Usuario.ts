export interface Pessoa{
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
