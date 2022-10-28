import DignityForm from "../components/digForm.jsx";

export default function DignityPopup(props) {

  const closePopup = () => {
    props.toggle(false);
  }

  return (
    <section className={props.isVisible ? "dignity-popup" : "dignity-popup dignity-popup-hidden"}>
      <button onClick={
        ()=> {
          closePopup();
        }
      }
      >123</button>
      <div className="popup-container">
        <h2>Я хочу участвовать во встрече</h2>
            <DignityForm />
      </div>
    </section>
  );
}
