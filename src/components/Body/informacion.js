import React from 'react';

const Informacion = () => {
  const sectionStyle = {
    textAlign: 'left',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const headingStyle = {
    fontSize: '20px',
    color: '#333',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '15px',
    lineHeight: '1.5',
    marginBottom: '20px',
  };

  return (
    <div style={sectionStyle}>
      <h1 style={headingStyle}>INFORMACION</h1>
      <section>
        <h3 style={headingStyle}>¿QUE PRODUCTOS ESTAN DISPONIBLES?</h3>
        <p style={paragraphStyle}>
          Todos los productos de nuestra página están disponibles para ser encargados. No trabajamos con stock.
        </p>
      </section>

      <section>
        <h3 style={headingStyle}>¿CUAL ES LA DEMORA DE LOS PEDIDOS?</h3>
        <p style={paragraphStyle}>
          El tiempo aproximado de los pedidos es de 40 días ya que los productos son importados. La demora en general es de 40 días una vez realizado el pago.
        </p>
      </section>

      <section>
        <h3 style={headingStyle}>¿CUAL ES EL COSTO DE ENVIO?</h3>
        <p style={paragraphStyle}>
          El costo de envío será mostrado en base al total de la compra y ubicación, en el checkout, en el momento previo a la compra.
        </p>
      </section>

      <section>
        <h3 style={headingStyle}>¿DONDE RECIBIR EL PEDIDO?</h3>
        <p style={paragraphStyle}>
          Realizamos envíos a todo el país mediante Correo Argentino. Los productos pueden recibirlos en el domicilio o en la sucursal del correo.
        </p>
      </section>

      <section>
        <h3 style={headingStyle}>¿CUAL ES LA CALIDAD DE NUESTROS BOTINES?</h3>
        <p style={paragraphStyle}>
          Vendemos pares de alta gama, calidad OG. Es la calidad más alta dentro de las réplicas, están fabricados con materiales similares a un par “legítimo” pero no está verificado u autorizado por la marca comercial (Nike, Adidas, etc).
          Por lo tanto, conservan tanta calidad como confortabilidad que un par “legítimo”. Existe poca diferencia entre un par de esta calidad y el original.
          Lo aclaramos meramente para ser lo más transparentes posible con nuestros clientes y para justificar nuestros muy bajos costos.
        </p>
      </section>

      <section>
        <h3 style={headingStyle}>POLITICA DE DEVOLUCION</h3>
        <p style={paragraphStyle}>
          Las devoluciones son aceptadas en caso de que el producto te llegue en malas condiciones o haya un error por parte de la Empresa. No hacemos cambios por tallas o errores externos a nosotros.
        </p>
      </section>
    </div>
  );
};

export default Informacion;
