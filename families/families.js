import { checkAuth, deleteBunny, getFamilies, logout } from '../fetch-utils.js';

checkAuth();

const familiesEl = document.querySelector('.families-container');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

function displayFamilies() {
    const main = document.querySelector('main');
    main.textContent = ' ';
    const data = await getFamilies();
    for (let family of data) {
        const familiesEl = renderFamilies(family);
    }
    // fetch families from supabase
    const ul = document.createElement('ul');
    // clear out the familiesEl
    for (let family of loving_families.families) {
        const li = document.createElement('li');
        li.textContent = `${fuzzy_bunnies.name}`;
        li.addEventListener('click', async () => {
            await deleteBunny(fuzzy_bunnies.id);
            displayFamilies();
        });
        ul.append(li)

        // add the bunnies css class to the bunnies el, and family css class to the family el
        // put the family name in the name element
        // for each of this family's bunnies
        //    make an element with the css class 'bunny', and put the bunny's name in the text content
        //    add an event listener to the bunny el. On click, delete the bunny, then refetch and redisplay all families.
        // append this bunnyEl to the bunniesEl
    }

    // append the bunniesEl and nameEl to the familyEl
familiesEl.append(ul);
main.append(familiesEl);
    // append the familyEl to the familiesEl
}
displayFamilies();
