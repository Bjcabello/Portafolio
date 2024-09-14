import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Inquiry from './components/Inquiry';
import SocialLinks from './components/SocialLinks';
import Header from './components/Header';

function App() {
  return (
    <div
      className="container"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.06)" }}
    >
      <Header />
      {/* Sección del perfil */}
      <Profile />

      {/* Sección de habilidades */}
      <Skills />

      {/* Sección de proyectos */}
      <Projects />

      {/* Sección de contacto */}
      <Inquiry />

      {/* Sección de redes sociales */}
      <SocialLinks />
    </div>
  );
}

export default App;
