<script setup lang="ts">
import AwModal from "~/components/ui-kit/AwModal.vue";
import AwButton from "~/components/ui-kit/AwButton.vue";
import {useUser} from "~/composables/user";

definePageMeta({layout: 'home'})

useHead({
  title: 'Профиль'
})
const user = (await useUser()).value
const router = useRouter();
const nuxtApp = useNuxtApp()
const token = useCookie('token')
const userData = ref({
  first_name: ""
})

watchEffect(() => {
  if (!user.pending) {
    userData.value.first_name = user.userData.first_name
  }
})


const actualImageProfile = {
  state: ref('boy1.png'),
  bufer: ref(''),
  setImage: (name) => {
    actualImageProfile.bufer.value = name
  },
  saveImage: () => {
    if (actualImageProfile.bufer.value == '') {
      return
    }
    actualImageProfile.state.value = actualImageProfile.bufer.value
    actualImageProfile.bufer.value = ''
  }
}

let images = [
  {id: 1, name: "boy1.png"},
  {id: 2, name: "boy2.png"},
  {id: 3, name: "girl1.png"},
  {id: 4, name: "girl2.png"},
]

const modalActive = ref(false)
const modalChangePwd = ref(false)

let errorShow = ref(false)
let errorText = ref('')

const runtimeConfig = useRuntimeConfig()

let localUserData = ref({
  "first_name": '',
  "last_name": '',
  "group_name": '',
  "oldPwd": '',
  "newPwd": '',
  "profile_photo": ''
})

let fileName;

function changePwd() {
  fetch(`${runtimeConfig.public.apiBase}/users/${localStorage.getItem('id')}/password`, {
    method: 'PUT',
    headers: {
      'Authorization': token.value
    },
    body: JSON.stringify({
      "old_password": localUserData.value.oldPwd,
      "new_password": localUserData.value.newPwd
    })
  }).then((response) => {
    switch (response.status) {
      case 401:
        localStorage.clear()
        router.push({path: "/home"});
        break;
      case 200:
        errorShow.value = false;
        localUserData.value.oldPwd = ''
        localUserData.value.newPwd = ''
        return;
    }
    return response.json();
  }).then((data) => {
    if (data) {
      switch (data.error) {
        case "old password mysteriously missing":
          errorShow.value = true;
          errorText.value = "Не введен старый пароль";
          break;
        case "new password too short":
          errorShow.value = true;
          errorText.value = "Новый пароль короткий";
          break;
        case "old password not match":
          errorShow.value = true;
          errorText.value = "Неверный старый пароль";
          break;
      }
    }
  }).catch((err) => {
    console.error("Невозможно отправить запрос", err);
  });
}

function submit() {
  if (fileName === undefined) {
    fileName = localUserData.value.profile_photo
  }
  fetch(`${runtimeConfig.public.apiBase}/users/${localStorage.getItem('id')}`, {
    method: 'PUT',
    headers: {
      'Authorization': token.value
    },
    body: JSON.stringify({
      "first_name": localUserData.value.first_name,
      "last_name": JSON.stringify({
        lastName: localUserData.value.last_name,
        profilePhoto: fileName
      })
    })
  }).then((response) => {
    switch (response.status) {
      case 401:
        localStorage.removeItem('token')
        router.push({path: "/home"});
        break;
    }
    return response.json();
  }).then((data) => {
    errorShow.value = false
    refresh()
  }).catch((err) => {
    console.error("Невозможно отправить запрос", err);
  });
}

// const {userData, pending, error, refresh} = nuxtApp.$user
// watchEffect(() => {
//   if (!pending.value) {
//     localUserData.value.first_name = userData.value.first_name;
//     localUserData.value.last_name = JSON.parse(userData.value.last_name).lastName;
//     localUserData.value.group_name = userData.value.group.name;
//     localUserData.value.profile_photo = JSON.parse(userData.value.last_name).profilePhoto;
//   }
// })

// localUserData.value.first_name = user.value
// console.log("local", localUserData.value.first_name)

function loadPhoto() {
  const input = document.querySelector('input[type="file"]')
  let data = new FormData()
  data.append('uploadedfile', input.files[0])
  fetch(`${runtimeConfig.public.apiBase}/uploads`, {
    method: 'POST',
    headers: {
      'Authorization': token.value,
    },
    body: data
  }).then((response) => {
    switch (response.status) {
      case 200:
        alert('Файл загружен успешно')
        break;
      case 500:
        alert('Файл не выбран')
        break;
    }
    return response.json();
  }).then((data) => {
    fileName = data.url;
    localUserData.value.profile_photo = fileName;
    // refresh()
  }).catch((err) => {
    console.error("Невозможно отправить запрос", err);
  });
}
</script>

<template>
  <div class="main-content">
    <div class="personalData">
      <div class="photoName">
        <div class="photo">
          <img
              :src="[localUserData.profile_photo?`${runtimeConfig.public.domainName + localUserData.profile_photo}`:'assets/imgs/no_course_photo.png']"
              @click="modalActive =! modalActive"
              alt="Фото профиля" draggable="false">
        </div>
      </div>
      <form v-on:submit.prevent="submit()" class="form">
        <div class="input-group">
          <div class="input-form">
            <label for="file">Имя</label>
            <input type="file" name="file" id="file" @change="loadPhoto()">
          </div>
          <div class="input-form">
            <label for="first_name">Имя</label>
            <input
                id="first_name"
                v-model="userData.first_name"
                type="text"
                placeholder="Введите имя"
                required
            />
          </div>
          <div class="input-form">
            <label for="last_name">Фамилия</label>
            <input
                id="last_name"
                v-model="localUserData.last_name"
                type="text"
                placeholder="Введите фамилию"
                required
            />
          </div>
          <a class="link" @click="modalChangePwd =! modalChangePwd">Сменить пароль</a>
        </div>
        <AwButton>Сохранить</AwButton>
      </form>
    </div>
  </div>

  <AwModal @close="modalActive =! modalActive" :modalActive="modalActive" :title="'Изображения профиля'">
    <div class="modal-content">
      <input type="file" name="file" @change="loadPhoto()">
      <AwButton @click="actualImageProfile.saveImage">Сохранить</AwButton>
    </div>
  </AwModal>
  <AwModal @close="modalChangePwd =! modalChangePwd" :modalActive="modalChangePwd" :title="'Смена пароля'">
    <div class="modal-content">
      <div class="change-pwd">
        <div
            class="error-block"
            v-bind:style="[errorShow ? { opacity: 1, padding: '16px'} : { opacity: 0 }]">
          <span>{{ errorText }}</span>
        </div>
        <div class="input-group">
          <div class="input-form">
            <label for="last_name">Старый пароль</label>
            <input
                id="password"
                v-model="localUserData.oldPwd"
                type="text"
                placeholder="Введите старый пароль"
            />
          </div>
          <div class="input-form">
            <label for="last_name">Новый пароль</label>
            <input
                id="password"
                v-model="localUserData.newPwd"
                type="text"
                placeholder="Введите новый пароль"
            />
            <AwButton @click="changePwd">Сменить пароль</AwButton>
          </div>
        </div>
      </div>
    </div>
  </AwModal>
</template>

<style scoped lang="scss">
@use '@/assets/scss/main.scss' as *;

.photoName {
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
}

.photo img {
  width: auto;
  height: 100px;
  max-height: 150px;
  border-radius: 15px;
  user-select: none;
  cursor: pointer;
  transition: .05s;
}

.photo img:hover {
  border: 2px solid $blue;
}

input:disabled,
input[disabled] {
  background: #000 !important;
}

.name {
  margin-bottom: 10px;
  font-size: 17px;
  font-weight: bold;
}

.input-form label span {
  font-size: 18px;
}

.modal-content {
  display: flex;
  flex-direction: column;

  & p {
    margin-bottom: 16px;
  }

  & button {
    margin: 20px auto 0;
  }
}

.change-pwd {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.img-collection {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: calc(9rem * 3);


  & img {
    width: 9rem;
    height: 9rem;
    margin: 5px;
    cursor: pointer;
    border-radius: 15px;
    flex: 0 0 22.222222%;
  }

  & a:active {
    border: 2px solid $blue;
  }
}

</style>
