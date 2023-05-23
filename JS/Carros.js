function  traerDatosCarros(){
    $.ajax({
      URL: 'https://gdb1032523570a2-g1reto01.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/car/car',
      type:'GET',
      dataType:'json',
      success:function(respuesta){
          pintarDatos(respuesta.items);

      },
      error: function(respuesta, xhr){
          alert ("Error de peticion");
      }

  });

}


function guardarCarros(){
    let datosPorMandar={

    'id':$("#id").val(),
    'brand':$("#brand").val(),
    'model':$("#model").val(),
    'category_id':$("#category_id").val(),
    };

$.ajax({
      URL:' https://gdb1032523570a2-g1reto01.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/car/car ',
      type:'POST',
      ContentType:'application/json',

         data: JSON.stringify(datosPorMandar),

      success:function(respuesta){
        alert("El carro " +datosPorMandar.brand+"ha sido agregado con exito");
         

      },
      error: function(respuesta, xhr){
          alert ("error de peticion");
      }

  } );

}



function  pintarDatos(datos){

  let htmlparaInsertar = "";

  htmlparaInsertar += "<thead><tr><th>Titulo</th></tr></thead>";
  htmlparaInsertar += "<tbody>";
  for(let i = 0; i<datos.length; i++){
      htmlparaInsertar += "<tr>";
      htmlparaInsertar += "<td><a href='#' onclick=''>"+datos[i].brand+"</a></td>";
      htmlparaInsertar += "<tr>";
  }
    htmlparainsertar += "</tbody>";

    $("#tabla").empty();
    $("#tabla").append(htmlparaInsertar);
  
}