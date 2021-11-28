

let city = "London";
let contry_code = "gb";
let api =  "c20822e5c5c02e363d01d12b82ea3bcb";

let  title = document.querySelector(".content-box__title");
let  description = document.querySelector(".content-box__description");
let  temp = document.querySelector(".content-box__temp");
let  wind = document.querySelector(".content-box__wind");
let  humidity = document.querySelector(".content-box__humedad");

let cityUser = document.querySelector(".content-box-form__city");
let contry_codeUser = document.querySelector(".content-box-form__contry-code");
let btn_send = document.querySelector(".content-box-form__btn");



btn_send.addEventListener("click", function(e){


      e.preventDefault();

      city = cityUser.value;
      contry_code = contry_codeUser.value;
      

      muestraDataDom();

});


async function fetchData(){
     
     const URI = `https://api.openweathermap.org/data/2.5/weather?q=${city},${contry_code}&appid=${api}&units=metric`;
      
      try{

      let peticion = await fetch(URI);
      let data  = peticion.json();
  
      console.log(data);
      return data;

      }catch(e){
         
          console.log(data);
        console.log(e + " error en peticion a API");
      }


     
}



async function muestraDataDom(){

   let data = await fetchData();

   if(data.cod == "404"){
     
     title.textContent = data.message;
        
   }else{
    
    title.textContent = data.name;
    description.textContent = data.weather[0].description;
    temp.textContent = `${data.main.temp} °C`;
    wind.textContent = `Wind : ${data.wind.speed}m/s`;
    humidity.textContent = `Humidity : ${data.main.humidity}%`;

   }

   

}


muestraDataDom();