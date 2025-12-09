import { useState, useEffect } from "react";

export default function Weather({ latitude, longitude }) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      try {
        // Fetch dati meteo
        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,precipitation,rain,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`
        );
        const weatherDataApi = await weatherResponse.json();

        // Fetch città con Reverse Geocoding
        const geoResponse = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );
        const geoData = await geoResponse.json();
        const city =
          geoData.address?.city ||
          geoData.address?.town ||
          geoData.address?.village ||
          "Località sconosciuta";

        setWeatherData({
          temp: Math.round(weatherDataApi.current.temperature_2m),
          humidity: weatherDataApi.current.relative_humidity_2m,
          windSpeed: Math.round(weatherDataApi.current.wind_speed_10m),
          feelsLike: Math.round(weatherDataApi.current.temperature_2m - 2),
          description:
            weatherDataApi.current.weather_code === 0
              ? "Cielo sereno"
              : "Nuvoloso",
          icon: weatherDataApi.current.weather_code === 0 ? "☀️" : "☁️",
          city: city,
        });
      } catch (error) {
        console.error("Errore nel fetch:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [latitude, longitude]);

  if (loading) return <div className="cardWeatther">Caricamento...</div>;
  if (!weatherData)
    return <div className="cardWeatther">Errore nel caricamento</div>;

  return (
    <div className="cardWeatther">
      <div className="weatherIcon">{weatherData.icon}</div>

      <div>
        <div className="weatherTemp">{weatherData.temp}°C</div>
        <div className="weatherDescription">{weatherData.description}</div>
        <div
          style={{
            fontSize: "0.8rem",
            color: "rgba(0, 0, 0, 1)",
          }}
        >
          📍 {weatherData.city}
        </div>
      </div>

      <div className="weatherDetails">
        <div className="weatherDetail">
          <label>Umidità:</label>
          <span className="value">{weatherData.humidity}%</span>
        </div>
        <div className="weatherDetail">
          <label>Vento:</label>
          <span className="value">{weatherData.windSpeed} km/h</span>
        </div>
        <div className="weatherDetail">
          <label>Sensazione:</label>
          <span className="value">{weatherData.feelsLike}°C</span>
        </div>
      </div>
    </div>
  );
}
