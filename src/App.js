import './App.css';
import { SearchIcon } from '@heroicons/react/outline';

function App() {
  return (
    <div className='App'>
      <main className='main'>
        <nav className='navBar'>
          <div className='navItem'>

<span className='navBrand'>Hoteles.com</span>


          </div>

          <ul className='navItem navList'>
            <li className='listItem'>
              <a href='' className='navLink'>
                Principal
              </a>
            </li>
            <li className='listItem'>
              <a href='' className='navLink'>
                Hoteles
              </a>
            </li>
            <li className='listItem'>
              <a href='' className='navLink'>
                Sobre Nosotros
              </a>
            </li>
            <li className='listItem'>
              <a href='' className='navLink'>
                Soporte
              </a>
            </li>
            <li className='listItem'>
              <form action='/search'>
                <input type='text' />
                <button type='submit'>
                  <SearchIcon width='20' />
                </button>
              </form>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
}

export default App;
