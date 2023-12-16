import logo from './girl.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import { Nav } from './component/nav/nav';
import { About } from './component/about/about';
import { Myskills } from './component/myskills/myskills';
import { Projects } from './component/projects/project';
import { Contact } from './component/contact/contact';
function App() {
  return (
    <div className="App">
      <div className='sticky top-0 z-50 bg-opacity-10 bg-[#280c3f]'><Nav/></div>
      
      <div className='flex flex-wrap'>
      <div>
        
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
      </div>
      <div className='flex'>
      <div className='flex-1 w-1/2 text-[#fcd34d] font-bold mt-10 lg:mt-44 mx-10 text-4xl'>
      <p>Hi! I'm Shreya Web Developer</p>
      <div className='text-white  text-sm mt-8'>
      <p className='tracking-widest'>To be a web developer is such an amazing career. I can help everyone build their business, <br/>and it brings me so much happiness.
      So, let me help you!
      </p>
      </div>
      <div className='flex gap-4 mt-8'>
      <div><button className=' text-base/4 lg:text-lg bg-yellow-300 text-white font-bold py-2 px-6  border-b-4 rounded-full cursor-pointer'>Hire me</button></div>
      <div><a className='text-base/4 lg:text-lg bg-transparent hover:bg-white-500 text-yellow-700 font-semibold py-2 px-6 border border-b-4 border-yellow rounded-full' href='https://drive.google.com/file/d/19vL_S0f5FYL1FbMXtc7afL41-uMRPhnn/view?usp=sharing'><FontAwesomeIcon icon={faDownload} />Download CV</a></div></div>
      <div className='mt-8'><Contact/></div>
      </div>
      
      <div className="flex-2 App-header">
        <img src={logo} className="relative hidden lg:block lg:top-8 left-90 right-9" alt="logo" style={{width: '700px', height: '700px'}} />
      </div>
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="skill">
      <Myskills/>
      </div>
      <div id="project"><Projects/></div>
      </div>
      
  
  );
}

export default App;
