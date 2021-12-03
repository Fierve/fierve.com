import clsx from "clsx";

type TextType = "title" | "paragraph" | "text";

const typeToTag: { [key in TextType]: keyof JSX.IntrinsicElements } = {
  title: "h1",
  paragraph: "p",
  text: "span",
};

export const Text = ({ type = "text", children }: { type?: TextType; children: React.ReactNode }) => {
  const Tag = typeToTag[type];

  return (
    <>
      <Tag className={clsx("text", `text-${type}`)}>{children}</Tag>

      <style jsx>{`
        .text {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell,
            "Helvetica Neue", sans-serif;
        }

        .text-title {
          font-size: 32px;
          font-weight: bold;
        }
        .text-paragraph {
          font-size: 16px;
        }
        .text-text {
          font-size: 16px;
        }
      `}</style>
    </>
  );
};
