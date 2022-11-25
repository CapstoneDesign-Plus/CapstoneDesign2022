import React from "react";
import AdminHome from "../AdminHome";
import LogDashboard from "../LogDashboard";
import TicketDashboard from "../TicketDashboard";
import TokenDashboard from "../TokenDashboard";
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

const AdminContent = ({ tab }) => {
  return (
    <>
      <TabPanel value={tab} index={0}>
        <AdminHome />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <UserDashboard />
      </TabPanel>
      <TabPanel value={tab} index={2}>
        <TicketDashboard />
      </TabPanel>
      <TabPanel value={tab} index={3}>
        <LogDashboard />
      </TabPanel>
      <TabPanel value={tab} index={4}>
        <TokenDashboard />
      </TabPanel>
    </>
  );
};
export default AdminContent;
