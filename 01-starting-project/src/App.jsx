import { useState } from "react";
import { CORE_CONCEPTS } from "./data-with-examples.js";
import { EXAMPLES } from "./data-with-examples.js";
import Header from "../src/components/Header/Header.jsx";
import CoreConcept from "../src/components/CoreConcept.jsx";
import TabButton from "../src/components/TabButton.jsx";

function App() {
  const [selectedContent, setSelectedContent] = useState("");
  function handleClick(clickedEl) {
    setSelectedContent(clickedEl);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem, index) => {
              return <CoreConcept key={index} {...conceptItem} />;
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedContent === "components"}
              handleClick={() => {
                handleClick("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedContent === "jsx"}
              handleClick={() => {
                handleClick("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedContent === "props"}
              handleClick={() => {
                handleClick("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedContent === "state"}
              handleClick={() => {
                handleClick("state");
              }}
            >
              State
            </TabButton>
          </menu>
          {!selectedContent && <p>Please select a topic!</p>}
          {selectedContent && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedContent].title}</h3>
              <p>{EXAMPLES[selectedContent].description}</p>
              <pre>
                <code>{EXAMPLES[selectedContent].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
