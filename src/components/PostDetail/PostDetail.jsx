import "./postdetailStyles.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { Api } from "../../services/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loading } from "../Loading/Loading";

export const PostDeail = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState("");
  const { url } = useParams();
  const urlQuery = encodeURIComponent(`*[url == "${url}"]`);
  const baseQuery = `v2021-10-21/data/query/production?query=${urlQuery}`;
  let counter = 0;

  const getOnPost = async () => {
    setLoading(true);
    try {
      const getingPost = await Api.get(baseQuery);
      setPost(getingPost.data.result[0]);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  const { title, subtitle, author, content, _updatedAt, keywords } = post;

  useEffect(() => {
    getOnPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="postWrapper flex flex-column align-items-center justify-content-center">
      {loading && <Loading />}
      <div className="postTitle w-8 flex flex-column align-items-center justify-content-center my-3 py-3">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>

      <div className="blogText w-8 flex flex-column align-items-center justify-content-center my-3 py-3">
        <div className="postInfo w-full flex flex-column">
          <h5>{_updatedAt}</h5>
          <h4>{author}</h4>
          <div className="keywords flex gap-3">
            {keywords
              ? keywords.map((item) => <p key={counter++}>{item}</p>)
              : ""}
          </div>
        </div>
        <div className="postContent w-full flex align-items-center justify-content-start my-4">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};
