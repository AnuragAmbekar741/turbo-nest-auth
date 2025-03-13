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
    <div className="p-8 rounded-lg w-96 flex flex-col justify-center items-center gap-8 shadow-sm border border-slate-50">
      <div className="flex w-full items-center justify-start">
        <h3 className="text-3xl font-light">{title}</h3>
      </div>
      {children}
      <Link className="text-sm font-normal text-gray-400" href={linkHref}>
        {linkText}
      </Link>
    </div>
  );
};
