import styled from "styled-components";
import Menubutton from './Menubutton'

const Menu = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  width: 90%;
  max-width: 560px;
  background-color: #C2B7A3;
  left:50%;
  height:120px;
  transform: translateX(-50%);
  border-top-left-radius:25px;
  border-top-right-radius:25px;
  justify-content: space-between;
  padding:15px 30px;
  padding-bottom: 10px;


  @media (max-width: 600px) {
    width: 100%;
    flex-wrap: wrap;
    height: auto;
    padding: 10px;
    justify-content: center;
    align-items: center;
    

}



`;

export default function Menubar(props) {
  return (
    <Menu id="main-nav" aria-label="Main navigation">
      <Menubutton to="/home" icon="user" color="#d72631" text="Intro" />
      <Menubutton to="/project" icon="archive" color="#a2d5c6" text="Project" />
      <Menubutton to="/education" icon="graduation cap" color="#077b8a" text="Education" />
      <Menubutton to="/skill" icon="whmcs" color="#5c3c92" text="Skill" />
    </Menu>
  );
}