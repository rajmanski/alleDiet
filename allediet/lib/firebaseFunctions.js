import {  addDoc, collection, getDocs, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

const colRef = collection(db, `Articles`);
const q = query(colRef, orderBy('date', 'desc'));

export const getArticles = async () => {
    let articles = []
const querySnapshot = await getDocs(q);
    querySnapshot.docs.forEach((doc) => {
        articles.push({...doc.data(), id: doc.id })
        })
    console.log(articles);
    return articles;

//         let articles = []
//         snapshot.docs.forEach((doc) => {
//             articles.push({...doc.data(), id: doc.id })
//         })
//         console.log(articles);
//     })

// onSnapshot(q, (snapshot) =>{
//     let articles = []
//     snapshot.docs.forEach((doc) => {
//     articles.push({...doc.data(), id: doc.id })
// })
//     console.log(articles);
//     return articles;
// })
}

export const addArticle = (title, description, body, imageRef) => {
    addDoc(colRef, {
        title: title,
        description: description,
        date : serverTimestamp(),
        body: body,
        imageRef: imageRef,
    })
}
