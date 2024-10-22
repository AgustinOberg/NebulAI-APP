import type { StateCreator } from 'zustand';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface UpdatesState {
  // Properties
  updatesAvailables?: boolean;
  id?: string;
  // Methods
  setUpdates: (needUpdate: boolean, id?: string) => void;
}

const storeApi: StateCreator<UpdatesState, [['zustand/immer', never]]> = (
  set,
) => ({
  // Properties
  updatesAvailables: undefined,
  id: undefined,
  // Methods
  setUpdates: (needUpdate, id) => {
    set((state) => {
      state.updatesAvailables = needUpdate;
      state.id = id;
    });
  },
});

export const useUpdatesStore = create<UpdatesState>()(immer(storeApi));
