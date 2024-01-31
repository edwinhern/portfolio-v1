import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', ts);

const CodeFieldComponent = ({ value }: any) => {
  return (
    <div className="rounded-lg">
      <SyntaxHighlighter language={value.language} style={dracula}>
        {value.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeFieldComponent;
