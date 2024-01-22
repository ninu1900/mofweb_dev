// import React from 'react';
// import { Button, Avatar, Card, Typography } from "@material-tailwind/react";
// import './SystemList.css';

// import mofLogo from '../components/images/MOFlogo.png';
// import taxLogo from '../components/images/taxLogo.png';

// const SystemList = () => {
//   const handleItemClick = (url) => {
//     window.open(url, '_blank');
//   };

//   return (
//     <Card className="w-20 p-80 py-20">
//       <div className="flex flex-wrap justify-normal">
//         {systemItems.map((item) => (
//           <Button
//             key={item.id}
//             className="w-30 w-4/4 p-12 flex= flex-row items-center"
//             onClick={() => handleItemClick(item.url)}
//             style={{
//               backgroundColor: 'transparent',
//               border: 'none',
//               padding: '20px',
//             }}
//           >
//             <div className="flex flex-row items-center ml-4rem">
//               <Avatar
//                 variant="circular"
//                 alt={item.name}
//                 src={item.logo}
//                 style={{
//                   width: 70,
//                   height: 70,
//                 }}
//               />
//               <div className="ml-10">
//                 <Typography variant="h5" color="black">
//                   {item.name}
//                 </Typography>
//               </div>
//             </div>
//           </Button>
//         ))}
//       </div>
//     </Card>
//   );
// };

// const systemItems = [
//   { id: 1, name: 'TaxRIS', url: 'https://taxservice.mof.gov.la/websquare/websquare.do', logo: taxLogo },
//   { id: 2, name: 'STR', url: 'https://www.mof.gov.la/str/', logo: taxLogo },
//   { id: 3, name: 'PPMD', url: 'http://ppmd.mof.gov.la/', logo: taxLogo },
//   { id: 4, name: 'IHRM', url: 'https://ihrm.mof.gov.la:8080/', logo: mofLogo },

//   // Add more systemItems as needed
// ];

// export default SystemList;


import React from 'react';
import { Button, Avatar, Card, Typography } from "@material-tailwind/react";

import mofLogo from '../components/images/MOFlogo.png';
import taxLogo from '../components/images/taxLogo.png';

const SystemList = () => {
  const handleItemClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Card className="w-full p-4">
      <div className="flex flex-wrap justify-between">
        {systemItems.map((item) => (
          <Button
            key={item.id}
            className="w-full md:w-1/3 p-12 flex flex-row items-center"
            onClick={() => handleItemClick(item.url)}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              padding: '36px',
            }}
          >
            <div className="flex flex-row items-center">
              <Avatar
                variant="circular"
                alt={item.name}
                src={item.logo}
                style={{
                  width: 96,
                  height: 96,
                }}
              />
              <div className="ml-4">
                <Typography variant="h5" color="black">
                  {item.name}
                </Typography>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </Card>
  );
};

const systemItems = [
  { id: 1, name: 'TaxRIS', url: 'https://taxservice.mof.gov.la/websquare/websquare.do', logo: taxLogo },
  { id: 2, name: 'STR', url: 'https://www.mof.gov.la/str/', logo: taxLogo },
  { id: 3, name: 'PPMD', url: 'http://ppmd.mof.gov.la/', logo: taxLogo },
  { id: 4, name: 'IHRM', url: 'https://ihrm.mof.gov.la:8080/', logo: mofLogo },

  // Add more systemItems as needed
];

export default SystemList;











