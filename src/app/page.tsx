import Button from "../components/Button";

export default function HomePage() {
  return (
    <main>
      <h1>Welcome</h1>
      <Button where="hello" />
      <Button where="prisma" />
    </main>
  );
}
