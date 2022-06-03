//Name the class Shape
class Shape {
   // Provide a constructor that expects an array of sides, with a default value of an empty array []
    constructor (sides = []) {
       // Create a class property sides that contains the constructor sides array using the this object
        this.sides = sides;
    }
// Implement a class method perimeter that returns the value of the lengths of all sides
//You may want to create this method initially using whatever version of a function you prefer
// and once complete refactor the function using the remaining requirements 
perimeter(){
     //This method must use an implicit arrow/lambda function
     //You must use the Array reduce() method to calculate the perimeter value
    return this.sides.length > 0 ? this.sides.reduce((a,b) => a + b): 0; 
    // To make this method a single line of code -->
 //you will also need to use the ternary operator ( ? : ) to make sure the array has at least one side 
    }
}


/* 
console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0
*/

 //Name the class Rectangle
class Rectangle extends Shape{
   // Provide a constructor that expects two parameters length and width with default values of 0
    constructor (length = 0, width = 0) {
         //Call the parent class Shape constructor using the super() method
       // and an array that consists of length, width, length, width, as a rectangle has four sides 
        super([length,width,length,width]);
       // Create class properties length and width from the constructor parameters using the this object
        this.length = length;
        this.width = width;
    }
    //Implement a method area that returns the rectangle area, remembering that the area of a rectangle is length multiplied by width
        area() {
            return this.length * this.width;
        }
    } 

/*
console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0
*/

//Name the class Triangle
class Triangle extends Shape {
    //Provide a constructor that expects three parameters sideA, sideB, and sideC with default values of 0
    constructor(sideA = 0, sideB = 0, sideC = 0) {
        //Call the parent class Shape constructor using the super() method, and an array that consists of sideA, sideB, and sideC
      //  Create class properties sideA, sideB, and sideC from the constructor parameters using the this object
        super([sideA,sideB,sideC]);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    area () {
        //Implement a method area that returns the triangle area, using Heron's formula
        // use Math.sqrt()
        const s = this.perimeter() / 2;
       return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }
}
/*
console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0
*/

// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

for (const sides of data) {
    let description = "";
    let shape = null;
    switch (sides.length) {
        case 2:
            description = "Rectangle";
            if (sides[0] === sides[1]) {
                description = "Square";
            }
            shape = new Rectangle(...sides);
            break;
        case 3:
            description = "Triangle";
            shape = new Triangle(...sides);
            break;
        default:
            break;
    }
    if (description.length > 0) {
        console.log(`${description} with sides ${sides.toString()}` +
        `has perimeter of ${shape/perimeter()}` + 
        `and area of ${shape.area()}`);
    }else{
        const plural = sides.length !==1 ?'s': '';
        console.log(`Shape with ${sides.length}side${plural} unsupported`);
    }
}