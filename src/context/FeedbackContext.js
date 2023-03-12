import { createContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({children})=>{
        const [feedback, setFeedback] = useState([
            {
                id : 1,
                text : 'This is feedback item 1',
                rating : 10 
            },
            {
                id : 2,
                text : 'This is feedback item 2',
                rating : 9
            },
            {
                id : 3,
                text : 'This is feedback item 3',
                rating : 8 
            }
        ])
        const [feedbackEdit,setFeedbackEdit] = useState({
            item : {},
            edit : false                                       //so basically feedbackEdit is going to be a state which is an object with an item object and edit bool
        })
        const deleteFeedback = (id) => {
            if(window.confirm('Are you sure you want to delete?')){
                setFeedback(feedback.filter((item)=> item.id!==id))
            }
        }
        const AddFeedback = (newFeedback) =>{
            newFeedback.id = uuidv4();
            setFeedback([newFeedback,...feedback])
        }
        const updateFeedback = (id,updItem) =>{
            setFeedback(feedback.map((item)=>item.id===id ? {...item,...updItem} : item))
        }
        const EditFeedback = (item,flag) =>{
            setFeedbackEdit({
                item : item,
                edit : flag
         })}
        return <FeedbackContext.Provider value = {{
            feedback : feedback,
            deleteFeedback : deleteFeedback,
            AddFeedback : AddFeedback,
            EditFeedback : EditFeedback,
            feedbackEdit,
            updateFeedback          //short hand illustration
        }}>
            {children}
        </FeedbackContext.Provider>
}

export default FeedbackContext
