import { useState } from "react";
import Modal from "react-modal";

const Subscribe = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // const customStyles = {
  //   content: {
  //     backgroundColor: "rgba(0, 0, 0, 0.5)",
  //     top: "50%",
  //     left: "50%",
  //     right: "auto",
  //     bottom: "auto",
  //     marginRight: "-50%",
  //     transform: "translate(-50%, -50%)",
  //   },
  // };

  Modal.setAppElement("#root");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <main>
      <section className="subscribe-hero container">
        <h1 className="heading">Create a plan</h1>
        <p className="paragraph">
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </section>
      <section class="steps grid">
        <div>
          <h2 class="subheading">
            <span className="subheading-index">01</span>
            Pick your coffee
          </h2>
          <p className="paragraph">
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There's new
            coffees in all profiles every month for you to try out.
          </p>
        </div>
        <div>
          <h2 className="subheading">
            <span className="subheading-index">02</span>
            Choose the frequency
          </h2>
          <p className="paragraph">
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </div>
        <div>
          <h2 className="subheading">
            <span className="subheading-index">03</span>
            Receive and enjoy!
          </h2>
          <p className="paragraph">
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </p>
        </div>
      </section>
      <section>
        <ol>
          <li>01 Preferences</li>
          <li>02 Bean type</li>
          <li>03 Quantity</li>
          <li>04 Grind option</li>
          <li>05 Deliveries</li>
        </ol>
      </section>
      <form></form>
      How do you drink your coffee? Capsule Compatible with Nespresso systems
      and similar brewers Filter For pour over or drip methods like Aeropress,
      Chemex, and V60 Espresso Dense and finely ground beans for an intense,
      flavorful experience What type of coffee? Single origin Distinct, high
      quality coffee from a specific family-owned farm Decaf Just like regular
      coffee, except the caffeine has been removed Blended Combination of two or
      three dark roasted beans of organic coffees How much would you like? 250g
      Perfect for the solo drinker. Yields about 12 delicious cups. 500g Perfect
      option for a couple. Yields about 40 delectable cups. 1000g Perfect for
      offices and events. Yields about 90 delightful cups. Want us to grind
      them? Wholebean Best choice if you cherish the full sensory experience
      Filter For drip or pour-over coffee methods such as V60 or Aeropress
      Cafetiére Course ground beans specially suited for french press coffee How
      often should we deliver? Every week $14.00 per shipment. Includes free
      first-class shipping. Every 2 weeks $17.25 per shipment. Includes free
      priority shipping. Every month $22.50 per shipment. Includes free priority
      shipping.
      <section className="order-summary">
        <div className="container">
          <h2 className="summary-heading">Order Summary</h2>
          <p className="summary-text">
            “I drink coffee _____, with a _____ type of bean. _____ ground ala
            _____, sent to me _____.”
          </p>
        </div>
        <button className="create-button" onClick={openModal}>
          Create my plan!
        </button>
      </section>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Order Summary"
      >
        <section className="modal">
          <h2 className="heading">Order Summary</h2>
          <p className="summary-text">
            “I drink coffee _____, with a _____ type of bean. _____ ground ala
            _____, sent to me _____.”
          </p>
          <p className="confirmation">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
          <button className="create-button" onClick={closeModal}>
            $_____/month Checkout
          </button>
        </section>
      </Modal>
    </main>
  );
};

export default Subscribe;
