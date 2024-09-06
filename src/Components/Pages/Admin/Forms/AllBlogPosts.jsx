import React, { useEffect, useState } from 'react';
import { fetchPosts, deletePost, updatePost } from '../Components/postService';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [editingPostId, setEditingPostId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    async function loadPosts() {
      const data = await fetchPosts();
      setPosts(data);
    }
    loadPosts();
  }, []);
  

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts(posts.filter(post => post._id !== id));
  };

  const handleEdit = (post) => {
    setEditingPostId(post._id);
    setEditTitle(post.postTitle);
    setEditContent(post.postContent);
  };

  const handleUpdate = async (id) => {
    await updatePost(id, { postTitle: editTitle, postContent: editContent });
    setEditingPostId(null);
    const updatedPosts = posts.map(post =>
      post._id === id ? { ...post, postTitle: editTitle, postContent: editContent } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Post List</h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post._id} className="bg-white p-4 rounded shadow">
            {editingPostId === post._id ? (
              <div className="space-y-2">
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="border p-2 rounded w-full"
                />
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="border p-2 rounded w-full"
                />
                <button
                  onClick={() => handleUpdate(post._id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-semibold">{post.postTitle}</h2>
                <p className="text-gray-700">
                  {post.postContent.slice(0, 50)}...
                </p>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => handleEdit(post)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
