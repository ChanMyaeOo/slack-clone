import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./Login";
import Spinner from "react-spinkit";

function App() {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return (
            <AppLoadingContainer>
                <AppLoadingContents>
                    <img
                        src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
                        alt="slack"
                    />
                    <Spinner
                        name="ball-spin-fade-loader"
                        color="purple"
                        fadeIn="none"
                    />
                </AppLoadingContents>
            </AppLoadingContainer>
        );
    }
    return (
        <div className="App">
            <Router>
                {!user ? (
                    <Login />
                ) : (
                    <>
                        <Header />
                        <AppBody>
                            <Sidebar />
                            <Switch>
                                <Route path="/" exact>
                                    <Chat />
                                </Route>
                            </Switch>
                        </AppBody>
                    </>
                )}
            </Router>
        </div>
    );
}

export default App;

const AppBody = styled.div`
    display: flex;
    height: 100vh;
`;

const AppLoadingContainer = styled.div`
    display: grid;
    height: 100vh;
    width: 100%;
    place-items: center;
`;

const AppLoadingContents = styled.div`
    text-align: center;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img {
        height: 100px;
        padding: 20px;
        margin-bottom: 40px;
    }
`;
