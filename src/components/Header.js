import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
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
