import { LuItalic } from "react-icons/lu";
import { LuUnderline } from "react-icons/lu";
import { LuBold } from "react-icons/lu";
import { FaBold } from "react-icons/fa";
export const Lists = [
  { id: 1, label: "file" },
  { id: 2, label: "edit" },
  { id: 3, label: "view" },
  { id: 4, label: "insert" },
  { id: 5, label: "format" },
  { id: 6, label: "tools" },
  { id: 7, label: "help" },
];

export const editorTools = [
  {
    id: 1,
    toolLabel: "Bold",
    style: "BOLD",
    toolIcon: <LuBold />,
  },
  {
    id: 2,
    toolIcon: <LuItalic />,
    toolLabel: "Italic",
    style: "ITALIC",
  },
  {
    id: 3,
    toolIcon: <LuUnderline />,
    toolLabel: "Underline",
    style: "UNDERLINE",
  },
];
