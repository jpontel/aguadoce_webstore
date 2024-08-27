import { useState, useEffect } from 'react';
import { isMobile as checkIsMobile } from '../utils/util.ts';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(checkIsMobile());

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(checkIsMobile());
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile;
};

export default useIsMobile;