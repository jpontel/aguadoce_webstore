export interface ProductVariant {
    size: string;
    color: string;
    price: number;
    stock_quantity: number;
    image_url?: string;
}

export interface ProductData {
    id?: number;
    name: string;
    description?: string;
    stock: number;
    brand_id: number;
    category_id: number;
    gender: string;
    variants: ProductVariant[];
}

const API_URL = 'http://127.0.0.1:5000/product';

export async function addProduct(productData: ProductData): Promise<Response> {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            action: 'add',
            ...productData,
        }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to add product');
    }

    return response;
}

export async function editProduct(productData: ProductData): Promise<Response> {
    const response = await fetch(API_URL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            action: 'edit',
            ...productData,
        }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to edit product');
    }

    return response;
}

export async function deleteProduct(productId: number): Promise<Response> {
    const response = await fetch(API_URL, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            action: 'delete',
            id: productId,
        }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete product');
    }

    return response;
}

