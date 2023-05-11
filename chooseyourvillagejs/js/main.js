document.querySelector('#check').addEventListener('click',check);

function check() {
    let nameOfCharacter = document.querySelector('#nameOfCharacter').value
    const nameLowerCased = nameOfCharacter.toLowerCase()
    if (nameLowerCased === 'naruto uzumaki' ||  nameLowerCased === 'sausuke schiha') {
        alert('The Village Hidden In the Leaves')
    }

    else if ( nameLowerCased === 'gaara' ||  nameLowerCased === 'sasori') {
        alert('The Hidden Sand Village')
    }
    else {
        alert('Konoha is just better!')
    }
}