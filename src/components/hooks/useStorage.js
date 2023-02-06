import { useState, useEffect } from "react";
import { projectStorage,projectFireStore, timeStamp } from "../../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageReference = projectStorage.ref(file.name);
    const collectionReference=projectFireStore.collection('images');
    storageReference.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageReference.getDownloadURL();
        const createdAt=timeStamp();
        collectionReference.add({url:url,createdAt});

        setUrl(url);
      }
    );
  }, [file]);

  return { progress, error, url };
};

export default useStorage;
