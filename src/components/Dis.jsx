import React from 'react';

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    marginTop: '50px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  subtitlesContainer: {
    display: 'flex',
    justifyContent: 'center', // Centra los subtítulos horizontalmente
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '24px',
    color: 'gray',
    textDecoration: 'underline',
    cursor: 'pointer',
    marginRight: '20px', // Añade espacio entre los subtítulos
  },
  text: {
    fontSize: '20px',
    textAlign: 'justify',
    marginBottom: '20px',
  },
};

const Dis = () => {
  return (
    <div style={styles.container}>
      <div style={styles.title}>Fase de Diseño y Desarrollo</div>
      <div style={styles.subtitlesContainer}>
        <a href="https://drive.google.com/drive/u/0/folders/162kCjb9tW6h5ossuloSeksPBm60tEolL" style={styles.subtitle}>
          Nuestros Diagramas
        </a>
        <a href="https://www.figma.com/file/cagdDlk2byTaI4S9ecS5D5/Mockups-Juan-Del-Sur?type=design&node-id=0-1&mode=design&t=fkbKbkiFldo1q7gh-0" style={styles.subtitle}>
          Nuestros Mockups
        </a>
      </div>
      <div style={styles.text}>
        La Fase de Diseño y Desarrollo del proyecto para la implementación del sistema ERP en el Supermercado Juan Del Sur se llevará a cabo con un enfoque meticuloso y orientado a resultados. Comenzaremos con la elaboración detallada de un plan de trabajo que abarcará la estructuración del sistema, identificación de módulos clave, y asignación de roles específicos a nuestro equipo multidisciplinario.

        En primer lugar, nos sumergiremos en la planificación y diseño del ERP, creando un plan de implementación que contemple las particularidades del supermercado y sus sucursales. Este plan guiará la configuración del sistema, la personalización de formularios e informes, y la integración efectiva con sistemas existentes, como los de punto de venta y gestión de inventarios.
      </div>
    </div>
  );
};

export default Dis;
