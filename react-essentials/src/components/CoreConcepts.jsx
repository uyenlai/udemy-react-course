import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data-with-examples";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem, index) => {
              return <CoreConcept key={index} {...conceptItem} />;
            })}
          </ul>
        </section>
    )
}