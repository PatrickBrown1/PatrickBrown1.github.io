import React from 'react';
import { Link } from "react-scroll";
import COLORS from '../../../constants/colors';

import * as S from './Experience.styles';
import ExperiencePane from './ExperiencePane.jsx';

const Experience = () => {
    return (
        <S.ExperienceContainer id="experience">
            <h1>My Experience</h1>
            <ExperiencePane 
                companyName="Halo" 
                jobTitle="Software Engineer Intern" 
                subtitle="Apr. 2021 - Sept. 2021 (5 Months)" 
                body={
                    <p>
                        Here's what i did Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque facilisis eget turpis nec laoreet. Aliquam sollicitudin rutrum est,
                        nec dignissim dolor varius eu. Nunc sollicitudin arcu nec enim bibendum, 
                        ut tincidunt ipsum efficitur. Integer eget aliquam neque. Morbi eget ultricies 
                        magna. Quisque lectus tellus, dictum et mattis efficitur, aliquam euismod metus.
                        Nam at quam in sem molestie mollis. Ut non turpis porttitor, elementum sapien
                        nec, feugiat orci. Fusce vitae sapien magna. Nam ullamcorper erat vitae nulla 
                        rutrum porta. Ut feugiat, elit et interdum iaculis, turpis massa suscipit urna, 
                        vel gravida lectus quam quis ligula.
                    </p>
                }
                tech={["React", "Ruby", "Node.js", "Redux", "Rails", "Jest", "Styled Components"]}
            />
            <S.Divider color={COLORS.red}/>
            <ExperiencePane 
                companyName="Triton Software Engineering" 
                jobTitle="Incoming Development Manager" 
                subtitle="Starting Oct. 2021" 
                body={
                    <p>
                        This coming year, I will be working as a Development Manager, an executive board role at TSE!
                        <br /><br />
                        In this role I'll have many responsibilities, including
                        <ul>
                            <li>Leading a team of 5-7 developers on a completely new project (still to be announced)</li>
                            <li>Creating technical documentation for the entire application, from front-end file structure to database schema</li>
                            <li>Assigning tasks to my developers and overseeing their timely completion</li>
                            <li>Leading weekly standups and attending executive board meetings</li>
                            <li>And much much more!</li>
                        </ul>                    
                    </p>
                }
                secondJobTitle="Developer" 
                secondSubtitle="Nov. 2020 - Present" 
                secondBody={
                    <p>
                        During my time developing at Triton Software Engineering, I have been a part of two separate
                        projects.

                        <h4>UWEAST Community Kitchen</h4>
                        For the first project, my team and I worked alongside the <a href="https://www.uweast.org/" target="blank_">United Woman of East Africa</a>,
                        a local San Diego non-profit. We developed a fully functional catering website for their community
                        kitchen that allowed customers to browse to purchase food for pickup, and allowed admins the full
                        autonomy of updating the website, changing the menu, and tracking past and current orders.                       
                        <br /><br />

                        My specific contributions to this project were
                        <ul>
                            <li>
                                Oversaw and implemented a secure payment pipeline, allowing users to pay for the food they are purchasing
                                with their PayPal account or their Credit Card, handling payment verification callbacks,
                                and managing different account connections.
                            </li>
                            <li>
                                Implemented order logging for these purchases to our Node backend
                            </li>
                            <li>
                                Developed frontend components allowing the admins to view the current menu, add new menu items,
                                and edit or remove existing menu items.
                            </li>
                        </ul>
                        If you would like to see some pictures of the final product,&nbsp;
                            <Link
                                style={{'cursor': 'pointer', 'text-decoration': 'underline'}}
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                let me know
                            </Link>  and I can send over some screenshots!
                        Or, checkout the <a href="https://github.com/TritonSE/UWEAST-Community-Kitchen" target="blank_">Github Repository</a>!
                        <br /><br />


                        <h4>SI Website Revamp</h4>
                        The second project I've contributed to is a website revamp for the <a href="https://www.sakyadhita.org/" target="blank_">Sakyadhita International Association of Buddhist Women</a>,
                        an international non-profit with chapters in 10 countries.<br /><br />
                        The new website will allow admins to update front-facing information with ease, letting them add new events, update publication information, as well as administration information.
                        <br /><br />
                        This project is still a work in progress, and is set to be completed in December 2021. Feel free to keep an eye on the <a href="https://github.com/TritonSE/SI-Website-Revamp" target="blank_">Github Repository</a> and watch it progress!
                    </p>
                }
                tech={["React", "Node.js", "MongoDB"]}
            />
            <S.Divider color={COLORS.yellow} />
            <ExperiencePane 
                companyName="ACM @ UCSD" 
                jobTitle="Developer" 
                subtitle="Jan. 2021 - Aug. 2021" 
                body={
                    <p>
                        In my time as a developer at ACM UCSD, I worked on a team of 3 designers and 
                        2 developers to create and launch a new and improved home website for the student
                        organization. The techstack we used on this project was React, TypeScript, and Gatsby, and Less.js.
                        <br /> <br />
                        The final version of the website can be found <a href='http://www.acmucsd.com' target='blank_'>here</a> and the github repository for the project can be found <a href='https://github.com/acmucsd/main-website' target='blank_'>here</a>!
                    </p>
                }
                tech={["React", "TypeScript", "Gatsby", "Less.js"]}
            />
        </S.ExperienceContainer>
    );
}

export default Experience;