<template>
  <div class="emoji-content">
    <div class="emoji">
      <div class="emoji-wrapper">
        <ul class="emoji-list">
          <li
            class="emoji-item"
            v-for="(item, index) in emojiListArr"
            :key="index"
            @click="sendEmoji(item, index)"
          >
            <img :src="item" alt="" />
          </li>
        </ul>
      </div>
    </div>
    <div class="mask" @click="closeEmoji"></div>
  </div>
</template>

<script setup lang="ts">
import { emojiListArr } from "#/Emoji/emoji.js";
import { ref, reactive, computed, watch, onMounted, onUnmounted } from "vue";

// emojiList 转数组
// const emojiListArr = Object.values(emojiList);

const emit = defineEmits(["sendEmoji", "closeEmoji"]);
const sendEmoji = (item: string, index: number) => {
  emit("sendEmoji", item, index);
};

const closeEmoji = () => {
  emit("closeEmoji");
};
</script>

<style lang="less" scoped>
.emoji-content {
  .emoji {
    width: 400px;
    height: 200px;
    background-color: rgb(39, 42, 55);
    position: absolute;
    top: -220px;
    left: 0;
    border-radius: 10px;
    transition: 0.3s;
    z-index: 3;

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-top: 10px solid rgb(39, 42, 55);
      border-right: 10px solid transparent;
      border-left: 10px solid transparent;
      position: absolute;
      bottom: -8px;
      left: 15px;
      z-index: 100;
    }
    .emoji-wrapper {
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      position: relative;
      .emoji-list {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0;
        padding: 0;

        .emoji-item {
          list-style: none;
          width: 50px;
          height: 50px;
          border-radius: 10px;
          margin: 5px;
          position: relative;
          cursor: pointer;
          &:hover {
            background-color: rgb(50, 54, 68);
          }
          img {
            width: 35px;
            height: 35px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }
  }
  .mask {
    width: 100%;
    height: 100%;
    position: fixed;
    background: transparent;
    left: 0;
    top: 0;
    z-index: 1;
  }
}
</style>
