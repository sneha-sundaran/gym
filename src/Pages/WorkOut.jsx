import React, { useEffect } from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addCategory, deleteCategory, getCategory } from '../service/apiCalls';
function WorkOut() {
  const [showVideo, setShowVideo] = useState(false);

  const handleCloseVideo = () => setShowVideo(false);
  const handleShowVideo = () => setShowVideo(true);
// const [smShow, setSmShow] = useState(false);


// const[inputVideoDetails,setinputVideoDetails]=useState({image:'',url:''})
// console.log(inputVideoDetails);
const[addVideoDetails,setAddVideoDetails]=useState([])
const [inputValue,setInputValue]=useState(" ")
console.log(inputValue);
const [categoryname,setCategoryName]=useState([])
console.log(categoryname);

useEffect(() => {
CategoryShow()


}, [])

  
  

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


const handleAddCategory=async()=>{

if(inputValue){
// alert('do api call')

try {
await addCategory({ name:inputValue ,getAllVideos:[]}); 
setInputValue('');
setShow(false);
CategoryShow()
handleClose()
} catch (error) {
console.error(error);
alert('Failed to add category');
}
    } else {
      alert('Please enter a category');
    }
     
  }
  const CategoryShow=async()=>{
    try{

    const  result = await getCategory()
    setCategoryName(result.data)




    }catch(err){
      console.log(err);
      
    }
  }
//   const handleAddVideos=async(categoryid)=>{

//     setSmShow(true)
//     console.log(addVideoDetails);
    
//     const  idCategory=addVideoDetails.filter(item=>item.id)
//     console.log(idCategory);
//     try{
//    await   videoAddToCategory(categoryId,inputVideoDetails)
//       setAddVideoDetails({image:'',url:''})
//       setSmShow(false)
//       CategoryShow()
//       // categoryVideoId=getAllVideos.push()
//     }
// catch{
  
// }

//   }

const deleteCatey=(categoryId)=>{
  console.log(categoryId);

  setAddVideoDetails(addVideoDetails)
  console.log(addVideoDetails);
  
try{

   deleteCategory(categoryId)
   CategoryShow()

}catch(err){

  console.log(err);
  

}
}



  return (
    <>
    <div className='d-flex'  style={{justifyContent:'center',alignItems:'center',}}>
      <h3 className='' style={{fontFamily:'"Edu AU VIC WA NT Arrows","cursive"',}}>Add Workouts </h3> 
     <button onClick={handleShow} style={{height:'50px',width:'50px',borderRadius:'50%',backgroundColor:'gray',marginLeft:'20px',border:'none'}}><i className="fa-brands fa-plus ps-5 " style={{color:'white',marginLeft:'-45px'}} ></i></button>
    </div>
    <div className='container-fluid mt-3 ' >
     {  


      categoryname?.map((item)=>(
      <div key={item.id} className='border border-light border-3 rounded p-3 mb-3 category'>
       <div className='d-flex justify-content-between'>

         <h5>{item.name}</h5>
        <div className='buttons'>
           <button  style={{height:'25px',width:'25px',borderRadius:'50%',backgroundColor:'gray',marginLeft:'20px',border:'none',marginLeft:'950px'}}><i className="fa-brands fa-plus ps-5 " style={{color:'white',marginLeft:'-49px',fontSize:'10px',marginTop:'-19px'}} ></i></button>
  
           <button onClick={()=>deleteCatey(item.id)} className='btn'><i className='fa-solid fa-trash'></i></button>
        </div>
       </div>

     </div>
      ))   
     
     }
 
    </div>

    <div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        
    
        </Modal.Header>
      
    
        <Modal.Body>
        <Form.Control
        type="text"
        id="category"
        aria-describedby="passwordHelpBlock"
        style={{height:'30px',width:'350px',marginLeft:'4px'}}
        placeholder='Enter the Category'
        onChange={(e)=>setInputValue(e.target.value)}

      />
        </Modal.Body>
        <Modal.Footer style={{marginRight:'200px'}}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>
           Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    <div>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseVideo}>
            Close
          </Button>
          <Button variant="primary" onClick={handleShowVideo}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
    
  )
}

export default WorkOut