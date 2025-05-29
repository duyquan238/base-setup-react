import AppRouter from './routes/AppRouter';

function App() {
  return (
    <>
      <div className="bg-gray-100 p-6 rounded-lg flex justify-center items-center min-h-screen flex-col">
        <AppRouter />
      </div>
    </>
  );
}

export default App;
