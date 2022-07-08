import {getPeople} from './StarWarsService.js';

async function main() {
    const starWarsPeople = await getPeople(1);
    const totalHeight = starWarsPeople.reduce((total, person) => {
        total += Number(person.height);

        return total;
    }, 0);

        console.log('média de altura: ', totalHeight / starWarsPeople.length);
    
    //const starWarsPeopleFiltered = starWarsPeople
    //.filter(person => person.gender === 'male')
    //.map(person => { 
    //    return {name: person.name, gender: person.gender };
    //}); 

    //console.log(starWarsPeopleFiltered);
    
    //const starWarsPeopleNames = starWarsPeople
    //.map((person) => {
    //    const { name, height, gender } = person;
    //    return { name, height, gender };
    //});
    //console.log(starWarsPeopleNames);

    //for (let i=0; i<starWarsPeople.length; i++){
    //    console.log(starWarsPeople[i].name);
    //}
    
    //for(let proPerson in starWarsPeople[0]) {
    //    console.log(starWarsPeople[0] [proPerson]);
    //}

    //for(let person of starWarsPeople) {
    //    console.log(person.name);
    //}
}

main();