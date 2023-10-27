import "./App.css";
import SocialMedia from "./components/socialMedia";
import Icon from "./icons/hexfuseIcon";
import { Instagram, Github, Linkedin } from "./icons/socialMediaIcons";

function App() {
  return (
    <div className="about">
      <div className="borderBox">
        <Icon width="320px" height="160px" />
        <h1>HexFuse</h1>
        <p>A team of six that work on automation.</p>
      </div>
      <div className="box2">
        <SocialMedia
          github="https://github.com/hexfuse"
          instagram="https://www.instagram.com/hexfuse/"
          linkedin="https://www.linkedin.com/in/hexfuse/"
        />
      </div>
    </div>
  );
}

export default App;
