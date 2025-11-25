window.onload = traerCategorias();

async function traerCategorias() {
  const url = "https://script.google.com/macros/s/AKfycbxT5zeNWK5O_z3Na_XVU_Rz6d8yw_uI2AZS94gp9XXrtBEzR4hMvlzqRUGuhezyytxa/exec?acc=th";

  try {
    const res = await fetch(url);
    const data = await res.json();

    //console.log("Categorías:", data);
    let divCategoria=document.getElementById("categorias");
    data.forEach(categoria => {
        divCategoria.innerHTML+=`<button class="btn btn-primary" onclick=traerPrecios("${categoria}")>${categoria}</button>`;
    });
    
    return data; // es un array con los nombres de las hojas
  } catch (error) {
    console.error("Error obteniendo categorías:", error);
    return [];
  }
}

async function traerPrecios(cat) {

       divPrecios.innerHTML='';

    let catFormateada=cat.replaceAll(' ','22%')
  const url = `https://script.google.com/macros/s/AKfycbxT5zeNWK5O_z3Na_XVU_Rz6d8yw_uI2AZS94gp9XXrtBEzR4hMvlzqRUGuhezyytxa/exec?acc=tp&&cat=${catFormateada}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log("Categorías:", data);

    let divPrecios=document.getElementById('divPrecios');

     

    data.forEach(producto=>{
        
        divPrecios.innerHTML+=`
          <div class="card">
    <div class="card-header">
      <h3 class="product-name">${producto[1]}</h3>
      <span class="product-price">${producto[2]}</span>
    </div>
    <p class="product-desc">
      ${producto[3]}
    </p>
    <button class="btn-agregar">Agregar</button>
  </div>
        `;
    })
    return data; // es un array con los nombres de las hojas
  } catch (error) {
    console.error("Error obteniendo categorías:", error);
    return [];
  }
}
