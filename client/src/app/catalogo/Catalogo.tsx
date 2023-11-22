import ProductCardComponent from "@/components/ProductCard/ProductCardComponent";
import React from "react";

type Props = {};

const Catalogo = (props: Props) => {
  return (
    <div
      style={{ backgroundColor: "#eafffd" }}
      className="relative px-5 py-20 w-screen h-screen overflow-hidden flex justify-center items-center"
    >
      <div className="w-full max-w-7xl h-full flex flex-col gap-10">
        <h1 className="text-4xl text-teal-700 font-bold">Catálogo</h1>
        <div className="w-full h-fit grid grid-cols-3 gap-10">
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
