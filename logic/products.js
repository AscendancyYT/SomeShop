// let addToCart = document.querySelector(".addToCart");

document.querySelector(".addToCart").addEventListener("click", function (e) {
  e.preventDefault();

  axios.get("http://localhost:5000/Products").then((response)=>{
    let productInfo = response.data
  });
});
