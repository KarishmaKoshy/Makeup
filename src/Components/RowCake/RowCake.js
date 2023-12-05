import React ,{useEffect,useState}from 'react'
import './RowCake.css'
import axios from '../../axios'
import { useNavigate } from 'react-router-dom'


 function RowCake(props) {
  const [make,setMakeup]=useState([])
 const navigate=useNavigate()



  useEffect(()=>{
    axios.get(props.url).then(response=>{
   
      setMakeup(response.data)
    })
  }

  ,[])
  

  return (
    <>
    <div className='row '>
      <h1 className='mt-3 pt-3 text-white title' >{props.title}</h1>
      <div className='posters '>
      {make.map((obj)=>{
      
      return(
        <div className='card cards col-4 col-md-2  me-2' key={obj.id} onClick={()=>{navigate(`${obj.id}`)}}>
        <img className='poster ' src={`${obj ? obj.image_link : null }`} alt='img'></img>
        <div className="card-body"><hr></hr>
     <h5 className="card-title">{obj ? obj.name : null }</h5><hr></hr>
      <p className="card-text">{obj  ? obj.brand : null }</p>
      <p className='lead'>$ {obj ? obj.price : null }</p>
      <p className="card-text">{obj ? obj.product_colors.colour_name : null }</p>
      
     
  </div>
        
        </div>
      )}

      

      )}
      </div>
<div>

</div>
    </div>
    
    </>
  )
}
// filter

export default RowCake
