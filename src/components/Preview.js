import React from "react";

// import monaco editor
import Editor from "@monaco-editor/react";

const Preview = ({ conf }) => {
  let value = "";

  // concatenation of the lines obtained from the table in the date.js
  let code = conf.data;
  code.forEach((obj) => {
    value += obj += "\n";
  });

  return (
    <Editor
      height="100%"
      theme="vs-dark"
      language={conf.language}
      value={value}
      options={{
        wordWrap: "on",
        readOnly: true,
        formatOnPaste: true,
        formatOnType: true,
      }}
    />
  );
};

export default Preview;
