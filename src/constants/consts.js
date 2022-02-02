const MENU = [
   {
      label: "Productos",
      icon: "pi pi-fw pi-file",
      items: [
         {
            label: "Productos Unick",
            icon: "pi pi-fw pi-bookmark",
            to: '/home',
         },
         {
            label: "Editar Producto",
            icon: "pi pi-fw pi-external-link",
            to: '/editProduct',
         },
         {
            label: "Descubre",
            icon: "pi pi-fw pi-external-link",
            to: '/products/discover',
         },
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
            to: '/orders',

         },
         {
            label: "Pagos",
            icon: "pi pi-fw pi-prime",

         },
         {
            label: "Tus Compras",
            icon: "pi pi-fw pi-calendar-times",
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

         },
         {
            label: "Clientes",
            icon: "pi pi-fw pi-prime",
            to: '/orders',
         },
         {
            label: "Ordenes",
            icon: "pi pi-fw pi-calendar-times",
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


/* 

const MENU = [
   {
      label: "Products",
      icon: "pi pi-fw pi-file",
      items: [
         {
            label: "New",
            icon: "pi pi-fw pi-plus",
            items: [
               {
                  label: "Bookmark",
                  icon: "pi pi-fw pi-bookmark",
                  to: '/sd'
               },
               {
                  label: "Video",
                  icon: "pi pi-fw pi-video",
               },
            ],
         },
         {
            label: "Delete",
            icon: "pi pi-fw pi-trash",
         },
         {
            label: "Export",
            icon: "pi pi-fw pi-external-link",
         },
      ],
   },
   {
      label: "Users",
      icon: "pi pi-fw pi-user",
      items: [
         {
            label: "New",
            icon: "pi pi-fw pi-user-plus",
            to: "/account"
         },
         {
            label: "Delete",
            icon: "pi pi-fw pi-user-minus",
         },
         {
            label: "Search",
            icon: "pi pi-fw pi-users",
            items: [
               {
                  label: "Filter",
                  icon: "pi pi-fw pi-filter",
                  items: [
                     {
                        label: "Print",
                        icon: "pi pi-fw pi-print",
                     },
                  ],
               },
               {
                  icon: "pi pi-fw pi-bars",
                  label: "List",
               },
            ],
         },
      ],
   },
   {
      label: "Cart",
      icon: "pi pi-fw pi-calendar",
      items: [
         {
            label: "Product",
            icon: "pi pi-fw pi-pencil",
            items: [
               {
                  label: "Save",
                  icon: "pi pi-fw pi-calendar-plus",
               },
               {
                  label: "Delete",
                  icon: "pi pi-fw pi-calendar-minus",
               },
            ],
         },
         {
            label: "Archieve",
            icon: "pi pi-fw pi-calendar-times",
            items: [
               {
                  label: "Remove",
                  icon: "pi pi-fw pi-calendar-minus",
               },
            ],
         },
      ],
   },
];

export default MENU;
 */


/*    const menu = [
      {
         label: 'Home',
         items: [{
            label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'
         }]
      },
      {
         label: 'UI Kit', icon: 'pi pi-fw pi-sitemap',
         items: [
            { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/formlayout' },
            { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/input' },
            { label: "Float Label", icon: "pi pi-fw pi-bookmark", to: "/floatlabel" },
            { label: "Invalid State", icon: "pi pi-fw pi-exclamation-circle", to: "invalidstate" },
         ]
      },
      {

         label: 'Pages', icon: 'pi pi-fw pi-clone',
         items: [
            { label: 'Crud', icon: 'pi pi-fw pi-user-edit', to: '/crud' },
            { label: 'Timeline', icon: 'pi pi-fw pi-calendar', to: '/timeline' },
            { label: 'Empty', icon: 'pi pi-fw pi-circle-off', to: '/empty' }
         ]
      },
      {
         label: 'Menu Hierarchy', icon: 'pi pi-fw pi-search',
         items: [
            {
               label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
               items: [
                  {
                     label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                     items: [
                        { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                        { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                        { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
                     ]
                  },
                  {
                     label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                     items: [
                        { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' },
                        { label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark' }
                     ]
                  },
               ]
            },
            {
               label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
               items: [
                  {
                     label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                     items: [
                        { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                        { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                        { label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark' },
                     ]
                  },
                  {
                     label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                     items: [
                        { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                        { label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark' }
                     ]
                  }
               ]
            }
         ]
      },

   ]; */