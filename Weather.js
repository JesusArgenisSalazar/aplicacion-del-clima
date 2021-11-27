export class Weather{

    constructor(){

    	this.api = "c20822e5c5c02e363d01d12b82ea3bcb";
    	this.city = "London"
    	this.contry_code = "gb"
    }


    async getWeather(){
      

      const URI = `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.contry_code}&appid=${this.api}`
      
      let date = await fetch(URI);

      return date;
    }


    changeParameter(city, contry_code){

      this.city = city;
      this.contry_code = contry_code;

    }
   
}