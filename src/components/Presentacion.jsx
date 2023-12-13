// Presentacion.jsx
import React from 'react';
import imagenQuienesSomos from '../images/logo.jpeg';  // Ajusta la ruta según la ubicación de tu imagen

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    marginTop: '100px', // Ajusta la distancia desde arriba según tus necesidades
  },
  leftContainer: {
    flex: 1,
    marginRight: '50px',  // Ajusta el espacio entre la imagen y el texto
  },
  rightContainer: {
    flex: 1,
    paddingRight: '20px',  // Ajusta el espaciado a la derecha del texto
  },
  image: {
    maxWidth: '1200px',  // Ajusta el tamaño de la imagen según tus necesidades
    maxHeight: '800px', // Ajusta el tamaño de la imagen según tus necesidades
    width: '100%',  // Para asegurarse de que la imagen ocupe el 100% del contenedor
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  text: {
    fontSize: '20px',
    textAlign: 'justify',
  },
};

const Presentacion = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftContainer}>
        <img src={imagenQuienesSomos} alt="Imagen Quiénes Somos" style={styles.image} />
      </div>
      <div style={styles.rightContainer}>
        <div style={styles.title}>¿Quiénes somos?</div>
        <div style={styles.text}>
          {/* Coloca aquí el texto que deseas mostrar */}
          Desde su inicio, Juan del Sur ha experimentado un crecimiento sostenible, ampliando su presencia en nuevas ubicaciones estratégicas. Este crecimiento se ha basado en comprender las demandas locales y adaptarse a las preferencias de los consumidores, consolidando así su posición en el mercado de supermercados en Bolivia.
          Juan del Sur no solo se trata de un lugar para realizar compras, sino que también ha cultivado un fuerte vínculo con las comunidades a las que sirve. A través de iniciativas locales, patrocinios y programas de responsabilidad social empresarial, la cadena demuestra su compromiso con el bienestar y el desarrollo de las comunidades locales.

        </div>
      </div>
    </div>
  );
};

export default Presentacion;
