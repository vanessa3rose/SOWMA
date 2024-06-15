import { assert, test } from 'vitest'
import { GET } from "api/users";

async function getUserTest(name) {
  const request = new Request("http://localhost:5173/users?name=" + encodeURIComponent(name));
  const response = GET(request);
  assert.isTrue(response.ok);
  const returnedJSON = await response.json();
  assert.deepEqual(returnedJSON, {name, length: name.length}, 'matches original');
}

test('GET User Normal Names', async () => {
  getUserTest("Gabe");
  getUserTest("Ben");
});

test('GET User Special Characters', async () => {
  getUserTest("!@#$%^&*()`~-=_+[];',./{}:\"'<>?")
});

test("GET User Long Name", async () => {
  getUserTest('x'.repeat(1024*1024));
})

test('GET User Missing Name Param', async () => {
  const request = new Request("http://localhost:5173/users?name=");
  const response = await GET(request);
  assert.strictEqual(400, response.status);
  const returnedJSON = await response.json();
  assert.deepEqual(returnedJSON, {error: "No name provided"}, 'matches original');
});
