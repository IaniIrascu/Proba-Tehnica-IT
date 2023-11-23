import "../componentStyles/myPoll.css"

function Poll () {

    const intrebare = "Ce animal se afla pe tricourile departamentului de IT?"

    return(
    <div className="divParinte">
            <p className="myPerfectPoll">
                <h1 className="textStyle">{intrebare}</h1>
                <button>Press</button>
                <text>Un elefant</text>
            </p>
            <p className="myPerfectPoll">
                <h1 className="textStyle">{intrebare}</h1>
                <button>Press</button>
                <text className="textStyle">Un elefant</text>
            </p>
    </div>
)}

export default Poll;