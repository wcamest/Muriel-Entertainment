import InfoItemComponent from "@/components/InfoItem/InfoItemComponent";
import React from "react";

type Props = {};

const Información = (props: Props) => {
  return (
    <div className="relative mt-14 lg:mt-0 p-5 lg:py-20 w-screen h-screen bg-muriel flex justify-center items-center">
      <div className="w-full max-w-6xl h-full flex flex-col gap-10">
        <h1 className="text-4xl text-teal-700 font-bold">Información</h1>
        <div className="w-full h-full flex flex-col lg:flex-row gap-12 lg:gap-2">
          <div className="w-full lg:w-6/12 flex lg:justify-center items-center">
            <div className="flex flex-col gap-8 lg:gap-16">
              <InfoItemComponent
                icon="./clock.svg"
                title="Horarios"
                description="Lunes a viernes - 8 am a 4 pm"
              />
              <InfoItemComponent
                icon="./location.svg"
                title="Ubicación"
                description="San Andrés Islas - Colombia"
              />
              <InfoItemComponent
                icon="./telephone.svg"
                title="Teléfono"
                description="+57 300 000 0000"
              />
            </div>
          </div>
          <div className="w-full lg:w-0 lg:h-full border-t lg:border-l border-t-solid lg:border-l-solid border-t-teal-800 lg:border-l-teal-800 opacity-20"></div>
          <div className="w-full lg:w-6/12 flex lg:justify-center items-center">
            <div className="flex flex-col gap-8 lg:gap-16">
              <InfoItemComponent
                icon="./facebook.svg"
                title="Facebook"
                description="Arrecife artificial"
              />
              <InfoItemComponent
                icon="./instagram.svg"
                title="Instagram"
                description="Arrecife artificial"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Información;
