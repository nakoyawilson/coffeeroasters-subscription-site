import { useState } from "react";
import FormElement from "../components/FormElement";
import Modal from "react-modal";

const Subscribe = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userOrder, setUserOrder] = useState({
    method: "_____",
    type: "_____",
    quantity: "_____",
    grind: "_____",
    frequency: "______",
  });
  const [totalCost, setTotalCost] = useState("0.00");
  const [disableGrind, setDisableGrind] = useState(false);

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

  const calculateCost = () => {
    let price, multiplcationFactor, calculatedCost;
    if (userOrder.quantity === "250g") {
      if (userOrder.frequency === "Every week") {
        price = 7.2;
        multiplcationFactor = 4;
      } else if (userOrder.frequency === "Every 2 weeks") {
        price = 9.6;
        multiplcationFactor = 2;
      } else if (userOrder.frequency === "Every month") {
        price = 12.0;
        multiplcationFactor = 1;
      }
    } else if (userOrder.quantity === "500g") {
      if (userOrder.frequency === "Every week") {
        price = 13.0;
        multiplcationFactor = 4;
      } else if (userOrder.frequency === "Every 2 weeks") {
        price = 17.5;
        multiplcationFactor = 2;
      } else if (userOrder.frequency === "Every month") {
        price = 22.0;
        multiplcationFactor = 1;
      }
    } else if (userOrder.quantity === "1000g") {
      if (userOrder.frequency === "Every week") {
        price = 22.0;
        multiplcationFactor = 4;
      } else if (userOrder.frequency === "Every 2 weeks") {
        price = 32.0;
        multiplcationFactor = 2;
      } else if (userOrder.frequency === "Every month") {
        price = 42.0;
        multiplcationFactor = 1;
      }
    }
    calculatedCost = price * multiplcationFactor;
    setTotalCost(calculatedCost.toFixed(2));
  };

  const handleOrderChange = (e) => {
    const order = { ...userOrder };
    if (e.target.name === "method") {
      order.method = e.target.value;
      if (e.target.value === "Capsule") {
        setDisableGrind(true);
      } else {
        setDisableGrind(false);
      }
    } else if (e.target.name === "type") {
      order.type = e.target.value;
    } else if (e.target.name === "quantity") {
      order.quantity = e.target.value;
    } else if (e.target.name === "grind") {
      order.grind = e.target.value;
    } else if (e.target.name === "frequency") {
      order.frequency = e.target.value;
    }
    setUserOrder(order);
  };

  const resetOrder = () => {
    setUserOrder({
      method: "_____",
      type: "_____",
      quantity: "_____",
      grind: "_____",
      frequency: "______",
    });
  };

  const openModal = () => {
    calculateCost();
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
      <form className="order-form container grid" onChange={handleOrderChange}>
        <FormElement
          questionDisabled={false}
          initialActiveState={true}
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
          questionDisabled={false}
          initialActiveState={false}
          labelClasses="answer"
          question="What type of coffee?"
          questionName="type"
          firstAnswer="Distinct, high quality coffee from a specific family-owned farm"
          firstAnswerValue="Single Origin"
          secondAnswer="Just like regular coffee, except the caffeine has been removed"
          secondAnswerValue="Decaf"
          thirdAnswer="Combination of two or three dark roasted beans of organic coffees"
          thirdAnswerValue="Blended"
        />
        <FormElement
          initialActiveState={false}
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
          questionDisabled={disableGrind}
          initialActiveState={false}
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
          questionDisabled={false}
          initialActiveState={false}
          labelClasses="answer"
          question="How often should we deliver?"
          questionName="frequency"
          firstAnswer={`${
            userOrder.quantity === ""
              ? ""
              : userOrder.quantity === "250g"
              ? "$7.20"
              : userOrder.quantity === "500g"
              ? "$13.00"
              : "$22.00"
          } per shipment. Includes free first-class shipping.`}
          firstAnswerValue="Every week"
          secondAnswer={`${
            userOrder.quantity === ""
              ? ""
              : userOrder.quantity === "250g"
              ? "$9.60"
              : userOrder.quantity === "500g"
              ? "$17.50"
              : "$32.00"
          } per shipment. Includes free priority shipping.`}
          secondAnswerValue="Every 2 weeks"
          thirdAnswer={`${
            userOrder.quantity === ""
              ? ""
              : userOrder.quantity === "250g"
              ? "$12.00"
              : userOrder.quantity === "500g"
              ? "$22.00"
              : "$42.00"
          } per shipment. Includes free priority shipping.`}
          thirdAnswerValue="Every month"
        />
      </form>
      <section className="order-summary">
        <div className="container">
          <h2 className="summary-heading">Order Summary</h2>
          <p className="summary-text">
            “I drink my coffee{" "}
            {userOrder.method === "Capsule"
              ? "using "
              : userOrder.method === "Filter" || userOrder.method === "Espresso"
              ? "as "
              : ""}
            <span className="user-option">
              {userOrder.method === "Capsule" ? "Capsules" : userOrder.method}
            </span>
            , with a <span className="user-option">{userOrder.type}</span> type
            of bean. <span className="user-option">{userOrder.quantity}</span>
            {userOrder.method === "Capsule" || userOrder.method === "" ? (
              ""
            ) : (
              <span>
                {" "}
                ground ala{" "}
                <span className="user-option">{userOrder.grind}</span>
              </span>
            )}
            , sent to me{" "}
            <span className="user-option">{userOrder.frequency}</span>.”
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
            “I drink my coffee{" "}
            {userOrder.method === "Capsule"
              ? "using "
              : userOrder.method === "Filter" || userOrder.method === "Espresso"
              ? "as "
              : ""}
            <span className="user-option">
              {userOrder.method === "Capsule" ? "Capsules" : userOrder.method}
            </span>
            , with a <span className="user-option">{userOrder.type}</span> type
            of bean. <span className="user-option">{userOrder.quantity}</span>
            {userOrder.method === "Capsule" || userOrder.method === "" ? (
              ""
            ) : (
              <span>
                {" "}
                ground ala{" "}
                <span className="user-option">{userOrder.grind}</span>
              </span>
            )}
            , sent to me{" "}
            <span className="user-option">{userOrder.frequency}</span>.”
          </p>
          <p className="confirmation">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
          <button
            className="create-button"
            onClick={() => {
              closeModal();
              resetOrder();
            }}
          >
            ${totalCost}/month Checkout
          </button>
        </section>
      </Modal>
    </main>
  );
};

export default Subscribe;
