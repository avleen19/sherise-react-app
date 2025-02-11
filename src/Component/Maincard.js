import React from 'react'
import Card from './Card'
import './Maincard.css'
import { useNavigate } from 'react-router-dom'
export default function Maincard() {
  const navigate=useNavigate();
  return (
    <div>
    <h1 id='focus'>OUR FOCUS AREAS</h1>
    <div>
    <div className="flexbox">
      <div className="item">
      <Card imgUrl="https://t3.ftcdn.net/jpg/05/92/51/62/360_F_592516238_AF7eIDYGKm5Y3UYp8Gg8XNsvP5LZb0q0.jpg" title="Helathy mothers,healthy Future" descr="A healthy pregnancy provides the mother's well-being and lays the foundation for a healthy future for the child."/>
      <button  className='btn' onClick={()=>{navigate('/health')}} >Read more</button>
      </div>
      <div className="item">
      <Card imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjVoH_xnYZ3J6rh43DabX_GFQLnT4YJwlJzQ&s" title="Women Equality and empowerment" descr="A woman with a voice is, by definition, a strong woman to transform the structures that reinforce gender inequality."/>
      <button  className='btn' onClick={()=>{navigate('/women')}} >Read more</button>
    
      </div>
      <div className="item">
      <Card imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMBQw4O7FwHnIQo26B4sb3CHElOtrLsxOjQ&s" title="Girl Child Education" descr="There is no greater pillar of stability than a strong and educated woman. Education empowers girls by providing them with knowledge, skills, and opportunities to reach their full potential. "/>
      <button  className='btn' onClick={()=>{navigate('/education')}} >Read more</button>
    
      </div>
      <div className="item">
      <Card imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJcwXX2g5Bu7PZZmqVKf_rCCPhZo_LyGwH9g&s" title="Nourish girl child" descr="Nourish girls for better future and upcoming healthy generation.The responsiblity for women health reflects upon country's stability and empowerment."/>
      <button  className='btn' onClick={()=>{navigate('/nourish')}} >Read more</button>
    
    </div>
  </div>
  
  </div>
    </div>
  )
}
