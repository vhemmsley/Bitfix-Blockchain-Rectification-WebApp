<template>

 
  <div class="background-gradient relative">
     <!-- back to top button-->
   <div class="absolute group right-10 bottom-6 bg-green-400 rounded-full group animate-bounce ">
    <a href=""><img src="./images/arrow-small-up.png" class="h-8 m-1"></a>
   </div>
    <!-- NAVBAR HEADER -->
    <header id="header">
      <nav class="flex mx-auto p-5 justify-between items-center">
        <!-- logo-->
        
        <div class="w-7">
        <a href="/"><img src="./images/logo.png" /></a>
        </div>
      

        <!--navigation -->

        <ul class="hidden md:flex space-x-28">
          <li class="group">
            <a href="./index.html" class="text-white font-xl font-bold">Home </a>
            <div
              class="border-b-2 border-blue-500 opacity-0 group-hover:opacity-100 pt-2 transition duration-400"
            ></div>
          </li>

          <li class="group">
            <a href="#services" class="text-slate-400 group-hover:text-white font-xl font-bold"
              >Services</a
            >
            <div
              class="border-b-2 border-blue-500 opacity-0 group-hover:opacity-100 pt-2 transition duration-400"
            ></div>
          </li>

          <li class="group">
            <a href="#explore" class="text-slate-400 group-hover:text-white font-xl font-bold"
              >Explore</a
            >
            <div
              class="border-b-2 border-blue-500 opacity-0 group-hover:opacity-100 pt-2 transition duration-400"
            ></div>
          </li>
        </ul>

        <!-- dark mode and connect btn container -->
        <div class="md:space-x-5">
          <!-- Dark/Light Mode Button -->
          <button
            id="theme-toggle"
            class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2 5"
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
            <button class="glow-btn text-white px-5 py-2 rounded-lg">
              <a>Connect</a>
            </button>
          </router-link>
        </div>
      </nav>
    </header>

    <!-- HERO SECTION -->
    <section id="hero" class="mx-6 md:mx-24 mt-32">
      <!-- section container -->
      <div class="flex flex-col lg:flex-row lg:space-x-40 justify-between items-center">
        <!-- content on left -->
        <div class="flex flex-col space-y-8">
          <!-- write up-->
          <div class="space-y-6">
            <h2 class="font-bold text-4xl md:text-5xl tracking-wide">
              Your Trusted Blockchain
              <span class="text-blue-500">and Crypto Rectification Solution!</span>
            </h2>

            <p class="text-slate-400">
              Your go-to online tool to seamlessly Claim Airdrops and efficiently fix any
              blockchain-related issues you might encounter.Resolve wallet issues, token errors,
              transaction failures and more.
            </p>
          </div>

          <!-- hero button -->
          <div>
            <router-link to="/collab">
              <button class="glow-btn flex text-white px-5 py-2 rounded-lg space-x-1">
                <a>Claim Airdrop</a>
                <img src="./images/SVG/right-arrow.svg" class="w-5" />
              </button>
            </router-link>
          </div>
        </div>

        <!-- image on right-->

        <div class="flex flex-col mt-8 w-full items-center lg:items-end">
          <img
            src="./images/heropic.jpg"
            class="w-full max-w-md lg:max-w-lg rounded-2xl hero-img"
          />
        </div>
      </div>
    </section>

    <!-- OUR SERVICES SECTION-->

    <section id="services" class="py-20">
      <!-- section headers -->
      <div class="text-center mb-24 space-y-5">
        <h2 class="text-3xl font-bold">Our Core Services</h2>
        <p class="text-slate-400">Blockchain Rectification issues that we could help resolve</p>
      </div>

      <div class="grid md:grid-cols-3 gap-14 max-w-6xl mx-auto px-6">
        <!-- Wallet & Account Solutions -->
        <router-link to="/collab">
          <a class="group">
            <div
              class="service-card relative bg-gray-900 p-8 rounded-xl border border-gray-800 flex flex-col h-full"
            >
              <div
                class="absolute -top-10 left-8 border-2 border-blue-600 bg-blue-600 rounded-lg p-6"
              >
                <img src="./images/SVG/services-icon/coins.png" class="scale-125" />
              </div>

              <div class="mt-5 flex flex-col flex-1">
                <h3 class="text-xl font-semibold mb-3 group-hover:text-green-400">
                  Wallet & Account Solutions
                </h3>

                <ul class="text-gray-400 mb-4 space-y-1 flex-1">
                  <li>• Fix your Wallet Problem</li>
                  <li>• Refund</li>
                  <li>• Locked Account</li>
                  <li>• Trading Wallet Issues</li>
                  <li>• Migration</li>
                </ul>

                <span class="text-green-400 mt-auto">Explore →</span>
              </div>
            </div>
          </a>
        </router-link>

        <!-- Smart Contract & Token Services -->
        <router-link to="/collab">
          <a class="group">
            <div
              class="service-card relative bg-gray-900 p-8 rounded-xl border border-gray-800 flex flex-col h-full"
            >
              <div
                class="absolute -top-10 left-8 border-2 border-blue-600 bg-blue-600 rounded-lg p-6"
              >
                <img src="./images/SVG/services-icon/dashboard.png" class="scale-125" />
              </div>

              <div class="mt-5 flex flex-col flex-1">
                <h3 class="text-xl font-semibold mb-3 group-hover:text-green-400">
                  Smart Contract & Token Services
                </h3>

                <ul class="text-gray-400 mb-4 space-y-1 flex-1">
                  <li>• Smart Contract Audits and Debugging</li>
                  <li>• Token Deployment and Correction</li>
                  <li>• Token Bridge Solutions</li>
                  <li>• TOKEN BRIDGE</li>
                </ul>

                <span class="text-green-400 mt-auto">Explore →</span>
              </div>
            </div>
          </a>
        </router-link>

        <!-- DeFi & NFT Solutions -->
        <router-link to="/collab">
          <a class="group">
            <div
              class="service-card relative bg-gray-900 p-8 rounded-xl border border-gray-800 flex flex-col h-full"
            >
              <div
                class="absolute -top-10 left-8 border-2 border-blue-600 bg-blue-600 rounded-lg p-6"
              >
                <img src="./images/SVG/services-icon/globe.png" class="scale-125" />
              </div>

              <div class="mt-5 flex flex-col flex-1">
                <h3 class="text-xl font-semibold mb-3 group-hover:text-green-400">
                  DeFi & NFT Solutions
                </h3>

                <ul class="text-gray-400 mb-4 space-y-1 flex-1">
                  <li>• DeFi Protocol Optimization</li>
                  <li>• NFT (Non-Fungible Token) Solutions</li>
                  <li>• Airdrop Fixes</li>
                  <li>• Connect to Dapps</li>
                </ul>

                <span class="text-green-400 mt-auto">Explore →</span>
              </div>
            </div>
          </a>
        </router-link>

        <!-- Trading & Liquidity Issues -->
        <router-link to="/collab">
          <a class="group">
            <div
              class="service-card relative bg-gray-900 p-8 rounded-xl border border-gray-800 flex flex-col h-full"
            >
              <div
                class="absolute -top-10 left-8 border-2 border-blue-600 bg-blue-600 rounded-lg p-6"
              >
                <img src="./images/SVG/services-icon/rocket-lunch.png" class="scale-125" />
              </div>

              <div class="mt-5 flex flex-col flex-1">
                <h3 class="text-xl font-semibold mb-3 group-hover:text-green-400">
                  Trading & Liquidity Issues
                </h3>

                <ul class="text-gray-400 mb-4 space-y-1 flex-1">
                  <li>• Buy and Sell Issues</li>
                  <li>• Buy and Sell Liquidity Issues Resolution</li>
                  <li>• Swap Functionality Enhancement</li>
                  <li>• Slippage Error</li>
                </ul>

                <span class="text-green-400 mt-auto">Explore →</span>
              </div>
            </div>
          </a>
        </router-link>

        <!-- Staking & Rewards -->
        <router-link to="/collab">
          <a class="group">
            <div
              class="service-card relative bg-gray-900 p-8 rounded-xl border border-gray-800 flex flex-col h-full"
            >
              <div
                class="absolute -top-10 left-8 border-2 border-blue-600 bg-blue-600 rounded-lg p-6"
              >
                <img src="./images/SVG/services-icon/settings.png" class="scale-125" />
              </div>

              <div class="mt-5 flex flex-col flex-1">
                <h3 class="text-xl font-semibold mb-3 group-hover:text-green-400">
                  Deposits , Staking & Rewards
                </h3>

                <ul class="text-gray-400 mb-4 space-y-1 flex-1">
                  <li>• APR Activation</li>
                  <li>• Staking</li>
                  <li>• Deposit and Withdrawal Management</li>
                </ul>

                <span class="text-green-400 mt-auto">Explore →</span>
              </div>
            </div>
          </a>
        </router-link>

        <!-- Transaction & General Fixes -->
        <router-link to="/collab">
          <a href="collab-server/index.html" class="group">
            <div
              class="service-card relative bg-gray-900 p-8 rounded-xl border border-gray-800 flex flex-col h-full"
            >
              <div
                class="absolute -top-10 left-8 border-2 border-blue-600 bg-blue-600 rounded-lg p-6"
              >
                <img src="./images/SVG/services-icon/verified.png" class="scale-125" />
              </div>

              <div class="mt-5 flex flex-col flex-1">
                <h3 class="text-xl font-semibold mb-3 group-hover:text-green-400">
                  Transaction & General Fixes
                </h3>

                <ul class="text-gray-400 mb-4 space-y-1 flex-1">
                  <li>• Transaction Delay</li>
                  <li>• Transaction Error</li>
                  <li>• High Gas Fees</li>
                  <li>• Rectification</li>
                  <li>• General Issues</li>
                </ul>

                <span class="text-green-400 mt-auto">Explore →</span>
              </div>
            </div>
          </a>
        </router-link>
      </div>
    </section>

    <!-- HOW IT WORKS - EXPLORE-->
    <section id="explore" class="py-20 text-center">
      <h2 class="text-3xl font-bold mb-12">How It Works</h2>

      <div class="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        <div>
          <h3 class="text-xl mb-2">1. Submit Issue</h3>
          <p class="text-gray-400">Describe your blockchain or wallet issue.</p>
        </div>

        <div>
          <h3 class="text-xl mb-2">2. Analysis</h3>
          <p class="text-gray-400">Our specialists analyze the problem.</p>
        </div>

        <div>
          <h3 class="text-xl mb-2">3. Resolution</h3>
          <p class="text-gray-400">We provide solutions and technical support.</p>
        </div>
      </div>
    </section>

    <!-- footer -->
    <footer class="bg-black border-t border-gray-800 mt-24">
      <div class="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <!-- Logo + Description -->
        <div>
          <img src="./images/logo.png" class=" mb-4">

          </img>

          <p class="text-gray-400">
            Trusted blockchain troubleshooting and crypto technical support. We help resolve wallet
            issues, transaction errors and DeFi related problems securely.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>

          <ul class="space-y-3 text-gray-400">
            <li><a href="#" class="hover:text-green-400">Home</a></li>
            <li>
              <a href="#services" class="hover:text-green-400">Services</a>
            </li>
            <li>
              <a href="#explore" class="hover:text-green-400">How It Works</a>
            </li>
            <li><a href="#" class="hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Services</h3>

          <ul class="space-y-3 text-gray-400">
            <li><a class="hover:text-green-400">Wallet Issues</a></li>
            <li><a class="hover:text-green-400">Transaction Fixes</a></li>
            <li><a class="hover:text-green-400">Smart Contract Audits</a></li>
            <li><a class="hover:text-green-400">Token Deployment</a></li>
          </ul>
        </div>

        <!-- Contact -->
      <!-- 
        <div>
          <h3 class="text-lg font-semibold mb-4">Support</h3>

          <ul class="space-y-3 text-gray-400">
            <li>Email: support@blockfix.io</li>
            <li>Live Support Available</li>
            <li>24/7 Technical Assistance</li>
          </ul>

          Social Icons

          <div class="flex gap-4 mt-6">
            <div class="bg-gray-900 p-2 rounded-lg hover:bg-green-500 cursor-pointer">
              <img src="" class="w-5" />
            </div>

            <div class="bg-gray-900 p-2 rounded-lg hover:bg-green-500 cursor-pointer">
              <img src="" class="w-5" />
            </div>

            <div class="bg-gray-900 p-2 rounded-lg hover:bg-green-500 cursor-pointer">
              <img src="" class="w-5" />
            </div>
          </div>
        </div> 
      -->
      </div>

      <!-- Bottom Footer -->
      <div class="flex justify-center items-center space-x-4 border-t border-gray-800 text-center py-6 text-gray-500">
        © 2026 <img src="./images/logo.png" class=" w-10 pl-2 pr-2"> All Rights Reserved.
      </div>
    </footer>
  </div>
</template>

<style></style>
<script></script>
