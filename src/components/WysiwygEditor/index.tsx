import { useState, useCallback } from "react";

import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import { Lists, editorTools } from "./assets";
import { editorStyles } from "./classNames";
import clx from "clsx";
const WysiwygEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const currentStyle = editorState.getCurrentInlineStyle(); //to check if the current active style

  const handleChange = (state: EditorState) => {
    setEditorState(state);
  };

  //memoize the result
  const toggleInlineStyle = useCallback(
    (style: string) => {
      setEditorState(RichUtils.toggleInlineStyle(editorState, style)); //add choosen style to the text
    },
    [editorState]
  );

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className={editorStyles.editorContainer}>
        {/* lists */}
        <div className={editorStyles.listsDiv}>
          {Lists?.map((item) => (
            <button key={item.id} className={editorStyles.ListStyle}>
              {item.label}
            </button>
          ))}
        </div>
        <div className={editorStyles.iconToolsDiv}>
          {editorTools?.map((item) => {
            const isActive = currentStyle.has(item.style);
            return (
              <button
                key={item.id}
                className={clx(
                  editorStyles.iconTool,
                  isActive && "bg-gray-20 border border-solid border-gray-40"
                )}
                onMouseDown={(e) => {
                  e.preventDefault();
                  toggleInlineStyle(item.style);
                }}
              >
                {item.toolIcon}
              </button>
            );
          })}
        </div>
        <div className={editorStyles.editorStyle}>
          <div className="min-h-[200px] max-h-[400px] w-full">
            <Editor editorState={editorState} onChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WysiwygEditor;
