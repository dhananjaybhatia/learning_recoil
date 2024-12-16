import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 20,
});
export const jobsAtom = atom({
  key: "jobsAtom",
  default: 10,
});
export const messagingAtom = atom({
  key: "messagingAtom",
  default: 10,
});
export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 10,
});

export const totalValueBySelector = selector({
  key: "totalValueBySelector",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobsAtomCount = get(jobsAtom);
    const messagingAtomCount = get(messagingAtom);
    const notificationsAtomCount = get(notificationsAtom);

    return (
      networkAtomCount +
      jobsAtomCount +
      messagingAtomCount +
      notificationsAtomCount
    );
  },
});
