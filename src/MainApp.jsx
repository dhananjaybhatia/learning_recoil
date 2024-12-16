import { useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
  totalValueBySelector,
} from "./store/atoms";

export default function MainApp() {
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const [messagingCount, setMessagingCount] = useRecoilState(messagingAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);
  const totalValueCountBySelector = useRecoilValue(totalValueBySelector);

  const totalValue = useMemo(() => {
    return networkCount + jobsCount + messagingCount + notificationsCount;
  }, [networkCount, jobsCount, messagingCount, notificationsCount]);

  return (
    <div>
      <button>Home</button>

      <button>My network ({networkCount >= 20 ? "20+" : networkCount})</button>
      <button>Jobs ({jobsCount >= 10 ? "10+" : jobsCount})</button>
      <button>Messaging ({messagingCount})</button>
      <button>Notifications ({notificationsCount})</button>

      <button onClick={() => setMessagingCount(messagingCount + 1)}>Me</button>
      <button>Me using USE-MEMO({totalValue})</button>
      <button>Me using SELECTOR({totalValueCountBySelector})</button>
    </div>
  );
}
