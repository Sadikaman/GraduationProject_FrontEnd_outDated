import React from 'react'
import { Datepicker } from "flowbite-react";

"use client";


const DatePiker = () => {
  return (
    <div>
      <Datepicker minDate={new Date(2023, 0, 1)} maxDate={new Date(2023, 3, 30)} />
    </div>
  )
}

export default DatePiker
