import Head from 'next/head'
import Link from 'next/link'

const SignInPage = (props) => {
  return (
    <>
      <div className="sign-in-page-container">
        <Head>
          <title>Trippy - Sign In</title>
          <meta
            property="og:title"
            content="SignInPage - Delectable Political Kudu"
          />
          <link rel="icon" href="/logoblack.ico" />
        </Head>
        <div className="sign-in-page-container1">
          <div className="sign-in-page-container2">
            <div className="sign-in-page-container3">
              <h1 className="sign-in-page-text">Sign In</h1>
              <span className="sign-in-page-text1">
                Get started with an account on Trippy
              </span>
              <form className="sign-in-page-form">
                <input
                  type="email"
                  size="30"
                  required
                  autoFocus
                  maxlength="20"
                  minlength="3"
                  placeholder="Email"
                  className="sign-in-page-textinput input"
                />
                <input
                  type="password"
                  size="20"
                  required
                  autoFocus
                  minlength="3"
                  placeholder="Password"
                  className="sign-in-page-textinput1 input"
                />
              </form>
              <button className="sign-in-page-button button">Sign In</button>
              <span className="sign-in-page-text2">Or</span>
              <div className="sign-in-page-container4 button">
                <div className="sign-in-page-container5">
                  <img
                    alt="image"
                    src="/playground_assets/google-icon.svg"
                    className="sign-in-page-image"
                  />
                  <span className="sign-in-page-text3">
                    Sign in with google
                  </span>
                </div>
              </div>
              <div className="sign-in-page-container6">
                <span className="sign-in-page-text4">
                  Not a trippy member? 
                </span>
                <span className="sign-in-page-text5">Sign Up</span>
              </div>
            </div>
          </div>
          <div className="sign-in-page-container7">
            <img
              alt="image"
              src="/playground_assets/wp9247941-4k-indonesia-wallpapers-1500h.jpg"
              className="sign-in-page-image1"
            />
          </div>
        </div>
        <Link href='/'>
          <img
            alt="image"
            src="/playground_assets/logo%20black.svg"
            className="sign-in-page-image2"
          />
        </Link>
        
      </div>
      <style jsx>
        {`
          .sign-in-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            max-height: 100vh;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .sign-in-page-container1 {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: flex-end;
            justify-content: flex-start;
          }
          .sign-in-page-container2 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            position: relative;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .sign-in-page-container3 {
            width: 90%;
            height: auto;
            margin: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sign-in-page-text {
            font-size: 28px;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-family: Montserrat;
            font-weight: 700;
            padding-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .sign-in-page-text1 {
            color: #7a7c85;
            align-self: center;
            font-style: normal;
            font-family: Montserrat;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .sign-in-page-form {
            gap: var(--dl-space-space-twounits);
            width: 50%;
            height: auto;
            display: flex;
            max-width: 50%;
            align-self: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .sign-in-page-textinput {
            height: 60px;
            border-radius: 7px;
          }
          .sign-in-page-textinput1 {
            height: 60px;
            border-radius: 7px;
          }
          .sign-in-page-button {
            color: rgb(255, 255, 255);
            width: 50%;
            height: 60px;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-family: Montserrat;
            font-weight: 600;
            border-radius: 7px;
            margin-bottom: var(--dl-space-space-unit);
            background-color: rgb(62, 92, 184);
          }
          .sign-in-page-text2 {
            color: rgb(122, 124, 133);
            align-self: center;
            font-style: normal;
            font-family: Montserrat;
            font-weight: 600;
          }
          .sign-in-page-container4 {
            width: 50%;
            height: 60px;
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            border-radius: 7px;
            flex-direction: row;
            justify-content: center;
          }
          .sign-in-page-container5 {
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .sign-in-page-image {
            width: 30px;
            height: 30px;
            object-fit: cover;
          }
          .sign-in-page-text3 {
            align-self: center;
            font-style: normal;
            font-family: Montserrat;
            font-weight: 600;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
          }
          .sign-in-page-container6 {
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .sign-in-page-text4 {
            color: rgb(122, 124, 133);
            align-self: center;
            font-style: normal;
            font-family: Montserrat;
            font-weight: 500;
          }
          .sign-in-page-text5 {
            color: rgb(72, 147, 216);
            align-self: center;
            font-style: normal;
            font-family: Montserrat;
            font-weight: 700;
          }
          .sign-in-page-container7 {
            width: 50%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .sign-in-page-image1 {
            width: 100%;
            height: 100%;
            align-self: flex-start;
            object-fit: cover;
          }
          .sign-in-page-image2 {
            top: 27px;
            left: 49px;
            width: 100px;
            position: absolute;
            object-fit: cover;
          }
          @media (max-width: 1600px) {
            .sign-in-page-container {
              overflow: auto;
              max-height: 100vh;
            }
            .sign-in-page-container1 {
              height: 100vh;
            }
            .sign-in-page-container2 {
              position: relative;
            }
            .sign-in-page-container3 {
              margin: auto;
            }
            .sign-in-page-text {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .sign-in-page-textinput {
              height: 50px;
            }
            .sign-in-page-textinput1 {
              height: 50px;
            }
          }
          @media (max-width: 1200px) {
            .sign-in-page-container {
              width: 100%;
              display: flex;
              overflow: hidden;
              max-height: 100vh;
            }
            .sign-in-page-text {
              font-size: 24px;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .sign-in-page-text1 {
              font-size: 15px;
            }
            .sign-in-page-textinput {
              height: 45px;
            }
            .sign-in-page-textinput1 {
              height: 45px;
            }
            .sign-in-page-image {
              width: 25px;
              height: 25px;
            }
            .sign-in-page-text3 {
              font-size: 14px;
            }
            .sign-in-page-text4 {
              font-size: 14px;
            }
            .sign-in-page-text5 {
              font-size: 14px;
            }
            .sign-in-page-image2 {
              width: 82px;
              height: 47px;
            }
          }
          @media (max-width: 991px) {
            .sign-in-page-container2 {
              width: 100%;
              background-size: cover;
              background-image: url('/playground_assets/wp9247941-4k-indonesia-wallpapers-1500h.jpg');
            }
            .sign-in-page-container3 {
              width: 710px;
              border-color: rgba(255, 255, 255, 0.65);
              border-width: 2px;
              border-radius: var(--dl-radius-radius-radius4);
              background-color: rgba(255, 255, 255, 0.63);
            }
            .sign-in-page-text {
              color: #000000;
              text-shadow: 2px 6px 4px rgba(0, 0, 0, 0.25);
            }
            .sign-in-page-text1 {
              color: #5a5858;
              text-shadow: 2px 6px 4px rgba(0, 0, 0, 0.25);
            }
            .sign-in-page-textinput {
              height: 45px;
            }
            .sign-in-page-textinput1 {
              height: 45px;
            }
            .sign-in-page-button {
              color: rgb(255, 255, 255);
              height: 45px;
              font-size: 14px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 600;
              background-color: rgb(62, 92, 184);
            }
            .sign-in-page-text2 {
              color: #000000;
              text-shadow: 2px 6px 4px rgba(0, 0, 0, 0.25);
            }
            .sign-in-page-container4 {
              height: 45px;
            }
            .sign-in-page-text4 {
              color: #000000;
              font-style: normal;
              font-weight: 700;
              text-shadow: 2px 6px 4px rgba(0, 0, 0, 0.25);
            }
            .sign-in-page-text5 {
              color: #1f8cff;
              text-shadow: 2px 6px 4px rgba(0, 0, 0, 0.25);
            }
            .sign-in-page-container7 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .sign-in-page-container2 {
              width: 100%;
              background-size: cover;
              background-image: url('/playground_assets/wp9247941-4k-indonesia-wallpapers-1500h.jpg');
            }
            .sign-in-page-container3 {
              width: 80%;
              margin: auto;
              background-image: linear-gradient(
                270deg,
                rgba(189, 195, 199, 0.19) 100%,
                rgba(189, 195, 199, 0.4) 23%
              );
            }
            .sign-in-page-text {
              color: #ffffff;
            }
            .sign-in-page-text1 {
              color: #eaeaeb;
            }
            .sign-in-page-textinput {
              height: auto;
            }
            .sign-in-page-textinput1 {
              height: auto;
            }
            .sign-in-page-container7 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .sign-in-page-container3 {
              width: 90%;
              background-image: linear-gradient(
                270deg,
                rgba(189, 195, 199, 0.19) 100%,
                rgba(189, 195, 199, 0.4) 23%
              );
            }
            .sign-in-page-text {
              color: #000000;
              font-size: 22px;
            }
            .sign-in-page-text1 {
              color: #5d5d60;
              font-size: 13px;
            }
            .sign-in-page-container5 {
              margin: auto;
              padding: auto;
            }
            .sign-in-page-text3 {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

export default SignInPage
