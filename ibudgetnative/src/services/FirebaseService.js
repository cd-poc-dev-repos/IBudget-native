import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAX4IUdsPDXvKOmOZmhyP7M2nwB1o0t0-g",
  authDomain: "ibudget-a1f35.firebaseapp.com",
  projectId: "ibudget-a1f35",
  storageBucket: "ibudget-a1f35.appspot.com",
  messagingSenderId: "170941233076",
  appId: "1:170941233076:android:fac3e82c5cb57b383ba4e1"
};

const app = initializeApp(firebaseConfig);

const Get = async (table) => {
  const db = getFirestore(app);
  const tableCollection = collection(db, table);
  const tableSnapshot = await getDocs(tableCollection);
  const tableList = tableSnapshot.docs.map(doc => doc.data());
  const documentRefs = tableSnapshot.docs.map(doc => doc.id);

  for (let i = 0; i < tableList.length; i++) {
    const data = tableList[i];
    data.id = documentRefs[i];
  }

  return tableList;
};

const Put = async (data, table) => {
  const db = getFirestore(app);
  const docRef = doc(db, table, data.id);

  const response = await updateDoc(docRef, data);

  return response;
}

const Post = async (data, table) => {
  const db = getFirestore(app);
  const tableCollection = collection(db, table);

  const response = await addDoc(tableCollection, data);

  return response;
}

export { Get, Put, Post }