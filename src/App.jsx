import Header from "./Header/Header";
import { useWeather } from "./Hooks";
import WeatherBoard from "./WeatherBoard/WeatherBoard";

function App() {
  const { weatherData, loading, error } = useWeather();
  console.log(weatherData, loading, error);
  return (
    <div className="grid place-items-center h-screen">
      <Header />
      <main>
        <WeatherBoard />
      </main>
    </div>
  );
}

export default App;
