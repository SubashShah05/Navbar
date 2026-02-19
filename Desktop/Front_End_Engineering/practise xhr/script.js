const xhr = new XMLHttpRequest();
        
xhr.open('get','https://feecq.github.io/api/movies.json',true);
xhr.responseType ="blob";
xhr.send();
console.log(xhr.response)

 console.log(xhr)

 xhr.onload=function(){
    console.log(JSON.parse(xhr.response))
    const url = URL.createObjectURL(xhr.response);
     console.log(xhr.response)
  const img  = document.createElement('img');
    img.src=;
   img.style.width="400px";
    img.style.height="400px";
    document.body.prepend(img);
}