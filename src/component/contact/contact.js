import { Github } from "../../svg/github";
import { Linkedin } from "../../svg/linkedin";
import {Leetcode} from "../../svg/leetcode";
import { Hackerrank } from "../../svg/hackerrank";
import { Email } from "../../svg/email";
export function Contact(){
    return(
        <div className="flex item-start gap-8">
            <div><a href="https://www.linkedin.com/in/shreya-k-955819221/"><Linkedin/></a></div>
            <div><a href="https://github.com/shreyakumari0911/"><Github/></a></div>
            <div><a href="https://leetcode.com/shreyakumari0911/"><Leetcode/></a></div>
            <div><a href="https://www.hackerrank.com/profile/shreyakumari0911"><Hackerrank/></a></div>
            <div><a href="mailto:shreyaaasingh8@gmail.com"><Email/></a></div>
        </div>
    )
}