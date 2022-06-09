import React from "react";
import AppLayout from "../components/AppLayout";
import posts from "../lib/store/reducers/posts";

const Post = () => {
  return (
    <AppLayout>
      <div className="pt-16 bg-gradient-br from-emerald-800 to-green-700">
      <div className="pt-16 overflow-hidden">
        <div className="absolute h-20 w-full mt-64 bg-zig-zag z-0 hidden md:block"></div>
        <div className="max-w-6xl mx-auto px-4">
          <header className="font-mono">
            <h1 className="text-4xl leading-tight font-black text-emerald-700 font-bold mb-3">
              {" "}
              Title For Post{" "}
            </h1>
            <div className="flex items-center justify-between text-xl font-bold mb-6">
              <div className="flex italic items-center text-emerald-700 hover:text-[#50E021]">
                {" "}
                placeholder for user wit pfp
              </div>
            </div>
          </header>

          <div className="flex flex-wrap">
            <div className="w-full md:w-2/3 relative">
              <article className="mb-8 bg-white border shadow-md p-6 pb-0 relative z-10">
                <div className="markdown">
                  <p> lorem </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio cumque harum delectus neque quis? Non nobis incidunt
                    delectus eligendi accusamus animi quod totam atque officiis,
                    dicta modi numquam recusandae vel?
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      </div>
    </AppLayout>
  );
};

export default Post;
