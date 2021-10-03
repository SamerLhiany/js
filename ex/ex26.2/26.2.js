const storm = {
   superPower:`flying`,
   samer:printSuperPower
   }


   function printSuperPower() {
    console.log("my superpower is " + this.superPower);
   }

   storm.samer();