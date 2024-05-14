import { Ul } from "./styles"

export const Menu = ({ open, setOpen }) => {
  return (
    <>
      <Ul open={open}>
        <a onClick={setOpen} href="#">
          <li>Inicio</li>
        </a>
        <a onClick={setOpen} href="#">
          <li>Catalogo</li>
        </a>
        <a onClick={setOpen} href="#">
          <li>Beats</li>
        </a>
        <button onClick={setOpen}>X</button>
      </Ul>
    </>
  )
}