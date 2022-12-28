export const Post = (serverUrl, body) => {
  return fetch(serverUrl, {
    method: "POST",
    body: JSON.stringify({ ...body }),
    headers: { "Content-Type": "application/json" },
  });
};
