import { CardFlipFlop } from "../cardFlipFlop/cardFlipFlop";
import program from "../../program.jpg";
import webdev from "../../webdev.jpg"

export function Myskills(){
    const ProgrammingLanguages = (
        <>
        <div>
            <div>Python</div>
            <div>Javascript</div>
        </div>
        </>
    )
    const WebDevelopment =(<>
        <div>
            <div>HTML</div>
            <div>CSS</div>
            <div>tailwindcss</div>
            <div>Javascript</div>
            <div>ReactJS</div>
        </div>
    </>)
    const ProgramHeader=(
        <div>
            <div><img src={program}/></div>
            <div>Programming Languages</div>
        </div>
    )
    const WebHeader=(
        <div>
            <div><img src={webdev}/></div>
            <div>Web Development</div>
        </div>
    )
    return(
        <div className="flex flex-col ml-8">
        <div className="text-white bold text-4xl my-6 py-8 ml-6"> My Skills</div>
        <div className="flex gap-16 item-center justify-center flex-wrap">
            <div className=""><CardFlipFlop title={"Programming Language"} subtitle={""} content={ProgrammingLanguages}/></div>
            <div className=""><CardFlipFlop title={"Web Development"} subtitle={"MERN"} content={WebDevelopment}/></div>
            <div className=""><CardFlipFlop title={"Data Structures and Algorithm"}/></div>
            <div className=""><CardFlipFlop title={"AI & ML"}/></div>
        </div>
        </div>

    );
}