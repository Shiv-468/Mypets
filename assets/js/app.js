const dropdown = document.querySelector('.dropdown');
const input = document.querySelector('input');
const listOfOptions = document.querySelectorAll('.option');
const body = document.body;

const toggleDropdown = (event) => {
  event.stopPropagation();
  dropdown.classList.toggle('opened');
};

const selectOption = (event) => {
  input.value = event.currentTarget.textContent;
};

const closeDropdownFromOutside = () => {
  if (dropdown.classList.contains('opened')) {
    dropdown.classList.remove('opened');
  }
};

body.addEventListener('click', closeDropdownFromOutside);

listOfOptions.forEach((option) => {
  option.addEventListener('click', selectOption);
});
dropdown.addEventListener('click', toggleDropdown);



var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
