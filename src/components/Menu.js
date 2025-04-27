import { Link } from 'react-router-dom';
import './Menu.css'; // si tienes estilos

const Menu = () => {
  return (
    <div className='menu1'>
      <h2 className='menu2'>Menú</h2>
      <ul className='menu3'>
        <li><Link to="/"><p>Sobre mí</p></Link></li>
        <li><Link to="/Educacion"><p>Educación</p></Link></li>
        <li><Link to="/Portafolio"><p>Portafolio</p></Link></li>
        <li><Link to="/Skills"><p>Skills</p></Link></li>
      </ul>
    </div>
  );
};

export default Menu;