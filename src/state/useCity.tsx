// src/state/useCity.ts
import { useState, useEffect } from 'react';

const useCity = (initialCity: string | null = null) => {
  const [city, setCity] = useState<string | null>(initialCity);

  useEffect(() => {
    // You can fetch or set the city here if necessary
    if (!city) {
      // Placeholder logic to handle the city state (e.g., from URL or API)
      setCity(initialCity);
    }
  }, [city, initialCity]);

  return { city, setCity };
};

export default useCity;
