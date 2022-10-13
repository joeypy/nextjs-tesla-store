import React from "react";
import NextLink from "next/link";
import { Chip, Grid, Link } from "@mui/material";
import { ShopLayout } from "../../components/layout";
import { DataGrid, GridColDef, GridCellParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "fullname", headerName: "Nombre Completo", width: 300 },
  {
    field: "paid",
    headerName: "Pagada",
    description: "Muestra información si está pagada la orden o no",
    width: 200,
    renderCell: (params: GridCellParams) => {
      return params.row.paid ? (
        <Chip color="success" label="Pagada" variant="outlined" />
      ) : (
        <Chip color="error" label="No Pagada" variant="outlined" />
      );
    },
  },
  {
    field: "order",
    headerName: "Ver orden",
    width: 200,
    renderCell: (params: GridCellParams) => {
      return (
        <NextLink href={`/orders/${params.row.id}`} passHref>
          <Link underline="always">Ver orden</Link>
        </NextLink>
      );
    },
  },
];

const rows = [
  { id: 1, paid: false, fullname: "Joseph Boscan" },
  { id: 2, paid: true, fullname: "Jin Boscan" },
  { id: 3, paid: false, fullname: "Ellie Boscan" },
  { id: 4, paid: true, fullname: "Eowyn Boscan" },
  { id: 5, paid: false, fullname: "Senkku Boscan" },
  { id: 6, paid: true, fullname: "Lucy Boscan" },
];

const HistoryPage = () => {
  return (
    <ShopLayout
      title="Historial de ordenes"
      pageDescription="Historial de ordenes del cliente"
    >
      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;
