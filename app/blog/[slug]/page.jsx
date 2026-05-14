import Image from "next/image";
import { blog } from "../../data/blog";
import { Poppins, Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export default async function detailedBlogPage({ params }) {
  const { slug } = await params;
  const blogs = blog.find((m) => m.slug === slug);
  return (
    <div>
      <div className="mx-12  rounded-lg relative h-[500px]">
        <Image
          alt={blogs.title}
          src={blogs.image}
          className="object-cover rounded-lg"
          fill
        />
      </div>
      <div
        className={`flex text-center justify-center m-6 items-center md:text-3xl sm:text-2xl text-xl lg:text-5xl uppercase ${poppins.className} font-bold`}
      >
        {blogs.title}
      </div>
      <div className={`p-5 ${roboto.className} rounded-lg text-md mx-12 bg-[#cbc2f7]`}>
        quae! A dolores fuga deserunt quibusdam recusandae dolorum at eos
        facilis laudantium non, assumenda minus. Aliquam voluptatum, repellendus
        eveniet aperiam vel id odit tenetur cum repellat, optio reiciendis
        illum? Mollitia excepturi earum maxime sint qui. Aut incidunt sapiente
        non iste, accusantium nulla exercitationem ad magni suscipit, ab
        doloremque laudantium sint atque illo adipisci fugit ipsum dolorum quam
        ipsam rerum? Iusto, fugiat. Molestiae optio ut dolore sequi corporis
        impedit error nisi rerum quod eum ullam quis explicabo et fugiat esse
        adipisci quidem, itaque reprehenderit quaerat! Molestias vitae, aperiam
        veniam aliquam doloribus quam repudiandae tenetur, nesciunt natus
        voluptate iusto modi assumenda perferendis illo tempora ad autem harum
        rem inventore delectus libero beatae a? Eius praesentium sit illum
        dolor. Harum rerum sapiente quas optio facilis vel repudiandae dolorum
        omnis nostrum fugit aut, obcaecati quia adipisci laboriosam dolorem
        eveniet minus cupiditate cumque in officia, itaque, odio ea. Natus
        fugiat ducimus dolores eligendi. Ipsam, quasi minus sunt et quos
        perspiciatis commodi facilis sit amet error vitae. Voluptates ipsum
        eveniet magnam? Autem, exercitationem eius! Molestiae quia eos ipsa
        quod? Est similique tempore, placeat asperiores voluptate praesentium
        ullam natus in eius quos? Repellat, officia? Optio soluta hic earum quos
        temporibus explicabo? Alias, ipsa? In doloremque nisi earum corrupti
        natus reprehenderit blanditiis ut dignissimos eveniet fugiat.
        Perspiciatis nemo corrupti cum aut fuga soluta, sequi dolore possimus,
        dolorum ab voluptatem beatae quidem exercitationem, explicabo veniam
        quos numquam iure. Perspiciatis aperiam similique omnis atque, nobis
        quo. Mollitia voluptatum impedit enim aspernatur accusantium nulla
        excepturi aut porro nemo laudantium saepe ullam praesentium earum sequi
        architecto, necessitatibus voluptatibus magni corrupti tempore! Fugiat
        amet officiis illum odio. Placeat a hic voluptate tenetur distinctio
        quod, porro enim dolore culpa eius, ipsum debitis commodi, et nesciunt
        quia laudantium non repellendus amet voluptatem doloribus veritatis
        cupiditate. Dolores, reiciendis vero? Modi nobis veniam hic totam
        doloremque obcaecati itaque consequatur nemo recusandae neque provident
        aut, expedita animi delectus atque quia sit! Error vitae saepe mollitia
        nulla nesciunt veritatis ratione, officiis quas. Exercitationem quaerat
        sequi veniam eos repudiandae neque maxime, eius mollitia temporibus
        suscipit nulla, ullam, provident sunt deserunt quae dolorum quidem?
        Ratione corrupti voluptatem doloribus quo eligendi. Tenetur animi fugit
        ea necessitatibus? Quidem perferendis, rerum consectetur voluptatum
        eaque distinctio sit placeat debitis voluptates, eligendi iste cum
        itaque voluptas dolorum cupiditate id dolores illum voluptatem
        exercitationem corporis maxime omnis architecto temporibus. Accusamus
        officia recusandae hic tempora autem minima obcaecati corrupti omnis
        tenetur mollitia rem incidunt nulla distinctio ipsa beatae alias vel,
        ipsam voluptatibus reprehenderit itaque eos esse? Tempore minima illum
        unde assumenda libero maxime modi at, accusantium dolor a maiores ut
        repudiandae eaque aliquid id velit rerum porro incidunt, dolores, illo
        labore. Deleniti minus obcaecati esse repudiandae! Hic modi eum sit ad
        tempora itaque laudantium consequatur ut accusamus aspernatur. Natus
        nostrum accusantium soluta doloremque debitis libero officiis odio nam,
        repellendus reiciendis dignissimos explicabo ratione corporis tenetur
        maxime quisquam ea, sapiente dolore vero harum? Ab asperiores vel
        impedit quo, iste in? Debitis quam aspernatur impedit libero doloribus
        esse ea necessitatibus quisquam quaerat ab quas harum mollitia maiores
        eligendi eveniet hic unde nihil, repellendus eum delectus, minima enim
        expedita ad accusantium. Aut nostrum voluptas fugiat neque? Accusamus
        voluptate placeat quia sint ratione iusto repellat ab quis minus nisi,
        eum delectus, quasi aut iure eaque dicta qui expedita ullam labore hic
        tempore! Nihil magni deserunt, similique minima aliquam quaerat.
        Voluptate mollitia tempore ratione ex totam deserunt excepturi eveniet
        animi. Consequatur qui odit voluptatum ea ducimus dicta dolorem?
        Commodi, labore aliquid possimus ipsa corrupti repudiandae atque
        exercitationem nostrum qui voluptate impedit iusto dicta veniam eaque
        non itaque sequi voluptates repellendus vitae libero numquam? Corporis
        blanditiis dignissimos id quod, recusandae mollitia veritatis sit
        impedit hic ab delectus voluptates voluptatum velit quidem ullam, fuga
        nobis laborum eveniet. Eum magni porro et dicta soluta asperiores
        laboriosam sequi dolores harum temporibus molestiae, eveniet quam
        perspiciatis beatae, tenetur repellat possimus tempora illum ratione,
        officia esse? Repellendus in officia ullam cupiditate placeat,
        repudiandae, nisi inventore illo sit vitae nulla veritatis, laudantium
        unde alias harum? Quo a, dolores eveniet laboriosam dolorum numquam!
        Repellendus iste, aliquam aperiam qui pariatur repudiandae porro ab
        mollitia nemo, accusantium non. Rerum unde aperiam laboriosam dolorum
        reprehenderit animi expedita similique odio! Rerum iure laborum
        cupiditate exercitationem ut incidunt voluptatem, ex minima commodi
        animi excepturi veniam provident quas, eveniet, accusamus magni esse
        sit. Neque in soluta accusantium quas provident corrupti voluptates odit
        unde rem debitis deserunt labore perspiciatis asperiores voluptate
        nihil, minus exercitationem molestias temporibus obcaecati ipsam maiores
        voluptatibus doloribus dignissimos mollitia. Ut ipsum totam harum dolor
        modi voluptatem animi blanditiis voluptatibus necessitatibus. Error
        obcaecati unde dolorem possimus similique illo, officiis eum veniam
        sequi dolores facilis laborum sapiente dolore soluta. Nesciunt facilis,
        libero veritatis vitae enim provident deleniti, ipsa harum officia
      </div>
      <div className={`text-2xl flex justify-end mx-12 my-3  font-medium ${poppins.className}`}>
       Author: {blogs.author}
      </div>
    </div>
  );
}
