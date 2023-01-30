import {  addDoc, collection, getDocs, orderBy } from 'firebase/firestore';
import { db } from './firebase';

const colRef = collection(db, `Articles`);

export const getArticles = () => {

getDocs(colRef, orderBy("date"))
    .then((snapshot) => {
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
        date : Date.now(),
        body: body,
    })
}
