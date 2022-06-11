import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import { getGravatarUrl } from "../lib/utils/gravatar";
import Post from "../components/PostCard";
import { fetchPostsAsync } from '../lib/store/reducers/posts';
import { useDispatch, useSelector } from 'react-redux';
import PostCard from "../components/PostCard";
import { fetchUserByUsernameAsync } from "../lib/store/reducers/users";

const UserDetails = () => {
  const params = useParams();

  const { user } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const username = params.username;

  useEffect(() => {
    dispatch(fetchUserByUsernameAsync(username));
  }, [username]);

  return (
    <AppLayout>
      <div>
        <div>
          <div
            className="h-32 w-full rounded-lg object-cover lg:h-48 bg-gradient-to-r from-emerald-500 to-green-400"
            alt=""
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              <img
                className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                src={getGravatarUrl(user?.email ?? 'test@test.com')}
                alt=""
              />
            </div>
            <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="sm:hidden md:block mt-4 min-w-0 flex-1">
                <h1 className="text-2xl font-bold text-gray-900 truncate">
                  {user?.username}
                </h1>
              </div>
            </div>
          </div>
          <div className="hidden sm:block md:hidden mt-4 min-w-0 flex-1">
            <h1 className="text-2xl font-bold text-gray-900 truncate">
              {user?.username}
            </h1>
          </div>
          <div className=" rounded-b-lg p-5 pt-15 flex flex-col">
            <div className="flex bg-gray-200 w-20 items-center rounded">
              {new Date(user?.createdAt).toLocaleDateString() }
            </div>
            <div className="flex bg-gray-200">
              {user?.biography}
            </div>
          </div>

          <div className="pt-20 break-all max-width-max flex flex-wrap justify-between">
          <div className="flex flex-col justify-between">
                    {/* {loading === 'pending' && (
                        <div className="text-center">
                            <h1>Loading...</h1>
                        </div>
                    )}

                    {posts && posts.map((post) => <PostCard post={post} />)} */}
                </div>
            </div>
          </div>
        </div>
    
    </AppLayout>
  );
};

export default UserDetails;
