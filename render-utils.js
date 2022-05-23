import { deleteBunny } from './fetch-utils.js';
import { displayFamilies } from './families/families.js';

export async function renderFamilies(family) {
    const div = document.createElement('div');
    div.classList.add('family');
    console.log(family);
    const h2 = document.createElement('h2');
    h2.textContent = family.name;
    
    const div2 = document.createElement('div');
    div2.classList.add('bunnies');
    
   // const div3 = document.createElement('div');
    //div3.classList.add('bunny');
    //div3.textContent = ;

    const ul = document.createElement('ul');
    for (let bunny of family.fuzzy_bunnies) {
        const li = document.createElement('li');
        li.textContent = `${bunny.name}`;
        li.addEventListener('click', async () => {
            await deleteBunny(bunny.id);
            await displayFamilies();
        });
        ul.append(li);
    }

    div.append(h2, div2, ul);

    return div;

}
