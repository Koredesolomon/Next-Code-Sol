import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { useEffect } from 'react'


const QuestionForm = ({text, onChange}) => {
    const { quill, quillRef } = useQuill();

    useEffect(() => {
        if (quill) {
          quill.clipboard.dangerouslyPasteHTML(text);
        }
      }, [quill]);

      useEffect(() => {
        if (quill) {
          quill.on('text-change', (delta, oldDelta, source) => {
            console.log(quill.root.innerHTML); // Get innerHTML using quill
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
export default QuestionForm;