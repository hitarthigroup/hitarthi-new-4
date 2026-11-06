
(function(){
const WA="919453717356";
const DELIVERY=50, FREE_AT=999, COMBO_ADD=99, BUNDLE_OFF=0.25;
const rs=n=>"₹"+Math.round(n).toLocaleString("en-IN");
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- DATA ---------- */
const CATS=[
 {id:"computer",name:"Computer & Office",hin:"Computer, MS Office, Typing, Tally",g:["#0057D9","#2F86FF"],ic:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/>'},
 {id:"ai",name:"AI & Technology",hin:"AI Tools, Python, Web, Data",g:["#0891B2","#00C2FF"],ic:'<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>'},
 {id:"digital",name:"Digital & Career",hin:"Marketing, Design, Video",g:["#EA580C","#FF9A1F"],ic:'<path d="M3 11l18-8-8 18-2-8z"/>'},
 {id:"english",name:"English & Personality",hin:"Spoken English, Interview",g:["#6D28D9","#9F67FF"],ic:'<path d="M4 5h16v11H8l-4 4z"/>'},
 {id:"finance",name:"Financial Education",hin:"पैसे की समझ, निवेश शिक्षा",g:["#15803D","#22C55E"],ic:'<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>'},
 {id:"business",name:"Business Skills",hin:"Sales, Strategy, Startup",g:["#B45309","#F59E0B"],ic:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3"/>'},
 {id:"kids",name:"Kids (8–15 वर्ष)",hin:"Computer, Typing, Money",g:["#DB2777","#F472B6"],ic:'<circle cx="12" cy="8" r="4"/><path d="M5 21c1-4 4-6 7-6s6 2 7 6"/>'},
 {id:"premium",name:"Book Membership & Premium",hin:"Book Memberships • 10 साल का Program",g:["#B7791F","#F2A81D"],ic:'<path d="M12 2l3 6.5 7 1-5 4.8 1.2 7-6.2-3.3-6.2 3.3 1.2-7-5-4.8 7-1z"/>'},
 {id:"life",name:"Life Skills",hin:"Goal, Time, Positive Mind",g:["#0F766E","#2DD4BF"],ic:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/>'}
];
const C=(name,hin,cat,dur,level,fee,out,pop)=>({name,hin,cat,dur,level,fee,out,pop:!!pop});
const COURSES=[
 C("Basic Computer Course","Computer चलाना शुरू से सीखें","computer","2 महीने","Beginner",1499,["Windows, file-folder","Typing की शुरुआत","Internet और email"],1),
 C("Full Computer Course","Basic + MS Word + MS Excel + PowerPoint — 4 topic, हर topic की अपनी e-book","computer","6 महीने","Beginner",3999,["Topic 1: Basic Computer — शुरू से","Topic 2: MS Word — Professional document","Topic 3: MS Excel — Formulas से Dashboard","Topic 4: MS PowerPoint — Slides और animation","हर topic की HITARTHI e-book साथ में"],1),
 C("Computer Fundamentals","Hardware, software और OS की समझ","computer","1 महीना","Beginner",999,["Computer के भाग","Operating system","Safety basics"]),
 C("MS Office Complete","Word, Excel, PowerPoint एक साथ","computer","3 महीने","Beginner",2999,["Letter, resume, report","Excel sheets","Presentation बनाना"],1),
 C("Advanced Excel","Formulas, Pivot, Dashboard","computer","2 महीने","Intermediate",1999,["VLOOKUP / XLOOKUP","Pivot Table","MIS report"],1),
 C("MS Word","Letter, resume, report — professional document","computer","1 महीना","Beginner",999,["Typing, formatting, table","Resume और letter","Mail Merge, TOC","MS Word e-book साथ में"],1),
 C("MS PowerPoint","Slides, design और animation","computer","1 महीना","Beginner",999,["Slides और design","Pictures, charts","Animation, presentation","MS PowerPoint e-book साथ में"],1),
 C("DCA — Diploma in Computer Applications","1 साल का complete computer course • 📘 DCA book (308 पेज) साथ में","computer","1 साल","Beginner",5999,["Computer Fundamentals, Windows 11","MS Office, Internet, Typing","Tally + GST, HTML & CSS, Database"]),
 C("ADCA — Advanced Diploma in Computer Applications","13 modules, Basic से Advanced • 📘 ADCA book (759 पेज) साथ में","computer","1 साल","Intermediate",8999,["Word, Excel, PowerPoint, Access","Tally GST, Networking, Photoshop","C, Python, HTML & CSS"]),
 C("MS Excel","Excel शुरू से — formulas, charts, data • 📘 MS Excel Mastery book साथ में","computer","1 महीना","Beginner",999,["Formulas और functions","Charts और filters","Data entry और reports"]),
 C("MS Access","Database बनाना सीखें • 📘 MS Access book साथ में","computer","1 महीना","Beginner",1499,["Tables, fields, relationships","Queries, forms, reports","Practical database projects"]),
 C("Google Sheets","Online spreadsheet — formulas से sharing तक","computer","1 महीना","Beginner",999,["Formulas और functions","Charts और filters","Sharing और Google Forms"],1),
 C("Excel Dashboard & MIS","Office reporting का पूरा काम","computer","1 महीना","Advanced",2499,["Charts, slicers","Automated reports","Data cleaning"]),
 C("Speed Typing (Hindi + English)","30 से 40+ WPM तक","computer","1.5 महीने","Beginner",1199,["Home-row तरीका","Hindi Unicode typing","Speed test"],1),
 C("Accounting with Tally Prime + GST","दुकान और office का हिसाब-किताब","computer","3 महीने","Intermediate",4499,["Voucher entry","GST invoice","Balance sheet"]),
 C("Office Automation","Email, Drive, Forms, Sheets","computer","1 महीना","Beginner",1499,["Google Workspace","Online forms","File sharing"]),
 C("AI Tools for Everyone","रोज़ के काम AI से मिनटों में","ai","1 महीना","Beginner",1999,["Prompt लिखना","Notes, letters, images","AI से सुरक्षित काम"],1),
 C("Prompt Writing Mastery","AI से सही उत्तर निकालना","ai","3 हफ़्ते","Intermediate",1499,["Prompt के ढाँचे","Role + context","Hindi prompts"]),
 C("AI for Teachers","पाठ-योजना, प्रश्नपत्र, worksheet","ai","3 हफ़्ते","Beginner",1799,["Lesson plan","Quiz बनाना","Report card काम"]),
 C("Python Programming","Coding की शुरुआत Python से","ai","3 महीने","Beginner",5999,["Variables, loops","Mini projects","File और data"],1),
 C("Web Development","HTML, CSS, JavaScript से website","ai","4 महीने","Intermediate",7999,["Responsive pages","JavaScript basics","अपना portfolio site"]),
 C("Data Science Basics","Data से निर्णय लेना","ai","3 महीने","Advanced",8999,["Python + Pandas","Charts","Real data projects"]),
 C("Digital Marketing","Online business को बढ़ाना","digital","3 महीने","Intermediate",5999,["Facebook / Instagram ads","Google Business Profile","Lead generation"],1),
 C("Social Media Management","Page बढ़ाना और content plan","digital","1.5 महीने","Beginner",2999,["Content calendar","Reels planning","Analytics पढ़ना"]),
 C("Graphic Design with Canva","Poster, thumbnail, visiting card","digital","1 महीना","Beginner",1999,["Design के नियम","Brand kit","Print-ready file"]),
 C("Video Editing (Mobile + PC)","Reels और YouTube video","digital","1.5 महीने","Beginner",2999,["Cut, transition","Text, music","Export settings"]),
 C("Spoken English","झिझक खत्म, बोलना शुरू","english","3 महीने","Beginner",3499,["रोज़ की बातचीत","Grammar बिना रटे","Speaking practice"],1),
 C("English Word Power","रोज़ 10 नए शब्द, सही प्रयोग","english","2 महीने","Beginner",1499,["Root words","Prefix / Suffix","Daily vocabulary"]),
 C("Personality Development","आत्मविश्वास और व्यवहार","english","1.5 महीने","Beginner",2499,["Body language","Communication","Grooming"]),
 C("Interview Preparation","Resume से final round तक","english","3 हफ़्ते","Intermediate",1499,["Resume बनाना","Common questions","Mock interview"]),
 C("Public Speaking","मंच पर बोलने का डर खत्म","english","1 महीना","Intermediate",1999,["Speech ढाँचा","आवाज़ और ठहराव","Live practice"]),
 C("Financial Literacy Basics","कमाई, खर्च, बचत की सही समझ","finance","1 महीना","Beginner",999,["Needs vs Wants","Budget बनाना","Emergency fund"],1),
 C("Money Management & Budgeting","परिवार का monthly budget","finance","3 हफ़्ते","Beginner",799,["50-30-20 नियम","Expense tracking","Saving goals"]),
 C("Compounding & SIP Basics","छोटी बचत से बड़ा धन — समझ","finance","3 हफ़्ते","Beginner",999,["Compounding","SIP कैसे काम करता है","Inflation का असर"]),
 C("Stock Market Fundamentals (शिक्षा)","कंपनी को समझना सीखें","finance","2 महीने","Intermediate",3999,["Balance sheet पढ़ना","Ratios","जोखिम की समझ"]),
 C("Loan, EMI & Credit Score","कर्ज़ के जाल से बचाव","finance","2 हफ़्ते","Beginner",699,["EMI गणना","Credit score","सही loan चुनना"]),
 C("Digital Payment & Scam Safety","UPI, OTP fraud से बचें","finance","1 हफ़्ता","Beginner",399,["UPI सुरक्षा","Fake call पहचानना","Complaint कहाँ करें"]),
 C("Sales Mastery","विश्वास बनाकर सही तरीके से बेचना","business","1.5 महीने","Intermediate",2999,["Customer समझना","Objection handling","Follow-up"]),
 C("Small Business Strategy","दुकान/व्यवसाय बढ़ाने की योजना","business","1 महीना","Intermediate",2499,["Customer, offer, price","Local marketing","Profit का हिसाब"]),
 C("Entrepreneurship Basics","अपना काम शुरू करने से पहले","business","3 हफ़्ते","Beginner",1499,["Idea test","Registration की समझ","पहले 100 ग्राहक"]),
 C("Computer for Kids","खेल-खेल में computer","kids","2 महीने","Beginner",1299,["Paint, typing games","Safe internet","छोटे projects"],1),
 C("Typing Shala for Kids","गाँव के बच्चों के लिए typing","kids","1 महीना","Beginner",699,["Finger position","Typing games","Speed badge"]),
 C("Money Smart Kids","गुल्लक से बैंक तक","kids","3 हफ़्ते","Beginner",699,["पैसे की कहानी","बचत की आदत","Want vs Need खेल"]),
 C("Goal Setting & Time Management","लक्ष्य तय करें, समय जीतें","life","3 हफ़्ते","Beginner",999,["SMART goals","Daily planner","आदतें बनाना"]),
 C("Student Life Skills","पढ़ाई के साथ जीवन की तैयारी","life","1 महीना","Beginner",999,["Communication","Decision making","Digital safety"])
];
COURSES.push(
 C("3 घंटे का AI Workshop","AI के 5 levels — एक ही दिन में","ai","3 घंटे","Beginner",99,["AI की पहचान","Office काम AI से","अपना AI Assistant"],1),
 C("Machine Learning Basics","Data से मशीन को सिखाना","ai","2 महीने","Intermediate",4999,["ML क्या है","Python से पहला model","असली data projects"]),
 C("Data Analytics with AI","Excel + AI से data की समझ","ai","2 महीने","Intermediate",3999,["Data cleaning","Dashboard","AI से insights"]),
 C("AI for Business Owners","AI से समय बचाएँ, ग्राहक बढ़ाएँ","business","3 हफ़्ते","Beginner",1999,["काम automate करना","Marketing content","बेहतर निर्णय"]),
 C("AI Video & Content Creation","Idea से AI video तक","digital","1 महीना","Beginner",2499,["Script और storyboard","AI characters और voice","Reels बनाना"])
,
 C("HITARTHI STARTER BOOK MEMBERSHIP","25 e-books + 6 महीने हर हफ़्ते 1 recorded course + doubt session","premium","6 महीने","Beginner",2200,["25 e-books","26 recorded video courses — हर हफ़्ते 1","Doubt session","1 साल compounding support (चाहें तो)","Typing website का access","और भी बहुत कुछ"],1),
 C("Financial Freedom Program — 10 साल","अभिभावकों और बड़ों के लिए — Financial Literacy और Compounding का 10 साल का साथ","premium","10 साल","Advanced",100000,["कई premium finance books + हर साल नई","10 साल तक सवाल-जवाब support","परिवार का budget, बचत और लंबी अवधि की समझ (शिक्षा — निवेश सलाह नहीं)"],0));
/* Courses: Google Sheet ("Courses" टैब) से — पिछली बार की सूची तुरंत, नई सूची पीछे से */
function hbNormCourse(x){if(x&&/^hitarthi learning pass$/i.test(String(x.name||"").trim()))x=Object.assign({},x,{name:"HITARTHI STARTER BOOK MEMBERSHIP"});const cs=String(x&&x.cat||"").toLowerCase().trim();const k=(/learning pass|book membership|premium/.test(cs)?CATS.find(c=>c.id==="premium"):null)||CATS.find(c=>c.id===cs||c.name.toLowerCase()===cs)||CATS.find(c=>cs&&c.name.toLowerCase().indexOf(cs.slice(0,5))===0)||CATS[0];const img=String(x&&x.img||"");
  return {name:String(x.name||"").slice(0,90),hin:String(x.hin||""),cat:k.id,dur:String(x.dur||""),level:["Beginner","Intermediate","Advanced"].includes(x.level)?x.level:"Beginner",fee:Math.max(0,+x.fee||0),out:Array.isArray(x.out)?x.out.map(String):[],pop:!!x.pop,soon:!!x.soon,img:/^https:\/\//.test(img)?img:""};}
try{const c=JSON.parse(localStorage.getItem("hb_courses")||"null");if(c&&c.v===2&&Array.isArray(c.list)&&c.list.length){COURSES.length=0;c.list.forEach(x=>COURSES.push(hbNormCourse(x)));window.__hbFromSheet=1;}}catch(e){}
/* अभी तैयार courses सामने; बाकी "जल्द आ रहे" (SOON) — Sheet में Active = Soon */
const HB_READY=["Full Computer Course","Basic Computer Course","Computer Fundamentals","MS Office Complete","Advanced Excel","MS Word","MS PowerPoint","Google Sheets"];
const C_SOON=[];
function hbSplitSoon(fromSheet){const all=COURSES.splice(0);C_SOON.length=0;all.forEach(c=>{const soon=fromSheet?!!c.soon:!(HB_READY.includes(c.name)||c.cat==="premium");c.soon=soon;(soon?C_SOON:COURSES).push(c);});}
hbSplitSoon(!!window.__hbFromSheet);
$("#factCourses").textContent=COURSES.length;
const cByName=n=>COURSES.find(c=>c.name===n);

const HB_EB={
 basic:{t:"BASIC COMPUTER — खेल-खेल में",s:"Mouse पकड़ने से Email भेजने तक",pg:114,img:"img/3b716dbe9ccf.jpg"},
 word:{t:"MS WORD MADE EASY",s:"शुरुआत से Professional Document तक",pg:92,img:"img/af3a553caf94.jpg"},
 excel:{t:"MS EXCEL MASTERY",s:"Excel सीखें • Data समझें • Career बनाएं",pg:61,img:"img/834c829e44d5.jpg"},
 dca:{t:"DCA — Diploma in Computer Applications",s:"Complete Computer Course — Theory + Practical + Projects",pg:308,img:"img/45d3b7832084.jpg"},
 adca:{t:"ADCA — Advanced Diploma in Computer Applications",s:"13 modules • 875+ MCQ • Basic से Advanced",pg:759,img:"img/4b8c7b4c59b0.jpg"},
 access:{t:"MS ACCESS और DATABASE MANAGEMENT",s:"Volume 1 — बुनियाद (Foundations)",pg:87,img:"img/b3a5e95016f3.jpg"},
 ppt:{t:"MS POWERPOINT MADE EASY",s:"स्लाइड बनाओ • डिज़ाइन करो • एनिमेशन",pg:79,img:"img/ee7eff8fc3ce.jpg"}};
/* Books: e = E-book price, p = Printed price, combo = p + e/2 */
const B=(t,s,a,bcat,e,p,col,ser,pages,learn)=>({t,s,a,bcat,e,p,col,ser,pages,learn});
const BOOKS=[
 B("STOCK FUNDAMENTAL ANALYSIS","कंपनी को समझें, सही मूल्यांकन करें और समझदारी से निवेश करें","HITARTHI","finance",259,518,["#0A2A73","#0057D9","#061A4A","#FFC247"],"Without Learning, No Earning",260,["Balance sheet, P&L और cash flow पढ़ना","Infosys, Wipro, Eicher Motors के case studies","50-point checklist और one-page analysis sheet"]),
 B("The Money Blueprint","पैसों को समझो, भविष्य को सुधारो","HITARTHI","finance",119,238,["#0E5A34","#1FA85A","#073A21","#FFD34D"],"Financial Literacy",120,["Income, expense और budget का सही तरीका","Emergency fund, insurance, loan की समझ","30-Day Money Challenge"]),
 B("The Magic of Compounding","छोटी रकम, समय और समझदारी से बड़ा धन","HITARTHI","finance",179,358,["#0B4F4A","#14B8A6","#063431","#FFB547"],"Personal Finance",180,["Compounding का गणित सरल भाषा में","Myths vs Reality","Compounding calculator और worksheets"]),
 B("कंपाउंडिंग का जादू","हिंदी संस्करण — छोटा और सरल","HITARTHI","finance",99,198,["#115E59","#2DD4BF","#0A3D3A","#FFE066"],"हिंदी संस्करण",100,["कम समय में पूरी बात","उदाहरण और कहानियों के साथ","हर अध्याय के अंत में action"]),
 B("TATA CASE STUDY","Ratan Tata के बड़े व्यावसायिक निर्णय","HITARTHI","business",159,318,["#1E293B","#475569","#0F172A","#FFB547"],"Business Case Study",160,["बड़े निर्णयों के पीछे की सोच","संकट में नेतृत्व","आपके business के लिए सबक"]),
 B("BUSINESS STRATEGY MASTERY","Business Growth Series — Book 02","HITARTHI","business",199,398,["#7C2D12","#EA580C","#4A1A0B","#FFE066"],"Business Growth Series",200,["सही ग्राहक और सही offer","Pricing और profit","Growth की step-by-step योजना"]),
 B("THE HITARTHI BUSINESS COACH","35 chapters + 5 bonus","HITARTHI","business",319,638,["#0B1A4A","#1D4ED8","#060F30","#FF8C00"],"Master Book 14",320,["Marketing, sales, team और finance एक साथ","हर chapter में worksheet","5 bonus toolkit"]),
 B("SALES MASTERY","बेहतर बात करें • विश्वास बनाएं • सही तरीके से बेचें","HITARTHI","business",179,358,["#9A3412","#F97316","#5C1F0A","#FFE066"],"Sales",180,["Customer की ज़रूरत समझना","Objection handling के तरीके","Follow-up जो बिक्री में बदले"]),
 B("LEADER TO LEGACY","Leadership और Team Building","HITARTHI","business",199,398,["#312E81","#4F46E5","#1E1B4B","#FFC247"],"Leadership",200,["अच्छी team कैसे बनाएँ","काम सौंपना और भरोसा","लंबे समय तक चलने वाली संस्था"]),
 B("The Power of a Positive Mind","सोच बदलें, जीवन बदलें","HITARTHI","self",219,438,["#B45309","#F59E0B","#78350F","#FFFFFF"],"Self Help",220,["Self-talk को बदलने के तरीके","21-day positive mind challenge","30-day transformation plan"]),
 B("अलग ढंग से करो","नज़रिए बदलो, तरीके बदलो, नतीजे बदलो","HITARTHI","self",139,278,["#831843","#DB2777","#500724","#FFD34D"],"Self Help",140,["सोचने का नया तरीका","रोज़ की आदतों में बदलाव","कहानियाँ और action steps"]),
 B("लक्ष्य तक","अपने सपने को मंज़िल तक पहुँचाने की कला","HITARTHI","self",139,278,["#1E3A8A","#3B82F6","#172554","#FFC247"],"Self Help",140,["सपने को लक्ष्य में बदलना","योजना और अनुशासन","रुकावटों से आगे बढ़ना"]),
 B("सफलता का सूत्र","Self Development","HITARTHI","self",129,258,["#713F12","#CA8A04","#422006","#FFFFFF"],"Self Development",130,["सफल लोगों की आदतें","समय और ऊर्जा का सही प्रयोग","रोज़ का success routine"]),
 B("GOAL SETTING & LIFE PLANNING","लक्ष्य तय करें • सही दिशा चुनें","HITARTHI","self",249,498,["#065F46","#10B981","#022C22","#FFE066"],"Life Planning",254,["SMART goals बनाना","जीवन के हर क्षेत्र की योजना","Goal tracker worksheets"]),
 B("THE TIME BLUEPRINT","समय को जीतो, जिंदगी जीतो","HITARTHI","self",59,118,["#0C4A6E","#0EA5E9","#082F49","#FFC247"],"Time Management",57,["Priority तय करना","टालने की आदत छोड़ना","Daily और weekly planner"]),
 B("The Personality Blueprint","Personality Development","HITARTHI","self",69,138,["#581C87","#A855F7","#3B0764","#FFD34D"],"Personality",69,["आत्मविश्वास बढ़ाना","बोलचाल और body language","पहली छाप कैसे अच्छी बनाएँ"]),
 B("जीवनतंत्र","कहानियों में छिपी जिंदगी की समझ","HITARTHI","self",149,298,["#7F1D1D","#DC2626","#450A0A","#FFD34D"],"कहानियाँ",150,["छोटी कहानियाँ, बड़ी सीख","हर कहानी के बाद विचार प्रश्न","परिवार के साथ पढ़ने लायक"]),
 B("30 Days English Speaking Challenge","रोज़ 1 दिन, 30 दिन में बोलना","HITARTHI","english",149,298,["#1E40AF","#0EA5E9","#172554","#FFE066"],"English",150,["रोज़ का speaking task","ज़रूरी sentences और phrases","30 दिन का progress tracker"]),
 B("English Word Power","Root words, Prefix, Suffix","HITARTHI","english",179,358,["#3730A3","#6366F1","#1E1B4B","#FFC247"],"Vocabulary",180,["Root words से शब्द बनाना","Prefix और suffix की समझ","रोज़ के प्रयोग वाले शब्द"]),
 B("Digital Life Mastery","मोबाइल, इंटरनेट और सोशल मीडिया का स्मार्ट इस्तेमाल","HITARTHI","student",109,218,["#0F172A","#1D4ED8","#020617","#00C2FF"],"Digital Safety",110,["Online fraud से बचाव","Social media का सही प्रयोग","Screen time का संतुलन"]),
 B("HITARTHI Student Life Skills","सिर्फ पढ़ाई नहीं, जीवन में आगे बढ़ना सीखें","HITARTHI","student",99,198,["#14532D","#22C55E","#052E16","#FFE066"],"Class 5–12",100,["बोलने और सुनने की कला","सही निर्णय लेना","पैसे और समय की समझ"]),
 B("Digital Skills Made Easy","हर छात्र के लिए डिजिटल दुनिया","HITARTHI","student",129,258,["#155E75","#06B6D4","#083344","#FFC247"],"Video Book",130,["30 lessons, script के साथ","Computer और internet basics","हर lesson में अभ्यास"]),
 B("समझदार जंगल","Panchtantra जैसी नई कहानियाँ","HITARTHI","kids",79,158,["#166534","#84CC16","#052E16","#FFE066"],"बच्चों के लिए",80,["जानवरों की मज़ेदार कहानियाँ","हर कहानी में एक नई skill","रंग भरने और सोचने के प्रश्न"])

 ,B("Basic Computer — खेल-खेल में","Mouse पकड़ने से Email भेजने तक — step-by-step","HITARTHI","student",109,218,["#0A2A73","#0057D9","#061A4A","#FFC247"],"Computer Skill Series",114,["Computer के भाग, Windows, File-Folder","MS Word, Excel, PowerPoint की शुरुआत","Internet, Email और Cyber Safety"])
 ,B("MS Word Made Easy","शुरुआत से Professional Document तक","HITARTHI","student",89,178,["#0A2A73","#0057D9","#061A4A","#FFC247"],"Computer Skill Series",92,["Typing, formatting, table, picture","Styles, Table of Contents, Mail Merge","Resume, letter और 5 real projects"])
 ,B("MS Excel Mastery","Excel सीखें • Data समझें • Career बनाएं","HITARTHI","student",59,118,["#0E5A34","#1FA85A","#073A21","#FFD34D"],"Computer Skill Series",61,["Formulas और functions","VLOOKUP / XLOOKUP, Pivot Table","Charts और dashboard"])
 ,B("MS PowerPoint Made Easy","स्लाइड बनाओ • डिज़ाइन करो • एनिमेशन से जादू दिखाओ","HITARTHI","student",79,158,["#9A3412","#EA580C","#431407","#FFE066"],"Computer Skill Series",79,["Slides, design और pictures","Charts और SmartArt","Animation, transition, presentation"])
 ,B("DCA — Diploma in Computer Applications","Complete Computer Course — Theory + Practical + Projects","HITARTHI","student",500,1000,["#0A2A73","#0057D9","#061A4A","#FFC247"],"Computer Skill Series",308,["Computer Fundamentals, Windows 11, MS Office","Internet, Typing, Tally + GST","HTML & CSS, Database & SQL"])
 ,B("ADCA — Advanced Diploma in Computer Applications","13 modules • 875+ MCQ • Basic से Advanced","HITARTHI","student",600,1200,["#0A2A73","#0057D9","#061A4A","#FFC247"],"Computer Skill Series",759,["Word, Excel, PowerPoint, Access","Tally with GST, Networking, Photoshop","C & Python, HTML & CSS, Hindi-English typing"])
 ,B("MS Access और Database Management","Volume 1 — बुनियाद (Foundations)","HITARTHI","student",89,178,["#7F1D1D","#B91C1C","#450A0A","#FFC247"],"Computer Skill Series",87,["Database क्या है, Tables और Fields","Queries, Forms, Reports","Practical labs + MCQ"])
 ,B("Financial Literacy","पैसे को समझें • संभालें • बढ़ाएँ — 21 अध्याय, 30-दिन चैलेंज","HITARTHI","finance",199,398,["#7F1D1D", "#B91C1C", "#450A0A", "#FFD34D"],"Financial Awareness Series",204,["Budget, बचत, EMI और बीमा की समझ", "Tax की आसान समझ, सरकारी योजनाएँ", "Scam और Digital Arrest से बचाव"])
 ,B("डिग्री से आगे","भविष्य के लिए शिक्षा — 18 अध्याय, 12 वर्कशीट","HITARTHI","student",119,238,["#0A2A73", "#0057D9", "#061A4A", "#FFC247"],"Education",122,["AI और कौशल की समझ", "पैसे और संस्कार की शिक्षा", "NEP 2020 और future-ready बच्चे"])
 ,B("Gmail & Email Management","ईमेल की पूरी जानकारी — Hindi + English Practical Guide","HITARTHI","student",409,818,["#0A2A73", "#0057D9", "#061A4A", "#FFC247"],"Computer Skill Series",410,["Gmail के सारे features", "Professional email लिखना", "Security, labels, filters और productivity"])
 ,B("TIME MANAGEMENT","अपना समय वापस पाएँ, फोकस बढ़ाएँ — Improved Edition","HITARTHI","self",109,218,["#0A2A73", "#2563EB", "#061A4A", "#FFC247"],"Self Growth Series",108,["रोज़ 2 घंटे वापस पाने के तरीके", "गहरा फोकस, मोबाइल पर लगाम", "21 दिन का habit plan"])
 ,B("SMART SELLING","ग्राहक को समझिए • भरोसा बनाइए • आत्मविश्वास से बेचिए","HITARTHI","business",79,158,["#1E1B4B", "#4338CA", "#0F0A3C", "#FFC247"],"Skill Series",77,["7 सवाल जो ग्राहक को समझाएँ", "9 objections का जवाब", "5 closing तरीके + 7 दिन sales challenge"])
 ,B("SALES WARRIOR","बेचो नहीं, ज़िंदगियाँ बदलो — 15 chapters, 25+ ready scripts","HITARTHI","business",79,158,["#0A2A73", "#1D4ED8", "#061A4A", "#FFC247"],"Sales Team Guide",80,["25+ ready scripts", "क्या बोलें, क्या करें", "30 दिन का challenge"])
];
[["Basic Computer — खेल-खेल में","basic"],["MS Word Made Easy","word"],["MS Excel Mastery","excel"],["MS PowerPoint Made Easy","ppt"],["DCA — Diploma in Computer Applications","dca"],["ADCA — Advanced Diploma in Computer Applications","adca"],["MS Access और Database Management","access"]].forEach(([t,k])=>{const b=BOOKS.find(x=>x.t===t);if(b){b.img=b.img0=HB_EB[k].img;}});
const HB_BCOV={"Financial Literacy":"img/8abc3b0e70cb.jpg","डिग्री से आगे":"img/eed269e4e665.jpg","Gmail & Email Management":"img/7fee335946ff.jpg","TIME MANAGEMENT":"img/834c8d3d4b62.jpg","SMART SELLING":"img/3d7a6ec735c8.jpg","SALES WARRIOR":"img/50468d8c54ba.jpg","GOAL SETTING & LIFE PLANNING":"img/db7dbc4258c7.jpg","The Personality Blueprint":"img/506a5c24af0b.jpg","THE TIME BLUEPRINT":"img/f0d6a6adbbe9.jpg"};
Object.keys(HB_BCOV).forEach(t=>{const b=BOOKS.find(x=>x.t===t);if(b)b.img=b.img0=HB_BCOV[t];});
/* नई books (1–2 Nov 2026 upload) → "Buy Now"; पुरानी → "Cart में जोड़ें" */
const HB_NEW=["Basic Computer — खेल-खेल में","MS Word Made Easy","MS Excel Mastery","MS PowerPoint Made Easy","DCA — Diploma in Computer Applications","ADCA — Advanced Diploma in Computer Applications","MS Access और Database Management","Financial Literacy","GOAL SETTING & LIFE PLANNING","डिग्री से आगे","Gmail & Email Management","TIME MANAGEMENT","The Personality Blueprint","SMART SELLING","SALES WARRIOR","THE TIME BLUEPRINT"];
BOOKS.forEach(b=>{b.nw=HB_NEW.includes(b.t);});
const bookBtn=(b,i,cls,lbl)=>b.nw?`<button class="btn btn-orange ${cls} bb-buy" data-buy="${i}">⚡ Buy Now${lbl||""}</button>`:`<button class="btn btn-orange ${cls}" data-add="${i}">Cart में जोड़ें${lbl||""}</button>`;
const BOOK_PAL={finance:["#0E5A34","#1FA85A","#073A21","#FFD34D"],business:["#7C2D12","#EA580C","#4A1A0B","#FFE066"],self:["#831843","#DB2777","#500724","#FFD34D"],english:["#312E81","#4F46E5","#1E1B4B","#FFC247"],student:["#0A2A73","#0057D9","#061A4A","#FFC247"],kids:["#9D174D","#F472B6","#500724","#FFE066"]};
const HB_BCOV2={"C++ Programming":"img/3a65e03eaeb2.webp","Tally Prime with GST":"img/599ba9b99f4a.webp","CCC Course":"img/13d9b9275b9a.webp","Complete Keyboard Guide":"img/7e97eacc31dd.webp"};
function hbMergeBooks(list){if(!Array.isArray(list)||!list.length)return false;const seen=new Set();
  list.forEach(r=>{const t=String(r.t||"").trim();if(!t)return;const i=BOOKS.findIndex(b=>b.t.toLowerCase()===t.toLowerCase());
    const col=Array.isArray(r.col)&&r.col.length===4?r.col:null,img=HB_BCOV2[t]||(/^https:\/\//.test(String(r.img||""))?String(r.img):(i>=0&&BOOKS[i].img0)||"");
    const v={s:String(r.s||""),a:String(r.a||"HITARTHI"),bcat:BOOK_PAL[r.bcat]?r.bcat:"self",e:Math.max(0,+r.e||0),p:Math.max(0,+r.p||0),c:Math.max(0,+r.c||0),img,shelf:r.shelf!==false,pages:+r.pages||0,learn:Array.isArray(r.learn)?r.learn.map(String):[],ser:String(r.ser||""),hide:false};
    if(i>=0){Object.assign(BOOKS[i],v);if(col)BOOKS[i].col=col;seen.add(i);}
    else{BOOKS.push(Object.assign({t,col:col||BOOK_PAL[v.bcat]},v));seen.add(BOOKS.length-1);}});
  BOOKS.forEach((b,i)=>{if(!seen.has(i))b.hide=true;});return true;}
try{const c=JSON.parse(localStorage.getItem("hb_books")||"null");if(c&&c.v===1)hbMergeBooks(c.list);}catch(e){}
/* website बनते समय की books list — पहली बार आने वाले को भी छिपी books न दिखें */
const HB_SNAP0={"ok":true,"books":[{"t":"GOAL SETTING & LIFE PLANNING","s":"लक्ष्य तय करें • सही दिशा चुनें","a":"HITARTHI","bcat":"self","e":249,"p":498,"img":"","shelf":true,"pages":254,"learn":["SMART goals बनाना","जीवन के हर क्षेत्र की योजना","Goal tracker worksheets"],"ser":"Life Planning","col":["#065F46","#10B981","#022C22","#FFE066"],"ord":14},{"t":"THE TIME BLUEPRINT","s":"समय को जीतो, जिंदगी जीतो","a":"HITARTHI","bcat":"self","e":59,"p":118,"img":"","shelf":true,"pages":57,"learn":["Priority तय करना","टालने की आदत छोड़ना","Daily और weekly planner"],"ser":"Time Management","col":["#0C4A6E","#0EA5E9","#082F49","#FFC247"],"ord":15},{"t":"The Personality Blueprint","s":"Personality Development","a":"HITARTHI","bcat":"self","e":69,"p":138,"img":"","shelf":true,"pages":69,"learn":["आत्मविश्वास बढ़ाना","बोलचाल और body language","पहली छाप कैसे अच्छी बनाएँ"],"ser":"Personality","col":["#581C87","#A855F7","#3B0764","#FFD34D"],"ord":16},{"t":"Basic Computer — खेल-खेल में","s":"Mouse पकड़ने से Email भेजने तक — step-by-step","a":"HITARTHI","bcat":"student","e":109,"p":218,"img":"","shelf":true,"pages":114,"learn":["Computer के भाग, Windows, File-Folder","MS Word, Excel, PowerPoint की शुरुआत","Internet, Email और Cyber Safety"],"ser":"Computer Skill Series","col":[],"ord":25},{"t":"MS Word Made Easy","s":"शुरुआत से Professional Document तक","a":"HITARTHI","bcat":"student","e":89,"p":178,"img":"","shelf":true,"pages":92,"learn":["Typing, formatting, table, picture","Styles, Table of Contents, Mail Merge","Resume, letter और 5 real projects"],"ser":"Computer Skill Series","col":[],"ord":26},{"t":"MS Excel Mastery","s":"Excel सीखें • Data समझें • Career बनाएं","a":"HITARTHI","bcat":"student","e":59,"p":118,"img":"","shelf":true,"pages":61,"learn":["Formulas और functions","VLOOKUP / XLOOKUP, Pivot Table","Charts और dashboard"],"ser":"Computer Skill Series","col":[],"ord":27},{"t":"MS PowerPoint Made Easy","s":"स्लाइड बनाओ • डिज़ाइन करो • एनिमेशन से जादू दिखाओ","a":"HITARTHI","bcat":"student","e":79,"p":158,"img":"","shelf":true,"pages":79,"learn":["Slides, design और pictures","Charts और SmartArt","Animation, transition, presentation"],"ser":"Computer Skill Series","col":[],"ord":28},{"t":"DCA — Diploma in Computer Applications","s":"Complete Computer Course — Theory + Practical + Projects","a":"HITARTHI","bcat":"student","e":500,"p":1000,"img":"","shelf":true,"pages":308,"learn":["Computer Fundamentals, Windows 11, MS Office","Internet, Typing, Tally + GST","HTML & CSS, Database & SQL"],"ser":"Computer Skill Series","col":[],"ord":29},{"t":"ADCA — Advanced Diploma in Computer Applications","s":"13 modules • 875+ MCQ • Basic से Advanced","a":"HITARTHI","bcat":"student","e":600,"p":1200,"img":"","shelf":true,"pages":759,"learn":["Word, Excel, PowerPoint, Access","Tally with GST, Networking, Photoshop","C & Python, HTML & CSS, Hindi-English typing"],"ser":"Computer Skill Series","col":[],"ord":30},{"t":"MS Access और Database Management","s":"Volume 1 — बुनियाद (Foundations)","a":"HITARTHI","bcat":"student","e":89,"p":178,"img":"","shelf":true,"pages":87,"learn":["Database क्या है, Tables और Fields","Queries, Forms, Reports","Practical labs + MCQ"],"ser":"Computer Skill Series","col":[],"ord":31},{"t":"Financial Literacy","s":"पैसे को समझें • संभालें • बढ़ाएँ — 21 अध्याय, 30-दिन चैलेंज","a":"HITARTHI","bcat":"finance","e":199,"p":398,"img":"","shelf":true,"pages":204,"learn":["Budget, बचत, EMI और बीमा की समझ","Tax की आसान समझ, सरकारी योजनाएँ","Scam और Digital Arrest से बचाव"],"ser":"Financial Awareness Series","col":[],"ord":32},{"t":"डिग्री से आगे","s":"भविष्य के लिए शिक्षा — 18 अध्याय, 12 वर्कशीट","a":"HITARTHI","bcat":"student","e":119,"p":238,"img":"","shelf":true,"pages":122,"learn":["AI और कौशल की समझ","पैसे और संस्कार की शिक्षा","NEP 2020 और future-ready बच्चे"],"ser":"Education","col":[],"ord":33},{"t":"Gmail & Email Management","s":"ईमेल की पूरी जानकारी — Hindi + English Practical Guide","a":"HITARTHI","bcat":"student","e":409,"p":818,"img":"","shelf":true,"pages":410,"learn":["Gmail के सारे features","Professional email लिखना","Security, labels, filters और productivity"],"ser":"Computer Skill Series","col":[],"ord":34},{"t":"TIME MANAGEMENT","s":"अपना समय वापस पाएँ, फोकस बढ़ाएँ — Improved Edition","a":"HITARTHI","bcat":"self","e":109,"p":218,"img":"","shelf":true,"pages":108,"learn":["रोज़ 2 घंटे वापस पाने के तरीके","गहरा फोकस, मोबाइल पर लगाम","21 दिन का habit plan"],"ser":"Self Growth Series","col":[],"ord":35},{"t":"SMART SELLING","s":"ग्राहक को समझिए • भरोसा बनाइए • आत्मविश्वास से बेचिए","a":"HITARTHI","bcat":"business","e":79,"p":158,"img":"","shelf":true,"pages":77,"learn":["7 सवाल जो ग्राहक को समझाएँ","9 objections का जवाब","5 closing तरीके + 7 दिन sales challenge"],"ser":"Skill Series","col":[],"ord":36},{"t":"SALES WARRIOR","s":"बेचो नहीं, ज़िंदगियाँ बदलो — 15 chapters, 25+ ready scripts","a":"HITARTHI","bcat":"business","e":79,"p":158,"img":"","shelf":true,"pages":80,"learn":["25+ ready scripts","क्या बोलें, क्या करें","30 दिन का challenge"],"ser":"Sales Team Guide","col":[],"ord":37},{"t":"C++ Programming","s":"C और C++ — शुरुआत से Projects तक, सरल हिंदी में","a":"HITARTHI","bcat":"student","e":350,"p":700,"c":1050,"img":"","shelf":true,"pages":764,"learn":["C और C++ की बुनियाद: variables, loops, functions","OOP — class, object, inheritance आसान उदाहरणों से","Practice programs + interview प्रश्न"],"ser":"Computer Skill Series","col":[],"ord":38},{"t":"Tally Prime with GST","s":"Accounting, Billing, GST Return — step-by-step","a":"HITARTHI","bcat":"student","e":149,"p":249,"c":398,"img":"","shelf":true,"pages":113,"learn":["Company बनाना, Ledger, Voucher entry","GST invoice, GSTR-1 / 3B की समझ","Inventory, Reports और Balance Sheet"],"ser":"Computer Skill Series","col":[],"ord":39},{"t":"CCC Course","s":"Course on Computer Concepts — NIELIT परीक्षा की पूरी तैयारी","a":"HITARTHI","bcat":"student","e":230,"p":460,"c":690,"img":"","shelf":true,"pages":230,"learn":["CCC का पूरा syllabus सरल भाषा में","Office, Internet, Digital Payment, Cyber Security","MCQ practice + exam tips"],"ser":"Computer Skill Series","col":[],"ord":40},{"t":"Complete Keyboard Guide","s":"Keyboard की पूरी जानकारी — Basic से Advanced तक","a":"HITARTHI","bcat":"student","e":99,"p":199,"c":298,"img":"","shelf":true,"pages":47,"learn":["हर key का काम और सही उँगली","200+ shortcut keys (Windows, Word, Excel, Chrome)","Hindi-English typing और speed बढ़ाने के तरीके"],"ser":"Computer Skill Series","col":[],"ord":41}]};
try{if(!localStorage.getItem("hb_books")&&HB_SNAP0&&Array.isArray(HB_SNAP0.books))hbMergeBooks(HB_SNAP0.books);}catch(e){}
const hbOk=i=>!!(BOOKS[i]&&!BOOKS[i].hide);
/* पहले से तय (hardcoded) book की जगह छिपी book हो → उसकी जगह कोई दिखने वाली book (हर छिपी book के लिए अलग) */
const hbMap=(()=>{const m={},used=new Set();return i=>{if(hbOk(i))return i;if(m[i]==null){const L=(()=>{const x=BOOKS.map((b,j)=>j).filter(j=>!BOOKS[j].hide&&BOOKS[j].shelf!==false);return x.length?x:[0];})();m[i]=L.find(j=>!used.has(j))??L[0];used.add(m[i]);}return m[i];};})();
const bdOk=bd=>!!bd&&bd.items.every(hbOk);
const HB_SHELF=()=>{const L=BOOKS.map((b,i)=>i).filter(i=>!BOOKS[i].hide&&BOOKS[i].shelf!==false);return L.length?L:[0];};
const hbNextShelf=(i,d)=>{const L=HB_SHELF();let k=L.indexOf(i);if(k<0)k=0;return L[(k+d+L.length)%L.length];};
const HIMG={"oil":{f:"img/2a5af1f9a8cb.webp",a:"img/2dfa9c4c2c79.webp"},"dact":{f:"img/258b62bc8a9a.webp",a:"img/b3522a7f8349.webp"},"nlife":{f:"img/2189bfa14e7a.webp",a:"img/9d4e7ccfd629.webp"},"nplus":{f:"img/c9402b96076f.webp",a:"img/55b9e81aef76.webp"},"jp":{f:"img/cab231b0286c.webp",a:"img/7eb156d60fb8.webp"},"vita":{f:"img/d7258a5ed0fc.webp",a:"img/f0cb6f40a2cc.webp"}};

/* ---------- HITARTHI HEALTH PRODUCTS — नया product यहाँ जोड़ें (photo HIMG में) ---------- */
const HCATS=[["all","सभी"],["nutrition","पोषण पेय"],["vitamins","Vitamins"],["ayurveda","आयुर्वेद"],["hair","बालों की देखभाल"]];
const HPROD=[
 {k:"nplus",n:"NutriPlus",full:"HITARTHI NutriPlus Complete Nutrition Drink",cat:"nutrition",size:"400 g",flav:"केसर बादाम",mrp:1200,unit:"₹3 / g",c:["#14532D","#16A34A","#FBBF24"],
  tag:"सही पोषण, बेहतर जीवन — बच्चों, युवाओं, महिलाओं और बुज़ुर्गों के लिए",
  pts:["High Protein — हर 30 g में 10 g protein","बादाम, काजू, अखरोट, खजूर, पिस्ता, केसर और ओट्स","No Added Sugar • No Artificial Colours • 100% Vegetarian"],
  ing:"बादाम, काजू, अखरोट, खजूर, पिस्ता, ओट्स, केसर, प्राकृतिक जड़ी-बूटियाँ, Vitamins व Minerals, प्राकृतिक flavour (केसर बादाम)। इसमें Milk Solids हैं।",
  use:"1–2 scoop (लगभग 30 g) को 200–250 ml दूध या पानी में अच्छी तरह मिलाएँ। दिन में 1 या 2 बार लें।",
  who:"पूरा परिवार — बढ़ते बच्चे, पढ़ाई और काम करने वाले युवा, महिलाएँ और बुज़ुर्ग।",
  ben:["रोज़ की ऊर्जा और ताक़त में सहायक","हड्डियों और मांसपेशियों के पोषण में सहायक","पाचन और रोज़ की सेहत में सहायक"],
  care:"ठंडी और सूखी जगह पर रखें। ढक्कन कसकर बंद करें। यह दवा नहीं, पोषण आहार है। किसी एलर्जी की स्थिति में सेवन बंद करें।"},
 {k:"nlife",n:"NutriLife",full:"HITARTHI NutriLife Complete Nutrition Drink",cat:"nutrition",size:"400 g",flav:"केसर बादाम",mrp:1200,unit:"₹3 / g",c:["#166534","#65A30D","#F59E0B"],
  tag:"40+ प्राकृतिक घटक — बच्चों, युवाओं और पूरे परिवार के लिए",
  pts:["हर 30 g में 120 kcal, 10 g protein, Calcium, Iron, Zinc","बादाम, काजू, अखरोट, खजूर, अश्वगंधा, शतावरी, सफ़ेद मूसली","No Added Sugar • No Preservatives • 100% Vegetarian"],
  ing:"बादाम, काजू, अखरोट, खजूर, Milk Solids, Soya Protein (Non-GMO), ओट्स, अलसी, चिया बीज, अश्वगंधा, शतावरी, सफ़ेद मूसली, काली तिल, इलायची, Vitamins व Minerals।",
  use:"1–2 scoop (लगभग 30 g) को 200–250 ml दूध या पानी में मिलाएँ, अच्छी तरह हिलाएँ। दिन में 1 या 2 बार लें।",
  who:"बढ़ते बच्चे, students और युवा — और पूरा परिवार।",
  ben:["Immunity को सहारा","हड्डियों की मज़बूती में सहायक","ऊर्जा, stamina और मानसिक विकास में सहायक"],
  care:"दवा नहीं, पोषण पूरक है। Milk और Soya है — एलर्जी हो तो न लें। ठंडी, सूखी जगह पर रखें।"},
 {k:"jp",n:"जीवनप्राश",full:"HITARTHI जीवनप्राश — सम्पूर्ण परिवार के लिए",cat:"ayurveda",size:"500 g",mrp:720,unit:"₹1.44 / g",c:["#7F1D1D","#B91C1C","#FBBF24"],
  tag:"40+ आयुर्वेदिक जड़ी-बूटियों का पोषण — Complete Family Health Tonic",
  pts:["आंवला, अश्वगंधा, शतावरी, गिलोय, हरीतकी, बहेड़ा, केसर","बच्चे (5–12 वर्ष), बड़े और बुज़ुर्ग — सबके लिए","No Added Sugar • No Artificial Colours • 100% Vegetarian"],
  ing:"आंवला, अश्वगंधा, शतावरी, गिलोय, हरीतकी, बहेड़ा, दालचीनी, पिप्पली, काली मिर्च, केसर, इलायची, लौंग, ब्राह्मी, शंखपुष्पी, मुलेठी, सफ़ेद मूसली, विदारीकंद, घृत, शहद और अन्य आयुर्वेदिक जड़ी-बूटियाँ।",
  use:"बड़े: 1–2 चम्मच सुबह और रात, दूध या गुनगुने पानी के साथ। बच्चे (5–12 वर्ष): रोज़ 1 चम्मच। बुज़ुर्ग: स्वास्थ्य के अनुसार 1–2 चम्मच।",
  who:"पूरा परिवार — बदलते मौसम में रोज़ की सेहत के लिए।",
  ben:["रोग प्रतिरोधक क्षमता को सहारा","ऊर्जा, पाचन और साँस संबंधी सेहत में सहायक","रोज़ की ताक़त और स्फूर्ति"],
  care:"सूखे चम्मच से निकालें। ठंडी, सूखी जगह पर रखें। बच्चों की पहुँच से दूर रखें। यह दवा नहीं, आयुर्वेदिक पोषक आहार है।"},
 {k:"dact",n:"Daily Active",full:"HITARTHI Daily Active Multivitamin & Multimineral",cat:"vitamins",size:"30 Capsules",mrp:650,unit:"₹21.67 / capsule",c:["#1E3A8A","#2563EB","#FBBF24"],
  tag:"13 Vitamins + 12 Minerals + 8 Essential Amino Acids + Botanical Extracts",
  pts:["रोज़ सिर्फ़ 1 capsule — खाने के बाद पानी के साथ","Ginseng, अश्वगंधा, Green Tea, तुलसी, आंवला, गोखरू","No Added Sugar • No Preservatives • 100% Vegetarian"],
  ing:"Vitamin A, B1, B2, B3, B5, B6, B9, B12, C, D3, E, K2-7, Biotin; Calcium, Magnesium, Zinc, Iron, Selenium आदि; L-Lysine, L-Leucine आदि Amino Acids; Ginseng, Ashwagandha, Green Tea, Tulsi, Amla, Gokhru। Vegetarian capsule (HPMC)। इसमें Soy है।",
  use:"रोज़ 1 capsule, खाने के बाद पानी के साथ।",
  who:"काम-काजी और व्यस्त बड़े (Adults) — जिन्हें रोज़ के खाने से पूरा पोषण नहीं मिल पाता।",
  ben:["ऊर्जा और stamina में सहायक","Immunity, हड्डियों और दिमाग़ के पोषण में सहायक","संपूर्ण सेहत (overall wellness)"],
  care:"बच्चों के लिए नहीं। गर्भवती/स्तनपान कराने वाली महिलाएँ या दवा ले रहे लोग डॉक्टर से पूछकर लें। यह किसी बीमारी के इलाज के लिए नहीं है।"},
 {k:"vita",n:"VITA+",full:"HITARTHI VITA+ Daily Nutrition Capsules",cat:"vitamins",size:"30 Capsules",mrp:650,unit:"₹21.67 / capsule",c:["#0C4A6E","#0284C7","#FBBF24"],
  tag:"Daily Nutrition Capsules — 13 Vitamins, 12 Minerals, 8 Amino Acids",
  pts:["Nutraceutical — बड़ों (Adults) के लिए","Botanical Extracts के साथ","No Added Sugar • No Artificial Colours • 100% Vegetarian"],
  ing:"Mineral Premix, Vitamin Premix (A, B1, B2, B3, B5, B6, B12, C, D3, E, K2-7, Biotin), Essential Amino Acids, Botanical Extracts (Ginseng, Ashwagandha, Green Tea, Tulsi, Amla, Gokhru)। Vegetarian capsule। इसमें Soy है।",
  use:"रोज़ 1 capsule, खाने के बाद पानी के साथ।",
  who:"बड़े (Adults) — रोज़ के पोषण की कमी पूरी करने के लिए।",
  ben:["ऊर्जा में सहायक","आँखों, नसों और हड्डियों के पोषण में सहायक","Immunity को सहारा"],
  care:"बच्चों के लिए नहीं। गर्भवती/स्तनपान कराने वाली महिलाएँ या दवा ले रहे लोग डॉक्टर से पूछकर लें। यह किसी बीमारी के इलाज के लिए नहीं है।"},
 {k:"oil",n:"Mahabhringraj Hair Oil",full:"HITARTHI Herbal Care Mahabhringraj Hair Oil",cat:"hair",size:"100 ml",mrp:280,unit:"₹2.80 / ml",c:["#14532D","#15803D","#EAB308"],
  tag:"घने, लंबे और काले बालों के लिए — Premium Ayurvedic Hair Oil",
  pts:["भृंगराज, आंवला, नीम, मेहंदी, ब्राह्मी, जटामांसी","तिल और नारियल तेल में बना","No Mineral Oil • No Silicone • No Artificial Colours"],
  ing:"भृंगराज, आंवला, नीम, मेहंदी, ब्राह्मी, जटामांसी, तिल तेल, नारियल तेल।",
  use:"थोड़ा तेल हाथ में लें, उँगलियों से स्कैल्प पर हल्की मालिश करें, कम से कम 1–2 घंटे रहने दें, फिर माइल्ड शैम्पू से धो लें।",
  who:"बाल झड़ने, कमज़ोर-पतले बाल, रूखा स्कैल्प और डैंड्रफ़ की परेशानी वाले — पुरुष और महिलाएँ।",
  ben:["बाल झड़ना कम करने में सहायक","स्कैल्प को पोषण, बालों को मज़बूती और चमक","डैंड्रफ़ और रूखेपन में सहायक"],
  care:"केवल बाहरी उपयोग के लिए। आँखों में जाने से बचाएँ। बच्चों की पहुँच से दूर रखें। एलर्जी हो तो उपयोग बंद करें।"}
];
const hIdx=k=>HPROD.findIndex(x=>x.k===k);
const BCATS=[["all","सभी"],["printed","📦 Printed Books"],["computer","💻 Computer Books"],["finance","Finance"],["business","Business"],["self","Self-help"],["english","English"],["student","Students"],["kids","बच्चों के लिए"]];
const BUNDLES=[
 {n:"Finance Starter Bundle",d:"पैसे की समझ शुरू से निवेश की शिक्षा तक",items:[1,2,0]},
 {n:"Self-Growth Bundle",d:"सोच, लक्ष्य और समय — तीनों पर काम",items:[9,11,14,13]},
 {n:"Student Success Bundle",d:"Class 8 से college तक के छात्रों के लिए",items:[20,19,17,18]},
 {n:"Business Owner Bundle",d:"दुकान और व्यवसाय बढ़ाने के लिए",items:[5,7,4]}
];
BUNDLES.push({n:"HITARTHI Bestseller Combo — 7 Printed Books",d:"7 Hindi self-help books, घर पर free delivery",items:[9,10,11,12,13,14,16],printed:true,price:1499});
const COMBO_I=BUNDLES.length-1;
const bundlePrice=b=>{if(b.price){const full=b.items.reduce((a,i)=>a+BOOKS[i].p,0);return {full,now:b.price};}const full=b.items.reduce((a,i)=>a+BOOKS[i].e,0);return {full,now:Math.round(full*(1-BUNDLE_OFF)/10)*10-1};};

const EMB={
 finance:'<svg viewBox="0 0 32 32" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 26h22"/><path d="M8 22v-4M13 22v-7M18 22v-5M23 22v-10"/><path d="M6 14l7-6 5 4 8-7"/><path d="M21 5h5v5"/></svg>',
 business:'<svg viewBox="0 0 32 32" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4c5 3 7 8 6 14l-6 5-6-5c-1-6 1-11 6-14z"/><circle cx="16" cy="13" r="2.5"/><path d="M10 18l-4 4 4 1M22 18l4 4-4 1M14 25l2 4 2-4"/></svg>',
 self:'<svg viewBox="0 0 32 32" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 26l9-12 6 7 4-4 7 9z"/><path d="M12 14V5l6 3-6 3"/><circle cx="25" cy="8" r="2.5"/></svg>',
 english:'<svg viewBox="0 0 32 32" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h24v15H13l-6 5v-5H4z"/><path d="M10 17l3-8 3 8M11 14.5h4M19 12.5a2.5 2.5 0 015 0V17M24 14.5h-3a1.5 1.5 0 000 3h3"/></svg>',
 student:'<svg viewBox="0 0 32 32" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12l14-6 14 6-14 6z"/><path d="M8 15v6c4 4 12 4 16 0v-6"/><path d="M30 12v8"/></svg>',
 kids:'<svg viewBox="0 0 32 32" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="11" r="7"/><path d="M16 18v10M11 28h10"/><path d="M12 10l2 2M18 12l2-2"/><path d="M4 28c2-4 4-5 6-5M28 28c-2-4-4-5-6-5"/></svg>'
};
const FIN=[["Money Mindset","पैसे के बारे में सही सोच"],["कमाई बनाम खर्च","Income vs Expense का हिसाब"],["ज़रूरत बनाम इच्छा","Needs vs Wants"],["Asset बनाम Liability","क्या पैसा लाता है, क्या ले जाता है"],["बचत बनाम निवेश","Saving vs Investing"],["Compounding","समय के साथ पैसा कैसे बढ़ता है"],["महँगाई (Inflation)","पैसे की ताकत क्यों घटती है"],["Emergency Fund","6 महीने के खर्च की सुरक्षा"],["Insurance","Term और Health cover की समझ"],["Loan और EMI","कर्ज़ कब लें, कब नहीं"],["Credit Score","अच्छा score कैसे बनाएँ"],["Scam से बचाव","Fake scheme और fraud पहचानें"]];
const FAQ=[
 ["Classes online हैं या offline?","अभी सारी classes online live होती हैं। Mobile या computer — किसी से भी जुड़ सकते हैं। हर class की recording भी मिलती है।"],
 ["Counselling कैसे मिलती है?","बिल्कुल मुफ़्त। Form भरें या WhatsApp करें — हम आपके समय के अनुसार एक live demo class देते हैं। Demo पसंद आए, तभी पूरी fee भरें।"],
 ["क्या Certificate मिलेगा?","हाँ, course के project और final test पूरे करने पर HITARTHI का certificate मिलता है।"],
 ["क्या नौकरी की guarantee है?","नहीं, हम job की guarantee नहीं देते। हम ऐसी practical skill, portfolio और interview तैयारी देते हैं जिससे आपके अवसर बढ़ें।"],
 ["Fee किश्तों में दे सकते हैं?","हाँ, ₹2,999 से अधिक fee वाले courses में किश्तों की सुविधा है। Counseling में पूरी जानकारी मिलेगी।"],
 ["Printed book का delivery charge कितना है?","हर printed order पर ₹50। अगर printed books का कुल मूल्य ₹999 या अधिक है तो delivery free है। Delivery 5–8 कार्य-दिवस में होती है।"],
 ["Combo क्या है?","Combo में आपको printed book घर पर और उसी book की E-book WhatsApp पर मिलती है — printed कीमत + e-book की सिर्फ़ आधी कीमत में।"],
 ["Financial course में क्या share खरीदने की सलाह मिलेगी?","नहीं। हम सिर्फ़ शिक्षा देते हैं — पैसे को समझना, जोखिम पहचानना और सही प्रश्न पूछना। Buy/Sell की सलाह नहीं दी जाती।"]
];
const BATCHES=[["Basic Computer","सुबह 7:00 – 8:00","सोम – शुक्र","2 महीने","live"],["MS Office Complete","सुबह 8:00 – 9:00","सोम – शनि","3 महीने","live"],["Advanced Excel","शाम 5:00 – 6:00","सोम – शुक्र","2 महीने","live"],["Spoken English","शाम 6:00 – 7:00","सोम – शनि","3 महीने","live"],["AI Tools for Everyone","शाम 7:00 – 8:00","मंगल, गुरु, शनि","1 महीना","live"],["Speed Typing","कभी भी","रोज़ practice","1.5 महीने","rec"],["Financial Literacy Basics","रात 8:00 – 9:00","शनि, रवि","1 महीना","live"],["Computer for Kids","शाम 4:00 – 5:00","सोम, बुध, शुक्र","2 महीने","live"]];
const ROADS=[
 {id:"office",n:"Office Job",items:["Basic Computer Course","MS Office Complete","Advanced Excel","Speed Typing (Hindi + English)","Interview Preparation"],end:"Data Entry, Office Assistant, MIS Executive जैसे कामों की तैयारी"},
 {id:"digital",n:"Online / Freelance कमाई",items:["AI Tools for Everyone","Graphic Design with Canva","Social Media Management","Digital Marketing","Video Editing (Mobile + PC)"],end:"Freelance design, social media और marketing का काम"},
 {id:"it",n:"Coding / IT Career",items:["Computer Fundamentals","Python Programming","Web Development","Data Science Basics"],end:"Junior developer और data से जुड़े कामों की नींव"},
 {id:"biz",n:"अपना Business बढ़ाएँ",items:["Small Business Strategy","Sales Mastery","Digital Marketing","Accounting with Tally Prime + GST","Financial Literacy Basics"],end:"ज़्यादा ग्राहक, सही हिसाब और बेहतर profit की समझ"},
 {id:"money",n:"पैसे की पूरी समझ",items:["Financial Literacy Basics","Money Management & Budgeting","Loan, EMI & Credit Score","Compounding & SIP Basics","Stock Market Fundamentals (शिक्षा)"],end:"बचत, निवेश और जोखिम के बारे में समझदार निर्णय"},
 {id:"kids",n:"बच्चों के लिए (8–15)",items:["Computer for Kids","Typing Shala for Kids","Money Smart Kids","Student Life Skills"],end:"Computer, typing, पैसे और जीवन की मज़बूत शुरुआत"},
 {id:"english",n:"English और Interview",items:["English Word Power","Spoken English","Personality Development","Public Speaking","Interview Preparation"],end:"बिना झिझक बोलना और interview में आत्मविश्वास"}
];

/* ---------- HELPERS ---------- */
const catOf=id=>CATS.find(c=>c.id===id);
const AUDC={computer:"शुरुआती, छात्र, office की नौकरी चाहने वाले",ai:"छात्र, नौकरी वाले, teachers, जो AI सीखना चाहें",digital:"छात्र, freelancers, दुकानदार",english:"छात्र, job seekers, नौकरी वाले",finance:"हर उम्र के लोग, परिवार, नौकरी वाले",business:"दुकानदार, व्यवसायी, नया काम शुरू करने वाले",kids:"8–15 वर्ष के बच्चे (अभिभावकों के साथ)",life:"Class 5 से college तक के छात्र"};
function courseCard(c){
  const k=catOf(c.cat);
  return `<article class="card course lift" style="--cc:linear-gradient(90deg,${k.g[0]},${k.g[1]})">
    <div class="band-top"></div>
    <div class="cthumb" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${k.ic}</svg></div>
    ${c.pop?'<span class="popular">POPULAR</span>':""}
    <div class="top"><span class="tag" style="background:color-mix(in srgb,${k.g[0]} 14%,var(--surface));color:${k.g[0]}">${esc(k.name)}</span></div>
    <h3>${esc(c.name)}</h3>
    <p class="hin">${esc(c.hin)}</p>
    <p class="aud">👤 ${esc(AUDC[c.cat]||"")}</p>
    <div class="meta"><span>अवधि: <b>${esc(c.dur)}</b></span><span>Level: <b>${esc(c.level)}</b></span><span>Mode: <b>Online Live</b></span></div>
    <ul>${c.out.map(o=>`<li>${esc(o)}</li>`).join("")}</ul>
    <div class="foot"><span class="price num">${rs(c.fee)}</span><span class="cbtns"><button class="btn btn-ghost btn-sm" data-cdetail="${esc(c.name)}">Details</button><button class="btn btn-primary btn-sm" data-enroll="${esc(c.name)}">Enroll</button></span></div>
  </article>`;
}
function book3d(b,size){
  const L=b.t.length, sz=L>24?"s3":L>14?"s2":"", prem=b.e>=799;
  return `<div class="b3 ${size||""}" style="--c1:${b.col[0]};--c2:${b.col[1]};--c3:${b.col[2]};--acc:${b.col[3]}">
    <div class="front">
      <span class="tex"></span><span class="frame"></span>
      ${prem?'<span class="prem">PREMIUM</span>':""}
      ${b.img?`<img class="cov" src="${esc(b.img)}" alt="" loading="lazy" onerror="this.remove()">`:""}<div class="ctop"><svg><use href="#logo"/></svg><span>HITARTHI</span></div>
      <div class="serl">${esc(b.ser)}</div>
      <div class="emb">${EMB[b.bcat]||""}</div>
      <div class="ttl ${sz} ${prem?"gold":""}">${esc(b.t)}</div>
      <div class="rule"></div>
      <div class="sub">${esc(b.s)}</div>
      <div class="cfoot"><b>HITARTHI</b><span>Publications</span></div>
      <span class="hinge"></span><span class="gloss"></span>
    </div>
  </div>`;
}
const fmtState={};
const fmtOf=(b,i)=>b.p>0?(fmtState[i]||"e"):"e";
const comboOf=b=>(+b.c>0?+b.c:b.p+Math.round(b.e/2));
const priceOf=(b,f)=>f==="e"?b.e:f==="p"?b.p:comboOf(b);
const fmtName=f=>f==="e"?"E-book (PDF)":f==="p"?"Printed Book":"Combo (Printed + E-book)";
function fmtGroup(b,i,f){
  return `<div class="fmt" role="group" aria-label="Format चुनें">
    <button data-fmt="e" data-bi="${i}" aria-pressed="${f==="e"}">E-book<small class="num">${rs(b.e)}</small></button>
    ${b.p>0?`<button data-fmt="p" data-bi="${i}" aria-pressed="${f==="p"}">Printed<small class="num">${rs(b.p)}</small></button>
    <button data-fmt="c" data-bi="${i}" aria-pressed="${f==="c"}">Combo<small class="num">${rs(comboOf(b))}</small></button>`:`<span class="fmt-only">सिर्फ़ E-book (PDF)</span>`}
  </div>`;
}
function bookCard(b,i){
  const f=fmtOf(b,i);
  return `<article class="card book lift" data-book="${i}">
    <div class="b3wrap" tabindex="0" role="button" data-open="${i}" aria-label="${esc(b.t)} — पूरी जानकारी देखें">${book3d(b)}</div>
    <div><h3>${b.nw?'<span class="nw-tag">NEW</span> ':""}${esc(b.t)}</h3><p class="by"><span class="num">${b.pages}</span> पेज</p></div>
    ${fmtGroup(b,i,f)}
    <div class="foot"><span class="price num">${rs(priceOf(b,f))}</span>${bookBtn(b,i,"btn-sm")}</div>
  </article>`;
}
function refreshBook(i){
  $$(`[data-book="${i}"]`).forEach(el=>el.outerHTML=bookCard(BOOKS[i],i));
  if(!$("#modal").hidden&&$("#modal").dataset.i==i)openBook(i);
}

/* ---------- HERO: isometric ladder ---------- */
function shade(hex,amt){const n=parseInt(hex.slice(1),16);let r=n>>16,g=n>>8&255,b=n&255;const f=v=>Math.max(0,Math.min(255,Math.round(v+amt*255)));return `rgb(${f(r)},${f(g)},${f(b)})`;}
(function iso(){
  const L=[["EDUCATION","#8FE3FF"],["SKILL","#5CCBFF"],["TECHNOLOGY","#3AA8FF"],["AI","#2F86FF"],["CAREER","#FFB547"],["EARNING","#FF8C00"],["BETTER LIFE","#34D17F"]];
  const base=300,w=44,dx=20,dy=-13,gap=62,x0=18;
  let s=`<defs><linearGradient id="flr" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity=".10"/><stop offset="1" stop-color="#fff" stop-opacity=".03"/></linearGradient></defs>`;
  s+=`<polygon points="6,${base+4} ${6+dx*1.6},${base+4+dy*1.6} ${x0+gap*6+w+dx+14},${base+4+dy*1.6} ${x0+gap*6+w+8},${base+4}" fill="url(#flr)"/>`;
  const tops=[];
  L.forEach((l,i)=>{
    const h=82+i*28, x=x0+i*gap, y=base-h;
    tops.push([x+w/2+dx/2,y+dy/2]);
    s+=`<g class="bar3d" style="animation-delay:${i*90}ms">
      <polygon points="${x+w},${y} ${x+w+dx},${y+dy} ${x+w+dx},${base+dy} ${x+w},${base}" fill="${shade(l[1],-.22)}"/>
      <polygon points="${x},${y} ${x+dx},${y+dy} ${x+w+dx},${y+dy} ${x+w},${y}" fill="${shade(l[1],.16)}"/>
      <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${l[1]}"/>
      <text transform="translate(${x+w/2+5},${base-8}) rotate(-90)" font-size="11.5" font-weight="800" letter-spacing="1" fill="#0B1A4A" font-family="Mukta,system-ui,sans-serif">${l[0]}</text>
    </g>`;
  });
  const d="M"+tops.map(p=>`${p[0]},${p[1]-14}`).join(" L");
  s+=`<path d="${d}" fill="none" stroke="#FFD21F" stroke-width="3" stroke-dasharray="6 6" stroke-linecap="round"/>`;
  const e=tops[tops.length-1];
  s+=`<path d="M${e[0]-12},${e[1]-10} L${e[0]},${e[1]-34} L${e[0]+12},${e[1]-10} Z" fill="#FFD21F"/>`;
  $("#iso").innerHTML=s;
})();
{const hi=hbMap(0);$("#heroBook").innerHTML=`<div class="b3wrap" data-open="${hi}" tabindex="0" role="button" aria-label="${esc(BOOKS[hi].t)} देखें">${book3d(BOOKS[hi])}</div>`;}
(function tilt(){
  if(reduce)return;const sc=$("#scene"),inn=$("#sceneInner");
  sc.addEventListener("pointermove",e=>{const r=sc.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;inn.style.transform=`rotateX(${8-y*10}deg) rotateY(${-10+x*14}deg)`;});
  sc.addEventListener("pointerleave",()=>inn.style.transform="");
})();

/* ---------- SLIDER ---------- */
(function(){
  const root=$("#heroSlider"), slides=$$("#heroSlider .slide"), N=slides.length, DUR=6500;
  let cur=0, timer=null, paused=reduce, hover=false;
  root.style.setProperty("--dur",DUR+"ms");
  slides.forEach((el,k)=>el.setAttribute("aria-label",(k+1)+" / "+N));
  $("#slDots").innerHTML=slides.map((_,k)=>`<button aria-label="Slide ${k+1}"><i></i></button>`).join("");
  const dots=$$("#slDots button");
  function show(k){
    cur=(k+N)%N;
    slides.forEach((el,j)=>{el.classList.toggle("on",j===cur);el.setAttribute("aria-hidden",j!==cur);});
    dots.forEach((d,j)=>{d.classList.remove("on","done");void d.offsetWidth;if(j<cur)d.classList.add("done");if(j===cur)d.classList.add("on");});
    schedule();
  }
  function schedule(){clearTimeout(timer);if(!paused&&!hover)timer=setTimeout(()=>show(cur+1),DUR);}
  function setPause(p){paused=p;root.classList.toggle("paused",p||hover);$("#slPause").setAttribute("aria-pressed",p);$("#slPause").textContent=p?"▶":"❚❚";$("#slPause").setAttribute("aria-label",p?"Slider चलाएँ":"Slider रोकें");if(p)clearTimeout(timer);else show(cur);}
  $("#slNext").onclick=()=>show(cur+1); $("#slPrev").onclick=()=>show(cur-1);
  $("#slDots").onclick=e=>{const b=e.target.closest("button");if(b)show(dots.indexOf(b));};
  $("#slPause").onclick=()=>setPause(!paused);
  root.addEventListener("pointerenter",e=>{if(e.pointerType==="mouse"){hover=true;root.classList.add("paused");clearTimeout(timer);}});
  root.addEventListener("pointerleave",()=>{if(hover){hover=false;root.classList.toggle("paused",paused);show(cur);}});
  let sx=null;
  root.addEventListener("touchstart",e=>{sx=e.touches[0].clientX;},{passive:true});
  root.addEventListener("touchend",e=>{if(sx===null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50)show(cur+(dx<0?1:-1));sx=null;});
  document.addEventListener("visibilitychange",()=>{if(document.hidden)clearTimeout(timer);else schedule();});
  if(reduce){$("#slPause").textContent="▶";$("#slPause").setAttribute("aria-pressed","true");}
  show(0);
})();
/* typewriter */
(function(){
  const WH=["Computer","Advanced Excel","AI Tools","Spoken English","Speed Typing","पैसे की समझ","Digital Marketing","Python"];
  const WE=["Computer","Advanced Excel","AI Tools","Spoken English","Speed Typing","Money Sense","Digital Marketing","Python"];
  const Wf=()=>document.documentElement.getAttribute("data-lang")==="en"?WE:WH;
  let W=Wf();
  const el=$("#tw"); el.setAttribute("data-noi18n","1"); if(reduce){el.textContent=W[0];document.addEventListener("langchange",()=>{el.textContent=Wf()[0];});return;}
  let w=0,c=W[0].length,del=true;
  (function tick(){W=Wf();if(w>=W.length)w=0;
    if(del){c--;if(c<=0){del=false;w=(w+1)%W.length;}}
    else{c++;if(c>=W[w].length){del=true;el.textContent=W[w];return setTimeout(tick,1600);}}
    el.textContent=[...W[w]].slice(0,Math.max(0,c)).join("");
    setTimeout(tick,del?45:90);})();
})();
/* slide visuals */
$("#fanBooks").innerHTML=[9,0,17].map(hbMap).map(i=>`<div class="b3wrap" data-open="${i}" tabindex="0" role="button" aria-label="${esc(BOOKS[i].t)}">${book3d(BOOKS[i],"md")}</div>`).join("");
(function(){const P=2000,r=10/1200;let h="";const max=P*((Math.pow(1+r,180)-1)/r)*(1+r);for(let y=1;y<=15;y++){const v=P*((Math.pow(1+r,y*12)-1)/r)*(1+r);h+=`<i style="height:${(v/max*100).toFixed(1)}%;animation-delay:${y*50}ms"></i>`;}$("#mBars").innerHTML=h;})();
(function(){
  const keys="QWERTYUIOPASDFGHJKL;ZXCVBNM,./".split("");
  $("#kb").innerHTML=keys.map(k=>`<span data-k="${k}">${k}</span>`).join("");
  const words=["HITARTHI","COMPUTER","TYPING","SKILL","EXCEL"];
  if(reduce)return;
  let wi=0,ci=0;const out=$("#kbWord");
  (function step(){const w=words[wi];
    if(ci===0)out.textContent="";
    const ch=w[ci];const key=$(`#kb [data-k="${ch}"]`);
    if(key){key.classList.add("hit");setTimeout(()=>key.classList.remove("hit"),180);}
    out.textContent+=ch;ci++;
    if(ci>=w.length){ci=0;wi=(wi+1)%words.length;return setTimeout(step,1400);}
    setTimeout(step,260);})();
})();
/* tickers */
function fillTrack(id,items){const html=items.map(t=>`<span>${esc(t)}</span>`).join("");$("#"+id).innerHTML=html+html;}
fillTrack("tkTrack",["नया: HITARTHI Mastery Book Membership — 150 E-books + video courses + 3 साल support, ₹10,500","Growth Book Membership — 60 E-books + 52 video courses + 2 साल live support, ₹5,000","HITARTHI App अब Play Store पर — free download करें","Free Counselling — आज ही बात करें","Advanced Excel और AI Tools के नए batch जल्द","₹999 से ऊपर के printed book order पर delivery free","Book Bundles पर 25% बचत","Money IQ Test दें — 2 मिनट में","दोस्त को refer करें, दोनों को ₹250 की छूट","Live class + recording, सरल हिंदी में"]);
fillTrack("rb1",["COMPUTER","ADVANCED EXCEL","AI TOOLS","SPOKEN ENGLISH","SPEED TYPING","DIGITAL MARKETING","PYTHON","TALLY + GST","FINANCIAL LITERACY"]);
fillTrack("rb2",["From Learning to Earning","डिग्री नहीं, Skill की ताकत","Skill जो Career बनाए","पढ़ाई ऐसी, जो जीवन बदले"]);
fillTrack("bkTrack",BOOKS.filter(b=>!b.hide).map(b=>b.t));
/* ---------- PHOTO REPLACE (preview only, stays in this browser) ---------- */
const PHK="hitarthi_ph_", ORIG=new WeakMap();
const PH_EDIT=false; /* true करने पर "📷 photo बदलें" बटन वापस */
function getPh(k){try{return localStorage.getItem(PHK+k);}catch(e){return null;}}
function applyPhotos(){$$("[data-phslot]").forEach(el=>{const d=getPh(el.dataset.phslot);if(!ORIG.has(el))ORIG.set(el,el.innerHTML);if(d){el.innerHTML=`<img loading="lazy" decoding="async" src="${d}" alt="">`;el.classList.add("hasph");}else if(el.classList.contains("hasph")){el.innerHTML=ORIG.get(el);el.classList.remove("hasph");}});}
let phTarget=null;
document.addEventListener("click",e=>{const b=PH_EDIT&&e.target.closest("[data-ph]");if(!b)return;e.stopPropagation();phTarget=b.dataset.ph;$("#phInput").value="";$("#phInput").click();},true);
$("#phInput").addEventListener("change",e=>{
  const f=e.target.files&&e.target.files[0];if(!f||!phTarget)return;
  const rd=new FileReader();rd.onload=()=>{const im=new Image();im.onload=()=>{
    const M=640,sc=Math.min(1,M/Math.max(im.width,im.height)),c=document.createElement("canvas");c.width=Math.round(im.width*sc);c.height=Math.round(im.height*sc);
    c.getContext("2d").drawImage(im,0,0,c.width,c.height);const d=c.toDataURL("image/jpeg",.82);
    try{localStorage.setItem(PHK+phTarget,d);}catch(err){toast("Photo सेव नहीं हुई — browser storage भरा है या बंद है।");}
    const slots=$$(`[data-phslot="${phTarget}"]`);slots.forEach(el=>{if(!ORIG.has(el))ORIG.set(el,el.innerHTML);el.innerHTML=`<img loading="lazy" decoding="async" src="${d}" alt="">`;el.classList.add("hasph");});
    toast("Photo लग गई — यह सिर्फ़ आपके browser में दिखेगी");};im.src=rd.result;};rd.readAsDataURL(f);
});
const PHBIN="hitarthi_phbin_";
function phKeys(p){try{return Object.keys(localStorage).filter(k=>k.startsWith(p));}catch(e){return [];}}
function phRestoreBtn(){const b=document.getElementById("phRestore");if(b)b.hidden=!phKeys(PHBIN).length;}
document.addEventListener("click",e=>{
  if(e.target.id==="phClear"){
    const ks=phKeys(PHK);if(!ks.length){toast("अभी कोई photo लगी नहीं है");return;}
    if(!confirm("क्या आप सच में सारी लगाई गई photos हटाना चाहते हैं?\n(गलती से हटें तो \"हटाई photos वापस लाएँ\" से वापस ला सकते हैं)"))return;
    try{phKeys(PHBIN).forEach(k=>localStorage.removeItem(k));ks.forEach(k=>{localStorage.setItem(PHBIN+k.slice(PHK.length),localStorage.getItem(k));localStorage.removeItem(k);});}catch(err){}
    applyPhotos();phRestoreBtn();toast("Photos हटाई गईं — वापस लाने के लिए नीचे \"हटाई photos वापस लाएँ\" दबाएँ");
  }else if(e.target.id==="phRestore"){
    let n=0;try{phKeys(PHBIN).forEach(k=>{localStorage.setItem(PHK+k.slice(PHBIN.length),localStorage.getItem(k));localStorage.removeItem(k);n++;});}catch(err){}
    applyPhotos();phRestoreBtn();toast(n?"हटाई गई photos वापस आ गईं":"वापस लाने के लिए कोई photo नहीं मिली");
  }
});
setTimeout(phRestoreBtn,0);
/* ---------- AVATARS ---------- */
let AVN=0;
function shadeHex(h,a){return shade(h,a);}
function avatarInner(o){
  const id="avc"+(AVN++), sk=o.skin, hc=o.hc||"#1B1B1B", sh=o.shirt||"#0057D9";
  let g=`<defs><clipPath id="${id}"><circle cx="60" cy="60" r="60"/></clipPath></defs><g clip-path="url(#${id})"><rect width="120" height="120" fill="${o.bg||"#DBEAFE"}"/>`;
  g+=`<circle cx="96" cy="22" r="26" fill="#fff" opacity=".35"/>`;
  if(o.style==="long")g+=`<path d="M34 58 Q30 24 60 22 Q90 24 86 58 L92 108 L28 108Z" fill="${hc}"/>`;
  g+=`<path d="M12 124 Q14 92 60 88 Q106 92 108 124Z" fill="${sh}"/><path d="M12 124 Q14 92 60 88 Q106 92 108 124Z" fill="#000" opacity=".08" transform="translate(0 4)"/>`;
  g+=`<rect x="51" y="70" width="18" height="20" rx="6" fill="${shade(sk,-.12)}"/><path d="M48 89 L60 102 L72 89Z" fill="${shade(sk,-.06)}"/>`;
  g+=`<circle cx="39" cy="57" r="4.5" fill="${shade(sk,-.08)}"/><circle cx="81" cy="57" r="4.5" fill="${shade(sk,-.08)}"/>`;
  g+=`<ellipse cx="60" cy="54" rx="21" ry="24" fill="${sk}"/>`;
  if(o.style==="short")g+=`<path d="M38 52 Q36 26 60 25 Q86 26 82 52 Q80 38 66 35 Q52 40 40 44Z" fill="${hc}"/>`;
  if(o.style==="long")g+=`<path d="M38 56 Q36 26 60 26 Q86 26 82 56 Q78 36 62 36 Q48 36 40 50Z" fill="${hc}"/>`;
  if(o.style==="bun")g+=`<circle cx="60" cy="24" r="10" fill="${hc}"/><path d="M38 54 Q36 28 60 28 Q84 28 82 54 Q78 38 60 37 Q44 38 38 54Z" fill="${hc}"/>`;
  g+=`<path d="M47 48 Q52 45 56 48M64 48 Q68 45 73 48" stroke="${hc}" stroke-width="2" fill="none" stroke-linecap="round"/>`;
  g+=`<circle cx="52" cy="55" r="2.4" fill="#1B1F3B"/><circle cx="68" cy="55" r="2.4" fill="#1B1F3B"/><circle cx="52.8" cy="54.2" r=".8" fill="#fff"/><circle cx="68.8" cy="54.2" r=".8" fill="#fff"/>`;
  g+=`<ellipse cx="46" cy="63" rx="4" ry="2.5" fill="#FF7A7A" opacity=".25"/><ellipse cx="74" cy="63" rx="4" ry="2.5" fill="#FF7A7A" opacity=".25"/>`;
  g+=`<path d="M58 57 Q60 62 62 60" stroke="${shade(sk,-.2)}" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;
  if(o.beard)g+=`<path d="M40 58 Q41 80 60 82 Q79 80 80 58 Q76 70 68 71 Q60 68 52 71 Q44 70 40 58Z" fill="${hc}"/>`;
  g+=`<path d="M52 67 Q60 73 68 67" stroke="${o.beard?"#fff":"#8B3A2B"}" stroke-width="2.2" fill="none" stroke-linecap="round" opacity="${o.beard?.7:1}"/>`;
  if(o.glasses)g+=`<g fill="none" stroke="#1B1F3B" stroke-width="1.8"><rect x="44" y="50" width="14" height="10" rx="4"/><rect x="62" y="50" width="14" height="10" rx="4"/><path d="M58 54h4M44 54l-5-1M76 54l5-1"/></g>`;
  if(o.bindi)g+=`<circle cx="60" cy="43" r="1.8" fill="#DC2626"/>`;
  return g+`</g>`;
}
const avatar=o=>`<svg viewBox="0 0 120 120" role="img" aria-label="Illustration">${avatarInner(o)}</svg>`;
const avatarAt=(o,x,y,w)=>`<svg x="${x}" y="${y}" width="${w}" height="${w}" viewBox="0 0 120 120">${avatarInner(o)}</svg>`;
const AV={
 excel:{skin:"#C68642",hc:"#1B1B1B",style:"bun",shirt:"#0057D9",glasses:1,bindi:1,bg:"#DBEAFE"},
 ai:{skin:"#A86B3C",hc:"#222",style:"short",shirt:"#0891B2",beard:1,bg:"#CFFAFE"},
 eng:{skin:"#E0AC69",hc:"#3B2314",style:"long",shirt:"#7C3AED",bg:"#EDE9FE"},
 fin:{skin:"#B87A4B",hc:"#4A4A4A",style:"short",shirt:"#17A45A",glasses:1,bg:"#DCFCE7"},
 kids:{skin:"#D09A66",hc:"#1B1B1B",style:"long",shirt:"#DB2777",bindi:1,bg:"#FCE7F3"},
 coun:{skin:"#8D5524",hc:"#111",style:"short",shirt:"#FF8C00",bg:"#FFEDD5"}
};
const STUD=[{skin:"#C68642",hc:"#111",style:"short",shirt:"#F59E0B",bg:"#FEF3C7"},{skin:"#E0AC69",hc:"#2B1B10",style:"long",shirt:"#EC4899",bg:"#FCE7F3"},{skin:"#8D5524",hc:"#111",style:"short",shirt:"#22C55E",bg:"#DCFCE7"},{skin:"#D09A66",hc:"#111",style:"bun",shirt:"#6366F1",bg:"#E0E7FF"},{skin:"#A86B3C",hc:"#222",style:"short",shirt:"#0EA5E9",bg:"#E0F2FE",glasses:1},{skin:"#C68642",hc:"#3B2314",style:"long",shirt:"#F97316",bg:"#FFEDD5"}];

/* Trainers का section हटाया गया — असली नाम/photo मिलने पर वापस जोड़ सकते हैं */
const AUTH=[["S. Kumar",{skin:"#B87A4B",hc:"#222",style:"short",shirt:"#12235B",glasses:1,bg:"#FFEDD5"}],["अमित सिंह",{skin:"#C68642",hc:"#111",style:"short",shirt:"#B45309",beard:1,bg:"#FEF3C7"}]];
$("#authors").innerHTML=AUTH.map(([n,o])=>{const bks=BOOKS.map((b,i)=>[b,i]).filter(([b])=>!b.hide&&b.a===n);return `<div class="author" style="position:relative"><span class="avwrap ini" aria-hidden="true">${esc(n.trim().split(/\s+/).map(w=>w.replace(/[^A-Za-z\u0900-\u097F]/g,"").charAt(0)).join("").slice(0,2))}</span><div><div class="eyebrow" style="color:var(--orange)">HITARTHI Author</div><h3>${esc(n)}</h3><div class="bk">${bks.map(([b,i])=>`<button data-open="${i}">${esc(b.t)}</button>`).join("")}</div></div></div>`;}).join("");

/* ===== इस महीने के विजेता — नाम/लाइनें यहीं बदलें ===== */
/* विजेता अब असली बिक्री के Leaderboard से अपने-आप (नीचे lbMount) */

/* ---------- LIVE CLASS (हटाया गया — section नहीं है तो कुछ न करें) ---------- */
(function(){if(!document.getElementById("lc"))return;
  const TABS=[
   {id:"excel",n:"Advanced Excel",sub:"VLOOKUP और Pivot Table",av:"excel",tn:"प्रिया शर्मा • Excel",chat:[["रिया","Sir, VLOOKUP में FALSE क्यों लिखते हैं?"],["प्रिया Ma'am","ताकि exact नाम ही match हो — गलत match न आए।",1],["आकाश","समझ आ गया ✓ मेरा भी सही आया"],["सना","Pivot Table कल सिखाएँगे?"]]},
   {id:"typing",n:"Speed Typing",sub:"Home-row से 35 WPM",av:"kids",tn:"पूजा यादव • Typing",chat:[["रोहन","मेरी speed 28 हो गई!"],["पूजा Ma'am","बहुत अच्छे! अब keyboard मत देखना।",1],["प्रिया","F और J पर उँगली रखी ✓"]]},
   {id:"english",n:"Spoken English",sub:"Interview में आत्मविश्वास",av:"eng",tn:"नेहा सिंह • English",chat:[["अमन","Ma'am, confident का उच्चारण?"],["नेहा Ma'am","KON-fi-dent — पहले भाग पर ज़ोर दें।",1],["नेहा","I am confident… ✓"]]},
   {id:"money",n:"Financial Literacy",sub:"Compounding की समझ",av:"fin",tn:"विवेक मिश्रा • Finance",chat:[["विकास","Sir, ₹1,000 महीना भी काफ़ी है?"],["विवेक Sir","हाँ, शुरुआत छोटी हो सकती है — समय सबसे ज़रूरी है।",1],["पूजा","Emergency fund पहले, निवेश बाद में ✓"]]}
  ];
  let tab=0, step=0, iv=null, paused=reduce;
  $("#lcTabs").innerHTML=TABS.map((t,k)=>`<button role="tab" data-lc="${k}" aria-selected="${k===0}">${esc(t.n)}</button>`).join("");
  $("#lcStudents").innerHTML=STUD.map((o,k)=>`<div class="tile" data-ph="student-${k}" title="छात्र की photo बदलें" style="cursor:pointer"><span class="avwrap" data-phslot="student-${k}">${avatar(o)}</span>${k===1?'<span class="hand">✋</span>':""}</div>`).join("");
  const XL=[["रिया","R101","486"],["आकाश","R102","479"],["सना","R103","474"],["रोहन","R104","468"],["प्रिया","R105","461"],["अमन","R106","455"]];
  const TXT="practice every day and your speed will grow";
  const WORDS=[["Confident","आत्मविश्वासी"],["Opportunity","अवसर"],["Responsible","ज़िम्मेदार"],["Improve","सुधारना"]];
  function screen(){
    const t=TABS[tab];
    if(t.id==="excel"){
      const n=Math.min(step,XL.length), f="=VLOOKUP(A"+(n+1)+",Marks!A:C,3,FALSE)";
      return `<div class="xl-bar">📊 Marksheet.xlsx <span style="margin-left:auto;font-weight:600;opacity:.8">Home • Insert • Formulas • Data</span></div>
      <div class="xl-f"><i>fx</i><span>${f.slice(0,Math.max(8,Math.round(f.length*((step%1)||1))))}</span></div>
      <div style="overflow-x:auto"><table class="xl"><tr><th></th><th>A — नाम</th><th>B — Roll No.</th><th>C — कुल अंक</th><th>D — Grade</th></tr>
      ${XL.map((r,k)=>`<tr><th>${k+2}</th><td>${r[0]}</td><td>${r[1]}</td><td class="num ${k<n-1?"fill":k===n-1?"new sel":""}">${k<n?r[2]:""}</td><td class="${k<n-1?"fill":k===n-1?"new":""}">${k<n?(+r[2]>=470?"A+":"A"):""}</td></tr>`).join("")}</table></div>
      <p style="padding:10px 12px;font-size:.85rem;color:#48507A">${n<XL.length?"Trainer formula को नीचे drag कर रही हैं…":"✓ 6 छात्रों के अंक और grade 10 सेकंड में!"}</p>`;
    }
    if(t.id==="typing"){
      const n=Math.min(step*3,TXT.length);
      const html=[...TXT].map((c,k)=>k<n?`<span class="d">${c}</span>`:k===n?`<span class="c">${c===" "?"&nbsp;":c}</span>`:c).join("");
      const cur=(TXT[n]||"").toUpperCase(), keys="QWERTYUIOPASDFGHJKL;ZXCVBNM,./".split("");
      return `<div class="ty"><div class="txt">${html}</div><div class="stats"><div><b class="num">${18+Math.min(step,16)}</b><span>WPM</span></div><div><b class="num">${Math.min(90+step,98)}%</b><span>सटीकता</span></div><div><b class="num">0:${String(10+step*3).padStart(2,"0")}</b><span>समय</span></div></div>
      <div class="keys">${keys.map(k=>`<span class="${k===cur?"hit":""}">${k}</span>`).join("")}</div></div>`;
    }
    if(t.id==="english"){
      const w=WORDS[step%WORDS.length];
      return `<div class="en"><div style="font-weight:800;color:#7C3AED">आज के शब्द</div>
      ${WORDS.map((x,k)=>`<div class="card-w" style="${x===w?"outline:2px solid #7C3AED":""}"><b>${x[0]}</b><span>${x[1]}</span></div>`).join("")}
      <div class="say">🗣 “I am ${w[0].toLowerCase()==="confident"?"confident that I can do this job well":"ready to take this "+w[0].toLowerCase()}.”</div>
      <div class="wave">${Array.from({length:28},(_,k)=>`<i style="animation-delay:${(k%7)*.12}s"></i>`).join("")}</div></div>`;
    }
    const yrs=Math.min(step+1,10);let bars="";
    for(let y=1;y<=10;y++){const inv=1000*12*y, r=.01, tot=1000*((Math.pow(1+r,y*12)-1)/r)*(1+r), mx=1000*((Math.pow(1.01,120)-1)/.01)*1.01;bars+=`<i style="height:${y<=yrs?(tot/mx*100):2}%;--inv:${(inv/tot*100).toFixed(0)}%"><b></b></i>`;}
    return `<div class="mo"><div style="font-weight:800">₹1,000 हर महीने • 12% अनुमानित • <span class="num">${yrs}</span> साल</div><div class="bars">${bars}</div><div class="legend" style="color:#48507A"><span><i style="background:#0057D9"></i>लगाया</span><span><i style="background:#17A45A"></i>बढ़ोतरी</span></div><div class="note">Trainer: “देखिए, आख़िरी सालों में सबसे तेज़ बढ़ोतरी होती है — यही compounding है।”</div></div>`;
  }
  function chat(){const t=TABS[tab];const n=Math.min(1+Math.floor(step/2),t.chat.length);return t.chat.slice(0,n).map(c=>`<p class="${c[2]?"t":""}"><b>${esc(c[0])}</b>${esc(c[1])}</p>`).join("");}
  let lastChat=-1;
  function render(){
    const t=TABS[tab];$("#lcTitle").textContent=t.n;$("#lcSub").textContent=t.sub;$("#lcTName").textContent=t.tn;
    $("#lcScreen").innerHTML=screen();
    const ck=tab*100+Math.min(1+Math.floor(step/2),t.chat.length);if(ck!==lastChat){$("#lcChat").innerHTML=chat();lastChat=ck;}
  }
  function setTab(k){tab=k;step=reduce?20:0;lastChat=-1;$("#lcTeacher").innerHTML=`<span class="ini">${esc(TABS[k].tn.split("•")[0].trim().split(/\s+/).map(w=>w.charAt(0)).join(""))}</span>`;$("#lcTeacher").dataset.phslot="lcteacher-"+k;$(".lcph").dataset.ph="lcteacher-"+k;applyPhotos();$$("#lcTabs button").forEach((b,j)=>b.setAttribute("aria-selected",j===k));render();}
  function loop(){clearInterval(iv);if(paused)return;iv=setInterval(()=>{step++;if(step>16){step=0;lastChat=-1;}render();},TABS[tab].id==="typing"?700:1500);}
  $("#lcTabs").addEventListener("click",e=>{const b=e.target.closest("[data-lc]");if(!b)return;setTab(+b.dataset.lc);loop();});
  $("#lcPP").onclick=()=>{paused=!paused;$("#lc").classList.toggle("paused",paused);$("#lcPP").textContent=paused?"▶ चलाएँ":"❚❚ रोकें";$("#lcPP").setAttribute("aria-pressed",paused);loop();};
  if(reduce){$("#lcPP").textContent="▶ चलाएँ";}
  window.__lcSet=(k)=>{setTab(k);loop();};
  setTab(0);if(!reduce){step=3;render();}loop();
})();

/* gallery (illustrated placeholders) */
(function(){if(!document.getElementById("gallery"))return;
  const G=[
   ["Advanced Excel — Live Class",0,"#0B3D24","#107C41",`<rect x="110" y="70" width="180" height="120" rx="8" fill="#fff"/><rect x="110" y="70" width="180" height="16" rx="8" fill="#107C41"/>${Array.from({length:5},(_,r)=>Array.from({length:4},(_,c)=>`<rect x="${118+c*43}" y="${94+r*18}" width="38" height="12" rx="2" fill="${r===2&&c===2?"#34D17F":"#E8F7EE"}"/>`).join("")).join("")}<path d="M90 190h220l-14 14H104z" fill="#1C2352"/>${avatarAt(AV.excel,24,120,90)}`],
   ["Speed Typing Practice",1,"#3A1D5C","#7C3AED",`<rect x="90" y="60" width="220" height="100" rx="10" fill="#fff"/><text x="110" y="100" font-size="16" font-family="monospace" fill="#17A45A">practice every</text><text x="110" y="124" font-size="16" font-family="monospace" fill="#141A3A">day and grow</text><text x="250" y="148" font-size="22" font-weight="800" fill="#FF8C00">35 WPM</text>${Array.from({length:3},(_,r)=>Array.from({length:10},(_,c)=>`<rect x="${84+c*23.5}" y="${178+r*22}" width="19" height="17" rx="4" fill="${(r===1&&(c===3||c===6))?"#FF8C00":"#F4F6FC"}"/>`).join("")).join("")}`],
   ["Spoken English Session",2,"#1E3A8A","#3B82F6",`${avatarAt(AV.eng,40,90,110)}${avatarAt(STUD[0],250,90,110)}<rect x="130" y="40" width="150" height="46" rx="14" fill="#fff"/><text x="146" y="69" font-size="15" font-weight="700" fill="#141A3A">I am confident!</text><path d="M150 86l-10 14 22-14z" fill="#fff"/>`],
   ["Financial Literacy Class",3,"#0E5A34","#17A45A",`${Array.from({length:8},(_,k)=>`<rect x="${110+k*24}" y="${200-(k+1)*(k+1)*2.1-10}" width="16" height="${(k+1)*(k+1)*2.1+10}" rx="3" fill="#fff" opacity="${.5+k*.06}"/>`).join("")}<circle cx="80" cy="80" r="22" fill="#FFD21F"/><text x="72" y="89" font-size="24" font-weight="800" fill="#6B4200">₹</text>${avatarAt(AV.fin,300,120,84)}`]
  ];
  $("#gallery").innerHTML=G.map(g=>`<div class="gph" role="button" tabindex="0" data-lcgo="${g[1]}" aria-label="${esc(g[0])} — demo देखें"><span class="gimg" data-phslot="gallery-${g[1]}"><svg viewBox="0 0 400 300"><defs><linearGradient id="gg${g[1]}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${g[2]}"/><stop offset="1" stop-color="${g[3]}"/></linearGradient></defs><rect width="400" height="300" fill="url(#gg${g[1]})"/><circle cx="360" cy="30" r="80" fill="#fff" opacity=".07"/>${g[4]}</svg></span><button class="ph-tag" data-ph="gallery-${g[1]}">📷 photo बदलें</button><span class="play">▶</span><span class="cap">${esc(g[0])}</span></div>`).join("");
  $("#gallery").addEventListener("click",e=>{if(e.target.closest("[data-ph]"))return;const b=e.target.closest("[data-lcgo]");if(!b)return;window.__lcSet(+b.dataset.lcgo);$("#lc").scrollIntoView({block:"center"});});
})();

/* phone screens */
(function(){
  const home=`<div class="as-top"><small>नमस्ते 👋</small><b>राहुल, आज क्या सीखेंगे?</b></div>
   <div class="as-live"><span class="live-dot" style="font-size:.6rem">LIVE</span><span><b style="display:block">Advanced Excel</b><small style="color:#7C83A6">शाम 5:00 बजे</small></span><span class="j">Join</span></div>
   <div class="as-sec"><h4>पढ़ाई जारी रखें</h4>
    <div class="as-prog"><b>MS Office Complete</b><i><b style="width:72%"></b></i></div>
    <div class="as-prog"><b>Speed Typing</b><i><b style="width:45%"></b></i></div></div>
   <div class="as-sec"><h4>सब कुछ एक जगह</h4></div>
   <div class="as-grid"><span><i>🎓</i>Courses</span><span><i>📚</i>E-books</span><span><i>⌨️</i>Typing</span><span><i>₹</i>Calculator</span><span><i>🏅</i>Certificate</span><span><i>💬</i>Doubts</span></div>
   <div class="as-nav"><span>Home</span><span>Classes</span><span>Books</span><span>Profile</span></div>`;
  $("#phone1").innerHTML=home;$("#phone3").innerHTML=home;
  $("#phone2").innerHTML=`<div class="rd-top"><span>‹ My Library</span><span>Aa</span></div><div class="rd-book"><div class="b3wrap">${book3d(BOOKS[hbMap(1)])}</div></div>
   <div class="rd-txt"><b>अध्याय 3: ज़रूरत बनाम इच्छा</b>हर खर्च से पहले एक प्रश्न पूछें — क्या यह ज़रूरत है या सिर्फ़ इच्छा? यह एक आदत आपकी बचत बदल सकती है…</div><div class="rd-bar"><b></b></div><div class="rd-txt" style="margin-top:6px"><small>38% पूरा • पेज 46 / 120</small></div>
   <div class="as-nav"><span style="color:#7C83A6">Home</span><span>Classes</span><span style="color:#0057D9">Books</span><span>Profile</span></div>`;
})();
applyPhotos();
try{$("#appQR").innerHTML=qrSVG("https://play.google.com/store/apps/details?id=co.rogers.flabo",84,"#0B1A4A");}catch(e){$(".qrbox").hidden=true;}
/* mega menu + scroll helpers */
(function(){
  const top=c=>COURSES.filter(x=>x.cat===c.id).slice(0,4);
  $("#mega").innerHTML=`<div class="mm-all"><button class="mh" data-go="courses" data-cat="all">📚 All Courses <small>(${COURSES.length} तैयार)</small></button></div>`+CATS.filter(c=>top(c).length).map(c=>`<div><button class="mh" data-go="courses" data-cat="${c.id}"><i style="background:linear-gradient(135deg,${c.g[0]},${c.g[1]})"></i>${esc(c.name)}</button>${top(c).map(x=>`<button data-go="courses" data-cat="${c.id}">${esc(x.name)}</button>`).join("")}</div>`).join("")+
   `<div><button class="mh" data-go="courses" data-soon="1"><i style="background:linear-gradient(135deg,#94A3B8,#64748B)"></i>🔜 जल्द आ रहे</button>${C_SOON.filter(x=>/DCA|ADCA|Python|AI Tools|Spoken/.test(x.name)).slice(0,4).map(x=>`<button data-go="courses" data-soon="1">${esc(x.name.replace(/ — .*/,""))}</button>`).join("")}</div>`+
   `<div class="mm-feat"><span class="eyebrow" style="color:#9DE6FF">Free Counselling</span><b>समझ नहीं आ रहा कौन-सा course लें?</b><p>2 प्रश्नों के Skill Finder से या counselor से बात करके तय करें।</p><button data-go="contact" data-demo="1">Counselor से बात करें</button></div>`;
  const mb=$("#megaBooks");if(mb)mb.innerHTML=[["all","📚 सभी E-books"],["computer","💻 Computer Books"],["printed","📦 Printed Books"],["finance","💰 Finance"],["self","🌱 Self-help"],["business","💼 Business"],["english","🗣️ English"],["student","🎒 Students"],["kids","🧒 बच्चों के लिए"]].map(([k,n])=>`<button data-go="books" data-bcat="${k}">${n}</button>`).join("");
  const ma=$("#megaAcc");if(ma)ma.innerHTML=[["🎓 Student Profile","lib"],["📚 My Library","lib"],["📘 My Books","books"],["🎬 My Courses","courses"],["🏅 My Certificates","certs"],["📦 My Orders","track"]].map(([n,f])=>f==="track"?`<button data-go="track">${n}</button>`:`<button data-go="student" data-sptab="${f}">${n}</button>`).join("")+`<button data-acclogout="1">🚪 Logout</button>`;
  document.addEventListener("click",e=>{const b=e.target.closest("[data-bcat],[data-mlf],[data-soon],[data-acclogout]");if(!b)return;
    if(b.dataset.acclogout){const o=$("#mlOut");if(o&&!o.closest("[hidden]")){go("library");o.click();toast("आप logout हो गए");}else{go("library");toast("आप अभी login नहीं हैं");}return;}
    setTimeout(()=>{if(b.dataset.bcat){const c=document.querySelector(`#bookChips [data-bc="${b.dataset.bcat}"]`);c&&c.click();}
      if(b.dataset.mlf){const c=document.querySelector(`[data-mlfil="${b.dataset.mlf}"]`);c&&c.click();}
      if(b.dataset.soon){const w=$("#soonWrap");w&&!w.hidden&&w.scrollIntoView({behavior:reduce?"auto":"smooth",block:"start"});}},60);});
  const pr=$("#progress"), tt=$("#toTop");
  function onScroll(){const h=document.documentElement;const max=h.scrollHeight-h.clientHeight;pr.style.width=(max>0?h.scrollTop/max*100:0)+"%";tt.hidden=h.scrollTop<900;}
  window.addEventListener("scroll",onScroll,{passive:true});onScroll();
  tt.onclick=()=>window.scrollTo({top:0,behavior:reduce?"auto":"smooth"});
})();
/* ---------- v11 sections ---------- */
(function(){
  const I={grad:'<path d="M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',brain:'<path d="M9 4a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 002 5 3 3 0 006 0V7a3 3 0 00-3-3z"/><path d="M15 4a3 3 0 013 3 3 3 0 012 5 3 3 0 01-2 5 3 3 0 01-6 0"/>',chart:'<path d="M3 20h18"/><path d="M6 16v-4M11 16V8M16 16v-6"/><path d="M5 9l5-4 4 3 6-5"/>',book:'<path d="M4 4h6a3 3 0 013 3v13a2 2 0 00-2-2H4z"/><path d="M20 4h-6a3 3 0 00-3 3v13a2 2 0 012-2h7z"/>'};
  const ECO=[["EDUCATION","Computer & Office","#0B3D91","#2F86FF","grad",["Basic Computer, MS Office","Advanced Excel, Tally"],"computer"],
   ["SKILLING","रोज़गार की skill","#7C2D92","#C04BD6","gear",["Speed Typing","Spoken English, Personality"],"english"],
   ["ARTIFICIAL INTELLIGENCE","AI सबके लिए","#0E7A43","#34D17F","brain",["AI Tools, ML, Data","AI Workshop"],"ai"],
   ["FINANCIAL EDUCATION","पैसे की समझ","#0A6B8A","#22C4E8","chart",["Budget, SIP, EMI","Scam से बचाव"],"finance"],
   ["HITARTHI PUBLICATIONS","200+ Books","#B84C00","#FF9A1F","book",["E-books + Printed","सरल हिंदी"],"books"]];
  $("#ecoGrid").innerHTML=ECO.map(e=>`<button class="ec lift" style="--c1:${e[2]};--c2:${e[3]};--tint:color-mix(in srgb,${e[3]} 16%,var(--surface))" ${e[6]==="books"?'data-go="books"':`data-go="courses" data-cat="${e[6]}"`}><span class="orb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${I[e[4]]}</svg></span><h3>${e[0]}</h3><small>${esc(e[1])}</small><ul>${e[5].map(x=>`<li>${esc(x)}</li>`).join("")}</ul></button>`).join("");
  const W=[["🎒","School छात्र (Class 5–12)"],["🎓","College और नौकरी की तलाश"],["💼","नौकरी करने वाले"],["🏪","दुकानदार और व्यवसायी"],["🏫","School, College, Institute"],["👨‍👩‍👧","अभिभावक"]];
  $("#whom").innerHTML=W.map(w=>`<div><span class="wi">${w[0]}</span>${esc(w[1])}</div>`).join("");

  const LV=[["LEVEL 5","अपना AI Assistant","अपने काम के लिए custom AI बनाना"],["LEVEL 4","Automation","रोज़ के काम अपने-आप करवाना"],["LEVEL 3","AI से Content","Poster, video, voice और reels"],["LEVEL 2","Office काम AI से","Excel, Word, PPT 10 गुना तेज़"],["LEVEL 1","AI की पहचान","ChatGPT, Gemini, Claude सही तरीके से"]];
  // pyramid
  let g='<defs><linearGradient id="pf" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#FFE7D1"/></linearGradient><linearGradient id="ps" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#F2D2B6"/><stop offset="1" stop-color="#E4B895"/></linearGradient><radialGradient id="rg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FF8C00" stop-opacity=".95"/><stop offset="1" stop-color="#FFB547" stop-opacity=".75"/></radialGradient><filter id="gl"><feGaussianBlur stdDeviation="3"/></filter></defs>';
  g+='<g class="rays">';for(let k=0;k<10;k++){g+=`<rect x="248" y="18" width="24" height="84" rx="12" fill="url(#rg)" transform="rotate(${k*36} 260 240)"/>`;}g+='</g>';
  const cx=260,top=42,h=74,gap=8;
  for(let k=0;k<5;k++){
    const y=top+k*(h+gap), wt=k===0?0:26+k*42, wb=26+(k+1)*42, sk=16;
    const pts=k===0?`${cx},${y} ${cx+wb},${y+h} ${cx-wb},${y+h}`:`${cx-wt},${y} ${cx+wt},${y} ${cx+wb},${y+h} ${cx-wb},${y+h}`;
    const side=k===0?`${cx},${y} ${cx+sk*.4},${y+2} ${cx+wb+sk},${y+h-6} ${cx+wb},${y+h}`:`${cx+wt},${y} ${cx+wt+sk*.7},${y+3} ${cx+wb+sk},${y+h-6} ${cx+wb},${y+h}`;
    g+=`<g class="pl" data-lv="${k}"><polygon points="${side}" fill="url(#ps)"/><polygon points="${pts}" fill="url(#pf)" stroke="#F3D6BC"/>
      <rect x="${cx-wb+6}" y="${y+h-3}" width="${wb*2-12}" height="4" rx="2" fill="#FF8C00" filter="url(#gl)"/><rect x="${cx-wb+10}" y="${y+h-2}" width="${wb*2-20}" height="2" fill="#FF8C00"/>
      <text x="${cx}" y="${y+(k===0?h-24:30)}" text-anchor="middle" font-size="${k===0?11:13}" font-weight="800" fill="#FF6A00" font-family="Mukta,system-ui">${LV[k][0]}</text>
      <text x="${cx}" y="${y+(k===0?h-8:52)}" text-anchor="middle" font-size="${k===0?12:16}" font-weight="800" fill="#141A3A" font-family="Mukta,system-ui">${LV[k][1]}</text></g>`;
  }
  $("#pyr").innerHTML=g;
  $("#wsLevels").innerHTML=LV.slice().reverse().map((l,j)=>`<button data-lvl="${4-j}"><b>${l[0]}</b><span>${esc(l[1])}<small>${esc(l[2])}</small></span></button>`).join("");
  function hl(k){$$("#pyr .pl").forEach(e=>e.classList.toggle("on",+e.dataset.lv===k));$$("#wsLevels button").forEach(b=>b.classList.toggle("on",+b.dataset.lvl===k));}
  $("#pyr").addEventListener("click",e=>{const pl=e.target.closest(".pl");if(pl)hl(+pl.dataset.lv);});
  $("#wsLevels").addEventListener("click",e=>{const b=e.target.closest("[data-lvl]");if(b)hl(+b.dataset.lvl);});
  $("#wsLevels").addEventListener("mouseover",e=>{const b=e.target.closest("[data-lvl]");if(b)hl(+b.dataset.lvl);});
  hl(4);

  // orbit
  const T1=[["ChatGPT","#10A37F"],["Gemini","#4285F4"],["Claude","#D97757"],["Copilot","#7B61FF"],["Perplexity","#20808D"],["Canva AI","#00C4CC"],["Excel + AI","#107C41"],["Gamma","#8B5CF6"]];
  const T2=[["NotebookLM","#F59E0B"],["Napkin AI","#EC4899"],["ElevenLabs","#141A3A"],["n8n","#EA4B71"],["CapCut","#111"]];
  const place=(arr,rad)=>arr.map((t,k)=>`<span class="chipo" style="--a:${k*360/arr.length}deg;--rad:${rad}"><span><i style="--dot:${t[1]}"></i>${t[0]}</span></span>`).join("");
  $("#ring1").innerHTML=place(T1,"202px");$("#ring2").innerHTML=place(T2,"114px");
  const UC=[["📝 Notes और पढ़ाई","NotebookLM, ChatGPT से chapter का सार"],["📊 Office Report","Excel + AI से 5 मिनट में dashboard"],["🎨 Poster और Presentation","Canva AI, Gamma, Napkin"],["🎬 Video और Voice","AI video, CapCut, ElevenLabs"],["🔍 Research","Perplexity, Gemini से सही जानकारी"],["⚙️ Automation","n8n से रोज़ के काम अपने-आप"]];
  $("#usecase").innerHTML=UC.map(u=>`<div><b>${u[0]}</b><span>${esc(u[1])}</span></div>`).join("");

  // combo banners
  const bd=BUNDLES[COMBO_I], pr=bundlePrice(bd), off=Math.round((1-pr.now/pr.full)*100);
  const html=`<span class="cb-badge off">${off}%<br><small>छूट</small></span><span class="cb-badge ship">🚚 Free<br>Delivery</span>
    <h2>HITARTHI Bestseller Combo</h2><p class="sub">7 Hindi Books • सरल भाषा • घर पर Printed Books</p>
    <div class="podiums">${bd.items.map(i=>`<div class="pod"><div class="b3wrap" data-open="${i}" tabindex="0" role="button" aria-label="${esc(BOOKS[i].t)}">${book3d(BOOKS[i])}</div></div>`).join("")}</div>
    <div class="cb-price"><div class="box"><s class="num">${rs(pr.full)}</s><b class="num">सिर्फ़ ${rs(pr.now)}</b></div><button class="btn btn-orange btn-lg" data-addbundle="${COMBO_I}">अभी खरीदें</button></div>`;
  $$("[data-combo]").forEach(el=>{if(bdOk(bd))el.innerHTML=html;else el.hidden=true;});
})();
/* ---------- FLAGSHIP PROGRAMS ---------- */
const MODS=["कंपाउंडिंग का जादू","Money Management और Budget","AI — पढ़ाई, काम और कमाई में","बचत, निवेश और SIP की समझ","Loan, EMI और Credit Score","Scam और Digital Fraud से बचाव","Goal Setting और Time Management","Positive Mindset और Personality","Insurance और Emergency Fund","Stock Market की बुनियाद","Sales और Side-income","Career और Business Roadmap"];
const FLAGS=[
 {k:"gold",rib:"★ सबसे ज़्यादा फ़ायदा",n:"HITARTHI MASTERY BOOK MEMBERSHIP",sub:"150 E-books (लगभग हर हफ़्ते 1 नई book) • Bonus: recorded courses + live support — 3 साल",price:10500,yrs:3,eb:150,pb:0,mods:12,monthly:0,
  get:[["📚","150 E-books","लगभग हर हफ़्ते 1 नई book — पढ़ें और 🔊 सुनें"],["🎬","Bonus: recorded video courses","पहले साल हर हफ़्ते 1 course, फिर 3 साल तक हर महीने 1"],["📈","5 साल 'कंपाउंडिंग का जादू' support","The Magic of Compounding सीखें + 5 साल साथ"],["🤝","Live support + और भी बहुत कुछ","WhatsApp पर doubt, hand-holding, नई सामग्री"],["🗣️","English course + ⌨️ Typing website","Spoken English सीखें • HITARTHI Typing website का access"]],
  split:[],note:"Recorded video courses और live support इसी membership में शामिल हैं — और भी बहुत कुछ।",
  emi:"3 किश्तों में: ₹3,500 × 3",per:"3 साल = सिर्फ़ ₹292 प्रति महीना (₹10 रोज़)",
  support:["150 e-books — लगभग हर हफ़्ते 1 नई book, पढ़ें और 🔊 सुनें","Bonus: पहले साल हर हफ़्ते 1 recorded course (52 courses)","फिर 3 साल तक हर महीने 1 नया course","The Magic of Compounding — सीखें और 5 साल तक compounding support","Live support — WhatsApp पर doubt का जवाब","English course — Spoken English","HITARTHI Typing website का access","हर book के साथ worksheet और action plan","नए editions और updates free","और भी बहुत कुछ"],
  books:[2,1,0,9,14,17,20]},
 {k:"blue",rib:"अच्छी शुरुआत",n:"HITARTHI GROWTH BOOK MEMBERSHIP",sub:"60 E-books + 52 हफ़्ते, 52 recorded video courses + 2 साल live support",price:5000,yrs:2,eb:60,pb:0,mods:8,monthly:0,
  get:[["📚","60 E-books","पढ़ें और 🔊 सुनें"],["🎬","52 recorded video courses","52 हफ़्ते — हर हफ़्ते 1 नया course"],["🤝","2 साल live support","WhatsApp पर doubt का जवाब"],["📈","Compounding की जानकारी + और भी बहुत कुछ","पूछने पर compounding guidance"],["🗣️","English course + ⌨️ Typing website","Spoken English सीखें • HITARTHI Typing website का access"]],
  split:[],note:"Recorded video courses और 2 साल live support शामिल — और भी बहुत कुछ।",
  emi:"2 किश्तों में: ₹2,500 × 2",per:"2 साल = सिर्फ़ ₹208 प्रति महीना",
  support:["60 e-books — पढ़ें और 🔊 सुनें","52 हफ़्ते, 52 recorded video courses — हर हफ़्ते 1","2 साल live support (WhatsApp)","पूछने पर compounding की जानकारी","English course — Spoken English","HITARTHI Typing website का access","हर book के साथ worksheet","और भी बहुत कुछ"],
  books:[3,1,13,14,19]}
];
const flagWA=f=>"https://wa.me/"+WA+"?text="+encodeURIComponent(`Namaste HITARTHI, mujhe "${f.n}" (Rs ${f.price}) leni hai. Kripya jaankari aur payment details bhejein.`);
function flagCard(f,i){
  return `<article class="fp ${f.k}"><span class="dw-rib" aria-hidden="false">🪔 दिवाली Offer: +1 E-book मुफ़्त</span>
    <span class="rib">${esc(f.rib)}</span>
    <div class="fp-top"><div><h3>${esc(f.n)}</h3><p class="fp-sub">${esc(f.sub)}</p></div><div class="yrs"><b class="num">${f.yrs}</b><span>साल का<br>साथ</span></div></div>
    <div class="fp-books">${f.books.map(hbMap).map(b=>book3d(BOOKS[b])).join("")}<span class="more">+${f.eb-f.books.length}</span></div>
    <div class="fp-get">${f.get?f.get.map(g=>`<div><i>${g[0]}</i><span><b>${esc(g[1])}</b><small>${esc(g[2])}</small></span></div>`).join(""):`
      <div><i>📚</i><span><b class="num">${f.eb} E-books</b><small>शुरुआत में ही, App और WhatsApp पर</small></span></div>
      <div><i>📖</i><span><b class="num">${f.pb} Printed Book${f.pb>1?"s":""}</b><small>अपनी पसंद की, घर पर</small></span></div>
      <div><i>🎁</i><span><b class="num">+${f.monthly} नई E-books</b><small>हर महीने 1, ${f.yrs} साल तक</small></span></div>
      <div><i>🤝</i><span><b class="num">${f.yrs} साल Reader Support</b><small>WhatsApp + monthly Author Q&A</small></span></div>`}
    </div>
    <div><b style="font-size:.85rem;letter-spacing:.06em;opacity:.85">इन books में आप क्या सीखेंगे</b><div class="fp-mods" style="margin-top:6px">${MODS.slice(0,f.mods).map(m=>`<span>${esc(m)}</span>`).join("")}</div></div>
    <div class="fp-price"><b class="num">${rs(f.price)}</b><span>${esc(f.per)}<br>${esc(f.emi)}</span></div>
    ${f.split.length?`<p class="fp-split">${f.split.map(x=>`${esc(x[0])} <b class="num">${rs(x[1])}</b> <small>(${esc(x[2])})</small>`).join(" + ")}</p>`:""}
    <button class="btn btn-orange btn-block bb-big" data-pay="${f.price}" data-item="${esc(f.n)}">🛒 Buy Now — ${rs(f.price)}</button><div class="fp-cta"><a class="btn btn-ghost" href="${flagWA(f)}" target="_blank" rel="noopener">WhatsApp पर पूछें</a><button class="btn btn-ghost" data-flagopen="${i}">पूरी जानकारी</button></div>
    <p class="fp-note">${esc(f.note||"Live classes / workshop इस membership में शामिल नहीं हैं — वे अलग से उपलब्ध हैं।")}</p>
  </article>`;
}
const flagCmp=`<div class="table-wrap flag-cmp"><table><thead><tr><th>क्या मिलेगा</th><th>Mastery ₹10,500</th><th>Growth ₹5,000</th></tr></thead><tbody>
 <tr><td>E-books</td><td class="num"><b>150</b> (लगभग हर हफ़्ते 1)</td><td class="num">60</td></tr>
 <tr><td>Recorded video courses</td><td><b>पहले साल हर हफ़्ते 1, फिर 3 साल तक हर महीने 1</b></td><td>52 हफ़्ते — 52 courses</td></tr>
 <tr><td>Live support</td><td><b>3 साल</b></td><td>2 साल</td></tr>
 <tr><td>Compounding</td><td><b>The Magic of Compounding + 5 साल support</b></td><td>पूछने पर जानकारी</td></tr>
 <tr><td>English course</td><td class="yes">✓</td><td class="yes">✓</td></tr>
 <tr><td>Typing website का access</td><td class="yes">✓</td><td class="yes">✓</td></tr>
 <tr><td>Worksheets और action plans</td><td class="yes">✓</td><td class="yes">✓</td></tr>
 <tr><td>और भी बहुत कुछ</td><td class="yes">✓</td><td class="yes">✓</td></tr>
 <tr><td>प्रति महीना खर्च (औसत)</td><td class="num"><b>₹292</b></td><td class="num">₹208</td></tr>
</tbody></table></div>`;
$$("[data-flag]").forEach(el=>{el.innerHTML=FLAGS.map(flagCard).join("");el.insertAdjacentHTML("afterend",flagCmp);});
$("#flagVis").innerHTML=`<div class="fv-card"><div class="eyebrow" style="color:#FFD86B">MASTERY MEMBERSHIP</div><div class="yrs"><b>3</b><span>साल का<br>साथ</span></div><b class="num">₹10,500</b><div class="fv-row"><span>150 E-books</span><span>Video Courses</span><span>English + Typing</span><span>5 साल Compounding</span></div></div>`;
function openFlag(i){
  const f=FLAGS[i],m=$("#modal");m.dataset.i="";
  m.innerHTML=`<button class="icon-btn x" data-closemodal="1" aria-label="बंद करें">✕</button><div style="padding:26px">
   <div class="eyebrow" style="color:var(--orange)">${esc(f.rib)}</div><h2 style="font-size:clamp(1.5rem,3vw,2.1rem);margin-top:4px">${esc(f.n)}</h2><p class="muted">${esc(f.sub)}</p>
   <div class="specs" style="margin-top:12px"><span class="num">${rs(f.price)}</span><span>${f.eb} E-books</span>${f.pb?`<span>${f.pb} Printed</span>`:""}${f.monthly?`<span>+${f.monthly} नई e-books</span>`:"<span>हर हफ़्ते नया course</span>"}<span>${esc(f.emi)}</span></div>
   <h3 style="font-size:1.15rem;margin-top:18px">इन books में आप क्या सीखेंगे</h3><ol class="fm-list">${MODS.slice(0,f.mods).map(x=>`<li>${esc(x)}</li>`).join("")}</ol>
   <h3 style="font-size:1.15rem;margin-top:16px">Membership में क्या-क्या मिलेगा (${f.yrs} साल)</h3><ul class="ticks">${f.support.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
   ${f.split.length?`<h3 style="font-size:1.15rem;margin-top:16px">कीमत का बँटवारा (bill में ऐसे लिखा जाएगा)</h3><ul class="ticks">${f.split.map(x=>`<li>${esc(x[0])}: <b class="num">${rs(x[1])}</b> (${esc(x[2])})</li>`).join("")}</ul>`:""}
   <p class="small muted" style="margin-top:12px">E-books में शामिल: The Magic of Compounding, The Money Blueprint, AI और career books, self-help books और बहुत कुछ। Printed books आप अपनी पसंद से चुनेंगे। ${esc(f.note||"Live classes या workshop चाहिए, तो वे अलग से उपलब्ध हैं।")}</p>
   <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:16px"><button class="btn btn-orange bb-big" data-pay="${f.price}" data-item="${esc(f.n)}">🛒 Buy Now — ${rs(f.price)}</button><a class="btn btn-ghost" href="${flagWA(f)}" target="_blank" rel="noopener">WhatsApp पर पूछें</a><button class="btn btn-ghost" data-go="books" data-closemodal="1">Books देखें</button></div></div>`;
  m.hidden=false;$("#scrim").hidden=false;
}
document.addEventListener("click",e=>{
  const o=e.target.closest("[data-flagopen]");if(o){e.stopPropagation();openFlag(+o.dataset.flagopen);return;}

},true);
/* ---------- WHY page quotes ---------- */
(function(){
  const Q=["हर बड़ा बदलाव एक छोटी शुरुआत से होता है।","आपकी आज की सीख, आपके आने वाले कल को नई दिशा दे सकती है।","अपनी परिस्थितियों को अपनी सीखने की सीमा मत बनने दीजिए।","सीखने की कोई उम्र नहीं होती। हर दिन कुछ नया सीखने का अवसर है।","ज्ञान आपको समझ देता है, कौशल आपको अभ्यास का अवसर देता है और अनुशासन आपको निरंतर आगे बढ़ने में मदद करता है।","अपने बच्चों को केवल सपने देखना ही नहीं, बल्कि उन सपनों के लिए सीखना और मेहनत करना भी सिखाएं।","दुनिया में बदलाव का इंतज़ार मत कीजिए। खुद को नई संभावनाओं के लिए तैयार करना शुरू कीजिए।"];
  let qi=0,qt=null;const t=$("#qText"),d=$("#qDots");
  d.innerHTML=Q.map((_,k)=>`<button aria-label="Quote ${k+1}"></button>`).join("");
  function show(k){qi=(k+Q.length)%Q.length;t.style.opacity=0;setTimeout(()=>{t.textContent="“"+Q[qi]+"”";t.style.opacity=1;},reduce?0:250);$$("#qDots button").forEach((b,j)=>b.setAttribute("aria-current",j===qi));clearTimeout(qt);if(!reduce)qt=setTimeout(()=>show(qi+1),6000);}
  d.addEventListener("click",e=>{const b=e.target.closest("button");if(b)show([...d.children].indexOf(b));});
  t.textContent="“"+Q[0]+"”";show(0);
})();
/* ---------- CLEAN VERSION: countdown, lead magnet, flipbook ---------- */
(function(){
  // countdown — change BATCH to the real batch date/time
  const BATCH={name:"Advanced Excel + AI Tools",when:new Date("2026-10-05T17:00:00+05:30")};
  const el=$("#cdown");
  function tick(){
    const d=BATCH.when-new Date();
    if(d<=0){el.innerHTML=`<span class="cd-t">नया batch शुरू हो चुका है<small>अगले batch की जानकारी के लिए WhatsApp करें</small></span><button class="btn btn-orange btn-sm" data-go="contact" data-demo="1">Free Counselling</button>`;return;}
    const D=Math.floor(d/864e5),H=Math.floor(d/36e5)%24,M=Math.floor(d/6e4)%60,S=Math.floor(d/1e3)%60;
    el.innerHTML=`<span class="cd-t">अगला batch: ${esc(BATCH.name)}<small>${BATCH.when.toLocaleDateString("hi-IN",{day:"numeric",month:"long"})}, शाम 5 बजे • Online Live</small></span>
      <span class="cd-box"><span><b class="num">${D}</b><small>दिन</small></span><span><b class="num">${H}</b><small>घंटे</small></span><span><b class="num">${M}</b><small>मिनट</small></span><span><b class="num">${String(S).padStart(2,"0")}</b><small>सेकंड</small></span></span>
      <button class="btn btn-orange btn-sm" data-go="contact" data-demo="1">Free Counselling से शुरू करें</button>`;
  }
  tick(); if(!reduce)setInterval(tick,1000); else setInterval(tick,60000);

  // lead book
  $("#freechapter .b3wrap").innerHTML=book3d(BOOKS[hbMap(2)],"md");
  $("#leadForm").addEventListener("submit",e=>{
    e.preventDefault();
    const n=$("#lfName").value.trim(), ph=$("#lfPhone").value.replace(/\D/g,"");
    if(!n){$("#lfErr").textContent="कृपया अपना नाम लिखें।";$("#lfErr").hidden=false;return;}
    if(ph.length!==10){$("#lfErr").textContent="WhatsApp नंबर 10 अंकों का होना चाहिए।";$("#lfErr").hidden=false;return;}
    $("#lfErr").hidden=true;
    const msg=`Namaste HITARTHI, mera naam ${n} hai. Mujhe "Kampounding ka Jaadu" ka Free Chapter chahiye. Number: ${ph}`;
    $("#lfOk").innerHTML=`<b>धन्यवाद, ${esc(n)}!</b> नीचे button दबाकर WhatsApp पर भेजें — chapter PDF वहीं मिलेगा।<div style="margin-top:8px"><a class="btn btn-wa btn-sm" href="https://wa.me/${WA}?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener">WhatsApp पर Chapter पाएँ</a></div>`;
    $("#lfOk").hidden=false;
  });

  // flipbook
  function pagesFor(b){
    const L=b.learn;
    return [
      `<div class="face cov">${book3d(b,"lg")}</div>`,
      `<div class="face back"><div class="hb">HITARTHI Publications</div><h4>${esc(b.t)}</h4><p>${esc(b.s)}</p><p style="margin-top:.8em;color:#7C83A6">सरल हिंदी • worksheets सहित • ${b.pages} पेज</p><span class="pn">i</span></div>`,
      `<div class="face"><div class="hb">विषय-सूची</div><h4>इस book में</h4><ol style="padding-left:1.2em">${L.map(x=>`<li>${esc(x)}</li>`).join("")}<li>Worksheets और Action Plan</li><li>याद रखने वाली बातें</li></ol><span class="pn">1</span></div>`,
      `<div class="face back"><div class="hb">अध्याय 1</div><div class="big">01</div><h4>${esc(L[0])}</h4><p>हर बड़ी शुरुआत एक छोटे कदम से होती है। इस अध्याय में हम सरल उदाहरणों से समझेंगे कि यह बात आपके रोज़ के जीवन में कैसे काम आती है।</p><span class="pn">2</span></div>`,
      `<div class="face"><p>मान लीजिए रमेश हर महीने थोड़ा-थोड़ा सीखता और करता है। शुरुआत में फ़र्क नहीं दिखता, पर एक साल बाद उसकी समझ और नतीजे दोनों बदल जाते हैं।</p><div class="box"><b>याद रखें:</b> छोटा कदम, रोज़ का कदम — यही असली ताकत है।</div><p style="margin-top:.6em">अगले पन्ने पर आप अपना पहला अभ्यास करेंगे।</p><span class="pn">3</span></div>`,
      `<div class="face back"><div class="hb">Worksheet</div><h4>आज का Action</h4><div class="box g">1. आज आप कौन-सा एक छोटा कदम उठाएँगे?<br>________________________<br>2. इसे कब करेंगे? ______<br>3. 7 दिन बाद क्या बदला? ______</div><p style="margin-top:.8em;color:#7C83A6">पूरी book पढ़ने के लिए Books Store से लें।</p><span class="pn">4</span></div>`
    ];
  }
  let fbI=0,fbN=0;
  function openPeek(i){
    const b=BOOKS[i],P=pagesFor(b);
    // pair faces into leaves: leaf k has front=P[2k], back=P[2k+1]
    const leaves=[];for(let k=0;k<P.length;k+=2)leaves.push([P[k],P[k+1]||'<div class="face back"></div>']);
    fbN=leaves.length;fbI=0;
    const m=$("#modal");m.dataset.i="";
    m.innerHTML=`<button class="icon-btn x" data-closemodal="1" aria-label="बंद करें">✕</button><div class="fb-wrap">
      <div class="fb-title">📖 ${esc(b.t)} — अंदर झाँकें <small style="font-weight:600;color:var(--ink-3)">(नमूना पन्ने)</small></div>
      <div class="fb"><div class="fb-base"></div>${leaves.map((l,k)=>`<div class="page" style="z-index:${fbN-k}">${l[0].replace('class="face','class="face front')}${l[1]}</div>`).join("")}</div>
      <div class="fb-ctrl"><button id="fbPrev">‹ पीछे</button><span id="fbPos"></span><button id="fbNext">आगे ›</button></div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center">${bookBtn(b,i,"btn-sm"," — "+rs(b.e))}<button class="btn btn-ghost btn-sm" data-open="${i}">Book की जानकारी</button></div></div>`;
    m.hidden=false;$("#scrim").hidden=false;fbShow();
  }
  function fbShow(){
    $$("#modal .fb .page").forEach((p,k)=>{p.classList.toggle("flipped",k<fbI);p.style.zIndex=k<fbI?k+1:fbN-k;});
    const pos=$("#fbPos");if(pos)pos.textContent=`पन्ना ${fbI+1} / ${fbN+1}`;
  }
  document.addEventListener("click",e=>{
    const pk=e.target.closest("[data-peek]");if(pk){e.stopPropagation();e.preventDefault();openPeek(+pk.dataset.peek);return;}
    if(e.target.id==="fbNext"){if(fbI<fbN){fbI++;fbShow();}return;}
    if(e.target.id==="fbPrev"){if(fbI>0){fbI--;fbShow();}return;}
    const pg=e.target.closest("#modal .fb .page");if(pg){const k=[...pg.parentNode.querySelectorAll(".page")].indexOf(pg);fbI=k<fbI?k:k+1;fbShow();}
  },true);
})();
/* ---------- CONVERSION UPGRADE: analytics, course detail, bundles, policies ---------- */
window.dataLayer=window.dataLayer||[];
/* ---------- ANALYTICS — Google Analytics 4 + Meta Pixel: ID मिलते ही यहाँ डालें (सिर्फ़ hitarthi.com पर चलते हैं) ---------- */
const GA4_ID="";        /* जैसे "G-ABC123XYZ"  — analytics.google.com → Admin → Data streams */
const META_PIXEL_ID=""; /* जैसे "1234567890123456" — business.facebook.com → Events Manager */
(function(){if(!/hitarthi\.com$/i.test(location.hostname))return;
  if(GA4_ID){const sc=document.createElement("script");sc.async=true;sc.src="https://www.googletagmanager.com/gtag/js?id="+GA4_ID;document.head.appendChild(sc);window.gtag=function(){window.dataLayer.push(arguments);};gtag("js",new Date());gtag("config",GA4_ID);}
  if(META_PIXEL_ID){!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init",META_PIXEL_ID);fbq("track","PageView");}})();
const FBMAP={purchase:"Purchase",generate_lead:"Lead",payment_started:"InitiateCheckout",course_view:"ViewContent",add_to_cart:"AddToCart",partner_join:"CompleteRegistration",search_pick:"Search"};
function track(ev,p){p=p||{};try{window.dataLayer.push(Object.assign({event:ev},p));}catch(e){}
  try{if(window.gtag&&GA4_ID)gtag("event",ev,Object.assign({currency:"INR"},p));}catch(e){}
  try{if(window.fbq&&META_PIXEL_ID&&FBMAP[ev])fbq("track",FBMAP[ev],Object.assign({currency:"INR"},p.value?{value:p.value}:{},p.item||p.course?{content_name:p.item||p.course}:{}));}catch(e){}}
(function(){
  $("#h3b1").innerHTML=`<div class="b3wrap">${book3d(BOOKS[hbMap(2)])}</div>`;$("#h3b2").innerHTML=`<div class="b3wrap">${book3d(BOOKS[hbMap(17)])}</div>`;
  const TR={computer:0,ai:1,digital:1,english:2,finance:3,kids:4,business:5,life:5};
  function openCourse(name){
    const c=cByName(name);if(!c)return;const k=catOf(c.cat);track("course_view",{course:c.name,category:c.cat,price:c.fee});
    const rel=COURSES.filter(x=>x.cat===c.cat&&x.name!==c.name).slice(0,3);
    const bkCat={computer:"student",ai:"student",digital:"student",english:"english",finance:"finance",business:"business",kids:"kids",life:"self"}[c.cat];
    const bk=BOOKS.map((b,i)=>[b,i]).filter(([b])=>!b.hide&&b.bcat===bkCat).slice(0,2);
    const m=$("#modal");m.dataset.i="";
    m.innerHTML=`<button class="icon-btn x" data-closemodal="1" aria-label="बंद करें">✕</button><div class="cd">
      <span class="tag" style="background:color-mix(in srgb,${k.g[0]} 14%,var(--surface));color:${k.g[0]}">${esc(k.name)}</span>
      <h2 style="font-size:clamp(1.5rem,3vw,2.1rem);margin-top:8px">${esc(c.name)}</h2><p class="muted">${esc(c.hin)}</p>
      <div class="cd-grid"><div>
        <h3>यह course किसके लिए है</h3><p class="muted">${esc(AUDC[c.cat])}</p>
        <h3>आप क्या सीखेंगे</h3><ul class="ticks">${c.out.map(o=>`<li>${esc(o)}</li>`).join("")}<li>हर topic पर practice assignment</li></ul>
        ${hbEbSec(c)}
        <h3>पूरा Syllabus</h3><div id="cdSyl"></div>
        <h3>🎬 2 मिनट का Demo Video</h3><div id="cdVid"></div>
        <h3>🎓 Certificate का नमूना</h3><div id="cdCert" class="cd-cert"><p class="small muted">बन रहा है…</p></div>
        <h3>प्रश्न-उत्तर</h3>
        <details class="faq"><summary>Class कैसे होगी?</summary><p>Online live class, और हर class की recording भी मिलती है।</p></details>
        <details class="faq"><summary>Certificate मिलेगा?</summary><p>हाँ, project और final test पूरा करने पर HITARTHI certificate मिलता है।</p></details>
        <details class="faq"><summary>Fee किश्तों में दे सकते हैं?</summary><p>₹2,999 से अधिक fee वाले courses में किश्तों की सुविधा है। Counseling में जानकारी मिलेगी।</p></details>
      </div>
      <div class="cd-side"><button class="btn btn-primary btn-block" data-lead="course" data-leadc="${esc(c.name)}" style="margin-bottom:10px">🎓 Free Counselling</button>
        <div class="row"><span>Level</span><b>${esc(c.level)}</b></div>
        <div class="row"><span>अवधि</span><b>${esc(c.dur)}</b></div>
        <div class="row"><span>तरीका</span><b>Online Live + Recording</b></div>
        <div class="row"><span>सहायता</span><b>WhatsApp (सोम–शनि)</b></div>
        <div class="row" style="border:0"><span>Fee</span><b class="price num">${rs(c.fee)}</b></div>
        <button class="btn btn-orange btn-block" data-enroll="${esc(c.name)}">अभी Enroll करें — ${rs(c.fee)}</button>
        <a class="btn btn-primary btn-block" href="https://wa.me/${WA}?text=${encodeURIComponent('Namaste HITARTHI, mujhe "'+c.name+'" (Rs '+c.fee+') mein enroll karna hai.')}" target="_blank" rel="noopener" data-track="enroll_click">Enroll करें</a>
        <p class="small muted">Enroll होते ही course और e-books "मेरी Library" में खुल जाते हैं।</p>
      </div></div>
      ${rel.length?`<h3>इसके साथ उपयोगी courses</h3><div class="cd-rel">${rel.map(x=>`<button data-cdetail="${esc(x.name)}"><b>${esc(x.name)}</b><small>${esc(x.dur)} • <span class="num">${rs(x.fee)}</span></small></button>`).join("")}</div>`:""}
      ${bk.length?`<h3>साथ में पढ़ें</h3><div class="cd-rel">${bk.map(([b,i])=>`<button data-open="${i}"><b>${esc(b.t)}</b><small>E-book <span class="num">${rs(b.e)}</span></small></button>`).join("")}</div>`:""}
    </div>`;
    m.hidden=false;$("#scrim").hidden=false;m.scrollTop=0;window.cdEnhance&&cdEnhance(c);
  }
  const CB=[["Basic Computer Course","Advanced Excel"],["Advanced Excel","Excel Dashboard & MIS"],["AI Tools for Everyone","Digital Marketing"],["Spoken English","Personality Development"],["Financial Literacy Basics","Compounding & SIP Basics"],["Small Business Strategy","AI for Business Owners"]];
  $("#cBundles").innerHTML=CB.map(([a,b])=>{const A=cByName(a),B=cByName(b);if(!A||!B)return"";const full=A.fee+B.fee,now=Math.round(full*.9/10)*10-1;
    return `<div class="card cb2 lift"><div class="plus"><span>${esc(a)}</span>+<span>${esc(b)}</span></div><div style="display:flex;align-items:baseline;gap:8px"><span class="price num">${rs(now)}</span><s class="num muted">${rs(full)}</s><span class="save num">${rs(full-now)} की बचत</span></div><div style="display:flex;gap:8px;flex-wrap:wrap"><a class="btn btn-orange btn-sm" href="https://wa.me/${WA}?text=${encodeURIComponent('Namaste HITARTHI, mujhe bundle chahiye: '+a+' + '+b+' (Rs '+now+')')}" target="_blank" rel="noopener">Bundle लें</a><button class="btn btn-ghost btn-sm" data-cdetail="${esc(a)}">Details</button></div></div>`;}).join("");
  const POL={"privacy": ["Privacy Policy — गोपनीयता नीति", "\n<p>HITARTHI Education &amp; Skill Development Pvt. Ltd. (\"HITARTHI\", \"हम\") आपकी जानकारी को सुरक्षित रखने को गंभीरता से लेता है। यह नीति बताती है कि www.hitarthi.com, हमारे app और WhatsApp पर हम कौन-सी जानकारी लेते हैं, क्यों लेते हैं और आपके क्या अधिकार हैं। यह नीति Digital Personal Data Protection Act, 2023 और Information Technology Act, 2000 को ध्यान में रखकर लिखी गई है।</p>\n<h3>1. हम कौन-सी जानकारी लेते हैं</h3><ul>\n<li><b>आप जो खुद देते हैं:</b> नाम, mobile नंबर, शहर, email (अगर दें), delivery का पता, किस course/book में रुचि है।</li>\n<li><b>भुगतान:</b> Order ID, रकम, UTR / Razorpay payment ID। <b>आपका card नंबर, UPI PIN या OTP हम कभी नहीं लेते और न देखते</b> — online भुगतान Razorpay के सुरक्षित page पर होता है।</li>\n<li><b>Team Partners:</b> Partner ID, PIN (code में छुपाकर/hash करके रखा जाता है), photo, और commission भुगतान के लिए KYC — PAN, bank account, IFSC।</li>\n<li><b>पढ़ाई:</b> Library में कौन-सा अध्याय खोला, live class की attendance, test के नंबर और certificate।</li>\n<li><b>Website का इस्तेमाल:</b> कौन-सा page देखा, किस बटन को दबाया — Google Analytics और Meta Pixel के ज़रिए (cookies)। पढ़ने की progress और cart आपके अपने browser में रहते हैं।</li></ul>\n<h3>2. जानकारी का इस्तेमाल किसलिए</h3><ul>\n<li>Order पक्का करना, book/course देना, delivery भेजना और GST invoice बनाना</li>\n<li>आपके माँगने पर counselling call / WhatsApp करना; order, किश्त और class की याद दिलाना</li>\n<li>Partner का commission गिनना, TDS काटना और bank में भुगतान करना</li>\n<li>Certificate बनाना और उसकी जाँच (verify) करवाना</li>\n<li>Website बेहतर बनाना और विज्ञापनों का असर मापना</li></ul>\n<p>हम आपकी जानकारी <b>किसी को बेचते नहीं हैं।</b></p>\n<h3>3. जानकारी किसके साथ साझा होती है (सिर्फ़ ज़रूरत भर)</h3><ul>\n<li>Razorpay (भुगतान), courier / Shiprocket (delivery के लिए नाम, फ़ोन, पता)</li>\n<li>WhatsApp Business API सेवा देने वाली कंपनी (order/class के संदेश भेजने के लिए)</li>\n<li>Google (Google Sheets/Drive में हमारा record, YouTube पर lesson video), Meta (विज्ञापन मापना)</li>\n<li>कानून या सरकारी विभाग के लिखित आदेश पर</li></ul>\n<h3>4. सुरक्षा और कितने समय तक</h3>\n<p>Record सुरक्षित Google Workspace में रहता है, जिसे सिर्फ़ अधिकृत staff देख सकता है। Partner का PIN छुपाकर रखा जाता है; KYC documents एक निजी folder में रहते हैं। Order और invoice का record कानून (GST/Income Tax) के अनुसार 8 साल तक रखा जाता है; बाकी जानकारी काम ख़त्म होने के बाद या आपके कहने पर हटा दी जाती है।</p>\n<h3>5. बच्चों की जानकारी</h3>\n<p>18 साल से कम उम्र के students की जानकारी हम अभिभावक (parent / guardian) की सहमति से ही लेते हैं, सिर्फ़ पढ़ाई के लिए। बच्चों के लिए कोई विज्ञापन targeting नहीं की जाती। School tie-up में data स्कूल और अभिभावक की लिखित सहमति से ही आता है।</p>\n<h3>6. आपके अधिकार</h3><ul>\n<li>अपनी जानकारी देखने, सुधारने या हटाने की माँग करना</li>\n<li>WhatsApp / call से संदेश बंद करवाना — \"STOP\" लिखकर भेजें</li>\n<li>सहमति वापस लेना (कानूनी रूप से ज़रूरी record को छोड़कर)</li></ul>\n<p>इनके लिए hitarthigroup@gmail.com पर लिखें या +91 94537 17356 पर WhatsApp करें।</p>\n<div class=\"pol-box\"><b>शिकायत अधिकारी (Grievance Officer)</b><br>अमन सिंह (Aman Singh)<br>HITARTHI Education &amp; Skill Development Pvt. Ltd.<br>310, बांध बस्ती, कमल टोला, कथारा, बोकारो – 829116, झारखंड<br>📞 +91 94537 17356 (सोम–शनि, सुबह 9–शाम 7) • ✉️ hitarthigroup@gmail.com<br>\nशिकायत मिलने के <b>48 घंटे में</b> पावती (acknowledgement) और <b>30 दिन के अंदर</b> समाधान।</div><p class=\"small muted\">आख़िरी बदलाव: 1 नवंबर 2026। नीति बदलने पर नई तारीख़ के साथ यहीं लिखा जाएगा।</p>"], "terms": ["Terms &amp; Conditions — नियम और शर्तें", "\n<p>www.hitarthi.com इस्तेमाल करने या कुछ खरीदने का मतलब है कि आप इन नियमों से सहमत हैं।</p><ul>\n<li><b>किसके लिए:</b> Course, e-book, audio book, video और membership की सामग्री सिर्फ़ खरीदने वाले के निजी इस्तेमाल के लिए है। उसे copy करना, share करना, दोबारा बेचना या YouTube/WhatsApp groups पर डालना मना है — ऐसा करने पर बिना refund के access बंद किया जा सकता है और कानूनी कार्यवाही हो सकती है।</li>\n<li><b>Library login:</b> Mobile + Order ID से मिलता है; अपना Order ID किसी को न दें। हर page पर आपका नाम/mobile दिखता है।</li>\n<li><b>कीमत:</b> सभी कीमतें ₹ में और GST सहित हैं (जहाँ लागू हो)। Offer और coupon तय तारीख़ तक ही मान्य हैं; एक order पर एक ही coupon।</li>\n<li><b>किश्त / Monthly plan:</b> पहली किश्त के बाद course शुरू होता है; किश्त समय पर न भरने पर access रुक सकता है और भरते ही फिर खुल जाता है। Printed books और certificate पूरा भुगतान होने पर।</li>\n<li><b>Certificate:</b> Final test पास करने (और जहाँ लागू हो, live class attendance पूरी करने) पर मिलता है। Certificate पर QR से कोई भी उसकी जाँच कर सकता है।</li>\n<li><b>कोई guarantee नहीं:</b> HITARTHI शिक्षा और skill देता है। नौकरी, नंबर, कमाई या निवेश में मुनाफ़े की कोई guarantee नहीं है। Financial education की सामग्री निवेश की सलाह नहीं है।</li>\n<li><b>Health products:</b> Dietary supplement हैं, दवा नहीं। गर्भवती महिलाएँ, बच्चे और किसी बीमारी में डॉक्टर की सलाह से ही लें।</li>\n<li><b>Team Partner:</b> Partner बनने की कोई fee नहीं है। कमाई सिर्फ़ असली ग्राहकों को हुई बिक्री पर बनती है — देखें \"Partner Earnings Disclaimer\"।</li>\n<li><b>विवाद:</b> पहले शिकायत अधिकारी से बात; हल न हो तो mediation; उसके बाद बोकारो (झारखंड) की अदालत का क्षेत्राधिकार।</li></ul>\n<div class=\"pol-box\"><b>शिकायत अधिकारी (Grievance Officer)</b><br>अमन सिंह (Aman Singh)<br>HITARTHI Education &amp; Skill Development Pvt. Ltd.<br>310, बांध बस्ती, कमल टोला, कथारा, बोकारो – 829116, झारखंड<br>📞 +91 94537 17356 (सोम–शनि, सुबह 9–शाम 7) • ✉️ hitarthigroup@gmail.com<br>\nशिकायत मिलने के <b>48 घंटे में</b> पावती (acknowledgement) और <b>30 दिन के अंदर</b> समाधान।</div><p class=\"small muted\">आख़िरी बदलाव: 1 नवंबर 2026</p>"], "refund": ["Refund &amp; Cancellation Policy — पैसा वापसी", "\n<p><b>मुख्य नियम: Course की refund माँग भुगतान के 2 दिन (48 घंटे) के अंदर ही करनी होगी। E-book, Audio Book, Book Membership और दूसरी digital सामग्री पर refund नहीं है।</b> माँग WhatsApp +91 94537 17356 या hitarthigroup@gmail.com पर Order ID के साथ भेजें।</p>\n<table class=\"pol-t\"><tr><th>क्या ख़रीदा</th><th>नियम</th></tr>\n<tr><td>Free Counselling</td><td>Class न हो पाए तो पूरा पैसा। Class होने के बाद नहीं — admission लेने पर fee में जुड़ जाता है।</td></tr>\n<tr><td>Course (live / recorded)</td><td>भुगतान के 2 दिन के अंदर माँगें और 2 से कम class / lesson देखे हों — तब पूरा पैसा। 2 दिन के बाद या उससे ज़्यादा lesson देखने पर नहीं।</td></tr>\n<tr><td>E-book, Audio Book, Book Membership</td><td>Refund नहीं — digital सामग्री भुगतान होते ही खुल जाती है। सिर्फ़ तकनीकी दिक़्क़त 48 घंटे में ठीक न हो पाए तो पैसा वापस।</td></tr>\n<tr><td>Printed Book</td><td>टूटी, फटी या ग़लत book मिली हो — delivery के 7 दिन में photo/video भेजें, हम मुफ़्त बदलेंगे या पूरा पैसा देंगे।</td></tr>\n<tr><td>Health Products</td><td>Seal बंद हो और product ख़राब / ग़लत / expiry के पास हो — delivery के 7 दिन में unboxing video के साथ। Seal खुलने के बाद सेहत-सुरक्षा के कारण वापसी नहीं।</td></tr>\n<tr><td>Monthly Plan</td><td>उस महीने के भुगतान के 2 दिन के अंदर बंद करने पर उस महीने का पैसा। आगे के महीने कभी भी बंद कर सकते हैं — कोई lock-in नहीं।</td></tr>\n<tr><td>दो बार कट गया / ग़लत रकम</td><td>हमेशा पूरा वापस (जाँच के बाद)।</td></tr></table>\n<ul><li><b>कब मिलेगा:</b> मंज़ूर होने के 7 कामकाजी दिन में उसी तरीके (UPI / card / bank) से जिससे भुगतान हुआ था।</li>\n<li><b>Coupon / offer:</b> वापसी में असल भुगतान की गई रकम ही लौटती है; मुफ़्त मिली e-book का access बंद हो जाता है।</li>\n<li><b>COD:</b> Cash on Delivery order लेने से मना करने पर दोबारा COD सुविधा बंद हो सकती है।</li>\n<li><b>Team Partners:</b> Partner की अपनी ख़रीद पर भी यही नियम। Refund हुई बिक्री का commission वापस कटता है।</li></ul>\n<div class=\"pol-box\"><b>शिकायत अधिकारी (Grievance Officer)</b><br>अमन सिंह (Aman Singh)<br>HITARTHI Education &amp; Skill Development Pvt. Ltd.<br>310, बांध बस्ती, कमल टोला, कथारा, बोकारो – 829116, झारखंड<br>📞 +91 94537 17356 (सोम–शनि, सुबह 9–शाम 7) • ✉️ hitarthigroup@gmail.com<br>\nशिकायत मिलने के <b>48 घंटे में</b> पावती (acknowledgement) और <b>30 दिन के अंदर</b> समाधान।</div><p class=\"small muted\">आख़िरी बदलाव: 1 नवंबर 2026</p>"], "shipping": ["Shipping &amp; Delivery Policy", "\n<ul><li><b>कहाँ:</b> Printed books और Health products पूरे भारत में courier से (जहाँ courier पहुँचता है)।</li>\n<li><b>Delivery charge:</b> ₹50 प्रति order। Printed books / products का कुल ₹999 या ज़्यादा हो तो delivery <b>मुफ़्त</b>।</li>\n<li><b>कितने दिन:</b> 2–3 कामकाजी दिन में dispatch, फिर 4–8 दिन में delivery (दूर के इलाक़ों में थोड़ा ज़्यादा)।</li>\n<li><b>Tracking:</b> Dispatch होते ही tracking link WhatsApp पर, और website के \"📦 मेरा Order\" page पर।</li>\n<li><b>Cash on Delivery (COD):</b> ₹5,000 तक के Health / Printed book order पर। सामान मिलने पर delivery वाले को नक़द दें।</li>\n<li><b>Digital (e-book, course):</b> कोई delivery charge नहीं — भुगतान पक्का होते ही \"मेरी Library\" में।</li>\n<li><b>Printed book order / bulk order (स्कूल, library, संस्था):</b> Contact page पर \"Printed Books\" form भरें या +91 94537 17356 पर WhatsApp करें।</li>\n<li>टूटा / ग़लत सामान: delivery के 7 दिन में photo भेजें — Refund Policy देखें।</li></ul>\n<div class=\"pol-box\"><b>शिकायत अधिकारी (Grievance Officer)</b><br>अमन सिंह (Aman Singh)<br>HITARTHI Education &amp; Skill Development Pvt. Ltd.<br>310, बांध बस्ती, कमल टोला, कथारा, बोकारो – 829116, झारखंड<br>📞 +91 94537 17356 (सोम–शनि, सुबह 9–शाम 7) • ✉️ hitarthigroup@gmail.com<br>\nशिकायत मिलने के <b>48 घंटे में</b> पावती (acknowledgement) और <b>30 दिन के अंदर</b> समाधान।</div><p class=\"small muted\">आख़िरी बदलाव: 1 नवंबर 2026</p>"], "partner": ["Partner Earnings Disclaimer — कमाई की सच्चाई", "\n<div class=\"pol-box en\"><b>Earnings Disclaimer (English)</b><br>\nHITARTHI does not guarantee any income. Earnings of a Team Partner depend only on genuine sales of HITARTHI products (courses, e-books, books and health products) to real customers, and on the partner's own effort and skill. There is <b>no joining fee</b>, and no income is paid merely for recruiting people. Levels and positions are never sold. Any figures shown on this website (calculators, examples, reward targets) are illustrations only, not promises or averages. Partners must not make income claims to others. HITARTHI follows the Consumer Protection (Direct Selling) Rules, 2021.</div>\n<h3>हिंदी में</h3><ul>\n<li><b>कमाई पक्की नहीं है</b> — यह सिर्फ़ असली ग्राहकों को हुई बिक्री और आपकी मेहनत पर निर्भर है।</li>\n<li>Partner बनना <b>मुफ़्त</b> है। किसी को जोड़ने भर से कोई पैसा नहीं मिलता — commission सिर्फ़ बिक्री पर।</li>\n<li>Level या पद <b>कभी बेचा नहीं जाता</b> — Level सिर्फ़ बिक्री के target से बढ़ता है।</li>\n<li>Website के calculator, उदाहरण और reward target सिर्फ़ समझाने के लिए हैं — यह वादा या औसत कमाई नहीं है।</li>\n<li>Partner ग्राहकों या नए लोगों से कमाई के झूठे वादे नहीं करेंगे, और ग्राहक से नक़द या अपने account में पैसा नहीं लेंगे — भुगतान हमेशा HITARTHI के company account में।</li>\n<li>Commission पर TDS (Section 194H) कटता है; भुगतान सिर्फ़ KYC (PAN + bank) पूरा होने पर bank transfer से।</li>\n<li>Refund हुई बिक्री का commission वापस कटता है।</li></ul>\n<div class=\"pol-box\"><b>शिकायत अधिकारी (Grievance Officer)</b><br>अमन सिंह (Aman Singh)<br>HITARTHI Education &amp; Skill Development Pvt. Ltd.<br>310, बांध बस्ती, कमल टोला, कथारा, बोकारो – 829116, झारखंड<br>📞 +91 94537 17356 (सोम–शनि, सुबह 9–शाम 7) • ✉️ hitarthigroup@gmail.com<br>\nशिकायत मिलने के <b>48 घंटे में</b> पावती (acknowledgement) और <b>30 दिन के अंदर</b> समाधान।</div><p class=\"small muted\">आख़िरी बदलाव: 1 नवंबर 2026</p>"], "grievance": ["शिकायत अधिकारी — Grievance Officer", "<p>Order, delivery, refund, Partner commission या किसी भी सेवा से जुड़ी शिकायत के लिए:</p><div class=\"pol-box\"><b>शिकायत अधिकारी (Grievance Officer)</b><br>अमन सिंह (Aman Singh)<br>HITARTHI Education &amp; Skill Development Pvt. Ltd.<br>310, बांध बस्ती, कमल टोला, कथारा, बोकारो – 829116, झारखंड<br>📞 +91 94537 17356 (सोम–शनि, सुबह 9–शाम 7) • ✉️ hitarthigroup@gmail.com<br>\nशिकायत मिलने के <b>48 घंटे में</b> पावती (acknowledgement) और <b>30 दिन के अंदर</b> समाधान।</div>\n<ul><li>शिकायत में Order ID / Partner ID, mobile और समस्या साफ़ लिखें, photo/screenshot हो तो साथ भेजें।</li><li>समाधान से संतुष्ट न हों तो राष्ट्रीय उपभोक्ता helpline 1915 या consumerhelpline.gov.in पर भी शिकायत कर सकते हैं।</li></ul>"]};
  function openPolicy(k){const [t,b]=POL[k];const m=$("#modal");m.dataset.i="";m.innerHTML=`<button class="icon-btn x" data-closemodal="1" aria-label="बंद करें">✕</button><div class="cd pol-body"><h2 style="font-size:1.7rem">${t}</h2>${b}<p class="small muted" style="margin-top:16px">अंतिम अपडेट: सितंबर 2026 • HITARTHI Education &amp; Skill Development Pvt. Ltd., 310 बांध बस्ती, कमल टोला, कथारा, बोकारो – 829116, झारखंड</p></div>`;m.hidden=false;$("#scrim").hidden=false;}
  document.addEventListener("click",e=>{
    const d=e.target.closest("[data-cdetail]");if(d){e.stopPropagation();openCourse(d.dataset.cdetail);return;}
    const pl=e.target.closest("[data-policy]");if(pl){e.stopPropagation();openPolicy(pl.dataset.policy);return;}
    const tr=e.target.closest("[data-track]");if(tr)track(tr.dataset.track,{});
    if(e.target.id==="checkout")track("checkout_started",{items:cart.length});
  },true);
})();
/* ---------- PROMO BANNERS (Jio-style चलता हुआ slider) ---------- */
(function(){
  const PR_MS=4000; /* हर banner कितनी देर रुके */
  const bk=(i,x,y,r,z)=>`<div class="b3wrap" style="left:${x}%;top:${y}%;transform:rotate(${r}deg);z-index:${z}">${book3d(BOOKS[hbMap(i)])}</div>`;
  const laptop=`<svg viewBox="0 0 150 100" width="150" aria-hidden="true"><rect x="20" y="8" width="110" height="70" rx="6" fill="#0B1A4A" stroke="#fff" stroke-width="3"/><rect x="27" y="15" width="96" height="56" rx="3" fill="#DBEAFE"/><circle cx="75" cy="43" r="15" fill="#FF8C00"/><path d="M70 35l12 8-12 8z" fill="#fff"/><path d="M8 80h134l-8 10H16z" fill="#fff"/><rect x="62" y="80" width="26" height="4" rx="2" fill="#CBD5E1"/></svg>`;
  const gauge=`<svg viewBox="0 0 140 90" width="140" aria-hidden="true"><path d="M15 80a55 55 0 0 1 110 0" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="14" stroke-linecap="round"/><path d="M15 80a55 55 0 0 1 110 0" fill="none" stroke="#FFD21F" stroke-width="14" stroke-linecap="round" stroke-dasharray="173" stroke-dashoffset="45"/><g class="pr-needle" style="transform-origin:70px 80px"><path d="M70 80L108 46" stroke="#fff" stroke-width="5" stroke-linecap="round"/></g><circle cx="70" cy="80" r="8" fill="#fff"/><text x="70" y="66" text-anchor="middle" font-size="16" font-weight="800" fill="#fff">IQ</text></svg>`;
  const phone=`<svg viewBox="0 0 90 150" width="78" aria-hidden="true"><rect x="5" y="3" width="80" height="144" rx="14" fill="#0B1A4A" stroke="#fff" stroke-width="3"/><rect x="11" y="14" width="68" height="120" rx="6" fill="#fff"/><use href="#logo" x="25" y="26" width="40" height="40"/><rect x="18" y="74" width="54" height="8" rx="4" fill="#0057D9"/><rect x="18" y="88" width="40" height="6" rx="3" fill="#CBD5E1"/><rect x="18" y="100" width="54" height="16" rx="5" fill="#FF8C00"/><rect x="36" y="7" width="18" height="3" rx="1.5" fill="#fff" opacity=".5"/></svg>`;
  const trophy=`<svg viewBox="0 0 120 120" width="112" aria-hidden="true"><defs><linearGradient id="prg" x1="0" x2="1"><stop offset="0" stop-color="#FFF3B0"/><stop offset=".5" stop-color="#FFC21F"/><stop offset="1" stop-color="#B87900"/></linearGradient></defs><path d="M30 18h60v22a30 30 0 0 1-60 0z" fill="url(#prg)"/><path d="M30 24H14a16 16 0 0 0 18 22M90 24h16a16 16 0 0 1-18 22" fill="none" stroke="#FFC21F" stroke-width="6"/><rect x="54" y="68" width="12" height="18" fill="#D99A00"/><rect x="38" y="86" width="44" height="12" rx="3" fill="url(#prg)"/><rect x="32" y="98" width="56" height="10" rx="3" fill="#0B1A4A"/><text x="60" y="48" text-anchor="middle" font-size="20" font-weight="900" fill="#7A4B00">1</text><g fill="#fff"><circle cx="18" cy="12" r="2.5"/><circle cx="104" cy="16" r="2"/><circle cx="98" cy="62" r="2.5"/></g></svg>`;
  const P=[
   {g:["#0B1A4A","#0057D9","#00A3FF"],chip:"Free Counselling",h:"पहले बात कीजिए, फिर जुड़िए",p:"सही course चुनने में मदद • बिल्कुल मुफ़्त",price:"FREE",cta:"Counselling लें →",act:'data-go="contact" data-demo="1"',art:`<div style="position:relative">${laptop}<span class="pr-live"><i></i>LIVE</span></div>`},
   {g:["#7C2D12","#EA580C","#FFB020"],chip:"Mastery Book Membership",h:"150 E-books + Video Courses",p:"3 साल का साथ • English + Typing • और भी बहुत कुछ",price:"₹10,500",cta:"Program देखें →",act:'data-flagopen="0"',art:`<div class="pr-books">${bk(2,8,22,-10,1)}${bk(1,30,14,0,3)}${bk(0,52,22,10,2)}</div>`},
   {g:["#064E3B","#15803D","#34D399"],chip:"Growth Book Membership",h:"60 E-books + 52 Video Courses",p:"2 साल live support • English + Typing • और भी बहुत कुछ",price:"₹5,000",cta:"जानकारी लें →",act:'data-flagopen="1"',art:`<div class="pr-books">${bk(14,14,20,-8,1)}${bk(9,40,16,6,2)}<span class="pr-badge" style="right:8px;top:10px">✓ 2 साल support</span></div>`},
   {g:["#3B0764","#7C3AED","#C084FC"],chip:"Spoken English",h:"झिझक छोड़िए, English बोलिए",p:"रोज़ की बातचीत से Interview तक — practice के साथ",cta:"Course देखें →",act:'data-go="courses" data-cat="english"',art:`<div style="position:relative;width:130px;height:110px;display:grid;place-items:center"><span class="avwrap">${avatar(AV.eng)}</span><span class="pr-bub" style="left:-4px;top:4px">Hello! 👋</span><span class="pr-bub" style="right:2px;bottom:8px">I can speak!</span></div>`},
   {g:["#0C4A6E","#0369A1","#38BDF8"],chip:"HITARTHI Books Store",h:BOOKS.length+" Hindi-English Books",p:"E-book या Printed — जैसा आपको पसंद",cta:"Books देखें →",act:'data-go="books"',art:`<div class="pr-books">${bk(16,2,24,-12,1)}${bk(11,22,16,-4,2)}${bk(5,42,16,4,3)}${bk(19,60,24,12,2)}</div>`},
   {g:["#14532D","#16A34A","#A3E635"],chip:"मुफ़्त Test",h:"आपका Money IQ कितना है?",p:"छोटा quiz + SIP और बचत calculator",cta:"Test दें →",act:'data-go="finance" data-scrollto="iqCard"',pc:"#FFF",art:gauge},
   {g:["#831843","#DB2777","#F9A8D4"],chip:"Kids (8–15 वर्ष)",h:"Computer और Typing की मज़ेदार शुरुआत",p:"खेल-खेल में सीखें • Parents को progress report",cta:"Kids Courses →",act:'data-go="courses" data-cat="kids"',art:`<div style="display:grid;gap:8px;justify-items:center"><span class="avwrap" style="width:60px">${avatar(AV.kids)}</span><div class="pr-keys"><span>H</span><span>I</span><span>T</span><span>A</span></div></div>`},
   {g:["#0B1A4A","#12235B","#FF8C00"],chip:"HITARTHI App",h:"पढ़ाई अब आपकी जेब में",p:"Classes, recordings और e-books — एक ही app में",cta:"Google Play से Download →",href:"https://play.google.com/store/apps/details?id=co.rogers.flabo",art:phone},
   {g:["#0F172A","#0057D9","#16A34A"],chip:"🤝 Partner Program",h:"मुफ़्त Partner बनिए",p:"मुफ़्त joining • हर sale पर commission • अपना dashboard",cta:"Plan देखें →",act:'data-go="partner"',art:`<div style="display:grid;gap:6px;justify-items:center"><span class="pr-badge" style="position:static">FREE</span><span style="font:800 2rem 'Baloo 2',sans-serif;text-shadow:0 3px 10px rgba(0,0,0,.35)">🤝</span><span class="pr-badge" style="position:static;background:#fff;color:#0057D9">🟢 Green ID</span></div>`},
   {g:["#1A1050","#0B1A4A","#B87900"],chip:"🏆 Team Partner बनें",h:"Students तक सही शिक्षा पहुँचाइए",p:"हर महीने Star Performers को सम्मान",cta:"Winners देखें →",act:'data-scroll="winners"',art:trophy}
  ];
  const tr=$("#prTrack"),dots=$("#prDots"),root=$("#promo");
  tr.innerHTML=P.map((b,k)=>{const inner=`<span class="pr-txt"><span class="pr-chip">${esc(b.chip)}</span><span class="pr-h">${esc(b.h)}</span><span class="pr-p">${esc(b.p)}</span><span class="pr-row">${b.price?`<span class="pr-price num">${esc(b.price)}</span>`:""}<span class="pr-cta">${esc(b.cta)}</span></span></span><span class="pr-art" aria-hidden="true">${b.art}</span>`;
    const st=`--g1:${b.g[0]};--g2:${b.g[1]};--g3:${b.g[2]}${b.pc?";--pc:"+b.pc:""}`;
    return b.href?`<a class="pr-card" style="${st}" href="${b.href}" target="_blank" rel="noopener" aria-label="${k+1} / ${P.length}: ${esc(b.h)}" data-track="promo_click">${inner}</a>`:`<button class="pr-card" style="${st}" ${b.act} aria-label="${k+1} / ${P.length}: ${esc(b.h)}" data-track="promo_click">${inner}</button>`;}).join("");
  root.style.setProperty("--prd",PR_MS+"ms");
  dots.innerHTML=P.map((_,k)=>`<button aria-label="Banner ${k+1}"></button>`).join("");
  const cards=[...tr.children],db=[...dots.children];
  let cur=0,timer=null,hold=false,user=false,vis=true;const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  function mark(i){cur=i;cards.forEach((c,j)=>c.classList.toggle("on",j===i));db.forEach((d,j)=>{d.classList.remove("on");void d.offsetWidth;if(j===i)d.classList.add("on");});}
  function maxStart(){return tr.scrollWidth-tr.clientWidth-2;}
  function goTo(i){i=(i+P.length)%P.length;let x=cards[i].offsetLeft-tr.offsetLeft-2;if(x>maxStart()&&i!==0){/* आख़िरी cards पूरे दिख रहे हों तो सीधे अगले पर */}
    tr.scrollTo({left:Math.min(x,tr.scrollWidth),behavior:"smooth"});mark(i);}
  function next(){const atEnd=tr.scrollLeft>=maxStart();goTo(atEnd&&cur>=P.length-1?0:(atEnd?0:cur+1));}
  function paused(){return user||hold||!vis||document.hidden||reduce;}
  function plan(){clearTimeout(timer);root.classList.toggle("paused",paused());if(!paused())timer=setTimeout(()=>{next();plan();},PR_MS);}
  let st;tr.addEventListener("scroll",()=>{clearTimeout(st);st=setTimeout(()=>{const x=tr.scrollLeft;let b=0,bd=1e9;cards.forEach((c,j)=>{const d=Math.abs(c.offsetLeft-tr.offsetLeft-x);if(d<bd){bd=d;b=j;}});if(b!==cur&&tr.scrollLeft<maxStart())mark(b);},120);},{passive:true});
  root.addEventListener("pointerenter",e=>{if(e.pointerType==="mouse"){hold=true;plan();}});root.addEventListener("pointerleave",()=>{hold=false;plan();});
  let tt;tr.addEventListener("touchstart",()=>{hold=true;plan();clearTimeout(tt);},{passive:true});tr.addEventListener("touchend",()=>{clearTimeout(tt);tt=setTimeout(()=>{hold=false;plan();},3000);},{passive:true});
  root.addEventListener("focusin",()=>{hold=true;plan();});root.addEventListener("focusout",()=>{hold=false;plan();});
  dots.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;goTo(db.indexOf(b));plan();});
  const pp=$("#prPause");pp.onclick=()=>{user=!user;pp.setAttribute("aria-pressed",user);pp.textContent=user?"▶":"❚❚";pp.setAttribute("aria-label",user?"Slider चलाएँ":"Slider रोकें");plan();};
  if("IntersectionObserver" in window)new IntersectionObserver(es=>{vis=es[0].isIntersecting;plan();},{threshold:.3}).observe(root);
  document.addEventListener("visibilitychange",plan);
  mark(0);plan();
})();
/* ---------- BRAND LINES पट्टी ---------- */
(function(){
  const HI=["HITARTHI — From Learning to Earning", "शिक्षा, कौशल, तकनीक और संस्कार — एक बेहतर भविष्य की ओर", "सीखिए आज, आगे बढ़िए कल", "Degree के साथ Skill, ज्ञान के साथ संस्कार", "छोटी शुरुआत, बड़ा बदलाव", "सही सोच + सही Skill = बेहतर भविष्य", "हर गाँव, हर शहर तक — Digital शिक्षा", "पैसे की समझ, जीवन की मज़बूती", "सीखना कभी बंद न करें — हर दिन कुछ नया"], EN=["Education + Skills + Technology + Values", "Learn \u2022 Practise \u2022 Grow", "Future-Ready Skills for Every Indian Student", "Computer \u2022 AI \u2022 Spoken English \u2022 Financial Literacy", "Small Steps. Big Change.", "Learn with Purpose. Grow with Confidence."];
  const mk=(arr,ic)=>{const h=arr.map(t=>`<span>${esc(t).replace("HITARTHI","<b>HITARTHI</b>")}</span><i>${ic}</i>`).join("");return h+h;};
  $("#bbTr1").innerHTML=mk(HI,"✦");$("#bbTr2").innerHTML=mk(EN,"●");$("#bbTr3").innerHTML=mk(HI,"✦");
  $("#bbTr2").parentElement.setAttribute("data-noi18n","1");
  [["bbTr1",70],["bbTr2",50],["bbTr3",80]].forEach(([id,sec])=>$("#"+id).style.setProperty("--bbd",sec+"s"));
})();
/* ---------- REWARD LADDER (target और reward यहीं बदलें) ---------- */
(function(){
  const medal=`<svg viewBox="0 0 90 100" width="70"><path d="M28 2h14l8 30H36zM48 2h14l-8 30H40z" fill="#0057D9"/><path d="M48 2h14l-8 30H44z" fill="#E11D48"/><circle cx="45" cy="62" r="30" fill="#FFC21F" stroke="#B87900" stroke-width="4"/><circle cx="45" cy="62" r="21" fill="none" stroke="#FFF3B0" stroke-width="2"/><path d="M45 47l4.5 9 10 1.4-7.2 7 1.7 9.9L45 69.6 36 74.3l1.7-9.9-7.2-7 10-1.4z" fill="#FFF3B0"/></svg>`;
  const cash=(n)=>`<svg viewBox="0 0 110 90" width="92">${[0,1,2].map(k=>`<g transform="translate(${8+k*6} ${40-k*14}) rotate(${-8+k*6} 45 20)"><rect width="84" height="40" rx="5" fill="#16A34A" stroke="#0F5F2E" stroke-width="2"/><rect x="5" y="5" width="74" height="30" rx="3" fill="none" stroke="#A7F3D0" stroke-width="1.5"/><circle cx="42" cy="20" r="10" fill="#A7F3D0"/><text x="42" y="25" text-anchor="middle" font-size="14" font-weight="900" fill="#0F5F2E">₹</text></g>`).join("")}<rect x="40" y="38" width="10" height="44" fill="#FFD21F" transform="rotate(-4 45 60)" opacity=".95"/><rect x="62" y="0" width="46" height="20" rx="10" fill="#FFD21F" stroke="#B87900" stroke-width="1.5"/><text x="85" y="14.5" text-anchor="middle" font-size="12" font-weight="900" fill="#3A2400">${n}</text></svg>`;
  const bike=`<svg viewBox="0 0 140 90" width="112"><circle cx="30" cy="64" r="20" fill="none" stroke="#1F2937" stroke-width="7"/><circle cx="30" cy="64" r="6" fill="#9CA3AF"/><circle cx="110" cy="64" r="20" fill="none" stroke="#1F2937" stroke-width="7"/><circle cx="110" cy="64" r="6" fill="#9CA3AF"/><path d="M30 64L52 40h34l24 24" fill="none" stroke="#6B7280" stroke-width="5" stroke-linejoin="round"/><path d="M48 44c4-14 22-18 40-14l6 14H48z" fill="#E11D48"/><path d="M56 30c10-6 24-6 32 0" fill="none" stroke="#9F1239" stroke-width="3"/><rect x="58" y="44" width="26" height="12" rx="3" fill="#374151"/><path d="M94 30l10-10h10" fill="none" stroke="#1F2937" stroke-width="5" stroke-linecap="round"/><circle cx="104" cy="34" r="5" fill="#FFD21F"/><path d="M40 34h16" stroke="#111" stroke-width="6" stroke-linecap="round"/></svg>`;
  const car=`<svg viewBox="0 0 160 90" width="128"><ellipse cx="80" cy="80" rx="70" ry="6" fill="#000" opacity=".18"/><path d="M14 62c0-10 6-16 16-18l18-18c4-4 9-6 15-6h36c6 0 11 2 15 6l18 18c12 2 16 8 16 18v6H14z" fill="#0057D9"/><path d="M54 28h22v18H38zM82 28h20c3 0 6 1 8 3l14 15H82z" fill="#BFDBFE"/><path d="M14 58h132v6H14z" fill="#003C99"/><rect x="134" y="50" width="12" height="6" rx="2" fill="#FFD21F"/><rect x="14" y="50" width="8" height="6" rx="2" fill="#E11D48"/><circle cx="46" cy="70" r="13" fill="#1F2937"/><circle cx="46" cy="70" r="5" fill="#D1D5DB"/><circle cx="116" cy="70" r="13" fill="#1F2937"/><circle cx="116" cy="70" r="5" fill="#D1D5DB"/><path d="M60 10l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1z" fill="#FFD21F"/></svg>`;
  /* [business target ₹, reward का नाम, छोटी लाइन, icon, रंग1, रंग2] */
  const RW=[
   /* [target BV, reward, लाइन, icon, रंग1, रंग2, अवधि] — सारे rewards 54% के अंदर वाले 6% Reward Fund से */
   [10000,"HITARTHI Medal","सम्मान और पहचान",medal,"#B87900","#FFC21F","1 महीने में"],
   [100000,"₹5,000 Cash","नकद reward",cash("₹5K"),"#15803D","#22C55E","1 महीने में"],
   [200000,"₹10,000 Cash","नकद reward",cash("₹10K"),"#0F766E","#14B8A6","1 महीने में"],
   [500000,"₹25,000 Cash","नकद reward",cash("₹25K"),"#0369A1","#0EA5E9","1 महीने में"],
   [2000000,"Bike","Two-wheeler reward",bike,"#9F1239","#E11D48","6 महीने में कुल"],
   [15000000,"Car","सबसे बड़ा reward",car,"#0B1A4A","#0057D9","12 महीने में कुल"]
  ];
  const inr=n=>"₹"+Number(n).toLocaleString("en-IN");
  $("#rwLadder").innerHTML=RW.map((r,k)=>`<div class="rw-step${k===RW.length-1?" top":""}" style="--c1:${r[4]};--c2:${r[5]}"><div class="rw-ic" aria-hidden="true">${r[3]}</div><div class="rw-lv">LEVEL ${k+1}</div><div class="rw-rw">${esc(r[1])}<small>${esc(r[2])}</small></div><div class="rw-base"><b class="num">${inr(r[0])}</b><span>BV • ${esc(r[6])}</span></div></div>`).join("");
  $("#rwQuick").innerHTML=[50000,150000,600000,2500000].map(v=>`<button data-rwv="${v}">${inr(v)}</button>`).join("");
  const steps=$$("#rwLadder .rw-step");
  function calc(){const v=Math.max(0,+$("#rwAmt").value||0);let k=-1;RW.forEach((r,j)=>{if(v>=r[0])k=j;});
    steps.forEach((el,j)=>el.classList.toggle("hit",j<=k&&v>0));
    const nx=RW[k+1];let h="";
    if(!v){h=`<div class="rw-next">ऊपर अपना business डालिए — हम बताएँगे कि आप किस Level पर हैं और अगला reward कितनी दूर है।</div>`;}
    else{
      h+=k>=0?`<div class="rw-now"><span class="rw-ic">${RW[k][3]}</span><div><span>आपका Reward</span><b>${esc(RW[k][1])}</b></div></div>`:`<div class="rw-now"><div><span>अभी पहला Level बाकी है</span><b>${inr(RW[0][0]-v)} और</b></div></div>`;
      if(nx){const base=k>=0?RW[k][0]:0,pct=Math.min(100,Math.round((v-base)/(nx[0]-base)*100));
        h+=`<div class="rw-bar"><i style="width:${pct}%"></i></div><div class="rw-next">अगला reward <b>${esc(nx[1])}</b> — सिर्फ़ <b>${inr(nx[0]-v)}</b> का business और!</div>`;}
      else h+=`<div class="rw-next">🎉 शानदार! आप सबसे ऊँचे Level पर हैं।</div>`;}
    $("#rwOut").innerHTML=h;}
  $("#rwAmt").addEventListener("input",calc);
  $("#rwQuick").addEventListener("click",e=>{const b=e.target.closest("[data-rwv]");if(!b)return;$("#rwAmt").value=b.dataset.rwv;calc();});
  calc();
})();
/* ---------- 3D घूमती BOOK (Showcase + Hero) ---------- */
(function(){
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const bars=n=>{let x=0,r="";const seed=[...String(n)].map(Number);for(let k=0;k<38;k++){const w=1+((seed[k%seed.length]+k)%3);if(k%2===0)r+=`<rect x="${x}" y="0" width="${w}" height="30"/>`;x+=w;}return `<svg viewBox="0 0 ${x} 30" preserveAspectRatio="none"><g fill="#000">${r}</g></svg>`;};
  function faces(b,size,i){const ean="2000"+String(100000000+i*7919).slice(-9);
    return `<div class="face f-front">${book3d(b,size)}</div>
      <div class="face f-back"><div class="bk-top"><svg><use href="#logo"/></svg>HITARTHI PUBLICATIONS</div><div class="bk-t">${esc(b.t)}</div><div class="bk-h">इस BOOK से आप क्या सीखेंगे</div><ul class="bk-l">${(b.learn||[]).slice(0,3).map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
        <div class="bk-foot"><div class="bk-price">MRP ${rs(b.p)}<small>www.hitarthi.com</small></div><div class="bk-bar">${bars(ean)}<span>${ean}</span></div></div></div>
      <div class="face f-spine"><svg><use href="#logo"/></svg><b>${esc(b.t)}</b><i>HITARTHI</i></div>
      <div class="face f-pages"></div><div class="face f-top"></div><div class="face f-bot"></div>`;}
  function mount(host,size,onShow){
    const el=document.createElement("div");el.className="sb "+size;el.setAttribute("data-noi18n","1");host.appendChild(el);
    const front=()=>el.querySelector(".f-front"),back=()=>el.querySelector(".f-back");
    const st={i:hbMap(0),a:-20,run:true,hover:false,vis:true,last:0,speed:40};
    function paint(i){const b=BOOKS[i];el.style.cssText=`--c1:${b.col[0]};--c2:${b.col[1]};--c3:${b.col[2]};--acc:${b.col[3]}`;el.innerHTML=faces(b,size,i);}
    function setFront(i){const b=BOOKS[i];const tmp=document.createElement("div");tmp.innerHTML=faces(b,size,i);front().replaceWith(tmp.querySelector(".f-front"));}
    function setRest(i){const b=BOOKS[i];el.style.cssText=`--c1:${b.col[0]};--c2:${b.col[1]};--c3:${b.col[2]};--acc:${b.col[3]};transform:${el.style.transform||""}`;const tmp=document.createElement("div");tmp.innerHTML=faces(b,size,i);["f-back","f-spine"].forEach(c=>el.querySelector("."+c).replaceWith(tmp.querySelector("."+c)));}
    paint(st.i);onShow&&onShow(st.i);
    let shown=0;
    function tick(t){const dt=st.last?Math.min(60,t-st.last):16;st.last=t;
      if(st.run&&!st.hover&&st.vis&&!document.hidden&&!reduce){const prev=st.a;st.a+=st.speed*dt/1000;
        const p=((prev%360)+360)%360,n=((st.a%360)+360)%360;
        if(p<180&&n>=180){st.i=hbNextShelf(st.i,1);setFront(st.i);}            /* front पीछे — अगली book लगाओ */
        if(p<270&&n>=270&&shown!==st.i){shown=st.i;onShow&&onShow(st.i);}        /* नई book सामने आ रही */
        if(p>n){setRest(st.i);}                                                   /* back पीछे — back/spine बदलो */
      }
      el.style.transform=`rotateX(-8deg) rotateY(${st.a}deg)`;requestAnimationFrame(tick);}
    requestAnimationFrame(tick);
    host.addEventListener("pointerenter",e=>{if(e.pointerType==="mouse")st.hover=true;});host.addEventListener("pointerleave",()=>st.hover=false);
    if("IntersectionObserver" in window)new IntersectionObserver(es=>st.vis=es[0].isIntersecting).observe(host);
    let rt=null;if(reduce)rt=setInterval(()=>{if(!st.run)return;go2(1);},5000);
    function go2(d){st.i=hbNextShelf(st.i,d);paint(st.i);shown=st.i;st.a=-20;onShow&&onShow(st.i);el.animate&&el.animate([{opacity:.2,scale:.92},{opacity:1,scale:1}],{duration:420,easing:"ease-out"});}
    host.addEventListener("click",()=>{const b=document.querySelector("[data-open]");openBook(st.i);});
    host.style.cursor="pointer";
    return {st,go:go2};
  }
  document.querySelectorAll("[data-spinshow]").forEach(root=>{
    const sw=root.querySelector(".bs-swap");
    const show=i=>{const b=BOOKS[i];sw.classList.add("out");setTimeout(()=>{
      root.querySelector(".bs-t").textContent=b.t;root.querySelector(".bs-s").textContent=b.s;
      root.querySelector(".bs-meta").innerHTML=`<span>📖 ${b.pages} पन्ने</span><span>🏷️ ${esc(b.ser)}</span>`;
      root.querySelector(".bs-learn").innerHTML=(b.learn||[]).map(x=>`<li>${esc(x)}</li>`).join("");
      root.querySelector(".bs-price").innerHTML=`<div><small>E-book</small><b class="num">${rs(b.e)}</b></div>${b.p>0?`<div><small>Printed</small><b class="num">${rs(b.p)}</b></div>`:""}`;
      root.querySelector(".bs-count").textContent=(HB_SHELF().indexOf(i)+1)+" / "+HB_SHELF().length;root.querySelector(".bs-open").dataset.open=i;sw.classList.remove("out");},300);};
    const m=mount(root.querySelector(".bs-spin"),"lg",show);
    root.querySelector(".bs-next").onclick=()=>m.go(1);root.querySelector(".bs-prev").onclick=()=>m.go(-1);
    const pp=root.querySelector(".bs-pp");pp.onclick=()=>{m.st.run=!m.st.run;pp.textContent=m.st.run?"❚❚":"▶";pp.setAttribute("aria-label",m.st.run?"घूमना रोकें":"घुमाएँ");};
  });
  const hb=$("#heroBook");if(hb){hb.innerHTML='<div class="bs-spin"></div>';const s2=hb.querySelector(".bs-spin");const m=mount(s2,"md");m.st.i=hbMap(2);m.go(0);}
  /* scroll progress + reveal */
  const sb=$("#scrollBar i");addEventListener("scroll",()=>{const h=document.documentElement;sb.style.width=(h.scrollTop/Math.max(1,h.scrollHeight-h.clientHeight)*100)+"%";},{passive:true});
  if(!reduce&&"IntersectionObserver" in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}}),{rootMargin:"0px 0px -8% 0px"});
    document.querySelectorAll("section.page .sec, .bl-card, .pdeck").forEach(el=>{if(el.getBoundingClientRect().top>innerHeight){el.classList.add("rv");io.observe(el);}});
    setTimeout(()=>document.querySelectorAll(".rv:not(.in)").forEach(el=>{if(el.closest("section.page[hidden]"))return;}),0);}
})();
/* ---------- HOME ---------- */
const LADDER=["EDUCATION","SKILL","TECHNOLOGY","AI","CAREER","EARNING","BETTER LIFE"];
$("#mantra").innerHTML=LADDER.map(l=>`<span>${l}</span>`).join("<i>→</i>");
$("#catGrid").innerHTML=CATS.map(k=>{
  const n=COURSES.filter(c=>c.cat===k.id).length;
  return `<button class="card cat lift" data-go="courses" data-cat="${k.id}" style="--tint:color-mix(in srgb,${k.g[1]} 18%,transparent)"><span class="ic" style="background:linear-gradient(135deg,${k.g[0]},${k.g[1]})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${k.ic}</svg></span><h3>${esc(k.name)}</h3><span class="muted small">${esc(k.hin)}</span><span class="cnt num" style="color:${k.g[0]}">${n?n+" courses →":"🔜 जल्द आ रहे"}</span></button>`;
}).join("");
/* popCourses: नीचे COURSES PAGE block में नए cards से बनता है */
$("#bandBooks").innerHTML=[0,9,17].map(hbMap).map(i=>`<div class="b3wrap" data-open="${i}" tabindex="0" role="button" aria-label="${esc(BOOKS[i].t)}">${book3d(BOOKS[i])}</div>`).join("");
const faqHTML=list=>list.map(f=>`<details class="faq"><summary>${esc(f[0])}</summary><p>${esc(f[1])}</p></details>`).join("");
$("#faqHome").innerHTML=faqHTML(FAQ.slice(0,6));
$("#faqContact").innerHTML=faqHTML(FAQ);
if($("#faqWhy"))$("#faqWhy").innerHTML=faqHTML([FAQ[0],FAQ[1],FAQ[3],FAQ[4],["क्या बिना Computer के भी सीख सकते हैं?","हाँ। कई courses की शुरुआत mobile से हो सकती है, और Basic Computer course बिल्कुल शुरुआत से सिखाता है। Practice के लिए computer होना बेहतर रहता है।"]]);

/* Roadmaps */
let curRoad="office";
$("#rtabs").innerHTML=ROADS.map(r=>`<button role="tab" data-road="${r.id}" aria-selected="${r.id===curRoad}">${esc(r.n)}</button>`).join("");
function renderRoad(){
  const r=ROADS.find(x=>x.id===curRoad);
  $("#road").innerHTML=r.items.filter(n=>cByName(n)).map((n,i)=>{const c=cByName(n);return `<div class="stop"><span class="pin num">${i+1}</span><div class="box"><b>${esc(n)}</b><span>${esc(c.dur)} • <span class="num">${rs(c.fee)}</span></span></div></div>`;}).join("");
  const sum=r.items.reduce((a,n)=>a+((cByName(n)||{}).fee||0),0);
  $("#roadSum").innerHTML=`<span><b>मंज़िल:</b> ${esc(r.end)}</span><span>अलग-अलग कुल fee: <b class="num">${rs(sum)}</b></span><button class="btn btn-primary btn-sm" data-enroll="${esc(r.items[0])}" data-road-name="${esc(r.n)}">इस Roadmap की Demo लें</button>`;
  $$("#rtabs button").forEach(b=>b.setAttribute("aria-selected",b.dataset.road===curRoad));
}
$("#rtabs").addEventListener("click",e=>{const b=e.target.closest("[data-road]");if(!b)return;curRoad=b.dataset.road;renderRoad();});
renderRoad();

/* Skill finder */
const WHO=[["school","School छात्र (8–15)"],["college","College / नौकरी की तलाश"],["working","नौकरी करते हैं"],["business","व्यवसायी / दुकानदार"],["parent","अभिभावक (बच्चे के लिए)"]];
const GOAL=[["office","Office की नौकरी"],["digital","Online कमाई"],["it","Coding / IT"],["biz","Business बढ़ाना"],["money","पैसे की समझ"],["english","English बोलना"]];
const LVL=[["Beginner","बिल्कुल शुरुआत"],["Intermediate","थोड़ा आता है"],["Advanced","अच्छा आता है"]];
const HOW=[["live","Live class"],["self","अपनी गति से"],["books","Books से"]];
const ans={who:"college",goal:"office",lvl:"Beginner",how:"live"};
$('[data-q="who"]').innerHTML=WHO.map(([k,v])=>`<button class="opt" data-a="who" data-v="${k}" aria-pressed="${ans.who===k}">${esc(v)}</button>`).join("");
$('[data-q="lvl"]').innerHTML=LVL.map(([k,v])=>`<button class="opt" data-a="lvl" data-v="${k}" aria-pressed="${ans.lvl===k}">${esc(v)}</button>`).join("");
$('[data-q="how"]').innerHTML=HOW.map(([k,v])=>`<button class="opt" data-a="how" data-v="${k}" aria-pressed="${ans.how===k}">${esc(v)}</button>`).join("");
$('[data-q="goal"]').innerHTML=GOAL.map(([k,v])=>`<button class="opt" data-a="goal" data-v="${k}" aria-pressed="${ans.goal===k}">${esc(v)}</button>`).join("");
function renderFinder(){
  let rid=ans.goal;
  if(ans.who==="school"||ans.who==="parent")rid=(ans.goal==="money"?"kids":ans.goal==="english"?"english":"kids");
  if(ans.who==="business"&&ans.goal==="office")rid="biz";
  const r=ROADS.find(x=>x.id===rid);
  const order={Beginner:0,Intermediate:1,Advanced:2};
  let list=r.items.map(n=>cByName(n)).filter(Boolean);
  if(ans.lvl!=="Beginner"){const L=order[ans.lvl];const rest=list.filter(c=>order[c.level]>=L);if(rest.length)list=rest;}
  const first=list.slice(0,3);
  const bookCat={money:"finance",biz:"business",english:"english",kids:"kids"}[rid]||"self";
  const bk=BOOKS.map((b,i)=>[b,i]).filter(([b])=>!b.hide&&b.bcat===bookCat).slice(0,2);
  const howTxt={live:"Live online class (recording के साथ)",self:"अपनी गति से — recording और e-books",books:"Books से पढ़कर"}[ans.how];
  $("#fres").innerHTML=`<div class="eyebrow">आपके लिए सुझाव</div><h3 style="font-size:1.4rem;margin-top:4px">${esc(r.n)} Roadmap</h3><p class="muted small" style="margin-top:4px">${esc(r.end)} • आपका तरीका: ${esc(howTxt)}</p>
  ${ans.how==="books"?"":`<ol>${first.map(c=>`<li><b>${esc(c.name)}</b> <span class="muted small">— ${esc(c.level)}, ${esc(c.dur)}, <span class="num">${rs(c.fee)}</span></span> <button class="lnk2i" data-cdetail="${esc(c.name)}">Details</button></li>`).join("")}</ol>`}
  ${bk.length?`<p class="small" style="margin-top:10px"><b>साथ में पढ़ें:</b> ${bk.map(([b,i])=>`<button class="lnk2i" data-open="${i}">${esc(b.t)}</button>`).join(" • ")}</p>`:""}
  <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px">${ans.how==="books"?`<button class="btn btn-orange btn-sm" data-go="books">Books Store देखें</button>`:`<button class="btn btn-orange btn-sm" data-enroll="${esc(first[0].name)}">Free Counselling लें</button>`}<button class="btn btn-ghost btn-sm" data-showroad="${r.id}">पूरा Roadmap देखें</button></div>`;
  $$(".opt").forEach(b=>b.setAttribute("aria-pressed",ans[b.dataset.a]===b.dataset.v));
}
$("#finder").addEventListener("click",e=>{const b=e.target.closest(".opt");if(!b)return;ans[b.dataset.a]=b.dataset.v;renderFinder();});
renderFinder();

/* ---------- COURSES PAGE (new design) ---------- */
let curCat="all",cPage=1;const CP_PAGE=12,lvSet=new Set(),duSet=new Set();
const CP_KEY={"Full Computer Course": "fullpc", "MS Word": "word", "MS PowerPoint": "ppt", "Google Sheets": "excel", "Basic Computer Course": "basic", "Computer Fundamentals": "hardware", "Computer for Kids": "windows", "Typing Shala for Kids": "mouse", "Office Automation": "files", "Accounting with Tally Prime + GST": "fund", "Data Analytics with AI": "software", "Public Speaking": "ppt", "MS Office Complete": "word", "Advanced Excel": "excel", "Excel Dashboard & MIS": "excel", "Speed Typing (Hindi + English)": "keyboard", "Graphic Design with Canva": "graphic", "Video Editing (Mobile + PC)": "graphic", "Web Development": "web", "AI Tools for Everyone": "ai", "Prompt Writing Mastery": "ai", "AI for Teachers": "ai", "3 घंटे का AI Workshop": "ai", "AI for Business Owners": "ai", "Digital Marketing": "dm", "Social Media Management": "dm", "Python Programming": "prog", "Data Science Basics": "prog", "Machine Learning Basics": "prog"};
const CP_IMG={"fullpc": "img/83a991789034.jpg", "basic": "img/7fc742c06c06.jpg", "hardware": "img/45126cb4d932.jpg", "windows": "img/71c76fff8e41.jpg", "mouse": "img/27fa16cf7095.jpg", "files": "img/6c955eabfd61.jpg", "fund": "img/fdf801e00ea3.jpg", "software": "img/3e1146a55673.jpg", "ppt": "img/00e3f5903b1f.jpg", "word": "img/0087a1a0c29a.jpg", "excel": "img/cf5ad5a19bdc.jpg", "keyboard": "img/8e228def1881.jpg", "graphic": "img/3dedc1433202.jpg", "web": "img/269ca5d6aee4.jpg", "ai": "img/7d0429dc31fb.jpg", "dm": "img/e1fd370f5fc5.jpg", "prog": "img/73fdd7c75700.jpg"};
const wkOf=d=>{const n=parseFloat(String(d).replace(/[^0-9.]/g,""))||0;return /साल|वर्ष/.test(d)?n*52:/महीन/.test(d)?n*4.3:/हफ़्त|हफ्त/.test(d)?n:/घंट/.test(d)?n/40:n;};
const dBk=c=>{const w=wkOf(c.dur);return w<=5?"s":w<=13?"m":"l";};
const CP_DU=[["s","1 महीने तक"],["m","1 से 3 महीने"],["l","3 महीने से ज़्यादा"]],CP_LV=["Beginner","Intermediate","Advanced"];
function cpBuildFilters(){
$("#courseChips").innerHTML=[["all","All Courses"],...CATS.filter(k=>COURSES.some(c=>c.cat===k.id)||k.id==="ai").map(k=>[k.id,k.id==="ai"?"🤖 "+k.name:k.name])].map(([id,n])=>`<button class="chip" data-ccat="${id}" aria-pressed="${id==="all"}">${esc(n)} <span class="cn num">${id==="all"?COURSES.length:COURSES.filter(c=>c.cat===id).length}</span></button>`).join("");
$("#cCat").innerHTML=[["all","All Categories"],...CATS.filter(k=>COURSES.some(c=>c.cat===k.id)).map(k=>[k.id,k.name])].map(([id,n])=>`<option value="${id}">${esc(n)}</option>`).join("");
$("#cLvList").innerHTML=CP_LV.map(v=>`<label class="cp-ck"><input type="checkbox" data-clv="${v}"><span>${v}</span><i class="num">${COURSES.filter(c=>c.level===v).length}</i></label>`).join("");
$("#cDuList").innerHTML=CP_DU.map(([k,n])=>`<label class="cp-ck"><input type="checkbox" data-cdu="${k}"><span>${n}</span><i class="num">${COURSES.filter(c=>dBk(c)===k).length}</i></label>`).join("");
}
cpBuildFilters();
/* Course के साथ मिलने वाली e-books (topic-wise) — PDF "Library" टैब में, Bundle से course के साथ खुलती हैं */
const HB_CEB={
 "Full Computer Course":[["Topic 1 — Basic Computer","basic"],["Topic 2 — MS Word","word"],["Topic 3 — MS Excel","excel"],["Topic 4 — MS PowerPoint","ppt"]],
 "Basic Computer Course":[["Basic Computer","basic"]],
 "MS Office Complete":[["Topic 1 — MS Word","word"],["Topic 2 — MS Excel","excel"],["Topic 3 — MS PowerPoint","ppt"]],
 "Advanced Excel":[["MS Excel","excel"]],
 "MS Word":[["MS Word","word"]],
 "MS PowerPoint":[["MS PowerPoint","ppt"]],
 "DCA — Diploma in Computer Applications":[["DCA","dca"]],
 "ADCA — Advanced Diploma in Computer Applications":[["ADCA","adca"]],
 "MS Excel":[["MS Excel","excel"]],
 "MS Access":[["MS Access","access"]]};
const HB_CSYL={"Full Computer Course":["Topic 1 — Basic Computer: Computer के भाग, Keyboard-Mouse, Windows, File-Folder","Topic 1 — Internet, Email और Cyber Safety (+ Basic Computer e-book)","Topic 2 — MS Word: Typing, Formatting, Table, Picture","Topic 2 — Styles, Table of Contents, Mail Merge, Resume/Letter project (+ MS Word e-book)","Topic 3 — MS Excel: Cells, Formulas, Functions, Charts","Topic 3 — VLOOKUP/XLOOKUP, Pivot Table, Dashboard project (+ MS Excel e-book)","Topic 4 — MS PowerPoint: Slides, Design, Pictures, Charts","Topic 4 — Animation, Transition, Presentation देना (+ MS PowerPoint e-book)","Final Test + HITARTHI Certificate"]};
function hbEbSec(c){const L=HB_CEB[c.name];if(!L)return"";
  return `<h3>📚 ${L.length>1?"हर topic की अपनी e-book — course के साथ शामिल":"इस course की e-book — साथ में शामिल"}</h3><div class="cd-eb">${L.map(([tp,k])=>{const b=HB_EB[k];return `<div class="cd-ebi"><img src="${b.img}" alt="${esc(b.t)} — cover" loading="lazy" decoding="async"><span class="cd-ebt">${esc(tp)}</span><b>${esc(b.t)}</b><small>${esc(b.s)} • <span class="num">${b.pg}</span> पेज</small></div>`;}).join("")}</div><p class="small muted">Enroll होते ही ये e-books "मेरा खाता → मेरी Library" में खुल जाती हैं — mobile पर भी पढ़ें।</p>`;}
function courseCardCP(c){
  const k=catOf(c.cat),im=c.img||CP_IMG[CP_KEY[c.name]];
  return `<article class="cpc lift" style="--cc:linear-gradient(135deg,${k.g[0]},${k.g[1]})">
    <div class="cpc-th">${im?`<img src="${esc(im)}" alt="${esc(c.name)}" loading="lazy" decoding="async" onerror="this.remove()">`:""}<div class="cpc-gen" aria-hidden="true"><i></i><i></i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${k.ic}</svg><b>${esc(c.name.replace(/\s*\(.*?\)\s*/g," ").trim())}</b></div>${c.pop?'<span class="cpc-pop">POPULAR</span>':""}</div>
    <div class="cpc-b">
      <h3>${esc(c.name)}</h3>
      <p class="cpc-d">${esc(c.hin)}</p>
      <div class="meta cpc-m"><span class="cpc-lv cpc-${esc(c.level.toLowerCase())}">${esc(c.level)}</span><span>⏱ ${esc(c.dur)}</span><span>💻 Online Live</span><span class="cpc-cert">🎓 Certificate</span>${HB_CEB[c.name]?`<span class="cpc-eb">📘 ${HB_CEB[c.name].length} E-book</span>`:""}</div>
      <div class="cpc-f"><span class="price num">${rs(c.fee)}</span></div>
      <div class="cpc-btns"><button class="btn cpc-b1" data-cdetail="${esc(c.name)}">View Details</button>${c.cat!=="premium"?`<button class="btn cpc-b2" data-enroll="${esc(c.name)}">Enroll Now</button>`:c.fee>=50000?`<button class="btn cpc-b2" data-lead="premium" data-leadc="${esc(c.name)}">बात करें</button>`:`<button class="btn cpc-b2" data-pay="${c.fee}" data-item="${esc(c.name)}">अभी लें</button>`}</div>
    </div>
  </article>`;
}
function renderCourses(keep){
  const q=$("#courseSearch").value.trim().toLowerCase(),so=$("#cSort").value;
  let list=COURSES.filter(c=>(curCat==="all"||c.cat===curCat)&&(!q||(c.name+" "+c.hin).toLowerCase().includes(q))&&(!lvSet.size||lvSet.has(c.level))&&(!duSet.size||duSet.has(dBk(c))));
  if(so==="fa")list=list.slice().sort((a,b)=>a.fee-b.fee);else if(so==="fd")list=list.slice().sort((a,b)=>b.fee-a.fee);else if(so==="ds")list=list.slice().sort((a,b)=>wkOf(a.dur)-wkOf(b.dur));else if(so==="az")list=list.slice().sort((a,b)=>a.name.localeCompare(b.name));else list=list.slice().sort((a,b)=>(b.pop?1:0)-(a.pop?1:0));
  const pages=Math.max(1,Math.ceil(list.length/CP_PAGE));if(keep!==true)cPage=1;cPage=Math.min(cPage,pages);
  const part=list.slice((cPage-1)*CP_PAGE,cPage*CP_PAGE);
  $("#cReset").hidden=!(lvSet.size||duSet.size||so||q||curCat!=="all");
  $("#courseGrid").innerHTML=part.length?part.map(courseCardCP).join(""):(()=>{const sn=C_SOON.filter(c=>(curCat==="all"||c.cat===curCat)&&(!q||(c.name+" "+c.hin).toLowerCase().includes(q)));return `<div class="empty" style="grid-column:1/-1">${sn.length?`🔜 ये courses जल्द आ रहे हैं: <b>${sn.slice(0,4).map(c=>esc(c.name)).join(", ")}</b>${sn.length>4?" …":""} — नीचे "शुरू होने पर बताएँ" दबाकर नाम लिखवाएँ।`:'इस खोज से कोई course नहीं मिला। दूसरा शब्द लिखें या "All Courses" चुनें।'}</div>`;})();
  $("#courseCount").innerHTML=`<span class="num">${list.length}</span> Courses Found`;window.hbAi3d&&hbAi3d(curCat==="ai");
  $$("#courseChips .chip").forEach(b=>b.setAttribute("aria-pressed",b.dataset.ccat===curCat));
  $("#cCat").value=curCat;$("#cLevel").value=lvSet.size===1?[...lvSet][0]:"";$("#cDur").value=duSet.size===1?[...duSet][0]:"";
  $$("#cLvList input").forEach(i=>i.checked=lvSet.has(i.dataset.clv));$$("#cDuList input").forEach(i=>i.checked=duSet.has(i.dataset.cdu));
  $("#cPager").innerHTML=pages>1?(cPage>1?`<button type="button" data-cpage="${cPage-1}" aria-label="पिछला पेज">‹</button>`:"")+Array.from({length:pages},(_,i)=>`<button type="button" data-cpage="${i+1}" aria-current="${i+1===cPage}">${i+1}</button>`).join("")+(cPage<pages?`<button type="button" data-cpage="${cPage+1}" aria-label="अगला पेज">›</button>`:""):"";
}
$("#courseChips").addEventListener("click",e=>{const b=e.target.closest("[data-ccat]");if(!b)return;curCat=b.dataset.ccat;renderCourses();});
$("#courseSearch").addEventListener("input",()=>renderCourses());
$("#cSearchBtn").addEventListener("click",()=>renderCourses());
$("#cCat").addEventListener("change",()=>{curCat=$("#cCat").value||"all";renderCourses();});
$("#cLevel").addEventListener("change",()=>{lvSet.clear();if($("#cLevel").value)lvSet.add($("#cLevel").value);renderCourses();});
$("#cDur").addEventListener("change",()=>{duSet.clear();if($("#cDur").value)duSet.add($("#cDur").value);renderCourses();});
$("#cSort").addEventListener("change",()=>renderCourses());
$("#cLvList").addEventListener("change",e=>{const v=e.target.dataset.clv;if(!v)return;e.target.checked?lvSet.add(v):lvSet.delete(v);renderCourses();});
$("#cDuList").addEventListener("change",e=>{const v=e.target.dataset.cdu;if(!v)return;e.target.checked?duSet.add(v):duSet.delete(v);renderCourses();});
$("#cReset").addEventListener("click",()=>{curCat="all";lvSet.clear();duSet.clear();$("#courseSearch").value="";$("#cSort").value="";renderCourses();});
function hhGo(q){$("#courseSearch").value=q||"";go("courses");renderCourses();}
$("#hhSearch").addEventListener("submit",e=>{e.preventDefault();hhGo($("#hhQ").value.trim());});
$$("[data-hhq]").forEach(b=>b.addEventListener("click",()=>hhGo(b.dataset.hhq)));
function hbRenderSoon(){const w=$("#soonWrap");if(!w)return;w.hidden=!C_SOON.length;
  $("#soonGrid").innerHTML=C_SOON.map(c=>{const k=catOf(c.cat);const eb=(HB_CEB[c.name]||[])[0];return `<div class="soon-c${eb?" has-cov":""}">${eb?`<img class="soon-cov" src="${HB_EB[eb[1]].img}" alt="" loading="lazy">`:""}<span class="soon-t" style="color:${k.g[0]}">${esc(k.name)}</span><b>${esc(c.name)}</b><small>${esc(c.hin)}</small><button class="btn btn-ghost btn-sm" data-lead="upcoming" data-leadc="${esc(c.name)}">🔔 शुरू होने पर बताएँ</button></div>`;}).join("");}
hbRenderSoon();
function cpRenderHome(){const g=$("#popCourses");if(g)g.innerHTML=COURSES.filter(c=>c.pop).slice(0,8).map(courseCardCP).join("");}
cpRenderHome();
(async()=>{try{const r=await hbCall("courses",{});if(!r||!r.ok||!Array.isArray(r.courses)||!r.courses.length)return;const L=r.courses.map(hbNormCourse);
  try{localStorage.setItem("hb_courses",JSON.stringify({v:2,t:Date.now(),list:L}));}catch(e){}
  if(JSON.stringify(L)===JSON.stringify(COURSES.concat(C_SOON).map(hbNormCourse)))return;
  COURSES.length=0;L.forEach(x=>COURSES.push(x));hbSplitSoon(true);cpBuildFilters();renderCourses(true);cpRenderHome();hbRenderSoon();}catch(e){}})();
$("#cPager").addEventListener("click",e=>{const b=e.target.closest("[data-cpage]");if(!b)return;cPage=+b.dataset.cpage;renderCourses(true);const t=$("#courseCount");t&&t.scrollIntoView({behavior:"smooth",block:"start"});});
renderCourses();

/* ---------- BOOKS PAGE ---------- */
let curB="all";
$("#bookChips").innerHTML=BCATS.map(([id,n])=>`<button class="chip" data-bc="${id}" aria-pressed="${id==="all"}">${esc(n)}</button>`).join("");
function renderBooks(){
  const q=$("#bookSearch").value.trim().toLowerCase();
  const idx=BOOKS.map((b,i)=>i).filter(i=>{const b=BOOKS[i];return !b.hide&&(curB==="all"||(curB==="printed"?b.p>0:curB==="computer"?/computer skill/i.test(b.ser||""):b.bcat===curB))&&(!q||(b.t+" "+b.s+" "+b.a).toLowerCase().includes(q));});
  if(curB==="printed")idx.forEach(i=>{if(!fmtState[i])fmtState[i]="p";});
  $("#bookGrid").innerHTML=idx.length?idx.map(i=>bookCard(BOOKS[i],i)).join(""):`<div class="empty" style="grid-column:1/-1">कोई book नहीं मिली।</div>`;
  $$("#bookChips .chip").forEach(b=>b.setAttribute("aria-pressed",b.dataset.bc===curB));
}
$("#bookChips").addEventListener("click",e=>{const b=e.target.closest("[data-bc]");if(!b)return;curB=b.dataset.bc;renderBooks();});
$("#bookSearch").addEventListener("input",renderBooks);
renderBooks();
$("#bundleGrid").innerHTML=BUNDLES.map((bd,k)=>{if(!bdOk(bd))return "";const p=bundlePrice(bd);return `<div class="card bundle lift"><div class="stack">${bd.items.map(i=>book3d(BOOKS[i])).join("")}</div><div><h3>${esc(bd.n)}</h3><p class="muted small">${esc(bd.d)}</p><p class="small" style="margin-top:6px">${bd.items.map(i=>esc(BOOKS[i].t)).join(" • ")}</p><div class="p"><span class="price num">${rs(p.now)}</span><s class="num">${rs(p.full)}</s><span class="save num">${rs(p.full-p.now)} की बचत</span></div><button class="btn btn-orange btn-sm" data-addbundle="${k}">Bundle Cart में जोड़ें</button></div></div>`;}).join("");{const bs=$("#bundles");if(bs)bs.style.display=$("#bundleGrid").innerHTML.trim()?"":"none";}

/* Book modal */
function openBook(i){
  const b=BOOKS[i], f=fmtOf(BOOKS[i],i), m=$("#modal");
  m.dataset.i=i;
  m.innerHTML=`<button class="icon-btn x" data-closemodal="1" aria-label="बंद करें">✕</button>
  <div class="mgrid">
    <div class="mleft"><div class="b3wrap">${book3d(b,"lg")}</div></div>
    <div class="mright">
      <div class="eyebrow">${esc(b.ser)}</div>
      <h2 style="font-size:clamp(1.5rem,3vw,2rem)">${esc(b.t)}</h2>
      <p class="muted">${esc(b.s)}</p>
      <div class="specs"><span class="num">${b.pages} पेज</span><span>भाषा: सरल हिंदी / Hinglish</span><span>Worksheets सहित</span></div>
      <div><b>इस book से आप क्या सीखेंगे</b><ul class="ticks">${b.learn.map(l=>`<li>${esc(l)}</li>`).join("")}</ul></div>
      <div><b style="display:block;margin-bottom:6px">Format चुनें</b>${fmtGroup(b,i,f)}</div>
      <p class="small muted">${f==="e"?"PDF payment के बाद WhatsApp पर मिलेगी।":f==="p"?`Delivery ₹${DELIVERY} — ₹${FREE_AT} या अधिक के printed order पर free।`:"Printed book घर पर + E-book तुरंत WhatsApp पर।"}</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center"><span class="price num" style="font-size:1.8rem">${rs(priceOf(b,f))}</span>${bookBtn(b,i,"")}<button class="btn btn-ghost btn-sm" data-peek="${i}">📖 अंदर झाँकें</button></div>
    </div>
  </div>`;
  m.hidden=false;$("#scrim").hidden=false;
}
function closeAll(){$("#modal").hidden=true;$("#drawer").hidden=true;$("#scrim").hidden=true;}

/* 3D shelf */
(function(){
  const pick=(()=>{const D=[0,9,2,17,6,11,1,14,19,22,7,15].filter(i=>BOOKS[i]&&!BOOKS[i].hide&&BOOKS[i].shelf!==false),L=HB_SHELF();return (D.length>=8?D.concat(L.filter(i=>!D.includes(i))):L).slice(0,12);})();
  const N=pick.length, R=Math.round(78/Math.tan(Math.PI/N))+120;
  $("#ring").innerHTML=pick.map((bi,k)=>`<div class="slot" data-open="${bi}" tabindex="0" role="button" aria-label="${esc(BOOKS[bi].t)}" style="transform:rotateY(${k*360/N}deg) translateZ(${R}px)">${book3d(BOOKS[bi])}</div>`).join("");
})();
/* certificate QR pattern */
(function(){let s="",seed=7;const r=()=>{seed=(seed*9301+49297)%233280;return seed/233280;};
  const box=(x,y)=>`<rect x="${x}" y="${y}" width="7" height="7" fill="#0B1A4A"/><rect x="${x+1}" y="${y+1}" width="5" height="5" fill="#FFFDF6"/><rect x="${x+2}" y="${y+2}" width="3" height="3" fill="#0B1A4A"/>`;
  for(let y=0;y<21;y++)for(let x=0;x<21;x++){if((x<8&&y<8)||(x>12&&y<8)||(x<8&&y>12))continue;if(r()>.52)s+=`<rect x="${x}" y="${y}" width="1" height="1" fill="#0B1A4A"/>`;}
  const q=$("#cert .qr");try{const t=qrSVG(certURL("HIT-2026-00123"),54,"#0B1A4A");q.outerHTML=t.replace("<svg",'<svg class="qr"');}catch(e){q.innerHTML=box(0,0)+box(14,0)+box(0,14)+s;}})();
/* pointer tilt */
(function(){
  if(reduce)return;
  const cs=$("#certScene"),c=$("#cert");
  cs.addEventListener("pointermove",e=>{const r=cs.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`rotateX(${-y*16}deg) rotateY(${x*20}deg)`;});
  cs.addEventListener("pointerleave",()=>c.style.transform="");
  let last=null;
  document.addEventListener("pointermove",e=>{
    if(e.pointerType!=="mouse")return;
    const el=e.target.closest(".course,.cat,.plan:not(.feat),.bundle");
    if(last&&last!==el){last.style.transform="";last=null;}
    if(!el)return;last=el;
    const r=el.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    el.style.transform=`perspective(900px) rotateX(${-y*6}deg) rotateY(${x*8}deg) translateY(-4px)`;el.style.setProperty("--gx",((x+.5)*100)+"%");el.style.setProperty("--gy",((y+.5)*100)+"%");
  });
})();
/* ---------- FINANCE ---------- */
const TIPS=["पैसा साधन है, लक्ष्य नहीं। पहले सीखें, फिर कमाएँ, फिर बढ़ाएँ।","हर महीने की कमाई और हर खर्च लिखें — जो नापा जाता है, वही सुधरता है।","खरीदने से पहले 24 घंटे रुकें। ज़रूरत होगी तो कल भी होगी।","जो हर महीने पैसा लाए वह asset, जो पैसा ले जाए वह liability।","बचत पैसे को बचाती है, निवेश पैसे को बढ़ाता है — दोनों ज़रूरी हैं।","Rule of 72: 72 ÷ return% = पैसा दोगुना होने के साल। 12% पर लगभग 6 साल।","6% महँगाई पर आज ₹100 की चीज़ 12 साल बाद लगभग ₹200 की होगी।","कम से कम 6 महीने का खर्च अलग खाते में रखें — शेयर बाज़ार में नहीं।","Insurance निवेश नहीं, सुरक्षा है। पहले term और health cover लें।","सारी EMI कमाई के 30–40% से ज़्यादा न हों। Credit card का बकाया सबसे महँगा कर्ज़ है।","समय पर भुगतान करें और card limit का 30% से कम प्रयोग करें।","'पैसा डबल', OTP माँगना और 'जल्दी करो' का दबाव — तीनों scam के संकेत हैं।"];
$("#finTopics").innerHTML=FIN.map((t,i)=>`<button class="flip" aria-label="${esc(t[0])} — पलटकर नियम देखें"><div class="flip-in"><div class="face fr"><div class="n num">${i+1}</div><h3>${esc(t[0])}</h3><p>${esc(t[1])}</p><small>पलटें ↻</small></div><div class="face bk"><b>काम का नियम</b><p>${esc(TIPS[i])}</p></div></div></button>`).join("");
$("#finTopics").addEventListener("click",e=>{const f=e.target.closest(".flip");if(f)f.classList.toggle("on");});

/* Money IQ */
const IQ=[
 ["Rule of 72 के अनुसार 8% सालाना return पर पैसा लगभग कितने साल में दोगुना होगा?",["5 साल","9 साल","12 साल","18 साल"],1,"72 ÷ 8 = 9। यानी 8% पर लगभग 9 साल में पैसा दोगुना होता है।"],
 ["Emergency fund कितना होना चाहिए?",["1 हफ़्ते का खर्च","1 महीने का खर्च","कम से कम 6 महीने का खर्च","ज़रूरत नहीं, loan ले लेंगे"],2,"नौकरी जाने या बीमारी जैसी स्थिति में 6 महीने का खर्च अलग रखा हो, तो कर्ज़ नहीं लेना पड़ता।"],
 ["कोई कहे 'हर महीने 20% पक्का return मिलेगा' — आप क्या समझेंगे?",["बहुत अच्छा मौका है","यह scam का संकेत है, सावधान रहें","सारी बचत लगा दें","दोस्तों को भी जोड़ें"],1,"कोई भी सही निवेश पक्के ऊँचे return का वादा नहीं करता। ऐसे वादे ज़्यादातर scam होते हैं।"],
 ["इनमें से asset कौन-सा है?",["EMI पर लिया नया phone","Credit card का बकाया","किराये पर दी हुई दुकान","रोज़ के लिए महँगी bike"],2,"किराये पर दी दुकान हर महीने पैसा लाती है, इसलिए वह asset है। बाकी सब पैसा ले जाते हैं।"],
 ["50-30-20 नियम में 20% किसके लिए है?",["घूमने के लिए","बचत और निवेश के लिए","किराये के लिए","shopping के लिए"],1,"50% ज़रूरतें, 30% इच्छाएँ और 20% बचत/निवेश। बचत पहले अलग करें।"]
];
let iqI=0,iqRes=[];
function renderIQ(){
  $("#iqScore").innerHTML=IQ.map((_,k)=>`<i class="${k<iqRes.length?(iqRes[k]?"ok":"no"):k===iqI?"cur":""}"></i>`).join("");
  if(iqI>=IQ.length){
    const sc=iqRes.filter(Boolean).length;
    const msg=sc===5?"शानदार! आपकी पैसे की समझ बहुत अच्छी है। अब निवेश की गहराई सीखें।":sc>=3?"अच्छा है! कुछ बातें और सीखकर आप बेहतर निर्णय ले पाएँगे।":"शुरुआत अच्छी है। Financial Literacy Basics course आपके लिए सबसे सही रहेगा।";
    $("#iqCard").innerHTML=`<div class="eyebrow" style="color:var(--green)">आपका परिणाम</div><h3 style="font-size:2.2rem" class="num">${sc} / 5</h3><p>${msg}</p><div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:16px"><button class="btn btn-primary btn-sm" data-enroll="Financial Literacy Basics">Free Counselling लें</button><button class="btn btn-ghost btn-sm" id="iqAgain">फिर से खेलें</button></div>`;
    return;
  }
  const q=IQ[iqI];
  $("#iqCard").innerHTML=`<div class="eyebrow" style="color:var(--green)">प्रश्न <span class="num">${iqI+1}</span> / 5</div><h3>${esc(q[0])}</h3><div class="iq-opts">${q[1].map((o,k)=>`<button data-iq="${k}">${esc(o)}</button>`).join("")}</div><div id="iqEx"></div>`;
}
$("#iqCard").addEventListener("click",e=>{
  if(e.target.id==="iqAgain"){iqI=0;iqRes=[];renderIQ();return;}
  if(e.target.id==="iqNext"){iqI++;renderIQ();return;}
  const b=e.target.closest("[data-iq]");if(!b||b.disabled)return;
  const q=IQ[iqI],k=+b.dataset.iq,ok=k===q[2];
  $$("#iqCard [data-iq]").forEach(x=>{x.disabled=true;if(+x.dataset.iq===q[2])x.classList.add("right");});
  if(!ok)b.classList.add("wrong");
  iqRes.push(ok);
  $("#iqEx").innerHTML=`<div class="iq-ex"><b style="color:${ok?"var(--green)":"#DC2626"}">${ok?"सही उत्तर!":"यह सही नहीं है।"}</b> ${esc(q[3])}</div><button class="btn btn-primary btn-sm" id="iqNext" style="margin-top:12px">${iqI<4?"अगला प्रश्न →":"परिणाम देखें"}</button>`;
  $("#iqScore").innerHTML=IQ.map((_,j)=>`<i class="${j<iqRes.length?(iqRes[j]?"ok":"no"):""}"></i>`).join("");
});
renderIQ();
fillTrack("mtTrack",TIPS);
$("#finCourses").innerHTML=COURSES.filter(c=>c.cat==="finance").slice(0,6).map(courseCard).join("");$("#finCourses").hidden=!$("#finCourses").children.length;
$("#finBooks").innerHTML=BOOKS.map((b,i)=>[b,i]).filter(([b])=>!b.hide&&b.bcat==="finance").map(([b,i])=>bookCard(b,i)).join("");

/* ---------- FEES ---------- */
$("#batchBody").innerHTML=BATCHES.filter(b=>COURSES.some(c=>c.name.indexOf(b[0])===0||b[0].indexOf(c.name)===0)).map(b=>`<tr><td><b>${esc(b[0])}</b></td><td class="num">${esc(b[1])}</td><td>${esc(b[2])}</td><td>${esc(b[3])}</td><td><span class="pill ${b[4]}">${b[4]==="live"?"Live":"Recorded"}</span></td></tr>`).join("");
$("#feeBody").innerHTML=COURSES.map(c=>`<tr><td><b>${esc(c.name)}</b></td><td>${esc(catOf(c.cat).name)}</td><td>${esc(c.dur)}</td><td>${esc(c.level)}</td><td class="num" style="text-align:right;font-weight:800">${rs(c.fee)}</td></tr>`).join("");

/* ---------- DEMO FORMS ---------- */
const courseOpts=["HITARTHI MASTERY BOOK MEMBERSHIP","HITARTHI GROWTH BOOK MEMBERSHIP"].map(n=>`<option>${n}</option>`).join("")+COURSES.map(c=>`<option>${esc(c.name)}</option>`).join("");
$$(".demoForm").forEach((f,n)=>{
  f.innerHTML=`<h3 style="font-size:1.25rem;margin-bottom:4px">Free Counselling</h3><p class="small" style="color:#48507A;margin-bottom:12px">45 मिनट की live class • ₹29 UPI से • admission लेने पर ₹29 fee में जुड़ जाएगा</p>
    <div class="field"><label for="dn${n}">नाम</label><input type="text" id="dn${n}" required placeholder="आपका नाम"></div>
    <div class="field"><label for="dp${n}">WhatsApp नंबर</label><input type="tel" id="dp${n}" required inputmode="numeric" maxlength="10" placeholder="10 अंकों का नंबर"></div>
    <div class="field"><label for="dw${n}">आप कौन हैं?</label><select id="dw${n}"><option>छात्र</option><option>अभिभावक</option><option>नौकरी वाले</option><option>व्यवसायी</option><option>School / College</option></select></div>
    <div class="field"><label for="dc${n}">किस course में रुचि है?</label><select id="dc${n}" class="courseSel">${courseOpts}</select></div>
    <button class="btn btn-orange btn-block" type="submit">Free Counselling लें</button>
    <p class="err small" style="color:#C2410C;margin-top:8px" hidden></p>
    <div class="ok" hidden></div>`;
  f.addEventListener("submit",e=>{
    e.preventDefault();
    const nm=f.querySelector(`#dn${n}`).value.trim(), ph=f.querySelector(`#dp${n}`).value.replace(/\D/g,"");
    const err=f.querySelector(".err"), ok=f.querySelector(".ok");
    if(!nm){err.textContent="कृपया अपना नाम लिखें।";err.hidden=false;return;}
    if(ph.length!==10){err.textContent="WhatsApp नंबर 10 अंकों का होना चाहिए।";err.hidden=false;return;}
    err.hidden=true;
    const who=f.querySelector(`#dw${n}`).value, cr=f.querySelector(`#dc${n}`).value;track("demo_started",{course:cr});
    const msg=`Namaste HITARTHI, mera naam ${nm} hai (${who}). Mujhe "${cr}" ki Rs 29 wali Demo Class book karni hai. Mera number: ${ph}`;
    ok.innerHTML=`<b>धन्यवाद, ${esc(nm)}!</b><br><span class="small">आपकी demo request तैयार है। ₹29 UPI से अभी pay करें — confirm करते ही हमारी team WhatsApp पर class का समय तय करेगी।</span><div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap"><button type="button" class="btn btn-orange btn-sm" data-pay="29" data-item="${esc("Demo Class: "+cr)}" data-pname="${esc(nm)}" data-pextra="${esc("Phone: "+ph+" | "+who)}">₹29 UPI से Pay करें</button><a class="btn btn-wa btn-sm" href="https://wa.me/${WA}?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener">पहले WhatsApp पर पूछें</a></div>`;
    ok.hidden=false;
  });
});

/* ---------- CALCULATORS ---------- */
$("#calcTabs").addEventListener("click",e=>{const b=e.target.closest("[data-calc]");if(!b)return;$$("#calcTabs button").forEach(x=>x.setAttribute("aria-selected",x===b));$$("[data-calcpane]").forEach(p=>p.hidden=p.dataset.calcpane!==b.dataset.calc);});
const short=n=>n>=1e12?"₹"+(n/1e12).toLocaleString("en-IN",{maximumFractionDigits:2})+" लाख Cr":n>=1e7?"₹"+(n/1e7).toLocaleString("en-IN",{maximumFractionDigits:2})+" Cr":n>=1e5?"₹"+(n/1e5).toFixed(1)+" L":rs(n);
const ZONES=[[8,"#17A45A","सुरक्षित साधनों (FD, PPF, RD) का सामान्य दायरा। कम जोखिम, कम बढ़ोतरी।"],[15,"#0057D9","लंबे समय में equity / mutual fund का ऐतिहासिक दायरा। यह निश्चित नहीं है, बाज़ार ऊपर-नीचे होता है।"],[30,"#E07800","बहुत कम लोग या fund लंबे समय तक इतना return पाते हैं। इसमें बहुत ज़्यादा जोखिम है।"],[100,"#DC2626","यह सिर्फ़ गणित समझाने के लिए है। कोई हर साल 30% से ज़्यादा पक्के return का वादा करे, तो यह scam का संकेत है।"]];
function meterPos(R){const edges=[1,8,15,30,100];for(let k=0;k<4;k++){if(R<=edges[k+1])return (k+(R-edges[k])/(edges[k+1]-edges[k]))*25;}return 100;}
function sip(){
  const P=+$("#sipAmt").value, R=+$("#sipRate").value, Y=+$("#sipYrs").value, r=R/1200;
  $("#sipAmtO").textContent=rs(P); $("#sipRateO").textContent=R+"%"; $("#sipYrsO").textContent=Y+" साल";
  const fv=m=>P*((Math.pow(1+r,m)-1)/r)*(1+r);
  const tot=fv(Y*12), inv=P*Y*12;
  $("#sipInv").textContent=short(inv); $("#sipGain").textContent=short(tot-inv); $("#sipTot").textContent=short(tot);
  const z=ZONES.find(q=>R<=q[0]); $("#sipMk").style.left=meterPos(R)+"%"; $("#sipMk").style.background=z[1];
  $("#sipReal").innerHTML=`<b style="color:${z[1]}">${R}%:</b> ${z[2]}`; $("#sipReal").style.borderColor=z[1];
  const fd=P*((Math.pow(1+7/1200,Y*12)-1)/(7/1200))*(1+7/1200);
  $("#sipCmp").innerHTML=`तुलना: यही ${rs(P)} हर महीने FD जैसे 7% पर ${Y} साल में ≈ <b>${short(fd)}</b> बनते। ${R}% सालाना पर पैसा लगभग <b>${(Math.log(2)/Math.log(1+R/100)).toFixed(1)} साल</b> में दोगुना होता है।`;
  $$("#sipPresets button").forEach(b=>b.setAttribute("aria-pressed",+b.dataset.r===R));
  const W=640,H=230,pl=64,pr=12,pt=14,pb=30,iw=W-pl-pr,ih=H-pt-pb;
  const nice=v=>{const p=Math.pow(10,Math.floor(Math.log10(v)));const m=v/p;return (m<=1?1:m<=2?2:m<=5?5:10)*p;};
  const top=nice(tot), bw=iw/Y;
  let s=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="साल दर साल SIP की बढ़ोतरी">`;
  for(let g=0;g<=4;g++){const v=top*g/4,y=pt+ih-ih*g/4;s+=`<line x1="${pl}" x2="${W-pr}" y1="${y}" y2="${y}" stroke="var(--line)"/><text x="${pl-8}" y="${y+4}" text-anchor="end" font-size="11" fill="var(--ink-3)">${short(v)}</text>`;}
  const step=Y>20?5:Y>10?2:1;
  for(let yr=1;yr<=Y;yr++){
    const t=fv(yr*12), iv=P*yr*12, x=pl+(yr-1)*bw+bw*.15, w=bw*.7, hT=ih*t/top, hI=ih*iv/top;
    s+=`<rect x="${x}" y="${pt+ih-hT}" width="${w}" height="${Math.max(0,hT-hI)}" fill="var(--green)" rx="2"/><rect x="${x}" y="${pt+ih-hI}" width="${w}" height="${hI}" fill="var(--royal)"/>`;
    if(yr%step===0||yr===1)s+=`<text x="${x+w/2}" y="${H-10}" text-anchor="middle" font-size="11" fill="var(--ink-3)">${yr}</text>`;
  }
  s+=`<text x="${W-pr}" y="${H}" text-anchor="end" font-size="10" fill="var(--ink-3)">साल</text></svg>`;
  $("#sipChart").innerHTML=s;
}
function emi(){
  const P=+$("#emiP").value, R=+$("#emiR").value, N=+$("#emiN").value, r=R/1200;
  $("#emiPO").textContent=rs(P); $("#emiRO").textContent=R+"%"; $("#emiNO").textContent=N+" महीने";
  const e=P*r*Math.pow(1+r,N)/(Math.pow(1+r,N)-1);
  $("#emiE").textContent=rs(e); $("#emiI").textContent=rs(e*N-P); $("#emiT").textContent=rs(e*N);
  $("#emiNote").innerHTML=`आप ${rs(P)} के loan पर <b>${rs(e*N-P)}</b> केवल ब्याज में देंगे। नियम: सारी EMI मिलाकर कमाई के 30–40% से ज़्यादा न हों।`;
}
function budget(){
  const I=Math.max(0,+$("#bInc").value||0);
  $("#bNeed").textContent=rs(I*.5); $("#bWant").textContent=rs(I*.3); $("#bSave").textContent=rs(I*.2);
  $("#bBar").innerHTML=`<rect x="0" y="4" width="300" height="32" fill="var(--royal)" rx="6"/><rect x="302" y="4" width="178" height="32" fill="var(--orange)"/><rect x="482" y="4" width="118" height="32" fill="var(--green)" rx="6"/><text x="150" y="25" text-anchor="middle" fill="#fff" font-size="13" font-weight="700">ज़रूरतें 50%</text><text x="391" y="25" text-anchor="middle" fill="#1B1F3B" font-size="13" font-weight="700">इच्छाएँ 30%</text><text x="541" y="25" text-anchor="middle" fill="#fff" font-size="13" font-weight="700">बचत 20%</text>`;
}
function infl(){
  const c=Math.max(0,+$("#iCost").value||0), r=+$("#iRate").value, y=+$("#iYrs").value;
  $("#iRateO").textContent=r+"%"; $("#iYrsO").textContent=y+" साल";
  const f=c*Math.pow(1+r/100,y);
  $("#iNow").textContent=short(c); $("#iFut").textContent=short(f); $("#iLoss").textContent=f?Math.round((1-c/f)*100)+"%":"0%";
}
["sipAmt","sipRate","sipYrs"].forEach(id=>$("#"+id).addEventListener("input",sip));
$("#sipPresets").addEventListener("click",e=>{const b=e.target.closest("[data-r]");if(!b)return;$("#sipRate").value=b.dataset.r;sip();});
["emiP","emiR","emiN"].forEach(id=>$("#"+id).addEventListener("input",emi));
$("#bInc").addEventListener("input",budget);
["iCost","iRate","iYrs"].forEach(id=>$("#"+id).addEventListener("input",infl));
sip();emi();budget();infl();

/* ---------- CART ---------- */
let cart=[]; // {t:"b",i,f,q} | {t:"x",i,q}
try{const s=localStorage.getItem("hitarthi_cart_v2");if(s)cart=JSON.parse(s)||[];}catch(e){}
const saveCart=()=>{try{localStorage.setItem("hitarthi_cart_v2",JSON.stringify(cart));}catch(e){}};
function toast(t){const el=$("#toast");el.textContent=t;el.hidden=false;clearTimeout(toast._t);toast._t=setTimeout(()=>el.hidden=true,2200);}
function cartCount(){const n=cart.reduce((a,c)=>a+c.q,0);const b=$("#cartCount");b.textContent=n;b.hidden=!n;}
const linePrice=c=>c.t==="h"?(HPROD[c.i]||{mrp:0}).mrp:c.t==="x"?bundlePrice(BUNDLES[c.i]).now:priceOf(BOOKS[c.i],c.f);
/* Printed book / सामान (Physical) और e-book / course (Digital) का order अलग-अलग */
function cartIsPhys(c){return c.t==="h"||(c.t==="x"&&typeof BUNDLES!=="undefined"&&BUNDLES[c.i]&&!!BUNDLES[c.i].printed)||(c.t==="b"&&c.f!=="e");}
function cartMixBlocked(phys){if(!cart.length)return false;const has=cart.some(c=>cartIsPhys(c)===phys);if(has)return false;
  toast(phys?"📦 Printed books / सामान का order अलग से होता है — पहले cart की e-books का payment करें, फिर printed books जोड़ें":"📚 E-book / course का order अलग से होता है — पहले cart की printed books का payment करें, फिर e-book जोड़ें");
  if(typeof openCart==="function")setTimeout(openCart,400);return true;}
function addItem(it,label){if(cartMixBlocked(cartIsPhys(it)))return;track("add_to_cart",{item:label});const ex=cart.find(c=>c.t===it.t&&c.i===it.i&&c.f===it.f);if(ex)ex.q++;else cart.push({...it,q:1});saveCart();cartCount();toast("Cart में जोड़ा गया: "+label);}
function totals(){
  let sub=0,printed=0;
  cart.forEach(c=>{const p=linePrice(c)*c.q;sub+=p;if(c.t==="h"||(c.t==="b"&&c.f!=="e")||(c.t==="x"&&BUNDLES[c.i].printed))printed+=p;});
  const del=printed>0&&printed<FREE_AT?DELIVERY:0;
  return {sub,printed,del,total:sub+del};
}
function renderCart(){
  const body=$("#cartBody"), foot=$("#cartFoot");
  if(!cart.length){body.innerHTML=`<div class="empty">Cart खाली है।<br><button class="btn btn-primary btn-sm" style="margin-top:12px" data-go="books" data-close="1">Books देखें</button></div>`;foot.innerHTML="";return;}
  cart=cart.filter(c=>c.t!=="h"||HPROD[c.i]);
  body.innerHTML=cart.map((c,k)=>{
    if(c.t==="h"){const h=HPROD[c.i];return `<div class="line"><div class="mini img" style="background-image:url('${HIMG[h.k].f}')"></div><div><b>${esc(h.full)}</b><small>${esc(h.size)} • <span class="num">${rs(h.mrp)}</span></small></div><div class="qty"><button data-q="${k}" data-d="-1" aria-label="एक कम करें">−</button><span class="num">${c.q}</span><button data-q="${k}" data-d="1" aria-label="एक और जोड़ें">+</button></div></div>`;}
    const isB=c.t==="b", b=isB?BOOKS[c.i]:BOOKS[BUNDLES[c.i].items[0]];
    const name=isB?b.t:BUNDLES[c.i].n, sub=isB?fmtName(c.f):"Bundle • "+BUNDLES[c.i].items.length+(BUNDLES[c.i].printed?" Printed books":" E-books");
    return `<div class="line"><div class="mini" style="background:linear-gradient(155deg,${b.col[0]},${b.col[1]})"></div><div><b>${esc(name)}</b><small>${esc(sub)} • <span class="num">${rs(linePrice(c))}</span></small></div><div class="qty"><button data-q="${k}" data-d="-1" aria-label="एक कम करें">−</button><span class="num">${c.q}</span><button data-q="${k}" data-d="1" aria-label="एक और जोड़ें">+</button></div></div>`;}).join("");
  const T=totals();
  const need=FREE_AT-T.printed;
  foot.innerHTML=`<div class="sumrow"><span>सामान</span><span class="num">${rs(T.sub)}</span></div>
    ${T.printed>0?`<div class="sumrow"><span>Delivery</span><span class="num">${T.del?rs(T.del):'<b style="color:var(--green)">Free</b>'}</span></div>
      <div class="prog"><i style="width:${Math.min(100,T.printed/FREE_AT*100)}%"></i></div>
      <p class="small muted">${need>0?`Printed books / Health products में <b class="num">${rs(need)}</b> और जोड़ें — delivery free हो जाएगी।`:"बधाई! आपकी delivery free है।"}</p>`:""}
    <div class="tot"><span>कुल</span><span class="num">${rs(T.total)}</span></div>
    <div class="field"><label for="coName">नाम</label><input type="text" id="coName" placeholder="आपका नाम"></div>
    ${T.printed>0?`<div class="field"><label for="coAddr">Delivery पता + Pin code</label><textarea id="coAddr" rows="2" placeholder="पूरा पता"></textarea></div>`:""}
    <button class="btn btn-orange btn-block" id="cartPay">अभी Pay करें — ${rs(T.total)}</button>
    <button class="btn btn-wa btn-block" id="checkout" style="margin-top:8px">बिना payment WhatsApp पर Order भेजें</button>
    <p class="muted small" style="margin-top:8px">Payment confirm करते समय order की पूरी list अपने-आप WhatsApp संदेश में जुड़ जाएगी। E-book payment मिलान के बाद WhatsApp पर मिलेगी।</p>
    <div id="coOut"></div>`;
}
function openCart(){renderCart();$("#modal").hidden=true;$("#drawer").hidden=false;$("#scrim").hidden=false;}
$("#cartBtn").addEventListener("click",openCart);
$("#closeCart").addEventListener("click",closeAll);
$("#scrim").addEventListener("click",closeAll);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeAll();if((e.key==="Enter"||e.key===" ")&&e.target.matches("[data-open]")){e.preventDefault();openBook(+e.target.dataset.open);}});
$("#drawer").addEventListener("click",e=>{
  const q=e.target.closest("[data-q]");
  if(q){const k=+q.dataset.q;cart[k].q+=+q.dataset.d;if(cart[k].q<=0)cart.splice(k,1);saveCart();cartCount();renderCart();return;}
  if(e.target.id==="cartPay"){
    const nm=(($("#coName")||{}).value||"").trim(), ad=(($("#coAddr")||{}).value||"").trim(), T=totals();
    if(!nm){toast("कृपया अपना नाम लिखें");$("#coName").focus();return;}
    if($("#coAddr")&&!ad){toast("कृपया delivery पता लिखें");$("#coAddr").focus();return;}
    const lines=cart.map(c=>c.t==="h"?`- ${HPROD[c.i].full} (${HPROD[c.i].size}) x${c.q} = Rs ${linePrice(c)*c.q}`:c.t==="x"?`- ${BUNDLES[c.i].n} (Bundle) x${c.q} = Rs ${linePrice(c)*c.q}`:`- ${BOOKS[c.i].t} (${c.f==="e"?"E-book":c.f==="p"?"Printed":"Combo"}) x${c.q} = Rs ${linePrice(c)*c.q}`);
    const hasH=cart.some(c=>c.t==="h"),oneH=cart.length===1&&hasH;
    const plines=cart.map(c=>{const amt=linePrice(c)*c.q;if(c.t==="h")return {item:HPROD[c.i].full,amount:amt,cat:"Physical"};if(c.t==="x")return {item:BUNDLES[c.i].n,amount:amt,cat:BUNDLES[c.i].printed?"Physical":"Digital"};return {item:BOOKS[c.i].t+(c.f==="e"?" (E-book)":c.f==="p"?" (Printed)":" (Combo)"),amount:amt,cat:c.f==="e"?"Digital":"Physical"};});
    openPay({addr:ad,lines:plines,amt:T.total,item:oneH?HPROD[cart[0].i].full+" x"+cart[0].q:(hasH?"HITARTHI Order (":"Books Order (")+cart.reduce((a,c)=>a+c.q,0)+" items)",name:nm,extra:lines.join("\n")+`\nSaman: Rs ${T.sub} | Delivery: Rs ${T.del}`+(ad?"\nPata: "+ad:"")});
    return;
  }
  if(e.target.id==="checkout"){
    const nm=($("#coName")||{}).value||"", ad=($("#coAddr")||{}).value||"";
    const T=totals();
    const lines=cart.map(c=>c.t==="h"?`- ${HPROD[c.i].full} (${HPROD[c.i].size}) x${c.q} = Rs ${linePrice(c)*c.q}`:c.t==="x"?`- ${BUNDLES[c.i].n} (Bundle) x${c.q} = Rs ${linePrice(c)*c.q}`:`- ${BOOKS[c.i].t} (${c.f==="e"?"E-book":c.f==="p"?"Printed":"Combo"}) x${c.q} = Rs ${linePrice(c)*c.q}`);
    const msg=`Namaste HITARTHI, mujhe ye order karna hai:\n${lines.join("\n")}\nSaman: Rs ${T.sub}\nDelivery: Rs ${T.del}\nKul: Rs ${T.total}\nNaam: ${nm}${ad?"\nPata: "+ad:""}`;
    $("#coOut").innerHTML=`<div class="ok small">Order का संदेश तैयार है। WhatsApp खुलने पर "Send" दबाएँ।<div style="margin-top:8px"><a class="btn btn-wa btn-sm" href="https://wa.me/${WA}?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener">WhatsApp खोलें</a></div></div>`;
  }
});
cartCount();

/* ---------- GLOBAL CLICKS ---------- */
function toDemo(course){go("contact");if(course)$$(".courseSel").forEach(s=>s.value=course);setTimeout(()=>{const el=$('[data-page="contact"] .demoForm');el&&el.scrollIntoView({block:"center"});},60);}
document.addEventListener("click",e=>{
  const t=e.target;
  if(t.closest("[data-closemodal]")){closeAll();return;}
  const fb=t.closest("[data-fmt]");
  if(fb){const i=+fb.dataset.bi;fmtState[i]=fb.dataset.fmt;refreshBook(i);return;}
  const ad=t.closest("[data-add]");
  const bn=t.closest("[data-buy]");
  if(bn){const i=+bn.dataset.buy,b=BOOKS[i],f=fmtOf(b,i);closeAll();
    if(f==="e"){const it=b.t+" (E-book)",amt=priceOf(b,"e");track("buy_now",{item:it,value:amt});openPay({amt,item:it,lines:[{item:it,amount:amt,cat:"Digital"}]});}
    else{addItem({t:"b",i,f},b.t);openCart();}
    return;}
  if(ad){const i=+ad.dataset.add;addItem({t:"b",i,f:fmtOf(BOOKS[i],i)},BOOKS[i].t);return;}
  const bd=t.closest("[data-addbundle]");
  if(bd){const k=+bd.dataset.addbundle;addItem({t:"x",i:k},BUNDLES[k].n);return;}
  const op=t.closest("[data-open]");
  if(op){openBook(+op.dataset.open);return;}
  const en=t.closest("[data-enroll]");
  if(en){closeAll();const c=cByName(en.dataset.enroll);if(c&&c.fee>0)openPay({amt:c.fee,item:c.name});else openLead({source:"Enroll",interest:en.dataset.enroll});return;}
  const sr=t.closest("[data-showroad]");
  if(sr){curRoad=sr.dataset.showroad;renderRoad();$("#rtabs").scrollIntoView({block:"center"});return;}
  const sc=t.closest("[data-scroll]");
  if(sc){$("#"+sc.dataset.scroll).scrollIntoView({block:"start"});return;}
  const cp=t.closest("[data-copy]");
  if(cp){const v=cp.dataset.copy;try{navigator.clipboard.writeText(v).then(()=>toast("Copy हो गया: "+v),()=>{selectNear(cp);toast("Text चुन लिया गया — अब Copy करें");});}catch(err){selectNear(cp);}return;}
  const g=t.closest("[data-go]");
  if(g){
    if(g.dataset.cat){curCat=g.dataset.cat;$("#courseSearch").value="";renderCourses();}
    if(g.dataset.bcat){curB=g.dataset.bcat;$("#bookSearch").value="";renderBooks();}
    if(g.dataset.close)closeAll();
    if(g.dataset.demo){openLead({source:"Free Counselling"});return;}
    go(g.dataset.go);
    if(g.dataset.scrollto)setTimeout(()=>{const el=$("#"+g.dataset.scrollto);el&&el.scrollIntoView({block:"start"});},60);
  }
});
function selectNear(btn){const b=btn.parentElement.querySelector("b");if(!b)return;const r=document.createRange();r.selectNodeContents(b);const s=getSelection();s.removeAllRanges();s.addRange(r);}

/* ---------- PPT LIBRARY ---------- */
const PCAT={team:"Team Training",parents:"Parents और Students",course:"Course Presentations"};
const DECKS=[{"id": "selling-future", "t": "Sale नहीं, Future Sell करना सीखो!", "sub": "HITARTHI Team Partner Sales Training", "cat": "team", "slides": ["img/add2bd025070.webp", "img/0ffe5e133fae.webp", "img/7c42146cd307.webp", "img/759811d79f2c.webp", "img/65f75c5d90b1.webp", "img/27bc5de2c7af.webp", "img/a99db3cf9751.webp", "img/83f8700e8a0a.webp", "img/9096e27a27de.webp", "img/21703b7dbba2.webp", "img/9affaeb5d7eb.webp", "img/de6f04af52ee.webp", "img/1af0cbc25d16.webp", "img/857a3240b10a.webp", "img/89367f56c7a0.webp"], "thumbs": ["img/5abf09cf6857.webp", "img/e3709c4d283b.webp", "img/626f97160987.webp", "img/fef9c5c5fbb0.webp", "img/c28bf120cd5c.webp", "img/36d0edebf8b6.webp", "img/c1d0f710069e.webp", "img/fba216a8e6c1.webp", "img/d1a5dc9b01b9.webp", "img/24e77e2199d8.webp", "img/e5f5ab87094e.webp", "img/fc99f0cae53c.webp", "img/7054f9bbb9dd.webp", "img/52e3fe7be3f9.webp", "img/2747ec85c183.webp"], "notes": ["शुरुआत एक सवाल से करें: \"आप Product बेच रहे हैं या किसी विद्यार्थी का Future बदलने का अवसर दे रहे हैं?\" 10 सेकंड रुककर सबको सोचने दें। फिर बताएँ कि आज हम सीखेंगे कि भरोसे के साथ सही course कैसे समझाएँ।", "बाईं तरफ़ वाला 'Product Seller' सिर्फ़ बोलता है और जल्दी close करने का दबाव डालता है। दाईं तरफ़ वाला 'Career Solution Consultant' पहले सुनता है और ज़रूरत समझता है। नीचे की लाइन ज़ोर से पढ़वाएँ: Problem → Need → Solution → Value → Trust → Decision।", "HITARTHI के 4 हिस्से समझाएँ: Technology & AI, Practical Skills, Communication, Financial Literacy। Team से पूछें कि उनके इलाक़े के students को सबसे ज़्यादा किसकी ज़रूरत है।", "मुख्य बात: हम Degree का विरोध नहीं करते, Degree के साथ Skill जोड़ते हैं। ध्यान दें — ये प्रतिशत (0%, 100%) समझाने के लिए उदाहरण हैं, कोई survey या data नहीं। Parents के सामने इन्हें तथ्य की तरह न बताएँ।", "Drill का उदाहरण: लोग drill नहीं, दीवार में छेद खरीदते हैं — वैसे ही parents course नहीं, बच्चे का confidence और बेहतर future चाहते हैं। लाल चेतावनी ज़रूर पढ़ें: डर दिखाते समय झूठ, बढ़ा-चढ़ाकर बात या गलत guarantee कभी नहीं।", "Need Discovery के 5 कदम: Ask → Listen → Connect → Understand → Solve। एक team partner को parent बनाकर 2 मिनट का role-play कराएँ। (इस slide में 'UNDERSTAND' दो बार छपा है — बोलते समय एक ही बार गिनें।)", "Feature → Benefit → Outcome: 'हम Excel सिखाते हैं' (feature) → 'Data संभालना आता है' (benefit) → 'Office और business में काम की उपयोगिता बढ़ती है' (outcome)। बोलते समय 'नौकरी पक्की' जैसा वादा न करें — HITARTHI job guarantee नहीं देता।", "Demo के 5 कदम: Tell → Show → Experience → Explain Value → Close। सबसे ज़रूरी 'Experience' है — mouse और keyboard customer के हाथ में दें। Free Counselling इसी तरह कराएँ।", "Objection आने पर 5 कदम: सुनें → सहमति जताएँ → स्पष्ट करें → जवाब दें → Value से जोड़ें। चारों आम objections पर 1-1 team partner से जवाब बुलवाएँ।", "'Course महंगा है' सुनकर तुरंत discount न दें। पूछें: 'Price ज़्यादा लग रहा है या अभी investment मुश्किल है?' ज़रूरत हो तो किस्त (instalment) का विकल्प बताएँ।", "YouTube की बुराई न करें। बताएँ कि HITARTHI में सही क्रम, मार्गदर्शन, ज़िम्मेदारी और progress tracking मिलती है — जो अकेले YouTube से मुश्किल है।", "3 सही तरीके से close करें: Choice Close, Summary Close, Future-Oriented Close। नीचे की चेतावनी दोहराएँ: दबाव, डर, guilt या 'आज ही आख़िरी seat' जैसी झूठी urgency सख़्त मना है।", "10 दिन का follow-up: Day 1 धन्यवाद, Day 2 जानकारी, Day 4 demo या फ़ायदा, Day 7 सवाल पूछें, Day 10 सम्मान के साथ आख़िरी follow-up। इसके बाद बार-बार message न करें।", "Funnel समझाएँ: Leads → बातचीत → Demo → Admission। हर team partner रोज़ 4 बातें check करे: मुस्कान और eye contact, बोलने से ज़्यादा सुनना, conversion गिनना, ख़ुद रोज़ कुछ सीखना।", "अंत में Sales Mantra सब मिलकर ज़ोर से पढ़ें: विश्वास → ज़रूरत → Solution → Value → सम्मान के साथ Close। 'हम सिर्फ़ Course नहीं बेच रहे, हम बेहतर Future दे रहे हैं।' धन्यवाद के साथ सवाल-जवाब लें।"]}];
const SOON=[["HITARTHI परिचय — Parents Meeting के लिए","parents","#0057D9","#00C2FF"],["Financial Literacy — पैसे की पहली समझ","course","#17A45A","#0EA5E9"],["AI Tools से पढ़ाई आसान","course","#7C3AED","#DB2777"],["Free Counselling कैसे कराएँ","team","#FF8C00","#E11D48"]];
let pcat="all";
function renderPPT(){
  const ds=DECKS.filter(d=>pcat==="all"||d.cat===pcat), ss=SOON.filter(x=>pcat==="all"||x[1]===pcat);
  $("#pptGrid").innerHTML=ds.map(d=>`<div class="pdeck"><button class="pd-cover" data-pdeck="${d.id}" aria-label="${esc(d.t)} — Present करें"><img src="${d.thumbs[0]}" alt="" loading="lazy"><span class="pd-stack"></span><span class="pd-n">${d.slides.length} slides</span><span class="pd-play">▶ Present करें</span></button><div class="pd-body"><span class="pd-tag">${esc(PCAT[d.cat])}</span><h3>${esc(d.t)}</h3><p>${esc(d.sub)}</p><div class="pd-strip">${d.thumbs.slice(1,7).map((t,k)=>`<img src="${t}" alt="" loading="lazy" data-pdeck="${d.id}" data-pslide="${k+1}">`).join("")}</div><div class="pd-acts"><button class="btn btn-orange btn-sm" data-pdeck="${d.id}">▶ Present करें</button><button class="btn btn-ghost btn-sm" data-pdeck="${d.id}" data-pnotes="1">🗣️ Notes के साथ खोलें</button></div></div></div>`).join("")
   +ss.map(x=>`<div class="pdeck soon"><div class="pd-cover" style="--c1:${x[2]};--c2:${x[3]}"><span>${esc(x[0])}</span><em>जल्द आ रहा है</em></div><div class="pd-body"><span class="pd-tag">${esc(PCAT[x[1]])}</span><h3>${esc(x[0])}</h3><p>यह presentation जल्द यहाँ जोड़ी जाएगी।</p></div></div>`).join("");
}
renderPPT();
$("#pptTabs").addEventListener("click",e=>{const b=e.target.closest("[data-pcat]");if(!b)return;pcat=b.dataset.pcat;$$("#pptTabs button").forEach(x=>x.setAttribute("aria-pressed",x===b));renderPPT();});
const PV={d:null,i:0,t0:0,tm:null,urls:[]};
function pvShow(i){const d=PV.d,n=d.slides.length;PV.i=Math.max(0,Math.min(n-1,i));
  $("#pvImg").src=d.slides[PV.i];$("#pvImg").alt=(d.t||"")+" — slide "+(PV.i+1);
  $("#pvCount").textContent=(PV.i+1)+" / "+n;$("#pvBar").style.width=((PV.i+1)/n*100)+"%";
  $("#pvPrev").disabled=PV.i===0;$("#pvNext").disabled=PV.i===n-1;
  const nt=(d.notes&&d.notes[PV.i])||"इस slide के लिए notes नहीं हैं।";$("#pvNoteText").textContent=nt;
  $$("#pvThumbs button").forEach((b,k)=>b.classList.toggle("on",k===PV.i));
  const on=$$("#pvThumbs button")[PV.i];on&&on.scrollIntoView({block:"nearest",inline:"center"});
  if(d.slides[PV.i+1]){const im=new Image();im.src=d.slides[PV.i+1];}}
function pvOpen(d,i,notes){PV.d=d;$("#pvTitle").textContent=d.t;
  $("#pvThumbs").innerHTML=(d.thumbs||d.slides).map((t,k)=>`<button data-pvgo="${k}" aria-label="Slide ${k+1}"><img loading="lazy" decoding="async" src="${t}" alt=""><span>${k+1}</span></button>`).join("");
  $("#pv").hidden=false;document.body.style.overflow="hidden";pvNotes(!!notes&&!!d.notes);pvShow(i||0);
  PV.t0=Date.now();clearInterval(PV.tm);PV.tm=setInterval(()=>{const s=Math.floor((Date.now()-PV.t0)/1000);$("#pvTimer").textContent=String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0");},1000);$("#pvTimer").textContent="00:00";
  $("#pvNotesBtn").hidden=!d.notes;track("ppt_open",{deck:d.id||"own"});$("#pvClose").focus();}
function pvNotes(on){$("#pvNotes").hidden=!on;$("#pvNotesBtn").setAttribute("aria-pressed",on);}
function pvClose(){$("#pv").hidden=true;document.body.style.overflow="";clearInterval(PV.tm);if(document.fullscreenElement)document.exitFullscreen().catch(()=>{});}
document.addEventListener("click",e=>{const b=e.target.closest("[data-pdeck]");if(!b)return;const d=DECKS.find(x=>x.id===b.dataset.pdeck);if(d)pvOpen(d,+(b.dataset.pslide||0),b.dataset.pnotes);});
$("#pvThumbs").addEventListener("click",e=>{const b=e.target.closest("[data-pvgo]");if(b)pvShow(+b.dataset.pvgo);});
$("#pvPrev").onclick=()=>pvShow(PV.i-1);$("#pvNext").onclick=()=>pvShow(PV.i+1);$("#pvClose").onclick=pvClose;
$("#pvNotesBtn").onclick=()=>pvNotes($("#pvNotes").hidden);
$("#pvFull").onclick=()=>{const el=$("#pv");if(document.fullscreenElement)document.exitFullscreen().catch(()=>{});else if(el.requestFullscreen)el.requestFullscreen().catch(()=>toast("इस browser में Full screen नहीं खुल पाया"));};
$("#pvShare").onclick=()=>{const u=location.href.split("#")[0]+"#ppt";window.open("https://wa.me/?text="+encodeURIComponent((PV.d.t||"HITARTHI Presentation")+" — HITARTHI PPT Library: "+u),"_blank","noopener");};
document.addEventListener("keydown",e=>{if($("#pv").hidden)return;if(e.key==="ArrowRight"||e.key==="PageDown"||e.key===" "){e.preventDefault();pvShow(PV.i+1);}else if(e.key==="ArrowLeft"||e.key==="PageUp"){e.preventDefault();pvShow(PV.i-1);}else if(e.key==="Escape"&&!document.fullscreenElement)pvClose();else if(e.key==="Home")pvShow(0);else if(e.key==="End")pvShow(PV.d.slides.length-1);});
(function(){let x0=null;const st=$("#pvStage");st.addEventListener("touchstart",e=>{x0=e.touches[0].clientX;},{passive:true});st.addEventListener("touchend",e=>{if(x0==null)return;const dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>45)pvShow(PV.i+(dx<0?1:-1));x0=null;});
  st.addEventListener("click",e=>{if(e.target.id!=="pvImg")return;const r=e.target.getBoundingClientRect();pvShow(PV.i+(e.clientX-r.left>r.width/3?1:-1));});})();
$("#pptOwn").addEventListener("change",e=>{const fs=[...e.target.files].filter(f=>f.type.startsWith("image/")).sort((a,b)=>a.name.localeCompare(b.name,undefined,{numeric:true}));if(!fs.length){toast("कृपया JPG/PNG images चुनें");return;}
  PV.urls.forEach(u=>URL.revokeObjectURL(u));PV.urls=fs.map(f=>URL.createObjectURL(f));pvOpen({id:"own",t:"मेरी Slides",slides:PV.urls,thumbs:PV.urls,notes:null},0);e.target.value="";});

/* ---------- REFERRAL / PARTNER ID TRACKING (असली) ---------- */
const REFK="hitarthi_ref";
function getRef(){try{const v=JSON.parse(localStorage.getItem(REFK)||"null");if(v&&Date.now()-v.t<30*864e5)return v.id;}catch(e){}return "";}
(function(){let id="";try{id=(new URLSearchParams(location.search).get("ref")||"").trim().toUpperCase();}catch(e){}
  if(!id){const m=(location.hash||"").match(/ref=([A-Za-z0-9]{3,12})/);if(m)id=m[1].toUpperCase();}
  if(/^[A-Z0-9]{3,12}$/.test(id)){try{localStorage.setItem(REFK,JSON.stringify({id,t:Date.now()}));}catch(e){}setTimeout(()=>toast("Partner ID "+id+" के ज़रिए आए हैं — धन्यवाद!"),900);}
  /* हर WhatsApp संदेश में Partner ID अपने-आप जुड़ जाए */
  document.addEventListener("click",e=>{const a=e.target.closest('a[href^="https://wa.me/919453717356"]');if(!a)return;const r=getRef();if(!r||/Partner ID/.test(decodeURIComponent(a.href)))return;
    try{const u=new URL(a.href);const t=u.searchParams.get("text")||"Namaste HITARTHI";u.searchParams.set("text",t+"\nPartner ID: "+r);a.href=u.toString();}catch(err){}},true);
})();
/* ---------- UPI PAYMENT ---------- */
const UPI={vpa:"hitarthigroup-1@okhdfcbank",pn:"Hitarthi Group"}; /* UPI ID बदलनी हो तो सिर्फ़ यहाँ बदलें */
function qrSVG(text,px,dark){const q=qrcode(0,"M");q.addData(text);q.make();const n=q.getModuleCount(),m=2,N=n+m*2;let d="";for(let r=0;r<n;r++)for(let c=0;c<n;c++)if(q.isDark(r,c))d+=`M${c+m} ${r+m}h1v1h-1z`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${N} ${N}" width="${px}" height="${px}" shape-rendering="crispEdges" role="img" aria-label="QR code"><rect width="${N}" height="${N}" fill="#fff"/><path d="${d}" fill="${dark||"#000"}"/></svg>`;}
function upiURL(amt,note){const p=new URLSearchParams({pa:UPI.vpa,pn:UPI.pn,cu:"INR"});if(amt>0)p.set("am",Number(amt).toFixed(2));if(note)p.set("tn",note.slice(0,50));return "upi://pay?"+p.toString().replace(/\+/g,"%20").replace(/%40/g,"@");}
const PAY={amt:0,item:"",ref:"",extra:""};
function payRef(){const d=new Date();return "HT"+String(d.getDate()).padStart(2,"0")+String(d.getMonth()+1).padStart(2,"0")+"-"+Math.floor(1000+Math.random()*9000);}
function payRender(){const a=PAY.amt,ok=a>0;
  $("#payAmt").textContent=ok?rs(a):"रकम डालें";
  const note=PAY.ref+" HITARTHI";
  $("#payQR").innerHTML=qrSVG(upiURL(ok?a:0,note),220,"#0B1A4A");
  const app=$("#payApp");app.href=upiURL(ok?a:0,note);app.textContent=ok?`📱 UPI App से ${rs(a)} Pay करें`:"📱 UPI App खोलें";
  payWA();}
function payWA(){const nm=$("#payName").value.trim(),utr=$("#payUTR").value.trim();
  const msg=`Namaste HITARTHI, maine UPI se payment kar diya hai.\nOrder ID: ${PAY.ref}\nItem: ${PAY.item}\nRakam: Rs ${PAY.amt||"-"}\nUPI ID: ${UPI.vpa}\nUTR / Txn ID: ${utr||"(screenshot bhej raha/rahi hoon)"}\nNaam: ${nm||"-"}${($("#payMob").value||"").trim()?"\nMobile: "+$("#payMob").value.trim():""}${(($("#payRefId").value||"").trim()?"\nPartner ID: "+$("#payRefId").value.trim().toUpperCase():"")}${PAY.coupon?"\nCoupon: "+PAY.coupon+" (-"+CP_PCT+"%)":""}${PAY.extra?"\n"+PAY.extra:""}`;
  $("#payWA").href="https://wa.me/"+WA+"?text="+encodeURIComponent(msg);}
function payEmailV(){const e=(($("#payEmail")||{}).value||"").trim().toLowerCase();return /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/.test(e)?e:"";}
function openPay(o){PAY.amt=+o.amt||0;{const pl=document.getElementById("payLib");if(pl)pl.hidden=true;}PAY.item=o.item||"HITARTHI Payment";if(window.OFFER&&/MEMBERSHIP/i.test(PAY.item)&&!(o.plan&&o.plan.enrollId))PAY.item+=" + "+window.OFFER.name+": 1 E-book free";PAY.extra=o.extra||"";PAY.lines=o.lines||null;PAY.linesFull=o.lines?o.lines.map(l=>Object.assign({},l)):null;PAY.demoBook=o.demoBook||"";{const x=document.getElementById("payDbRead");if(x)x.hidden=true;const y=document.getElementById("payDemo");if(y)y.hidden=!(PAY.demoBook&&!HB_API);}PAY.coupon="";PAY.cpOff=0;PAY.done=false;PAY.plan=o.plan||null;PAY.full=PAY.amt;PAY.base=PAY.item;PAY.ref=payRef();
  {const can=!PAY.plan&&!PAY.lines&&PAY.amt>=3000;$("#payPart").hidden=!can;$("#payPartOn").checked=false;$("#payPartBox").hidden=true;
   if(can){const mn=Math.max(2000,Math.ceil(PAY.amt*.3/100)*100);$("#payPartAmt").min=mn;$("#payPartAmt").max=PAY.amt-1;$("#payPartAmt").value=mn;$("#payPartHint").textContent=`कम से कम ₹${mn.toLocaleString("en-IN")} • बाकी ₹${(PAY.amt-mn).toLocaleString("en-IN")} 90 दिन में, ₹500 या ज़्यादा की किश्तों में`;}}
  $("#payItem").textContent=PAY.item;$("#payVPA").textContent=UPI.vpa;$("#payPN").textContent=UPI.pn;$("#payRef").textContent=PAY.ref;
  $("#payName").value=o.name||"";$("#payRefId").value=getRef();$("#payUTR").value="";$("#payOk").hidden=true;$("#paySubmit").hidden=!HB_API;$("#payOnline").hidden=!(HB_API&&HB.gw);$("#payOnline").disabled=false;$("#paySubmit").disabled=false;$("#payEdit").hidden=PAY.amt>0;$("#payAmtIn").value="";
  $("#payAddr").value=o.addr||"";$("#payCpIn").value="";$("#payCpMsg").textContent="";$("#payCpGo").textContent="लगाएँ";delete $("#payCpGo").dataset.on;$("#payCp").hidden=!(PAY.amt>=100&&!PAY.plan);
  $("#payM").hidden=false;document.body.style.overflow="hidden";payRender();codShow();track("payment_started",{item:PAY.item,value:PAY.amt});
  setTimeout(()=>{(PAY.amt>0?$("#payApp"):$("#payAmtIn")).focus();},50);}
function closePay(){payAbandon();$("#payM").hidden=true;document.body.style.overflow="";}
document.addEventListener("click",e=>{const b=e.target.closest("[data-pay]");if(!b)return;e.preventDefault();e.stopPropagation();
  openPay({amt:+b.dataset.pay,item:b.dataset.item,name:b.dataset.pname,extra:b.dataset.pextra});},true);
$("#payClose").onclick=closePay;$("#payM").addEventListener("click",e=>{if(e.target.id==="payM")closePay();});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("#payM").hidden)closePay();});
$("#payAmtIn").addEventListener("input",()=>{PAY.amt=Math.max(0,Math.round(+$("#payAmtIn").value||0));payRender();});
$("#payName").addEventListener("input",payWA);$("#payMob").addEventListener("input",payWA);$("#payRefId").addEventListener("input",payWA);$("#payUTR").addEventListener("input",payWA);
$("#payCopy").onclick=()=>{try{navigator.clipboard.writeText(UPI.vpa).then(()=>toast("UPI ID copy हो गई"),()=>toast(UPI.vpa));}catch(err){toast(UPI.vpa);}};
$("#payApp").addEventListener("click",()=>track("upi_app_open",{item:PAY.item,value:PAY.amt}));
$("#payWA").addEventListener("click",()=>track("payment_confirm_click",{item:PAY.item,value:PAY.amt}));
try{$("#payStaticQR").innerHTML=qrSVG(upiURL(0,""),116,"#0B1A4A");}catch(e){}


/* ---------- LIVE PARTNER SYSTEM (Google Sheet से जुड़ा) ----------
   नीचे HB_API में Google Apps Script का Web App URL डालें।
   खाली हो तो login "नमूना" mode में चलता है और order WhatsApp से जाता है। */
const HB_API="https://script.google.com/macros/s/AKfycbz_lNguiwN0VTpMo4BEQDJefj2mET8QyPeteS_CqOloLivlgxdcAKl5xzoo0KlswlHOkg/exec";
const HB={t:null,id:"",pin:"",demo:false,gw:""};
const MNH=["जनवरी","फ़रवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितंबर","अक्टूबर","नवंबर","दिसंबर"];
const mNameH=m=>{const a=String(m).split("-");return (MNH[+a[1]-1]||"")+" "+a[0];};
const inr2=n=>"₹"+(Math.round((+n||0)*100)/100).toLocaleString("en-IN",{maximumFractionDigits:2});
function refLink(id){const b=/hitarthi\.com$/i.test(location.hostname)?location.origin+"/":"https://www.hitarthi.com/";return b+"?ref="+id;}
async function hbRaw(a,d){if(!HB_API)throw new Error("noapi");const ctl=new AbortController();const tm=setTimeout(()=>ctl.abort(),25000);
  try{const r=await fetch(HB_API,{method:"POST",body:JSON.stringify(Object.assign({action:a},d)),signal:ctl.signal});return await r.json();}finally{clearTimeout(tm);}}
/* तेज़ी: सिर्फ़ पढ़ने वाली calls (content, books, catalog…) पहले phone की memory / build-time snapshot से तुरंत, पीछे से ताज़ा — बदला हो तो "hb:fresh" event */
const HB_RO={content:6e5,config:6e5,bookslist:6e5,libcatalog:6e5,notices:12e4,leaderboard:12e4};
const HB_SNAP={"content":{"ok":true,"courses":{},"reviews":[],"training":[{"title":"HITARTHI क्या है — 5 मिनट में","video":"","mins":5},{"title":"ग्राहक से पहली बात कैसे करें","video":"","mins":7},{"title":"₹29 Demo से course तक","video":"","mins":6},{"title":"WhatsApp status और Reel से leads","video":"","mins":8},{"title":"ईमानदारी के नियम — क्या कभी न कहें","video":"","mins":5}]},"config":{"ok":true,"gateway":"razorpay"},"bookslist":{"ok":true,"books":[{"t":"GOAL SETTING & LIFE PLANNING","s":"लक्ष्य तय करें • सही दिशा चुनें","a":"HITARTHI","bcat":"self","e":249,"p":498,"img":"","shelf":true,"pages":254,"learn":["SMART goals बनाना","जीवन के हर क्षेत्र की योजना","Goal tracker worksheets"],"ser":"Life Planning","col":["#065F46","#10B981","#022C22","#FFE066"],"ord":14},{"t":"THE TIME BLUEPRINT","s":"समय को जीतो, जिंदगी जीतो","a":"HITARTHI","bcat":"self","e":59,"p":118,"img":"","shelf":true,"pages":57,"learn":["Priority तय करना","टालने की आदत छोड़ना","Daily और weekly planner"],"ser":"Time Management","col":["#0C4A6E","#0EA5E9","#082F49","#FFC247"],"ord":15},{"t":"The Personality Blueprint","s":"Personality Development","a":"HITARTHI","bcat":"self","e":69,"p":138,"img":"","shelf":true,"pages":69,"learn":["आत्मविश्वास बढ़ाना","बोलचाल और body language","पहली छाप कैसे अच्छी बनाएँ"],"ser":"Personality","col":["#581C87","#A855F7","#3B0764","#FFD34D"],"ord":16},{"t":"Basic Computer — खेल-खेल में","s":"Mouse पकड़ने से Email भेजने तक — step-by-step","a":"HITARTHI","bcat":"student","e":109,"p":218,"img":"","shelf":true,"pages":114,"learn":["Computer के भाग, Windows, File-Folder","MS Word, Excel, PowerPoint की शुरुआत","Internet, Email और Cyber Safety"],"ser":"Computer Skill Series","col":[],"ord":25},{"t":"MS Word Made Easy","s":"शुरुआत से Professional Document तक","a":"HITARTHI","bcat":"student","e":89,"p":178,"img":"","shelf":true,"pages":92,"learn":["Typing, formatting, table, picture","Styles, Table of Contents, Mail Merge","Resume, letter और 5 real projects"],"ser":"Computer Skill Series","col":[],"ord":26},{"t":"MS Excel Mastery","s":"Excel सीखें • Data समझें • Career बनाएं","a":"HITARTHI","bcat":"student","e":59,"p":118,"img":"","shelf":true,"pages":61,"learn":["Formulas और functions","VLOOKUP / XLOOKUP, Pivot Table","Charts और dashboard"],"ser":"Computer Skill Series","col":[],"ord":27},{"t":"MS PowerPoint Made Easy","s":"स्लाइड बनाओ • डिज़ाइन करो • एनिमेशन से जादू दिखाओ","a":"HITARTHI","bcat":"student","e":79,"p":158,"img":"","shelf":true,"pages":79,"learn":["Slides, design और pictures","Charts और SmartArt","Animation, transition, presentation"],"ser":"Computer Skill Series","col":[],"ord":28},{"t":"DCA — Diploma in Computer Applications","s":"Complete Computer Course — Theory + Practical + Projects","a":"HITARTHI","bcat":"student","e":500,"p":1000,"img":"","shelf":true,"pages":308,"learn":["Computer Fundamentals, Windows 11, MS Office","Internet, Typing, Tally + GST","HTML & CSS, Database & SQL"],"ser":"Computer Skill Series","col":[],"ord":29},{"t":"ADCA — Advanced Diploma in Computer Applications","s":"13 modules • 875+ MCQ • Basic से Advanced","a":"HITARTHI","bcat":"student","e":600,"p":1200,"img":"","shelf":true,"pages":759,"learn":["Word, Excel, PowerPoint, Access","Tally with GST, Networking, Photoshop","C & Python, HTML & CSS, Hindi-English typing"],"ser":"Computer Skill Series","col":[],"ord":30},{"t":"MS Access और Database Management","s":"Volume 1 — बुनियाद (Foundations)","a":"HITARTHI","bcat":"student","e":89,"p":178,"img":"","shelf":true,"pages":87,"learn":["Database क्या है, Tables और Fields","Queries, Forms, Reports","Practical labs + MCQ"],"ser":"Computer Skill Series","col":[],"ord":31},{"t":"Financial Literacy","s":"पैसे को समझें • संभालें • बढ़ाएँ — 21 अध्याय, 30-दिन चैलेंज","a":"HITARTHI","bcat":"finance","e":199,"p":398,"img":"","shelf":true,"pages":204,"learn":["Budget, बचत, EMI और बीमा की समझ","Tax की आसान समझ, सरकारी योजनाएँ","Scam और Digital Arrest से बचाव"],"ser":"Financial Awareness Series","col":[],"ord":32},{"t":"डिग्री से आगे","s":"भविष्य के लिए शिक्षा — 18 अध्याय, 12 वर्कशीट","a":"HITARTHI","bcat":"student","e":119,"p":238,"img":"","shelf":true,"pages":122,"learn":["AI और कौशल की समझ","पैसे और संस्कार की शिक्षा","NEP 2020 और future-ready बच्चे"],"ser":"Education","col":[],"ord":33},{"t":"Gmail & Email Management","s":"ईमेल की पूरी जानकारी — Hindi + English Practical Guide","a":"HITARTHI","bcat":"student","e":409,"p":818,"img":"","shelf":true,"pages":410,"learn":["Gmail के सारे features","Professional email लिखना","Security, labels, filters और productivity"],"ser":"Computer Skill Series","col":[],"ord":34},{"t":"TIME MANAGEMENT","s":"अपना समय वापस पाएँ, फोकस बढ़ाएँ — Improved Edition","a":"HITARTHI","bcat":"self","e":109,"p":218,"img":"","shelf":true,"pages":108,"learn":["रोज़ 2 घंटे वापस पाने के तरीके","गहरा फोकस, मोबाइल पर लगाम","21 दिन का habit plan"],"ser":"Self Growth Series","col":[],"ord":35},{"t":"SMART SELLING","s":"ग्राहक को समझिए • भरोसा बनाइए • आत्मविश्वास से बेचिए","a":"HITARTHI","bcat":"business","e":79,"p":158,"img":"","shelf":true,"pages":77,"learn":["7 सवाल जो ग्राहक को समझाएँ","9 objections का जवाब","5 closing तरीके + 7 दिन sales challenge"],"ser":"Skill Series","col":[],"ord":36},{"t":"SALES WARRIOR","s":"बेचो नहीं, ज़िंदगियाँ बदलो — 15 chapters, 25+ ready scripts","a":"HITARTHI","bcat":"business","e":79,"p":158,"img":"","shelf":true,"pages":80,"learn":["25+ ready scripts","क्या बोलें, क्या करें","30 दिन का challenge"],"ser":"Sales Team Guide","col":[],"ord":37},{"t":"C++ Programming","s":"C और C++ — शुरुआत से Projects तक, सरल हिंदी में","a":"HITARTHI","bcat":"student","e":350,"p":700,"c":1050,"img":"","shelf":true,"pages":764,"learn":["C और C++ की बुनियाद: variables, loops, functions","OOP — class, object, inheritance आसान उदाहरणों से","Practice programs + interview प्रश्न"],"ser":"Computer Skill Series","col":[],"ord":38},{"t":"Tally Prime with GST","s":"Accounting, Billing, GST Return — step-by-step","a":"HITARTHI","bcat":"student","e":149,"p":249,"c":398,"img":"","shelf":true,"pages":113,"learn":["Company बनाना, Ledger, Voucher entry","GST invoice, GSTR-1 / 3B की समझ","Inventory, Reports और Balance Sheet"],"ser":"Computer Skill Series","col":[],"ord":39},{"t":"CCC Course","s":"Course on Computer Concepts — NIELIT परीक्षा की पूरी तैयारी","a":"HITARTHI","bcat":"student","e":230,"p":460,"c":690,"img":"","shelf":true,"pages":230,"learn":["CCC का पूरा syllabus सरल भाषा में","Office, Internet, Digital Payment, Cyber Security","MCQ practice + exam tips"],"ser":"Computer Skill Series","col":[],"ord":40},{"t":"Complete Keyboard Guide","s":"Keyboard की पूरी जानकारी — Basic से Advanced तक","a":"HITARTHI","bcat":"student","e":99,"p":199,"c":298,"img":"","shelf":true,"pages":47,"learn":["हर key का काम और सही उँगली","200+ shortcut keys (Windows, Word, Excel, Chrome)","Hindi-English typing और speed बढ़ाने के तरीके"],"ser":"Computer Skill Series","col":[],"ord":41}]},"libcatalog":{"ok":true,"items":[{"key":"डिग्री से आगे","title":"डिग्री से आगे","types":["PDF"],"total":1,"chapters":[{"n":0,"title":"📘 डिग्री से आगे","type":"PDF","mins":0,"free":false,"open":false}]},{"key":"the personality blueprint","title":"The Personality Blueprint","types":["PDF"],"total":1,"chapters":[{"n":0,"title":"📘 The Personality Blueprint","type":"PDF","mins":0,"free":false,"open":false}]},{"key":"time management","title":"TIME MANAGEMENT","types":["PDF"],"total":1,"chapters":[{"n":0,"title":"📘 TIME MANAGEMENT","type":"PDF","mins":0,"free":false,"open":false}]},{"key":"the time blueprint","title":"THE TIME BLUEPRINT","types":["PDF"],"total":1,"chapters":[{"n":0,"title":"📘 THE TIME BLUEPRINT","type":"PDF","mins":0,"free":false,"open":false}]},{"key":"smart selling","title":"SMART SELLING","types":["PDF"],"total":1,"chapters":[{"n":0,"title":"📘 SMART SELLING","type":"PDF","mins":0,"free":false,"open":false}]},{"key":"sales warrior","title":"SALES WARRIOR","types":["PDF"],"total":1,"chapters":[{"n":0,"title":"📘 SALES WARRIOR","type":"PDF","mins":0,"free":false,"open":false}]},{"key":"ms word made easy","title":"MS Word Made Easy","types":["PDF"],"total":1,"chapters":[{"n":0,"title":"📘 MS Word Made Easy","type":"PDF","mins":0,"free":false,"open":false}]},{"key":"gmail & email management","title":"Gmail & Email Management","types":["PDF"],"total":1,"chapters":[{"n":0,"title":"📘 Gmail & Email Management","type":"PDF","mins":0,"free":false,"open":false}]},{"key":"ms powerpoint made easy","title":"MS PowerPoint Made Easy","types":["PDF"],"total":1,"chapters":[{"n":0,"title":"📘 MS PowerPoint Made Easy","type":"PDF","mins":0,"free":false,"open":false}]},{"key":"ms excel mastery","title":"MS Excel Mastery","types":["PDF"],"total":1,"chapters":[{"n":0,"title":"📘 MS Excel Mastery","type":"PDF","mins":0,"free":false,"open":false}]},{"key":"ms access और database management","title":"MS Access और Database Management","types":["PDF"],"total":1,"chapters":[{"n":0,"title":"📘 MS Access और Database Management","type":"PDF","mins":0,"free":false,"open":false}]},{"key":"goal setting & life planning","title":"GOAL SETTING & LIFE PLANNING","types":["PDF"],"total":1,"chapters":[{"n":0,"title":"📘 GOAL SETTING & LIFE PLANNING","type":"PDF","mins":0,"free":false,"open":false}]},{"key":"financial literacy","title":"Financial Literacy","types":["PDF"],"total":1,"chapters":[{"n":0,"title":"📘 Financial Literacy","type":"PDF","mins":0,"free":false,"open":false}]},{"key":"dca — diploma in computer applications","title":"DCA — Diploma in Computer Applications","types":["PDF"],"total":1,"chapters":[{"n":0,"title":"📘 DCA — Diploma in Computer Applications","type":"PDF","mins":0,"free":false,"open":false}]},{"key":"basic computer — खेल-खेल में","title":"Basic Computer — खेल-खेल में","types":["PDF"],"total":1,"chapters":[{"n":0,"title":"📘 Basic Computer — खेल-खेल में","type":"PDF","mins":0,"free":false,"open":false}]},{"key":"adca — advanced diploma in computer applications","title":"ADCA — Advanced Diploma in Computer Applications","types":["PDF"],"total":1,"chapters":[{"n":0,"title":"📘 ADCA — Advanced Diploma in Computer Applications","type":"PDF","mins":0,"free":false,"open":false}]}]}};
/* 📷 / 🖼️ photo: camera वाली input की file मुख्य input में डालें (बाकी code वही) + चुनी photo दिखाएँ */
document.addEventListener("change",e=>{const el=e.target;if(!el||el.type!=="file")return;
  const tid=el.dataset&&el.dataset.camFor;if(tid){const main=document.getElementById(tid);if(main&&el.files&&el.files[0]){try{const dt=new DataTransfer();dt.items.add(el.files[0]);main.files=dt.files;}catch(x){}main.dispatchEvent(new Event("change",{bubbles:true}));}el.value="";return;}
  const sel=document.querySelector(`[data-sel-for="${el.id}"]`);if(sel){const f=el.files&&el.files[0];if(!f){sel.textContent="";return;}const u=URL.createObjectURL(f);sel.innerHTML=`<img loading="lazy" decoding="async" src="${u}" alt=""> ✓ photo चुनी गई`;}},true);
async function hbCall(a,d){d=d||{};if(!(HB_RO[a]&&!d.token&&!d.pin&&!d.id))return hbRaw(a,d);
  const k="hbc_"+a+(Object.keys(d).length?"_"+JSON.stringify(d):"");let c=null;try{c=JSON.parse(localStorage.getItem(k)||"null");}catch(e){}
  if(!(c&&c.r)&&HB_SNAP[a]&&!Object.keys(d).length)c={t:0,r:HB_SNAP[a]};
  const go=()=>hbRaw(a,d).then(r=>{if(r&&r.ok){try{localStorage.setItem(k,JSON.stringify({t:Date.now(),r}));}catch(e){}if(c&&c.r&&JSON.stringify(r)!==JSON.stringify(c.r)){try{document.dispatchEvent(new CustomEvent("hb:fresh",{detail:{action:a,data:d,r}}));}catch(e){}}}return r;});
  if(c&&c.r){if(Date.now()-c.t>HB_RO[a])go().catch(()=>{});return c.r;}
  return go();}
const hbOnFresh=(a,fn)=>document.addEventListener("hb:fresh",e=>{if(e.detail&&e.detail.action===a)try{fn(e.detail.r,e.detail.data);}catch(x){}});
function hbDemo(m){const cur=new Date().toISOString().slice(0,7);m=m||cur;const lv=Array(24).fill(0);lv[0]=2210.56;lv[1]=311.09;lv[2]=167.51;
  return {ok:true,id:"HT1007",name:"नमूना Partner",kyc:true,sponsor:"HT1002",sponsorName:"सुनीता",month:m,current:m===cur,months:[cur],green:true,level:6,pct:39.5,canPlace:5,cums:[22,28.5,32,35,37.5,39.5,41,42.2,43.2,43.8].concat(Array.from({length:14},(_,i)=>Math.round((43.8+.3*(i+1))*10)/10)),rank:"Level 6",levels:6,eq:0,volume:30000,pbv:10048,tbv:19620,greenMin:4500,
    direct:2210.56,team:478.6,lv,rates:[22,6.5,3.5,3,2.5,2,1.5,1.2,1,0.6].concat(Array(14).fill(.3)),bonuses:[{date:m+"-05",type:"Cash",title:"Diwali Bonus",amount:1000},{date:m+"-05",type:"Gift",title:"HITARTHI Medal",amount:500}],
    cash:1000,comm:2689.16,gross:3689.16,tdsPct:2,tds:73.78,net:3615.38,wallet:{earned:4120,thisMonth:2689.16,bonus:1000,paid:3000,balance:2120},payouts:[{date:m+"-02",gross:3000,tds:60,net:2940,ref:"UTR नमूना"}],
    sales:[{id:"HT1810-1234",date:m+"-12",item:"HITARTHI MASTERY BOOK MEMBERSHIP",amount:10500,bv:10048,status:"Paid",cust:"रा•••",mine:2210.56},{id:"HT1810-5521",date:m+"-16",item:"3 घंटे का AI Workshop",amount:99,bv:84,status:"Pending",cust:"सी•••",mine:0}],
    directTeam:[{id:"HT1011",name:"अजय",bv:4786,green:true,level:4},{id:"HT1015",name:"पूनम",bv:10048,green:true,level:1}],teamCount:5,next:{level:7,pct:41,need:150000},joined:"2026-09-12",mobile:"94•••••356",city:"कांकेर",kycStatus:"Approved",photo:"",
    rewards:[{n:"HITARTHI Medal",need:10000,months:1,have:29668,done:true,given:true},{n:"₹5,000 Cash",need:100000,months:1,have:29668,done:false,given:false},{n:"Bike",need:2000000,months:6,have:29668,done:false,given:false}]};}
function mcBar(label,have,need){const p=need>0?Math.min(100,have/need*100):100;return `<div class="mc-bar"><div><span>${label}</span><b class="num">${inr2(have)} / ${inr2(need)}</b></div><i><em style="width:${p.toFixed(1)}%"></em></i></div>`;}
function mcRender(t){HB.t=t;const d=$("#mcDash");
  /* photo अलग से (तेज़ login): phone में सेव हो तो वहीं से, नहीं तो पीछे से मँगाएँ */
  if(!t.photo&&t.hasPhoto&&!HB.demo){const pk="hb_ph_"+t.id,pv=String(t.photoV||"");let c="";try{const o=JSON.parse(localStorage.getItem(pk)||"null");if(o&&o.p&&o.v===pv)c=o.p;}catch(e){}
    if(c)t.photo=c;else if(!t._phq){t._phq=1;hbCall("photoget",{id:HB.id,pin:HB.pin,v:pv}).then(r=>{if(r&&r.ok&&r.photo&&HB.t===t){try{localStorage.setItem(pk,JSON.stringify({v:pv,p:r.photo}));}catch(e){}t.photo=r.photo;document.querySelectorAll("#mcDash .mc-av, #mcDash #kyPv").forEach(el=>{el.innerHTML=`<img loading="lazy" decoding="async" src="${r.photo}" alt="">`;});}}).catch(()=>{});}}
  const st=s=>s==="Paid"?'<i class="mc-chip g">Paid ✓</i>':s==="Pending"?'<i class="mc-chip p">मिलान बाकी</i>':'<i class="mc-chip r">'+esc(s)+'</i>';
  const gifts=t.bonuses.filter(b=>b.type==="Gift").map(b=>"🏆 "+esc(b.title)).join(", ");
  const lvRows=t.lv.map((a,k)=>({a,k})).filter(x=>x.a>0).map(x=>`<tr><td>${x.k===0?"Level 1 — <b>Direct</b> (मेरी बिक्री)":"Level "+(x.k+1)+" — Team"}</td><td class="r">${t.rates[x.k]}%</td><td class="r"><b>${inr2(x.a)}</b></td></tr>`).join("");
  const sales=t.sales.map(o=>`<tr><td class="num">${esc(o.date.slice(5))}</td><td>${esc(o.item).slice(0,60)}<br><small class="muted">${esc(o.cust)} • ${esc(o.id)}</small></td><td class="r">${inr2(o.amount)}</td><td class="r">${inr2(o.bv)}</td><td>${st(o.status)}</td><td class="r"><b>${o.mine?inr2(o.mine):"—"}</b></td></tr>`).join("");
  const lvOpts=(cur,max)=>{let o=`<option value="">L${cur}</option>`;for(let k=cur+1;k<max;k++)o+=`<option value="${k}">→ L${k}</option>`;return o;};
  const team=t.directTeam.map(m=>`<tr><td class="num">${esc(m.id)}</td><td>${esc(m.name)}</td><td>${(m.level||1)+1<t.level?`<span class="mc-lvl"><select data-raise="${esc(m.id)}" aria-label="${esc(m.name)} का Level बढ़ाएँ">${lvOpts(m.level||1,t.level)}</select></span>`:`L${m.level||1}`}</td><td class="r">${inr2(m.bv)}</td><td>${m.green?'<i class="mc-chip g">🟢</i>':'<i class="mc-chip i">⚪</i>'}</td></tr>`).join("");
  let addOpts="";for(let k=1;k<t.level;k++)addOpts+=`<option value="${k}"${k===t.level-1?" selected":""}>Level ${k} — उन्हें अपनी बिक्री पर ${t.cums[k-1]}%, आपको फ़र्क़ ${Math.round((t.pct-t.cums[k-1])*100)/100}%</option>`;
  const rw=t.rewards.map(r=>`<div class="mc-bar"><div><span>${r.given?"✅":r.done?"🎉":"🎯"} ${esc(r.n)}${r.months>1?" <small class='muted'>("+r.months+" महीने)</small>":""}</span><b class="num">${r.given?"मिल गया":r.done?"पूरा! दिया जाएगा":inr2(r.have)+" / "+inr2(r.need)}</b></div><i><em style="width:${Math.min(100,r.have/r.need*100).toFixed(1)}%"></em></i></div>`).join("");
  const link=refLink(t.id);
  d.innerHTML=`<div class="mc-top"><div class="mc-who"><span class="mc-av">${t.photo?`<img loading="lazy" decoding="async" src="${t.photo}" alt="">`:esc((t.name||"?").trim().charAt(0))}</span><div><b>${esc(t.name)}${HB.demo?' <i class="mc-chip p">नमूना</i>':""}</b><small><span class="num">${esc(t.id)}</span> • ${t.green?'<i class="mc-chip g">🟢 Green ID</i>':'<i class="mc-chip i">⚪ Inactive</i>'} • <b>Level ${t.level}</b> (अपनी बिक्री पर ${t.pct}%)${t.sponsor&&t.sponsor!=="HT1000"?" • Sponsor: "+esc(t.sponsor):""}</small></div></div>
    <div class="mc-ctl"><select id="mcMonth" aria-label="महीना">${t.months.map(m=>`<option value="${m}"${m===t.month?" selected":""}>${mNameH(m)}</option>`).join("")}</select><button class="btn btn-ghost btn-sm" id="mcRe" aria-label="Refresh">↻</button><button class="btn btn-ghost btn-sm" id="mcOut">Logout</button></div></div>
    <div class="mc-idbar"><button class="btn btn-orange btn-sm" id="mcIdc">🪪 मेरा ID Card</button><label class="btn btn-ghost btn-sm" style="cursor:pointer">📷 ${t.photo?"Photo बदलें":"Photo लगाएँ"}<input type="file" accept="image/*" id="mcPhoto" hidden></label>${t.kycStatus==="Approved"?'<span class="mc-chip g" style="align-self:center">✓ KYC पूरा</span>':t.kycStatus==="Pending"?'<span class="mc-chip p" style="align-self:center">⏳ KYC जाँच में</span>':'<button class="btn btn-ghost btn-sm" id="mcKycGo">📄 KYC करें</button>'}</div>
    <details class="mc-box mc-con" id="mcCon"><summary>📧 मेरा Email और दूसरा नंबर <small class="muted" id="mcConNow"></small></summary><p class="small muted" style="margin:6px 0 8px">👥 आपकी team में कोई नया Partner जुड़ेगा तो उसकी सूचना, और आपकी ID से हुई हर बिक्री का invoice और आपका commission इस email पर आएगा।</p>
      <form class="mc-kyc" id="mcConF"><div><label for="mcConEm">Email</label><input id="mcConEm" type="email" maxlength="120" placeholder="naam@gmail.com"></div><div><label for="mcConAlt">दूसरा / WhatsApp नंबर</label><input id="mcConAlt" type="tel" inputmode="numeric" maxlength="10" placeholder="10 अंक"></div><div class="full"><button class="btn btn-primary btn-sm" type="submit">सेव करें</button> <span class="mc-msg" id="mcConMsg"></span></div></form></details>
    ${t.current?`<p class="mc-note">📅 ${mNameH(t.month)} चालू है — यह हिसाब अनुमानित है, महीना पूरा होने पर final होगा। सिर्फ़ "Paid" (मिलान हो चुके) orders गिने जाते हैं।</p>`:""}
    ${!t.kyc&&t.kycStatus!=="Pending"?`<div class="mc-box" id="mcKycBox"><h4>📄 KYC करें — commission पाने के लिए ज़रूरी</h4><p class="small muted" style="margin-bottom:8px">PAN, bank account और अपनी photo दें। जमा करते ही KYC ✓ लग जाएगा और commission आपके bank में आएगा। जानकारी सुरक्षित company record में रहती है।</p>
      <form class="mc-kyc" id="mcKyc"><div><label for="kyPan">PAN नंबर</label><input id="kyPan" maxlength="10" style="text-transform:uppercase" placeholder="ABCDE1234F" required></div><div><label for="kyAcc">Bank Account नंबर</label><input id="kyAcc" inputmode="numeric" maxlength="18" required></div><div><label for="kyIfsc">IFSC</label><input id="kyIfsc" maxlength="11" style="text-transform:uppercase" placeholder="SBIN0001234" required></div><div><label for="kyHolder">Account holder का नाम</label><input id="kyHolder" maxlength="60" required></div><div><label for="kyEmail">Email <small class="muted">(हर बिक्री का invoice + commission इस पर)</small></label><input id="kyEmail" type="email" maxlength="120" placeholder="naam@gmail.com" required></div><div><label for="kyAlt">दूसरा / WhatsApp नंबर <small class="muted">(ज़रूरी नहीं)</small></label><input id="kyAlt" type="tel" inputmode="numeric" maxlength="10" placeholder="10 अंक"></div>
      <div class="full mc-ph"><span class="pv" id="kyPv">${t.photo?`<img loading="lazy" decoding="async" src="${t.photo}" alt="">`:"👤"}</span><div><label for="kyPhoto">अपनी साफ़ photo ${t.photo?"(लगी हुई है — बदलना हो तो चुनें)":"(ज़रूरी)"}</label><input id="kyPhoto" type="file" accept="image/*" class="ph-in"><input id="kyPhotoCam" type="file" accept="image/*" capture="user" class="ph-in" data-cam-for="kyPhoto"><div class="ph-pick"><label for="kyPhotoCam" class="btn btn-ghost btn-sm">📷 फ़ोटो खींचें</label><label for="kyPhoto" class="btn btn-ghost btn-sm">🖼️ Gallery से चुनें</label><span class="ph-sel" data-sel-for="kyPhoto"></span></div></div></div>
      <div class="full"><button class="btn btn-primary" type="submit" id="kyGo">KYC जमा करें</button> <span class="mc-msg" id="kyMsg"></span></div></form></div>`:""}
    <div class="mc-box mc-mylib"><div><h4>📚 मेरी खरीदी Books</h4><p class="small">आपकी ख़ुद खरीदी books / courses और Partner demo books — सब सुरक्षित Reader में यहीं खुलेंगी।</p></div><button type="button" class="btn btn-primary" id="mcLib">📚 मेरी Library खोलें</button></div>
    <div class="mc-big"><div class="mc-k k1"><span>👤 Direct कमीशन</span><b>${inr2(t.direct)}</b><small>मेरी अपनी ID से हुई बिक्री • BV ${inr2(t.pbv)}</small></div>
      <div class="mc-k k2"><span>👥 Team कमीशन</span><b>${inr2(t.team+(t.eq||0))}</b><small>मेरी team की बिक्री से • Team BV ${inr2(t.tbv)}${t.eq?` • 🤝 बराबरी Bonus ${inr2(t.eq)} शामिल`:""}</small></div>
      <div class="mc-k k3"><span>🎁 Bonus / Reward</span><b>${inr2(t.cash)}</b><small>${gifts||"नकद bonus इस महीने"}</small></div></div>
    <div class="mc-sum"><span>${mNameH(t.month)} की कमाई: <b>${inr2(t.gross)}</b></span><span>TDS ${t.tdsPct}%: <b>−${inr2(t.tds)}</b></span><span class="net">${mNameH(t.month)} Net: <b>${inr2(t.net)}</b></span></div>
    <div class="mc-wal"><div><small>कुल कमाई (सारे महीने)</small><b>${inr2(t.wallet.total!=null?t.wallet.total:(t.wallet.earned+t.wallet.thisMonth+(t.wallet.bonus||0)))}</b><small>पिछले महीने ${inr2(t.wallet.earned+(t.wallet.bonus||0))} + इस महीने ${inr2(t.wallet.thisMonth)}</small></div><div><small>मिल चुका</small><b>${inr2(t.wallet.paid)}</b>${t.wallet.paidNet!=null&&t.wallet.paid?`<small>bank में ${inr2(t.wallet.paidNet)} + TDS ${inr2(t.wallet.paidTds)}</small>`:""}</div>${t.wallet.pending?`<div><small>⏳ माँगा हुआ (Pending)</small><b>${inr2(t.wallet.pending)}</b><small>जल्द bank में</small></div>`:""}<div class="bal"><small>बाकी रकम</small><b>${inr2(t.wallet.balance)}</b>${t.wallet.balanceNet!=null?`<small>TDS के बाद ≈ ${inr2(t.wallet.balanceNet)} मिलेंगे${t.wallet.pending?` • इसमें Pending ${inr2(t.wallet.pending)} शामिल`:""}</small>`:""}</div></div>
    <p class="small muted" style="margin:6px 2px 0">हिसाब: कुल कमाई − मिल चुका = बाकी रकम। TDS सिर्फ़ एक बार, पैसे भेजते समय कटता है।</p>
    <div class="mc-g2" style="margin-top:12px"><div class="mc-box"><h4>🏦 पैसे निकालें (Withdrawal)</h4><p class="small">बाकी रकम में से कम से कम ₹100 माँग सकते हैं। ${t.kyc?"KYC ✓ — माँग कभी भी भेजें • 🏦 <b>हर सोमवार पूरी रकम</b> (TDS 2% कटकर) सीधे आपके bank में • भेजते ही WhatsApp पर UTR।":"⚠️ पहले नीचे KYC (PAN + Bank) पूरा करें।"}</p><form class="mc-f" id="mcWd" style="margin-top:8px"><div class="mc-row2"><div><label for="wdAmt">रकम (₹)</label><input id="wdAmt" type="number" inputmode="numeric" min="100" step="1" max="${Math.floor(t.wallet.free!=null?t.wallet.free:t.wallet.balance)}" placeholder="जैसे 100" required></div><div style="display:flex;align-items:flex-end"><button class="btn btn-orange btn-block" id="wdGo" type="submit"${t.kyc&&(t.wallet.free!=null?t.wallet.free:t.wallet.balance)>=100?"":" disabled"}>माँग भेजें</button></div></div><p class="mc-msg" id="wdMsg" role="status"></p></form><div id="wdList" class="small muted"></div></div>
      <div class="mc-box"><h4>🔑 PIN बदलें</h4><p class="small">Company से मिला नया PIN बदलकर अपना PIN रखें। किसी को न बताएँ।</p><form class="mc-f" id="mcPinF" style="margin-top:8px"><div class="mc-row2"><div><label for="npin1">नया PIN</label><input id="npin1" type="password" inputmode="numeric" pattern="[0-9]{4,6}" maxlength="6" autocomplete="new-password" required></div><div><label for="npin2">दोबारा लिखें</label><input id="npin2" type="password" inputmode="numeric" pattern="[0-9]{4,6}" maxlength="6" autocomplete="new-password" required></div></div><button class="btn btn-ghost btn-block" id="npGo" type="submit" style="margin-top:8px">PIN बदलें</button><p class="mc-msg" id="npMsg" role="status"></p></form></div></div>
    <div class="mc-g2" style="margin-top:12px"><div class="mc-box"><h4>📈 Green ID और Level</h4>${mcBar("🟢 Green के लिए अपनी BV",t.pbv,t.greenMin)}<p class="small">🪜 आप <b>Level ${t.level}</b> पर हैं — अपनी बिक्री पर <b>${t.pct}%</b>, और team की बिक्री पर अपने और नीचे वाले Partner के Level का फ़र्क़।</p>${t.next?mcBar("⬆️ Level "+t.next.level+" के लिए इस महीने की कुल बिक्री (अपनी + team)",t.volume||0,t.next.need||0)+`<p class="small muted">लक्ष्य पूरा होने पर अगले महीने की 1 तारीख़ को Level ${t.next.level} (अपनी बिक्री पर ${t.next.pct}%)। Level कभी घटता नहीं।${t.selfAmt>t.selfCap?` आपकी अपनी ख़रीद ${inr2(t.selfAmt)} में से ${inr2(t.selfCap)} ही promotion में गिनी गई।`:""}</p>`:'<p class="small">👑 आप सबसे ऊँचे Level (24) पर हैं!</p>'}</div>
      <div class="mc-box"><h4>🧾 Level-wise कमीशन</h4>${lvRows?`<div class="mc-tw"><table class="mc-t"><thead><tr><th>Level</th><th class="r">%</th><th class="r">रकम</th></tr></thead><tbody>${lvRows}</tbody></table></div>`:'<p class="mc-empty">इस महीने अभी कोई commission नहीं बना।</p>'}</div></div>
    <div class="mc-box"><h4>🛒 मेरी ID से हुई बिक्री — ${mNameH(t.month)}</h4>${sales?`<div class="mc-tw"><table class="mc-t wide"><thead><tr><th>तारीख़</th><th>Item</th><th class="r">रकम</th><th class="r">BV</th><th>Status</th><th class="r">मेरा कमीशन</th></tr></thead><tbody>${sales}</tbody></table></div>`:'<p class="mc-empty">इस महीने आपकी ID से अभी कोई बिक्री नहीं। नीचे का link customers को भेजिए।</p>'}</div>
    ${(t.teamSales&&t.teamSales.length)?`<div class="mc-box" style="margin-top:12px"><h4>👥 Team की बिक्री से मेरी कमाई — ${mNameH(t.month)}</h4><div class="mc-tw"><table class="mc-t"><thead><tr><th>तारीख़</th><th>किसने • क्या बेचा</th><th class="r">मेरी कमाई</th></tr></thead><tbody>${t.teamSales.map(o=>`<tr><td class="num">${esc(String(o.date).slice(5))}</td><td><b>${esc(o.by)}</b><br><small class="muted">${esc(o.item)} • ${inr2(o.amount)} • BV ${inr2(o.bv)}${o.kind!=="Team"?" • "+esc(o.kind):""}</small></td><td class="r"><b>${inr2(o.mine)}</b></td></tr>`).join("")}</tbody></table></div><p class="small muted" style="margin-top:6px">कुल Team कमाई: <b>${inr2(t.teamSales.reduce((a,o)=>a+o.mine,0))}</b></p></div>`:""}
    <div class="mc-g2" style="margin-top:12px"><div class="mc-box"><h4>👥 मेरी Direct Team (${t.directTeam.length}) • कुल team ${t.teamCount}</h4>${team?`<div class="mc-tw"><table class="mc-t"><thead><tr><th>ID</th><th>नाम</th><th>Level</th><th class="r">इस महीने BV</th><th></th></tr></thead><tbody>${team}</tbody></table></div>`:'<p class="mc-empty">अभी team में कोई नहीं।</p>'}</div>
      <div class="mc-box"><h4>🏆 Rewards की प्रगति</h4>${rw}</div></div>
    ${t.payouts.length?`<div class="mc-box"><h4>🏦 मिले हुए Payouts</h4><div class="mc-tw"><table class="mc-t wide"><thead><tr><th>तारीख़</th><th class="r">कुल</th><th class="r">TDS</th><th class="r">Bank में</th><th>Ref</th></tr></thead><tbody>${t.payouts.map(y=>`<tr><td class="num">${esc(y.date)}</td><td class="r">${inr2(y.gross)}</td><td class="r">${inr2(y.tds)}</td><td class="r"><b>${inr2(y.net)}</b></td><td>${esc(y.ref)}</td></tr>`).join("")}</tbody></table></div></div>`:""}
    ${t.level>1?`<div class="mc-box"><h4>➕ नया Partner जोड़ें — अपनी पसंद के Level पर</h4><p class="small muted" style="margin-bottom:8px">आप Level 1 से Level ${t.level-1} तक किसी भी Level पर जोड़ सकते हैं। उनकी बिक्री पर उनके Level तक का हिस्सा उन्हें, और बीच के Levels का फ़र्क़ आपको मिलेगा। Joining मुफ़्त है।</p>
      <form class="mc-add" id="mcAdd"><div><label for="maName">पूरा नाम</label><input id="maName" maxlength="60" required></div><div><label for="maMob">Mobile</label><input id="maMob" type="tel" inputmode="numeric" maxlength="10" required></div><div><label for="maCity">शहर</label><input id="maCity" maxlength="40"></div><div><label for="maEmail">Email (वैकल्पिक)</label><input id="maEmail" type="email" inputmode="email" maxlength="120" placeholder="naam@gmail.com"></div>
      <div class="full"><label for="maLvl">किस Level पर जोड़ें?</label><select id="maLvl">${addOpts}</select></div><div><label for="maPin">उनका PIN (4–6 अंक)</label><input id="maPin" type="password" inputmode="numeric" maxlength="6" required></div><div style="grid-column:span 2"><button class="btn btn-primary btn-block" type="submit" id="maGo">Partner जोड़ें</button></div></form><p class="mc-msg" id="maMsg"></p></div>`:`<div class="mc-box"><h4>➕ नया Partner जोड़ें</h4><p class="small muted">Level 1 पर आप अपने referral link से नए Partner जोड़ सकते हैं (वे Level 1 पर जुड़ेंगे)। Level बढ़ने पर आप उन्हें ऊँचे Level पर जोड़ पाएँगे।</p></div>`}
    <div class="mc-box"><h4>🔗 मेरा Referral link</h4><div class="mc-ref"><code data-noi18n="1" id="mcLink">${esc(link)}</code><button class="btn btn-ghost btn-sm" id="mcCopy">Copy</button><a class="btn btn-wa btn-sm" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent("HITARTHI के courses और books देखें — मेरी Partner ID "+t.id+" से: "+link)}">WhatsApp पर भेजें</a></div><p class="small muted" style="margin-top:6px">इस link से कोई भी course, book या membership ख़रीदे — आपकी ID अपने-आप लग जाएगी और payment मिलान होते ही commission आप और आपके seniors में बँट जाएगा।</p></div>`;
  $("#mcLogin").hidden=true;d.hidden=false;
  $("#mcOut").onclick=mcLogout;$("#mcRe").onclick=()=>{const b=$("#mcRe");b.textContent="⏳";mcLoad(t.month,true);};$("#mcMonth").onchange=e=>mcLoad(e.target.value);
  $("#mcCopy").onclick=()=>{try{navigator.clipboard.writeText(link).then(()=>toast("Link copy हो गया"),()=>toast(link));}catch(e){toast(link);}};
  d.querySelectorAll("[data-raise]").forEach(sel=>sel.addEventListener("change",async()=>{const L=+sel.value;if(!L)return;const id=sel.dataset.raise;
    if(!confirm(id+" का Level "+L+" करें? यह वापस घटाया नहीं जा सकता। उनकी बिक्री पर आपका हिस्सा कम हो जाएगा।")){sel.value="";return;}
    if(HB.demo){const m=t.directTeam.find(x=>x.id===id);if(m)m.level=L;toast("नमूना: "+id+" अब Level "+L+" पर");mcRender(t);return;}
    try{const r=await hbCall("setlevel",{id:HB.id,pin:HB.pin,target:id,level:L});toast(r&&r.ok?r.msg:(r&&r.err)||"Level नहीं बदला");if(r&&r.ok)mcLoad(t.month);else sel.value="";}catch(e){toast("Server से जुड़ नहीं पाए");sel.value="";}}));
  const af=$("#mcAdd");if(af)af.addEventListener("submit",async e=>{e.preventDefault();const msg=$("#maMsg");const q={name:$("#maName").value.trim(),mobile:$("#maMob").value.replace(/\D/g,""),city:$("#maCity").value.trim(),newpin:$("#maPin").value.trim(),level:+$("#maLvl").value,email:($("#maEmail")?$("#maEmail").value.trim():"")};
    const bad=x=>{msg.className="mc-msg err";msg.textContent=x;};
    if(q.name.length<2)return bad("पूरा नाम लिखें");if(q.mobile.length!==10)return bad("10 अंकों का mobile नंबर लिखें");if(!/^\d{4,6}$/.test(q.newpin))return bad("PIN 4–6 अंकों का रखें");if(q.email&&!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(q.email))return bad("Email सही लिखें — या खाली छोड़ दें");
    if(HB.demo){t.directTeam.push({id:"HT"+(1100+t.directTeam.length),name:q.name,bv:0,green:false,level:q.level});t.teamCount++;toast("नमूना: "+q.name+" Level "+q.level+" पर जुड़ गए");mcRender(t);return;}
    const b=$("#maGo");b.disabled=true;b.textContent="जोड़ रहे हैं…";
    try{const r=await hbCall("add",Object.assign({id:HB.id,pin:HB.pin},q));if(r&&r.ok){toast(r.msg);mcLoad(t.month);}else bad((r&&r.err)||"नहीं जुड़ पाए");}catch(err){bad("Server से जुड़ नहीं पाए");}finally{b.disabled=false;b.textContent="Partner जोड़ें";}});
  $("#mcIdc").onclick=()=>openIdCard(t);
  const wdf=$("#mcWd");if(wdf){const wm=$("#wdMsg"),wl=$("#wdList");
    const loadWd=async()=>{if(HB.demo||!HB_API)return;try{const r=await hbCall("mywd",{id:HB.id,pin:HB.pin});if(r&&r.ok&&r.list.length)wl.innerHTML="<b>पिछली माँगें:</b> "+r.list.map(x=>{const st=/partly/i.test(x.status)?"आधा मिला":/paid/i.test(x.status)?"✅ मिल गया":/reject/i.test(x.status)?"❌ नहीं":"⏳ Pending";const nt=/paid/i.test(x.status)&&x.note?` <small class="muted">${esc(x.note.replace(/^UTR\s*/,"UTR "))}</small>`:"";return `${esc(x.date)} — ₹${x.amount} (${st})${nt}`;}).join(" • ");}catch(e){}};loadWd();
    wdf.addEventListener("submit",async e=>{e.preventDefault();const amt=Math.floor(+$("#wdAmt").value||0);wm.className="mc-msg";
      if(amt<100){wm.className="mc-msg err";wm.textContent="कम से कम ₹100";return;}if(amt>t.wallet.balance){wm.className="mc-msg err";wm.textContent="बाकी रकम से ज़्यादा नहीं";return;}
      if(HB.demo){wm.textContent="नमूना: माँग दर्ज हो गई";return;}
      const b=$("#wdGo");b.disabled=true;try{const r=await hbCall("withdraw",{id:HB.id,pin:HB.pin,amount:amt});wm.className="mc-msg"+(r&&r.ok?" ok":" err");wm.textContent=(r&&(r.msg||r.err))||"माँग दर्ज नहीं हुई";if(r&&r.ok)loadWd();}catch(err){wm.className="mc-msg err";wm.textContent="Server से जुड़ नहीं पाए";}finally{b.disabled=false;}});}
  const npf=$("#mcPinF");if(npf)npf.addEventListener("submit",async e=>{e.preventDefault();const a1=$("#npin1").value.trim(),a2=$("#npin2").value.trim(),m=$("#npMsg");m.className="mc-msg err";
    if(!/^\d{4,6}$/.test(a1)){m.textContent="PIN 4–6 अंक का";return;}if(a1!==a2){m.textContent="दोनों PIN एक जैसे नहीं";return;}
    if(HB.demo){m.className="mc-msg";m.textContent="नमूना: PIN बदल गया";return;}
    const b=$("#npGo");b.disabled=true;try{const r=await hbCall("pinchange",{id:HB.id,pin:HB.pin,newpin:a1});m.className="mc-msg"+(r&&r.ok?" ok":" err");m.textContent=(r&&(r.msg||r.err))||"PIN नहीं बदला";if(r&&r.ok){HB.pin=a1;npf.reset();}}catch(err){m.textContent="Server से जुड़ नहीं पाए";}finally{b.disabled=false;}});
    {const lb=$("#mcLib");if(lb)lb.onclick=()=>{if(window.mlPartnerLogin)mlPartnerLogin(HB.id,HB.pin);else location.hash="library";};}
  const kg=$("#mcKycGo");if(kg)kg.onclick=()=>{const bx=$("#mcKycBox");if(bx){bx.scrollIntoView({behavior:"smooth",block:"center"});$("#kyPan").focus();}};
  $("#mcPhoto").addEventListener("change",async e=>{const f=e.target.files[0];if(!f)return;try{const du=await photoData(f);if(HB.demo){t.photo=du;mcRender(t);toast("नमूना: photo लग गई");return;}
    const r=await hbCall("photo",{id:HB.id,pin:HB.pin,photo:du});toast(r&&r.ok?r.msg:(r&&r.err)||"Photo नहीं लगी");if(r&&r.ok){try{localStorage.removeItem("hb_ph_"+t.id);}catch(e){}t.photo=du;t.hasPhoto=true;t.photoV="new";mcRender(t);}}catch(err){toast("Photo नहीं पढ़ पाए — दूसरी photo चुनें");}});
  let kyPhoto="";const kp=$("#kyPhoto");if(kp)kp.addEventListener("change",async e=>{const f=e.target.files[0];if(!f)return;try{kyPhoto=await photoData(f);$("#kyPv").innerHTML=`<img loading="lazy" decoding="async" src="${kyPhoto}" alt="">`;}catch(err){toast("Photo नहीं पढ़ पाए");}});
  {const cf=$("#mcConF");if(cf){const msg=(x,er)=>{const m=$("#mcConMsg");m.className="mc-msg"+(er?" err":"");m.textContent=x;};
    if(HB_API&&!HB.demo)hbCall("mycontact",{id:HB.id,pin:HB.pin}).then(r=>{if(r&&r.ok){$("#mcConEm").value=r.email||"";$("#mcConAlt").value=r.alt||"";$("#mcConNow").textContent=r.email?"• "+r.email:"• अभी email नहीं जुड़ा";if(!r.email)$("#mcCon").open=true;}}).catch(()=>{});
    cf.addEventListener("submit",async e=>{e.preventDefault();const em=$("#mcConEm").value.trim().toLowerCase(),alt=$("#mcConAlt").value.replace(/\D/g,"");
      if(em&&!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/.test(em))return msg("Email सही लिखें",true);if(alt&&alt.length!==10)return msg("नंबर 10 अंकों का लिखें",true);if(!em&&!alt)return msg("Email या नंबर लिखें",true);
      if(HB.demo||!HB_API)return msg("नमूना: सेव हो गया");
      try{const r=await hbCall("contact",{id:HB.id,pin:HB.pin,email:em,alt});if(r&&r.ok){msg(r.msg);$("#mcConNow").textContent=em?"• "+em:"";}else msg((r&&r.err)||"सेव नहीं हुआ",true);}catch(x){msg("Server से जुड़ नहीं पाए",true);}});}}
  const kf=$("#mcKyc");if(kf)kf.addEventListener("submit",async e=>{e.preventDefault();const m=$("#kyMsg");const q={pan:$("#kyPan").value.trim().toUpperCase(),account:$("#kyAcc").value.replace(/\s+/g,""),ifsc:$("#kyIfsc").value.trim().toUpperCase(),holder:$("#kyHolder").value.trim(),photo:kyPhoto,email:$("#kyEmail").value.trim().toLowerCase(),alt:$("#kyAlt").value.replace(/\D/g,"")};
    const bad=x=>{m.className="mc-msg err";m.textContent=x;};
    if(!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(q.pan))return bad("PAN सही लिखें (जैसे ABCDE1234F)");if(!/^\d{9,18}$/.test(q.account))return bad("Bank account नंबर सही लिखें");if(!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(q.ifsc))return bad("IFSC सही लिखें");if(q.holder.length<2)return bad("Account holder का नाम लिखें");if(!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/.test(q.email))return bad("Email सही लिखें (जैसे naam@gmail.com)");if(q.alt&&q.alt.length!==10)return bad("दूसरा नंबर 10 अंकों का लिखें");if(!q.photo&&!t.photo)return bad("अपनी photo भी लगाएँ");
    if(HB.demo){t.kycStatus="Pending";if(q.photo)t.photo=q.photo;mcRender(t);toast("नमूना: KYC जमा हो गया");return;}
    const b=$("#kyGo");b.disabled=true;b.textContent="जमा हो रहा है…";
    try{const r=await hbCall("kyc",Object.assign({id:HB.id,pin:HB.pin},q));if(r&&r.ok){toast(r.msg);try{if(q.photo)localStorage.removeItem("hb_ph_"+t.id);}catch(e){}if(q.photo&&HB.t)HB.t.photo="";mcLoad(t.month,true);}else bad((r&&r.err)||"KYC जमा नहीं हुआ");}catch(err){bad("Server से जुड़ नहीं पाए");}finally{b.disabled=false;b.textContent="KYC जमा करें";}});}
function ptGate(on){const p=$("#ptPrivate"),l=$("#ptLock");if(p)p.hidden=!on;if(l)l.hidden=!!on;}
function mcLogout(){ptGate(false);HB.t=null;HB.pin="";HB.demo=false;$("#mcDash").hidden=true;$("#mcDash").innerHTML="";$("#mcLogin").hidden=false;$("#mcPin").value="";}
async function mcLoad(month,fresh){if(HB.demo){mcRender(hbDemo(month));return;}
  const msg=$("#mcMsg");try{const r=await hbCall("statement",fresh?{id:HB.id,pin:HB.pin,month,fresh:1}:{id:HB.id,pin:HB.pin,month});if(r&&r.ok){if(HB.t&&HB.t.photo&&!r.photo)r.photo=HB.t.photo;mcRender(r);if(fresh)toast("✓ ताज़ा हिसाब आ गया");}else{mcLogout();msg.className="mc-msg err";msg.textContent=(r&&r.err)||"ID या PIN गलत है";}}
  catch(e){toast("Internet या server की दिक़्क़त — दोबारा कोशिश करें");}}
$("#mcForm").addEventListener("submit",async e=>{e.preventDefault();const id=$("#mcId").value.trim().toUpperCase(),pin=$("#mcPin").value.trim(),msg=$("#mcMsg");
  if(!/^[A-Z0-9]{3,12}$/.test(id)||!/^\d{4,6}$/.test(pin)){msg.className="mc-msg err";msg.textContent="सही Partner ID और 4–6 अंक का PIN डालें";return;}
  if(!HB_API){msg.className="mc-msg err";msg.textContent="Live system अभी चालू नहीं हुआ है — तब तक नमूना Dashboard देख सकते हैं।";return;}
  const b=$("#mcGo");b.disabled=true;b.textContent="खुल रहा है…";msg.textContent="";
  try{const r=await hbCall("statement",{id,pin});if(r&&r.ok){HB.id=id;HB.pin=pin;HB.demo=false;try{localStorage.setItem("hb_pid",id);}catch(x){}mcRender(r);ptGate(true);track("partner_login",{});$("#mc").scrollIntoView({behavior:"smooth",block:"start"});}else{msg.className="mc-msg err";msg.textContent=(r&&r.err)||"ID या PIN गलत है";}}
  catch(err){msg.className="mc-msg err";msg.textContent="Server से जुड़ नहीं पाए — internet जाँचकर दोबारा कोशिश करें।";}
  finally{b.disabled=false;b.textContent="मेरा हिसाब खोलें →";}});
$("#mcDemoBtn").onclick=()=>{HB.demo=true;mcRender(hbDemo());$("#mc").scrollIntoView({behavior:"smooth",block:"start"});};
(function(){const r=getRef();if(r)$("#mjSp").value=r;})();
/* Partner ID इसी mobile/computer पर याद रहे — दोबारा सिर्फ़ PIN डालना पड़े */
(function(){let s="";try{s=localStorage.getItem("hb_pid")||"";}catch(e){}if(!s)return;
  [["#mcId","#mcPin"],["#mlPid","#mlPin"]].forEach(([a,b])=>{const i=$(a);if(!i||i.value)return;i.value=s;
    const x=document.createElement("button");x.type="button";x.className="mc-link pid-chg";x.textContent="दूसरी ID से login?";
    x.onclick=()=>{try{localStorage.removeItem("hb_pid");Object.keys(localStorage).filter(k=>k.startsWith("hb_ph_")).forEach(k=>localStorage.removeItem(k));}catch(e){}document.querySelectorAll(".pid-chg").forEach(y=>y.remove());["#mcId","#mlPid"].forEach(k=>{const z=$(k);if(z)z.value="";});i.focus();};
    i.insertAdjacentElement("afterend",x);const pinEl=$(b);if(pinEl)pinEl.setAttribute("placeholder","सिर्फ़ PIN डालें");});})();
$("#mjForm").addEventListener("submit",async e=>{e.preventDefault();const msg=$("#mjMsg"),ok=$("#mjOk");ok.innerHTML="";
  const d={name:$("#mjName").value.trim(),mobile:$("#mjMob").value.replace(/\D/g,""),sponsor:$("#mjSp").value.trim().toUpperCase(),city:$("#mjCity").value.trim(),pin:$("#mjPin").value.trim(),email:($("#mjEmail")?$("#mjEmail").value.trim():"")};
  const bad=t=>{msg.className="mc-msg err";msg.textContent=t;};
  if(d.name.length<2)return bad("कृपया पूरा नाम लिखें");if(d.mobile.length!==10)return bad("10 अंकों का mobile नंबर लिखें");
  if(d.email&&!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(d.email))return bad("Email सही लिखें (जैसे naam@gmail.com) — या खाली छोड़ दें");if(!/^\d{4,6}$/.test(d.pin))return bad("PIN 4 से 6 अंकों का रखें");if(d.pin!==$("#mjPin2").value.trim())return bad("दोनों PIN एक जैसे नहीं हैं");
  if(!HB_API){location.href="https://wa.me/"+WA+"?text="+encodeURIComponent(`Namaste HITARTHI, mujhe Partner banna hai.\nNaam: ${d.name}\nMobile: ${d.mobile}\nSponsor ID: ${d.sponsor||"-"}\nShahar: ${d.city||"-"}`);return;}
  const b=$("#mjGo");b.disabled=true;b.textContent="ID बन रही है…";msg.textContent="";
  try{const pf=$("#mjPhoto").files[0];if(pf){try{d.photo=await photoData(pf);}catch(e){}}
    const r=await hbCall("join",d);if(r&&r.ok){msg.className="mc-msg ok";msg.textContent=r.msg;const link=refLink(r.id);
      ok.innerHTML=`<div class="mc-new">🎉 आपकी Partner ID: <b class="num">${esc(r.id)}</b><br><small>इसे और अपना PIN लिखकर रख लें। आपका link:</small><br><code data-noi18n="1">${esc(link)}</code></div>`;
      $("#mcId").value=r.id;$("#mjForm").querySelectorAll("input").forEach(i=>{if(i.id!=="mjSp")i.value="";});track("partner_join",{});}
    else bad((r&&r.err)||"ID नहीं बन पाई");}
  catch(err){bad("Server से जुड़ नहीं पाए — दोबारा कोशिश करें।");}
  finally{b.disabled=false;b.textContent="Partner ID बनाइए";}});


/* ---------- PHOTO • ID CARD • VERIFY ---------- */
function photoData(file){return new Promise((ok,no)=>{const fr=new FileReader();fr.onerror=no;fr.onload=()=>{const im=new Image();im.onerror=no;im.onload=()=>{const S=360,c=document.createElement("canvas");c.width=S;c.height=S;const g=c.getContext("2d");
  const m=Math.min(im.width,im.height);g.fillStyle="#fff";g.fillRect(0,0,S,S);g.drawImage(im,(im.width-m)/2,(im.height-m)/2.6,m,m,0,0,S,S);ok(c.toDataURL("image/jpeg",.8));};im.src=fr.result;};fr.readAsDataURL(file);});}
const loadImg=src=>new Promise(ok=>{if(!src)return ok(null);const im=new Image();im.onload=()=>ok(im);im.onerror=()=>ok(null);im.src=src;});
function idValid(j){if(!j)return "";const d=new Date(j+"T00:00:00");if(isNaN(d))return "";const now=new Date();let t=new Date(d.getFullYear()+1,d.getMonth(),d.getDate());while(t<now)t=new Date(t.getFullYear()+1,t.getMonth(),t.getDate());return t.getFullYear()+"-"+String(t.getMonth()+1).padStart(2,"0")+"-"+String(t.getDate()).padStart(2,"0");}
function verifyURL(id){return refLink(id).replace("?ref=","?verify=");}
async function drawIdCard(t){
  const W=1012,H=638,GAP=36,c=document.createElement("canvas");c.width=W;c.height=H*2+GAP;const g=c.getContext("2d");
  if(!g.roundRect)g.roundRect=function(x,y,w,h){this.rect(x,y,w,h);};try{await document.fonts.ready;}catch(e){}
  const F=(w,sz)=>`${w} ${sz}px "Baloo 2","Mukta","Nirmala UI","Noto Sans Devanagari",sans-serif`;
  const logoSrc=(document.querySelector("#logo image")||{getAttribute:()=>null}).getAttribute("href");
  const [logo,ph,qr]=await Promise.all([loadImg(logoSrc),loadImg(t.photo),loadImg("data:image/svg+xml;charset=utf-8,"+encodeURIComponent(qrSVG(verifyURL(t.id),340,"#0B1A4A")))]);
  g.fillStyle="#fff";g.fillRect(0,0,W,c.height);
  /* FRONT */
  const card=(y0)=>{g.save();g.beginPath();g.roundRect(0,y0,W,H,34);g.clip();};
  card(0);g.fillStyle="#FFFFFF";g.fillRect(0,0,W,H);
  let gr=g.createLinearGradient(0,0,W,0);gr.addColorStop(0,"#0B1A4A");gr.addColorStop(.6,"#0057D9");gr.addColorStop(1,"#00A6F0");g.fillStyle=gr;g.fillRect(0,0,W,150);
  g.fillStyle="rgba(255,255,255,.08)";g.beginPath();g.arc(W-60,20,170,0,7);g.fill();
  if(logo){g.fillStyle="#fff";g.beginPath();g.arc(88,75,58,0,7);g.fill();g.drawImage(logo,34,21,108,108);}
  g.fillStyle="#fff";g.font=F(800,50);g.fillText("HITARTHI",165,72);g.font=F(600,24);g.fillStyle="#D6E4FF";g.fillText("Education & Skill Development Pvt. Ltd.",167,110);
  g.fillStyle="#FF8C00";g.beginPath();g.roundRect(W-300,46,262,54,27);g.fill();g.fillStyle="#fff";g.font=F(800,26);g.textAlign="center";g.fillText("PARTNER ID CARD",W-169,82);g.textAlign="left";
  /* photo */
  g.fillStyle="#FF8C00";g.beginPath();g.roundRect(42,182,236,288,22);g.fill();g.save();g.beginPath();g.roundRect(50,190,220,272,16);g.clip();
  if(ph){const m=Math.min(ph.width,ph.height*220/272);const sw=m,sh=m*272/220;g.drawImage(ph,(ph.width-sw)/2,(ph.height-sh)/3,sw,sh,50,190,220,272);}else{g.fillStyle="#E3ECFE";g.fillRect(50,190,220,272);g.fillStyle="#0057D9";g.font=F(800,120);g.textAlign="center";g.fillText((t.name||"?").trim().charAt(0),160,370);g.textAlign="left";g.font=F(600,20);g.fillText("Photo लगाएँ",110,440);}
  g.restore();
  /* details */
  const nm=(t.name||"").length>20?(t.name||"").slice(0,20)+"…":t.name||"";g.fillStyle="#0B1A4A";g.font=F(800,46);g.fillText(nm,310,228);
  g.fillStyle="#FF8C00";g.font=F(800,40);g.fillText(t.id,310,282);
  const row=(k,v,y)=>{g.fillStyle="#7C83A6";g.font=F(600,22);g.fillText(k,312,y);g.fillStyle="#141A3A";g.font=F(700,26);g.fillText(v,470,y);};
  const dmy=d=>d?d.split("-").reverse().join("-"):"—";
  row("Level",`Level ${t.level} • ${t.pct}%`,322);row("शहर",t.city||"—",358);row("Joined",dmy(t.joined),394);
  g.fillStyle="#7C83A6";g.font=F(600,22);g.fillText("Valid till",312,430);g.fillStyle="#C2410C";g.font=F(800,26);g.fillText(dmy(t.validTill||idValid(t.joined)),470,430);
  row("Mobile",t.mobile||"—",466);row("KYC",t.kycStatus==="Approved"||t.kyc?"✓ Verified":t.kycStatus==="Pending"?"जाँच में":"बाकी",502);
  if(qr){g.fillStyle="#fff";g.fillRect(806,300,176,176);g.drawImage(qr,812,306,164,164);g.fillStyle="#48507A";g.font=F(600,18);g.textAlign="center";g.fillText("Scan करके जाँचें",894,498);g.textAlign="left";}
  gr=g.createLinearGradient(0,0,W,0);gr.addColorStop(0,"#FF8C00");gr.addColorStop(1,"#FFB020");g.fillStyle=gr;g.fillRect(0,H-74,W,74);
  g.fillStyle="#1B1F3B";g.font=F(800,26);g.textAlign="center";g.fillText("www.hitarthi.com  •  WhatsApp 94537 17356",W/2,H-28);g.textAlign="left";
  g.restore();g.strokeStyle="#DAE1F1";g.lineWidth=2;g.beginPath();g.roundRect(1,1,W-2,H-2,34);g.stroke();
  /* BACK */
  const y0=H+GAP;card(y0);gr=g.createLinearGradient(0,y0,W,y0+H);gr.addColorStop(0,"#0B1A4A");gr.addColorStop(1,"#2A1060");g.fillStyle=gr;g.fillRect(0,y0,W,H);
  g.fillStyle="rgba(255,196,77,.12)";g.beginPath();g.arc(W-80,y0+H-40,220,0,7);g.fill();
  if(logo){g.globalAlpha=.12;g.drawImage(logo,W/2-170,y0+150,340,340);g.globalAlpha=1;}
  g.fillStyle="#FFC44D";g.font=F(800,34);g.fillText("नियम और जानकारी",54,y0+80);
  const L=["यह card HITARTHI Partner की पहचान है — इसे किसी और को न दें।","Card की असलियत QR scan करके या www.hitarthi.com पर जाँचें।","HITARTHI कभी joining fee, OTP या UPI PIN नहीं माँगता।","Valid till की तारीख़ तक मान्य — ID Active रहने पर हर साल अपने-आप नवीनीकरण।","मिलने पर कृपया HITARTHI को लौटाएँ या WhatsApp करें।"];
  g.fillStyle="#E5E9FA";g.font=F(600,25);L.forEach((x,k)=>{g.fillText("•  "+x,58,y0+140+k*52);});
  g.strokeStyle="rgba(255,255,255,.4)";g.beginPath();g.moveTo(W-330,y0+H-110);g.lineTo(W-60,y0+H-110);g.stroke();g.fillStyle="#C9D2F5";g.font=F(600,22);g.textAlign="center";g.fillText("Authorised Signatory",W-195,y0+H-78);
  g.textAlign="left";g.fillStyle="#fff";g.font=F(700,24);g.fillText("Helpline: +91 94537 17356",54,y0+H-78);g.fillStyle="#C9D2F5";g.font=F(600,20);g.fillText("HITARTHI Education & Skill Development Pvt. Ltd. • From Learning to Earning",54,y0+H-40);
  g.restore();return c;}
async function openIdCard(t){const M=$("#idm");M.innerHTML=`<div class="idm-box" data-noi18n="1"><button class="idm-x" aria-label="बंद करें">✕</button><h3>🪪 ${esc(t.name)} — Partner ID Card</h3><p class="small muted">${t.photo?"":"⚠️ Photo नहीं लगी है — dashboard में \"📷 Photo लगाएँ\" से लगाइए, card पर अपने-आप आ जाएगी। "}आगे और पीछे दोनों तरफ़ एक ही image में हैं — download करके print करें (PVC card size 85.6 × 54 mm)।</p><p class="small" id="idWait">Card बन रहा है…</p></div>`;M.hidden=false;
  M.onclick=e=>{if(e.target===M||e.target.closest(".idm-x"))M.hidden=true;};
  try{const c=await drawIdCard(t);const url=c.toDataURL("image/png");const box=M.querySelector(".idm-box");$("#idWait").remove();
    box.insertAdjacentHTML("beforeend",`<img loading="lazy" decoding="async" class="idc" src="${url}" alt="ID card"><div class="idm-acts"><a class="btn btn-orange" download="HITARTHI-ID-${esc(t.id)}.png" href="${url}">⬇️ ID Card Download करें</a><button class="btn btn-ghost" id="idPrint">🖨️ Print</button><a class="btn btn-wa" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent("मैं HITARTHI Partner हूँ — ID "+t.id+"। जाँच करें: "+verifyURL(t.id))}">WhatsApp पर भेजें</a></div>`);
    $("#idPrint").onclick=()=>{const w=window.open("","_blank");if(!w){toast("Print के लिए popup allow करें, या Download करके print करें");return;}w.document.write(`<title>${esc(t.id)}</title><style>@page{margin:10mm}body{margin:0;text-align:center}img{width:85.6mm;height:auto}</style><img loading="lazy" decoding="async" src="${url}" onload="setTimeout(()=>print(),300)">`);w.document.close();};}
  catch(e){$("#idWait").textContent="Card नहीं बन पाया — दोबारा कोशिश करें।";}}
/* ?verify=HT1007 — कोई भी ID की असलियत जाँचे */
(function(){let id="";try{id=(new URLSearchParams(location.search).get("verify")||"").trim().toUpperCase();}catch(e){}if(!/^HT\d{3,8}$/.test(id))return;
  const M=$("#idm");M.innerHTML=`<div class="idm-box"><button class="idm-x" aria-label="बंद करें">✕</button><h3>🔍 Partner ID की जाँच — ${esc(id)}</h3><div id="vfOut"><p class="small">जाँच हो रही है…</p></div></div>`;M.hidden=false;
  M.onclick=e=>{if(e.target===M||e.target.closest(".idm-x"))M.hidden=true;};
  const show=v=>{$("#vfOut").innerHTML=v&&v.ok?`<div class="vf-card${v.active?"":" bad"}"><span class="pv">${v.photo?`<img loading="lazy" decoding="async" src="${v.photo}" alt="">`:"👤"}</span><div><b style="font-size:1.25rem">${esc(v.name)}</b><div class="num">${esc(v.id)} • Level ${v.level}</div><div class="small">${esc(v.city||"")} ${v.joined?"• Joined "+esc(v.joined):""} ${v.validTill?"• Valid till "+esc(v.validTill.split("-").reverse().join("-")):""}</div><div style="margin-top:6px">${v.active?'<span class="mc-chip g">✓ असली और Active HITARTHI Partner</span>':'<span class="mc-chip r">⚠️ यह ID अभी बंद है</span>'} ${v.kyc?'<span class="mc-chip g">KYC ✓</span>':'<span class="mc-chip p">KYC बाकी</span>'}</div></div></div>`:`<div class="vf-card bad"><span class="pv">⚠️</span><div><b>${esc((v&&v.err)||"यह ID नहीं मिली")}</b><div class="small">किसी को पैसे देने से पहले +91 94537 17356 पर WhatsApp करके पक्का करें।</div></div></div>`;};
  if(!HB_API){$("#vfOut").innerHTML=`<p class="small">ID जाँच की सुविधा live system चालू होने पर काम करेगी। अभी +91 94537 17356 पर WhatsApp करके पक्का करें।</p>`;return;}
  hbCall("verify",{id}).then(show).catch(()=>show(null));})();
/* =====================================================================
   CONTENT (Google Sheet से) • COURSE PAGE • CERTIFICATE • LMS • PARTNER KIT • LEADERBOARD • SCHOOLS
   ===================================================================== */
const HC={p:null};
function hContent(){if(HC.p)return HC.p;HC.p=(async()=>{if(!HB_API)return {courses:{},reviews:[],training:[]};
  try{const s=sessionStorage.getItem("hc_v1");if(s){const o=JSON.parse(s);if(Date.now()-o.t<6e5)return o.d;}}catch(e){}
  try{const r=await hbCall("content",{});if(r&&r.ok){try{sessionStorage.setItem("hc_v1",JSON.stringify({t:Date.now(),d:r}));}catch(e){}return r;}}catch(e){}
  return {courses:{},reviews:[],training:[]};})();return HC.p;}
const ytThumb=id=>`https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const ytEmbed=id=>`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1&autoplay=1`;
function ytLite(id,title){return `<button type="button" class="yt-lite" data-yt="${esc(id)}" aria-label="${esc(title||"Video चलाएँ")}"><img src="${ytThumb(id)}" alt="" loading="lazy"><span>▶</span></button>`;}
document.addEventListener("click",e=>{const b=e.target.closest("[data-yt]");if(!b)return;const f=document.createElement("iframe");f.src=ytEmbed(b.dataset.yt);f.title=b.getAttribute("aria-label")||"Video";f.allow="autoplay; encrypted-media; picture-in-picture; fullscreen";f.allowFullscreen=true;f.className="yt-frame";b.replaceWith(f);});

/* ---------- Course page: syllabus • 2 मिनट demo video • certificate का नमूना ---------- */
function autoSyl(c){if(typeof HB_CSYL!=="undefined"&&HB_CSYL[c.name])return HB_CSYL[c.name];const d=String(c.dur||""),n=parseFloat(d)||1,wk=/घंटे/.test(d)?0:/हफ़्त/.test(d)?Math.max(1,Math.round(n)):Math.max(2,Math.round(n*4));
  const o=(c.out||[]).slice(0,3);if(!wk)return ["Session 1: "+(o[0]||c.hin),"Session 2: "+(o[1]||"Practice"),"Session 3: "+(o[2]||"सवाल-जवाब"),"Notes + Certificate"];
  const per=Math.max(1,Math.floor((wk-1)/Math.max(1,o.length))),L=[];let w=1;
  o.forEach(x=>{const e=Math.min(wk-1,w+per-1);L.push((e>w?`हफ़्ता ${w}–${e}`:`हफ़्ता ${w}`)+": "+x);w=e+1;});
  if(w<wk)L.push((wk-1>w?`हफ़्ता ${w}–${wk-1}`:`हफ़्ता ${w}`)+": Practice assignments + छोटा project");
  L.push(`हफ़्ता ${wk}: Final Test + HITARTHI Certificate`);return L;}
window.cdEnhance=async function(c){const S=$("#cdSyl"),V=$("#cdVid"),Ce=$("#cdCert");if(!S)return;
  const show=(info)=>{const syl=info&&info.syllabus&&info.syllabus.length?info.syllabus:autoSyl(c);
    S.innerHTML=`<ol class="cd-syl">${syl.map(x=>`<li>${esc(x)}</li>`).join("")}</ol>${info&&info.syllabus&&info.syllabus.length?"":'<p class="small muted">यह मोटा syllabus है — हफ़्ते-दर-हफ़्ते पूरा plan Free Counselling में।</p>'}${info&&info.batch?`<p class="cd-batch">🕒 Batch: <b>${esc(info.batch)}</b></p>`:""}`;
    V.innerHTML=info&&info.video?ytLite(info.video,c.name+" — demo video"):`<div class="cd-vph"><b>🎬</b><span>2 मिनट का demo video जल्द</span><small>तब तक Free Counselling में पूरी जानकारी लें</small></div>`;};
  show(null);
  drawCert({name:"आपका नाम",course:c.name,date:new Date().toISOString().slice(0,10),id:"HC0000000000",grade:"A",sample:true}).then(cv=>{if(!$("#cdCert"))return;const u=cv.toDataURL("image/jpeg",.82);Ce.innerHTML=`<button type="button" class="cd-certb" data-certimg="1"><img loading="lazy" decoding="async" src="${u}" alt="HITARTHI certificate का नमूना"><span>🔍 बड़ा देखें</span></button><p class="small muted">Final test पास करने पर आपके नाम से अपने-आप बनता है • QR से कोई भी असली होने की जाँच कर सकता है।</p>`;});
  const H=await hContent();const info=H.courses&&H.courses[c.name.toLowerCase()];if(info&&$("#cdSyl"))show(info);};
document.addEventListener("click",e=>{const b=e.target.closest("[data-certimg]");if(!b)return;const im=b.querySelector("img");const M=$("#idm");
  M.innerHTML=`<div class="idm-box"><button class="idm-x" aria-label="बंद करें">✕</button><img loading="lazy" decoding="async" src="${im.src}" alt="" style="width:100%;border-radius:10px"></div>`;M.hidden=false;
  M.querySelector(".idm-x").onclick=()=>{M.hidden=true;};});

/* ---------- 🎓 CERTIFICATE (canvas) + QR verify ---------- */
function certURL(id){return refLink("X").replace("?ref=X","?cert="+id);}
/* हस्ताक्षर — असली signature मिलने पर सिर्फ़ यह image बदलें */
const HB_SIG="data:image/png;base64,"+"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";
async function drawCert(c){
  const W=1600,H=1131,SC=2.5,cv=document.createElement("canvas");cv.width=W*SC;cv.height=H*SC;const g=cv.getContext("2d");g.scale(SC,SC);g.imageSmoothingEnabled=true;g.imageSmoothingQuality="high";try{await document.fonts.ready;}catch(e){}
  const F=(w,sz)=>`${w} ${sz}px "Baloo 2","Mukta","Nirmala UI","Noto Sans Devanagari",sans-serif`;
  const logoSrc=(document.querySelector("#logo image")||{getAttribute:()=>null}).getAttribute("href");
  const [logo,qr]=await Promise.all([loadImg(logoSrc),loadImg("data:image/svg+xml;charset=utf-8,"+encodeURIComponent(qrSVG(certURL(c.id),800,"#0B1A4A")))]);
  const bg=g.createLinearGradient(0,0,W,H);bg.addColorStop(0,"#FFFDF6");bg.addColorStop(1,"#FFF6E3");g.fillStyle=bg;g.fillRect(0,0,W,H);
  g.strokeStyle="#0B1A4A";g.lineWidth=18;g.strokeRect(30,30,W-60,H-60);g.strokeStyle="#C9971C";g.lineWidth=4;g.strokeRect(58,58,W-116,H-116);
  [[58,58],[W-58,58],[58,H-58],[W-58,H-58]].forEach(([x,y])=>{g.fillStyle="#C9971C";g.beginPath();g.arc(x,y,14,0,7);g.fill();});
  g.textAlign="center";if(logo)g.drawImage(logo,W/2-70,95,140,140);
  g.fillStyle="#0B1A4A";g.font=F(800,40);g.fillText("HITARTHI Education & Skill Development Pvt. Ltd.",W/2,280);
  g.fillStyle="#7C83A6";g.font=F(600,24);g.fillText("From Learning to Earning • www.hitarthi.com",W/2,318);
  g.fillStyle="#C9971C";g.font=F(800,66);g.fillText("CERTIFICATE OF COMPLETION",W/2,410);
  g.fillStyle="#0057D9";g.font=F(700,34);g.fillText("प्रमाण पत्र",W/2,458);
  g.fillStyle="#48507A";g.font=F(500,30);g.fillText("यह प्रमाणित किया जाता है कि",W/2,530);
  let ns=80;g.font=F(800,ns);while(g.measureText(c.name).width>1150&&ns>40){ns-=4;g.font=F(800,ns);}g.fillStyle="#141A3A";g.fillText(c.name,W/2,625);
  g.strokeStyle="#C9971C";g.lineWidth=2;g.beginPath();g.moveTo(W/2-420,650);g.lineTo(W/2+420,650);g.stroke();
  g.fillStyle="#48507A";g.font=F(500,30);g.fillText("ने HITARTHI का यह course सफलतापूर्वक पूरा किया है",W/2,705);
  let cs=50;g.font=F(800,cs);while(g.measureText(c.course).width>1250&&cs>28){cs-=2;g.font=F(800,cs);}g.fillStyle="#0B1A4A";g.fillText(c.course,W/2,775);
  g.fillStyle="#17A45A";g.font=F(800,32);g.fillText("Grade: "+(c.grade||"A")+(c.marks?"   •   Marks: "+c.marks+(/%$/.test(String(c.marks))?"":"%"):"")+"   •   दिनांक: "+(c.date||""),W/2,822);if(c.sid||c.dur){g.fillStyle="#5B6386";g.font=F(600,24);g.fillText([c.sid?"Student ID: "+c.sid:"",c.dur?"Duration: "+c.dur:""].filter(Boolean).join("   •   "),W/2,860);}
  g.textAlign="left";g.fillStyle="#141A3A";g.font=F(700,26);g.fillText("Certificate ID: "+c.id,110,960);g.fillStyle="#7C83A6";g.font=F(500,22);g.fillText("असली है या नहीं — QR scan करें या",110,996);g.fillText(certURL(c.id).replace(/^https?:\/\//,""),110,1026);
  try{const sg=await loadImg(HB_SIG);if(sg){const sh=Math.min(92,290*sg.height/sg.width),sw=sh*sg.width/sg.height;g.drawImage(sg,W/2-sw/2,970-sh,sw,sh);}}catch(e){}
  g.textAlign="center";g.strokeStyle="#141A3A";g.lineWidth=2;g.beginPath();g.moveTo(W/2-150,975);g.lineTo(W/2+150,975);g.stroke();g.fillStyle="#141A3A";g.font=F(700,24);g.fillText("Authorised Signatory",W/2,1008);g.fillStyle="#7C83A6";g.font=F(500,20);g.fillText("HITARTHI Education & Skill Development Pvt. Ltd.",W/2,1036);
  if(qr){g.fillStyle="#fff";g.fillRect(W-300,850,200,200);g.drawImage(qr,W-292,858,184,184);}
  g.textAlign="center";g.fillStyle="#7C83A6";g.font=F(500,18);g.fillText("CIN: U85499JH2026PTC027629   •   www.hitarthi.com",W/2,1062);
  {const sx=W-190,sy=200,sr=82;const sg2=g.createRadialGradient(sx-25,sy-25,8,sx,sy,sr);sg2.addColorStop(0,"#FFF1B8");sg2.addColorStop(.5,"#E7B73C");sg2.addColorStop(1,"#A8740E");
   g.fillStyle="#0B1A4A";g.beginPath();g.moveTo(sx-40,sy+50);g.lineTo(sx-58,sy+150);g.lineTo(sx-30,sy+128);g.lineTo(sx-10,sy+155);g.lineTo(sx-6,sy+60);g.fill();g.fillStyle="#0057D9";g.beginPath();g.moveTo(sx+40,sy+50);g.lineTo(sx+58,sy+150);g.lineTo(sx+30,sy+128);g.lineTo(sx+10,sy+155);g.lineTo(sx+6,sy+60);g.fill();
   g.fillStyle=sg2;g.beginPath();g.arc(sx,sy,sr,0,7);g.fill();g.strokeStyle="#B98314";g.lineWidth=4;g.beginPath();g.arc(sx,sy,sr-12,0,7);g.stroke();
   g.fillStyle="#4A2E00";g.font=F(800,22);g.fillText("HITARTHI",sx,sy-14);g.font=F(800,34);g.fillText("★",sx,sy+22);g.font=F(800,16);g.fillText("CERTIFIED",sx,sy+46);}
  if(c.sample){g.save();g.translate(W/2,H/2);g.rotate(-.35);g.fillStyle="rgba(220,38,38,.16)";g.font=F(800,190);g.fillText("नमूना • SAMPLE",0,60);g.restore();}
  return cv;}
window.hbDrawCert=drawCert;document.querySelectorAll("img[data-sig]").forEach(i=>i.src=HB_SIG);
async function openCert(c){const cv=await drawCert(c),u=cv.toDataURL("image/png"),M=$("#idm");
  M.innerHTML=`<div class="idm-box" data-noi18n="1"><button class="idm-x" aria-label="बंद करें">✕</button><h3>🎓 आपका Certificate</h3><img loading="lazy" decoding="async" src="${u}" alt="Certificate" style="width:100%;border-radius:10px;box-shadow:var(--shadow)">
    <div class="idm-acts"><a class="btn btn-orange btn-sm" href="${u}" download="HITARTHI-Certificate-${esc(c.id)}.png">⬇️ Download</a><button class="btn btn-ghost btn-sm" id="certShare">📤 Share</button><a class="btn btn-wa btn-sm" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent("मैंने HITARTHI का "+c.course+" course पूरा किया 🎉 Certificate verify करें: "+certURL(c.id))}">WhatsApp</a></div>
    <p class="small muted">Verify link: ${esc(certURL(c.id))}</p></div>`;M.hidden=false;M.querySelector(".idm-x").onclick=()=>{M.hidden=true;};
  $("#certShare").onclick=()=>shareCanvas(cv,"HITARTHI-Certificate-"+c.id+".png","मैंने HITARTHI का "+c.course+" course पूरा किया 🎉 "+certURL(c.id));}
window.openCert=openCert;
async function shareCanvas(cv,name,text){try{const bl=await new Promise(ok=>cv.toBlob(ok,"image/png"));const f=new File([bl],name,{type:"image/png"});
  if(navigator.canShare&&navigator.canShare({files:[f]})){await navigator.share({files:[f],text});return;}}catch(e){}
  const a=document.createElement("a");a.href=cv.toDataURL("image/png");a.download=name;document.body.appendChild(a);a.click();a.remove();toast("Image save हो गई — WhatsApp status / group में लगाएँ");}
/* ?cert=HC2610231234 — कोई भी certificate की असलियत जाँचे */
(async function(){let id="";try{id=(new URLSearchParams(location.search).get("cert")||"").toUpperCase();}catch(e){}if(!id)return;const M=$("#idm");
  const show=h=>{M.innerHTML=`<div class="idm-box"><button class="idm-x" aria-label="बंद करें">✕</button>${h}</div>`;M.hidden=false;M.querySelector(".idm-x").onclick=()=>{M.hidden=true;};};
  show('<p class="muted">Certificate जाँच रहे हैं…</p>');
  if(!HB_API){show(`<h3>✅ Certificate Verify</h3><p>Demo: आपकी website पर यहाँ <b>${esc(id)}</b> का नाम, course और तारीख़ Google Sheet से दिखेगी।</p>`);return;}
  try{const r=await hbCall("certverify",{id});show(r&&r.ok?`<div class="cv-ok ${r.valid?"":"bad"}"><b>${r.valid?"✅ असली HITARTHI Certificate":"⚠️ यह certificate रद्द (Cancelled) है"}</b><div class="cv-g"><span>नाम</span><b>${esc(r.name)}</b><span>Course</span><b>${esc(r.course)}</b><span>Grade</span><b>${esc(r.grade)}</b><span>तारीख़</span><b>${esc(r.date)}</b><span>Certificate ID</span><b>${esc(r.id)}</b></div></div>`:`<h3>❌ नहीं मिला</h3><p>${esc((r&&r.err)||"यह certificate HITARTHI के record में नहीं है")}</p>`);}
  catch(e){show("<h3>Server से जुड़ नहीं पाए</h3><p>थोड़ी देर बाद दोबारा खोलें।</p>");}})();
document.addEventListener("click",e=>{if(!e.target.closest("[data-certv]"))return;const id=prompt("Certificate ID लिखें (जैसे HC2610231234)");if(id){location.href=location.pathname+"?cert="+encodeURIComponent(id.trim().toUpperCase());}});

/* ---------- 📚 LMS — Library के अंदर: Live Class • Attendance • Test • Certificate ---------- */
window.LMSX=(function(){
  const nowD=new Date(),dd=n=>{const d=new Date(nowD.getTime()+n*864e5);return d.toISOString().slice(0,10);};
  const DEMO_LMS={classes:[{i:0,title:"Class 1 — Computer से पहली मुलाक़ात",date:dd(-2),time:"18:00",mins:60,over:true,attended:true,hasRec:true},{i:1,title:"Class 2 — Mouse और Keyboard",date:dd(0),time:"18:00",mins:60,live:true,attended:false},{i:2,title:"Class 3 — File और Folder",date:dd(2),time:"18:00",mins:60}],
    attended:1,past:1,tests:[{name:"Practice Test 1",final:false,count:3,best:null},{name:"Final Test",final:true,count:3,best:null}],cert:null,pass:60,attendNeed:0};
  const DEMO_Q=[{q:"Computer बंद करने का सही तरीका क्या है?",o:["Power बटन दबाकर रखें","Start → Shut down","Plug निकाल दें"],a:1},{q:"Copy करने का shortcut?",o:["Ctrl + C","Ctrl + V","Ctrl + Z"],a:0},{q:"नया folder किससे बनता है?",o:["Right click → New → Folder","Ctrl + P","Alt + F4"],a:0}];
  const S=()=>window.mlState?window.mlState():{};
  function side(it){const L=it.lms;if(!L)return "";
    return `<h4>🔴 Live Classes</h4>${L.classes.length?L.classes.map(c=>`<button type="button" class="mlp-ch" data-lms="cls" data-i="${c.i}"><i>${c.live?"🔴":c.over?(c.attended?"✅":"🎞️"):"🗓️"}</i><span>${esc(c.title)}</span><small>${c.live?"अभी":esc(c.date.slice(5))+" "+esc(c.time)}</small></button>`).join(""):'<p class="small muted" style="padding:0 10px">अभी कोई class तय नहीं</p>'}
      <h4>📝 Tests</h4>${L.tests.map((t,k)=>`<button type="button" class="mlp-ch" data-lms="test" data-i="${k}"><i>${t.best==null?"📝":t.best>=L.pass?"✅":"🔁"}</i><span>${esc(t.name)}${t.final?" <b>(Final)</b>":""}</span><small>${t.best==null?t.count+" प्रश्न":t.best+"%"}</small></button>`).join("")||'<p class="small muted" style="padding:0 10px">जल्द</p>'}
      <h4>🎓 Certificate</h4><button type="button" class="mlp-ch" data-lms="cert"><i>${L.cert?"🎓":"🔒"}</i><span>${L.cert?"मेरा Certificate":"Final test पास करने पर"}</span></button>`;}
  function home(it,main){const L=it.lms;main.onscroll=null;
    main.innerHTML=`<div class="lmsh"><h2>${esc(it.title)}</h2><div class="lmsh-g"><div><b>${L.attended}/${L.past||0}</b><span>Live class attendance</span></div><div><b>${L.tests.filter(t=>t.best!=null&&t.best>=L.pass).length}/${L.tests.length}</b><span>Tests पास</span></div><div><b>${L.cert?"🎓":"🔒"}</b><span>${L.cert?"Certificate मिल गया":"Final test "+L.pass+"% पर Certificate"}</span></div></div>
      ${(L.classes.find(c=>c.live)||L.classes.find(c=>!c.over))?`<div class="lmsh-next">${(()=>{const c=L.classes.find(c=>c.live)||L.classes.find(c=>!c.over);return `<span>${c.live?"🔴 अभी live":"🗓️ अगली class"}</span><b>${esc(c.title)}</b><small>${esc(c.date)} • ${esc(c.time)} बजे • ${c.mins} मिनट</small><button type="button" class="btn btn-orange btn-sm" data-lmsgo="cls" data-i="${c.i}">${c.live?"Join करें →":"देखें"}</button>`;})()}</div>`:""}
      ${L.attendNeed?`<p class="small muted">Certificate के लिए कम से कम ${L.attendNeed}% live class attendance ज़रूरी है।</p>`:""}</div>`;}
  function cls(it,i,main){const c=it.lms.classes.find(x=>x.i===i);if(!c)return;main.onscroll=null;
    main.innerHTML=`<div class="lmsc"><span class="lmsc-st ${c.live?"live":""}">${c.live?"🔴 LIVE — अभी चल रही है":c.over?"✓ Class हो चुकी":"🗓️ आने वाली class"}</span><h2>${esc(c.title)}</h2><p>${esc(c.date)} • ${esc(c.time)} बजे • ${c.mins} मिनट</p>
      ${c.live?'<button type="button" class="btn btn-orange btn-lg" id="lmsJoin">🎥 Class में Join करें</button><p class="small muted">Join करते ही आपकी attendance अपने-आप लग जाएगी ✓</p>':c.over?(c.hasRec?'<button type="button" class="btn btn-primary" id="lmsJoin">▶ Recording देखें</button>':'<p class="muted">Recording जल्द डाली जाएगी।</p>'):'<p class="muted">Class शुरू होने से 15 मिनट पहले यहाँ Join बटन खुलेगा। 🔔 WhatsApp पर भी याद दिलाया जाएगा।</p>'}
      ${c.attended?'<p class="ok">✅ आपकी attendance लगी है</p>':""}</div>`;
    const j=$("#lmsJoin");if(j)j.onclick=async()=>{const st=S();if(st.demo||!HB_API){c.attended=true;toast("Demo: आपकी website पर यहाँ Google Meet / Zoom खुलेगा और attendance लगेगी ✓");cls(it,i,main);return;}
      const w=window.open("about:blank","_blank");j.disabled=true;
      try{const r=await hbCall("lmsjoin",{token:st.token,key:it.key,cls:i});if(r&&r.ok){if(w)w.location.href=r.url;else location.href=r.url;if(!r.rec){c.attended=true;it.lms.attended++;}cls(it,i,main);}else{if(w)w.close();toast((r&&r.err)||"नहीं खुला");}}
      catch(e){if(w)w.close();toast("Server से जुड़ नहीं पाए");}finally{j.disabled=false;}};}
  async function test(it,k,main){const t=it.lms.tests[k];if(!t)return;main.onscroll=null;const st=S();let qs;
    if(st.demo||!HB_API)qs=DEMO_Q.map(x=>({q:x.q,o:x.o}));else{main.innerHTML='<div class="ml-load">Test खुल रहा है…</div>';try{const r=await hbCall("lmstest",{token:st.token,key:it.key,test:t.name});if(!r||!r.ok){main.innerHTML=`<div class="ml-lockp"><b>⚠️</b><p>${esc((r&&r.err)||"Test नहीं खुला")}</p></div>`;return;}qs=r.qs;}catch(e){main.innerHTML='<div class="ml-lockp"><b>⚠️</b><p>Server से जुड़ नहीं पाए</p></div>';return;}}
    main.innerHTML=`<form class="lmst" id="lmsT"><h2>📝 ${esc(t.name)}${t.final?' <span class="lmst-f">Final — पास होने पर Certificate</span>':""}</h2><p class="muted">${qs.length} प्रश्न • पास होने के लिए ${it.lms.pass}% • जितनी बार चाहें दोबारा दे सकते हैं</p>
      ${qs.map((x,n)=>`<fieldset><legend>${n+1}. ${esc(x.q)}</legend>${x.o.map((o,m)=>`<label><input type="radio" name="q${n}" value="${m}"> ${esc(o)}</label>`).join("")}</fieldset>`).join("")}<button class="btn btn-orange btn-lg" type="submit">✅ जमा करें</button></form>`;
    $("#lmsT").addEventListener("submit",async e=>{e.preventDefault();const ans=qs.map((x,n)=>{const r=main.querySelector(`input[name="q${n}"]:checked`);return r?+r.value:-1;});
      if(ans.includes(-1)&&!confirm("कुछ प्रश्न छूट गए हैं — फिर भी जमा करें?"))return;let r;
      if(st.demo||!HB_API){const right=ans.map((a,n)=>a===DEMO_Q[n].a),score=right.filter(Boolean).length,pct=Math.round(score/qs.length*100);r={ok:true,score,total:qs.length,pct,pass:pct>=60,right,correct:DEMO_Q.map(x=>x.a)};if(t.final&&r.pass)r.cert={id:"HC"+new Date().toISOString().slice(2,10).replace(/-/g,"")+"1234",name:st.name||"Demo पाठक",course:it.title,date:new Date().toISOString().slice(0,10),grade:pct>=90?"A+":pct>=75?"A":"B"};}
      else{try{r=await hbCall("lmssubmit",{token:st.token,key:it.key,test:t.name,answers:ans});}catch(x){r={ok:false,err:"Server से जुड़ नहीं पाए"};}}
      if(!r||!r.ok){toast((r&&r.err)||"जमा नहीं हुआ");return;}
      t.best=Math.max(t.best||0,r.pct);if(r.cert)it.lms.cert=r.cert;
      main.querySelectorAll("fieldset").forEach((f,n)=>{f.classList.add(r.right[n]?"ok":"bad");const lb=f.querySelectorAll("label")[r.correct[n]];if(lb)lb.classList.add("right");});
      main.querySelector("button[type=submit]").outerHTML=`<div class="lmst-r ${r.pass?"ok":"bad"}"><b>${r.pass?"🎉 पास!":"🔁 फिर कोशिश करें"}</b> ${r.score}/${r.total} सही • ${r.pct}%${r.certMsg?"<br><small>"+esc(r.certMsg)+"</small>":""}${r.cert?'<br><button type="button" class="btn btn-orange" data-lmsgo="cert">🎓 मेरा Certificate देखें</button>':""}</div>`;
      if(window.mlRefreshSide)mlRefreshSide();});}
  function cert(it,main){const L=it.lms;main.onscroll=null;if(!L.cert){main.innerHTML=`<div class="ml-lockp"><b>🔒</b><h3>Certificate</h3><p>Final test में ${L.pass}% या ज़्यादा लाने पर आपके नाम से certificate अपने-आप बनेगा।${L.attendNeed?" साथ में "+L.attendNeed+"% live class attendance ज़रूरी।":""}</p></div>`;return;}
    main.innerHTML='<div class="ml-load">Certificate बन रहा है…</div>';drawCert(L.cert).then(cv=>{const u=cv.toDataURL("image/png");main.innerHTML=`<div class="lmsce"><img loading="lazy" decoding="async" src="${u}" alt="Certificate"><div class="idm-acts"><a class="btn btn-orange" href="${u}" download="HITARTHI-Certificate-${esc(L.cert.id)}.png">⬇️ Download</a><button type="button" class="btn btn-ghost" id="lmsCs">📤 Share / Status</button></div><p class="small muted">Verify: ${esc(certURL(L.cert.id))}</p></div>`;
      $("#lmsCs").onclick=()=>shareCanvas(cv,"HITARTHI-Certificate-"+L.cert.id+".png","मैंने HITARTHI का "+L.cert.course+" course पूरा किया 🎉 "+certURL(L.cert.id));});}
  return {side,home,open(kind,it,i,main){if(kind==="cls")cls(it,i,main);else if(kind==="test")test(it,i,main);else if(kind==="cert")cert(it,main);else home(it,main);},DEMO_LMS};
})();

/* ---------- 🤝 PARTNER KIT — Coupon code + QR वाले Poster / Status images ---------- */
const POSTERS=[
  {k:"demo",n:"Free Counselling",g:["#0B1A4A","#0057D9","#00A6F0"],acc:"#FFC247",eb:"HITARTHI — From Learning to Earning",h:["सीखिए आज,","कमाइए कल!"],pts:["💻 Computer, Excel और Typing","🤖 AI Tools — नौकरी और business के लिए","🗣️ Spoken English — झिझक ख़त्म","💰 पैसे की समझ — बचत और निवेश की शिक्षा"],big:"Free Counselling"},
  {k:"books",n:"Book Membership",g:["#7C2D12","#EA580C","#FFB020"],acc:"#FFF3B0",eb:"HITARTHI Book Membership",h:["150 E-books +","Video Courses"],pts:["📚 लगभग हर हफ़्ते 1 नई book","🎧 हर book पढ़िए और सुनिए भी","🎬 Bonus: recorded video courses","🤝 Live support + और भी बहुत कुछ"],big:"₹10,500 • या ₹5,000 में 60 books + 52 courses"},
  {k:"english",n:"Spoken English",g:["#3B0764","#7C3AED","#C084FC"],acc:"#FDE68A",eb:"HITARTHI Spoken English",h:["झिझक छोड़िए,","English बोलिए!"],pts:["🗣️ रोज़ की बातचीत से Interview तक","🤖 English AI Teacher से रोज़ अभ्यास","🎥 Live class + recording","🎓 Course पूरा करने पर Certificate"],big:"₹300/महीना से शुरू"},
  {k:"join",n:"Partner बनें",g:["#052E16","#15803D","#34D399"],acc:"#FDE68A",eb:"HITARTHI Team Partner",h:["शिक्षा पहुँचाइए,","साथ में बढ़िए"],pts:["🆓 Partner बनना बिल्कुल मुफ़्त","📊 अपना online dashboard","🏆 हर महीने Star Performers का सम्मान","⚠️ कमाई सिर्फ़ असली बिक्री पर — कोई guarantee नहीं"],big:"आज ही जुड़िए"}
];
async function drawPoster(p,t,tall){
  const W=1080,H=tall?1920:1350,cv=document.createElement("canvas");cv.width=W;cv.height=H;const g=cv.getContext("2d");try{await document.fonts.ready;}catch(e){}
  const F=(w,sz)=>`${w} ${sz}px "Baloo 2","Mukta","Nirmala UI","Noto Sans Devanagari",sans-serif`,code=t.coupon||t.id,link=refLink(t.id);
  const logoSrc=(document.querySelector("#logo image")||{getAttribute:()=>null}).getAttribute("href");
  const [logo,qr]=await Promise.all([loadImg(logoSrc),loadImg("data:image/svg+xml;charset=utf-8,"+encodeURIComponent(qrSVG(link,300,"#0B1A4A")))]);
  const bg=g.createLinearGradient(0,0,W*.4,H);bg.addColorStop(0,p.g[0]);bg.addColorStop(.6,p.g[1]);bg.addColorStop(1,p.g[2]);g.fillStyle=bg;g.fillRect(0,0,W,H);
  g.globalAlpha=.12;g.fillStyle="#fff";g.beginPath();g.arc(W-80,200,300,0,7);g.fill();g.beginPath();g.arc(60,H*.62,220,0,7);g.fill();g.globalAlpha=1;
  const top=tall?140:70;if(logo)g.drawImage(logo,70,top,120,120);
  g.fillStyle="#fff";g.font=F(800,52);g.fillText("HITARTHI",210,top+62);g.fillStyle="rgba(255,255,255,.8)";g.font=F(600,26);g.fillText("Education & Skill Development",210,top+102);
  let y=top+(tall?280:220);g.fillStyle=p.acc;g.font=F(800,34);g.fillText(p.eb.toUpperCase(),70,y);
  y+=tall?120:100;g.fillStyle="#fff";g.font=F(800,tall?108:96);p.h.forEach(l=>{g.fillText(l,70,y);y+=tall?122:108;});
  y+=tall?40:16;g.font=F(600,tall?42:38);p.pts.forEach(l=>{g.fillStyle="rgba(255,255,255,.95)";g.fillText(l,70,y);y+=tall?78:66;});
  y+=tall?40:18;g.fillStyle=p.acc;g.beginPath();(g.roundRect?g.roundRect(70,y-58,W-140,88,44):g.rect(70,y-58,W-140,88));g.fill();g.fillStyle="#141A3A";g.font=F(800,44);g.textAlign="center";g.fillText(p.big,W/2,y+2);g.textAlign="left";
  const by=H-(tall?520:330),bh=tall?420:290;g.fillStyle="#fff";g.beginPath();(g.roundRect?g.roundRect(50,by,W-100,bh,34):g.rect(50,by,W-100,bh));g.fill();
  const qs=tall?300:230;if(qr)g.drawImage(qr,W-50-30-qs,by+(bh-qs)/2,qs,qs);
  g.fillStyle="#7C83A6";g.font=F(700,26);g.fillText("आपके HITARTHI Partner",90,by+60);
  let nf=tall?60:54;g.font=F(800,nf);while(g.measureText(t.name).width>W-qs-230&&nf>30){nf-=3;g.font=F(800,nf);}g.fillStyle="#141A3A";g.fillText(t.name,90,by+(tall?140:122));
  g.fillStyle="#0057D9";g.font=F(800,tall?40:34);g.fillText("Partner ID: "+t.id,90,by+(tall?205:178));
  g.fillStyle="#17A45A";g.font=F(800,tall?40:34);g.fillText("🎟️ Coupon "+code+" = 5% छूट",90,by+(tall?268:228));
  g.fillStyle="#48507A";g.font=F(600,tall?30:25);g.fillText("Scan करें या www.hitarthi.com पर coupon डालें",90,by+(tall?330:268));
  g.fillStyle="rgba(255,255,255,.75)";g.font=F(600,22);g.textAlign="center";g.fillText("HITARTHI Education & Skill Development Pvt. Ltd. • www.hitarthi.com",W/2,H-(tall?60:24));g.textAlign="left";
  return cv;}
function kitHTML(t){const code=t.coupon||t.id;return `<div class="kit"><div class="kit-h"><div><b>🎟️ आपका Coupon Code</b><div class="kit-code"><span class="num">${esc(code)}</span><button type="button" class="btn btn-ghost btn-sm" id="kitCopy">Copy</button></div>
    <small>ग्राहक checkout पर यह code डाले → उसे <b>${t.couponPct||5}% छूट</b>, बिक्री अपने-आप <b>आपकी ID</b> में। ${t.coupon&&t.coupon!==t.id?"":"अपना आसान code (जैसे AMIT5) चाहिए तो company को WhatsApp करें।"}</small></div>
    <a class="btn btn-wa btn-sm" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent("HITARTHI पर Computer, AI, Spoken English और books — मेरा coupon "+code+" डालें और 5% छूट पाएँ 🎁 "+refLink(t.id))}">WhatsApp पर भेजें</a></div>
    <h4>📣 आपके Poster — आपकी ID, coupon और QR के साथ</h4><div class="kit-g">${POSTERS.map((p,k)=>`<div class="kit-p"><div class="kit-th" data-kitv="${k}"><span class="muted small">बन रहा है…</span></div><b>${esc(p.n)}</b><div><button type="button" class="btn btn-orange btn-sm" data-kit="${k}" data-tall="0">⬇️ Post</button><button type="button" class="btn btn-ghost btn-sm" data-kit="${k}" data-tall="1">📱 Status</button></div></div>`).join("")}</div>
    <p class="small muted">Post = Facebook / Instagram / WhatsApp group (1080×1350) • Status = WhatsApp status / Reels (1080×1920)। Mobile पर सीधे WhatsApp में share होगा।</p></div>`;}
async function kitMount(t){const host=$("#kitHost");if(!host)return;host.innerHTML=kitHTML(t);
  $("#kitCopy").onclick=()=>{try{navigator.clipboard.writeText(t.coupon||t.id).then(()=>toast("Coupon code copy हो गया"));}catch(e){toast(t.coupon||t.id);}};
  host.querySelectorAll("[data-kitv]").forEach(async el=>{const cv=await drawPoster(POSTERS[+el.dataset.kitv],t,false);el.innerHTML=`<img loading="lazy" decoding="async" src="${cv.toDataURL("image/jpeg",.7)}" alt="">`;});
  host.addEventListener("click",async e=>{const b=e.target.closest("[data-kit]");if(!b)return;b.disabled=true;const p=POSTERS[+b.dataset.kit],tall=b.dataset.tall==="1";
    try{const cv=await drawPoster(p,t,tall);await shareCanvas(cv,`HITARTHI-${p.k}-${t.id}${tall?"-status":""}.png`,"HITARTHI • Coupon "+(t.coupon||t.id)+" • "+refLink(t.id));track("partner_poster",{poster:p.k,tall});}finally{b.disabled=false;}});}

/* ---------- 🏆 महीने का LEADERBOARD (असली बिक्री से अपने-आप) ---------- */
async function lbLoad(){if(!HB_API)return {demo:true,list:[]};try{let r=await hbCall("leaderboard",{});if(r&&r.ok&&!r.list.length){const d=new Date(),pm=new Date(d.getFullYear(),d.getMonth()-1,1);const m=pm.getFullYear()+"-"+String(pm.getMonth()+1).padStart(2,"0");const r2=await hbCall("leaderboard",{month:m});if(r2&&r2.ok&&r2.list.length)r=r2;}return r||{list:[]};}catch(e){return {list:[]};}}
function lbHTML(r){const L=r.list||[],mn=r.month?mNameH(r.month):"इस महीने";
  if(!L.length)return `<div class="lb-empty"><b>🏆 ${esc(mn)} का Leaderboard</b><p>${r.demo?"आपकी website पर यह list हर महीने की असली बिक्री से अपने-आप बनेगी — Top 10 Partners, उनके शहर और Level के साथ।":"इस महीने अभी पहली बिक्री का इंतज़ार है — पहली बिक्री करके सबसे ऊपर आइए!"}</p></div>`;
  return `<div class="lb"><div class="lb-h"><b>🏆 ${esc(mn)} — Top Partners</b><small>हर घंटे अपने-आप update</small></div>${L.map(x=>`<div class="lb-r r${x.rank}"><span class="lb-n">${x.rank<=3?["🥇","🥈","🥉"][x.rank-1]:x.rank}</span><div><b>${esc(x.name)}</b><small>${esc(x.city||"")}${x.city?" • ":""}Level ${x.level}</small></div><span class="lb-s num">₹${(+x.sales).toLocaleString("en-IN")}+</span></div>`).join("")}<p class="small muted lb-note">बिक्री = Partner और उसकी team की उस महीने की कुल पक्की बिक्री (गोल अंकों में)। यह कमाई नहीं है।</p></div>`;}
let LBP=null;hbOnFresh("leaderboard",()=>{LBP=null;lbMount();});function lbMount(){if(!LBP)LBP=lbLoad();LBP.then(r=>{["#lbHome","#lbPartner"].forEach(s=>{const el=$(s);if(el)el.innerHTML=lbHTML(r);});const m=$("#wMonth");if(m)m.textContent=r.month?mNameH(r.month):mNameH(new Date().toISOString().slice(0,7));});}
lbMount();

/* ---------- 🎓 Partner Training videos + ⭐ Students की आवाज़ (Sheet से) ---------- */
const TRAIN_PLAN=["पहली बिक्री कैसे करें","ग्राहक से पहली बात — सही सवाल","Course का फ़ायदा कैसे दिखाएँ","Follow-up और WhatsApp का सही इस्तेमाल","ईमानदारी के नियम — क्या कहें, क्या नहीं"];
hContent().then(H=>{const tv=$("#trainVid");if(tv){const T=H.training||[];
    tv.innerHTML=(T.length?T:TRAIN_PLAN.map(x=>({title:x}))).map((x,k)=>`<div class="trv">${x.video?ytLite(x.video,x.title):`<div class="trv-ph"><b>${k+1}</b><span>जल्द</span></div>`}<b>${esc(x.title)}</b>${x.mins?`<small>${x.mins} मिनट</small>`:""}</div>`).join("");}
  const rv=$("#reviews");if(rv){const R=H.reviews||[];if(R.length){rv.hidden=false;$("#rvGrid").innerHTML=R.map(x=>`<div class="rv">${x.video?ytLite(x.video,x.name+" — "+x.course):""}<div class="rv-t">${x.text?`<p>“${esc(x.text)}”</p>`:""}<b>${esc(x.name)}</b><small>${esc([x.course,x.city].filter(Boolean).join(" • "))}</small></div></div>`).join("");}}});

/* ---------- 🏫 SCHOOLS — package, अनुमान और enquiry ---------- */
(function(){const P=[{n:"Basic",s:199,p:299,d:"Typing Shala (हिंदी + English typing, अभ्यास, test, certificate)"},{n:"Smart",s:399,p:599,d:"Basic + E-book Library (25 हिंदी-English books)",hot:1},{n:"Premium",s:699,p:999,d:"Smart + English AI Teacher + हर महीने progress report"}];
  const g=$("#scPk");if(!g)return;
  g.innerHTML=P.map(x=>`<div class="sc-p${x.hot?" hot":""}">${x.hot?'<span class="mc-chip p">सबसे ज़्यादा पसंद</span>':""}<h3>${x.n}</h3><p>${esc(x.d)}</p><div class="sc-pr"><div><b class="num">₹${x.s}</b><small>School-paid / बच्चा / साल</small></div><div><b class="num">₹${x.p}</b><small>Parent-paid / बच्चा / साल<br>(स्कूल को 20% हिस्सा)</small></div></div></div>`).join("");
  $("#scPkSel").innerHTML=P.map((x,k)=>`<option value="${k}"${x.hot?" selected":""}>${x.n}</option>`).join("");
  const calc=()=>{const n=Math.max(0,Math.round(+$("#scN").value||0)),p=P[+$("#scPkSel").value],off=n>=1000?15:n>=300?10:0,mode=$("#scMode").value;
    const o=$("#scOut");if(n<50){o.innerHTML='<span class="muted">कम से कम 50 बच्चे (छोटे स्कूल के लिए पूरे स्कूल का एक तय दाम — बात करें)</span>';return;}
    if(mode==="s"){const t=Math.round(n*p.s*(1-off/100));o.innerHTML=`सालाना <b class="num">₹${t.toLocaleString("en-IN")}</b> + GST ${off?`<small>(${off}% छूट लगाकर)</small>`:""}<br><small class="muted">भुगतान: MoU पर 50%, बाकी 60 दिन में • सिर्फ़ company account में, GST invoice के साथ</small>`;}
    else{const sh=Math.round(n*p.p*.2);o.innerHTML=`अभिभावक ₹${p.p}/बच्चा/साल online भरें • सभी बच्चे जुड़ें तो स्कूल का हिस्सा लगभग <b class="num">₹${sh.toLocaleString("en-IN")}</b>/साल<br><small class="muted">हर तिमाही स्कूल के bank account में, TDS काटकर</small>`;}};
  ["#scN","#scPkSel","#scMode"].forEach(s=>$(s).addEventListener("input",calc));calc();
  $("#scForm").addEventListener("submit",async e=>{e.preventDefault();const v=id=>$(id).value.trim(),m=$("#scMsg");
    const school=v("#scSchool"),name=v("#scName"),mobile=v("#scMob").replace(/\D/g,""),city=v("#scCity"),n=v("#scN"),pk=P[+$("#scPkSel").value].n;
    if(school.length<3||name.length<2){m.textContent="स्कूल और अपना नाम लिखें";m.className="mc-msg err";return;}if(!/^[6-9]\d{9}$/.test(mobile)){m.textContent="सही mobile नंबर लिखें";m.className="mc-msg err";return;}
    const note=`School: ${school} • बच्चे: ${n||"-"} • Package: ${pk} • ${$("#scMode").value==="s"?"School-paid":"Parent-paid"} • ${v("#scRole")}`;
    if(!HB_API){window.open("https://wa.me/"+WA+"?text="+encodeURIComponent("Namaste HITARTHI, hamein School tie-up / free pilot chahiye.\n"+note+"\nNaam: "+name+"\nMobile: "+mobile+"\nShahar: "+city),"_blank","noopener");m.textContent="✅ धन्यवाद! WhatsApp पर भेज दिया।";m.className="mc-msg ok";return;}
    try{const r=await hbCall("lead",{name,mobile,city,interest:"School tie-up — "+pk,source:"School",note,partner:getRef()});m.textContent=r&&r.ok?"✅ धन्यवाद! 2 कामकाजी दिन में हमारी team आपसे मिलने का समय तय करेगी।":(r&&r.err)||"दर्ज नहीं हुआ";m.className="mc-msg "+(r&&r.ok?"ok":"err");if(r&&r.ok){track("generate_lead",{source:"School"});e.target.reset();calc();}}
    catch(x){m.textContent="Server से जुड़ नहीं पाए — WhatsApp करें";m.className="mc-msg err";}});
})();

/* =====================================================================
   PARTNER TOOLS — 🌐 Partner का अपना Page (?p=HT1007) • 📋 मेरे Leads • 🤖 HITARTHI साथी (Gemini AI)
   ===================================================================== */
const ppURL=id=>{const b=/hitarthi\.com$/i.test(location.hostname)?location.origin+"/":"https://www.hitarthi.com/";return b+"?p="+id;};
window.PP_COUPON="";
/* ---------- Course Finder (Partner page का quiz) ---------- */
const PF_Q=[{q:"आप कौन हैं?",o:[["📚 Student (Class 8–12)","stu"],["🎓 College / नौकरी की तलाश","job"],["💼 नौकरी कर रहे हैं","work"],["👨‍👩‍👧 Parent (बच्चे के लिए)","par"],["🏪 दुकान / Business","biz"]]},
  {q:"सबसे पहले क्या सीखना है?",o:[["💻 Computer, Office, Excel","computer"],["🗣️ English बोलना","english"],["🤖 AI Tools","ai"],["💰 पैसे की समझ","finance"],["⌨️ Typing / सरकारी नौकरी","typing"],["📈 Business बढ़ाना","business"]]},
  {q:"हर महीने कितना ख़र्च ठीक है?",o:[["₹300 – ₹500 महीना","m"],["₹1,000 – ₹2,000 एक बार","low"],["₹3,000+ (किश्तों में भी)","high"]]}];
function pfPick(a){const who=a[0],want=a[1],bud=a[2];let cat=want==="typing"?"computer":want;if(who==="par"&&want!=="finance"&&want!=="english")cat="kids";
  let L=COURSES.filter(c=>c.cat===cat||(cat==="ai"&&c.cat==="digital")||(cat==="business"&&c.cat==="business"));
  if(want==="typing")L=COURSES.filter(c=>/typing/i.test(c.name));if(who==="job"&&want==="english")L=COURSES.filter(c=>/Spoken|Interview|Personality/.test(c.name));
  if(!L.length)L=COURSES.filter(c=>c.cat==="computer");
  L=L.slice().sort((x,y)=>bud==="high"?y.fee-x.fee:x.fee-y.fee);if(bud==="low")L=L.filter(c=>c.fee<=2500).concat(L.filter(c=>c.fee>2500));
  return L.slice(0,3);}
async function ppShow(id,preview){const v=$("#ppView");v.innerHTML='<div class="ml-load">Partner page खुल रहा है…</div>';
  let d;if(!HB_API||preview==="demo")d={ok:true,id,name:"नमूना Partner",city:"Bokaro",level:3,kyc:true,joined:"2026-09-01",coupon:id,pct:5,intro:"मैं आपको सही course चुनने में मदद करूँगा — पहले Free Counselling लीजिए, फिर तय कीजिए।",wa:"",photo:""};
  else{try{d=await hbCall("ppage",{id});}catch(e){d={ok:false,err:"Server से जुड़ नहीं पाए"};}}
  if(!d||!d.ok){v.innerHTML=`<div class="ml-lockp"><b>🔍</b><h3>${esc((d&&d.err)||"Page नहीं मिला")}</h3><button class="btn btn-orange" data-go="home">HITARTHI Home</button></div>`;return;}
  if(!preview){try{localStorage.setItem(REFK,JSON.stringify({id:d.id,t:Date.now()}));}catch(e){}window.PP_COUPON=d.coupon;track("partner_page_view",{partner:d.id});}
  const pop=["Basic Computer Course","Spoken English","Advanced Excel","AI Tools for Everyone","MS Office Complete","Speed Typing (Hindi + English)"].map(cByName).filter(Boolean);
  v.innerHTML=`<div class="pp-hero"><div class="pp-av">${d.photo?`<img loading="lazy" decoding="async" src="${d.photo}" alt="">`:`<span>${esc(d.name.trim().charAt(0))}</span>`}</div>
    <div class="pp-hi"><small>आपके HITARTHI Partner</small><h1>${esc(d.name)}</h1><p class="pp-tags">${d.kyc?'<span class="ok">✓ KYC Verified</span>':""}<span>📍 ${esc(d.city||"भारत")}</span><span>ID: ${esc(d.id)}</span></p>
      ${d.intro?`<p class="pp-intro">“${esc(d.intro)}”</p>`:""}
      <div class="pp-ctas">${d.wa?`<a class="btn btn-wa" href="https://wa.me/${esc(d.wa)}?text=${encodeURIComponent("Namaste "+d.name.split(/\s+/)[0]+" ji, maine aapka HITARTHI page dekha. Mujhe course ki jaankari chahiye.")}" target="_blank" rel="noopener">💬 ${esc(d.name.split(/\s+/)[0])} जी से WhatsApp</a>`:""}<button class="btn btn-orange" data-pplead="1">🎓 Free Counselling</button><button class="btn btn-glass" data-go="contact" data-demo="1">Free Counselling</button></div>
      <a class="pp-ver" href="?verify=${esc(d.id)}">🔍 यह Partner असली है? ID जाँचें</a></div></div>
    <div class="pp-cp"><b>🎟️ ${esc(d.coupon)}</b><span>इस page से कोई भी course / book लें — <b>${d.pct}% छूट</b> checkout पर अपने-आप लगेगी।</span></div>
    <div class="pp-sec"><h2>🧭 आपके लिए कौन-सा course सही है? <small>3 सवाल, 20 सेकंड</small></h2><div class="pf" id="pfBox"></div></div>
    <div class="pp-sec"><h2>⭐ सबसे ज़्यादा पसंद किए गए courses</h2><div class="pp-grid">${pop.map(c=>`<div class="pp-c"><b>${esc(c.name)}</b><small>${esc(c.hin)} • ${esc(c.dur)}</small><span class="num">${rs(Math.round(c.fee*(1-d.pct/100)))} <s>${rs(c.fee)}</s></span><div><button class="btn btn-ghost btn-sm" data-cdetail="${esc(c.name)}">जानकारी</button><button class="btn btn-primary btn-sm" data-pplead="${esc(c.name)}">Free Counselling</button></div></div>`).join("")}</div>
      <p class="small muted">₹300/महीना के plan से भी शुरुआत • बड़े course की fee किश्तों में • पहले Free Counselling</p></div>
    <div class="pp-trust"><div>🎥<b>Online Live + Recording</b></div><div>📚<b>मेरी Library</b><small>पढ़ें, सुनें, देखें</small></div><div>🎓<b>QR वाला Certificate</b></div><div>🧾<b>GST Invoice</b></div></div>
    <p class="small muted pp-disc">HITARTHI किसी नौकरी या कमाई की guarantee नहीं देता — हम practical skill और सही रास्ता देते हैं। भुगतान सिर्फ़ website / HITARTHI के company account में करें।</p>`;
  const ans=[];const box=$("#pfBox");
  const step=()=>{if(ans.length<PF_Q.length){const Q=PF_Q[ans.length];box.innerHTML=`<p class="pf-q"><span>${ans.length+1}/${PF_Q.length}</span> ${esc(Q.q)}</p><div class="pf-o">${Q.o.map(o=>`<button type="button" data-pf="${o[1]}">${esc(o[0])}</button>`).join("")}</div>`;return;}
    const R=pfPick(ans);track("partner_quiz_done",{partner:d.id});
    box.innerHTML=`<p class="pf-q">✅ आपके लिए हमारी सलाह:</p><div class="pp-grid">${R.map((c,k)=>`<div class="pp-c${k?"":" best"}">${k?"":'<span class="mc-chip p">सबसे सही</span>'}<b>${esc(c.name)}</b><small>${esc(c.hin)} • ${esc(c.dur)}</small><span class="num">${rs(c.fee)}</span><div><button class="btn btn-ghost btn-sm" data-cdetail="${esc(c.name)}">जानकारी</button><button class="btn btn-orange btn-sm" data-pplead="${esc(c.name)}" data-ppsrc="Partner Page Quiz">यही चाहिए — सलाह लें</button></div></div>`).join("")}</div><button type="button" class="lnk" id="pfAgain">↺ फिर से चुनें</button>`;
    $("#pfAgain").onclick=()=>{ans.length=0;step();};};
  box.addEventListener("click",e=>{const b=e.target.closest("[data-pf]");if(!b)return;ans.push(b.dataset.pf);step();});step();
  v.onclick=e=>{const b=e.target.closest("[data-pplead]");if(!b)return;const c=b.dataset.pplead!=="1"?b.dataset.pplead:"";
    openLead({title:"🎓 "+(c?c+" — ":"")+"Free Counselling",sub:d.name+" (HITARTHI Partner) और हमारी team आपको सही जानकारी देगी।",source:b.dataset.ppsrc||"Partner Page",interest:c,hideCourse:!!c});};}
(function(){let id="";try{id=(new URLSearchParams(location.search).get("p")||"").trim().toUpperCase();}catch(e){}if(!/^HT\d{3,8}$/.test(id))return;
  setTimeout(()=>{go("pp",true);ppShow(id);},30);})();

/* ---------- 📋 मेरे LEADS — Green (पक्का) • Yellow (हो सकता है) • White (अभी ठंडा) ---------- */
const CLR={Green:["🟢","पक्का — होगा ही होगा"],Yellow:["🟡","हो सकता है — थोड़ा शक"],White:["⚪","अभी ठंडा — बाद में"],"":["◻️","रंग चुनें"]};
const LST={New:"नया",Called:"बात हुई",Demo:"Demo हुआ",Joined:"✅ जुड़ गया",No:"❌ नहीं"};
const PTS={leads:[],fil:"due",q:"",demo:false};
function ptDemoLeads(){const t=new Date(),d=n=>new Date(t.getTime()+n*864e5).toISOString().slice(0,10);return [
  {row:2,time:d(-1)+" 10:20",name:"मोहन प्रसाद",mobile:"9800000010",interest:"Basic Computer Course",source:"Partner की list",city:"Chas",status:"Called",color:"Green",fu:d(0),note:"बेटे के लिए, शाम को बात करनी है",bought:""},
  {row:3,time:d(-2)+" 18:05",name:"सुनीता देवी",mobile:"9800000011",interest:"Spoken English",source:"Partner Page",city:"Bokaro",status:"New",color:"",fu:"",note:"",bought:""},
  {row:4,time:d(-3)+" 12:00",name:"राहुल कुमार",mobile:"9800000012",interest:"Advanced Excel",source:"Partner की list",city:"",status:"Demo",color:"Yellow",fu:d(-1),note:"fee किश्तों में चाहिए",bought:""},
  {row:5,time:d(-6)+" 09:40",name:"पूजा",mobile:"9800000013",interest:"AI Tools for Everyone",source:"Partner Page Quiz",city:"Dhanbad",status:"Joined",color:"Green",fu:"",note:"",bought:"AI Tools for Everyone"},
  {row:6,time:d(-8)+" 16:30",name:"विकास",mobile:"9800000014",interest:"Typing",source:"Partner की list",city:"",status:"Called",color:"White",fu:d(5),note:"exam के बाद",bought:""}];}
const ptAutoFil=()=>{const td=new Date().toISOString().slice(0,10);PTS.fil=PTS.leads.some(x=>x.fu&&x.fu<=td&&x.status!=="Joined"&&x.status!=="No")?"due":"all";};
async function ptLoad(){const h=$("#ptLeads");if(!h)return;if(HB.demo||!HB_API){PTS.demo=true;if(!PTS.leads.length){PTS.leads=ptDemoLeads();ptAutoFil();}ptRender();return;}
  h.innerHTML='<p class="muted">Leads आ रहे हैं…</p>';try{const r=await hbCall("myleads",{id:HB.id,pin:HB.pin});if(r&&r.ok){const first=!PTS.got;PTS.leads=r.leads;PTS.got=1;if(first)ptAutoFil();ptRender();}else h.innerHTML=`<p class="mc-msg err">${esc((r&&r.err)||"नहीं खुला")}</p>`;}catch(e){h.innerHTML='<p class="mc-msg err">Server से जुड़ नहीं पाए</p>';}}
function ptWA(l){const n=l.name.split(/\s+/)[0],c=l.interest||"HITARTHI course";const T={New:`Namaste ${n} ji 🙏 Main HITARTHI se bol raha/rahi hoon. Aapne ${c} ke baare me jaankari maangi thi — ek Free Counselling call se shuruaat karein? Kab baat kar sakte hain?`,
  Called:`Namaste ${n} ji, kal ${c} ki baat hui thi. Aapke liye demo class ka time fix kar doon? Fee ₹300/mahina ke plan ya kishton me bhi de sakte hain.`,Demo:`Namaste ${n} ji, demo class kaisi lagi? 🙂 ${c} me admission ke liye koi sawal ho to bataiye — meri coupon se 5% chhoot bhi milegi.`,Joined:`${n} ji, HITARTHI parivar me swagat hai 🎉 Koi bhi madad chahiye to bataiye. Apne doston ko bhi batayein!`,No:`Namaste ${n} ji, jab bhi ${c} ya koi aur skill seekhna ho, main yahin hoon 🙏`};
  return "https://wa.me/91"+l.mobile+"?text="+encodeURIComponent(T[l.status]||T.New);}
function ptRender(){const h=$("#ptLeads");if(!h)return;const today=new Date().toISOString().slice(0,10),L=PTS.leads,open=L.filter(x=>x.status!=="Joined"&&x.status!=="No");
  const cnt={due:open.filter(x=>x.fu&&x.fu<=today).length,Green:open.filter(x=>x.color==="Green").length,Yellow:open.filter(x=>x.color==="Yellow").length,White:open.filter(x=>x.color==="White").length,none:open.filter(x=>!x.color).length,joined:L.filter(x=>x.status==="Joined"||x.bought).length};
  const F={due:x=>x.fu&&x.fu<=today&&x.status!=="Joined"&&x.status!=="No",Green:x=>x.color==="Green"&&x.status!=="No"&&x.status!=="Joined",Yellow:x=>x.color==="Yellow"&&x.status!=="No"&&x.status!=="Joined",White:x=>x.color==="White"&&x.status!=="No"&&x.status!=="Joined",none:x=>!x.color&&x.status!=="No"&&x.status!=="Joined",joined:x=>x.status==="Joined"||!!x.bought,all:()=>true};
  const q=PTS.q.toLowerCase(),list=L.filter(F[PTS.fil]||F.all).filter(x=>!q||(x.name+" "+x.mobile+" "+x.interest+" "+x.city).toLowerCase().includes(q));
  const tab=(k,lab,n)=>`<button type="button" data-ptf="${k}" aria-pressed="${PTS.fil===k}">${lab}${n!=null?` <b>${n}</b>`:""}</button>`;
  h.innerHTML=`${PTS.demo?'<p class="ml-note">👀 यह नमूना list है — आपकी website पर आपकी असली list Google Sheet से आएगी।</p>':""}
    <div class="pt-sum"><div class="g"><b>${cnt.Green}</b><span>🟢 पक्के</span></div><div class="y"><b>${cnt.Yellow}</b><span>🟡 हो सकता है</span></div><div class="w"><b>${cnt.White}</b><span>⚪ ठंडे</span></div><div class="d"><b>${cnt.due}</b><span>⏰ आज follow-up</span></div><div class="j"><b>${cnt.joined}</b><span>✅ जुड़े</span></div></div>
    <div class="pt-tabs">${tab("due","⏰ आज",cnt.due)}${tab("Green","🟢",cnt.Green)}${tab("Yellow","🟡",cnt.Yellow)}${tab("White","⚪",cnt.White)}${tab("none","◻️ नए",cnt.none)}${tab("joined","✅",cnt.joined)}${tab("all","सब",L.length)}</div>
    <div class="pt-bar"><input type="search" id="ptQ" placeholder="नाम / नंबर / course से खोजें" value="${esc(PTS.q)}"><button type="button" class="btn btn-orange btn-sm" id="ptAddBtn">➕ नया नाम जोड़ें</button></div>
    <form class="pt-add" id="ptAdd" hidden><input id="paName" placeholder="नाम" maxlength="60"><input id="paMob" type="tel" inputmode="numeric" maxlength="10" placeholder="Mobile"><select id="paInt"><option value="">किस course में रुचि?</option>${COURSES.map(c=>`<option>${esc(c.name)}</option>`).join("")}<option>Book Membership</option><option>Monthly Plan</option></select><input id="paCity" placeholder="शहर (optional)" maxlength="40">
      <div class="pt-clr" role="group" aria-label="रंग">${["Green","Yellow","White"].map(k=>`<label><input type="radio" name="paClr" value="${k}"${k==="Yellow"?" checked":""}> ${CLR[k][0]} ${CLR[k][1]}</label>`).join("")}</div>
      <input id="paFu" type="date" title="अगला follow-up"><input id="paNote" placeholder="Note (जैसे: बेटे के लिए, शाम को call)" maxlength="300"><button class="btn btn-primary" type="submit">✓ List में जोड़ें</button><p class="mc-msg" id="paMsg"></p>
      <p class="small muted">💡 पहले अपने 50 जानने वालों की list बनाइए — रिश्तेदार, पड़ोसी, दोस्त, दुकानदार। 🟢 = जिनके घर में student है और ज़रूरत पक्की, 🟡 = शायद, ⚪ = अभी नहीं। एक नंबर 60 दिन तक एक ही Partner का रहता है।</p></form>
    <div class="pt-list">${list.length?list.map(l=>`<div class="pt-l c-${l.color||"none"}${l.fu&&l.fu<=today&&l.status!=="Joined"&&l.status!=="No"?" due":""}" data-row="${l.row}">
        <div class="pt-l1"><b>${esc(l.name)}</b><span class="pt-src">${esc(l.source)}</span>${l.bought?`<span class="mc-chip g">✅ ख़रीदा: ${esc(l.bought)}</span>`:""}</div>
        <div class="pt-l2"><span>📞 ${esc(l.mobile)}</span>${l.interest?`<span>🎯 ${esc(l.interest)}</span>`:""}${l.city?`<span>📍 ${esc(l.city)}</span>`:""}${l.fu?`<span class="pt-fu">⏰ ${esc(l.fu)}</span>`:""}</div>
        ${l.note?`<p class="pt-note">📝 ${esc(l.note)}</p>`:""}
        <div class="pt-l3"><div class="pt-cb">${["Green","Yellow","White"].map(k=>`<button type="button" data-clr="${k}" aria-pressed="${l.color===k}" title="${CLR[k][1]}">${CLR[k][0]}</button>`).join("")}</div>
          <select data-st aria-label="हाल">${Object.keys(LST).map(k=>`<option value="${k}"${l.status===k?" selected":""}>${LST[k]}</option>`).join("")}</select>
          <input type="date" data-fu value="${esc(l.fu)}" title="अगला follow-up">
          <a class="btn btn-wa btn-sm" href="${ptWA(l)}" target="_blank" rel="noopener">WhatsApp</a><a class="btn btn-ghost btn-sm" href="tel:+91${esc(l.mobile)}">📞 Call</a><button type="button" class="btn btn-ghost btn-sm" data-ai="1">🤖 संदेश बनाएँ</button><button type="button" class="btn btn-ghost btn-sm" data-nt="1">📝</button></div></div>`).join(""):`<div class="ml-empty">${PTS.fil==="due"?"🎉 आज कोई follow-up बाकी नहीं।":"इस हिस्से में अभी कोई नाम नहीं।"} <button type="button" class="lnk" data-ptf="all">सब देखें</button></div>`}</div>`;
  $("#ptQ").oninput=e=>{PTS.q=e.target.value;const p=e.target.selectionStart;ptRender();const i=$("#ptQ");i.focus();try{i.setSelectionRange(p,p);}catch(x){}};
  $("#ptAddBtn").onclick=()=>{const f=$("#ptAdd");f.hidden=!f.hidden;if(!f.hidden)$("#paName").focus();};
  $("#ptAdd").onsubmit=async e=>{e.preventDefault();const m=$("#paMsg"),o={name:$("#paName").value.trim(),mobile:$("#paMob").value.replace(/\D/g,""),interest:$("#paInt").value,city:$("#paCity").value.trim(),color:(document.querySelector('input[name="paClr"]:checked')||{}).value||"",fu:$("#paFu").value,note:$("#paNote").value.trim()};
    if(o.name.length<2){m.textContent="नाम लिखें";m.className="mc-msg err";return;}if(!/^[6-9]\d{9}$/.test(o.mobile)){m.textContent="सही 10 अंकों का mobile लिखें";m.className="mc-msg err";return;}
    if(PTS.demo){if(PTS.leads.some(x=>x.mobile===o.mobile)){m.textContent="यह नंबर पहले से आपकी list में है";m.className="mc-msg err";return;}PTS.leads.unshift(Object.assign({row:Date.now(),time:new Date().toISOString().slice(0,16).replace("T"," "),source:"Partner की list",status:"New",bought:""},o));PTS.fil="all";ptRender();toast("✓ "+o.name+" जुड़ गए (नमूना)");return;}
    try{const r=await hbCall("leadadd",Object.assign({id:HB.id,pin:HB.pin},o));if(r&&r.ok){toast(r.msg);PTS.fil="all";ptLoad();}else{m.textContent=(r&&r.err)||"नहीं जुड़ा";m.className="mc-msg err";}}catch(x){m.textContent="Server से जुड़ नहीं पाए";m.className="mc-msg err";}};}
async function ptUpd(row,patch){const l=PTS.leads.find(x=>x.row===row);if(!l)return;Object.assign(l,patch);ptRender();if(PTS.demo)return;
  try{const r=await hbCall("leadupd",Object.assign({id:HB.id,pin:HB.pin,row},patch));if(r&&r.ok){Object.assign(l,r.lead);}else toast((r&&r.err)||"Save नहीं हुआ");}catch(e){toast("Server से जुड़ नहीं पाए — दोबारा करें");}}
document.addEventListener("click",e=>{const f=e.target.closest("[data-ptf]");if(f){PTS.fil=f.dataset.ptf;ptRender();return;}
  const el=e.target.closest(".pt-l");if(!el)return;const row=+el.dataset.row,l=PTS.leads.find(x=>x.row===row);if(!l)return;
  const c=e.target.closest("[data-clr]");if(c){ptUpd(row,{color:l.color===c.dataset.clr?"":c.dataset.clr});return;}
  if(e.target.closest("[data-nt]")){const n=prompt("Note लिखें ("+l.name+")",l.note||"");if(n!=null)ptUpd(row,{note:n.slice(0,300)});return;}
  if(e.target.closest("[data-ai]")){ptTab("sathi");sathiFill({task:l.status==="New"?"msg":"followup",cname:l.name,course:l.interest,status:LST[l.status]+(l.note?" • "+l.note:""),who:/parent|बेटे|बेटी|बच्च/i.test(l.note)?"Parent":""});}});
document.addEventListener("change",e=>{const el=e.target.closest(".pt-l");if(!el)return;const row=+el.dataset.row;
  if(e.target.matches("[data-st]"))ptUpd(row,{status:e.target.value});else if(e.target.matches("[data-fu]"))ptUpd(row,{fu:e.target.value});});

/* ---------- 🤖 HITARTHI साथी (AI) ---------- */
const SATHI_T=[["msg","✉️ पहला संदेश"],["followup","🔁 Follow-up"],["objection","🛡️ आपत्ति का जवाब"],["post","📣 Post / Status"],["reel","🎬 Reel script"],["plan","📅 आज का plan"],["ask","❓ कुछ भी पूछें"]];
const SATHI_DEMO={msg:"नमस्ते मोहन जी 🙏\nमैं HITARTHI से अमित बोल रहा हूँ। आपके बेटे के लिए Basic Computer Course (2 महीने) बहुत काम का है — Windows, internet, email और typing, सब सरल हिंदी में, online live class + recording के साथ।\nपहले Free Counselling ले लीजिए, पसंद आए तभी जुड़िए। कल शाम 6 बजे का समय ठीक रहेगा?",
  followup:"नमस्ते राहुल जी 🙂 demo class कैसी लगी?\nAdvanced Excel की fee ₹3,499 है — आप चाहें तो किश्तों में भी दे सकते हैं (पहली किश्त ₹2,000, बाकी 90 दिन में)। मेरा coupon HT1007 डालने पर 5% छूट भी मिलेगी।\nकोई सवाल हो तो बताइए, मैं मदद करूँगा।",
  objection:"समझ सकता हूँ जी, ख़र्च सोच-समझकर ही करना चाहिए 🙏 कुछ आसान रास्ते:\n1️⃣ ₹300/महीना का plan — कोई lock-in नहीं, कभी भी बंद करें\n2️⃣ बड़ी fee किश्तों में\n3️⃣ पहले Free Counselling — पसंद आए तभी आगे\nकौन-सा आपके लिए ठीक रहेगा?",
  post:"💻 Computer नहीं आता? अब घबराने की ज़रूरत नहीं!\nHITARTHI के साथ सरल हिंदी में सीखिए — Computer, Excel, Typing और AI Tools 🚀\n✅ Online live class + recording\n✅ QR वाला certificate\n👉 Free Counselling — आज ही book करें! Coupon: HT1007\n#HITARTHI #ComputerCourse #SkillIndia #FromLearningToEarning",
  reel:"0–3 सेकंड (Hook): \"Excel में 1 घंटे का काम 1 मिनट में?\" — screen पर घड़ी ⏰\n3–20 सेकंड: 3 trick — 1) Flash Fill 2) Ctrl+T से table 3) SUMIF — हर trick screen recording में\n20–30 सेकंड (CTA): \"ऐसे 50 trick सीखिए HITARTHI Advanced Excel में — Free Counselling, link bio में\" — logo + coupon HT1007",
  plan:"आज का plan 📅\n1. 🟢 वाले 3 लोगों को call — मोहन जी, पूजा जी के पापा, राहुल\n2. 🟡 वाले 5 लोगों को follow-up संदेश भेजें\n3. WhatsApp status पर आज का poster लगाएँ\n4. 10 नए नाम list में जोड़ें (पड़ोस के students)\n5. शाम को एक व्यक्ति के साथ Free Counselling book करें",
  ask:"अच्छा सवाल! 🙂 HITARTHI में हर बड़े course की fee किश्तों में दी जा सकती है, और ₹300/₹500 महीने के plan भी हैं। Certificate final test पास करने पर अपने-आप बनता है और उस पर QR होता है जिससे कोई भी जाँच सकता है।"};
function sathiHTML(){return `<div class="sa"><div class="sa-h"><b>🤖 HITARTHI साथी</b><small>आपका AI सहायक — संदेश, post, जवाब, plan • हिंदी में • ईमानदारी के नियमों के साथ</small></div>
  <div class="sa-t" role="group">${SATHI_T.map(([k,l],i)=>`<button type="button" data-sat="${k}" aria-pressed="${i===0}">${l}</button>`).join("")}</div>
  <div class="sa-f"><label>ग्राहक कौन है?<select id="saWho"><option value="">—</option><option>Student</option><option>Parent</option><option>नौकरी की तलाश वाला युवा</option><option>नौकरी करने वाला</option><option>दुकानदार / Business</option><option>Teacher / School</option></select></label>
    <label>Course / रुचि<select id="saCourse"><option value="">—</option>${COURSES.map(c=>`<option>${esc(c.name)}</option>`).join("")}<option>Book Membership</option><option>Monthly Plan ₹300/₹500</option><option>Partner बनना</option></select></label>
    <label>ग्राहक का नाम <small>(optional)</small><input id="saName" maxlength="40"></label>
    <label class="wide">विवरण / आपत्ति / सवाल<textarea id="saText" rows="2" maxlength="600" placeholder="जैसे: ग्राहक बोला 'fee ज़्यादा है' • या: बेटा class 10 में है"></textarea></label></div>
  <button type="button" class="btn btn-orange" id="saGo">✨ लिखो</button>
  <div class="sa-out" id="saOut" hidden><pre id="saTxt"></pre><div class="sa-acts"><button type="button" class="btn btn-ghost btn-sm" id="saCopy">📋 Copy</button><a class="btn btn-wa btn-sm" id="saWA" target="_blank" rel="noopener">WhatsApp पर भेजें</a><button type="button" class="btn btn-ghost btn-sm" id="saAgain">↻ दूसरा लिखो</button></div>
    <p class="small muted">भेजने से पहले एक बार पढ़ लें — कीमत या बात ग़लत लगे तो सुधार दें। AI कभी कमाई / नौकरी की guarantee नहीं लिखता।</p></div></div>`;}
let SA_TASK="msg",SA_LEAD=null;
function sathiFill(o){SA_TASK=o.task||"msg";SA_LEAD=o;const h=$("#ptSathi");if(!h)return;
  h.querySelectorAll("[data-sat]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.sat===SA_TASK));if(o.who)$("#saWho").value=o.who;if(o.course){const s=$("#saCourse");if([...s.options].some(x=>x.value===o.course))s.value=o.course;}
  $("#saName").value=o.cname||"";$("#saText").value=o.status||"";h.scrollIntoView({behavior:"smooth",block:"start"});}
function sathiMount(){const h=$("#ptSathi");if(!h||h.dataset.on)return;h.dataset.on="1";h.innerHTML=sathiHTML();
  h.addEventListener("click",async e=>{const t=e.target.closest("[data-sat]");if(t){SA_TASK=t.dataset.sat;SA_LEAD=null;h.querySelectorAll("[data-sat]").forEach(b=>b.setAttribute("aria-pressed",b===t));return;}
    if(e.target.id==="saCopy"){try{navigator.clipboard.writeText($("#saTxt").textContent).then(()=>toast("Copy हो गया"));}catch(x){toast("Copy नहीं हुआ — text चुनकर copy करें");}return;}
    if(e.target.id!=="saGo"&&e.target.id!=="saAgain")return;
    const b=$("#saGo"),o={task:SA_TASK,who:$("#saWho").value,course:$("#saCourse").value,cname:$("#saName").value.trim(),text:$("#saText").value.trim()};
    b.disabled=true;b.textContent="✨ लिख रहा है…";let r;
    if(HB.demo||!HB_API){await new Promise(z=>setTimeout(z,500));r={ok:true,text:SATHI_DEMO[SA_TASK]+"\n\n(नमूना जवाब — आपकी website पर Gemini AI आपकी जानकारी के हिसाब से नया लिखेगा)"};}
    else{try{r=await hbCall("sathi",Object.assign({id:HB.id,pin:HB.pin},o));}catch(x){r={ok:false,err:"Server से जुड़ नहीं पाए"};}}
    b.disabled=false;b.textContent="✨ लिखो";
    if(!r||!r.ok){toast((r&&r.err)||"AI जवाब नहीं दे पाया");return;}
    $("#saOut").hidden=false;$("#saTxt").textContent=r.text;const mob=SA_LEAD&&PTS.leads.find(x=>x.name===SA_LEAD.cname);
    $("#saWA").href=(mob?"https://wa.me/91"+mob.mobile:"https://wa.me/")+"?text="+encodeURIComponent(r.text);track("sathi_use",{task:SA_TASK});});}

/* ---------- 🌐 मेरा Page (dashboard में) ---------- */
function myPageHTML(t){const u=ppURL(t.id);return `<div class="mp"><div class="mp-l"><b>🌐 आपका अपना HITARTHI Page</b><p class="small muted">आपकी photo, नाम, coupon, course quiz और Free Counselling — यहाँ से आई हर lead अपने-आप आपकी list में।</p>
  <div class="mp-link"><input readonly value="${esc(u)}" id="mpU"><button type="button" class="btn btn-ghost btn-sm" id="mpCopy">Copy</button><a class="btn btn-wa btn-sm" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent("नमस्ते 🙏 Computer, AI, Spoken English और पैसे की समझ — सही course चुनने के लिए मेरा HITARTHI page देखें (5% छूट): "+u)}">Share</a><button type="button" class="btn btn-primary btn-sm" id="mpView">👀 देखें</button></div>
  <label class="mp-in">Page पर आपकी एक लाइन<input id="mpIntro" maxlength="160" placeholder="जैसे: मैं बोकारो से हूँ — 5 साल से students को सही course चुनने में मदद कर रहा हूँ।"></label>
  <label class="mp-ck"><input type="checkbox" id="mpWa"> मेरा WhatsApp नंबर page पर दिखाएँ</label><button type="button" class="btn btn-orange btn-sm" id="mpSave">✓ Save</button><span class="small" id="mpMsg"></span></div>
  <div class="mp-qr" id="mpQR"></div></div>`;}
function myPageMount(t){const h=$("#ptPage");if(!h)return;h.innerHTML=myPageHTML(t);try{$("#mpQR").innerHTML=qrSVG(ppURL(t.id),150,"#0B1A4A")+'<small>QR scan = आपका page</small>';}catch(e){}
  $("#mpCopy").onclick=()=>{try{navigator.clipboard.writeText(ppURL(t.id)).then(()=>toast("Link copy हो गया"));}catch(e){toast(ppURL(t.id));}};
  $("#mpView").onclick=()=>{go("pp");ppShow(t.id,HB.demo?"demo":"self");};
  $("#mpSave").onclick=async()=>{const intro=$("#mpIntro").value.trim(),wa=$("#mpWa").checked,m=$("#mpMsg");if(HB.demo||!HB_API){m.textContent="✓ (नमूना) — आपकी website पर Sheet में save होगा";return;}
    try{const r=await hbCall("ppset",{id:HB.id,pin:HB.pin,intro,wa});m.textContent=r&&r.ok?r.msg:(r&&r.err)||"Save नहीं हुआ";}catch(e){m.textContent="Server से जुड़ नहीं पाए";}};}

/* ---------- Dashboard में "Partner Tools" tabs ---------- */
function ptTab(k){$$("#ptTools [data-ptt]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.ptt===k));$$("#ptTools .ptp").forEach(p=>p.hidden=p.dataset.p!==k);if(k==="leads"&&!PTS.loaded){PTS.loaded=1;ptLoad();}if(k==="sathi")sathiMount();}
function ptMount(t){const ib=document.querySelector("#mcDash .mc-idbar");if(!ib)return;let w=$("#ptTools");if(w)w.remove();
  ib.insertAdjacentHTML("afterend",`<div class="ptt" id="ptTools"><div class="ptt-h" role="group" aria-label="Partner Tools"><button type="button" data-ptt="leads" aria-pressed="true">📋 मेरे Leads</button><button type="button" data-ptt="sathi" aria-pressed="false">🤖 HITARTHI साथी</button><button type="button" data-ptt="page" aria-pressed="false">🌐 मेरा Page</button><button type="button" data-ptt="kit" aria-pressed="false">📣 Poster + Coupon</button></div>
    <div class="ptp" data-p="leads" id="ptLeads"></div><div class="ptp" data-p="sathi" id="ptSathi" hidden></div><div class="ptp" data-p="page" id="ptPage" hidden></div><div class="ptp" data-p="kit" hidden><div id="kitHost"></div></div></div>`);
  $("#ptTools .ptt-h").onclick=e=>{const b=e.target.closest("[data-ptt]");if(b)ptTab(b.dataset.ptt);};
  PTS.loaded=0;PTS.got=0;PTS.leads=[];PTS.fil="due";delete ($("#ptSathi")||{dataset:{}}).dataset.on;ptTab("leads");myPageMount(t);}
/* openPay: Partner page से आए ग्राहक का coupon अपने-आप */
(function(){const _op=openPay;openPay=function(o){_op(o);try{const c=window.PP_COUPON||"";if(c&&!PAY.plan&&PAY.amt>0&&!$("#payCp").hidden&&!PAY.coupon){$("#payCpIn").value=c;cpApply();}}catch(e){}};})();

{const _mcR=mcRender;mcRender=function(t){_mcR(t);try{ptMount(t);kitMount(t);}catch(e){console.error(e);}};}
/* ---------- WhatsApp CHAT WIDGET ---------- */
(function(){const W=$("#wac");const logoSrc=(document.querySelector("#logo image")||{getAttribute:()=>""}).getAttribute("href");
  const Q=[["🎓 Course / Free Counselling की जानकारी","Namaste HITARTHI, mujhe courses aur Free Counselling ki jankari chahiye."],["📚 Books और E-books","Namaste HITARTHI, mujhe books / e-books ki jankari chahiye."],["🌿 Health Products","Namaste HITARTHI, mujhe Health products (NutriPlus, Jeevanprash, Hair Oil) ki jankari chahiye."],["🤝 Partner बनना है","Namaste HITARTHI, mujhe free Partner banna hai. Plan samjha dijiye."],["💳 Order / Payment में मदद","Namaste HITARTHI, mujhe apne order/payment ke baare me madad chahiye."],["🔑 Partner PIN / KYC मदद","Namaste HITARTHI, mujhe Partner PIN / KYC me madad chahiye."]];
  const send=t=>{const r=typeof getRef==="function"?getRef():"";window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(t+(r?"\nPartner ID: "+r:"")),"_blank","noopener");track("wa_chat",{});};
  W.innerHTML=`<div class="wac-h">${logoSrc?`<img loading="lazy" decoding="async" src="${logoSrc}" alt="">`:""}<span><b>HITARTHI Support</b><small>आम तौर पर कुछ मिनटों में जवाब</small></span><button aria-label="बंद करें" id="wacX">✕</button></div>
    <div class="wac-b"><div class="wac-msg">🙏 नमस्ते! HITARTHI में आपका स्वागत है। बताइए, किस बारे में बात करनी है? नीचे से चुनिए या अपना सवाल लिखिए।</div><div class="wac-q">${Q.map((q,k)=>`<button data-wq="${k}">${q[0]}</button>`).join("")}</div></div>
    <form class="wac-f" id="wacF"><input id="wacT" placeholder="अपना सवाल लिखिए…" aria-label="संदेश"><button aria-label="WhatsApp पर भेजें">➤</button></form>`;
  W.addEventListener("click",e=>{const b=e.target.closest("[data-wq]");if(b)send(Q[+b.dataset.wq][1]);if(e.target.closest("#wacX"))W.hidden=true;});
  $("#wacF").addEventListener("submit",e=>{e.preventDefault();const v=$("#wacT").value.trim();send(v?"Namaste HITARTHI, "+v:"Namaste HITARTHI");$("#wacT").value="";});
  document.addEventListener("click",e=>{const a=e.target.closest('a.fab, .mbar a[href*="wa.me/919453717356"]');if(!a||e.ctrlKey||e.metaKey)return;e.preventDefault();e.stopPropagation();W.hidden=!W.hidden;if(!W.hidden)setTimeout(()=>$("#wacT").focus(),50);},true);
  document.addEventListener("keydown",e=>{if(e.key==="Escape")W.hidden=true;});})();

/* ---------- किश्त (Part payment) + Monthly + मेरी किश्त ---------- */
function partApply(){const on=$("#payPartOn").checked;$("#payPartBox").hidden=!on;if(on&&PAY.coupon)cpRemove();$("#payCp").hidden=on||!(PAY.full>0&&!(PAY.plan&&PAY.plan.type!=="Part"));
  if(on){const mn=+$("#payPartAmt").min,v=Math.min(PAY.full-1,Math.max(mn,Math.round(+$("#payPartAmt").value||mn)));PAY.amt=v;PAY.plan={type:"Part",total:PAY.full};PAY.item="किश्त 1: "+PAY.base+" (कुल ₹"+PAY.full+")";}
  else{PAY.amt=PAY.full;PAY.plan=null;PAY.item=PAY.base;}
  $("#payItem").textContent=PAY.item;payRender();}
$("#payPartOn").addEventListener("change",partApply);$("#payPartAmt").addEventListener("change",partApply);
/* ---------- ₹1 DEMO BOOKS — ख़रीदें और वहीं पढ़ें (सुनें भी) ---------- */
const DEMO_BOOKS=[
 {id:"paise",book:B("पैसे की पहली समझ","Demo Book • ₹1 में पढ़िए","HITARTHI","finance",1,0,["#7C2D12","#EA580C","#4A1A0B","#FFE066"],"HITARTHI Demo Book",20,["Income और ख़र्च","Emergency Fund","छोटी बचत की ताक़त"]),
  pts:["Income और ख़र्च का हिसाब","Emergency Fund — मुसीबत का साथी","छोटी बचत की बड़ी ताक़त"],
  ch:[["अध्याय 1 — Income और ख़र्च का हिसाब",`<h2>अध्याय 1 — Income और ख़र्च का हिसाब</h2><p>पैसे की समझ का पहला नियम है: <b>जो गिना नहीं जाता, वह संभाला नहीं जाता।</b> इस हफ़्ते हर ख़र्च एक कॉपी या mobile note में लिखिए — चाय से लेकर किराये तक।</p><p>हफ़्ते के अंत में ख़र्च को तीन हिस्सों में बाँटिए: <b>ज़रूरी</b> (किराया, राशन, फ़ीस), <b>ज़रूरी पर कम हो सकता है</b> (बिजली, mobile plan), और <b>चाहत</b> (बाहर खाना, shopping)।</p><p>ज़्यादातर परिवार तीसरे हिस्से में 15–25% बचा सकते हैं — बिना ज़िंदगी कठिन किए। बचत का पहला रुपया यहीं से निकलता है।</p><h3>आज का काम</h3><ul><li>आज के सारे ख़र्च लिखिए</li><li>हर ख़र्च के आगे लिखिए: ज़रूरी / कम हो सकता / चाहत</li></ul>`],
   ["अध्याय 2 — Emergency Fund: मुसीबत का साथी",`<h2>अध्याय 2 — Emergency Fund: मुसीबत का साथी</h2><p>बीमारी, नौकरी छूटना, घर की मरम्मत — मुसीबत बताकर नहीं आती। <b>Emergency fund</b> वह रकम है जो ऐसे समय में आपको कर्ज़ से बचाती है।</p><p><b>लक्ष्य:</b> घर के 3 से 6 महीने के ज़रूरी ख़र्च के बराबर रकम। इसे ऐसी जगह रखें जहाँ से एक-दो दिन में निकल सके, और जिसे रोज़ के ख़र्च में न छुएँ।</p><p>शुरुआत छोटी रखिए — हर महीने ₹500 भी काफ़ी है। धीरे-धीरे यही रकम आपकी सबसे बड़ी हिम्मत बनती है।</p><h3>आज का काम</h3><ul><li>अपना एक महीने का ज़रूरी ख़र्च जोड़िए</li><li>उसका 3 गुना = आपका पहला लक्ष्य</li></ul>`],
   ["अध्याय 3 — छोटी बचत की बड़ी ताक़त",`<h2>अध्याय 3 — छोटी बचत की बड़ी ताक़त</h2><p>रामू हर दिन चाय-नाश्ते पर बीस रुपये ख़र्च करता था। दादा जी ने पूछा — "यही बीस रुपये रोज़ बचाओ, तो दस साल में कितने होंगे?" जवाब: लगभग तिहत्तर हज़ार रुपये — और यह सिर्फ़ जोड़ है।</p><p>असली जादू तब होता है जब बचत पर कमाई हो, और उस कमाई पर भी कमाई — इसे <b>कंपाउंडिंग</b> कहते हैं। ₹10,000 पर हर साल 10% बढ़त मिले तो दसवें साल तक यह लगभग ₹25,900 हो जाते हैं।</p><p><b>याद रखिए:</b> कंपाउंडिंग को तीन चीज़ें चाहिए — नियमित बचत, धैर्य और समय। <i>(यह शिक्षा के लिए उदाहरण है, निवेश की सलाह नहीं।)</i></p><p>पूरी जानकारी के लिए पढ़ें — HITARTHI की "कंपाउंडिंग का जादू" और "The Money Blueprint"।</p>`]]},
 {id:"computer",book:B("Computer की पहली सीढ़ी","Demo Book • ₹1 में पढ़िए","HITARTHI","student",1,0,["#0B1A4A","#0057D9","#060F30","#00C2FF"],"HITARTHI Demo Book",20,["Computer चालू करना","File-Folder","Internet सुरक्षित"]),
  pts:["Computer चालू करना, Mouse और Keyboard","File और Folder — सब कुछ व्यवस्थित","Internet और Email — सुरक्षित तरीके से"],
  ch:[["अध्याय 1 — Computer चालू करना, Mouse और Keyboard",`<h2>अध्याय 1 — Computer चालू करना, Mouse और Keyboard</h2><p>Computer सीखने से डरिए मत — हर expert ने भी कभी पहली बार mouse पकड़ा था।</p><ul><li><b>चालू करना:</b> CPU / laptop का power बटन एक बार दबाइए। Screen आने तक रुकिए।</li><li><b>बंद करना:</b> कभी सीधा plug न निकालें — <b>Start → Power → Shut down</b>। इससे files ख़राब नहीं होतीं।</li><li><b>Mouse:</b> बायाँ बटन = चुनना (click), दो बार जल्दी = खोलना (double-click), दायाँ बटन = और विकल्प (right-click)।</li><li><b>Keyboard:</b> Shift = बड़ा अक्षर, Enter = नई line / ठीक है, Backspace = पीछे का मिटाना।</li></ul><h3>आज का काम</h3><p>Computer चालू कीजिए, Notepad खोलिए और अपना नाम 5 बार टाइप कीजिए। फिर ठीक तरीके से Shut down कीजिए।</p>`],
   ["अध्याय 2 — File और Folder — सब कुछ व्यवस्थित",`<h2>अध्याय 2 — File और Folder — सब कुछ व्यवस्थित</h2><p>Computer एक अलमारी की तरह है। <b>Folder</b> = दराज़, <b>File</b> = उसमें रखा कागज़।</p><ul><li><b>नया folder:</b> Desktop पर right-click → New → Folder → नाम लिखें → Enter</li><li><b>नाम बदलना:</b> folder चुनें → F2 दबाएँ → नया नाम</li><li><b>Copy / Paste:</b> Ctrl + C (copy), Ctrl + V (paste)</li><li><b>ग़लती से मिटा दिया?</b> Recycle Bin खोलें → right-click → Restore</li></ul><p><b>सुझाव:</b> हर काम का अलग folder बनाइए — "पढ़ाई", "Photos", "Bills"। ढूँढने में समय बचेगा।</p>`],
   ["अध्याय 3 — Internet और Email — सुरक्षित तरीके से",`<h2>अध्याय 3 — Internet और Email — सुरक्षित तरीके से</h2><p>Internet ज्ञान का समंदर है — पर हर लहर सुरक्षित नहीं। ये नियम हमेशा याद रखें:</p><ul><li>Website का पता <b>https://</b> से शुरू हो और ताले 🔒 का निशान दिखे</li><li><b>OTP, PIN, password</b> किसी को न बताएँ — bank कभी नहीं माँगता</li><li>"इनाम जीता है", "KYC update करो" जैसे अनजान link न खोलें</li><li>Email का password मज़बूत रखें और <b>2-Step Verification</b> चालू करें</li></ul><h3>आज का काम</h3><p>अपनी Gmail खोलिए, Settings → Security में जाकर 2-Step Verification देखिए। पूरा Basic Computer course HITARTHI पर — पहले Free Counselling।</p>`]]}
];
DEMO_BOOKS.forEach(d=>{d.item="Demo Book: "+d.book.t+" (₹1 E-book)";});
const DBK="hitarthi_demobooks";
const dbGet=()=>{try{return JSON.parse(localStorage.getItem(DBK)||"{}")||{};}catch(e){return {};}};
const dbSet=o=>{try{localStorage.setItem(DBK,JSON.stringify(o));}catch(e){}};
function dbOpen(id){const d=DEMO_BOOKS.find(x=>x.id===id);if(!d||!window.mlOpenLocal)return;const tx={},it={key:"demo-"+d.id,title:d.book.t,types:["Ebook"],via:"",note:"",chapters:d.ch.map((c,n)=>{tx["db_"+d.id+n]=c[1];return {n,title:c[0],type:"Ebook",mins:4,free:false,open:true,demo:"db_"+d.id+n};})};
  it.total=it.open=it.chapters.length;mlOpenLocal(it,tx);track("demo_book_read",{book:d.id});}
function dbRender(){const own=dbGet();
  $$("[data-dbgrid]").forEach(g=>{g.innerHTML=DEMO_BOOKS.map(d=>`<div class="dbk-i"><div class="dbk-cv"><span class="dbk-tag">DEMO</span><div class="b3wrap" data-${own[d.id]?"dbread":"dbbuy"}="${d.id}">${book3d(d.book,"md")}</div></div>
    <div><h3>${esc(d.book.t)} <span class="dbk-p">₹1</span></h3><ul class="ticks">${d.pts.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
    ${own[d.id]?`<button class="btn btn-primary" type="button" data-dbread="${d.id}">📖 पढ़ें / 🔊 सुनें</button> <span class="small" style="color:var(--green);font-weight:800">✓ आपकी book</span>`:`<button class="btn btn-orange" type="button" data-dbbuy="${d.id}">₹1 में ख़रीदें और पढ़ें →</button>`}</div></div>`).join("");});
  const L=$("#mlDemoOwn");if(L){const ids=DEMO_BOOKS.filter(d=>own[d.id]);L.hidden=!ids.length;L.innerHTML=ids.length?`<b>📖 आपकी ₹1 Demo Books</b>${ids.map(d=>`<button type="button" class="btn btn-primary btn-sm" data-dbread="${d.id}">${esc(d.book.t)} — पढ़ें</button>`).join("")}`:"";}}
window.demoPaid=function(){const id=PAY.demoBook;if(!id)return;const o=dbGet();o[id]={t:Date.now(),ref:PAY.ref};dbSet(o);dbRender();
  const ok=$("#payOk");let b=$("#payDbRead");if(!b){b=document.createElement("button");b.type="button";b.id="payDbRead";b.className="btn btn-orange btn-block";ok.after(b);}
  b.hidden=false;b.textContent="📖 अभी पढ़ें — "+(DEMO_BOOKS.find(d=>d.id===id)||{book:{t:""}}).book.t;b.onclick=()=>{closePay();dbOpen(id);};track("purchase",{item:PAY.item,value:1,transaction_id:PAY.ref});};
document.addEventListener("click",e=>{const r=e.target.closest("[data-dbread]");if(r){e.preventDefault();dbOpen(r.dataset.dbread);return;}
  const b=e.target.closest("[data-dbbuy]");if(!b)return;e.preventDefault();const d=DEMO_BOOKS.find(x=>x.id===b.dataset.dbbuy);if(!d)return;
  openPay({amt:1,item:d.item,lines:[{item:d.item,amount:1,cat:"Digital"}],extra:"₹1 Demo Book",demoBook:d.id});});
/* UPI QR से ₹1 देने वाले के लिए (जब तक Google Sheet नहीं जुड़ी): UTR डालते ही पढ़ना शुरू */
$("#payDemo").addEventListener("click",()=>{const utr=$("#payUTR").value.replace(/\s+/g,"").toUpperCase(),mob=$("#payMob").value.replace(/\D/g,"");
  if(!/^[A-Z0-9]{8,30}$/.test(utr)){toast("₹1 pay करने के बाद UPI app में मिला UTR / Transaction ID नीचे डालें");$("#payUTR").focus();return;}
  if(mob.length!==10){toast("10 अंकों का mobile नंबर लिखें");$("#payMob").focus();return;}
  PAY.done=true;demoPaid();$("#payDemo").hidden=true;const o=$("#payOk");o.hidden=false;o.className="paym-ok";o.textContent="✅ धन्यवाद! आपकी Demo Book खुल गई। (Order ID: "+PAY.ref+")";});
dbRender();
/* ---------- PARTNER COUPON (5% छूट) • CASH ON DELIVERY • अधूरा PAYMENT ---------- */
function cartDone(){if(!PAY.lines)return;cart=[];saveCart();cartCount();try{renderCart();}catch(e){}$("#drawer").hidden=true;$("#scrim").hidden=true;}
const CP_PCT=5;
function cpRemove(silent){PAY.coupon="";PAY.cpOff=0;if(PAY.linesFull)PAY.lines=PAY.linesFull.map(l=>Object.assign({},l));
  if(!$("#payPartOn").checked)PAY.amt=PAY.full;$("#payCpGo").textContent="लगाएँ";delete $("#payCpGo").dataset.on;if(!silent){$("#payCpMsg").textContent="";$("#payCpIn").value="";}payRender();codShow();}
async function cpApply(){const code=$("#payCpIn").value.trim().toUpperCase().replace(/\s+/g,""),m=$("#payCpMsg");
  if(!/^[A-Z0-9]{3,15}$/.test(code)){m.textContent="Coupon code सही लिखें";m.className="cp-msg err";return;}
  if($("#payPartOn").checked){m.textContent="Coupon किश्त पर नहीं लगता — पूरा भुगतान चुनें";m.className="cp-msg err";return;}
  let r;if(!HB_API)r=/^HT\d{4,6}$/.test(code)?{ok:true,code,partner:code,name:"Partner",pct:CP_PCT}:{ok:false,err:"यह coupon code सही नहीं है (Demo में HT1007 डालकर देखें)"};
  else{$("#payCpGo").disabled=true;try{r=await hbCall("coupon",{code});}catch(e){r={ok:false,err:"Server से जुड़ नहीं पाए — दोबारा कोशिश करें"};}$("#payCpGo").disabled=false;}
  if(!r||!r.ok){m.textContent=(r&&r.err)||"Coupon नहीं लगा";m.className="cp-msg err";return;}
  const pct=r.pct||CP_PCT,f=1-pct/100;PAY.coupon=r.code;PAY.amt=Math.round(PAY.full*f);PAY.cpOff=PAY.full-PAY.amt;
  if(PAY.linesFull)PAY.lines=PAY.linesFull.map(l=>Object.assign({},l,{amount:Math.floor(l.amount*f)}));
  if(r.partner)$("#payRefId").value=r.partner;m.textContent=`✓ ${pct}% छूट लग गई — आपकी बचत ${rs(PAY.cpOff)}`+(r.partner&&r.name?` (Partner: ${r.name})`:"");m.className="cp-msg ok";
  $("#payCpGo").textContent="हटाएँ";$("#payCpGo").dataset.on="1";payRender();codShow();track("coupon_applied",{code:r.code,value:PAY.amt});}
$("#payCpGo").addEventListener("click",()=>{if($("#payCpGo").dataset.on){cpRemove();return;}cpApply();});
$("#payCpIn").addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();cpApply();}});
function codShow(){const phys=!!(PAY.lines&&PAY.lines.length&&PAY.lines.every(l=>l.cat==="Physical"));$("#payAddrF").hidden=!phys;
  $("#payCOD").hidden=!(phys&&!PAY.plan&&PAY.amt>0&&PAY.amt<=5000);}
$("#payCOD").addEventListener("click",async()=>{const nm=$("#payName").value.trim(),mob=$("#payMob").value.replace(/\D/g,""),ad=$("#payAddr").value.trim(),pid=($("#payRefId").value||"").trim().toUpperCase();
  if(nm.length<2){toast("अपना नाम लिखें");$("#payName").focus();return;}if(mob.length!==10){toast("10 अंकों का mobile नंबर लिखें");$("#payMob").focus();return;}
  if(ad.length<15){toast("Delivery का पूरा पता + PIN code लिखें");$("#payAddr").focus();return;}
  if(!HB_API){const o=$("#payOk");o.hidden=false;o.className="paym-ok";o.textContent="Demo: आपकी website पर यह order सीधे Google Sheet में COD के रूप में दर्ज होगा।";return;}
  const b=$("#payCOD");b.disabled=true;b.textContent="दर्ज हो रहा है…";
  try{const r=await hbCall("order",{email:payEmailV(),mode:"COD",ref:PAY.ref,amount:PAY.amt,item:PAY.item,name:nm,mobile:mob,partner:pid,lines:PAY.lines,coupon:PAY.coupon||"",addr:ad});
    if(r&&r.ok){PAY.done=true;cartDone();PAY.ref=r.orderId||PAY.ref;$("#payRef").textContent=PAY.ref;const o=$("#payOk");o.hidden=false;o.className="paym-ok";o.textContent=(r.msg||"COD order दर्ज")+" Order ID: "+PAY.ref+" — इसी से \"मेरा Order\" में tracking देखें।";
      ["#payCOD","#paySubmit","#payOnline"].forEach(x=>$(x).hidden=true);track("purchase",{item:PAY.item,value:PAY.amt,transaction_id:PAY.ref,mode:"COD"});}
    else toast((r&&r.err)||"Order दर्ज नहीं हुआ");}
  catch(e){toast("Server से जुड़ नहीं पाए — WhatsApp करें");}
  finally{b.disabled=false;b.textContent="📦 Cash on Delivery — सामान मिलने पर नक़द दें";}});
/* Payment window बंद की, पर order नहीं हुआ — नाम/mobile डाला था तो "अधूरा Payment" lead (2 घंटे बाद WhatsApp याद दिलाएगा) */
function payAbandon(){try{if(!HB_API||PAY.done||!(PAY.amt>0))return;const mob=$("#payMob").value.replace(/\D/g,"");if(mob.length!==10)return;
  hbCall("lead",{name:$("#payName").value.trim(),mobile:mob,interest:(PAY.item+" ₹"+PAY.amt).slice(0,120),source:"अधूरा Payment",partner:($("#payRefId").value||"").trim().toUpperCase()}).catch(()=>{});PAY.done=true;}catch(e){}}

/* ---------- FREE COUNSELLING / LEAD FORM — Google Sheet के "Leads" tab में ---------- */
(function(){
  const m=$("#leadM"),f=$("#leadF");let LO={};
  const opts=["कोई भी — मुझे सलाह चाहिए"].concat(COURSES.map(c=>c.name),["Book Membership (₹5,000 / ₹10,500)","Books / E-books","Monthly Plan (₹300 / ₹500)","Partner बनना है","School tie-up"]);
  $("#leadCourse").innerHTML=opts.map(o=>`<option>${esc(o)}</option>`).join("");
  window.openLead=function(o){LO=o||{};$("#leadT").textContent=LO.title||"🎓 Free Counselling";$("#leadS").textContent=LO.sub||"सही course चुनने में मदद — बिल्कुल मुफ़्त। हमारी team 24 घंटे में call / WhatsApp करेगी।";
    $("#leadCW").hidden=!!LO.hideCourse;$("#leadCityW").hidden=!!LO.hideCity;if(LO.interest){if(!opts.includes(LO.interest)){opts.push(LO.interest);$("#leadCourse").insertAdjacentHTML("beforeend",`<option>${esc(LO.interest)}</option>`);}$("#leadCourse").value=LO.interest;}
    $("#leadBtn").textContent=LO.btn||"✅ Free Counselling लें";$("#leadMsg").textContent="";$("#leadMsg").className="mc-msg";
    try{const s=JSON.parse(localStorage.getItem("hitarthi_lead")||"null");if(s){$("#leadName").value=$("#leadName").value||s.n||"";$("#leadMob").value=$("#leadMob").value||s.m||"";}}catch(e){}
    m.hidden=false;document.body.style.overflow="hidden";setTimeout(()=>$("#leadName").focus(),40);track("lead_open",{source:LO.source||"Free Counselling"});};
  const close=()=>{m.hidden=true;document.body.style.overflow="";};
  $("#leadX").onclick=close;m.addEventListener("click",e=>{if(e.target===m)close();});document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!m.hidden)close();});
  f.addEventListener("submit",async e=>{e.preventDefault();const name=$("#leadName").value.trim(),mobile=$("#leadMob").value.replace(/\D/g,""),city=$("#leadCity").value.trim();
    const interest=LO.interest&&LO.hideCourse?LO.interest:$("#leadCourse").value,msg=$("#leadMsg");
    if(name.length<2){msg.textContent="अपना नाम लिखें";msg.className="mc-msg err";return;}
    if(!/^[6-9]\d{9}$/.test(mobile)){msg.textContent="सही 10 अंकों का mobile नंबर लिखें";msg.className="mc-msg err";return;}
    try{localStorage.setItem("hitarthi_lead",JSON.stringify({n:name,m:mobile}));}catch(x){}
    const src=LO.source||"Free Counselling",done=()=>{track("generate_lead",{source:src,interest});const cb=LO.onDone;close();if(cb)cb({name,mobile});else toast("✅ धन्यवाद! हमारी team जल्दी आपसे बात करेगी।");};
    if(!HB_API){const t=`Namaste HITARTHI, mujhe ${src} chahiye.\nNaam: ${name}\nMobile: ${mobile}\nRuchi: ${interest}${city?"\nShahar: "+city:""}${LO.note?"\n"+LO.note:""}`;if(!LO.onDone)window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(t),"_blank","noopener");done();return;}
    const b=$("#leadBtn");b.disabled=true;
    try{const r=await hbCall("lead",{name,mobile,interest,city,source:src,partner:getRef(),note:LO.note||""});if(r&&r.ok)done();else{msg.textContent=(r&&r.err)||"दर्ज नहीं हुआ";msg.className="mc-msg err";}}
    catch(x){msg.textContent="Server से जुड़ नहीं पाए — WhatsApp पर लिखें";msg.className="mc-msg err";}finally{b.disabled=false;}});
  document.addEventListener("click",e=>{const b=e.target.closest("[data-lead]");if(!b)return;e.preventDefault();openLead(b.dataset.lead==="upcoming"?{source:"Upcoming course",interest:b.dataset.leadc||"",title:"🔔 "+(b.dataset.leadc||"Course")+" — शुरू होने पर बताएँ",sub:"नाम और WhatsApp नंबर लिखें — course शुरू होते ही सबसे पहले आपको बताएँगे।",btn:"✅ मुझे बताना"}:{source:"Free Counselling"+(b.dataset.lead&&b.dataset.lead!=="1"?" ("+b.dataset.lead+")":""),interest:b.dataset.leadc||""});});
})();

/* ---------- 🔍 SEARCH — Courses, Books, Health, Pages ---------- */
(function(){
  const box=$("#srch"),inp=$("#srchIn"),out=$("#srchOut");
  const PG=[["Fees और Monthly Plan (₹300 / ₹500)","fees","💳"],["मेरी Library — खरीदी book पढ़ें / सुनें","library","📚"],["Partner बनें — commission plan","partner","🤝"],["Schools के लिए tie-up","schools","🏫"],["मेरा Order / Tracking / Invoice","track","📦"],["Health Store","health","🌿"],["पैसे की समझ — calculators, Money IQ","finance","🧮"],["Blog","blog","📰"],["Contact","contact","📞"],["About HITARTHI","about","🏢"]];
  const norm=s=>String(s||"").toLowerCase().replace(/\s+/g," ");
  function run(){const q=norm(inp.value).trim();if(!q){out.innerHTML='<p class="muted small">जैसे: Excel, English, typing, compounding, जीवनप्राश, किश्त…</p>';return;}
    const W=q.split(" "),hitW=s=>{s=norm(s);return W.every(w=>s.includes(w));};
    const C=COURSES.filter(c=>hitW(c.name+" "+c.hin+" "+c.cat+" "+(c.out||[]).join(" "))).slice(0,8).map(c=>`<button type="button" data-sgo="c" data-v="${esc(c.name)}"><i>🎓</i><span><b>${esc(c.name)}</b><small>${esc(c.hin)} • ${rs(c.fee)}</small></span></button>`);
    const Bk=BOOKS.map((b,i)=>[b,i]).filter(([b])=>hitW(b.t+" "+b.s+" "+b.a+" "+b.ser)).slice(0,8).map(([b,i])=>`<button type="button" data-sgo="b" data-v="${i}"><i>📘</i><span><b>${esc(b.t)}</b><small>${esc(b.s)} • E-book ${rs(b.e)}</small></span></button>`);
    const H=(typeof HPROD!=="undefined"&&window.hsOpen&&hsOpen()?HPROD:[]).filter(h=>hitW(h.full+" "+h.n+" "+(h.tag||""))).slice(0,5).map(h=>`<button type="button" data-sgo="h" data-v="${esc(h.k)}"><i>🌿</i><span><b>${esc(h.full)}</b><small>Health • ${rs(h.mrp)}</small></span></button>`);
    const P=PG.filter(p=>hitW(p[0]+" "+p[1])).map(p=>`<button type="button" data-sgo="p" data-v="${p[1]}"><i>${p[2]}</i><span><b>${esc(p[0])}</b></span></button>`);
    const sec=(t,a)=>a.length?`<h4>${t}</h4>${a.join("")}`:"";
    out.innerHTML=(sec("Courses",C)+sec("Books",Bk)+sec("Health",H)+sec("Pages",P))||`<p class="muted">"${esc(inp.value)}" नहीं मिला। <button type="button" class="lnk" data-sgo="lead">Free Counselling लें →</button></p>`;}
  window.openSearch=()=>{box.hidden=false;document.body.style.overflow="hidden";inp.value="";run();setTimeout(()=>inp.focus(),30);track("search_open",{});};
  const close=()=>{box.hidden=true;document.body.style.overflow="";};
  $("#srchBtn").addEventListener("click",openSearch);$("#srchX").onclick=close;box.addEventListener("click",e=>{if(e.target===box)close();});
  inp.addEventListener("input",run);document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!box.hidden)close();if(e.key==="/"&&box.hidden&&!/INPUT|TEXTAREA|SELECT/.test((document.activeElement||{}).tagName||"")){e.preventDefault();openSearch();}});
  out.addEventListener("click",e=>{const b=e.target.closest("[data-sgo]");if(!b)return;const k=b.dataset.sgo,v=b.dataset.v;close();track("search_pick",{type:k,value:v});
    const fire=attr=>{const t=document.createElement("button");t.hidden=true;t.setAttribute(attr,v);document.body.appendChild(t);t.click();t.remove();};
    if(k==="c")fire("data-cdetail");else if(k==="b")fire("data-open");else if(k==="h"){location.hash="health";setTimeout(()=>fire("data-hopen"),80);}else if(k==="p")location.hash=v;else if(k==="lead")openLead({source:"Search: "+inp.value});});
})();


/* ---------- 🤖 AI 3D ORBIT — 25 tools घूमते हुए, बीच में HITARTHI logo ---------- */
(function(){
 function initAi3d(sec){const stage=sec.querySelector(".ai3d-stage");if(!stage)return null;
  const K={chat:"#F59E0B",auto:"#22C55E",design:"#3B82F6",video:"#A855F7",code:"#F97316"};
  const T=[["ChatGPT","chat","सवाल-जवाब, notes, email, report — रोज़ का AI सहायक"],["Claude","chat","लंबे documents पढ़ना-लिखना, सोच-समझकर जवाब"],["Google Gemini","chat","Google के साथ जुड़ा AI — Gmail, Docs, Search में मदद"],["Perplexity","chat","स्रोत (sources) के साथ research और ताज़ा जानकारी"],["Grok","chat","ताज़ा खबरों और trends पर बातचीत करने वाला AI"],["Microsoft Copilot","chat","Word, Excel, PowerPoint के अंदर AI"],["NotebookLM","chat","अपनी PDF/notes डालें — सार, सवाल और audio overview"],
    ["n8n","auto","बिना coding के काम अपने-आप करवाना (workflow automation)"],["Zapier","auto","दो apps को जोड़कर काम अपने-आप — जैसे form → WhatsApp"],["Make","auto","बड़े automation flows drag-and-drop से"],
    ["Canva Magic Studio","design","Poster, post, banner — AI से मिनटों में design"],["Gamma","design","एक line लिखें — पूरी presentation तैयार"],["Napkin AI","design","Text से diagram और infographic"],["Piktochart","design","Report और infographic design"],["Midjourney","design","शब्दों से सुंदर चित्र (AI images)"],["DALL·E","design","ChatGPT के साथ चित्र बनाना"],["Ideogram","design","चित्र जिनमें साफ़ text/लिखावट हो"],
    ["Runway","video","AI से video edit और नया video बनाना"],["Kling AI","video","Text या photo से video"],["ElevenLabs","video","असली जैसी आवाज़ — voice-over, dubbing"],["Suno","video","शब्दों से गाना और music"],["Synthesia","video","AI presenter वाला training video"],["HeyGen","video","अपना AI avatar — video में बोलता हुआ"],
    ["Cursor","code","AI के साथ code लिखना — app/website बनाना"],["GitHub Copilot","code","Programmer का AI साथी — code सुझाव"]];
  const box=sec.querySelector(".ai3d-items"),tip=sec.querySelector(".ai3d-tip"),pp=sec.querySelector(".ai3d-pp");
  box.innerHTML=T.map((t,i)=>`<button type="button" class="ai3d-it" data-ai="${i}" style="--c:${K[t[1]]}"><i class="num">${i+1}</i>${esc(t[0])}</button>`).join("");
  const els=[...box.children];
  // दो rings: बाहर 13 (घड़ी की दिशा), अंदर 12 (उल्टी दिशा) — दोनों अलग झुकाव पर
  const R=[{from:0,n:13,rx:.46,ry:.30,tilt:-.14,sp:.00006},{from:13,n:12,rx:.30,ry:.20,tilt:.18,sp:-.00008}];
  let W=0,H=0,paused=false,hover=false,vis=false,t0=performance.now(),acc=0,last=t0,raf=0;
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  function size(){W=stage.clientWidth;H=stage.clientHeight;const e=stage.querySelectorAll(".ai3d-ell"),narrow=W<640;
    R.forEach((r,k)=>{ // mobile पर ellipse खड़ा (portrait) — tools ऊपर-नीचे फैलें, किनारे से बाहर न जाएँ
      r.RX=narrow?(k?W*.2:W/2-90):Math.min(W*(k?.27:.42),W/2-110,H*.95);r.RY=narrow?H*(k?.29:.44):H*(k?.22:.34);r.T=narrow?r.tilt*.35:r.tilt;
      const el=e[k];if(!el)return;el.style.width=2*r.RX+"px";el.style.height=2*r.RY+"px";el.style.transform=`rotate(${r.T*57.3}deg)`;});}
  function frame(now){
    if(!paused&&!hover&&!reduce)acc+=now-last;last=now;
    R.forEach(r=>{const rx=r.RX,ry=r.RY,ct=Math.cos(r.T),st=Math.sin(r.T);
      for(let j=0;j<r.n;j++){const el=els[r.from+j];if(!el)continue;const a=acc*r.sp*6.283+j*6.283/r.n;
        const x0=Math.cos(a)*rx,y0=Math.sin(a)*ry,d=Math.sin(a);           // d: -1 पीछे … +1 आगे
        const x=x0*ct-y0*st,y=x0*st+y0*ct,s=.62+.38*(d+1)/2;
        el.style.transform=`translate(-50%,-50%) translate(${x.toFixed(1)}px,${y.toFixed(1)}px) scale(${s.toFixed(3)})`;
        el.style.opacity=(.38+.62*(d+1)/2).toFixed(2);el.style.zIndex=d>0?60+Math.round(d*30):10+Math.round((d+1)*20);}});
    raf=vis?requestAnimationFrame(frame):0;}
  function start(){if(!raf&&vis){last=performance.now();raf=requestAnimationFrame(frame);}}
  const io=new IntersectionObserver(es=>{vis=es[0].isIntersecting&&!sec.hidden;if(vis){size();start();}},{threshold:.05});io.observe(stage);
  addEventListener("resize",()=>{size();if(!raf&&!sec.hidden){vis=true;start();}});
  stage.addEventListener("pointerenter",e=>{if(e.pointerType==="mouse")hover=true;});stage.addEventListener("pointerleave",()=>{hover=false;});
  pp.onclick=()=>{paused=!paused;pp.textContent=paused?"▶":"❚❚";pp.setAttribute("aria-label",paused?"घुमाएँ":"घूमना रोकें");};
  const show=i=>{const t=T[i];els.forEach((e,k)=>e.classList.toggle("on",k===i));tip.innerHTML=`<b>${i+1}. ${esc(t[0])}</b> — ${esc(t[2])}`;};
  box.addEventListener("mouseover",e=>{const b=e.target.closest("[data-ai]");if(b)show(+b.dataset.ai);});
  box.addEventListener("click",e=>{const b=e.target.closest("[data-ai]");if(b)show(+b.dataset.ai);});
  return on=>{sec.hidden=!on;if(on){vis=true;size();start();}};
 }
 const cp=document.getElementById("ai3d"),hm=document.getElementById("ai3dHome");
 const fc=cp&&initAi3d(cp);if(hm)initAi3d(hm);
 window.hbAi3d=on=>{fc&&fc(on);};
})();
/* ---------- 📦 मेरा ORDER — status, tracking, invoice ---------- */
(function(){
  const out=$("#tkOut");
  const chip=o=>o.status==="Paid"?'<span class="tk-c ok">✓ पक्का</span>':o.status==="Pending"?(o.mode==="COD"?'<span class="tk-c cod">📦 COD — भेजा जा रहा है</span>':'<span class="tk-c wait">⏳ भुगतान जाँच में</span>'):`<span class="tk-c">${esc(o.status)}</span>`;
  function render(r,mob){out.innerHTML=`<p class="muted">नमस्ते ${esc(r.name||"")} 🙏 — आपके आख़िरी ${r.orders.length} order:</p>`+r.orders.map(o=>`<div class="tk-o"><div><b>${esc(o.id)}</b> <small class="muted">${esc(o.date)} • ${esc(o.mode)}${o.coupon?" • 🎟️ "+esc(o.coupon):""}</small><p>${esc(o.item)}</p></div><div class="tk-r"><b class="num">${rs(o.amount)}</b>${chip(o)}
      ${o.track?`<a class="btn btn-primary btn-sm" href="${esc(o.track.url||"#")}" target="_blank" rel="noopener">🚚 Track करें</a><small class="muted">${esc(o.track.text)}</small>`:""}${o.invoice?`<button type="button" class="btn btn-ghost btn-sm" data-inv="${esc(o.id)}" data-mob="${mob}">🧾 Invoice</button>`:""}</div></div>`).join("");}
  $("#tkForm").addEventListener("submit",async e=>{e.preventDefault();const mob=$("#tkMob").value.replace(/\D/g,""),oid=$("#tkId").value.trim().toUpperCase();
    if(mob.length!==10||!/^HT\d{4}-\d{4}$/.test(oid)){out.innerHTML='<p class="mc-msg err">Mobile और Order ID (जैसे HT2110-4821) सही लिखें</p>';return;}
    if(!HB_API){render({name:"Demo ग्राहक",orders:[{id:oid,date:"2026-10-20",item:"HITARTHI Daily Active x1",amount:700,status:"Paid",mode:"COD",coupon:"HT1007",track:{text:"Shiprocket 1234567890",url:"https://shiprocket.co/tracking/1234567890"},invoice:true}]},mob);return;}
    out.innerHTML='<p class="muted">खोज रहे हैं…</p>';
    try{const r=await hbCall("track",{mobile:mob,orderId:oid});if(r&&r.ok){render(r,mob);if(window.__invWant===oid){window.__invWant="";const ib=out.querySelector('[data-inv="'+oid+'"]');if(ib)ib.click();}}else out.innerHTML=`<p class="mc-msg err">${esc((r&&r.err)||"नहीं मिला")}</p>`;}catch(x){out.innerHTML='<p class="mc-msg err">Server से जुड़ नहीं पाए</p>';}});
  /* WhatsApp वाला invoice link: ?inv=HT0211-1234 → Order ID भरा मिलेगा, ग्राहक mobile डाले → invoice अपने-आप खुले */
  try{const iv=(new URLSearchParams(location.search).get("inv")||"").trim().toUpperCase();if(/^HT\d{4}-\d{4}$/.test(iv)){window.__invWant=iv;setTimeout(()=>{go("track");$("#tkId").value=iv;out.innerHTML='<p class="muted">🧾 Invoice देखने के लिए वही <b>mobile नंबर</b> डालें जिससे payment किया था, फिर "खोजें" दबाएँ।</p>';$("#tkMob").focus();},400);}}catch(e){}
  const words=n=>"शब्दों में: ₹"+Math.round(n).toLocaleString("en-IN")+" मात्र";
  function showInv(v){const m=$("#invM");const c=v.company;
    m.innerHTML=`<div class="inv-box" id="invBox"><div class="inv-acts no-print"><button type="button" class="btn btn-primary btn-sm" id="invPrint">🖨️ Print / PDF save</button><button type="button" class="btn btn-ghost btn-sm" id="invX">बंद करें</button></div>
      <div class="inv"><div class="inv-h"><div class="inv-logo"><svg width="54" height="54"><use href="#logo"/></svg><div><b>${esc(c.name)}</b><small>${esc(c.addr)}<br>${esc(c.phone)} • ${esc(c.email)} • ${esc(c.web)}${v.gstin?"<br>GSTIN: <b>"+esc(v.gstin)+"</b>":""}</small></div></div><div class="inv-t"><h2>${esc(v.type)}</h2><p>No. <b>${esc(v.invoice)}</b><br>Date: ${esc(v.date)}<br>Order: ${esc(v.orderId)}</p></div></div>
      <div class="inv-bill"><div><small>Bill To</small><b>${esc(v.buyer.name)}</b><span>Mobile: ${esc(v.buyer.mobile)}</span>${v.buyer.addr?`<span>${esc(v.buyer.addr)}</span>`:""}</div><div><small>Payment</small><b>${esc(v.mode)}</b>${v.ref?`<span>Ref: ${esc(v.ref)}</span>`:""}${v.coupon?`<span>Coupon: ${esc(v.coupon)}</span>`:""}</div></div>
      <table class="inv-tb"><thead><tr><th>#</th><th>विवरण</th><th>Taxable ₹</th><th>GST</th><th>GST ₹</th><th>कुल ₹</th></tr></thead><tbody>${v.lines.map((l,i)=>`<tr><td>${i+1}</td><td>${esc(l.item)}</td><td>${l.taxable.toFixed(2)}</td><td>${l.rate}%</td><td>${l.tax.toFixed(2)}</td><td>${l.amount.toFixed(2)}</td></tr>`).join("")}</tbody></table>
      <div class="inv-sum"><div><span>Taxable value</span><b>₹${(v.total-v.tax).toFixed(2)}</b></div><div><span>GST — ${esc(v.split)}</span><b>₹${v.tax.toFixed(2)}</b></div><div class="tot"><span>कुल रकम (GST सहित)</span><b>₹${v.total.toFixed(2)}</b></div></div>
      <p class="inv-w">${esc(words(v.total))}</p><p class="inv-f">यह computer से बना invoice है — हस्ताक्षर की ज़रूरत नहीं। धन्यवाद! 🙏 • ${esc(c.web)}</p></div></div>`;
    m.hidden=false;document.body.style.overflow="hidden";$("#invX").onclick=()=>{m.hidden=true;document.body.style.overflow="";};
    $("#invPrint").onclick=()=>{document.body.classList.add("print-inv");window.print();setTimeout(()=>document.body.classList.remove("print-inv"),600);};}
  document.addEventListener("click",async e=>{const b=e.target.closest("[data-inv]");if(!b)return;
    if(!HB_API){showInv({invoice:"HT/2026-27/0001",date:"2026-10-20",orderId:b.dataset.inv,company:{name:"HITARTHI Education & Skill Development Pvt. Ltd.",addr:"HITARTHI Bhawan, Mayur Vihar Phase-1, New Delhi",phone:"+91 94537 17356",email:"hitarthigroup@gmail.com",web:"www.hitarthi.com"},gstin:"20AAICH6362D1ZY",type:"Tax Invoice",buyer:{name:"Demo ग्राहक",mobile:b.dataset.mob,addr:"Sector 4, Bokaro Steel City, Jharkhand 827004"},lines:[{item:"HITARTHI Daily Active",amount:650,rate:18,taxable:550.85,tax:99.15},{item:"Delivery",amount:50,rate:18,taxable:42.37,tax:7.63}],total:700,tax:106.78,split:"CGST + SGST (आधा-आधा)",mode:"COD",ref:"",coupon:"HT1007"});return;}
    b.disabled=true;try{const r=await hbCall("invoice",{mobile:b.dataset.mob,orderId:b.dataset.inv});if(r&&r.ok)showInv(r);else toast((r&&r.err)||"Invoice नहीं बना");}catch(x){toast("Server से जुड़ नहीं पाए");}finally{b.disabled=false;}});
})();

(function(){const MP=[{amt:300,n:"HITARTHI Monthly Learning",tag:"₹300/माह",pts:["कोई 1 course चुनें — English, Computer या Typing","Recorded classes + हर हफ़्ते doubt session","हर महीने का certificate test"]},{amt:500,n:"HITARTHI Monthly Learning Plus",tag:"₹500/माह",hot:1,pts:["सभी recorded courses","English AI Teacher से रोज़ अभ्यास","हर महीने 1 नई e-book मुफ़्त"]}];
  const sec=document.createElement("div");sec.className="sec";sec.id="monthly";sec.setAttribute("data-noi18n","1");
  sec.innerHTML=`<div class="sec-head"><div><div class="eyebrow" style="color:var(--orange)">आसान भुगतान</div><h2>Monthly Plan और <em>किश्त की सुविधा</em></h2></div><p class="muted">एक साथ पूरा पैसा देना ज़रूरी नहीं — हर महीने थोड़ा भरें, या बड़े course की fee 2–4 किश्तों में।</p></div>
    <div class="mp-grid">${MP.map(m=>`<div class="mp-card${m.hot?" hot":""}">${m.hot?'<span class="mc-chip p" style="align-self:flex-start">सबसे ज़्यादा फ़ायदा</span>':""}<h3>${esc(m.n)}</h3><b class="num">₹${m.amt}<small style="font-size:1rem;color:var(--ink-2)"> / महीना</small></b><ul>${m.pts.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><p class="small muted" style="margin-top:auto">कोई lock-in नहीं • कभी भी बंद करें • ज़्यादा से ज़्यादा 24 महीने</p><button class="btn btn-orange btn-block" data-mplan="${m.amt}">पहला महीना ₹${m.amt} भरें</button></div>`).join("")}
      <div class="mk-box"><h3>📅 मेरी किश्त / Monthly</h3><p class="small muted">पहला भुगतान करते समय मिला <b>Enroll ID</b> और अपना mobile डालें — कितना भरा, कितना बाकी, और अगली किश्त यहीं से भरें।</p>
        <form class="mk-f" id="mkForm"><input id="mkId" placeholder="Enroll ID (जैसे EN261019123)" maxlength="11" style="text-transform:uppercase" required><input id="mkMob" type="tel" inputmode="numeric" maxlength="10" placeholder="Mobile" required><button class="btn btn-primary" style="grid-column:1/-1" type="submit">हिसाब देखें</button></form><div class="mk-out" id="mkOut"></div>
        <p class="small muted" style="margin-top:10px">💡 किश्त के नियम: पहली किश्त कम से कम 30% (या ₹2,000), बाकी 90 दिन में ₹500+ की किश्तों में। पहली किश्त के बाद course शुरू; printed books और certificate पूरा भुगतान होने पर।</p></div></div>`;
  const fees=document.querySelector('[data-page="fees"] .page-hero');if(fees)fees.insertAdjacentElement("afterend",sec);
  document.addEventListener("click",e=>{const b=e.target.closest("[data-mplan]");if(!b)return;const a=+b.dataset.mplan,m=MP.find(x=>x.amt===a);openPay({amt:a,item:m.n+" — पहला महीना (₹"+a+"/माह)",plan:{type:"Monthly",monthly:a}});});
  const out=$("#mkOut");let EN=null;
  $("#mkForm").addEventListener("submit",async e=>{e.preventDefault();const id=$("#mkId").value.trim().toUpperCase(),mob=$("#mkMob").value.replace(/\D/g,"");
    if(!/^EN\d{9}$/.test(id)||mob.length!==10){out.innerHTML='<p class="mc-msg err">सही Enroll ID और 10 अंकों का mobile डालें</p>';return;}
    if(!HB_API){out.innerHTML=`<p class="small">यह सुविधा live system चालू होने पर काम करेगी। अभी <a href="https://wa.me/${WA}?text=${encodeURIComponent("Namaste HITARTHI, meri kisht ka hisaab batayein. Enroll ID: "+id)}" target="_blank" rel="noopener">WhatsApp</a> करें।</p>`;return;}
    out.innerHTML='<p class="small">देख रहे हैं…</p>';
    try{const r=await hbCall("enroll",{enrollId:id,mobile:mob});if(!r||!r.ok){out.innerHTML=`<p class="mc-msg err">${esc((r&&r.err)||"नहीं मिला")}</p>`;return;}EN=Object.assign(r,{mobile:mob});
      const part=r.type==="Part";const pct=part?Math.min(100,r.paid/r.total*100):Math.min(100,r.paidMonths/r.months*100);
      out.innerHTML=`<b>${esc(r.item)}</b> <span class="mc-chip ${r.complete?"g":r.overdue?"r":"p"}">${r.complete?"✓ पूरा":r.overdue?"समय निकल गया":"चालू"}</span>
        <div class="mk-sum">${part?`<div><small>कुल fee</small><b>₹${r.total.toLocaleString("en-IN")}</b></div><div><small>भरा</small><b>₹${r.paid.toLocaleString("en-IN")}</b></div><div><small>बाकी</small><b>₹${r.balance.toLocaleString("en-IN")}</b></div>`:`<div><small>हर महीना</small><b>₹${r.monthly}</b></div><div><small>भरे महीने</small><b>${r.paidMonths}</b></div><div><small>अगली तारीख़</small><b>${esc(r.nextDue.split("-").reverse().join("-"))}</b></div>`}</div>
        <div class="mk-bar"><i style="width:${pct.toFixed(1)}%"></i></div>
        <p class="small muted" style="margin-top:6px">${part?`आख़िरी तारीख़: ${esc(r.dueBy.split("-").reverse().join("-"))}`:r.access?`Access ${esc(r.activeTill.split("-").reverse().join("-"))} तक चालू`:"इस महीने का भुगतान बाकी है"}</p>
        ${r.complete?"":part?`<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:8px"><span>अगली किश्त ₹</span><input id="mkAmt" type="number" min="${r.nextMin}" max="${r.balance}" value="${r.balance}" style="width:120px;border:1px solid var(--line);border-radius:8px;padding:6px 8px"><button class="btn btn-orange btn-sm" id="mkPay">भरें</button></div>`:`<button class="btn btn-orange btn-sm" id="mkPay" style="margin-top:8px">इस महीने के ₹${r.monthly} भरें</button>`}`;
      const pb=$("#mkPay");if(pb)pb.onclick=()=>{const a=part?Math.round(+$("#mkAmt").value||0):r.monthly;if(part&&(a<r.nextMin||a>r.balance)){toast(`₹${r.nextMin} से ₹${r.balance} के बीच रकम डालें`);return;}
        openPay({amt:a,item:(part?"अगली किश्त: ":"Monthly: ")+r.item+" ("+r.enrollId+")",name:r.name,plan:{enrollId:r.enrollId},extra:"Enroll ID: "+r.enrollId});setTimeout(()=>{$("#payMob").value=mob;$("#payName").value=r.name||"";payWA();},60);};}
    catch(err){out.innerHTML='<p class="mc-msg err">Server से जुड़ नहीं पाए — दोबारा कोशिश करें</p>';}});
})();
/* ---------- मेरी LIBRARY — खरीदी हुई Book पढ़ें • सुनें • Course देखें ----------
   Links Google Sheet ("Library" tab) में रहते हैं — website के code में नहीं। सिर्फ़ खरीदने वाले को मिलते हैं। */
(function(){
  const sec=document.querySelector('section[data-page="library"]');if(!sec)return;
  const LS={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d;}catch(e){return d;}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}},del(k){try{localStorage.removeItem(k);}catch(e){}}};
  const ML={token:"",name:"",mobile:"",items:[],pending:[],short:[],demo:false,free:[],fil:"all"};
  const TI={Ebook:"📖",PDF:"📄",Audio:"🎧",Video:"🎬",Live:"🔴",Test:"📝"}, TN={Ebook:"पढ़ें",PDF:"PDF",Audio:"सुनें",Video:"देखें",Live:"Live Class",Test:"Test + Certificate"};
  const main=$("#mlpMain"), side=$("#mlpSide"), mlp=$("#mlp");
  let P=null; /* {it, n, mode:"own"|"free"} */

  /* ---- Demo (इस preview में; आपकी site पर Google Sheet से असली data) ---- */
  const DT={
    k1:`<h2>अध्याय 1 — छोटी रकम की बड़ी ताक़त</h2><p>रामू हर दिन चाय-नाश्ते पर बीस रुपये ख़र्च करता था। एक दिन दादा जी ने पूछा — "अगर यही बीस रुपये रोज़ बचाओ, तो दस साल में कितने होंगे?" रामू ने जोड़ा: लगभग तिहत्तर हज़ार रुपये। दादा जी मुस्कुराए — "यह तो सिर्फ़ जोड़ है। असली जादू तब होता है जब बचत पर कमाई हो, और उस कमाई पर भी कमाई।"</p><p>इसी को <b>कंपाउंडिंग</b> कहते हैं — ब्याज पर ब्याज। पहले साल आपकी रकम पर कमाई होती है। दूसरे साल रकम और पिछली कमाई, दोनों पर। धीरे-धीरे पैसा बर्फ़ के गोले की तरह बढ़ता जाता है।</p><h3>एक आसान उदाहरण</h3><p>मान लीजिए ₹10,000 ऐसी जगह रखे जहाँ हर साल 10% बढ़त मिलती है। पहले साल के अंत में ₹11,000। दूसरे साल ₹12,100 — इस बार ₹1,100 बढ़े, ₹1,000 नहीं। दसवें साल तक यही रकम लगभग ₹25,900 हो जाती है।</p><p><b>याद रखिए:</b> कंपाउंडिंग को तीन चीज़ें चाहिए — नियमित बचत, धैर्य और समय। इनमें सबसे क़ीमती है समय।</p>`,
    k2:`<h2>अध्याय 2 — समय सबसे बड़ा दोस्त</h2><p>दो दोस्त हैं — सीमा और मोहन। सीमा ने 25 साल की उम्र में हर महीने ₹1,000 बचाना शुरू किया और 10 साल बाद रुक गई। मोहन ने 35 की उम्र में शुरू किया और पूरे 25 साल तक हर महीने ₹1,000 लगाता रहा।</p><p>सीमा ने कुल ₹1.2 लाख लगाए, मोहन ने ₹3 लाख। फिर भी 60 की उम्र पर, अगर दोनों को 10% सालाना बढ़त मिले, तो सीमा के पास लगभग ₹21 लाख होंगे और मोहन के पास लगभग ₹12 लाख। क्यों? क्योंकि सीमा के पैसे को बढ़ने के लिए 35 साल मिले।</p><h3>सीख</h3><p>जल्दी शुरू करना, ज़्यादा रकम लगाने से भी ज़्यादा असरदार है। आज ₹500 से शुरुआत, "बाद में" ₹5,000 से शुरुआत से बेहतर है।</p><p><i>यह उदाहरण सिर्फ़ समझाने के लिए है — निवेश की सलाह नहीं।</i></p>`,
    k3:`<h2>अध्याय 3 — बचत की आदत कैसे बनाएँ</h2><p>आदत इच्छाशक्ति से नहीं, आसान तरीक़े से बनती है। ये चार क़दम आज़माइए:</p><ul><li><b>पहले बचत, फिर ख़र्च:</b> तनख़्वाह या कमाई आते ही तय रकम अलग कर दें।</li><li><b>छोटी शुरुआत:</b> ₹100 हर हफ़्ते भी काफ़ी है। रकम बाद में बढ़ाइए।</li><li><b>लिखिए:</b> महीने के अंत में एक लाइन लिखें — कितना बचा, कितना बढ़ा।</li><li><b>लक्ष्य का नाम रखें:</b> "बेटी की पढ़ाई", "अपनी दुकान" — नाम वाला लक्ष्य जल्दी नहीं टूटता।</li></ul><p>अगले अध्याय में हम देखेंगे कि बचत को कहाँ रखें ताकि वह सुरक्षित भी रहे और बढ़े भी।</p>`,
    m1:`<h2>Chapter 1 — Income और Expense: पहला क़दम</h2><p>पैसे की समझ का पहला नियम है: जो गिना नहीं जाता, वह संभाला नहीं जाता। इस हफ़्ते हर ख़र्च एक कॉपी या mobile note में लिखिए — चाय से लेकर किराये तक।</p><p>हफ़्ते के अंत में ख़र्च को तीन हिस्सों में बाँटिए: <b>ज़रूरी</b> (किराया, राशन, फ़ीस), <b>ज़रूरी पर कम हो सकता है</b> (बिजली, mobile plan), और <b>चाहत</b> (बाहर खाना, shopping)। ज़्यादातर परिवार तीसरे हिस्से में 15–25% बचा सकते हैं, बिना ज़िंदगी कठिन किए।</p>`,
    m2:`<h2>Chapter 2 — Emergency Fund</h2><p>बीमारी, नौकरी छूटना, घर की मरम्मत — मुसीबत बताकर नहीं आती। Emergency fund वह रकम है जो ऐसे समय में आपको कर्ज़ से बचाती है।</p><p><b>लक्ष्य:</b> घर के 3 से 6 महीने के ज़रूरी ख़र्च के बराबर रकम। इसे ऐसी जगह रखें जहाँ से एक-दो दिन में निकल सके, और जिसे रोज़ के ख़र्च में न छुएँ।</p>`
  };
  DT.d1=DT.m1.replace(/<h2>.*?<\/h2>/,"<h2>अध्याय 1 — Income और ख़र्च का हिसाब</h2>");DT.d2=DT.m2.replace(/<h2>.*?<\/h2>/,"<h2>अध्याय 2 — Emergency Fund: मुसीबत का साथी</h2>");DT.d3=DT.k1.replace(/<h2>.*?<\/h2>/,"<h2>अध्याय 3 — छोटी बचत की बड़ी ताक़त</h2>");
  const ch=(title,type,mins,free,open,demo)=>({title,type,mins,free:!!free,open:!!open,demo});
  const DEMO=()=>({name:"Demo पाठक",mobile:"XXXXXX0000",pending:[],short:[],items:[
    {key:"पैसे की पहली समझ",title:"पैसे की पहली समझ",types:["Ebook"],via:"",note:"",chapters:[ch("अध्याय 1 — Income और ख़र्च का हिसाब","Ebook",4,0,1,"d1"),ch("अध्याय 2 — Emergency Fund: मुसीबत का साथी","Ebook",3,0,1,"d2"),ch("अध्याय 3 — छोटी बचत की बड़ी ताक़त","Ebook",5,0,1,"d3")]},
    {key:"कंपाउंडिंग का जादू",title:"कंपाउंडिंग का जादू",types:["Ebook","Audio"],via:"",note:"",chapters:[ch("अध्याय 1 — छोटी रकम की बड़ी ताक़त","Ebook",6,1,1,"k1"),ch("Audio — अध्याय 1","Audio",4,1,1,"k1"),ch("अध्याय 2 — समय सबसे बड़ा दोस्त","Ebook",5,0,1,"k2"),ch("Audio — अध्याय 2","Audio",4,0,1,"k2"),ch("अध्याय 3 — बचत की आदत कैसे बनाएँ","Ebook",5,0,1,"k3")]},
    {key:"the money blueprint",title:"The Money Blueprint",types:["Ebook"],via:"Finance Starter Bundle",note:"",chapters:[ch("Chapter 1 — Income और Expense","Ebook",4,1,1,"m1"),ch("Chapter 2 — Emergency Fund","Ebook",3,0,1,"m2")]},
    {key:"basic computer course",title:"Basic Computer Course",types:["Video","Live","Test"],lms:JSON.parse(JSON.stringify(window.LMSX?LMSX.DEMO_LMS:null)),via:"",note:"किश्त: ₹1,000 / ₹1,499 भरे — बाकी किश्त भरते ही सारे lesson खुल जाएँगे",chapters:[ch("Lesson 1 — Computer चालू और बंद करना","Video",18,1,1,"v"),ch("Lesson 2 — Mouse और Keyboard","Video",22,0,1,"v"),ch("Lesson 3 — File और Folder बनाना","Video",25,0,0,"v")]}
  ].map(it=>Object.assign(it,{total:it.chapters.length,open:it.chapters.filter(c=>c.open).length,chapters:it.chapters.map((c,n)=>Object.assign(c,{n}))}))});

  const HB_VCOV="img/b8f2616a9090.webp";
  /* ---- छोटे helpers ---- */
  const prog=k=>(LS.get("ml_prog",{})[k])||{d:{},pos:{}};
  const saveProg=(k,f)=>{const A=LS.get("ml_prog",{});const x=A[k]||{d:{},pos:{}};f(x);A[k]=x;LS.set("ml_prog",A);};
  const doneCount=it=>{const p=prog(it.key);return it.chapters.filter(c=>p.d[c.n]).length;};
  const coverBook=t=>{const s=String(t||"").toLowerCase().trim();{const d=DEMO_BOOKS.find(x=>s.includes(x.book.t.toLowerCase()));if(d)return d.book;}return BOOKS.find(b=>b.t.toLowerCase()===s)||BOOKS.find(b=>s.includes(b.t.toLowerCase())&&b.t.length>6);};
  function cover(it,cls){const tt=it.types.filter(t=>t!=="Live"&&t!=="Test"),vid=!tt.length||(tt.length===1&&tt[0]==="Video"), b=!vid&&coverBook(it.title);
    if(b)return `<div class="${cls}">${book3d(b)}</div>`;
    const vimg=/^https:\/\//.test(String(it.img||""))?it.img:(vid&&/weekly|52 week|recorded/i.test(String(it.key||it.title)))?HB_VCOV:"";
    if(vimg)return `<div class="${cls} vid has-img"><img src="${esc(vimg)}" alt="${esc(it.title)}" loading="lazy"></div>`;
    return `<div class="${cls} vid">${vid?"🎬":it.types.includes("Audio")?"🎧":"📖"}${cls==="ml-cv"?`<small>${esc(it.title.slice(0,38))}</small>`:""}</div>`;}
  const tm=s=>{s=Math.max(0,Math.floor(s||0));return Math.floor(s/60)+":"+("0"+s%60).slice(-2);};
  const msg=(t,err)=>{const m=$("#mlMsg");m.textContent=t||"";m.className="mc-msg"+(err?" err":t?" ok":"");};
  /* Google Doc का HTML — सिर्फ़ सुरक्षित tags */
  function mlClean(html){const d=new DOMParser().parseFromString("<div>"+String(html||"")+"</div>","text/html");const root=d.body.firstChild;
    const ok=/^(P|H1|H2|H3|H4|H5|H6|UL|OL|LI|B|STRONG|I|EM|U|BR|HR|SPAN|DIV|TABLE|TBODY|THEAD|TR|TD|TH|IMG|A|BLOCKQUOTE|SUP|SUB)$/;
    root.querySelectorAll("script,style,iframe,object,embed,svg,math,template,noscript,link,meta,form,input,button").forEach(e=>e.remove());
    root.querySelectorAll("*").forEach(el=>{if(!ok.test(el.tagName)){el.replaceWith(...el.childNodes);return;}
      [...el.attributes].forEach(a=>{const n=a.name.toLowerCase(),v=a.value;
        if(n==="style"&&/^[\w\s:;\-.#%,]*$/.test(v))return;if(n==="href"&&el.tagName==="A"&&/^https?:/i.test(v))return;if(n==="src"&&el.tagName==="IMG"&&/^https:/i.test(v))return;if(n==="colspan"||n==="rowspan"||n==="alt")return;el.removeAttribute(a.name);});
      if(el.tagName==="A"){el.target="_blank";el.rel="noopener";}});
    return root.innerHTML;}

  /* ---- आवाज़ (हर E-book को हिंदी में पढ़कर सुनाए) ---- */
  const TTS={g:0,on:false,q:[],i:0,rate:+LS.get("ml_trate",1)||1,onEnd:null};
  const ttsOK=()=>"speechSynthesis" in window&&"SpeechSynthesisUtterance" in window;
  function ttsVoice(){const v=speechSynthesis.getVoices()||[];return v.find(x=>/^hi[-_]IN/i.test(x.lang))||v.find(x=>/^hi/i.test(x.lang))||v.find(x=>/^en[-_]IN/i.test(x.lang))||null;}
  function ttsQueue(els){const q=[];els.forEach(el=>{const t=(el.textContent||"").replace(/\s+/g," ").trim();if(!t)return;(t.match(/[^।.!?]+[।.!?]*/g)||[t]).reduce((a,s)=>{if(a.length&&(a[a.length-1]+s).length<220)a[a.length-1]+=s;else a.push(s);return a;},[]).forEach(s=>q.push({el,t:s.trim()}));});return q.filter(x=>x.t);}
  function ttsStart(els,onEnd,from){if(!ttsOK()){toast("इस browser में आवाज़ नहीं है — Chrome में खोलें");return false;}
    ttsStop();TTS.q=ttsQueue(els);TTS.i=from||0;TTS.on=true;TTS.onEnd=onEnd;const g=++TTS.g;ttsNext(g);return true;}
  function ttsNext(g){if(g!==TTS.g||!TTS.on)return;$$(".mlr-page .say").forEach(e=>e.classList.remove("say"));
    if(TTS.i>=TTS.q.length){TTS.on=false;const f=TTS.onEnd;TTS.onEnd=null;f&&f(true);return;}
    const it=TTS.q[TTS.i];if(it.el.classList&&it.el.closest(".mlr-page")){it.el.classList.add("say");if(!it.el._seen){it.el._seen=1;it.el.scrollIntoView({block:"center",behavior:"smooth"});}}
    const u=new SpeechSynthesisUtterance(it.t);const v=ttsVoice();if(v){u.voice=v;u.lang=v.lang;}else u.lang="hi-IN";u.rate=TTS.rate;
    u.onend=u.onerror=()=>{if(g!==TTS.g)return;TTS.i++;ttsNext(g);};speechSynthesis.speak(u);}
  function ttsStop(){TTS.g++;TTS.on=false;TTS.onEnd=null;try{ttsOK()&&speechSynthesis.cancel();}catch(e){}$$(".say").forEach(e=>e.classList.remove("say"));}
  if(ttsOK()){try{speechSynthesis.getVoices();speechSynthesis.onvoiceschanged=()=>{};}catch(e){}}

  /* ---- Shelf ---- */
  function show(on){sec.querySelector(".ml-hero").classList.toggle("in",on);$("#mlLogin").hidden=on;$("#mlShelf").hidden=!on;}
  function renderShelf(){try{window.spRender&&setTimeout(spRender,0);}catch(e){}
    show(true);
    $("#mlHello").textContent="नमस्ते, "+(ML.name||"पाठक")+" 🙏";
    $("#mlSub").textContent=ML.items.length+" items आपकी Library में • "+ML.mobile+(ML.demo?" • यह Demo है":"");setTimeout(()=>{window.hbStreakShow&&hbStreakShow();window.hbMeShow&&hbMeShow();},0);
    $("#mlNotes").innerHTML=(/\.p$/.test(ML.token||"")?`<div class="ml-note">🤝 <b>Partner Demo Library</b> — ग्राहक को दिखाने के लिए 4 computer e-books खुली हैं। आपकी ख़ुद की ख़रीदी चीज़ें भी यहीं दिखेंगी। अगर आप HITARTHI के छात्र भी हैं, तो अपनी पूरी Library के लिए <b>Mobile + Student ID</b> से login करें।</div>`:"")+(ML.demo?`<div class="ml-note">👀 यह Demo Library है। आपकी website पर ग्राहक अपने mobile + Order ID से अपनी असली books देखेगा।</div>`:"")
      +ML.pending.map(o=>`<div class="ml-note">⏳ Order <b>${esc(o)}</b> का भुगतान जाँच में है — पक्का होते ही यहाँ अपने-आप दिखेगा।</div>`).join("")
      +ML.short.map(t=>`<div class="ml-note">⚠️ <b>${esc(t)}</b> — भुगतान की रकम कीमत से कम दर्ज है। <a href="https://wa.me/919453717356" target="_blank" rel="noopener">WhatsApp करें</a></div>`).join("");
    const last=LS.get("ml_last",null), li=last&&ML.items.findIndex(x=>x.key===last.key), lit=li>=0&&ML.items[li];
    const cb=$("#mlCont");cb.hidden=!lit;if(lit){const c=lit.chapters[last.n]||lit.chapters[0];cb.innerHTML=`<i>${TI[c.type]||"📖"}</i><div><small>जहाँ छोड़ा था</small><b>${esc(lit.title)}</b><small>${esc(c.title)}</small></div><span>जारी रखें ▶</span>`;cb.onclick=()=>openItem(lit,c.n,"own");}
    const f=ML.fil, list=ML.items.map((it,i)=>[it,i]).filter(([it])=>f==="all"||(f==="read"&&(it.types.includes("Ebook")||it.types.includes("PDF")))||(f==="listen"&&(it.types.includes("Audio")||it.types.includes("Ebook")))||(f==="watch"&&(it.types.includes("Video")||it.types.includes("Live"))));
    $("#mlGrid").innerHTML=list.length?list.map(([it,i])=>{const d=doneCount(it),pct=Math.round(d/Math.max(1,it.total)*100);
      const chips=it.types.map(t=>`<span>${TI[t]} ${TN[t]}</span>`).join("")+(it.types.includes("Ebook")&&!it.types.includes("Audio")?"<span>🔊 AI आवाज़</span>":"");
      return `<button type="button" class="ml-card" data-mlopen="${i}">${cover(it,"ml-cv")}<div class="ml-ci"><h3>${esc(it.title)}</h3><div class="ml-chips">${chips}</div><div class="ml-bar"><i style="width:${pct}%"></i></div><div class="ml-meta">${it.total?`${d}/${it.total} पूरे • ${it.open<it.total?"🔓 "+it.open+"/"+it.total+" खुले":"सब खुले ✓"}`:""}${it.lms?`${it.total?"<br>":""}${(()=>{const c=it.lms.classes.find(x=>x.live)||it.lms.classes.find(x=>!x.over);return c?(c.live?"🔴 अभी live class":"🗓️ अगली class "+c.date.slice(5)+" "+c.time):"";})()}${it.lms.cert?" • 🎓 Certificate मिला":""}`:""}</div>${it.via?`<div class="ml-via">📦 ${esc(it.via)} में शामिल</div>`:""}${it.note?`<div class="ml-lock">${esc(it.note)}</div>`:""}</div></button>`;}).join("")
      :`<div class="ml-empty">${ML.items.length?"इस हिस्से में अभी कुछ नहीं।":"अभी आपकी Library ख़ाली है।"}<br><br><button class="btn btn-orange btn-sm" type="button" data-go="books">Books देखें</button> <button class="btn btn-ghost btn-sm" type="button" data-go="courses">Courses देखें</button></div>`;
  }
  $("#mlGrid").addEventListener("click",e=>{const b=e.target.closest("[data-mlopen]");if(!b)return;const it=ML.items[+b.dataset.mlopen];if(it)openItem(it,null,"own");});
  $$("[data-mlfil]").forEach(b=>b.addEventListener("click",()=>{ML.fil=b.dataset.mlfil;$$("[data-mlfil]").forEach(x=>x.setAttribute("aria-pressed",x===b));renderShelf();}));
  $$("[data-mlt]").forEach(b=>b.addEventListener("click",()=>{$$("[data-mlt]").forEach(x=>x.setAttribute("aria-pressed",x===b));$$("[data-mlf]").forEach(x=>x.hidden=x.dataset.mlf!==b.dataset.mlt);msg("");}));
  $("#mlDemo").addEventListener("click",()=>{Object.assign(ML,DEMO(),{demo:true,token:""});renderShelf();$("#mlShelf").scrollIntoView({behavior:"smooth",block:"start"});});
  $("#mlOut").addEventListener("click",()=>{try{localStorage.removeItem(libCK());}catch(e){}LS.del("ml_tok");try{PDB.clear();Object.keys(PDFC).forEach(k=>delete PDFC[k]);}catch(e){}Object.assign(ML,{token:"",name:"",mobile:"",items:[],pending:[],short:[],demo:false});show(false);msg("");});

  /* ---- Login / data ---- */
  const libCK=()=>"hb_lib_"+String(ML.token||"").slice(0,24);
  async function loadLib(){
    /* तेज़ी: पिछली बार की list तुरंत दिखे, पीछे से ताज़ा */
    try{const c=JSON.parse(localStorage.getItem(libCK())||"null");if(c&&c.items&&!ML.items.length){Object.assign(ML,{name:c.name||ML.name,mobile:c.mobile||ML.mobile,items:c.items,pending:c.pending||[],short:c.short||[],demo:false});renderShelf();}}catch(e){}
    try{const r=await hbCall("library",{token:ML.token});
      if(r&&r.ok){try{localStorage.setItem(libCK(),JSON.stringify({name:r.name,mobile:r.mobile,items:r.items||[],pending:r.pending||[],short:r.short||[]}));}catch(e){}}
      if(!r||!r.ok){if(r&&r.relogin){LS.del("ml_tok");ML.token="";show(false);}msg(((r&&r.err)||"Library नहीं खुली")+(r&&r.relogin?" • ध्यान दें: एक खाता एक समय में सिर्फ़ 2 device (mobile/laptop) पर चलता है":""),true);return false;}
      Object.assign(ML,{name:r.name||ML.name,mobile:r.mobile||ML.mobile,items:r.items||[],pending:r.pending||[],short:r.short||[],demo:false});renderShelf();return true;}
    catch(e){msg("Server से जुड़ नहीं पाए — internet देखकर दोबारा कोशिश करें",true);return false;}}
  async function login(payload){
    if(!HB_API){msg("यह preview है — असली login आपकी website पर (Google Sheet जुड़ने के बाद) चलेगा। अभी “Demo Library” देखें।",true);return;}
    const b=$("#mlGo");b.disabled=true;b.textContent="खुल रहा है…";
    try{const r=await hbCall("liblogin",payload);
      if(!r||!r.ok){msg((r&&r.err)||"Login नहीं हुआ",true);return;}
      if(payload.id){try{localStorage.setItem("hb_pid",payload.id);}catch(x){}}
      ML.token=r.token;ML.name=r.name||"";ML.mobile=r.mobile||"";LS.set("ml_tok",{t:r.token,n:ML.name,m:ML.mobile});msg("");
      if(await loadLib())$("#mlShelf").scrollIntoView({behavior:"smooth",block:"start"});}
    catch(e){msg("Server से जुड़ नहीं पाए — दोबारा कोशिश करें",true);}
    finally{b.disabled=false;b.textContent="📚 Library खोलें";}}
  $("#mlForm").addEventListener("submit",e=>{e.preventDefault();
    if($('[data-mlt="p"]').getAttribute("aria-pressed")==="true"){const id=$("#mlPid").value.trim().toUpperCase(),pin=$("#mlPin").value.trim();
      if(!/^[A-Z0-9]{3,12}$/.test(id)||!/^\d{4,6}$/.test(pin))return msg("Partner ID और PIN सही लिखें",true);return login({id,pin});}
    const mobile=$("#mlMob").value.replace(/\D/g,""),rawId=$("#mlOid").value.trim(),orderId=rawId.indexOf("@")>0?rawId.toLowerCase():rawId.toUpperCase().replace(/\s+/g,"");
    if(mobile.length!==10)return msg("10 अंकों का mobile नंबर लिखें",true);
    if(!/^(HT\d{4}-\d{4}|EN\d{9}|HS\d{4,7})$/.test(orderId)&&!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/.test(orderId))return msg("Order ID (HT2110-4821), Student ID (HS10001) या अपना email लिखें",true);
    login({mobile,orderId});});
  /* Partner Dashboard → "मेरी Library" (ID + PIN दोबारा नहीं डालना) */
  window.mlPartnerLogin=function(id,pin){location.hash="library";setTimeout(()=>{try{init();}catch(e){}login({id,pin});},350);};
  /* Payment के तुरंत बाद — "Library खोलें" */
  window.SPX={get ML(){return ML;},init:()=>init(),loadLib:()=>loadLib(),openItem:(it,n,m)=>openItem(it,n,m),cover:(it,c)=>cover(it,c),doneCount:it=>doneCount(it),TI,TN,
    setTok:(t,n,m)=>{ML.token=t;ML.name=n||"";ML.mobile=m||"";LS.set("ml_tok",{t,n:ML.name,m:ML.mobile});},logout:()=>{const b=$("#mlOut");if(b)b.click();}};
  window.mlAfterPay=function(orderId,mob){const lines=(typeof PAY!=="undefined"&&PAY.lines)||null;if(lines&&lines.length&&lines.every(l=>l.cat==="Physical"))return;
    let el=$("#payLib");if(!el){el=document.createElement("button");el.type="button";el.id="payLib";el.className="btn btn-primary btn-block";$("#payOk").after(el);}
    el.hidden=false;el.textContent="📚 अभी पढ़ना / सुनना / देखना शुरू करें — मेरी Library";
    el.onclick=()=>{closePay();location.hash="library";$("#mlMob").value=mob;$("#mlOid").value=orderId;login({mobile:mob,orderId});};};

  /* ---- Free samples ---- */
  function renderFree(){const L=ML.free.filter(it=>it.chapters.some(c=>c.free));
    $("#mlFree").innerHTML=L.length?L.map((it,i)=>{const fc=it.chapters.filter(c=>c.free);return `<button type="button" class="ml-fc" data-mlfree="${ML.free.indexOf(it)}">${cover(it,"ml-cv")}<div><b>${esc(it.title)}</b><small>🎁 ${fc.length} मुफ़्त • ${[...new Set(fc.map(c=>TI[c.type]))].join(" ")}</small></div></button>`;}).join("")
      :'<p class="muted">जल्द ही — हर book का पहला अध्याय यहाँ मुफ़्त मिलेगा।</p>';}
  $("#mlFree").addEventListener("click",e=>{const b=e.target.closest("[data-mlfree]");if(!b)return;const it=ML.free[+b.dataset.mlfree];if(!it)return;
    const go=()=>openItem(it,it.chapters.find(c=>c.free).n,"free");const s=LS.get("hitarthi_lead",null);
    if(s&&s.m){if(HB_API&&!it._lead){it._lead=1;hbCall("lead",{name:s.n,mobile:s.m,interest:it.title,source:"Free Chapter"}).catch(()=>{});}go();}
    else openLead({title:"📖 मुफ़्त अध्याय पढ़ें / सुनें",sub:"अपना नाम और mobile डालें — अध्याय तुरंत खुलेगा। नई books और offers की जानकारी WhatsApp पर मिलेगी।",source:"Free Chapter",interest:it.title,hideCourse:true,hideCity:true,btn:"📖 अध्याय खोलें",onDone:go});});

  /* ---- Player ---- */
  function wm(){let w=$("#mlWm");if(!w){w=document.createElement("div");w.id="mlWm";w.className="ml-wm";w.setAttribute("aria-hidden","true");mlp.appendChild(w);}
    const t=P.mode==="own"?(ML.name||"HITARTHI")+" • "+ML.mobile:"HITARTHI • Free Sample";w.innerHTML=Array(60).fill("<span>"+esc(t)+"</span>").join("");}
  window.mlOpenLocal=function(it,texts){Object.assign(DT,texts||{});openItem(it,0,"own");};
  function openItem(it,n,mode){P={it,n:0,mode};
    if(!it.chapters.length){$("#mlpTitle").textContent=it.title;mlp.hidden=false;document.body.style.overflow="hidden";wm();renderSide();$("#mlpSub").textContent="🔴 Live Class • 📝 Test • 🎓 Certificate";if(it.lms)LMSX.open("home",it,0,main);return;}
    if(n==null){const last=LS.get("ml_last",null);n=last&&last.key===it.key&&it.chapters[last.n]?last.n:((it.chapters.find(c=>c.open&&!prog(it.key).d[c.n])||it.chapters.find(c=>c.open)||it.chapters[0]).n);}
    $("#mlpTitle").textContent=it.title;mlp.hidden=false;document.body.style.overflow="hidden";wm();renderSide();openCh(n);}
  function closePlayer(){stopMedia();mlp.hidden=true;mlp.classList.remove("side");document.body.style.overflow="";main.innerHTML="";if(!$("#mlShelf").hidden)renderShelf();}
  function renderSide(){const it=P.it,p=prog(it.key),types=[...new Set(it.chapters.map(c=>c.type))];
    side.innerHTML=types.map(t=>`${types.length>1?`<h4>${TI[t]} ${t==="Ebook"?"पढ़ें":t==="Audio"?"सुनें (Audio Book)":t==="Video"?"Video Lessons":"PDF"}</h4>`:""}`+it.chapters.filter(c=>c.type===t).map(c=>`<button type="button" class="mlp-ch${c.open?"":" lk"}" data-ch="${c.n}" aria-current="${c.n===P.n}"><i>${c.open?TI[c.type]:"🔒"}</i><span>${esc(c.title)}</span>${p.d[c.n]?'<small class="ok">✓</small>':c.mins?`<small>${c.mins} मिनट</small>`:""}</button>`).join("")).join("")
      +(P.mode==="own"&&P.it.lms&&window.LMSX?LMSX.side(P.it):"")
      +(P.mode==="free"?`<div style="padding:12px 8px"><button type="button" class="btn btn-orange btn-block btn-sm" data-a="buy">पूरी ${it.types.includes("Video")?"Course":"Book"} खरीदें</button></div>`:"");}
  window.mlState=()=>({token:ML.token,demo:ML.demo,name:ML.name});window.mlRefreshSide=()=>{if(P)renderSide();};
  const lmsGo=(k,i)=>{stopMedia();mlp.classList.remove("side");side.querySelectorAll("[data-ch]").forEach(x=>x.setAttribute("aria-current","false"));LMSX.open(k,P.it,i,main);$("#mlpSub").textContent=k==="cls"?"🔴 Live Class":k==="test"?"📝 Test":k==="cert"?"🎓 Certificate":P.it.title;};
  side.addEventListener("click",e=>{const l=e.target.closest("[data-lms]");if(l){lmsGo(l.dataset.lms,+l.dataset.i);return;}});
  main.addEventListener("click",e=>{const l=e.target.closest("[data-lmsgo]");if(l)lmsGo(l.dataset.lmsgo,+l.dataset.i);});
  side.addEventListener("click",e=>{const b=e.target.closest("[data-ch]");if(b){mlp.classList.remove("side");$("#mlpList").setAttribute("aria-expanded","false");openCh(+b.dataset.ch);}});
  $("#mlpBack").addEventListener("click",closePlayer);
  $("#mlpList").addEventListener("click",()=>{const o=mlp.classList.toggle("side");$("#mlpList").setAttribute("aria-expanded",o);});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!mlp.hidden)closePlayer();});
  mlp.addEventListener("contextmenu",e=>{if(e.target.closest(".mlr-page,.mla,.mlv,.mlpdf2"))e.preventDefault();});
  function stopMedia(){ttsStop();const a=$("#mlAu");if(a){try{a.pause();}catch(e){}}clearInterval(stopMedia._t);}
  const nextOf=(n,sameType)=>P.it.chapters.find(c=>c.n>n&&c.open&&(!sameType||c.type===P.it.chapters[n].type));
  const prevOf=(n,sameType)=>[...P.it.chapters].reverse().find(c=>c.n<n&&c.open&&(!sameType||c.type===P.it.chapters[n].type));
  const markDone=n=>{saveProg(P.it.key,x=>{x.d[n]=1;});const b=side.querySelector(`[data-ch="${n}"] small`);if(b){b.className="ok";b.textContent="✓";}};
  async function openCh(n){stopMedia();const it=P.it,c=it.chapters[n];if(!c)return;P.n=n;
    side.querySelectorAll("[data-ch]").forEach(b=>b.setAttribute("aria-current",+b.dataset.ch===n));
    $("#mlpSub").textContent=(TI[c.type]||"")+" "+c.title;main.scrollTop=0;
    if(!c.open)return lockPanel(c,P.mode==="free"?"यह अध्याय पूरी "+(it.types.includes("Video")?"course":"book")+" खरीदने पर खुलेगा।":(it.note||"यह हिस्सा अभी बंद है।"));
    if(P.mode==="own"){LS.set("ml_last",{key:it.key,n});window.hbStreakHit&&hbStreakHit();window.hbWatch&&hbWatch(it.key,c.title||"",c.type||"",c.mins||0);}
    let r;
    if(c.demo||ML.demo&&P.mode==="own"){r={ok:true,type:c.type,html:c.type==="Ebook"?DT[c.demo]:"",tts:c.type==="Audio"?DT[c.demo]:"",demo:c.type==="Video"};}
    else{main.innerHTML='<div class="ml-load">खुल रहा है…</div>';
      const isPdf=!["Ebook","Audio","Video"].includes(c.type);
      const opn=hbCall("libopen",{token:P.mode==="own"?ML.token:"",key:it.key,n}).catch(()=>({ok:false,err:"Server से जुड़ नहीं पाए — internet देखकर दोबारा कोशिश करें"}));
      if(isPdf){pdfjs().catch(()=>{});const ck=it.key+"|"+c.n;let cached=PDFC[ck]||null;if(!cached){try{cached=await PDB.get(pdfKey(ck));}catch(e){}}
        if(cached&&P.n===n&&!mlp.hidden){PDFC[ck]=cached;renderPdf({ok:true,type:"PDF",pdf:{parts:0,size:cached.length},fromCache:true},c);
          opn.then(x=>{if(P.n!==n||mlp.hidden)return;if(!x||!x.ok){delete PDFC[ck];PDB.del(pdfKey(ck));lockPanel(c,(x&&x.err)||"अभी नहीं खुला",x&&x.locked);}});return;}}
      r=await opn;
      if(P.n!==n||mlp.hidden)return;
      if(!r||!r.ok)return lockPanel(c,(r&&r.err)||"अभी नहीं खुला",r&&r.locked);}
    if(c.type==="Ebook")renderRead(r,c);else if(c.type==="Audio")renderAudio(r,c);else if(c.type==="Video")renderVideo(r,c);else renderPdf(r,c);}
  function lockPanel(c,text,locked){main.innerHTML=`<div class="ml-lockp"><b>${locked===false?"⚠️":"🔒"}</b><h3>${esc(c.title)}</h3><p>${esc(text)}</p>${P.mode==="free"?`<button type="button" class="btn btn-orange" data-a="buy">पूरी ${P.it.types.includes("Video")?"Course":"Book"} खरीदें</button>`:/किश्त|Monthly/.test(text)?'<button type="button" class="btn btn-orange" data-a="fees">अगली किश्त भरें</button>':'<a class="btn btn-wa" href="https://wa.me/919453717356" target="_blank" rel="noopener">WhatsApp पर पूछें</a>'}</div>`;}
  mlp.addEventListener("click",e=>{const a=e.target.closest("[data-a]");if(!a)return;const k=a.dataset.a;
    if(k==="buy"){const v=P.it.types.includes("Video");closePlayer();location.hash=v?"courses":"books";}
    else if(k==="fees"){closePlayer();location.hash="fees";setTimeout(()=>{const f=$("#mkForm");f&&f.scrollIntoView({behavior:"smooth",block:"center"});},120);}});

  /* 📖 पढ़ें */
  function renderRead(r,c){const th=LS.get("ml_th","light"),fz=+LS.get("ml_fz",1)||1;
    main.innerHTML=`<div class="mlr ${th}" style="--fz:${fz}"><div class="mlr-tools"><button type="button" data-r="fz-" aria-label="अक्षर छोटे">A−</button><button type="button" data-r="fz+" aria-label="अक्षर बड़े">A+</button>`
      +["light","sepia","night"].map((t,i)=>`<button type="button" data-th="${t}" aria-pressed="${t===th}" aria-label="${["दिन","पुराना कागज़","रात"][i]}">${["☀️","📜","🌙"][i]}</button>`).join("")
      +`<span class="sp"></span><button type="button" data-r="tts" id="mlTts">🔊 सुनिए</button><select id="mlTr" aria-label="आवाज़ की speed">${[0.8,1,1.25,1.5].map(v=>`<option value="${v}"${v===TTS.rate?" selected":""}>${v}x</option>`).join("")}</select></div>`
      +`<article class="mlr-page" id="mlPage">${mlClean(r.html)}</article><div class="mlr-nav"><button type="button" data-r="prev"${prevOf(c.n,1)?"":" disabled"}>← पिछला</button><span id="mlPct" class="small"></span><button type="button" data-r="next"${nextOf(c.n,1)?"":" disabled"}>अगला →</button></div></div>`;
    const R=main.querySelector(".mlr"), pos=prog(P.it.key).pos[c.n]||0;
    requestAnimationFrame(()=>{const h=main.scrollHeight-main.clientHeight;if(pos>0.02&&h>0)main.scrollTop=pos*h;if(h<40)markDone(c.n);onScroll();});
    R.addEventListener("click",e=>{const b=e.target.closest("[data-r],[data-th]");if(!b)return;
      if(b.dataset.th){R.className="mlr "+b.dataset.th;LS.set("ml_th",b.dataset.th);R.querySelectorAll("[data-th]").forEach(x=>x.setAttribute("aria-pressed",x===b));return;}
      const k=b.dataset.r;
      if(k==="fz-"||k==="fz+"){const v=Math.min(1.6,Math.max(0.8,(+LS.get("ml_fz",1)||1)+(k==="fz+"?0.1:-0.1)));LS.set("ml_fz",Math.round(v*10)/10);R.style.setProperty("--fz",v);}
      else if(k==="tts"){if(TTS.on){ttsStop();b.textContent="🔊 सुनिए";return;}
        const els=[...$("#mlPage").querySelectorAll("h1,h2,h3,h4,p,li,td")];
        if(ttsStart(els,()=>{b.textContent="🔊 सुनिए";markDone(c.n);const nx=nextOf(c.n,1);if(nx)toast("अध्याय पूरा ✓ अगला अध्याय दबाकर आगे सुनें");}))b.textContent="⏸ रोकें";}
      else if(k==="prev"){const p=prevOf(c.n,1);p&&openCh(p.n);}else if(k==="next"){markDone(c.n);const x=nextOf(c.n,1);x&&openCh(x.n);}});
    $("#mlTr").addEventListener("change",e=>{TTS.rate=+e.target.value;LS.set("ml_trate",TTS.rate);if(TTS.on){const i=TTS.i,els=[...$("#mlPage").querySelectorAll("h1,h2,h3,h4,p,li,td")],f=TTS.onEnd;ttsStart(els,f,i);}});
    let t0=0;function onScroll(){const h=main.scrollHeight-main.clientHeight,p=h>0?main.scrollTop/h:1,el=$("#mlPct");if(el)el.textContent=Math.round(p*100)+"%";
      const now=Date.now();if(now-t0>800){t0=now;saveProg(P.it.key,x=>{x.pos[c.n]=Math.round(p*1000)/1000;});}if(p>0.92&&!prog(P.it.key).d[c.n])markDone(c.n);}
    main.onscroll=()=>{if(main.querySelector(".mlr"))onScroll();};}

  /* 🎧 सुनें */
  function renderAudio(r,c){const rate=+LS.get("ml_arate",1)||1, ai=!r.src;
    main.onscroll=null;
    main.innerHTML=`<div class="mla">${cover(P.it,"mla-cv")}<h3>${esc(c.title)}</h3><p>${esc(P.it.title)}</p>${ai?"":`<audio id="mlAu" preload="metadata" src="${esc(r.src)}"></audio>`}
      <input type="range" class="mla-seek" id="mlSeek" min="0" max="1000" value="0" aria-label="कहाँ तक"${ai?" disabled":""}><div class="mla-time"><span id="mlT0">0:00</span><span id="mlT1">${ai?"🤖 AI आवाज़":"--:--"}</span></div>
      <div class="mla-btns"><button type="button" data-u="b10" aria-label="10 सेकंड पीछे"${ai?" disabled":""}>−10</button><button type="button" class="play" data-u="play" aria-label="चलाएँ / रोकें">▶</button><button type="button" data-u="f30" aria-label="30 सेकंड आगे"${ai?" disabled":""}>+30</button></div>
      <div class="mla-row"><select id="mlRate" aria-label="Speed">${[0.75,1,1.25,1.5,1.75,2].map(v=>`<option value="${v}"${v===rate?" selected":""}>${v}x</option>`).join("")}</select><button type="button" data-u="prev"${prevOf(c.n,1)?"":" disabled"}>⏮ पिछला</button><button type="button" data-u="next"${nextOf(c.n,1)?"":" disabled"}>अगला ⏭</button></div>
      <p class="mla-tts" id="mlAuMsg">${ai?"यह अध्याय आपका mobile हिंदी आवाज़ में पढ़कर सुनाएगा।":"🎧 Screen बंद होने पर भी चलता रहेगा • अगला अध्याय अपने-आप"}</p>${ai?`<div hidden id="mlTx">${mlClean(r.tts||r.html||"")}</div>`:""}</div>`;
    const pb=main.querySelector(".play"), a=$("#mlAu"), key=P.it.key;
    try{if("mediaSession" in navigator)navigator.mediaSession.metadata=new MediaMetadata({title:c.title,artist:"HITARTHI",album:P.it.title});}catch(e){}
    const goNext=()=>{markDone(c.n);const x=nextOf(c.n,1);if(x)openCh(x.n).then(()=>{const p=main.querySelector(".play");p&&p.click();});};
    if(ai){pb.onclick=()=>{if(TTS.on){ttsStop();pb.textContent="▶";return;}TTS.rate=+$("#mlRate").value;
        if(ttsStart([...$("#mlTx").querySelectorAll("h1,h2,h3,h4,p,li,td")],done=>{pb.textContent="▶";if(done)goNext();}))pb.textContent="⏸";};
      $("#mlRate").onchange=e=>LS.set("ml_arate",+e.target.value);}
    else{a.playbackRate=rate;
      a.addEventListener("loadedmetadata",()=>{$("#mlT1").textContent=tm(a.duration);const s=prog(key).pos[c.n]||0;if(s>5&&s<a.duration-5){a.currentTime=s;toast("जहाँ छोड़ा था, वहीं से ▶ "+tm(s));}});
      a.addEventListener("timeupdate",()=>{if(!a.duration)return;$("#mlSeek").value=Math.round(a.currentTime/a.duration*1000);$("#mlT0").textContent=tm(a.currentTime);});
      a.addEventListener("play",()=>{pb.textContent="⏸";a.playbackRate=+$("#mlRate").value;});a.addEventListener("pause",()=>{pb.textContent="▶";saveProg(key,x=>{x.pos[c.n]=Math.floor(a.currentTime);});});
      a.addEventListener("ended",()=>{saveProg(key,x=>{x.pos[c.n]=0;});goNext();});
      a.addEventListener("error",()=>{if(r.embed){main.querySelector(".mla-btns").outerHTML=`<div class="mlv-box" style="padding-top:0;height:110px;margin-top:16px"><iframe src="${esc(r.embed)}" title="Audio" allow="autoplay"></iframe></div>`;$("#mlAuMsg").textContent="Drive player से चलाएँ ▶";}else $("#mlAuMsg").textContent="⚠️ Audio नहीं चला — internet देखें या WhatsApp पर बताएँ";});
      stopMedia._t=setInterval(()=>{if(!a.paused)saveProg(key,x=>{x.pos[c.n]=Math.floor(a.currentTime);});},5000);
      pb.onclick=()=>{a.paused?a.play().catch(()=>toast("Play दबाएँ")):a.pause();};
      $("#mlSeek").oninput=e=>{if(a.duration)a.currentTime=e.target.value/1000*a.duration;};
      $("#mlRate").onchange=e=>{a.playbackRate=+e.target.value;LS.set("ml_arate",+e.target.value);};
      try{navigator.mediaSession.setActionHandler("seekbackward",()=>{a.currentTime-=10;});navigator.mediaSession.setActionHandler("seekforward",()=>{a.currentTime+=30;});navigator.mediaSession.setActionHandler("nexttrack",goNext);}catch(e){}}
    main.querySelector(".mla").addEventListener("click",e=>{const b=e.target.closest("[data-u]");if(!b)return;const k=b.dataset.u;
      if(k==="b10"&&a)a.currentTime=Math.max(0,a.currentTime-10);else if(k==="f30"&&a)a.currentTime=Math.min(a.duration||0,a.currentTime+30);
      else if(k==="prev"){const p=prevOf(c.n,1);p&&openCh(p.n);}else if(k==="next"){const x=nextOf(c.n,1);x&&openCh(x.n);}});}

  /* 🎬 देखें */
  function renderVideo(r,c){main.onscroll=null;const nx=nextOf(c.n,1),pv=prevOf(c.n,1);
    main.innerHTML=`<div class="mlv"><div class="mlv-box">${r.embed?`<iframe src="${esc(r.embed)}" title="${esc(c.title)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>${/drive\.google/.test(r.embed)?'<div class="mlv-shield" aria-hidden="true"></div>':""}`:`<div class="mlv-ph"><div><b>🎬</b>Demo: आपकी website पर यहाँ lesson का video चलेगा<br><small>(YouTube Unlisted या Google Drive — link सिर्फ़ खरीदने वाले को मिलता है)</small></div></div>`}</div>
      <div class="mlv-bar"><h3>${esc(c.title)}</h3><div style="display:flex;gap:8px;flex-wrap:wrap"><button type="button" class="btn btn-ghost btn-sm" data-v="prev"${pv?"":" disabled"}>← पिछला</button><button type="button" class="btn btn-primary btn-sm" data-v="done">✓ पूरा हुआ${nx?", अगला →":""}</button></div></div>
      <p class="small muted" style="margin-top:10px">${prog(P.it.key).d[c.n]?"✓ यह lesson आप पूरा कर चुके हैं।":"Lesson देखने के बाद “पूरा हुआ” दबाएँ — आपकी progress Library में दिखेगी।"}</p></div>`;
    main.querySelector(".mlv").addEventListener("click",e=>{const b=e.target.closest("[data-v]");if(!b)return;
      if(b.dataset.v==="prev"){pv&&openCh(pv.n);}else{markDone(c.n);if(nx)openCh(nx.n);else toast("🎉 सारे खुले lesson पूरे!");}});}
  /* 📄 PDF */
  /* 🔒 HITARTHI सुरक्षित Reader — PDF Drive से सीधे नहीं, टुकड़ों में (सिर्फ़ खरीदार को) • Download/Print नहीं • हर पन्ने पर नाम */
  const PDFJS="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/",PDFC={};let pdfLib=null;
  /* तेज़ी: खुली हुई book phone के अंदर (app की अपनी जगह, IndexedDB) सेव — दूसरी बार तुरंत, बिना server */
  const PDB={db:null,open(){if(this.db)return Promise.resolve(this.db);return new Promise(res=>{try{const q=indexedDB.open("hb_lib",1);q.onupgradeneeded=()=>{try{q.result.createObjectStore("pdf");}catch(e){}};q.onsuccess=()=>{this.db=q.result;res(this.db);};q.onerror=()=>res(null);q.onblocked=()=>res(null);}catch(e){res(null);}});},
    async get(k){const db=await this.open();if(!db)return null;return new Promise(res=>{try{const r=db.transaction("pdf").objectStore("pdf").get(k);r.onsuccess=()=>res(r.result&&r.result.d instanceof Uint8Array?r.result.d:null);r.onerror=()=>res(null);}catch(e){res(null);}});},
    async put(k,d){const db=await this.open();if(!db||!d||d.length>80e6)return;try{db.transaction("pdf","readwrite").objectStore("pdf").put({d,t:Date.now()},k);}catch(e){}},
    async del(k){const db=await this.open();if(!db)return;try{db.transaction("pdf","readwrite").objectStore("pdf").delete(k);}catch(e){}},
    async clear(){const db=await this.open();if(!db)return;try{db.transaction("pdf","readwrite").objectStore("pdf").clear();}catch(e){}}};
  const pdfKey=(ck)=>ck+"|"+(P.mode==="own"?(ML.mobile||ML.token||""):"free");
  function pdfjs(){return pdfLib||(pdfLib=new Promise((ok,no)=>{if(window.pdfjsLib){pdfjsLib.GlobalWorkerOptions.workerSrc=PDFJS+"pdf.worker.min.js";return ok(pdfjsLib);}
    const sc=document.createElement("script");sc.src=PDFJS+"pdf.min.js";sc.onload=()=>{pdfjsLib.GlobalWorkerOptions.workerSrc=PDFJS+"pdf.worker.min.js";ok(pdfjsLib);};sc.onerror=()=>{pdfLib=null;no(new Error("pdfjs"));};document.head.appendChild(sc);}));}
  async function pdfPart(c,i){let last;for(let k=0;k<3;k++){try{const ctl=new AbortController(),tm=setTimeout(()=>ctl.abort(),90000);
      const res=await fetch(HB_API,{method:"POST",body:JSON.stringify({action:"libpdf",token:P.mode==="own"?ML.token:"",key:P.it.key,n:c.n,part:i}),signal:ctl.signal});clearTimeout(tm);
      const j=await res.json();if(j&&j.ok)return j;last=new Error((j&&j.err)||"नहीं खुला");if(j&&(j.relogin||j.locked))break;}catch(e){last=e;}}throw last;}
  const b64u8=b=>{const s=atob(b),u=new Uint8Array(s.length);for(let i=0;i<s.length;i++)u[i]=s.charCodeAt(i);return u;};
  function pdfWmText(){return P.mode==="own"?((ML.name||"HITARTHI")+" • "+(ML.mobile||"")).trim():"HITARTHI • Free Sample";}
  async function renderPdf(r,c){main.onscroll=null;
    if(!r.pdf){main.innerHTML=`<div class="mlpdf"><iframe src="${esc(r.embed)}" title="${esc(c.title)}" allow="autoplay"></iframe></div>`;markDone(c.n);return;}
    const n0=P.n,ck=P.it.key+"|"+c.n,still=()=>P.n===n0&&!mlp.hidden;
    main.innerHTML=`<div class="mlpdf2"><div class="mlpdf2-bar"><button type="button" data-z="-" aria-label="छोटा करें">−</button><span id="mlPgN">🔒 HITARTHI Reader</span><button type="button" data-z="+" aria-label="बड़ा करें">+</button></div><div class="mlpdf2-load" id="mlPdfLd">🔒 सुरक्षित Reader में book खुल रही है… <b id="mlPdfPc">0%</b></div><div id="mlPdfPages" class="mlpdf2-pages"></div></div>`;
    let doc;
    try{const lib=await pdfjs();let data=PDFC[ck];
      if(!data){const parts=r.pdf.parts,bufs=[];let done=0,nx=0;const wk=async()=>{while(nx<parts){const i=nx++;const j=await pdfPart(c,i);bufs[i]=b64u8(j.b64);done++;const pc=$("#mlPdfPc");if(pc)pc.textContent=Math.round(done/parts*100)+"%";}};await Promise.all([wk(),wk(),wk(),wk()].slice(0,Math.min(4,parts)));if(!still())return;
        let len=0;bufs.forEach(b=>len+=b.length);data=new Uint8Array(len);let o=0;bufs.forEach(b=>{data.set(b,o);o+=b.length;});PDFC[ck]=data;PDB.put(pdfKey(ck),data);}
      doc=await lib.getDocument({data:data.slice()}).promise;}
    catch(e){if(still())lockPanel(c,"Book अभी नहीं खुली — "+((e&&e.message&&!/fetch|abort|pdfjs/i.test(e.message))?e.message:"internet देखकर दोबारा खोलें"),false);return;}
    if(!still())return;
    const ld=$("#mlPdfLd");ld&&ld.remove();const wrap=$("#mlPdfPages"),N=doc.numPages,first=await doc.getPage(1),vp1=first.getViewport({scale:1}),ratio=vp1.height/vp1.width;
    let zoom=+LS.get("ml_pz",1)||1;const W=()=>Math.min(900,Math.max(260,main.clientWidth-24))*zoom;
    wrap.innerHTML=Array.from({length:N},(_,i)=>`<div class="mlpdf2-pg" data-p="${i+1}"></div>`).join("");
    const pgs=[...wrap.children],size=()=>pgs.forEach(d=>{d.style.width=W()+"px";d.style.height=Math.round(W()*ratio)+"px";});size();
    const wt=pdfWmText();
    async function draw(d){if(d._busy||d._z===zoom)return;d._busy=1;try{const pg=await doc.getPage(+d.dataset.p),w=W(),dpr=Math.min(2,window.devicePixelRatio||1),vp=pg.getViewport({scale:w/pg.getViewport({scale:1}).width*dpr});
        const cv=document.createElement("canvas");cv.width=vp.width;cv.height=vp.height;cv.style.width=w+"px";cv.style.height=Math.round(vp.height/dpr)+"px";const x=cv.getContext("2d");
        await pg.render({canvasContext:x,viewport:vp}).promise;
        x.save();x.globalAlpha=.04;x.fillStyle="#0B1A4A";x.font=`bold ${Math.round(18*dpr)}px sans-serif`;x.translate(vp.width/2,vp.height/2);x.rotate(-0.4);
        for(let yy=-vp.height;yy<vp.height;yy+=150*dpr)for(let xx=-vp.width;xx<vp.width;xx+=360*dpr)x.fillText(wt,xx,yy);x.restore();
        x.globalAlpha=.5;x.fillStyle="#334155";x.font=`${Math.round(10*dpr)}px sans-serif`;x.fillText("HITARTHI • "+(P.mode==="own"?(ML.name||""):"Free Sample"),12*dpr,vp.height-8*dpr);
        cv.oncontextmenu=e=>e.preventDefault();d.innerHTML="";d.appendChild(cv);d.style.height="";d._z=zoom;}catch(e){}finally{d._busy=0;}}
    const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting)draw(en.target);}),{root:main,rootMargin:"900px 0px"});pgs.forEach(d=>io.observe(d));
    const pos=prog(P.it.key).pos[c.n]||0;requestAnimationFrame(()=>{const h=main.scrollHeight-main.clientHeight;if(pos>0.02&&h>0)main.scrollTop=pos*h;});
    let t0=0;main.onscroll=()=>{if(!main.querySelector(".mlpdf2"))return;const h=main.scrollHeight-main.clientHeight,p=h>0?main.scrollTop/h:1,el=$("#mlPgN");
      if(el)el.textContent="पन्ना "+Math.min(N,Math.max(1,Math.round(p*(N-1))+1))+" / "+N;const now=Date.now();if(now-t0>800){t0=now;saveProg(P.it.key,x=>{x.pos[c.n]=Math.round(p*1000)/1000;});}
      if(p>0.9&&!prog(P.it.key).d[c.n])markDone(c.n);};main.onscroll();
    main.querySelector(".mlpdf2-bar").addEventListener("click",e=>{const b=e.target.closest("[data-z]");if(!b)return;zoom=Math.min(2.5,Math.max(0.6,Math.round((zoom+(b.dataset.z==="+"?0.2:-0.2))*10)/10));LS.set("ml_pz",zoom);
      const keep=main.scrollTop/Math.max(1,main.scrollHeight);pgs.forEach(d=>{d.innerHTML="";d._z=0;});size();main.scrollTop=keep*main.scrollHeight;pgs.forEach(d=>{io.unobserve(d);io.observe(d);});});
    if(N<=1)markDone(c.n);}
  /* Reader खुला हो तो Save / Print / Copy / View-source के shortcut बंद */
  document.addEventListener("keydown",e=>{if(mlp.hidden)return;if((e.ctrlKey||e.metaKey)&&/^[spcu]$/i.test(e.key)){e.preventDefault();toast("🔒 HITARTHI की books सिर्फ़ यहीं पढ़ी जा सकती हैं");}},true);

  /* ---- पहली बार page खुलने पर ---- */
  let inited=false;
  async function init(){if(inited)return;inited=true;
    if(!HB_API){ML.free=DEMO().items.map(it=>Object.assign(it,{chapters:it.chapters.map(c=>Object.assign(c,{open:c.free}))}));renderFree();return;}
    hbCall("libcatalog",{}).then(r=>{ML.free=(r&&r.ok&&r.items)||[];renderFree();}).catch(()=>{ML.free=[];renderFree();});hbOnFresh("libcatalog",r=>{ML.free=(r&&r.items)||[];renderFree();});
    const s=LS.get("ml_tok",null);if(s&&s.t){ML.token=s.t;ML.name=s.n||"";ML.mobile=s.m||"";loadLib();}}
  new MutationObserver(()=>{if(!sec.hidden)init();}).observe(sec,{attributes:true,attributeFilter:["hidden"]});
  if(!sec.hidden)init();
})();
/* ---------- 🎓 STUDENT PROFILE — My Library • My Books • My Courses • My Certificates ---------- */
(function(){
  const sec=document.querySelector('section[data-page="student"]');if(!sec||!window.SPX)return;
  let tab="lib",certs=null,stu=null,loading=false;
  const isCourse=it=>it.types.includes("Video")||it.types.includes("Live")||it.types.includes("Test")||!!it.lms;
  const isBook=it=>!isCourse(it)&&(it.types.includes("Ebook")||it.types.includes("PDF")||it.types.includes("Audio"));
  const msgE=(el,t,bad)=>{el.className="mc-msg "+(bad?"err":"ok");el.textContent=t;};
  function card(it){const i=SPX.ML.items.indexOf(it),d=SPX.doneCount(it),pct=Math.round(d/Math.max(1,it.total)*100);
    return `<button type="button" class="ml-card" data-spopen="${i}">${SPX.cover(it,"ml-cv")}<div class="ml-ci"><h3>${esc(it.title)}</h3><div class="ml-chips">${it.types.map(t=>`<span>${SPX.TI[t]||""} ${SPX.TN[t]||t}</span>`).join("")}</div><div class="ml-bar"><i style="width:${pct}%"></i></div><div class="ml-meta">${it.total?`${d}/${it.total} पूरे`:""}</div></div></button>`;}
  const empty=(t,b)=>`<div class="sp-empty">${t}<br><br>${b||'<button class="btn btn-orange btn-sm" type="button" data-go="books">📘 Books देखें</button> <button class="btn btn-ghost btn-sm" type="button" data-go="courses">🎬 Courses देखें</button>'}</div>`;
  async function loadCerts(){if(!HB_API||!SPX.ML.token||SPX.ML.demo)return;try{const r=await hbCall("mycerts",{token:SPX.ML.token});if(r&&r.ok){certs=r.certs||[];stu=r.student;spRender();}}catch(e){}}
  window.spRender=function(){
    const ML=SPX.ML,on=!!(ML.token||ML.demo)&&!loading;$("#spOut").hidden=on;$("#spIn").hidden=!on;if(!on)return;
    const items=ML.items||[],B=items.filter(isBook),C=items.filter(isCourse);
    $("#spName").textContent="नमस्ते, "+(ML.name||"Student")+" 🙏";$("#spAv").textContent=(ML.name||"🎓").trim().charAt(0).toUpperCase()||"🎓";
    $("#spId").textContent=stu&&stu.id?"Student ID: "+stu.id:"HITARTHI Student";
    $("#spMeta").textContent=[ML.mobile,stu&&stu.since?"जुड़े: "+stu.since:"",stu&&stu.batch?"Batch: "+stu.batch:""].filter(Boolean).join(" • ");
    $("#spNL").textContent=items.length;$("#spNB").textContent=B.length;$("#spNC").textContent=C.length;$("#spNX").textContent=certs?certs.length:"–";
    $$("[data-spt]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.spt===tab));
    const body=$("#spBody");
    if(tab==="certs"){if(certs===null){body.innerHTML='<div class="sp-empty">⏳ Certificates आ रहे हैं…</div>';loadCerts();return;}
      body.innerHTML=certs.length?certs.map((c,k)=>`<div class="sp-cert"><span style="font-size:1.6rem">🏅</span><b>${esc(c.course)}</b><span class="small muted">${esc(c.date)} • ${c.pct}% • Grade ${esc(c.grade||"-")}</span><span class="small">ID: <b>${esc(c.id)}</b></span><button class="btn btn-orange btn-sm" type="button" data-spcert="${k}">🏅 Certificate देखें / Download</button></div>`).join("")
        :empty("अभी कोई certificate नहीं।<br>Course के सारे lessons + final test पूरा करने पर certificate यहाँ आएगा।",'<button class="btn btn-ghost btn-sm" type="button" data-spt="courses">🎬 My Courses खोलें</button>');return;}
    const L=tab==="books"?B:tab==="courses"?C:items;
    body.innerHTML=L.length?L.map(card).join(""):empty(tab==="books"?"अभी आपकी कोई Book नहीं।":tab==="courses"?"अभी आपका कोई Course नहीं।":"अभी आपकी Library ख़ाली है।");
  };
  sec.addEventListener("click",e=>{const o=e.target.closest("[data-spopen]");if(o){const it=SPX.ML.items[+o.dataset.spopen];if(it)SPX.openItem(it,null,"own");return;}
    const t=e.target.closest("[data-spt]");if(t){tab=t.dataset.spt;spRender();return;}
    const c=e.target.closest("[data-spcert]");if(c&&certs){const x=certs[+c.dataset.spcert];if(x&&window.openCert)openCert(Object.assign({name:SPX.ML.name},x));}});
  document.addEventListener("click",e=>{const b=e.target.closest("[data-sptab]");if(b){tab=b.dataset.sptab==="lib"?"lib":b.dataset.sptab;setTimeout(spRender,60);}});
  $("#spOutBtn").addEventListener("click",()=>{SPX.logout();certs=null;stu=null;spRender();toast("आप logout हो गए");});
  async function doLogin(payload,btn,msg,label){btn.disabled=true;btn.textContent="खुल रहा है…";
    try{const r=await hbCall("liblogin",payload);if(!r||!r.ok){msgE(msg,(r&&r.err)||"Login नहीं हुआ",true);return;}
      SPX.setTok(r.token,r.name,r.mobile);certs=null;stu=null;msg.textContent="";await SPX.loadLib();loadCerts();spRender();window.scrollTo({top:0,behavior:"smooth"});}
    catch(e){msgE(msg,"Server से जुड़ नहीं पाए — दोबारा कोशिश करें",true);}finally{btn.disabled=false;btn.textContent=label;}}
  $("#spLogin").addEventListener("submit",e=>{e.preventDefault();const msg=$("#spMsg"),mobile=$("#spMob").value.replace(/\D/g,""),raw=$("#spSid").value.trim(),id=raw.indexOf("@")>0?raw.toLowerCase():raw.toUpperCase().replace(/\s+/g,"");
    if(mobile.length!==10)return msgE(msg,"10 अंकों का mobile नंबर लिखें",true);
    if(!/^(HT\d{4}-\d{4}|EN\d{9}|HS\d{4,7})$/.test(id)&&!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/.test(id))return msgE(msg,"Student ID (HS10001), Order ID (HT2110-4821) या अपना email लिखें",true);
    if(!HB_API)return msgE(msg,"यह preview है — असली login website पर चलेगा।",true);
    doLogin({mobile,orderId:id},$("#spGo"),msg,"🎓 मेरी Profile खोलें");});
  $("#spReg").addEventListener("submit",async e=>{e.preventDefault();const msg=$("#srMsg"),b=$("#srGo");
    const d={name:$("#srName").value.trim(),mobile:$("#srMob").value.replace(/\D/g,""),email:$("#srEmail").value.trim()};
    if(d.name.length<2)return msgE(msg,"अपना पूरा नाम लिखें",true);if(d.mobile.length!==10)return msgE(msg,"10 अंकों का mobile नंबर लिखें",true);
    if(d.email&&!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(d.email))return msgE(msg,"Email सही लिखें — या खाली छोड़ दें",true);
    if(!HB_API)return msgE(msg,"यह preview है — असली account website पर बनेगा।",true);
    b.disabled=true;b.textContent="बन रहा है…";
    try{const r=await hbCall("stureg",d);if(!r||!r.ok){msgE(msg,(r&&r.err)||"Account नहीं बना",true);if(r&&r.exists){$("#spMob").value=d.mobile;$("#spSid").focus();}return;}
      SPX.setTok(r.token,r.name,r.mobile);certs=[];stu={id:r.sid,since:new Date().toISOString().slice(0,10)};await SPX.loadLib();spRender();toast(r.msg);
      $("#spBody").insertAdjacentHTML("beforebegin",`<div class="ml-note" id="spWelcome">${esc(r.msg)}<br><small>Login के लिए: Mobile + Student ID <b>${esc(r.sid)}</b> • मुफ़्त अध्याय Library में पढ़ें।</small></div>`);loadCerts();}
    catch(err){msgE(msg,"Server से जुड़ नहीं पाए — दोबारा कोशिश करें",true);}finally{b.disabled=false;b.textContent="✨ Account बनाएँ";}});
  const start=()=>{if(sec.hidden)return;const s=(()=>{try{return JSON.parse(localStorage.getItem("ml_tok")||"null");}catch(e){return null;}})();
    SPX.init();if(s&&s.t&&!SPX.ML.token){SPX.setTok(s.t,s.n,s.m);SPX.loadLib();}spRender();if(SPX.ML.token&&certs===null)loadCerts();};
  new MutationObserver(start).observe(sec,{attributes:true,attributeFilter:["hidden"]});start();
})();
/* ---------- ONLINE PAYMENT GATEWAY (Razorpay) — keys Google Sheet में, website में नहीं ---------- */
if(HB_API){hbCall("config",{}).then(r=>{HB.gw=r&&r.gateway||"";}).catch(()=>{});}
function loadRzp(){return new Promise((ok,no)=>{if(window.Razorpay)return ok();const sc=document.createElement("script");sc.src="https://checkout.razorpay.com/v1/checkout.js";sc.onload=ok;sc.onerror=()=>no(new Error("load"));document.head.appendChild(sc);});}
$("#payOnline").addEventListener("click",async()=>{const nm=$("#payName").value.trim(),mob=$("#payMob").value.replace(/\D/g,""),pid=($("#payRefId").value||"").trim().toUpperCase();
  if(!(PAY.amt>0))return toast("पहले रकम डालें");if(nm.length<2){toast("नीचे अपना नाम लिखें");$("#payName").focus();return;}if(mob.length!==10){toast("नीचे 10 अंकों का mobile नंबर लिखें");$("#payMob").focus();return;}
  if(($("#payEmail").value||"").trim()&&!payEmailV()){toast("Email सही लिखें — या खाली छोड़ दें");$("#payEmail").focus();return;}
  const b=$("#payOnline");b.disabled=true;b.textContent="Payment खुल रहा है…";
  try{const r=await hbCall("rzpOrder",{email:payEmailV(),ref:PAY.ref,amount:PAY.amt,item:PAY.item,name:nm,mobile:mob,partner:pid,lines:PAY.lines,plan:PAY.plan,coupon:PAY.coupon||"",addr:($("#payAddr").value||"").trim()});
    if(!r||!r.ok){toast((r&&r.err)||"Online payment अभी नहीं खुला — UPI QR से pay करें");return;}
    PAY.ref=r.orderId;PAY.enroll=r.enrollId||"";$("#payRef").textContent=PAY.ref;payWA();await loadRzp();
    const rz=new Razorpay({key:r.key,order_id:r.rzpOrder,amount:r.amount,currency:"INR",name:"HITARTHI",description:PAY.item.slice(0,250),prefill:Object.assign({name:nm,contact:mob},payEmailV()?{email:payEmailV()}:{}),notes:{partner:pid||"-"},theme:{color:"#0057D9"},
      handler:async res=>{try{const v=await hbCall("rzpVerify",{rzpOrder:res.razorpay_order_id,paymentId:res.razorpay_payment_id,signature:res.razorpay_signature});
        const o=$("#payOk");o.hidden=false;o.className="paym-ok";o.textContent=v&&v.ok?v.msg+" Order ID: "+PAY.ref+(PAY.enroll?" • आपका Enroll ID: "+PAY.enroll+" (संभालकर रखें — अगली किश्त/महीना Fees page पर \"मेरी किश्त\" से भरें)":"")+(pid?" • Partner "+pid+" और उनकी team का commission अपने-आप जुड़ गया।":""):(v&&v.err)||"Payment मिला, पुष्टि बाकी — 30 मिनट में अपने-आप पक्का हो जाएगा।";
        if(v&&v.ok){$("#payOnline").hidden=true;$("#paySubmit").hidden=true;PAY.done=true;cartDone();window.demoPaid&&demoPaid();window.mlAfterPay&&!PAY.demoBook&&mlAfterPay(PAY.ref,mob);track("purchase",{item:PAY.item,value:PAY.amt,transaction_id:PAY.ref});}}
        catch(e){const o=$("#payOk");o.hidden=false;o.className="paym-ok";o.textContent="Payment हो गया — पुष्टि 30 मिनट में अपने-आप हो जाएगी। Order ID: "+PAY.ref;}}});
    rz.on&&rz.on("payment.failed",()=>toast("Payment नहीं हुआ — दोबारा कोशिश करें या UPI QR से pay करें"));rz.open();}
  catch(e){toast("Online payment नहीं खुल पाया — UPI QR से pay करें");}
  finally{b.disabled=false;b.textContent="💳 Online Pay करें — UPI / Card / NetBanking (अपने-आप पक्का)";}});
/* Payment के बाद order सीधे Google Sheet में */
$("#paySubmit").addEventListener("click",async()=>{const nm=$("#payName").value.trim(),mob=$("#payMob").value.replace(/\D/g,""),utr=$("#payUTR").value.replace(/\s+/g,"").toUpperCase(),pid=($("#payRefId").value||"").trim().toUpperCase();
  if(!(PAY.amt>0))return toast("पहले रकम डालें");if(nm.length<2)return toast("अपना नाम लिखें");if(mob.length!==10)return toast("10 अंकों का mobile नंबर लिखें");
  if(!/^[A-Z0-9]{8,30}$/.test(utr))return toast("UTR / Transaction ID लिखें — UPI app की payment detail में मिलेगा");
  const b=$("#paySubmit");b.disabled=true;b.textContent="दर्ज हो रहा है…";
  try{const r=await hbCall("order",{email:payEmailV(),ref:PAY.ref,amount:PAY.amt,item:PAY.item,name:nm,mobile:mob,utr,partner:pid,lines:PAY.lines,plan:PAY.plan,coupon:PAY.coupon||"",addr:($("#payAddr").value||"").trim()});
    if(r&&r.ok){PAY.ref=r.orderId||PAY.ref;PAY.done=true;cartDone();window.demoPaid&&demoPaid();window.mlAfterPay&&!PAY.demoBook&&mlAfterPay(PAY.ref,mob);$("#payRef").textContent=PAY.ref;payWA();const o=$("#payOk");o.hidden=false;o.className="paym-ok";o.textContent="✅ "+(r.msg||"Order दर्ज हो गया")+" Order ID: "+PAY.ref+(r.enrollId?" • आपका Enroll ID: "+r.enrollId+" (संभालकर रखें — अगली किश्त Fees page पर \"मेरी किश्त\" से)":"");b.hidden=true;track("order_submitted",{item:PAY.item,value:PAY.amt});}
    else{toast((r&&r.err)||"Order दर्ज नहीं हुआ — WhatsApp से भेज दें");b.disabled=false;b.textContent="✅ Order दर्ज करें";}}
  catch(err){toast("Server से जुड़ नहीं पाए — नीचे WhatsApp बटन से भेज दें");b.disabled=false;b.textContent="✅ Order दर्ज करें";}});
/* ---------- PARTNER PORTAL (DEMO) — rates यहीं बदलें ---------- */
(function(){
  /* Level 1 = जिसने खुद बेचा (Direct). कुल = 54% */
  const LV=[22,6.5,3.5,3,2.5,2,1.5,1.2,1,0.6,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3]; /* = 48% */
  const RF=6; /* Reward Fund (Medal, Cash, Bike, Car) — कुल 48+6 = 54% */
  /* [rank, खुद की बिक्री (BV)/महीना, team बिक्री (BV)/महीना, कितने levels तक, रंग] */
  const RK=[["Partner",4500,0,3,"#0369A1","#0EA5E9"],["Silver",10000,50000,6,"#475569","#94A3B8"],["Gold",15000,200000,10,"#B87900","#F5B301"],["Diamond",25000,1000000,16,"#6D28D9","#A78BFA"],["Crown",25000,5000000,24,"#0B1A4A","#E11D48"]];
  const PR=[["Mastery Book Membership",10500],["Growth Book Membership",5000],["Printed Book",999],["AI Workshop",99]];
  const inr=n=>"₹"+(Math.round(n*100)/100).toLocaleString("en-IN",{maximumFractionDigits:2});
  const sum=LV.reduce((a,b)=>a+b,0);
  const opts=PR.map((p,k)=>`<option value="${k}">${esc(p[0])} — ${inr(p[1])}</option>`).join("");
  $("#ptProd").innerHTML=opts;$("#ptSimProd").innerHTML=opts;
  function plan(){const bv=PR[+$("#ptProd").value][1];$("#ptBV").textContent=inr(bv);$("#ptTot").textContent=inr(bv*sum/100);$("#ptRF").textContent=inr(bv*RF/100);$("#ptAll").textContent=inr(bv*(sum+RF)/100);
    $("#ptLevels").innerHTML=LV.map((r,k)=>`<div class="pt-lv${k===0?" l1":""}" style="--w:${Math.max(6,r/25*100)}%"><small>${k===0?"LEVEL 1 • DIRECT (खुद की बिक्री)":"LEVEL "+(k+1)}</small><b>${r}%</b><span>${inr(bv*r/100)}</span></div>`).join("");}
  $("#ptProd").addEventListener("change",plan);plan();
  const CUM=k=>Math.round(LV.slice(0,k).reduce((a,b)=>a+b,0)*100)/100;
  const PROMO=[10000,20000,35000,50000,75000,100000,150000,200000,300000,400000,500000,650000,800000,1000000,1250000,1500000,2000000,2500000,3000000,4000000,5000000,7500000,10000000];
  const kfmt=n=>n>=10000000?(n/10000000)+" Cr":n>=100000?(n/100000)+" लाख":(n/1000)+"K";
  $("#ptRanks").innerHTML=LV.map((x,k)=>`<div style="--i:${k}"><small>LEVEL ${k+1}</small><b>${CUM(k+1)}%</b><em>${k?"₹"+kfmt(PROMO[k-1])+"/माह":"शुरुआत"}</em></div>`).join("");
  /* Placement calculator */
  const opt=(lo,hi,sel)=>{let o="";for(let k=lo;k<=hi;k++)o+=`<option value="${k}"${k===sel?" selected":""}>Level ${k} — अपनी बिक्री पर ${CUM(k)}%</option>`;return o;};
  const C={up:15,s:10,l:4};
  function fillSel(){C.up=Math.min(24,Math.max(C.up,C.s+1));C.l=Math.min(C.l,C.s-1);
    $("#ptUp").innerHTML=opt(Math.min(24,C.s+1),24,C.up)+(C.s>=24?`<option value="0" selected>कोई Senior नहीं</option>`:"");
    $("#ptS").innerHTML=opt(2,24,C.s);$("#ptL").innerHTML=opt(1,C.s-1,C.l);}
  function calc(){const bv=PR[+$("#ptSimProd").value][1];const up=C.s>=24?0:C.up;
    const a=bv*CUM(C.l)/100,b=bv*(CUM(C.s)-CUM(C.l))/100,c=up?bv*(CUM(up)-CUM(C.s))/100:0,co=bv*48/100-a-b-c;
    const row=(ic,t,sm,am,cls)=>`<div class="pt-sp ${cls||""}"><i>${ic}</i><span><b>${t}</b><small>${sm}</small></span><span class="am">${inr(am)}</span></div>`;
    const W2=x=>Math.max(0,x/(bv*.48)*100).toFixed(2)+"%";
    $("#ptFlow").innerHTML=`<div class="pt-fl-h"><span>नए Partner (Level ${C.l}) ने बेचा: <b>${esc(PR[+$("#ptSimProd").value][0])}</b> • BV ${inr(bv)}</span><span>कुल 48% = <b>${inr(bv*.48)}</b></span></div>
      <div class="pt-bar2"><span style="width:${W2(a)};background:#0EA5E9"></span><span style="width:${W2(b)};background:#16A34A"></span><span style="width:${W2(c)};background:#F59E0B"></span><span style="width:${W2(co)};background:#94A3B8"></span></div>
      <div class="pt-split">${row("🧑","नया Partner — Level "+C.l,"अपनी बिक्री पर Level 1–"+C.l+" का पूरा % ("+CUM(C.l)+"%) • Direct",a)}
      ${row("⭐","आप (जोड़ने वाले) — Level "+C.s,C.s>C.l?"बीच का फ़र्क़: Level "+(C.l+1)+"–"+C.s+" ("+Math.round((CUM(C.s)-CUM(C.l))*100)/100+"%) • Team commission":"—",b,"me")}
      ${up?row("👔","आपके Senior — Level "+up,"फ़र्क़: Level "+(C.s+1)+"–"+up+" ("+Math.round((CUM(up)-CUM(C.s))*100)/100+"%)",c):""}
      ${row("🏢","Company को",(up||C.s)<24?"Level "+((up||C.s)+1)+"–24 (ऊपर कोई ऊँचे Level का Partner नहीं)":"कुछ नहीं बचा",Math.max(0,co),"co")}</div>
      <p class="small muted" style="margin-top:8px">✅ अपनी बिक्री का commission हमेशा मिलता है — ID Green हो या न हो। BV = बिक्री − GST − 2% (payment charge)। पैसा bank में आने के लिए KYC (PAN + Bank) ज़रूरी है, कम से कम ₹100 कभी भी निकाल सकते हैं। नीचे वाला बराबर Level पर पहुँच जाए तो senior को 1% बराबरी Bonus।</p>`;}
  fillSel();calc();
  $("#ptS").addEventListener("change",e=>{C.s=+e.target.value;fillSel();calc();});
  $("#ptL").addEventListener("change",e=>{C.l=+e.target.value;calc();});
  $("#ptUp").addEventListener("change",e=>{C.up=+e.target.value;calc();});
  $("#ptSimProd").addEventListener("change",calc);
  $("#ptPromo").onclick=()=>{if(C.s>=24){toast("आप सबसे ऊँचे Level (24) पर हैं");return;}C.s++;C.l=Math.min(C.l+1,C.s-1);fillSel();calc();toast("Promotion: आप Level "+C.s+", नया Partner Level "+C.l);};

  /* demo dashboard (आप = Level 6) */
  const MYL=6;
  const W={pend:1840,avail:3260,wd:5000,direct:6400,team:3700,lv:Array(24).fill(0),tx:[]};
  W.lv[0]=4100;W.lv[1]=1200;W.lv[2]=650;W.lv[3]=450;W.lv[4]=2100;W.lv[5]=1600;
  W.tx.push(["💸","Withdrawal — HDFC ••••4521","2 दिन पहले","-",5000],["🛒","Direct sale — Growth Membership","5 दिन पहले","+",1795]);
  $("#ptAv").innerHTML=avatar(AV.coun);
  const link=location.href.split("#")[0].split("?")[0]+"?ref=HT1007";
  $("#ptLink").textContent=link;$("#ptShare").href="https://wa.me/?text="+encodeURIComponent("HITARTHI के courses और books देखें — मेरी Partner ID HT1007 से: "+link);
  $("#ptCopy").onclick=()=>{try{navigator.clipboard.writeText(link).then(()=>toast("Link copy हो गया"),()=>toast(link));}catch(e){toast(link);}};
  function dash(){
    $("#ptRank").textContent=`Level ${MYL} • अपनी बिक्री पर ${CUM(MYL)}% • नए Partner को Level 1–${MYL-1} पर जोड़ सकते हैं`;
    const tot=W.direct+W.team;
    $("#ptCards").innerHTML=[["कुल कमाई",tot,"b"],["Direct income",W.direct,""],["Team income",W.team,""],["Pending (15 दिन)",W.pend,"o"],["Available",W.avail,"g"],["Withdrawn",W.wd,""]].map(c=>`<div class="pt-c ${c[2]}"><small>${c[0]}</small><b class="num">${inr(c[1])}</b></div>`).join("");
    $("#ptProg").innerHTML=`<div class="small">अगला Level ${MYL+1}: अपनी बिक्री पर <b>${CUM(MYL+1)}%</b> (अभी ${CUM(MYL)}%)</div><div class="pt-bar"><i style="width:${(MYL/24*100).toFixed(1)}%"></i></div><div class="small muted">Level ${MYL} / 24 • Promotion company के नियम से हर महीने</div>`;
    $("#ptLvTbl").innerHTML=LV.map((x,k)=>`<div class="${k>=MYL?"lock":""}"><span>Level ${k+1} (${x}%)${k>=MYL?" 🔒":""}</span><b class="num">${inr(W.lv[k])}</b></div>`).join("");
    $("#ptTeam").innerHTML=[["विकास",4],["काजल",3],["अमित",1],["नेहा",1]].map(([n,l])=>`<div class="pt-team-row"><span>${n} (नमूना)</span><b>Level ${l} • आपको L${l+1}–${MYL} का फ़र्क़</b></div>`).join("")+`<p class="small muted" style="margin:8px 0 0">Direct (आपके जोड़े हुए): 4 • कुल team: 11</p>`;
    $("#ptTx").innerHTML=W.tx.slice(0,12).map(t=>`<div><i>${t[0]}</i><span>${esc(t[1])}<small>${esc(t[2])}</small></span><b class="${t[3]==="+"?"pos":"neg"} num">${t[3]}${inr(t[4])}</b></div>`).join("");
    wcalc();}
  function wcalc(){const a=+$("#ptWAmt").value||0;$("#ptWCalc").innerHTML=a?`TDS (2%): ${inr(a*0.02)} • आपके bank में: <b>${inr(a*0.98)}</b>`:`Available: <b>${inr(W.avail)}</b>`;}
  $("#ptWAmt").addEventListener("input",wcalc);
  $("#ptWBtn").onclick=()=>{const a=+$("#ptWAmt").value||0;if(a<500){toast("कम से कम ₹500 withdraw कर सकते हैं");return;}if(a>W.avail){toast("Available रकम से ज़्यादा नहीं");return;}
    W.avail-=a;W.wd+=a;W.tx.unshift(["💸","Withdrawal request — HDFC ••••4521 (Demo)","अभी","-",a]);$("#ptWAmt").value="";dash();toast("Withdrawal request भेज दी गई (Demo)");};
  dash();
})();
/* ---------- BLOG (लेख यहीं जोड़ें/बदलें — हर लेख में hi और en) ---------- */
(function(){
  const POSTS=[{"slug": "hitarthi-kya-hai", "cat": "hitarthi", "icon": "🎓", "c": ["#0B1A4A", "#0057D9"], "date": "2026-10-04", "featured": true, "hi": {"t": "HITARTHI क्या है? — पूरी जानकारी एक जगह", "s": "HITARTHI की सोच, मिशन, 5 स्तंभ, courses, books, memberships, app और Partner program — शुरुआत से आख़िर तक सब कुछ सरल भाषा में।", "b": [["lead", "HITARTHI Education & Skill Development Pvt. Ltd. एक भारतीय education और skill development company है, जिसका एक ही मंत्र है — **From Learning to Earning**। यानी ऐसी पढ़ाई, जो सिर्फ़ किताब तक नहीं, ज़िंदगी और काम तक पहुँचे।"], ["h", "\"हितार्थी\" नाम का मतलब"], ["p", "\"हितार्थी\" यानी **जो दूसरों का हित (भला) चाहे**। यही हमारी पहचान है — हर student, हर परिवार और हर partner का भला। हम कोई भी course या book तभी बनाते हैं, जब वह सच में किसी के काम आए।"], ["h", "हमारा मिशन"], ["p", "भारत के हर गाँव और हर शहर के student तक **सरल हिंदी में practical शिक्षा** पहुँचाना — Computer, AI, Spoken English, Financial Literacy और जीवन के ज़रूरी कौशल। ताकि कोई भी बच्चा सिर्फ़ इसलिए पीछे न रहे कि उसे सही जानकारी या सही भाषा में पढ़ाने वाला नहीं मिला।"], ["h", "HITARTHI के 5 स्तंभ"], ["ul", ["**Education** — सही और practical ज्ञान", "**संस्कार** — अनुशासन, ईमानदारी, सम्मान", "**Health** — स्वस्थ मन, स्वस्थ शरीर", "**Prosperity** — पैसे की समझ और समृद्धि", "**Career** — रोज़गार की तैयारी और आत्मनिर्भरता"]], ["box", "सीखने की सीढ़ी:", "Education → Skill → Technology → AI → Career → Earning → Better Life", ""], ["h", "HITARTHI में क्या-क्या मिलता है?"], ["ul", ["**Courses:** Computer & Office, AI & Technology, Digital & Career, English & Personality, Financial Education, Business Skills, Kids (8–15 वर्ष) और Life Skills — Live class + recording के साथ।", "**Books Store:** HITARTHI की अपनी Hindi-English किताबें — e-book या printed, जैसा आपको पसंद।", "**Book Memberships:** Mastery (₹10,500) और Growth (₹5,000) — एक साथ कई e-books, printed books और सालों का साथ।", "**Free Counselling:** पहले सीखकर देखिए, पसंद आए तभी जुड़िए।", "**AI Workshop:** 3 घंटे में AI के 5 levels — practical तरीके से।", "**मुफ़्त tools:** Money IQ Test, SIP और बचत calculators।", "**HITARTHI App:** classes, recordings और e-books — आपकी जेब में।", "**PPT Library:** समझाने और सीखने के लिए presentations।", "**Partner Program:** शिक्षा को दूसरों तक पहुँचाने वालों के लिए।"]], ["h", "HITARTHI किसके लिए है?"], ["p", "Class 5 से college तक के students, नौकरी की तैयारी करने वाले युवा, working लोग जो नया skill सीखना चाहते हैं, दुकानदार और छोटे व्यवसायी, parents जो बच्चों के लिए सही दिशा चाहते हैं — और हर वह इंसान जो मानता है कि **सीखने की कोई उम्र नहीं होती**।"], ["h", "हम कैसे पढ़ाते हैं?"], ["ol", ["**सरल भाषा:** हिंदी में, रोज़ के उदाहरणों के साथ।", "**Practical:** हर lesson में अभ्यास, हर topic पर assignment।", "**Live + Recording:** class छूट जाए तो recording से दोबारा।", "**Certificate:** project और final test पूरा करने पर।", "**साथ:** WhatsApp पर सवाल-जवाब और मार्गदर्शन।"]], ["h", "एक registered company"], ["p", "HITARTHI भारत सरकार के Ministry of Corporate Affairs में registered Private Limited company है और GST registered है। Company की जानकारी website के About page पर खुले तौर पर दी गई है।"]]}, "en": {"t": "What is HITARTHI? — Everything in one place", "s": "HITARTHI's thinking, mission, 5 pillars, courses, books, memberships, app and Partner program — explained simply from start to finish.", "b": [["lead", "HITARTHI Education & Skill Development Pvt. Ltd. is an Indian education and skill development company with one mantra — **From Learning to Earning**: learning that goes beyond the textbook and reaches real life and work."], ["h", "What the name \"Hitarthi\" means"], ["p", "\"Hitarthi\" means **one who wishes good for others**. That is our identity — the good of every student, every family and every partner. We create a course or book only when it is truly useful to someone."], ["h", "Our mission"], ["p", "To bring **practical education in simple Hindi** to students in every village and city of India — Computer, AI, Spoken English, Financial Literacy and essential life skills — so no child is left behind just because they lacked the right information or a teacher in their language."], ["h", "HITARTHI's 5 pillars"], ["ul", ["**Education** — correct, practical knowledge", "**Sanskar (values)** — discipline, honesty, respect", "**Health** — a healthy mind and body", "**Prosperity** — money sense and well-being", "**Career** — preparing for work and self-reliance"]], ["box", "The learning ladder:", "Education → Skill → Technology → AI → Career → Earning → Better Life", ""], ["h", "What does HITARTHI offer?"], ["ul", ["**Courses:** Computer & Office, AI & Technology, Digital & Career, English & Personality, Financial Education, Business Skills, Kids (8–15) and Life Skills — live classes with recordings.", "**Books Store:** HITARTHI's own Hindi-English books — e-book or printed, as you prefer.", "**Book Memberships:** Mastery (₹10,500) and Growth (₹5,000) — many e-books, printed books and years of support together.", "**Free Counselling:** try a class first, join only if you like it.", "**AI Workshop:** the 5 levels of AI in 3 hours — practically.", "**Free tools:** Money IQ Test, SIP and savings calculators.", "**HITARTHI App:** classes, recordings and e-books — in your pocket.", "**PPT Library:** presentations to learn from and to explain with.", "**Partner Program:** for people who take education to others."]], ["h", "Who is HITARTHI for?"], ["p", "Students from Class 5 to college, young people preparing for jobs, working people who want a new skill, shopkeepers and small business owners, parents looking for the right direction for their children — and anyone who believes **there is no age limit for learning**."], ["h", "How do we teach?"], ["ol", ["**Simple language:** in Hindi, with everyday examples.", "**Practical:** practice in every lesson, an assignment on every topic.", "**Live + recording:** missed a class? Watch the recording.", "**Certificate:** on completing the project and final test.", "**Support:** questions and guidance on WhatsApp."]], ["h", "A registered company"], ["p", "HITARTHI is a Private Limited company registered with the Ministry of Corporate Affairs, Government of India, and is GST registered. Company details are shared openly on the website's About page."]]}}, {"slug": "judne-ke-fayde", "cat": "hitarthi", "icon": "🌟", "c": ["#B45309", "#FF8C00"], "date": "2026-10-04", "hi": {"t": "HITARTHI से जुड़ने के 12 बड़े फ़ायदे", "s": "सरल हिंदी में पढ़ाई से लेकर AI, English, पैसे की समझ और certificate तक — जानिए HITARTHI आपके और आपके परिवार के लिए क्या कर सकता है।", "b": [["lead", "आज हर तरफ़ जानकारी है, पर **सही क्रम, सही भाषा और साथ देने वाला** मिलना मुश्किल है। HITARTHI यही कमी पूरी करता है। ये रहे जुड़ने के 12 फ़ायदे:"], ["ol", ["**अपनी भाषा में पढ़ाई** — मुश्किल बातें सरल हिंदी में, ताकि समझ पक्की हो।", "**Practical skills** — सिर्फ़ theory नहीं, हर lesson में हाथ से करके सीखना।", "**AI से दोस्ती** — notes, poster, video, presentation — AI tools का सही इस्तेमाल।", "**Computer में आत्मविश्वास** — Basic से Advanced Excel, Typing, MS Office तक।", "**English बोलने का हौसला** — झिझक छोड़कर रोज़ की बातचीत से Interview तक।", "**पैसे की समझ** — बचत, budget, SIP और compounding — scam से बचने के तरीके भी।", "**Degree के साथ Skill** — हम degree का विरोध नहीं करते, उसे skill से मज़बूत बनाते हैं।", "**Live + Recording** — class छूट जाए, तो भी पढ़ाई न छूटे।", "**HITARTHI Certificate** — project और test पूरा करने पर, आपकी मेहनत का प्रमाण।", "**किताबों का खज़ाना** — HITARTHI की अपनी Hindi-English books, e-book और printed।", "**कम खर्च में शुरुआत** — Free Counselling, पसंद आए तभी आगे बढ़ें।", "**सालों का साथ** — Book Membership के साथ लगातार नई e-books और मार्गदर्शन।"]], ["box", "सबसे बड़ा फ़ायदा:", "आप अकेले नहीं सीखते। सही क्रम, अभ्यास और सवाल पूछने की जगह — यही चीज़ें इंसान को लगातार आगे बढ़ाती हैं।", "green"], ["h", "परिवार के लिए फ़ायदा"], ["p", "एक membership से परिवार के कई लोग किताबें पढ़ सकते हैं। Kids courses बच्चों को screen का सही इस्तेमाल सिखाते हैं, और Financial Literacy पूरे घर के पैसे के फ़ैसले बेहतर बनाती है।"]]}, "en": {"t": "12 big benefits of joining HITARTHI", "s": "From learning in simple Hindi to AI, English, money sense and certificates — see what HITARTHI can do for you and your family.", "b": [["lead", "Information is everywhere today, but finding **the right order, the right language and someone to support you** is hard. HITARTHI fills exactly that gap. Here are 12 benefits of joining:"], ["ol", ["**Learning in your own language** — difficult ideas in simple Hindi, so understanding becomes solid.", "**Practical skills** — not just theory, hands-on practice in every lesson.", "**Friendship with AI** — notes, posters, videos, presentations — the right use of AI tools.", "**Confidence with computers** — from basics to Advanced Excel, typing and MS Office.", "**Courage to speak English** — from daily conversation to interviews, without hesitation.", "**Money sense** — savings, budgets, SIP and compounding — and ways to avoid scams.", "**Degree + skill** — we don't oppose degrees; we make them stronger with skills.", "**Live + recording** — even if you miss a class, you don't miss the learning.", "**HITARTHI Certificate** — proof of your effort after the project and test.", "**A treasure of books** — HITARTHI's own Hindi-English books, e-book and printed.", "**A free start** — free counselling; continue only if you like it.", "**Years of support** — new e-books and guidance with a Book Membership."]], ["box", "The biggest benefit:", "You don't learn alone. The right order, practice and a place to ask questions — these are what keep a person moving forward.", "green"], ["h", "Benefits for the family"], ["p", "With one membership, several family members can read the books. Kids courses teach children to use screens well, and Financial Literacy improves money decisions for the whole household."]]}}, {"slug": "sikhna-talne-ka-ghata", "cat": "career", "icon": "⏳", "c": ["#7F1D1D", "#E11D48"], "date": "2026-10-04", "hi": {"t": "सीखना टालने की कीमत — न जुड़ने से क्या छूट सकता है?", "s": "HITARTHI से न जुड़ना किसी की असफलता नहीं। लेकिन सीखने को बार-बार टालने से कौन-सी चीज़ें पीछे छूट जाती हैं — ईमानदारी से समझिए।", "b": [["lead", "पहले एक ईमानदार बात: **HITARTHI से न जुड़ना किसी की असफलता नहीं है।** सीखने के कई रास्ते हैं। पर अगर आप किसी भी रास्ते से नया सीखना लगातार टालते रहें, तो उसकी एक कीमत होती है — जो धीरे-धीरे दिखती है।"], ["h", "1. दुनिया तेज़ी से बदल रही है"], ["p", "आज AI, digital payment, online काम — सब कुछ हर साल बदल रहा है। जो आज नहीं सीखता, उसे कल वही चीज़ ज़्यादा मेहनत से सीखनी पड़ती है।"], ["h", "2. \"कल से शुरू करेंगे\" की आदत"], ["p", "सबसे बड़ा नुकसान skill का नहीं, **आदत** का है। हर बार टालने से शुरुआत और मुश्किल लगने लगती है।"], ["h", "3. मौके सामने से निकल जाते हैं"], ["p", "Computer, Excel, English या AI की ज़रूरत अक्सर अचानक पड़ती है — interview में, दुकान के हिसाब में, किसी नए काम में। तैयारी न हो, तो मौका हाथ से निकल सकता है।"], ["h", "4. पैसे की गलत आदतें"], ["p", "बचत और निवेश की समझ न हो, तो छोटी-छोटी गलतियाँ सालों में बड़ा नुकसान बन जाती हैं — और scam का ख़तरा भी बढ़ता है।"], ["h", "5. अकेले सीखने की थकान"], ["p", "YouTube पर सब है, पर बिना क्रम और बिना सवाल पूछे सीखना अक्सर बीच में छूट जाता है।"], ["box", "तुलना कीजिए:", "⏸️ टालना → वही जगह, बढ़ती झिझक, छूटते मौके\n🌱 शुरुआत → रोज़ थोड़ा सीखना, बढ़ता आत्मविश्वास, नए रास्ते", ""], ["p", "इसलिए डर से नहीं, समझदारी से फ़ैसला कीजिए। सबसे छोटा कदम भी काफ़ी है — जैसे एक Free Counselling।"]]}, "en": {"t": "The cost of putting off learning — what can you miss?", "s": "Not joining HITARTHI is nobody's failure. But honestly understand what slips away when learning keeps getting postponed.", "b": [["lead", "First, an honest point: **not joining HITARTHI is nobody's failure.** There are many ways to learn. But if you keep postponing learning anything new, by any route, there is a cost — one that shows up slowly."], ["h", "1. The world is changing fast"], ["p", "AI, digital payments, online work — everything changes every year. Whoever doesn't learn today has to learn the same thing tomorrow with more effort."], ["h", "2. The \"we'll start tomorrow\" habit"], ["p", "The biggest loss is not a skill but a **habit**. Every postponement makes starting feel harder."], ["h", "3. Opportunities pass you by"], ["p", "The need for computers, Excel, English or AI often comes suddenly — in an interview, in shop accounts, in a new job. Without preparation, the opportunity can slip away."], ["h", "4. Wrong money habits"], ["p", "Without understanding savings and investing, small mistakes become big losses over the years — and the risk of scams grows too."], ["h", "5. The fatigue of learning alone"], ["p", "Everything is on YouTube, but learning without order and without asking questions is often left halfway."], ["box", "Compare:", "⏸️ Postponing → same place, growing hesitation, missed chances\n🌱 Starting → a little learning every day, growing confidence, new paths", ""], ["p", "So decide with wisdom, not fear. Even the smallest step is enough — like a Free Counselling."]]}}, {"slug": "hitarthi-ka-sapna", "cat": "hitarthi", "icon": "🚀", "c": ["#1A1050", "#B87900"], "date": "2026-10-04", "hi": {"t": "HITARTHI का सपना: भारत के गाँव से दुनिया के नंबर 1 learning brand तक", "s": "हमारा लक्ष्य बड़ा है — दुनिया का सबसे भरोसेमंद हिंदी learning brand बनना। यह सपना कैसे पूरा होगा, और इसमें आपकी क्या भूमिका है?", "b": [["lead", "हर बड़ी कंपनी एक छोटे सपने से शुरू हुई। HITARTHI का सपना है — **दुनिया का नंबर 1 भरोसेमंद learning brand बनना, जो करोड़ों लोगों को उनकी अपनी भाषा में सिखाए।** यह आज की उपलब्धि नहीं, हमारा लक्ष्य है — और हम हर दिन उसकी ओर एक कदम बढ़ाते हैं।"], ["h", "नंबर 1 का मतलब हमारे लिए"], ["ul", ["सबसे ज़्यादा students नहीं, **सबसे ज़्यादा भरोसा**।", "सबसे ऊँची fees नहीं, **सबसे साफ़ और ईमानदार value**।", "सबसे बड़े दावे नहीं, **सबसे सच्चे नतीजे**।"]], ["h", "हमारा रास्ता — 5 चरण"], ["ol", ["**मज़बूत नींव:** सरल हिंदी में सबसे अच्छे courses और books।", "**हर ज़िले तक:** Team Partners के ज़रिए गाँव-गाँव तक सही जानकारी।", "**Technology:** HITARTHI App, AI-आधारित पढ़ाई, हर student की progress पर नज़र।", "**भारत की हर भाषा:** हिंदी के बाद दूसरी भारतीय भाषाएँ।", "**दुनिया तक:** विदेश में बसे भारतीय परिवारों और हिंदी सीखने वालों तक।"]], ["h", "हम किन बातों पर कभी समझौता नहीं करेंगे"], ["ul", ["झूठे वादे, नौकरी या कमाई की झूठी guarantee — कभी नहीं।", "नकली reviews, नकली student count — कभी नहीं।", "Student का भला पहले, बिक्री बाद में।"]], ["box", "आपकी भूमिका:", "हर student जो सीखकर आगे बढ़ता है, हर parent जो भरोसा करता है, हर partner जो ईमानदारी से शिक्षा फैलाता है — वही HITARTHI को नंबर 1 बनाएगा।", "green"]]}, "en": {"t": "HITARTHI's dream: from India's villages to the world's No. 1 learning brand", "s": "Our goal is big — to become the world's most trusted Hindi learning brand. How will this dream come true, and what is your role in it?", "b": [["lead", "Every big company started with a small dream. HITARTHI's dream is **to become the world's No. 1 trusted learning brand, teaching crores of people in their own language.** This is not today's achievement but our goal — and we take a step towards it every day."], ["h", "What No. 1 means to us"], ["ul", ["Not the most students, but **the most trust**.", "Not the highest fees, but **the clearest, most honest value**.", "Not the biggest claims, but **the truest results**."]], ["h", "Our path — 5 stages"], ["ol", ["**A strong foundation:** the best courses and books in simple Hindi.", "**Every district:** correct information to every village through Team Partners.", "**Technology:** the HITARTHI App, AI-based learning, tracking every student's progress.", "**Every Indian language:** other Indian languages after Hindi.", "**To the world:** Indian families abroad and everyone learning Hindi."]], ["h", "What we will never compromise on"], ["ul", ["False promises or fake job/income guarantees — never.", "Fake reviews or fake student counts — never.", "The student's good first, sales later."]], ["box", "Your role:", "Every student who learns and moves ahead, every parent who trusts us, every partner who spreads education honestly — they are the ones who will make HITARTHI No. 1.", "green"]]}}, {"slug": "partner-banke-shiksha", "cat": "hitarthi", "icon": "🤝", "c": ["#064E3B", "#16A34A"], "date": "2026-10-04", "hi": {"t": "HITARTHI Partner बनकर शिक्षा को घर-घर पहुँचाइए", "s": "मुफ़्त Partner बनिए, लोगों को सही course चुनने में मदद कीजिए और हर बिक्री पर commission पाइए — पूरी ईमानदारी और साफ़ नियमों के साथ।", "b": [["lead", "HITARTHI का सपना हर गाँव और शहर तक पहुँचना है — और इसमें सबसे बड़ी ताक़त हैं हमारे **Team Partners**, जो अपने इलाक़े के students और parents को सही जानकारी देते हैं।"], ["h", "Partner क्या करता है?"], ["ul", ["Students और parents की ज़रूरत समझकर सही course या book बताता है।", "Free Counselling कराने में मदद करता है।", "Join करने के बाद भी student का साथ देता है।"]], ["h", "Partner बनने के नियम — साफ़ और ईमानदार"], ["ul", ["**Joining पूरी तरह मुफ़्त** — कोई fee नहीं।", "Commission सिर्फ़ **असली बिक्री** पर — किसी को जोड़ने पर कोई पैसा नहीं।", "हर Partner का अपना link और dashboard — direct और team बिक्री का पूरा हिसाब।", "हर महीने अच्छे काम करने वालों को सम्मान — Medal से Car तक के rewards।"]], ["box", "हमारा वादा और आपकी ज़िम्मेदारी:", "किसी customer से झूठा वादा नहीं, नौकरी या कमाई की guarantee नहीं, दबाव में बिक्री नहीं। HITARTHI भी Partners से कमाई के झूठे दावे नहीं करता — आपकी कमाई आपकी मेहनत और असली बिक्री पर निर्भर है।", ""], ["p", "Partner Program की जानकारी website के \"Partner\" page पर देखें — पूरा plan Partner login के बाद।"]]}, "en": {"t": "Become a HITARTHI Partner and take education to every home", "s": "Become a Partner for free, help people choose the right course and earn commission on every sale — with full honesty and clear rules.", "b": [["lead", "HITARTHI's dream is to reach every village and city — and our biggest strength in this is our **Team Partners**, who give correct information to students and parents in their area."], ["h", "What does a Partner do?"], ["ul", ["Understands the needs of students and parents and suggests the right course or book.", "Helps arrange the Free Counselling.", "Keeps supporting the student after they join."]], ["h", "Partner rules — clear and honest"], ["ul", ["**Joining is completely free** — no fee.", "Commission only on **real sales** — no money for adding people.", "Every Partner gets their own link and dashboard — full accounts of direct and team sales.", "Good performers are honoured every month — rewards from a medal to a car."]], ["box", "Our promise and your responsibility:", "No false promises to any customer, no job or income guarantees, no pressure selling. HITARTHI also makes no false income claims to Partners — your earnings depend on your effort and real sales.", ""], ["p", "See the Partner Program on the website's \"Partner\" page — the full plan opens after Partner login."]]}}, {"slug": "degree-plus-skill", "cat": "career", "icon": "🎯", "c": ["#0F766E", "#14B8A6"], "date": "2026-10-04", "hi": {"t": "Degree + Skill: आज के समय की सबसे बड़ी ज़रूरत", "s": "हम degree का विरोध नहीं करते — degree को practical skill के साथ मज़बूत बनाते हैं।", "b": [["p", "बहुत से students के पास degree है, लेकिन जब काम की बात आती है — report बनाना, presentation देना, email लिखना, data संभालना — तब वे खुद को अधूरा महसूस करते हैं। यही फ़ासला HITARTHI भरता है।"], ["h", "Degree क्या देती है, Skill क्या जोड़ती है"], ["ul", ["Degree — विषय की theory और बुनियादी समझ", "Skill — उस समझ को असली काम में लगाने की क्षमता", "दोनों साथ — मज़बूत profile और काम पर भरोसा"]], ["h", "आज हर क्षेत्र में काम आने वाली 6 skills"], ["ul", ["Computer और MS Office (Excel, Word, PowerPoint)", "Typing — तेज़ और सही", "AI Tools का सही इस्तेमाल", "Spoken English और communication", "Digital skills — social media, design, online काम", "पैसे की समझ — budget, बचत, समझदार फ़ैसले"]], ["q", "\"अपने सपनों के अनुसार skills चुनें। सीखते रहें, अभ्यास करते रहें और अपनी क्षमताओं को निखारते रहें।\""], ["box", "छोटा सुझाव", "अपनी पढ़ाई के साथ हर semester एक नई practical skill जोड़िए। तीन साल में आपके पास degree के साथ 6 मज़बूत skills होंगी।"]]}, "en": {"t": "Degree + Skill: the biggest need of our time", "s": "We don't oppose degrees — we make them stronger with practical skills.", "b": [["p", "Many students have a degree, but when it comes to work — making a report, giving a presentation, writing an email, handling data — they feel incomplete. HITARTHI fills exactly this gap."], ["h", "What a degree gives, what skills add"], ["ul", ["Degree — the theory and basic understanding of a subject", "Skill — the ability to put that understanding to real work", "Both together — a strong profile and confidence at work"]], ["h", "6 skills useful in every field today"], ["ul", ["Computer and MS Office (Excel, Word, PowerPoint)", "Typing — fast and accurate", "Using AI tools the right way", "Spoken English and communication", "Digital skills — social media, design, online work", "Money sense — budgeting, saving, sensible decisions"]], ["q", "\"Choose skills that match your dreams. Keep learning, keep practising and keep sharpening your abilities.\""], ["box", "A small tip", "Add one new practical skill every semester alongside your studies. In three years you'll have 6 strong skills along with your degree."]]}}, {"slug": "ai-se-darein-nahi", "cat": "ai", "icon": "🤖", "c": ["#1E1B4B", "#4338CA"], "date": "2026-10-04", "hi": {"t": "AI के ज़माने में कौन-सी Skills सबसे ज़रूरी हैं?", "s": "AI से डरने की नहीं, उसे साथी बनाने की ज़रूरत है। जानिए आने वाले समय की 7 ज़रूरी skills और उन्हें सीखने की शुरुआत कैसे करें।", "b": [["lead", "AI काम करने का तरीका बदल रहा है। जो इसे समझकर इस्तेमाल करना सीखेगा, उसके लिए नए रास्ते खुलेंगे। **AI आपकी जगह नहीं लेगा — AI का इस्तेमाल करने वाला इंसान उससे आगे निकल सकता है जो नहीं करता।**"], ["h", "आने वाले समय की 7 ज़रूरी skills"], ["ol", ["**AI tools चलाना** — सही सवाल (prompt) पूछना और जवाब को जाँचना।", "**Computer और Excel** — data संभालना हर काम में ज़रूरी।", "**Communication** — हिंदी और English, दोनों में साफ़ बोलना-लिखना।", "**Digital marketing और design** — अपना या किसी का काम online दिखाना।", "**पैसे की समझ** — कमाई सँभालना और बढ़ाना।", "**सोचने और समस्या सुलझाने की क्षमता** — जो AI पूरी तरह नहीं कर सकता।", "**लगातार सीखने की आदत** — सबसे ज़रूरी skill।"]], ["h", "शुरुआत कैसे करें?"], ["ul", ["रोज़ 30 मिनट — एक नया tool या एक नया lesson।", "जो सीखें, उसे उसी दिन किसी असली काम में लगाएँ।", "HITARTHI का 3 घंटे का AI Workshop — एक दिन में AI के 5 levels।"]], ["box", "याद रखिए:", "AI से नकल नहीं, समझ बढ़ाइए। AI का जवाब हमेशा जाँचिए — गलती भी हो सकती है।", "green"]]}, "en": {"t": "Which skills matter most in the age of AI?", "s": "No need to fear AI — make it your partner. Learn the 7 essential skills for the future and how to start learning them.", "b": [["lead", "AI is changing how work is done. Those who learn to understand and use it will find new paths. **AI won't take your place — but a person who uses AI can move ahead of one who doesn't.**"], ["h", "7 essential skills for the future"], ["ol", ["**Using AI tools** — asking the right question (prompt) and checking the answer.", "**Computer and Excel** — handling data is needed in every job.", "**Communication** — speaking and writing clearly in Hindi and English.", "**Digital marketing and design** — showing your own or someone's work online.", "**Money sense** — managing and growing income.", "**Thinking and problem-solving** — what AI cannot fully do.", "**The habit of continuous learning** — the most important skill."]], ["h", "How to start?"], ["ul", ["30 minutes a day — one new tool or one new lesson.", "Use what you learn in a real task the same day.", "HITARTHI's 3-hour AI Workshop — the 5 levels of AI in one day."]], ["box", "Remember:", "Use AI to grow understanding, not to copy. Always check AI's answer — it can be wrong too.", "green"]]}}, {"slug": "paise-ki-samajh", "cat": "money", "icon": "💰", "c": ["#14532D", "#16A34A"], "date": "2026-10-04", "hi": {"t": "पैसे की समझ: हर घर के लिए 7 सुनहरे नियम", "s": "कमाई कितनी भी हो, समझदारी से सँभाली जाए तो बढ़ती है। budget, बचत, compounding और scam से बचाव — सरल भाषा में।", "b": [["lead", "पैसे की समझ स्कूल में कम सिखाई जाती है, पर ज़िंदगी में सबसे ज़्यादा काम आती है। ये 7 नियम हर घर के लिए हैं:"], ["ol", ["**हर ख़र्च से पहले पूछिए:** यह ज़रूरत है या सिर्फ़ चाहत?", "**पहले बचत, फिर ख़र्च:** कमाई आते ही एक हिस्सा अलग रखिए।", "**हिसाब लिखिए:** जो मापा जाता है, वही सुधरता है।", "**Emergency fund:** कुछ महीनों का ख़र्च अलग रखिए।", "**Compounding को समय दीजिए:** जल्दी शुरू की गई छोटी बचत भी लंबे समय में बड़ी बन सकती है।", "**कर्ज़ से सावधान:** महँगा कर्ज़ बचत को खा जाता है।", "**Scam से बचिए:** \"पैसा दोगुना\" जैसे वादों, OTP या PIN माँगने वालों से दूर रहिए।"]], ["box", "ध्यान दें:", "निवेश में जोखिम होता है और return पक्का नहीं होता। HITARTHI वित्तीय शिक्षा देता है, निवेश की सलाह नहीं — बड़े फ़ैसलों से पहले किसी registered सलाहकार से बात करें।", ""], ["p", "अपना Money IQ जाँचने और SIP calculator इस्तेमाल करने के लिए website का \"पैसे की समझ\" page देखें।"]]}, "en": {"t": "Money sense: 7 golden rules for every home", "s": "However much you earn, it grows when handled wisely. Budget, savings, compounding and scam protection — in simple words.", "b": [["lead", "Money sense is taught little at school but used most in life. These 7 rules are for every home:"], ["ol", ["**Before every expense, ask:** is this a need or just a want?", "**Save first, spend later:** set a part aside as soon as income arrives.", "**Write it down:** what gets measured gets improved.", "**Emergency fund:** keep a few months of expenses aside.", "**Give compounding time:** small savings started early can grow big over the long run.", "**Beware of debt:** expensive loans eat up savings.", "**Avoid scams:** stay away from \"double your money\" promises and anyone asking for OTP or PIN."]], ["box", "Please note:", "Investments carry risk and returns are not guaranteed. HITARTHI provides financial education, not investment advice — talk to a registered adviser before big decisions.", ""], ["p", "To check your Money IQ and use the SIP calculator, see the website's \"Money Sense\" page."]]}}, {"slug": "parents-guide", "cat": "parents", "icon": "👨‍👩‍👧", "c": ["#831843", "#DB2777"], "date": "2026-10-04", "hi": {"t": "Parents के लिए गाइड: बच्चे को सिर्फ़ marks नहीं, भविष्य की तैयारी दीजिए", "s": "बच्चे के लिए सही course कैसे चुनें, screen time को सीखने में कैसे बदलें और HITARTHI इसमें कैसे मदद करता है — हर parent के लिए ज़रूरी बातें।", "b": [["lead", "हर parent चाहता है कि उसका बच्चा आगे बढ़े। पर आज सिर्फ़ अच्छे marks काफ़ी नहीं — **computer, सोचने की क्षमता, बोलने का आत्मविश्वास और पैसे की समझ** भी उतनी ही ज़रूरी हैं।"], ["h", "5 skills जो हर बच्चे को चाहिए"], ["ol", ["**Computer और Typing** — आगे की हर पढ़ाई और काम की नींव।", "**AI का सही इस्तेमाल** — नकल के लिए नहीं, समझने के लिए।", "**English में बात करना** — interview और आत्मविश्वास दोनों के लिए।", "**पैसे की समझ** — बचत और ज़रूरत-बनाम-चाहत का फ़र्क।", "**Life skills** — समय, लक्ष्य, अनुशासन और अच्छे संस्कार।"]], ["h", "Screen time को सीखने का समय बनाइए"], ["p", "बच्चे mobile से दूर नहीं रहेंगे — इसलिए उसी screen पर सही चीज़ सिखाइए। HITARTHI के Kids courses (8–15 वर्ष) खेल-खेल में computer, typing और पैसे की समझ सिखाते हैं।"], ["h", "सही course कैसे चुनें?"], ["ul", ["बच्चे की उम्र और रुचि देखिए, दूसरों की होड़ नहीं।", "पहले Free Counselling कराइए — बच्चे को पसंद आए तभी आगे।", "हर महीने progress पूछिए — HITARTHI parents को WhatsApp पर progress बताता है।"]], ["box", "Parents के लिए सलाह:", "बच्चे के साथ बैठकर एक lesson ख़ुद भी देखिए। जब घर के बड़े सीखते हैं, तो बच्चे और ज़्यादा उत्साह से सीखते हैं।", ""]]}, "en": {"t": "A guide for parents: give your child not just marks, but readiness for the future", "s": "How to choose the right course, turn screen time into learning time, and how HITARTHI helps — essential points for every parent.", "b": [["lead", "Every parent wants their child to move ahead. But today good marks alone are not enough — **computers, thinking ability, confidence in speaking and money sense** matter just as much."], ["h", "5 skills every child needs"], ["ol", ["**Computer and typing** — the foundation of all further study and work.", "**Using AI the right way** — for understanding, not copying.", "**Speaking English** — for interviews and confidence.", "**Money sense** — saving and the difference between need and want.", "**Life skills** — time, goals, discipline and good values."]], ["h", "Turn screen time into learning time"], ["p", "Children won't stay away from mobiles — so teach the right things on that same screen. HITARTHI's Kids courses (8–15 years) teach computers, typing and money sense through play."], ["h", "How to choose the right course?"], ["ul", ["Look at your child's age and interest, not at what others are doing.", "Start with a Free Counselling — continue only if your child likes it.", "Ask about progress every month — HITARTHI shares progress with parents on WhatsApp."]], ["box", "A tip for parents:", "Sit with your child and watch one lesson yourself. When elders learn at home, children learn with even more enthusiasm.", ""]]}}, {"slug": "computer-course-kaun-sa-karein", "cat": "career", "icon": "💻", "c": ["#0B1A4A", "#0057D9"], "date": "2026-10-26", "hi": {"t": "10वीं / 12वीं के बाद कौन-सा Computer Course करें? पूरी गाइड", "s": "Basic Computer, MS Office, Excel, Typing या AI Tools — आपके लक्ष्य के हिसाब से सही course कैसे चुनें, कितना समय और कितनी fee।", "b": [["lead", "10वीं या 12वीं के बाद सबसे आम सवाल है — \"कौन-सा computer course करूँ जिससे काम मिले?\" जवाब आपके लक्ष्य पर निर्भर है। इस गाइड में हम लक्ष्य के हिसाब से रास्ता बताते हैं।"], ["h", "पहले अपना लक्ष्य तय करें"], ["ul", ["**Office की नौकरी** (data entry, back office, receptionist) — Basic Computer + MS Office + Typing", "**Accounts / दुकान / business** — Excel + Advanced Excel + Tally की समझ", "**Online काम / freelancing** — Canva, Video Editing, Digital Marketing", "**आगे की पढ़ाई (B.Com, BCA, B.Sc.)** — Computer Fundamentals + Excel + AI Tools"]], ["h", "शुरुआत करने वालों के लिए सही क्रम"], ["ol", ["**Basic Computer (1–2 महीने):** Windows, file-folder, internet, email", "**Typing (साथ-साथ):** रोज़ 20 मिनट — 3 महीने में 35–40 शब्द/मिनट तक पहुँचना आम है", "**MS Office (2–3 महीने):** Word में letter-resume, Excel में हिसाब, PowerPoint में presentation", "**Advanced Excel या AI Tools:** यहीं से अच्छी नौकरी और तरक्की का फ़र्क़ बनता है"]], ["box", "सीधी सलाह:", "Certificate से ज़्यादा ज़रूरी है practice। Course वही चुनें जिसमें हर class के बाद practice assignment और आख़िर में test हो।", ""], ["h", "Online course सही है या offline?"], ["p", "Online live class का फ़ायदा है — घर बैठे, recording के साथ, और गाँव-छोटे शहर में भी अच्छे trainer। ध्यान रखें कि आपके पास practice के लिए computer या laptop हो; mobile से typing और Excel की पूरी practice मुश्किल होती है।"], ["h", "Fee कितनी होनी चाहिए?"], ["p", "HITARTHI में Basic Computer ₹1,499, MS Office Complete ₹2,999 और Advanced Excel ₹3,499 है — और ₹300/महीना के plan से भी शुरुआत कर सकते हैं। किसी भी institute में fee देने से पहले syllabus, demo class और certificate का नमूना ज़रूर देखें।"], ["p", "सही course चुनने में दिक़्क़त हो तो website पर **Free Counselling** बटन दबाइए — हमारी team आपके लक्ष्य के हिसाब से रास्ता बताएगी।"]]}, "en": {"t": "10वीं / 12वीं के बाद कौन-सा Computer Course करें? पूरी गाइड", "s": "Basic Computer, MS Office, Excel, Typing या AI Tools — आपके लक्ष्य के हिसाब से सही course कैसे चुनें, कितना समय और कितनी fee।", "b": [["lead", "10वीं या 12वीं के बाद सबसे आम सवाल है — \"कौन-सा computer course करूँ जिससे काम मिले?\" जवाब आपके लक्ष्य पर निर्भर है। इस गाइड में हम लक्ष्य के हिसाब से रास्ता बताते हैं।"], ["h", "पहले अपना लक्ष्य तय करें"], ["ul", ["**Office की नौकरी** (data entry, back office, receptionist) — Basic Computer + MS Office + Typing", "**Accounts / दुकान / business** — Excel + Advanced Excel + Tally की समझ", "**Online काम / freelancing** — Canva, Video Editing, Digital Marketing", "**आगे की पढ़ाई (B.Com, BCA, B.Sc.)** — Computer Fundamentals + Excel + AI Tools"]], ["h", "शुरुआत करने वालों के लिए सही क्रम"], ["ol", ["**Basic Computer (1–2 महीने):** Windows, file-folder, internet, email", "**Typing (साथ-साथ):** रोज़ 20 मिनट — 3 महीने में 35–40 शब्द/मिनट तक पहुँचना आम है", "**MS Office (2–3 महीने):** Word में letter-resume, Excel में हिसाब, PowerPoint में presentation", "**Advanced Excel या AI Tools:** यहीं से अच्छी नौकरी और तरक्की का फ़र्क़ बनता है"]], ["box", "सीधी सलाह:", "Certificate से ज़्यादा ज़रूरी है practice। Course वही चुनें जिसमें हर class के बाद practice assignment और आख़िर में test हो।", ""], ["h", "Online course सही है या offline?"], ["p", "Online live class का फ़ायदा है — घर बैठे, recording के साथ, और गाँव-छोटे शहर में भी अच्छे trainer। ध्यान रखें कि आपके पास practice के लिए computer या laptop हो; mobile से typing और Excel की पूरी practice मुश्किल होती है।"], ["h", "Fee कितनी होनी चाहिए?"], ["p", "HITARTHI में Basic Computer ₹1,499, MS Office Complete ₹2,999 और Advanced Excel ₹3,499 है — और ₹300/महीना के plan से भी शुरुआत कर सकते हैं। किसी भी institute में fee देने से पहले syllabus, demo class और certificate का नमूना ज़रूर देखें।"], ["p", "सही course चुनने में दिक़्क़त हो तो website पर **Free Counselling** बटन दबाइए — हमारी team आपके लक्ष्य के हिसाब से रास्ता बताएगी।"]]}}, {"slug": "excel-kitne-din-mein-seekhein", "cat": "career", "icon": "📊", "c": ["#065F46", "#16A34A"], "date": "2026-10-29", "hi": {"t": "Excel सीखने में कितना समय लगता है? 30 दिन का आसान Plan", "s": "Formulas से VLOOKUP और Pivot Table तक — रोज़ 1 घंटा देकर 30 दिन में office-ready Excel कैसे सीखें।", "b": [["lead", "Excel आज लगभग हर office की ज़रूरत है — accounts, sales, school, hospital, दुकान। अच्छी ख़बर यह है कि काम चलाने लायक Excel **30 दिन** में, रोज़ एक घंटा देकर सीखा जा सकता है।"], ["h", "हफ़्ता 1 — नींव"], ["ul", ["Cell, row, column, sheet की समझ", "Data टाइप करना, format करना, border और रंग", "SUM, AVERAGE, MIN, MAX", "Print setup — एक page पर पूरी sheet"]], ["h", "हफ़्ता 2 — रोज़ के formulas"], ["ul", ["IF से \"पास/फ़ेल\", \"हाँ/ना\" निकालना", "COUNTIF, SUMIF — किसी शर्त पर गिनती और जोड़", "Text formulas: LEFT, RIGHT, CONCAT, TRIM", "Sort और Filter"]], ["h", "हफ़्ता 3 — Office वाला Excel"], ["ul", ["VLOOKUP / XLOOKUP — दो list को जोड़ना", "Pivot Table — 5 मिनट में monthly report", "Charts — bar, line, pie", "Data Validation — dropdown list"]], ["h", "हफ़्ता 4 — असली project"], ["p", "अपनी दुकान, घर या किसी दोस्त के business का monthly बिक्री-ख़र्च sheet बनाइए: रोज़ की entry, महीने का Pivot report और एक chart। यही आपका **portfolio** है — interview में दिखाइए।"], ["box", "याद रखें:", "रोज़ 1 घंटा practice, 30 दिन तक — यह 3 दिन में 10 घंटे पढ़ने से कहीं बेहतर है।", ""], ["p", "HITARTHI का Advanced Excel course इसी क्रम में है — live class, recording, हर हफ़्ते test और आख़िर में QR वाला certificate। पहले Free Counselling लीजिए।"]]}, "en": {"t": "Excel सीखने में कितना समय लगता है? 30 दिन का आसान Plan", "s": "Formulas से VLOOKUP और Pivot Table तक — रोज़ 1 घंटा देकर 30 दिन में office-ready Excel कैसे सीखें।", "b": [["lead", "Excel आज लगभग हर office की ज़रूरत है — accounts, sales, school, hospital, दुकान। अच्छी ख़बर यह है कि काम चलाने लायक Excel **30 दिन** में, रोज़ एक घंटा देकर सीखा जा सकता है।"], ["h", "हफ़्ता 1 — नींव"], ["ul", ["Cell, row, column, sheet की समझ", "Data टाइप करना, format करना, border और रंग", "SUM, AVERAGE, MIN, MAX", "Print setup — एक page पर पूरी sheet"]], ["h", "हफ़्ता 2 — रोज़ के formulas"], ["ul", ["IF से \"पास/फ़ेल\", \"हाँ/ना\" निकालना", "COUNTIF, SUMIF — किसी शर्त पर गिनती और जोड़", "Text formulas: LEFT, RIGHT, CONCAT, TRIM", "Sort और Filter"]], ["h", "हफ़्ता 3 — Office वाला Excel"], ["ul", ["VLOOKUP / XLOOKUP — दो list को जोड़ना", "Pivot Table — 5 मिनट में monthly report", "Charts — bar, line, pie", "Data Validation — dropdown list"]], ["h", "हफ़्ता 4 — असली project"], ["p", "अपनी दुकान, घर या किसी दोस्त के business का monthly बिक्री-ख़र्च sheet बनाइए: रोज़ की entry, महीने का Pivot report और एक chart। यही आपका **portfolio** है — interview में दिखाइए।"], ["box", "याद रखें:", "रोज़ 1 घंटा practice, 30 दिन तक — यह 3 दिन में 10 घंटे पढ़ने से कहीं बेहतर है।", ""], ["p", "HITARTHI का Advanced Excel course इसी क्रम में है — live class, recording, हर हफ़्ते test और आख़िर में QR वाला certificate। पहले Free Counselling लीजिए।"]]}}, {"slug": "spoken-english-ghar-baithe", "cat": "career", "icon": "🗣️", "c": ["#3B0764", "#7C3AED"], "date": "2026-11-02", "hi": {"t": "घर बैठे Spoken English कैसे सीखें — रोज़ 15 मिनट का तरीका", "s": "झिझक कैसे छोड़ें, रोज़ क्या बोलें, ग़लतियों से कैसे न डरें — गाँव और छोटे शहर के students के लिए सरल plan।", "b": [["lead", "English बोलने में सबसे बड़ी रुकावट grammar नहीं, **झिझक** है। अच्छी बात — झिझक रोज़ थोड़ी-थोड़ी practice से निकलती है। यह 15 मिनट का तरीका आज से शुरू कीजिए।"], ["h", "रोज़ के 15 मिनट"], ["ol", ["**5 मिनट — ज़ोर से पढ़िए:** कोई भी छोटा English paragraph, आवाज़ के साथ", "**5 मिनट — अपने दिन के बारे में बोलिए:** \"Today I woke up at 6…\" — mobile में record कीजिए", "**5 मिनट — 5 नए शब्द:** हर शब्द से एक वाक्य बनाइए और बोलिए"]], ["h", "ग़लतियों से डर कैसे ख़त्म करें"], ["ul", ["हर बड़ा speaker कभी ग़लत बोलता था — ग़लती सीखने का हिस्सा है", "पहले छोटे वाक्य: \"I am ready.\", \"Can you help me?\"", "अपनी recording हफ़्ते बाद सुनिए — सुधार ख़ुद दिखेगा"]], ["box", "काम का सुझाव:", "घर में किसी एक के साथ रोज़ 5 मिनट \"English Time\" रखिए — सिर्फ़ English में बात।", ""], ["h", "AI से practice"], ["p", "आज AI से भी बोलने की practice हो सकती है — वह बिना हँसे, बिना थके आपकी ग़लती सुधारता है। HITARTHI का English AI Teacher इसी के लिए है; साथ में live class में असली बातचीत।"], ["p", "30 दिन लगातार यह तरीका अपनाइए — फ़र्क़ आपको भी दिखेगा और दूसरों को भी।"]]}, "en": {"t": "घर बैठे Spoken English कैसे सीखें — रोज़ 15 मिनट का तरीका", "s": "झिझक कैसे छोड़ें, रोज़ क्या बोलें, ग़लतियों से कैसे न डरें — गाँव और छोटे शहर के students के लिए सरल plan।", "b": [["lead", "English बोलने में सबसे बड़ी रुकावट grammar नहीं, **झिझक** है। अच्छी बात — झिझक रोज़ थोड़ी-थोड़ी practice से निकलती है। यह 15 मिनट का तरीका आज से शुरू कीजिए।"], ["h", "रोज़ के 15 मिनट"], ["ol", ["**5 मिनट — ज़ोर से पढ़िए:** कोई भी छोटा English paragraph, आवाज़ के साथ", "**5 मिनट — अपने दिन के बारे में बोलिए:** \"Today I woke up at 6…\" — mobile में record कीजिए", "**5 मिनट — 5 नए शब्द:** हर शब्द से एक वाक्य बनाइए और बोलिए"]], ["h", "ग़लतियों से डर कैसे ख़त्म करें"], ["ul", ["हर बड़ा speaker कभी ग़लत बोलता था — ग़लती सीखने का हिस्सा है", "पहले छोटे वाक्य: \"I am ready.\", \"Can you help me?\"", "अपनी recording हफ़्ते बाद सुनिए — सुधार ख़ुद दिखेगा"]], ["box", "काम का सुझाव:", "घर में किसी एक के साथ रोज़ 5 मिनट \"English Time\" रखिए — सिर्फ़ English में बात।", ""], ["h", "AI से practice"], ["p", "आज AI से भी बोलने की practice हो सकती है — वह बिना हँसे, बिना थके आपकी ग़लती सुधारता है। HITARTHI का English AI Teacher इसी के लिए है; साथ में live class में असली बातचीत।"], ["p", "30 दिन लगातार यह तरीका अपनाइए — फ़र्क़ आपको भी दिखेगा और दूसरों को भी।"]]}}, {"slug": "upi-fraud-se-kaise-bachein", "cat": "money", "icon": "🛡️", "c": ["#7F1D1D", "#DC2626"], "date": "2026-11-05", "hi": {"t": "UPI Fraud से कैसे बचें: 10 ज़रूरी बातें जो हर परिवार को पता हों", "s": "OTP, PIN, QR code, नक़ली call और \"पैसा वापस\" वाले message — सबसे आम धोखे और उनसे बचने के आसान नियम।", "b": [["lead", "UPI ने पैसा भेजना आसान बनाया, पर धोखेबाज़ भी इसी का फ़ायदा उठाते हैं। ये 10 बातें घर के हर सदस्य — ख़ासकर बुज़ुर्गों और बच्चों — को बताइए।"], ["ol", ["**पैसा लेने के लिए PIN कभी नहीं डालना पड़ता।** PIN सिर्फ़ पैसा भेजने में लगता है।", "**QR code scan = पैसा जाना।** \"पैसा पाने के लिए scan करो\" बोलने वाला धोखेबाज़ है।", "**OTP किसी को न बताएँ** — bank, police या company कभी OTP नहीं माँगती।", "**Screen share app** (AnyDesk, TeamViewer) किसी अनजान के कहने पर install न करें।", "**\"ग़लती से पैसा चला गया, लौटा दो\"** — पहले अपनी bank app में ख़ुद जाँचिए।", "**KYC update के link** पर click न करें — सीधे bank branch या official app में जाएँ।", "**Lottery, इनाम, नौकरी के लिए पहले पैसा** माँगने वाले से दूर रहें।", "**Customer care नंबर** Google से नहीं, official app/website से लें।", "**UPI limit** अपनी ज़रूरत के हिसाब से कम रखें।", "**धोखा हो जाए तो तुरंत 1930** पर call करें और cybercrime.gov.in पर शिकायत करें।"]], ["box", "सबसे ज़रूरी:", "जल्दी करवाने वाला, डराने वाला या लालच देने वाला — तीनों धोखे के निशान हैं। रुकिए, सोचिए, फिर करिए।", ""], ["p", "HITARTHI की \"Digital Payment & Scam Safety\" class में यही बातें practical तरीके से सिखाई जाती हैं — परिवार के साथ देखिए।"]]}, "en": {"t": "UPI Fraud से कैसे बचें: 10 ज़रूरी बातें जो हर परिवार को पता हों", "s": "OTP, PIN, QR code, नक़ली call और \"पैसा वापस\" वाले message — सबसे आम धोखे और उनसे बचने के आसान नियम।", "b": [["lead", "UPI ने पैसा भेजना आसान बनाया, पर धोखेबाज़ भी इसी का फ़ायदा उठाते हैं। ये 10 बातें घर के हर सदस्य — ख़ासकर बुज़ुर्गों और बच्चों — को बताइए।"], ["ol", ["**पैसा लेने के लिए PIN कभी नहीं डालना पड़ता।** PIN सिर्फ़ पैसा भेजने में लगता है।", "**QR code scan = पैसा जाना।** \"पैसा पाने के लिए scan करो\" बोलने वाला धोखेबाज़ है।", "**OTP किसी को न बताएँ** — bank, police या company कभी OTP नहीं माँगती।", "**Screen share app** (AnyDesk, TeamViewer) किसी अनजान के कहने पर install न करें।", "**\"ग़लती से पैसा चला गया, लौटा दो\"** — पहले अपनी bank app में ख़ुद जाँचिए।", "**KYC update के link** पर click न करें — सीधे bank branch या official app में जाएँ।", "**Lottery, इनाम, नौकरी के लिए पहले पैसा** माँगने वाले से दूर रहें।", "**Customer care नंबर** Google से नहीं, official app/website से लें।", "**UPI limit** अपनी ज़रूरत के हिसाब से कम रखें।", "**धोखा हो जाए तो तुरंत 1930** पर call करें और cybercrime.gov.in पर शिकायत करें।"]], ["box", "सबसे ज़रूरी:", "जल्दी करवाने वाला, डराने वाला या लालच देने वाला — तीनों धोखे के निशान हैं। रुकिए, सोचिए, फिर करिए।", ""], ["p", "HITARTHI की \"Digital Payment & Scam Safety\" class में यही बातें practical तरीके से सिखाई जाती हैं — परिवार के साथ देखिए।"]]}}, {"slug": "typing-speed-kaise-badhayein", "cat": "career", "icon": "⌨️", "c": ["#0C4A6E", "#0284C7"], "date": "2026-11-09", "hi": {"t": "Typing Speed कैसे बढ़ाएँ — 20 से 40 शब्द/मिनट तक का रास्ता", "s": "सही उँगलियाँ, home row, रोज़ की practice और accuracy — सरकारी और office की नौकरी के typing test की तैयारी।", "b": [["lead", "SSC, बैंक, court और office की बहुत-सी नौकरियों में typing test होता है। Speed जन्म से नहीं आती — **सही तरीका + रोज़ की practice** से आती है।"], ["h", "1. सही उँगलियाँ — Home Row"], ["p", "बाएँ हाथ की उँगलियाँ **A S D F** पर और दाएँ हाथ की **J K L ;** पर। F और J पर छोटा उभार होता है — बिना देखे वहीं लौटिए।"], ["h", "2. पहले accuracy, फिर speed"], ["p", "शुरुआत में 98% सही typing का लक्ष्य रखिए। ग़लत typing की speed बेकार है — test में ग़लती पर नंबर कटते हैं।"], ["h", "3. रोज़ का 20 मिनट plan"], ["ul", ["5 मिनट — home row के अक्षर", "10 मिनट — छोटे शब्द और वाक्य", "5 मिनट — 1 मिनट का speed test, नतीजा लिखिए"]], ["box", "कितना समय?", "ज़्यादातर students 2–3 महीने की रोज़ की practice से 35–40 शब्द/मिनट तक पहुँच जाते हैं।", ""], ["h", "4. हिंदी typing भी"], ["p", "कई सरकारी नौकरियों में हिंदी typing (Mangal / Inscript) माँगी जाती है। English के साथ-साथ हिंदी की practice भी शुरू कीजिए।"], ["p", "HITARTHI Typing Shala में हिंदी और English दोनों की lessons, game और test हैं — बच्चों से लेकर नौकरी की तैयारी वालों तक।"]]}, "en": {"t": "Typing Speed कैसे बढ़ाएँ — 20 से 40 शब्द/मिनट तक का रास्ता", "s": "सही उँगलियाँ, home row, रोज़ की practice और accuracy — सरकारी और office की नौकरी के typing test की तैयारी।", "b": [["lead", "SSC, बैंक, court और office की बहुत-सी नौकरियों में typing test होता है। Speed जन्म से नहीं आती — **सही तरीका + रोज़ की practice** से आती है।"], ["h", "1. सही उँगलियाँ — Home Row"], ["p", "बाएँ हाथ की उँगलियाँ **A S D F** पर और दाएँ हाथ की **J K L ;** पर। F और J पर छोटा उभार होता है — बिना देखे वहीं लौटिए।"], ["h", "2. पहले accuracy, फिर speed"], ["p", "शुरुआत में 98% सही typing का लक्ष्य रखिए। ग़लत typing की speed बेकार है — test में ग़लती पर नंबर कटते हैं।"], ["h", "3. रोज़ का 20 मिनट plan"], ["ul", ["5 मिनट — home row के अक्षर", "10 मिनट — छोटे शब्द और वाक्य", "5 मिनट — 1 मिनट का speed test, नतीजा लिखिए"]], ["box", "कितना समय?", "ज़्यादातर students 2–3 महीने की रोज़ की practice से 35–40 शब्द/मिनट तक पहुँच जाते हैं।", ""], ["h", "4. हिंदी typing भी"], ["p", "कई सरकारी नौकरियों में हिंदी typing (Mangal / Inscript) माँगी जाती है। English के साथ-साथ हिंदी की practice भी शुरू कीजिए।"], ["p", "HITARTHI Typing Shala में हिंदी और English दोनों की lessons, game और test हैं — बच्चों से लेकर नौकरी की तैयारी वालों तक।"]]}}, {"slug": "chatgpt-se-padhai-kaise-karein", "cat": "ai", "icon": "🤖", "c": ["#1E1B4B", "#4338CA"], "date": "2026-11-12", "hi": {"t": "ChatGPT / AI से पढ़ाई कैसे करें — Students के लिए 7 सही तरीके", "s": "AI को नक़ल की मशीन नहीं, अपना teacher बनाइए — समझना, revision, quiz और English practice के सही तरीके।", "b": [["lead", "AI से homework copy करना आसान है, पर इससे सीखते कुछ नहीं। सही तरीके से इस्तेमाल करें तो AI **24 घंटे का धैर्यवान teacher** है।"], ["ol", ["**मुश्किल topic आसान भाषा में:** \"Photosynthesis को 10 साल के बच्चे की तरह हिंदी में समझाओ\"", "**उदाहरण माँगिए:** \"Percentage के 5 रोज़ की ज़िंदगी वाले सवाल दो\"", "**ख़ुद का quiz:** \"इस chapter से 10 MCQ बनाओ, जवाब बाद में बताना\"", "**अपना उत्तर जँचवाइए:** पहले ख़ुद लिखिए, फिर AI से पूछिए क्या छूटा", "**English practice:** \"मेरे साथ interview की तरह English में बात करो और ग़लती सुधारो\"", "**Revision notes:** \"इस chapter के 10 मुख्य बिंदु दो\"", "**पढ़ाई का plan:** \"30 दिन में Excel सीखने का रोज़ का plan बनाओ\""]], ["box", "ध्यान रखें:", "AI कभी-कभी ग़लत जानकारी भी देता है। ज़रूरी बातें किताब या teacher से मिलाइए, और अपनी निजी जानकारी (Aadhaar, OTP, password) कभी न डालें।", ""], ["p", "HITARTHI के \"3 घंटे का AI Workshop\" में students और parents को AI के ये सही तरीके hands-on सिखाए जाते हैं।"]]}, "en": {"t": "ChatGPT / AI से पढ़ाई कैसे करें — Students के लिए 7 सही तरीके", "s": "AI को नक़ल की मशीन नहीं, अपना teacher बनाइए — समझना, revision, quiz और English practice के सही तरीके।", "b": [["lead", "AI से homework copy करना आसान है, पर इससे सीखते कुछ नहीं। सही तरीके से इस्तेमाल करें तो AI **24 घंटे का धैर्यवान teacher** है।"], ["ol", ["**मुश्किल topic आसान भाषा में:** \"Photosynthesis को 10 साल के बच्चे की तरह हिंदी में समझाओ\"", "**उदाहरण माँगिए:** \"Percentage के 5 रोज़ की ज़िंदगी वाले सवाल दो\"", "**ख़ुद का quiz:** \"इस chapter से 10 MCQ बनाओ, जवाब बाद में बताना\"", "**अपना उत्तर जँचवाइए:** पहले ख़ुद लिखिए, फिर AI से पूछिए क्या छूटा", "**English practice:** \"मेरे साथ interview की तरह English में बात करो और ग़लती सुधारो\"", "**Revision notes:** \"इस chapter के 10 मुख्य बिंदु दो\"", "**पढ़ाई का plan:** \"30 दिन में Excel सीखने का रोज़ का plan बनाओ\""]], ["box", "ध्यान रखें:", "AI कभी-कभी ग़लत जानकारी भी देता है। ज़रूरी बातें किताब या teacher से मिलाइए, और अपनी निजी जानकारी (Aadhaar, OTP, password) कभी न डालें।", ""], ["p", "HITARTHI के \"3 घंटे का AI Workshop\" में students और parents को AI के ये सही तरीके hands-on सिखाए जाते हैं।"]]}}, {"slug": "sip-compounding-500-se-shuruaat", "cat": "money", "icon": "📈", "c": ["#14532D", "#16A34A"], "date": "2026-11-16", "hi": {"t": "₹500 महीने से बचत की शुरुआत: SIP और Compounding को आसान भाषा में समझें", "s": "Compounding क्या है, जल्दी शुरुआत क्यों ज़रूरी है, और शुरुआत करने से पहले किन बातों का ध्यान रखें — सिर्फ़ शिक्षा, निवेश सलाह नहीं।", "b": [["lead", "बहुत-से लोग सोचते हैं कि बचत तभी होगी जब कमाई बड़ी होगी। असल में **आदत** बड़ी रकम से ज़्यादा ज़रूरी है — और compounding को सबसे ज़्यादा चाहिए **समय**।"], ["h", "Compounding क्या है?"], ["p", "जब आपकी बचत पर कमाई हो, और उस कमाई पर भी कमाई होने लगे — उसे compounding कहते हैं। जैसे बर्फ़ का गोला लुढ़कते हुए बड़ा होता जाता है।"], ["h", "जल्दी शुरुआत का असर (उदाहरण)"], ["p", "अगर कोई हर महीने ₹500 बचाए और मान लें सालाना 10% की बढ़त मिले, तो 10 साल में लगभग ₹1 लाख और 20 साल में लगभग ₹3.6 लाख बन सकते हैं — जबकि जमा किए सिर्फ़ ₹60,000 और ₹1.2 लाख। यह सिर्फ़ गणित का उदाहरण है; असल बढ़त कम-ज़्यादा हो सकती है।"], ["h", "शुरू करने से पहले"], ["ul", ["पहले 3–6 महीने का emergency fund", "महँगा कर्ज़ (credit card, ऊँचे ब्याज वाला loan) पहले चुकाइए", "जो समझ न आए उसमें पैसा न लगाइए", "\"पक्का दोगुना\" जैसे वादों से दूर रहिए"]], ["box", "ज़रूरी सूचना:", "यह लेख वित्तीय शिक्षा के लिए है, निवेश की सलाह नहीं। Market से जुड़े निवेश में जोखिम होता है। बड़े फ़ैसले से पहले SEBI-registered सलाहकार से बात करें।", ""], ["p", "अपना हिसाब ख़ुद लगाइए — website के \"पैसे की समझ\" page पर SIP calculator और Money IQ test मुफ़्त है।"]]}, "en": {"t": "₹500 महीने से बचत की शुरुआत: SIP और Compounding को आसान भाषा में समझें", "s": "Compounding क्या है, जल्दी शुरुआत क्यों ज़रूरी है, और शुरुआत करने से पहले किन बातों का ध्यान रखें — सिर्फ़ शिक्षा, निवेश सलाह नहीं।", "b": [["lead", "बहुत-से लोग सोचते हैं कि बचत तभी होगी जब कमाई बड़ी होगी। असल में **आदत** बड़ी रकम से ज़्यादा ज़रूरी है — और compounding को सबसे ज़्यादा चाहिए **समय**।"], ["h", "Compounding क्या है?"], ["p", "जब आपकी बचत पर कमाई हो, और उस कमाई पर भी कमाई होने लगे — उसे compounding कहते हैं। जैसे बर्फ़ का गोला लुढ़कते हुए बड़ा होता जाता है।"], ["h", "जल्दी शुरुआत का असर (उदाहरण)"], ["p", "अगर कोई हर महीने ₹500 बचाए और मान लें सालाना 10% की बढ़त मिले, तो 10 साल में लगभग ₹1 लाख और 20 साल में लगभग ₹3.6 लाख बन सकते हैं — जबकि जमा किए सिर्फ़ ₹60,000 और ₹1.2 लाख। यह सिर्फ़ गणित का उदाहरण है; असल बढ़त कम-ज़्यादा हो सकती है।"], ["h", "शुरू करने से पहले"], ["ul", ["पहले 3–6 महीने का emergency fund", "महँगा कर्ज़ (credit card, ऊँचे ब्याज वाला loan) पहले चुकाइए", "जो समझ न आए उसमें पैसा न लगाइए", "\"पक्का दोगुना\" जैसे वादों से दूर रहिए"]], ["box", "ज़रूरी सूचना:", "यह लेख वित्तीय शिक्षा के लिए है, निवेश की सलाह नहीं। Market से जुड़े निवेश में जोखिम होता है। बड़े फ़ैसले से पहले SEBI-registered सलाहकार से बात करें।", ""], ["p", "अपना हिसाब ख़ुद लगाइए — website के \"पैसे की समझ\" page पर SIP calculator और Money IQ test मुफ़्त है।"]]}}, {"slug": "naukri-ki-taiyari-resume-interview", "cat": "career", "icon": "💼", "c": ["#7C2D12", "#EA580C"], "date": "2026-11-19", "hi": {"t": "पहली नौकरी की तैयारी: Resume, Interview और 5 ज़रूरी Skills", "s": "एक page का साफ़ resume, interview के आम सवालों के जवाब, और वे skills जो छोटे शहरों से भी अच्छी नौकरी दिलाती हैं।", "b": [["lead", "पहली नौकरी के लिए degree से ज़्यादा ये तीन चीज़ें काम आती हैं — **साफ़ resume, आत्मविश्वास से interview, और काम की skills**।"], ["h", "1. एक page का resume"], ["ul", ["ऊपर नाम, mobile, email, शहर", "2 लाइन का objective — आप क्या काम करना चाहते हैं", "Skills: Computer, Excel, Typing speed, भाषाएँ", "पढ़ाई और कोई project / internship", "कोई spelling ग़लती नहीं — दो बार पढ़िए"]], ["h", "2. Interview के 5 आम सवाल"], ["ol", ["Tell me about yourself — 1 मिनट का जवाब तैयार रखिए", "आपकी ताक़त और कमज़ोरी क्या है?", "आप यह नौकरी क्यों चाहते हैं?", "5 साल बाद ख़ुद को कहाँ देखते हैं?", "कोई सवाल पूछना है? — हाँ, \"मेरा रोज़ का काम क्या होगा?\""]], ["box", "Practice टिप:", "आईने के सामने या mobile camera में अपने जवाब record कीजिए — आवाज़, बैठने का तरीका और आँख मिलाना सुधरेगा।", ""], ["h", "3. पाँच skills जो फ़र्क़ बनाती हैं"], ["ul", ["MS Office + Excel", "Typing (35+ शब्द/मिनट)", "बोलचाल की English", "Email और WhatsApp पर professional बात", "AI tools का सही इस्तेमाल"]], ["p", "HITARTHI का \"Interview Preparation\" course इन्हीं पर है — resume बनाना, mock interview और feedback। Free Counselling लेकर अपनी तैयारी का रास्ता जानिए।"]]}, "en": {"t": "पहली नौकरी की तैयारी: Resume, Interview और 5 ज़रूरी Skills", "s": "एक page का साफ़ resume, interview के आम सवालों के जवाब, और वे skills जो छोटे शहरों से भी अच्छी नौकरी दिलाती हैं।", "b": [["lead", "पहली नौकरी के लिए degree से ज़्यादा ये तीन चीज़ें काम आती हैं — **साफ़ resume, आत्मविश्वास से interview, और काम की skills**।"], ["h", "1. एक page का resume"], ["ul", ["ऊपर नाम, mobile, email, शहर", "2 लाइन का objective — आप क्या काम करना चाहते हैं", "Skills: Computer, Excel, Typing speed, भाषाएँ", "पढ़ाई और कोई project / internship", "कोई spelling ग़लती नहीं — दो बार पढ़िए"]], ["h", "2. Interview के 5 आम सवाल"], ["ol", ["Tell me about yourself — 1 मिनट का जवाब तैयार रखिए", "आपकी ताक़त और कमज़ोरी क्या है?", "आप यह नौकरी क्यों चाहते हैं?", "5 साल बाद ख़ुद को कहाँ देखते हैं?", "कोई सवाल पूछना है? — हाँ, \"मेरा रोज़ का काम क्या होगा?\""]], ["box", "Practice टिप:", "आईने के सामने या mobile camera में अपने जवाब record कीजिए — आवाज़, बैठने का तरीका और आँख मिलाना सुधरेगा।", ""], ["h", "3. पाँच skills जो फ़र्क़ बनाती हैं"], ["ul", ["MS Office + Excel", "Typing (35+ शब्द/मिनट)", "बोलचाल की English", "Email और WhatsApp पर professional बात", "AI tools का सही इस्तेमाल"]], ["p", "HITARTHI का \"Interview Preparation\" course इन्हीं पर है — resume बनाना, mock interview और feedback। Free Counselling लेकर अपनी तैयारी का रास्ता जानिए।"]]}}];
  const CAT={all:["सभी","All"],hitarthi:["HITARTHI","HITARTHI"],career:["Career","Career"],ai:["AI","AI"],money:["पैसे की समझ","Money Sense"],parents:["Parents","Parents"]};
  const U={read:["मिनट पढ़ें","min read"],more:["पूरा पढ़ें →","Read more →"],back:["← सभी लेख","← All articles"],toc:["इस लेख में","IN THIS ARTICLE"],share:["Share करें:","Share:"],copy:["Link copy करें","Copy link"],copied:["Link copy हो गया","Link copied"],
    rel:["ये भी पढ़ें","Read these too"],honest:["HITARTHI किसी नौकरी, कमाई या placement की guarantee नहीं देता। हम सीखने का सही रास्ता, अभ्यास और साथ देते हैं — मेहनत और नतीजा आपका।","HITARTHI does not guarantee any job, income or placement. We give the right path, practice and support — the effort and results are yours."],empty:["कोई लेख नहीं मिला","No articles found"],search:["लेख खोजें…","Search articles…"],
    c1h:["Free Counselling","Free Counselling"],c1p:["पहले देखिए, पसंद आए तभी जुड़िए।","See it first, join only if you like it."],c1b:["Demo Book करें","Book Demo"],
    c2h:["HITARTHI Partner बनिए","Become a HITARTHI Partner"],c2p:["शिक्षा फैलाइए — joining मुफ़्त।","Spread education — joining is free."],c2b:["Partner Plan देखें","View Partner Plan"]};
  const L=()=>document.documentElement.getAttribute("data-lang")==="en"?1:0;
  const t=k=>U[k][L()];const P=p=>p[L()?"en":"hi"];
  const mins=p=>{const w=P(p).b.map(b=>Array.isArray(b[1])?b[1].join(" "):b.slice(1).join(" ")).join(" ").split(/\s+/).length;return Math.max(2,Math.round(w/130));};
  const dt=d=>new Date(d+"T00:00:00").toLocaleDateString(L()?"en-IN":"hi-IN",{day:"numeric",month:"long",year:"numeric"});
  const cover=(p,big)=>`<span class="bl-cover" style="--c1:${p.c[0]};--c2:${p.c[1]}"><span class="ic" aria-hidden="true">${p.icon}</span><span class="lg"><svg aria-hidden="true"><use href="#logo"/></svg>HITARTHI BLOG</span></span>`;
  const card=p=>`<button class="bl-card" data-post="${p.slug}">${cover(p)}<span class="bl-cb"><span class="bl-tag">${CAT[p.cat][L()]}</span><h3>${esc(P(p).t)}</h3><p>${esc(P(p).s)}</p><span class="bl-meta">${mins(p)} ${t("read")}</span><span class="bl-more">${t("more")}</span></span></button>`;
  /* हर post की "date" आने पर ही दिखती है — हफ़्ते में 2 नए लेख अपने-आप */
  const PUB=()=>{const d=new Date(),td=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");return POSTS.filter(p=>p.date<=td).sort((x,y)=>(y.featured?1:0)-(x.featured?1:0)||y.date.localeCompare(x.date));};
  let cat="all",q="";
  function list(){
    $("#blSearch").placeholder=t("search");
    $("#blCats").innerHTML=Object.keys(CAT).map(k=>`<button data-bcat="${k}" aria-pressed="${k===cat}">${CAT[k][L()]}</button>`).join("");
    const f=PUB().filter(p=>(cat==="all"||p.cat===cat)&&(!q||(P(p).t+" "+P(p).s+" "+JSON.stringify(P(p).b)).toLowerCase().includes(q)));
    const feat=cat==="all"&&!q?f.find(p=>p.featured):null;
    $("#blFeat").innerHTML=feat?`<button class="bl-feat" data-post="${feat.slug}">${cover(feat,1)}<span class="bl-fb"><span class="bl-tag">⭐ ${CAT[feat.cat][L()]}</span><h2>${esc(P(feat).t)}</h2><p class="muted" style="margin:0">${esc(P(feat).s)}</p><span class="bl-meta">${dt(feat.date)} • ${mins(feat)} ${t("read")}</span><span class="btn btn-orange" style="align-self:flex-start">${t("more")}</span></span></button>`:"";
    const rest=f.filter(p=>p!==feat);
    $("#blGrid").innerHTML=rest.length?rest.map(card).join(""):(feat?"":`<div class="bl-empty">${t("empty")}</div>`);
    $("#blHome").innerHTML=PUB().filter(p=>!p.featured).sort((x,y)=>y.date.localeCompare(x.date)).slice(0,3).map(card).join("");
  }
  let cur=null;
  function open(slug,noScroll){const p=POSTS.find(x=>x.slug===slug);if(!p)return;cur=p;const D=P(p);
    const heads=D.b.filter(b=>b[0]==="h").map(b=>b[1]);let hi=0;
    const fm=x=>esc(x).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>").replace(/\n/g,"<br>");
    const body=D.b.map(b=>{if(b[0]==="lead")return `<p class="bl-lead">${fm(b[1])}</p>`;if(b[0]==="p")return `<p>${fm(b[1])}</p>`;if(b[0]==="h")return `<h2 id="blh-${hi++}">${fm(b[1])}</h2>`;if(b[0]==="ul")return `<ul>${b[1].map(x=>`<li>${fm(x)}</li>`).join("")}</ul>`;if(b[0]==="ol")return `<ol class="bl-num">${b[1].map(x=>`<li>${fm(x)}</li>`).join("")}</ol>`;if(b[0]==="q")return `<blockquote>${fm(b[1])}</blockquote>`;if(b[0]==="box")return `<div class="bl-box${b[3]?" "+b[3]:""}"><b>${fm(b[1])}</b> ${fm(b[2])}</div>`;return "";}).join("");
    const link=location.href.split("#")[0].split("?")[0]+"?post="+p.slug+"#blog";
    const rel=PUB().filter(x=>x!==p&&(x.cat===p.cat)).concat(PUB().filter(x=>x!==p&&x.cat!==p.cat)).slice(0,3);
    $("#blRead").innerHTML=`<button class="bl-back" data-blback="1">${t("back")}</button><div class="bl-hero">${cover(p,1)}</div><span class="bl-tag">${CAT[p.cat][L()]}</span><h1>${esc(D.t)}</h1><p class="bl-sub">${esc(D.s)}</p><div class="bl-meta">HITARTHI Team • ${dt(p.date)} • ${mins(p)} ${t("read")}</div>
      ${heads.length>1?`<nav class="bl-toc"><b>${t("toc")}</b>${heads.map((h,k)=>`<button data-bltoc="${k}">${esc(h)}</button>`).join("")}</nav>`:""}
      <div class="bl-body">${body}</div>
      <div class="bl-share"><span>${t("share")}</span><a class="btn btn-wa btn-sm" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(D.t+" — "+link)}">WhatsApp</a><a class="btn btn-ghost btn-sm" target="_blank" rel="noopener" href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}">Facebook</a><button class="btn btn-ghost btn-sm" data-blcopy="${esc(link)}">${t("copy")}</button></div>
      <div class="bl-cta"><div><h4>${t("c1h")}</h4><p>${t("c1p")}</p><button class="btn btn-orange btn-sm" data-go="contact" data-demo="1">${t("c1b")}</button></div><div><h4>${t("c2h")}</h4><p>${t("c2p")}</p><button class="btn btn-primary btn-sm" data-go="partner">${t("c2b")}</button></div></div>
      <p class="bl-honest">${t("honest")}</p><div class="bl-rel"><h3>${t("rel")}</h3><div class="bl-grid">${rel.map(card).join("")}</div></div>`;
    $("#blList").hidden=true;$("#blRead").hidden=false;$('section[data-page="blog"] .page-hero').hidden=true;$("#blProg").hidden=false;if(!noScroll)window.scrollTo({top:0,behavior:"instant"});track("blog_read",{post:p.slug});}
  function close(){cur=null;$("#blRead").hidden=true;$("#blList").hidden=false;$('section[data-page="blog"] .page-hero').hidden=false;$("#blProg").hidden=true;window.scrollTo({top:0,behavior:"instant"});}
  document.addEventListener("click",e=>{
    const pb=e.target.closest("[data-post]");if(pb){e.preventDefault();if($('section[data-page="blog"]').hidden)go("blog");open(pb.dataset.post);return;}
    if(e.target.closest("[data-blback]")){close();return;}
    const c=e.target.closest("[data-bcat]");if(c){cat=c.dataset.bcat;list();return;}
    const tc=e.target.closest("[data-bltoc]");if(tc){const h=$("#blh-"+tc.dataset.bltoc);h&&h.scrollIntoView({behavior:"smooth",block:"start"});return;}
    const cp=e.target.closest("[data-blcopy]");if(cp){try{navigator.clipboard.writeText(cp.dataset.blcopy).then(()=>toast(t("copied")),()=>toast(cp.dataset.blcopy));}catch(err){toast(cp.dataset.blcopy);}}
  });
  $("#blSearch").addEventListener("input",e=>{q=e.target.value.trim().toLowerCase();list();});
  window.addEventListener("scroll",()=>{if(!cur)return;const r=$("#blRead").getBoundingClientRect();const pct=Math.min(100,Math.max(0,(-r.top)/(r.height-innerHeight)*100));$("#blProg i").style.width=pct+"%";},{passive:true});
  document.addEventListener("langchange",()=>{list();if(cur)open(cur.slug,true);});
  list();
  try{const sp=new URLSearchParams(location.search).get("post");if(sp&&POSTS.some(p=>p.slug===sp))setTimeout(()=>{go("blog");open(sp);},50);}catch(e){}
})();

/* ---------- TYPING TEST ---------- */
(function(){
  const P={easy:["learning a new skill every day can change your future. practice makes a person confident and strong. type slowly first and then increase your speed.","a computer is a useful tool for study and work. good typing saves time and makes every task easier. keep your fingers on the home row keys.","small steps every day lead to big results. read a little, write a little and learn something new with hitarthi from learning to earning."],
    med:["Typing is a practical skill: students, shopkeepers and office workers use it daily. Accuracy matters more than speed, so look at the screen, not the keyboard!","HITARTHI teaches Computer, AI, Spoken English and Financial Literacy in simple Hindi. With 30 minutes of practice each day, your typing speed can improve steadily.","Excel sheets, emails, reports and online forms - all of them need fast, correct typing. Sit straight, relax your shoulders and use all ten fingers."]};
  let dur=60,lvl="easy",target="",t0=0,left=dur,timer=null,done=false;
  const box=$("#ttBox"),inp=$("#ttIn"),txt=$("#ttText");
  function pick(){const a=P[lvl];let x=a[Math.floor(Math.random()*a.length)];while(x.length<dur*6)x+=" "+a[Math.floor(Math.random()*a.length)];return x;}
  function reset(){clearInterval(timer);timer=null;t0=0;done=false;left=dur;target=pick();inp.value="";inp.disabled=false;$("#ttRes").hidden=true;render();stats();}
  function render(){const v=inp.value;let h="";const show=Math.min(target.length,Math.max(v.length+180,240));
    for(let i=0;i<show;i++){const c=target[i];const ch=c===" "?" ":esc(c);if(i<v.length)h+=`<span class="${v[i]===c?"t-ok":"t-bad"}">${ch}</span>`;else if(i===v.length)h+=`<span class="t-cur">${ch}</span>`;else h+=ch;}
    txt.innerHTML=h;}
  function calc(){const v=inp.value;let ok=0;for(let i=0;i<v.length;i++)if(v[i]===target[i])ok++;const mins=t0?Math.max(5/60,(Math.min(dur,(Date.now()-t0)/1000))/60):0;
    return {ok,err:v.length-ok,wpm:mins?Math.round(ok/5/mins):0,acc:v.length?Math.round(ok/v.length*100):100};}
  function stats(){const c=calc();$("#ttTime").textContent=Math.ceil(left);$("#ttWpm").textContent=c.wpm;$("#ttAcc").textContent=c.acc+"%";$("#ttErr").textContent=c.err;}
  function finish(){done=true;clearInterval(timer);inp.disabled=true;const c=calc();
    const L=c.wpm<15?["शुरुआत","अभी शुरुआत है — रोज़ 15 मिनट अभ्यास से 2–3 हफ़्ते में अच्छा सुधार दिखेगा।"]:c.wpm<25?["अच्छा","अच्छी शुरुआत! सही finger position सीखकर speed और बढ़ सकती है।"]:c.wpm<40?["बढ़िया","बढ़िया speed! Office काम के लिए यह अच्छी speed है — accuracy पर ध्यान बनाए रखें।"]:["Expert","शानदार! आप तेज़ typist हैं — अब Advanced Excel और AI tools सीखकर इस skill का पूरा फ़ायदा उठाइए।"];
    const r=typeof getRef==="function"?getRef():"";const url=location.href.split("#")[0].split("?")[0]+(r?"?ref="+r:"")+"#home";
    const msg=`मेरी typing speed ${c.wpm} WPM है (accuracy ${c.acc}%) ⌨️ — आप भी HITARTHI का मुफ़्त Typing Test दीजिए: ${url}`;
    $("#ttRes").innerHTML=`<div class="tt-badge">${c.wpm}<small>WPM</small></div><div><h3>${L[0]} — ${c.wpm} शब्द/मिनट, ${c.acc}% सही</h3><p>${L[1]}</p><div class="row"><button class="btn btn-orange btn-sm" data-go="courses" data-cat="computer">Typing / Computer course देखें</button><a class="btn btn-wa btn-sm" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(msg)}">WhatsApp पर share करें</a><button class="btn btn-ghost btn-sm" id="ttAgain">↻ फिर से कोशिश</button></div></div>`;
    $("#ttRes").hidden=false;track("typing_test_done",{wpm:c.wpm,acc:c.acc});}
  inp.addEventListener("input",()=>{if(done)return;if(!t0){t0=Date.now();timer=setInterval(()=>{left=Math.max(0,dur-(Date.now()-t0)/1000);stats();if(left<=0)finish();},200);}
    if(inp.value.length>=target.length)target+=" "+pick();render();stats();});
  inp.addEventListener("paste",e=>e.preventDefault());
  inp.addEventListener("focus",()=>box.classList.add("focus"));inp.addEventListener("blur",()=>box.classList.remove("focus"));
  document.addEventListener("click",e=>{const d=e.target.closest("[data-ttdur]");if(d){dur=+d.dataset.ttdur;$$("[data-ttdur]").forEach(b=>b.setAttribute("aria-pressed",b===d));reset();return;}
    const l=e.target.closest("[data-ttlvl]");if(l){lvl=l.dataset.ttlvl;$$("[data-ttlvl]").forEach(b=>b.setAttribute("aria-pressed",b===l));reset();return;}
    if(e.target.id==="ttReset"||e.target.id==="ttAgain"){reset();inp.focus();}});
  $$("[data-ttlvl]").forEach(b=>{if(b.dataset.ttlvl!=="easy")b.setAttribute("aria-pressed","false");});
  reset();
})();

/* ---------- सुनिए (READ ALOUD) ---------- */
(function(){
  const fab=$("#rdFab");const S=window.speechSynthesis;
  if(!S||typeof SpeechSynthesisUtterance==="undefined"){fab.hidden=true;return;}
  let q=[],idx=0,rate=1,on=false,paused=false,curEl=null,voices=[];
  const loadV=()=>{voices=S.getVoices();};loadV();if(S.onvoiceschanged!==undefined)S.onvoiceschanged=loadV;
  const isEn=()=>document.documentElement.getAttribute("data-lang")==="en";
  function voiceFor(){const want=isEn()?["en-IN","en-GB","en-US","en"]:["hi-IN","hi"];for(const w of want){const v=voices.find(x=>x.lang&&x.lang.replace("_","-").toLowerCase().startsWith(w.toLowerCase()));if(v)return v;}return null;}
  function collect(root){const els=[...root.querySelectorAll("h1,h2,h3,h4,p,li,blockquote,.bl-box")].filter(el=>{if(el.closest("nav,button,.rd,[hidden],.tt-box,.pr-track,.bbrow,footer,.cdown,.ticker,script,style"))return false;if(el.parentElement&&el.parentElement.closest("li,p,.bl-box")&&el.tagName!=="LI")return false;const r=el.getBoundingClientRect();return r.width>0&&r.height>0;});
    const out=[];els.forEach(el=>{const t=(el.innerText||"").replace(/\s+/g," ").trim();if(t.length<2)return;t.split(/(?<=[।.!?])\s+/).forEach(part=>{for(let i=0;i<part.length;i+=220)out.push({el,t:part.slice(i,i+220)});});});return out;}
  function rootNow(){const r=$("#blRead");if(r&&!r.hidden&&r.closest("section.page:not([hidden])"))return r;return document.querySelector("section.page:not([hidden])")||document.body;}
  function label(){const r=rootNow();const h=r.querySelector("h1");return (h?h.innerText:"यह page").replace(/\s+/g," ").slice(0,60);}
  function mark(el){if(curEl)curEl.classList.remove("rd-read");curEl=el;if(el){el.classList.add("rd-read");const b=el.getBoundingClientRect();if(b.top<80||b.bottom>innerHeight-120)el.scrollIntoView({block:"center",behavior:"smooth"});}}
  function speak(){if(!on)return;if(idx>=q.length){stop();toast(isEn()?"Finished reading":"पढ़ना पूरा हुआ");return;}
    const it=q[idx];mark(it.el);const u=new SpeechSynthesisUtterance(it.t);const v=voiceFor();if(v){u.voice=v;u.lang=v.lang;}else u.lang=isEn()?"en-IN":"hi-IN";u.rate=rate;
    u.onend=()=>{if(!on||paused)return;idx++;speak();};u.onerror=()=>{if(!on)return;idx++;speak();};S.speak(u);}
  function start(root,lbl){S.cancel();q=collect(root||rootNow());idx=0;if(!q.length){toast("पढ़ने के लिए कुछ नहीं मिला");return;}on=true;paused=false;
    fab.classList.add("on");fab.classList.remove("paused");$("#rdBar").hidden=false;$("#rdLbl").textContent=(isEn()?"Listening: ":"सुन रहे हैं: ")+(lbl||label());$("#rdPause").textContent="❚❚";
    if(!voiceFor()&&!isEn())toast("इस phone में हिंदी आवाज़ नहीं मिली — Settings में Google Text-to-Speech की हिंदी भाषा जोड़ें");
    speak();track("listen_start",{});}
  function stop(){on=false;paused=false;S.cancel();mark(null);fab.classList.remove("on","paused");$("#rdBar").hidden=true;}
  $("#rdBtn").onclick=()=>start();
  $("#rdStop").onclick=stop;
  $("#rdPause").onclick=()=>{if(!on)return;if(!paused){paused=true;S.cancel();fab.classList.add("paused");$("#rdPause").textContent="▶";}else{paused=false;fab.classList.remove("paused");$("#rdPause").textContent="❚❚";speak();}};
  $("#rdSpeed").onclick=()=>{rate=rate===1?1.25:rate===1.25?0.85:1;$("#rdSpeed").textContent=(rate===0.85?"0.85":rate)+"x";if(on&&!paused){S.cancel();setTimeout(speak,60);}};
  window.addEventListener("hashchange",stop);document.addEventListener("langchange",()=>{if(on)stop();});
  /* blog लेख में अलग "सुनिए" बटन */
  new MutationObserver(()=>{const r=$("#blRead");if(!r||r.hidden||r.querySelector(".bl-listen"))return;const h=r.querySelector("h1");if(!h)return;const b=document.createElement("button");b.className="btn btn-primary btn-sm bl-listen";b.innerHTML=isEn()?"🔊 Listen to this article":"🔊 यह लेख सुनिए";b.onclick=()=>start(r,h.innerText);h.insertAdjacentElement("afterend",b);}).observe($("#blRead")||document.body,{childList:true});
  document.addEventListener("click",e=>{if(on&&e.target.closest("[data-go],[data-blback],[data-post]"))stop();},true);
})();


/* ---------- HITARTHI BOOK LIBRARY — BOOKS में नई book जोड़ते ही ring में अपने-आप आ जाएगी ---------- */
(function(){
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll("[data-lib]").forEach(root=>{
    const stage=root.querySelector(".lib-stage"),ring=root.querySelector(".lib-ring"),cover=root.querySelector(".lib-cover"),info=root.querySelector(".lib-info");
    let VI=[],N=1,step=360;const sync=()=>{VI=BOOKS.map((b,i)=>i).filter(i=>!BOOKS[i].hide);if(!VI.length)VI=[0];N=VI.length;step=360/N;};sync();
    const st={a:0,sel:-1,run:true,hover:false,vis:true,last:0,hold:0,auto:0,drag:null,moved:0};
    function geo(){const mob=innerWidth<640;const k=mob?.3:(innerWidth<1000?.42:.5);const R=mob?Math.max(150,Math.min(175,innerWidth*.43)):(innerWidth<1000?300:Math.max(340,Math.min(420,N*16)));return {R,k,bw:156*k,bh:226*k};}
    function build(){sync();const g=geo();ring.innerHTML=VI.map((bi,i)=>{const b=BOOKS[bi];return `<button class="lib-bk" data-i="${i}" aria-label="${esc(b.t)}" style="--bw:${g.bw}px;--bh:${g.bh}px;transform:rotateY(${i*step}deg) translateZ(${g.R}px)"><span class="lib-sc" style="transform:scale(${g.k});--c1:${b.col[0]};--c2:${b.col[1]};--c3:${b.col[2]};--acc:${b.col[3]}">${book3d(b)}<span class="lf lf-back"><svg><use href="#logo"/></svg><b>${esc(b.t)}</b><span class="ln"><i></i><i></i><i></i><i></i></span><span class="bc"></span><span class="mrp">MRP ${rs(b.p)} • HITARTHI</span></span><span class="lf lf-sp"><svg><use href="#logo"/></svg><b>${esc(b.t)}</b><i></i></span><span class="lf lf-pg"></span><span class="lf lf-tp"></span><span class="lf lf-bt"></span></span></button>`;}).join("");mark();}
    function mark(){ring.querySelectorAll(".lib-bk").forEach(e=>e.classList.toggle("on",+e.dataset.i===st.sel));}
    function show(i){i=(i%N+N)%N;if(i===st.sel)return;st.sel=i;const b=BOOKS[VI[i]];
      cover.innerHTML=book3d(b,"md");cover.classList.remove("swap");void cover.offsetWidth;cover.classList.add("swap");
      info.classList.add("out");setTimeout(()=>{root.querySelector(".lib-t").textContent=b.t;root.querySelector(".lib-s").textContent=b.s;
        root.querySelector(".lib-meta").innerHTML=`<span>📖 ${b.pages} पन्ने</span><span>🏷️ ${esc(b.ser)}</span>`;
        root.querySelector(".lib-price").innerHTML=`<div><small>E-book</small><b class="num">${rs(b.e)}</b></div>${b.p>0?`<div><small>Printed</small><b class="num">${rs(b.p)}</b></div>`:""}`;
        root.querySelector(".lib-count").textContent=(i+1)+" / "+N;info.classList.remove("out");},220);mark();}
    const frontIdx=()=>{const a=((-st.a)%360+360)%360;return Math.round(a/step)%N;};
    function tick(t){const dt=st.last?Math.min(60,t-st.last):16;st.last=t;
      if(st.vis&&!document.hidden){
        if(st.run&&!st.drag&&!reduce){st.a+=(st.hover?3:9)*dt/1000;}
        if(st.run&&!st.drag&&t>st.hold){st.auto+=dt;if(st.auto>3800){st.auto=0;show(frontIdx());}}
        ring.style.transform=`rotateX(-10deg) rotateY(${st.a}deg)`;}
      requestAnimationFrame(tick);}
    build();show(0);requestAnimationFrame(tick);
    document.addEventListener("hb:books",()=>setTimeout(()=>{st.sel=-1;build();show(0);},30));
    let rz;addEventListener("resize",()=>{clearTimeout(rz);rz=setTimeout(build,200);});
    if("IntersectionObserver" in window)new IntersectionObserver(es=>st.vis=es[0].isIntersecting).observe(stage);
    stage.addEventListener("pointerenter",e=>{if(e.pointerType==="mouse")st.hover=true;});stage.addEventListener("pointerleave",()=>{st.hover=false;});
    /* उँगली / mouse से घुमाना */
    stage.addEventListener("pointerdown",e=>{st.drag={x:e.clientX,a:st.a,id:e.pointerId};st.moved=0;});
    addEventListener("pointermove",e=>{if(!st.drag||e.pointerId!==st.drag.id)return;const dx=e.clientX-st.drag.x;st.moved=Math.max(st.moved,Math.abs(dx));
      if(st.moved>6){stage.classList.add("drag");st.a=st.drag.a+dx*.35;}});
    addEventListener("pointerup",e=>{if(!st.drag||e.pointerId!==st.drag.id)return;stage.classList.remove("drag");st.drag=null;if(st.moved>6){st.hold=performance.now()+2500;st.auto=0;}});
    addEventListener("pointercancel",()=>{st.drag=null;stage.classList.remove("drag");});
    /* book छूते ही बीच में */
    ring.addEventListener("click",e=>{const sp=e.target.closest(".lib-bk");if(!sp||st.moved>6)return;show(+sp.dataset.i);st.hold=performance.now()+9000;st.auto=0;track("library_book_tap",{book:BOOKS[VI[+sp.dataset.i]].t});});
    cover.addEventListener("click",()=>openBook(VI[st.sel]));cover.style.cursor="pointer";
    root.querySelector(".lib-open").onclick=()=>openBook(VI[st.sel]);
    root.querySelector(".lib-next").onclick=()=>{show(st.sel+1);st.a-=step;st.hold=performance.now()+9000;};
    root.querySelector(".lib-prev").onclick=()=>{show(st.sel-1);st.a+=step;st.hold=performance.now()+9000;};
    const pp=root.querySelector(".lib-pp");pp.onclick=()=>{st.run=!st.run;pp.textContent=st.run?"❚❚":"▶";pp.setAttribute("aria-label",st.run?"घूमना रोकें":"घुमाएँ");};
  });
})();

/* ---------- HITARTHI HEALTH STORE ---------- */
(function(){
  let cat="all";
  const card=(h,i)=>`<article class="hp-card" style="--c1:${h.c[0]};--c2:${h.c[1]};--c3:${h.c[2]}" data-noi18n="1">
    <button class="hp-img" data-hopen="${h.k}" aria-label="${esc(h.full)} — photo बड़ी देखें"><span class="hp-chip">${esc((HCATS.find(c=>c[0]===h.cat)||[0,""])[1])}</span><span class="hp-new">नया</span><img src="${HIMG[h.k].f}" alt="${esc(h.full)}" loading="lazy"></button>
    <div class="hp-b"><h3>${esc(h.n)}</h3><p class="hp-tag">${esc(h.tag)}</p><ul>${h.pts.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
      <div class="hp-price"><b class="num">${rs(h.mrp)}</b><small>MRP (सभी टैक्स सहित) • ${esc(h.size)} • ${esc(h.unit)}</small></div>
      <div class="hp-acts"><button class="btn btn-ghost btn-sm" data-hadd="${h.k}">🛒 Cart में डालें</button><button class="btn btn-orange btn-sm" data-hbuy="${h.k}">अभी ख़रीदें</button></div>
      <button class="hp-more" data-hopen="${h.k}">पूरी जानकारी, सामग्री और सेवन विधि →</button></div></article>`;
  function grid(){$("#hsGrid").innerHTML=HPROD.map((h,i)=>[h,i]).filter(([h])=>cat==="all"||h.cat===cat).map(([h,i])=>card(h,i)).join("");}
  $("#hsCats").innerHTML=HCATS.filter(c=>c[0]==="all"||HPROD.some(h=>h.cat===c[0])).map(c=>`<button data-hcat="${c[0]}" aria-pressed="${c[0]===cat}">${esc(c[1])}</button>`).join("");
  $("#hsCats").addEventListener("click",e=>{const b=e.target.closest("[data-hcat]");if(!b)return;cat=b.dataset.hcat;$$("#hsCats button").forEach(x=>x.setAttribute("aria-pressed",x===b));grid();});
  grid();
  const art=[["nplus",300,"58%",1],["jp",270,"30%",2],["dact",230,"4%",1],["oil",250,"80%",3]];
  $("#hsArt").innerHTML=art.map(([k,h,l,z],n)=>`<img loading="lazy" decoding="async" src="${HIMG[k].f}" alt="" style="--h:${h}px;left:${l};z-index:${z};animation-delay:-${n*1.2}s">`).join("");
  if($("#hsHome"))$("#hsHome").innerHTML=HPROD.map(h=>`<button data-hopen="${h.k}"><img src="${HIMG[h.k].f}" alt="${esc(h.full)}" loading="lazy"><b>${esc(h.n)}</b><span class="num">${rs(h.mrp)}</span></button>`).join("");
  /* modal */
  const M=$("#hpm");let cur=null,qty=1,img="f";
  function draw(){const h=HPROD[cur];M.style.cssText=`--c1:${h.c[0]};--c2:${h.c[1]};--c3:${h.c[2]}`;
    M.innerHTML=`<div class="hpm-box" data-noi18n="1"><button class="hpm-x" aria-label="बंद करें">✕</button>
      <div class="hpm-g"><div class="hpm-main"><img loading="lazy" decoding="async" src="${HIMG[h.k][img]}" alt="${esc(h.full)}"></div>
        <div class="hpm-th"><button data-himg="f" aria-pressed="${img==="f"}" aria-label="सामने से"><img loading="lazy" decoding="async" src="${HIMG[h.k].f}" alt=""></button><button data-himg="a" aria-pressed="${img==="a"}" aria-label="सभी तरफ़ से (पीछे की जानकारी)"><img loading="lazy" decoding="async" src="${HIMG[h.k].a}" alt=""></button></div>
        <p class="small muted" style="text-align:center">दूसरी photo में pack के पीछे की पूरी जानकारी है — छूकर बड़ा देखें</p></div>
      <div class="hpm-d"><div class="eyebrow" style="color:${h.c[1]}">HITARTHI Health • ${esc((HCATS.find(c=>c[0]===h.cat)||[0,""])[1])}</div><h2>${esc(h.full)}</h2><p class="hp-tag">${esc(h.tag)}</p>
        <div class="hpm-meta"><span>📦 ${esc(h.size)}</span>${h.flav?`<span>😋 ${esc(h.flav)} स्वाद</span>`:""}<span>🌱 100% Vegetarian</span><span>${esc(h.unit)}</span></div>
        <div class="hpm-pr"><b class="num">${rs(h.mrp*qty)}</b><small>MRP ${rs(h.mrp)} × ${qty} • सभी टैक्स सहित</small></div>
        <div class="hpm-buy"><div class="hpm-q"><button data-hq="-1" aria-label="एक कम">−</button><span class="num">${qty}</span><button data-hq="1" aria-label="एक और">+</button></div><button class="btn btn-ghost" data-hmadd="1">🛒 Cart में डालें</button><button class="btn btn-orange" data-hmbuy="1">अभी ख़रीदें</button></div>
        <p class="hpm-del">${h.mrp*qty>=FREE_AT?"✅ इस order पर Delivery Free":`🚚 Delivery ₹${DELIVERY} • ₹${FREE_AT} या अधिक पर Free (₹${FREE_AT-h.mrp*qty} और जोड़ें)`} • 5–8 कार्य दिवस</p>
        <div class="hpm-sec"><h4>✨ मुख्य फ़ायदे</h4><ul>${h.ben.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
        <div class="hpm-sec"><h4>👥 किसके लिए</h4><p>${esc(h.who)}</p></div>
        <div class="hpm-sec"><h4>🥄 सेवन / उपयोग विधि</h4><p>${esc(h.use)}</p></div>
        <div class="hpm-sec"><h4>🌿 सामग्री</h4><p>${esc(h.ing)}</p></div>
        <div class="hpm-sec"><h4>⚠️ सावधानियाँ</h4><p>${esc(h.care)}</p></div>
        <div class="hpm-sec"><a class="btn btn-wa btn-sm" target="_blank" rel="noopener" href="https://wa.me/${WA}?text=${encodeURIComponent("Namaste HITARTHI, mujhe "+h.full+" ("+h.size+", MRP Rs "+h.mrp+") ke baare me jankari chahiye.")}">WhatsApp पर सवाल पूछें</a> <button class="btn btn-ghost btn-sm" data-hshare="1">📤 Share करें</button></div>
      </div></div>`;}
  function open(k){cur=hIdx(k);if(cur<0)return;qty=1;img="f";draw();M.hidden=false;document.body.style.overflow="hidden";track("view_item",{item:HPROD[cur].full,value:HPROD[cur].mrp});setTimeout(()=>{const x=M.querySelector(".hpm-x");x&&x.focus();},30);}
  function close(){M.hidden=true;document.body.style.overflow="";}
  function add(i,q){if(typeof cartMixBlocked==="function"&&cartMixBlocked(true))return false;const ex=cart.find(c=>c.t==="h"&&c.i===i);if(ex)ex.q+=q;else cart.push({t:"h",i,q});saveCart();cartCount();track("add_to_cart",{item:HPROD[i].full,value:HPROD[i].mrp*q});return true;}
  M.addEventListener("click",e=>{if(e.target===M||e.target.closest(".hpm-x")){close();return;}
    const iq=e.target.closest("[data-himg]");if(iq){img=iq.dataset.himg;draw();return;}
    const q=e.target.closest("[data-hq]");if(q){qty=Math.max(1,Math.min(20,qty+ +q.dataset.hq));draw();return;}
    if(e.target.closest("[data-hmadd]")){add(cur,qty);toast("Cart में जोड़ा गया: "+HPROD[cur].n+" × "+qty);close();return;}
    if(e.target.closest("[data-hmbuy]")){add(cur,qty);close();openCart();return;}
    if(e.target.closest("[data-hshare]")){const u=location.href.split("#")[0].split("?")[0]+(typeof getRef==="function"&&getRef()?"?ref="+getRef():"")+"#health";const t=HPROD[cur].full+" — MRP "+rs(HPROD[cur].mrp)+" | HITARTHI Health Store: "+u;
      if(navigator.share)navigator.share({title:HPROD[cur].full,text:t}).catch(()=>{});else window.open("https://wa.me/?text="+encodeURIComponent(t),"_blank","noopener");}
    const mi=e.target.closest(".hpm-main img");if(mi){img=img==="f"?"a":"f";draw();}});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!M.hidden)close();});
  document.addEventListener("click",e=>{
    const o=e.target.closest("[data-hopen]");if(o&&!M.contains(o)){e.preventDefault();open(o.dataset.hopen);return;}
    const a=e.target.closest("[data-hadd]");if(a){const i=hIdx(a.dataset.hadd);if(add(i,1))toast("Cart में जोड़ा गया: "+HPROD[i].n);return;}
    const b=e.target.closest("[data-hbuy]");if(b){if(add(hIdx(b.dataset.hbuy),1))openCart();return;}
    const sc=e.target.closest("[data-hscroll]");if(sc){const el=document.getElementById(sc.dataset.hscroll);el&&el.scrollIntoView({behavior:"smooth",block:"start"});}
  });
})();
/* ---------- OFFER अपने-आप: दिवाली (1 अक्टूबर – 15 नवंबर) → Winter (16 नवंबर – 31 जनवरी) → फिर बंद ----------
   तारीख़ें / नाम यहीं बदलें। Preview: ?offer=winter या ?offer=diwali */
(function(){
  const OFFERS=[
    {id:"diwali",name:"Diwali Offer",from:[10,1],to:[11,15],head:"🪔 दिवाली Offer — ज्ञान का दीप जलाइए! ✨",till:"15 नवंबर तक",rib:"🪔 दिवाली Offer: +1 E-book मुफ़्त"},
    {id:"winter",name:"Winter Offer",from:[11,16],to:[1,31],head:"❄️ Winter Learning Offer — सर्दी में सीखिए, आगे बढ़िए!",till:"31 जनवरी तक",rib:"❄️ Winter Offer: +1 E-book मुफ़्त"}
  ];
  const d=new Date(),md=(d.getMonth()+1)*100+d.getDate();
  const inR=o=>{const f=o.from[0]*100+o.from[1],t=o.to[0]*100+o.to[1];return f<=t?(md>=f&&md<=t):(md>=f||md<=t);};
  let q="";try{q=new URLSearchParams(location.search).get("offer")||(new URLSearchParams(location.search).get("diwali")==="1"?"diwali":"");}catch(e){}
  const O=OFFERS.find(o=>o.id===q)||OFFERS.find(inR)||null;
  const K="hitarthi_offer_off_"+(O?O.id:"");let off=false;try{off=localStorage.getItem(K)==="1";}catch(e){}
  window.OFFER=O; /* openPay इसी से "+ 1 E-book free" जोड़ता है */
  function apply(v){const w=O&&O.id==="winter";document.documentElement.classList.toggle("diwali",!!(v&&!w));document.documentElement.classList.toggle("winter",!!(v&&w));
    ["dwBanner"].forEach(id=>{const el=document.getElementById(id);if(el)el.hidden=!v;});["dwLights","dwDiyas"].forEach(id=>{const el=document.getElementById(id);if(el)el.hidden=!(v&&!w);});}
  const D='<span class="diya"><i class="gl"></i><i class="wick"></i><i class="fl"></i><b class="bowl"></b><i class="dots"></i></span>';
  if(O&&O.id==="winter"){$("#dwHead").textContent=O.head;$("#dwTill").textContent=O.till;$("#dwRow").innerHTML="";document.querySelectorAll("#dwBanner .dw-dl").forEach(dl=>{dl.textContent="❄️";});document.querySelectorAll(".dw-rib").forEach(r=>{r.textContent=O.rib;});}
  else if(O){$("#dwDiyas").innerHTML=D+D+D;$("#dwRow").innerHTML=D.repeat(9);$("#dwTill").textContent=O.till;document.querySelectorAll("#dwBanner .dw-dl").forEach(dl=>{dl.innerHTML=D;});document.querySelectorAll(".dw-rib").forEach(r=>{if(!r.querySelector(".diya"))r.insertAdjacentHTML("afterbegin",D);});}
  let closed3=false;try{closed3=Date.now()-(+localStorage.getItem("hb_dw_closed")||0)<3*864e5;}catch(e){}
  apply(!!O&&!off&&!closed3);
  $("#dwOff").onclick=()=>{try{localStorage.setItem(K,"1");}catch(e){}apply(false);window.OFFER=null;toast("Offer की पट्टी हटा दी गई");};
})();
/* ---------- 🔒 Health Store password lock ---------- */
const HS_KEY="1qjxyw2";
const hsHash=v=>{let h=5381;for(const c of String(v))h=((h*33)^c.charCodeAt(0))>>>0;return h.toString(36);};
window.hsOpen=()=>{try{return sessionStorage.getItem("hs_ok")===HS_KEY;}catch(e){return !!window.__hsOk;}};
(function(){const sec=document.querySelector('section[data-page="health"]');if(!sec)return;
  const paint=()=>sec.classList.toggle("hs-open",hsOpen());paint();
  const f=document.getElementById("hslForm");if(f)f.addEventListener("submit",e=>{e.preventDefault();const p=document.getElementById("hslPin");
    if(hsHash(p.value.trim())===HS_KEY){try{sessionStorage.setItem("hs_ok",HS_KEY);}catch(e){window.__hsOk=1;}p.value="";document.getElementById("hslErr").textContent="";paint();}
    else{document.getElementById("hslErr").textContent="गलत password — दोबारा डालें";p.select();}});
})();
/* ---------- ROUTER ---------- */
const PAGES=["home","courses","books","student","library","notices","schools","track","pp","health","finance","fees","why","blog","ppt","partner","about","contact"];
function go(p,noHash){
  if(!PAGES.includes(p))p="home";try{if(!$("#drawer").hidden)closeAll();}catch(e){}
  $$("section.page").forEach(s=>s.hidden=s.dataset.page!==p);
  $$("nav.main > button, nav.main > .mm > button").forEach(b=>b.setAttribute("aria-current",b.dataset.go===p?"page":"false"));
  $("#nav").classList.remove("open");$("#menuBtn").setAttribute("aria-expanded","false");
  window.scrollTo({top:0,behavior:"instant"});
  if(!noHash){try{history.replaceState(null,"","#"+p);}catch(e){}}
}
$("#menuBtn").addEventListener("click",()=>{const o=$("#nav").classList.toggle("open");$("#menuBtn").setAttribute("aria-expanded",o);});


/* ---------- Library: 🔥 streak + 🏅 badges (इसी फ़ोन पर) + मेरे Orders ---------- */
(function(){
  const K="hb_days",KC="hb_chaps",day=d=>new Date(d.getTime()+5.5*36e5).toISOString().slice(0,10);
  const get=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d;}catch(e){return d;}},put=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}};
  function streak(){const S=new Set(get(K,[]));let n=0,d=new Date();if(!S.has(day(d)))d=new Date(d.getTime()-864e5);while(S.has(day(d))){n++;d=new Date(d.getTime()-864e5);}return n;}
  window.hbStreakHit=function(){const a=get(K,[]),t=day(new Date());if(a[a.length-1]!==t){a.push(t);put(K,a.slice(-120));}put(KC,(+get(KC,0)||0)+1);window.hbStreakShow&&hbStreakShow();};
  const BADGES=[["🌱","पहला कदम",s=>s.c>=1],["📚","5 अध्याय",s=>s.c>=5],["🔥","3 दिन लगातार",s=>s.best>=3],["⭐","7 दिन लगातार",s=>s.best>=7],["🏆","25 अध्याय",s=>s.c>=25],["👑","30 दिन लगातार",s=>s.best>=30]];
  window.hbStreakShow=function(){const box=$("#mlNotes");if(!box)return;let el=$("#mlStreak");if(!el){el=document.createElement("div");el.id="mlStreak";el.className="mls";box.prepend(el);}
    const days=get(K,[]),c=+get(KC,0)||0,cur=streak();let best=0,run=0,prev=null;days.forEach(x=>{const t=new Date(x).getTime();run=prev&&t-prev===864e5?run+1:1;best=Math.max(best,run);prev=t;});
    const st={c,best:Math.max(best,cur)};
    el.innerHTML=`<div class="mls-s"><b>🔥 ${cur}</b><span>दिन लगातार</span></div><div class="mls-s"><b>📖 ${c}</b><span>अध्याय खोले</span></div><div class="mls-b">${BADGES.map(([i,n,f])=>`<span class="${f(st)?"on":""}" title="${n}">${i}<small>${n}</small></span>`).join("")}</div><p class="mls-tip">${cur?"शाबाश! आज भी थोड़ा पढ़िए/सुनिए — streak बनी रहेगी।":"आज एक अध्याय खोलिए और अपनी streak शुरू कीजिए 🔥"}</p>`;};
  const ob=$("#mlOrders");if(ob)ob.addEventListener("click",()=>{const m=($("#mlMob")||{}).value||"",o=($("#mlOid")||{}).value||"";go("track");setTimeout(()=>{const a=$("#tkMob"),b=$("#tkId");if(a&&m)a.value=m;if(b&&/^HT/i.test(o))b.value=o.toUpperCase();if(a&&b&&a.value&&b.value){const f=$("#tkForm");f&&f.requestSubmit&&f.requestSubmit();}},250);});
})();

/* ---------- Design pass: home पर section बारी-बारी सफ़ेद/क्रीम • Diwali पट्टी याद रखे ---------- */
(function(){
  function alt(){let i=0;$$('[data-page="home"] .sec').forEach(x=>{x.classList.remove("alt");if(x.offsetParent!==null&&!x.hidden){if(i%2===1)x.classList.add("alt");i++;}});}
  window.addEventListener("load",()=>setTimeout(alt,300));
  const KEY="hb_dw_closed";
  document.addEventListener("click",e=>{if(e.target.closest(".dw-x")){try{localStorage.setItem(KEY,String(Date.now()));}catch(x){}const b=$("#dwBanner");if(b)b.hidden=true;}});
  window.addEventListener("load",()=>setTimeout(()=>{try{const t=+localStorage.getItem(KEY)||0;if(Date.now()-t<3*864e5){const b=$("#dwBanner");if(b)b.hidden=true;}}catch(x){}},50));
})();

/* ===================== छात्र: Student ID कार्ड • Batch • Refer • Homework • सूचना • Watch log ===================== */
(function(){
  const tok=()=>{try{const v=JSON.parse(localStorage.getItem("ml_tok")||"null");return v&&v.t||"";}catch(e){return "";}};
  window.hbWatch=function(key,title,type,mins){const t=tok();if(!t||!HB_API)return;hbCall("watch",{token:t,key,title,type,mins}).catch(()=>{});};
  const ntItem=n=>`<article class="nt${n.pin?" pin":""}"><div class="nt-h">${n.pin?'<span class="nt-pin">📌 ज़रूरी</span>':""}<b>${esc(n.title)}</b><small>${esc(n.date||"")}${n.to&&n.to!=="सब"?" • "+esc(n.to):""}</small></div>${n.text?`<p>${esc(n.text).replace(/\n/g,"<br>")}</p>`:""}${n.link?`<a class="btn btn-ghost btn-sm" href="${esc(n.link)}" target="_blank" rel="noopener">खोलें ↗</a>`:""}</article>`;
  let NT=[];
  async function loadNotices(){if(!HB_API)return [];try{const r=await hbCall("notices",tok()?{token:tok()}:{});NT=r&&r.ok?r.notices||[]:[];}catch(e){NT=[];}
    const seen=+(localStorage.getItem("hb_nt_seen")||0),nw=NT.filter(n=>Date.parse(n.date||0)>seen).length,b=$("#ntCount");if(b){b.textContent=nw>9?"9+":nw;b.hidden=!nw;}
    const L=$("#ntList");if(L)L.innerHTML=NT.length?NT.map(ntItem).join(""):'<div class="empty">अभी कोई सूचना नहीं है।</div>';return NT;}
  window.addEventListener("load",()=>setTimeout(loadNotices,1200));hbOnFresh("notices",()=>loadNotices());
  const nb=$("#ntBtn");if(nb)nb.addEventListener("click",()=>{try{localStorage.setItem("hb_nt_seen",String(Date.now()));}catch(e){}const b=$("#ntCount");if(b)b.hidden=true;loadNotices();});
  window.hbMeShow=async function(){const box=$("#mlNotes");if(!box||!tok()||!HB_API)return;if(hbMeShow._t&&Date.now()-hbMeShow._t<20000&&hbMeShow._k===tok())return;hbMeShow._t=Date.now();hbMeShow._k=tok();let el=$("#mlMe");if(!el){el=document.createElement("div");el.id="mlMe";el.className="mlme";const st=$("#mlStreak");st?st.after(el):box.prepend(el);}
    let me=null,hw=null;try{[me,hw]=await Promise.all([hbCall("me",{token:tok()}),hbCall("hw",{token:tok()})]);}catch(e){}
    await loadNotices();const s=me&&me.ok&&me.student;let h="";
    if(s){const bi=s.batchInfo;const link=location.origin+location.pathname+"?code="+encodeURIComponent(s.id)+"#courses";
      h+=`<div class="mlme-id"><div><small>Student ID</small><b class="num">${esc(s.id)}</b></div>${s.batch?`<div><small>Batch</small><b>${esc(s.batch)}</b></div>`:""}${bi?`<div><small>Class</small><b>${esc([bi.days,bi.time].filter(Boolean).join(" • "))||"—"}</b>${bi.teacher?`<span>Teacher: ${esc(bi.teacher)}</span>`:""}</div>`:""}${bi&&bi.group?`<a class="btn btn-wa btn-sm" href="${esc(bi.group)}" target="_blank" rel="noopener">Batch का WhatsApp group</a>`:""}</div>
      <div class="mlme-ref"><b>🎁 दोस्त को जोड़िए</b><span>अपना code <b class="num">${esc(s.id)}</b> दोस्त को दें — उसे <b>${s.refPct}% छूट</b> मिलेगी, और आपको HITARTHI की ओर से इनाम।${s.refs?` अब तक <b>${s.refs}</b> दोस्त जुड़े।`:""}</span><a class="btn btn-gold btn-sm" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent("मैं HITARTHI से सीख रहा/रही हूँ — सरल हिंदी में Computer, AI, English। मेरा code "+s.id+" लगाओ, "+s.refPct+"% छूट मिलेगी: "+link)}">WhatsApp पर भेजें</a></div>`;}
    const mine=NT.slice(0,3);if(mine.length)h+=`<div class="mlme-nt"><div class="mlme-h"><b>🔔 सूचनाएँ</b><button type="button" class="lnk2i" data-go="notices">सभी देखें</button></div>${mine.map(ntItem).join("")}</div>`;
    const L=hw&&hw.ok?hw.list:[];if(L.length)h+=`<div class="mlme-hw"><div class="mlme-h"><b>📝 Homework</b><small>${L.filter(x=>!x.done).length} बाकी</small></div>${L.map(x=>`<details class="hw${x.done?" done":""}"><summary><b>${esc(x.title)}</b><small>${esc(x.to)}${x.due?" • अंतिम तारीख "+esc(x.due):""}</small><span class="hw-st">${x.done?"✅ "+esc(x.done.status):"⏳ बाकी"}</span></summary><p>${esc(x.text).replace(/\n/g,"<br>")}</p>${x.link?`<a class="lnk2i" href="${esc(x.link)}" target="_blank" rel="noopener">📎 सामग्री खोलें</a>`:""}${x.done&&x.done.note?`<p class="hw-note">Teacher: ${esc(x.done.note)}</p>`:""}${x.done?"":`<form class="hw-f" data-hw="${x.i}"><textarea rows="2" maxlength="2000" placeholder="अपना जवाब लिखें…"></textarea><input type="url" placeholder="फ़ोटो / file का Google Drive link (optional)"><button class="btn btn-gold btn-sm" type="submit">जमा करें</button><span class="hw-msg"></span></form>`}</details>`).join("")}</div>`;
    el.innerHTML=h;el.hidden=!h;};
  document.addEventListener("submit",async e=>{const f=e.target.closest(".hw-f");if(!f)return;e.preventDefault();const m=f.querySelector(".hw-msg"),b=f.querySelector("button");b.disabled=true;m.textContent="जमा हो रहा है…";
    try{const r=await hbCall("hwsubmit",{token:tok(),i:+f.dataset.hw,text:f.querySelector("textarea").value,link:f.querySelector("input").value});m.textContent=r&&r.ok?r.msg:(r&&r.err)||"नहीं हुआ";if(r&&r.ok)setTimeout(()=>window.hbMeShow(),900);}catch(x){m.textContent="Server से नहीं जुड़ पाए";}b.disabled=false;});
  /* दोस्त का refer code (?code=HS10001) — payment में अपने-आप */
  try{const c=(new URLSearchParams(location.search).get("code")||"").trim().toUpperCase();if(/^HS\d{4,7}$/.test(c))localStorage.setItem("hb_code",JSON.stringify({c,t:Date.now()}));}catch(e){}
  const pm=$("#payM");if(pm&&"MutationObserver" in window)new MutationObserver(()=>{if(pm.hidden)return;try{const v=JSON.parse(localStorage.getItem("hb_code")||"null"),inp=$("#payCpIn");if(v&&Date.now()-v.t<30*864e5&&inp&&!inp.value&&!$("#payCp").hidden)inp.value=v.c;}catch(e){}hbRzpFirst();}).observe(pm,{attributes:true,attributeFilter:["hidden"]});
  /* Payment: Razorpay मुख्य, UPI QR छोटे विकल्प में */
  function hbRzpFirst(){if(!HB.gw||$(".paym-alt"))return;const step2=$(".paym-step2"),grid=$(".paym-grid");if(!step2||!grid)return;
    const det=document.createElement("details");det.className="paym-alt";det.innerHTML='<summary>📷 दूसरे फ़ोन से QR scan करके या UPI ID से pay करना है?</summary><div class="paym-alt-b"><p class="small muted">QR scan करके pay करें, फिर UTR (Transaction ID) डालकर "Order दर्ज करें" दबाएँ।</p></div>';
    const bx=det.querySelector(".paym-alt-b");bx.appendChild(grid);[$("#payUTR")&&$("#payUTR").closest(".field"),$("#paySubmit"),$("#payDemo"),$("#payWA")].forEach(x=>{if(x)bx.appendChild(x);});
    const on=$("#payOnline");on.after(det);step2.querySelector("h4").textContent="अपनी जानकारी भरें और सुरक्षित Online Pay करें";
    const lk=$(".paym-lock");if(lk)lk.textContent="🔒 सुरक्षित Online Payment • Razorpay";on.innerHTML="💳 अभी Pay करें<small>UPI • Card • NetBanking • Wallet</small>";$(".paym-box").classList.add("rzp1");}
  window.hbRzpFirst=hbRzpFirst;window.HBX={gw:v=>{HB.gw=v;}};
})();
/* ---------- Books: Sheet ("Books Store" टैब) से ताज़ा जानकारी ---------- */
function hbApplyBooks(r){if(!r||!r.ok||!Array.isArray(r.books)||!r.books.length)return;
  const old=localStorage.getItem("hb_books");const nw=JSON.stringify({v:1,list:r.books});if(old===nw)return;try{localStorage.setItem("hb_books",nw);}catch(e){}
  hbMergeBooks(r.books);try{renderBooks();}catch(e){}try{document.dispatchEvent(new Event("hb:books"));}catch(e){}}
(async()=>{if(!HB_API)return;try{hbApplyBooks(await hbCall("bookslist",{}));}catch(e){}})();hbOnFresh("bookslist",hbApplyBooks);
/* ---------- सहमति (18+ या माता-पिता की सहमति) — DPDP Act ---------- */
(function(){
  const need=(box,msgEl,e)=>{if(box&&!box.checked){e.preventDefault();e.stopImmediatePropagation();const t="कृपया ऊपर वाला सहमति का box ✓ करें (18+ या माता-पिता की सहमति)।";if(msgEl){msgEl.textContent=t;msgEl.className="mc-msg err";}else toast(t);box.closest(".consent").classList.add("shake");setTimeout(()=>box.closest(".consent").classList.remove("shake"),600);box.focus();return true;}return false;};
  const lf=$("#leadF");if(lf)lf.addEventListener("submit",e=>need($("#leadOk"),$("#leadMsg"),e),true);
  ["#payOnline","#paySubmit","#payWA"].forEach(id=>{const b=$(id);if(b)b.addEventListener("click",e=>need($("#payConsent"),null,e),true);});
  try{const ok=localStorage.getItem("hb_consent")==="1";["#leadOk","#payConsent"].forEach(id=>{const c=$(id);if(c){if(ok)c.checked=true;c.addEventListener("change",()=>{try{localStorage.setItem("hb_consent",c.checked?"1":"0");}catch(x){}});}});}catch(x){}
})();
/* ---------- सीधा course link: index.html?course=Advanced%20Excel ---------- */
(function(){const qc=new URLSearchParams(location.search).get("course");if(!qc)return;const run=()=>{go("courses");setTimeout(()=>{const b=document.createElement("button");b.dataset.cdetail=qc;b.hidden=true;document.body.appendChild(b);b.click();b.remove();},350);};document.readyState==="complete"?run():window.addEventListener("load",run);})();
/* ---------- PWA (फ़ोन में App की तरह) ---------- */
if("serviceWorker" in navigator&&location.protocol==="https:"){window.addEventListener("load",()=>{navigator.serviceWorker.register("sw.js").catch(()=>{});});}
try{if(matchMedia("(display-mode: standalone)").matches||navigator.standalone===true)document.documentElement.classList.add("is-app");}catch(e){}
/* 📲 "App Install करें" बटन (menu + footer) — हमेशा काम करे */
document.addEventListener("click",async e=>{const b=e.target.closest("[data-install]");if(!b)return;e.preventDefault();
  const nav=document.getElementById("nav");nav&&nav.classList.remove("open");
  const SA=matchMedia("(display-mode: standalone)").matches||navigator.standalone===true,ua=navigator.userAgent;
  if(SA){window.toast?toast("✓ HITARTHI App पहले से install है — आप उसी में हैं"):0;return;}
  if(window.__hbDP){const d=window.__hbDP;d.prompt();try{const r=await d.userChoice;window.track&&track("pwa_install",{outcome:r.outcome,from:"button"});}catch(x){}window.__hbDP=null;return;}
  const inApp=/FBAN|FBAV|Instagram|WhatsApp|; wv\)|Line\//i.test(ua),ios=/iphone|ipad|ipod/i.test(ua);
  const msg=inApp?'यह page WhatsApp / Instagram के अंदर खुला है — वहाँ से install नहीं होता।<br>ऊपर <b>⋮</b> (तीन बिंदु) दबाएँ → <b>"Chrome में खोलें"</b> (iPhone पर Safari), फिर यही बटन दबाएँ।'
    :ios?'iPhone पर: नीचे <b>Share ⬆️</b> बटन दबाएँ → नीचे scroll करें → <b>"Add to Home Screen"</b> → <b>Add</b>।'
    :'Chrome में ऊपर दाएँ <b>⋮</b> (तीन बिंदु) दबाएँ → <b>"App install करें"</b> या <b>"Add to Home screen"</b> → <b>Install</b>।<br><small>Install होते ही HITARTHI का icon आपकी home screen पर आ जाएगा।</small>';
  document.querySelectorAll(".inst-bar").forEach(x=>x.remove());const h=document.createElement("div");h.className="inst-bar on";h.setAttribute("role","dialog");
  h.innerHTML='<img loading="lazy" decoding="async" src="img/icon-192.png" alt="" width="40" height="40"><div><b>HITARTHI App ऐसे install करें</b><small>'+msg+'</small></div><button type="button" class="inst-x" aria-label="बंद करें">✕</button>';
  h.querySelector(".inst-x").onclick=()=>h.remove();document.body.appendChild(h);});
/* 📲 App install (PWA) — Android: एक tap में install • iPhone: Share → Add to Home Screen */
(function(){const SA=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===true;if(SA())return;
  const K="hb_inst_x";let off=false;try{off=Date.now()-(+localStorage.getItem(K)||0)<7*864e5;}catch(e){}
  const ios=/iphone|ipad|ipod/i.test(navigator.userAgent)&&!/crios|fxios|edgios/i.test(navigator.userAgent);let dp=null,shown=false;
  function bar(){if(shown||off)return;shown=true;const b=document.createElement("div");b.className="inst-bar";b.setAttribute("role","dialog");b.setAttribute("aria-label","HITARTHI App install");
    b.innerHTML='<img loading="lazy" decoding="async" src="img/icon-192.png" alt="" width="40" height="40"><div><b>HITARTHI App install करें</b><small>'+(ios?'नीचे <b>Share ⬆️</b> दबाएँ → <b>"Add to Home Screen"</b>':'Library, Courses और Books — एक tap में, बिना Play Store')+'</small></div>'+(ios?'':'<button type="button" class="btn btn-orange btn-sm" data-inst="go">Install</button>')+'<button type="button" class="inst-x" data-inst="x" aria-label="बंद करें">✕</button>';
    document.body.appendChild(b);requestAnimationFrame(()=>b.classList.add("on"));
    b.addEventListener("click",async e=>{const k=e.target.closest("[data-inst]");if(!k)return;
      if(k.dataset.inst==="go"&&dp){dp.prompt();try{const r=await dp.userChoice;window.track&&track("pwa_install",{outcome:r.outcome});}catch(x){}dp=null;}
      else{try{localStorage.setItem(K,String(Date.now()));}catch(x){}}
      b.classList.remove("on");setTimeout(()=>b.remove(),300);});}
  const later=()=>{const go=()=>{removeEventListener("scroll",go);setTimeout(bar,1200);};addEventListener("scroll",go,{passive:true});setTimeout(bar,15000);};
  addEventListener("beforeinstallprompt",e=>{e.preventDefault();dp=e;window.__hbDP=e;later();});
  addEventListener("appinstalled",()=>{const b=document.querySelector(".inst-bar");b&&b.remove();window.track&&track("pwa_installed",{});});
  if(ios)later();})();
/* (sample-fee notice हटाया गया) */
const h=(location.hash||"").slice(1);
go(PAGES.includes(h)?h:"home",true);
window.addEventListener("hashchange",()=>go(location.hash.slice(1),true));
})();
