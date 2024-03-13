export const InfoCard = ({ title, amount, icon, loading }) => {
  return (
    <div
      className={`flex items-center justify-center h-40 rounded  bg-gradient-to-r from-[#5b9ae4] to-[#3568a2]`}
    >
      {loading ? (
        <div className="flex-col gap-4 w-full flex items-center justify-center">
          <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full"></div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-2xl text-[#292929] ">{icon}</p>
          <p className="text-sm font-semibold text-[#3d3d3d]">{title}</p>
          <p className="text-lg font-bold text-[#3d3d3d]">{amount}</p>
        </div>
      )}
    </div>
  );
};
