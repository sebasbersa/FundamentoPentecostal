import React from 'react';

const NuevoRecurso = () => {
  return (
  <div>
      <h1>Subir nuevo recurso</h1>
      titulo <input type="text"></input>
      <br/>
      Descripcion <textarea></textarea>
      <br />
      Archivo: <input type="file"></input>
      <br />
      <button type="button" class="btn btn-danger">Guardar</button>
      <button type="button" class="btn btn-primary">Guardar</button>



  </div>
  );
};

export default NuevoRecurso;
