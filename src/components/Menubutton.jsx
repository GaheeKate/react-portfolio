import styled from "styled-components";
import { Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const ButtonSty = styled(Link)`
  background-color: white;
  border: 2px solid ${props => props.color};
  padding:20px;
  border-radius:10px;
  transition:all 0.3s;
  position:relative;
  color: ${props => props.color};
  cursor: pointer;
  text-decoration: none;
  &:hover{
    transform: scale(1.1);
  }
  span{
    position:absolute;
    bottom:2%;
    left:50%;
    transform:translateX(-50%);
  }
  @media (max-width: 600px) {
    width: 100%;
    flex-wrap: wrap;
    height: auto;
    padding: 10px;
    justify-content: center;
    align-items: center;
    &:hover{
    transform: scale(1);
  }
    

  .icon {
    display: none;
  }}
`;

export default function Menubutton(props) {
  return (
    <ButtonSty to={props.to} color={props.color}>
      <Icon name={props.icon} style={{ fontSize: "50px", transform: "translateY(30%)" }} />
      <span>{props.text}</span>
    </ButtonSty>
  );
}