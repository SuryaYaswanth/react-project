import Accordions from "./components/Accordions"
import { accordionData } from "./util/content.js";

const App = () => {
  return (
    <div className="accordion">
      {accordionData.map(({title, content}) => (
            <Accordions title={title} content={content} />
      ))}
     
    </div>
  )
}

export default App
