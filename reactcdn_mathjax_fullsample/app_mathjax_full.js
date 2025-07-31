function App() {
  const [count, setCount] = React.useState(0);

  // 初回に一度だけ実行（最初の表示用）
  React.useEffect(() => {
    if (window.MathJax && window.MathJax.typeset) {
      window.MathJax.typeset();
    }
  }, []);

  // countが変わったときにも再実行（再描画用）
  React.useEffect(() => {
    if (window.MathJax && window.MathJax.typeset) {
      window.MathJax.typeset();
    }
  }, [count]);

  return (
    <div>
      <h1>React-CDN + MathJax テンプレート</h1>
      <p>上の数式: <span>{"$y = ax^2 + bx + c$"}</span></p>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <div className="box">
        <p>これは状態管理のサンプルです。</p>
        <p>中の数式: <span>{"$\int x^2 dx = \frac{1}{3}x^3 + C$"}</span></p>
      </div>
      <p>下の数式: <span>{"$\frac{dy}{dx} = 2ax + b$"}</span></p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
