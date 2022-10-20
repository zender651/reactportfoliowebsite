
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen'

export const Projects=()=>{
    const projects = [
        {
          title: "marksheet-generator",
          description: "automatically generates marksheets based on CSV data of users.Mails the respective students their marksheets",
          imgUrl: projImg1,
        },
        {
          title: "transcript-generator",
          description: "calculates cpi and spi and generates a transcript based on it and mails to respective students",
          imgUrl: projImg2,
        },
        {
          title: "Godot game ",
          description: "3D player game developed through godot game engine",
          imgUrl: projImg3,
        },
        {
          title: "portfolio using simple JavaScript",
          description: "simple portfolio website",
          imgUrl: projImg4,
        }
        
      ];
    
    return(
        <section className="Project" id="project">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Projects</h2>
                  <p>Currently studying as a student at IITPatna in Electrical and Electronics Department! I have keen interests in working as a front end developer and as well as a graphics developer. I have developed some graphics projects,one project regarding analog electronics and as well as web projects mentioned.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Currently studying as a student at IITPatna in Electrical and Electronics Department! I have keen interests in working as a front end developer and as well as a graphics developer. I have developed some graphics projects,one project regarding analog electronics and as well as web projects mentioned.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Currently studying as a student at IITPatna in Electrical and Electronics Department! I have keen interests in working as a front end developer and as well as a graphics developer. I have developed some graphics projects,one project regarding analog electronics and as well as web projects mentioned.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}