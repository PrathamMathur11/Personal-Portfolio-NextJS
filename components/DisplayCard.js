import React from "react";
import Typed from 'typed.js';

const DisplayCard = () => {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hard", "Fun", "A Journey", "Life"],
      typeSpeed: 200,
      loop: true
    });

    return () => {
      typed.destroy();
    }
  }, [])


  return (
    <div className="container-1 text-teal-500 dark:text-white new-font">
      <span className="text-teal-500 new-font">&lt;&gt;</span>
      <p>
        Coding is <span ref={el} className="typed-text"></span>
      </p>
      <span className="text-teal-500 new-font">&lt;/&gt;</span>
    </div>
  );
};

export default DisplayCard;
