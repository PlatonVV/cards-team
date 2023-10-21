import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { store } from '@/store/store.ts'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
