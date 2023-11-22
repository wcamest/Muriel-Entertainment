import React from "react";
import styles from "./Home.module.css";
import Image from "next/image";
import ButtonComponent from "@/components/controls/button/ButtonComponent";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute w-full h-full flex">
        {
          <div
            className={`${styles.image_background} absolute w-full h-full bg-contain`}
          ></div>
        }
        <div className="relative w-full h-full flex justify-end overflow-hidden">
          <div className="relative w-6/12 h-full flex justify-center items-center">
            <div
              className={`${styles.colored_background_004d44} absolute`}
            ></div>
            <div
              className={`${styles.colored_background_eafffd} absolute`}
            ></div>
            <div style={{backgroundColor: "#eafffd"}} className="absolute w-72 h-full right-0"></div>
            <div className={`${styles.art_container} absolute w-full h-full`}>
              <Image
                src={"./landing-page-art-1.svg"}
                width={123}
                height={125}
                alt="landing-page-art-shell"
                className={styles.art_1_shell}
              />
              <Image
                src={"./landing-page-art-2.svg"}
                width={123}
                height={125}
                alt="landing-page-art-starfish"
                className={styles.art_2_starfish}
              />
              <Image
                src={"./landing-page-art-3.svg"}
                width={123}
                height={125}
                alt="landing-page-art-fish"
                className={styles.art_3_fish}
              />
              <Image
                src={"./landing-page-art-4.svg"}
                width={424}
                height={236}
                alt="landing-page-art-fishes-and-seahorse"
                className={styles.art_4_fishes_and_seahorse}
              />
            </div>
            <div className="relative p-10 flex flex-col justify-center items-center gap-4">
              <span className="font-bold text-3xl text-teal-800 text-center">
                Ven y disfruta de una experiencia
                <br />
                unica
              </span>
              <p className="text-xl max-w-2xl text-center text-teal-700">
                Llévate un recuerdo inolvidable de tu visita a San Andrés Islas,
                junto a tu familia y amigos. Rodeate la diversidad en fauna
                marina que caracteriza a nuestro{" "}
                <span className="font-bold">Arrecife Artificial</span>.
              </p>
              <div className="flex gap-3 mt-10">
                <ButtonComponent href="/catalogo">Catálogo</ButtonComponent>
                <ButtonComponent href="/informacion" outline={true}>Información</ButtonComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
