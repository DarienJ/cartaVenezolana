function proceso(variable){
  if (variable.id == 'hambSencilla') {
    Swal.fire(
      'Hamburguesa Sencilla',
      'Croqueta, carne, jamón, queso tajado, lechuga, tomate, cebolla, salsas y porción de papas'
    )
  } else if (variable.id == 'hambExtra') {
    Swal.fire(
      'Hamburguesa Extra',
      'Croqueta, carne, pollo, jamón, queso tajado, lechuga, tomate, cebolla, huevo, salsas y porción de papas'
    )
  } else if (variable.id == 'hambEspecial') {
    Swal.fire(
      'Hamburguesa Especial',
      'Croqueta, doble carne, pollo, jamón, chorizo, queso tajado, tocineta, aguacate, maiz, lechuga, tomate, cebolla, huevo, salsas y porción de papas'
    )
  } else if (variable.id == 'perroSencillo') {
    Swal.fire(
      'Perro Sencillo',
      'Repollo, cebolla, salchicha, papita rallada, queso rallado y salsas'
    )  
  } else if (variable.id == 'perroEspecial') {
    Swal.fire(
      'Perro Especial',
      'Repollo, cebolla, salchicha, pollo, jamón, queso tajado, papita rallada, queso rallado, salsas y porción de papas'
    )  
  } else if (variable.id == 'perroSEspecial') {
    Swal.fire(
      'Perro Super Especial',
      'Repollo, cebolla, salchicha, pollo, carne, tocineta, huevo, jamón, queso tajado, papita rallada, queso rallado, salsas y porción de papas'
    )  
  } else if (variable.id == 'salchipapaSencillo') {
    Swal.fire(
      'Salchipapa Sencillo',
      'Papas francesas, salchichas, chorizo, papita rallada, queso rallado y salsas'
    )  
  }  else if (variable.id == 'salchipapaMixto') {
    Swal.fire(
      'Salchipapa Mixto',
      'Papas francesas, salchichas, chorizo, pollo, tocino, papita rallada, queso rallado y salsas'
    )  
  }  else if (variable.id == 'salchipapaEspecial') {
    Swal.fire(
      'Salchipapa Especial',
      'Papas francesas, salchichas, chorizo, carne, pollo, jamón, cebola, repollo, papita rallada, queso rallado y salsas'
    )  
  } else if (variable.id == 'picada') {
    Swal.fire(
      'Picada',
      'Papa francesa, carne de res, pechuga, cerdo, chorizo, salchicha y aguacate'
    ) 
  }
}