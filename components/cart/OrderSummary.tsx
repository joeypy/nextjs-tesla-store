import { Grid, Typography } from "@mui/material";
import React from "react";
import { initialData } from "../../database/products";

interface Props {}

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export const OrderSummary = (props: Props) => {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Typography>N° Productos</Typography>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="end">
          <Typography>3 items</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>Subtotal</Typography>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="end">
          <Typography>{`$${155.36}`}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>Impuestos (15%)</Typography>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="end">
          <Typography>{`$${35.34}`}</Typography>
        </Grid>

        <Grid item xs={6} sx={{ mt: 2 }}>
          <Typography variant="subtitle1">Total</Typography>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="end" sx={{ mt: 2 }}>
          <Typography variant="subtitle1">{`$${186.34}`}</Typography>
        </Grid>
      </Grid>
    </>
  );
};
