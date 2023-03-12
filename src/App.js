import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';   // /about & /#about(HashRouter)
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext'; //we are using brackets coz not default export
function App(){
    return (
        <FeedbackProvider>
        <Router>
        <Header />
        <div className = 'container'>
            <Routes>
                <Route exact path ='/' element = {
                    <>
                        <FeedbackForm />
                        <FeedbackStats />
                        <FeedbackList />
                    </>
                } />     {/* exact is imp vrna /about mei bhi / match krke chal jaayega */}
                {/* <Route path='/about'>This is the about route</Route> */}
                <Route path='/about' element={<AboutPage />}/>
            </Routes>
            <AboutIconLink />
        </div>
        </Router>
        </FeedbackProvider>
    )
}
export default App