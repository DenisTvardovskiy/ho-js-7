let CountryList = [

    {
    country: "Україна",
    capital:"Київ",
    count: 40000000
    },
    
    {
    country: "Грузія",
    capital:"Тбілісі",
    count: 10000000
    },
    
    {
    country: "Великобританія",
    capital:"Лондон",
    count: 100000000
    },
    
    {
    country: "США",
    capital:"Вашингтон",
    count: 300000000
    
    }];


console.log(CountryList)

let task1 = document.getElementById('task1')

for(let i=0; i<CountryList.length;i++){
    let ol = document.createElement("ol")
    CountryList[i].count = (CountryList[i].count/1000000)+"млн"
    console.log(CountryList[i])
    for(let key in CountryList[i]){
        let listElement = document.createElement("li")
        listElement.appendChild(document.createTextNode(CountryList[i][key]));
        listElement.setAttribute("id", CountryList[i][key])
        ol.appendChild(listElement)
    }
    task1.appendChild(ol)
}

let ukr = document.getElementById("Україна");
ukr.style.color="blue";

let cap = document.getElementById("Київ");
cap.style.color="yellow";


let colorPicker = document.getElementById("colorp")
colorPicker.addEventListener("change", _=>{
    document.getElementById("ch").style.color = colorPicker.value
})