function highOrderFunction(func){
    console.log("higher order function");
    func()
}

function lowOrderFunction(){
    console.log("lower order function");
}

highOrderFunction(()=>{
    console.log("lower order function");
})

function greetingFunction(greet){
    return function person(name){
        return `Hello, ${greet} ${name}`;
    }
}

console.log(greetingFunction("Good morning")("Victor"));