import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { jobsAtom, messageAtom, networkAtom, notificationAtom } from "./atom.js";

function App() {
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

  return (
    <>
      <button>Home</button>
      <button>
        My Network {networkAtomCount >= 100 ? "99+" : networkAtomCount}
      </button>
      <button>Jobs {jobsAtomCount}</button>
      <button>Notifications {notificationAtomCount}</button>
      <button>Messages {messageAtomCount}</button>
    </>
  );
}

export default App;
