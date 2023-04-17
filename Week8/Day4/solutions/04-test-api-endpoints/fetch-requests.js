/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/

// Your code here

fetch('/posts')
  .then(res => res.json())
  .then(resBody => console.log(resBody));

(async function () {
  const res = await fetch('/posts');
  console.log(res.status);
  console.log(res.headers.get('content-type'));
  const deserializedBody = await res.json();
  console.log(deserializedBody);
})();

fetch('/posts')
  .then(async res => {
    console.log(res.status);
    console.log(res.headers.get('content-type'));
    const deserializedBody = await res.json();
    console.log(deserializedBody);

  });

const postsFetch = async () => {
  const res = await fetch('/posts');
  const jsonBody = await res.json();
  console.log(jsonBody);
}
/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.
*/

// Your code here
fetch('/posts', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    message: "New Post!"
  })
})
  .then(res => res.json())
  .then(resBody => console.log(resBody));


(async function () {
  const res = await fetch('/posts', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "Hola!"
    })
  });

  console.log(res.status);
  console.log(res.headers.get('content-type'));
  const serializedBody = await res.json();

  console.log(JSON.parse(serializedBody));

})();
