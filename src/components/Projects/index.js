import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../data/translations';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  const { language } = useLanguage();
  const t = translations[language].projects;
  const tData = translations[language].projectsData || [];
  const translatedProjects = projects.map((project, index) => ({
    ...project,
    ...(tData[index] || {})
  }));
  
  return (
    <Container id="projects">
      <Wrapper>
        <Title>{t.title}</Title>
        <Desc>
          {t.description}
        </Desc>
        <ToggleButtonGroup>
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>{t.all}</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>{t.all}</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>{t.webApps}</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>{t.webApps}</ToggleButton>
          }
          <Divider />
          {toggle === 'Desktop app' ?
            <ToggleButton active value="Desktop app" onClick={() => setToggle('Desktop app')}>{t.desktopApps}</ToggleButton>
            :
            <ToggleButton value="Desktop app" onClick={() => setToggle('Desktop app')}>{t.desktopApps}</ToggleButton>
          }
          <Divider />
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && translatedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
          {translatedProjects.filter((item) => item.category === toggle).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
