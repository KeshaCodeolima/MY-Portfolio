import React from "react";
import './GitPage.css';
import GitImage from '../Images/gitrepositores.png';

function GitPage() {
    return (
        <>
            <div className="maingit" id="git">
                <div className="gitmain">
                    <h3>Git Repositoires.</h3>
                </div>
                <div className="gitbox1">
                    <div className="gitbox">
                        <img src={GitImage} alt="gitimage" className="gitimage" />
                        <p>Tourism Web</p>
                        <button className="buttongit">GIT HUB</button>
                    </div>
                    <div className="gitbox">
                        <img src={GitImage} alt="gitimage" className="gitimage" />
                        <p>Tourism Web1</p>
                        <button className="buttongit">GIT HUB</button>
                    </div>
                    <div className="gitbox">
                        <img src={GitImage} alt="gitimage" className="gitimage" />
                        <p>Tourism Web2</p>
                        <button className="buttongit">GIT HUB</button>
                    </div>
                    <div className="gitbox">
                        <img src={GitImage} alt="gitimage" className="gitimage" />
                        <p>Tourism Web3</p>
                        <button className="buttongit">GIT HUB</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GitPage