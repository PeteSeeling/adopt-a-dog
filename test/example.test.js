// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderDogCard, renderDogDetail } from '../render-utils.js';


const test = QUnit.test;

test('return list of dog names from the array', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<a href="./detail/?id=3"><div class="dog-card"><p>zeus</p><img src="./assets/newfoundland.jpeg"></div></a>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    let dog = {
        name: 'zeus',
        id:  3,
        breed: 'newfoundland'
    };

  

    const actual = renderDogCard(dog);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('return dog info ', (expect) => {
    
    const expected = '<div class="dog-detail"><p class="name">fred</p><img src="../assets/gsp.jpeg"><div class="age-and-breed"><p class="age">5 years old</p><p class="breed">gsp</p></div><p class="description"></p></div>';

    let dog = { 
        name: 'fred',
        age: 5,
        id: 6,
        breed: 'gsp'
 

    };
    console.log(dog);

    const actual = renderDogDetail(dog);

    expect.equal(actual.outerHTML, expected);


});