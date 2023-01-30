import {  addDoc, collection, getDocs, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

const colRef = collection(db, `Articles`);
const q = query(colRef, orderBy('date', 'desc'));

export const getArticles = () => {

// getDocs(colRef, orderBy("date", "asc"))
//     .then((snapshot) => {
//         let articles = []
//         snapshot.docs.forEach((doc) => {
//             articles.push({...doc.data(), id: doc.id })
//         })
//         console.log(articles);
//     })

onSnapshot(q, (snapshot) =>{
    let articles = []
    snapshot.docs.forEach((doc) => {
    articles.push({...doc.data(), id: doc.id })
})
console.log(articles);
})
}

export const addArticle = (title, description, body) => {
    addDoc(colRef, {
        title: title,
        description: description,
        date : serverTimestamp(),
        body: body,
    })
}
