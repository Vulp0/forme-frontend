import Topbar from "./components/Topbar";
import "./CreateTemplate.css";

function CreateTemplate() {
    return (
        <div className="content">
            <Topbar></Topbar>

            <div className="panel">
                <form id="" action="">
                    <h1>Create template</h1>
                    <div className="combo">
                        <label htmlFor="TemplateName">Template name</label>
                        <input id="TemplateName" className="inputField" type="text" name="AuthorName" placeholder="Leave blank to omit"/>
                    </div>

                    <div className="selector">
                        <label htmlFor="">Topic</label>
                        <select name="" id="">
                            <option value="">Quiz1</option>
                            <option value="">Quiz2</option>
                            <option value="">Quiz3</option>
                            <option value="">Quiz4</option>
                        </select>
                    </div>

                    <div className="combo">
                        <label htmlFor="Tag">Tag</label>
                        <input id="Tag" className="inputField" type="text" name="AuthorName" placeholder="Leave blank to omit"/>
                    </div>

                    <div className="combo">
                        <label htmlFor="QShortText1">Short text question 1</label>
                        <input id="QShortText1" className="inputField" type="text" name="AuthorName" placeholder="Leave blank to omit"/>
                    </div>

                    <div className="combo">
                        <label htmlFor="QShortText2">Short text question 2</label>
                        <input id="QShortText2" className="inputField" type="text" name="AuthorName" placeholder="Leave blank to omit"/>
                    </div>

                    <div className="combo">
                        <label htmlFor="QShortText3">Short text question 3</label>
                        <input id="QShortText3" className="inputField" type="text" name="AuthorName" placeholder="Leave blank to omit"/>
                    </div>

                    <div className="combo">
                        <label htmlFor="QShortText4">Short text question 4</label>
                        <input id="QShortText4" className="inputField" type="text" name="AuthorName" placeholder="Leave blank to omit"/>
                    </div>

                    <div className="combo">
                        <label htmlFor="QLongText1">Long text question 1</label>
                        <input id="QLongText1" className="inputField" type="text" name="AuthorName" placeholder="Leave blank to omit"/>
                    </div>

                    <div className="combo">
                        <label htmlFor="QLongText2">Long text question 2</label>
                        <input id="QLongText2" className="inputField" type="text" name="AuthorName" placeholder="Leave blank to omit"/>
                    </div>

                    <div className="combo">
                        <label htmlFor="QLongText3">Long text question 3</label>
                        <input id="QLongText3" className="inputField" type="text" name="AuthorName" placeholder="Leave blank to omit"/>
                    </div>

                    <div className="combo">
                        <label htmlFor="QLongText4">Long text question 4</label>
                        <input id="QLongText4" className="inputField" type="text" name="AuthorName" placeholder="Leave blank to omit"/>
                    </div>

                    <div className="combo">
                        <label htmlFor="QInteger1">Numeric question 1</label>
                        <input id="QInteger1" className="inputField" type="text" name="AuthorName" placeholder="Leave blank to omit"/>
                    </div>

                    <div className="combo">
                        <label htmlFor="QInteger2">Numeric question 2</label>
                        <input id="QInteger2" className="inputField" type="text" name="AuthorName" placeholder="Leave blank to omit"/>
                    </div>

                    <div className="combo">
                        <label htmlFor="QInteger3">Numeric question 3</label>
                        <input id="QInteger3" className="inputField" type="text" name="AuthorName" placeholder="Leave blank to omit"/>
                    </div>

                    <div className="combo">
                        <label htmlFor="QInteger4">Numeric question 4</label>
                        <input id="QInteger4" className="inputField" type="text" name="AuthorName" placeholder="Leave blank to omit"/>
                    </div>

                    <div className="combo">
                        <label htmlFor="QBoolean1">Checkbox 1</label>
                        <input id="QBoolean1" className="inputField" type="text" name="AuthorName" placeholder="Leave blank to omit"/>
                    </div>

                    <div className="combo">
                        <label htmlFor="QBoolean2">Checkbox 2</label>
                        <input id="QBoolean2" className="inputField" type="text" name="AuthorName" placeholder="Leave blank to omit"/>
                    </div>

                    <div className="combo">
                        <label htmlFor="QBoolean3">Checkbox 3</label>
                        <input id="QBoolean3" className="inputField" type="text" name="AuthorName" placeholder="Leave blank to omit"/>
                    </div>

                    <div className="combo">
                        <label htmlFor="QBoolean4">Checkbox 4</label>
                        <input id="QBoolean4" className="inputField" type="text" name="AuthorName" placeholder="Leave blank to omit"/>
                    </div>
                    
                    <button type="submit">Create</button>
                </form>
            </div>
        </div>
    )
}

export default CreateTemplate;