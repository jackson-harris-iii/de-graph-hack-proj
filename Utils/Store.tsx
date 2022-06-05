import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set, get) => ({
      publicAddress: null,
      nfts: [],

      updateNfts: async (nfts: []) => {
        set((state) => ({
          nfts: nfts,
        }));
      },
      updatePublicAddress: async (publicAddress: string) => {
        set((state) => ({
          publicAddress: publicAddress,
        }));
      },
    }),
    {
      name: 'dapp',
    }
  )
);

export default useStore;
