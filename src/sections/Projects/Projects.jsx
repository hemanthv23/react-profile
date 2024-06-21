import styles from './ProjectsStyles.module.css';
import food from '../../assets/food.jpg';
import weather from '../../assets/weather.jpg';
import spotify from '../../assets/spotify.jpg';
import profile from '../../assets/profile1.jpg';
import netflix from '../../assets/netflix.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={food}
          link="https://github.com/hemanthv23/FOOD-APP/tree/main"
          h3="Fresh Meals"
          p="Omnifood Restaurant"
        />
        <ProjectCard
          src={netflix}
          link="https://github.com/hemanthv23/SimpNetflix"
          h3="Simple Login"
          p="Netflix Page"
        />
        <ProjectCard
          src={weather}
          link="https://github.com/hemanthv23/WEATHER-APP/tree/main"
          h3="Weather Forecast"
          p="Weather App"
        />
        <ProjectCard
          src={spotify}
          link="https://github.com/hemanthv23/SPOTIFY-APP/tree/main"
          h3="Music"
          p="Spotify"
        />
        {/* <ProjectCard
          src={profile}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="My Profile"
          p="Profile"
        /> */}
      </div>
    </section>
  );
}

export default Projects;