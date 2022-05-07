const MENUCLIENT = [
   {
      label: "Productos",
      icon: "pi pi-fw pi-file",
      items: [
         {
            label: "Productos Unick",
            icon: "pi pi-fw pi-clone",
            to: '/product/products',
         },
         {
            label: "Editar Producto",
            icon: "pi pi-fw pi-cog",
            to: '/product/editProduct',
         },
         {
            label: "Mis Productos",
            icon: "pi pi-fw pi-folder-open",
            to: '/products/myProducts',
         },
      ],
   },
   {
      label: "Carrito",
      icon: "pi pi-fw pi-calendar",
      items: [
         {
            label: "Tu Orden",
            icon: "pi pi-fw pi-shopping-cart",
            to: '/orders/order',

         },
         {
            label: "Tus Compras",
            icon: "pi pi-fw pi-calendar-plus",
            to: '/orders/acquisitions',
         },

      ],
   },
   {
      label: "Usuario",
      icon: "pi pi-fw pi-user",
      items: [
         {
            label: "Mi Cuenta",
            icon: "pi pi-fw pi-user-edit",
            to: "/account"
         },
         {
            label: "Salir",
            icon: "pi pi-fw pi-sign-out",
            to: '/logout'
         },
      ],
   }
];

export default MENUCLIENT;

