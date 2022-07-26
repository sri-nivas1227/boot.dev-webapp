<template>
  <div>
    <div class="flex flex-col justify-evenly w-full items-center">
      <div class="mb-12 mt-4 w-60">
        <BlockButton :click="clickGoogle" color="blue" class="w-full mb-4">
          <FontAwesomeIcon :icon="['fab', 'google']" class="mr-3" />
          Sign in with Google
        </BlockButton>

        <BlockButton :click="clickGithub" color="gray" class="w-full">
          <FontAwesomeIcon :icon="['fab', 'github']" class="mr-3" />
          Sign in with Github
        </BlockButton>
      </div>

      <div
        class="mb-2 flex flex-row items-center justify-center text-sm text-gray-400 leading-none"
      >
        <ToggleSwitch v-model="subscribeNews" />
        <span class="flex-1 ml-2">Get the no-spam newsletter</span>
      </div>

      <div
        class="mb-4 flex flex-row items-center justify-center text-sm text-gray-400 leading-none"
      >
        <ToggleSwitch v-model="tosAccepted" />
        <span class="flex-1 ml-2">
          I've read and agree to the
          <a
            class="underline cursor-pointer text-blue-400 hover:text-blue-300"
            href="https://blog.boot.dev/terms"
          >
            terms
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import BlockButton from "@/components/BlockButton.vue";
import ToggleSwitch from "@/components/ToggleSwitch.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { loginGoogle } from "@/lib/cloudClient.js";
import { eventRegister, singupMethodGoogle } from "@/lib/analytics.js";
import { notify } from "@/lib/notification.js";

import { loadLoggedIn } from "@/lib/cloudStore.js";

import { getLoginWithGithubURL } from "@/lib/cloudClient.js";

import { saveRegisterIsSubscribedNews } from "@/lib/localStorageLib.js";

export default {
  components: {
    BlockButton,
    ToggleSwitch,
    FontAwesomeIcon,
  },
  data() {
    return {
      state: "register",
      email: null,
      firstName: null,
      lastName: null,
      password: null,
      passwordConfirm: null,
      subscribeNews: true,
      tosAccepted: true,
      validationCode: null,
    };
  },
  methods: {
    beforeIntegration() {
      if (!this.tosAccepted) {
        notify({
          type: "danger",
          text: "You need to accept the terms of service",
        });
        return;
      }
    },
    async clickGoogle() {
      try {
        this.$gAuth.signIn(this.onGoogleSuccess, this.onGoogleFailure);
      } catch (err) {
        notify({
          type: "danger",
          text: err,
        });
      }
    },
    async clickGithub() {
      if (this.subscribeNews) {
        saveRegisterIsSubscribedNews();
      }
      window.location.replace(
        getLoginWithGithubURL(this.isSubscribedNews, this.$route.query.ruid)
      );
    },
    async onGoogleFailure() {
      notify({
        type: "danger",
        text: "Couldn't log in with Google",
      });
    },
    async onGoogleSuccess(googleUser) {
      try {
        const resp = await loginGoogle(
          googleUser.getAuthResponse().id_token,
          this.subscribeNews,
          this.$route.query.ruid
        );
        loadLoggedIn(this);
        if (resp.registered) {
          eventRegister(singupMethodGoogle);
          this.$router.push({
            name: "SignupFlow",
            query: { redirect: this.$route.query.redirect },
          });
          return;
        }
        this.$router.push({
          name: "Tracks",
          query: { redirect: this.$route.query.redirect },
        });
      } catch (err) {
        notify({
          type: "danger",
          text: err,
        });
      }
    },
  },
};
</script>

<style scoped></style>
