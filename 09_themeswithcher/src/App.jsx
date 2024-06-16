import { useEffect, useState } from "react";
import  {ThemeProvider} from './contexts/theme'
import Card from './componenets/Card'
import Themebtn from './componenets/Themebtn'
import "./App.css";

function App() {

  const [themeMode, setThemeMode] = useState("light");

  const lightTheme=()=>{
    setThemeMode("light");
  }
  const darkTheme=()=>{
    setThemeMode("dark");
  }

  useEffect(()=>{
document.querySelector("html").classList.remove("dark","light");

document.querySelector("html").classList.add(themeMode)


  },[themeMode])

  
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <Themebtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )

}

export default App;
