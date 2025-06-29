//^ Functions declaration:
//& JavaScript:
// function add(x,y){return x+y;}
// const add = (a,b)=>{return a+b;};

//& TypeScript:
function add(x: number, y: number): number {
    return x + y;
  }
  
  const addArrow = (a: number, b: number): number => {
    return a + b;
  };

  //& JavaScript:
function greet(name = "Guest") {
    console.log("Hello, " + name);
  }
  
  //& TypeScript:
  function greets(name: string = "Guest"): void {
    console.log("Hello, " + name);
  }
  