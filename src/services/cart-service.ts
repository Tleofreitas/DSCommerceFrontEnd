import { OrderDTO } from "../models/order";
import * as cartRepository from '../localStorage/cart-repository';

export function saveCard(cart: OrderDTO) {
    cartRepository.save(cart);
}

export function getCart() : OrderDTO {
    return cartRepository.getCart();
}