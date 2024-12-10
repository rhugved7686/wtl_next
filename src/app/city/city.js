// pages/city/[city].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const CityPage = () => {
  const router = useRouter();
  const { city } = router.query;

  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    if (city) {
      // Fetch city-specific data from your API or mock data
      fetch(`/api/cities`)
        .then(response => response.json())
        .then(data => {
          // You can add additional city-specific logic if needed
          console.log(data);
          // For now, we are displaying all cities data, customize it for the selected city
          setCityData(data);
        });
    }
  }, [city]);

  if (!cityData) return <div>Loading...</div>;

  return (
    <div>
      <h1>{city} Information</h1>
      <pre>{JSON.stringify(cityData, null, 2)}</pre>
      {/* Render the city-specific data here */}
    </div>
  );
};

export default CityPage;
