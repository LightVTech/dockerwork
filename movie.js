const head = document.querySelector('.header');
const para = document.querySelector(".btn-doc");
const messa = document.querySelector('.messa-El')
const word = "The Real Docker Experience"


para.addEventListener('click', message);

function message(){
    const pag = document.createElement('div');
    const contn = document.querySelector('.container')
    const head = document.querySelector('.header')
    /*const messa = document.querySelector('.messa-El') */
    pag.className = 'alert'
    pag.id = 'page'
    pag.appendChild(document.createTextNode(word)); 

    contn.insertBefore(pag, head )
    console.log(pag)

/*     messa.textContent = word */
    
}
