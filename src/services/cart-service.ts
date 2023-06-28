import { OrderDTO, OrderItemDTO } from "../models/order";
import * as cartRepository from '../localStorage/cart-repository';
import { ProductDTO } from "../models/product";

export function saveCard(cart: OrderDTO) {
    cartRepository.save(cart);
}

export function getCart() : OrderDTO {
    return cartRepository.getCart();
}

export function addProduct(product: ProductDTO) {
    const cart = cartRepository.getCart();
    const item = cart.items.find(x => x.productId === product.id);
    if(!item) {
        const newItem = new OrderItemDTO(product.id, 1, product.name, product.price, product.imgUrl);
        cart.items.push(newItem);
        cartRepository.save(cart);
    }
}

export function clearCart() {
    cartRepository.clear();
}