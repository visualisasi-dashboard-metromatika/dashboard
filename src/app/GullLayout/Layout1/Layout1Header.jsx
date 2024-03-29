import { merge } from "lodash";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { getTimeDifference } from "@utils";
import MegaMenu from "@gull/components/MegaMenu";
import { useDispatch, useSelector } from "react-redux";
import { logoutJWTUser } from "app/redux/auth/authSlice";
import { setLayoutSettings } from "app/redux/layout/layoutSlice";
import logomedan from "./img/Logo-Kota-Medan.png";

const Layout1Header = () => {
  const dispatch = useDispatch();
  const { settings } = useSelector((state) => state.layout);

  const [state, setState] = useState({
    // shorcutMenuList: [
    //   {
    //     icon: "i-Shop-4",
    //     link: "#",
    //     text: "Home",
    //   },
    //   {
    //     icon: "i-Library",
    //     link: "#",
    //     text: "Ui Kits",
    //   },
    //   {
    //     icon: "i-Drop",
    //     link: "#",
    //     text: "Apps",
    //   },
    //   {
    //     icon: "i-File-Clipboard-File--Text",
    //     link: "#",
    //     text: "Form",
    //   },
    //   {
    //     icon: "i-Checked-User",
    //     link: "#",
    //     text: "Sessions",
    //   },
    //   {
    //     icon: "i-Ambulance",
    //     link: "#",
    //     text: "Support",
    //   },
    // ],
    notificationList: [
      {
        icon: "i-Speach-Bubble-6",
        title: "New message",
        description: "James: Hey! are you busy?",
        time: "2019-10-30T02:10:18.931Z",
        color: "primary",
        status: "New",
      },
      {
        icon: "i-Receipt-3",
        title: "New order received",
        description: "1 Headphone, 3 iPhone",
        time: "2019-03-10T02:10:18.931Z",
        color: "success",
        status: "New",
      },
      {
        icon: "i-Empty-Box",
        title: "Product out of stock",
        description: "1 Headphone, 3 iPhone",
        time: "2019-05-10T02:10:18.931Z",
        color: "danger",
        status: "3",
      },
      {
        icon: "i-Data-Power",
        title: "Server up!",
        description: "Server rebooted successfully",
        time: "2019-03-10T02:10:18.931Z",
        color: "success",
        status: "3",
      },
    ],
    showSearchBox: false,
  });

  const handleMenuClick = () => {
    dispatch(
      setLayoutSettings(
        merge({}, settings, {
          layout1Settings: {
            leftSidebar: {
              open: settings.layout1Settings.leftSidebar.secondaryNavOpen
                ? true
                : !settings.layout1Settings.leftSidebar.open,
              secondaryNavOpen: false,
            },
          },
        })
      )
    );
  };

  const toggleFullScreen = () => {
    if (document.fullscreenEnabled) {
      if (!document.fullscreen) document.documentElement.requestFullscreen();
      else document.exitFullscreen();
    }
  };

  const handleSearchBoxOpen = () => {
    dispatch(
      setLayoutSettings(
        merge({}, settings, {
          layout1Settings: {
            searchBox: {
              open: true,
            },
          },
        })
      )
    );
  };

  let { shorcutMenuList, notificationList } = state;

  return (
    <div className="main-header">
      <div className="logo">
        <img src={logomedan} alt="" />
      </div>

      <div className="menu-toggle" onClick={handleMenuClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="d-none d-lg-flex align-items-center">
        <Dropdown className="me-3">
          <Dropdown.Toggle as="div" className="toggle-hidden cursor-pointer">

          </Dropdown.Toggle>

          <div className="mega-menu">
            <Dropdown.Menu>
              <MegaMenu></MegaMenu>
            </Dropdown.Menu>
          </div>
        </Dropdown>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            onFocus={handleSearchBoxOpen}
          />
          <i className="search-icon text-muted i-Magnifi-Glass1"></i>
        </div>
      </div>

      <div style={{ margin: "auto" }}></div>

      <div className="header-part-right">
        <div className="user col px-3">
          <Dropdown>
            <Dropdown.Toggle as="span" className="toggle-hidden cursor-pointer">
              2024
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Link to="/" className="dropdown-item cursor-pointer">
                2024
              </Link>
              <Link to="/" className="dropdown-item cursor-pointer">
                2023
              </Link>
              <Link to="/" className="dropdown-item cursor-pointer">
                2022
              </Link>
              <Link to="/" className="dropdown-item cursor-pointer">
                2021
              </Link>
              <Link to="/" className="dropdown-item cursor-pointer">
                2020
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <i
          onClick={toggleFullScreen}
          className="i-Full-Screen header-icon d-none d-sm-inline-block"
          data-fullscreen
        ></i>

        {/* <Dropdown>
          <Dropdown.Toggle
            as="div"
            id="dropdownNotification"
            className="badge-top-container toggle-hidden"
          >
            <span className="badge bg-primary cursor-pointer">3</span>
            <i className="i-Bell text-muted header-icon"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu className="notification-dropdown">
            {notificationList.map((note, index) => (
              <div key={index} className="dropdown-item d-flex">
                <div className="notification-icon">
                  <i className={`${note.icon} text-${note.color} mr-1`}></i>
                </div>
                <div className="notification-details flex-grow-1">
                  <p className="m-0 d-flex align-items-center">
                    <span>{note.title}</span>
                    <span
                      className={`badge rounded-pill bg-${note.color} ms-1 me-1`}
                    >
                      {note.status}
                    </span>
                    <span className="flex-grow-1"></span>
                    <span className="text-small text-muted ms-auto">
                      {getTimeDifference(new Date(note.time))} ago
                    </span>
                  </p>
                  <p className="text-small text-muted m-0">
                    {note.description}
                  </p>
                </div>
              </div>
            ))}
          </Dropdown.Menu>
        </Dropdown> */}

        <div className="user col px-3">
        </div>
      </div>
    </div>
  );
};

export default Layout1Header;
