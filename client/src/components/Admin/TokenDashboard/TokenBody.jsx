import AbstractBody from "../AbstractBody";

const koDtf = new Intl.DateTimeFormat("ko", { dateStyle: "long" });

/**
 * @typedef {import(".").TokenProvided} Provided
 * @typedef {import("../../../hook/useTokenDashboard").Handler} Handler
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
  { field: "email", headerName: "요청자", width: 200 },
  {
    field: "createdAt",
    headerName: "생성",
    type: "string",
    width: 160,
    valueGetter(p) {
      return koDtf.format(p.row.createdAt);
    },
  },
  {
    field: "expiredAt",
    headerName: "만료",
    type: "string",
    width: 160,
    valueGetter(p) {
      return koDtf.format(p.row.expiredAt);
    },
  },
];

/**
 * @type {import("../AbstractDashboard").DashboardLeaf<Provided, Handler>}
 */
const TokenBody = ({ provided, hlr }) => {
  return (
    <AbstractBody
      data={provided.data}
      setSelected={hlr.setSelected}
      columns={columns}
      getId={(row) => row.identifier}
    />
  );
};

export default TokenBody;
