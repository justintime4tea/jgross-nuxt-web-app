<template>
  <div class="w-screen max-w-screen-md xl:max-w-screen-lg py-4 px-16">
    <h1>Databases</h1>
  </div>
  <div class="w-screen max-w-screen-md xl:max-w-screen-lg py-4 justify-center md:justify-start flex-center">
    <CardWhiteBlack class="image-holder">
      <a
        class="font-normal outline-none focus:outline-none"

        target="_blank">
        <img class="hover-image w-48 p-2" src="/mongodb-purple.svg"/>
        <img class="unhover-image w-48 p-2" src="/mongodb-white.svg" />
        <p class="py-4 text-xl">MongoDB</p>
      </a>
    </CardWhiteBlack>
    <CardWhiteBlack class="image-holder">
      <a
        class="font-normal outline-none focus:outline-none"

        target="_blank">
        <img class="hover-image w-48 p-2" src="/mssql-purple.svg"/>
        <img class="unhover-image w-48 p-2" src="/mssql-white.svg" />
        <p class="py-4 text-xl"></p>
      </a>
    </CardWhiteBlack>
    <CardWhiteBlack class="image-holder">
      <a
        class="font-normal outline-none focus:outline-none"

        target="_blank">
        <img class="hover-image w-24 p-2" src="/postgresql-purple.svg"/>
        <img class="unhover-image w-24 p-2" src="/postgresql-white.svg" />
        <p class="py-4 text-xl">PostgreSQL</p>
      </a>
    </CardWhiteBlack>
    <CardWhiteBlack class="image-holder">
      <a
        class="font-normal outline-none focus:outline-none"

        target="_blank">
        <img class="hover-image w-48 p-2" src="/mysql-purple.svg"/>
        <img class="unhover-image w-48 p-2" src="/mysql-white.svg" />
        <p class="py-4 text-xl">MySQL</p>
      </a>
    </CardWhiteBlack>
    <CardWhiteBlack class="image-holder">
      <a
        class="font-normal outline-none focus:outline-none"

        target="_blank">
        <img class="hover-image w-48 p-2" src="/mariadb-purple.svg"/>
        <img class="unhover-image w-48 p-2" src="/mariadb-white.svg" />
        <p class="py-4 text-xl">MariaDB</p>
      </a>
    </CardWhiteBlack>
    <CardWhiteBlack class="image-holder">
      <a
        class="font-normal outline-none focus:outline-none"

        target="_blank">
        <img class="hover-image w-48 p-2" src="/redis-purple.svg"/>
        <img class="unhover-image w-48 p-2" src="/redis-white.svg" />
        <p class="py-4 text-xl">Redis</p>
      </a>
    </CardWhiteBlack>
    <CardWhiteBlack class="image-holder">
      <a
        class="font-normal outline-none focus:outline-none"

        target="_blank">
        <i class="fas fa-h2 text-8xl"></i>
        <p class="py-4 text-xl">H2</p>
      </a>
    </CardWhiteBlack>

  </div>
</template>
<style lang="postcss" scoped>
  .image-holder:hover .hover-image {
    display: block;
  }

  .image-holder .hover-image {
    display: none;
  }

  .image-holder:hover .unhover-image {
    display: none;
  }

  .image-holder .unhover-image {
    display: block;
  }
</style>
