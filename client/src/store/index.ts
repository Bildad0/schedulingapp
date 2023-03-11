import { create } from 'zustand'
import { IUser } from '@/pages/api/types'

type Store = {
    authUser: IUser | null;
    requestLoading: boolean;
    setAuthUser: (user: IUser) => void;
    setRequestLoading: (loading: boolean) => void;
};

const useStore = create<Store>((set) => ({
    authUser: null,
    requestLoading: false,
    setAuthUser: (user: IUser) => set((state) => ({...state, authUser: user })),
    setRequestLoading: (loading: boolean) => set((state) => ({...state, requestLoading: loading })),
}));

export default useStore;