import { ReactNode } from "react";

interface Props {
  title: string;
  description?: string;
  content: ReactNode;
}

function PageLayout({ title, description, content }: Props) {
  return (
    <div>
      <div className="flex flex-col w-full h-full">
        <div className="text-2xl font-bold">{title}</div>
        <div className="px-2 text-gray-500">
          {description ? description : ""}
        </div>
      </div>
      <div className="px-2 py-4">{content}</div>
    </div>
  );
}

export default PageLayout;
