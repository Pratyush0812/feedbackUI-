import PropTypes from 'prop-types'  //impt

function Header({text, bgColor, textColor}) {
  const headerStyles = {
    backgroundColor : bgColor, color : textColor
  }
  
  return (
    <header style = {headerStyles}>
       <div className = 'container'>
            <h2 className = 'mainHead'>{text}</h2>
       </div>
    </header>
  )
}
Header.defaultProps = {
    text : 'Feedback UI', //to set some default props when not passed in
    bgColor : 'rgba(0,0,0,0.4)',
    textColor : '#ff6a95'
}
Header.propTypes = {
    text : PropTypes.string,  //type checking of Props
    bgColor : PropTypes.string,
    textColor : PropTypes.string
}
export default Header
