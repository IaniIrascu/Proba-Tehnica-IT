import "../componentStyles/myPopup.css"

function Popup({ handleClose, show }) {
    
    const showHideClassName = show ? 'popup display-block' 
    : 'popup display-none';
  
    return (
      <div className={showHideClassName}>
        <section className="popup-main">
          Hai ba
          <button onClick={handleClose}>Close</button>
        </section>
      </div>
    );
  }
  
  export default Popup;