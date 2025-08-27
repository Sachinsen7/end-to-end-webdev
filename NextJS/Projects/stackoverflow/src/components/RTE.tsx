"use client";
import MarkdownEditor from "@uiw/react-markdown-editor";
import dynamic from "next/dynamic";

const RTE = dynamic(
  () =>
    import("@uiw/react-markdown-editor").then((mod) => {
      return mod.default;
    }),
  {
    ssr: false,
  }
);

export const Markdownpreview = MarkdownEditor.Markdown;

export default RTE;
