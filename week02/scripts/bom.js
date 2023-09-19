const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value != '') {
        const listElement = document.createElement('li');
        const deleteButton = document.createElement('button');

        listElement.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${listElement.textContent}`)
        listElement.append(deleteButton);
        list.append(listElement);

        deleteButton.addEventListener('click', () => {
            list.removeChild(listElement);
            input.focus()
        })
        input.value = '';
        input.focus()
    } else {
        window.alert('Please enter a book and a chapter!');
        input.focus();
    }
} )