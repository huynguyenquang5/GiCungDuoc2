class Apple {
    weight;
    constructor(weight) {
        this.weight = weight;
    }
    decrease(){
        this.weight--;
    }
    isEmpty(weight){
        return weight === 0;
    }
    getWeight(){
        return this.weight;
    }

}
 class Human{
     name
     weight
     gender
     constructor(name,weight,boolean) {
        this.name = name;
        this.gender = boolean;
        this.weight = weight;
     }
     getName(){
        return this.name;
     }
     setName(name){
        this.name = name;
     }
     setGender(boolean) {
         if (boolean === true) {
             this.gender = "Male"
         } else
             this.gender = "Female"
     }
     getWeight(){
         return this.weight;
     }
     setWeight(weight){
         this.weight = weight;
     }
     isMale() {
         if (this.gender === "Male" || this.gender === true) {
             document.write(this.name + " is male" + "<br>")
         } else
             document.write(this.name + " is female" + "<br>")
     }
     sayString(string) {
         document.write(this.name + ": " + string + "<br>")
     }

     eatApple(apple) {
         this.weight++;
         document.write("Weight: " + this.weight + "<br>");
         apple.decrease();
         document.write("Apple: " + apple.getWeight() + "<br>")
     }

     checkApple(apple) {
         if (apple.getWeight() > 0) {
             this.eatApple(apple)
         } else
             alert("Out of apple!")
     }
 }

let apple = new Apple(10);
let male = new Human("Adam", 55);
male.setGender(true);
male.isMale();
let female = new Human("Eva", 45);
female.setGender(false);
female.isMale();

let say = "Hello";
let say2 = "Hi";
male.sayString(say);
female.sayString(say2);

function HumanEatApple() {
    male.checkApple(apple, male.getWeight());
    female.checkApple(apple, female.getWeight());
    setTimeout(HumanEatApple, 2000);
}

HumanEatApple();
