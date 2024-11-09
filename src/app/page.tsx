"use client";
import GamePlay from "@/components/GamePlay";
import HomeComponents from "@/components/Home";
import { useState } from "react";

export default function Home() {
  const [GameStarted, setGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setGameStarted((prev) => !prev);
  };
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {GameStarted ? <GamePlay /> : <HomeComponents toggle={toggleGamePlay} />}
    </div>
  );
}
