import NavBar from "./NavBar";
import NewsAddForm from "./NewsAddForm";
import NewsFilter from "./NewsFilter";
import NewsList from "./NewsList/NewsList";
import { ToastContainer } from "react-toastify";


export default function App() {
    return (
        <div className="app">
            <ToastContainer theme="dark" />
            <NavBar />
            <div className="content">
                <NewsList />
                <div className="content__page">
                    <NewsAddForm />
                    <NewsFilter />
                </div>
            </div>
        </div>
    )
}
