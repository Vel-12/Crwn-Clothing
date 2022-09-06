// import { createContext, useEffect, useState } from "react";
// import {
//   addCollectionAndDocuments,
//   getCategoriesAndDocuments,
// } from "../components/utils/firebase/firebase.js";

// export const CategoriesContext = createContext({});

// export const CategoriesProvider = ({ children }) => {
//   const [categoriesMap, setCategoriesMap] = useState({});

//   useEffect(() => {
//     const getCatergoriesMap = async () => {
//       const categoryMap = await getCategoriesAndDocuments();
//       setCategoriesMap(categoryMap);
//     };

//     getCatergoriesMap();
//   }, []);

//   const value = { categoriesMap, setCategoriesMap };

//   return (
//     <CategoriesContext.Provider value={value}>
//       {children}
//     </CategoriesContext.Provider>
//   );
// };
