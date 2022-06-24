import { useEffect, useState } from "react";
import "./postsstyles.css";
import { Api } from "../../services/api";
import { Loading } from "../Loading/Loading";

export const Posts = () => {
  const [myPosts, setMyPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const gettingPosts = async () => {
    setLoading(true);
    try {
      const { data } = await Api.get(
        "https://n0a7y6cp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22blog%22%5D"
      );
      setMyPosts(data.result);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  console.log(myPosts);

  useEffect(() => {
    gettingPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="blogArea flex align-items-center justify-content-center">
      {loading && <Loading />}
      <h1>Sou o comp de blogs</h1>
    </div>
  );
};
