import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = (e) => {
        console.log('clicked');
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Welcome to Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
} 


// CSS IN JS
// const headerStyle = {
//     color: 'red', backgroundColor: 'black'
// }

export default Header
