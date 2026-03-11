import React, { useState, useEffect } from 'react'
import { PostData, EditPost } from '../API/GetApi';

const Form = ({ post, setPost, Updatepost, setUpdatepost }) => {
    const [addData, setAddData] = useState({
        title: "",
        body: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    // Check if we're in edit mode
    const isEditing = Updatepost && Updatepost.id;

    useEffect(() => {
        if (isEditing) {
            setAddData({
                title: Updatepost.title || "",
                body: Updatepost.body || ""
            });
        }
    }, [Updatepost, isEditing]);

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setAddData((prev) => {
            return { ...prev, [name]: value }
        })
    };

    const addPostsData = async () => {
        if (!addData.title.trim() || !addData.body.trim()) {
            alert("Please fill in all fields");
            return;
        }

        setIsLoading(true);
        try {
            const res = await PostData(addData);
            if (res.status === 200 || res.status === 201) {
                // Generate sequential ID for new posts
                const maxId = post.length > 0 ? Math.max(...post.map(p => p.id)) : 100;
                const newPost = {
                    ...res.data,
                    id: maxId + 1
                };
                setPost([...post, newPost]);
                setAddData({
                    title: "",
                    body: ""
                });
                alert("Post added successfully!");
                console.log("New post added: ", newPost);
            }
        } catch (error) {
            console.error("Error adding post:", error);
            alert("Failed to add post");
        } finally {
            setIsLoading(false);
        }
    };

    const updatePostData = async () => {
        if (!addData.title.trim() || !addData.body.trim()) {
            alert("Please fill in all fields");
            return;
        }

        setIsLoading(true);
        try {
            const res = await EditPost(Updatepost.id, addData);
            if (res.status === 200) {
                // Update the post in the array
                setPost(post.map(item => 
                    item.id === Updatepost.id ? { ...item, ...addData } : item
                ));
                setAddData({
                    title: "",
                    body: ""
                });
                setUpdatepost(null); // Clear edit mode
                alert("Post updated successfully!");
                console.log("Post updated: ", res.data);
            }
        } catch (error) {
            console.error("Error updating post:", error);
            alert("Failed to update post");
        } finally {
            setIsLoading(false);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            updatePostData();
        } else {
            addPostsData();
        }
    };

    const handleCancel = () => {
        setAddData({
            title: "",
            body: ""
        });
        setUpdatepost(null);
    };

    return (
        <form className="bg-white rounded-lg p-3 shadow-lg max-w-4xl mx-auto mb-8 flex gap-2 items-end" onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="Enter post title"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                name='title'
                value={addData.title} 
                onChange={handleInputs}
                disabled={isLoading}
            />
            <textarea
                placeholder="Enter post body"
                rows="1"
                name='body'
                className="flex-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={addData.body} 
                onChange={handleInputs}
                disabled={isLoading}
            ></textarea>
            <button
                type="submit"
                className="bg-blue-500 px-6 py-2 rounded font-bold text-white hover:bg-blue-700 active:scale-95 transition whitespace-nowrap disabled:bg-gray-400"
                disabled={isLoading}
            >
                {isLoading ? "Processing..." : isEditing ? "Edit" : "Add"}
            </button>
            {isEditing && (
                <button
                    type="button"
                    className="bg-gray-500 px-6 py-2 rounded font-bold text-white hover:bg-gray-700 active:scale-95 transition whitespace-nowrap"
                    onClick={handleCancel}
                    disabled={isLoading}
                >
                    Cancel
                </button>
            )}
        </form>
    );
};

export default Form