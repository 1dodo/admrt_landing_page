import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App bg-sky-100">
      <Navbar />
      <div className='bg-sky-100'>
        <Home />
      </div>
      <footer className='bg-[#007AFF]'>
        <div className='max-w-screen-xl mx-auto p-3 md:p-10'>
          <h1 className='text-white text-sm md:text-xl '>
            By joining the AdMrt waitlist, you'll be the first to experience a transformative approach to advertising. Your email is safe with us, and we'll never share it with third parties. Stay tuned for exciting updates!
          </h1>
        </div>
      </footer>
    </div>
  );
}

export default App;
