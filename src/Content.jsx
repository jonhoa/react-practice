import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";


export function Content() {
  const [value, setValue] = useState(new Date());

  function onChange(activeStartDate) {
    setValue(activeStartDate);
  }
  return (
    <div>
      <p>content page</p>
      <ProductsNew />
      <Calendar onChange ={onChange}
        value = {value}/>
      <ProductsIndex />
    </div>
  );
}
