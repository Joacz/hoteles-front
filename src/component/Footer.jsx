import React from 'react';

export const Footer = () => {
  return (
    <footer className='footerContainer'>
      <div className='footerLinks'>
        <ul className='footerLinksContainer'>
          <li className='footerLink'>
            <a href='/contacto'>Contacto</a>
          </li>
          <li className='footerLink'>
            <a href='/contacto'>Soporte</a>
          </li>
          <li className='footerLink'>
            <a href='/contacto'>Ayuda</a>
          </li>
          <li className='footerLink'>
            <a href='/contacto'>Preguntas Frecuentes</a>
          </li>
        </ul>

        <ul className='footerLinksContainer'>
          <li className='footerLink'>
            <a href='/contacto'>Hoteles</a>
          </li>
          <li className='footerLink'>
            <a href='/contacto'>Galería</a>
          </li>
          <li className='footerLink'>
            <a href='/conktacto'>Cuenta</a>
          </li>
        </ul>

        <ul className='footerLinksContainer'>
          <li className='footerLink'>
            <a href='/contacto'>Desarrollador</a>
          </li>
          <li className='footerLink'>
            <a href='/contacto'>Proyecto de Github</a>
          </li>
          <li className='footerLink'>
            <a href='/contacto'>REST API</a>
          </li>
          <li className='footerLink'>
            <a href='/contacto'>Discord</a>
          </li>
        </ul>
        <span>
          Derechos reservados a Joaquín Gómez | Github:{' '}
          <a href='https://github.com/Joacz/'>https://github.com/Joacz/</a> |
          Discord tag: Joaquin#6427
        </span>
      </div>
    </footer>
  );
};
