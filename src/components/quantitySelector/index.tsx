import React, { useState } from 'react';

interface QuantitySelectorProps {
    initialQuantity?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ initialQuantity = 1 }) => {
    const [quantity, setQuantity] = useState<number>(initialQuantity);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className="flex items-center">
            <button
                onClick={handleDecrement}
                disabled={quantity <= 1}
                className="w-8 h-8 text-xl bg-gray-200 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                -
            </button>
            <input
                type="number"
                value={quantity}
                readOnly
                className="w-12 h-8 text-center border border-gray-300 mx-2"
            />
            <button
                onClick={handleIncrement}
                className="w-8 h-8 text-xl bg-gray-200 border border-gray-300"
            >
                +
            </button>
        </div>
    );
};

export default QuantitySelector;
