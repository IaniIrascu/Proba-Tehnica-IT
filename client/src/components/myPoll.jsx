import "../componentStyles/myPoll.css"

function Poll ( { pollId }) {

    const intrebare = "Ce animal se afla pe tricourile departamentului de IT?"
    const uniqueName = `radio_${pollId}`;
    return(
            <p className="myPerfectPoll">
                <h1 className="textStyle">{intrebare}</h1>
                <h5>Make a choice:</h5>
                <label class="radioContainer">
                    <input type="radio" name={uniqueName}/>
                    <span class="checkmark"/> Un lenes
                    </label>
                    <label class="radioContainer"> 
                    <input type="radio" name={uniqueName}/>
                    <span class="checkmark"/> O testoasa
                    </label>
                    <label class="radioContainer">
                    <input type="radio" name={uniqueName}/>
                    <span class="checkmark"/> Un elefant
                </label>
            </p>
)}

export default Poll;