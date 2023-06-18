import { useRef, useMemo } from 'react'
import JoditEditor from 'jodit-react'

const Jodit = ({ content, onContentChange, mode }: any) => {
    const editor = useRef(null)

    return (
        <JoditEditor
            value={content}
            config={{
                theme: mode == "dark" ? "dark" : "default",
                buttons: [
                    'source', '|',
                    'bold',
                    'underline',
                    'italic', '|',
                    'ul',
                    'ol', '|',
                    'font',
                    'fontsize',
                    'brush',
                    'image',
                    'video',
                    'table',
                    'link', '|',
                    'align', 'undo', 'redo', '|',
                    'hr',
                    'eraser',
                ],
                uploader: {
                    insertImageAsBase64URI: true,
                }

            }}
            onBlur={onContentChange}
        // {...props}

        />
    )
}
export default Jodit