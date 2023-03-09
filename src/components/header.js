import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
            marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}
    </div>
    <nav id="myMenu" className="w3-bar w3-border-bottom w3-border-blue">
    <Link className='w3-bar-item w3-mobile w3-left' to='index.html'><StaticImage src="../images/MNLOGOMED640X146.png" alt="" width={240}
                height={54}/></Link>
    <div className="w3-right">
      <Link to="/" className="w3-bar-item w3-padding-medium w3-button w3-hover-none w3-hover-text-blue w3-mobile" >Home</Link>
          <Link to="/about"  className="w3-bar-item w3-padding-medium w3-button w3-hover-none w3-hover-text-blue w3-mobile">About</Link>
            
          /* <Link to="/resources" className="w3-bar-item w3-padding-medium w3-button w3-hover-none w3-hover-text-blue w3-mobile">Resources</Link>*/
          <Link to="/contact" className="w3-bar-item w3-padding-medium w3-button w3-hover-none w3-hover-text-blue w3-mobile">Contact</Link>
          <Link to="/articles/" className="w3-bar-item w3-padding-medium w3-button w3-hover-none w3-hover-text-blue w3-mobile">Articles</Link>
       </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
