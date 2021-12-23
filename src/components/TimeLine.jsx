import React from 'react';

import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";

const TimeLine = () => {




   const events1 = [
      {
         status: "Ordered",
         date: "15/10/2020 10:30",
         icon: "pi pi-shopping-cart",
         color: "#9C27B0",
         image: "game-controller.jpg"
      },
      {
         status: "Processing",
         date: "15/10/2020 14:00",
         icon: "pi pi-cog",
         color: "#673AB7"
      },
      {
         status: "Shipped",
         date: "15/10/2020 16:15",
         icon: "pi pi-shopping-cart",
         color: "#FF9800"
      },
      {
         status: "Delivered",
         date: "16/10/2020 10:00",
         icon: "pi pi-check",
         color: "#607D8B"
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
               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
