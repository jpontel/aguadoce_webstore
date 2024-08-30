import { useState } from "react";
import { motion } from "framer-motion";
import {useNavigate} from "react-router-dom";

interface AdminMenuOptionProps {
    icon: string;
    title: string;
    details: string;
    route: string;
    actions: Array<{ label: string, type: string, route: string }>;
}

export default function AdminMenuOption({ icon, title, details, actions }: AdminMenuOptionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleActionClick = (route: string) => {
        navigate(route);
    };

    return (
        <div
            className="cursor-pointer xs:w-full xs:h-[200px] lg:w-[300px] lg:h-[180px] p-4 bg-white rounded-[20px] border border-[#f6f6f6] transition-shadow duration-300 z-20 relative"
            onClick={() => setIsOpen(!isOpen)}
            style={{ boxShadow: '0px 0px 3px 0px rgba(255, 255, 255, 0.10), 0px 8px 40px 0px rgba(0, 0, 0, 0.25), 0px 0px 3px 0px rgba(0, 0, 0, 0.55)' }}
        >
            <div className="w-full h-full flex items-center">
                <button className="w-[45px] h-[45px] flex rounded-full border-2 border-amber-500 items-center justify-center bg-amber-500">
                    <img alt="Icone" src={icon} className="w-[15px]" />
                </button>
                <div className="ml-4">
                    <div className="text-[18px] font-montserrat font-bold">
                        {title}
                    </div>
                    <div className="text-[16px] font-oxygen">
                        {details}
                    </div>
                </div>
            </div>
            {isOpen && (
                <motion.div
                    className="bg-white p-4 absolute top-8 left-4 w-[150px] border font-oxygen text-zinc-800 border-[#f6f6f6] h-auto rounded-[10px] shadow-lg z-30"
                    style={{ opacity: 0.75 }}
                    initial={{ scale: 0.8, opacity: 0, y: 10 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    {actions.map((action, idx) => (
                        <button
                            key={idx}
                            className={`w-full text-left p-2 ${getButtonClass(action.type)} mb-2 rounded-lg`}
                            onClick={() => handleActionClick(action.route)}
                        >
                            {action.label}
                        </button>
                    ))}
                </motion.div>
            )}
        </div>
    );
}

const getButtonClass = (type: string) => {
    switch (type) {
        case 'add':
            return 'bg-green-200';
        case 'edit':
            return 'bg-yellow-200';
        case 'delete':
            return 'bg-red-200';
        default:
            return '';
    }
};
