import Section1 from "./section1"
import Section3 from "./section3"
import Section4 from "./section4"
import WhyChooseUsSection from "../ourService02/section1"
import FranchiseCollaborations from "@/components/elements/FranchiseCollaborations"

export default function AboutUs() {
  return (
    <>
      <Section1 />
      <section style={{ background: '#fff', paddingBottom: '20px' }}>
        <div className="tf-container">
          <FranchiseCollaborations topSpacing="20px" />
        </div>
      </section>
      <WhyChooseUsSection />
      <Section3 />
      <Section4 />
    </>
  )
}
