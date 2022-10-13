import React from "react";
import NextLink from "next/link";
import { AuthLayout } from "../../components/layout/AuthLayout";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";

const LoginPage = () => {
  return (
    <AuthLayout title={"Ingresar"}>
      <Box sx={{ width: 350, padding: "10px 20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <Typography variant="h1" component="h1">
              Crear cuenta
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField label="Nombre completo" fullWidth/>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Correo electrónico" fullWidth/>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Contraseña" type="password" fullWidth/>
          </Grid>

          <Grid item xs={12}>
            <Button
              color="secondary"
              className="circular-btn"
              size="large"
              fullWidth
            >
              Registrarse
            </Button>
          </Grid>

          <Grid item xs={12} display="flex" justifyContent="end">
            <NextLink href="/auth/login" passHref>
              <Link underline="always" variant="subtitle1">¿Ya tienes cuenta?</Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
};

export default LoginPage;
