import './App.css'
import Header from './components/Layouts/Header'
import Footer from './components/Layouts/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-50">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App
