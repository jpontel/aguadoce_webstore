import React, {useState, useEffect, useRef} from 'react';
import './style/style.css';

interface SearchBarProps {
    data: string[];
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchBar({data, isOpen, setIsOpen}: SearchBarProps) {
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState<string[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    console.log(query)
    console.log(filteredData)

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === ' ' && event.metaKey) {
                event.preventDefault();
                setIsOpen((prev) => !prev);
            } else if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [setIsOpen]);

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
            setFilteredData(data.filter(item => item.toLowerCase().includes(query.toLowerCase())));
        } else {
            setQuery('');
            setFilteredData([]);
        }
    }, [isOpen, query, data]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleItemClick = (item: string) => {
        alert(`You selected: ${item}`);
        setIsOpen(false);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'ArrowDown') {
            setSelectedIndex((prevIndex) => Math.min(prevIndex + 1, filteredData.length - 1));
        } else if (event.key === 'ArrowUp') {
            setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        } else if (event.key === 'Enter') {
            handleItemClick(filteredData[selectedIndex]);
        }
    };

    return isOpen ? (
        <div className="spotlight-container">
            <div className="overlay"></div>
            <div className="spotlight">
                <input
                    type="text"
                    className={`w-full outline-none p-[12px] lg:text-[16px] xs:text-[10px] input-background ${query && filteredData.length > 0 ? 'rounded-t-lg border-b-[1px]' : 'rounded-lg'}`}
                    placeholder="Pesquisar na loja..."
                    ref={inputRef}
                    value={query}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                {query && (
                    <ul>
                        {filteredData.map((item, index) => (
                            <li
                                key={item}
                                className={`flex gap-4 my-2 font-bold xs:text-[8px] lg:text-[16px] ${index === selectedIndex ? 'selected' : ''}`}
                                onClick={() => handleItemClick(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    ) : null;
}
