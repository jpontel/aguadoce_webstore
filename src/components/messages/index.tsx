import {removeMessage} from './../../store/messages/genericMessages';
import {GenericMessage} from './../../store/messages/genericMessages';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from "../../store/store.ts";
import './style/style.css';

const Messages = () => {
    const dispatch = useDispatch();
    const messages = useSelector((state: RootState) => state.messages.messages);

    const handleClose = (id: number) => {
        dispatch(removeMessage(id));
    };

    return (
        <div className={'w-full h-full absolute z-1000 items-center justify-center flex'}>
            {messages.map((message: GenericMessage) => (
                <div
                    key={message.id}
                    className="w-[300px] h-[100px] border border-black rounded-lg bg-white text-lg items-center justify-center flex flex-col message-style"
                >
                    <p className={'text-bold font-oxygen'}>
                        {message.message}
                    </p>
                    <button
                        className={'bg-amber-600 rounded-lg px-2 text-[12px] mt-2 font-oxygen'}
                        onClick={() => handleClose(message.id)}
                    >
                        Fechar
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Messages;
