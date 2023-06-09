import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllOrdersOfUser } from "../../redux/actions/order";

const TrackOrder = () => {
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch]);

  const data = orders && orders.find((item) => item._id === id);

  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      {" "}
      <>
        {data && data?.status === "Processing" ? (
          <h1 className="text-[20px]">Siparişiniz mağaza tarafından hazırlanıyor.</h1>
        ) : data?.status === "Transferred to delivery partner" ? (
          <h1 className="text-[20px]">
            Siparişiniz kargo şirketine teslim edildi.
          </h1>
        ) : data?.status === "Shipping" ? (
          <h1 className="text-[20px]">
            Siparişiniz kargo şirketi tarafından teslim alındı.
          </h1>
        ) : data?.status === "Received" ? (
          <h1 className="text-[20px]">
            Siparişiniz şehrinize ulaştı.
          </h1>
        ) : data?.status === "On the way" ? (
          <h1 className="text-[20px]">
            Siparişiniz kargocu tarafından gün içinde teslim edilecektir.
          </h1>
        ) : data?.status === "Delivered" ? (
          <h1 className="text-[20px]">Siparişiniz teslim edildi!</h1>
        ) : data?.status === "Processing refund" ? (
          <h1 className="text-[20px]">İadeniz inceleniyor!</h1>
        ) : data?.status === "Refund Success" ? (
          <h1 className="text-[20px]">İadeniz başarılı!</h1>
        ) : null}
      </>
    </div>
  );
};

export default TrackOrder;
