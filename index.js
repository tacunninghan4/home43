var myCat = {
    maxspeed: 70;
    driver: "net ninja",
    drive: function(speed, time){
   console.log(speed, time)

  },
  LogDriver, function(){
console.log("driver name is" + this. driver);

  }

},

var Car = function(maxspeed, driver){
    this.maxSpeed = maxSpeed;
    this.driver= driver;
    this.drive= function(speed, time){
        console.log(speed + time);
    };
  this. logDriver = function(){
      console.log("driver name is" + this. driver);
  }

}

var myCar = new Car(70, "Todd Man" ); 












