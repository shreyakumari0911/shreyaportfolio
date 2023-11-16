import "../cardFlipFlop/cardFlipFlop.css"
export function CardFlipFlop({title, subtitle, content}){
    return(<>
     <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <div>
        {title}
      </div>
      <div>{subtitle}</div>
    </div>
    <div class="flip-card-back">
      {content}
    </div>
  </div>
</div> 
    </>)

}