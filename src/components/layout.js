/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./w3.css"
import "./main.css"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main className='w3-container w3-auto w3-section'>{children}</main>
        <footer className='w3-container w3-cell-row w3-margin-top w3-border-top w3-border-blue'>
          <div className="w3-container w3-cell w3-margin-top w3-mobile w3-cell-top">
          <h2>To request copies of your medical records by mail:</h2>
          <p id="contact">
                <b>1904 3rd Avenue location ONLY:</b><br/>
                Meditrinalia Naturopathic<br/>
                PO Box 28727<br/>
                Seattle, WA 98118</p>
                <p><b>Bastyr Center for Natural Health:</b><br/>
                3670 Stone Way N.<br/>
                Seattle, WA 98103
            </p>

            <p><b>Rain City Integrative Clinic:</b><br/>
                2730 Westlake Ave N, Unit 4<br/>
                Seattle, WA 98109</p>
            <a href="mailto: info@meditrinalia.com">You can also contact me by email.</a>
          </div>
          <div id="portal" className="w3-container w3-cell w3-mobile w3-cell-top">
            <h2>Login to patient portal:</h2>
            <a href="https://charmphr.com/login.sas?FACILITY=G08672zx67020x67020Kx77aG00x7m70SA70x6700rG2">1904 3rd Ave
                Location Patient Portal</a>
            <p>This will let you download labs and print out old treatment plans.</p>
            <p>Do not use this link for urgent requests. For lifethreatening emergencies, call 9-1-1.</p>

            <p>Rain City Integrative Clinic patients please log in at the <a
                    href="https://15731.portal.athenahealth.com/">Rain City patient portal.</a></p>
            <p>Bastyr Center for Natural Health patients please log in at the <a
                    href="https://mychart.ochin.org/MyChart/Authentication/Login?">BCNH patient portal.</a></p>

        </div>
          
        </footer>
        <div className="w3-container w3-center">
            © {new Date().getFullYear()}, L H Witherspoon | Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
