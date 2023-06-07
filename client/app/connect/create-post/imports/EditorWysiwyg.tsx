import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { styled } from '@mui/material/styles';
import { useColorScheme } from '@mui/material';

const ControlledEditor = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const { mode } = useColorScheme();

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };

    const toolbarStyle = {
        backgroundColor: mode === "light" ? "white" : "black",
    };

    return (
        <>
            <Editor
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                wrapperStyle={{
                    width: "100%",
                    backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                            ? theme.palette.primary.main
                            : theme.palette.primary.light,
                }}
                editorStyle={{
                    height: "100%",
                    border: "1px solid #f1f1f1",
                    lineHeight: "0.5rem",
                    padding: "0rem 1rem",
                    minHeight: "10rem",
                    borderRadius: "0.5rem",
                    backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                            ? theme.palette.primary.main
                            : theme.palette.primary.light,
                }}
                toolbar={{
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true, color: "red" },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                    // inline: {
                    //     inDropdown: true,
                    //     className: undefined,
                    //     component: undefined,
                    //     dropdownClassName: undefined,
                    //     // options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'],
                    //     bold: { className: undefined, color: "red" },
                    //     italic: { className: undefined, color: "red" },
                    //     underline: { className: undefined, color: "red" },
                    //     strikethrough: { className: undefined, color: "red" },
                    //     monospace: { className: undefined, color: "red" },
                    //     superscript: { className: undefined, color: "red" },
                    //     subscript: { className: undefined, color: "red" },
                    // },

                }}
                toolbarStyle={toolbarStyle}
                editorState={editorState}

                onEditorStateChange={onEditorStateChange}
            />
            {/* <textarea
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      /> */}
        </>
    );
};

export default ControlledEditor;
