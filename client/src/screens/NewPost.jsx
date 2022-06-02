import React from 'react';
import AppLayout from '../components/AppLayout';

const NewPost = () => {
    return (
        <AppLayout>
            <div className="container mx-auto max-w-5xl">
                <form className="flex flex-col">
                    <div>
                        <label>Title</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label>Content</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
};

export default NewPost;
