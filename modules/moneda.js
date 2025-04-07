const { countries, currencies } = require('country-data');

function obtenerMoneda(codigoPais) {
  // Buscar el país por su código ISO Alpha-2
  const pais = countries[codigoPais];

  if (!pais) {
    // Verifico que el país exista
    return `El código ingresado no se encontró`;
  } else if(!pais.currencies.length){
    // Verifico que el país tenga alguna moneda asociada
    return `El país no tiene ninguna moneda asociada`;
  }

  // Obtener el código de la moneda (puede haber más de uno)
  const codigoMoneda = pais.currencies[0];

  // Buscar el nombre de la moneda usando el código
  const moneda = currencies[codigoMoneda];

  return moneda.name;
}

module.exports = obtenerMoneda;
