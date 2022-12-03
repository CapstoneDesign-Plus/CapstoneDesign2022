import { Tab, Tabs } from "@mui/material";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AdminTabs = ({ tab, setTab }) => {
  return (
    <Tabs value={tab} onChange={(e, v) => setTab(v)}>
      <Tab label="Home" {...a11yProps(0)} />
      <Tab label="User" {...a11yProps(1)} />
      <Tab label="Ticket" {...a11yProps(2)} />
      <Tab label="Log" {...a11yProps(3)} />
      <Tab label="Token" {...a11yProps(4)} />
      <Tab label="Price" {...a11yProps(5)} />
    </Tabs>
  );
};

export default AdminTabs;
