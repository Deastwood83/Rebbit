import React from "react";
import AppLayout from "../components/AppLayout";
import posts from "../lib/store/reducers/posts";

const Post = () => {
  return (
    <AppLayout>
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
              <article className="mb-8 bg-emerald-400 border shadow-zinc-700 p-6 pb-0 relative z-10">
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
              <div id="replies">
                <div className="replies-container">
                  <h5 className="font-mono font-bold text-2xl italic mb-4 mt-16">
                    {" "}
                    X Replies
                  </h5>
                  <div className="replies space-y-10">
                    <div className="reply border bg-white shadow-md p-6 relative shadow-emerald-300">
                      <div className="reply-meta mb-3 flex items-center justify-between font-bold text-emerald-700">
                        <div className="flex items-center">
                          <div className="markdown">
                            <p>
                              {" "}
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Accusantium eum harum sapiente
                              eaque nemo ratione quam nihil ex error asperiores!
                              A ipsam labore perspiciatis adipisci dignissimos
                              voluptatem aliquam unde ipsa!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-16 md:m-0">
              <div className="md:pl-16 relative">
                <div className="absolute -top-12 right-0 has-tooltip"></div>
                <div className="border bg-emerald-500 shadow-md text-sm relative z-10">
                  <h6 className="px-4 py-2 flex justify-between">Da Stats!</h6>
                  <div className=" border-t flex text-center">
                    <h6 className="w-1/2 px-4 py-2 border-r">"X Replies"</h6>
                    <h6 className="w-1/2 px-4 py-2">"X Followers"</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Post;
