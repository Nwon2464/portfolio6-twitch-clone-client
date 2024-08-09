import React, { useRef, useState } from "react";
import LoginModal from "../LoginModal";
import LoginModalForm from "../LoginModalForm";
import { CSSTransition } from "react-transition-group";
import ClearIcon from "@material-ui/icons/Clear";

import { Tab } from "semantic-ui-react";
import { panes } from "../SignupReuse";

const DropdownMenu = (props) => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  React.useEffect(() => {
    // setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    // dropdownRef.current.onclose = () => console.log("CLOSED!");
    // return () => {
    //   dropdownRef.current.onclose();
    // };

    if (dropdownRef.current) {
      setMenuHeight(dropdownRef.current.firstChild.offsetHeight);
    }

    const handleOnClose = () => {
      if (dropdownRef.current) {
        dropdownRef.current.onclose = () => console.log("CLOSED!");
      }
    };

    handleOnClose();

    return () => {
      if (dropdownRef.current) {
        dropdownRef.current.onclose = null;
      }
    };


  }, []);

  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };
  const DropdownItem = (props) => {
    const modalRef = React.useRef();

    const openModal = (event) => {
      const container = document.getElementsByClassName("menu__item")[2];
      if (
        container === event.currentTarget &&
        container.hasChildNodes(event.currentTarget)
      ) {
        modalRef.current.openModal();
      }
    };

    const checkLoggedOrNot = (event) => {
      if (!props.logged) {
        props.goToMenu && setActiveMenu(props.goToMenu);
        openModal(event);
      } else {
        props.goToMenu && setActiveMenu(props.goToMenu);
      }
    };

    const logout = (e) => {
      if (props.children === "Log Out") {
        props.signOut();
      }
    };
    return (
      <>
        <LoginModal ref={modalRef}>
          <div className="clear__btn" onClick={() => modalRef.current.close()}>
            <ClearIcon className="clear__icon" style={{ fontSize: "2rem" }} />
          </div>

          <Tab
            style={{ width: "100%" }}
            panes={panes}
            menu={{ secondary: true, pointing: true, attached: "bottom" }}
            defaultActiveIndex={0}
          />
        </LoginModal>

        <div
          style={{
            backgroundColor: props.backgroundcolor && props.backgroundcolor,
          }}
          onClick={(e) => {
            checkLoggedOrNot(e);
            logout();
          }}
          className="menu__item"
        >
          <div className="icon__button">{props.leftIcon}</div>
          <div style={{ flexGrow: 1 }}>
            {props.children ? props.children : <>{props.userEmail}</>}
          </div>
          <div className="icon__right">{props.rightIcon}</div>
        </div>
      </>
    );
  };

  return (
    <div
      style={{ height: menuHeight }}
      ref={dropdownRef}
      className="dropdown__"
    >
      <CSSTransition
        in={activeMenu === "main"}
        classNames="menu__primary"
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
      >
        <div className="menu__">
          {props.allContents.map((contents, index) => {
            return (
              <React.Fragment key={index}>
                <DropdownItem
                  // onSignOut={props.onSignOut}
                  logged={contents.logged ? contents.logged : ""}
                  leftIcon={contents.leftIcon}
                  goToMenu={contents.goToMenu ? contents.goToMenu : ""}
                  rightIcon={contents.rightIcon}
                  signOut={props.onSignOut}
                  userEmail={props.userEmail}
                >
                  {contents.content}
                </DropdownItem>
              </React.Fragment>
            );
          })}
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "settings"}
        classNames="menu__secondary"
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
      >
        <div className="menu__">
          {props.languages.map((language, index) => {
            return (
              <React.Fragment key={index}>
                <DropdownItem
                  backgroundcolor={
                    language.backgroundcolor ? language.backgroundcolor : ""
                  }
                  logged={language.logged ? language.logged : ""}
                  leftIcon={language.leftIcon ? language.leftIcon : ""}
                  goToMenu={language.goToMenu ? language.goToMenu : ""}
                >
                  {language.language}
                </DropdownItem>
              </React.Fragment>
            );
          })}
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
