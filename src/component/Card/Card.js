import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import html2canvas from 'html2canvas';
import { Github} from '../../svg/github';
import {Globe} from '../../svg/globe';
import { useEffect, useRef } from 'react';

export function Card({title, subtitle, linkProject, github, website}){
    const captureRef = useRef(null);
    const captureWebpage = () => {
        if (captureRef.current) {
          html2canvas(captureRef.current)
            .then((canvas) => {
              // Convert canvas to data URL
              const imageUrl = canvas.toDataURL();
              console.log('Image URL:', imageUrl);
    
              // You can now use 'imageUrl' in your application as needed.
            })
            .catch((error) => {
              console.error('Error capturing webpage:', error);
            });
        }
      };
    useEffect(()=>{
        captureWebpage();
    }, [linkProject])
    return(<>
    <div className="flex flex-col ml-4" style={{width: "300px", height: "400px"}}>
        <div className="flex-1 rounded-t-3xl">
        <div ref={captureRef} className='overflow-hidden z-[-10]'>
        {/* Include the webpage content here */}
        <iframe
          title="Webpage"
          src={linkProject}
          width="300px"
          height="300px"
          scrolling="no"  // This hides the scrollbars
          style={{border: '10px solid white', borderBottom: 'none', borderRadius: "10px"}}
        />
      </div>
        </div>
        <div className="flex-2 w-full text-[#fcd34d] bg-[#280c3f] px-4 rounded-b-3xl">
            <div>
                <h2 className='bold text-2xl text-center py-2'>{title}</h2>
                <p className='text-white text-justify py-3'>{subtitle}</p>
            </div>
            <div className="flex py-4 px-8 gap-36">
                <div><a href={github}><Github/></a></div>
                <div><a href={website}><Globe/></a></div>
            </div>
        </div>
    </div>
    </>)
}