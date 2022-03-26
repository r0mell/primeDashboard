const MENU = [
   {
      label: "Productos",
      icon: "pi pi-fw pi-file",
      items: [
         {
            label: "Productos Unick",
            icon: "pi pi-fw pi-bookmark",
            to: '/product/products',
         },
         {
            label: "Editar Producto",
            icon: "pi pi-fw pi-external-link",
            to: '/product/editProduct',
         },
         /*   {
              label: "Descubre",
              icon: "pi pi-fw pi-external-link",
              to: '/products/discover',
           }, */
         {
            label: "Mis Productos",
            icon: "pi pi-fw pi-trash",
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
            icon: "pi pi-fw pi-pencil",
            to: '/orders/order',

         },
         {
            label: "Pagos",
            icon: "pi pi-fw pi-prime",
            to: '/orders/checkpay',

         },
         {
            label: "Tus Compras",
            icon: "pi pi-fw pi-calendar-times",
            to: '/orders/acquisitions',
         },

      ],
   },
   {
      label: "Admin",
      icon: "pi pi-fw pi-calendar",
      items: [
         {
            label: "Crear producto",
            icon: "pi pi-fw pi-pencil",
            to: '/admin/products',

         },
         {
            label: "Clientes",
            icon: "pi pi-fw pi-prime",
            to: '/admin/clients',
         },
         {
            label: "Ordenes",
            icon: "pi pi-fw pi-calendar-times",
            to: '/admin/checkout',
         },

      ],
   },
   {
      label: "Usuario",
      icon: "pi pi-fw pi-user",
      items: [
         {
            label: "Mi Cuenta",
            icon: "pi pi-fw pi-user-plus",
            to: "/account"
         },
         {
            label: "Salir",
            icon: "pi pi-fw pi-user-minus",
            to: '/logout'
         },
      ],
   }
];

export default MENU;

