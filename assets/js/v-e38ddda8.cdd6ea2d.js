"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[57779],{20419:(e,a,t)=>{t.r(a),t.d(a,{data:()=>o});const o={key:"v-e38ddda8",path:"/guide/usage/ota_updates.html",title:"OTA updates",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Automatic checking for available updates",slug:"automatic-checking-for-available-updates",children:[]},{level:2,title:"Manually check if an update is available",slug:"manually-check-if-an-update-is-available",children:[]},{level:2,title:"Update to latest firmware",slug:"update-to-latest-firmware",children:[]},{level:2,title:"Using the IKEA TRADFRI test server",slug:"using-the-ikea-tradfri-test-server",children:[]},{level:2,title:"Troubleshooting",slug:"troubleshooting",children:[]}],filePathRelative:"guide/usage/ota_updates.md",git:{updatedTime:164376647e4}}},14679:(e,a,t)=>{t.r(a),t.d(a,{default:()=>u});var o=t(66252);const i=(0,o._)("h1",{id:"ota-updates",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,o.Uk)(" OTA updates")],-1),s=(0,o.Uk)("An ongoing discussion about this feature can be found in "),n={href:"https://github.com/Koenkk/zigbee2mqtt/issues/2921",target:"_blank",rel:"noopener noreferrer"},l=(0,o.Uk)("#2921"),d=(0,o.uE)('<p>This feature allows to update your Zigbee devices over-the-air.</p><p>Not all manufacturers make their updates available, below is a (not-complete) list of manufacturer/devices that support it:</p><ul><li>IKEA TRÅDFRI devices</li><li>Ubisys devices</li><li>Some Xiaomi devices</li><li>Salus SP600 Smart plug</li><li>Osram/Ledvance devices (not every firmware is made available by them, in case not you will see the following exception in the log <code>No image available for ...</code>)</li><li>Philips Hue devices (not every firmware is made available by them, in case not you will see the following exception in the log <code>No image available for ...</code>)</li><li>Jung ZLLxx5004M, Jung ZLLHS4 and Gira 2435-10 Gira does unfortunately not seem to offer firmware updates for their wall transmitter 2430-100 (which is very similar to the Jung ZLLxx5004M) and the update file for the Jung wall transmitter does not work for Gira (probably because the Gira wall transmitter only has 6 buttons instead of 8 on the Jung).</li><li>Sengled devices</li></ul><p>To check wether your specific device supports OTA updates via Zigbee2MQTT, go to the supported devices page, click on your device and look for the <em>OTA updates</em> section.</p><h2 id="automatic-checking-for-available-updates" tabindex="-1"><a class="header-anchor" href="#automatic-checking-for-available-updates" aria-hidden="true">#</a> Automatic checking for available updates</h2><p>Your zigbee devices can request a firmware update check. Zigbee2MQTT obliges this, and will automatically check if updates are available for your devices.</p><p>The update state will be published to <code>zigbee2mqtt/[DEVICE_FRIENDLY_NAME]</code>, example payload: <code>{&quot;update&quot;: {&quot;state&quot;: &quot;available&quot;}}</code>. The possible states are:</p><ul><li><code>available</code>: an update is available for this device</li><li><code>updating</code>: update is in progress. During this the progress in % and remaining time in seconds is also added to the payload, example: <code>{&quot;update&quot;: {&quot;state&quot;: &quot;updating&quot;,&quot;progress&quot;:13.37,&quot;remaining&quot;: 219}}</code>.</li><li><code>idle</code>: no update available/in progress</li></ul><p>To protect privacy it is possible to limit how often third party servers may be contacted. You can set the minimum time that should pass between two firmware update checks, in minutes. The default is 1440 minutes (1 day). Here it is set to check at most every two days:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">ota</span><span class="token punctuation">:</span>\n    <span class="token key atrule">update_check_interval</span><span class="token punctuation">:</span> <span class="token number">2880</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>It is also possible to completely ignore these device-initiated requests for updates checks by modifying the configuration.yaml file. In the example below, only manual firmware update checks will be possible:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">ota</span><span class="token punctuation">:</span>\n    <span class="token key atrule">disable_automatic_update_check</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><em>NOTE: there is also a property <code>update_available</code> which is deprecated</em>.</p><h2 id="manually-check-if-an-update-is-available" tabindex="-1"><a class="header-anchor" href="#manually-check-if-an-update-is-available" aria-hidden="true">#</a> Manually check if an update is available</h2><p>To check if an update is available for your device send a message to <code>zigbee2mqtt/bridge/request/device/ota_update/check</code> with payload <code>{&quot;id&quot;: &quot;deviceID&quot;}</code> or <code>deviceID</code> where deviceID can be the <code>ieee_address</code> or <code>friendly_name</code> of the device. Example; request: <code>{&quot;id&quot;: &quot;my_remote&quot;}</code> or <code>my_remote</code>, response: <code>{&quot;data&quot;:{&quot;id&quot;: &quot;my_remote&quot;,&quot;updateAvailable&quot;:true},&quot;status&quot;:&quot;ok&quot;}</code>.</p><h2 id="update-to-latest-firmware" tabindex="-1"><a class="header-anchor" href="#update-to-latest-firmware" aria-hidden="true">#</a> Update to latest firmware</h2><p>Once an update is available you can update it by sending to <code>zigbee2mqtt/bridge/request/device/ota_update/update</code> with payload <code>{&quot;id&quot;: &quot;deviceID&quot;}</code> or <code>deviceID</code> where deviceID can be the <code>ieee_address</code> or <code>friendly_name</code> of the device, example request: <code>{&quot;id&quot;: &quot;my_remote&quot;}</code> or <code>my_remote</code>. Once the update is completed a response is send, example response: <code>{&quot;data&quot;:{&quot;id&quot;: &quot;my_remote&quot;,&quot;from&quot;:{&quot;software_build_id&quot;:1,&quot;date_code&quot;:&quot;20190101&quot;},&quot;to&quot;:{&quot;software_build_id&quot;:2,&quot;date_code&quot;:&quot;20190102&quot;}},&quot;status&quot;:&quot;ok&quot;}</code>.</p><p>An update typically takes +- 10 minutes. While a device is updating a lot of traffic is generated on the network, therefore it is not recommend to execute multiple updates at the same time.</p><h2 id="using-the-ikea-tradfri-test-server" tabindex="-1"><a class="header-anchor" href="#using-the-ikea-tradfri-test-server" aria-hidden="true">#</a> Using the IKEA TRADFRI test server</h2><p>If IKEA TRADFRI devices are rejecting OTA updates, it is possible the OTA server is providing a corrupt file. The firmwares published on the IKEA <strong>test</strong> server can be used. In most cases, this is not needed and will result in slower / no OTA updates as the test server is not kept up to date. You can instruct Zigbee2MQTT to use the test server by adding the following to your <code>configuration.yaml</code>.</p><p><strong>WARNING: Use at your own risk!</strong></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n  <span class="token key atrule">ikea_ota_use_test_url</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h2><ul><li><code>Device didn&#39;t respond to OTA request</code> or <code>Update failed with reason: &#39;aborted by device&#39;</code>: try restarting the device by disconnecting the power/battery for a few seconds and try again.</li><li>For battery powered devices make sure that the battery is 70%+ as OTA updating is very power consuming.</li></ul>',24),r={},u=(0,t(83744).Z)(r,[["render",function(e,a){const t=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[i,(0,o._)("blockquote",null,[(0,o._)("p",null,[s,(0,o._)("a",n,[l,(0,o.Wm)(t)])])]),d],64)}]])},83744:(e,a)=>{a.Z=(e,a)=>{for(const[t,o]of a)e[t]=o;return e}}}]);