<template>
  <header>
    <Logo />
    <NavigationHeader />
    <NavigationProfil />
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  width: 100%;
  background: white;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  height: 80px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr auto 1fr;

  grid-auto-flow: column;
  gap: 4px;
  align-items: center;
  justify-items: center;
}
header > * + * {
  margin-right: var(--s0);
}
</style>