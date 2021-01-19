import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
  // grabs companies in database
  // Set returns unique values
  let companies = ['all', ...new Set(store.map((product) => product.company))];
  const companiesDOM = getElement('.companies');

  // displays all unique companies
  companiesDOM.innerHTML = companies
    .map((company) => {
      return ` <button class="company-btn">${company}</button>`;
    })
    .join('');


  // grabs companies clicked or chooses all to display
  companiesDOM.addEventListener('click', function (e) {
    const element = e.target;
    if (element.classList.contains('company-btn')) {
      let newStore = [];
      if (element.textContent === 'all') {
        newStore = [...store];
      } else {
        newStore = store.filter(
          (product) => product.company === e.target.textContent
        );
      }
      display(newStore, getElement('.products-container'));
    }
  });
};

export default setupCompanies;
