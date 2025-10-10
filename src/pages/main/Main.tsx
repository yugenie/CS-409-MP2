import { useEffect, useRef, useState } from "react";
import "./Main.scss";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import logo from "./pokemon_logo.jpg";

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
        <img src={logo} alt="Pokémon" className="main_logo" />

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
