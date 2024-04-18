var lagos = {
    name: "Lagos",
    population: 100,
    temp: 10,
    currency: "Naira"
}

var abuja = {
    name: "Abuja",
    population: 80,
    temp: 5,
    currency: "Naira"
}

var kaduna = {
    name: "Kaduna",
    population: 80,
    temp: 8,
    currency: "Naira"
}

var ekiti = {
    name: "Ekiti",
    population: 80,
    temp: 8,
    currency: "Naira"
}

var benue = {
    name: "Benue",
    population: 70,
    temp: 8,
    currency: "Naira"
}

var oyo = {
    name: "Oyo",
    population: 800,
    temp: 8,
    currency: "Naira"
}

var ibadan = {
    name: "IBadan",
    population: 840,
    temp: 8,
    currency: "Naira"
}

var delta = {
    name: "Delta",
    population: 807,
    temp: 8,
    currency: "Naira"
}

var uyo = {
    name: "Uyo",
    population: 500,
    temp: 8,
    currency: "Naira"
}

let raw_array = [[null, lagos, uyo, ibadan], [kaduna, oyo, abuja, null], [delta, null, ekiti, benue]]

let total_population = 0;
for(const value of raw_array){
    for(const index in value){
        if(value[index] != null && value[index].temp > 7){
            total_population += value[index].population;
        }
    }
}


console.log(total_population);

let array = [1, 3, 5, 6, 7, 8, 9]
//array.forEach(element => {console.log(element * 2)})

array.map(element => console.log(element * 2))