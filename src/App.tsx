import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { GlobalStyle } from './components/GlobalStyle';
import Header from './components/Header';
import { AuthGoogleProvider } from './contexts/AuthGoogleContext';
import { GameContextProvider } from './contexts/GameContext';

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthGoogleProvider>
        <GameContextProvider>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </GameContextProvider>
      </AuthGoogleProvider>
    </>
  );
}

export default App;
