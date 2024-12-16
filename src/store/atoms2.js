// below code is when you use to get the datafrom backend.

import axios from "axios";
import { atom, selector } from "recoil";

// Asynchronous data queries
export const notifications2 = atom({
    // give any unique key name
  key: "networkAtom", 
  default: selector({
    key: "networkAtomSelector",
    get: async () => {
      const res = await axios.get(
        "http://sum-server.100xdevs.com/notifications"
      );
      return res.data;
    },
  }),
});

export const totalValueBySelector = selector({
  key: "totalValeBySelector",
  get: ({ get }) => {
    const allNotifications = get(notifications2);
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.notifications +
      allNotifications.messaging
    );
  },
});
