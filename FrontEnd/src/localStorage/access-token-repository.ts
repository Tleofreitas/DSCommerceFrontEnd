import { TOKEN_KEY } from "../utils/system";

// Salvar Token no local storage
export function save (token: string) {
    localStorage.setItem(TOKEN_KEY, token);
}

// Pegar Token no local storage
export function get() : string | null {
    return localStorage.getItem(TOKEN_KEY);
}

// Remover Token do local storage
export function remove() {
    localStorage.removeItem(TOKEN_KEY);
}