import React, { useState } from 'react';

const Table = ({ blogs }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBlogs = blogs.data.filter((blog) =>
    blog.attributes.blogTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    <div className="flex flex-col">
      {/* Search Input */}
      <div className="my-4 mx-auto max-w-md ml-auto">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded-md"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-200 border-b">
                <tr>
                  <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">No.</th>
                  <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Topic</th>
                  <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Date</th>
                  <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Download</th>
                </tr>
              </thead>
              <tbody>
                {filteredBlogs.map((blog, index) => (
                  <tr
                    key={blog.id}
                    className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {blog.attributes.blogTitle}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {/* Add date property */}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <a
                        href={`/download/${blog.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;





// import React from 'react';

// const Table = ({ blogs }) => {
//   return (
//     <div className="flex flex-col">
//       <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
//         <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
//           <div className="overflow-hidden">
//             <table className="min-w-full">
//               <thead className="bg-gray-200 border-b">
//                 <tr>
//                   <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">No.</th>
//                   <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Topic</th>
//                   <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Date</th>
//                   <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Download</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {blogs.data.map((blog, index) => (
//                   <tr key={blog.id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
//                     <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{blog.attributes.blogTitle}</td>
//                     <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{/* Add date property */}</td>
//                     <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                       <a href={`/download/${blog.id}`} target="_blank" rel="noopener noreferrer">
//                         Download
//                       </a>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Table;










