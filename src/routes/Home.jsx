import { Icon } from "semantic-ui-react";
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
  position: absolute;
  margin:0 auto;
  top: 20px;
  left: 0;
  right: 0;
  width: 80%;
  margin-top: 40px;
  box-shadow: 3px 3px 8px rgba(0,0,0,0.3);
  margin-bottom: 300px;
  

.gahee{
  width: 80%;
  height: 90%;
  margin: 0 auto;
  padding: 20px;
}
.intro{
  color: #aaa;
  font-size: 20px;
  letter-spacing: 0.9px;
  padding: 20px 10%;
}

.name{
  color: black;
  font-size: 22px;
  font-weight: bold;
  border-bottom: 0.5px solid black;
  letter-spacing: 0.9px;
  padding-bottom: 10px;
  width:80%;}
.content{
  color: #aaa;
  font-size: 18px;
  letter-spacing: 0.9px;
  padding: 20px 0;
  line-height:1.3em;}

@media (max-width: 999px) {
  width: 100%;
  .intro{
    color: #aaa;
    font-size: 15px;
    letter-spacing: 0.9px;
    padding: 20px 10%;
  }
  .name{
    color: black;
  font-size: 14px;
  font-weight: bold;
  border-bottom: 0.5px solid black;
  letter-spacing: 0.9px;
  padding-bottom: 10px;
  width:80%;}
  .content{
    color: #aaa;
  font-size: 12px;
  letter-spacing: 0.9px;
  padding: 20px 0;
  line-height:1.3em;}
  }

  @media (max-width: 400px) {
  width: 100%;
  .intro{
    color: #aaa;
    font-size: 15px;
    letter-spacing: 0.9px;
    padding: 20px 10%;
  }
  .name{
    color: black;
  font-size: 14px;
  font-weight: bold;
  border-bottom: 0.5px solid black;
  letter-spacing: 0.9px;
  padding-bottom: 10px;
  width:80%;}
  .content{
    color: #aaa;
  font-size: 12px;
  letter-spacing: 0.9px;
  padding: 20px 0;
  line-height:1.3em;}
  }



`




const Icons = styled.div`
  position: relative;
  bottom:0;
  width: 100%;
  height:70px;
  background-color: #2d2e21;
  padding: 17px;
  .icon:hover{
   scale: 1.1;
   cursor: pointer;
  }
`
export default function Home() {
  return (
    <main id="main">
      <IntroContainer >
        <FlexCont>
          <div className="flex-4"><img className="gahee" src="https://api.vercel.com/now/files/9a163e36cf01bf4749897c297e9b3cd63a6f876f/GaheeChoiAvatar.jpeg" alt="pic of gahee choi" /></div>
          <div className="flex-6"><div className="intro"><h3>Web Developer</h3>
            <div className="name">Gahee Choi,</div><div className="content">A versatile professional with a background in computer science and civil engineering. She is currently pursuing Web development studies at Humber College, where she is acquiring the necessary skills and knowledge to excel in this dynamic industry With a strong foundation in problem-solving and critical thinking.</div></div></div></FlexCont>
        <Icons>
          <FlexCont>
            <div className="flex-1" />
            <div className="flex-1">
              <a href="https://github.com/gaheeKate/">
                <Icon className="icon" name="github" size="big" style={{ color: "white" }}></Icon></a>
            </div>
            <div className="flex-1">
              <a href="https://www.linkedin.com/in/gahee-choi-855645b8/?originalSubdomain=ca"><Icon className="icon" name="linkedin" size="big" style={{ color: "white" }}></Icon></a>
            </div>
            <div className="flex-1">
              <a href="mailto:gaheekate@gmail.com"> <Icon className="icon" name="envelope open outline" size="big" style={{ color: "white" }}></Icon></a>
            </div>

          </FlexCont>
        </Icons>
      </IntroContainer>

    </main >
  );
}