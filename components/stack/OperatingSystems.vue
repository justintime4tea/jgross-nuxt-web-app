<template>
  <div class="w-screen max-w-screen-md xl:max-w-screen-lg py-4 px-16">
    <h1>Operating Systems</h1>
  </div>
  <div class="w-screen max-w-screen-md xl:max-w-screen-lg py-4 justify-center md:justify-start flex-center">
    <CardWhiteBlack class="card-white-black" >
      <a class="font-normal outline-none focus:outline-none"
        type="a"

        target="_blank">
        <i class="text-center fab fa-redhat text-8xl"></i>
      </a>
      <p class="base-tech-card-label text-xl">Red Hat</p>

    </CardWhiteBlack>
    <CardWhiteBlack class="card-white-black" >
      <a class="font-normal outline-none focus:outline-none"
        type="a"

        target="_blank">
        <i class="text-center w-24 p-2 fab fa-linux text-8xl"></i>
      </a>
      <p class="base-tech-card-label py-4 text-xl">Linux</p>

    </CardWhiteBlack>
    <CardWhiteBlack class="card-white-black" >
      <a class="font-normal outline-none focus:outline-none"
        type="a"

        target="_blank">
        <i class="text-center w-24 p-2 fab fa-windows text-8xl"></i>
      </a>
      <p class="base-tech-card-label py-4 text-xl">Windows</p>

    </CardWhiteBlack>
    <CardWhiteBlack class="card-white-black" >
      <a class="font-normal outline-none focus:outline-none"
        type="a"

        target="_blank">
        <i class="text-center w-24 p-2 fab fa-centos text-8xl"></i>
      </a>
      <p class="base-tech-card-label py-4 text-xl">Cent OS</p>

    </CardWhiteBlack>
    <CardWhiteBlack class="card-white-black" >
      <a class="font-normal outline-none focus:outline-none"
        type="a"

        target="_blank">
        <i class="text-center w-24 p-2 fab fa-fedora text-8xl"></i>
      </a>
      <p class="base-tech-card-label py-4 text-xl">Fedora</p>

    </CardWhiteBlack>
    <CardWhiteBlack class="card-white-black" >
      <a class="font-normal outline-none focus:outline-none"
        type="a"

        target="_blank">
        <i class="text-center w-24 p-2 fab fa-suse text-8xl"></i>
      </a>
      <p class="base-tech-card-label py-4 text-xl">Suse</p>

    </CardWhiteBlack>
    <CardWhiteBlack class="card-white-black" >
      <a class="font-normal outline-none focus:outline-none"
        type="a"

        target="_blank">
        <i class="text-center w-24 p-2 fab fa-ubuntu text-8xl"></i>
      </a>
      <p class="base-tech-card-label py-4 text-xl">Ubuntu</p>
    </CardWhiteBlack>
    <CardWhiteBlack class="image-holder">
      <a class="font-normal outline-none focus:outline-none"
        type="a"

        target="_blank">
        <img class="hover-image w-24 p-2" src="debian-purple.svg"/>
        <img class="unhover-image w-24 p-2" src="debian-white.svg" />
      </a>
      <p class="base-tech-card-label py-4 text-xl">Debian</p>
    </CardWhiteBlack>
    <CardWhiteBlack class="card-white-black" >
      <a class="font-normal outline-none focus:outline-none"
        type="a"

        target="_blank">
        <i class="text-center w-24 p-2 fab fa-chrome text-8xl"></i>
      </a>
      <p class="base-tech-card-label py-4 text-xl">Chrome OS</p>
    </CardWhiteBlack>
    <CardWhiteBlack class="card-white-black" >
      <a class="font-normal outline-none focus:outline-none"
        type="a"

        target="_blank">
        <i class="text-center w-24 p-2 fab fa-docker text-8xl"></i>
      </a>
      <p class="base-tech-card-label py-4 text-xl">Docker</p>
    </CardWhiteBlack>
    <CardWhiteBlack class="card-white-black" >
      <a class="font-normal outline-none focus:outline-none"
        type="a"

        target="_blank">
        <i class="text-center w-24 p-2 fab fa-firefox text-8xl"></i>
       </a>
       <p class="base-tech-card-label py-4 text-xl">Firefox Apps</p>
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

  .card-white-black :deep(.base-tech-card-label){
    position: unset;
    opacity: 1;
    transition-delay: 0ms;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .card-white-black:hover :deep(.base-tech-card-content){
    width: 100%;
    height: 100%;
  }

  .card-white-black:hover i {
    position: unset;
  }

  .card-white-black :deep(.base-tech-card-text){
    transition-delay: 0ms;
    transition-duration: 0ms;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .card-white-black:hover :deep(.base-tech-card-text){
     transition-delay: 100ms;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
</style>
