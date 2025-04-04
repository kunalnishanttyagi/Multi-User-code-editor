"use client";

import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";

function PythonEditor({ content, onChange }) {
  const [data, setData] = useState(content);
  console.log(content);

  return (
    <div className=" border text-md border-gray-700">
      <CodeMirror
      height="632px"
      width="1410px"
        value={data}
        extensions={[javascript()]}
        theme={dracula}
        options={{
          lineNumbers: true, // Show line numbers
          indentWithTabs: true, // Use tabs for indentation
          tabSize: 2, // Set indentation width
          bracketMatching: true, // Highlight matching brackets
          lineWrapping: true, // Enable line wrapping
        }}
        onChange={(value) => {
          setData(value); // Update local state
          onChange(value); // Notify parent
        }}
      />
    </div>
  );
}

export default PythonEditor;
