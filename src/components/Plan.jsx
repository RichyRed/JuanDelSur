// Plan.jsx
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
  sectionsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '50px',
  },
  section: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textDecoration: 'underline',
  },
  link: {
    color: 'gray',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  text: {
    fontSize: '20px',
    textAlign: 'justify',
    marginBottom: '30px',
  },
  smallerText: {
    fontSize: '20px', // Tamaño de fuente más pequeño
    textAlign: 'justify',
    marginBottom: '10px', // Espaciado más pequeño
    marginLeft: '25px', // Separación del borde izquierdo
    marginRight: '25px', // Separación del borde derecho
  },
};

const Plan = () => {
  return (
    <div style={styles.container}>
      <div style={styles.title}>Fase de Planificación</div>
      <div style={styles.sectionsContainer}>
        <div style={styles.section}>
          <a href="https://docs.google.com/document/d/176GqFle8TWh6IAGZSaPDOSWLSILo-uHrxf0d3KvOLns/edit" style={styles.link}>
            <div style={styles.subtitle}>Plan de Proyectos y Gestión de Riesgos</div>
          </a>
          <div style={styles.text}>
            El proyecto consiste en el desarrollo de un sistema web para el supermercado Juan del Sur, enfocado en la gestión de inventarios, ventas, compras, usuarios y facturación. Se busca implementar un sistema ERP que centralice la administración de múltiples sucursales en La Paz. El contenido incluye módulos detallados para la gestión de inventario, usuarios y facturación, con énfasis en la emisión de facturas electrónicas conforme a la legislación.  El diseño propuesto destaca por una interfaz intuitiva, un inventario organizado y una facturación fácil de entender.
          </div>
        </div>
        <div style={styles.section}>
          <a href="https://docs.google.com/document/d/1sz9Tq8K10HyC7k7E-yWbqHazWTSfEmpvoTO-pqisrLc/edit" style={styles.link}>
            <div style={styles.subtitle}>Estimación de Tiempo</div>
          </a>
          <div style={styles.smallerText}>
            El proyecto contempla diversas funcionalidades clave que abarcan tanto el desarrollo del frontend, backend y bases de datos para un sistema integral de gestión de inventarios y facturación. Entre estas funcionalidades se incluyen la creación, modificación y eliminación de registros en el almacén, así como la obtención de todos los registros existentes. Además, se abordan aspectos cruciales como el registro de usuarios con gestión de roles, validación de correo electrónico, generación y eliminación de facturas, la creación de reportes de facturación y la búsqueda por número de factura.
          </div>
        </div>
        <div style={styles.section}>
          <a href="https://docs.google.com/document/d/1e6_l6GLJboHcYRVCIo5y9RMD-x8GMJwjmlPGKihn_Fg/edit" style={styles.link}>
            <div style={styles.subtitle}>Estimación de Costos</div>
          </a>
          <div style={styles.text}>
            El documento aborda la estimación de costos para la implementación de un "Sistema ERP Centralizado para Sucursales de Supermercado" en el Supermercado Juan del Sur. Se destaca la importancia de la estimación en la planificación exitosa de proyectos ERP, utilizando el modelo COCOMO Intermedio. Este enfoque proporciona una estructura equilibrada para evaluar el esfuerzo y los recursos requeridos. La fórmula de estimación se basa en atributos específicos del proyecto y constantes del modelo COCOMO.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
