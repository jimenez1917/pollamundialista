import React, { useState, useEffect } from "react";
import Grupo from "./components/Grupo.js";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

function FaseGrupos() {
  const fetchData = async () => {
    console.log("llama");
    await fetch("/fasegrupos", {
      method: "GET",
    }).then((response) => {
      console.log(response);
      if (response.redirected) {
        window.location.href = response.url;
      }
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [enableGrupoA, setEnableGrupoA] = useState(false);
  const [enableGrupoB, setEnableGrupoB] = useState(false);
  const [enableGrupoC, setEnableGrupoC] = useState(false);
  const [enableGrupoD, setEnableGrupoD] = useState(false);
  const [enableGrupoE, setEnableGrupoE] = useState(false);
  const [enableGrupoF, setEnableGrupoF] = useState(false);
  const [enableGrupoG, setEnableGrupoG] = useState(false);
  const [enableGrupoH, setEnableGrupoH] = useState(false);
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          sx={{
            display: "flex",
            "& > *": {
              m: 1,
            },
          }}
        >
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={() => setEnableGrupoA(!enableGrupoA)}>
              Grupo A
            </Button>
            <Button onClick={() => setEnableGrupoB(!enableGrupoB)}>
              Grupo B
            </Button>
            <Button onClick={() => setEnableGrupoC(!enableGrupoC)}>
              Grupo C
            </Button>
            <Button onClick={() => setEnableGrupoD(!enableGrupoD)}>
              Grupo D
            </Button>
            <Button onClick={() => setEnableGrupoE(!enableGrupoE)}>
              Grupo E
            </Button>
            <Button onClick={() => setEnableGrupoF(!enableGrupoF)}>
              Grupo F
            </Button>
            <Button onClick={() => setEnableGrupoG(!enableGrupoG)}>
              Grupo G
            </Button>
            <Button onClick={() => setEnableGrupoH(!enableGrupoH)}>
              Grupo H
            </Button>
          </ButtonGroup>
        </Box>
        <br />
        <br />
        {enableGrupoA ? (
          <>
            <Grupo
              Group="A"
              primerBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              primerBanderaRival2="https://yourfiles.cloud/uploads/26eb7088079d6929e04492002bc5e813/ECUADOR.png"
              segundaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/SENEGAL.png"
              segundaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/HOLANDA.png"
              terceraBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              terceraBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/SENEGAL.png"
              cuartaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/HOLANDA.png"
              cuartaBanderaRival2="https://yourfiles.cloud/uploads/26eb7088079d6929e04492002bc5e813/ECUADOR.png"
              quintaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/HOLANDA.png"
              quintaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              sextaBanderaRival1="https://yourfiles.cloud/uploads/26eb7088079d6929e04492002bc5e813/ECUADOR.png"
              sextaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/SENEGAL.png"
            />
          </>
        ) : (
          <></>
        )}
        {enableGrupoB ? (
          <>
            <Grupo
              Group="B"
              primerBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              primerBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              segundaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              segundaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              terceraBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              terceraBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              cuartaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              cuartaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              quintaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              quintaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              sextaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              sextaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
            />
          </>
        ) : (
          <></>
        )}
        {enableGrupoC ? (
          <>
            <Grupo
              Group="C"
              primerBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              primerBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              segundaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              segundaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              terceraBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              terceraBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              cuartaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              cuartaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              quintaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              quintaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              sextaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              sextaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
            />
          </>
        ) : (
          <></>
        )}
        {enableGrupoD ? (
          <>
            <Grupo
              Group="D"
              primerBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              primerBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              segundaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              segundaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              terceraBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              terceraBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              cuartaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              cuartaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              quintaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              quintaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              sextaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              sextaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
            />
          </>
        ) : (
          <></>
        )}
        {enableGrupoE ? (
          <>
            <Grupo
              Group="E"
              primerBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              primerBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              segundaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              segundaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              terceraBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              terceraBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              cuartaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              cuartaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              quintaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              quintaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              sextaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              sextaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
            />
          </>
        ) : (
          <></>
        )}
        {enableGrupoF ? (
          <>
            <Grupo
              Group="F"
              primerBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              primerBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              segundaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              segundaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              terceraBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              terceraBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              cuartaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              cuartaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              quintaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              quintaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              sextaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              sextaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
            />
          </>
        ) : (
          <></>
        )}
        {enableGrupoG ? (
          <>
            <Grupo
              Group="G"
              primerBanderaRival1="https://yourfiles.cloud/uploads/26eb7088079d6929e04492002bc5e813/ECUADOR.png"
              primerBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              segundaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              segundaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              terceraBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              terceraBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              cuartaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              cuartaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              quintaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              quintaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              sextaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              sextaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
            />
          </>
        ) : (
          <></>
        )}
        {enableGrupoH ? (
          <>
            <Grupo
              Group="H"
              primerBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              primerBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              segundaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              segundaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              terceraBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              terceraBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              cuartaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              cuartaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              quintaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              quintaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              sextaBanderaRival1="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
              sextaBanderaRival2="https://yourfiles.cloud/uploads/6312c7452e8278115fbc2754a83ba59a/QATAR.png"
            />
          </>
        ) : (
          <></>
        )}
      </Grid>
    </>
  );
}

export default FaseGrupos;
