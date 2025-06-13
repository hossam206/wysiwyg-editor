import clx from "clsx";
export const customEditorStyles = {
  container: clx(
    "flex flex-col items-center justify-center gap-4 w-full h-screen"
  ),
  loadingDiv: clx(
    "flexCol items-center gap-1  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  ),
  toggleDiv: clx(
    "max-w-[200px] w-full  gap-2   flexRow justify-between bg-primary rounded-md overflow-hidden text-sm font-semibold "
  ),
  toggleButton: clx(
    "outline-none  px-3 py-1 rounded-md capitalize Transition    transition-all"
  ),
};
