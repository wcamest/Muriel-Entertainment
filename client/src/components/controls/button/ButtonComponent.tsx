import Link from "next/link";
import React, { PropsWithChildren } from "react";

type Props = {
  href?: string;
  outline?: boolean;
};

const ButtonComponent = (props: PropsWithChildren<Props>) => {
  const { href, outline, children } = props;

  const Renderer = {
    Button() {
      if (outline)
        return (
          <button
            className={`px-6 py-2 text-teal-800 hover:text-teal-50 active:text-teal-50 border border-solid border-teal-800 hover:bg-teal-600 active:bg-teal-800 outline-none rounded-md`}
          >
            {children}
          </button>
        );

      return (
        <button
          className={`px-6 py-2 text-teal-50 active:text-teal-800 border border-solid border-teal-800 hover:border-teal-700 bg-teal-800 hover:bg-teal-700 active:bg-teal-50 outline-none rounded-md`}
        >
          {children}
        </button>
      );
    },
    Main() {
      if (href) return <Link href={href}>{Renderer.Button()}</Link>;

      return Renderer.Button();
    },
  };

  return Renderer.Main();
};

export default ButtonComponent;
