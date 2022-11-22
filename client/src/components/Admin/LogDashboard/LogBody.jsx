import AbstractBody from "../AbstractBody";

const koDtf = new Intl.DateTimeFormat("ko", { dateStyle: "long" });

/**
 * @typedef {import(".").LogProvided} LogProvided
 * @typedef {import("../../../hook/useLogDashboard").LogHandler} LogHandler
 *
 * @type {import("@mui/x-data-grid").GridColDef[]}
 */
const columns = [
  {
    field: "identifier",
    headerName: "ID",
    type: "number",
    width: 70,
  },
  { field: "source", headerName: "Source", width: 200 },
  {
    field: "content",
    headerName: "Content",
    width: 250,
  },
  {
    field: "timestamp",
    headerName: "At",
    type: "string",
    width: 160,
    valueGetter(p) {
      return koDtf.format(p.row.timestamp);
    },
  },
];

/**
 * @type {import("../AbstractDashboard").DashboardLeaf<LogProvided, LogHandler>}
 */
const LogBody = ({ provided, hlr }) => {
  return (
    <AbstractBody
      data={provided.data}
      setSelected={hlr.setSelected}
      columns={columns}
      getId={(row) => row.identifier}
    />
  );
};

export default LogBody;
