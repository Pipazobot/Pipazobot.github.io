const cartas = [
    {
        nombre: 'img1',
        img: 'img1_p.jpg'
    },
    {
        nombre: 'img2',
        img: 'img2_p.jpg'
    },
    {
        nombre: 'img3',
        img: 'img3_p.jpg'
    },
    {
        nombre: 'img4',
        img: 'img4_p.jpg'
    },
    {
        nombre: 'img5',
        img: 'img5_p.jpg'
    },
        {
        nombre: 'img1',
        img: 'img1_p.jpg'
    },
    {
        nombre: 'img2',
        img: 'img2_p.jpg'
    },
    {
        nombre: 'img3',
        img: 'img3_p.jpg'
    },
    {
        nombre: 'img4',
        img: 'img4_p.jpg'
    },
    {
        nombre: 'img5',
        img: 'img5_p.jpg'
    }
]

cartas.sort( () => 0.5 - Math.random() )

const cuad = document.querySelector('#cuadricula')
const mostrar_puntaje = document.querySelector('#resultado')
let cartas_elegidas = []
let cartas_elegidas_ID = []
const aciertos = []

function crearTabla () {
    for (let i =0; i < 10; i++){
         const carta = document.createElement('img')
         carta.setAttribute('src','img6_p.jpg')
         carta.setAttribute('data-id',i)
         carta.addEventListener('click',voltear)         
         cuad.appendChild(carta)
         
    }
}
crearTabla()

function son_iguales(){
    const baraja = document.querySelectorAll('img')
    const opcion_uno_id = cartas_elegidas_ID[0]
    const opcion_dos_id = cartas_elegidas_ID[1]
    console.log(baraja)
    console.log('revisar si son iguales')
    if (opcion_uno_id == opcion_dos_id){
       alert('Elegiste la misma carta dos veces')
       baraja[ opcion_uno_id ].setAttribute('src','img6_p.jpg')
       baraja[ opcion_dos_id ].setAttribute('src','img6_p.jpg')
    }
    if (cartas_elegidas[0] == cartas_elegidas[1]){
        alert('Encontraste un par!')
        baraja[ opcion_uno_id ].setAttribute('src','img7_p.jpg')
        baraja[ opcion_dos_id ].setAttribute('src','img7_p.jpg')
        baraja[ opcion_uno_id ].removeEventListener('click',voltear)
        baraja[ opcion_dos_id ].removeEventListener('click',voltear)
        aciertos.push( cartas_elegidas )
    } else{
        baraja[ opcion_uno_id ].setAttribute('src','img6_p.jpg')
        baraja[ opcion_dos_id ].setAttribute('src','img6_p.jpg')
    }
    mostrar_puntaje.textContent = aciertos.length
    cartas_elegidas = []
    cartas_elegidas_ID = []
    
    if(aciertos.length == cartas.length/2){
        mostrar_puntaje.textContent = 'Felicidades ganaste!!'
    }
    
}

function voltear(){
    const cartaId = this.getAttribute('data-id')
    cartas_elegidas.push( cartas[cartaId].nombre )
    cartas_elegidas_ID.push(cartaId)
    console.log(cartas_elegidas)
    console.log(cartas_elegidas_ID)
    this.setAttribute('src',cartas[cartaId].img)
    if (cartas_elegidas.length === 2){
        setTimeout( son_iguales, 500)
    }

}

