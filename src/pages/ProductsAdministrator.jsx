import React from 'react';
import TemplateDash from '../containers/TemplateDash';
import MaterialTable from '@material-table/core';
import useGetAllProducts from '../hooks/useGetAllProducts'
import { ExportCsv, ExportPdf } from '@material-table/exporters';

const ProductAdministrator = () => {

   const { columnas, products } = useGetAllProducts()

   return (

      <div className='layout-wrapper'>

         <TemplateDash />

         <div className="layout-main-container">
            <div className="layout-main">

               <div className="productsAdmin-card">
                  <div>
                     All Products // Create product
                  </div>
                  <div className="tabla">

                     <MaterialTable
                        columns={columnas} 
                        data={products}

                        options={{
                           exportMenu: [{
                              label: 'Export PDF',
                              exportFunc: (cols, datas) => ExportPdf(cols, datas, 'ProductsAdministrator')
                           }, {
                              label: 'Export CSV',
                              exportFunc: (cols, datas) => ExportCsv(cols, datas, 'ProductsAdministrator')
                           }],
                           pageSizeOptions: [10, 15], pageSize: 10, paginationType: "stepped", showFirstLastPageButtons: false,

                        }}
                        title="Administración Productos"
                     />
                  </div>


               </div>
            </div>
         </div>
      </div>
   )
}

export default ProductAdministrator;
