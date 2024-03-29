import "./about.css";

const About = () => {
  return (
    <main>
      <section className="about container">
        <h1 className="heading">About us</h1>
        <p className="paragraph">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </section>
      <section className="commitment container">
        <picture>
          <source
            media="(max-width: 699px)"
            srcset="assets/about/mobile/image-commitment.jpg"
          />
          <source
            media="(max-width: 1309px)"
            srcset="assets/about/tablet/image-commitment.jpg"
          />
          <source
            media="(min-width: 1310px)"
            srcset="assets/about/desktop/image-commitment.jpg"
          />
          <img
            src="assets/about/mobile/image-commitment.jpg"
            alt="Man pouring milk into a cup of coffee"
            className="commitment-image"
          />
        </picture>
        <div className="content-wrapper">
          <h2 className="heading">Our commitment</h2>
          <p className="paragraph">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair&#8209;trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </section>
      <section className="quality container">
        <h2 className="heading">Uncompromising quality</h2>
        <p className="paragraph">
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over&#8209;roasting or baking the coffee dry.
          Every bag of coffee is tagged with a roast date and batch number. Our
          goal is to roast consistent, user&#8209;friendly coffee, so that
          brewing is easy and enjoyable.
        </p>
      </section>
      <section className="headquarters container">
        <h2 className="heading">Our headquarters</h2>
        <div className="grid">
          <address>
            <img
              src="assets/about/desktop/illustration-uk.svg"
              alt=""
              className="headquarters-illustration"
            />
            <div className="content-wrapper">
              <h3 className="subheading">United Kingdom</h3>
              <div>
                <span className="contact-info">68 Asfordby Rd</span>
                <span className="contact-info">Alcaston</span>
                <span className="contact-info">SY6 1YA</span>
                <span className="contact-info">+44 1241 918425</span>
              </div>
            </div>
          </address>
          <address>
            <img
              src="assets/about/desktop/illustration-canada.svg"
              alt=""
              className="headquarters-illustration"
            />
            <div className="content-wrapper">
              <h3 className="subheading">Canada</h3>
              <div>
                <span className="contact-info">1528 Eglinton Avenue</span>
                <span className="contact-info">Toronto</span>
                <span className="contact-info">Ontario M4P 1A6</span>
                <span className="contact-info">+1 416 485 2997</span>
              </div>
            </div>
          </address>
          <address>
            <img
              src="assets/about/desktop/illustration-australia.svg"
              alt=""
              className="headquarters-illustration"
            />
            <div className="content-wrapper">
              <h3 className="subheading">Australia</h3>
              <div>
                <span className="contact-info">36 Swanston Street</span>
                <span className="contact-info">Kewell</span>
                <span className="contact-info">Victoria</span>
                <span className="contact-info">+61 4 9928 3629</span>
              </div>
            </div>
          </address>
        </div>
      </section>
    </main>
  );
};

export default About;
