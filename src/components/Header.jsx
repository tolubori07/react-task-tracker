/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({title, onToggle, showAdd}) => {
const location = useLocation()
  return (
    <header className='header'>
        <h1 className='text-3xl text-white'>{title}</h1>
{location.pathname==='/' && <Button color={showAdd? 'steelblue': 'green'} text={showAdd? 'close': 'Add'} onClick={onToggle}/>}
    </header>
  )
}
Header.defaultProps = {
    title: 'Task',
}
Header.propTypes={
    title: PropTypes.string
}

// css in file is possible: pass in the vbariable in a style attribute with curly braces around the name
// const styles = {
//     color:'red',
//     backgroundColor:'black'
// }

export default Header