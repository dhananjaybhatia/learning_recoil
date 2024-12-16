import { RecoilRoot } from "recoil";
import MainApp from "./MainApp";

export default function App() {
  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  );
}
