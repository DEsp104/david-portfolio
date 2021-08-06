import Hamburger from 'hamburger-react';
import React, { useState } from "react";






export default function HamburgerIcon() {

  const [isOpen, setOpen] = useState(false)

  return (
    <div>
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </div>
  )
}


