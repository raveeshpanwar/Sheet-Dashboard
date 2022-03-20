import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import "./table.css";
import TtableItem from "./tableItem";
import axios from "axios";
import { useEffect, useState } from "react";

const Tablee = () => {
  const [ApiData, SetApiData] = useState([]);
  const [Refresh, setRefresh] = useState(false);
  function Go(e) {
    if (Refresh === true) {
      setRefresh(false);
    } else {
      setRefresh(true);
    }
  }
  useEffect(() => {
    axios
      .get("https://sheet.best/api/sheets/1e1c6fe4-04a7-4846-a86d-e114399b2361")
      .then((incomingData) => {
        SetApiData(incomingData.data);
      });
  }, [Refresh]);

  return (
    <TableContainer className="outer" component={Paper}>
      <Button variant="contained" color="success" onClick={Go} value={Refresh}>
        Refresh/Sync
      </Button>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Avatar Name</TableCell>
            <TableCell align="center">Performance Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ApiData.map((item) => {
            return (
              <TtableItem
                key={item.id}
                tid={item.id}
                tname={item.avatar}
                tscore={item.score}
              ></TtableItem>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Tablee;
