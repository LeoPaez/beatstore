import { useEffect, useState } from 'react';
import { Menu } from "./Menu/Menu";
import { StyledBurger } from "./styles";

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false)

  const openBurgerMenu = () => {
    setOpen(!open)
  }

  useEffect(() => {

    const handleScroll = () => {
      setOpen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setOpen]);

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