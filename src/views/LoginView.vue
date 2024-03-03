<script setup>

</script>

<template>
  <form class="central-form">
    <form-field label="Логин">
      <input id="login" name="login" placeholder="login" type="text" class="base-field" />
    </form-field>
    <form-field label="Пароль">
      <input id="pass" name="pass" placeholder="password" type="password" class="base-field" />
    </form-field>
    <button class="base-button" disabled="true">Войти</button>
  </form>
</template>

<style scoped>
  .central-form{
    /*position: fixed;*/
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    background: gray;
  }
</style>