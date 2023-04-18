import ProjectData from "../components/ProjectData";
import styled from "styled-components";

const FlexCont = styled.div`
  display:flex;
  .flex-1{flex:1};
  .flex-2{flex:2};
  .flex-3{flex:3};
  .flex-4{flex:4};
  .flex-5{flex:5};
  .flex-6{flex:6};
  .flex-7{flex:7};
  .flex-8{flex:8};
  .flex-9{flex:9};
`

const IntroContainer = styled.div`
  background-color: RGB(243, 244, 245);
  margin:0 auto;
  width: 60%;
  height:80%;
  margin-top: 40px;
  box-shadow: 3px 3px 8px rgba(0,0,0,0.3);
  padding-bottom: 300px;
  padding-top: 10px;
  padding-left: 30px;
  padding-right : 30px;
  @media (max-width: 999px) {
  width: 100%;
  }

  @media (max-width: 400px) {
  width: 100%;
  font-size: 10px;
 
  }

`

export default function Project() {
  return (
    <main id="main">

      <IntroContainer >
        <FlexCont>
          <div className="flex-1"> <ProjectData /></div></FlexCont>

      </IntroContainer>


    </main>
  );
}