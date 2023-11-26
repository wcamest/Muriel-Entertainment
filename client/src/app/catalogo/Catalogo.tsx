import ProductCardComponent from "@/components/ProductCard/ProductCardComponent";
import Image from "next/image";
import React from "react";

type Props = {};

const Catalogo = (props: Props) => {
  return (
    <div
      style={{ backgroundColor: "#eafffd" }}
      className="relative p-5 lg:py-20 w-screen h-screen overflow-x-hidden lg:overflow-hidden flex justify-center items-center"
    >
      <div className="fixed lg:absolute w-screen h-screen lg:w-full lg:h-full">
        <Image src={"/catalogue-art-1.svg"} alt="catalogue-art-1" width={260} height={123} className="absolute bottom-12 lg:bottom-0 w-28 lg:w-80" />
        <Image src={"/catalogue-art-2.svg"} alt="catalogue-art-2" width={551} height={548} className="absolute bottom-0 lg:-bottom-32 -right-12 lg:-right-48 w-44 lg:w-96" />
      </div>
      <div className="relative w-full max-w-6xl h-full flex flex-col gap-5 lg:gap-10">
        <h1 className="text-4xl text-teal-700 font-bold">Catálogo</h1>
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProductCardComponent
            image="/product-1-image.jpg"
            title="Estudio fotográfico para una persona"
            price="50.000 COP"
            whatsAppLink="https://wa.me/p/5393562144046892/573163852818"
          />
          <ProductCardComponent
            image="/product-2-image.jpg"
            title="Estudio fotográfico para dos personas"
            price="100.000 COP"
            whatsAppLink="https://wa.me/p/7905884912816482/573163852818"
          />
          <ProductCardComponent
            image="/product-3-image.jpg"
            title="Estudio fotográfico para cuatro personas"
            price="200.000 COP"
            whatsAppLink="https://wa.me/p/5596704360390174/573163852818"
          />
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
