// Cierre.jsx
import React from 'react';

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
  sectionSubtitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textDecoration: 'underline',
    color: 'gray', // Cambiado a color plomo
    cursor: 'pointer',
  },
  text: {
    fontSize: '20px',
    textAlign: 'justify',
  },
  smallerText: {
    fontSize: '20px',
    textAlign: 'justify',
    marginBottom: '10px',
    marginLeft: '25px',
    marginRight: '25px',
  },
};

const Cierre = () => {
  return (
    <div style={styles.container}>
      <div style={styles.subtitle}>Fase de Cierre</div>
      <div style={styles.sectionContainer}>
        <div style={styles.section}>
          <a href="https://docs.google.com/document/d/1aLTpYnXmUEWNSgwiddjh0B1497aU9lXLZdkd_DI6Puk/edit">
            <div style={styles.sectionSubtitle}>Manual de Usuario</div>
          </a>
          <div style={styles.smallerText}>
            Manual de Usuario para el Sistema ERP Centralizado del Supermercado Juan Del Sur es una guía integral diseñada para proporcionar a los usuarios una comprensión detallada y práctica del sistema. Este documento abarca aspectos cruciales como la gestión de inventario, la administración de usuarios y roles, y el proceso de facturación. Incluye instrucciones paso a paso sobre la creación, modificación y eliminación de registros de productos, así como el registro y manejo de usuarios con diferentes roles. Además, detalla el procedimiento para la generación y eliminación de facturas, junto con la obtención de reportes.
          </div>
        </div>
        <div style={styles.section}>
          <a href="https://docs.google.com/document/d/1cvTRP7usGahdTtR-d9yXJBxG09Z7gMx8mNp4QSAlghc/edit">
            <div style={styles.sectionSubtitle}>Carta de cierre </div>
          </a>
          <div style={styles.smallerText}>
            El equipo de desarrollo de JAMBAO se complace en anunciar la finalización y entrega del sistema diseñado para centralizar las sucursales de Supermercados "Juan del Sur". El producto, desarrollado de acuerdo con las especificaciones acordadas, se presenta como una plataforma intuitiva y funcional que facilitará la gestión de inventario y facturación de productos. Se adjunta a esta comunicación la documentación completa, incluyendo manuales de usuario y detalles técnicos.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cierre;
