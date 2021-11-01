import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"


export function Hero() {
  return (
    <div style={{ display: "grid" }}f>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}
        layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={3/2}
        // This is a presentational image, so the alt should be an empty string
        alt=""
        src={
          "../images/claus-pescha-204906-1280X1920-cropped.jpg"
        }
        formats={["auto", "webp", "avif"]}
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
          color: "white",
          
            background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
          textAlign: "center"
        }}
      >
        {/* Any content here will be centered in the component */}
        
                <div className="w3-display-middle w3-padding-large w3-card overlay 
                    w3-text-white w3-center w3-mobile">
                    <h1>Meditrinalia Naturopathic closed its doors on November 23, 2018. </h1>
                    <h6>
                        Thank you to the patients who entrusted me with their care.<br/> And thank you to the many colleagues
                        – ND, MD, DO, PA, ARNP and others – who helped me care for them.</h6>
                </div>
            
      </div>
    </div>

    
  )
}
