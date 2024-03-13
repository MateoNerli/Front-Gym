import { Cards } from "./cards";

export const HomePage = () => {
  return (
    <div className="bg-[#d4d4cd]">
      <div className="px-4 py-8 ml-20 md:ml-0">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};
