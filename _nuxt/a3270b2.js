(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{569:function(e,t,r){},606:function(e,t,r){"use strict";r(569)},621:function(e,t,r){"use strict";r(28),r(18),r(27),r(42),r(43);var o=r(4),l=r(5),n=(r(9),r(67)),c=r(625),m=r(626),f=r(627),d=r(628),v=r(560),_=r.n(v),y=r(588),h=r.n(y),w=r(587),k=r.n(w);function C(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var x={components:{Job:c.a,Pros:m.a,Cons:f.a,Editor:d.a},props:{value:{type:Object,required:!0}},data:function(){return{salaryPeriodOptions:[{value:"YEAR",label:"سالانه"},{value:"MONTH",label:"ماهانه"},{value:"DAY",label:"روزانه"},{value:"HOUR",label:"ساعتی"}],contractTypeOptions:[{value:"FULL",label:"تمام وقت"},{value:"PART",label:"پاره وقت"},{value:"CONTRACT",label:"پروژه ای"},{value:"INTERN",label:"کارآموزی"},{value:"FREELANCE",label:"Freelance"},{value:"REMOTE",label:"Remote"}],rules:{recommend_to_friend:[{required:!0,message:"این فیلد اجباری می باشد.",trigger:["change","blur"]}],work_life_balance:[{required:!0,message:"این فیلد اجباری می باشد.",trigger:["change","blur"]}],benefits:[{required:!0,message:"این فیلد اجباری می باشد.",trigger:["change","blur"]}],security:[{required:!0,message:"این فیلد اجباری می باشد.",trigger:["change","blur"]}],management:[{required:!0,message:"این فیلد اجباری می باشد.",trigger:["change","blur"]}],culture:[{required:!0,message:"این فیلد اجباری می باشد.",trigger:["change","blur"]}],title:[{required:!0,message:"این فیلد اجباری می باشد.",trigger:["change","blur"]},{max:100,message:"حداکثر طول عنوان 100 کاراکتر می باشد.",trigger:["change","blur"]},{min:10,message:"حداقل طول عنوان 10 کاراکتر می باشد.",trigger:["change","blur"]}],description:[{max:5e3,message:"حداکثر طول متن بررسی 5000 کاراکتر می باشد.",trigger:["change","blur"]},{min:150,message:"حداقل طول متن بررسی 150 کاراکتر می باشد.",trigger:["change","blur"]}],skill:[{required:!0,message:"این فیلد اجباری می باشد.",trigger:["change","blur"]}],contractType:[{required:!0,message:"این فیلد اجباری می باشد.",trigger:["change","blur"]}],salaryAmount:[{required:!0,message:"این فیلد اجباری می باشد.",trigger:["change","blur"]}],salaryPeriod:[{required:!0,message:"این فیلد اجباری می باشد.",trigger:["change","blur"]}],terms:[{required:!0,message:"قوانین را تایید کنید.",trigger:["change","blur"]}]}}},computed:j(j({},Object(n.b)("company/company",["company"])),{},{form:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}),watch:{"form.current_work":function(e,t){e!==t&&!0===e&&(this.form.end_date=null)},form:{deep:!0,handler:function(e){_.a.set("formReview",h()(e,k.a))}}},methods:{helpToman:function(){var e="";switch(this.form.salaryPeriod){case"YEAR":e="سال";break;case"MONTH":e="ماه";break;case"DAY":e="روز";break;case"HOUR":e="ساعت"}return this.convertNum2persian(this.form.salaryAmount)+" تومان در "+e},onSubmit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(null===e.form.work_life_balance||e.form.work_life_balance<=0)){t.next=2;break}return t.abrupt("return",e.$notify.error({message:"لطفا یک امتیاز به تعادل کار و زندگی دهید."}));case 2:if(!(null===e.form.benefits||e.form.benefits<=0)){t.next=4;break}return t.abrupt("return",e.$notify.error({message:"لطفا یک امتیاز به حقوق و مزایا دهید."}));case 4:if(!(null===e.form.security||e.form.security<=0)){t.next=6;break}return t.abrupt("return",e.$notify.error({message:"لطفا یک امتیاز به امنیت شغلی دهید."}));case 6:if(!(null===e.form.management||e.form.management<=0)){t.next=8;break}return t.abrupt("return",e.$notify.error({message:"لطفا یک امتیاز به مدیریت دهید."}));case 8:if(!(null===e.form.culture||e.form.culture<=0)){t.next=10;break}return t.abrupt("return",e.$notify.error({message:"لطفا یک امتیاز به فرهنگ کار دهید."}));case 10:if(!1!==e.form.terms){t.next=12;break}return t.abrupt("return",e.$notify.error({message:"لطفا قوانین را تایید کنید."}));case 12:return e.form.description.length<150&&e.$notify({message:"حداقل طول متن بررسی 150 کاراکتر می باشد.",type:"warning"}),t.next=15,e.$refs.form.validate();case 15:t.sent&&(e.$isLogin?e.$emit("submit",e.form):e.$store.commit("theme/TOGGLE_DIALOG"));case 17:case"end":return t.stop()}}),t)})))()}}},O=(r(606),r(6)),component=Object(O.a)(x,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.company?r("el-card",{attrs:{"body-style":{padding:0}}},[r("div",{staticClass:"top p-20 rtl layout-h"},[r("div",{staticClass:"logo ml-15"},[r("img",{attrs:{src:e.mediaUrl(e.company.logo),alt:e.company.name}})]),e._v(" "),r("div",{staticClass:"title layout-v mt-5"},[r("strong",[e._v("\n        لطفا به سوالات زیر در مورد "),r("span",[e._v(" "+e._s(e.company.name))]),e._v(" پاسخ دهید.\n      ")]),e._v(" "),r("p",[e._v("این اطلاعات 100% ناشناس می باشد.")])])]),e._v(" "),r("div",{staticClass:"questions"},[r("el-form",{ref:"form",staticClass:"layout-v",attrs:{model:e.form,rules:e.rules,"label-position":"top"}},[r("div",{staticClass:"item p-20 rtl"},[r("el-form-item",{attrs:{prop:"recommend_to_friend"}},[r("div",{staticClass:"layout-h friend layout-justified"},[r("div",{staticClass:"ask"},[e._v("\n              آیا "),r("strong",[e._v(e._s(e.company.name))]),e._v(" را به دوستان خود پیشنهاد\n              می دهید؟\n            ")]),e._v(" "),r("div",{staticClass:"answer ltr text-left"},[r("el-radio-group",{attrs:{size:"mini"},model:{value:e.form.recommend_to_friend,callback:function(t){e.$set(e.form,"recommend_to_friend",t)},expression:"form.recommend_to_friend"}},[r("el-radio-button",{attrs:{label:"false"}},[e._v(" خیر ")]),e._v(" "),r("el-radio-button",{attrs:{label:"true"}},[e._v(" بله ")])],1)],1)])])],1),e._v(" "),r("div",{staticClass:"item p-20 rtl"},[r("div",{staticClass:"ask"},[e._v("امتیاز شما به این شرکت:")]),e._v(" "),r("div",{staticClass:"answer mt-20 rates"},[r("el-form-item",{attrs:{prop:"work_life_balance"}},[r("div",{staticClass:"layout-h layout-center layout-justified rtl"},[r("span",{staticClass:"text"},[e._v(" تعادل کار/زندگی ")]),e._v(" "),r("div",{staticClass:"ltr rate"},[r("el-rate",{attrs:{colors:["#F71735","#F7BA2A","#20BF55"],"aria-label":"امتیاز تعادل کار/زندگی"},model:{value:e.form.work_life_balance,callback:function(t){e.$set(e.form,"work_life_balance",t)},expression:"form.work_life_balance"}})],1)])]),e._v(" "),r("el-form-item",{attrs:{prop:"benefits"}},[r("div",{staticClass:"layout-h layout-center layout-justified rtl"},[r("span",{staticClass:"text"},[e._v(" حقوق و مزایا ")]),e._v(" "),r("div",{staticClass:"ltr rate"},[r("el-rate",{attrs:{colors:["#F71735","#F7BA2A","#20BF55"],"aria-label":"امتیاز حقوق و مزایا"},model:{value:e.form.benefits,callback:function(t){e.$set(e.form,"benefits",t)},expression:"form.benefits"}})],1)])]),e._v(" "),r("el-form-item",{attrs:{prop:"security"}},[r("div",{staticClass:"layout-h layout-center layout-justified rtl"},[r("span",{staticClass:"text"},[e._v(" امنیت شغلی/پیشرفت ")]),e._v(" "),r("div",{staticClass:"ltr rate"},[r("el-rate",{attrs:{colors:["#F71735","#F7BA2A","#20BF55"],"aria-label":"امتیاز امنیت شغلی/پیشرفت"},model:{value:e.form.security,callback:function(t){e.$set(e.form,"security",t)},expression:"form.security"}})],1)])]),e._v(" "),r("el-form-item",{attrs:{prop:"management"}},[r("div",{staticClass:"layout-h layout-center layout-justified rtl"},[r("span",{staticClass:"text"},[e._v(" مدیریت ")]),e._v(" "),r("div",{staticClass:"ltr rate"},[r("el-rate",{attrs:{colors:["#F71735","#F7BA2A","#20BF55"],"aria-label":"امتیاز مدیریت"},model:{value:e.form.management,callback:function(t){e.$set(e.form,"management",t)},expression:"form.management"}})],1)])]),e._v(" "),r("el-form-item",{attrs:{prop:"culture"}},[r("div",{staticClass:"layout-h layout-center layout-justified rtl"},[r("span",{staticClass:"text"},[e._v(" فرهنگ کار ")]),e._v(" "),r("div",{staticClass:"ltr rate"},[r("el-rate",{attrs:{colors:["#F71735","#F7BA2A","#20BF55"],"aria-label":"امتیاز فرهنگ کار"},model:{value:e.form.culture,callback:function(t){e.$set(e.form,"culture",t)},expression:"form.culture"}})],1)])])],1)]),e._v(" "),r("div",{staticClass:"item p-20 rtl"},[r("div",{staticClass:"ask mb-20"},[e._v("تجربه شما در مورد این شرکت:")]),e._v(" "),r("div",{staticClass:"answer review-input"},[r("el-form-item",{attrs:{label:"عنوان",prop:"title"}},[r("el-input",{model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),e._v(" "),r("div",{staticClass:"help-block"},[r("div",{staticClass:"title"},[e._v("راهنما برای نگارش بهتر:")]),e._v(" "),r("ul",[r("li",[e._v("\n                از خوبی‌ها و نقاط مثبت کار کردن در این شرکت برامون بگید (لطفا\n                توضیح دهید)\n              ")]),e._v(" "),r("li",[e._v("\n                اگر بخواید دوستتون رو آگاه کنید که بهتر تصمیم بگیره، فکر\n                میکنید چه مشکلات قابل توجهی در این شرکت هست که باید بدونه.\n              ")]),e._v(" "),r("li",[e._v("توصیه‌ای برای مدیران برای بهتر شدن شرکت بگید")])])]),e._v(" "),r("el-form-item",{staticClass:"mt-10",attrs:{label:"تجربه کاری",prop:"description"}},[r("client-only",[r("Editor",{model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e._v(" "),r("p",{staticClass:"help-block"},[r("i",{staticClass:"fa fa-warning ml-5"}),e._v("\n              با انتخاب قسمی از متن می تونی بهش استایل بدی‌ (Bold, Italic...)\n            ")]),e._v(" "),r("p",{staticStyle:{color:"red"}},[e._v("\n              در ثبت تجربه خود به نکات زیر توجه کنید در غیر این صورت تجربه شما\n              بر روی سایت غیرفعال می گردد:\n            ")]),e._v(" "),r("ul",[r("li",[e._v("نام بردن از اشخاص")]),e._v(" "),r("li",[e._v("\n                افشای اسرار درون شرکت یا سازمان (نام بردن از مشتریان، پروژه ها\n                و...)\n              ")]),e._v(" "),r("li",[e._v("\n                فحاشی یا به کار بردن کلمات نامناسب در مورد مدیران و سایر\n                کارمندان\n              ")]),e._v(" "),r("li",[e._v("\n                سعی در بزرگنمایی و یا نوشتن موارد غیر واقع ای با هدف انتقام\n                گیری از شرکت ها\n              ")]),e._v(" "),r("li",[e._v("امکان ویرایش برای تجربه ها تنها تا ۳۰ روز فعال می باشد.")])]),e._v(" "),r("p",{staticStyle:{color:"red","font-weight":"bold"}},[e._v("\n              نکته: همه شرکت ها، حتی شرکت های بزرگ نقاط ضعفی دارن، به جای\n              کوبیدن شرکت سعی کنید فیدبک سازنده بنویسید.\n            ")]),e._v(" "),r("p",{staticStyle:{color:"red","font-weight":"bold"}},[e._v("\n              تجربه ای که حاوی فیدبک برای بهبود شرکت نباشه، تایید نمیشه.\n            ")])],1),e._v(" "),r("el-form-item",{staticClass:"mt-10",attrs:{prop:"pros",label:"نکات مثبت"}},[r("Pros",{staticClass:"full-width",model:{value:e.form.pros,callback:function(t){e.$set(e.form,"pros",t)},expression:"form.pros"}})],1),e._v(" "),r("el-form-item",{staticClass:"mt-10",attrs:{prop:"cons",label:"نکات منفی"}},[r("Cons",{staticClass:"full-width",model:{value:e.form.cons,callback:function(t){e.$set(e.form,"cons",t)},expression:"form.cons"}}),e._v(" "),r("p",{staticClass:"help-block"},[r("i",{staticClass:"fa fa-warning ml-5"}),e._v(" "),r("span",[e._v("نکات خود را از لیست بالا انتخاب کن اگر در لیست موجود نبود\n                نکته خود را تایپ کرده و سپس آن را از لیست انتخاب کن.")])])],1)],1)]),e._v(" "),r("div",{staticClass:"item p-20 rtl"},[r("div",{staticClass:"ask mb-20"},[e._v("درباره خودتان به ما بگویید:")]),e._v(" "),r("div",{staticClass:"answer tell-me"},[r("div",{staticClass:"layout-h"},[r("div",{staticClass:"col"},[r("el-form-item",{attrs:{label:"شغل شما در "+e.company.name+" چیست؟",prop:"skill"}},[r("Job",{staticClass:"full-width",model:{value:e.form.skill,callback:function(t){e.$set(e.form,"skill",t)},expression:"form.skill"}})],1)],1),e._v(" "),r("div",{staticClass:"col"},[r("el-form-item",{attrs:{label:"نوع قرارداد شما در "+e.company.name+" چیست؟",prop:"contractType"}},[r("el-select",{staticClass:"full-width",attrs:{placeholder:"نوع قرارداد"},model:{value:e.form.contractType,callback:function(t){e.$set(e.form,"contractType",t)},expression:"form.contractType"}},e._l(e.contractTypeOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)]),e._v(" "),r("p",{staticClass:"help-block"},[r("i",{staticClass:"fa fa-warning ml-5"}),e._v(" "),r("span",[e._v("شغل خود را از لیست بالا انتخاب کن اگر در لیست نبود تایپ\n              کن.")])]),e._v(" "),r("div",{staticClass:"layout-h mt-10 mb-20"},[r("el-radio-group",{staticClass:"ltr",attrs:{size:"mini"},model:{value:e.form.hiddenJob,callback:function(t){e.$set(e.form,"hiddenJob",t)},expression:"form.hiddenJob"}},[r("el-radio-button",{attrs:{label:!0}},[e._v(" شغل نمایش نده ")]),e._v(" "),r("el-radio-button",{attrs:{label:!1}},[e._v("\n                شغل نمایش بده\n              ")])],1)],1),e._v(" "),r("p",{staticClass:"help-block"},[r("i",{staticClass:"fa fa-warning ml-5"}),e._v(" "),r("span",[e._v("شغلی که داشتی دیگران ببینن؟")])])])]),e._v(" "),r("div",{staticClass:"item salary p-20 rtl pb-10"},[r("div",{staticClass:"ask mb-20"},[e._v("حقوق:")]),e._v(" "),r("div",{staticClass:"answer tell-me"},[r("p",[e._v("\n            درآمد شما در "),r("strong",[e._v(e._s(e.company.name))]),e._v(" چقدر است؟\n          ")]),e._v(" "),r("div",{staticClass:"layout-h"},[r("div",{staticClass:"col"},[r("el-form-item",{staticClass:"mr-10",attrs:{prop:"salaryPeriod"}},[r("el-select",{staticClass:"full-width",attrs:{placeholder:"نحوه محاسبه حقوق"},model:{value:e.form.salaryPeriod,callback:function(t){e.$set(e.form,"salaryPeriod",t)},expression:"form.salaryPeriod"}},e._l(e.salaryPeriodOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),r("div",{staticClass:"col rtl"},[r("el-form-item",{attrs:{prop:"salaryAmount"}},[r("el-popover",{attrs:{content:e.helpToman(),placement:"top-end",width:"320",trigger:"focus"}},[r("el-input",{attrs:{slot:"reference",type:"number",placeholder:"برای مثال 5000000"},slot:"reference",model:{value:e.form.salaryAmount,callback:function(t){e.$set(e.form,"salaryAmount",t)},expression:"form.salaryAmount"}})],1)],1)],1)])])]),e._v(" "),r("div",{staticClass:"item p-20 rtl"},[r("div",{staticClass:"ask mb-20"},[e._v("بازه زمانی همکاری:")]),e._v(" "),r("div",{staticClass:"answer date"},[r("div",{staticClass:"layout-h"},[r("div",{staticClass:"col"},[r("el-input",{attrs:{id:"date-start-input",placeholder:"تاریخ شروع","suffix-icon":"el-icon-date"},model:{value:e.form.start_date,callback:function(t){e.$set(e.form,"start_date",t)},expression:"form.start_date"}}),e._v(" "),r("client-only",[r("date-picker",{staticClass:"full-width",attrs:{max:e.form.start_date_max,format:"jYYYY/jMM/jDD","display-format":"jYYYY/jMM/jDD",color:"#0F9D58",element:"date-start-input",view:"year"},model:{value:e.form.start_date,callback:function(t){e.$set(e.form,"start_date",t)},expression:"form.start_date"}})],1)],1),e._v(" "),r("div",{staticClass:"col last-col"},[r("div",{staticClass:"layout-v"},[r("div",{staticClass:"item-v"},[r("el-input",{attrs:{id:"date-end-input",disabled:!e.form.start_date||e.form.current_work,placeholder:"تاریخ پایان","suffix-icon":"el-icon-date"},model:{value:e.form.end_date,callback:function(t){e.$set(e.form,"end_date",t)},expression:"form.end_date"}}),e._v(" "),r("client-only",[r("date-picker",{attrs:{max:e.form.start_date_max,disabled:!e.form.start_date,min:e.form.start_date,format:"jYYYY/jMM/jDD","display-format":"jYYYY/jMM/jDD",color:"#0F9D58",element:"date-end-input",view:"year"},model:{value:e.form.end_date,callback:function(t){e.$set(e.form,"end_date",t)},expression:"form.end_date"}})],1)],1),e._v(" "),r("div",{staticClass:"item-v mt-10 mb-15"},[r("el-checkbox",{model:{value:e.form.current_work,callback:function(t){e.$set(e.form,"current_work",t)},expression:"form.current_work"}},[e._v("\n                    در حال همکاری\n                  ")])],1)])])])])]),e._v(" "),r("div",{staticClass:"item terms p-20 rtl"},[r("el-checkbox",{model:{value:e.form.terms,callback:function(t){e.$set(e.form,"terms",t)},expression:"form.terms"}},[e._v("\n          در صورتی که تجربتون همراستا با\n          "),r("a",{attrs:{href:"/terms",target:"_blank"}},[e._v("قوانین")]),e._v(" جاب گای باشه، منتشر\n          خواهد شد.\n        ")])],1)])],1),e._v(" "),r("div",{staticClass:"footer p-20"},[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.onSubmit}},[e._v(" ثبت ")])],1)]):e._e()}),[],!1,null,"7e8999f5",null);t.a=component.exports},677:function(e,t,r){},820:function(e,t,r){"use strict";r(677)},871:function(e,t,r){"use strict";r.r(t);r(28),r(18),r(27),r(42),r(43);var o=r(5),l=r(4),n=(r(44),r(13),r(9),r(621)),c=r(67),m=r(38),f=r.n(m);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var _={components:{ReviewForm:n.a},asyncData:function(e){return Object(l.a)(regeneratorRuntime.mark((function t(){var r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.params,o=e.store,e.redirect,!r.id){t.next=7;break}return t.next=4,o.dispatch("company/review/getReview",r.id);case 4:return l=o.state.company.review.review.company.company_slug,t.next=7,o.dispatch("company/company/getCompany",l);case 7:return t.abrupt("return",{form:{recommend_to_friend:null,work_life_balance:null,benefits:null,security:null,management:null,culture:null,title:null,description:null,pros:[],cons:[],skill:"",hiddenJob:!0,contractType:null,salaryAmount:null,salaryPeriod:null,start_date:null,start_date_max:f()().format("jYYYY/jMM/jDD"),end_date:null,current_work:!1},loading:!1,companySlug:o.state.company.review.review.company.company_slug,reviewId:r.id});case 8:case"end":return t.stop()}}),t)})))()},head:function(){return v(v({},this.$seo({title:"ویرایش تجربه کاری: ".concat(this.review.title)})),{},{bodyAttrs:{class:"company-questions-page"}})},computed:v(v({},Object(c.b)("company/review",["review"])),Object(c.b)("company/company",["company"])),mounted:function(){this.form=v({},this.review),this.form.benefits=this.review.salary_benefit,this.form.pros=this.review.pros.map((function(e){return e.name})),this.form.cons=this.review.cons.map((function(e){return e.name})),this.form.skill=this.review.job.name,this.form.hiddenJob=this.review.anonymous_job,this.form.contractType=this.review.state,this.form.salaryAmount=this.review.salary,this.form.salaryPeriod=this.review.salary_type,this.form.start_date=f()(this.review.start_date).format("jYYYY/jMM/jDD"),this.form.start_date_max=f()().format("jYYYY/jMM/jDD"),this.form.end_date=f()(this.review.end_date).format("jYYYY/jMM/jDD"),this.form.terms=!0},methods:{onSubmit:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={company:{company_slug:e.company.company_slug},job:{name:e.form.skill},anonymous_job:e.form.hiddenJob,recommend_to_friend:e.form.recommend_to_friend,pros:e.form.pros.map((function(e){return{name:e}})),cons:e.form.cons.map((function(e){return{name:e}})),state:e.form.contractType,work_life_balance:e.form.work_life_balance,salary_benefit:e.form.benefits,security:e.form.security,management:e.form.management,culture:e.form.culture,title:e.form.title,description:e.form.description,salary:e.form.salaryAmount,salary_type:e.form.salaryPeriod,start_date:f()(e.form.start_date,"jYYYY/jMM/jDD").format("YYYY-MM-DD"),end_date:f()(e.form.end_date,"jYYYY/jMM/jDD").format("YYYY-MM-DD")},t.prev=1,"Invalid date"===r.start_date&&delete r.start_date,"Invalid date"===r.end_date&&delete r.end_date,e.loading=!0,t.next=7,e.$axios.$put("/company_review/".concat(e.reviewId,"/update/"),r);case 7:e.$notify({message:"بروزرسانی با موفقیت انجام شد.",type:"success"}),e.$router.push("/profile/reviews"),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(1);case 13:return t.prev=13,e.loading=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,11,13,16]])})))()}}},y=(r(820),r(6)),component=Object(y.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",{staticClass:"company-questions-wrap layout-v",attrs:{type:"flex",justify:"center",align:"middle"}},[r("el-col",{attrs:{xs:23,sm:23,md:23,lg:13,xl:12}},[r("ReviewForm",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],on:{submit:e.onSubmit},model:{value:e.form,callback:function(t){e.form=t},expression:"form"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);