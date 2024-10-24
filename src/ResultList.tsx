import Topbar from "./components/Topbar";
import "./ResultList.css";

function ResultList() {
    return (
        <div className="content">
            <Topbar></Topbar>

            <div className="panel resultPanel">
                <h1>Form results</h1>
                <div className="resultItem">
                    <div className="resultHead">
                        
                        <p><span>by:</span> Username23</p>
                        <p><span>in:</span> JS knowledge test</p>
                    </div>

                    <div className="resultBody">
                        <p className="AShortText1"><span>1.-</span> These are answers to a form</p>
                        <p className="ALongText1"><span>2.-</span> There should be 4 of each type (16), but that would make this demo code way too long, instead how many did i put?</p>
                        <p className="AInteger1"><span>3.-</span> 4</p>
                        <p className="ABoolean1"><span>4.-</span> Yes</p>
                    </div>
                </div>

                <div className="resultItem">
                    <div className="resultHead">
                        
                        <p><span>by:</span> Username23</p>
                        <p><span>in:</span> JS knowledge test</p>
                    </div>

                    <div className="resultBody">
                        <p className="AShortText1"><span>1.-</span> These are answers to a form</p>
                        <p className="ALongText1"><span>2.-</span> There should be 4 of each type (16), but that would make this demo code way too long, instead how many did i put?</p>
                        <p className="AInteger1"><span>3.-</span> 4</p>
                        <p className="ABoolean1"><span>4.-</span> Yes</p>
                    </div>
                </div>

                <div className="resultItem">
                    <div className="resultHead">
                        
                        <p><span>by:</span> Username23</p>
                        <p><span>in:</span> JS knowledge test</p>
                    </div>

                    <div className="resultBody">
                        <p className="AShortText1"><span>1.-</span> These are answers to a form</p>
                        <p className="ALongText1"><span>2.-</span> There should be 4 of each type (16), but that would make this demo code way too long, instead how many did i put?</p>
                        <p className="AInteger1"><span>3.-</span> 4</p>
                        <p className="ABoolean1"><span>4.-</span> Yes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultList;