import { Card } from "../Card/Card";

export function Projects(){
    return(
        <div className="flex flex-col ml-8">
            <div className="text-white bold text-4xl my-6 py-8 ml-6">Projects</div>
            <div className="flex gap-16 item-center justify-center">
                <div><Card title={"Swap Shop"} subtitle={"This is website to sell and buy product within College Campus."} linkProject={"https://famous-platypus-8922b2.netlify.app/shop.html"} github={"https://github.com/shreyakumari0911/Swap-Shop"} website={"https://famous-platypus-8922b2.netlify.app/"}/></div>
            </div>
        </div>

    );
}