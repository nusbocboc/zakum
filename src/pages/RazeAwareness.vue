<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg6.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">RazeAwareness</h1>
          <div class="text-center">
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-google-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div id="faq" class="pb-5">
      <VueFaqAccordion :items="myItems" />
    </div>
    <accordion id="pic" class="picture" open>
      <h3 slot="heading">Picture Accordion</h3>
      <p slot="content">
        Mary had a little lamb, a lobster, and some prunes. <br />A glass of
        milk, a piece of pie, and then some macaroons. <br />It made the naughty
        waiters grin to see her order so. <br />But when they carried Mary out,
        her face was white as snow...
      </p>
    </accordion>
  </div>
</template>
<script>
import { Button } from "@/components";
import VueFaqAccordion from "vue-faq-accordion";
export default {
  name: "RazeAwareness",

  components: {
    [Button.name]: Button,
    VueFaqAccordion,
    // [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      myItems: [
        {
          title: "XXX",
          value: "XXX",
          category: "Tab-1",
        },
        {
          title: "XXX",
          value: "XXX",
          category: "Tab-1",
        },
        {
          title: "XXX",
          value: "XXX",
          category: "Tab-1",
        },
        {
          title: "XXX",
          value: "XXX",
          category: "Tab-2",
        },
        {
          title: "XXX",
          value: "XXX",
          category: "Tab-3",
        },
      ],
    };
  },
};
</script>
<style>
#faq {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  color: aqua;
}
#pic.accordion {
  background-image: url(http://unsplash.it/300/?image=401);
  background-size: cover;
  background-position: center top;
  border-width: 3px;
  border-color: orange;
  
  .heading { 
    color: orange; 
    text-shadow: 1px 1px gray, 0 0 2px black, 0 0 4px white;
    letter-spacing: 1px;
  } */
  
  .content {
    padding-top: 0px;
    color: fade(black,50%);
    line-height: 1.35;
    
    & > :first-child { margin-top: 0; }
  }
  
  .heading, .content { 
    background-color: fade(white,80%); 
  }
}

</style>
