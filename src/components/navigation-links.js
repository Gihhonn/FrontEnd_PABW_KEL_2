import PropTypes from 'prop-types'

import styles from '@/styles/navigation-links.module.css'

const NavigationLinks = (props) => {
  return (
    <nav className={` ${styles['nav']} ${styles[props.rootClassName]} `}>
      <span className={styles['text']}>{props.text}</span>
      <span className={styles['text1']}>{props.text1}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text1: 'Sign up',
  rootClassName: '',
  text: 'Sign in',
}

NavigationLinks.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks;