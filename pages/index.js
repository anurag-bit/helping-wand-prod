import Head from "next/head";
import Image from "next/image";
import buildspaceLogo from "../assets/buildspace-logo.png";
import { useState } from "react";

const Home = () => {
  const [userInput, setUserInput] = useState("");
  const [apiOutput, setApiOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);

    console.log("Calling OpenAI...");
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text);

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  };
  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };
  return (
    <>
      <>
        <div className="root">
          <Head>
            <title>Fiona | anurag-bit</title>
          </Head>
          <div className="container">
            <div className="header">
              <div className="header-title">
                <h1>Fiona</h1>
              </div>
              <br></br>
              <div>
                <iframe
                  src="https://giphy.com/embed/cu1HaFsymELztiENZk"
                  width="120"
                  height="127"
                  frameBorder="0"
                  className="giphy-embed"
                  allowFullScreen
                ></iframe>
                <p>
                  <a href="https://giphy.com/gifs/thedrewbarrymoreshow-drew-barrymore-taking-notes-show-cu1HaFsymELztiENZk"></a>
                </p>
              </div>
              <div className="header-subtitle">
                <h2>
                  Am implementation of Generative Pre-Trained transformer #v3!🗿
                </h2>
              </div>
              
              <p className= "high-light">
              <div className="INSTRUCT">
                <h1>How to get most out of this application!</h1>
              </div>
1. Be specific with what you ask, this is a generative model, optimised for providing you with elaborated content!<br></br>
2. Be Patient, being accurate with the detailes you want will give you better results.<br></br>
3.you can just drop the topic name and Fiona will actively generate your project content.<br></br>
4.Fiona is desgined to write you essay and project content.

                </p>
              <div className="prompt-container">
                <textarea
                  className="prompt-box"
                  placeholder="Cmon! start typing here"
                  value={userInput}
                  onChange={onUserChangedText}
                />
                <div className="prompt-buttons">
                  <a
                    className={
                      isGenerating
                        ? "generate-button loading"
                        : "generate-button"
                    }
                    onClick={callGenerateEndpoint}
                  >
                    <div className="generate">
                      {isGenerating ? (
                        <span className="loader"></span>
                      ) : (
                        <p>Generate</p>
                      )}
                    </div>
                  </a>
                </div>
                {apiOutput && (
                  <div className="output">
                    <div className="output-header-container">
                      <div className="output-header">
                        <h3>Output</h3>
                      </div>
                    </div>
                    <div className="output-content">
                      <p>{apiOutput}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="badge-container grow"></div>
      </>
      <div className="badge-container grow">
        <a
          href="https://www.github.com/anurag-bit"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <p>built Different By Anurag</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Home;
