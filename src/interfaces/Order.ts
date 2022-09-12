import Coffee from "./Coffee";

export default interface Order {
  items: Coffee[]
  address: {
    street: string
    number: string
    district: string
    city: string
    uf: string
  }
  payment: string
}
