import Head from "next/head";
import styles from "../styles/Home.module.scss";
import CodeEditor from "../components/CodeEditor";
import { useState } from "react";

export default function Home() {
  const [fontSize, setFontSize] = useState(16);
  const [indentWidth, setIndentWidth] = useState(2);

  return (
    <div className={styles.container}>
      <Head>
        <title>CodeMirror 6 Needs</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <h1>CodeMirror 6 Needs</h1>

        <div className={styles.options}>
          <div>
            <label htmlFor="indent-width">Indent Width</label>
            <select
              id="indent-width"
              onChange={(e) => {
                setIndentWidth(parseInt(e.target.value));
              }}
            >
              <option>2</option>
              <option>4</option>
              <option>6</option>
            </select>
          </div>
          <div>
            {/* https://codemirror.net/6/examples/styling/ */}
            <label htmlFor="syntax-highlighting">Syntax Highlighting</label>
            <select id="syntax-highlighting">
              <optgroup label="Dark Themes">
                <option>Twilight</option>
                <option>Solarized Dark</option>
                <option>Tomorrow Night</option>
                <option>Oceanic Dark</option>
                <option>Panda DuoTone</option>
                <option>Dark High</option>
                <option>Contrast Dark</option>
              </optgroup>
              <optgroup label="Light Themes">
                <option>Classic</option>
                <option>Solarized Light</option>
                <option>XQ Light</option>
                <option>Oceanic Light</option>
                <option>MDN Like</option>
                <option>DuoTone Light</option>
                <option>High Contrast Light</option>
              </optgroup>
            </select>
          </div>
          <div>
            <label htmlFor="font">Font</label>
            <select id="font">
              <option>Source Code Pro</option>
              <option>Courier Prime</option>
            </select>
          </div>
          <div>
            <label htmlFor="font-size">Font Size</label>
            <select
              id="font-size"
              onChange={(e) => {
                setFontSize(e.target.value);
              }}
            >
              <option value="16">16px</option>
              <option value="20">20px</option>
            </select>
          </div>
          <div>
            <label htmlFor="emmet">Emmet</label>
            <select id="emmet">
              <option>On</option>
              <option>Off</option>
            </select>
          </div>
          <div>
            {/* https://codemirror.net/6/docs/ref/#gutter.lineNumbers */}
            <label htmlFor="line-numbers">Line Numbers</label>
            <select id="line-numbers">
              <option>On</option>
              <option>Off</option>
            </select>
          </div>
          <div>
            <label htmlFor="line-wrapping">Line Wrapping</label>
            <select id="line-wrapping">
              <option>On</option>
              <option>Off</option>
            </select>
          </div>
          <div>
            {/* https://codemirror.net/6/docs/ref/#fold */}
            <label htmlFor="code-folding">Code Folding</label>
            <select id="code-folding">
              <option>On</option>
              <option>Off</option>
            </select>
          </div>
          <div>
            {/* https://codemirror.net/6/docs/ref/#matchbrackets */}
            {/* https://codemirror.net/6/docs/ref/#closebrackets */}
            <label htmlFor="match-brackets">Match Brackets/Tags</label>
            <select id="match-brackets">
              <option>On</option>
              <option>Off</option>
            </select>
          </div>
          <div>
            {/* https://codemirror.net/6/docs/ref/#autocomplete */}
            <label htmlFor="autocomplete">Autocomplete</label>
            <select id="autocomplete">
              <option>On</option>
              <option>Off</option>
            </select>
          </div>
        </div>

        {/* Languages! https://codemirror.net/6/examples/lang-package/ */}

        <div className={styles.codeEditors}>
          <CodeEditor
            title={<h2>HTML</h2>}
            className={styles.codeEditor}
            type="html"
            indentWidth={indentWidth}
          />
          <CodeEditor
            title={<h2>CSS</h2>}
            className={styles.codeEditor}
            type="css"
            indentWidth={indentWidth}
          />
          <CodeEditor
            title={<h2>JavaScript / JSX</h2>}
            className={styles.codeEditor}
            type="js"
            indentWidth={indentWidth}
          />
          <CodeEditor
            title={
              <h2>
                <a href="https://www.markdownguide.org/">Markdown</a>
              </h2>
            }
            className={styles.codeEditor}
            type="markdown"
            indentWidth={indentWidth}
          />
          <CodeEditor
            title={
              <h2>
                <a href="https://haml.info/">Haml</a>
              </h2>
            }
            className={styles.codeEditor}
            type="haml"
            indentWidth={indentWidth}
          />

          <CodeEditor
            title={
              <h2>
                <a href="https://pugjs.org/api/getting-started.html">Pug</a>
              </h2>
            }
            className={styles.codeEditor}
            type="pug"
            indentWidth={indentWidth}
          />

          <CodeEditor
            title={
              <h2>
                <a href="http://slim-lang.com/">Slim</a>
              </h2>
            }
            className={styles.codeEditor}
            type="slim"
            indentWidth={indentWidth}
          />

          <CodeEditor
            title={
              <h2>
                <a href="https://sass-lang.com/">SCSS</a>
              </h2>
            }
            className={styles.codeEditor}
            type="scss"
            indentWidth={indentWidth}
          />

          <CodeEditor
            title={
              <h2>
                <a href="https://sass-lang.com/">Sass</a>
              </h2>
            }
            className={styles.codeEditor}
            type="sass"
            indentWidth={indentWidth}
          />

          <CodeEditor
            title={
              <h2>
                <a href="https://lesscss.org/#">Less</a>
              </h2>
            }
            className={styles.codeEditor}
            type="less"
            indentWidth={indentWidth}
          />

          <CodeEditor
            title={
              <h2>
                <a href="https://stylus-lang.com/">Stylus</a>
              </h2>
            }
            className={styles.codeEditor}
            type="stylus"
            indentWidth={indentWidth}
          />

          <CodeEditor
            title={
              <h2>
                <a href="https://coffeescript.org/">CoffeeScript</a>
              </h2>
            }
            className={styles.codeEditor}
            type="coffeescript"
            indentWidth={indentWidth}
          />

          <CodeEditor
            title={
              <h2>
                <a href="https://www.typescriptlang.org/">TypeScript</a>
              </h2>
            }
            className={styles.codeEditor}
            type="typescript"
            indentWidth={indentWidth}
          />

          <CodeEditor
            title={
              <h2>
                <a href="https://livescript.net/">LiveScript</a>
              </h2>
            }
            className={styles.codeEditor}
            type="livescript"
            indentWidth={indentWidth}
          />

          <CodeEditor
            title={
              <h2>
                <a href="https://mozilla.github.io/nunjucks/">Nunjucks</a>
              </h2>
            }
            className={styles.codeEditor}
            type="nunjucks"
            indentWidth={indentWidth}
          />
        </div>
      </main>
    </div>
  );
}
