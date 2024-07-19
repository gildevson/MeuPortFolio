import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projetos</Title>
        <Desc>
          Sempre busco criar projetos que atendam a situações específicas e necessidades reais. Minha abordagem é focada em desenvolver soluções práticas e eficientes, adaptadas aos desafios de cada contexto. Aqui estão alguns dos projetos nos quais trabalhei.
        </Desc>
        <ToggleButtonGroup>
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>Todos</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>Todos</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>Aplicações WEB</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>Aplicações WEB</ToggleButton>
          }
          <Divider />
          {toggle === 'Desktop app' ?
            <ToggleButton active value="Desktop app" onClick={() => setToggle('Desktop app')}>Software Locais</ToggleButton>
            :
            <ToggleButton value="Desktop app" onClick={() => setToggle('Desktop app')}>Software Locais</ToggleButton>
          }
          <Divider />
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects.map((project) => (
            <ProjectCard
              key={project.id} // Adicione a propriedade key aqui
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
          {projects.filter((item) => item.category === toggle).map((project) => (
            <ProjectCard
              key={project.id} // Adicione a propriedade key aqui também
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
