import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TokenDashboard from "../TokenDashboard";
import LogDashboard from "../LogDashboard";
import TicketDashboard from "../TicketDashboard";
import UserDashboard from "../UserDashboard";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Dashboard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="User" {...a11yProps(0)} />
          <Tab label="Ticket" {...a11yProps(1)} />
          <Tab label="Log" {...a11yProps(2)} />
          <Tab label="Token" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <UserDashboard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TicketDashboard />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LogDashboard />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TokenDashboard />
      </TabPanel>
    </Box>
  );
}
