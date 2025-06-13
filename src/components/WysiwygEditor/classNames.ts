import clx from "clsx";
export const editorStyles = {
  editorContainer: clx(
    "max-w-4xl  w-full rounded-xl overflow-hidden border border-solid border-gray-30   "
  ),
  listsDiv: clx(
    "flexRow flex-wrap gap-2 md:gap-4 bg-primary px-4 py-3 border-b-2 border-solid border-gray-20 "
  ),
  ListStyle: clx(
    "text-xs capitalize font-medium text-tertiary text-gray-70 hover:text-gray-100 cursor-pointer Transition outline-none"
  ),
  iconToolsDiv: clx("flexRow gap-2 py-2 px-4 justify-between flex-wrap "),
  iconTool: clx(
    "outline-none opacity-70 hover:opacity-100  Transition text-sm font-semibold  rounded-md p-1    "
  ),
  editorStyle: clx(
    " overflow-y-auto p-4 bg-white text-sm leading-relaxed cursor-text",
    "border-t border-gray-30 focus-within:border-gray-40 Transition rounded-b-xl focus-within:shadow-md  "
  ),
  EditorBtn: clx(" w-16 rounded-lg text-white py-1 font-medium  Transition"),
};
