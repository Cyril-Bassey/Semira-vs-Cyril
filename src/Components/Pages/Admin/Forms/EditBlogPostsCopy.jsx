import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPost, updatePost } from '../../../../Redux/Actions'; // Make sure fetchPost is singular
import { useParams, useNavigate } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import SubmitButton from '../Components/SubmitBtn';
import Loader from '../Components/Loader';
import { fetchPosts } from '../Components/postService';

  function EditBlog() {
    const { _id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const { posts } = useSelector(state => state.post);

    const [postTitle, setPostTitle] = useState("");
    const [posts, setPosts] = useState([]);
    const [postContent, setPostContent] = useState("");
    const [postImage, setPostImage] = useState(null);
    const [postTags, setPostTags] = useState("");
    const [extraNote, setExtraNote] = useState("");
    const [showEditor, setShowEditor] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    // const [posts, setPosts] = useState([]);


    useEffect(() => {
      async function loadPosts() {
        const data = await fetchPosts();
        setPosts(data);
      }
      loadPosts();
    }, []);

    useEffect(() => {
      async function loadPost() {
        try {
          const post = await fetchPost(_id); 
        if (post) {
          setPostTitle(post.postTitle);
          setPostContent(post.postContent || '');
          setPostImage(post.postImage);
          setPostTags(post.postTags);
          setExtraNote(post.extraNote);
          setShowEditor(!!post.extraNote);
        } else {
          setErrorMessage("Post not found.");
        }
      }catch (error) {
        setErrorMessage("An error occurred while fetching the post.");
      }
    }
    loadPost()
    }, [_id]);

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPostImage(reader.result); // Save base64 image
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    };

    const handleUpdatePost = () => {
      if (!postTitle || !postContent || !postImage || !postTags) {
        setErrorMessage("All fields are required.");
        return;
      }

      setIsLoading(true);
      setErrorMessage("");

      const payload = { postTitle, postContent, postImage, postTags, extraNote };

      dispatch(updatePost(_id, payload)) // Assuming updatePost returns a promise
        .then(() => {
          setSuccessMessage("Post Updated Successfully!");
          navigate("/admin/blogposts"); // Corrected path
        })
        .catch(() => {
          setErrorMessage("An error occurred. Please try again.");
          setSuccessMessage("");
        })
        .finally(() => setIsLoading(false));
    };

  return (
    <div className='max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md'>
      <h6 className="text-center text-4xl font-bold">Edit Post</h6>

      {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
      {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

      <div className='flex flex-row justify-between border p-6 items-center mb-4 mt-5'>
        <div className="flex flex-col w-[100%]">
          <label htmlFor="postTitle" className="block text-gray-700 font-semibold mb-2">Title</label>
          <input
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            type='text'
            className="form-control w-[100%] mb-3 border border-dark rounded-lg"
            placeholder="Post Title"
            required
          />
        </div>
      </div>

      {/* Main editor */}
      <div>
        <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">Content</label>
        <CKEditor
          editor={ClassicEditor}
          type="text"
          data={postContent}
          onChange={(event, editor) => {
            setPostContent(editor.getData());
          }}
          config={{
            placeholder: 'Write your post content here...',
          }}
        />
      </div>

      {/* Optional details */}
      <div className="mb-4 mt-8">
        <label htmlFor="radioOption" className="block text-gray-700 font-semibold mb-2">Do you want to add extra details?</label>
        <div className="flex items-center">
          <input
            type="radio"
            id="yesOption"
            name="extraDetails"
            value="yes"
            onChange={() => setShowEditor(true)} // Show editor when checked
            checked={showEditor} // Radio button reflects editor state
          />
          <label htmlFor="yesOption" className="ml-2">Yes</label>
        </div>

        <div className="flex items-center mt-2">
          <input
            type="radio"
            id="noOption"
            name="extraDetails"
            value="no"
            onChange={() => setShowEditor(false)} // Hide editor when unchecked
            checked={!showEditor} // Radio button reflects editor state
          />
          <label htmlFor="noOption" className="ml-2">No</label>
        </div>
      </div>

      {showEditor && (
        <div className="mb-4">
          <label htmlFor="extraNote" className="block text-gray-700 font-semibold mb-2">Extra Note</label>
          <textarea
            value={extraNote}
            onChange={(e) => setExtraNote(e.target.value)}
            className="form-control w-[100%] border border-dark rounded-lg"
            rows="4"
            placeholder="Add your extra details..."
          />
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-row justify-between border p-6 items-center mb-4 mt-5">
        <div className="flex flex-col w-[100%]">
          <label htmlFor="postTags" className="block text-gray-700 font-semibold mb-2">Tags</label>
          <input
            value={postTags}
            onChange={(e) => setPostTags(e.target.value)}
            type='text'
            className="form-control w-[100%] mb-3 border border-dark rounded-lg"
            placeholder="Tags"
            required
          />
        </div>
      </div>

      {/* Image Upload */}
      <div className="mb-4 mt-5">
        <label htmlFor="postImage" className="block text-gray-700 font-semibold mb-2">Upload Image</label>
        <input
          type="file"
          id="postImage"
          onChange={handleImageChange}
          className="border border-dark w-[100%] rounded-lg"
        />
      </div>

      <div className="flex justify-end">
        {/* Cancel Button */}
        <button
          onClick={() => navigate("/posts")}
          className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
        >
          Cancel
        </button>

        {/* Submit Button */}
        <SubmitButton
          className="btn btn-primary"
          onClick={handleUpdatePost}
          buttonText={isLoading ? <Loader /> : 'Update Post'}
        />
      </div>
    </div>
  );
}

export default EditBlog;
