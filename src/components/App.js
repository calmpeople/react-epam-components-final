import React, {Component} from "react";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MainContent from "./MainContent/MainContent";
import MovieList from "./MovieList/MovieList";
import FormAdd from "./FormAdd/FormAdd";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import './common-styles.scss';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isOpenAddMoviePopup: false
        }
    }
    toggleOpenAddMoviePopup = () => {
        this.setState({
            isOpenAddMoviePopup: !this.state.isOpenAddMoviePopup
        })
    }
    render() {
        return (
            <>
                <Header toggleOpen={this.toggleOpenAddMoviePopup} />
                <MainContent>
                    <ErrorBoundary>
                        <MovieList />
                    </ErrorBoundary>
                </MainContent>
                <Footer>
                    <p>
                        <strong>netflix</strong>roulette
                    </p>
                </Footer>
                <FormAdd isOpen={this.state.isOpenAddMoviePopup} toggleOpen={this.toggleOpenAddMoviePopup} />
            </>
        )
    }
}

export default App;