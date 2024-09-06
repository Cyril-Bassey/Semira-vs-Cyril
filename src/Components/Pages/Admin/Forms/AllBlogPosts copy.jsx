import React, { useEffect, useState } from 'react';
import { fetchPosts, deletePost } from '../Components/postService';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  // const [visiblePosts, setVisiblePosts] = useState(6); // Initially show 6 posts
  const [showAllPosts, setShowAllPosts] = useState(false);
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

  const toggleShowAllPosts = () => {
    setShowAllPosts(!showAllPosts);
  };

  const displayedPosts = showAllPosts ? posts : posts.slice(0, 3);

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Post List</h1>

      {/* Cards Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
      {displayedPosts.map((post) => (
          <div key={post._id} className="bg-white p-4 rounded shadow">
            <img
              src={post.postImage.secure_url}
              alt={post.postTitle}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-2xl font-semibold">{post.postTitle}</h2>
            <p className="text-gray-700">
              {truncateText(post.postContent, 20)}
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-500">{post.postTags}</span>
              <span className="text-sm text-gray-400">{new Date(post.updatedAt).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-end space-x-4 mt-4">
              <Link
                to={`/admin/editBlog/${post._id}`}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(post._id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="mt-6 text-center">
        <button
          onClick={toggleShowAllPosts}
          className="bg-slate-900 text-white px-6 py-3 rounded-xl"
        >
          {showAllPosts ? "Show Less" : "View All"}
        </button>
      </div>
      {showAllPosts && (
         <div className="mt-6">
         <h3 className="text-2xl font-semibold text-center mb-4">All Posts List</h3>
 
         <table className="min-w-full bg-white border border-gray-200">
           <thead>
             <tr>
               <th className="py-2 px-4 border-b">Title</th>
               <th className="py-2 px-4 border-b">Date Created</th>
               <th className="py-2 px-4 border-b">Actions</th>
             </tr>
           </thead>
           <tbody>
             {posts.map((post) => (
               <tr key={post._id} className="border-b">
                 <td className="py-2 px-4">
                   <Link to={`/posts/${post._id}`} className="text-blue-500 underline">
                     {post.postTitle}
                   </Link>
                 </td>
                 <td className="py-2 px-4">{new Date(post.createdAt).toLocaleDateString()}</td>
                 <td className="py-2 px-4 flex space-x-2">
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
                       {/* <button
                         onClick={() => handleUpdate(post._id)}
                         className="bg-blue-500 text-white px-4 py-2 rounded"
                       >
                         Save
                       </button> */}
                     </div>
                   ) : (
                     <>
                     {/* Handle Edit */}
                        <Link
                to={`/admin/editBlog/${post._id}`}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Edit
              </Link>
                       <button
                         onClick={() => handleDelete(post._id)}
                         className="bg-red-500 text-white px-4 py-2 rounded"
                       >
                         Delete
                       </button>
                     </>
                   )}
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
     
      )}
    </div>
  );
};      
//     </div>
//   );
// };

export default PostList;
