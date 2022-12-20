function isUsed(state) {
  if (state === "refunded") return true;

  if (state === "used") return true;

  return false;
}

function fltCantTicket(tickets = []) {
  return tickets.filter((t) => isUsed(t.state));
}

export default function fltCanUseTicket(tickets = []) {
  return tickets.filter((t) => !isUsed(t.state));
}

export { fltCantTicket };
