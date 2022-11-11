import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

import "./Partido.css";

function Partido({
  partido,
  id,
  onchangeLocal,
  onchangeVisitante,
  BanderaRival1,
  BanderaRival2,
}) {
  function capitalize(str) {
    str = str.toUpperCase();
    return str;
  }
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <img
          src={BanderaRival1}
          alt="primerRival"
          style={{ width: 80, marginRight: "12%" }}
        />

        <img
          src={BanderaRival2}
          alt="segundoRival"
          style={{ width: 80, marginLeft: "5%" }}
        />
      </Grid>
      <br />
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <label htmlFor={partido[1][0]} style={{ fontSize: 18 }}>
          {capitalize(partido[1][0])}{" "}
        </label>
        <input
          className="input"
          type="number"
          placeholder={partido[1][1] ? `*:${partido[1][1]}` : "#"}
          id={partido[1][0]}
          autoComplete="off"
          onChange={(e) =>
            onchangeLocal(e.target.value, id, partido[1][0], partido[0][1])
          }
          style={{
            width: "12%",
            marginLeft: "3%",
            marginRight: "3%",
            borderRadius: 5,
            borderColor: "grey",
            fontSize: 20,
          }}
        />
        <p>VS</p>
        <input
          type="number"
          placeholder={partido[2][1] ? `*:${partido[2][1]}` : "#"}
          id={partido[2][0]}
          onChange={(e) => onchangeVisitante(e.target.value, id, partido[2][0])}
          style={{
            width: "12%",
            marginLeft: "3%",
            marginRight: "3%",
            borderRadius: 5,
            borderColor: "grey",
            fontSize: 20,
          }}
        />
        <label htmlFor={partido[2][0]} style={{ fontSize: 18 }}>
          {capitalize(partido[2][0])}
        </label>
      </Grid>
      <p style={{ fontSize: 18 }}>{partido[0][1]}</p>
    </>
  );
}

export default Partido;
