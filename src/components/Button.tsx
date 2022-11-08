type Props = {
  where: string;
};

export default function Button({ where }: Props) {
  async function handler() {
    const res = await fetch(`/api/${where}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Cache-control": "no-cache",
      },
    });
    const data = await res.json();
    console.log(data);
  }

  return (
    <button onClick={handler} type="button" className="block">
      click for {where}
    </button>
  );
}
