import Topbar from "./components/Topbar";
import "./TemplateList.css";

function TemplateList() {
    return (
        <div className="content">
            <Topbar></Topbar>

            <div className="panel templateListPanel">
                <h1>My templates</h1>
                {/* <div className="templateListItem"></div> */}
                <table>
                    <thead>
                        <tr>
                            <th>UUID</th>
                            <th>Name</th>
                            <th>Results</th>
                            <th>Comments</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>4473</td>
                            <td>Javascript knowledge test</td>
                            <td>55</td>
                            <td>12</td>
                        </tr>

                        <tr>
                            <td>4473</td>
                            <td>Javascript knowledge test really long title</td>
                            <td>55</td>
                            <td>12</td>
                        </tr>

                        <tr>
                            <td>4473</td>
                            <td>Javascript knowledge test</td>
                            <td>55</td>
                            <td>12</td>
                        </tr>

                        <tr>
                            <td>4473</td>
                            <td>Javascript knowledge test</td>
                            <td>55</td>
                            <td>12</td>
                        </tr>
                        
                        <tr>
                            <td>4473</td>
                            <td>Javascript knowledge test</td>
                            <td>55</td>
                            <td>12</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TemplateList;