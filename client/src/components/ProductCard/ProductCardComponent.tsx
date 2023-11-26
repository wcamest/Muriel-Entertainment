import React from "react";
import ButtonComponent from "../controls/button/ButtonComponent";
import Image from "next/image";
import WhatsAppIcon from "../icons/WhatsAppIcon";

type Props = {
  image?: string;
  title?: string;
  price?: string;
  whatsAppLink?: string;
};

const ProductCardComponent = (props: Props) => {
  const { image, title, price, whatsAppLink } = props;

  if (!image) return;
  if (!title) return;

  return (
    <div className="border border-solid border-teal-800 border-opacity-40 rounded-md flex flex-col shadow-md">
      <div className="relative w-full aspect-video overflow-hidden rounded-t-md">
        <Image src={image} alt={title} fill={true} className="object-cover" />
      </div>
      <div className="p-3 flex flex-col gap-10">
        <div>
          <h2 className="text-2xl text-teal-800 font-bold">{title}</h2>
          <span className="text-2xl underline text-teal-800">{price}</span>
        </div>
        {whatsAppLink && (
          <a href={whatsAppLink} target="_blank">
            <ButtonComponent fullWidth={true}>
                <div className="flex justify-center items-center gap-2">
                    <WhatsAppIcon />
                    <span>Adquirir</span>
                </div>
            </ButtonComponent>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProductCardComponent;
