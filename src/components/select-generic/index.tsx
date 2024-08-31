import React from "react";

interface SelectGenericProps {
    id: string;
    label: string;
    options: string[];
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    name: string;
}

export default function SelectGeneric({ label, options, id, value, onChange, name }: SelectGenericProps) {
    return (
        <div className={'w-full gap-3 mt-3 flex'}>
            <label htmlFor={id} className="sr-only">{label}</label>
            <select
                id={id}
                value={value}
                onChange={onChange}
                className={'w-full p-2 border rounded border-[#f6f6f6] bg-white'}
                aria-placeholder={label}
                name={name}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}
