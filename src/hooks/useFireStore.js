import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc") // order by time
      .onSnapshot((snap) => {
        //everytime a change occurs this fires and updates the documents array
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id }); //for each document stores data and id in documents array
        });
        setDocs(documents);
      });

    return () => unsub();
    // cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection]);

  return { docs };
};

export default useFirestore;
