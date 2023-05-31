<template>
  <div
      id="tradePage"
      v-scroll-lock="$store.state.isScrollTrading"
      class="trade-container relative"
  >
    <div class="streak" v-if="streak"><span class="streak-title">streak</span>
      <div class="ep-container" style="width: 32px; height: 32px;">
        <div class="ep-content">
          <div class="ep-svg-container">
            <svg height="32" width="32" xmlns="http://www.w3.org/2000/svg" class="ep-svg">
              <g class="ep-circle--container">
                <defs>
                </defs>
                <g class="ep-circle"
                   style="transition-timing-function: ease-in-out; transform: rotate(-90deg);">
                  <circle r="15.2" cx="16" cy="16" stroke="#617F8D" stroke-dasharray="" fill="#06354C"
                          stroke-width="1.6" class="ep-circle--empty"
                          style="transition-duration: 1000ms; transition-timing-function: ease-in-out;"></circle>
                  <circle r="15.2" cx="16" cy="16" fill="transparent" stroke="#2AE6D8" stroke-width="1.6"
                          stroke-linecap="round" stroke-dasharray="95.50441666912971"
                          class="ep-circle--progress animation__default"
                          :style="{'stroke-dashoffset': 96 - (96 / 9 * streak)}"
                          style="transition: all 1000ms ease-in-out 0s, opacity 0.3s 0s; transform-origin: 50% 50%; opacity: 1; --ep-circumference:95.5044; --ep-negative-circumference:-95.5044; --ep-double-circumference:191.009; --ep-stroke-offset:84.8928; --ep-loop-stroke-offset:-106.116; --ep-bounce-out-stroke-offset:0; --ep-bounce-in-stroke-offset:84.8928; --ep-reverse-stroke-offset:275.902; --ep-loading-stroke-offset:19.1009; animation-duration: 1000ms;">

                  </circle>
                </g>
              </g>
            </svg>
          </div>
          <div class="ep-legend--container" style="max-width: 32px;">
            <div class="ep-legend--value"><span class="ep-legend--value__counter">
                        <span>11.11111111111111</span>
                    </span><span class="streak-value">x<span>{{ streak }}</span></span></div>
          </div>
        </div>
      </div>
      <canvas id="canvas-fire"></canvas>
      <svg id="svg-fire" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur"></feGaussianBlur>
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -9">
          </feColorMatrix>
        </filter>
      </svg>
    </div>
    <div class="vx-row m-0 wrapper">
      <div :class="['vx-col w-full relative trans']" id="left-content">
        <div class="h-full">
          <div class="relative chartBox">
            <highcharts
                ref="chartStock"
                class="wap-chart trans"
                :constructor-type="'stockChart'"
                :options="chartOptionsStock"
            ></highcharts>
            <div class="titleChartCandle flex items-center">
              <span class="iconBTC"></span>
              <span class="textPrice">BTC/USDT</span>
            </div>
            <div class="slider sidebarMobile">
              <div class="slidercontent">
                <div
                    class="backgroundOverlay"
                    :style="`background-image: url(${require('@/assets/images/sky/overlay_left.svg')});`"
                ></div>
                <div class="flex flex-col justify-between progress_c">
                  <span class="font-12 zIndex99" style="color: #fa5f65"
                  >{{ CSSELL }}%</span
                  >
                  <vs-progress
                      style="width: 354px; background: #fa5f65 !important"
                      class="bg-red progress"
                      :height="4"
                      :percent="CSBUY"
                      color="success"
                  ></vs-progress>
                  <span class="font-12 zIndex99" style="color: #29c770"
                  >{{ CSBUY }}%</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div id="analysis-wrapper" class="analysis-wrapper relative">
            <vs-tabs>
              <vs-tab
                  label="INDICATORS"
                  @click="(activeGau = true), (activeHis = true)"
              >
              </vs-tab>
              <vs-tab
                  label="LAST RESULTS"
                  @click="(activeGau = true), (activeHis = false)"
              >
              </vs-tab>
            </vs-tabs>

            <div
                class="wrap-gauge-meter"
                :class="{ active: activeGau, hidden: !activeHis }"
            >
              <div class="wrap-gauge-meter-inner">
                <div class="gauge-meter">
                  <div class="gauge-meter-sub gauge-meter--os">
                    <div class="v-popover gauge-meter-popover">
                      <div class="trigger inline-block">
                        <h3 class="gauge-meter-title">
                          Oscillators
                          <span class="gauge-meter-title-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                            >
                              <g
                                  id="c-question"
                                  transform="translate(3.068 -8.774)"
                              >
                                <g
                                    id="Ellipse_1825"
                                    data-name="Ellipse 1825"
                                    transform="translate(-2.068 9.774)"
                                    fill="none"
                                    stroke="#fefefe"
                                    stroke-linecap="square"
                                    stroke-miterlimit="10"
                                    stroke-width="1"
                                >
                                  <circle
                                      cx="10"
                                      cy="10"
                                      r="10"
                                      stroke="none"
                                  ></circle>
                                  <circle
                                      cx="10"
                                      cy="10"
                                      r="10.5"
                                      fill="none"
                                  ></circle>
                                </g>
                                <g
                                    id="question"
                                    transform="translate(3.497 13.43)"
                                >
                                  <path
                                      id="Path_30768"
                                      data-name="Path 30768"
                                      d="M8.359,10.774a4.349,4.349,0,0,1,.4-2.323,5.026,5.026,0,0,1,1.4-1.421c1.317-.981,1.876-1.491,1.876-2.54,0-1.166-.924-1.637-2.166-1.637a7.306,7.306,0,0,0-3.334.866L5.694,2.063A9.2,9.2,0,0,1,10.035,1a4.89,4.89,0,0,1,3.1.9A3,3,0,0,1,14.287,4.4,3.24,3.24,0,0,1,13.4,6.7,10.58,10.58,0,0,1,11.872,8,5.71,5.71,0,0,0,10.63,9.137a2.68,2.68,0,0,0-.315,1.637H8.359Z"
                                      transform="translate(-5.694 -1)"
                                      fill="#fefefe"
                                  ></path>
                                  <ellipse
                                      id="Ellipse_1827"
                                      data-name="Ellipse 1827"
                                      cx="1.363"
                                      cy="1.284"
                                      rx="1.363"
                                      ry="1.284"
                                      transform="translate(2.252 11.56)"
                                      fill="#fefefe"
                                  ></ellipse>
                                </g>
                              </g>
                            </svg>
                          </span>
                        </h3>
                      </div>
                    </div>
                    <h4 class="gauge-meter-sub-title">{{ textTitleOs }}</h4>
                    <div class="gauge-meter-border">
                      <div class="gauge-meter-background rank-2"></div>
                      <ul class="gauge-meter-label-list">
                        <li
                            class="
                            gauge-meter-label-item
                            gauge-meter-label-item--strong-sell
                          "
                        >
                          strong<br/>sell
                        </li>
                        <li
                            class="
                            gauge-meter-label-item gauge-meter-label-item--sell
                            active
                          "
                        >
                          sell
                        </li>
                        <li
                            class="
                            gauge-meter-label-item
                            gauge-meter-label-item--neutral
                          "
                        >
                          neutral
                        </li>
                        <li
                            class="
                            gauge-meter-label-item gauge-meter-label-item--buy
                          "
                        >
                          buy
                        </li>
                        <li
                            class="
                            gauge-meter-label-item
                            gauge-meter-label-item--strong-buy
                          "
                        >
                          strong<br/>buy
                        </li>
                      </ul>
                      <ul class="gauge-meter-status-list">
                        <li class="gauge-meter-status-item">
                          <span
                              class="
                              gauge-meter-status-value
                              gauge-meter-status-value--sell
                            "
                          >{{ NumOscSELL }}</span
                          >
                          <span class="gauge-meter-status-text">Sell</span>
                        </li>
                        <li class="gauge-meter-status-item">
                          <span
                              class="
                              gauge-meter-status-value
                              gauge-meter-status-value--neutral
                            "
                          >{{ NumOscNeutral }}</span
                          >
                          <span class="gauge-meter-status-text">Neutral</span>
                        </li>
                        <li class="gauge-meter-status-item">
                          <span
                              class="
                              gauge-meter-status-value
                              gauge-meter-status-value--buy
                            "
                          >{{ NumOscBUY }}</span
                          >
                          <span class="gauge-meter-status-text">Buy</span>
                        </li>
                      </ul>
                      <highcharts
                          ref="chartOs"
                          class="gauge-meter-pane"
                          :options="optionsOs"
                      ></highcharts>
                    </div>
                  </div>
                  <div class="gauge-meter-sub gauge-meter--su">
                    <div class="v-popover gauge-meter-popover">
                      <div class="trigger" style="display: inline-block">
                        <h3 class="gauge-meter-title">
                          Summary
                          <span class="gauge-meter-title-icon"
                          ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                          >
                              <g
                                  id="c-question"
                                  transform="translate(3.068 -8.774)"
                              >
                                <g
                                    id="Ellipse_1825"
                                    data-name="Ellipse 1825"
                                    transform="translate(-2.068 9.774)"
                                    fill="none"
                                    stroke="#fefefe"
                                    stroke-linecap="square"
                                    stroke-miterlimit="10"
                                    stroke-width="1"
                                >
                                  <circle
                                      cx="10"
                                      cy="10"
                                      r="10"
                                      stroke="none"
                                  ></circle>
                                  <circle
                                      cx="10"
                                      cy="10"
                                      r="10.5"
                                      fill="none"
                                  ></circle>
                                </g>
                                <g
                                    id="question"
                                    transform="translate(3.497 13.43)"
                                >
                                  <path
                                      id="Path_30768"
                                      data-name="Path 30768"
                                      d="M8.359,10.774a4.349,4.349,0,0,1,.4-2.323,5.026,5.026,0,0,1,1.4-1.421c1.317-.981,1.876-1.491,1.876-2.54,0-1.166-.924-1.637-2.166-1.637a7.306,7.306,0,0,0-3.334.866L5.694,2.063A9.2,9.2,0,0,1,10.035,1a4.89,4.89,0,0,1,3.1.9A3,3,0,0,1,14.287,4.4,3.24,3.24,0,0,1,13.4,6.7,10.58,10.58,0,0,1,11.872,8,5.71,5.71,0,0,0,10.63,9.137a2.68,2.68,0,0,0-.315,1.637H8.359Z"
                                      transform="translate(-5.694 -1)"
                                      fill="#fefefe"
                                  ></path>
                                  <ellipse
                                      id="Ellipse_1827"
                                      data-name="Ellipse 1827"
                                      cx="1.363"
                                      cy="1.284"
                                      rx="1.363"
                                      ry="1.284"
                                      transform="translate(2.252 11.56)"
                                      fill="#fefefe"
                                  ></ellipse>
                                </g>
                              </g></svg
                          ></span>
                        </h3>
                      </div>
                    </div>
                    <h4 class="gauge-meter-sub-title">{{ textTitleSu }}</h4>
                    <div class="gauge-meter-border">
                      <div class="gauge-meter-background rank-3"></div>
                      <ul class="gauge-meter-label-list">
                        <li
                            class="
                            gauge-meter-label-item
                            gauge-meter-label-item--strong-sell
                          "
                        >
                          strong
                          <br/>sell
                        </li>
                        <li
                            class="
                            gauge-meter-label-item gauge-meter-label-item--sell
                          "
                        >
                          sell
                        </li>
                        <li
                            class="
                            gauge-meter-label-item
                            gauge-meter-label-item--neutral
                            active
                          "
                        >
                          neutral
                        </li>
                        <li
                            class="
                            gauge-meter-label-item gauge-meter-label-item--buy
                          "
                        >
                          buy
                        </li>
                        <li
                            class="
                            gauge-meter-label-item
                            gauge-meter-label-item--strong-buy
                          "
                        >
                          strong
                          <br/>buy
                        </li>
                      </ul>
                      <ul class="gauge-meter-status-list">
                        <li class="gauge-meter-status-item">
                          <span
                              class="
                              gauge-meter-status-value
                              gauge-meter-status-value--sell
                            "
                          >{{ NumSumSELL }}</span
                          >
                          <span class="gauge-meter-status-text">Sell</span>
                        </li>
                        <li class="gauge-meter-status-item">
                          <span
                              class="
                              gauge-meter-status-value
                              gauge-meter-status-value--neutral
                            "
                          >{{ NumSumNeutral }}</span
                          >
                          <span class="gauge-meter-status-text">Neutral</span>
                        </li>
                        <li class="gauge-meter-status-item">
                          <span
                              class="
                              gauge-meter-status-value
                              gauge-meter-status-value--buy
                            "
                          >{{ NumSumBUY }}</span
                          >
                          <span class="gauge-meter-status-text">Buy</span>
                        </li>
                      </ul>
                      <!--  -->
                      <highcharts
                          class="gauge-meter-pane"
                          :options="optionsSu"
                          ref="chartSu"
                      ></highcharts>
                      <!--  -->
                    </div>
                  </div>
                  <div class="gauge-meter-sub gauge-meter--ma">
                    <div class="v-popover gauge-meter-popover">
                      <div class="trigger" style="display: inline-block">
                        <h3 class="gauge-meter-title">
                          Moving Averages
                          <span class="gauge-meter-title-icon"
                          ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                          >
                              <g
                                  id="c-question"
                                  transform="translate(3.068 -8.774)"
                              >
                                <g
                                    id="Ellipse_1825"
                                    data-name="Ellipse 1825"
                                    transform="translate(-2.068 9.774)"
                                    fill="none"
                                    stroke="#fefefe"
                                    stroke-linecap="square"
                                    stroke-miterlimit="10"
                                    stroke-width="1"
                                >
                                  <circle
                                      cx="10"
                                      cy="10"
                                      r="10"
                                      stroke="none"
                                  ></circle>
                                  <circle
                                      cx="10"
                                      cy="10"
                                      r="10.5"
                                      fill="none"
                                  ></circle>
                                </g>
                                <g
                                    id="question"
                                    transform="translate(3.497 13.43)"
                                >
                                  <path
                                      id="Path_30768"
                                      data-name="Path 30768"
                                      d="M8.359,10.774a4.349,4.349,0,0,1,.4-2.323,5.026,5.026,0,0,1,1.4-1.421c1.317-.981,1.876-1.491,1.876-2.54,0-1.166-.924-1.637-2.166-1.637a7.306,7.306,0,0,0-3.334.866L5.694,2.063A9.2,9.2,0,0,1,10.035,1a4.89,4.89,0,0,1,3.1.9A3,3,0,0,1,14.287,4.4,3.24,3.24,0,0,1,13.4,6.7,10.58,10.58,0,0,1,11.872,8,5.71,5.71,0,0,0,10.63,9.137a2.68,2.68,0,0,0-.315,1.637H8.359Z"
                                      transform="translate(-5.694 -1)"
                                      fill="#fefefe"
                                  ></path>
                                  <ellipse
                                      id="Ellipse_1827"
                                      data-name="Ellipse 1827"
                                      cx="1.363"
                                      cy="1.284"
                                      rx="1.363"
                                      ry="1.284"
                                      transform="translate(2.252 11.56)"
                                      fill="#fefefe"
                                  ></ellipse>
                                </g>
                              </g></svg
                          ></span>
                        </h3>
                      </div>
                    </div>
                    <h4 class="gauge-meter-sub-title">{{ textTitleMa }}</h4>
                    <div class="gauge-meter-border">
                      <div class="gauge-meter-background rank-3"></div>
                      <ul class="gauge-meter-label-list">
                        <li
                            class="
                            gauge-meter-label-item
                            gauge-meter-label-item--strong-sell
                          "
                        >
                          strong
                          <br/>sell
                        </li>
                        <li
                            class="
                            gauge-meter-label-item gauge-meter-label-item--sell
                          "
                        >
                          sell
                        </li>
                        <li
                            class="
                            gauge-meter-label-item
                            gauge-meter-label-item--neutral
                            active
                          "
                        >
                          neutral
                        </li>
                        <li
                            class="
                            gauge-meter-label-item gauge-meter-label-item--buy
                          "
                        >
                          buy
                        </li>
                        <li
                            class="
                            gauge-meter-label-item
                            gauge-meter-label-item--strong-buy
                          "
                        >
                          strong
                          <br/>buy
                        </li>
                      </ul>
                      <ul class="gauge-meter-status-list">
                        <li class="gauge-meter-status-item">
                          <span
                              class="
                              gauge-meter-status-value
                              gauge-meter-status-value--sell
                            "
                          >{{ NumMovSELL }}</span
                          >
                          <span class="gauge-meter-status-text">Sell</span>
                        </li>
                        <li class="gauge-meter-status-item">
                          <span
                              class="
                              gauge-meter-status-value
                              gauge-meter-status-value--neutral
                            "
                          >{{ NumMovNeutral }}</span
                          >
                          <span class="gauge-meter-status-text">Neutral</span>
                        </li>
                        <li class="gauge-meter-status-item">
                          <span
                              class="
                              gauge-meter-status-value
                              gauge-meter-status-value--buy
                            "
                          >{{ NumMovBUY }}</span
                          >
                          <span class="gauge-meter-status-text">Buy</span>
                        </li>
                      </ul>
                      <highcharts
                          class="gauge-meter-pane"
                          :options="optionsMa"
                          ref="chartMa"
                      ></highcharts>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
                class="historyBox"
                :class="{ active: !activeGau, hidden: activeHis }"
                style="transform: translateX(0px);"
            >
              <div class="overviewInfo flex items-center">
                <span class="badgeItem">
                  <span class="color-green uppercase font-bold">Mua</span>
                  <span> {{ totalBuyStatic }}</span>
                </span>
                <span class="badgeItem ml-2">
                  <span class="color-red uppercase font-bold">Bán</span>
                  <span> {{ totalSellStatic }}</span>
                </span>
              </div>
              <div class="ct flex justify-center">
                <div class="vx-row history-column">
                  <div class="vx-col w-18 list1">
                    <span
                        class="gridcs-1 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-1 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-1 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-1 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-2 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-2 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-2 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-2 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-3 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-3 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-3 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-3 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-4 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-4 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-4 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-4 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-5 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-5 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-5 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-5 inline-flex m-1 item rounded-full empty"
                    ></span>
                  </div>
                  <div class="vx-col w-18 list2">
                    <span
                        class="gridcs-1 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-1 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-1 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-1 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-2 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-2 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-2 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-2 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-3 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-3 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-3 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-3 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-4 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-4 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-4 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-4 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-5 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-5 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-5 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-5 inline-flex m-1 item rounded-full empty"
                    ></span>
                  </div>
                  <div class="vx-col w-18 list3">
                    <span
                        class="gridcs-1 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-1 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-1 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-1 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-2 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-2 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-2 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-2 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-3 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-3 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-3 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-3 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-4 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-4 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-4 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-4 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-5 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-5 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-5 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-5 inline-flex m-1 item rounded-full empty"
                    ></span>
                  </div>
                  <div class="vx-col w-18 list4">
                    <span
                        class="gridcs-1 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-1 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-1 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-1 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-2 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-2 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-2 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-2 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-3 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-3 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-3 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-3 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-4 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-4 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-4 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-4 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-5 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-5 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-5 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-5 inline-flex m-1 item rounded-full empty"
                    ></span>
                  </div>
                  <div class="vx-col w-18 list5">
                    <span
                        class="gridcs-1 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-1 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-1 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-1 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-2 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-2 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-2 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-2 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-3 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-3 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-3 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-3 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-4 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-4 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-4 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-4 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-5 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-5 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-5 inline-flex m-1 item rounded-full empty"
                    ></span>
                    <span
                        class="gridcs-5 inline-flex m-1 item rounded-full empty"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="vx-col w-full rightBar c-desktop trans" id="right-content">
        <div class="pc block">
          <div class="mb-6">
            <div class="wrapper">
              <div class="session">
                <!--交易号-->
                <div class="title">Giao dịch</div>
                <div class="ss">601967636</div>
              </div>
              <div class="wrapper-time">
                <div class="text">{{ textTimeDown }}</div>
                <div class="time">{{ seconDown }}s</div>
              </div>
            </div>
            <div class="price-center mt-3">Ví tiền: {{ balanceForuser }}</div>
            <div class="amount m-0 mt-3">
              <div>Số tiền</div>
              <div class="relative">
                <v-select v-model="selectedAmount" :options="amounts"></v-select>
              </div>
            </div>
<!--            <div class="vx-row m-0 mt-2 m_hide">
              <div class="item-col md:w-4/12 w-full text-center mt-2">
                <span class="w-full bpF cursor-pointer h-12" @click="clickCT(5)"
                >+5</span
                >
              </div>
              <div class="item-col md:w-4/12 w-full text-center mt-2">
                <span
                    class="w-full bpF cursor-pointer h-12"
                    @click="clickCT(10)"
                >+10</span
                >
              </div>
              <div class="item-col md:w-4/12 w-full text-center mt-2">
                <span
                    class="w-full bpF cursor-pointer h-12"
                    @click="clickCT(20)"
                >+20</span
                >
              </div>
              <div class="item-col md:w-4/12 w-full text-center mt-2">
                <span
                    class="w-full bpF cursor-pointer h-12"
                    @click="clickCT(50)"
                >+50</span
                >
              </div>
              <div class="item-col md:w-4/12 w-full text-center mt-2">
                <span
                    class="w-full bpF cursor-pointer h-12"
                    @click="clickCT(100)"
                >+100</span
                >
              </div>
              <div class="item-col md:w-4/12 w-full text-center mt-2">
                <span class="w-full bpF cursor-pointer h-12" @click="clickCT(0)"
                >All</span
                >
              </div>
            </div>-->
          </div>
          <div class="lg:relative mb-5 no-margin-m">
            <div class="text-center">
              <div class="profitPercent mb-2">Lợi nhuận <span class="text-color-red">95%</span></div>
              <div
                  class="profitValue color-green text-3xl font-bold no-margin-m"
              >
                +{{ loiNhuan }} {{unit}}
              </div>
            </div>
          </div>
          <div class="lg:relative mb-10 text-center no-margin-m">
            <div class="text-center">Chỉ báo tâm lý</div>
            <vs-progress
                class="bg-green"
                :height="7"
                :percent="CSBUY"
                color="danger"
            ></vs-progress>
            <div class="block">
              <span class="color-red float-left"> {{ CSBUY }}% </span>
              <span class="color-green float-right"> {{ CSSELL }}% </span>
            </div>
          </div>

          <div class="lg:relative mb-5 mt-10 no-margin-m">
            <div class="h-6"></div>
            <div
                @click="isBet && BetBuySell('buy')"
                :class="`btn_dat_cuoc tang mb-5 ${!isBet ? 'disabled' : ''}`"
            >
              MUA
              <feather-icon
                  icon="TrendingUpIcon"
                  svgClasses="w-6 h-5"
              ></feather-icon>
            </div>
            <div
                @click="isBet && BetBuySell('sell')"
                :class="`btn_dat_cuoc giam ${!isBet ? 'disabled' : ''}`"
            >
              BÁN
              <feather-icon
                  icon="TrendingDownIcon"
                  svgClasses="w-6 h-5"
              ></feather-icon>
            </div>
          </div>
        </div>
        <div class="mobile hidden">
          <div class="sidebarPC relative">
            <vs-progress
                class="bg-red"
                :height="4"
                :percent="CSBUY"
                color="success"
            ></vs-progress>
            <div class="block">
              <span class="color-green float-left"> {{ CSBUY }}% </span>
              <span class="color-red float-right"> {{ CSSELL }}% </span>
            </div>
          </div>
          <div class="relative">
            <div class="mt-1 text-center c-loinhuan">
              Lợi nhuận
              <span class="profitPercent text-color-red mb-2">95%</span>
              <span class="profitValue color-green text-2xl font-bold"
              >+{{ loiNhuan }}{{unit}}</span
              >
            </div>
          </div>
<!--          <div class="relative">
            <div class="flex">
              <div class="flex w-full mr-2">
                <div @click="truBetAmount" class="operator_mobile w-full">
                  <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="css-i6dzq1"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </div>
              <div class="flex relative" style="width: 55rem">
                <vs-input
                    readonly="readonly"
                    @click.stop="showMobileMenu = !showMobileMenu"
                    class="w-full betInput"
                    icon-pack="feather"
                    icon="icon-dollar-sign"
                    placeholder="10"
                    v-model="betAmount"
                    icon-no-border
                />
              </div>
              <div class="flex w-full ml-2">
                <div @click="congBetAmount" class="operator_mobile w-full">
                  <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="css-i6dzq1"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>-->
          <div class="wrapper-cuoc-mobile">
<!--            <div class="relative">-->
              <v-select append-to-body :calculate-position="withPopper" v-model="selectedAmount" :options="amounts"></v-select>
<!--            </div>-->
            <div class="session-mobile">
              <div>Phiên</div>
              <div>601967751</div>
            </div>
          </div>
          <div class="relative mb-5 mt-3">
            <div style="display: flex; justify-content: space-between">
              <div
                  @click="BetBuySell('sell')"
                  :class="`btn_dat_cuoc_m giam ${!isBet ? 'disabled' : ''}`"
              >
                BÁN
              </div>
              <div class="font-bold btn_dat_cuoc_m time">
                <div>{{ textTimeDown }}</div>
                <div class="display-remain-time timer_counter second">
                  {{ seconDown }}s
                </div>
              </div>
              <div
                  @click="BetBuySell('buy')"
                  :class="`btn_dat_cuoc_m tang ${!isBet ? 'disabled' : ''}`"
              >
                MUA
              </div>
            </div>
          </div>
          <div class="keyboard-input-wrap" :class="{ active: showMobileMenu }">
            <div
                class="numKeyboardInput"
                @click="showMobileMenu = !showMobileMenu"
            ></div>
            <div class="keyboard" :class="{ hiddenKey: !showMobileMenu }">
              <div id="amountWrapper" class="amountWrapper">
                <div class="headerAmount">
                  <span>Khối lượng giao dịch</span>
                </div>
                <div class="groupButtonMobile flex">
                  <div class="flex w-full mr-2">
                    <vs-button
                        @click="truBetAmount"
                        class="w-full"
                        type="border"
                        icon-pack="feather"
                        icon="icon-minus"
                    ></vs-button>
                  </div>
                  <div class="flex relative" style="width: 55rem">
                    <vs-input
                        readonly="readonly"
                        @keyup="nhapBetAmount"
                        class="w-full betInput"
                        icon-pack="feather"
                        icon="icon-dollar-sign"
                        placeholder="10"
                        v-model="betAmount"
                        icon-no-border
                    />
                    <feather-icon
                        @click="clearBAmount()"
                        style="
                        right: 5px;
                        top: 7px;
                        position: absolute !important;
                      "
                        class="cursor-pointer"
                        icon="XCircleIcon"
                        svgClasses="w-6 h-6 text-grey"
                    ></feather-icon>
                  </div>
                  <div class="flex w-full ml-2">
                    <vs-button
                        @click="congBetAmount"
                        class="w-full"
                        type="border"
                        icon-pack="feather"
                        icon="icon-plus"
                    ></vs-button>
                  </div>
                </div>
                <div class="relative">
                  <div class="mt-2 mb-2 text-center">
                    Lợi nhuận
                    <span class="profitPercent text-color-red mb-2">95%</span>
                    <span class="profitValue color-green text-3xl font-bold"
                    >+${{ loiNhuan }}</span
                    >
                  </div>
                </div>
              </div>
              <table id="keyboardLandscape" style="height: calc(100% - 160px)">
                <tbody>
                <tr class="suggestion">
                  <td @click="clickCT(5)">+5</td>
                  <td @click="clickCT(10)">+10</td>
                  <td @click="clickCT(50)">+50</td>
                  <td @click="clickCT(100)">+100</td>
                </tr>
                <tr>
                  <td @click="writeBetAmountKey(1)">1</td>
                  <td @click="writeBetAmountKey(2)">2</td>
                  <td @click="writeBetAmountKey(3)">3</td>
                  <td rowspan="2" @click="clickCT(0)"><span>Tất cả</span></td>
                </tr>
                <tr>
                  <td @click="writeBetAmountKey(4)">4</td>
                  <td @click="writeBetAmountKey(5)">5</td>
                  <td @click="writeBetAmountKey(6)">6</td>
                </tr>
                <tr>
                  <td @click="writeBetAmountKey(7)">7</td>
                  <td @click="writeBetAmountKey(8)">8</td>
                  <td @click="writeBetAmountKey(9)">9</td>
                  <td rowspan="2" @click="showMobileMenu = !showMobileMenu">
                    Hoàn tất
                  </td>
                </tr>
                <tr>
                  <td @click="writeBetAmountKey('.')">.</td>
                  <td @click="writeBetAmountKey(0)">0</td>
                  <td @click="deleteString">
                    <feather-icon
                        class="cursor-pointer"
                        icon="DeleteIcon"
                        svgClasses="w-6 h-6 text-grey"
                    ></feather-icon>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div
          :class="['c-body trans his-bet-wrapper']"
          :style="`${isOpenSideBar && !isTablet ? 'width: 230px' : ''}`"
      ></div>
    </div>

    <div class="popupCongratulation" :class="{ block: isWinPop }">
      <div class="mask"></div>
      <div class="popupCongratulationContent">
        <div class="winLive flex justify-center">
          <div class="wrapNotify congratulation h-100">
            <div class="boxNotify">
              <img
                  :src="require('@/assets/images/logo/logo.png')"
                  alt=""
                  class="iconWin"
              />
              <div class="badgeDemo" v-if="!blObj.isAccount">DEMO</div>
              <div class="boxContent flex justify-center items-center flex-col">
                <div class="flex items-center">
                  <!---->
                </div>
                <p class="titleWin">Xin chúc mừng!</p>
                <span class="message_money text-4xl font-bold"
                >+{{ moneyWin }}$</span
                >
              </div>
              <span class="cursor-pointer pointer"
              ><i class="iconClose" data-feather="x"></i
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Chart} from "highcharts-vue";
import Highcharts, {color} from "highcharts";
import More from "highcharts/highcharts-more";
import stockInit from "highcharts/modules/stock";
import loadIndicatorsAll from "highcharts/indicators/indicators";
import {isMobile, isTablet} from "mobile-device-detect";
import getData from "@/pages/trade/navbar/components/data.json";
import config from "@/config";
import Vue from "vue";
import AuthenticationService from "@/services/AuthenticationService";
import VScrollLock from "v-scroll-lock";
import vSelect from "vue-select";
import ReconnectingWebSocket from 'reconnecting-websocket';
import { createPopper } from '@popperjs/core'

Vue.use(VScrollLock);

More(Highcharts);
stockInit(Highcharts);
loadIndicatorsAll(Highcharts);

let timer = null;

function convertTextValueMeter(t) {
  return t >= -90 && t <= -54
      ? {cl: "rank-1", text: "Strong sell", index: 1}
      : t > -54 && t <= -18
          ? {cl: "rank-2", text: "Sell", index: 2}
          : t > -18 && t <= 17
              ? {cl: "rank-3", text: "Neutral", index: 3}
              : t > 17 && t <= 53
                  ? {cl: "rank-4", text: "Buy", index: 4}
                  : t > 53
                      ? {cl: "rank-5", text: "Strong Buy", index: 5}
                      : void 0;
}

var UP_COLOR = "#2BB196",
    DOWN_COLOR = "#FC5454",
    deviceVersion = "pc";

var progressBar = $(".e-c-progress");
var lengthp = Math.PI * 2 * 100;
progressBar.css("stroke-dasharray", lengthp);

//circle ends
//let wholeTime = 30; // manage this to set the whole time

if (isMobile) {
  deviceVersion = "mobile";
} else if (isTablet) {
  deviceVersion = "tablet";
}

var listData = [],
    ohlcStock = [],
    volumeStock = [];

var chartGet = "";

const stockChart = {
  chart: {
    panning: false,
    followTouchMove: false,
    width: "100%",
    height: "pc" !== deviceVersion ? "100%" : (9 / 16) * 100 + "%", // 16:9 ratio
    zoomType: "",
    backgroundColor: "transparent",
    plotBackgroundImage: require('@/assets/images/sky/world_map.svg'),
    marginLeft: 0,
    marginRight: "pc" !== deviceVersion ? 60 : 80,
    marginBottom: "pc" !== deviceVersion ? 20 : 30,

    // margin: 0,
    // defaultSeriesType: 'areaspline',

    events: {
      // load(event) {
      // event.target.reflow();
      // }
    },
  },
  rangeSelector: {
    enabled: false,
    selected: 4,
  },
  credits: {
    enabled: false,
  },
  scrollbar: {
    enabled: false,
  },
  navigator: {
    enabled: false,
  },

  stockTools: {
    gui: {
      enabled: false,
    },
  },
  exporting: {
    enabled: false,
  },
  plotOptions: {
    candlestick: {
      lineColor: DOWN_COLOR,
      upLineColor: UP_COLOR,
      pointWidth: "pc" !== deviceVersion ? 7 : 8,
      maxPointWidth: "pc" !== deviceVersion ? 7 : 8,
    },
    column: {
      minPointLength: 2,
      pointWidth: "pc" !== deviceVersion ? 7 : 8,
      maxPointWidth: "pc" !== deviceVersion ? 7 : 8,
      borderWidth: 0,
      pointPadding: 0,
      groupPadding: 0,
    },
    series: {
      zIndex: 2,

      states: {
        inactive: {
          opacity: 1,
        },
      },
      allowPointSelect: false,
      point: {
        events: {
          click() {
          },
        },
      },
    },
  },
  tooltip: {
    split: false,
    enabled: true,
    label: false,
    animation: false,
    backgroundColor: "rgba(8,26,52,0.5)",
    borderColor: "transparent",
    borderWidth: 0,
    shadow: false,
    stroke: "transparent",
    useHTML: true,
    style: {
      color: "#fff",
      fontSize: "10px",
      stroke: "transparent",
    },
    formatter() {
      return "BTC/USDT" === this.series.name
          ? '\n<span style="margin-right: 10px;"><b>O</b>: ' +
          this.point.open +
          '</span>\n<span style="margin-right: 10px;"><b>C</b>: ' +
          this.point.close +
          '</span>\n<span>&nbsp;</span>\n<br/>\n<span style="margin-right: 10px;"><b>H</b>: ' +
          this.point.high +
          '</span>\n<span style="margin-right: 10px;"><b>L</b>: ' +
          this.point.low +
          "</span>\n<span><b>Vol</b>: " +
          this.point.vol +
          "</span>"
          : "Volume" === this.series.name
              ? "<b>Vol</b>: " + this.y
              : "";
    },
    positioner() {
      var t = 20,
          e = "pc" !== deviceVersion ? 50 : 60;
      return {
        x: t,
        y: e,
      };
    },
  },
  xAxis: {
    //minRange:30 * 24,
    type: "datetime",
    labels: {
      enabled: true,
      formatter() {
        return Highcharts.dateFormat("%M:%S", this.value);
      },
      style: {
        fontSize: 10,
        color: "#707070",
      },
    },
    plotLines: [
      {
        value: 0,
        color: "#ffffff",
        width: 0.75,
        id: "current-pricex",
        zIndex: 1e3,
        dashStyle: "LongDash",
      },
    ],
    lineWidth: 0,
    minorGridLineWidth: 0,
    lineColor: "transparent",
    minorTickLength: 0,
    tickLength: 0,
  },
  yAxis: [
    {
      gridLineColor: "#243140",
      gridLineDashStyle: "Dash",
      tickLength: 5,
      labels: {
        align: "right",
        x: "pc" !== deviceVersion ? 45 : 50,
        style: {
          color: "#fff",
          fontSize: "11px",
        },
      },
      height: "90%",
      top: 0,
      plotLines: [
        {
          value: 0,
          color: "#ffffff",
          width: 0.75,
          id: "current-price",
          zIndex: 100,
          label: {
            useHTML: true,
            text: 0,
            x: "pc" !== deviceVersion ? 60 : 70,
            align: "right",
            style: {
              color: "#fff",
              fontSize: "11px",
              background: "transparent",
              borderRadius: "4px",
            },
          },
        },
      ],
      lineWidth: 0,
      resize: {
        enabled: true,
      },
    },
    {
      gridLineColor: "",
      visible: false,
      title: {
        align: "high",
        text: null,
        rotation: 0,
        y: 0,
        useHTML: true,
      },
      top: "pc" == deviceVersion ? "83.4%" : "85%",
      height: "15%",
      lineWidth: 0,
      offset: 0,
    },
  ],
  series: [
    {
      id: "aapl",
      type: "candlestick",
      name: "BTC/USDT",
      color: DOWN_COLOR,
      upColor: UP_COLOR,
      data: ohlcStock,
    },
    {
      type: "column",
      name: "Volume",
      data: volumeStock,
      yAxis: 1,
    },
    {
      name: "sma1",
      id: "sma1",
      type: "sma",
      linkedTo: "aapl",
      color: "#2177FF",
      lineWidth: 2,
      marker: false,
      zIndex: 3,
      visible: true,
      enableMouseTracking: false,
      params: {
        index: "0",
        period: 10,
      },
      allowPointSelect: false,
      point: {
        events: {
          // click: function(t) {
          //     setTimeout(function() {}, 500)
          // }
        },
        tooltip: {
          enabled: false,
        },
      },
    },
    {
      name: "sma2",
      id: "sma2",
      type: "sma",
      linkedTo: "aapl",
      color: "#E22A67",
      lineWidth: 2,
      marker: false,
      zIndex: 3,
      visible: true,
      enableMouseTracking: false,
      params: {
        index: "1",
        period: 5,
      },
      allowPointSelect: false,
      point: {
        events: {
          // click: function(t) {
          //     setTimeout(function() {}, 500)
          // }
        },
        tooltip: {
          enabled: false,
        },
      },
    },
  ],
};

const gaugeMeterOs = {
  chart: {
    type: "gauge",
    plotBorderWidth: null,
    backgroundColor: "rgba(0,0,0,0)",
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    height: 70,
    spacingBottom: 0,
    spacingTop: 0,
    spacingLeft: 0,
    spacingRight: 0,
    events: {
      render(t) {
        let td = t.target.series[0].points[0].y;
        let n = convertTextValueMeter(td);
        $(".gauge-meter--os .gauge-meter-background")
            .removeClass("rank-1 rank-2 rank-3 rank-4 rank-5")
            .addClass(n.cl);
        $(".gauge-meter--os .gauge-meter-label-item").removeClass("active");
        $(
            ".gauge-meter--os .gauge-meter-label-item:nth-child(" + n.index + ")"
        ).addClass("active");
      },
    },
    animation: {
      duration: 1500,
      easing: "easeOutBounce",
    },
  },

  title: {
    text: "",
  },

  pane: [
    {
      startAngle: -90,
      endAngle: 90,
      background: null,
      center: ["50%", "105%"],
      size: 140,
    },
  ],

  credits: {
    enabled: false,
  },

  exporting: {
    enabled: false,
  },

  tooltip: {
    enabled: false,
  },

  yAxis: [
    {
      min: -90,
      max: 90,
      minorTickPosition: "outside",
      tickPosition: "outside",
      labels: {
        rotation: "auto",
        distance: 0,
        style: {
          color: "rgba(0,0,0,0)",
        },
      },
      pane: 0,
      title: "",
      minorTickColor: "rgba(0,0,0,0)",
      lineColor: "rgba(0,0,0,0)",
      tickColor: "rgba(0,0,0,0)",
    },
  ],

  plotOptions: {
    gauge: {
      dataLabels: {
        enabled: false,
      },
      dial: {
        radius: "85%",
        baseLength: "1%",
        rearLength: 0,
        backgroundColor: {
          linearGradient: {
            x1: 1,
            y1: 0,
            x2: 0,
            y2: 0,
          },
          stops: [
            [0, "#fff"],
            [1, "#000"],
          ],
        },
        baseWidth: 6,
        topWidth: 3,
      },
    },
  },

  series: [
    {
      name: "Oscillator",
      data: [10],
      yAxis: 0,
    },
  ],
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 71,
        },
        chartOptions: {
          chart: {
            height: 35,
          },
          pane: [
            {
              size: 70,
            },
          ],
        },
      },
    ],
  },
};

const gaugeMeterSu = {
  chart: {
    type: "gauge",
    plotBorderWidth: null,
    backgroundColor: "rgba(0,0,0,0)",
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    height: 88,
    spacingBottom: 0,
    spacingTop: 0,
    spacingLeft: 0,
    spacingRight: 0,
    events: {
      render(t) {
        let td = t.target.series[0].points[0].y;
        let n = convertTextValueMeter(td);
        $(".gauge-meter--su .gauge-meter-background")
            .removeClass("rank-1 rank-2 rank-3 rank-4 rank-5")
            .addClass(n.cl);
        $(".gauge-meter--su .gauge-meter-label-item").removeClass("active");
        $(
            ".gauge-meter--su .gauge-meter-label-item:nth-child(" + n.index + ")"
        ).addClass("active");
      },
    },
    animation: {
      duration: 1500,
      easing: "easeOutBounce",
    },
  },

  title: {
    text: "",
  },

  pane: [
    {
      startAngle: -90,
      endAngle: 90,
      background: null,
      center: ["50%", "105%"],
      size: 176,
    },
  ],

  credits: {
    enabled: false,
  },

  exporting: {
    enabled: false,
  },

  tooltip: {
    enabled: false,
  },

  yAxis: [
    {
      min: -90,
      max: 90,
      minorTickPosition: "outside",
      tickPosition: "outside",
      labels: {
        rotation: "auto",
        distance: 0,
        style: {
          color: "rgba(0,0,0,0)",
        },
      },
      pane: 0,
      title: "",
      minorTickColor: "rgba(0,0,0,0)",
      lineColor: "rgba(0,0,0,0)",
      tickColor: "rgba(0,0,0,0)",
    },
  ],

  plotOptions: {
    gauge: {
      dataLabels: {
        enabled: false,
      },
      dial: {
        radius: "85%",
        baseLength: "1%",
        rearLength: 0,
        backgroundColor: {
          linearGradient: {
            x1: 1,
            y1: 0,
            x2: 0,
            y2: 0,
          },
          stops: [
            [0, "#fff"],
            [1, "#000"],
          ],
        },
        baseWidth: 6,
        topWidth: 3,
      },
    },
  },

  series: [
    {
      name: "Summary",
      data: [10],
      yAxis: 0,
    },
  ],
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 89,
        },
        chartOptions: {
          chart: {
            height: 44,
          },
          pane: [
            {
              size: 88,
            },
          ],
        },
      },
    ],
  },
};

const gaugeMeterMa = {
  chart: {
    type: "gauge",
    plotBorderWidth: null,
    backgroundColor: "rgba(0,0,0,0)",
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    height: 70,
    spacingBottom: 0,
    spacingTop: 0,
    spacingLeft: 0,
    spacingRight: 0,
    events: {
      render(t) {
        let td = t.target.series[0].points[0].y;
        let n = convertTextValueMeter(td);
        $(".gauge-meter--ma .gauge-meter-background")
            .removeClass("rank-1 rank-2 rank-3 rank-4 rank-5")
            .addClass(n.cl);
        $(".gauge-meter--ma .gauge-meter-label-item").removeClass("active");
        $(
            ".gauge-meter--ma .gauge-meter-label-item:nth-child(" + n.index + ")"
        ).addClass("active");
      },
    },
    animation: {
      duration: 1500,
      easing: "easeOutBounce",
    },
  },

  title: {
    text: "",
  },

  pane: [
    {
      startAngle: -90,
      endAngle: 90,
      background: null,
      center: ["50%", "105%"],
      size: 140,
    },
  ],

  credits: {
    enabled: false,
  },

  exporting: {
    enabled: false,
  },

  tooltip: {
    enabled: false,
  },

  yAxis: [
    {
      min: -90,
      max: 90,
      minorTickPosition: "outside",
      tickPosition: "outside",
      labels: {
        rotation: "auto",
        distance: 0,
        style: {
          color: "rgba(0,0,0,0)",
        },
      },
      pane: 0,
      title: "",
      minorTickColor: "rgba(0,0,0,0)",
      lineColor: "rgba(0,0,0,0)",
      tickColor: "rgba(0,0,0,0)",
    },
  ],

  plotOptions: {
    gauge: {
      dataLabels: {
        enabled: false,
      },
      dial: {
        radius: "85%",
        baseLength: "1%",
        rearLength: 0,
        backgroundColor: {
          linearGradient: {
            x1: 1,
            y1: 0,
            x2: 0,
            y2: 0,
          },
          stops: [
            [0, "#fff"],
            [1, "#000"],
          ],
        },
        baseWidth: 6,
        topWidth: 3,
      },
    },
  },

  series: [
    {
      name: "ma",
      data: [10],
      yAxis: 0,
    },
  ],
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 71,
        },
        chartOptions: {
          chart: {
            height: 35,
          },
          pane: [
            {
              size: 70,
            },
          ],
        },
      },
    ],
  },
};

export default {
  components: {
    highcharts: Chart,
    vSelect
  },
  data() {
    return {
      streak: 0,
      thisIDPlayer: 0,
      totalBuyStatic: 0,
      totalSellStatic: 0,

      //Moving
      NumMovBUY: 0,
      NumMovSELL: 0,
      NumMovNeutral: 0,
      textTitleMa: "NEUTRAL",

      //Oscillators
      NumOscBUY: 0,
      NumOscSELL: 0,
      NumOscNeutral: 0,
      textTitleOs: "NEUTRAL",

      //Summary
      NumSumBUY: 0,
      NumSumSELL: 0,
      NumSumNeutral: 0,
      textTitleSu: "NEUTRAL",

      moneyWin: 0,
      isWinPop: false,
      blObj: getData,
      isBet: true,
      CSBUY: 0,
      CSSELL: 0,
      isOrder: true,
      activeGau: false,
      activeHis: true,
      balanceForuser: 0,
      showMobileMenu: false,
      betAmount: 10,
      loiNhuan: 19.5,
      optionsOs: gaugeMeterOs,
      optionsSu: gaugeMeterSu,
      optionsMa: gaugeMeterMa,
      // chartOptions: {
      //     series: [{
      //         data: [1,2,3] // sample data
      //         }]
      // }
      chartOptionsStock: stockChart,
      betOpen: {
        s: 0,
        l: {
          bet: [
            {
              items: [],
            },
          ],
        },
      },
      isTablet,
      session: 0,
      amounts: [
        {
          label: "20K",
          code: 20000,
        },
        {
          label: "50K",
          code: 50000,
        },
        {
          label: "100K",
          code: 100000,
        },
        {
          label: "200K",
          code: 200000,
        },
        {
          label: "500K",
          code: 500000,
        },
        {
          label: "1M",
          code: 1000000,
        },
        {
          label: "2M",
          code: 2000000,
        },
        {
          label: "3M",
          code: 3000000,
        },
        {
          label: "5M",
          code: 5000000,
        },
        {
          label: "10M",
          code: 10000000,
        },
        {
          label: "20M",
          code: 20000000,
        },
        {
          label: "30M",
          code: 30000000,
        },
        {
          label: "50M",
          code: 50000000,
        },
        {
          label: "100M",
          code: 100000000,
        },
      ],
      selectedAmount: {
        label: "20k",
        code: 20000,
      },
      unit: 'K',
      multiple: 1000,
      placement: 'top'
    };
  },
  computed: {
    seconDown() {
      return getData.countDown;
    },
    textTimeDown() {
      return getData.textTimeDown;
    },
    isOpenSideBar() {
      const isOpenSideBarStore = this.$store.state.isOpenSideBar;
      return isOpenSideBarStore;
    },
  },
  watch: {
    selectedAmount:{
      handler: function(val){
        const {code} = val
        if (code >= 1000000){
          this.unit = 'M'
          this.multiple = 1000000
        }
        this.betAmount = code
        this.tinhloinhuan(code / this.multiple)
      },
      immediate: true
    },
    session(ss) {
      let streak = JSON.parse(localStorage.getItem('streak') || '{}');
      if (streak.session != ss - 1) {
        localStorage.removeItem('streak');
        this.streak = 0;
      }

    },
    showMobileMenu: function (newVal) {
      if (!newVal) {
        window.scrollTo(0, 0);
      }
    },
    "oscillators.meter.numberValue": function () {
      this.redrawGaugeMeter("oscillators"), this.redrawGaugeMeter("summary");
    },
    "movingAverages.meter.numberValue": function () {
      this.redrawGaugeMeter("movingAverages"), this.redrawGaugeMeter("summary");
    },
    isOpenSideBar: function (isOpenSideBarStore) {
      const tradeView = document.querySelector(".highcharts-container");
      const cDesktop = document.querySelector(".c-desktop");
      const historyBox = document.querySelector(".historyBox");
      const gaugeMeter = document.querySelector(".wrap-gauge-meter");
      const analysis = document.querySelector("#analysis-wrapper");

      if (isTablet || isMobile) return isOpenSideBarStore;
      if (isOpenSideBarStore) {
        if (tradeView) {
          // tradeView.style.transform = `translateX(-230px)`;
        }
        if (cDesktop) {
          // cDesktop.style.transform = `translateX(-230px)`;
        }
        if (historyBox) {
          // historyBox.style.transform = `translateX(-230px)`;
      /*    historyBox.style.width = "calc(100% - 230px)";
          historyBox.style.setProperty('--width', (analysis.clientWidth - 230) / analysis.clientWidth);*/
        }
        if (gaugeMeter) {
          // gaugeMeter.style.transform = `translateX(-128px)`;
        }
      } else {
        if (tradeView) {
          tradeView.style.transform = `translateX(0px)`;
        }
        if (cDesktop) {
          cDesktop.style.transform = `translateX(0px)`;
        }
        if (historyBox) {
          // historyBox.style.transform = `translateX(0px)`;
          historyBox.style.width = "100%"
          historyBox.style.setProperty('--width', 1);
        }
        if (gaugeMeter) {
          gaugeMeter.style.transform = `translateX(0px)`;
        }
      }
    },
  },
  beforeDestroy() {
    this.$store.commit("TOGGLE_IS_OPEN_SIDEBAR", false);
    const tradeView = document.querySelector(".highcharts-container");
    if (tradeView) {
      tradeView.style.transform = `translateX(0px)`;
    }
  },
  methods: {
    withPopper(dropdownList, component, { width }) {
      dropdownList.style.width = width
      const popper = createPopper(component.$refs.toggle, dropdownList, {
        placement: this.placement,
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, -1],
            },
          },
          {
            name: 'toggleClass',
            enabled: true,
            phase: 'write',
            fn({ state }) {
              component.$el.classList.toggle(
                  'drop-up',
                  true
              )
            },
          },
        ],
      })
      return () => popper.destroy()
    },
    setStreak(result) {
      if ((result.kq == "lose" && result.money < 10) || result.kq == "win" && result.money < 19.5) {
        localStorage.setItem('streak', JSON.stringify(streak));
        return;
      }
      let streak = JSON.parse(localStorage.getItem('streak') || '{}');
      if (streak.last == result.kq) {
        if (this.streak < 9) {
          this.streak += 1;
        }
      } else {
        this.streak = 1;
      }
      streak.count = this.streak;
      streak.last = result.kq;
      streak.session = this.session;
      localStorage.setItem('streak', JSON.stringify(streak));
    },

    disabledBet() {
      return (this.isBet = !this.isBet ? true : false);
    },
    // redrawGaugeMeter: function(t) {
    //     var e = void 0;
    //     (e = "oscillators" === t ? this.gaugeMeterOs : "movingAverages" === t ? this.gaugeMeterMa : this.gaugeMeterSu) && e.series && (e.series[0].points[0].update(this[t].meter.numberValue, !1), e.redraw())
    // },
    sendMessage(message) {
      this.connection.send(JSON.stringify(message));
    },

    // convertTextState(t) {
    //     switch (t) {
    //         case "buy":
    //             return h;
    //         case "sell":
    //             return u;
    //         case "neutral":
    //             return p
    //     }
    // },

    replaceAll(str, find, replace) {
      return Number(str.replace(new RegExp(find, "g"), replace));
    },

    changeBlance(v) {
      if (getData.isAccount) {
        getData.blLive = getData.blLive - v;
      } else {
        getData.blDemo = getData.blDemo - v;
      }

      this.balanceForuser = getData.blDemo;
    },

    checkBet(v) {
      // lấy tổng số dư của tài khoản
      let sodu = getData.isAccount ? getData.blLive : getData.blDemo;

      this.balanceForuser = sodu;

      if (sodu < v) return true;
    },

    BetBuySell(v) {
      this.playAudio("order");

      if (getData.countDown <= 1) {
        return this.$vs.notify({
          text: "Vui lòng đợi phiên sau!",
          color: "order_fail",
          position: "top-right",
          iconPack: "feather",
          icon: "icon-x",
        });
      }
      //this.isBet = false

      let gAmount = this.betAmount.toString();
      gAmount = this.replaceAll(gAmount, ",", "");

      if (this.checkBet(gAmount)) {
        return this.$vs.notify({
          text: "Số dư của bạn không đủ",
          color: "order_fail",
          position: "top-right",
          iconPack: "feather",
          icon: "icon-x",
        });
      }

      let email = getData.email;
      let typeAccount = getData.isAccount;
      let uidLive = getData.uidLive;
      let uidDemo = getData.uidDemo;
      let uidAcc = 0;

      this.changeBlance(gAmount);

      if (typeAccount == 1) {
        uidAcc = uidLive;
      } else {
        uidAcc = uidDemo;
      }

      let obj = {
        email: email,
        uid: uidAcc,
        ref: getData.ref,
        UpId: getData.upid,
        typeAccount: typeAccount, // 0: demo: 0 , 1: live
        betAmount: gAmount,
        type: v,
        mkt: getData.mkt,
        forceWin: this.$store.state.forceWin,
        //idPlayer: this.thisIDPlayer
      };

      this.sendMessage({type: "bet", data: obj});

      let ss = this.$store.session;
      let timeGet = new Date().getTime();

      this.betOpen.s = ss;
      let itp = {
        ss: ss,
        time: timeGet,
        amt: gAmount,
        type: v,
        acc_type: typeAccount,
        currencyType: "BTC/USD",
        classIcon: "iconBitcoin",
      };

      this.betOpen.l.bet[0].items.push(itp);

      localStorage.setItem("stateOpen", JSON.stringify(this.betOpen));

      window.dispatchEvent(
          new CustomEvent("stateOpen-localstorage-changed", {
            detail: {
              storage: localStorage.getItem("stateOpen"),
            },
          })
      );

      getData.Notify = this.betOpen.l.bet[0].items.length;

      this.clearBAmount();

      // if(v === 'buy'){

      // }else{

      //     return this.$vs.notify({
      //         text:'Đặt lệnh thành công',
      //         color:'success',
      //         position:'top-right',
      //         iconPack: 'feather',
      //         icon:'icon-check'});
      // }
    },
    // 输入框弹出键盘点击事件
    deleteString() {
      let getAmount = this.betAmount.toString();
      let total = getAmount.slice(0, -1);
      let sl = total.split(".");
      let check = sl.length - 1;
      if (check == 1) {
        let g = this.replaceAll(total, ",", "");
        //console.log(g)
        this.betAmount = this.formatPrice(g, sl[1].length);
        this.tinhloinhuan(g);
        return;
      }
      let g = this.getOnlyNumberInString(total, ",", "");
      this.betAmount = this.formatPrice(g, 0);
      this.tinhloinhuan(g);
    },
    // 输入框弹出键盘点击事件
    writeBetAmountKey(v) {
      let getAmount = this.betAmount.toString() + v;
      let sl = getAmount.split(".");
      let check = sl.length - 1;
      if (v == ".") {
        this.betAmount = getAmount;
        return;
      }
      if (check > 1) return;
      if (check == 1) {
        let g = this.replaceAll(getAmount, ",", "");
        this.betAmount = this.formatPrice(g, sl[1].length);
        this.tinhloinhuan(g);
        return;
      }
      let a = this.getOnlyNumberInString(getAmount);
      this.betAmount = this.formatPrice(a, 0);
      this.tinhloinhuan(a);
    },
    // 输入框左边按钮
    congBetAmount() {
      let getAmount = this.betAmount.toString();
      let sl = getAmount.split(".");
      let check = sl.length - 1;
      if (check > 1) return;
      let tt = 0;
      if (check == 1) {
        tt = this.replaceAll(getAmount, ",", "");
        let kq = tt * 2;
        this.betAmount = this.formatPrice(kq, sl[1].length);
        this.tinhloinhuan(kq);
        return;
      }
      let a = this.getOnlyNumberInString(getAmount);
      tt = a * 2;
      this.tinhloinhuan(tt);
      this.betAmount = this.formatPrice(tt, 0);
    },
    // 输入框右边边按钮
    truBetAmount() {
      let getAmount = this.betAmount.toString();
      let sl = getAmount.split(".");
      let check = sl.length - 1;
      if (check > 1) return;
      let tt = 0;
      if (check == 1) {
        tt = this.replaceAll(getAmount, ",", "");
        let kq = tt / 2;
        this.betAmount = this.formatPrice(kq, sl[1].length);
        this.tinhloinhuan(kq);
        return;
      }
      let a = this.getOnlyNumberInString(getAmount);
      tt = a / 2;
      this.tinhloinhuan(tt);
      this.betAmount = this.formatPrice(tt, 0);
    },
    // 输入框输入事件
    nhapBetAmount(e) {
      let g = e.target.value;
      let check = g.split(".").length - 1;
      if (check > 1) return;

      if (check == 1) {
        g = this.replaceAll(g, ",", "");
        this.tinhloinhuan(g);
        return;
      }
      g = this.getOnlyNumberInString(g);
      this.betAmount = this.formatPrice(g, 0);
      this.tinhloinhuan(g);
    },

    formatPrice(value, minimum) {
      var formatter = new Intl.NumberFormat("en-US", {
        //style: 'currency',
        //currency: '',
        minimumFractionDigits: minimum,
      });
      return formatter.format(value);
    },

    tinhloinhuan(m) {
      let lb = Number(m);
      lb = lb + (lb * 95) / 100;
      // tính lợi nhuận 95%
      this.loiNhuan = this.formatPrice(lb, 0);
    },

    getOnlyNumberInString(t) {
      let e = t.match(/\d+/g);

      return e ? Number(e.join("")) : 0;
    },

    clearBAmount() {
      this.tinhloinhuan(10);
      this.betAmount = 10;
    },

    clickCT(amount) {
      let getAmount = this.betAmount.toString();
      getAmount = this.betAmount.toString();

      if (amount == 0) {
        getAmount = getData.isAccount
            ? getData.blLive.toString()
            : getData.blDemo.toString();
      }

      let check = getAmount.split(".").length - 1;
      if (check > 1) return;

      if (check == 1) {
        getAmount = this.replaceAll(getAmount, ",", "");
        let tt = getAmount + amount;
        this.tinhloinhuan(tt);
        this.betAmount = tt;
        return;
      }
      let aB = this.getOnlyNumberInString(getAmount);
      let tt = aB + amount;
      this.betAmount = tt;
      this.tinhloinhuan(tt);
    },

    editUser() {
      //this.sidebarData = data
      this.toggleDataSidebar(true);
    },

    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
    },

    updateBarChart(boPrice) {
      var chartInstance = chartGet;
      try {
        var lastCandle =
            chartInstance.series[1].points[
            chartInstance.series[1].points.length - 1
                ];
        var color = this.getColor(boPrice.open, boPrice.close);
        if (lastCandle.x === boPrice.date) {
          lastCandle.update(
              {
                x: boPrice.date,
                y: boPrice.volume,
                color: color,
              },
              true
          );
        } else {
          chartInstance.series[1].addPoint(
              {
                x: boPrice.date,
                y: boPrice.volume,
                color: color,
              },
              true,
              true
          );
        }
      } catch (err) {
        console.log(err);
      } finally {
        //
      }
    },

    updateCandleStickChart(boPrice) {
      var chartInstance = chartGet;

      try {
        var lastCandle =
            chartInstance.series[0].points[
            chartInstance.series[0].points.length - 1
                ];
        var color = this.getColor(boPrice.open, boPrice.close);

        var counter = Number(boPrice.candleClose);

        var o = {
          x: boPrice.date,
          open: boPrice.open.toFixed(2) * 1,
          high: boPrice.high.toFixed(2) * 1,
          low: boPrice.low.toFixed(2) * 1,
          close: boPrice.close.toFixed(2) * 1,
          vol: boPrice.volume.toFixed(2) * 1,
          color: color,
        };
        if (lastCandle.x === boPrice.date) {
          lastCandle.update(o, true);
        } else {
          chartInstance.series[0].addPoint(o, true, true);

          // if(listData.length >= 200){
          //     listData.shift();
          // }
          //console.log(boPrice);
          listData.push(boPrice);
          let begin = 0;
          //console.log(listData);
          const {dataMax} = chartInstance.xAxis[0].getExtremes();
          begin = this.setSizeStock(listData);
          chartGet.xAxis[0].setExtremes(
              listData[begin]?.date,
              dataMax,
              false
          );
          chartGet.redraw();
        }
        chartInstance.xAxis[0].options.plotLines[0].value = boPrice.date;
        chartInstance.yAxis[0].options.plotLines[0].value = boPrice.close;

        let f = chartInstance.yAxis[0].plotLinesAndBands[0];

        f.label &&
        f.label.attr({
          text:
              '<div class="plotlineChart flex flex-col"><span class="price">' +
              boPrice.close +
              '</span><span class="time self-end">00:' +
              (counter > 9 ? counter : "0" + counter) +
              "</span></div>",
        });

        if (boPrice.type === "order") {
          this.isOrder = true;
          this.isBet = true;
          getData.textTimeDown = "Hãy đặt lệnh";
        } else {
          this.isOrder = false;
          this.isBet = false;
          getData.textTimeDown = "Chờ kết quả";
        }

        getData.countDown = counter > 9 ? counter : "0" + counter;
      } catch {
      }
    },

    getColor(openPrice, closePrice) {
      return openPrice < closePrice ? UP_COLOR : DOWN_COLOR;
    },

    onReceiveSocketData(boPrice) {
      this.updateCandleStickChart(boPrice);
      this.updateBarChart(boPrice);
    },

    StaOscillators(e) {
      try {
        let chart = this.$refs.chartOs.chart;

        let left = chart.series[0].points[0],
            leftVal;
        //Oscillators
        this.NumOscBUY = e.b;
        this.NumOscSELL = e.s;
        this.NumOscNeutral = e.m;

        if ((e.m > e.s && e.m > e.b) || (e.m === e.s && e.m === e.b)) {
          this.textTitleOs = "NEUTRAL";
          left.update(0, true);
          chart.redraw();
        }
        if (e.s > e.b) {
          leftVal = -35;
          this.textTitleOs = "SELL";
          if (e.s >= 5) (leftVal = -70), (this.textTitleOs = "STRONG SELL");
          left.update(leftVal, true);
          chart.redraw();
        } else if (e.s < e.b) {
          leftVal = 35;
          this.textTitleOs = "BUY";
          if (e.b >= 5) (leftVal = 70), (this.textTitleOs = "STRONG BUY");
          left.update(leftVal, true);
          chart.redraw();
        }
      } catch {
      }
    },

    StaSummary(e) {
      try {
        let chart = this.$refs.chartSu.chart;

        let left = chart.series[0].points[0],
            leftVal;

        //Summary
        this.NumSumBUY = e.b;
        this.NumSumSELL = e.s;
        this.NumSumNeutral = e.m;

        if ((e.m > e.s && e.m > e.b) || (e.m === e.s && e.m === e.b)) {
          this.textTitleSu = "NEUTRAL";
          left.update(0, true);
          chart.redraw();
          return;
        }
        if (e.s > e.b) {
          leftVal = -35;
          this.textTitleSu = "SELL";
          if (e.s >= 5) (leftVal = -70), (this.textTitleSu = "STRONG SELL");
          left.update(leftVal, true);
          chart.redraw();
        } else if (e.s < e.b) {
          leftVal = 35;
          this.textTitleSu = "BUY";
          if (e.b >= 5) (leftVal = 70), (this.textTitleSu = "STRONG BUY");
          left.update(leftVal, true);
          chart.redraw();
        }
      } catch {
      }
    },

    StaMovingAverages(e) {
      try {
        let chart = this.$refs.chartMa.chart;
        let left = chart.series[0].points[0],
            leftVal;
        //Moving

        this.NumMovBUY = e.b;
        this.NumMovSELL = e.s;
        this.NumMovNeutral = e.m;

        if ((e.m > e.s && e.m > e.b) || (e.m === e.s && e.m === e.b)) {
          this.textTitleMa = "NEUTRAL";
          left.update(0, true);
          chart.redraw();
          return;
        }
        if (e.s > e.b) {
          leftVal = -35;
          this.textTitleMa = "SELL";
          if (e.s >= 5) (leftVal = -70), (this.textTitleMa = "STRONG SELL");
          left.update(leftVal, true);
          chart.redraw();
        } else if (e.s < e.b) {
          leftVal = 35;
          this.textTitleMa = "BUY";
          if (e.b >= 5) (leftVal = 70), (this.textTitleMa = "STRONG BUY");
          left.update(leftVal, true);
          chart.redraw();
        }
      } catch {
      }
    },

    // setSizeStock(){
    setSizeStock(data) {
      var chartWidth = parseInt($(".chartBox").width());

      let numBar = Math.floor((chartWidth - 90) / 13.44); //90 17.44 13.44
      if (numBar < data.length - 10) {
        return data.length - numBar;
      }
      return 10;

      // var chartWidth = parseInt($('.chartBox').width());
      // if (chartWidth < 400) {
      //     return 65;
      // }

      // if (chartWidth > 400 && chartWidth < 800) {
      //     return 95;
      // }
    },

    getDataDefaultGet(get) {
      let data = get;
      (ohlcStock = []), (volumeStock = []);

      var begin = 0;

      // if (deviceVersion !== "pc") {
      //   begin = this.setSizeStock(data);
      // } else {
      //   let getWidth = parseInt($("body").width());
      //   if (getWidth >= 1260 && getWidth <= 1500) {
      //     begin = 65;
      //   }
      //   if (getWidth >= 1500 && getWidth <= 1600) {
      //     begin = 45;
      //   }
      //   if (getWidth >= 820 && getWidth <= 1260) {
      //     begin = 75;
      //   }
      //   if (getWidth > 1500) {
      //     begin = 55;
      //   }
      // }

      for (var i = begin; i < data.length; i++) {
        var _o = {
          x: data[i].date, // the date
          open: data[i].open, // open
          high: data[i].high, // high
          low: data[i].low, // low
          close: data[i].close, // close
          vol: data[i].volume, // volume
        };
        ohlcStock.push(_o);

        volumeStock.push({
          x: data[i].date, // the date
          y: data[i].volume, // the volume
          color: data[i].open < data[i].close ? UP_COLOR : DOWN_COLOR,
        });
      }
      stockChart.series[0].data = ohlcStock;
      stockChart.series[1].data = volumeStock;
      this.chartOptionsStock = stockChart;


      let ao = setInterval(() => {
        if (chartGet != "") {
          clearInterval(ao);
          const {dataMax} = chartGet.xAxis[0].getExtremes(); //dataMin
          begin = this.setSizeStock(listData);
          chartGet.xAxis[0].setExtremes(
              data[begin]["date"],
              dataMax,
              false
          );
          chartGet.redraw();

        }
      }, 100);
    },

    setChartHeight() {
      if (window.innerWidth > 768) {
        deviceVersion = "pc";
      } else {
        deviceVersion = "mobile";
      }
      let setS = setInterval(() => {
        let w = $(".chartBox").width();
        let h = $(".chartBox").height();
        if (!!w && !!h) {
          let cH = this.$refs.chartStock.chart.chartHeight;
          if (cH !== h) {
            let chartInstance = this.$refs.chartStock.chart;
            chartInstance.setSize(
                $(".chartBox").width(),
                $(".chartBox").height(),
                true
            );
            chartGet = chartInstance;
          } else {
            clearInterval(setS);
          }
        }
      }, 600);
      this.$forceUpdate();
    },

    resizeBieuDo() {
      this.sendMessage({type: "getListData"});
      if (window.innerWidth > 768) {
        deviceVersion = "pc";
      } else {
        deviceVersion = "mobile";
      }
      let chartInstance = this.$refs.chartStock.chart;
      chartInstance.setSize(
          $(".chartBox").width(),
          $(".chartBox").height(),
          true
      );
      chartGet = chartInstance;
      this.$forceUpdate();
      this.setWidthHistoryBox();
    },

    setWidthHistoryBox() {
      const historyBox = document.querySelector(".historyBox");
      const analysis = document.querySelector("#analysis-wrapper");
      if (historyBox && historyBox.clientWidth) {
        historyBox.style.setProperty('--width', historyBox.clientWidth / analysis.clientWidth);
      }
    },

    onWindowLoad() {
      let uidLive = getData.uidLive;
      let uidDemo = getData.uidDemo;
      let uidAcc = 0;

      let acc = localStorage.getItem("BO_BALANCE_TYPE");
      if (acc == "LIVE") {
        getData.isAccount = 1;
      } else {
        getData.isAccount = 0;
      }

      getData.isAccount ? (uidAcc = uidLive) : (uidAcc = uidDemo);

      this.sendMessage({
        type: "accountDetail",
        data: {uid: uidAcc, email: getData.email},
      });

      let notify = JSON.parse(localStorage.getItem("stateOpen"));
      if (notify) {
        getData.Notify = notify.l.bet[0].items.length;
      }
    },

    addSound() {
      createjs.Sound.alternateExtensions = ["mp3"];
      createjs.Sound.registerSounds([
        {
          id: "win",
          src: require("@/assets/sounds/win-n.mp3"),
        },
        {
          id: "lose",
          src: require("@/assets/sounds/lose-n.mp3"),
        },
        {
          id: "order",
          src: require("@/assets/sounds/order-n.mp3"),
        },
      ]);
    },

    playAudio(v) {
      let checkSound = localStorage.getItem("SOUND");
      if (checkSound === "false") return;
      createjs.Sound.play(v);

      // let sound;
      // if(v == 'win'){
      //    // sound = require('@/assets/sounds/win-n.mp3');
      // }else if(v == 'lose'){
      //   //  sound = require('@/assets/sounds/lose-n.mp3');
      // }else if(v == 'order'){
      //    // sound = require('@/assets/sounds/order-n.mp3');
      // }
      // var audio = new Audio(sound);
      // audio.play();
    },

    getUserInfo() {
      AuthenticationService.getInfoUser().then((res) => {
        if (res.data.success == 1) {
          let gData = res.data.data;

          (getData.uid = gData.id),
              (getData.email = gData.email),
              (getData.profile_image = gData.profile_image),
              (getData.displayName = gData.nick_name),
              (getData.uidLive = gData.order[1]?.u_id),
              (getData.uidDemo = gData.order[0]?.u_id),
              (getData.vip = gData.vip),
              (getData.vip_lv = gData.level_vip),
              (getData.pen_commiss = gData.pending_commission),
              (getData.ref = gData.ref),
              (getData.c2fa = gData.fa2),
              (getData.id_front = gData.id_front),
              (getData.id_back = gData.id_back),
              (getData.first_name = gData.first_name),
              (getData.last_name = gData.last_name),
              (getData.verify = gData.verify),
              (getData.num_secu = gData.num_secury),
              (getData.country = gData.c),
              (getData.blLive = gData.order[1]?.balance ?? 0);
          getData.blDemo = gData.order[0]?.balance ?? 0;
          (getData.balance = gData.balance), (getData.mkt = gData.mkt);

          localStorage.setItem("INFO", JSON.stringify(gData));
        } else {
          window.location.href = window.location.origin + "/login";
        }
      });
    },
  },
  created() {
    //let token = localStorage.getItem('token')
    //this.$store.dispatch('setToken', token)
    let streak = JSON.parse(localStorage.getItem('streak') || '{}');
    this.streak = streak.count || 0;
    let acc = localStorage.getItem("BO_BALANCE_TYPE");
    if (acc == "LIVE") {
      getData.isAccount = 1;
    } else {
      getData.isAccount = 0;
    }

    // lấy tổng số dư của tài khoản
    this.balanceForuser = getData.isAccount ? getData.blLive : getData.blDemo;

    this.connection = new ReconnectingWebSocket(config.BASE_URL_SOCKET);

    this.connection.onopen = function () {
      // console.log("Successfully connected to the echo websocket server...")
      this.onWindowLoad();
      this.getUserInfo();
    }.bind(this);

    this.connection.onmessage = function (event) {
      let data = JSON.parse(event.data);

      let dl = data.data;
      console.log('data', data)
      if (data.type === "getListDauTien") {
        if (!!dl) {
          listData = dl;
          this.getDataDefaultGet(dl);
        }
      }
      if (data.type === "getidPlayer") {
        this.thisIDPlayer = data.data;
      }
      if (data.type === "allData") {
        this.session = data.data.session;
        this.onReceiveSocketData(dl);
      }
      if (data.type === "transVolum") {
        if (dl.nbuy) {
          this.CSBUY = dl.ptbuy;
          this.CSSELL = dl.ptsell;
        }
      }
      if (data.type === "checkBet") {
        this.isBet = true;
        return this.$vs.notify({
          text: "Đặt lệnh thành công",
          color: "order_success",
          position: "top-right",
          iconPack: "feather",
          icon: "icon-check",
        });
      }
      if (data.type === "kq") {
        //console.log(dl);
        if (getData.isAccount) {
          this.setStreak(dl);
        }
        if (this.$store.state.forceWin || dl.kq == "win") {
          let mn = dl.money;

          this.playAudio("win");

          if (getData.isAccount) {
            getData.blLive = getData.blLive + mn;
          } else {
            getData.blDemo = getData.blDemo + mn;
          }

          this.moneyWin = this.formatPrice(mn, 2);
          this.isWinPop = true;
          setTimeout(() => {
            this.isWinPop = false;
          }, 3000);
        } else {
          this.playAudio("lose");
        }
        // xóa notice = 0
        getData.Notify = 0;
        this.betOpen.l.bet[0].items = [];
        localStorage.removeItem("stateOpen");
        window.dispatchEvent(
            new CustomEvent("stateOpen-localstorage-changed", {
              detail: {
                storage: undefined,
              },
            })
        );
      }
      if (data.type === "mess") {
        if (dl.type == "bet") {
          const color = dl.style !== "danger" ? dl.style : "order_fail";
          return this.$vs.notify({
            text: dl.mess,
            color: color,
            position: "top-right",
            iconPack: "feather",
            icon: "icon-x",
          });
        }

        if (dl.type === "disAccount") {
          // đăng xuất tài khoản
          setTimeout(() => {
            localStorage.removeItem("tokenUser");
            localStorage.removeItem("INFO");
            getData.Notify = 0;
            localStorage.removeItem("stateOpen");
            window.location.href = window.location.origin + "/login";
          }, 3000);
          const color = dl.style !== "danger" ? dl.style : "order_fail";
          return this.$vs.notify({
            text: dl.mess,
            color: color,
            position: "top-right",
            iconPack: "feather",
            icon: "icon-x",
          });
        }

        if (dl.type === "reloadAccount") {
          location.reload();
        }
      }
      if (data.type === "static") {
        let indicato = data.load;

        this.StaOscillators(indicato.Oscillators);
        this.StaSummary(indicato.Summary);
        this.StaMovingAverages(indicato.Moving);

        //this.totalBuyStatic = dl.cbuy;
        //this.totalSellStatic = dl.csell;

        let sta = dl.static;

        let stl = sta.length;
        let istart = 0;
        let csl = 40;
        this.totalBuyStatic = this.totalSellStatic = 0;
        //if(isMobile){ // rs lại tổng số
        //    this.totalBuyStatic = this.totalSellStatic = 0;
        //}
        if (isMobile && stl > 60) {
          //let sl = stl - csl;
          let sl = 0;
          if (stl > 60 && stl <= 80) {
            sl = 20;
          } else if (stl > 80) {
            sl = 40;
          }
          for (let x = 0; x < sl; x++) {
            sta.shift();
          }
          stl = sta.length;
        }
        let list = $(".historyBox");
        $(".historyBox .item").removeClass("bg-green bg-red");
        for (let i = istart; i < stl; i++) {
          let item = i;
          // let l1 = $('.historyBox .list1')
          // let l2 = $('.historyBox .list2')
          // let l3 = $('.historyBox .list3')
          // let l4 = $('.historyBox .list4')
          // let l5 = $('.historyBox .list5')
          if (i < 20) {
            if (sta[i] == "buy") {
              list.find(".item:eq(" + item + ")").addClass("bg-green");
              this.totalBuyStatic++;
            } else if (sta[i] == "sell") {
              list.find(".item:eq(" + item + ")").addClass("bg-red");
              this.totalSellStatic++;
            }
          }
          if (i > 19 && i < 40) {
            if (sta[i] == "buy") {
              list.find(".item:eq(" + item + ")").addClass("bg-green");
              this.totalBuyStatic++;
            } else if (sta[i] == "sell") {
              list.find(".item:eq(" + item + ")").addClass("bg-red");
              this.totalSellStatic++;
            }
          }
          if (i > 39 && i < 60) {
            if (sta[i] == "buy") {
              list.find(".item:eq(" + item + ")").addClass("bg-green");
              this.totalBuyStatic++;
            } else if (sta[i] == "sell") {
              list.find(".item:eq(" + item + ")").addClass("bg-red");
              this.totalSellStatic++;
            }
          }
          if (i > 59 && i < 80) {
            if (sta[i] == "buy") {
              list.find(".item:eq(" + item + ")").addClass("bg-green");
              this.totalBuyStatic++;
            } else if (sta[i] == "sell") {
              list.find(".item:eq(" + item + ")").addClass("bg-red");
              this.totalSellStatic++;
            }
          }
          if (i > 79 && i < 100) {
            if (sta[i] == "buy") {
              list.find(".item:eq(" + item + ")").addClass("bg-green");
              this.totalBuyStatic++;
            } else if (sta[i] == "sell") {
              list.find(".item:eq(" + item + ")").addClass("bg-red");
              this.totalSellStatic++;
            }
          }
        }
      }
    }.bind(this);

    this.connection.onclose = () => {
      // xóa notice = 0
      getData.Notify = 0;
      this.betOpen.l.bet[0].items = [];
      localStorage.removeItem("stateOpen");
    };
  },
  mounted() {
    this.addSound();

    function debounce(func) {
      var timer;
      return function (event) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(func, 100, event);
      };
    }

    const self = this;

    window.addEventListener(
        "resize",
        debounce(function () {
          self.resizeBieuDo();
        })
    );
    //window.addEventListener("load", this.setChartHeight);

    this.setChartHeight();

    // this.isMounted = true;

    // const chart = this.$children[1].$refs.highcharts
    // console.log(chart);
    //setTimeout(() => {

    // let chart = this.$refs.chartOs.chart
    // if (chart.series) { // the chart may be destroyed
    //     timer = setInterval(() => {
    //         var left = chart.series[0].points[0],
    //             //right = chart.series[1].points[0],
    //             leftVal,
    //             //rightVal,
    //             inc = (Math.random() * 200) - 85;

    //         leftVal = left.y + inc;
    //         //console.log(left.y)
    //         //rightVal = leftVal + inc / 3;
    //         if (leftVal < -85 || leftVal > 85) {
    //             leftVal = left.y - inc;
    //         }
    //         // if (rightVal < -20 || rightVal > 6) {
    //         //     rightVal = leftVal;
    //         // }
    //         //console.log(leftVal)
    //         left.update(leftVal, false);
    //         //right.update(rightVal, false);
    //         chart.redraw();
    //     }, 3000)
    // }

    //}, 3000)

    this.$store.commit("SET_IS_RENDER_TRADE_INDEX", true);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeBieuDo);

    if (timer) {
      clearInterval(timer);
    }
    this.$store.commit("SET_IS_RENDER_TRADE_INDEX", false);
    this.connection.close();
  },
};
</script>

<style scoped lang="scss">
//
@font-face {
  font-family: Frizon;
  src: url("~@/assets/fonts/Frizon.ttf");
}
.wrapper{
  display: flex;
  justify-content: space-between;
}
.wrapper .session {
  width: 50%;
}
.wrapper .wrapper-time {
  color: #ff0;
  text-align: right;
}
.price-center {
  text-align: center;
  background: #2c3e50;
  border-radius: 0.25em;
  height: 3em;
  line-height: 3em;
}
::v-deep .vs__dropdown-toggle {
  border: 0;
  box-shadow: none;
  padding-left: 1em;
  padding-right: 1em;
  background-color: #2c3e50 !important;
  background-image: none;
  cursor: pointer;
}
.wrapper-cuoc-mobile{
  display: flex;
  .v-select{
    flex: 1;
  }
  ::v-deep .vs__dropdown-toggle{
    height: 3em;
  }
  .session-mobile{
    background: #2c3e50;
    padding: 0 10px;
    border-radius: 0.25em;
    margin-left: 10px;
    width: 100px;
  }
}
.profitPercent{
  color: #d2a15a!important;
  font-size: 20px;
}
.streak {
  width: 100px;
  height: 38px;
  position: absolute;
  left: 145px;
  top: 0px;
  background: linear-gradient(133deg, #020024, rgba(12, 126, 104, .43) 0, rgba(42, 172, 230, .47));
  border: 1px solid #2ae6d8;
  border-radius: 5px;
  padding-left: 20px;
  cursor: pointer;

  @media screen and (max-width: 883px) {
    top: 23px;
  }
  @media screen and (max-width: 768px) {
    top: 30px;
  }

  &:before {
    content: "";
    display: block;
    width: 34px;
    height: 34px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAADAFBMVEUAAAAAAAAAAQEBAQEAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAHAwMCAgMDAwUAAAAAAAAAAAACAAAAAAAAAAAAAAABAgIAAAABAgMAAABZZKsAAAAAAAC7x97taXLcZG26xdVLVZEAAQMAAACNmM+MlsZibLbubHbhZ3ENNGLJXWeptcdRWppATIdETIKLP0clK06vTVZRW5ISGjArMFJjMz8VHCUpLjsNDxoAAAAqHyIdIDQAAACkTFNBS4CaSU/Nzc1RVYJKSkpWYJZIVIqPQUlvOUP0cntdSG5PW51CTXppKDBVW5pCT4n4+vrMWWLM0uHd5vLR3O3WY2vkaHCjTVWzU1xROFauUVrt9PWMna42QnMnMVpNVI67wdBMVo/6+vq4VWDMXGXUXGSsTlnJXGg8LUv5+fptMTgQJkLO1tpBSX26wc9NJjAAIDydSFQ9Q28qMVK6Vl8/R3KnSlGZoayLPUWDi5Z2Nz8YKUrBxtYAAgQ1O0ItExnBV2B9hIhvMTeIP0uvt8Q5PmhpcaNBISYTFiQDChB3NTxlbKTh5eVGHyNCSnvV2t9xe6d3fYiWlpatrbVOWVn9/f1zfsH1/P3m7vy9xOXn8P36+/tKU5bs9f3p8f1SXaPw9/3t9v3j7v3g6/zk6/ra5ffO1eO8w+O5weFlcKxaZJ5LVZnq8v3W4vTS3/Fter1xfLpsdrRfbrFUYaXx+f3q8fvf6Pnf5vXb4vDN2+3L1uzI1OrD0eWAis5vesh2gMB9hr9ve75lb750gL1odrmAiLdnc7ZmcrJXaKdPWZ5OV5pQXZRIUpI0RHv6/f3z+fyVoPDY3+3R1+bHzN+YotSGkNN5g8uxuMpocr5daLVdZ69vealOXKVjbJ1MVpxMVpl4gJhATIs0TYdBSYQvOGkfMGTBW2PCz/yyv/vz9fm7yfObp/Pj5fClseTMz+O7yeOzveK7y9+Klt+rs9epuNO2vtCmrs2jqs11fsSVnb10gbh5g7dfaqNXYo8lSoIOJFMQO2UfAAAAlXRSTlMAAgYKDREnLRMbQjQeGBc6JCEwV2JLPjdeRnRP/FJJ/vv46oh/Tf7+/vz56+rn59nIubibmZWGhIF+dHBvbWdUUEAoHA/+/v79+/j39fX08/Lx8O/v6+rq6eji4d3d2dfS0tHQzcvLysjGxL28vLq1srGsq6empqWjoJ6Vj4qHh3h2c21jYmFeXU5NSUVCPjc0Ly4fFz5YyMoAAAPESURBVEjH7dVVkNNQFAZg2qRJmyZN6oa7u7u7u7u7u7t72lKFotsuLOzi7u7u7u5uJ4HOwHAzU3hhmOF/TOfLf5p7b5Lo34lMJvtDBvC3rAjEfMdRIWR+GwGJSFkUCJ3ojFxeqtSk6bOmTS4plyMVipQemzbd1tCuezzfARgCIcjgLDvmzFm8ZNcuD8+3xDG5NIoQbHTNE1dPAlq85NIJnudn4oiqnw02u+vxtYuurpgjVF14zPPVtYpfq37ogBZ8RvPjaxcsOPPpw5I5i19s9fCeRgQDVagmEFOLp8qdKlXulIvWrnatWvXq0oGY9xeS8byzs06FRlCR/aD3yv79oTOLjq1Z4PbNPXJk0es3Dz0e59wRahpHjgdjjfGGr3ivvROMy++b6/TwkMPOebWMEgiKlHSfffsPhmKWCGYVoMM873GunOfuZ9Wp0E0YzhBsC28oZsXy9S6XO9Y3d6XTCSQ2WFtPERoMPR6uIk1FyoDZsXWp3+2P9c2b54t1B+cvHGA3cwpMhhwPZ0hTgQMxy7dscWxyuf1+tysYnL964bKUFiuJng4UpiHYJJU/Lt/icDhOulzB+fMXLly6bF3KwklYmE4KKbRqY6+ye+IckKfQAWL9xmQF9BSpUoCRQJw6b85DB/Zsczi2xW0AsmHjsyxDLUYzp8QkUfHEiQM3bh4K7Y7bFrdzx/oNG5+8bJzfYGfFPSSxHzT5Em/ffv7GrUN7d+/cuSc+XbK0d7PaDElMMBz6YEBPifpVKp7dfHrFzVvX98bHxycOJGy+06xoEoqkBYNAYIqluF2ufNVNp956v2S6nrA3wRsObLqfXU/paCWYX5G4SLnajqzXreDu09svNh2S6fM1b/hy4PmjnknVWtGgi5TaKXVyGIa1P3cukCd16u6dDoYvJxw9ldcED0E0KIQzE+v2zZf5dscGF7PZChWypc4Z3nf+QfrxZiiSoREsUbEMuVqnqJE8RY48BQ0Wi6GorUkg/dGsScXdDUEWDU/eJmOP/hkyDjRY9GmsVqPeYKt2dnMX2AsYEomPu0LyduPSNGxVWK83UmadTk3ZLfkr7SvCEjAdGmF478yjWCqp3Z4mKcWSBE1zpMmoH5TNqtYqJBD8IxWhM5soijKxOoLWKBVKmmStxgmscCSkEUfq1BCS0DIKHMPg5BNqs5kUFkk0KMTQHEFwnJZmlPAChgj3ITitBoqkEK7QMCpGA3MJ5Nv2hUsauIMUEpQYDBPJ94OCwQXRSG2ISGSRRK5F+UFLFO2nF/HDLyj6RND//M18BTPMNEyryTBUAAAAAElFTkSuQmCC) 50% no-repeat;
    position: absolute;
    left: -17px;
    top: 5px;
  }

  .streak-title {
    font-family: Frizon;
    font-size: 13px;
    text-transform: uppercase;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    color: #fff;
  }

  .ep-container {
    position: absolute;
    right: -16px;
    top: 2px;
    z-index: 2;
    // overflow: visible;
    display: inline-block;
    overflow: hidden;

    .ep-content {
      max-width: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      height: 100%;
      width: 100%;

      .ep-svg-container {
        display: flex;
        align-items: center;
        position: absolute;

        svg {
          overflow: hidden;

          g.ep-circle--container {
            transition: inherit;
            transform-origin: 50% 50%;

            .ep-circle {
              transform-origin: 50% 50%;
            }
          }
        }
      }

      .ep-legend--container {
        position: absolute;
        text-align: center;

        .ep-legend--value {
          transition: .3s;
          text-align: center;
          opacity: 1;
        }
      }
    }

    .streak-value {
      font-size: 14px;
      color: #2ae6d8;
    }

    .ep-legend--value__counter {
      display: none;
    }

    &:after {
      content: "";
      display: block;
      width: 35px;
      height: 38px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAmCAYAAABOFCLqAAAABHNCSVQICAgIfAhkiAAABwpJREFUWEe1WGtsU2UYPl8v59KiK/EXU8P2wwsRpIsRlUBovQQx4FYTB97C2eYUAWUzgRASXPcDIUayLVHiJaYFjcT4g4I/NOzHSkRARdsRGEE2WuNPfzC67tL2XHy/75zvnO/0skkTmjTfzrXPed7ned73DHF1fjJbXg9pqjCilTyDHk7qb04MTtZ5K+syVO8NJto7o3rJ26eXeK6o8tmiIkRahj9M13s/fF3dYMYj3QlOFVqLAKagi9yMKkwWOSkcHt5TN6C6wGTa5ICq+zNKyRuY00RuThPgS9bJWQ01R5K9dZWsLjATbe/0qCXvQEGTgBHMjMTNqgJhaFYREpt/fjNST7luG0ymbVuTonhTBVUEVgxGZmEtmCthSPeGu8++krxdQLcN5vrGHamSJgYtJigjsFJgsB7deT4i31Ew45t2xBSVl2edOqF6gVJhVuCr8pPv/7px8R0BgwWr6NKIrgiEEeMHjZUwxJaKHtfEcPTiWlKqt1dcOwElDdzyNkQS6cU1xb1gmTJb5CZlTjjBlYRgpUZMUJabDGdhDUGpeg/++eTgtuVXQwVdGDGAi2lOQuFagOYFk3lZDqoKP8IpQmBOoa6x1zlwk82Q01VQqv6P049Fu5ZPpAAYYbTI8ZwkTKX9rmI4nm6uYKgmGAJE9Y4AIwFIWKdb2FKxLrLzBliQhgp4Wxd2kdLCeQI/w/nEPCeJU4kvzrZU2L8qmMyrclAreLBGAhBsRn5QjShmnhAX4XzhGQ0Z24aGxElYA8ZxiXN7igYQPsf5Jbzm+w/9tD7KirwCDAFSdAMQPqBB1BOdWC7BT4g1gbVBk5emr5E3ZH8Zc7pLByBTUKI8WX0CfAGYj59p2fP9a1b7cIDBYtVUV4rDQIo2I+RJ2TyhLipfmZLR80u622DEBIBXv7ntF6eS732zLUzZcYC5sVmGkUAIQTfmSvDjDgBVssVigh7DDFrMGSz5gA3QiL1iRjAw+OL9ft90+I1P9pMIsMBMbJGjXInv04oeToWbzmq49lQTTO8p60WkN+HzaEtgGOT5Aic6mMjDNmiGYQpAJduHDhF2CBhSHsWTAkYCKgi0vOYVvYdxDdZTtePIrZnawFoxNULYMJkxXEXO4f255g3ReJaAudHeFQeNbMWDkhVszBOybjKAMq5xuMrYr7ncjGvgB4l7oCR4tbSTAy1Nw3aOWyRM96754PggIrMJEm4aExvrFmtGcfSeCmCMljBDRZ0Em+EWRrT2tu0qRtQnn9h7qg2Nv9QtQ8LGijhhTddU9B7WNbiM5b2JOc57zWCztGIz4JeACcgZ6i7MlGgwln20d7gZjb+4PaEofKtjHmGT1JEbdu8xg42d8iDYSqZLaJ4Y7BBtWC4ytWJuU908tPMcQn+9sCsF1EPvMJKSJKilCcMlZE6ZV0MipyMQrKkB7BbWRRYTjrxxumrpWymELm/YrbPd2DHT/o8ehM8v6R4zYWu4hmjHyBqSxMzfeB/uWQXEL0Z/rN+nU1Fa4rTmE8oU7U3ObZPBkz5xJgta2FXVNVgjpovYfGGTGDu6sXMMofPP9Wehsy5lJnwysdnA7N5TjcEfrjWQeOhefUn2ibkY23uqtQC2NWA9uVwq6QYEzJlnDyRAK621Jrb5tOJya6Mnxu4J0t6y9/nTMmglVo0BI3mNXPGZrvKC4I0PGm3svBJEw08f7oHoH7DsWpYbDtdYGhI5FSGcpkPfpe/vYceAg+1fR/1Cvs9mgNEKkz+8d465TD/a2HlVRj+GBpqm4YXMTt6y9yDTZdZEBzljTmzQ5HLN8QvLsuWD9+ddh9NQgpWsu9iSScK08xKkRxo7riZIvb9dG0uCK9bZXdiZvuXdG6sf2n//sYsPOIYj+gux7QeCi/hcynINTWKzFyGkW2AAwK0lnWMBq1HG1hwPzcGI6ZjoHFO/3b3dbjKxjXrvngzFky01J/1Tu99NgovW2a4xktftUhys6DrXf2/XGHkoa4QYeupUAjpwK/MiVnNiE6R8S/zcI/O+4J/e3ylL/LTDXV5Pobyif0O+BJs70uShLDADwZFA3ouyUJIGtjXQEhVhYjPd0B//bVnV8pT/0sWPNmWh9yzF7sKlLf8g5Aov6bicpPsdk96+x38JFhUxCWJtMNxF51oB0hNsKU6dOfb7g6GKu9bYcWngmTiUZivOk0ogXMeSjrE4u79iIO8JXgnOaHwS/pvQQDVEJ7a7pFz4s7Mt1pMsBOr6p6ujkCt9LpfmOBVSoQKIo0zs2fLDmaZZlwQaElbSiQ2EOPrVhRVWwC0EBB//58tgCAQ/Qs8FD43qiJPv6xirqrd53yg3PXxTBooHYd5oEMV8x5HkKgetCwHKxIIBQStkEVCh6dwgdU2t6xZ815aDmYDP92/TkXOr6v732EKg6fH/AFOUwzCO4Y+4AAAAAElFTkSuQmCC) 0 0 no-repeat;
      position: absolute;
      left: -2px;
      top: -12px;
      z-index: -1;
    }
  }
}

//
.text-color-red {
  color: #fc5f5f;
}

.btn_dat_cuoc_m {
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 47px;
  font-weight: bold;
  width: calc(100% / 3 - 10px);

  .second {
    color: #fff !important;
  }
}

.btn_dat_cuoc_m.tang {
  margin-right: 10px;
}

.btn_dat_cuoc_m.giam {
  margin-left: 10px;
}

.btn_dat_cuoc {
  border-radius: 10px !important;
  color: #fff;
  height: 60px;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: none !important;
}

.btn_dat_cuoc_m.time {
  background: #1d233b;
  color: #fff !important;
  flex-direction: column;
}

.btn_dat_cuoc_m.tang,
.btn_dat_cuoc.tang {
  background: #31baa0;
}

.btn_dat_cuoc_m.giam,
.btn_dat_cuoc.giam {
  background: #fc5f5f;
}

.btn_dat_cuoc_m.disabled,
.btn_dat_cuoc.disabled {
  background-color: #8b8d96 !important;
  cursor: no-drop;
}

.operator_mobile {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1d233b;
  cursor: pointer;
  border-radius: 2px;
}

@media screen and (min-width: 986px) {
  .wrapper {
    display: flex;

    #left-content {
      flex: 0 0 calc(100% - 210px);
      max-width: calc(100% - 210px);
      padding: 0 2px;
    }

    #right-content {
      flex: 0 0 210px;
      max-width: 210px;
    }
  }
  .his-bet-wrapper {
    position: fixed;
    width: 210px;
    top: 80px;
    z-index: 100;
    right: 0;
    border-left: 2px solid #000;
  }
}

.trans {
  transition: 0.4s all;
}

.overviewInfo {
  font-weight: 700;
  font-size: 16px;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  right: 10px;
  transform: translateY(calc(-100% - 10px));
}

.overviewInfo .badgeItem {
  padding: 4px 8px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.2);
}

@media screen and (max-width: 960px) and (orientation: portrait) {
  .titleChartCandle {
    top: 24px !important;
    left: 0 !important;
  }
}

.titleChartCandle {
  position: absolute;
  top: 0;
  left: 10px;
  padding: 7px 10px;
  border-radius: 10px !important;
  background-color: #21355f !important;
}

.titleChartCandle .iconBTC {
  display: inline-flex;
  width: 20px;
  height: 20px;
  margin-right: 4px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAqCAYAAADI3bkcAAAABHNCSVQICAgIfAhkiAAABQtJREFUWIXVmV1sFFUUx393Zvaj7QJFILbQUgopKBIBGykRaEsiiobESPRBEoxRjIkJUR81ELaxj2pieFLUB40kfgQjiYkxwVYsAYmEWhSBSGlLwfLRb2j38x4fZna7UyrdnTbpcl9+OzNn5/zv2XPvOTOrcEZ8f0l9EvYpUWuUoYpFBKUUM0mEAVHSakKDb3dPM4ACGN1fEjaU2oc4Z/KQGmko2N0TVqP7S+oVqgkRUIp8pig2G4iERQSAfCciYUtrWa0MeyKo/KRSoAVEZLUBFM905CajTkVYUWwI7pP5TBHBEJn5CGZPsEAQUYDG3kPymTgRdtJi2hiYTdGuNoJPfwyBOZPYq+wpYOewOLkyTbTK61ChUqzKLejIIGbpOgpfOklwy4cT2OusKQiGiEwpoqqoBGvFs6jQwvR5s3wDAInLvwKCubgWo7gSY94DU/vlRLDE/uS5alpLn6Tg8fftGw5fJXH1BNai9Y7gY7aTxXXpCaSLgIchgJUSS6rhUCqnTd2YXZa+oZq1EN+K7enjYN27BNa9gQoUAxDvarF9eY2OCKrvvbnep5wxgjVvUbBx711t9MAlom2fEzl9ABIjnvzYOTwN+2Si+/g4ce3EO5vQw91jzoorKajdx+wdP6IKF3jyY4yVPz0lmotqXIIjZ79i+Jvt9H+0iqGDT5C8cSZ9zVywilnPHQJl5uTHFpyegZoSfeWbXILjXS3p6/ErJxk4+BQy2psh+iF8Vdty80MqJQDRegpU+MoeG1ObjBK/fNxtFx0m2d/umpRRdD8izvUsiAiGXZrFWfXeaJasBSs4prf/IubcSpedVVaDVVrtEpzouwjkkMMIlr2TCVo7facHFpRvdAkx569k7q5TJHsvoEeuo8yALVYZY2Kv/0ns0k9j/W4WfgAswW5+Uk2yF1pOZRs/zHnLMectH3dWiF/5jcHDL+fsx650U46wwp8pWCe4+dl6jNBCCle/SGDZVpQ/lJHfMUZOf0pi8HLO/tIRdkqdt92hdK1LUPzf30ncPAe954l1/AxWgFmb9lJU86YT9gBzth0AZTB65stxFXZyGqnSnMtqzaSvzJ0O0c6j7t0hHmGoaQ+R89+77EIb3s55NyKz+VFOxLJhoGoboerXiHafoHDl8y4hsc6WCb8X6z5BcMUzY/ldXJG1vzTtXcJ+06JFZ83Qo6/jX1yLf8nmOxaaliRYQXR8NG1vhkooXPuKyy7R949jn71fO4cz2r2s9kMzgI4OIfERlK/wDsHzd/wAySixa39AIgqGD3/pI2D63anT0eSpl1BdjUFRXlo9w0+gYhMFy7YSqn4VzMAd4v93JKP0HFhHou9CTn4FnEXnHOTEZIxI+xEGmsPp6A0ceYfbbV/cXayOc+PbF0j0XiD142ZL16LzOoJL6gCFxG4xdPwD/KXVFD28E4Cbh3Zi3bcUZfgAIX79LyIdv6Aj/envS460UvU+tQpzZbCiHoBI51H7eEktAPFrbdw++7Xn+05IO8KCEoVGo8idt859hySjRHtaQSBQYQse7WgGAbuXmx6San5QTuUid0a7jhHtaiG1MoZPfUK8r52R84c93e+uFFDtDZZ4fCKcAXLvvVvLeKbLfzpvfvTgZMYzH1mHWg8aIrSCOOImpuQLhVZD3UP/cSiRsFHVSLNoaRCdenrOUyZ1Q1UjzQpn/L2HehRhJaxBMWem/1RUSiFaBkXRihB+sJFmgP8A0ZjYaQV3l3UAAAAASUVORK5CYII=);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.titleChartCandle .textPrice {
  font-size: 12px;
  color: #fff;
  font-weight: 700;
}

.popupCongratulation {
  display: none;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
}

.popupCongratulation .mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
}

.popupCongratulation .popupCongratulationContent {
  display: block;
  overflow: unset;
  border-radius: 8px;
  width: 450px;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.winLive .wrapNotify {
  border-radius: unset !important;
  background-color: unset !important;
  height: 210px !important;
  width: 368px;
  background-image: url("~@/assets/images/sky/background_win_live.svg");
  background-repeat: no-repeat;
  background-size: 100% 215px;
}

.wrapNotify.congratulation {
  background-color: red;
}

.winLive .wrapNotify .iconWin {
  position: absolute;
  left: 49%;
  bottom: 93%;
  -webkit-transform: translate(-50%, 30%);
  -ms-transform: translate(-50%, 30%);
  -moz-transform: translate(-50%, 30%);
  transform: translate(-50%, 30%);

  // padding: 10px;
  // border: 1px solid #F1DD48;
  // border-radius: 10px;
  width: 50%;

}

.winLive .wrapNotify .badgeDemo {
  position: absolute;
  top: 34px;
  right: 57px;
  color: #fff;
  font-weight: bold;
  background: #2177ff;
  border-radius: 4px;
  padding: 0 8px;
}

.winLive .wrapNotify .titleWin {
  font-size: 1.95rem;
  font-weight: bold;
  margin: 15px 0;
  color: #fff;
}

.winLive .wrapNotify .message {
  color: #23c15f;
}

.winLive .wrapNotify .iconClose {
  color: #fff;
  position: absolute;
  right: -30px;
  top: 15px;
}

.winDemo .wrapNotify {
  border-radius: 5px;
  background-color: #12013e;
  height: 340px !important;
  width: 400px;
}

.winDemo .wrapNotify .iconWin {
  position: absolute;
  top: -25px;
  left: 50%;
  -webkit-transform: translate(-50%, 30%);
  -ms-transform: translate(-50%, 30%);
  -moz-transform: translate(-50%, 30%);
  transform: translate(-50%, 30%);
  width: 120px;
  height: 120px;
}

.boxContent .message_money {
  color: #00c48c;
}

.winDemo .wrapNotify .boxContent {
  padding: 0;
}

.boxContent {
  margin-top: 4.5rem !important;
}

.winDemo .wrapNotify .boxContent .contentPopup {
  margin-top: 140px;
}

.winDemo .wrapNotify .boxContent .titleWin {
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 15px;
  line-height: 1.5;
}

.winDemo .wrapNotify .boxContent .message {
  color: #1ebf75;
  font-size: 2.2rem !important;
  line-height: 1;
}

.winDemo .wrapNotify .boxContent .btnDeposit {
  max-width: 340px;
  width: 100%;
  padding: 10px 0;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  border-radius: 5px;
  background-color: #1ebf75;
}

.winDemo .wrapNotify .iconClose {
  color: #fff;
  position: absolute;
  right: -30px;
  top: 0;
}

.analysis-wrapper {
  height: 8rem;
}

.analysis-wrapper .wrap-gauge-meter.active,
.analysis-wrapper #historyBox.active {
  opacity: 1;
  z-index: 1;
}

.wrap-gauge-meter {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding-top: 20px;
  transition: 0.4s all;
}

.wrap-gauge-meter-inner {
  height: 100%;
}

.historyBox {
  margin-top: 30px;
  transition: 0.4s all;
}

.historyBox .item {
  width: calc(1.8rem * var(--width, 1));
  height: calc(1.8rem * var(--width, 1));

  margin: 2px 1.5px !important;
}

.sidebarMobile {
  display: none;
}

.list1,
.list2,
.list3,
.list4,
.list5 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: row dense;
  grid-gap: 0rem;
}

.gridcs-1 {
  grid-column-start: 1;
}

.gridcs-2 {
  grid-column-start: 2;
}

.gridcs-3 {
  grid-column-start: 3;
}

.gridcs-4 {
  grid-column-start: 4;
}

.gridcs-5 {
  grid-column-start: 5;
}

@media (max-width: 1024.98px) {
  .history-column {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
  }
  .sidebarPC {
    display: none;
  }
  .sidebarMobile {
    display: block;
    position: absolute;
    top: 60px;
    left: 0;
    width: 50px;
    height: 454px;
  }
  .sidebarMobile .slidercontent {
    height: 100%;
    position: relative;
    width: 50px;
  }
  .sidebarMobile .slidercontent .backgroundOverlay {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 50px;
  }

  .progress_c {
    height: 400px;
    margin-left: 0px;
  }
  .sidebarMobile .slidercontent span {
    width: 50px;
    line-height: 1;
  }
  .zIndex99 {
    z-index: 99;
  }
  .sidebarMobile .slidercontent .progress {
    -webkit-transform: translateX(-48%) rotate(270deg);
    transform: translateX(-48%) rotate(270deg);
    height: 0.4rem !important;
    overflow: unset !important;
  }
}

@media screen and (max-width: 1300px) {
  .wrap-gauge-meter-inner {
    height: auto;
    overflow: initial;
  }
}

@media screen and (max-width: 1023px) and (min-width: 991px) {
  .wrap-gauge-meter-inner {
    padding-bottom: 65px;
  }
}

@media screen and (max-width: 1023px) and (min-width: 991px) and (orientation: landscape) {
  .wrap-gauge-meter-inner {
    padding-bottom: 65px !important;
  }
}

@media screen and (max-width: 1023px) and (orientation: landscape) {
  .wrap-gauge-meter {
    padding-top: 36px;
  }
}

@media screen and (max-width: 767px) {
  .wrap-gauge-meter {
    padding-top: 35px;
  }
}

.gauge-meter {
  width: 900px;
  height: 135px;
  position: relative;
  margin: 0 auto;
  top: 15px;
}

@media screen and (max-width: 1500px) {
  .gauge-meter {
    width: 700px;
  }
}

@media screen and (max-width: 1300px) {
  .gauge-meter {
    width: 600px;
    height: 64px;
    top: auto;
    transform: none;
    margin-top: 20px;
  }
}

@media screen and (max-width: 1200px) {
  .gauge-meter {
    margin-top: 15px;
  }
}

@media screen and (max-width: 1024px) {
  .gauge-meter {
    margin-top: 10px;
  }
}

@media screen and (max-width: 1000px) and (orientation: landscape) {
  .gauge-meter {
    margin-top: 5px;
    width: 350px;
  }
}

@media screen and (max-width: 767px) {
  .gauge-meter {
    width: 350px;
    margin-top: 15px;
  }
  .boxContent {
    margin-top: 3.2rem !important;
  }
}

@media screen and (max-width: 575px) {
  .gauge-meter {
    margin-top: 35px;
  }
}

@media screen and (max-width: 420px) {
  .gauge-meter {
    margin-top: 10px;
    width: 320px;
  }
}

@media screen and (max-width: 400px) {
  .gauge-meter {
    /* margin-top: 10px; */
    /* width: 260px; */
  }
}

.gauge-meter.is-show-transaction {
  width: 90%;
}

.gauge-meter-sub {
  width: 176px;
  height: 100%;
  position: absolute;
  bottom: 0;
}

@media screen and (max-width: 1300px) {
  .gauge-meter-sub {
    width: 88px;
  }
}

.gauge-meter--os {
  left: 0;
  width: 140px;
}

@media screen and (max-width: 1300px) {
  .gauge-meter--os {
    width: 70px;
  }
}

.gauge-meter--su {
  left: 50%;
  transform: translateX(-50%);
}

.gauge-meter--ma {
  width: 140px;
  left: auto;
  right: 0;
}

@media screen and (max-width: 1300px) {
  .gauge-meter--ma {
    width: 70px;
  }
}

.gauge-meter-title {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  z-index: 4;
  margin-bottom: 0;
  white-space: nowrap;
  display: flex;
  position: relative;
  color: #fff;
  cursor: pointer;
}

.gauge-meter-title:hover {
  text-decoration: underline;
}

.gauge-meter-title-icon {
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -20px;
}

.gauge-meter-title-icon svg {
  width: 100%;
  height: auto;
}

@media screen and (max-width: 1300px) {
  .gauge-meter-title-icon {
    width: 12px;
    height: 12px;
    right: -14px;
  }
}

@media screen and (max-width: 1300px) {
  .gauge-meter-title {
    font-size: 10px;
  }
}

.gauge-meter-sub-title {
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: -16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  margin-bottom: 0;
  white-space: nowrap;
}

@media screen and (max-width: 1300px) {
  .gauge-meter-sub-title {
    font-size: 10px;
    bottom: -12px;
  }
}

.gauge-meter-border {
  width: 100%;
  height: 88px;
  position: absolute;
  bottom: 0;
  left: 0;
}

.gauge-meter-border:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: 3;
  background-size: cover;
  background-image: url("data:image/svg+xml;base64,PHN2ZyBpZD0iR3JvdXBfMjE1NTMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB2aWV3Qm94PSIwIDAgODYgNDMiPgogIDxnIGlkPSJQYXRoXzM1MzYzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDE4LjI1OSkiPgogICAgPHBhdGggaWQ9IlBhdGhfMzUzNzMiIGRhdGEtbmFtZT0iUGF0aCAzNTM3MyIgZD0iTTk0My4yNjIsMTE4Ni40MmEuODM0LjgzNCwwLDAsMS0uODY4LS44MjQsNDAuNTA5LDQwLjUwOSwwLDAsMSw3LjYzNi0yMy41Ni44NjguODY4LDAsMSwxLDEuMzg4LDEuMDQyLDM5LjEzNywzOS4xMzcsMCwwLDAtNy4yODksMjIuNDc1Ljg0NC44NDQsMCwwLDEtLjg2OC44NjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQyLjM5MSAtMTE2MS42NzkpIiBmaWxsPSIjZWY1NDUwIi8+CiAgPC9nPgogIDxnIGlkPSJQYXRoXzM1MzY3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3Ni43ODkgMTguMjE1KSI+CiAgICA8cGF0aCBpZD0iUGF0aF8zNTM3NCIgZGF0YS1uYW1lPSJQYXRoIDM1Mzc0IiBkPSJNMTEyOC42MTksMTE4Ni4zNjNoMGEuODguODgsMCwwLDEtLjg2OC0uOTExLDM5LjUyNSwzOS41MjUsMCwwLDAtNy4yODktMjIuNDc1Ljg2OC44NjgsMCwxLDEsMS4zODgtMS4wNDEsNDAuNTA5LDQwLjUwOSwwLDAsMSw3LjYzNiwyMy41NkEuODY5Ljg2OSwwLDAsMSwxMTI4LjYxOSwxMTg2LjM2M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTIwLjI3OSAtMTE2MS41NzkpIiBmaWxsPSIjMzFiYWEwIi8+CiAgPC9nPgogIDxnIGlkPSJQYXRoXzM1MzY0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjgzIDIuNjgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM1Mzc1IiBkYXRhLW5hbWU9IlBhdGggMzUzNzUiIGQ9Ik05NjMuNjM0LDExNDAuNjYzYS45NTMuOTUzLDAsMCwxLS41NjQtLjE3My44NDYuODQ2LDAsMCwxLS4xMy0xLjIxNSw1Mi40NTcsNTIuNDU3LDAsMCwxLDUuODU4LTUuOTQ0YzQuNzczLTQuMjA5LDkuMzcyLTYuOSwxMy43MTEtOC4wN2EuODUyLjg1MiwwLDEsMSwuNDM0LDEuNjQ5Yy05LjcxOSwyLjU2LTE4LjU3LDEzLjMyLTE4LjY1NywxMy40NTFBLjg0OC44NDgsMCwwLDEsOTYzLjYzNCwxMTQwLjY2M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NjIuNzQxIC0xMTI1LjIzKSIgZmlsbD0iI2Y1OTg5NiIvPgogIDwvZz4KICA8ZyBpZD0iUGF0aF8zNTM2NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTYuMjQxIDIuNjc3KSI+CiAgICA8cGF0aCBpZD0iUGF0aF8zNTM3NiIgZGF0YS1uYW1lPSJQYXRoIDM1Mzc2IiBkPSJNMTA5Mi45MTUsMTE0MC42NmExLjAyNSwxLjAyNSwwLDAsMS0uNjk0LS4zYy0uMDg3LS4wODctOC45MzgtMTAuODQ3LTE4LjY1Ny0xMy40NWEuODUzLjg1MywwLDEsMSwuNDM0LTEuNjQ5YzQuMzM5LDEuMTI4LDguOTM4LDMuODYyLDEzLjcxMSw4LjA3YTYyLjMzMiw2Mi4zMzIsMCwwLDEsNS44NTcsNS45NDQuODQyLjg0MiwwLDAsMS0uMTMsMS4yMTVBLjkyOS45MjksMCwwLDEsMTA5Mi45MTUsMTE0MC42NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDcyLjkyMyAtMTEyNS4yMjMpIiBmaWxsPSIjOGZmMGNiIi8+CiAgPC9nPgogIDxnIGlkPSJQYXRoXzM1MzY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMC4yMTEpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM1Mzc3IiBkYXRhLW5hbWU9IlBhdGggMzUzNzciIGQ9Ik0xMDM3LjMsMTEyMi42NzVhLjczOC43MzgsMCwwLDEtLjMtLjA0M2MtMTEuMTA4LTQuMDc4LTIzLjI1Ni0uMDQzLTIzLjM4NywwYS44MjkuODI5LDAsMCwxLTEuMDg1LS41NjQuODM4LjgzOCwwLDAsMSwuNTIxLTEuMDg1Yy41MjEtLjE3MywxMi44NDMtNC4yNTIsMjQuNTU4LDBhLjg3Mi44NzIsMCwwLDEtLjMsMS42OTJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAxMi40NzUgLTExMTkuMDU0KSIgZmlsbD0iI2QxZDRkYyIvPgogIDwvZz4KPC9zdmc+Cg==");
}

@media screen and (max-width: 1300px) {
  .gauge-meter-border {
    height: 44px;
  }
}

.gauge-meter--os .gauge-meter-border,
.gauge-meter--ma .gauge-meter-border {
  height: 50px;
}

@media screen and (max-width: 1300px) {
  .gauge-meter--os .gauge-meter-border,
  .gauge-meter--ma .gauge-meter-border {
    height: 35px;
  }
}

.gauge-meter-background {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-size: cover;
  transition: all 0.3s;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODYiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA4NiA0MyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNTE0MSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNTE0MSIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjAxKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeTE9IjAuMDA2IiB4Mj0iMC41MDciIHkyPSIwLjQ5NCIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMC42MDQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNjVjYmIwIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTdkY2NmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIGlkPSJNYXNrX0dyb3VwXzY0MSIgZGF0YS1uYW1lPSJNYXNrIEdyb3VwIDY0MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjAxKSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMzU0NDAiIGRhdGEtbmFtZT0iUGF0aCAzNTQ0MCIgZD0iTTQzLDBDNjYuNzQ4LDAsODYsMTguOCw4Niw0MlM2Ni43NDgsODQsNDMsODQsMCw2NS4yLDAsNDIsMTkuMjUyLDAsNDMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC45OSkiIG9wYWNpdHk9IjAuNiIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+CiAgPC9nPgo8L3N2Zz4K");
}

.gauge-meter-background.rank-1 {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODYiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA4NiA0MyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNTE0MCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNTE0MCIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjAxKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeTE9IjAuMDA2IiB4Mj0iMC41MDciIHkyPSIwLjQ5NCIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlZjU0NTAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzk2NzY3IiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTdkY2NmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIGlkPSJNYXNrX0dyb3VwXzY0MCIgZGF0YS1uYW1lPSJNYXNrIEdyb3VwIDY0MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjAxKSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMzU0MzkiIGRhdGEtbmFtZT0iUGF0aCAzNTQzOSIgZD0iTTQzLDBDNjYuNzQ4LDAsODYsMTguOCw4Niw0MlM2Ni43NDgsODQsNDMsODQsMCw2NS4yLDAsNDIsMTkuMjUyLDAsNDMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC45OSkiIG9wYWNpdHk9IjAuNiIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+CiAgPC9nPgo8L3N2Zz4K");
}

.gauge-meter-background.rank-2 {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODYiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA4NiA0MyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNTA4NCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNTA4NCIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjAxKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeTE9Ii0wLjI5OCIgeDI9IjAuNTA3IiB5Mj0iMC40OTQiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmQ5MjkxIiBzdG9wLW9wYWNpdHk9IjAuOCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmNTk4OTYiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPGcgaWQ9Ik1hc2tfR3JvdXBfNjIxIiBkYXRhLW5hbWU9Ik1hc2sgR3JvdXAgNjIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuMDEpIiBjbGlwLXBhdGg9InVybCgjY2xpcC1wYXRoKSI+CiAgICA8ZWxsaXBzZSBpZD0iRWxsaXBzZV8yMjM5IiBkYXRhLW5hbWU9IkVsbGlwc2UgMjIzOSIgY3g9IjQzIiBjeT0iNDIiIHJ4PSI0MyIgcnk9IjQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuOTkpIiBvcGFjaXR5PSIwLjYiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50KSIvPgogIDwvZz4KPC9zdmc+Cg==");
}

.gauge-meter-background.rank-3 {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODYiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA4NiA0MyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNTE0MSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNTE0MSIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjAxKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeTE9IjAuMDA2IiB4Mj0iMC41MDciIHkyPSIwLjQ5NCIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMC42MDQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNjVjYmIwIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTdkY2NmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIGlkPSJNYXNrX0dyb3VwXzY0MSIgZGF0YS1uYW1lPSJNYXNrIEdyb3VwIDY0MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjAxKSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMzU0NDAiIGRhdGEtbmFtZT0iUGF0aCAzNTQ0MCIgZD0iTTQzLDBDNjYuNzQ4LDAsODYsMTguOCw4Niw0MlM2Ni43NDgsODQsNDMsODQsMCw2NS4yLDAsNDIsMTkuMjUyLDAsNDMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC45OSkiIG9wYWNpdHk9IjAuNiIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+CiAgPC9nPgo8L3N2Zz4K");
}

.gauge-meter-background.rank-4 {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODYiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA4NiA0MyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNTE1MiIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNTE1MiIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjAxKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeTE9Ii0wLjI2IiB4Mj0iMC41MDciIHkyPSIwLjQ5NCIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM4ZmYwY2IiIHN0b3Atb3BhY2l0eT0iMC44Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzhmZjBjYiIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzhmZjBjYiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPGcgaWQ9Ik1hc2tfR3JvdXBfNjQ1IiBkYXRhLW5hbWU9Ik1hc2sgR3JvdXAgNjQ1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuMDEpIiBjbGlwLXBhdGg9InVybCgjY2xpcC1wYXRoKSI+CiAgICA8ZWxsaXBzZSBpZD0iRWxsaXBzZV8yMzIxIiBkYXRhLW5hbWU9IkVsbGlwc2UgMjMyMSIgY3g9IjQzIiBjeT0iNDIiIHJ4PSI0MyIgcnk9IjQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuOTkpIiBvcGFjaXR5PSIwLjYiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50KSIvPgogIDwvZz4KPC9zdmc+Cg==");
}

.gauge-meter-background.rank-5 {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODYiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA4NiA0MyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNTA4NCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNTA4NCIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjAxKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeTE9IjAuMDA2IiB4Mj0iMC41MDciIHkyPSIwLjQ5NCIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzMWJhYTAiIHN0b3Atb3BhY2l0eT0iMC42MDQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNjVjYmIwIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTdkY2NmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIGlkPSJNYXNrX0dyb3VwXzYyMSIgZGF0YS1uYW1lPSJNYXNrIEdyb3VwIDYyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjAxKSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMzUzODIiIGRhdGEtbmFtZT0iUGF0aCAzNTM4MiIgZD0iTTQzLDBDNjYuNzQ4LDAsODYsMTguOCw4Niw0MlM2Ni43NDgsODQsNDMsODQsMCw2NS4yLDAsNDIsMTkuMjUyLDAsNDMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC45OSkiIG9wYWNpdHk9IjAuODAyIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiLz4KICA8L2c+Cjwvc3ZnPgo=");
}

.gauge-meter-pane {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
}

@media screen and (max-width: 1200px) and (min-width: 927px) {
  .historyBox {
    margin-top: 10px;
  }

  .historyBox .item {
    width: calc(1.3rem * var(--width, 1));
    height: calc(1.3rem * var(--width, 1));
  }
}

@media screen and (min-width: 769px) and (max-width: 926px) {
  .w-18 {
    max-width: 90% !important;
    padding: 0 0.5rem;
  }

  .historyBox {
    margin-top: 5px;
  }

  .historyBox .item {
    width: 1.3rem;
    height: 1.3rem;
  }

  #tradePage {
    /* padding-top: 10px; */
  }

  .c-loinhuan {
    margin-bottom: 0.5rem !important;
    margin-top: 2.25rem !important;
  }
}

@media screen and (max-width: 768.98px) {
  .w-18 {
    max-width: 90% !important;
    padding: 0 0.5rem;
  }

  .historyBox {
    margin-top: 5px;
  }

  .historyBox .item {
    width: 1.2rem;
    height: 1.2rem;
  }

  /* #tradePage{
        padding-top: 20px;
    } */
}

@media screen and (max-width: 576px) {
  .w-18 {
    max-width: 130px !important;
  }

  .historyBox .item {
    width: 1.2rem;
    height: 1.2rem;
  }

  .historyBox .list1,
  .historyBox .list2 {
    display: none;
  }
}

@media screen and (max-width: 414px) {
  .w-18 {
    max-width: 130px !important;
    padding: 0 0.4rem;
  }

  .historyBox .item {
    width: 1rem;
    height: 1rem;
  }

  .popupCongratulation .popupCongratulationContent {
    width: auto;
  }

  .winLive .wrapNotify {
    width: 320px;
    background-size: 320px;
  }

  .winLive .wrapNotify .iconWin {
    left: 50%;
  }

  .winLive .wrapNotify .badgeDemo {
    right: 50px;
  }
}

@media screen and (max-width: 376px) {
  .w-18 {
    max-width: 115px !important;
  }

  .historyBox .item {
    width: 1rem;
    height: 1rem;
  }
}

@media screen and (max-width: 359px) {
  .w-18 {
    max-width: 100px !important;
  }

  .historyBox .item {
    width: 0.8rem;
    height: 0.8rem;
  }

  .popupCongratulation {
    zoom: 0.8;
  }
}

@media screen and (max-width: 1300px) {
  .gauge-meter-label-list {
    display: none;
  }
}

.gauge-meter-label-item {
  font-size: 10px;
  color: #8383a1;
  text-align: center;
  position: absolute;
  line-height: 1.2;
  text-transform: uppercase;
  transition: all 0.3s;
}

.gauge-meter-label-item.active {
  color: #fff;
}

.gauge-meter-label-item--strong-sell {
  top: 45px;
  left: -42px;
}

.gauge-meter--os .gauge-meter-label-item--strong-sell,
.gauge-meter--ma .gauge-meter-label-item--strong-sell {
  top: 40px;
  left: -40px;
}

.gauge-meter-label-item--sell {
  top: 5px;
  left: 5px;
}

.gauge-meter--os .gauge-meter-label-item--sell,
.gauge-meter--ma .gauge-meter-label-item--sell {
  top: 8px;
  left: -2px;
}

.gauge-meter-label-item--neutral {
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
}

.gauge-meter--os .gauge-meter-label-item--neutral,
.gauge-meter--ma .gauge-meter-label-item--neutral {
  top: -15px;
}

.gauge-meter-label-item--buy {
  top: 5px;
  right: 7px;
}

.gauge-meter--os .gauge-meter-label-item--buy,
.gauge-meter--ma .gauge-meter-label-item--buy {
  top: 8px;
  right: 0px;
}

.gauge-meter-label-item--strong-buy {
  top: 45px;
  right: -42px;
}

.gauge-meter--os .gauge-meter-label-item--strong-buy,
.gauge-meter--ma .gauge-meter-label-item--strong-buy {
  top: 40px;
  right: -40px;
}

.gauge-meter-status-list {
  position: absolute;
  width: 100%;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 1300px) {
  .gauge-meter-status-list {
    bottom: -55px;
  }
}

@media screen and (max-width: 1023px) and (orientation: landscape) {
  .gauge-meter-status-list {
    display: none;
  }
}

@media screen and (max-width: 767px) {
  .gauge-meter-status-list {
    display: none;
  }
}

.gauge-meter-status-item {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
}

@media screen and (max-width: 1300px) {
  .gauge-meter-status-item {
    padding: 0 5px;
    font-size: 12px;
  }
}

.gauge-meter-status-value {
  color: #fff;
  text-align: center;
  font-weight: bold;
}

.gauge-meter-status-value--sell {
  color: #ef5450;
}

.gauge-meter-status-value--buy {
  color: #31baa0;
}

.gauge-meter-status-value--neutral {
  color: #d1d4dc;
}

.gauge-meter-status-text {
  color: #8383a1;
}

.gauge-meter-popover {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.gauge-meter--os .gauge-meter-popover,
.gauge-meter--ma .gauge-meter-popover {
  top: 23px;
}

@media screen and (max-width: 1300px) {
  .gauge-meter--os .gauge-meter-popover,
  .gauge-meter--ma .gauge-meter-popover {
    top: 10px;
  }
}

.keyboard.hiddenKey {
  visibility: hidden;
  transform: translate3d(0, 100%, 0);
}

.vs-button-primary.vs-button-border,
.vs-button-primary.vs-button-flat {
  border: 1px solid #4e4e4e;
  color: #fff;
}

.keyboard-input-wrap.active .numKeyboardInput {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.5);
}

.keyboard td {
  text-align: center;
  width: 25%;
  border: 1px solid #ddd;
}

.keyboard table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.keyboard {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  font-size: 0.48rem;
  line-height: 0.48rem;
  background: #f6f6f6;
  color: #4a4a4a;
  width: 100%;
  height: 4.4rem;
  user-select: none;
  visibility: visible;
  transform: translate3d(0, 0, 0);
  transition-property: transform visibility;
  transition-duration: 0.2s;
  font-weight: normal;
  border-top: 1px solid #e5e5e5;
}

.keyboard-input-wrap .keyboard {
  height: 460px;
  font-size: 1.2em;
  color: #fff;
  border: none;
}

.amountWrapper {
  height: 160px;
  background-color: #111;
}

.amountWrapper .headerAmount {
  padding: 1.25rem;
  background-color: #111;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.groupButtonMobile {
  margin: 1.25rem 0.5rem;
}

.keyboard-input-wrap .suggestion {
  background: #142c37;
  width: 100%;
  font-size: 1.2em;
  font-weight: normal;
}

.keyboard td:nth-of-type(-n + 3) {
  font-weight: normal;
}

.keyboard td:first-child {
  border-left: none;
}

.c-body {
  max-height: calc(100vh - 88px);
}

.c-desktop .item-col {
  padding: 0 0.2rem;
  border-radius: 10px;
}

.c-desktop .num1 {
  height: 100%;
}

.c-desktop .operator {
  font-size: 20px;
  font-weight: bold;
}

</style>

<style lang="scss">
@media screen and (min-width: 968px) {
  .gauge-meter-pane {
    svg {
      transform: translateY(-15px);
    }
  }
}

.content-noti {
  flex-direction: row-reverse;
}

.sidebarMobile .slidercontent .progress {
  .vs-progress--foreground {
    background: #3bb5a0 !important;
  }
}

.vs-button:disabled {
  background-color: #818a95 !important;
  opacity: 1 !important;
}

@media screen and (min-width: 768.98px) {
  #tradePage,
  .rightBar {
    height: calc(100vh - 77px);
    border-left: 1px solid #000;
  }
  .vs-navbar.navbar-skelton {
    /* border-bottom: 2px solid #000; */
  }
}

.vs-input-primary .vs-input--input:focus {
  border: 1px solid #4e4e4e !important;
}

.vs-input-primary.isFocus .vs-input--label,
.vs-input-primary .vs-input--input:focus ~ .icon-inputx,
.vs-input-primary .vs-input--input:focus ~ .vs-placeholder-label {
  color: #4e4e4e;
}

@media (max-width: 1024.98px) and (min-width: 576px) {
  table tbody .suggestion td {
    font-size: 20.16px;
  }
}

.keyboard-input-wrap .keyboard table tbody tr td {
  border-color: #060017;
  background: #262527;
}

.keyboard-input-wrap .keyboard table tbody tr.suggestion td {
  background-color: #4e4e4e;
}

#tradePage .chartBox {
  height: calc(100vh - 290px);
  overflow: hidden;
}

@media screen and (max-width: 450px) {
  #tradePage .chartBox {
    margin-top: 7px;
  }
}

@media screen and (max-width: 1300px) {
  #tradePage .chartBox {
    height: calc(100vh - 270px);
  }
}

@media screen and (max-width: 1200px) {
  #tradePage .chartBox {
    height: calc(100vh - 250px);
  }
}

@media screen and (max-width: 986px) and (orientation: portrait) {
  #tradePage .pc {
    display: none !important;
  }
  #tradePage .mobile {
    display: block !important;
  }
  #tradePage .chartBox {
    height: calc(100vh - 490px);
  }
}

@media (min-width: 600px) and (max-width: 986px) and (orientation: landscape) {
  .mobile.hidden {
    display: none !important;
  }
  .pc.block {
    display: block !important;
  }

  #tradePage {
    height: calc(100vh - 60px) !important;
  }

  #tradePage > .wrapper {
    flex-direction: row;
    display: flex;
    flex-wrap: nowrap !important;
    margin-top: -20px !important;
  }

  #right-content {
    height: 100vh !important;
    flex: 0 0 125px !important;
    max-width: 125px !important;
  }

  #left-content > .h-full {
    height: unset !important;
  }

  #tradePage .chartBox {
    height: calc(var(--vh, 1vh) * 100 - 199px);
    min-height: unset;
  }

  .historyBox {
    .badgeItem {
      font-size: 12px;
    }

    .item {
      width: 1.1rem !important;
      height: 1.1rem !important;
    }
  }

  .vs-tabs--li > button {
    font-size: 12px;
    padding: 5px 10px;
  }

  .titleChartCandle {
    top: 0 !important;
  }

  .sidebarMobile,
  .m_hide {
    display: none !important;
  }

  .m_full_w {
    width: 100% !important;
  }

  .no-margin-m {
    margin: 0 !important;
  }

  .btn_dat_cuoc {
    height: 30px !important;
  }

  .btn-trade-time {
    height: 30px !important;

    & > div {
      font-size: 11px !important;
    }
  }

  .font-11-mobile {
    font-size: 11px !important;
  }
}

@media screen and (min-width: 426px) and (max-width: 769px) {
  #tradePage .chartBox {
    height: calc(var(--vh, 1vh) * 100 - 376px);
  }
  .c-loinhuan {
    margin-bottom: 0.5rem !important;
    margin-top: 2.25rem !important;
  }
}

@media screen and (max-width: 1000px) and (orientation: portrait) {
  #tradePage .chartBox {
    height: calc(var(--vh, 1vh) * 100 - 396px);
  }
}

@media screen and (max-width: 1100px) and (min-width: 968px) {
  #tradePage .chartBox {
    height: calc(var(--vh, 1vh) * 100 - 246px);
  }
  .analysis-wrapper {
    height: 10rem !important;
  }
}

@media screen and (max-width: 400px) {
  .navbar-floating .router-content {
    margin-top: 30px;
  }
  #tradePage .chartBox {
    height: calc(var(--vh, 1vh) * 100 - 418px);
  }
  /* #tradePage .chartBox {
        height: calc(100vh - 480px);
    } */
  body {
    overflow-x: hidden;
    overflow-y: auto;
  }
  /*#tradePage{
        padding-top: 75px !important;
    }*/
}

@media screen and (max-width: 767px) {
  .navbar-floating .router-content {
    margin-top: 30px;
  }
  #tradePage .chartBox {
    height: calc(var(--vh, 1vh) * 100 - 320px);
    min-height: unset;
  }
}

/* @media screen and (max-width: 575px){
    #tradePage .chartBox {
        height: calc(100vh - 490px);
    }
}
@media screen and (max-width: 540px){
    #tradePage .chartBox {
        height: calc(100vh - 490px);
    }
}
@media screen and (max-width: 460px){
    #tradePage .chartBox {
        height: calc(100vh - 490px);
    }
}
@media screen and (max-width: 420px){
    #tradePage .chartBox {
        height: calc(100vh - 490px);
    }
} */

.bpF {
  border-radius: 5px;
  display: inline-block;
  background-color: #1d233b;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.color-light-blue {
  color: #00cebe !important;
}

.color-green {
  color: #3bb5a0 !important;
}

.color-red {
  color: #fa5f65 !important;
}

.bg-green {
  background: #3bb5a0 !important;
}

.bg-red {
  background: #fa5f65 !important;
}

.empty {
  background: #637284;
}

.minutes-set {
  float: left;
  margin-right: 28px;
}

.betInput input {
  background: #fff !important;
  color: #1d233b;
  border: none !important;
}

.seconds-set {
  float: right;
}

.controlls {
  position: absolute;
  text-align: center;
  left: 40%;
  top: 40%;
  margin-left: -17px;
  width: 45px;
  margin-top: -5px;
}

.display-remain-time {
  font-size: 14px;
  color: #82868b;
  /*position: relative;top: 14px;*/
}

.w-18 {
  max-width: 160px !important;
}

.e-c-base {
  fill: none;
  stroke: #b6b6b6;
  stroke-width: 12px;
}

.red .e-c-progress {
  fill: none;
  stroke: #ff0000;
  stroke-width: 12px;
  transition: stroke-dashoffset 0.7s;
}

.green .e-c-progress {
  fill: none;
  stroke: #31baa0;
  stroke-width: 12px;
  transition: stroke-dashoffset 0.7s;
}

.red .e-c-progress {
  fill: none;
  stroke: #ff0000;
  stroke-width: 10px;
  transition: stroke-dashoffset 0.7s;
}

.red .e-c-pointer {
  fill: #fff;
  stroke: #ff0000;
  stroke-width: 10px;
}

.green .e-c-progress {
  fill: none;
  stroke: #31baa0;
  stroke-width: 10px;
  transition: stroke-dashoffset 0.7s;
}

.green .e-c-pointer {
  fill: #fff;
  stroke: #31baa0;
  stroke-width: 10px;
}

#e-pointer {
  transition: transform 0.7s;
}

.hide-sm {
  display: none !important;
}

.hide-xs {
  display: block;
}

.box-btn-buy-sell {
  position: relative;
}

.box-btn-buy-sell .col-2 {
  position: static;
}

.circle {
  position: relative;
  left: 0px;
  height: 45px;
  /*top: 10px;*/
}

.plotlineChart .price {
  display: inline-block;
  background-color: #F1DD48;
  margin-bottom: 2px;
  padding: 2px 5px;
}

.plotlineChart .time {
  display: inline-block;
  background-color: #F1DD48;
  padding: 2px 5px;
}

/* Custom color manko */
.plotlineChart span {
  background-color: #F1DD48 !important;
  color: #fff !important;
  display: inline-block;
  margin-top: 2px;
  padding: 2px;
  border-radius: 2px !important;
}

.c-desktop .profitPercent span {
  /* color: #31baa0 !important; */
  /* font-size: 20px; */
}

.c-desktop .profitPercent {
  /* color: #fff !important; */
}

.c-desktop .profitValue {
  color: #31baa0 !important;
  font-weight: 700 !important;
  font-size: 1.875rem !important;
}

.c-desktop .btn-trade-time {
  height: 37px;
  color: #fff;
  font-weight: 700;
}

.c-desktop .bet-box-time {
  background-color: rgb(29, 35, 59);
}

.c-desktop .inp {
  width: 100% !important;
  background-color: #fff !important;
  font-weight: bold;
  border-radius: 5px;

  input[type="text"] {
    text-align: left;
    color: rgb(23, 27, 44);
  }

  i {
    color: #000 !important;
  }
}

.trans > .highcharts-container {
  transition: 0.4s all;
  width: 100% !important;
}

.highcharts-container {
  width: 100% !important;
}

.highcharts-root {
  width: 100% !important;
}

.vs-tabs--content {
  padding: 5px 0 0 !important;
}
</style>

<style lang="scss">
.vs-notifications.vs-noti-order_success, .vs-notifications.vs-noti-order_fail {
  background: #011022;
  border: 1px solid #022f65;
  margin-right: 20px;
  padding: 10px;
  margin-top: 80px;
  top: 10px;

  .content-noti {
    .con-text-noti {
      h3 {
        display: none;
      }

      p {
        margin-left: 10px;
      }
    }

    .vs-icon-noti {
      // background: #31baa0;
      border-radius: 100%;

      &::before {
        font-size: 25px;
      }
    }
  }
}

.vs-notifications.vs-noti-order_success .content-noti .vs-icon-noti {
  background: #31baa0;
}

.vs-notifications.vs-noti-order_fail .content-noti .vs-icon-noti {
  background: #FC5454;
}
</style>
