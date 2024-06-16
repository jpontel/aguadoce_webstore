import type { PayloadAction } from '@reduxjs/toolkit';
import {createSlice} from "@reduxjs/toolkit";

export interface GenericMessage {
    id:number,
    message:string
}

type GenericMessagesState = {
    messages: GenericMessage[]
};

const initialState: GenericMessagesState = {
    messages: []
};

const genericMessagesSlice = createSlice({
    name: 'genericMessages',
    initialState,
    reducers: {
        addMessage(state, action: PayloadAction<GenericMessage>) {
            state.messages.push(action.payload)
        },
        removeMessage(state, action: PayloadAction<number>) {
            state.messages = state.messages.filter(message => message.id !== action.payload)
        }
    }
})

export const { addMessage, removeMessage } = genericMessagesSlice.actions;
export default genericMessagesSlice.reducer;
