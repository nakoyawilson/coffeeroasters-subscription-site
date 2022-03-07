import { useState } from "react";
import FormElement from "../components/FormElement";
import Modal from "react-modal";

const Subscribe = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  Modal.setAppElement("#root");

  const customStyles = {
    content: {
      position: "absolute",
      width: "min(87.2%, 32.7rem)",
      top: "3.5rem",
      left: "0",
      right: "0",
      marginLeft: "auto",
      marginRight: "auto",
      border: "none",
      background: "var(--light-cream)",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      borderRadius: "8px",
      outline: "none",
      padding: "0",
    },
  };

  Modal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.5)";

  const openModal = () => {
    setModalIsOpen(true);
    document.querySelector("body").classList.toggle("lock-scroll");
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.querySelector("body").classList.toggle("lock-scroll");
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
      <section className="steps grid">
        <div>
          <h2 className="subheading">
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
        <ol className="order-options">
          <li>01 Preferences</li>
          <li>02 Bean type</li>
          <li>03 Quantity</li>
          <li>04 Grind option</li>
          <li>05 Deliveries</li>
        </ol>
      </section>
      <form className="order-form container grid">
        <FormElement
          labelClasses="answer"
          question="How do you drink your coffee?"
          questionName="method"
          firstAnswer="Compatible with Nespresso systems and similar brewers"
          firstAnswerValue="Capsule"
          secondAnswer="For pour over or drip methods like Aeropress, Chemex, and V60"
          secondAnswerValue="Filter"
          thirdAnswer="Dense and finely ground beans for an intense, flavorful experience"
          thirdAnswerValue="Espresso"
        />
        <FormElement
          labelClasses="answer"
          question="What type of coffee?"
          questionName="type"
          firstAnswer="Distinct, high quality coffee from a specific family-owned farm"
          firstAnswerValue="Single origin"
          secondAnswer="Just like regular coffee, except the caffeine has been removed"
          secondAnswerValue="Decaf"
          thirdAnswer="Combination of two or three dark roasted beans of organic coffees"
          thirdAnswerValue="Blended"
        />
        <FormElement
          labelClasses="answer"
          question="How much would you like?"
          questionName="quantity"
          firstAnswer="Perfect for the solo drinker. Yields about 12 delicious cups."
          firstAnswerValue="250g"
          secondAnswer="Perfect option for a couple. Yields about 40 delectable cups."
          secondAnswerValue="500g"
          thirdAnswer="Perfect for offices and events. Yields about 90 delightful cups."
          thirdAnswerValue="1000g"
        />
        <FormElement
          labelClasses="answer"
          question="Want us to grind them?"
          questionName="grind"
          firstAnswer="Best choice if you cherish the full sensory experience"
          firstAnswerValue="Wholebean"
          secondAnswer="For drip or pour-over coffee methods such as V60 or Aeropress"
          secondAnswerValue="Filter"
          thirdAnswer="Course ground beans specially suited for french press coffee"
          thirdAnswerValue="Cafetiére"
        />
        <FormElement
          labelClasses="answer"
          question="How often should we deliver?"
          questionName="frequency"
          firstAnswer="$14.00 per shipment. Includes free first-class shipping."
          firstAnswerValue="Every week"
          secondAnswer="$17.25 per shipment. Includes free priority shipping."
          secondAnswerValue="Every 2 weeks"
          thirdAnswer="$22.50 per shipment. Includes free priority shipping."
          thirdAnswerValue="Every month"
        />
      </form>
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
        style={customStyles}
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
