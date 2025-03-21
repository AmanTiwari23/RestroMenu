// import { useState } from "react";
// import { menuData } from "../assets/data/Data";
// import Layout from "../components/Layout";

// export default function Menu() {
//   const [expandedSections, setExpandedSections] = useState({});
//   const [selectedImage, setSelectedImage] = useState(null);

//   const toggleSection = (section) => {
//     setExpandedSections((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
//   };

//   return (
//     <Layout>
      
//     <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-700 p-4">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">🍽️ Yum Yum Food Menu</h1>

//         {menuData.map((category) => (
//           <div key={category.section} className="mb-6">
//             {/* Accordion Button */}
//             <button
//               onClick={() => toggleSection(category.section)}
//               className="w-full text-left text-lg sm:text-xl font-semibold bg-gray-200 p-3 rounded-lg flex justify-between"
//             >
//               {category.section} {expandedSections[category.section] ? "▲" : "▼"}
//             </button>

//             {/* Dish Grid */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-3">
//               {(expandedSections[category.section]
//                 ? category.dishes
//                 : category.dishes.slice(0, 5)
//               ).map((dish) => (
//                 <div
//                   key={dish.id}
//                   className="cursor-pointer bg-gradient-to-r from-pink-400 to-purple-500 shadow-lg rounded-lg p-3 border border-gray-300 transition-transform duration-300 hover:scale-105"
//                   onClick={() => setSelectedImage(dish.image)}
//                 >
//                   <img
//                     src={dish.image}
//                     alt={dish.name}
//                     className="w-full h-24 sm:h-32 object-cover rounded-md shadow-md"
//                   />
//                   <h3 className="text-md sm:text-lg font-semibold mt-2 text-white">{dish.name}</h3>
//                   <p className="text-gray-100 text-sm">{dish.price}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}

//         {/* Full-Screen Image Modal */}
//         {selectedImage && (
//           <div
//             className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
//             onClick={() => setSelectedImage(null)}
//           >
//             <div className="relative p-4">
//               <button
//                 className="absolute top-2 right-2 text-white text-3xl font-bold"
//                 onClick={() => setSelectedImage(null)}
//               >
//                 ✖
//               </button>
//               <img
//                 src={selectedImage}
//                 alt="Full Screen Dish"
//                 className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
   
//      </Layout>
//   );
// }


import { useState } from "react";
import { menuData } from "../assets/data/Data";
import Layout from "../components/Layout";

export default function Menu() {
  const [expandedSections, setExpandedSections] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
            🍽️ Yum Yum Food Menu
          </h1>

          {menuData.map((category) => (
            <div key={category.section} className="mb-6">
              <button
                onClick={() => toggleSection(category.section)}
                className="w-full text-left text-lg sm:text-xl font-semibold bg-gray-200 text-gray-800 p-3 rounded-lg flex justify-between hover:bg-gray-300 transition"
              >
                {category.section} {expandedSections[category.section] ? "▲" : "▼"}
              </button>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-3">
                {(expandedSections[category.section]
                  ? category.dishes
                  : category.dishes.slice(0, 5)
                ).map((dish) => (
                  <div
                    key={dish.id}
                    className="cursor-pointer bg-white shadow-md rounded-lg border border-gray-300 transition-transform duration-300 hover:scale-105"
                    onClick={() => setSelectedImage(dish.image)}
                  >
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                    <div className="p-2">
                      <h3 className="text-md sm:text-lg font-semibold text-gray-800">
                        {dish.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{dish.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {selectedImage && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative p-4">
                <button
                  className="absolute top-2 right-2 text-white text-3xl font-bold"
                  onClick={() => setSelectedImage(null)}
                >
                  ✖
                </button>
                <img
                  src={selectedImage}
                  alt="Full Screen Dish"
                  className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

