import { GlobalStyle } from './components/GlobalStyle';
import Header from './components/Header';
import { AuthGoogleProvider } from './contexts/AuthGoogleContext';

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthGoogleProvider>
        <Header />
      </AuthGoogleProvider>
    </>
  );
}

export default App;
