import React, { useRef, useState } from "react";
import style from "./MobileButton.module.css";

const MobileButton = () => {
  const [activeButton, setActiveButton] = useState(false);
  const [itemsCanClicked, setItemsCanClicked] = useState<Element[]>([]);
  const ulRef = useRef<HTMLUListElement>(null);

  function expand() {
    setActiveButton(true);
  }

  function close() {
    setActiveButton(false);
  }

  function outsideClick(
    ref: React.RefObject<HTMLUListElement>,
    target: EventTarget
  ) {
    const nodeList = ref.current?.children;
    if (nodeList) {
      const arrayItens = Array.from(nodeList);
      const arrayLi = arrayItens.slice(-3, arrayItens.length);
      setItemsCanClicked(arrayLi);

      document.documentElement.addEventListener("mousedown", (element) => {
        if (itemsCanClicked[0] !== element.target) close();
        if (itemsCanClicked[1] !== element.target) close();
        if (itemsCanClicked[2] !== element.target) close();
      });
    }
  }

  function useActiveMobileMenu(event: React.MouseEvent) {
    if (activeButton) {
      close();
      console.log("If");
    } else {
      console.log("Else");
      expand();
      outsideClick(ulRef, event.target);
    }
  }

  return (
    <section className={style.containerMobileButton}>
      <h1>Mobile Button</h1>
      <header className={style.header}>
        <a href="/">Logo qualquer</a>
        <nav className={style.nav}>
          <ul
            ref={ulRef}
            className={`${activeButton ? style.activeButton : ""}`}
          >
            <button
              onClick={useActiveMobileMenu}
              className={style.mobileButton}
            ></button>
            <li
              id="itemOfButton"
              className={`${style.home} ${
                activeButton ? style.activeButton : ""
              }`}
            >
              <a href="/">Home</a>
            </li>
            <li
              className={`${activeButton ? style.activeButton : ""}`}
              id="itemOfButton"
            >
              <a href="/">Preços</a>
            </li>
            <li
              className={`${activeButton ? style.activeButton : ""}`}
              id="itemOfButton"
            >
              <a href="/">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default MobileButton;
