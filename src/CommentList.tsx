import Topbar from "./components/Topbar";
import "./CommentList.css";

function CommentList() {
    return (
        <div className="content">
            <Topbar></Topbar>

            <div className="panel commentListPanel">
                <h1>Comments</h1>

                <div className="commentListItem">
                    <p><span>by:</span> Username23</p>
                    <p><span>on:</span> Javascript knowledge test</p>
                    <p>This is all a bunch of text that means nothing. It's all meant to make it look like a real long comment</p>
                </div>

                <div className="commentListItem">
                    <p><span>by:</span> Username23</p>
                    <p><span>on:</span> Javascript knowledge test</p>
                    <p>This is all a bunch of text that means nothing. It's all meant to make it look like a real long comment</p>
                </div>
                
                <div className="commentListItem">
                    <p><span>by:</span> Username23</p>
                    <p><span>on:</span> Javascript knowledge test</p>
                    <p>This is all a bunch of text that means nothing. It's all meant to make it look like a real long comment</p>
                </div>
                
            </div>
        </div>
    )
}

export default CommentList;