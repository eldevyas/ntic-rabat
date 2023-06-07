import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from "jodit-react"
import { Theme, useColorScheme } from '@mui/material';

const Editor = ({ placeholder }: any, props: any) => {
    const { mode } = useColorScheme();
    const editor = useRef(null);
    const [content, setContent] = useState('');
    // const content = useRef(null);


    console.log(content)
    return (
        <JoditEditor
            ref={editor}
            value={content}
            config={{
                // if them is dark , set the theme to dark
                theme: mode == "dark" ? "dark" : "default",
                // sizeLG: 900,
                // sizeMD: 700,
                // sizeSM: 400,
                // toolbar: true,
                // enter: "p",
                // defaultMode: Jodit.MODE_WYSIWYG,
                // useSplitMode: false,

                // colorPickerDefaultTab: 'background',
                buttons: [
                    'source', '|',
                    'bold',
                    'underline',
                    'italic', '|',
                    'ul',
                    'ol', '|',
                    // 'outdent', 'indent',  '|',
                    'font',
                    'fontsize',
                    'brush',
                    // 'paragraph', '|',
                    'image',
                    'video',
                    'table',
                    'link', '|',
                    'align', 'undo', 'redo', '|',
                    'hr',
                    'eraser',
                    // 'copyformat', '|',
                    // 'symbol',
                    // 'fullsize',
                    // 'print',
                    // 'about'
                ],
            }}
            onBlur={
                (newContent) => setContent(newContent)
            } // preferred to use only this option to update the content for performance reasons

        />
    );
};
export default Editor;