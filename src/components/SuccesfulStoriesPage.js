import Footer from "./Footer";
import SuccessfulStories from "./SuccessfulStories";
import Navi from "./Navi";


function SuccessfulStoriesPage() {
    return (
       <div className="SuccessfulStoriesPage">
       
         <h1 className="successfulstories-h1">Успішні історії</h1>
        <SuccessfulStories/>
       
       </div>
    );
}

export default SuccessfulStoriesPage;