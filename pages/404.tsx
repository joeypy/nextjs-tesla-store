import { Box, Typography } from "@mui/material";
import React from "react";
import { ShopLayout } from "../components/layout";

type Props = {};

const Custom404 = (props: Props) => {
  return (
    <ShopLayout
      title="Page not found"
      pageDescription="No hay nada que mostrar aquí"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 100px)"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Typography variant="h1" component="h1" fontSize={45} fontWeight={200}>
          404 <Box sx={{ display: { xs: "none", sm: "inline" } }}>|</Box>
        </Typography>
        <Typography
          marginLeft={2}
          fontSize={20}
          sx={{ textAlign: { xs: "center", sm: "left" } }}
        >
          No encontramos ninguna página aquí
        </Typography>
      </Box>
    </ShopLayout>
  );
};

export default Custom404;
