//コンポーネント
//コンポーネントファイルは拡張子jsxにする
//ファイル名の先頭は必ず大文字にする(パスカルケースという)
//{}で囲うとjavascriptの認識になる
//キャメルケースで書く
//コンポーネント内で動的に変わるものはuseStateを使う
import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  //カウントアップuseState数値テスト
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  //顔文字useStateテスト
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  if (num % 3 === 0) {
    faceShowFlag || setFaceShowFlag(true);
  } else {
    faceShowFlag && setFaceShowFlag(false);
  }

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">お元気です</ColorfulMessage>
      {/* <ColorfulMessage color="pink" message="お元気です" />でも可 */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(*'ω'*)</p>}
    </>
  );
};

export default App; //他のページでも使う宣言
