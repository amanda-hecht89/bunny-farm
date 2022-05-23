import { checkAuth, deleteBunny, getFamilies, logout } from '../fetch-utils.js';
import { renderFamilies } from '../render-utils.js';

checkAuth();

const familiesEl = document.querySelector('.families-container');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});
async function displayFamilies() {
    const main = document.querySelector('main');
    main.textContent = ' ';
    const data = await getFamilies();

    for (let family of data) {
        const famEl = renderFamilies(family);


        const ul = document.createElement('ul');
        for (let bunny of family.fuzzy_bunnies) {
            const li = document.createElement('li');
            li.textContent = `${bunny.name}`;
            li.addEventListener('click', async () => {
                famEl;
                await deleteBunny(bunny.id);
                await displayFamilies();
            });
            ul.append(li);
        }
    // fetch families from supabase
    // clear out the familiesEl

        familiesEl.append(ul);
        main.append(familiesEl);
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
