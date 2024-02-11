// import Colours from "./components/Colours"
// import Customization from "./components/Customization"
// import Flex from "./components/Flex"
// import Grid from "./components/Grid"
// import Layouts from "./components/Layouts"
// import Spacesandsizes from "./components/Spacesandsizes"
// import Typography from "./components/Typography"
// import Border from "./components/Border"
// import EffectsFilters from "./components/EffectsFilters"
// import AnimationsTransition from "./components/AnimationsTransition"
// import DesignSystem from "./components/DesignSystem"

import { useState } from "react"
import DarkMode from "./components/DarkMode"

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }


  return (
    <div className={mode}>
      {/* <Colours /> */}
      {/* <Customization /> */}
      {/* <Typography /> */}
      {/* <Spacesandsizes /> */}
      {/* <Flex /> */}
      {/* <Grid /> */}
      {/* <Layouts /> */}
      {/* <Border /> */}
      {/* <EffectsFilters /> */}
      {/* <AnimationsTransition /> */}
      {/* <DesignSystem /> */}
      <DarkMode />
      <button
        onClick={toggleMode}
        className="dark:bg-slate-400 dark:text-white bg-slate-100 text-black">Switch to {mode === 'light' ? 'dark' : 'light'} mode</button>
    </div>
  )
}

export default App
