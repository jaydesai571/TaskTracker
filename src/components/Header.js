import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAddTask}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAddTask ? 'red' : 'green'} text={showAddTask ? 'Hide' : 'Add Task'} onClick={onAdd} />
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
