import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
//import { Hero } from "../components/hero-image"
import Seo from "../components/seo"


const ResourcesPage = () => (
    <Layout>
        <Seo title="Healthcare resources for Seattle-area LGTBQ Individuals" />
    <div className="blog">

    <section className="w3-container">
            <h1>Resources</h1>
            <h3>Seattle and national health resources</h3>
            <h2><strong>For Life Threatening Emergencies: Call 9-1-1</strong></h2>
            <h2>Depression and anxiety, suicide and crisis hotlines:</h2>
            <ul>
                <li><a href='https://crisisclinic.org/'>Seattle Crisis Hotline crisisclinic.org</a> (866-427-4747)</li>
                <li><a
                        href='http://www.suicide.org/hotlines/washington-suicide-hotlines.html'>www.suicide.org/hotlines/washington-suicide-hotlines.html</a>
                </li>
                <li><a href='http://www.warecoveryhelpline.org/'>www.warecoveryhelpline.org/</a></li>
                <li><a href='http://www.translifeline.org/'>http://www.translifeline.org</a> 1-877-565-8860</li>
                <li>LGBTQ Youth suicide hotline: 1-866-4-U-TREVOR</li>

            </ul>
            <h3>Places to get mental health care:</h3>
            <ul>
                <li><a href='http://www.valleycities.org/'>www.valleycities.org/</a></li>
                <li><a href='http://www.seamar.org/'>www.seamar.org/ – mental counseling services</a></li>
                <li><a href='http://www.seattlecounseling.org/'>www.seattlecounseling.org</a></li>
                <li>Sound Mental Health: <a href='http://smh.org/'>smh.org</a></li>

            </ul>
            <h3>LGBTQ+ Friendly providers and clinics:</h3>
            <p><em>These are some of the clinics and providers I have referred people to in the past. Obviously
                    providers and policies may have changed.</em></p>
            <ul>
                <li><a href='https://countrydoctor.org/'>Country Doctor Clinic</a> (Capitol Hill)</li>
                <li><a href='https://www.cedarriverclinics.org/'>Cedar River Clinics</a> (gender-affirming care)</li>
          
                <li><a href='https://www.swedish.org/locations/swedish-family-medicine-cherry-hill'>Swedish Family
                        Medicine – Cherry Hill</a></li>
              
               
                <li>Planned Parenthood – <a
                        href='https://www.plannedparenthood.org/get-care/our-services/lgbt-services'>see this link </a>
                    for their LGBTQ+ services</li>

            </ul>
            <h3><strong>Urgent Care:</strong></h3>
            <p><del>For established patients (that is, you have seen me for an in-office visit), I offer phone
                    availability for after-hours situations. You can also usually be seen in the office within 24 hours
                    for urgent situations. Sometimes, though, that’s not possible.</del> So for when it’s not bad enough
                for the emergency room, but can’t wait until the office is open:</p>
            <p><strong>Country Doctor After Hours Clinic</strong>: located at Carolyn Downs Family Medical Center at 2101 E Yesler Way, Seattle, Washington 98122</p>
            <p>Open 6-10 pm M-F and 12-10 pm Sat &amp; Sun. Call (206) 709-7199; no appointments needed, takes walk-in; may not be open on holidays. Takes all
                insurances. Long-time provider of health care to the LGTBQ community.</p>

            <h2><strong>Transgender and LGBTQ Resources:</strong></h2>
            <ul>
                <li><a href='http://ingersollcenter.org/'>Ingersollcenter.org:</a> resources for transgender and gender
                    non-conforming individuals.</li>
                <li><a href='http://sasgcc.org/links/transgender'>sasgcc.org/links/transgender</a></li>
                <li><a href='https://www.gaycity.org/transgender/'>https://www.gaycity.org/transgender/ </a></li>
                <li><a href='http://www.gaycity.org/'>www.gaycity.org</a></li>
       

            </ul>
            <h3><strong>Insurer’s portals: Medicaid, Premera, Molina, Amerigroup, UHC, Regence, Group Health</strong>
            </h3>
            {/* <!-- TODO check and remove links --> */}
            <ul>
                <li>Medicaid: <a href='https://www.waproviderone.org/client' target='_blank' rel='noreferrer' 
                        className='url'>https://www.waproviderone.org/client</a></li>
                <li>Molina Healthcare: <a href='http://www.molinahealthcare.com/'>www.molinahealthcare.com/</a></li>
                <li>Amerigroup: <a href='https://www.myamerigroup.com/' target='_blank' rel='noreferrer' 
                        className='url'>https://www.myamerigroup.com/</a></li>
                <li>United Healthcare Community Plan: <a
                        href='http://www.uhccommunityplan.com/'>www.uhccommunityplan.com/ </a>(Applehealth/Medicaid)
                </li>
                <li>United Healthcare (all other):<a href='https://www.uhc.com/'> https://www.uhc.com/</a></li>
                <li>Premera: <a href='https://www.premera.com/'>https://www.premera.com</a></li>
                <li>Regence:<a href='https://www.regence.com/web/regenceindividual/'>
                        https://www.regence.com/web/regenceindividual/</a></li>
                <li>First Choice: <a href='https://www.fchn.com/' target='_blank' rel='noreferrer' className='url'>https://www.fchn.com/</a>
                </li>
                <li>Group Health Co-op: <a href='https://www.ghc.org/' target='_blank' rel='noreferrer'
                        className='url'>https://www.ghc.org/</a></li>
                <li>Need insurance? Start your search at <a href='https://www.wahealthplanfinder.org/'>Washington
                        Healthplan Finder</a></li>

            </ul>
            <h2>Associations:</h2>
            <ul>
                <li>Gay and Lesbian Medical Association: <a href='http://www.glma.org/'>GLMA.org</a></li>
                <li>Naturopathic Primary Care Association: <a
                        href='http://www.ndprimarycare.org/'>www.ndprimarycare.org/</a></li>

            </ul>
            <h2>Nutrition and Food:</h2>
            <p>In general, the research supports a heavily plant-based diet (though not necessarily <em>vegan</em>) for
                optimal health.</p>
            <ul>
                <li><a href='https://www.choosemyplate.gov/' target='_blank' rel='noreferrer'
                        className='url'>https://www.choosemyplate.gov/</a> My Plate – a good place to start for advice.</li>
                <li>DASH (Dietary Approaches To Stop Hypertension) diet: <a
                        href='https://www.nhlbi.nih.gov/files/docs/public/heart/dash_brief.pdf' target='_blank' rel='noreferrer'
                        className='url'>https://www.nhlbi.nih.gov/files/docs/public/heart/dash_brief.pdf</a></li>

            </ul>
        </section>
    </div>

    </Layout>


)

export default ResourcesPage
