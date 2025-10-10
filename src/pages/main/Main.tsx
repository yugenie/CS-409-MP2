import { useEffect, useRef, useState } from "react";
import "./Main.scss";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

// 用现有的 jpg/png（或你后来改好的 svg 的 public 路径），保持可用即可
import logo from "./pokemon_logo.jpg";

// 保留原有 props 形状与日志
const Main = (pokemon: any) => {
  const [inProp, setInProp] = useState(true);
  const nodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log(pokemon.pokemon);
  }, [pokemon]);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      classNames="mmain"
      in={inProp}
      timeout={500}
      unmountOnExit
      onEnter={() => setInProp(true)}
      onExited={() => setInProp(false)}
    >
      <div className="main_page" ref={nodeRef}>
        {/* 中间 Logo（带相框样式在 SCSS） */}
        <img src={logo} alt="Pokémon" className="main_logo" />

        {/* 两个按钮：连接到既有路由 */}
        <div className="btn_group">
          <Link
            to="/about"
            className="btn btn-primary"
            onClick={() => setInProp(false)}
            aria-label="Go to Pokedex List"
          >
            Pokédex List
          </Link>
          <Link
            to="/pokedex"
            className="btn btn-secondary"
            onClick={() => setInProp(false)}
            aria-label="Go to Gallery"
          >
            Pokémon Gallery
          </Link>
        </div>

      </div>
    </CSSTransition>
  );
};

export default Main;
