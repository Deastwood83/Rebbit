import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import {
    createPostAsync,
    resetCreatePostId,
} from '../lib/store/reducers/posts';
import rebbitLogo from '../rebbitLogo.png';
const NewPost = () => {
    const { createdPostId, loading, error } = useSelector(
        (state) => state.posts
    );

    const dispatch = useDispatch();

    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (createdPostId) {
            navigate(`/posts/${createdPostId}`);
            dispatch(resetCreatePostId());
        }
    }, [createdPostId]);

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(
            createPostAsync({
                title,
                content,
            })
        );
    };

    return (
        <AppLayout>
            <div className="container mx-auto max-w-[400px] bg-emerald-800 p-6 rounded-l-lg rounded-r-lg">
                <div className="flex items-center">
                    <img
                        className="h-10 w-auto"
                        src={rebbitLogo}
                        alt="Rebbit Logo"
                    />
                </div>
                {error && (
                    <div className="text-red-600 text-center">{error}</div>
                )}
                <form onSubmit={onSubmit} className="flex flex-col ">
                    <div>
                        <label class="text-white">
                            Title <span class="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            class="p-2 w-80"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div>
                        <label class="text-white"> Content </label>
                        <textarea
                            class="w-80"
                            name=""
                            id=""
                            cols="30"
                            rows="5"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                    </div>
                    <div class="flex p-1">
                        <button
                            type="submit"
                            class="p-3 bg-emerald-800 text-white hover:bg-orange-800"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
};

export default NewPost;
