import React from "react";
import AppLayout from "../components/AppLayout";
import rebbitLogo from "../rebbitLogo.png";
const NewPost = () => {
  return (
    <AppLayout>
      <div className="container mx-auto max-w-[400px] bg-emerald-800 p-6 rounded-l-lg rounded-r-lg">
        <div className="flex items-center">
          <img className="h-10 w-auto" src={rebbitLogo} alt="Rebbit Logo" />
        </div>
        <form method="POST" className="flex flex-col ">
          <div>
            <label class="text-white">
              {" "}
              Title <span class="text-red-500"> * </span>{" "}
            </label>
            <input type="text" class="p-2 w-80" required />
          </div>

          <div>
            <label class="text-white"> Content </label>
            <textarea class="w-80" name="" id="" cols="30" rows="5"></textarea>
          </div>
          <div class="flex p-1">
            <button
              type="Submit"
              class="p-3 bg-emerald-800 text-white hover:bg-orange-800"
            >
              {" "}
              Submit{" "}
            </button>
          </div>
        </form>
      </div>
    </AppLayout>
  );
};

export default NewPost;
