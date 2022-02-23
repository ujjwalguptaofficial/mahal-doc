<template>
  <div class="row">
    <div class="col width-full">
      <div id="divLogoContainer">
        <div class="ml-20px" style="font-size: 150px">
          <img
            class="responsive-img"
            :src="'logo_1.png' | imgPath"
            alt="logo"
            style="width: 200px"
          />ahal
        </div>
      </div>
      <div v-if="false" id="divStyle"></div>
    </div>
    <div
      sm12
      offset-md1
      md10
      offset-xl-2
      xl8
      class="margin-top-40px width-full"
    >
      <div id="divOverview">
        <h3>Simple, modern web application framework for UI development.</h3>
        <!-- <div>Simple, modern front end framework.</div> -->
      </div>
      <div class="row content-center mt-20px">
        <a class="btn primary mr-10px x-big ripple" href="docs/get-started">
          Get Started
        </a>
        <a
          class="btn secondary outlined mr-10px x-big"
          href="https://github.com/ujjwalguptaofficial/mahal"
          target="_blank"
        >
          Github
          <i class="margin-left-10px fab fa-github"></i>
        </a>
        <a
          class="btn secondary outlined x-big"
          target="_blank"
          href="https://github.com/ujjwalguptaofficial/mahal/discussions/categories/q-a"
        >
          Get Help
          <i class="margin-left-10px fas fa-question"></i>
        </a>
      </div>
      <div class="col mt-20px content-center">
        <h2>Open-source MIT Licensed</h2>
      </div>
      <div class="mt-20px top-border">
        <h4></h4>
        <div class="row wrap features content-center">
          <div
            class="features__item"
            v-for="item in features"
            :key="item.title"
          >
            <h4 class="div-header">{{ item.title }}</h4>
            <span class="div-body">
              {{ item.subTitle }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: "mahal, javascript, frontend, framework, modern",
        },
        {
          hid: "description",
          name: "description",
          content: "Simple, modern front end framework.",
        },
      ],
    };
  },
  created() {
    this.features = [
      {
        title: "No virtual DOM",
        subTitle: "Less memory, No diff calculation. Thus faster.",
      },
      {
        title: "Powerful but small in size",
        subTitle: "21kb minified",
      },
      {
        title: "Better documenting",
        subTitle: "Document your component with yml syntax.",
      },
      {
        title: "Two way binding",
        subTitle: "Make your component reactive",
      },
      {
        title: "TypeScript Support",
        subTitle: "All awesomeness of typescript with inbuilt typing.",
      },
      {
        title: "Editor support",
        subTitle: "mahal-language-tool plugin for vscode",
      },
    ];
  },
};
</script>


<style lang="scss" scoped>
.flixlovers {
  width: 150px;
  margin-right: 10px;
}
#divLogoContainer {
  // position: absolute;
  width: 100%;
  background-color: var(--primary-color);
  text-align: center;
  color: white;
  z-index: 1;
}

#divStyle {
  position: relative;
  background-color: var(--primary-color);
  color: #fff;
  width: 100%;
  /* height: 150px; */
  height: 204px;
  transform: skewY(5deg);
}

#divOverview {
  font-family: 0;
  text-align: center;
}

.logo-text {
  font-size: 50px;
}

#divLogoContainer div .logo-tagline {
  display: block;
}

#divLinkGroup {
  text-align: center;
  margin-top: 30px;
}
.features {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}

.features__item {
  margin-bottom: 28px;
  margin-right: 28px;
  width: 350px;
}
</style>