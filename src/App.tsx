import { AuthGoogleProvider } from './contexts/AuthGoogleContext';

function App() {
  return (
    <AuthGoogleProvider>
      <h1>Olá mundo</h1>
    </AuthGoogleProvider>
  );
}

export default App;
