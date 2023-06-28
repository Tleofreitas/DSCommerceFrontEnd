import { OrderDTO, OrderItemDTO } from "../models/order";
import * as cartRepository from '../localStorage/cart-repository';
import { ProductDTO } from "../models/product";

export function saveCard(cart: OrderDTO) {
    cartRepository.save(cart);
}

export function getCart(): OrderDTO {
    return cartRepository.getCart();
}

export function addProduct(product: ProductDTO) {
    const cart = cartRepository.getCart();
    const item = cart.items.find(x => x.productId === product.id);
    if (!item) {
        const newItem = new OrderItemDTO(product.id, 1, product.name, product.price, product.imgUrl);
        cart.items.push(newItem);
        cartRepository.save(cart);
    }
}

export function clearCart() {
    cartRepository.clear();
}

export function increaseItem(productId: number) {
    // Buscar o carrinho
    const cart = cartRepository.getCart();
    // Buscar o Ítem
    const item = cart.items.find(x => x.productId === productId);
    // Se existir, efetuar a mudança
    if (item) {
        item.quantity++;
        cartRepository.save(cart);
    }
}

export function decreaseItem(productId: number) {
    // Buscar o carrinho
    const cart = cartRepository.getCart();
    // Buscar o Ítem
    const item = cart.items.find(x => x.productId === productId);
    // Se existir, efetuar a mudança
    if (item) {
        item.quantity--;
        // Testar quantidade = 0
        if (item.quantity < 1) {
            // Excluir Ítem do carrinho 
            cart.items = cart.items.filter(x => x.productId !== productId);
        }
        cartRepository.save(cart);
    }
}