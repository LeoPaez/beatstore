import styled from 'styled-components';

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: none;
  z-index: 1;
  position: relative;
  a {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  li {
    padding: 18px 16px;
    border-bottom: 1px solid #B5179E;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  li:hover {
    opacity: 0.8;
    border-color: #7209B7;
    padding-inline: 22px;
  }
  @media (max-width: 800px) {
    display: flex;
    background-color: #000;
    position: fixed;
    height: 100%;
    width: 100%;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    li {
      color: #FFF;
      opacity: 0.9;
      text-align: center;
      font-weight: 700;
      font-size: 19px;
    }
    button {
      position: absolute;
      top: 20px;
      right: 20px;
      background-color: transparent;
      border: none;
      color: #FFF;
      font-size: 24px;
      cursor: pointer;
    }
    button:hover {
      opacity: 0.9;
    }
  }
`;