// import { app, firestore } from "@/lib/firebase";
// import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
// import React from "react";
// import { useCollection, useCollectionData } from "react-firebase-hooks/firestore";

// const FirestoreCollection = () => {
//   const [value, loading, error,setValue] = useCollection(collection(firestore, "event"));
//   const db = collection(firestore, "event");

//   const handleUpdateData = async () => {
//      const groceriesColRef = collection(db, "groceryLists");
//   }

//   return (
//     <div>
//       <p>
//         {error && <strong>Error: {JSON.stringify(error)}</strong>}
//         {loading && <span>Collection: Loading...</span>}
//         {value && (
//           <span>
//             Collection:{" "}
//             {value.docs.map((doc) => (
//               <React.Fragment key={doc.id}>{JSON.stringify(doc.data())}, </React.Fragment>
//             ))}
//           </span>
//         )}
//       </p>
//     </div>
//   );
// };

// export default FirestoreCollection;
