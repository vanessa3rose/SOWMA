/*
  Simple function that returns information for given data.

  Example frontend call:
  fetch(`http://localhost:3000/api/users?name=${encodeURIComponent(name)})
    .then(res => res.json())
    .then(json => console.log(json))
*/
export function GET(request: Request) {
  const searchParams = new URLSearchParams(new URL(request.url).searchParams);
  const name = searchParams.get("name");

  if (!name) {
    return Response.json({ error: "No name provided" }, { status: 400 });
  }

  return Response.json({ name, length: name.length });
}
