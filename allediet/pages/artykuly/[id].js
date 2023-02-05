import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";

export default function Article() {
  return (
    <>
      <Head>
        <title>Artykuły | alle diet</title>
        <link rel="icon" href="/eggplant2.png"></link>
      </Head>
      <Navbar />
      <article className="flex-col max-w-4xl items-center justify-center mx-auto mt-32 mb-20 font-lato font-thin gap-10 lg:mx-20 md:mx-10 sm:mx-5">
        <div id="title-date" className="flex flex-col gap-5 mb-10">
          <h1 className="text-violet text-5xl sm:text-3xl">
            Poczuj miętę! - zalety, właściwości, zastosowanie
          </h1>
          <div
            id="dateAndAuthorWrapper"
            className="flex flex-row gap-6 justify-start items-center"
          >
            <div
              id="dateWrapper"
              className="flex flex-row justify-between items-center"
            >
              <Image
                width="40"
                height="40"
                src="/calendar.png"
                alt="calendar"
              />
              <p>22 listopada 2022</p>
            </div>
            <span className="font-normal">autor: Aleksandra Dublas</span>
          </div>
        </div>
        <div id="image" className="mb-10">
          <Image
            width="600"
            height="600"
            src="/mieta.jpg"
            alt="image"
            className="w-full"
          />
        </div>
        <div id="test">
          <h2 className="text-violet text-2xl p-4">
            Mięta podstawowe infromacje
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem quisquam, saepe accusantium molestiae optio, quod
            vero blanditiis consequatur deserunt quaerat minus itaque officia
            doloremque. Dolore cupiditate sequi voluptatibus reiciendis nostrum
            quos esse fuga quidem necessitatibus? Autem error sint ratione.
            Consequuntur quod tempore saepe voluptates quaerat! Fuga sunt ullam
            sapiente expedita reprehenderit sed est harum et architecto esse
            debitis quod dolorem voluptas maxime accusantium, quia sint atque
            tempora pariatur ipsam aperiam amet itaque nobis at. Quasi sed,
            ipsum molestiae itaque officiis expedita facilis perferendis hic
            alias quaerat eos perspiciatis cumque iure a nemo, repellat ratione
            dignissimos tempore exercitationem, fugit voluptatum nostrum.
          </p>
          <h2 className="text-violet text-2xl p-4">Mięta zastosowanie</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
            asperiores expedita illo at quidem quisquam maxime nobis velit
            exercitationem in laborum amet dignissimos tenetur, non error
            sapiente ducimus sint mollitia id soluta saepe. Maxime accusantium
            cum modi placeat aliquam temporibus voluptatem deleniti, deserunt
            quibusdam reprehenderit rerum expedita esse ad, voluptatibus totam.
            Aliquam, facere accusantium minima animi nesciunt obcaecati minus
            molestiae autem nemo. Iure facere itaque saepe ipsum, soluta id
            eligendi suscipit possimus unde laborum sapiente debitis culpa
            minima ex, magni non consectetur atque totam nostrum cupiditate vero
            reprehenderit. Minus dolores accusantium debitis corrupti quidem
            tenetur laboriosam qui labore recusandae eligendi laborum animi quod
            quasi, modi a nostrum culpa veniam consequatur officiis magni
            repellat vel, voluptas earum esse. Beatae esse voluptatem quo
            laboriosam ea officia itaque numquam possimus eveniet deserunt
            officiis ut necessitatibus adipisci enim in, nam tempora aspernatur
            quidem reprehenderit consequatur quae perspiciatis suscipit.
            Perferendis, laborum omnis pariatur eius commodi dolor ipsam
            recusandae fuga a mollitia exercitationem sequi alias quis qui
            incidunt odit sapiente consectetur! Sunt suscipit at, accusamus
            saepe non autem provident nesciunt unde exercitationem neque
            necessitatibus debitis dolore architecto alias repellat soluta ut
            ipsam, maiores enim? Reprehenderit tempora ex, repellat impedit
            voluptates neque incidunt ut suscipit id quas. Quibusdam cupiditate
            possimus nobis accusamus et ipsum? At ratione, nulla aperiam, velit
            magnam ut sapiente delectus cum omnis quisquam reiciendis cupiditate
            beatae nihil perferendis maiores id molestiae in repudiandae totam,
            vel iusto. Soluta quia cupiditate accusamus, provident nihil
            consequatur iure eum culpa nulla. Reiciendis iste adipisci, fuga
            numquam sint nam placeat corporis perspiciatis molestiae perferendis
            quis ipsa voluptate itaque maiores aperiam libero, repellat
            provident, earum quas quibusdam culpa! Deserunt consequuntur
            voluptatum aliquid alias provident nesciunt id accusantium
            exercitationem molestiae eligendi corrupti eaque animi corporis
            quos, laborum amet vitae odit magni deleniti! Nihil, ut dicta et,
            molestiae neque dignissimos quis voluptate eos vel sed reiciendis
            nam alias rerum harum. Labore accusamus earum maiores ab voluptates
            eveniet, aut placeat, ea quo tempore iste quis animi quasi. Earum
            illo, dicta doloribus recusandae quo fugiat tenetur ut, similique
            officia ad est reprehenderit a quis. Veniam ullam omnis delectus
            vitae aut illo, voluptate minus. Necessitatibus, perspiciatis eius
            fugiat, aliquam optio hic perferendis laboriosam, totam ducimus quae
            sequi nihil soluta omnis ab at cupiditate placeat eum illum nostrum
            fugit magnam provident eveniet numquam. Dolorem beatae optio
            maiores, quod, voluptates eveniet autem exercitationem deserunt
            molestias placeat ex maxime itaque, fugit dolor voluptatem possimus
            reiciendis minima nesciunt eligendi.
          </p>
        </div>
      </article>
      <Footer />
    </>
  );
}
