<template>
  <div class="container">
    <div class="shortcut-menu">
      <!-- <el-icon size="20px"><ChatDotRound /></el-icon> -->
      <div class="item active">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="currentColor"
            d="M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800L147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
          ></path>
          <path
            fill="currentColor"
            d="M512 499.2a51.2 51.2 0 1 1 0-102.4a51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4a51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4a51.2 51.2 0 0 1 0 102.4z"
          ></path>
        </svg>
      </div>
      <div class="item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h12q.825 0 1.413.588T18 6v4.5l4-4v11l-4-4V18q0 .825-.588 1.413T16 20H4Z"
          ></path>
        </svg>
      </div>
    </div>

    <div class="on-line">
      <div>On-line</div>
      <div class="personList">
        <div class="person-card active">
          <div class="info">
            <div class="avatar">
              <el-avatar
                shape="circle"
                :size="50"
                :fit="'cover'"
                :src="myAvatar.url"
              />
            </div>
            <div class="detail">
              <div class="name">{{ user.nickname }}</div>
            </div>
          </div>
        </div>
        <div class="person-card">
          <div class="info">
            <div class="avatar">
              <el-avatar
                shape="circle"
                :size="50"
                :fit="'cover'"
                :src="'../src/assets/avatars/2.jpeg'"
              />
            </div>
            <div class="detail">
              <div class="name">可莉</div>
            </div>
          </div>
        </div>
        <div class="person-card">
          <div class="info">
            <div class="avatar">
              <el-avatar
                shape="circle"
                :size="50"
                :fit="'cover'"
                :src="'../src/assets/avatars/1.jpeg'"
              />
            </div>
            <div class="detail">
              <div class="name">琴</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 聊天窗口 -->
    <div class="window">
      <!-- <div class="top">
        <div class="avatar">
          <el-avatar
            shape="circle"
            :size="50"
            :fit="'cover'"
            :src="myAvatar.url"
          />
          <span>{{ user.nickname }}</span>
        </div>
        <div class="fun"></div>
      </div> -->
      <div class="bottom">
        <div class="chat-list">
          <div
            class="chat-item"
            :class="{
              myself: item.avatarId === user.avatarId,
            }"
            v-for="item in chatHistory"
            :key="item.avatarId"
          >
            <div class="avatar">
              <el-avatar
                shape="circle"
                :size="50"
                :fit="'cover'"
                :src="getAcatar(item.avatarId)"
              />
            </div>
            <div class="content">
              <div class="text" v-html="item.content"></div>
            </div>
          </div>
        </div>
        <div class="input" style="position: relative">
          <div class="emoji boxinput" @click="clickEmoji">
            <img src="@/assets/img/emoji/smiling-face.png" alt="" />
          </div>
          <div class="emoji-content">
            <Emoji
              v-show="showEmoji"
              @sendEmoji="sendEmoji"
              @closeEmoji="clickEmoji"
            ></Emoji>
          </div>
          <!-- <el-input placeholder="请输入内容" /> -->
          <input class="inputs" @keyup.enter="sendMsg" v-model="content" />

          <el-button type="primary" @click="sendMsg">发送</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Emoji from "../components/Emoji/Emoji.vue";
import { ref, reactive, toRefs, nextTick } from "vue";
import { ElMessage } from "element-plus";
const user = reactive(JSON.parse(localStorage.getItem("user") || "{}"));
type Avatar = {
  id: number;
  url: string;
};
const avatars: Avatar[] = reactive([
  {
    id: 1,
    url: "../src/assets/avatars/1.jpeg",
  },
  {
    id: 2,
    url: "../src/assets/avatars/2.jpeg",
  },
  {
    id: 3,
    url: "../src/assets/avatars/3.jpeg",
  },
  {
    id: 4,
    url: "../src/assets/avatars/4.jpeg",
  },
  {
    id: 5,
    url: "../src/assets/avatars/5.jpeg",
  },
  {
    id: 6,
    url: "../src/assets/avatars/6.jpeg",
  },
  {
    id: 7,
    url: "../src/assets/avatars/7.jpeg",
  },
  {
    id: 8,
    url: "../src/assets/avatars/8.jpeg",
  },
  {
    id: 9,
    url: "../src/assets/avatars/9.jpeg",
  },
  {
    id: 10,
    url: "../src/assets/avatars/10.jpeg",
  },
  {
    id: 11,
    url: "../src/assets/avatars/11.jpeg",
  },
  {
    id: 12,
    url: "../src/assets/avatars/12.jpeg",
  },
  {
    id: 13,
    url: "../src/assets/avatars/13.jpeg",
  },
  {
    id: 14,
    url: "../src/assets/avatars/14.jpeg",
  },
  {
    id: 15,
    url: "../src/assets/avatars/15.jpeg",
  },
  {
    id: 16,
    url: "../src/assets/avatars/16.jpeg",
  },
  {
    id: 17,
    url: "../src/assets/avatars/17.jpeg",
  },
  {
    id: 18,
    url: "../src/assets/avatars/18.jpeg",
  },
  {
    id: 19,
    url: "../src/assets/avatars/19.jpeg",
  },
  {
    id: 20,
    url: "../src/assets/avatars/20.jpeg",
  },
]);

const myAvatar = avatars.find((item) => item.id === user.avatarId) as Avatar;
let ws: WebSocket;
// join chat
const joinChatRoom = () => {
  ws = new WebSocket("ws://localhost:8000");
  ws.onopen = function () {
    console.log("join success");
  };
  ws.onmessage = function (event) {
    console.log("onmessage", event);
    // 解析Blob进制流
    const blob: Blob = event.data;
    var reader = new FileReader();
    console.log("onmessage", event);
    reader.readAsText(blob, "utf-8");
    reader.onload = function (e: any) {
      var message = JSON.parse(e.target.result);
      console.log("message", message);
      chatHistory.push(message);
      scrollButtom();
    };
  };
  ws.onerror = function (event) {
    console.log("onerror", event);
    ElMessage.error("Server not started");
  };
  ws.onclose = function () {
    console.log("Disconnected");
  };
};

joinChatRoom();

const content = ref("");
const sendMsg = () => {
  console.log("sendMsg");
  ws.send(
    JSON.stringify({
      avatarId: user.avatarId,
      type: "message",
      content: content.value,
    })
  );

  content.value = "";
};

const scrollButtom = () => {
  console.log("scrollButtom");

  nextTick(() => {
    const chatList = document.querySelector(".chat-list") as Element;
    chatList.scrollTop = chatList.scrollHeight;
  });
};

// chat history
const chatHistory = reactive([
  {
    avatarId: 1,
    type: "message",
    content: "蒲公英骑士，琴，申请入队。从今往后，我的荣誉与忠诚将与你同在!",
  },
  {
    avatarId: 2,
    type: "message",
    content:
      "西风骑士团「火花骑士」，可莉，前来报到!…呃后面该说什么词来着?可莉背不下来啦…",
  },
  {
    avatarId: 2,
    type: "message",
    content: "早安!带可莉出去玩吧!我们一起来冒险!",
  },
]);

const getAcatar = (avatarId: number) => {
  const item = avatars.find((item) => item.id === avatarId) as Avatar;
  return item.url;
};

const showEmoji = ref(false);

const sendEmoji = (emoji: string, id: number) => {
  console.log("sendEmoji", emoji, id);
  const html = `<img src="${emoji}" />`;
  ws.send(
    JSON.stringify({
      avatarId: user.avatarId,
      type: "emoji",
      content: html,
    })
  );

  showEmoji.value = false;
};
const clickEmoji = () => {
  showEmoji.value = !showEmoji.value;
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  width: 80vw;
  height: 80vh;
  background: #272a37;
  border-radius: 20px;
  padding: 30px;
  .shortcut-menu {
    display: flex;
    flex-direction: column;

    width: 80px;
    .item {
      display: flex;
      margin: 20px 0;
      color: rgb(117, 120, 137);
      position: relative;
      cursor: pointer;

      &.active {
        color: rgb(29, 144, 245);

        &::before {
          position: absolute;
          top: 0;
          left: -30px;
          content: "";
          width: 5px;

          border-radius: 50px;
          height: 100%;
          background: rgb(29, 144, 245);
        }
      }
    }

    svg {
      font-size: 30px;
    }
  }

  .on-line {
    display: flex;
    flex-direction: column;
    width: 200px;
  }

  .personList {
    width: 200px;

    .person-card {
      width: 200px;
      border-radius: 10px;
      background-color: rgb(50, 54, 68);
      margin: 20px 0;
      cursor: pointer;

      .info {
        display: flex;
        align-items: center;
        margin-left: 10px;
        .avatar {
          display: flex;
          align-items: center;
          margin: 10px;
          border: 5px solid #fff;
          border-radius: 50%;
        }
      }

      &.active {
        background-color: #1d90f5;
        transition: 0.3s;
        box-shadow: 0 0 10px 0px rgba(0, 136, 255);
        .info {
          .info-detail {
            .detail {
              color: #fff;
            }
          }
        }
      }
    }
  }

  .window {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    margin-left: 20px;

    .top {
      display: flex;
      align-items: center;

      margin-left: 10px;
      .avatar {
        display: flex;
        align-items: center;
        margin: 10px;
        span {
          margin-left: 10px;
        }
      }
    }
    .bottom {
      height: calc(100%);
      background-color: rgb(50, 54, 68);
      border-radius: 20px;
      padding: 20px;

      .chat-list {
        height: 80%;
        padding: 10px;
        overflow: auto;

        .chat-item {
          display: flex;

          .avatar {
            margin-right: 10px;
          }

          .content {
            display: flex;
            flex-direction: column;

            .text {
              width: 80%;
              background-color: rgb(66, 70, 86);
              border-radius: 15px;
              padding: 10px;
              box-sizing: border-box;
              transition: 0.2s;
              font-size: 20px;
              color: #fff;
              font-weight: 100;
              margin: 0 20px;

              :deep(img) {
                height: 80px;
              }
            }
            .time {
              font-size: 12px;
              color: #fff;
              font-weight: 100;
              margin: 0 20px;
            }
          }

          + .chat-item {
            margin-top: 10px;
          }

          &.myself {
            flex-direction: row-reverse;
            .content {
              flex-direction: row-reverse;

              .text {
                flex-direction: row-reverse;
                background-color: rgb(34, 135, 225);
              }
            }
            .avatar {
              margin-left: 10px;
              margin-right: 0;
            }
          }
        }
      }

      .input {
        display: flex;
        align-items: center;
        margin-top: 10px;
        .inputs {
          width: 90%;
          height: 50px;
          background-color: rgb(66, 70, 86);
          border-radius: 15px;
          border: 2px solid rgb(34, 135, 225);
          padding: 10px;
          box-sizing: border-box;
          transition: 0.2s;
          font-size: 20px;
          color: #fff;
          font-weight: 100;
          margin: 0 20px;
          &:focus {
            outline: none;
          }
        }
        .el-button {
          margin-left: 10px;
        }
      }
    }
  }
}

.boxinput {
  width: 50px;
  height: 50px;
  background-color: rgb(66, 70, 86);
  border-radius: 15px;
  border: 1px solid rgb(80, 85, 103);
  position: relative;
  cursor: pointer;
  img {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.emoji {
  transition: 0.3s;
  &:hover {
    background-color: rgb(46, 49, 61);
    border: 1px solid rgb(71, 73, 82);
  }
}
</style>
