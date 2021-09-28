import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-vGJn0ctOdotmbayIRrFbBrpEcCkR_VY",
    authDomain: "linkedln-clone-ade5e.firebaseapp.com",
    projectId: "linkedln-clone-ade5e",
    storageBucket: "linkedln-clone-ade5e.appspot.com",
    messagingSenderId: "672906450935",
    appId: "1:672906450935:web:d343dccf5adb50affc80f2",
    measurementId: "G-VY7FZ2482G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//Cloud Firestore 是一种灵活且可扩缩的数据库，适用于在 Firebase 和 Google Cloud Platform 上进行移动、Web 和服务器开发。
const db = firebase.firestore();
const auth = firebase.auth();

//Cloud Storage for Firebase 是专为需要存储和提供用户生成的内容（如照片或视频）的应用开发者而打造的
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage}
export default db;

