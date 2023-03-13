import React from 'react'

import PropTypes from 'prop-types'

const InputDate = (props) => {
  return (
    <>
      <div className={`input-date-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="input-date-image"
        />
        <div className="input-date-container1">
          <span className="input-date-text">{props.text}</span>
          <input
            type="date"
            placeholder={props.textinput_placeholder}
            className="input-date-textinput input-flight1"
          />
        </div>
      </div>
      <style jsx>
        {`
          .input-date-container {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: auto;
            height: 100px;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: auto;
            padding-top: var(--dl-space-space-halfunit);
            border-color: #d9d9d9;
            border-width: 1px;
            margin-right: auto;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .input-date-image {
            width: 60px;
            height: 60px;
            align-self: center;
            object-fit: cover;
          }
          .input-date-container1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .input-date-text {
            color: #5d5f67;
            font-size: 1.1rem;
            font-family: Montserrat;
          }
          .input-date-textinput {
            width: 200px;
            font-family: Montserrat;
          }
        `}
      </style>
    </>
  )
}

InputDate.defaultProps = {
  text: 'Departure City',
  textinput_placeholder: 'Where are you from....',
  image_alt: 'image',
  rootClassName: '',
  image_src: '/playground_assets/depature%20city%20icon2.svg',
}

InputDate.propTypes = {
  text: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default InputDate
