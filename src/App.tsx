import React, { useState } from "react"

import gulyaImg from "./images/dove.png"

export const App: React.FC = () => {
  const [stage, setStage] = useState<"home" | "registration" | "reward">("home")

  return <img src={gulyaImg} alt="logo" />
}
