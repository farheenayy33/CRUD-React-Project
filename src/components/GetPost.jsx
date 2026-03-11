import React, { useEffect, useState } from "react";
import { getData } from "../API/GetApi";
import { deletePost } from "../API/GetApi";
import Form from "./Form";
import { PostData } from "../API/GetApi";
const GetPost = () => {
    const [post, setPost] = useState([]);
    const [Updatepost, setUpdatepost] = useState({});
    const getPostData = async () => {
        const response = await getData();
        setPost(response.data);
        console.log(response.data)

    };
    useEffect(() => {
        getPostData();
    }, []);
    const deletePostFnc = async (id) => {
        try {
            const res = await deletePost(id);
            if (res.status === 200) {
                const updatedPosts = post.filter((item) => item.id !== id);
                setPost(updatedPosts);
                console.log(res)
            }
        } catch (error) {
            console.error("Error deleting post:", error);
            alert("Failed to delete post");
        }
    }
    const EditPostFnc = (items) => {
        setUpdatepost(items);
    };
    return (

        <div className="max-w-300 mx-auto p-10 font-sans">
            <Form post={post} setPost={setPost} Updatepost={Updatepost} setUpdatepost={setUpdatepost} />
            <h1 className="text-center mb-10 text-3xl font-bold">
                Posts List ({post.length})
            </h1>

            {post.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">No posts yet. Add one using the form above!</p>
            ) : (
                <ol className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
                    {post.map((items) => {
                        return (
                            <li
                                key={items.id}
                                className="list-none bg-white rounded-xl p-5 shadow-lg transition-transform duration-200 hover:-translate-y-1"
                            >
                                <span className="text-sm text-gray-500 font-bold block mb-2">
                                    Post ID: {items.id}
                                </span>


                                <h2 className="text-lg mb-2 text-gray-800 font-semibold">
                                    {items.title}
                                </h2>

                                <p className="text-sm text-gray-600 mb-4">
                                    {items.body}
                                </p>

                                <div className="flex gap-4 justify-end items-center">
                                    <button className="bg-green-500 px-4 py-1 rounded font-bold hover:bg-green-700 active:scale-95 transition" onClick={() => EditPostFnc(items)}>
                                        Edit
                                    </button>

                                    <button className="bg-red-500 px-4 py-1 rounded font-bold hover:bg-red-700 active:scale-95 transition" onClick={() => deletePostFnc(items.id)}>
                                        Delete
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            )}
        </div>
    );
};

export default GetPost;