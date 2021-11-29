import NextLink from "next/link"; // eslint-disable-line no-restricted-imports
import React from "react";

export const Link = ({
  href,
  className,
  newTab = false,
  children,
}: {
  href?: string;
  className?: string;
  newTab?: boolean;
  children: React.ReactNode;
}) => {
  const hrefNormalized = href ?? (typeof children === "string" ? children : "");

  return (
    <NextLink href={hrefNormalized} passHref>
      <a
        className={className}
        {...(newTab && {
          rel: "noopener noreferrer",
          target: "_blank",
        })}
      >
        {children}
      </a>
    </NextLink>
  );
};
