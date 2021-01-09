import Slider from '../components/Slider'


const Home = () => {

  var data = [
    {
      img: "http://www.itcsales.co.uk/blog/wp-content/uploads/2018/05/Free-Desktop-Wallpaper-HD-1920-x-1080-3.jpg",
      content: "TEST",

    },

    {
      img: "http://www.itcsales.co.uk/blog/wp-content/uploads/2018/05/Free-Desktop-Wallpaper-HD-1920-x-1080-3.jpg",
      content: "TEST1"

    }
  ]
  ;

  return (
    <div className="p-1">
      <Slider items = {data} />
    </div>
  )

}

export default Home;
