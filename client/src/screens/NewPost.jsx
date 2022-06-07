import React from 'react';
import AppLayout from '../components/AppLayout';

const NewPost = () => {
    return (
        <AppLayout>
            <div className="container mx-auto max-w-[400px] bg-emerald-800 ">
                <form method= 'POST' action= '' className="flex flex-col ">
                    <div>
                        <label class= 'text-white'> Title <span class= 'text-red-500'> * </span> </label>
                        <input type="text"/>
                    </div>

                    <div>
                        <label class= 'text-white '> Content </label>
                        <textarea class= '' name="" id="" cols="30" rows="5"></textarea>
                    </div>
                    
                    <button type='Submit' class= 'p-3 bg-emerald-800 text-white hover:bg-orange-800'> Submit </button>
                
                </form>
                
            </div>
        </AppLayout>
    );
};

export default NewPost;
