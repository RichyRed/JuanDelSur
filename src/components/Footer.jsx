import React from "react";

const styles = {
  footer: {
    backgroundColor: "#ffcc00", // Celeste
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px", // Adjust as needed
    color: "#000000", // Amarillo
    boxSizing: "border-box", // Agrega esta propiedad para que el padding no afecte el ancho total
  },
  section: {
    flex: 1,
    textAlign: "center",
  },
};

const Footer = () => {
  return (
    <div style={styles.footer}>
      <div style={styles.section}>Pablo Badani</div>
      <div style={styles.section}>Juan Claudio Carrasco</div>
      <div style={styles.section}>Ariane Garrett</div>
      <div style={styles.section}>Miguel Molina</div>
      <div style={styles.section}>Gabriel Neme</div>
      <div style={styles.section}>Richard Rojas</div>
    </div>
  );
};

export default Footer;
