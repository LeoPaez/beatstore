import { useState } from 'react';
import { Menu } from "./Menu/Menu";
import { StyledBurger } from "./styles";

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false)

  const openBurgerMenu = () => {
    setOpen(!open)
  }

  return (
    <>
      <Menu open={open} setOpen={openBurgerMenu} />
      <StyledBurger open={open} onClick={openBurgerMenu}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  )
}