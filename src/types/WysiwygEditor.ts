import type { EditorState } from "draft-js";

export type WysiwygEditorProps = {
  value?: any;
  onChange?: (val: any) => void;
  className?: string;
  style?: React.CSSProperties;
  renderToolbar?: (options: {
    currentStyle: ReturnType<EditorState["getCurrentInlineStyle"]>;
    toggleStyle: (style: string) => void;
  }) => React.ReactNode;
};
