window.onload = traerCategorias();

let arrayPedido=[]

async function traerCategorias() {
  let categoria="MILANESAS";
    let divCategoria=document.getElementById("categorias");
   divCategoria.innerHTML+=`<button class="btn btn-primary" onclick=traerPrecios("${categoria}")>${categoria}</button>`;
  

      return ["MILANESAS"];
}

async function traerPrecios(cat) {

  let arrayProducto=[["1","SANDWICH DE MILANESA XXL","36500",`Nuestro sandwich de milanesa XXL, es gigante!!! Trae mozzarella, jamón,
lechuga y tomate, y lo hacemos con pan de pizza a la piedra, con queso
parmesano gratinado y viene acompañado de papas fritas a caballo (4
HUEVOS)
COMEN 3, DE MUY BUEN COMER!`]];
  
  divPrecios.innerHTML='';

  arrayProducto.forEach(producto=>{

     divPrecios.innerHTML+=`
          <div class="card">

          <div class="card-row">

          <div class="card-column">         
          
                <div class="card-header">
                  <h3 class="product-name">${producto[1]}</h3>
                  <span class="product-price">${producto[2]}</span>
                </div>
                <p class="product-desc">
                  ${producto[3]}
                </p>
                
          
          </div>
             <button class="btn-agregar" >Agregar</button>
           
            </div>
   
  </div>
        `;

  })
  
        
    const botones = document.querySelectorAll(".btn-agregar");

botones.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    addProduct(arrayProducto[index]); // acá el array sigue intacto
  });
});

}



//let isLoading = false;

function spinerSC(boleano) {

    document.getElementById("spinnerSC").style.display =
        boleano ? "block" : "none";
}


function spinerC(boleano) {

    document.getElementById("spinnerC").style.display =
        boleano ? "block" : "none";
}



function addProduct(pro){
  let seleccionado=arrayPedido.filter(elem[0]==pro[0])
  console.log(seleccionado)

  if(seleccionado){
      
  console.log(pro)
let newArray=[];
  newArray=pro.push("1");
    console.log(newArray);
 arrayPedido.push(newArray);
 console.log(arrayPedido);
 document.getElementById("contadorCarrito").textContent=arrayPedido.length;

  }else{
      alert("Ya se seleccionaste el producto")
  }}


//let isLoading = false;

function spinerSC(boleano) {

    document.getElementById("spinnerSC").style.display =
        boleano ? "block" : "none";
}


function spinerC(boleano) {

    document.getElementById("spinnerC").style.display =
        boleano ? "block" : "none";
}


function irHader(){
  document.getElementById("irHader").scrollIntoView({
    behavior: "smooth"
  });
}

function verPedidos(){
if(arrayPedido.length>0){

  let total=0;
  document.getElementById("panelBlack").style.display="flex";

  let row="";
  arrayPedido.forEach(pedido=>{

  row+=`
          <tr>
            <td>${pedido[4]}</td>
            <td class="product-name">${pedido[1]}</td>
            <td class="product-price">$${pedido[2]}</td>
          </tr>
  `;
  total+=(pedido[2]*pedido[4]);

  })

  document.getElementById("rowTabla").innerHTML+=row;
    document.getElementById("total").innerHTML="$ "+total;


}else{
alert("no selecciono ningún producto!")
}
}

function cerrarPanelPedidos(){
  document.getElementById("panelBlack").style.display="none";
}

