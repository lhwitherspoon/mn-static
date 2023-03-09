import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { Hero } from "../components/hero-image"
import Seo from "../components/seo"
//import "../components/w3.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Meditrinalia Naturopathic - practice closed" />

  <Hero></Hero>
    
  <section className="w3-container w3-padding-large w3-mobile">
            

            <p>All patients were sent letters to their address of record at the time.</p>
            <p>
                If you saw me at the 3rd Avenue location in downtown Seattle, please send a written request to <a
                    href="#contact">the address below.</a></p>
            <p>If you saw me at Basty Center for Natural Health, please contact them at (206) 834-4100 to obtain medical
                records for visits there.</p>
            <p>If you saw me at Rain City Integrative Clinic, please call them at (206) 352-9000 to request records for
                visits at that location.</p>
        </section>
    
    
  
  </Layout>
)

export default IndexPage
