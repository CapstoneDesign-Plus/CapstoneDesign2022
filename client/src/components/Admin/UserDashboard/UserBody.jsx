import AbstractBody from "../AbstractBody";

const koDtf = new Intl.DateTimeFormat("ko", { dateStyle: "short" });

/**
 * @typedef {import(".").UserProvided} UserProvided
 * @typedef {import("../../../hook/useUserDashboard").UserHandler} UserHandler
 *
 * @type {import("@mui/x-data-grid").GridColDef[]}
 */
const columns = [
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  { field: "username", headerName: "Name", width: 80 },
  {
    field: "admin",
    headerName: "Admin",
    width: 80,
  },
  {
    field: "tickets",
    headerName: "Tickets",
    type: "number",
    width: 80,
    valueGetter(p) {
      return p.row.tickets.length;
    },
  },
  {
    field: "point",
    headerName: "Point",
    type: "number",
    width: 90,
  },
  {
    field: "createdAt",
    headerName: "createdAt",
    type: "string",
    width: 160,
    valueGetter(p) {
      return koDtf.format(p.row.createdAt);
    },
  },
];

/**
 * @type {import("../AbstractDashboard").DashboardLeaf<UserProvided, UserHandler>}
 */
const UserBody = ({ provided, hlr }) => {
  return (
    <AbstractBody
      data={provided.data}
      setSelected={hlr.setSelected}
      columns={columns}
      getId={(row) => row.email}
    />
  );
};

export default UserBody;
