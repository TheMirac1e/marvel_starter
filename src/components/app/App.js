import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";
import SingleComic from "../singleComic/SingleComic"
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/img/vision.png';


const App = () => {
  const [selectedChar, setChar] = useState(null);

  const onCharSelected = (id) => {
    setChar(id)
  }

  return (
    <div className="app">
      <AppHeader />
      <main>
        <Routes>
          <Route path='/marvel_starter'
            element={
              <>
                <ErrorBoundary>
                  <RandomChar />
                </ErrorBoundary>
                <div className="char__content">
                  <ErrorBoundary>
                    <CharList onCharSelected={onCharSelected} />
                  </ErrorBoundary>
                  <ErrorBoundary>
                    <CharInfo charId={selectedChar} />
                  </ErrorBoundary>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision" />
              </>
            } />
          <Route path='/comics'
            element={
              <>
                <AppBanner />
                <ComicsList />
              </>
            } />
          <Route path='/comics/:id'
            element={
              <SingleComic />
            } />
        </Routes>
      </main>
    </div>
  )
}

export default App;
