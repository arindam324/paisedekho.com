import { useState, useEffect } from "react";

interface LottieData {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: any[];
  layers: any[];
}

const useLottieAnimation = (url: string): LottieData | null => {
  const [animationData, setAnimationData] = useState<LottieData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setAnimationData(json);
      } catch (error) {
        console.error("Failed to fetch Lottie animation data:", error);
      }
    };
    fetchData();
  }, [url]);

  return animationData;
};

export default useLottieAnimation;
