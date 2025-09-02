import React, { memo } from "react";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import {
  networkAtom,
  jobsAtom,
  notificationAtom,
  messageAtom,
} from "./store/atom";

import { useMemo } from "react";

function Atomfamily() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkAtomCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const messageAtomCount = useRecoilValue(messageAtom);

  const finalNotificationsCount = useMemo(() => {
    return (
      networkAtomCount +
      jobsAtomCount +
      notificationAtomCount +
      messageAtomCount
    );
  }, [
    networkAtomCount,
    jobsAtomCount,
    notificationAtomCount,
    messageAtomCount,
  ]); // thers a better appraoch  selectors

  return (
    <>
      <button>Home</button>
      <button>
        My Network {networkAtomCount >= 100 ? "99+" : networkAtomCount}
      </button>
      <button>Jobs {jobsAtomCount}</button>
      <button>Notifications {notificationAtomCount}</button>
      <button>Messages {messageAtomCount}</button>
      <button>Profile {finalNotificationsCount}</button>

      <MemoizedFunction />
    </>
  );
}

const MemoizedFunction = memo(ButtonUpdater);
function ButtonUpdater() {
  const setMessageAtomcount = useSetRecoilState(messageAtom);

  return <button onClick={() => setMessageAtomcount((c) => c + 1)}>Me</button>;
}

export default Atomfamily;
