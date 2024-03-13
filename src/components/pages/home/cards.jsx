import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faCartShopping,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { InfoCard } from "./infoCard";

import { useFetch } from "../../../hooks/useFetch";

export const Cards = () => {
  const { data: data1, loading } = useFetch("http://localhost:3000/users/list");
  const { data: data2 } = useFetch("");
  const { data: data3 } = useFetch("");

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <InfoCard
          loading={loading}
          title={data1?.meta?.title}
          amount={data1?.meta?.total}
          icon={<FontAwesomeIcon icon={faUsers} />}
        />
        <InfoCard
          loading={loading}
          title={data2?.meta?.title}
          amount={data2?.meta?.total}
          icon={<FontAwesomeIcon icon={faTag} />}
        />
        <InfoCard
          loading={loading}
          title={data3?.meta?.title}
          amount={data3?.meta?.total}
          icon={<FontAwesomeIcon icon={faCartShopping} />}
        />
      </div>
    </>
  );
};
