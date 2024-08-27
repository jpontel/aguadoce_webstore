interface SelectGenericProps {
    id: string;
    label: string;
    options: string[];
}

export default function SelectGeneric({label, options, id}: SelectGenericProps) {
    return(
        <div className={'w-full gap-3 mt-3 flex'}>
            <select id={id} className={'w-full p-2 border rounded border-[#f6f6f6]'} aria-placeholder={label}>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}