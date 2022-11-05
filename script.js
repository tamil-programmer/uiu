window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    if (evt.keyCode == "8") {
        // alert("You pressed 'enter'.");
  document.getElementById("searchdata").style.display="none";

    }
}





function ch() {
  


  document.getElementById("searchdata").style.display="none"
}



function ki(){
  document.getElementById("searchdata").style.display="block";
  
  // document.getElementById("sval").style.display="block";

  let val = document.getElementById("sval").value;


 let sval = val.toLowerCase();

    
  
  fetch("fav.json")
  .then((res) => res.json())
  .then((data) => {
  
  

  
    for (let u = 0; u < 100; u++) {
      let y = (data[u].nam).toLowerCase();
  if(y.indexOf(sval) > -1){
      
      
  
  
      // document.getElementById("ff").style.display="none";
  
      document.getElementById("searchdata").innerHTML =  `
  
  
  <div onclick="nie(${data[u].pid})" id="ff"  class="win-body-list">
  
  <div class="win-body-list-poster">
    <img src="${data[u].img}" alt="">
  </div>
  <div class="overlay">
  <br><br><br><br>
    <h5>${data[u].nam}</h5>
    <p>${data[u].catalog}</p>
    <p>${data[u].short}</p>
    <button id="watch-later-btn"> + Add to watch later</button>
  </div> 
  </div>
  

  
  `

    }
    
  }
  
  
  
  })








}


// fetch("fav.json")
// .then((res) => res.json())
// .then((data) => {



// // shuffle algorithms

//   function shuffle(a) {
//     var j, x, i;
//     for (i = a.length - 1; i > 0; i--) {
//   j = Math.floor(Math.random() * (i + 1));
//   x = a[i];
//   a[i] = a[j]; 
//   a[j] = x;
//     }
//     return a;
// }



// data = shuffle(data);



//   for (let u = 0; u < 100; u++) {


//     // console.log(data[u].movie-id);

//     document.getElementById("win-body-fav").innerHTML += `


// <div onclick="nie(${data[u].pid})" class="win-body-list">

// <div class="win-body-list-poster">
//   <img src="${data[u].img}" alt="">
// </div>
// <div class="overlay">
// <br><br><br><br>
//   <h5>${data[u].nam}</h5>
//   <p>${data[u].catalog}</p>
//   <p>${data[u].short}</p>
//   <button id="watch-later-btn"> + Add to watch later</button>
// </div> 
// </div>

// `
//   }




// })
  
// var ele = document.getElementsByClassName('win-body-list')
// console.log(ele)














// const movie_namee = "hj";

fetch("new.json")
  .then((res) => res.json())
  .then((data) => {



// shuffle algorithms

    function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j]; 
    a[j] = x;
      }
      return a;
  }
  


  data = shuffle(data);



    for (let u = 0; u < 100; u++) {


      // console.log(data[u].movie-id);

      document.getElementById("win-body").innerHTML += `


<div onclick="nie(${data[u].pid})" class="win-body-list">

<div class="win-body-list-poster">
    <img src="${data[u].img}" alt="">
</div>
<div class="overlay">
  <br><br><br><br>
    <h5>${data[u].nam}</h5>
    <p>${data[u].catalog}</p>
    <p>${data[u].short}</p>
    <button id="watch-later-btn"> + Add to watch later</button>
</div> 
</div>

`
    }




  })


function nie(id) {
  fetch("new.json")
  .then((res) => res.json())
  .then((data) => {

  var w = window.open("index.html");
  w.document.writeln(`

  <!doctype html>
  <html lang="en">
    <head>

      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      
      <title>${data[id-1].nam} - NewTube</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <link rel="stylesheet" href="res.css">

 <link rel="shortcut icon" href="logo.png" type="image/x-icon">

    <style>
     
     
    </style>
    </head>
    <body>
  
  
  
  
  <div id="ye">
  
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
    <a class="navbar-brand" href="#"> <img id="nav-logo" src="logo.png" alt=""> NewTube</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://127.0.0.1:5500/index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Trending</a>
          </li>
          
         
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn  btn-outline-dark my-2 my-sm-0  search" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  
  
  
  
  
  <br>
  <div id="movie-sec" ">
  
  <div id="movie-site-img-div">
  <img class="movie-data-img" src="${data[id-1].img}" alt="">
  </div>
  
  
  <div id="movie-site-detail" style="padding-left: 10px;">
  <h2>${data[id-1].nam}</h2>
  <p>${data[id-1].short}</p>
  <p>${data[id-1].dis}</p>
<span class="fa fa-star ${data[id-1].s1}"></span>
<span class="fa fa-star ${data[id-1].s2}"></span>
<span class="fa fa-star ${data[id-1].s3}"></span>
<span class="fa fa-star ${data[id-1].s4}"></span>
<span class="fa fa-star ${data[id-1].s5}"></span>
<br>
<button class="btn" id="green"><i class="fa fa-thumbs-up fa-lg" aria-hidden="true"></i></button>
<button class="btn" id="red"><i class="fa fa-thumbs-down fa-lg" aria-hidden="true"></i></button>


<p>Catagery - ${data[id-1].catalog}</p>

  <p>Type - ${data[id-1].type}</p>
  <p>Release - ${data[id-1].year}</p>
  <p>Available in -${data[id-1].lang}</p>

<br>
  <a href="${data[id-1].link}" ><button class="btn netflixbtn btn-netflix"> Play</button></a>
  <button class="btn netflixbtn btnplus"> + My List</button>
  
  </div>
  
  
  
  
  
  
  
  </div>
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  </div>
  
  
  
  
  
  
    </body>
  </html>
  <script src="script.js"></script>
  
  
  `)












    ;

  })
}





























// like

var btn1 = document.querySelector('#green');
var btn2 = document.querySelector('#red');

btn1.addEventListener('click', function() {
  
    if (btn2.classList.contains('red')) {
      btn2.classList.remove('red');
    } 
  this.classList.toggle('green');
  
});

btn2.addEventListener('click', function() {
  
    if (btn1.classList.contains('green')) {
      btn1.classList.remove('green');
    } 
  this.classList.toggle('red');
  
});





