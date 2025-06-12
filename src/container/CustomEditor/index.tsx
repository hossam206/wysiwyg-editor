import { useState } from "react";
import WysiwygEditor from "../../components/WysiwygEditor";
import { customEditorStyles } from "./classNames";
import { ContentState, convertToRaw } from "draft-js";

const CustomEditor = () => {
  const [activeEditor, setActiveEditor] = useState("controlled");
  // pass content to controlled editor
  const initialText = "feel free to type what you want 😊";
  const [editorContent, setEditorContent] = useState(() =>
    convertToRaw(ContentState.createFromText(initialText))
  );
  return (
    <div className=" container">
      <div className="flexCol items-center ">
        <h1 className="pt-6 text-xl font-semibold">Custom WYSIWYG Editor</h1>
        <div className={customEditorStyles.container}>
          {/* toggle between controlled % uncontrolled editor */}
          <div className={customEditorStyles.toggleDiv}>
            {["controlled", "uncontrolled"].map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveEditor(item)}
                className={`${customEditorStyles.toggleButton} ${
                  activeEditor === item
                    ? "bg-gray-100 text-white "
                    : "bg-primary"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          {/* toggle show between two editors */}
          {activeEditor === "controlled" ? (
            <WysiwygEditor
              key="controlled"
              value={editorContent}
              onChange={(updatedContent) => {
                // console.log("Controlled Updated:", updatedContent);
                setEditorContent(updatedContent);
              }}
            />
          ) : (
            <WysiwygEditor key="uncontrolled" /> // uncontrolled editor
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomEditor;
