export const ModalPlanInfo = ({ data }) => {
  return (
    <>
      <div className="text-left">
        <p>
          <strong>Plan:</strong> {data.nombre_plan}
        </p>
        <p>
          <strong>Promoción:</strong> {data.nombre_promo}
        </p>
        <p>
          <strong>Fecha de inicio:</strong> {data.fecha_ini.split("T")[0]}
        </p>
        <p>
          <strong>Fecha de fin:</strong> {data.fecha_fin.split("T")[0]}
        </p>
      </div>
    </>
  );
};
