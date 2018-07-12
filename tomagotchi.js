function DigitalpPal(){
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;

    this.feed=function(){
        if (this.hungry===true){
            console.log("That was yummy");
        }
        else {
            console.log("No Thanks! I'm full!");
        }
    }
    this.sleep = function(){
        if (this.sleepy===true){
            console.log("ZZZZzzzzZZZz");
        }
        else {
            console.log("No Way! I'm not tired.");
        }
    this.increaseAge = function(){
            if (this.sleepy===true){
                age += 1;
            }
        }
    }
    this.play = function(){
        if (this.bored ===true){
            console.log("Yay! Let's play!");
        }
        else {
            console.log("Not right now. Later?")
        }
    }


}

var dog = new DigitalpPal()
dog.outside = false;
dog.bark = "woof! woof!";
dog.goOutside = function(){
    if (goOutside===false){
        console.log("yayy! I love the outdoors!")
    }
    else {
        console.log("we're already outside though...")
    }
}
dog.goInside = function() {

}