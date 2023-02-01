import { Article } from "@/components/Article";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { addArticle, getArticles } from "@/lib/firebaseFunctions";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Articles() {

    const [articles, setArticles] = useState(null);

    useEffect(() => {
        (async () => {
            const articles = await  getArticles();
            setArticles(articles);
          })();
        // const articles = getArticles();
        // setArticles(articles);
    }, [])
    return (
        <>
            <Head>
                <title>Artykuły | alle diet</title>
                <link rel="icon" href="/eggplant2.png"></link>
            </Head>
            <Navbar/>
            <section id="container" className="flex flex-col max-w-7xl items-center justify-center mx-auto mt-32 mb-20 font-lato">
                <div className="w-5/6">
                    <h1 className="text-6xl text-center text-violet mb-8">Baza wiedzy</h1>
                    <hr />
                    {articles && (
                        articles.map((article) => (
                            <Article body={article.body} date={article.date.seconds} key={article.id} title={article.title} description={article.description} imageRef={article.imageRef}/>
                        ))
                    )}
                </div>
                {articles && (
                <>
                <div dangerouslySetInnerHTML={{ __html: articles[0]?.body }}></div>
                </>
            )}
            </section>
            
            <Footer/>
        </>
    )
}