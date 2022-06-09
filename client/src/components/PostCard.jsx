import React from 'react';

function PostCard({ post }) {
    return (
        <div>
            <div className="containter px-16">
                <div className="bg-white p-8 rounded-lg shadow-lg relative hover:shadow-2xl transition duration-500">
                    <h1 className="text-2xl text-gray-800 font-semibold mb-3">
                        {post.title}
                    </h1>
                    <p className="text-gray-600 leading-6 tracking-normal">
                        {post.content}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PostCard;
