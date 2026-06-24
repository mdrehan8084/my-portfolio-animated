import { useState } from "react";
import IntroScreen from "./IntroScreen";
import Portfolio from "./Portfolio"; // aapka main file

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <IntroScreen onDone={() => setLoaded(true)} />}
      <Portfolio />
    </>
  );
}
