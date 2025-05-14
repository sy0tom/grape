import { ReactNode } from "react";
interface Props {
  title: string;
  content: ReactNode;
}
function BoardLayout({ title, content }: Props) {
  return (
    <div className="p-2">
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
}

export default BoardLayout;
