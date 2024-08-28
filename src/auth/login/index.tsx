import loginService from '../../auth/login.ts';
import { useNavigate } from "react-router-dom";
import { Fragment, useState } from 'react';

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            const status = await loginService(username, password);
            setIsLoading(false);
            if (status === 200) {
                console.log('Logado com sucesso!');
                const role = localStorage.getItem('role');
                if (role === 'admin') {
                    navigate('/admin');
                } else {
                    navigate('/profile');
                }
            } else {
                console.log('nao autorizado!');
            }
        } catch (error) {
            setIsLoading(false);
            alert('nao autorizado!');
        }
    };

    return (
        <Fragment>
            {isLoading && (
                <div className={'w-full h-full fixed top-0 left-0 flex items-center justify-center z-50'}>
                    <div className={'w-[90px] h-[80px] rounded-2xl shadow-2xl flex items-center justify-center bg-white'}>
                        <div className="button-check"></div>
                    </div>
                </div>
            )}
            <div className={'w-full h-full items-center justify-center flex relative mb-24'}>
                <div
                    className={'lg:w-[550px] lg:h-[400px] xs:w-[290px] xs:h-[350px] bg-[#f6f6f6] text-center items-center justify-center flex flex-col rounded-[15px] mt-[100px] border border-[#EFEFEF] z-10'}>
                    <div className={'font-bold font-oxygen lg:text-[40px] xs:text-[30px] mb-12'}>
                        Login
                    </div>
                    <div className={'flex flex-col gap-12 items-center justify-center'}>
                        <div className={'lg:inline-flex xs:flex flex-col gap-4'}>
                            <input
                                className={'rounded-lg lg:p-2 xs:p-1 lg:text-[17px] xs:text-[13px] border border-[#EFEFEF]'}
                                type="text"
                                placeholder={'Username'}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input
                                className={'rounded-lg lg:p-2 xs:p-1 lg:text-[17px] xs:text-[13px] border border-[#EFEFEF]'}
                                type="password"
                                placeholder={'Password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            className={'xs:w-1/3 lg:w-full lg:p-3 xs:p-2 font-bold text-center text-white rounded-[10px] bg-amber-500 shadow-lg text-[12px]'}
                            onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}