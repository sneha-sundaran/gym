import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addDailtChart } from '../service/apiCalls';
function DiatPlan() {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [chartDeatils,setchartDeatils]=useState({workingTime:'',breakFast:" ",Lunch:'',dinner:''})

const[getDetails,setGetDeatils]=useState([])

console.log(chartDeatils);

const   handleAddChart=async()=>{

const{workingTime,breakFast,Lunch,dinner}=chartDeatils

try{  

  const result= await  addDailtChart(chartDeatils)

  setGetDeatils(result.data)

}catch(err){

  console.log(err);
    
   }
    handleClose()
  }
  return (
    <>
    <div className=''>

      <div className='addChart'>

      <button onClick={handleShow} style={{height:'50px',width:'50px',borderRadius:'50%',backgroundColor:'gray',marginLeft:'20px',border:'none'}}><i className="fa-brands fa-plus ps-5 " style={{color:'white',marginLeft:'-45px'}} ></i></button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control
        type="text"
        id="StatingTime"
        aria-describedby="StatingTime"
        style={{height:'30px',width:'350px',marginLeft:'4px',marginTop:'10px'}}
        placeholder='Enter the Workout Time'
        onChange={(e)=>setchartDeatils({...chartDeatils,workingTime:e.target.value})}

      />   <Form.Control
    type="text"
    id="category"
    aria-describedby="passwordHelpBlock"
    style={{height:'30px',width:'350px',marginLeft:'4px',marginTop:'10px'}}
    placeholder='Enter the Break Fast'
    onChange={(e)=>setchartDeatils({...chartDeatils,breakFast:e.target.value})}

  />  <Form.Control
  type="text"
  id="category"
  aria-describedby="passwordHelpBlock"
  style={{height:'30px',width:'350px',marginLeft:'4px',marginTop:'10px'}}
  placeholder='Enter the Lunch'
  onChange={(e)=>setchartDeatils({...chartDeatils,Lunch:e.target.value})}

/>  <Form.Control
        type="text"
        id="category"
        aria-describedby="passwordHelpBlock"
        style={{height:'30px',width:'350px',marginLeft:'4px',marginTop:'10px'}}
        placeholder='Enter the Dinner'
        onChange={(e)=>setchartDeatils({...chartDeatils,dinner:e.target.value})}

      />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddChart}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
     </>
  )
}

export default DiatPlan