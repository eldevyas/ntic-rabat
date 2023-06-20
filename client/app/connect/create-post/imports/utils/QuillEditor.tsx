import React from 'react'
import ReactQuill from "react-quill"
import "quill/dist/quill.snow.css";
import { set } from 'lodash';
import { useQuill } from 'react-quilljs';

const QuillEditor = ({ content, onContentChange }: any) => {

    const modules = {
        toolbar: [

            [{ 'header': [1, 2, 3, 4, 5, false] }],
            [{ 'font': [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'align': [] }],
            ['link', 'image', 'code-block'],
            ['clean'],
        ],


    };
    const formats = ['code-block', 'code', 'header', 'font', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'align', 'link', 'image', 'color', 'background'];

    const counterRef = React.useRef();
    const { quill, quillRef, Quill } = useQuill({ modules: modules, formats: formats, });

    React.useEffect(() => {
        if (quill) {
            quill.on('text-change', (delta, oldDelta, source) => {
                onContentChange(quill.root.innerHTML);
            });
            quill.clipboard.dangerouslyPasteHTML(content);
        }
    }, [quill]);

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div ref={quillRef} />
        </div>
    );
}

export default QuillEditor