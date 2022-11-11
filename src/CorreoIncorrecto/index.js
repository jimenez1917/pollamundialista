import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import blue from "@mui/material/colors/blue";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#000",
    },
  },
});

export default function SignIn() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "white",
          }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Error
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Tu Correo esta incorrecto
                <br /> 1. ESTOY SEGURO QUE ES MI CORREO, haz click en contacto
                para volver a registrarte.
                <br /> 2. VOLVER A INTENTAR, haz click en Login para iniciar
                sesión
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a href="https://wa.link/g2r89o" target="_blank">
                  Contacto
                </a>
              </Button>
              <Button size="small">
                <Link to="/Login">Login</Link>
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </ThemeProvider>
  );
}