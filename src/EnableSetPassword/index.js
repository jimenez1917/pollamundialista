import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
                En el pasado ya has ingresado una contraseña: 1. ¿No la
                recuerdas?, haz click en contacto para volver a registrarte.
                <br /> 2. ¿La recuerdas?, haz click en Login para iniciar sesión
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a
                  href="https://wa.link/g2r89o"
                  target="_blank"
                  rel="noreferrer"
                >
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
