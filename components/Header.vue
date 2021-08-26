<template>
  <header class="bg-white shadow">
    <div
      class="
        max-w-7xl
        mx-auto
        px-2
        sm:px-4
        lg:divide-y lg:divide-gray-200 lg:px-8
      "
    >
      <div class="relative h-16 flex justify-between">
        <div class="relative z-10 px-2 flex lg:px-0">
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
          </div>
        </div>
        <div
          class="
            relative
            z-0
            flex-1
            px-2
            flex
            items-center
            justify-center
            sm:absolute sm:inset-0
          "
        >
          <div class="w-full sm:max-w-xs">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
              <div
                class="
                  pointer-events-none
                  absolute
                  inset-y-0
                  left-0
                  pl-3
                  flex
                  items-center
                "
              >
                <svg
                  class="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="search"
                name="search"
                class="
                  block
                  w-full
                  bg-white
                  border border-gray-300
                  rounded-md
                  py-2
                  pl-10
                  pr-3
                  text-sm
                  placeholder-gray-500
                  focus:outline-none
                  focus:text-gray-900
                  focus:placeholder-gray-400
                  focus:ring-1
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  sm:text-sm
                "
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
        </div>
        <div class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
          <!-- Profile dropdown -->
          <div class="flex-shrink-0 relative ml-4">
            <div>
              <button
                id="user-menu-button"
                type="button"
                class="
                  bg-white
                  rounded-full
                  flex
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://avatars.githubusercontent.com/u/12933109?s=60&amp;v=4"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <nav class="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
        <a
          href="#"
          class="
            bg-gray-100
            text-gray-900
            rounded-md
            py-2
            px-3
            inline-flex
            items-center
            text-sm
            font-medium
          "
          aria-current="page"
        >
          Menu 1
        </a>

        <a
          href="#"
          class="
            text-gray-900
            hover:bg-gray-50 hover:text-gray-900
            rounded-md
            py-2
            px-3
            inline-flex
            items-center
            text-sm
            font-medium
          "
        >
          Menu 2
        </a>

        <a
          href="#"
          class="
            text-gray-900
            hover:bg-gray-50 hover:text-gray-900
            rounded-md
            py-2
            px-3
            inline-flex
            items-center
            text-sm
            font-medium
          "
        >
          Menu 3
        </a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>
