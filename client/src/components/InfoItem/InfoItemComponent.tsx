import Image from "next/image";
import React from "react";

type Props = {
  icon?: string;
  title?: string;
  description?: string;
  url?: string;
};

const InfoItemComponent = (props: Props) => {
  const { icon, title, description, url } = props;

  if (!icon) return;

  return (
    <div className="flex items-center gap-5">
      <Image src={icon} alt="clock icon" width={60} height={60} />
      <div>
        <h2 className="text-2xl font-bold text-teal-800">{title}</h2>
        <span className="text-teal-800">{description}</span>
      </div>
    </div>
  );
};

export default InfoItemComponent;
