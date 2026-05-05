<template>
  <!-- floating text -->
  <div>
    <router-view />
    <chat-trigger></chat-trigger>
  </div>
  <div class="background-gradient relative min-h-screen overflow-x-hidden">
    <!-- back to top button-->
    <div
      class="fixed z-50 group right-6 bottom-6 bg-green-500 hover:bg-green-400 rounded-full p-3 shadow-lg shadow-green-500/30 cursor-pointer transition-all duration-300 hover:scale-110 animate-bounce"
    >
      <a href="#header"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="white"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          /></svg
      ></a>
    </div>

    <!-- NAVBAR HEADER -->
    <header
      id="header"
      class="fixed w-full top-0 z-40 backdrop-blur-md bg-black/30 border-b border-white/5 transition-all duration-300"
    >
      <nav class="flex mx-auto p-5 justify-between items-center max-w-7xl">
        <!-- logo-->
        <div class="w-10 hover:scale-105 transition-transform duration-300">
          <a href="/"><img src="./images/logo.png" class="drop-shadow-lg" /></a>
        </div>

        <!--navigation -->
        <ul class="hidden md:flex space-x-10">
          <li class="group relative">
            <a
              href="./index.html"
              class="text-white font-semibold text-lg tracking-wide hover:text-blue-400 transition-colors duration-300"
              >Home</a
            >
            <div
              class="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            ></div>
          </li>

          <li class="group relative">
            <a
              href="#services"
              class="text-slate-400 font-semibold text-lg tracking-wide group-hover:text-white transition-colors duration-300"
              >Services</a
            >
            <div
              class="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            ></div>
          </li>

          <li class="group relative">
            <a
              href="#explore"
              class="text-slate-400 font-semibold text-lg tracking-wide group-hover:text-white transition-colors duration-300"
              >Explore</a
            >
            <div
              class="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            ></div>
          </li>
        </ul>

        <!-- dark mode and connect btn container -->
        <div class="flex items-center gap-4">
          <!-- Dark/Light Mode Button -->
          <button
            id="theme-toggle"
            class="text-gray-400 hover:text-white hover:bg-white/10 rounded-full p-2.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            <!-- Dark SVG Icon -->
            <svg
              id="theme-toggle-dark-icon"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <!-- Light SVG Icon -->
            <svg
              id="theme-toggle-light-icon"
              class="w-5 h-5 hidden"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          <!-- connect button -->
          <router-link to="/collab">
            <button
              class="glow-btn text-white px-6 py-2.5 rounded-xl font-semibold tracking-wide hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Connect</span>
            </button>
          </router-link>
        </div>
      </nav>
    </header>

    <!-- HERO SECTION -->
    <section id="hero" class="mx-6 md:mx-24 mt-32 pt-16 pb-20">
      <!-- section container -->
      <div
        class="flex flex-col lg:flex-row lg:space-x-20 justify-between items-center max-w-7xl mx-auto"
      >
        <!-- content on left -->
        <div class="flex flex-col space-y-8 max-w-2xl">
          <!-- write up-->
          <div class="space-y-6 md:pb-0">
            <div
              class="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wide mb-2"
            >
              Blockchain Solutions
            </div>
            <h2
              class="font-bold text-4xl md:text-6xl tracking-tight md:leading-tight leading-snug bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400"
            >
              Your Trusted Blockchain<br />
              <span class="text-blue-400">and Crypto Rectification Solution!</span>
            </h2>

            <p class="text-slate-400 text-lg leading-relaxed max-w-lg">
              Your go-to online tool to seamlessly Claim Airdrops and efficiently fix any
              blockchain-related issues you might encounter. Resolve wallet issues, token errors,
              transaction failures and more.
            </p>
          </div>

          <!-- hero button -->
          <div class="flex items-center gap-6">
            <router-link to="/collab">
              <button
                class="glow-btn flex items-center justify-center text-white px-8 py-4 rounded-xl space-x-3 font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 group"
              >
                <span>Claim Airdrop</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="white"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </router-link>
            <a
              href="#services"
              class="text-slate-400 hover:text-white font-semibold flex items-center gap-2 transition-colors duration-300 group"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>
          </div>

          <!-- stats -->
          <div class="flex gap-10 pt-6 border-t border-white/10">
            <div>
              <div class="text-2xl font-bold text-white">10K+</div>
              <div class="text-slate-500 text-sm">Issues Resolved</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-white">99%</div>
              <div class="text-slate-500 text-sm">Success Rate</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-white">24/7</div>
              <div class="text-slate-500 text-sm">Support</div>
            </div>
          </div>
        </div>

        <!-- image on right-->
        <div class="flex flex-col mt-12 lg:mt-0 w-full items-center lg:items-end relative">
          <div class="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-3xl"></div>
          <img
            src="./images/heropic.jpg"
            class="relative w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl shadow-blue-500/20 border border-white/10 hero-img hover:scale-[1.02] transition-transform duration-500"
          />
          <!-- floating badge -->
          <div
            class="absolute -bottom-4 -left-4 bg-gray-900/90 backdrop-blur-md border border-gray-700 rounded-xl p-4 shadow-xl"
          >
            <div class="flex items-center gap-3">
              <div class="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span class="text-white font-semibold text-sm">Live Support Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- OUR SERVICES SECTION-->
    <section id="services" class="py-24 relative">
      <div
        class="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"
      ></div>
      <!-- section headers -->
      <div class="text-center mb-24 space-y-5 relative">
        <div
          class="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold tracking-wide"
        >
          What We Offer
        </div>
        <h2
          class="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
        >
          Our Core Services
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          Blockchain Rectification issues that we could help resolve
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 relative">
        <!-- Wallet & Account Solutions -->
        <router-link to="/collab" class="group">
          <div
            class="service-card relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 flex flex-col h-full transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2"
          >
            <div
              class="absolute -top-8 left-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-5 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300"
            >
              <img src="./images/SVG/services-icon/coins.png" class="w-8 h-8" />
            </div>

            <div class="mt-8 flex flex-col flex-1">
              <h3
                class="text-xl font-bold mb-4 group-hover:text-green-400 transition-colors duration-300"
              >
                Wallet & Account Solutions
              </h3>

              <ul class="text-gray-400 mb-6 space-y-3 flex-1">
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Fix your Wallet Problem
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Refund
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Locked Account
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Trading Wallet Issues
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Migration
                </li>
              </ul>

              <span
                class="text-green-400 font-semibold flex items-center gap-2 mt-auto group-hover:gap-3 transition-all duration-300"
              >
                Explore
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </router-link>

        <!-- Smart Contract & Token Services -->
        <router-link to="/collab" class="group">
          <div
            class="service-card relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 flex flex-col h-full transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2"
          >
            <div
              class="absolute -top-8 left-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-5 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300"
            >
              <img src="./images/SVG/services-icon/dashboard.png" class="w-8 h-8" />
            </div>

            <div class="mt-8 flex flex-col flex-1">
              <h3
                class="text-xl font-bold mb-4 group-hover:text-green-400 transition-colors duration-300"
              >
                Smart Contract & Token Services
              </h3>

              <ul class="text-gray-400 mb-6 space-y-3 flex-1">
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Smart Contract Audits
                  and Debugging
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Token Deployment and
                  Correction
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Token Bridge Solutions
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Token Bridge
                </li>
              </ul>

              <span
                class="text-green-400 font-semibold flex items-center gap-2 mt-auto group-hover:gap-3 transition-all duration-300"
              >
                Explore
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </router-link>

        <!-- DeFi & NFT Solutions -->
        <router-link to="/collab" class="group">
          <div
            class="service-card relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 flex flex-col h-full transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2"
          >
            <div
              class="absolute -top-8 left-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-5 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300"
            >
              <img src="./images/SVG/services-icon/globe.png" class="w-8 h-8" />
            </div>

            <div class="mt-8 flex flex-col flex-1">
              <h3
                class="text-xl font-bold mb-4 group-hover:text-green-400 transition-colors duration-300"
              >
                DeFi & NFT Solutions
              </h3>

              <ul class="text-gray-400 mb-6 space-y-3 flex-1">
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>DeFi Protocol
                  Optimization
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>NFT (Non-Fungible Token)
                  Solutions
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Airdrop Fixes
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Connect to Dapps
                </li>
              </ul>

              <span
                class="text-green-400 font-semibold flex items-center gap-2 mt-auto group-hover:gap-3 transition-all duration-300"
              >
                Explore
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </router-link>

        <!-- Trading & Liquidity Issues -->
        <router-link to="/collab" class="group">
          <div
            class="service-card relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 flex flex-col h-full transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2"
          >
            <div
              class="absolute -top-8 left-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-5 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300"
            >
              <img src="./images/SVG/services-icon/rocket-lunch.png" class="w-8 h-8" />
            </div>

            <div class="mt-8 flex flex-col flex-1">
              <h3
                class="text-xl font-bold mb-4 group-hover:text-green-400 transition-colors duration-300"
              >
                Trading & Liquidity Issues
              </h3>

              <ul class="text-gray-400 mb-6 space-y-3 flex-1">
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Buy and Sell Issues
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Buy and Sell Liquidity
                  Issues Resolution
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Swap Tokens
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Slippage Error
                </li>
              </ul>

              <span
                class="text-green-400 font-semibold flex items-center gap-2 mt-auto group-hover:gap-3 transition-all duration-300"
              >
                Explore
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </router-link>

        <!-- Staking & Rewards -->
        <router-link to="/collab" class="group">
          <div
            class="service-card relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 flex flex-col h-full transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2"
          >
            <div
              class="absolute -top-8 left-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-5 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300"
            >
              <img src="./images/SVG/services-icon/settings.png" class="w-8 h-8" />
            </div>

            <div class="mt-8 flex flex-col flex-1">
              <h3
                class="text-xl font-bold mb-4 group-hover:text-green-400 transition-colors duration-300"
              >
                Deposits, Staking & Rewards
              </h3>

              <ul class="text-gray-400 mb-6 space-y-3 flex-1">
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>APR Activation
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Staking
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Deposits
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Withdrawal Management
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Claim Issues
                </li>
              </ul>

              <span
                class="text-green-400 font-semibold flex items-center gap-2 mt-auto group-hover:gap-3 transition-all duration-300"
              >
                Explore
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </router-link>

        <!-- Transaction & General Fixes -->
        <router-link to="/collab" class="group block h-full">
          <div
            class="service-card relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 flex flex-col h-full transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2"
          >
            <div
              class="absolute -top-8 left-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-5 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300"
            >
              <img src="./images/SVG/services-icon/verified.png" class="w-8 h-8" />
            </div>

            <div class="mt-8 flex flex-col flex-1">
              <h3
                class="text-xl font-bold mb-4 group-hover:text-green-400 transition-colors duration-300"
              >
                Transaction & General Fixes
              </h3>

              <ul class="text-gray-400 mb-6 space-y-3 flex-1">
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Transaction Delay
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Transaction Error
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>High Gas Fees
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Rectification
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>General Issues
                </li>
              </ul>

              <span
                class="text-green-400 font-semibold flex items-center gap-2 mt-auto group-hover:gap-3 transition-all duration-300"
              >
                Explore
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </router-link>
      </div>
    </section>

    <!-- HOW IT WORKS - EXPLORE-->
    <section id="explore" class="py-24 text-center relative">
      <div
        class="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent"
      ></div>
      <div class="relative max-w-6xl mx-auto px-6">
        <div
          class="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold tracking-wide mb-4"
        >
          Process
        </div>
        <h2
          class="text-4xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
        >
          How It Works
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            class="group relative bg-gray-900/50 backdrop-blur-sm p-10 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
          >
            <div
              class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300"
            >
              1
            </div>
            <div class="mt-6">
              <div
                class="w-16 h-16 mx-auto mb-6 bg-blue-500/10 rounded-2xl flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 text-blue-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-3 text-white">Submit Issue</h3>
              <p class="text-gray-400 leading-relaxed">
                Describe your blockchain or wallet issue with detailed information for accurate
                diagnosis.
              </p>
            </div>
          </div>

          <div
            class="group relative bg-gray-900/50 backdrop-blur-sm p-10 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
          >
            <div
              class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300"
            >
              2
            </div>
            <div class="mt-6">
              <div
                class="w-16 h-16 mx-auto mb-6 bg-blue-500/10 rounded-2xl flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 text-blue-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-3 text-white">Analysis</h3>
              <p class="text-gray-400 leading-relaxed">
                Our specialists analyze the problem using advanced diagnostic tools and expertise.
              </p>
            </div>
          </div>

          <div
            class="group relative bg-gray-900/50 backdrop-blur-sm p-10 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
          >
            <div
              class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300"
            >
              3
            </div>
            <div class="mt-6">
              <div
                class="w-16 h-16 mx-auto mb-6 bg-blue-500/10 rounded-2xl flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 text-blue-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043 3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-3 text-white">Resolution</h3>
              <p class="text-gray-400 leading-relaxed">
                We provide solutions and technical support to get your blockchain operations running
                smoothly.
              </p>
            </div>
          </div>
        </div>

        <!-- connecting line for desktop -->
        <div
          class="hidden md:block absolute top-[280px] left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
        ></div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <div
          class="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-12"
        >
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Fix Your Blockchain Issues?
          </h2>
          <p class="text-slate-400 mb-8 text-lg">
            Get started today and experience seamless blockchain rectification services.
          </p>
          <router-link to="/collab">
            <button
              class="glow-btn text-white px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              Get Started Now
            </button>
          </router-link>
        </div>
      </div>
    </section>

    <!-- footer -->
    <footer class="bg-black/80 backdrop-blur-sm border-t border-gray-800 mt-12">
      <div class="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <!-- Logo + Description -->
        <div>
          <img src="./images/logo.png" class="mb-4 w-12 h-auto" />
          <p class="text-gray-400 leading-relaxed">
            Trusted blockchain troubleshooting and crypto technical support. We help resolve wallet
            issues, transaction errors and DeFi related problems securely.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-white">Quick Links</h3>
          <ul class="space-y-3 text-gray-400">
            <li>
              <a
                href="#"
                class="hover:text-green-400 transition-colors duration-300 flex items-center gap-2"
                ><span class="w-1 h-1 rounded-full bg-gray-600"></span>Home</a
              >
            </li>
            <li>
              <a
                href="#services"
                class="hover:text-green-400 transition-colors duration-300 flex items-center gap-2"
                ><span class="w-1 h-1 rounded-full bg-gray-600"></span>Services</a
              >
            </li>
            <li>
              <a
                href="#explore"
                class="hover:text-green-400 transition-colors duration-300 flex items-center gap-2"
                ><span class="w-1 h-1 rounded-full bg-gray-600"></span>How It Works</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-green-400 transition-colors duration-300 flex items-center gap-2"
                ><span class="w-1 h-1 rounded-full bg-gray-600"></span>Contact</a
              >
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-white">Services</h3>
          <ul class="space-y-3 text-gray-400">
            <li>
              <router-link
                to="/collab"
                class="hover:text-green-400 transition-colors duration-300 flex items-center gap-2 cursor-pointer"
                ><span class="w-1 h-1 rounded-full bg-gray-600"></span>Wallet Issues
              </router-link>
            </li>
            <li>
              <router-link
                to="/collab"
                class="hover:text-green-400 transition-colors duration-300 flex items-center gap-2 cursor-pointer"
                ><span class="w-1 h-1 rounded-full bg-gray-600"></span>Transaction Fixes
              </router-link>
            </li>
            <li>
              <router-link
                to="/collab"
                class="hover:text-green-400 transition-colors duration-300 flex items-center gap-2 cursor-pointer"
                ><span class="w-1 h-1 rounded-full bg-gray-600"></span>Smart Contract Audits
              </router-link>
            </li>
            <li>
              <router-link
                to="/collab"
                class="hover:text-green-400 transition-colors duration-300 flex items-center gap-2 cursor-pointer"
                ><span class="w-1 h-1 rounded-full bg-gray-600"></span>Token Deployment
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div class="border-t border-gray-800">
        <div
          class="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div class="flex items-center gap-2 text-gray-500 text-sm">
            <span>© 2026</span>
            <img src="./images/logo.png" class="w-8 h-auto" />
            <span>All Rights Reserved.</span>
          </div>
          <div class="flex gap-6 text-gray-500 text-sm">
            <a href="#" class="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" class="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.background-gradient {
  background: linear-gradient(135deg, #0a0a0a 0%, #111827 50%, #0a0a0a 100%);
  min-height: 100vh;
}

.glow-btn {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  position: relative;
  overflow: hidden;
}

.glow-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.glow-btn:hover::before {
  left: 100%;
}

.hero-img {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.service-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 1rem;
  padding: 1px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), transparent 40%);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.5s;
}

.service-card:hover::before {
  opacity: 1;
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #0a0a0a;
}

::-webkit-scrollbar-thumb {
  background: #374151;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #4b5563;
}
</style>

<script>
// Dark mode toggle functionality
const themeToggleBtn = document.getElementById('theme-toggle')
const darkIcon = document.getElementById('theme-toggle-dark-icon')
const lightIcon = document.getElementById('theme-toggle-light-icon')

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', function () {
    darkIcon.classList.toggle('hidden')
    lightIcon.classList.toggle('hidden')
    document.documentElement.classList.toggle('dark')
  })
}

// Navbar scroll effect
const header = document.getElementById('header')
window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    header.classList.add('bg-black/60')
    header.classList.remove('bg-black/30')
  } else {
    header.classList.remove('bg-black/60')
    header.classList.add('bg-black/30')
  }
})
</script>
