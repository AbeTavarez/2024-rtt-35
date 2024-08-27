//
const url1 = "https://thetestrequest.com/articles.xml";
const url2 = "https://jsonplaceholder.typicode.com/users";

const request = new XMLHttpRequest();

// ==================== Getting data from server ====
request.open("GET", url1, true);

request.send();

// ======================== Sending data to server ===
request.open("POST", "https://jsonplaceholder.typicode.com/todos");

// tells the server what kind of data we're sending
request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

// reads the value from the input
let inputVal = document.getElementById("myInput").value;

// encoding the input text to a URI format 
let encodedVal = encodeURIComponent(inputVal);
console.log(encodedVal);

request.send(`data=${encodedVal}`);

// Check thr response we get from the server
request.onreadystatechange = function () {
  if (request.readyState === XMLHttpRequest.DONE) {
    if (request.status === 200 || request.status === 201) {
      console.log(request.responseXML);
      console.log(JSON.parse(request.responseText));
      

      const user = {name: 'Jeff Bezos'}
      console.log(JSON.stringify(user));
      
    }
  }
};
