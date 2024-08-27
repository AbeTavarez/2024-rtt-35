fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
  console.log(response),
);

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: 'POST',
    body: JSON.parse({user: 'Jeff'})
  });
  console.log(response);

  const data = await response.json();
  console.log(data);
}

fetchUsers();