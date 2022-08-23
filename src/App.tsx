import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import { Home } from "./Home"
import { Registration } from "./Registration"
import { Reward } from "./Reward"

import styles from "./style.module.scss"

export const App: React.FC = () => {
  const [stage, setStage] = useState<"home" | "registration" | "reward">("home")

  return (
    <div className={styles.container}>
      {stage === "home" && <Home onSubmit={() => setStage("registration")} />}
      {stage === "registration" && <Registration onSubmit={() => setStage("reward")} />}
      {stage === "reward" && <Reward />}
    </div>
  )
}
