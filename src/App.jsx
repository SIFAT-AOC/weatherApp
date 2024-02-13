import Header from "./Header/Header"
import WeatherBoard from "./WeatherBoard/WeatherBoard"

function App() {
  return (
    <div className="grid place-items-center h-screen">
    <Header />
    <main>
    <WeatherBoard />
    </main>
    </div>
  )
}

export default App
