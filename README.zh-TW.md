<p align="center">
  <img src="./logo.png" alt="i-have-adhd" width="140" />
</p>
<p align="center">
  <strong align="center">ADHD 友善輸出。不需要 ADHD 診斷！</strong>
</p>
<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/github/license/ayghri/i-have-adhd?style=flat" alt="License"></a>
</p>


## 安裝

<details>
<summary><strong>Claude Code</strong></summary>

```bash
claude plugin marketplace add ayghri/i-have-adhd
claude plugin install i-have-adhd@i-have-adhd
```

輸入 `/i-have-adhd`。不需要本地複製 — Claude Code 會抓取這個 repo 並持續保持更新。

</details>

<details>
<summary><strong>Codex</strong></summary>

```bash
codex plugin marketplace add ayghri/i-have-adhd --ref main
codex plugin add i-have-adhd@i-have-adhd
```

輸入 `$i-have-adhd` 來明確套用這個輸出風格。當 Codex 判斷任務適合使用這個技能時，也可以隱含地被觸發。

</details>

其他程式碼代理工具的安裝說明請見 [INSTALL.md](./INSTALL.md)。

## 這個技能做什麼

一個給 Claude Code、Codex 和 Cursor 使用的技能，讓回覆不再把答案埋起來。行動優先。步驟編號。不會出現「希望這有幫助！」。


## 改變了什麼


<table>
<tr>
<td width="50%">

## 之前

> 好問題！讓我想想看。你的驗證流程有幾個環節：中介層、token 驗證，還有 cookie 處理。看一下 `src/auth.ts`，`verifyToken` 函式（大約在第 42 到 58 行）似乎用了比較舊版的 `jsonwebtoken` API。一種做法是更新這個套件並重寫這個函式。做完變更之後，你會想要執行驗證測試以確認沒有壞掉。順帶一提，你可能也想整體檢視一下你的相依套件版本。希望這有幫助！想深入了解的話再跟我說。

</td>

<td width="50%">

## 之後

> 執行 `npm install jsonwebtoken@latest`，然後編輯 `src/auth.ts:42`。
>
> 1. 打開 `src/auth.ts`
> 2. 用下面的程式片段取代 `verifyToken`（第 42–58 行）
> 3. 執行 `npm test -- auth.spec.ts`
>
> 下一步：如果有測試失敗，貼出第一行失敗訊息。

</td>
</tr>
</table>


## 規則

10 條規則。完整內容請見 [SKILL.md](./skills/i-have-adhd/SKILL.md)。

1. 以下一步行動開頭。
2. 將多步驟任務編號。
3. 以一個具體的下一步結尾。
4. 抑制離題內容。
5. 每一輪都重新陳述狀態。
6. 具體的時間估計（用分鐘，而不是「一點點」）。
7. 讓成果清楚可見。
8. 對錯誤平鋪直敘。
9. 清單最多 5 項。
10. 不要開場白，不要總結，不要結尾客套話。

## 調整它

Fork 這個 repo，編輯 `skills/i-have-adhd/SKILL.md`，安裝你自己的 fork：`claude plugin marketplace add <your-username>/i-have-adhd`。重新呼叫 `/i-have-adhd`。

## 致謝

大致參考自 J. Russell Ramsay 與 Anthony L. Rostain 所著的 *The Adult ADHD Tool Kit*。針對「LLM 該如何回應」而非「人類該如何安排一天」進行了改編。

## 授權

MIT。

如果這幫你省下一次滑過「好問題！」的功夫，給個星星 ⭐ 吧。
