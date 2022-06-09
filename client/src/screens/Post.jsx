import React from "react";
import AppLayout from "../components/AppLayout";
import posts from "../lib/store/reducers/posts";

const Post = () => {
  return (
    <AppLayout>
      <div className="grid md:place-items-start">
      <div className="h-32 w-full rounded-lg object-cover lg:h-48 bg-gradient-to-r from-emerald-500 to-green-400 md:max-w-7xl">
        <div className="flex flex-row">
          <h1 className=" ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
          </h1>
        </div>
      </div>
      </div>
    </AppLayout>
  );
};

export default Post;
