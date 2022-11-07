import { ReactNode } from "react";
import "../styles/globals.css";

type Props = {
  children: ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <html>
      <head>
        <title>HELLO</title>
      </head>
      <body className="bg-purple-500">{children}</body>
    </html>
  );
}
