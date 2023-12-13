import React from 'react';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center',
    padding: '20px',
    marginTop: '50px',
  },
  leftSection: {
    flex: 1,
  },
  rightSection: {
    flex: 1,
    color: 'gray',
    cursor: 'pointer',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '18px',
    textAlign: 'justify',
    color: 'black',
  },
};

const Control = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
        <div style={styles.title}>Fase de Control de Calidad e Implementación</div>
      </div>
      <div style={styles.rightSection}>
        <a href="https://docs.google.com/document/d/1uu093gZp7BT0ahNyhjqAMSTeB-zU4EbaUU2eq5eqtXY/edit" style={{ color: 'gray', textDecoration: 'underline', cursor: 'pointer' }}>
          <div style={styles.subtitle}>Pruebas y control de calidad</div>
        </a>
        <div style={styles.text}>
        El proyecto seguirá la metodología SCRUM, enfocándose en pruebas continuas a lo largo del desarrollo para permitir ajustes rápidos. Las pruebas incluirán aspectos como Cross-Browser, Aceptación del Usuario, Regresión Automatizada, Seguridad, Usabilidad, Unitarias, Integración y Rendimiento. Para el alojamiento del sistema E-Learning a nivel nacional, se optará por un servidor físico con características de procesamiento eficiente, amplia capacidad de almacenamiento y servicios de escalabilidad. La elección se basa en procesadores rápidos, configuración eficiente de caché y conexiones de red estables. Además, se considera la necesidad de herramientas de monitoreo integradas para evaluar el rendimiento y la estabilidad del sistema después del lanzamiento.
        </div>
      </div>
    </div>
  );
};

export default Control;
