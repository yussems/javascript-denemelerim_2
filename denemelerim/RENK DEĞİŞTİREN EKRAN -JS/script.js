
                // PROJE BİR HER TIK RENK DEĞİŞTİREN EKRAN


const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector("body");


const colors = ["yellow", "red", "green", "#3b5998"];

colorBtn.addEventListener("click",changeColor);

function changeColor() {
  //  bodyBcg.style.backgroundColor = colors[2] ; 
  //burada yalnızca bir arrayin rengini kullanarak çözüm üretiyor
  // ama bizim istediğimiz her tık ta renk değişimi
  let random = Math.floor(Math.random() * colors.length );
  bodyBcg.style.backgroundColor = colors[random] ;
  colorBtn.style.backgroundColor = colors[random] ;

}


