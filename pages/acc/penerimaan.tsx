import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TableSortLabel,
  IconButton,
  Collapse,
  Box,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React, { useState } from "react";
import { blue } from "@mui/material/colors";

interface DataPenerimaan {
  tanggal: string;
  kode: string;
  location: string;
  shipment: string;
  bl_lobs: number;
  bl_l15: number;
  bl_pound: number;
  bl_gallon: number;
  bl_barrel: number;
  bl_mt: number;
  bl_lt: number;
  ar_lobs: number;
  ar_l15: number;
  ar_pound: number;
  ar_gallon: number;
  ar_barrel: number;
  ar_mt: number;
  ar_lt: number;
  status: string;
  action: string;
}
function createDataPenerimaan(
  tanggal: string,
  kode: string,
  location: string,
  shipment: string,
  bl_lobs: number,
  bl_l15: number,
  bl_pound: number,
  bl_gallon: number,
  bl_barrel: number,
  bl_mt: number,
  bl_lt: number,
  ar_lobs: number,
  ar_l15: number,
  ar_pound: number,
  ar_gallon: number,
  ar_barrel: number,
  ar_mt: number,
  ar_lt: number,
  status: string,
  action: string
): DataPenerimaan {
  return {
    tanggal,
    kode,
    location,
    shipment,
    bl_lobs,
    bl_l15,
    bl_pound,
    bl_gallon,
    bl_barrel,
    bl_mt,
    bl_lt,
    ar_lobs,
    ar_l15,
    ar_pound,
    ar_gallon,
    ar_barrel,
    ar_mt,
    ar_lt,
    status,
    action,
  };
}
const rowsPenerimaan = [
  createDataPenerimaan(
    "26/08/2022",
    "P1/LY19/09/2022",
    "PX.INEOS",
    "5610822B213",
    8256181,
    8113355,
    15451208,
    2143322,
    51057,
    7005,
    6894,
    8210335,
    8080850,
    15389306,
    2134735,
    50825,
    6971,
    6861,
    "open",
    "view"
  ),
];

interface DataStock {
  jenis_ukur: string;
  waktu_ukur: string;
  tangki: string;
  material: string;
  level_minyak: number;
  suhu_dalam: number;
  suhu_luar: number;
  density_obs: number;
  lobs: number;
  l15: number;
  pound: number;
  gallon: number;
  barrel: number;
  mt: number;
  lt: number;
  juru_ukur: string;
}
function createDataStock(
  jenis_ukur: string,
  waktu_ukur: string,
  tangki: string,
  material: string,
  level_minyak: number,
  suhu_dalam: number,
  suhu_luar: number,
  density_obs: number,
  lobs: number,
  l15: number,
  pound: number,
  gallon: number,
  barrel: number,
  mt: number,
  lt: number,
  juru_ukur: string
): DataStock {
  return {
    jenis_ukur,
    waktu_ukur,
    tangki,
    material,
    level_minyak,
    suhu_dalam,
    suhu_luar,
    density_obs,
    lobs,
    l15,
    pound,
    gallon,
    barrel,
    mt,
    lt,
    juru_ukur,
  };
}
const rowsStock = [
  createDataStock(
    "AFT",
    "26/08/2022 01:00",
    "T-27",
    "PX",
    9669,
    31.2,
    31.2,
    0.8634,
    4079361,
    4028819,
    7672550,
    1064301,
    25353,
    3514,
    3459,
    "Hendro Setiawan"
  ),
  createDataStock(
    "BFT",
    "26/08/2022 23:00",
    "T-27",
    "PX",
    964,
    30.2,
    30.2,
    0.8635,
    461497,
    456130,
    868661,
    120496,
    2870,
    397,
    391,
    "Hendro Setiawan"
  ),
];

const Penerimaan = (props: { row: ReturnType<typeof createDataStock> }) => {
  const { row } = props;

  const [collapseButton, setCollapseButton] = useState<string>("+");
  const [open, setOpen] = useState<boolean>(false);

  return (
    <React.Fragment
    // sx={{ maxHeight: 440, maxWidth: "80%", marginLeft: "10%", marginTop: 5 }}
    >
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              rowSpan={2}
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            ></TableCell>
            <TableCell
              align="center"
              rowSpan={2}
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              <TableSortLabel> Tgl Penerimaan</TableSortLabel>
            </TableCell>
            <TableCell
              align="center"
              rowSpan={2}
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              waktu_ukur Penerimaan
            </TableCell>

            <TableCell
              align="center"
              rowSpan={2}
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              Location
            </TableCell>
            <TableCell
              align="center"
              rowSpan={2}
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              Shipment/BL No.
            </TableCell>
            <TableCell
              align="center"
              colSpan={7}
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              Bill of Lading (BL)
            </TableCell>
            <TableCell
              align="center"
              colSpan={7}
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              Actual Receipt (AR)
            </TableCell>
            <TableCell
              align="center"
              rowSpan={2}
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              Status
            </TableCell>
            <TableCell
              align="center"
              rowSpan={2}
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              Action
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              align="center"
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              LObs
            </TableCell>
            <TableCell
              align="center"
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              L15
            </TableCell>
            <TableCell
              align="center"
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              Pound
            </TableCell>
            <TableCell
              align="center"
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              Gallon
            </TableCell>
            <TableCell
              align="center"
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              Barrel
            </TableCell>
            <TableCell
              align="center"
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              MT
            </TableCell>
            <TableCell
              align="center"
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              LT
            </TableCell>
            <TableCell
              align="center"
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              LObs
            </TableCell>
            <TableCell
              align="center"
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              L15
            </TableCell>
            <TableCell
              align="center"
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              Pound
            </TableCell>
            <TableCell
              align="center"
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              Gallon
            </TableCell>
            <TableCell
              align="center"
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              Barrel
            </TableCell>
            <TableCell
              align="center"
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              MT
            </TableCell>
            <TableCell
              align="center"
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              LT
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsPenerimaan.map((data) => (
            <TableRow>
              <TableCell>
                <Button
                  variant="outlined"
                  onClick={() => {
                    collapseButton === "+" && setCollapseButton("-"),
                      setOpen(!open);
                    collapseButton === "-" && setCollapseButton("+"),
                      setOpen(!open);
                  }}
                >
                  {collapseButton}
                </Button>
                {/* <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton> */}
              </TableCell>
              <TableCell>{data.tanggal}</TableCell>
              <TableCell>{data.kode}</TableCell>
              <TableCell>{data.location}</TableCell>
              <TableCell>{data.shipment}</TableCell>
              <TableCell>{data.bl_lobs}</TableCell>
              <TableCell>{data.bl_l15}</TableCell>
              <TableCell>{data.bl_pound}</TableCell>
              <TableCell>{data.bl_gallon}</TableCell>
              <TableCell>{data.bl_barrel}</TableCell>
              <TableCell>{data.bl_mt}</TableCell>
              <TableCell>{data.bl_lt}</TableCell>
              <TableCell>{data.ar_lobs}</TableCell>
              <TableCell>{data.ar_l15}</TableCell>
              <TableCell>{data.ar_pound}</TableCell>
              <TableCell>{data.ar_gallon}</TableCell>
              <TableCell>{data.ar_barrel}</TableCell>
              <TableCell>{data.ar_mt}</TableCell>
              <TableCell>{data.ar_lt}</TableCell>
              <TableCell>{data.status}</TableCell>
              <TableCell>{data.action}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={30}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>Jenis Ukur</TableCell>
                      <TableCell>Waktu Ukur</TableCell>
                      <TableCell>Tangki</TableCell>
                      <TableCell>Material</TableCell>
                      <TableCell>Level Minyak</TableCell>
                      <TableCell>Suhu Dalam</TableCell>
                      <TableCell>Suhu Luar</TableCell>
                      <TableCell>Density Obs</TableCell>
                      <TableCell>Liter Obs</TableCell>
                      <TableCell>Liter15</TableCell>
                      <TableCell>Pound</TableCell>
                      <TableCell>Gallon</TableCell>
                      <TableCell>Barrel</TableCell>
                      <TableCell>MT</TableCell>
                      <TableCell>LT</TableCell>
                      <TableCell>Juru Ukur</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsStock.map((stock) => (
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="center">
                          <Box
                            sx={{
                              p: 1,
                              color: "blue",
                              border: "1px solid blue",
                              borderRadius: 1,
                              bgcolor: blue[100],
                            }}
                          >
                            {stock.jenis_ukur}
                          </Box>
                        </TableCell>
                        <TableCell>{stock.waktu_ukur}</TableCell>
                        <TableCell>{stock.tangki}</TableCell>
                        <TableCell>{stock.material}</TableCell>
                        <TableCell>{stock.level_minyak}</TableCell>
                        <TableCell>{stock.suhu_dalam}</TableCell>
                        <TableCell>{stock.suhu_luar}</TableCell>
                        <TableCell>{stock.density_obs}</TableCell>
                        <TableCell>{stock.lobs}</TableCell>
                        <TableCell>{stock.l15}</TableCell>
                        <TableCell>{stock.pound}</TableCell>
                        <TableCell>{stock.gallon}</TableCell>
                        <TableCell>{stock.barrel}</TableCell>
                        <TableCell>{stock.mt}</TableCell>
                        <TableCell>{stock.lt}</TableCell>
                        <TableCell>{stock.juru_ukur}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Collapse>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  );
};

export default Penerimaan;
