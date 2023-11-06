//AXIOS GLOBALS
axios.defaults.headers.common['X-Auth-Token'] = 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";


// GET REQUEST
function getTodos() 
{
  // axios({
  //   method: 'get',
  //   url: 'https://jsonplaceholder.typicode.com/todos',
  //   params: {
  //     _limit: 5
  //   }
  // }).then(value=>
  //   {
  //     console.log(value);
  //     showOutput(value);
  //   })
  // .catch(error=>console.log(error));
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5',
  {
    timeout: 5000
  })
  .then(value =>{console.log(value);showOutput(value);})
  .catch(erroro =>console.log(erroro));  
}

// POST REQUEST
function addTodo() 
{
  // axios({
  //   method: 'post',
  //   url: 'https://jsonplaceholder.typicode.com/todos',
  //   data: {
  //       title: 'New Todo',
  //       completed: false
  //   }
  // }).then(value=>
  //   {
  //     console.log(value);
  //     showOutput(value);
  //   })
  // .catch(error=>console.log(error));
  axios.post('https://jsonplaceholder.typicode.com/todos',
  {
    title: 'New Todo', 
    completed: false
  })
  .then(value =>{console.log(value);showOutput(value);})
  .catch(erroro =>console.log(erroro));  
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios.patch('https://jsonplaceholder.typicode.com/todos/1',
  {
    title: 'Updated Todo', 
    completed: true
  })
  .then(value =>{console.log(value);showOutput(value);})
  .catch(erroro =>console.log(erroro));  
}

// DELETE REQUEST
function removeTodo() {
  axios.delete('https://jsonplaceholder.typicode.com/todos/1',
  )
  .then(value =>{console.log(value);showOutput(value);})
  .catch(erroro =>console.log(erroro)); 
}

// SIMULTANEOUS DATA
function getData() {
  axios.all([
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
  ])
  .then(axios.spread((v1,v2)=>showOutput(v2)))
  .catch(erroro=>console.log(erroro));
  }


// CUSTOM HEADERS
function customHeaders() {
  let config = 
  {
    headers:{
      Content_type:'application/json',
      Authorization:'sometoken'
    }
  };

  axios.post('https://jsonplaceholder.typicode.com/todos',
  {
    title: 'New Todo', 
    completed: false
  }, config)
  .then(value =>{console.log(value);showOutput(value);})
  .catch(erroro =>console.log(erroro)); 
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  let options = 
  {
    method:'post',
    url:'https://jsonplaceholder.typicode.com/todos',
    data:
    {
      title:'Hello World'
    },
    transformResponse:axios.defaults.transformResponse.concat(data=>
      {
        data.title = data.title.toUpperCase();
        return data;
      })
  }
  axios(options).then(value=>showOutput(value));
}

// ERROR HANDLING
function errorHandling() {
  axios.get('https://jsonplaceholder.typicode.com/todoss',
  {
    validateStatus: function(status)
    {
      return status<500;
    }
  })
  .then(value =>{console.log(value);showOutput(value);})
  .catch(erroro=>{
    if(erroro.response)
    {
      console.log(erroro.response.data);
      console.log(erroro.response.status);
      console.log(erroro.response.headers);

      if(erroro.response.status===404)
      {
        alert('Erroro:Page Not Found!');
      }
      else if(erroro.request)
      {
        console.log(erroro.request);
      }
      else
      {
        console.log(erroro.message);
      }
    }
  }); 
}

// CANCEL TOKEN
function cancelToken() {
  let source = axios.CancelToken.source();

  axios.get('https://jsonplaceholder.typicode.com/todos', 
  {
    cancelToken:source.token
  })
  .then(value =>{console.log(value);showOutput(value);})
  .catch(thrown=>
    {
      if(axios.isCancel(thrown))
      {
        console.log('Request Cancelled',thrown.message);
      }
    });

    if(true)
    {
      source.cancel('Request Cancelled!');
    }
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(config=>
{
   console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().toUTCString()}`);
   return config;
 },
 erroro=> {return new Promise.reject(erroro)});




// AXIOS INSTANCES
let axiosInstance = axios.create({
  baseURL:'https://jsonplaceholder.typicode.com/'
});

// axiosInstance.get('/photos')
// .then(value=>{console.log(value);showOutput(value)});

// Show output in browser
function showOutput(value) 
{
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${value.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(value.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(value.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(value.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
