//rafce
//impt

import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
        </header>
    )
}

//CSS 

// const headingStyle ={
//     color:'red',
//     background:'black'
// }

Header.defaultProps ={
    title:'Task Tracker',
}

Header.protoTypes ={
    title: PropTypes.string.isRequired,
}



export default Header
