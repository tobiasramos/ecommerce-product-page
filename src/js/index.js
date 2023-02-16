const slides = document.querySelectorAll(".slide")
const carousel = document.getElementsByClassName(".carousel")

let current_slide = 0


function hideSlide() {
    slides.forEach(item => item.classList.remove('on'))
}

function showSlide() {
    slides[current_slide].classList.add('on')
}

function nextSlide() {
    hideSlide()
    if (current_slide == slides.length - 1) {
        current_slide = 0
    } else {
        current_slide++
    }
    showSlide()
}

function backSlide() {
    hideSlide()
    if (current_slide == 0) {
        current_slide = slides.length - 1
    } else {
        current_slide--
    }
    showSlide()
}

$('.arrowBack').click(function () {
    backSlide()
})

$('.arrowNext').click(function () {
    nextSlide()
})



function product1() {
    document.getElementById('imgShowcase').src = 'src/images/image-product-1.jpg'
}

function product2() {
    document.getElementById('imgShowcase').src = 'src/images/image-product-2.jpg'
}

function product3() {
    document.getElementById('imgShowcase').src = 'src/images/image-product-3.jpg'
}

function product4() {
    document.getElementById('imgShowcase').src = 'src/images/image-product-4.jpg'
}


let qtd = document.getElementById('qtd')
let a = 0
$('.minus').click(function () {
    if (a > 0) {
        a--
        qtd.innerHTML = a
    }
})
$('.plus').click(function () {
    a++
    qtd.innerHTML = a
})


let root = document.getElementById('qtdPurchase')
$('.buttonAdd').click(function () {
    if (a > 0) {
        qtdPurchase.innerHTML += `<p class="num aparecer">${a}</p>`
    }
})

let summaryPurchase = document.getElementById('summaryPurchase')
$('.summary').click(function () {
    let calculationPrice = 125 * a
    if (a > 0) {
        summaryPurchase.innerHTML = ` 
                        <div class='cardCompra aparecer'>
                            <p class='title'>Carrinho</p>
                            <div class='summaryBuy'>
                                <img src="src/images/image-product-1-thumbnail.jpg" alt='Imagem um' />
                                <div>
                                    <span>Tênis de edição limitada de outono</span><br>
                                    <span>R$ 125,00 X ${a} <strong>R$${calculationPrice},00</strong></span>
                                </div>
                            </div>
                            <button>Confira</button>
                        </div>`
    } else {
        summaryPurchase.innerHTML = `
                        <div class='cardCompra aparecer'>
                            <p class='title'>Carrinho</p>
                            <p class='description'>Seu carrinho está vazio</p>
                         </div>`
    }
})
