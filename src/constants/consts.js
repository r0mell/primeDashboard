const MENU = [
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
         /*   {
              label: "Descubre",
              icon: "pi pi-fw pi-external-link",
              to: '/products/discover',
           }, */
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
         /* {
            label: "Pagos",
            icon: "pi pi-fw pi-paypal",
            to: '/orders/checkpay',

         },  */
         {
            label: "Tus Compras",
            icon: "pi pi-fw pi-calendar-plus",
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
            icon: "pi pi-fw pi-shopping-bag",
            to: '/admin/products',

         },
         {
            label: "Clientes",
            icon: "pi pi-fw pi-id-card",
            to: '/admin/clients',
         },
         {
            label: "Ordenes",
            icon: "pi pi-fw pi-wallet",
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

export default MENU;

