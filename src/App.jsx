import Header from "./Header/Header"
import WeatherProvider from "./Provider/WeatherProvider"
import WeatherBoard from "./WeatherBoard/WeatherBoard"

function App() {
  return (
    <WeatherProvider>
    <div className="grid place-items-center h-screen">
    <Header />
    <main>
    <WeatherBoard />
    </main>
    </div>
    </WeatherProvider>
  )
}

export default App
