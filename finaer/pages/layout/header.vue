<template>
  <header
    class="py-0 px-0 bg-[rgba(255,255,255,0.8)] absolute left-0 top-0 w-full"
  >
    <nav class="bg-white border-gray-200 dark:bg-gray-700">
      <div
        class="flex items-center justify-between max-w-screen-xl mx-auto p-4"
      >
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="../../assets/images/logo.png"
            class="h-12"
            alt="Finaer Logo"
          />
        </a>
        <div
          class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse"
        >
          <a
            href="https://wa.me/5491122664785"
            class="text-white bg-[#008000] hover:bg-[#8A88FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-center inline-flex items-center gap-3"
            >Turnos
            <svg
              width="15px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
              />
            </svg>
          </a>
          <a
          target="_blank"
            href="https://aplicacionmedicaweb.com.ar/tol-finaer/_client/turnosonline2.aspx"
            class="text-white bg-[#0000ff] hover:bg-[#6568e6] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-center inline-flex items-center gap-3"
            >Turnos
            <img
              src="../../assets/images/online.png"
              alt="Turnos Online"
              width="16"
              height="16"
              style="object-fit:contain;"
            />
          </a>
          
          <button
            data-collapse-toggle="mega-menu-icons"
            type="button"
            @click="activeNavFunc"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-icons"
            :aria-expanded="activeNavbar"
          >
            <span class="sr-only">Menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          id="mega-menu-icons"
          :class="[
            'absolute right-0 top-full z-50 w-64 md:w-auto md:static md:flex md:w-auto md:order-1',
            activeNavbar ? 'flex flex-col' : 'hidden'
          ]"
        >
          <ul class="flex flex-col mt-0 font-medium space-y-1 md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse dark:bg-gray-700">

            <li>
              <button
                id="mega-menu-icons-dropdown-button"
                data-dropdown-toggle="mega-menu-icons-dropdown"
                class="flex items-center justify-between w-full py-2 px-3 font-bold text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#8A88FF] md:p-0 dark:text-white md:dark:hover:text-[#8A88FF] dark:hover:bg-gray-700 dark:hover:text-[#8A88FF] md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Especialidades
                <svg
                  class="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="mega-menu-icons-dropdown"
                class="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-2 dark:bg-gray-700"
              >
                <div class="p-4 pb-4 text-gray-900 md:pb-4 dark:text-white">
                  <ul
                    class="space-y-4"
                    aria-labelledby="mega-menu-icons-dropdown-button"
                  >
                    <li>
                      <a
                        href="/cardiologia"
                        class="flex font-bold items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                      >
                        <span class="sr-only">Cardiología</span>
                        <!--<svg
                          class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
                          />
                        </svg>-->
                        <img
                          src="../../assets/images/cardioico.png"
                          width="20px"
                          class="mr-2"
                        />
                        Cardiología
                      </a>
                    </li>
                    <li>
                      <a
                        href="/diabetologia"
                        class="flex items-center font-bold text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                      >
                        <span class="sr-only">Diabetología</span>
                        <!--<svg
                          class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="m1.56 6.245 8 3.924a1 1 0 0 0 .88 0l8-3.924a1 1 0 0 0 0-1.8l-8-3.925a1 1 0 0 0-.88 0l-8 3.925a1 1 0 0 0 0 1.8Z"
                          />
                          <path
                            d="M18 8.376a1 1 0 0 0-1 1v.163l-7 3.434-7-3.434v-.163a1 1 0 0 0-2 0v.786a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.786a1 1 0 0 0-1-1Z"
                          />
                          <path
                            d="M17.993 13.191a1 1 0 0 0-1 1v.163l-7 3.435-7-3.435v-.163a1 1 0 1 0-2 0v.787a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.787a1 1 0 0 0-1-1Z"
                          />
                        </svg>-->

                        <img
                          src="../../assets/images/diabetesico.png"
                          alt=""
                          width="20px"
                          class="mr-2"
                        />

                        Diabetología
                      </a>
                    </li>
                    <li>
                      <a
                        href="/diagnostico"
                        class="flex items-center font-bold text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                      >
                        <span class="sr-only">Diagnóstico por imágenes</span>
                        <!--<svg
                          class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 18"
                        >
                          <path
                            d="M15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783ZM6 2h6a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2Zm7 5H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Z"
                          />
                          <path
                            d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z"
                          />
                        </svg>-->
                        <img
                          src="../../assets/images/imagenico.png"
                          width="20px"
                          class="mr-2"
                        />

                        Diagnóstico por imágenes
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hemodialisis"
                        class="flex items-center font-bold text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                      >
                        <span class="sr-only">Hemodialisis</span>
                        <!--<svg
                          class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="m7.164 3.805-4.475.38L.327 6.546a1.114 1.114 0 0 0 .63 1.89l3.2.375 3.007-5.006ZM11.092 15.9l.472 3.14a1.114 1.114 0 0 0 1.89.63l2.36-2.362.38-4.475-5.102 3.067Zm8.617-14.283A1.613 1.613 0 0 0 18.383.291c-1.913-.33-5.811-.736-7.556 1.01-1.98 1.98-6.172 9.491-7.477 11.869a1.1 1.1 0 0 0 .193 1.316l.986.985.985.986a1.1 1.1 0 0 0 1.316.193c2.378-1.3 9.889-5.5 11.869-7.477 1.746-1.745 1.34-5.643 1.01-7.556Zm-3.873 6.268a2.63 2.63 0 1 1-3.72-3.72 2.63 2.63 0 0 1 3.72 3.72Z"
                          />
                        </svg>-->
                        <img
                          src="../../assets/images/hemoico.png"
                          width="20px"
                          class="mr-2"
                        />
                        Hemodialisis
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                  <ul class="space-y-4">
                    <li>
                      <a
                        href="/nefrologia"
                        class="flex items-center font-bold text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                      >
                        <span class="sr-only">Nefrologia</span>
                        <!--<svg
                          class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M19 4h-1a1 1 0 1 0 0 2v11a1 1 0 0 1-2 0V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1ZM3 4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm9 13H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Z"
                          />
                          <path d="M6 5H5v1h1V5Z" />
                        </svg>-->
                        <img
                          src="../../assets/images/nefroloico.png"
                          width="20px"
                          class="mr-3"
                        />
                        Nefrologia
                      </a>
                    </li>
                    <li>
                      <a
                        href="/nutricion"
                        class="flex items-center font-bold text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                      >
                        <span class="sr-only">Nutrición</span>
                        <!--<svg
                          class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"
                          />
                        </svg>-->
                        <img
                          src="../../assets/images/nutrico.png"
                          width="20px"
                          class="mr-3"
                        />
                        Nutrición
                      </a>
                    </li>
                    <li>
                      <a
                        href="/uriologia"
                        class="flex items-center font-bold text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                      >
                        <span class="sr-only">Urología</span>
                        <!--<svg
                          class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 18"
                        >
                          <path
                            d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10ZM17 13h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z"
                          />
                        </svg>-->
                        <img
                          src="../../assets/images/uroico.png"
                          width="20px"
                          class="mr-3"
                        />
                        Urología
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a
                href="/nosotros"
                class="block font-bold py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >Nosotros</a
              >
            </li>

            <li>
              <a
                href="/faq"
                class="block font-bold py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >Preguntas Frecuentes</a
              >
            </li>

            <li>
              <a
                href="/contacto"
                class="block font-bold py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >Contacto</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      activeNavbar: false,
      activeAnim: false,
    };
  },
  methods: {
    activeNavFunc() {
      this.activeNavbar = !this.activeNavbar;

      setTimeout(() => {
        this.activeAnim = !this.activeAnim;
      }, 200);
    },
  },
};
</script>

<style>
.hidden-menu {
  display: none;
}

.active-menu:hover .hidden-menu {
  display: flex;
}
.hidden-menu:hover {
  display: flex;
  z-index: 999;
}
</style>
