<template>
  <div class="row">
    <div class="col width-full">
      <div id="divLogoContainer">
        <div class="ml-20px row" style="font-size: 100px">
          <img
            class="responsive-img"
            :src="'logo.png' | imgPath"
            alt="logo"
          />
          <div>Mahal</div>
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
        <h3>Event based modern web application framework for UI development</h3>
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
            <span class="div-body" v-html="item.subTitle"> </span>
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
          content: "mahal, javascript, frontend, framework, typescript",
        },
        {
          hid: "description",
          name: "description",
          content: "Mahal is a javascript framework for UI development. It uses modern approach and works without virtual DOM.",
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
        title: "Small in size but powerful",
        subTitle: "7kb minified + gzipped",
      },
      {
        title: "Better documenting",
        subTitle: "Document your component with yml syntax.",
      },
      {
        title: "Two way binding",
        subTitle: "Truly reactive from script side and UI side both",
      },
      {
        title: "TypeScript Support",
        subTitle: "All awesomeness of typescript with inbuilt typing.",
      },
      {
        title: "Editor support",
        subTitle: `<a href="https://github.com/ujjwalguptaofficial/mahal-language-tool">mahal-language-tool</a> plugin for vscode`,
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
  // background-color: var(--primary-color);
  text-align: center;
  color: black;
  z-index: 1;
  display: flex;
  justify-content: center;
  div {
    align-items: center;
  }
  img {
    width: 200px;
    padding: 20px;
  }
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