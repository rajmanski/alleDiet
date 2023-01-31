import Image from "next/image"

export const Article = ({body, date, title, description}) => {
    return (
        <div id="article" className="my-10 flex flex-row gap-10 font-thin lg:flex-wrap lg:justify-center md:gap-5">
                        <div id="imageSection" className="w-2/6 h-auto lg:w-4/6">
                            <Image width="600" height="600" src="/mieta.jpg" alt="mieta" className="h-full"/>
                        </div>
                        <div id="articleInfo" className="w-4/6 flex flex-col items-start gap-4">
                            <h2 className="text-violet text-3xl hover:underline cursor-pointer">{title}</h2>
                            <div id="dateAndAuthorWrapper" className="flex flex-row gap-6 justify-center items-center">
                                <div id="dateWrapper" className="flex flex-row justify-between items-center">
                                <Image width="40" height="40" src="/calendar.png" alt="calendar" />
                                    <p>22 listopada 2022</p>
                                </div>
                                
                                <span className="font-normal">autor: Aleksandra Dublas</span>
                            </div>
                            <p>{description}</p>
                            <button className="px-6 py-3 bg-violet text-white rounded-2xl text-md hover:bg-hoverViolet">Czytaj więcej</button>
                        </div>
                    </div>
    )
}