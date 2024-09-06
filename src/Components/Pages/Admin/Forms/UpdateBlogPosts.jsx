
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, clearSuccessMessage, clearErrorMessage } from '../../../../Redux/Slicers/PostSlicer';
import { useNavigate } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import SubmitButton from '../Components/SubmitBtn';
import Loader from "../Components/Loader";

function CreatePost() {
  const [postTitle, setpostTitle] = useState("");
  const [postContent, setpostContent] = useState("");
  const [postImage, setpostImage] = useState(null);
  const [postTags, setpostTags] = useState("");
  const [extraNote, setextraNote] = useState("");
  const [showEditor, setShowEditor] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, successMessage } = useSelector((state) => state.post);

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        dispatch(clearSuccessMessage());
        navigate('http://localhost:3000/admin/blogposts'); // Redirect to posts list
      }, 2000); // Redirect after 2 seconds
    }
    if (error) {
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 5000); // Clear error after 5 seconds
    }
  }, [successMessage, error, dispatch, navigate]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setpostImage(reader.result); // This should be a base64 string
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    if (!postTitle || !postContent || !postImage || !postTags) {
      alert("All fields are required.");
      return;
    }

    const payload = {
      postTitle,
      postContent,
      postImage, // Base64 image data
      postTags,
      extraNote,
    };

    dispatch(createPost(payload)).then(() => {
      // Reset form inputs after successful post creation
      setpostTitle("");
      setpostContent("");
      setpostImage(null);
      setpostTags("");
      setextraNote("");
      dispatch(clearSuccessMessage());
      // navigate('/posts'); // Redirect to posts list
    });
  };

  return (
    <div className='max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md'>
      <h6 className="text-center text-4xl font-bold">Add Posts</h6>

      {error && <p className="text-red-500 text-center">{error}</p>}
      {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

      <div className='flex flex-row justify-between border p-6 items-center mb-4 mt-5'>
        <div className="flex flex-col w-[100%]">
          <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">Title</label>
          <input
            value={postTitle}
            onChange={(e) => setpostTitle(e.target.value)}
            type='text'
            className="form-control w-[100%] mb-3 border border-dark rounded-lg"
            placeholder="Post Title"
            required />
        </div>

        {/* <div className="flex flex-col w-[45%]">
              <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-2">Content</label>
              <input
                value={postContent}
                onChange={(e) => setpostContent(e.target.value)}
                type="text"
                className="form-control w-[100%] mb-3 border border-dark rounded-lg"
                placeholder="Post Content"
                required
              />
            </div> */}
      </div>

      {/* Main editor */}
      <div className=''>
        <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">Content</label>
        <CKEditor
          editor={ClassicEditor}
          type="text"
          data={postContent}
          onChange={(event, editor) => {
            setpostContent(editor.getData());
          } }
          config={{
            placeholder: 'Write your post content here...',
          }} />
      </div>


      {/* Optional details  */}
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

      {showEditor && ( // Conditionally render the CKEditor
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">Any Extra Details</label>
          <CKEditor
            editor={ClassicEditor}
            data={extraNote}
            onChange={(event, editor) => {
              setextraNote(editor.getData());
            } }
            config={{
              placeholder: 'Write the extra content here content here...',
            }} />
        </div>
      )}

      <div className='flex flex-row justify-between border p-6 items-center mb-4 mt-5'>
        <div className="flex flex-col w-[45%]">
          <label htmlFor="Email" className="block text-gray-700 font-semibold mb-2">Image</label>
          <input
            onChange={handleImageChange}
            type="file"
            className="form-control w-[100%] mb-3 border border-dark rounded-lg"
            placeholder="Image file"
            required />
        </div>

        <div className="flex flex-col w-[45%]">
          <label htmlFor="Password" className="block text-gray-700 font-semibold mb-2">Post Tags</label>
          <input
            value={postTags}
            onChange={(e) => setpostTags(e.target.value)}
            type="text"
            className="form-control w-[100%] mb-3 border border-dark rounded-lg"
            placeholder="Post Tags"
            required />
        </div>

      </div>
      <div className='flex flex-row justify-between border p-6 items-center mb-4 mt-5'>
        {/* <div className="flex flex-col w-[45%]">
              <label htmlFor="Password" className="block text-gray-700 font-semibold mb-2">Extra Note</label>
              <input
                value={extraNote}
                onChange={(e) => setextraNote(e.target.value)}
                type="text"
                className="form-control w-[100%] mb-3 border border-dark rounded-lg"
                placeholder="Extra Note"
                required
              />
            </div> */}
      </div>

      <div className='w-full flex justify-center'>
        <SubmitButton
        onClick={handleSubmit} 
        isLoading={loading} 
        text="Submit" 
        
        />
        {/* <SubmitButton/> */}
      </div>
      {loading && <Loader /> }
      
    </div>
  );
}

export default CreatePost 
;
