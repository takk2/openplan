import { useEffect } from "react";
import { ImageStore, useImageStore } from "./useImageStore";
import { useGetImage } from "../api/query/result";
import { ImageDataType } from "../api/query/result/dto";

interface UseImageWithStoreReturn {
  imageData: ImageDataType | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<{
    data: ImageDataType | undefined;
    error: Error | null;
  }>;
}

export const useImageWithStore = (): UseImageWithStoreReturn => {
  const { data, isLoading, error, refetch } = useGetImage();
  const imageData = useImageStore((state: ImageStore) => state.imageData);
  const setImageData = useImageStore((state: ImageStore) => state.setImageData);

  useEffect(() => {
    if (data) {
      setImageData(data as ImageDataType);
    }
  }, [data, setImageData]);

  const effectiveLoading = isLoading && !imageData;

  return {
    imageData: (imageData || data || null) as ImageDataType | null,
    isLoading: effectiveLoading,
    error: error || null,
    refetch,
  };
};
