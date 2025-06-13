import { ContentState, convertToRaw } from "draft-js";
import { expect, vi, test } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import WysiwygEditor from "../../components/WysiwygEditor";
// test Bold Func
test("apply bold style to the text when clicked", () => {
  const testText = "TestBold";
  const initialContent = convertToRaw(ContentState.createFromText(testText)); //convert text to raw content
  const onChangeMock = vi.fn();
  render(<WysiwygEditor value={initialContent} onChange={onChangeMock} />);
  const boldIcon = screen.getByTestId("toolbar-bold");
  fireEvent.mouseDown(boldIcon);
  expect(onChangeMock).toHaveBeenCalled();
});
// test Italic Func
test("apply Italic style to the text when clicked", () => {
  const testText = "TestItalic";
  const initialContent = convertToRaw(ContentState.createFromText(testText)); 
  const onChangeMock = vi.fn();
  render(<WysiwygEditor value={initialContent} onChange={onChangeMock} />);
  const ItalicIcon = screen.getByTestId("toolbar-italic");
  fireEvent.mouseDown(ItalicIcon);
  expect(onChangeMock).toHaveBeenCalled();
});
// test underline Func
test("apply underline style to the text when clicked", () => {
  const testText = "TestUnderline";
  const initialContent = convertToRaw(ContentState.createFromText(testText)); 
  const onChangeMock = vi.fn();
  render(<WysiwygEditor value={initialContent} onChange={onChangeMock} />);
  const underlineIcon = screen.getByTestId("toolbar-underline");
  fireEvent.mouseDown(underlineIcon);
  expect(onChangeMock).toHaveBeenCalled();
});
