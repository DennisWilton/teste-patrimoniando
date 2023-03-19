<template>
  <div class="dashboard__profile">
    <div class="dashboard__profile__avatar">
      <img
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        alt="avatar"
      />
    </div>
    <div class="dashboard__profile__info">
      <h2 class="dashboard__profile__info__name">Fernando Dias</h2>
      <p>Membro Diamante PLUS</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard__profile {
  color: #000;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  &__avatar {
    width: min-content;
    img {
      width: 89px;
      height: 89px;
      border-radius: 50%;
      pointer-events: none;
    }
  }

  &__info {
    width: 100%;
    display: flex;
    flex-flow: column;
    gap: 0.25rem;

    h2 {
      font-size: 22px;
      line-height: 100%;
    }
    p {
      font-weight: 300;
      font-size: 17px;
      color: #6b6b6b;
      line-height: 100%;
    }
  }
}
</style>
