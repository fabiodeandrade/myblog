
import { MyFooter } from "../components/MyFooter/MyFooter";
import { MyHeader } from "../components/MyHeader/MyHeader";
import { Posts } from "../components/Posts/Posts";

export const Home = () => {
  return (
    <>
      <MyHeader />
      <Posts />
      <MyFooter />
    </>
  );
};
