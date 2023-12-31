import InfoItemComponent from "@/components/InfoItem/InfoItemComponent";
import Image from "next/image";
import React from "react";
import Información from "./Informacion";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Información - Muriel Entertainment",
  description: "Generated by create next app",
};

const page = (props: Props) => {
  return <Información />
};

export default page;
