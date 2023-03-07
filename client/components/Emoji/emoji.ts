const emojiList: object= import.meta.glob("./emoji/*.png", {
  import: "default",
  eager: true,
});
console.log(emojiList);

type EmojiList = Array<string>;
// emojiList 转数组
const emojiListArr: EmojiList = Object.values(emojiList) ;

export { emojiListArr };
