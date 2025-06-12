import WysiwygEditor from "../../components/WysiwygEditor";

const CustomEditor = () => {
  return (
    <div className=" container">
      <div className="flexCol items-center ">
        <h1 className="pt-6 text-xl font-semibold">Custom WYSIWYG Editor</h1>
        <WysiwygEditor />
      </div>
    </div>
  );
};

export default CustomEditor;
