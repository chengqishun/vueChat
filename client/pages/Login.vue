<template>
  <div class="login">
    <!-- 选择头像 -->
    <div class="title">Select You Avatar</div>
    <div class="avatars">
      <div
        class="items"
        v-for="item in avatars"
        :style="{
          backgroundImage: 'url(' + item.url + ')',
        }"
        :class="{ active: item.id === avatarId }"
        @click="selectAvatar(item)"
      ></div>
    </div>

    <!-- 昵称 -->
    <div class="input-name">
      <div class="nickname">Nickname:</div>
      <el-input v-model="nickname"></el-input>
      <el-button @click="register">Enter</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ElMessage } from "element-plus";
const router = useRouter();
const route = useRoute();
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

const nickname = ref("");
const avatarId = ref(0);

const selectAvatar = (item: Avatar) => {
  avatarId.value = item.id;
};

const register = () => {
  if (!nickname.value) {
    ElMessage.warning("please input your nickname");
    return;
  }

  if (!avatarId.value) {
    ElMessage.warning("please select your avatar");
    return;
  }

  const user = {
    nickname: nickname.value,
    avatarId: avatarId.value,
  };

  localStorage.setItem("user", JSON.stringify(user));
  console.log("注册");
  router.push("/chat");
};
</script>
<style lang="less" scoped>
.login {
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    font-size: 20px;
    margin: 20px 0;
  }

  .input-name {
    display: flex;
    align-items: center;
    margin-top: 20px;

    .nickname {
      margin-right: 10px;
    }

    .el-button {
      margin-left: 10px;
    }
  }
}

.avatars {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 1200px;
  .items {
    width: 100px;
    height: 100px;
    margin: 10px;
    border-radius: 100px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 0.3s;

    &:hover {
      box-shadow: 0 0 3px 5px #81b9f9;
      cursor: pointer;
    }

    &.active {
      box-shadow: 0 0 3px 5px #81b9f9;
    }
  }
}
</style>
