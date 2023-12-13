// Inicio.jsx
import React from 'react';
import descargaImage from '../images/diagrama.png';  // Import the image

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    marginTop: '50px',
  },
  subtitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  sectionContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '30px',
  },
  section: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textDecoration: 'underline',
  },
  text: {
    fontSize: '20px',
    textAlign: 'justify',
    marginBottom: '20px',
  },
  centerTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  centerImage: {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '20px',
  },
  smallerText: {
    fontSize: '20px', // Tamaño de fuente más pequeño
    textAlign: 'justify',
    marginBottom: '10px', // Espaciado más pequeño
    marginLeft: '25px', // Separación del borde izquierdo
    marginRight: '25px', // Separación del borde derecho
  },
};

const Inicio = () => {
  return (
    <div style={styles.container}>
      <div style={styles.subtitle}>Fase de Inicio</div>
      <div style={styles.sectionContainer}>
        <div style={styles.section}>
          <div style={styles.sectionTitle}>
            <a href="https://docs.google.com/document/d/173IXYl_bmQitw08Tt6llxwZ5F38DSFhghylybNh88Jk/edit" style={{ color: 'grey', textDecoration: 'underline', cursor: 'pointer' }}>
              Términos de Referencia
            </a>
          </div>
          <div style={styles.text}>
            Juan del Sur, establecido en 2018, ha experimentado un crecimiento constante en Bolivia, consolidándose como una opción destacada para los consumidores locales mediante una expansión estratégica y un fuerte vínculo comunitario. Este proyecto propone diseñar un sistema ERP que centralice las sucursales, optimizando la gestión de inventarios, usuarios y facturación. Los objetivos incluyen la integración de procesos comerciales, automatización de tareas y seguridad de datos. Aunque la cadena ha demostrado resiliencia y adaptabilidad, las limitaciones del proyecto excluyen áreas como contrataciones y finanzas.
          </div>
        </div>
        <div style={styles.section}>
          <div style={styles.sectionTitle}>
            <a href="https://docs.google.com/document/d/1HAVf9fqUTE8Wcp91eTFNs7_3ZbM6KFFCmeuVALN2-Qg/edit" style={{ color: 'grey', textDecoration: 'underline', cursor: 'pointer' }}>
              Especificación de Requerimientos de Software
            </a>
          </div>
          <div style={styles.smallerText}>
            Las especificación de requisitos de software y hardware para el proyecto de implementación del "Sistema ERP Centralizado para Sucursales de Supermercado" en el Supermercado Juan del Sur. El objetivo es mejorar la eficiencia en la gestión de almacenes, clientes y facturación a través de un sistema ERP. Se detallan funciones clave como la gestión de inventario, usuarios y facturación, respaldadas por un diagrama BPWIN que ilustra los procesos a diferentes niveles. Los requisitos funcionales incluyen la creación, modificación y eliminación de registros, así como la generación y eliminación de facturas, con énfasis en la seguridad y el rendimiento del sistema.
          </div>
        </div>
        <div style={styles.section}>
          <div style={styles.sectionTitle}>
            <a href="https://docs.google.com/document/d/1o1BX1TCJMTQQ5V_7LjFofw8QsvVYsC6aXz-I_Ilcl0M/edit" style={{ color: 'grey', textDecoration: 'underline', cursor: 'pointer' }}>
              Carta de aceptación
            </a>
          </div>
          <div style={styles.text}>
            En esta comunicación, el equipo de desarrollo JAMBAO expresa su entusiasmo y compromiso con el proyecto de implementación del sistema ERP para el Supermercado Juan Del Sur. Destacan la importancia estratégica de centralizar procesos comerciales y delinean los módulos clave que abordarán. Se enfocan en una planificación meticulosa, asignando roles específicos y proponiendo un plan de pagos que refleje la progresión del proyecto. Además, subrayan su compromiso con la calidad, la innovación y la colaboración efectiva, asegurando a la gerencia del supermercado una dedicación completa para alcanzar y superar expectativas.
          </div>
        </div>
      </div>
      <div style={styles.centerTitle}></div>
      <img
        src={descargaImage}
        alt="Descripción de la imagen"
        style={styles.centerImage}
      />
    </div>
  );
};

export default Inicio;
