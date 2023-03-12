import { useContext } from 'react'
import {motion,AnimatePresence} from 'framer-motion'
// import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../context/FeedbackContext'
function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)   //In {} we can have access to anything put in the value of the feedback provider 
  if(!feedback ||feedback.length===0){
    return (<p>NO FEEDBACK YET</p>)
  }
  return (
    <div class = 'feedback-list'>
        <AnimatePresence>
        {feedback.map((item)=>(
            <motion.div key = {item.id} initial = {{opacity : 0}} animate = {{opacity : 1}} exit = {{opacity : 0}}>
            <FeedbackItem key = {item.id} item = {item} />
            </motion.div>
        ))}
        </AnimatePresence> 
    </div>
  )
  // return (
  //   <div class = 'feedback-list'>
  //       {feedback.map((item)=>(
  //           <FeedbackItem key = {item.id} item = {item} handleDelete = {handleDelete}/>
  //       ))}
  //   </div>
  // )
}
// FeedbackList.propTypes = {
//     feedback : PropTypes.array.isRequired //we can also define how the array should look 
// }
// FeedbackList.propTypes = {
//     feedback : PropTypes.arrayOf(
//         PropTypes.shape({
//             id : PropTypes.number.isRequired,
//         })
//     )
// }

export default FeedbackList
