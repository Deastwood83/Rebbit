import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import { useParams, useNavigate } from "react-router-dom";
import posts, {
  deletePostAsync,
  fetchPostByIdAsync,
} from "../lib/store/reducers/posts";

const Post = () => {
  const params = useParams();

  const navigate = useNavigate();

  const { post } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const postId = params.id;

  useEffect(() => {
    dispatch(fetchPostByIdAsync(postId));
  }, [postId]);

  const onDelete = () => {
    dispatch(deletePostAsync(postId));
    navigate("/");
  };

  return (
    <AppLayout>
      <div className="pt-16 overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <header className="font-mono">
            <h1 className="text-4xl leading-tight font-black text-emerald-700 font-bold mb-3">
              {post?.title}
            </h1>
            <div className="flex items-center justify-between text-xl font-bold mb-6">
              <div className="flex italic items-center text-emerald-700 hover:text-[#50E021]">
                {post?.owner.username}
              </div>
            </div>
          </header>

          <div className="flex flex-wrap">
            <div className="w-full md:w-2/3 relative">
              <article className="mb-8 text-2xl bg-emerald-400 border shadow-zinc-700 p-6 pb-0 relative z-10">
                <div className="markdown">
                  <p>{post?.content}</p>
                </div>
              </article>
              <button
                className="mt-4 w-full bg-gradient-to-tr text-yellow-300 font-extrabold bg-green-700 hover:bg-yellow-300 hover:text-green-700 border-3 border-indigo-900 rounded transition duration-200 py-2 rounded-md text-lg"
                onClick={onDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Post;
