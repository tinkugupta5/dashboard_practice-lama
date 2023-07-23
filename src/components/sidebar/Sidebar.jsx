import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddAltTwoToneIcon from "@mui/icons-material/PersonAddAltTwoTone";
import Inventory2TwoToneIcon from "@mui/icons-material/Inventory2TwoTone";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import QueryStatsSharpIcon from "@mui/icons-material/QueryStatsSharp";
import CircleNotificationsSharpIcon from "@mui/icons-material/CircleNotificationsSharp";
import SettingsSystemDaydreamSharpIcon from "@mui/icons-material/SettingsSystemDaydreamSharp";
import HealthAndSafetySharpIcon from "@mui/icons-material/HealthAndSafetySharp";
import SettingsApplicationsSharpIcon from "@mui/icons-material/SettingsApplicationsSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Dashboard</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main Area</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">Lists</p>
          <li>
            <PersonAddAltTwoToneIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <Inventory2TwoToneIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <PersonAddAltTwoToneIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">Useful</p>
          <li>
            <QueryStatsSharpIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <CircleNotificationsSharpIcon className="icon" />
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamSharpIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <HealthAndSafetySharpIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsSharpIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
            <AccountCircleSharpIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutSharpIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
