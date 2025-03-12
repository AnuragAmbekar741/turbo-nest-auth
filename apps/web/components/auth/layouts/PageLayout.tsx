import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  linkText: string;
  linkHref: string;
}

export const PageLayout: React.FC<Props> = ({
  children,
  title,
  linkHref,
  linkText,
}) => {
  return (
    <div className="p-8 rounded-lg w-96 flex flex-col justify-center items-center gap-8">
      <h3 className="text-2xl font-medium">{title}</h3>
      {children}
      <Link className="text-sm font-normal text-gray-600" href={linkHref}>
        {linkText}
      </Link>
    </div>
  );
};
