import React from 'react';

import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";

const TimeLine = () => {

   const events1 = [
      {
         status: "Selecciona",
         date: "15/10/2020 10:30",
         icon: "pi pi-shopping-cart",
         color: "#9C27B0",
         image: "game-controller.jpg",
         description: 'Seleciona uno de nuestros productos de los muchos que ofrecemos.'
      },
      {
         status: "Personaliza",
         date: "15/10/2020 14:00",
         icon: "pi pi-cog",
         color: "#673AB7",
         description: 'Personaliza nuestros productos a tu preferencia.'
      },
      {
         status: "Ordena",
         date: "15/10/2020 16:15",
         icon: "pi pi-shopping-cart",
         color: "#FF9800",
         description: 'Ordena los productos que creaste.'
      },
      {
         status: "Recivelo",
         date: "16/10/2020 10:00",
         icon: "pi pi-check",
         color: "#607D8B",
         description: 'Espera por tu pedido.'
      }
   ];


   const customizedMarker = (item) => {
      return (
         <span
            className="custom-marker p-shadow-2"
            style={{ backgroundColor: item.color }}
         >
            <i className={item.icon}></i>
         </span>
      );
   };

   const customizedContent = (item) => {
      return (
         <Card title={item.status} >
            <p>
               {item.description}
            </p>
         </Card>
      );
   };


   return (

      <>
         <Timeline value={events1} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
      </>
   )
}

export default TimeLine;
