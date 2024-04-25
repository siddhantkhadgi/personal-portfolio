import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import webdprojImg1 from "../assets/img/to_do_list_cover_photo.jpg";
import webdprojImg2 from "../assets/img/weather_app_cover.jpg";
import webdprojImg3 from "../assets/img/th-837099510.jpeg";
import mlprojImg1 from "../assets/img/EEG_GAN.jpg";
import mlprojImg2 from "../assets/img/BTP.jpg";
import mlprojImg3 from "../assets/img/zenml.png";
import dsprojImg1 from "../assets/img/sales_data_analysis.jpg";
import dsprojImg2 from "../assets/img/personal_finance.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const web_dev_projects = [
    {
      title: "To-Do List App",
      description:
        "The To-Do List app allows users to add tasks, mark them as complete or incomplete, and delete tasks. It also utilizes local storage to save tasks for future sessions.",
      imgUrl: webdprojImg1,
      projectUrl: "https://github.com/siddhantkhadgi/to_do_list/tree/main",
    },
    {
      title: "Weather App",
      description:
        "Learn to build a Weather App with HTML, CSS, and JavaScript. Utilize the OpenWeatherMap API to display temperature, weather condition, humidity, and wind speed for a specified city.",
      imgUrl: webdprojImg2,
      projectUrl: "https://github.com/siddhantkhadgi/weather-app",
    },
    {
      title: "Form with google recaptcha",
      description:
        "This project integrates Google reCaptcha v2 with an HTML form, using JavaScript for client-side validation and Node.js for server-side validation to prevent automated submissions and enhance form security.",
      imgUrl: webdprojImg3,
      projectUrl: "https://github.com/siddhantkhadgi/recaptcha",
    },
  ];
  const machine_learning_projects = [
    {
      title: "EEG data generation from GAN",
      description:
        "This project uses Generative Adversarial Networks (GANs) to generate synthetic Electroencephalography (EEG) data, addressing the problem of small dataset sizes in EEG signal analysis. By augmenting EEG datasets with generated samples, the project aims to enhance cognitive research and improve brain-computer interfaces.",
      imgUrl: mlprojImg1,
      projectUrl: "https://www.overleaf.com/read/gqmrpsrjccwg#1bf805",
    },
    {
      title: "A Bayesian approach to intention-mapping using non-invasive EEG",
      description:
        "This project develops a probabilistic neuro-musculoskeletal model for joint motion, using Electroencephalography (EEG) signals as input to predict joint angles. By combining neuroscience, biomechanics, and statistical inference, the model aims to understand and represent the variability and uncertainty in neuromuscular control and musculoskeletal dynamics, with applications in biomechanics, rehabilitation, and robotics.",
      imgUrl: mlprojImg2,
      projectUrl: "https://www.overleaf.com/read/nmyqrnyghsdm#c93eb1",
    },
    {
      title: "A Bayesian approach to intention-mapping using non-invasive EEG",
      description:
        "Built a customer satisfaction prediction model using the Olist dataset and ZenML, deploying it in a Streamlit app for interactive visualization. The project featured a streamlined machine learning pipeline with MLFlow for efficient tracking, showcasing end-to-end proficiency in data preprocessing, model training, deployment, and user interface development.",
      imgUrl: mlprojImg3,
      projectUrl:
        "https://github.com/siddhantkhadgi/customer-satisfaction-mlops",
    },
  ];
  const data_science_projects = [
    {
      title: "Sales Insights Data Analysis",
      description:
        "Successfully connected PowerBI to SQL databases, ensuring data accuracy through thorough cleaning and preprocessing. Developed interactive dashboards with dynamic visualizations for seamless data analysis and published them for mobile access, enabling real-time insights and data-driven decision-making. Collaborated to enhance report accessibility across platforms, fostering organizational collaboration.",
      imgUrl: dsprojImg1,
    },
    {
      title: "Personal Finance",
      description:
        "Created a personal finance analysis project in Power BI, importing CSV data to build an interactive dashboard that visualized savings percentages, expense breakdowns, and monthly progress toward financial goals. This project demonstrated expertise in data management and visualization to support personal financial decision-making.",
      imgUrl: dsprojImg2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    These are a few projects I have completed, both as part of
                    my coursework and as personal endeavors. These projects
                    represent my applied learning and exploration in various
                    domains, reflecting my commitment to practical experience
                    and self-driven growth. Each project has provided me with
                    valuable insights and skills, contributing to my ongoing
                    development and understanding in my field.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Machine Learning</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Data Analytics</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {web_dev_projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {machine_learning_projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {data_science_projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
