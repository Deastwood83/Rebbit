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
              <h1 className=""> </h1>

            </header>

          </div>
      </div>
    </AppLayout>
  );
};

export default Post;
