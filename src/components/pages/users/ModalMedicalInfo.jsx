export const ModalMedicalInfo = ({ data }) => {
  return (
    <>
      <div className="text-left">
        <p>
          <strong>Altura:</strong> {data.altura} cm
        </p>
        <p>
          <strong>Peso:</strong> {data.peso} kg
        </p>
        <p>
          <strong>Cintura:</strong> {data.med_cintura} cm
        </p>
        <p>
          <strong>Cadera:</strong> {data.med_cadera} cm
        </p>
        <p>
          <strong>Grasa corporal:</strong> {data.porc_grasa_corporal}%
        </p>
        <p>
          <strong>Objetivo:</strong> {data.objetivo}
        </p>
        <p>
          <strong>Operación:</strong> {data.operacion}
        </p>
        <p>
          <strong>Enfermedad:</strong> {data.enfermedad}
        </p>
      </div>
    </>
  );
};
