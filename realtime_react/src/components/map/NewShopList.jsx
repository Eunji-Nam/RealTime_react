import DebugStates from "components/DebugStates";
import ShopCarousel from "components/map/ShopCarousel";
import { Link } from "react-router-dom";
import noimages from "assets/img/noimages.png";

function NewShopList({ listData }) {
  const shopData = listData
    ?.sort(
      (newShop, newShop2) =>
        new Date(newShop2.registered_date) - new Date(newShop.registered_date)
    )
    .slice(0, 5);

  console.log(shopData);

  return (
    <>
      <div className="mt-20 ml-44 text-xl font-bold mb-8">
        따끈 따끈한 신상 맛집!
      </div>

      <div
        style={{
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 10,
        }}
      >
        <ShopCarousel show={3}>
          {shopData.map((data, index) => (
            <div className="mr-2">
              <Link to={`/shop/${data.id}/`}>
                <div
                  className="w-[350px] h-[370px] m-3 border border-stone-300 rounded overflow-hidden hover:-translate-y-1"
                  style={{ padding: 8 }}
                >
                  {!data?.photo1 ? (
                    <img
                      className="w-full h-48"
                      src={noimages}
                      alt="no_images"
                    />
                  ) : (
                    <img
                      className="w-full h-48"
                      src={data.photo1}
                      alt="placeholder"
                      width="350px"
                      hight="200px"
                    />
                  )}
                  <div className="grid grid-cols-1">
                    <div className="text-left ml-8">
                      <div className="font-bold mb-2 mt-2">{data.name}</div>
                      <div className="mb-2">{data.category}</div>
                      <div>{data.address}</div>
                      <p className="mt-4 mb-20"></p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </ShopCarousel>
      </div>
    </>
  );
}

export default NewShopList;

{
  /* <div className="w-72 mb-7 border border-stone-300 rounded overflow-hidden hover:-translate-y-1">
{!booking_object?.shop_id.photo1 ? (
  <img className="w-full h-56" src={noimages} alt="no_images" />
) : (
  <img
    className="w-full h-56"
    src={booking_object.shop_id.photo1}
    alt={booking_object.shop_id.name}
  />
)}

<div className="my-4 mx-2">
  <Link to={`/shop/${booking_object.shop_id.id}/`} className="text-2xl">
    <p>{booking_object.shop_id.name}</p>
  </Link>
</div>

<div className="grid grid-cols-2">
  <div className="text-left ml-8">
    <p>예약날짜</p>
    <p>예약시간</p>
    <p>예약 테이블 수</p>
    <p className="mt-4 mb-3">
      {visit_state(booking_object.visit_status)}
    </p>
  </div>
</div> */
}
