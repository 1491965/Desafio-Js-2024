const $input = document.querySelector('.input-number')
const $form = document.querySelector('.form')

const $output = document.querySelector('.output')



$form.addEventListener('submit', function(event){
    event.preventDefault()

    $output.textContent = ' '

    const number = Number($input.value)

    for ( let index = 0; index <= number; index++){
        $output.textContent = $output.textContent + index + ' '
    }
})