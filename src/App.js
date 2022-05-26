import "./styles.css";
import { Basic } from "./Basic";
import { Dynamic } from "./Dynamic";
import { Prefix } from "./PrefixClassname/Prefix";
import { Theming } from "./Theming";
// import { ThemingApp } from "./ThemingContext/ThemingContext";

export default function App() {
  return (
    <div className="App">
      <h1>JSS integration with React</h1>
      <Basic />
      <Dynamic />
      <Prefix />
      <Theming />
      {/* <ThemingApp /> */}
    </div>
  );
}
