import './App.css';
import { Card, Footer, Nav, Article, Gallery } from './component/index';
import imgs from './img/index';
import { HomeIcon, CashIcon,MapIcon,UserGroupIcon, SparklesIcon, ChatAltIcon  } from '@heroicons/react/outline';


function App() {
  const images = [
    imgs[0],
    imgs[1],
    imgs[2],
    imgs[3],
    imgs[4],
    imgs[5],
    imgs[6],
    imgs[7],
    imgs[8],
  ];

  return (
    <div className='App'>
      <main className='main'>
        <Nav />

        <div className='titleContainer'>
          <div className='title'>
            <h1>Hoteles.com</h1>
            <p>La mejor página para reservar tus hoteles</p>
          </div>
          <span className='subtitle'>
            Nos dedicamos a hacer tu hospedaje más sencillo
          </span>
        </div>

        <Article>
          <section className='cardContainer'>
            <Card
              title={'Los mejores Hoteles'}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              "
              img={<HomeIcon className='cardImg' />}
            />
            <Card
              title={'Precios Accesibles'}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              "
              img={<CashIcon className='cardImg' />}
            />
            <Card
              title={'Hoteles en tu Zona'}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              "
              img={<MapIcon className='cardImg' />}
            />
            <Card
              title={'Soporte 24/7'}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              "
              img={<UserGroupIcon className='cardImg' />}
            />
            <Card
              title={'Valorados por los Usuarios'}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              "
              img={<SparklesIcon className='cardImg' />}
            />
            <Card
              title={'Contáctanos'}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              "
              img={<ChatAltIcon className='cardImg' />}
            />
          </section>

          <Gallery imgs={images} />
        </Article>

        <Footer />
      </main>
    </div>
  );
}

export default App;
