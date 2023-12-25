import { useState } from "react";
import { EXAMPLES } from "../data-with-examples";
import Section from "./Section";
import Tabs from "./Tabs";
import TabButton from "./TabButton";

export default function Examples() {
  const [selectedContent, setSelectedContent] = useState("");
  function handleClick(clickedEl) {
    setSelectedContent(clickedEl);
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedContent === "components"}
              onClick={() => {
                handleClick("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedContent === "jsx"}
              onClick={() => {
                handleClick("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedContent === "props"}
              onClick={() => {
                handleClick("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedContent === "state"}
              onClick={() => {
                handleClick("state");
              }}
            >
              State
            </TabButton>
          </>
        }
      >
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
      </Tabs>
    </Section>
  );
}
