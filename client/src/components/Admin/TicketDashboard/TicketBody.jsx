import AbstractBody from "../AbstractBody";

const koDtf = new Intl.DateTimeFormat("ko", { dateStyle: "long" });

/**
 * @typedef {import(".").TicketProvided} LogProvided
 * @typedef {import("../../../hook/useTicketDashboard").LogHandler} LogHandler
 *
 * @type {import("@mui/x-data-grid").GridColDef[]}
 */
const columns = [
  {
    field: "identifier",
    headerName: "ID",
    type: "string",
    width: 70,
  },
  { field: "owner", headerName: "소유자", width: 200 },
  { field: "buyer", headerName: "구매자", width: 200 },
  {
    field: "state",
    headerName: "상태",
    type: "string",
    width: 70,
  },
  {
    field: "tclass",
    headerName: "코스",
    type: "string",
    width: 50,
  },
  {
    field: "price",
    headerName: "가격",
    type: "number",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "생성",
    type: "string",
    width: 160,
    valueGetter(p) {
      return koDtf.format(p.row.createAt);
    },
  },
  {
    field: "usedAt",
    headerName: "사용",
    type: "string",
    width: 160,
    valueGetter(p) {
      return koDtf.format(p.row.usedAt);
    },
  },
];

/**
 * @type {import("../AbstractDashboard").DashboardLeaf<LogProvided, LogHandler>}
 */
const TicketBody = ({ provided, hlr }) => {
  return (
    <AbstractBody
      data={provided.data}
      setSelected={hlr.setSelected}
      columns={columns}
      getId={(row) => row.identifier}
    />
  );
};

export default TicketBody;
