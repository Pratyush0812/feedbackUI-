import { useState, useEffect } from 'react'
import Card from "./shared/Card"
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackForm() {
  const [text, setText] = useState('')  //component level state
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message,setMessage] = useState('')
  const {AddFeedback,feedbackEdit,updateFeedback,EditFeedback} = useContext(FeedbackContext)

  useEffect(()=>{
      if(feedbackEdit.edit===true){
         setBtnDisabled(false)
         setText(feedbackEdit.item.text)
         setRating(feedbackEdit.item.rating)
      }               // [] contains array of dedpendcies anything changes from [] changes the function runs //if empty runs on loading  
  },[feedbackEdit])
  const handleTextChange = (e)=>{
        setText(e.target.value)  
        if(e.target.value===''){
            setBtnDisabled(true)
            setMessage(null)
        }                  //e.target.value  here 'e' is the event
        else if(e.target.value.trim().length <10 ){ 
            setBtnDisabled(true)  
            setMessage('Text must be atleast 10 characters')        
        }
        else{
            setBtnDisabled(false)
            setMessage(null)
        }
  }
  const handleSubmit = (e)=>{
        e.preventDefault()
        if(text.trim().length>=10){
            const newFeedback = {
                text : text,
                rating : rating
            }
        
            if(feedbackEdit.edit===true){
              updateFeedback(feedbackEdit.item.id, newFeedback)
            }
            else{
            AddFeedback(newFeedback)
            }
            setText ('')
            setBtnDisabled(true)
            EditFeedback({},false)
          }
  }
  return (
    <Card >
       <form onSubmit={handleSubmit}>
          <h2>How would you rate your service with us</h2>
          <RatingSelect select = {(rating)=>{setRating(rating)}}/>
          <div className="input-group">
            <input onChange = {handleTextChange} type="text" placeholder="Write a review" value = {text}/>
            <Button type="submit" isDisabled = {btnDisabled}>Send</Button>
          </div>
          {message && <div className='message'>{message}</div>}
       </form>
    </Card>
  )
}

export default FeedbackForm
