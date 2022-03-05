import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section>
        <h1>Great coffee made simple.</h1>
        <p>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Link to="/plan" className="">
          Create your plan
        </Link>
      </section>
      <section>
        <h2>Our collection</h2>
        <div>
          <div>
            <img
              src="assets/home/desktop/image-gran-espresso.png"
              alt="Coffee Roasters brown and white bag labeled Gran Espresso"
            />
            <h3>Gran Espresso</h3>
            <p>
              Light and flavorful blend with cocoa and black pepper for an
              intense experience
            </p>
          </div>
          <div>
            <img
              src="assets/home/desktop/image-planalto.png"
              alt="Coffee Roasters brown and white bag labeled Planalto"
            />
            <h3>Planalto</h3>
            <p>
              Brazilian dark roast with rich and velvety body, and hints of
              fruits and nuts
            </p>
          </div>
          <div>
            <img
              src="assets/home/desktop/image-piccollo.png"
              alt="Coffee Roasters brown and white bag labeled Piccollo"
            />
            <h3>Piccollo</h3>
            <p>
              Mild and smooth blend featuring notes of toasted almond and dried
              cherry
            </p>
          </div>
          <div>
            <img
              src="assets/home/desktop/image-danche.png"
              alt="Coffee Roasters brown and white bag labeled Danche"
            />
            <h3>Danche</h3>
            <p>
              Ethiopian hand-harvested blend densely packed with vibrant fruit
              notes
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2>Why choose us?</h2>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        <div>
          <div>
            <img src="assets/home/desktop/icon-coffee-bean.svg" alt="" />
            <h3>Best quality</h3>
            <p>
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </div>
          <div>
            <img src="assets/home/desktop/icon-gift.svg" alt="" />
            <h3>Exclusive benefits</h3>
            <p>
              Special offers and swag when you subscribe, including 30% off your
              first shipment.
            </p>
          </div>
          <div>
            <img src="assets/home/desktop/icon-truck.svg" alt="" />
            <h3>Free shipping</h3>
            <p>
              We cover the cost and coffee is delivered fast. Peak freshness:
              guaranteed.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2>How it works</h2>
        <div>
          <h3>
            <span>01</span>
            Pick your coffee
          </h3>
          <p>
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>
        <div>
          <h3>
            <span>02</span>
            Choose the frequency
          </h3>
          <p>
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </div>
        <div>
          <h3>
            <span>03</span>
            Receive and enjoy!
          </h3>
          <p>
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </p>
        </div>
        <Link to="/plan" className="">
          Create your plan
        </Link>
      </section>
    </main>
  );
};

export default Home;
