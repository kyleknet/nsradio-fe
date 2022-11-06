"use client";

type Props = {
  where: string;
};

export default function Button({ where }: Props) {
  const apiTest = async () => {
    const data = await fetch(`/api/${where}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Cache-control": "no-cache",
      },
    });
    const res = await data.json();
    console.log(res);
  };

  return <button onClick={apiTest}>click me {where}</button>;
}
