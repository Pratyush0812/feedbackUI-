import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card"
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackItem({item}) {
  const {deleteFeedback , EditFeedback} = useContext(FeedbackContext)
  return (
      <Card>
        <div className="num-display">{item.rating}</div>   {/* these are the children of the card */}
        <button onClick={()=>deleteFeedback(item.id)} className = 'close'>
            <FaTimes color='purple' />
        </button>
        <button onClick={()=>EditFeedback(item,true)} className='edit'>
            <FaEdit color='purple' />
        </button>
        <div className = "text-display">{item.text}</div>
      </Card>
  )
}
FeedbackItem.propTypes = {
    item : PropTypes.object.isRequired
}
export default FeedbackItem
