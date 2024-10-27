import { useState } from "react";
import "/src/style.css";
const Accordions = ({title,content}) => {
    const [isActive, setIsActive] = useState(false);
  return (
    <section className="accordion-card" key={Math.random()}>
        <div className="header" onClick={() => setIsActive(!isActive)}>{title}
        <p className="icon">{isActive  ? '-' : '+'}</p>
        </div>


        <div className="content">
            {isActive && <p className="card-info">{content}</p>}
        </div>
    </section>
  )
}

export default Accordions
