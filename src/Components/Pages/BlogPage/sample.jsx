// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPostByTitle } from '../../../Redux/Actions';
// import { useParams } from 'react-router-dom';

// const BlogPage = () => {
// //   const dispatch = useDispatch();
// //   const { title } = useParams(); // Get the post title from the URL
// //   const { data: details, } = useSelector((state) => state.data);
// //   const [singlePage, setSinglePage] = useState({});

// //   // Fetch data on mount if not already in Redux store

// // useEffect(() =>{
// //   if (!details || details.length === 0) {
// //     dispatch(fetchPostByTitle());
// //   }
// // }, [dispatch, details]);

// // useEffect(() =>{
// //   if (details && details.length > 0) {
// //     const findDetails = details.find((data) => data.title === title);
// //     setSinglePage(findDetails);
// //   }
// // }, [details, title] )


// //   const featuredposts = [
// //     { title: 'Featured Posts 1', link: '#' },
// //     { title: 'Featured Posts 2', link: '#' },
// //     { title: 'Featured Posts 3', link: '#' },
// //   ];

// //   const recentposts = [
// //     { title: 'Recent Posts 1', link: '#' },
// //     { title: 'Recent Posts 2', link: '#' },
// //     { title: 'Recent Posts 3', link: '#' },
// //   ];

//   return (
//     <div className="container mx-auto flex flex-col lg:flex-row justify-between bg-gray-100">
//       {/* Side Menu */}
//       <aside className="w-full lg:w-1/4 bg-white p-6 border-r border-red-700 overflow-y-auto sticky top-[60px]">
//         <div className="mb-8">
//           <h2 className="text-xl font-bold mb-4">Featured posts</h2>
//           <ul>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quis dicta ipsa autem rem necessitatibus quibusdam pariatur sit provident. Tempora consequatur qui dignissimos iusto repellat molestias vero recusandae obcaecati nesciunt.
//             {featuredposts.map((  singlePage, index) => (
//               <li key={index} className="mb-2">
//                 <a href={singlePage.link} className="text-blue-500 hover:underline">
//                   {singlePage.title}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h2 className="text-xl font-bold mb-4">Recent posts</h2>
//           <ul>
//             {recentposts.map((singlePage, index) => (
//               <li key={index} className="mb-2">
//                 <a href={singlePage.link} className="text-blue-500 hover:underline">
//                   {singlePage.title}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="w-full lg:w-3/4 p-6 lg:p-8">
//         <div className="mb-6">
//           <img
//             src={singlePage.image_url}
//             alt="Blog Post"
//             className="w-full h-auto rounded-lg border"
//           />
//         </div>
//         <h1 className="text-2xl lg:text-4xl font-bold border mb-4">{singlePage.title}</h1>
//         <p className="text-gray-700 leading-relaxed border mb-4">{singlePage.content}</p>
//       </main>
//     </div>
//   );
// };

// export default BlogPage;
