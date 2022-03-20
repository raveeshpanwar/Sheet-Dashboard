import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

function TtableItem(props) {
  return (
    <TableRow>
      <TableCell align="right">{props.tid}</TableCell>
      <TableCell align="right">{props.tname}</TableCell>
      <TableCell align="right">{props.tscore}</TableCell>
    </TableRow>
  );
}
export default TtableItem;
