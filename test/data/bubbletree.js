/**
 * Created by larjo on 20/12/2016.
 */
module.exports.html = `<html><head><style type="text/css">@charset "UTF-8";[ng\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>
  <meta charset="utf-8">
  <base href="/viewer/">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="description" content="A frontend data/views app powered directly from a Fiscal Data Package.">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>OS Viewer | OpenSpending | Open Knowledge International</title>
  <link href="//fonts.googleapis.com/css?family=Hind:400,300,500,600,700" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="styles/vendor.css?14815347048874069">
  <link rel="stylesheet" href="styles/embedded.css">
</head>
<body ng-controller="MainController" ng-init="isEmbedded=true; disablePackageSelector=true" class="ng-scope" cz-shortcut-listen="true">
  

<!-- ngIf: !isLoading.application && !isLoading.package --><div ng-if="!isLoading.application &amp;&amp; !isLoading.package" class="ng-scope">
  <div ng-switch="state.params.visualizations[0]" class="row">
    <!-- ngSwitchWhen: Treemap -->
    <!-- ngSwitchWhen: PieChart -->
    <!-- ngSwitchWhen: BarChart -->
    <!-- ngSwitchWhen: LineChart -->
    <!-- ngSwitchWhen: Table -->
    <!-- ngSwitchWhen: BubbleTree --><bubble-tree-visualization ng-switch-when="BubbleTree" params="state.params" class="ng-scope ng-isolate-scope"><div class="col-xs-12">
  <ol class="breadcrumb ng-isolate-scope" breadcrumbs="params.breadcrumbs">
  <!-- ngRepeat: breadcrumb in breadcrumbs --><li ng-repeat="breadcrumb in breadcrumbs" class="ng-scope">
    <!-- ngIf: $last --><span ng-if="$last" class="ng-binding ng-scope">Budget Line Id</span><!-- end ngIf: $last -->
    <!-- ngIf: !$last -->
  </li><!-- end ngRepeat: breadcrumb in breadcrumbs -->
</ol>
</div>
<div class="x-visualization-chart col-xs-12">
  <!-- ngIf: isVisible --><bubbletree ng-if="isVisible" downloader="downloader" cube="66c9cdc19a58be697d79fa5032da2c58:sturahd16" state="state" format-value="formatValue" endpoint="http://next.openspending.org/api/3" class="ng-scope ng-isolate-scope"><div class="alert alert-info ng-hide" ng-hide="!status.isLoading">
  <i class="babbage-loading-icon"></i><strong>Loading data.</strong> Please wait...
</div>

<div class="alert alert-warning ng-hide" ng-show="status.isEmpty">
  <strong>No data to display.</strong>
</div>

<div class="alert alert-warning ng-binding ng-hide" ng-show="status.isCutOff">
  <strong>Too many categories.</strong> The breakdown you have selected contains many
  different categories, only the  biggest are shown.
</div>

<div style="width: 100%; padding-top: 60%; position: relative">
  <div class="bubbletree" style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%"><svg height="1089" version="1.1" width="1815" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="overflow: hidden; position: relative;"><circle cx="907.5" cy="544.5" r="404.5653559219762" fill="none" stroke="#888888" stroke-dasharray="3,1" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></circle><desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.2.0</desc><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs><circle cx="907.5" cy="544.5" r="264.63071186693975" fill="#f2b80c" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="260.63071186693975" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0.9;" stroke-opacity="0.9"></circle><circle cx="1280.0022527761603" cy="386.6545094436941" r="119.9346440550365" fill="#cb3232" stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></circle><circle cx="907.5" cy="544.5" r="116.9346440550365" fill="none" stroke="#ffffff" stroke-dasharray="4,3" stroke-opacity="0" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;"></circle><circle cx="1169.6085894039038" cy="236.32437706241097" r="19.267666618319808" fill="#cb5032" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="16.267666618319808" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="1075.5356427849847" cy="176.4821336319223" r="63.46088838115814" fill="#cb6f32" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="60.46088838115814" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="967.7661663520261" cy="144.44860779456695" r="19.966700889496394" fill="#cb8e32" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="16.966700889496394" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="886.446468100912" cy="140.48282708918254" r="40.354340468830884" fill="#cbad32" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="37.354340468830884" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="804.6441770233756" cy="153.2279630588501" r="20.987400458594955" fill="#cbcb32" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="17.987400458594955" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="728.7756485235498" cy="181.55271264053016" r="39.01185816394985" fill="#adcb32" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="36.01185816394985" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="659.6975314348502" cy="224.70778029274499" r="21.334404222621714" fill="#8ecb32" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="18.334404222621714" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="602.8613149135724" cy="278.28880797177646" r="36.52967863058678" fill="#6fcb32" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="33.52967863058678" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="557.1534970239272" cy="342.1872345483066" r="21.67084489173048" fill="#50cb32" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="18.67084489173048" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="524.7564685419804" cy="413.4255313216214" r="36.30339852230573" fill="#32cb32" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="33.30339852230573" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="506.61320882387577" cy="490.0674006427596" r="22.04328109802376" fill="#32cb50" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="19.04328109802376" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="503.4087004555535" cy="564.0792963294331" r="32.82716625034565" fill="#32cb6f" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="29.82716625034565" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="513.7785884556583" cy="637.5407292738315" r="22.12386990453537" fill="#32cb8e" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="19.12386990453537" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="537.3888210147295" cy="707.8733221869728" r="32.82716625034565" fill="#32cbad" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="29.82716625034565" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="573.541993306435" cy="772.8531847326332" r="22.250463288267458" fill="#32cbcb" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="19.250463288267458" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="618.3807596306926" cy="827.489738436838" r="30.09418729700126" fill="#32adcb" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="27.09418729700126" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="672.4124822149109" cy="873.7521620185973" r="22.585403844891854" fill="#328ecb" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="19.585403844891854" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="732.8955771082774" cy="909.447150583374" r="29.425553922195306" fill="#326fcb" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="26.425553922195306" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="798.7441034037131" cy="934.1733018411873" r="22.66502103931113" fill="#3250cb" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="19.66502103931113" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="867.3071802540403" cy="947.063863819325" r="28.99976893833671" fill="#3232cb" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="25.99976893833671" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="941.2076991763694" cy="947.6586762411429" r="25.738227730640972" fill="#5032cb" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="22.738227730640972" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="1013.6733246523074" cy="934.8848771975562" r="28.762052831835895" fill="#6f32cb" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="25.762052831835895" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="1082.6266523684462" cy="909.1968368967528" r="25.738227730640972" fill="#8e32cb" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="22.738227730640972" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="1142.9563793045975" cy="873.4884810400584" r="26.179753995852945" fill="#ad32cb" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="23.179753995852945" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="1196.2158422716209" cy="827.9012872830042" r="25.738227730640972" fill="#cb32cb" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="22.738227730640972" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="1240.6949339373086" cy="773.9651677505497" r="26.035166833905837" fill="#cb32ad" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="23.035166833905837" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="1275.2243871784563" cy="713.1769168751433" r="25.738227730640972" fill="#cb328e" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="22.738227730640972" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="1298.6708514339955" cy="647.7399738506278" r="25.738227730640972" fill="#cb326f" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="22.738227730640972" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle><circle cx="1310.5697143952336" cy="579.2553240471162" r="25.738227730640972" fill="#cb3250" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;" fill-opacity="1"></circle><circle cx="907.5" cy="544.5" r="22.738227730640972" fill="none" stroke="#ffffff" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0;" stroke-opacity="0"></circle></svg><div class="bubbletree-label undefined current" style="cursor: pointer; width: 529.261px; opacity: 1; left: 642.869px; top: 525.5px;"><div class="bubbletree-amount">€486.15 Thousands</div><div class="bubbletree-desc">Total</div></div><div class="bubbletree-label2 undefined current" style="display: none; width: 793.892px; opacity: 1; left: 510.554px; top: 809.131px;"><span>Total</span></div><div class="bubbletree-label undefined current" style="width: 239.869px; opacity: 1; left: 1160.07px; top: 367.655px;"><div class="bubbletree-amount">€130.0 Thousands</div><div class="bubbletree-desc">401</div></div><div class="bubbletree-label2 undefined current" style="display: none; width: 359.804px; opacity: 1; left: 1100.1px; top: 506.589px;"><span>401</span></div><div class="bubbletree-label undefined current" style="display: none; width: 38.5353px; opacity: 1; left: 1150.34px; top: 205.824px;"><div class="bubbletree-amount">€6.17 Thousands</div><div class="bubbletree-desc">493934</div></div><div class="bubbletree-label2 undefined current" style="width: 70px; opacity: 1; left: 1134.61px; top: 255.592px;"><span>493934</span></div><div class="bubbletree-label undefined current" style="width: 126.922px; opacity: 1; left: 1012.07px; top: 157.482px;"><div class="bubbletree-amount">€45.0 Thousands</div><div class="bubbletree-desc">4200</div></div><div class="bubbletree-label2 undefined current" style="display: none; width: 190.383px; opacity: 1; left: 980.344px; top: 239.943px;"><span>4200</span></div><div class="bubbletree-label undefined current" style="display: none; width: 39.9334px; opacity: 1; left: 947.799px; top: 113.949px;"><div class="bubbletree-amount">€6.55 Thousands</div><div class="bubbletree-desc">493943</div></div><div class="bubbletree-label2 undefined current" style="width: 70px; opacity: 1; left: 932.766px; top: 164.415px;"><span>493943</span></div><div class="bubbletree-label undefined current" style="width: 80.7087px; opacity: 1; left: 846.092px; top: 109.983px;"><div class="bubbletree-amount">€21.16 Thousands</div><div class="bubbletree-desc">493925</div></div><div class="bubbletree-label2 undefined current" style="display: none; width: 121.063px; opacity: 1; left: 825.915px; top: 180.837px;"><span>493925</span></div><div class="bubbletree-label undefined current" style="width: 41.9748px; opacity: 1; left: 783.657px; top: 130.728px;"><div class="bubbletree-amount">€7.12 Thousands</div><div class="bubbletree-desc" style="display: none;">493910</div></div><div class="bubbletree-label2 undefined current" style="width: 70px; opacity: 1; left: 769.644px; top: 174.215px;"><span>493910</span></div><div class="bubbletree-label undefined current" style="width: 78.0237px; opacity: 1; left: 689.764px; top: 159.053px;"><div class="bubbletree-amount">€20.0 Thousands</div><div class="bubbletree-desc" style="display: none;">4203</div></div><div class="bubbletree-label2 undefined current" style="width: 117.036px; opacity: 1; left: 670.258px; top: 220.565px;"><span>4203</span></div><div class="bubbletree-label undefined current" style="width: 42.6688px; opacity: 1; left: 638.363px; top: 202.208px;"><div class="bubbletree-amount">€7.31 Thousands</div><div class="bubbletree-desc" style="display: none;">493946</div></div><div class="bubbletree-label2 undefined current" style="width: 70px; opacity: 1; left: 624.698px; top: 246.042px;"><span>493946</span></div><div class="bubbletree-label undefined current" style="width: 73.0594px; opacity: 1; left: 566.332px; top: 255.789px;"><div class="bubbletree-amount">€17.92 Thousands</div><div class="bubbletree-desc" style="display: none;">493917</div></div><div class="bubbletree-label2 undefined current" style="width: 109.589px; opacity: 1; left: 548.067px; top: 314.818px;"><span>493917</span></div><div class="bubbletree-label undefined current" style="width: 43.3417px; opacity: 1; left: 535.483px; top: 319.687px;"><div class="bubbletree-amount">€7.51 Thousands</div><div class="bubbletree-desc" style="display: none;">493913</div></div><div class="bubbletree-label2 undefined current" style="width: 70px; opacity: 1; left: 522.153px; top: 363.858px;"><span>493913</span></div><div class="bubbletree-label undefined current" style="width: 72.6068px; opacity: 1; left: 488.453px; top: 390.926px;"><div class="bubbletree-amount">€17.74 Thousands</div><div class="bubbletree-desc" style="display: none;">493920</div></div><div class="bubbletree-label2 undefined current" style="width: 108.91px; opacity: 1; left: 470.301px; top: 449.729px;"><span>493920</span></div><div class="bubbletree-label undefined current" style="width: 44.0866px; opacity: 1; left: 484.57px; top: 467.567px;"><div class="bubbletree-amount">€7.72 Thousands</div><div class="bubbletree-desc" style="display: none;">493939</div></div><div class="bubbletree-label2 undefined current" style="width: 70px; opacity: 1; left: 471.613px; top: 512.111px;"><span>493939</span></div><div class="bubbletree-label undefined current" style="width: 65.6543px; opacity: 1; left: 470.582px; top: 541.579px;"><div class="bubbletree-amount">€15.0 Thousands</div><div class="bubbletree-desc" style="display: none;">491</div></div><div class="bubbletree-label2 undefined current" style="width: 98.4815px; opacity: 1; left: 454.168px; top: 596.906px;"><span>491</span></div><div class="bubbletree-label undefined current" style="width: 44.2477px; opacity: 1; left: 491.655px; top: 615.041px;"><div class="bubbletree-amount">€7.77 Thousands</div><div class="bubbletree-desc" style="display: none;">493904</div></div><div class="bubbletree-label2 undefined current" style="width: 70px; opacity: 1; left: 478.779px; top: 659.665px;"><span>493904</span></div><div class="bubbletree-label undefined current" style="width: 65.6543px; opacity: 1; left: 504.562px; top: 685.373px;"><div class="bubbletree-amount">€15.0 Thousands</div><div class="bubbletree-desc" style="display: none;">402</div></div><div class="bubbletree-label2 undefined current" style="width: 98.4815px; opacity: 1; left: 488.148px; top: 740.7px;"><span>402</span></div><div class="bubbletree-label undefined current" style="width: 44.5009px; opacity: 1; left: 551.292px; top: 750.353px;"><div class="bubbletree-amount">€7.85 Thousands</div><div class="bubbletree-desc" style="display: none;">493908</div></div><div class="bubbletree-label2 undefined current" style="width: 70px; opacity: 1; left: 538.542px; top: 795.104px;"><span>493908</span></div><div class="bubbletree-label undefined current" style="width: 60.1884px; opacity: 1; left: 588.287px; top: 804.99px;"><div class="bubbletree-amount">€12.98 Thousands</div><div class="bubbletree-desc" style="display: none;">493926</div></div><div class="bubbletree-label2 undefined current" style="width: 90.2826px; opacity: 1; left: 573.239px; top: 857.584px;"><span>493926</span></div><div class="bubbletree-label undefined current" style="width: 45.1708px; opacity: 1; left: 649.827px; top: 851.252px;"><div class="bubbletree-amount">€8.04 Thousands</div><div class="bubbletree-desc" style="display: none;">493950</div></div><div class="bubbletree-label2 undefined current" style="width: 70px; opacity: 1; left: 637.412px; top: 896.338px;"><span>493950</span></div><div class="bubbletree-label undefined current" style="width: 58.8511px; opacity: 1; left: 703.47px; top: 886.947px;"><div class="bubbletree-amount">€12.5 Thousands</div><div class="bubbletree-desc" style="display: none;">4140</div></div><div class="bubbletree-label2 undefined current" style="width: 88.2767px; opacity: 1; left: 688.757px; top: 938.873px;"><span>4140</span></div><div class="bubbletree-label undefined current" style="width: 45.33px; opacity: 1; left: 776.079px; top: 911.673px;"><div class="bubbletree-amount">€8.09 Thousands</div><div class="bubbletree-desc" style="display: none;">493935</div></div><div class="bubbletree-label2 undefined current" style="width: 70px; opacity: 1; left: 763.744px; top: 956.838px;"><span>493935</span></div><div class="bubbletree-label undefined current" style="width: 57.9995px; opacity: 1; left: 838.307px; top: 924.564px;"><div class="bubbletree-amount">€12.2 Thousands</div><div class="bubbletree-desc" style="display: none;">45</div></div><div class="bubbletree-label2 undefined current" style="width: 86.9993px; opacity: 1; left: 823.808px; top: 976.064px;"><span>45</span></div><div class="bubbletree-label undefined current" style="width: 51.4765px; opacity: 1; left: 915.469px; top: 925.159px;"><div class="bubbletree-amount">€10.0 Thousands</div><div class="bubbletree-desc" style="display: none;">4130</div></div><div class="bubbletree-label2 undefined current" style="width: 77.2147px; opacity: 1; left: 902.6px; top: 973.397px;"><span>4130</span></div><div class="bubbletree-label undefined current" style="width: 57.5241px; opacity: 1; left: 984.911px; top: 912.385px;"><div class="bubbletree-amount">€12.03 Thousands</div><div class="bubbletree-desc" style="display: none;">493906</div></div><div class="bubbletree-label2 undefined current" style="width: 86.2862px; opacity: 1; left: 970.53px; top: 963.647px;"><span>493906</span></div><div class="bubbletree-label undefined current" style="width: 51.4765px; opacity: 1; left: 1056.89px; top: 886.697px;"><div class="bubbletree-amount">€10.0 Thousands</div><div class="bubbletree-desc" style="display: none;">49241</div></div><div class="bubbletree-label2 undefined current" style="width: 77.2147px; opacity: 1; left: 1044.02px; top: 934.935px;"><span>49241</span></div><div class="bubbletree-label undefined current" style="width: 52.3595px; opacity: 1; left: 1116.78px; top: 850.988px;"><div class="bubbletree-amount">€10.29 Thousands</div><div class="bubbletree-desc" style="display: none;">493915</div></div><div class="bubbletree-label2 undefined current" style="width: 78.5393px; opacity: 1; left: 1103.69px; top: 899.668px;"><span>493915</span></div><div class="bubbletree-label undefined current" style="width: 51.4765px; opacity: 1; left: 1170.48px; top: 805.401px;"><div class="bubbletree-amount">€10.0 Thousands</div><div class="bubbletree-desc" style="display: none;">49244</div></div><div class="bubbletree-label2 undefined current" style="width: 77.2147px; opacity: 1; left: 1157.61px; top: 853.64px;"><span>49244</span></div><div class="bubbletree-label undefined current" style="width: 52.0703px; opacity: 1; left: 1214.66px; top: 751.465px;"><div class="bubbletree-amount">€10.19 Thousands</div><div class="bubbletree-desc" style="display: none;">493916</div></div><div class="bubbletree-label2 undefined current" style="width: 78.1055px; opacity: 1; left: 1201.64px; top: 800px;"><span>493916</span></div><div class="bubbletree-label undefined current" style="width: 51.4765px; opacity: 1; left: 1249.49px; top: 690.677px;"><div class="bubbletree-amount">€10.0 Thousands</div><div class="bubbletree-desc" style="display: none;">49242</div></div><div class="bubbletree-label2 undefined current" style="width: 77.2147px; opacity: 1; left: 1236.62px; top: 738.915px;"><span>49242</span></div><div class="bubbletree-label undefined current" style="width: 51.4765px; opacity: 1; left: 1272.93px; top: 625.24px;"><div class="bubbletree-amount">€10.0 Thousands</div><div class="bubbletree-desc" style="display: none;">49243</div></div><div class="bubbletree-label2 undefined current" style="width: 77.2147px; opacity: 1; left: 1260.06px; top: 673.478px;"><span>49243</span></div><div class="bubbletree-label undefined current" style="width: 51.4765px; opacity: 1; left: 1284.83px; top: 556.755px;"><div class="bubbletree-amount">€10.0 Thousands</div><div class="bubbletree-desc" style="display: none;">4120</div></div><div class="bubbletree-label2 undefined current" style="width: 77.2147px; opacity: 1; left: 1271.96px; top: 604.994px;"><span>4120</span></div></div>
</div>

</bubbletree><!-- end ngIf: isVisible -->
</div></bubble-tree-visualization><!-- end ngSwitchWhen: -->
    <!-- ngSwitchWhen: Map -->
    <!-- ngSwitchWhen: PivotTable -->
    <!-- ngSwitchWhen: Sankey -->
    <!-- ngSwitchWhen: Radar -->
  </div>
</div><!-- end ngIf: !isLoading.application && !isLoading.package -->

<script>
window._babbage_results_aggregate  = {
	"cells": [
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "401",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "401"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": -56979.89
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 130000
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "4200",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "4200"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": -40635.37
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 45000
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "493925",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "493925"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": -567.82
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 21160.18
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "4203",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "4203"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": 0
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 20000
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "493917",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "493917"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": -159.64
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 17924.43
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "493920",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "493920"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": -94.8
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 17739.76
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "491",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "491"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": 0
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 15000
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "402",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "402"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": -13830.53
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 15000
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "493926",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "493926"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": -1660.61
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 12976.97
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "4140",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "4140"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": -1480.57
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 12500
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "45",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "45"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": -6260.15
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 12200
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "493906",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "493906"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": -1726.61
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 12033.78
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "493915",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "493915"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": -1025.61
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 10287.54
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "493916",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "493916"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": -2770.95
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 10193.02
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "4120",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "4120"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": -237.61
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 10000
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "4130",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "4130"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": -3210.75
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 10000
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "49243",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "49243"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": 0
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 10000
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "49242",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "49242"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": -1676.25
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 10000
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "49244",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "49244"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": 0
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 10000
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "49241",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "49241"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": 0
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 10000
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "493935",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "493935"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": 0
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 8090.26
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "493950",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "493950"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": -4410.16
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 8042.95
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "493908",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "493908"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": -932.47
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 7845.14
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "493904",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "493904"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": -345.4
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 7770.89
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "493939",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "493939"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": -1918.93
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 7723.77
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "493913",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "493913"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": -886.03
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 7507.5
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "493946",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "493946"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": -5416.54
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 7314.25
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "493910",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "493910"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": -791.14
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 7117.05
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "493943",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "493943"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": -1433.2
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 6549.57
				}
			]
		},
		{
			"dimensions": [
				{
					"keyField": "budget_line_id_2.account_id",
					"keyValue": "493934",
					"nameField": "budget_line_id_2.account_id",
					"nameValue": "493934"
				}
			],
			"measures": [
				{
					"key": "Verausgabt.sum",
					"name": "Verausgabt",
					"value": -1156.83
				},
				{
					"key": "Plan.sum",
					"name": "Plan",
					"value": 6171.88
				}
			]
		}
	],
	"count": 89,
	"currency": {
		"Plan.sum": "EUR",
		"Verausgabt.sum": "EUR"
	},
	"summary": {
		"Plan.sum": 704843.13,
		"Verausgabt.sum": -204608.77
	}
};

</script>


</body></html>`;