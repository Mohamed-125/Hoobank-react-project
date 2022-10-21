import {
  Hero,
  Navbar,
  Stats,
  Billing,
  CTA,
  CardDeal,
  Testimonials,
  Footer,
  Business,
} from "./Components";
import styles from "./styles";
const App = () => (
  <div className=" w-full overflow-hidden">
    <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
      <Navbar />
    </div>
    <div className={`bg-primary ${styles.flexStart}  `}>
      <Hero />
    </div>
    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
      <div className={` ${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
