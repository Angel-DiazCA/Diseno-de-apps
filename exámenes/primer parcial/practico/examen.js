console.log("¿Qué información desea consultar? \n1) Lista de todos los pendientes(Solo ID's) \n"
+ "2) Lista de todos los pendientes (ID's y Titles) \n3) Lista de todos los pendientes sin resolver(ID y Title) \n"
+"4) Lista de todos los pendientes resueltos(ID y Title) \n5) Lista de todos los pendientes(ID y userID) \n"
+"6) Lista de todos los pendientes resueltos(ID y userID) \n7) Lista de todos los pendientes sin resolver(ID y userID)")

const axios = require("axios");

var value;
switch (value) {
    case 1://Todos los pendientes (Solo ID's)
        axios.get("https://jsonplaceholder.typicode.com/todos").then(({data}) => {
            data.forEach(element => {
                console.log("ID: " + element.id),
                console.log("")
            });
        })
        break;
    case 2://Todos los pendientes (ID's y Titles)
        axios.get("https://jsonplaceholder.typicode.com/todos").then(({data}) => {
            data.forEach(element => {
                console.log(element.id),
                console.log(element.title),
                console.log("")
            });
        })
        break;
    case 3://Pendientes sin resolver (ID y Title)
        axios.get("https://jsonplaceholder.typicode.com/todos").then(({ data }) => {
            data.forEach(element => {
                if (!element.completed) {
                    console.log("Pendiente sin resolver"),
                    console.log(`ID: ` + element.id + `, `+ element.completed +`, `+ `Title:`+ element.title),
                    console.log("");
                }
            });
        });
        break;
    case 4://Pendientes resueltos (ID y Title)
    axios.get("https://jsonplaceholder.typicode.com/todos").then(({ data }) => {
        data.forEach(element => {
            if (element.completed) {
                console.log("Pendiente resuelto"),
                console.log(`ID: ${element.id}, ${element.completed}, Title: ${element.title}`),
                console.log("");
            }
        });
    });
        break;
    case 5://Todos los pendientes (ID's y userID)
    axios.get("https://jsonplaceholder.typicode.com/todos").then(({data}) => {
        data.forEach(element => {
            console.log("ID: "+element.id),
            console.log("User ID: "+element.userId),
            console.log("")
        });
    })
        break;
    case 6://Pendientes resuelto (ID y userID)
    axios.get("https://jsonplaceholder.typicode.com/todos").then(({ data }) => {
        data.forEach(element => {
            if (element.completed) {
                console.log("Pendiente resuelto"),
                console.log(`ID: ${element.id}, ${element.completed}, userId: ${element.userId}`),
                console.log("");
            }
        });
    });
        break;
    case 7://Pendientes sin resolver (ID y userID)
    axios.get("https://jsonplaceholder.typicode.com/todos").then(({ data }) => {
        data.forEach(element => {
            if (!element.completed) {
                console.log("Pendiente sin resolver"),
                console.log(`ID: ${element.id}, ${element.completed}, userId: ${element.userId}`),
                console.log("");
            }
        });
    });
        break;
    default:
        console.log("no option");
}
