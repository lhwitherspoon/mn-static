import * as React from "react"
import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
//import { Hero } from "../components/hero-image"
import Seo from "../components/seo"

const ContactPage = () => (
    <Layout>
        <Seo title="Contact Meditrinalia Naturopathic" />
        <div className="blog">
            <article className="w3-container">
            <h1>Contact</h1>
            <h2>If you have a life-threatening emergency, please call 911.</h2>
            <h2>Obtaining records</h2>
            <p>If you were seen at the 1904 3rd Ave #335, Seattle, WA 98101 location, please send record requests to PO Box 28727, Seattle, WA 98118. Please allow time for mailing plus 15 days for processing.</p>
            <p>If you were seen at Bastyr Center for Natural Health or Rain City Integrative, please see below for their contact information.</p>
            <p><strong>The patient portal is no longer monitored daily. Do not use for any urgent requests.</strong></p>

            <p><strong>Patient records will be maintained for 10 years per Washington state law. If you wish to pick up
                    a physical copy of your records, please send a written request to the address listed above.</strong>
            </p>
            <p>Providers, hospitals, labs and other healthcare facilities: if calling about a patient order or referral
                that originated from Meditrinalia Naturopathic, please call (206) 910-6176 and leave a voicemail. If the
                order or referral originated from Bastyr Clinic for Natural Health, please call (206) 834-4100 and
                contact the medical assistant (during office hours) or if it cannot wait, the on-call clinician (DOC,
                Doctor On Call). If the order originates from Rain City Integrative, please contact their front desk at
                (206) 352-9000.</p>

                <h3>Refills: No refills at this location as of 1/31/2019</h3>

                <p><strong>If you are an existing patient, I will provide refills that do not require a visit up until
                    January 31, 2019. If a refill requires a visit you will need to either see me at Rain City
                    Integrative Clinic or at Bastyr Center for Natural Health. <del>After January 31, 2019 you MUST
                        establish care with me at one of those locations in order to have me continue providing
                        refills.</del> If you wish to find another doctor, please see the letter sent to you for
                    options, or contact me for recommendations. Update 3/1/2019: Due to my currently not being in
                    practice, you must establish care with another provider.</strong></p>

                    <h3>Electronic/Patient Portal:</h3>
            <p><strong>For life-threatening emergencies, dial 911.</strong></p>
            <p>IF YOU HAVE SEEN ME AT RAIN CITY OR BASTYR CENTER DO NOT USE THIS PORTAL.</p>

            <p><a href='http://www.raincityintegrative.com/'>Rain City Patients please log in at the Rain City patient
                    portal.</a></p>
            <p><a href='https://bastyrcenter.org/'>Bastyr Center For Natural Health Patients please log in through the
                    Bastyr Ochin MyChart link.</a></p>

                    <p>As the practice is now closed, this patient portal link below is available to retrieve your old records.
                I cannot answer questions about your current medical care, but if you send me a message I will reply.
                Messages are NOT checked daily.</p>
                <p><a href='https://charmphr.com/login.sas?FACILITY=G08672zx67020x67020Kx77aG00x7m70SA70x6700rG2'>Patient
                    Portal</a></p>
                    <h3>Mail</h3>
            <p>Mail can be sent to:</p>
            <p>PO Box 28727, Seattle, WA 98118.</p>
            </article>
        
        </div>
    </Layout>
)

export default ContactPage