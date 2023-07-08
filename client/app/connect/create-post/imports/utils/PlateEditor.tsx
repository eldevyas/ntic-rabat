import { Plate } from '@udecode/plate-common';

const editableProps = {
    placeholder: 'Type...',
    spellCheck: false,
    padding: '0 15px',
    style: {
        minHeight: '100px',
        // height: '100%',
        overflow: 'auto',
        outline: 'none',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    },
};

export default function BasicEditor() {
    return <Plate editableProps={editableProps} />;
}
