import "../componentStyles/myPoll.css"

function Poll ( { pollTitle, pollOptions, pollId }) {

    if(!pollTitle)
         pollTitle = "Ce animal se afla pe tricourile departamentului de IT?"
    if(!pollOptions)
        pollOptions = ["Un lenes", "O testoasa", "Un elefant"]
    const uniqueName = `radio_${pollId}`;
    return(
            <p className="myPerfectPoll">
                <h1 className="textStyle">{pollTitle}</h1>
                <h5>Make a choice:</h5>
                <label class="radioContainer">
                    <input type="radio" name={uniqueName}/>
                    <span class="checkmark"/> {pollOptions[0]}
                    </label>
                    <label class="radioContainer"> 
                    <input type="radio" name={uniqueName}/>
                    <span class="checkmark"/> {pollOptions[1]}
                    </label>
                    <label class="radioContainer">
                    <input type="radio" name={uniqueName}/>
                    <span class="checkmark"/> {pollOptions[2]}
                </label>
            </p>
)}

export default Poll;