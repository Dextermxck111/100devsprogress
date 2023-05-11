const contestants = document.querySelectorAll('.contestant')

Array.from(contestants).forEach(element => element.addEventListener('click', strongestHokage))

function strongestHokage(click) {
    if (click.target.classList.contains('strongestHokage')) {
        document.querySelector('#naruto').classList.toggle('hidden')
    }

    else {
        alert('Wrong Choice My Boy!')
    }
}