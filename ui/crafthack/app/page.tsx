export default async function Home() {
  const res = await (await fetch("http://127.0.0.1:5000/test")).json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
