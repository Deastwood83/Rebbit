import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import {
    fetchPostByIdAsync,
    updatePostAsync,
} from '../lib/store/reducers/posts';
import rebbitLogo from '../rebbitLogo.png';

const EditPost = () => {
    const { error, post } = useSelector((state) => state.posts);

    const [title, setTitle] = useState(post?.title ?? '');
    const [content, setContent] = useState(post?.content ?? '');

    const params = useParams();

    const dispatch = useDispatch();

    const postId = params.id;

    useEffect(() => {
        dispatch(fetchPostByIdAsync(postId));
    }, [postId]);

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setContent(post.content);
        }
    }, [post]);

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(
            updatePostAsync({
                id: postId,
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
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
};

export default EditPost;
