import React from 'react';
import * as S from './Experience.styles';
import ExperiencePane from './ExperiencePane.jsx';
const Experience = () => {
    return (
        <S.ExperienceContainer id="experience">
            <h1>My Experience</h1>
            <ExperiencePane 
                companyName="Halo" 
                jobTitle="Software Engineer Intern" 
                subtitle="Apr. 2021 - Sept. 2021" 
                body="
                    Here's what i did Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque facilisis eget turpis nec laoreet. Aliquam sollicitudin rutrum est,
                    nec dignissim dolor varius eu. Nunc sollicitudin arcu nec enim bibendum, 
                    ut tincidunt ipsum efficitur. Integer eget aliquam neque. Morbi eget ultricies 
                    magna. Quisque lectus tellus, dictum et mattis efficitur, aliquam euismod metus.
                    Nam at quam in sem molestie mollis. Ut non turpis porttitor, elementum sapien
                    nec, feugiat orci. Fusce vitae sapien magna. Nam ullamcorper erat vitae nulla 
                    rutrum porta. Ut feugiat, elit et interdum iaculis, turpis massa suscipit urna, 
                    vel gravida lectus quam quis ligula.
                "
                tech={["React", "Ruby", "Node.js", "Redux", "Rails", "Jest", "Styled Components"]}
            />
            <ExperiencePane 
                companyName="Triton Software Engineering" 
                jobTitle="Incoming Developer Lead" 
                subtitle="Nov. 2020 - Present" 
                body="
                    Here's what i did Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque facilisis eget turpis nec laoreet. Aliquam sollicitudin rutrum est,
                    nec dignissim dolor varius eu. Nunc sollicitudin arcu nec enim bibendum, 
                    ut tincidunt ipsum efficitur. Integer eget aliquam neque. Morbi eget ultricies 
                    magna. Quisque lectus tellus, dictum et mattis efficitur, aliquam euismod metus.
                    Nam at quam in sem molestie mollis. Ut non turpis porttitor, elementum sapien
                    nec, feugiat orci. Fusce vitae sapien magna. Nam ullamcorper erat vitae nulla 
                    rutrum porta. Ut feugiat, elit et interdum iaculis, turpis massa suscipit urna, 
                    vel gravida lectus quam quis ligula.
                "
                tech={["React", "Node.js", "MongoDB"]}
            />
            <ExperiencePane 
                companyName="ACM @ UCSD" 
                jobTitle="Developer" 
                subtitle="Jan. 2021 - Aug. 2021" 
                body="
                    Here's what i did Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque facilisis eget turpis nec laoreet. Aliquam sollicitudin rutrum est,
                    nec dignissim dolor varius eu. Nunc sollicitudin arcu nec enim bibendum, 
                    ut tincidunt ipsum efficitur. Integer eget aliquam neque. Morbi eget ultricies 
                    magna. Quisque lectus tellus, dictum et mattis efficitur, aliquam euismod metus.
                    Nam at quam in sem molestie mollis. Ut non turpis porttitor, elementum sapien
                    nec, feugiat orci. Fusce vitae sapien magna. Nam ullamcorper erat vitae nulla 
                    rutrum porta. Ut feugiat, elit et interdum iaculis, turpis massa suscipit urna, 
                    vel gravida lectus quam quis ligula.
                "
                tech={["React", "TypeScript", "Gatsby", "Less.js"]}
            />
        </S.ExperienceContainer>
    );
}

export default Experience;