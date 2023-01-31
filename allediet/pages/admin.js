import { Navbar } from "@/components/Navbar";
import useAuth from "@/hooks/useAuth";
import { auth, storage } from "@/lib/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import { addArticle } from "@/lib/firebaseFunctions";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function Admin() {
  const [email, setEmail] = useState(null);
  const [showPost, setShowPost] = useState(false);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const router = useRouter();
  const user = useAuth();
  // console.log(user.user?.email);
  // useEffect(() => {
  //     setEmail(user.user?.email);
  // }, [])

  const handleAddNewPost = () => {
    addArticle(title, desc, content, imageUrl);
    alert('Post został dodany do bazy danych!');
  }

  const handlePhoto = (e) => {
    console.log(e.target.files[0]);
    setPhoto(e.target.files[0]);
  }

  const handleSendImage = async () => {
    if (photo === null) {
        return;
    }
    const imageRef = await ref(storage, `images/${photo.name}`)
    uploadBytes(imageRef, photo)
        .then(() => console.log('Image uploaded'));
    setTimeout(() => {
        const imageUrl =  getDownloadURL(ref(storage, `images/${photo.name}`))
        .then((url) => setImageUrl(url))
    }, 1000)
    

    }

  return (
    <>
      <Navbar />
      <div className="mt-40 mx-auto text-center"></div>
      {auth.currentUser?.email === "prajmanski10@gmail.com" && (
        <div className="mt-20 mx-auto text-center max-w-4xl items-center justify-center">
          <button
            onClick={() => setShowPost(!showPost)}
            className="text-4xl text-violet p-3 m-4"
          >
            Dodaj nowy post
          </button>
          <div id="postSection">
            {showPost && (
              <div className="flex flex-col font-lato gap-5">
                <p className="text-violet">Tytuł postu: </p>
                <input type="text" onChange={(e) => setTitle(e.target.value)}/>
                <p className="text-violet">Opis postu: </p>
                <input type="text" onChange={(e) => setDesc(e.target.value)}/>
                <p className="text-violet">Body postu: </p>
                <JoditEditor
                  ref={editor}
                  value={content}
                  tabIndex={3} // tabIndex of textarea
                  onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                  onChange={(newContent) => {}}
                />
                <input type="file" onChange={handlePhoto}/>
                <button className="bg-violet p-2" onClick={handleSendImage}>Załącz zdjęcie</button>
                <button className="bg-violet p-2" onClick={handleAddNewPost}>Dodaj post</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
