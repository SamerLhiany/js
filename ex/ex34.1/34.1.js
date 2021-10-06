let request = async () => {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
        let s = await (await (fetch(`https://swapi.dev/api/people/${i}/`))).json();
        let h = await (await (fetch(s.homeworld))).json();
        let person = {
            hair: s.hair_color,
            height: s.height,
            name: s.name,
            planet: {

                name: h.name,
                population: h.population,
            }

        }
        arr.push(person);
    }
    return(arr);
}


let person = document.querySelector(`.person`)
const creatTable = async () => {

    let data = await request();
    
    let output = "";
    output += `<table>
    <thead>
      <tr>
        <th colspan="5">Star Wars</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>Name</td>
        <td>Hair</td>
        <td>Height</td>
        <td>Planet Name</td>
        <td>Planet Population</td>
      </tr>`

    for (let i = 0; i < data.length; i++) {

        output += `<tr>
       <td>${data[i].name}</td>
     <td>${data[i].height}</td>
     <td>${data[i].hair}</td>
     <td>${data[i].planet.name}</td>
     <td>${data[i].planet.population}</td>
     </tr>`
    }

    output += `</tbody>
    </table>`

    person.innerHTML = output;
}
creatTable();




