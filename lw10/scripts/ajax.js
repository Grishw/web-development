

async function doFetch(url, formData) {
  
  headers = {  
    "method": 'POST',
    "headers": {
      'Content-Type': 'application/json' 
    },
    "body": JSON.stringify(formData)
 }
  
  console.log(headers);
  
  const response = await fetch(url, headers);
  
  if (response.ok) {
    const json = await response.json();
    //console.log(json);
    return json;
  }
}


function run() {
  const form = document.getElementById('registerForm');
  
  form.addEventListener('submit' , function(event) {
    event.preventDefault();
    
    let data = new FormData(this);
    data = Object.fromEntries(data);
    //console.log(data);
    respons = doFetch('http://localhost:8080/formChecker.php', data);
    console.log(respons);
  })

  
}


window.onload = () => run();