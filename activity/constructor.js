function Programmer(name, position, age, language){
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;

    this.print = function(){
        console.log(this);
    }
};

var kid = new Programmer ("Kenneth", "Loser", 90, "Losertalk");

kid.print();
