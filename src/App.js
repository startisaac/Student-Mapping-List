
import react from "react"
import './App.css';
import pix1 from "./Image/map/pix1.jpg"
import pix2 from "./Image/map/pix2.jpg"
import pix3 from "./Image/map/pix3.jpg"
import pix4 from "./Image/map/pix4.jpg"
import pix5 from "./Image/map/pix5.jpg"
import pix6 from "./Image/map/pix6.jpg"
import pix7 from "./Image/map/pix7.jpg"
import pix8 from "./Image/map/pix8.jpg"
import pix9 from "./Image/map/pix9.jpg"
import pix10 from "./Image/map/pix10.jpg"


function App (){

  const lsetf = [
    {
      image: <div><img src={pix1} className="pix" /></div>,
      name: "biola",
      age:15,
      sex:"Female"
    },
    {
      image: <div><img src={pix2} className="pix" /></div>,
      name: "victor",
      age:30,
      sex:"Male"
    },
    {
      image: <div><img src={pix3} className="pix" /></div>,
      name: "James",
      age:40,
      sex:"Male"
    },
    {
      image: <div><img src={pix4} className="pix" /></div>,
      name: "wura",
      age:20,
      sex:"Female"
    },
    {
      image: <div><img src={pix5} className="pix" /></div>,
      name: "Grace",
      age:26,
      sex:"Female"
    },
    {
      image: <div><img src={pix6} className="pix" /></div>,
      name: "Nikolasi",
      age:45,
      sex:"Female"
    },
    {
      image: <div><img src={pix7} className="pix" /></div>,
      name: "favour",
      age:26,
      sex:"female"
    },
    {
      image: <div><img src={pix8} className="pix" /></div>,
      name: "Tolu",
      age:19,
      sex:"female"
    },
    {
      image: <div><img src={pix9} className="pix" /></div>,
      name: "Oyimbo",
      age:29,
      sex:"Male"
    },
    {
      image: <div><img src={pix10} className="pix" /></div>,
      name: "jumoke",
      age:31,
      sex:"feMale"
    },
  ]

  console.log(lsetf)
  return(
    <div className="cardholder">
      
      {lsetf.map((props)=>(
        <div className="card">
        <div className="photo">image:{props.image}</div>
        <div>Name:{props.name}</div>
        <div>Age:{props.age}</div>
        <div>Sex:{props.sex}</div>
        
      </div>
      ))}

    </div>
 
  )
}

export default App



