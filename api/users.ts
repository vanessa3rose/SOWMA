const userInfo = {
  "Gabe": "ChatGPT didn't write this for me :)",
  "Ben": "[Insert Stuff About Ben Here]"
};

/*
  Simple function that returns a fun fact for a requested user

  Example frontend call:
  fetch("http://localhost:3000/api/users?" + new URLSearchParams({
      name: "Gabe",
  })).then(res => res.text()).then(res => console.log(res))
*/
export function GET(request: Request) {
  const searchParams = new URLSearchParams(new URL(request.url).searchParams);

  if (!request || !searchParams || !searchParams.has("name")) {
    return new Response("Bad Request", {
      status: 400
    })
  }

  const name = searchParams.get("name");
  if (name && name in userInfo) {
    return new Response(userInfo[name as keyof typeof userInfo]);
  }
  return new Response("User entry not found!");
}

