
function Character(name, profession, gender, age, strength, hitpoints){
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;
    this.printStats = function(){
       console.log(this);

    }
    this.isAlive = function(){
        if (this.hitpoints > 0){
            console.log("this mutha fuka is alive!")
        }

        else 
        console.log("this mutha fuka is dead!")
    }
    this.attack = function(Character){
        Character.hitpoints-=this.strength;
        console.log(Character.hitpoints)
    }
    this.levelUp = function(){
        this.age+=1;
        this.strength+=5;
        this.hitpoints+=25;
        console.log(this);
    }
}
    

var ranger = new Character("Kenneth", "Gold Digger", "Male", 134, 75, 100)
var paladin = new Character("Steve", "FullStack Web Develper", "Unknown", 20, 88, 76)
var bard = new Character("Tunji", "Charmer", "Male", 177, 50, 125)
var druid = new Character("Abdullahi", "Messenger", "Male", 257, 88, 88)

ranger.printStats();
ranger.isAlive();
ranger.attack(paladin);
ranger.levelUp();