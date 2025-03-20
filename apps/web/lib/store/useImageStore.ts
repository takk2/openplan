import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ImageDataType } from "../api/query/result/dto";

export interface ImageStore {
  imageData: ImageDataType | null;
  setImageData: (data: ImageDataType) => void;
}

export const useImageStore = create<ImageStore>()(
  persist(
    (set) => ({
      imageData: null,
      setImageData: (data: ImageDataType) => set({ imageData: data }),
    }),
    {
      name: "image-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
