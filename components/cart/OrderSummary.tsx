import NextLink from "next/link";
import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import { initialData } from "../../database/products";
import { ItemCounter } from "../ui";

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
          <Typography variant="body1">N° Productos</Typography>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="end">
          <Typography variant="body1">
            <strong>3 items</strong>
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body1">Subtotal</Typography>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="end">
          <Typography>
            <strong>{`$${155.36}`}</strong>
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body1">Impuestos (15%)</Typography>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="end">
          <Typography>
            <strong>{`$${35.34}`}</strong>
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body1">Total</Typography>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="end">
          <Typography>
            <strong>{`$${186.34}`}</strong>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
