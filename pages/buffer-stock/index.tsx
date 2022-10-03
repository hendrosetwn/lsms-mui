import {
  Button,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TableCell,
  TableBody,
  Chip,
  Box,
  TableSortLabel,
} from "@mui/material";
import MonitorIcon from "@mui/icons-material/Monitor";
import { Data, DataHead } from "../../services/data";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

export default function BufferStock() {
  const dataHeadTop = DataHead.slice(0, 9);
  const dataHeadBot = DataHead.slice(9);

  const newData = Data.map((data) => (
    <TableRow key={data.id}>
      <TableCell align="center" width="129px" sx={{ borderL: "0 1px" }}>
        {data.date}
      </TableCell>
      <TableCell align="center" width="104px">
        {data.location}
      </TableCell>
      <TableCell align="center">{data.fasilitas}</TableCell>
      <TableCell align="center">
        <TableSortLabel>
          <Chip
            label={data.kode_tangki}
            //   color="info"
            sx={{ color: "#1976D280", borderColor: "#1976D280" }}
            variant="outlined"
          />
        </TableSortLabel>
      </TableCell>
      <TableCell align="center">
        <Chip
          label={data.material}
          //   color="primary"
          sx={{ color: "#4457FC", borderColor: "#4457FC" }}
          variant="outlined"
        />
      </TableCell>
      <TableCell align="center">{data.lobs}</TableCell>
      <TableCell align="center">{data.l15}</TableCell>
      <TableCell align="center">{data.barrel}</TableCell>
      <TableCell align="center">{data.metric_ton}</TableCell>
      <TableCell align="center">{data.long_ton}</TableCell>
      <TableCell align="center">{data.product_owner}</TableCell>
      <TableCell align="center">{data.storage_owner}</TableCell>
      <TableCell align="center">
        <Chip
          label={data.status}
          sx={{ color: "#D32F2F80", borderColor: "#D32F2F80" }}
          variant="outlined"
        />
      </TableCell>
    </TableRow>
  ));

  return (
    <div style={{ padding: 50 }}>
      <Typography variant="h6" sx={{ marginBottom: "8px" }}>
        Buffer Stock
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 20,
          marginBottom: 72,
        }}
      >
        <MonitorIcon></MonitorIcon>
        <Typography variant="body1" align="center">
          Buffer Stock /
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 28,
        }}
      >
        <Typography variant="h5">List Data Stock</Typography>
        <Button variant="contained" color="primary">
          + Manage Stock
        </Button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            {dataHeadTop.map((data) => (
              <TableCell
                className="border__table--buffer"
                align="center"
                colSpan={data.col}
                rowSpan={data.row}
                key={data.id}
              >
                {data.name}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            {dataHeadBot.map((data) => (
              <TableCell
                className="border__table--buffer"
                colSpan={data.col}
                rowSpan={data.row}
                key={data.id}
                align="center"
              >
                {data.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{newData}</TableBody>
      </Table>
    </div>
  );
}
