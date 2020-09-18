import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { signIn, signOut, logOutAuth, jwtlogOut } from "./actions/index";
import { connect } from "react-redux";
import history from "./history";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ToggleOffOutlinedIcon from "@material-ui/icons/ToggleOffOutlined";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";
import FaceIcon from "@material-ui/icons/Face";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import LanguageIcon from "@material-ui/icons/Language";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SettingsApplicationsOutlinedIcon from "@material-ui/icons/SettingsApplicationsOutlined";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import SearchBar from "./Header/SearchBar/SearchBar";
import LoginSignUpButton from "./Header/LoginSignUpButton";
import NavBar from "./Header/NavBar/NavBar";
import NavItem from "./Header/NavBar/NavItem";
import DropdownMenu from "./Header/NavBar/DropdownMenu";
import Skeleton from "react-loading-skeleton";

import { ReactComponent as TwitchIcon } from "./Header/twitch-seeklogo.com.svg";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
    this.state = {
      open: false,
    };
  }
  // componentDidMount() {
  //   if (localStorage.token) {
  //     this.setState({ jwt: true });
  //   }
  // }
  // async componentDidMount() {
  //   const response = await axios.get("http://localhost:5000/", {
  //     headers: {
  //       authorization: `Bearer ${localStorage.token}`,
  //     },
  //   });
  //   console.log(response.data);
  //   if (response.data.user) {
  //     this.setState({ jwtData: response.data.user });
  //   } else {
  //     // this.jwtlogOut();
  //   }
  // }
  jwtlogOut = () => {
    localStorage.removeItem("token");
    history.go(0);
  };
  openLoginModal = () => {
    this.modalRef.current.openModal();
  };

  onSignOut = () => {
    if (this.props.auth.googleAuthIsSignedIn) {
      this.props.logOutAuth();
    } else if (this.props.auth.jwtToken && this.props.auth.jwtUsername) {
      this.props.jwtlogOut();
    }
  };
  renderButton() {
    if (
      this.props.auth.googleAuthIsSignedIn === null &&
      this.props.auth.jwtToken === null
    ) {
      return (
        <div>
          <Skeleton height={25} width={25} />
        </div>
      );
    } else if (
      this.props.auth.googleAuthIsSignedIn ||
      (this.props.auth.jwtToken && this.props.auth.jwtUsername)
    ) {
      return (
        <NavBar>
          <NavItem
            loggedIcon={<AccountCircleOutlinedIcon className="header__icon" />}
          >
            <DropdownMenu
              onSignOut={this.onSignOut}
              allContents={loggedInContents}
              languages={languages}
              userEmail={
                this.props.auth.googleAuthIsSignedIn
                  ? this.props.auth.googleAuthIsSignedIn.googleEmail.split(
                      "@"
                    )[0]
                  : this.props.auth.jwtToken && this.props.auth.jwtUsername
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
                <FaceIcon
                  style={{ fontSize: "1.8rem" }}
                  className="header__icon"
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
  }

  render() {
    return (
      <div className="header">
        <div className="header__left">
          <Link to="/">
            <TwitchIcon width={30} height={30} />
          </Link>
          <Link to="/">
            <TwitchIcon width={30} height={30} />
          </Link>
          <Link to="/">
            <TwitchIcon width={30} height={30} />
          </Link>
          <Link to="/">
            <TwitchIcon width={30} height={30} />
          </Link>
        </div>
        <div className="header__input">
          <SearchBar onSubmitForm={this.props.onSubmitForm} />
          <SearchIcon className="header__inputButton" />
        </div>
        <div className="header__icons">
          <Link
            to="/streams/new"
            style={{
              display: "flex",
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <VideoCallIcon
              style={{ marginRight: "10px" }}
              className="header__icon"
            />
          </Link>
          {/* <LoginSignUpButton /> */}

          {this.renderButton()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
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
