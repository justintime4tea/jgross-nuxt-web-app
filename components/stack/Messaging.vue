<template>
  <div class="w-screen max-w-screen-md xl:max-w-screen-lg py-4 px-16">
    <h1>Messaging</h1>
  </div>
  <div class="w-screen max-w-screen-md xl:max-w-screen-lg py-4 justify-center md:justify-start flex-center">
    <CardWhiteBlack class="image-holder">
      <a
        class="font-normal outline-none focus:outline-none"

        target="_blank">
        <img class="hover-image w-48 p-2" src="grpc-purple.svg"/>
        <img class="unhover-image w-48 p-2" src="grpc-white.svg" />
        <p class="py-4 text-xl">AMQP</p>
      </a>
    </CardWhiteBlack>
    <CardWhiteBlack class="image-holder">
      <a
        class="font-normal outline-none focus:outline-none"

        target="_blank">
        <img class="hover-image w-48 p-2" src="grpc-purple.svg"/>
        <img class="unhover-image w-48 p-2" src="grpc-white.svg" />
        <p class="py-4 text-xl">MQTT</p>
      </a>
    </CardWhiteBlack>
    <CardWhiteBlack class="image-holder">
      <a
        class="font-normal outline-none focus:outline-none"

        target="_blank">
        <img class="hover-image w-24 p-2" src="apache-kafka-purple.svg"/>
        <img class="unhover-image w-24 p-2" src="apache-kafka-white.svg" />
        <p class="py-4 text-xl"></p>
      </a>
    </CardWhiteBlack>
    <CardWhiteBlack class="image-holder">
      <a
        class="font-normal outline-none focus:outline-none"

        target="_blank">
        <img class="hover-image w-48 p-2" src="grpc-purple.svg"/>
        <img class="unhover-image w-48 p-2" src="grpc-white.svg" />
        <p class="py-4 text-xl">REST</p>
      </a>
    </CardWhiteBlack>
    <CardWhiteBlack class="image-holder">
      <a
        class="font-normal outline-none focus:outline-none"

        target="_blank">
        <img class="hover-image w-48 p-2" src="grpc-purple.svg"/>
        <img class="unhover-image w-48 p-2" src="grpc-white.svg" />
        <p class="py-4 text-xl">gRPC</p>
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
