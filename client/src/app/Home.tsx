import React from "react";
import styles from "./Home.module.css";
import Image from "next/image";
import ButtonComponent from "@/components/controls/button/ButtonComponent";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="relative w-screen h-screen overflow-y-scroll lg:overflow-hidden">
      <div className="absolute w-full h-full mt-14 lg:mt-0 flex flex-col lg:flex-row">
        <div
          className={`${styles.image_background} absolute w-full h-48 lg:h-full bg-cover bg-center lg:bg-left-top lg:bg-contain`}
        ></div>
        <div className="relative w-full h-full flex flex-col lg:flex-row items-center lg:items-start justify-end overflow-hidden">
          <div className="relative w-full lg:w-6/12 h-fit lg:h-full flex justify-center items-center">
            <div
              className={`${styles.colored_background_004d44} absolute hidden lg:block`}
            ></div>
            <div
              className={`${styles.colored_background_eafffd} absolute hidden lg:block`}
            ></div>
            <div
              className="absolute hidden lg:block w-72 h-full right-0 bg-muriel"
            ></div>
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
              <span className="font-bold w-full lg:w-auto text-xl lg:text-3xl text-teal-800 text-center">
                Ven y disfruta de una experiencia
                <br />
                unica
              </span>
              <p className="text-base lg:text-xl max-w-2xl text-center text-teal-700">
                Llévate un recuerdo inolvidable de tu visita a San Andrés Islas,
                junto a tu familia y amigos. Rodeate la diversidad en fauna
                marina que caracteriza a nuestro{" "}
                <span className="font-bold">Arrecife Artificial</span>.
              </p>
              <div className="flex gap-3 mt-2 lg:mt-10">
                <ButtonComponent href="/catalogo">Catálogo</ButtonComponent>
                <ButtonComponent href="/informacion" outline={true}>
                  Información
                </ButtonComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
