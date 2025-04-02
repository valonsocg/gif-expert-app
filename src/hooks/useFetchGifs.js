import { useEffect } from "react";
import { useState } from "react";
import { getGifs } from "../utils/getGifs";

const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const newImages = async () => {
      const fetchedGifs = await getGifs(category);
      setImages(fetchedGifs);
      setIsLoading(false);
    };
    newImages();
  }, []);

  return { images, isLoading };
};

export default useFetchGifs;
