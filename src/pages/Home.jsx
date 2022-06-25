
import { MyFooter } from "../components/MyFooter/MyFooter";
import { MyHeader } from "../components/MyHeader/MyHeader";
import { Posts } from "../components/Posts/Posts";
import {SubHeader} from "../components/SubHeader/SubHeader"

export const Home = () => {
  return (
    <>
      <MyHeader />
      <SubHeader />
      <Posts />
      <MyFooter />
    </>
  );
};
