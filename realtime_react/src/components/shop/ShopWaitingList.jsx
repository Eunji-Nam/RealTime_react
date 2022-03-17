import WaitingNotVisitConfirm from "components/modal/WaitingNotVisitConfirm";
import WaitingVisitConfirm from "components/modal/WaitingVisitConfirm";
import React, { useState } from "react";

function ShopWaitingList({ shopwaiting, saveWaitVisitStatus, refetch }) {
  // 회원이 입장한 경우
  const clickedVisit = () => {
    saveWaitVisitStatus({
      url: `/waiting/api/waitings/${shopwaiting.id}/`,
      data: { wait_visit_status: "1" },
    }).then(() => {
      alert("입장이 확인되었습니다.");
      refetch();
    });
  };

  // 회원이 미입장한 경우
  const clickedNotVisit = () => {
    saveWaitVisitStatus({
      url: `/waiting/api/waitings/${shopwaiting.id}/`,
      data: { wait_visit_status: "2" },
    }).then(() => {
      alert("미입장이 확인되었습니다.");
      refetch();
    });
  };

  // WaitingVisitConfirm 모달창
  const [modalOpen, setModalOpen] = useState(false);

  // WaitingNotVisitConfirm 모달창
  const [modalOpenNotVisit, setModalOpenNotVisit] = useState(false);

  return (
    <div>
      <span className="mx-10">{shopwaiting.wait_count}</span>
      <span className="mx-10">{shopwaiting.user_id.username}</span>
      <span className="mx-10">{shopwaiting.user_id.telephone}</span>
      <span className="mx-10">{shopwaiting.wait_table_count}</span>
      <span className="mx-10">{shopwaiting.wait_date.slice(11, 16)}</span>
      <span className="mx-10">
        <button>요청</button>
      </span>
      <span className="mx-3">
        <React.Fragment>
          <button disabled={false} onClick={() => setModalOpen(true)}>
            입장
          </button>
          <WaitingVisitConfirm
            clickedVisit={clickedVisit}
            open={modalOpen}
            close={() => setModalOpen(false)}
            header="입장하셨습니까?"
          />
        </React.Fragment>
      </span>
      <span>
        <React.Fragment>
          <button onClick={() => setModalOpenNotVisit(true)}>미입장</button>
          <WaitingNotVisitConfirm
            clickedNotVisit={clickedNotVisit}
            open={modalOpenNotVisit}
            close={() => setModalOpenNotVisit(false)}
            header="미입장하셨습니까?"
          />
        </React.Fragment>
      </span>
    </div>
  );
}

export default ShopWaitingList;
