
// ! simple method

// let body = document.body;

// let section = document.createElement("section");
// section.style.display = "flex";


// let red = document.createElement("div");
// red.style.height = "100vh";
// red.style.width = "100px";
// red.style.border = "solid 2px black";
// red.style.flexGrow = 1;
// section.append(red);

// red.addEventListener("mouseover",()=>{
//     red.style.backgroundColor = "red";
// })

// red.addEventListener("mouseout",()=>{
//     red.style.backgroundColor = "white";
// })

// let orange = document.createElement("div");
// orange.style.height = "100vh";
// orange.style.width = "100px";
// orange.style.flexGrow = 1;
// orange.style.border = "solid 2px black";
// section.append(orange);

// orange.addEventListener("mouseover",()=>{
//     orange.style.backgroundColor = "orange";
// })

// orange.addEventListener("mouseout",()=>{
//     orange.style.backgroundColor = "white";
// })

// let yellow = document.createElement("div");
// yellow.style.height = "100vh";
// yellow.style.width = "100px";
// yellow.style.border = "solid 2px black";
// yellow.style.flexGrow = 1;
// section.append(yellow);

// yellow.addEventListener("mouseover",()=>{
//     yellow.style.backgroundColor = "yellow";
// })

// yellow.addEventListener("mouseout",()=>{
//     yellow.style.backgroundColor = "white";
// })

// let green = document.createElement("div");
// green.style.height = "100vh";
// green.style.width = "100px";
// green.style.border = "solid 2px black";
// green.style.flexGrow = 1;
// section.append(green);

// green.addEventListener("mouseover",()=>{
//     green.style.backgroundColor = "green";
// })

// green.addEventListener("mouseout",()=>{
//     green.style.backgroundColor = "white";
// })

// let blue = document.createElement("div");
// blue.style.height = "100vh";
// blue.style.width = "100px";
// blue.style.border = "solid 2px black";
// blue.style.flexGrow = 1;
// section.append(blue);

// blue.addEventListener("mouseover",()=>{
//     blue.style.backgroundColor = "blue";
// })

// blue.addEventListener("mouseout",()=>{
//     blue.style.backgroundColor = "white";
// })

// let indigo = document.createElement("div");
// indigo.style.height = "100vh";
// indigo.style.width = "100px";
// indigo.style.border = "solid 2px black";
// indigo.style.flexGrow = 1;
// section.append(indigo);

// indigo.addEventListener("mouseover",()=>{
//     indigo.style.backgroundColor = "indigo";
// })

// indigo.addEventListener("mouseout",()=>{
//     indigo.style.backgroundColor = "white";
// })


// let violet = document.createElement("div");
// violet.style.height = "100vh";
// violet.style.width = "100px";
// violet.style.border = "solid 2px black";
// violet.style.flexGrow = 1;
// section.append(violet);

// violet.addEventListener("mouseover",()=>{
//     violet.style.backgroundColor = "violet";
// })

// violet.addEventListener("mouseout",()=>{
//     violet.style.backgroundColor = "white";
// })

// body.append(section);


// ! using loops

let body = document.body;

let section = document.createElement("section");
section.style.display = "flex";
section.style.height = "100vh"
body.append(section);

data = ["red","orange","yellow","green","blue","indigo","violet"]

for (let color of data)
    {
     console.log(color)

     let  div = document.createElement("div")
     div.style.height = "100%";
     div.style.flex = "1";
     section.append(div);

    div.addEventListener("mouseover",()=>{
        div.style.backgroundColor = color;
    })
    
    div.addEventListener("mouseout",()=>{
        div.style.backgroundColor = "white";
    })


};
