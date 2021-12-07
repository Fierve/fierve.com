import clsx from "clsx";

import { colors } from "../../styles";

type TextType = "title" | "paragraph" | "text";

const typeToTag: { [key in TextType]: keyof JSX.IntrinsicElements } = {
  title: "h1",
  paragraph: "p",
  text: "span",
};

export const Text = ({
  type = "text",
  color = "black",
  children,
}: {
  type?: TextType;
  color?: "black" | "orange";
  children: React.ReactNode;
}) => {
  const Tag = typeToTag[type];

  return (
    <>
      <Tag className={clsx("text", `text-type-${type}`, `text-color-${color}`)}>{children}</Tag>

      <style jsx>{`
        .text {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell,
            "Helvetica Neue", sans-serif;
        }

        .text-type-title {
          font-size: 32px;
          font-weight: bold;
        }
        .text-type-paragraph {
          font-size: 16px;
        }
        .text-type-text {
          font-size: 16px;
        }

        .text-color-black {
          color: ${colors.black};
        }
        .text-color-orange {
          color: ${colors.orange};
        }
      `}</style>
    </>
  );
};
