import React, { useRef, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { signIn, signOut, logOutAuth, jwtlogOut } from "./actions/index";
import { connect } from "react-redux";

import history from "./history";
import SearchBar from "./components/Header/SearchBar/SearchBar";
import LoginSignUpButton from "./components/Header/LoginSignUpButton";
import NavBar from "./components/Header/NavBar/NavBar";
import NavItem from "./components/Header/NavBar/NavItem";
import DropdownMenu from "./components/Header/NavBar/DropdownMenu";
import Skeleton from "react-loading-skeleton";
import { ReactComponent as TwitchIcon } from "./components/Header/twitch-seeklogo.com.svg";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ToggleOffOutlinedIcon from "@material-ui/icons/ToggleOffOutlined";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import LanguageIcon from "@material-ui/icons/Language";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SettingsApplicationsOutlinedIcon from "@material-ui/icons/SettingsApplicationsOutlined";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
const Header = (props) => {
  const modalRef = useRef();
  const [open, setOpen] = useState(false);
  const [navIndicatorActive, setNavIndicatorActive] = useState("");
  const toggleMultipleIndicator = (value) => {
    setNavIndicatorActive(value);
  };
  const openLoginModal = () => {
    modalRef.current.openModal();
  };

  const onSignOut = () => {
    if (props.auth.googleAuthIsSignedIn) {
      props.logOutAuth();
    } else if (props.auth.jwtToken && props.auth.jwtUsername) {
      props.jwtlogOut();
    }
  };
  const renderButton = () => {
    if (
      props.auth.googleAuthIsSignedIn === null &&
      props.auth.jwtToken === null
    ) {
      return (
        <div>
          <Skeleton height={30} width={30} />
        </div>
      );
    } else if (
      props.auth.googleAuthIsSignedIn ||
      (props.auth.jwtToken && props.auth.jwtUsername)
    ) {
      return (
        <NavBar>
          <NavItem
            loggedIcon={
              <AccountCircleOutlinedIcon
                style={{ width: "100%", height: "100%" }}

                // className="header__icon"
              />
            }
          >
            <DropdownMenu
              onSignOut={onSignOut}
              allContents={loggedInContents}
              languages={languages}
              userEmail={
                props.auth.googleAuthIsSignedIn
                  ? props.auth.googleAuthIsSignedIn.googleEmail.split("@")[0]
                  : props.auth.jwtToken && props.auth.jwtUsername
              }
            ></DropdownMenu>
          </NavItem>
        </NavBar>
      );
    } else {
      return (
        <>
          <LoginSignUpButton />

          <NavBar>
            <NavItem
              notLoggedIcon={
                <PersonOutlineIcon
                  style={{ width: "100%", height: "100%" }}
                  // className="header__icon"
                />
              }
            >
              <DropdownMenu
                allContents={yetLoggedInContents}
                languages={languages}
              ></DropdownMenu>
            </NavItem>
          </NavBar>
        </>
      );
    }
  };

  return (
    <nav className="app-top-nav app-height-5 app-flex-shrink-0">
      <div className="app-flex app-flex-nowrap app-full-height app-align-items-stretch">
        <div className="app-flex app-flex-grow-1 app-flex-shrink-1 app-justify-content-start app-align-items-stretch app-full-width">
          <Link
            onClick={() => toggleMultipleIndicator("")}
            className="app-mg-l-1 app-flex app-justify-content-center app-align-items-center"
            to="/"
          >
            <div className="app-inline-flex app-pd-05">
              <TwitchIcon width={30} height={30} />
            </div>
          </Link>
          <div className="app-flex app-flex-row app-full-height app-justify-content-between">
            <div className="app-flex app-flex-column app-full-height app-pd-x-1">
              <div
                onClick={() => toggleMultipleIndicator("Browse")}
                className="app-align-self-center app-flex app-full-height app-justify-content-center app-align-items-center"
              >
                <Link to="/category/all">
                  <h3 className="app-flex app-flex-column app-font-size-7 app-cursor-pointer">
                    Browse
                  </h3>
                </Link>
              </div>
              <div className="navigation-link-indicator-container">
                {navIndicatorActive === "Browse" && (
                  <div className="navigation-link-active-indicator"></div>
                )}
              </div>
            </div>
            <div className="navigation-link-left-border app-mg-t-1"></div>
            <div className="app-flex app-flex-column app-full-height app-pd-x-1">
              <div
                onClick={() => toggleMultipleIndicator("Esports")}
                className="app-align-self-center app-flex app-full-height  app-justify-content-center app-align-items-center"
              >
                <Link to="/esports">
                  <h3 className="app-flex app-flex-column app-font-size-7 app-cursor-pointer">
                    Esports
                  </h3>
                </Link>
              </div>
              <div className="navigation-link-indicator-container">
                {navIndicatorActive === "Esports" && (
                  <div className="navigation-link-active-indicator"></div>
                )}
              </div>
            </div>
            <div className="app-flex app-flex-column app-full-height app-pd-x-1">
              <div
                onClick={() => toggleMultipleIndicator("Music")}
                className="app-align-self-center app-flex app-full-height  app-justify-content-center app-align-items-center"
              >
                <Link to="/music">
                  <h3 className="app-flex app-flex-column app-font-size-7 app-cursor-pointer">
                    Music
                  </h3>
                </Link>
              </div>
              <div className="navigation-link-indicator-container">
                {navIndicatorActive === "Music" && (
                  <div className="navigation-link-active-indicator"></div>
                )}
              </div>
            </div>
          </div>
          <div className="app-flex app-align-items-center app-full-height app-pd-x-1 app-justify-content-center">
            <button className="app-cursor-pointer app-inline-flex app-align-items-center app-align-middle app-relative app-justify-content-center">
              <div style={{ width: "2.5rem", height: "2.5rem" }}>
                <MoreHorizIcon style={{ width: "100%", height: "100%" }} />
              </div>
            </button>
          </div>
        </div>
        <div className="app-flex app-flex-grow-1 app-flex-shrink-1 app-full-width app-justify-content-center app-align-items-center">
          <div className="app-top-nav-search-container app-mg-x-2">
            <div className="app-top-nav-search-max-width">
              <div className="app-pd-05">
                <div className="app-flex app-full-width">
                  <div className="app-flex-grow-1" style={{ marginRight: 1 }}>
                    <div className="app-relative">
                      <SearchBar onSubmitForm={props.onSubmitForm} />
                    </div>
                  </div>
                  <button className="app-border-top-right-radius-large app-border-top-left-radius-none app-border-bottom-left-radius-none app-border-bottom-right-radius-large app-button-y app-inline-flex app-justify-content app-align-items-center app-relative app-core-button app-cursor-pointer app-input-find-button">
                    <div className="app-justify-content-center app-core-button-icon app-inline-flex app-align-items-center">
                      <SearchIcon className="app-core-icon-color" />
                    </div>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-flex app-align-items-center app-flex-grow-1 app-flex-shrink-1 app-justify-content-end app-full-width">
          {/* <div className="app-mg-x-05 app-flex-shrink-0 app-flex-grow-0 app-align-self-center app-flex-nowrap">
            <Link to="/streams/new">
              <VideoCallIcon
                // style={{ marginRight: "10px" }}
                className="header__icon"
              />
            </Link>
          </div> */}
          {/* <LoginSignUpButton /> */}

          <div className="app-mg-r-1 app-pd-y-1 app-flex app-full-height">
            <div className="app-flex app-flex-nowrap">{renderButton()}</div>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, {
  signIn,
  signOut,
  jwtlogOut,
  logOutAuth,
})(Header);

const yetLoggedInContents = [
  {
    content: "Language",
    rightIcon: <ChevronRightIcon />,
    leftIcon: <LanguageIcon />,
    goToMenu: "settings",
  },
  {
    content: "Dark Theme",
    rightIcon: <ToggleOffOutlinedIcon />,
    leftIcon: <Brightness2OutlinedIcon />,
  },
  {
    content: "Log In",
    leftIcon: <ExitToAppIcon />,
  },
];

const loggedInContents = [
  {
    content: "",
    leftIcon: <AccountCircleOutlinedIcon />,

    logged: true,
    online: "Online",
    offline: "offline",
  },
  {
    content: "Creator Dashboard",
    leftIcon: <DashboardOutlinedIcon />,
    logged: true,
  },
  {
    content: "Friends",
    leftIcon: <SupervisedUserCircleOutlinedIcon />,
    logged: true,
  },
  {
    content: "Subscriptions",
    leftIcon: <SubscriptionsOutlinedIcon />,
    logged: true,
  },

  {
    content: "Settings",
    leftIcon: <SettingsApplicationsOutlinedIcon />,
    logged: true,
  },
  {
    content: "Language",
    goToMenu: "settings",
    rightIcon: <ChevronRightIcon />,
    leftIcon: <LanguageIcon />,
    logged: true,
  },

  {
    content: "Dark Theme",
    rightIcon: <ToggleOffOutlinedIcon />,
    leftIcon: <Brightness2OutlinedIcon />,
    logged: true,
  },
  {
    content: "Log Out",
    leftIcon: <ExitToAppIcon />,
    logged: true,
  },
  // {
  //   content: "Create DashBoard",
  //   leftIcon: <BoltIcon />
  // }
];
const languages = [
  {
    language: "Select",
    leftIcon: <ChevronLeftIcon />,
    goToMenu: "main",
    backgroundcolor: "#EFEFF1",
    logged: true,
  },
  {
    language: "English",
    logged: true,
  },
  {
    language: "Dansk",
    logged: true,
  },
  {
    language: "English - UK",
    logged: true,
  },
  {
    language: "Español - España",
    logged: true,
  },
  {
    language: "中文 简体",
    logged: true,
  },
  {
    language: "日本語",
    logged: true,
  },
  {
    language: "한국어",
    logged: true,
  },
];
