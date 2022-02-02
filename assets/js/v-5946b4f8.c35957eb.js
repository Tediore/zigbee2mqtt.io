"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[71111],{32716:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-5946b4f8",path:"/devices/HLU2909K.html",title:"Datek HLU2909K control via MQTT",lang:"en-US",frontmatter:{title:"Datek HLU2909K control via MQTT",description:"Integrate your Datek HLU2909K via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-12-17T17:48:41.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Protection",slug:"protection",children:[]},{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Specs",slug:"specs",children:[]},{level:3,title:"Manual",slug:"manual",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Power (numeric)",slug:"power-numeric",children:[]},{level:3,title:"Current (numeric)",slug:"current-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/HLU2909K.md",git:{updatedTime:164376647e4}}},28682:(e,t,i)=>{i.r(t),i.d(t,{default:()=>u});var a=i(66252);const r=(0,a.uE)('<h1 id="datek-hlu2909k" tabindex="-1"><a class="header-anchor" href="#datek-hlu2909k" aria-hidden="true">#</a> Datek HLU2909K</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>HLU2909K</td></tr><tr><td>Vendor</td><td>Datek</td></tr><tr><td>Description</td><td>APEX smart plug 16A</td></tr><tr><td>Exposes</td><td>power, current, voltage, switch (state), temperature, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/HLU2909K.jpg" alt="Datek HLU2909K"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="protection" tabindex="-1"><a class="header-anchor" href="#protection" aria-hidden="true">#</a> Protection</h3><p>ZigBee 3.0, monitoring and cuts power if too high temperature or if overloaded.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Factory reset by press &amp; hold the power button for 12 seconds. The LED is then starting to blink 3 times RED in intervals during pairing process.</p><h3 id="specs" tabindex="-1"><a class="header-anchor" href="#specs" aria-hidden="true">#</a> Specs</h3><ul><li>Rating: 220-240VAC, 16A, 50Hz</li><li>Standby Power: &lt;= 0.5W</li></ul><h3 id="manual" tabindex="-1"><a class="header-anchor" href="#manual" aria-hidden="true">#</a> Manual</h3>',10),o={href:"http://www.nonline.no/wp-content/uploads/2020/03/Apex_Smart_Plug_UserManual.pdf",target:"_blank",rel:"noopener noreferrer"},d=(0,a.Uk)("Supplier's manual"),n=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),c=(0,a.Uk)("How to use device type specific configuration"),s=(0,a.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric" aria-hidden="true">#</a> Current (numeric)</h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),l={},u=(0,i(83744).Z)(l,[["render",function(e,t){const i=(0,a.up)("OutboundLink"),l=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("p",null,[(0,a._)("a",o,[d,(0,a.Wm)(i)])]),n,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(l,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[c])),_:1})])]),s],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);