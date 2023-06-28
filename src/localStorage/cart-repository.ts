import { OrderDTO } from "../models/order";

export function save(cart: OrderDTO) {
    const str = JSON.stringify(cart);
    localStorage.setItem("com.devsuperior,dscommmerce/Cart", str);
}

export function getCart() : OrderDTO {
    const str = localStorage.getItem("com.devsuperior,dscommmerce/Cart") || '{"items"=[]}';
    return JSON.parse(str);
}