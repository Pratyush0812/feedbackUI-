import { useContext } from 'react'
// import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)
  let average = feedback.reduce((acc,curr)=>{
        return acc + curr.rating
  },0)/feedback.length
  average = average.toFixed(2).replace(/^([\d,]+)$|^([\d,]+)\.0*$|^([\d,]+\.[0-9]*?)0*$/, "$1$2$3") //to remove trailing zeroes
  return (
    <div className = 'feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}
// FeedbackStats.propTypes = {
//     feedback : PropTypes.array.isRequired
// }
export default FeedbackStats
