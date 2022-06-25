import { useEffect, useState } from "react";
import "./postsstyles.css";
import { Api } from "../../services/api";
import { Loading } from "../Loading/Loading";
import { Link } from "react-router-dom";

export const Posts = () => {
  const [myPosts, setMyPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const gettingPosts = async () => {
    setLoading(true);
    try {
      const { data } = await Api.get(
        "v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22blog%22%5D"
      );
      setMyPosts(data.result);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    gettingPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="blogArea flex-column flex align-items-center justify-content-center">
      {loading && <Loading />}
      <h1>📝 Blog</h1>
      {myPosts.map(({ title, _id, subtitle, content, url }) => (
        <div
          key={_id}
          className="blogPost flex flex-column align-items-center justify-content-center my-2"
        >
          <Link to={`posts/${url}`}>
            <h2>{title}</h2>
          </Link>
          <h4>{subtitle}</h4>
        </div>
      ))}
    </div>
  );
};
