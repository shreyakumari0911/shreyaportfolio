import stand from "../../standgirl.png"
export function About(){
    return(
        <div className="flex item-center justify-center">
            <div className="z-40"><img src={stand} style={{height: "700px"}} className="lg:ml-44 ml-8 h-96"/></div>
            <div className="w-full h-96 lg:h-80 mt-44 rounded-3xl mr-8 lg:mr-32 overflow-y-auto" style={{background: "#280c3f"}}>
                <div className="py-4 lg:py-16 px-10 lg:px-40">
                <div className="text-[#fcd34d] text-3xl lg:text-4xl font-bold text-wrap">About me</div>
                    <div className="text-white py-2 lg:py-4">Aspiring Web Developer | VIT Bhopal CSE (Cloud Computing) Student</div>
                    <div className="text-white">Enthusiastic and driven second-year Computer Science student at VIT Bhopal, specializing in Cloud Computing. Completed a web development internship project and equipped with certifications in HTML, CSS, JavaScript, and React. Eager to leverage academic knowledge and practical skills to contribute as a dynamic web developer. </div>
                    </div>
                </div>
        </div>

    );
}