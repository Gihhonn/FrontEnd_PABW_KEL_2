import React from 'react'

import PropTypes from 'prop-types'

const InputSeat = (props) => {
  return (
    <>
      <div className={`input-seat-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="input-seat-image"
        />
        <div className="input-seat-container1">
          <span className="input-seat-text">{props.text}</span>
          <select className="input-seat-select selectinput">
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First">First</option>
          </select>
        </div>
      </div>
      <style jsx>
        {`
          .input-seat-container {
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
          .input-seat-image {
            width: 60px;
            height: 60px;
            align-self: center;
            object-fit: cover;
          }
          .input-seat-container1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .input-seat-text {
            color: #5d5f67;
            font-size: 1.1rem;
            font-family: Montserrat;
          }
          .input-seat-select {
            width: 200px;
          }
        `}
      </style>
    </>
  )
}

InputSeat.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  text: 'Departure City',
  image_src: '/playground_assets/depature%20city%20icon2.svg',
}

InputSeat.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default InputSeat
