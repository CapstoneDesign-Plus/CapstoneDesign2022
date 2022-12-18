import AbstractBody from "../AbstractBody";

const koDtf = new Intl.DateTimeFormat("ko", { dateStyle: "short" });

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
  { field: "method", headerName: "Method", width: 60 },
  { field: "caller", headerName: "Caller", width: 200 },
  { field: "path", headerName: "Path", width: 230 },
  // { field: "ip", headerName: "Ip", width: 100 },
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
