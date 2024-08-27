


async function fetchTodos() {
    const res = await axios('https://jsonplaceholder.typicode.com/users');
    console.log(res);

    // axios.interceptor.request.use(request => {
    //     console.log('Request sent.');
    //     return request;
    //   });
    
    const todos = res.data;
    console.log(todos);
}

fetchTodos();