import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import headerImage from "../images/descarga.jpeg";

const styles = {
  header: {
    backgroundColor: "#0770b7",
  },
  navButton: {
    color: "#fecd42",
    marginRight: "10px",
  },
  imageStyle: {
    position: "absolute",
    top: "0px",
    left: "0px",
    maxWidth: "60px",
  },
};

const NavBar = () => {
  return (
    <AppBar position="fixed" style={styles.header}>
      <Toolbar>
        <img src={headerImage} alt="Encabezado" style={styles.imageStyle} />
        <Box marginLeft="auto">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="text" style={styles.navButton}>
            Sistema ERP Centralizado para Sucursales del Supermercado Juan Del Sur 
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
