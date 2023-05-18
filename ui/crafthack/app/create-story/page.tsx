async function getData() {
  const res = await fetch("https://www.aiscamdetective.com/api/check", {
    method: "post",
    body: JSON.stringify({
      formData: { conversation: "Hello where are you?" },
    }),
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.text();
}

export default async function Page() {
  const data = await getData();

  return <div>{data}</div>;
}
