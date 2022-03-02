import { useApiAxios } from "api/base";
import { useAuth } from "contexts/AuthContext";
import React, { useEffect, useState } from "react";
import LoadingIndicator from "components/LoadingIndicator";
import UserInfoComponent from "./UserInfoComponent";
import "./UserInfo.css";
import UserReviewList from "./UserReviewList";
import mypage_icon from "assets/img/mypage_icon.png";

function UserInfo({ userId }) {
  const [auth] = useAuth();

  const [reviewList, setReviewList] = useState([]);

  const [reviewId, setReviewId] = useState(0);

  // confirm 모달창
  const [modalOpen, setModalOpen] = useState(false);

  const [{ data: userData, loading, error }, refetch] = useApiAxios(
    {
      url: `/accounts/api/users/${auth.id}/`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${auth.access}`,
      },
    },
    { manual: true }
  );

  useEffect(() => {
    refetch();
  }, []);

  const [
    { data: reviewData, loading: reviewLoading, error: reviewError },
    reviewRefetch,
  ] = useApiAxios(
    {
      url: `/shop/api/reviews/?all`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${auth.access}`,
      },
    },
    { manual: true }
  );

  useEffect(() => {
    const savedReview = reviewData?.filter(
      (user_review) => parseInt(userId) === user_review.user_id.id
    );

    if (savedReview !== undefined) {
      setReviewList(savedReview);
    }
  }, [reviewData, userId]);

  const [{ loading: deleteLoading, error: deleteError }, deleteBooking] =
    useApiAxios(
      {
        url: `/shop/api/reviews/${reviewData?.id}/`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${auth.access}`,
        },
      },
      { manual: true }
    );

  const handleDelete = (e) => {
    deleteBooking({
      url: `/shop/api/reviews/${reviewId}/`,
      method: "DELETE",
    });
    alert("삭제되었습니다.");

    window.location.replace(`/user/mypage/${userId}/`);
  };

  useEffect(() => {
    reviewRefetch();
  }, []);

  // confirm 모달 열기
  const openModal = (e) => {
    setModalOpen(true);
    setReviewId(e.target.value);
  };

  // confirm 모달 닫기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-[900px] mx-auto">
      <div className="flex flex-row mt-14">
        <img src={mypage_icon} alt="" className="w-8 h-8" />
        <h1 className="text-left text-2xl ml-2">마이페이지</h1>
        {(loading || reviewLoading) && (
          <LoadingIndicator>로딩 중...</LoadingIndicator>
        )}
        {deleteLoading && <LoadingIndicator>삭제 중...</LoadingIndicator>}
        {deleteError?.response?.status >= 400 && (
          <div className="text-red-400">삭제에 실패했습니다.</div>
        )}
      </div>

      <div className="mb-20">
        {userData && <UserInfoComponent userData={userData} auth={auth} />}

        <UserReviewList
          reviewList={reviewList}
          openModal={openModal}
          closeModal={closeModal}
          handleDelete={handleDelete}
          modalOpen={modalOpen}
        />
      </div>
    </div>
  );
}

export default UserInfo;
