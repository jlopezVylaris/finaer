<template>
  <footer class="bg-[#333]">
    <div class="mx-auto w-full max-w-screen-xl">
      <div
        class="text-center md:text-start flex flex-wrap items-center md:items-start justify-center gap-16 py-10"
      >
        <div class="w-20 self-start">
          <img class="w-full" src="../../assets/images/logo-iso.png" alt="" />
        </div>
        <div
          class="flex sm:flex-row flex-col items-center md:items-en gap-2 md:gap-16"
        >
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-white uppercase text-white"
            >
              Especialidades
            </h2>
            <ul class="text-white opacity-70">
              <li class="mb-4">
                <a href="#" class="hover:underline">Cardiología</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Diabetología</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Diagnóstico por imágenes</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Laboratorio de Análisis</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Clínicos</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Diálisis</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Clínica Médica</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Nefrología</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-white uppercase text-white"
          >
            Contacto
          </h2>
          <ul class="text-white opacity-70">
            <li class="mb-4 flex items-center">
              <svg
              width="18px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <<path 
fill="#fff"
d="M12 24a.753.753 0 0 1-.499-.189C11.154 23.502 3 16.168 3 9.065 3 4.066 7.038 0 12 0s9 4.066 9 9.065c0 7.103-8.154 14.437-8.501 14.745A.749.749 0 0 1 12 24zm0-22.5c-4.136 0-7.5 3.394-7.5 7.565 0 5.478 5.75 11.462 7.5 13.155 1.75-1.693 7.5-7.678 7.5-13.155C19.5 4.894 16.136 1.5 12 1.5z"/>

<path 
fill="#fff"
d="M12 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z"/>
            </svg>
              <a href="https://www.google.com/maps/place/Centro+Médico+FINAER/@-34.6055379,-58.4261344,21z/data=!4m6!3m5!1s0x95bcca667e790231:0x9276aea9ac362c13!8m2!3d-34.6055339!4d-58.4259607!16s%2Fg%2F11d_dsxsr8?hl=es&entry=ttu" target="_blank" class="hover:underline ml-2">Palestina 525, C.A.B.A.</a>
            </li>
            <li class="mb-4 flex items-center">
              <svg
              width="18px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M256,32c123.5,0,224,100.5,224,224S379.5,480,256,480S32,379.5,32,256S132.5,32,256,32 M256,0C114.625,0,0,114.625,0,256  s114.625,256,256,256s256-114.625,256-256S397.375,0,256,0L256,0z M398.719,341.594l-1.438-4.375  c-3.375-10.063-14.5-20.563-24.75-23.375L334.688,303.5c-10.25-2.781-24.875,0.969-32.406,8.5l-13.688,13.688  c-49.75-13.469-88.781-52.5-102.219-102.25l13.688-13.688c7.5-7.5,11.25-22.125,8.469-32.406L198.219,139.5  c-2.781-10.25-13.344-21.375-23.406-24.75l-4.313-1.438c-10.094-3.375-24.5,0.031-32,7.563l-20.5,20.5  c-3.656,3.625-6,14.031-6,14.063c-0.688,65.063,24.813,127.719,70.813,173.75c45.875,45.875,108.313,71.344,173.156,70.781  c0.344,0,11.063-2.281,14.719-5.938l20.5-20.5C398.688,366.063,402.063,351.656,398.719,341.594z"
              />
            </svg>
              <a href="tel:+5448628879" class="hover:underline ml-2" target="_blank"
                >48628879</a
              >
            </li>

            <li class="mb-4 flex items-center">
              <svg
              width="18px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
              />
            </svg>
              <a href="https://wa.me/5491122664785" class="hover:underline ml-2" target="_blank"
                >1122664785</a
              >
            </li>

            <li class="mb-4 flex items-center">
              <svg
              width="18px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
            <path
            fill="#fff"
            d="M12.004 5.838a6.157 6.157 0 0 0-6.158 6.158 6.157 6.157 0 0 0 6.158 6.158 6.157 6.157 0 0 0 6.158-6.158 6.157 6.157 0 0 0-6.158-6.158zm0 10.155a3.996 3.996 0 1 1 3.997-3.997 3.995 3.995 0 0 1-3.997 3.997z"/>
            <path 
            fill="#fff"
            d="M16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941C-.283 4.325.012 7.435.012 11.996c0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z"/><circle x="18.406" cy="5.595" r="1.439"/>
            </svg>
              <a
                href="https://www.instagram.com/centrofinaer/?igsh=MXF4Y3F3MHhoZ2dobw%3D%3D"
                class="hover:underline ml-2"
                >@centrofinaer</a
              >
            </li>
            <li class="mb-4 flex items-center">
              <svg
              width="18px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z"
              />
            </svg>
              <a
                href="https://www.facebook.com/CentroMedicoFINAER?mibextid=qi2Omg"
                class="hover:underline ml-2"
                >Centro Medico Finaer</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-white uppercase text-white"
          >
            Horarios
          </h2>
          <ul class="text-white opacity-70">
            <li class="mb-6">
              <spam class="hover:underline">Lunes a Viernes de 08:00 a 18hs.</spam>
            </li>
            <li>
              <h2
                class="mb-6 text-sm font-semibold text-white uppercase text-white"
              >
                Laboratorio:
              </h2>
            </li>
            <li class="mb-4">
              <spam class="hover:underline">Lunes a Viernes de 08:00 a 10hs.</spam>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
