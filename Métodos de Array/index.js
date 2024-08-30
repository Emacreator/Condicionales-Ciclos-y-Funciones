const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//A)

// const idImpar = pizzas.filter((pizzas) => pizzas.id % 2);

// console.log(idImpar);

//B)

const pizzasMenor600 = pizzas.filter((pizzas) => pizzas.precio <= 600);

if (pizzasMenor600) {
  pizzasMenor600.forEach((pizzas) => {
    console.log(`La ${pizzas.nombre} tiene un costo de ${pizzas.precio} pesos`);
  });
} else {
  console.log("no hay pizzas que valgan menos de 600");
}

//C)

// pizzas.forEach((pizzas) => {
//   const { nombre, precio } = pizzas;
//   console.log(`Nombre: ${nombre}, Precio ${precio}`);
// });

//D)

// pizzas.forEach((pizzas) => {
//   const { nombre, ingredientes } = pizzas;
//   console.log(`Nombre: ${nombre}, Ingredientes: ${ingredientes}`);
// });
