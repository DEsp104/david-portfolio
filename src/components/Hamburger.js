import Hamburger from 'hamburger-react';
import React, { useState } from "react";






export default function HamburgerIcon() {

  const [isOpen, setOpen] = useState(false)

  return (
    <div className="hamburger-backgrnd">
      <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
    </div>
  )
}


