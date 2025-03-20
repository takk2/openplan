import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ImageDataType } from "./dto";

export const useGetImage = () => {
  return useQuery<ImageDataType, Error>({
    queryKey: ["https://picsum.photos/id/0/info"],
    queryFn: async () => {
      try {
        const { data } = await axios.get<ImageDataType>(
          "https://picsum.photos/id/0/info"
        );
        return data;
      } catch (error) {
        console.log("error", error);
        throw error;
      }
    },
  });
};
