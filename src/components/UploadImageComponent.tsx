import React, { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { firestore_db, storage } from "../firebase/config";
import { PhotoTypes } from "../types";

export const UploadImageComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const uploadImageAsPromise = (imageFile: File) => {
    return new Promise(function (resolve, reject) {
      const storageRef = ref(storage, `photos/${imageFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // setImgUrl(downloadURL);
            onUploadImage(downloadURL, imageFile.name);
          });
        }
      );
    });
  };

  const onUploadImage = async (url: string, name: string) => {
    await addDoc(collection(firestore_db, "photos"), {
      url,
      name,
      type: [PhotoTypes.EVENTO],
    });
  };
  // const [imgUrl, setImgUrl] = useState<null | string>(null);
  // const [progresspercent, setProgresspercent] = useState(0);

  const handleSubmit = (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    const files = e.target[0]?.files as FileList;

    Promise.all(
      // Array of "Promises"
      Object.values(files).map((file: File) => uploadImageAsPromise(file))
    )
      .then((url) => {
        console.log(`All success`);
      })
      .catch((error) => {
        console.log(`Some failed: `, error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form">
        <input multiple className="text-black" type="file" />
        <button className="bg-slate-50 p-2" type="submit">
          Upload
        </button>
      </form>
      {isLoading ? (
        <div className="outerbar p-2  text-black bg-gray-200">Loading...</div>
      ) : (
        <div className="outerbar p-2  text-black bg-green-200">Done</div>
      )}
    </div>
  );
};
