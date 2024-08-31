import GenericProductDetail from "../../../../components/generic-product-detail";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { addProduct, ProductData } from "../service/products.service.ts";

export default function AddProduct() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        stockQuantity: '',
        category: '',
        gender: '',
        size: '',
        color: '',
        parcela:'',
        price: '',
        imageUrl: '',
        brand_id: 1,
        category_id: 1,
    });

    console.log(formData)

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const productData: ProductData = {
            name: formData.name,
            description: formData.description,
            stock: parseInt(formData.stockQuantity),
            brand_id: formData.brand_id,
            category_id: formData.category.id,
            gender: formData.gender,
            variants: [
                {
                    size: formData.size,
                    color: formData.color,
                    price: parseFloat(formData.price),
                    stock_quantity: parseInt(formData.stockQuantity),
                    image_url: formData.imageUrl
                }
            ]
        };

        try {
            const response = await addProduct(productData);
            if (response.ok) {
                alert('adicionado com sucesso');
                navigate('/admin');
            } else {
                console.error('Failed to add product');
                alert('Erro ao adicionar produto');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className={'w-full h-full'}>
            <div>
                <GenericProductDetail isAdd={true} handleChange={handleChange} handleSubmit={handleSubmit} data={formData} />
            </div>
        </div>
    );
}