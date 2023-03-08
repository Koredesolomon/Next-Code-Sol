import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { useEffect } from 'react'


const TextBox = ({onChange}) => {
    const { quill, quillRef } = useQuill();

    // useEffect(() => {
    //     if (quill) {
    //       // if (quill.root.innerHTML !== text) {
    //         quill.clipboard.dangerouslyPasteHTML(text);
    //       // }
    //     }
    //   }, [quill, text]);

      useEffect(() => {
        if (quill) {
          quill.on('text-change', (delta, oldDelta, source) => {
            // console.log(quill.root.innerHTML); // Get innerHTML using quill
            onChange(quill.root.innerHTML)
          });
        }
      }, [quill]);
    return (
      <div className="relative">
        <div ref={quillRef} />
      </div>
    )
}
export default TextBox;