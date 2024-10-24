import logo from './logo.svg';
import './App.css';

function App() {
  const learnings = [
    "9/22:自分なりのWeb開発チュートリアルを執筆中。Firebaseについての勉強もした。大学関係では、物理学の勉強をした。AIを提携して、WebカメラをつかったWebアプリ開発をしてみたい。Streamlitで作れるかな",
    "9/23:サークルの開発関係で少し時間を遅らせての執筆。Firebaseのセキュリティについて学んだけど、アウトプットができてないのと、使う当てがない。Astroの勉強もまだ始められてない。HTTPリクエストだけをしまくっている。大学の勉強優先で頑張っている。",
  ]
  var paper = learnings.map(item => <li>{item}</li>)
  return (
    <div>
      <navi />
      <h1>プロフィール</h1>
      <p>たくみ</p>
      <a>大学生エンジニア。フルスタック開発者を目指してスキルアップ中。セキュリティら辺の学習が甘いので、CTFとかやってみたいんです。最新の情報を取り入れる体制を整えてる最中。</a>
      <p>2024 〇〇大学進学</p>
      <p>〇〇大学在籍中</p>
      <h1>学習中のスキル</h1>
      <ul>
      <li>React</li>
      <li>Typescript</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>TAILWINDCSS</li>
      <li>Astro</li>
      </ul>
      <h1>学習したいスキル</h1>
      <ul>
        <li>Blenderでモデル制作</li>
        <li>C#でアプリケーション開発</li>
        <li>アーキテクチャ</li>
        <li>競技プログラミング</li>
        <li>CTF</li>
        <li>その他</li>
      </ul>
      <h1>学習管理</h1>
      <ul>
        {paper}
      </ul>
    </div>
  );
}

export default App;
