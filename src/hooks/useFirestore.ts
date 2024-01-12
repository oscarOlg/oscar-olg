import { DocumentData, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore_db } from "../firebase/config";

export const useFirestore = (collectionName: string) => {
  const [data, setData] = useState<DocumentData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const colRef = collection(firestore_db, collectionName);

    getDocs(colRef)
      .then((snapshots) => {
        const docs = snapshots.docs.map((doc) => doc.data());
        setData(docs);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [collectionName]);

  return { data, isLoading, error };
};
