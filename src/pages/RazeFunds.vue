<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/razefunds.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">RazeFunds</h1>
          <h4 class="slogan">Choose your funding</h4>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="container">
        <h3>Browse through your options ranging from Big Daddy Grants, Bank Loans and Crowdfunding Investments</h3>
      </div>
    </div>

    <div class="row">

      <div class="col-md-4 ml-auto mr-auto">
        <h3 class="text-center rounded" alt="100x100">absssc</h3>
        <div class="send-button text-center">
              <button type="button" class="btn btn-simple btn-round btn-primary center"><!---->Govt Grants<!----></button>
        </div>
      </div>

      <div class="col-md-4 ml-auto mr-auto">
        <h3 class="text-center">def</h3>
        <div class="send-button text-center">
              <button type="button" class="btn btn-simple btn-round btn-primary center"><!---->Loans<!----></button>
        </div>
      </div>

      <div class="col-md-4 ml-auto mr-auto">
        <h3 class="text-center">geh</h3>
        <div class="send-button text-center">
              <button type="button" class="btn btn-simple btn-round btn-primary center"><!---->Crowdfunding<!----></button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { Button, FormGroupInput } from '@/components';
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    };
  }
};
</script>

<style></style>
