export const ModalUserInfo = ({ data }) => {
  const getSexo = (sexo) => {
    if (sexo === "M") {
      return "Masculino";
    } else if (sexo === "F") {
      return "Femenino";
    } else {
      return "Otro";
    }
  };

  return (
    <>
      <div className="text-left">
        <p>
          <strong>DNI:</strong> {data.dni}
        </p>
        <p>
          <strong>Nombre:</strong> {data.nombre}
        </p>
        <p>
          <strong>Apellido:</strong> {data.apellido}
        </p>
        <p>
          <strong>Edad:</strong> {data.edad}
        </p>
        <p>
          <strong>Dirección:</strong> {data.direccion}
        </p>
        <p>
          <strong>Teléfono:</strong> {data.telefono}
        </p>
        <p>
          <strong>Correo:</strong> {data.correo}
        </p>
        <p>
          <strong>Estado:</strong> {data.estado === 0 ? "Inactivo" : "Activo"}
        </p>
        <p>
          <strong>Fecha de nacimiento:</strong>{" "}
          {data.fecha_nacimiento.split("T")[0]}
        </p>
        <p>
          <strong>Sexo:</strong> {getSexo(data.sexo)}
        </p>
      </div>
    </>
  );
};
