import * as React from "react";
import { useEffect, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Partido from "./Partido.js";
import Button from "@mui/material/Button";

function Grupo({
  Group,
  primerBanderaRival1,
  primerBanderaRival2,
  segundaBanderaRival1,
  segundaBanderaRival2,
  terceraBanderaRival1,
  terceraBanderaRival2,
  cuartaBanderaRival1,
  cuartaBanderaRival2,
  quintaBanderaRival1,
  quintaBanderaRival2,
  sextaBanderaRival1,
  sextaBanderaRival2,
}) {
  //fetch resolve
  const [resolve, setResolve] = useState();
  //await resolve
  const [stateResolve, setStateResolve] = useState(false);
  //datos filtrados
  const [partidos, setPartidos] = useState();
  //await datosFiltrados para render
  const [loading, setLoading] = useState(false);
  //Banderas
  //Resultados estimados
  let partido1;
  let partido2;
  let partido3;
  let partido4;
  let partido5;
  let partido6;

  let primerPartidoRival1 = null;
  let primerPartidoRival2 = null;

  let segundoPartidoRival1 = null;
  let segundoPartidoRival2 = null;

  let tercerPartidoRival1 = null;
  let tercerPartidoRival2 = null;

  let cuartoPartidoRival1 = null;
  let cuartoPartidoRival2 = null;

  let quintoPartidoRival1 = null;
  let quintoPartidoRival2 = null;

  let sextoPartidoRival1 = null;
  let sextoPartidoRival2 = null;

  // const [primerPartidoRival1, setPrimerPartidoRival1] = useState(null);
  // const [primerPartidoRival2, setPrimerPartidoRival2] = useState(null);

  // const [segundoPartidoRival1, setSegundoPartidoRival1] = useState(null);
  // const [segundoPartidoRival2, setSegundoPartidoRival2] = useState(null);

  // const [tercerPartidoRival1, setTercerPartidoRival1] = useState(null);
  // const [tercerPartidoRival2, setTercerPartidoRival2] = useState(null);

  // const [cuartoPartidoRival1, setCuartoPartidoRival1] = useState(null);
  // const [cuartoPartidoRival2, setCuartoPartidoRival2] = useState(null);

  // const [quintoPartidoRival1, setQuintoPartidoRival1] = useState(null);
  // const [quintoPartidoRival2, setQuintoPartidoRival2] = useState(null);

  // const [sextoPartidoRival1, setSextoPartidoRival1] = useState(null);
  // const [sextoPartidoRival2, setSextoPartidoRival2] = useState(null);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const fetchData = async () => {
    await fetch(`/fasegrupos/${Group}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setResolve(response);
        setStateResolve(true);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (stateResolve) {
      let partidosWithOutId = Object.entries(resolve).filter(([key, value]) => {
        if (key.match("par")) {
          return value;
        }
      });
      let parsePartidosArray = partidosWithOutId.map((partido) => {
        return Object.entries(partido[1]);
      });
      setPartidos(parsePartidosArray);
      setLoading(true);
    }
  }, [stateResolve]);

  // const handleOldResult = (partidosparseados) => {
  //   for (let x in partidosparseados) {
  //     if (x == 0) {
  //       primerPartidoRival1 = partidosparseados[x][1][1];
  //       primerPartidoRival2 = partidosparseados[x][2][1];
  //     }
  //     if (x == 1) {
  //       segundoPartidoRival1 = partidosparseados[x][1][1];
  //       segundoPartidoRival2 = partidosparseados[x][2][1];
  //     }
  //     if (x == 2) {
  //       tercerPartidoRival1 = partidosparseados[x][1][1];
  //       tercerPartidoRival2 = partidosparseados[x][2][1];
  //     }
  //     if (x == 3) {
  //       cuartoPartidoRival1 = partidosparseados[x][1][1];
  //       cuartoPartidoRival2 = partidosparseados[x][2][1];
  //     }
  //     if (x == 4) {
  //       quintoPartidoRival1 = partidosparseados[x][1][1];
  //       quintoPartidoRival2 = partidosparseados[x][2][1];
  //     }
  //     if (x == 5) {
  //       sextoPartidoRival1 = partidosparseados[x][1][1];
  //       sextoPartidoRival2 = partidosparseados[x][2][1];
  //     }
  //     console.log(primerPartidoRival1);
  //     console.log(segundoPartidoRival1);
  //     console.log(tercerPartidoRival1);
  //     console.log(cuartoPartidoRival1);
  //     console.log(quintoPartidoRival1);
  //     console.log(sextoPartidoRival1);
  //   }
  // };

  const handleRivalLocal = (value, i, key, date) => {
    console.log(key);
    if (i === 0) {
      primerPartidoRival1 = {};
      primerPartidoRival1[key] = parseInt(value);
      let fecha = { fecha: date };
      partido1 = { ...partido1, ...fecha, ...primerPartidoRival1 };
    } else if (i === 1) {
      segundoPartidoRival1 = {};
      segundoPartidoRival1[key] = parseInt(value);
      let fecha = { fecha: date };
      partido2 = { ...partido2, ...fecha, ...segundoPartidoRival1 };
    } else if (i === 2) {
      tercerPartidoRival1 = {};
      tercerPartidoRival1[key] = parseInt(value);
      let fecha = { fecha: date };
      partido3 = { ...partido3, ...fecha, ...tercerPartidoRival1 };
    } else if (i === 3) {
      cuartoPartidoRival1 = {};
      cuartoPartidoRival1[key] = parseInt(value);
      let fecha = { fecha: date };
      partido4 = { ...partido4, ...fecha, ...cuartoPartidoRival1 };
    } else if (i === 4) {
      quintoPartidoRival1 = {};
      quintoPartidoRival1[key] = parseInt(value);
      let fecha = { fecha: date };
      partido5 = { ...partido5, ...fecha, ...quintoPartidoRival1 };
    } else if (i === 5) {
      sextoPartidoRival1 = {};
      sextoPartidoRival1[key] = parseInt(value);
      let fecha = { fecha: date };
      partido6 = { ...partido6, ...fecha, ...sextoPartidoRival1 };
    }
  };
  const handleRivalVisitate = (value, i, key) => {
    if (i === 0) {
      primerPartidoRival2 = {};
      primerPartidoRival2[key] = parseInt(value);
      partido1 = { ...partido1, ...primerPartidoRival2, puntos: 0 };
    } else if (i === 1) {
      segundoPartidoRival2 = {};
      segundoPartidoRival2[key] = parseInt(value);
      partido2 = { ...partido2, ...segundoPartidoRival2, puntos: 0 };
    } else if (i === 2) {
      tercerPartidoRival2 = {};
      tercerPartidoRival2[key] = parseInt(value);
      partido3 = { ...partido3, ...tercerPartidoRival2, puntos: 0 };
    } else if (i === 3) {
      cuartoPartidoRival2 = {};
      cuartoPartidoRival2[key] = parseInt(value);
      partido4 = { ...partido4, ...cuartoPartidoRival2, puntos: 0 };
    } else if (i === 4) {
      quintoPartidoRival2 = {};
      quintoPartidoRival2[key] = parseInt(value);
      partido5 = { ...partido5, ...quintoPartidoRival2, puntos: 0 };
    } else if (i === 5) {
      sextoPartidoRival2 = {};
      sextoPartidoRival2[key] = parseInt(value);
      partido6 = { ...partido6, ...sextoPartidoRival2, puntos: 0 };
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      partido1 === undefined ||
      Object.entries(partido1).length < 4 ||
      Object.values(partido1).includes(NaN)
    ) {
      alert("Verifica que todos los resultados esten completos");
      return;
    } else if (
      partido2 === undefined ||
      Object.entries(partido2).length < 4 ||
      Object.values(partido2).includes(NaN)
    ) {
      alert("Verifica que todos los resultados esten completos");
      return;
    } else if (
      partido3 === undefined ||
      Object.entries(partido3).length < 4 ||
      Object.values(partido3).includes(NaN)
    ) {
      alert("Verifica que todos los resultados esten completos");
      return;
    } else if (
      partido4 === undefined ||
      Object.entries(partido4).length < 4 ||
      Object.values(partido4).includes(NaN)
    ) {
      alert("Verifica que todos los resultados esten completos");
      return;
    } else if (
      partido5 === undefined ||
      Object.entries(partido5).length < 4 ||
      Object.values(partido5).includes(NaN)
    ) {
      alert("Verifica que todos los resultados esten completos");
      return;
    } else if (
      partido6 === undefined ||
      Object.entries(partido6).length < 4 ||
      Object.values(partido6).includes(NaN)
    ) {
      alert("Verifica que todos los resultados esten completos");
      return;
    }
    let key = Group;
    let obj = {};
    let body = [
      {
        partido1,
        partido2,
        partido3,
        partido4,
        partido5,
        partido6,
        puntos: 0,
      },
    ];
    obj[key] = body;
    await fetch(`/fasegrupos/resultados`, {
      method: "PUT",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response);
    });
  };
  return (
    <>
      {loading ? (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 2, sm: 8, md: 12 }}
            >
              {partidos.map((partido, i) => (
                <Grid xs={2} sm={4} md={4} key={i}>
                  <Item>
                    <Partido
                      partido={partido}
                      id={i}
                      onchangeLocal={handleRivalLocal}
                      onchangeVisitante={handleRivalVisitate}
                      BanderaRival1={
                        i === 0
                          ? primerBanderaRival1
                          : i === 1
                          ? segundaBanderaRival1
                          : i === 2
                          ? terceraBanderaRival1
                          : i === 3
                          ? cuartaBanderaRival1
                          : i === 4
                          ? quintaBanderaRival1
                          : i === 5
                          ? sextaBanderaRival1
                          : ""
                      }
                      BanderaRival2={
                        i === 0
                          ? primerBanderaRival2
                          : i === 1
                          ? segundaBanderaRival2
                          : i === 2
                          ? terceraBanderaRival2
                          : i === 3
                          ? cuartaBanderaRival2
                          : i === 4
                          ? quintaBanderaRival2
                          : i === 5
                          ? sextaBanderaRival2
                          : ""
                      }
                    />
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Grid container spacing={0} direction="row" alignItems="center">
            <Button
              onClick={(e) => handleSubmit(e)}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, fontSize: 25, width: 220, borderRadius: 15 }}
            >
              Enviar
            </Button>
          </Grid>
        </>
      ) : (
        <>cargando...</>
      )}
    </>
  );
}

export default Grupo;
