import NavBar from "./NavBar";
import NewsAddForm from "./NewsAddForm";
import NewsFilter from "./NewsFilter";
import NewsList from "./NewsList";


function App() {
    return (
        <div className="App">
            <NavBar />
            <div className="content">
                <NewsList />
                <div className="content__page">
                    <NewsAddForm />
                    <NewsFilter />
                </div>
            </div>
        </div>
    );
}

export default App;