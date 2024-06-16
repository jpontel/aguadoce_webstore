import { configureStore } from '@reduxjs/toolkit'
import genericMessages from "./messages/genericMessages.ts";

export const store = configureStore({
    reducer: {
        messages: genericMessages,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch