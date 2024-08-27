import {Fragment, useState} from 'react';
import loginService from '../../auth/login.ts';

export default function Login() {
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            await loginService(username, password);
            setIsLoading(false);
            alert('logado');
        } catch (error) {
            setIsLoading(false);
            alert('nao autorizado!');
        }
    };

    return (
        <Fragment>
            {isLoading && (
                <div className={'w-full h-full relative flex items-center justify-center'}>
                    <div className={'p-12 bg-[#f6f6f6] rounded-[6px] text-[10px] w-[80px] h-[50px] flex text-center'}>
                        Loading...
                    </div>
                </div>
            )}
            <div className={'w-full h-full items-center justify-center flex relative'}>
                <div
                    className={'w-[550px] h-[400px] bg-[#f6f6f6] text-center items-center justify-center flex flex-col rounded-[15px] mt-[100px] border border-[#EFEFEF] z-10'}>
                    <div className={'font-bold font-oxygen text-[40px] mb-12'}>
                        Login
                    </div>
                    <div className={'flex flex-col gap-12 items-center justify-center'}>
                        <div className={'flex gap-4'}>
                            <input
                                className={'rounded-lg p-2 border border-[#EFEFEF]'}
                                type="text"
                                placeholder={'Username'}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input
                                className={'rounded-lg p-2 border border-[#EFEFEF]'}
                                type="password"
                                placeholder={'Password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            className={'w-full p-3 font-bold text-center text-white rounded-[10px] bg-amber-500 shadow-lg text-[12px]'}
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}