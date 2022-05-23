import { checkAuth, getFamilies, logout } from '../fetch-utils.js';
import { renderFamilies } from '../render-utils.js';

checkAuth();

const familiesEl = document.querySelector('.families-container');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});
export async function displayFamilies() {
    familiesEl.textContent = ' ';
    const data = await getFamilies();

    for (let family of data) {
        const famEl = await renderFamilies(family);

    // fetch families from supabase
    // clear out the familiesEl

        familiesEl.append(famEl);
        // add the bunnies css class to the bunnies el, and family css class to the family el
        // put the family name in the name element
        // for each of this family's bunnies
        //    make an element with the css class 'bunny', and put the bunny's name in the text content
        //    add an event listener to the bunny el. On click, delete the bunny, then refetch and redisplay all families.
        // append this bunnyEl to the bunniesEl
    }

    // append the bunniesEl and nameEl to the familyEl
    
    // append the familyEl to the familiesEl
}
displayFamilies();
