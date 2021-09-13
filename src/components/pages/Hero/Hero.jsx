import React from 'react';
import * as S from './Hero.styles';


import PatrickImage from "../../../assets/PatrickPicture.jpg";

// const MainHeader = () => {
//   return(
//     <Typist
//       cursor={{
//         show: false,
//         blink: true,
//         element: '|',
//         hideWhenDone: true,
//         hideWhenDoneDelay: 0,
//       }}
//       avgTypingDelay={100}
//     >
//       <Typist.Delay ms={500} />
//       <h1 className="mainHeader">Patrick Brown</h1>
//     </Typist>
//   );
// }
// const SubHeader = () => {
//   return(
//     <Typist 
//       cursor={{
//         show: false,
//         blink: true,
//         element: '|',
//         hideWhenDone: true,
//         hideWhenDoneDelay: 0,
//       }}
//       avgTypingDelay={50}
//     >
//       <Typist.Delay ms={2500} />
//       <h2 className="subHeader">Student, Programmer, Baker</h2>
//     </Typist>
//   );
  
// }
// const App = () => {
//   return (
//     <div className="App">
//       <div className="hero-view">
//         <div className="hero-panel">
//           <div className="image-container">
//             <img className="image" src={PatrickImage} />
//           </div>
//           <div className="text-container">
//             <MainHeader />
//             <SubHeader />
//           </div>
//         </div>
//       </div>
//       <LinkView />
//     </div>
//   );
// }
const Hero = ({ windowSize }) => {
    console.log(windowSize)
    return (
        <S.HeroContainer>
            {windowSize.width >= 650 ?
                <S.HeaderContainer>
                    <S.ImageContainer>
                        <S.Image src={PatrickImage} alt="Patrick Brown" />
                    </S.ImageContainer>
                    <S.HeaderText>
                        <h1>Patrick Brown</h1>
                        <h2>Experience About Me Resume Contact</h2>
                    </S.HeaderText>
                </S.HeaderContainer>
            :
                <S.HeaderText mobile={windowSize.width <= 650}>
                    <h1>Patrick Brown</h1>
                    <S.ImageContainer mobile={windowSize.width <= 650}>
                        <S.Image src={PatrickImage} alt="Patrick Brown" />
                    </S.ImageContainer>
                    <h2>Experience About Me Resume Contact</h2>
                </S.HeaderText>
            }
            
        </S.HeroContainer>
    );
}

export default Hero;