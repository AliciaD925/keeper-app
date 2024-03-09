import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteyThing) => (
        <Note
          key={noteyThing.key}
          title={noteyThing.title}
          content={noteyThing.content}
        />
      ))}
      ;
      <Footer />
    </div>
  );
}

export default App;
