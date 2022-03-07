import { Link, useOutletContext } from "react-router-dom";

const Home = () => {
  const scrollToTop = useOutletContext();

  return (
    <main>
      <section className="container home-hero">
        <h1 className="heading">Great coffee made simple.</h1>
        <p className="paragraph">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Link to="/subscribe" className="create-button" onClick={scrollToTop}>
          Create your plan
        </Link>
      </section>
      <section className="collection">
        <h2 className="heading">Our collection</h2>
        <div className="grid">
          <div>
            <img
              src="assets/home/desktop/image-gran-espresso.png"
              alt="Coffee Roasters brown and white bag labeled Gran Espresso"
              className="collection-image"
            />
            <h3 className="subheading">Gran Espresso</h3>
            <p className="paragraph">
              Light and flavorful blend with cocoa and black pepper for an
              intense experience
            </p>
          </div>
          <div>
            <img
              src="assets/home/desktop/image-planalto.png"
              alt="Coffee Roasters brown and white bag labeled Planalto"
              className="collection-image"
            />
            <h3 className="subheading">Planalto</h3>
            <p className="paragraph">
              Brazilian dark roast with rich and velvety body, and hints of
              fruits and nuts
            </p>
          </div>
          <div>
            <img
              src="assets/home/desktop/image-piccollo.png"
              alt="Coffee Roasters brown and white bag labeled Piccollo"
              className="collection-image"
            />
            <h3 className="subheading">Piccollo</h3>
            <p className="paragraph">
              Mild and smooth blend featuring notes of toasted almond and dried
              cherry
            </p>
          </div>
          <div>
            <img
              src="assets/home/desktop/image-danche.png"
              alt="Coffee Roasters brown and white bag labeled Danche"
              className="collection-image"
            />
            <h3 className="subheading">Danche</h3>
            <p className="paragraph">
              Ethiopian hand-harvested blend densely packed with vibrant fruit
              notes
            </p>
          </div>
        </div>
      </section>
      <section className="choose-us container">
        <h2 className="heading">Why choose us?</h2>
        <p className="paragraph">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        <div className="grid">
          <div className="reason">
            <img
              src="assets/home/desktop/icon-coffee-bean.svg"
              alt=""
              className="reason-image"
            />
            <h3 className="subheading">Best quality</h3>
            <p className="paragraph">
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </div>
          <div className="reason">
            <img
              src="assets/home/desktop/icon-gift.svg"
              alt=""
              className="reason-image"
            />
            <h3 className="subheading">Exclusive benefits</h3>
            <p className="paragraph">
              Special offers and swag when you subscribe, including 30% off your
              first shipment.
            </p>
          </div>
          <div className="reason">
            <img
              src="assets/home/desktop/icon-truck.svg"
              alt=""
              className="reason-image"
            />
            <h3 className="subheading">Free shipping</h3>
            <p className="paragraph">
              We cover the cost and coffee is delivered fast. Peak freshness:
              guaranteed.
            </p>
          </div>
        </div>
      </section>
      <section className="how-it-works">
        <h2 className="heading">How it works</h2>
        <div className="grid container">
          <div>
            <h3 className="subheading">
              <span className="subheading-index">01</span>
              Pick your coffee
            </h3>
            <p className="paragraph">
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>
          <div>
            <h3 className="subheading">
              <span className="subheading-index">02</span>
              Choose the frequency
            </h3>
            <p className="paragraph">
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>
          <div>
            <h3 className="subheading">
              <span className="subheading-index">03</span>
              Receive and enjoy!
            </h3>
            <p className="paragraph">
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>
        <Link to="/subscribe" className="create-button" onClick={scrollToTop}>
          Create your plan
        </Link>
      </section>
    </main>
  );
};

export default Home;
