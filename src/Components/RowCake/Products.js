import React ,{useEffect,useState}from 'react'
import './RowCake.css'
import axios from '../../axios'
import Banner from '../Banner/Banner'
import { Link } from 'react-router-dom'
import './NavBar.css'





 function Products(props) {
  const [make,setMakeup]=useState([])
  const [test,setTest]=useState([])



  useEffect(()=>{
    axios.get(props.url).then(response=>{
   
      setMakeup(response.data)
    })
  }
  

  ,[props.url])
  
  function setpost(id){
    setTest([...test,id])
  }
  return (
    <>
     <div>
      <nav className="navbarr navbar navbar-expand-lg fixed-top ">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse me-auto" id="navbarSupportedContent">
    <h3 className=' name me-3' >Makeup</h3>

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
    
       
        <li className="nav-item">
        <Link className=" text-white nav-link active" aria-current="page" to='/'>Blush</Link>
        </li>
        <li className="nav-item">
        <Link className=" text-white nav-link active" aria-current="page" to='/Bronzer'>Bronzer</Link>
        </li>
        <li className="nav-item">
        <Link className=" text-white nav-link active" aria-current="page" to='/Eyeshadow'>Eyeshadow</Link>
        </li>
        <li className="nav-item">
        <Link className=" text-white nav-link active" aria-current="page" to='/Eyeliner'>Eyeliner</Link>
        </li>
        <li className="nav-item">
        <Link className=" text-white nav-link active" aria-current="page" to='/Lipsticks'>Lipsticks</Link>
        </li>
        
        <li className="nav-item">
        <Link className=" text-white nav-link active" aria-current="page" to='/LipLiner'>Lip Liner</Link>
        </li>
        <li className="nav-item">
        <Link className=" text-white nav-link active" aria-current="page" to='/Mascara'>Mascara</Link>
        </li>
        <li className="nav-item">
        <Link className=" text-white nav-link active" aria-current="page" to='/NailPolish'>Nail Polish</Link>
        </li>
     
     
      </ul>

    </div>
    <h3 className='mx-4'><button type="button" className=" btn btn-light btn-lg   nav-link active mx-auto" data-bs-toggle="modal" data-bs-target="#myModal" style={{position:'fixed'}}>
        <i className="bi bi-cart" style={{backgroundColor:'rgb(206, 192, 198)'}}></i>
        </button></h3>
  </div>
  
</nav>
    </div>
    <Banner/>

    
<div className="modal"  id="myModal">
  <div className="modal-dialog modal-lg" >
    <div className="modal-content modal-lg"  >

      <div className="modal-header">
        <h4 className="modal-title title ">  Cart</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div className="modal-body">
      {test.map((props)=>{
      
      return (
  
        <div className=' mt-3 d-flex justify-content-center '>
        <div className='card ' >
       
        <img  src={`${props ? props.image_link : null }`} alt='product'></img>
        <div className="card-body"><hr></hr>
     <h5 className="card-title">{props? props.name : null }</h5><hr></hr>
      <p className="card-text">{props  ? props.brand : null }</p>
      <p className='lead'>$ {props ? props.price : null }</p>
      
      <button className="btn btn-lg buttons d-flex justify-content-center" 
      onClick={(e)=>{
        setTest(test.filter(obj2 => {
          let temp;
          if (obj2.id !== props.id){
            temp = obj2
          }
          return temp;
        }));
      }} 
      
      ><i className="bi bi-trash"></i></button>
      
     
    
     
    </div>
        </div>
        </div>
        
      )}

      )}
        
      </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
    <div className='row  ' >
      <h1 className='my-5 pt-5 text-white title d-flex justify-content-center' >{props.title}</h1>
     
      
      {make.map((obj)=>{
      
      return(
        <div className='posters col-6 col-md-4 col-lg-2 '>
        <div className='card  cards cardss  me-2' >
        <img  src={`${obj ? obj.image_link : null }`} alt='product'></img>
        <div className="card-body"><hr></hr>
     <h5 className="card-title">{obj ? obj.name : null }</h5><hr></hr>
      <p className="card-text">{obj  ? obj.brand : null }</p>
      <p className='lead'>$ {obj ? obj.price : null }</p>
      <p className="card-text">{obj ? obj.product_colors.colour_name : null }</p>

        <button className="btn  buttons d-flex justify-content-center " onClick={()=>setpost(obj)}>Add to Cart</button>

     
  </div>
        
        </div>
        </div>
        
    

      )}

      

      )}
      

    </div>
    
    </>
  )
}


export default Products
