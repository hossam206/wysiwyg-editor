import { useEffect, useState } from "react";
import WysiwygEditor from "../../components/WysiwygEditor";
import { customEditorStyles } from "./classNames";
import { ContentState, convertToRaw } from "draft-js";
import { editorTools } from "../../components/WysiwygEditor/assets";

const CustomEditor = () => {
  const [activeEditor, setActiveEditor] = useState("controlled");
  const [loading, setLoading] = useState(true);
  // pass content to controlled editor
  const initialText = "feel free to type what you want 😊";
  const [editorContent, setEditorContent] = useState(() =>
    convertToRaw(ContentState.createFromText(initialText))
  );
  // add simulate loading state
  useEffect(() => {
    const simulateFetchLoading = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(simulateFetchLoading);
  }, []);
  return (
    <div className=" container">
      <div className="flexCol items-center ">
        <h1 className="pt-6 text-xl font-semibold">Custom WYSIWYG Editor</h1>
        {loading ? (
          <div className={customEditorStyles.loadingDiv}>
            <img
              src="/Images/loader.svg"
              alt="loading spin"
              className="w-14 h-14"
            />
            <p className="text-gray-70  ">Loading editor content...</p>
          </div>
        ) : (
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
              <>
                <h1 className="font-medium text-sm text-center  ">
                  This is controlled editor manage his own content
                </h1>
                <WysiwygEditor
                  key="controlled"
                  value={editorContent}
                  onChange={(updatedContent) => {
                    // console.log("Controlled Updated:", updatedContent);
                    setEditorContent(updatedContent);
                  }}
                />
              </>
            ) : (
              // uncontrolled editor
              <>
                <h2 className="font-medium text-sm text-center  ">
                  This is uncontrolled editor accept props like styles ,
                  classNames <br /> and customToolbar
                </h2>
                <WysiwygEditor
                  key="uncontrolled"
                  className="bg-slate-50 shadow-sm"
                  style={{ borderRadius: "20px" }}
                  renderToolbar={({ currentStyle, toggleStyle }) => (
                    <div className="flex gap-2 p-2 bg-primary">
                      {editorTools.map((item) => (
                        <button
                          key={item.id}
                          onMouseDown={(e) => {
                            e.preventDefault();
                            toggleStyle(item.style);
                          }}
                          className={`p-1 ${
                            currentStyle.has(item.style)
                              ? "text-white font-bold bg-black  rounded-md"
                              : "text-gray-40 "
                          }`}
                        >
                          {item.customToolbarIcon}
                        </button>
                      ))}
                    </div>
                  )}
                />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomEditor;
