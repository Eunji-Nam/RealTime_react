import React from "react";

function ShopDetailComponent({ shopinfo }) {
  const {
    intro,
    telephone,
    address,
    opening_hours,
    conv_pack,
    conv_parking,
    conv_pet,
    conv_wifi,
  } = shopinfo;

  return (
    <React.Fragment>
      <ul className="list-disc space-y-2">
        <li className="flex items-start">
          <p className="flex items-start xl:text-xl">매장소개</p>
          <span className="h-6 flex items-center sm:h-7">
            <svg
              className="flex-shrink-0 h-5 w-5 text-cyan-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            ></svg>
          </span>
          <div className="ml-4 xl:text-xl">
            <p>
              {intro && intro} {!intro && "등록된 소개글이 없습니다."}
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <p className="flex items-start xl:text-xl">전화번호</p>
          <span className="h-6 flex items-center sm:h-7">
            <svg
              className="flex-shrink-0 h-5 w-5 text-cyan-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            ></svg>
          </span>
          <div className="ml-4 xl:text-xl">
            <p>{telephone}</p>
          </div>
        </li>
        <li className="flex items-start">
          <p className="flex items-start xl:text-xl">매장주소</p>
          <span className="h-6 flex items-center sm:h-7">
            <svg
              className="flex-shrink-0 h-5 w-5 text-cyan-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            ></svg>
          </span>
          <div className="ml-4 xl:text-xl">
            <p>{address}</p>
          </div>
        </li>
        <li className="flex items-start">
          <p className="flex items-start xl:text-xl">영업시간</p>
          <span className="h-6 flex items-center sm:h-7">
            <svg
              className="flex-shrink-0 h-5 w-5 text-cyan-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            ></svg>
          </span>
          <div className="ml-4 xl:text-xl">
            <p>{opening_hours}</p>
          </div>
        </li>
        <li className="flex items-start">
          <p className="flex items-start xl:text-xl">편의시설</p>
          <span className="h-6 flex items-center sm:h-7">
            <svg
              className="flex-shrink-0 h-5 w-5 text-cyan-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            ></svg>
          </span>
          <div className="ml-4 xl:text-xl">
            <span className="mx-1">주차장{conv_parking ? "👌" : "❌"}</span>
            <span className="mx-1">반려동물동반{conv_pet ? "👌" : "❌"}</span>
            <span className="mx-1">와이파이{conv_wifi ? "👌" : "❌"}</span>
            <span className="mx-1">포장{conv_pack ? "👌" : "❌"}</span>
          </div>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default ShopDetailComponent;
