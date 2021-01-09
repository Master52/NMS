import Slider from '../components/slider/Slider'
import {slider_info} from './slider_data';


const Home = () => {
  return (
    <div className="p-1">
      <Slider items = {slider_info} />
    </div>
  )

}

export default Home;
