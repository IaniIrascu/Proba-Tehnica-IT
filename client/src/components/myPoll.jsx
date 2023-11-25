import "../componentStyles/myPoll.css"

function Poll () {

    const intrebare = "Ce animal se afla pe tricourile departamentului de IT?"

    return(
    <div>
        <div className="divParinte">
                <p className="myPerfectPoll">
                <h1 className="textStyle">{intrebare}</h1>
                <h5>Make a choice:</h5>
                <label class="radioContainer">Un lenes
                    <input type="radio" name="radio"/>
                    <span class="checkmark"></span> 
                    </label>
                    <label class="radioContainer"> O testoasa
                    <input type="radio" name="radio"></input>
                    <span class="checkmark"></span>
                    </label>
                    <label class="radioContainer">Un elefant
                    <input type="radio" name="radio"></input>
                    <span class="checkmark"></span>
                </label>
                </p>
                <p className="myPerfectPoll">
                <h1 className="textStyle">{intrebare}</h1>
                <h5>Make a choice:</h5>
                <label class="radioContainer">Un lenes
                    <input type="radio" name="radio"/>
                    <span class="checkmark"></span> 
                    </label>
                    <label class="radioContainer"> O testoasa
                    <input type="radio" name="radio"></input>
                    <span class="checkmark"></span>
                    </label>
                    <label class="radioContainer">Un elefant
                    <input type="radio" name="radio"></input>
                    <span class="checkmark"></span>
                </label>
                </p>
        </div>
        
        <div className="divParinte">
                <p className="myPerfectPoll">
                <h1 className="textStyle">{intrebare}</h1>
                <h5>Make a choice:</h5>
                <label class="radioContainer">Un lenes
                    <input type="radio" name="radio"/>
                    <span class="checkmark"></span> 
                    </label>
                    <label class="radioContainer"> O testoasa
                    <input type="radio" name="radio"></input>
                    <span class="checkmark"></span>
                    </label>
                    <label class="radioContainer">Un elefant
                    <input type="radio" name="radio"></input>
                    <span class="checkmark"></span>
                </label>
                </p>
                <p className="myPerfectPoll">
                <h1 className="textStyle">{intrebare}</h1>
                <h5>Make a choice:</h5>
                <label class="radioContainer">Un lenes
                    <input type="radio" name="radio"/>
                    <span class="checkmark"></span> 
                    </label>
                    <label class="radioContainer"> O testoasa
                    <input type="radio" name="radio"></input>
                    <span class="checkmark"></span>
                    </label>
                    <label class="radioContainer">Un elefant
                    <input type="radio" name="radio"></input>
                    <span class="checkmark"></span>
                </label>
                </p>
        </div>
    </div>
)}

export default Poll;