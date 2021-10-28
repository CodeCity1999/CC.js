// CC
// Code City   V 0.0.0.3 
// Built in 2021
// Writer Mohammad rajabi 1999/june/27


function clickIE4() { if (event.button == 2) { return false; } }
function clickNS4(e) 
{
    if (document.layers || document.getElementById && !document.all) 
    {
        if (e.which == 2 || e.which == 3) { return false; }
    }
}
if (document.layers) 
{
    document.captureEvents(Event.MOUSEDOWN); document.onmousedown = clickNS4;
}
else if (document.all && !document.getElementById) { document.onmousedown = clickIE4; }

var C =
{
    C: function (el)
    {
        el = document.querySelector(el);
        return {
            parent: function (){ return el.parentNode; },
            html: function (html = ""){ el.innerHTML = html; },
            text: function (text = ""){ el.innerText = text; },
            hide: function (time = 0)
            {
                var _time = time / 100;
                var i = 1;
                if (time > 0) 
                {
                    var t1 = setInterval(() => {
                        el.style.opacity = i;
                        i -= 0.01;
                        if (i == 0) 
                        {
                            el.style.display = "none";
                            clearInterval(t1);
                        }
                    }, _time);
                } else { el.style.display = "none"; }
            },
            show: function (time = 0)
            {
                el.style.display = "inline-block";
                var _time = time / 100;
                var i = 0;
                if (time > 0) 
                {
                    el.style.opacity = 0;
                    if (time > 0) 
                    {
                        var t1 = setInterval(() => {
                            el.style.opacity = i;
                            i += 0.01;
                            if (i >= 1)
                            {
                                el.style.opacity = 1;
                                clearInterval(t1);
                            }
                        }, _time);
                    }
                } else { el.style.opacity = 1; }
            },

            click: function (code) { el.onclick = code; },
            mousedown: function (code) { el.onmousedown = code; },
            mouseup: function (code) { el.onmouseup = code; },
            mouseenter: function (code) { el.onmouseenter = code; },
            mousemove: function (code) { el.onmousemove = code; },
            mouseout: function (code) { el.onmouseout = code; },
            addClass: function (addClass = "") { el.classList.add(addClass); },
            removeClass: function (removeClass = "") { el.classList.remove(removeClass); },
            getStyle: function (style) { return getComputedStyle(el).getPropertyValue(style); },
            setstyle: function (setstyle = "", success = true) 
            {
                if (success) { el.setAttribute("style", setstyle); } 
                else { let getStyle = el.getAttribute("style"); el.setAttribute("style", getStyle + "; " + setstyle); }
            },
            setAttr: function (nameAttr, setAttr)
            {
                let getAttr = el.getAttribute(nameAttr);
                if (getAttr == null) { el.setAttribute(nameAttr, setAttr); } 
                else { el.setAttribute(nameAttr, getAttr + " " + setAttr); }
            },
            getAttr: function (nameAttr) { return el.getAttribute(nameAttr); },
            removeAttr: function (nameAttr) { return el.removeAttribute(nameAttr); }
        }
    },
    text: function (el)
    {
        C.C(el).html("<a class='text'></a><a class='l'></a>");
        return {
            type: function (t, time = 150, time_start = 0)
            {
                var text = "";
                var i = 0;
                setTimeout(() => {
                    var t1 = setInterval(() => {
                        text += t[i];
                        C.C(el + " .text").html(text);
                        i++;
                        if (i >= t.length) { clearInterval(t1); }
                    }, time);
                }, time_start);
                return (t.length * time) + time_start;
            },
            typeBlink: function (t, time = 150, time_start = 0, time_end = false){
                C.C(el + " .text").html(t);
                var i = 0;
                var sh = 0;
                setTimeout(() => {
                    var t1 = setInterval(() => {
                        if (sh == 0) { C.C(el).hide(0); sh = 1; } 
                        else if (sh == 1) { C.C(el).show(0); sh = 0; }
                    }, time);
                    if (time_end) {
                        var t2 = setInterval(() => {
                            i++; if (i >= time_end) { clearInterval(t1); clearInterval(t2); }
                        }, 1);
                    }
                }, time_start);
            },
            typeShow: function (t, time_show = 200, time_start_show = 100, time_start = 0){
                var text = "";
                var i = 0;
                var g = 0;
                for (var l = 0; l < t.length; l++) 
                {
                    if (t[l] != " ")
                    {
                        text += "<a class='opacity_0 textShow" + g + "'>" + t[l] + "</a>"; g++;
                    } 
                    else { text += "<a> </a>"; }
                }
                C.C(el + " .text").html(text);
                setTimeout(() => {
                    var t1 = setInterval(() => {
                        C.C(el + " .textShow" + i).show(time_show); i++;
                        if (i >= g) { clearInterval(t1); }
                    }, time_start_show);
                }, time_start);
                return (t.length * (time_show + time_start_show)) + time_start;
            },
            cursor: function (time_out = 0, time = 250){
                var l = document.querySelector(el + " .l");
                var ll = 0;
                if (time_out > 0) 
                {
                    var t1 = setInterval(() => {
                        if (ll == 0) { l.innerHTML = ""; ll = 1; } 
                        else if (ll == 1) { l.innerHTML = "|"; ll = 0; }
                    }, time);
                    var t2 =setTimeout(() => {
                        l.innerHTML = "";clearInterval(t1);clearTimeout(t2);
                    }, time_out);
                } 
                else if (time_out < 0) { l.innerHTML = ""; } 
                else {
                    setInterval(() => {
                        if (ll == 0) { l.innerHTML = "";ll = 1; } 
                        else if (ll == 1) {l.innerHTML = "|";ll = 0; }
                    }, time);
                }
            }
        }
    },
    clipboard: 
    { 
        copy: function (text) { navigator.clipboard.writeText(text); }
    },
    bodyStatus:
    {
        rightClick: function (status)
        {
            if (status) { document.oncontextmenu = new Function("return true"); } 
            else { document.oncontextmenu = new Function("return false"); }
        },
        cut: function (status){
            if (status) { document.body.oncut = new Function("return true"); } 
            else { document.body.oncut = new Function("return false"); }
        },
        copy: function (status){
            if (status) { document.body.oncopy = new Function("return true"); } 
            else { document.body.oncopy = new Function("return false"); }
        },
        pase: function (status){
            if (status) { document.body.onpaste = new Function("return true"); } 
            else { document.body.onpaste = new Function("return false"); }
        },
        select: function (status){
            if (status) { document.onselectstart = new Function("return true"); } 
            else { document.onselectstart = new Function("return false"); }
        }
    },
    win:
    {
        isOnline: function (){ if(navigator.onLine){ return true; } else{ return false } },
        refresh: function (){ location.reload(true); },
        back: function () { history.back(); },
        W: function (select)
        {
            if (select == "window") { return window.innerWidth; } 
            else if (select == "body") { return document.body.clientWidth; } 
            else { return document.querySelector(select).clientWidth; } 
        },
        H: function (select)
        {
            if (select == "window") {return window.innerHeight; } 
            else if (select == "body") { return document.body.clientHeight; } 
            else { return document.querySelector(select).clientHeight; } 
        },
        style:
        {
            Alert:
            {
                back:
                {
                    color: "white",
                    opacity: 0.7
                },
                window_back_color: "#444",
                border_color: "cornflowerblue",
                text_color: "white",
                btn_color: "white",
                btn_back_color: "cornflowerblue",
                width: "300px",
                max_height: "300px",
                btn_text: "تایید"
            },
            AlertIn:
            {
                back:
                {
                    color: "white",
                    opacity: 0.7
                },
                window_back_color: "#444",
                border_color: "cornflowerblue",
                text_color: "white",
                btn_color: "white",
                btn_back_color: "cornflowerblue",
                width: "300px",
                max_height: "300px",
                btn_text_ok: "تایید",
                btn_text_cancel: "لغو",
                btn_cancel_disabled: false
            }
        },
        Alert: function (id, text = "")
        {
            if (text != "") 
            {
                let close = "C.win.Alert('" + id + "')";
                let html = "";
                html += "<div class='back' style='background-color: " + C.win.style.Alert.back.color + ";opacity:" + C.win.style.Alert.back.opacity + "'></div>";
                html += "<div id='" + id + "' class='all window_alert' style='background-color: " + C.win.style.Alert.window_back_color + "; border-color: " + C.win.style.Alert.border_color + " '>";
                html += "<p dir='auto' style='color: " + C.win.style.Alert.text_color + "; width:  " + C.win.style.Alert.width + "; max-height:  " + C.win.style.Alert.max_height + " '>" + text + "</p>";
                html += '<button onclick="'+ close +'" style="color: ' + C.win.style.Alert.btn_color + '; background-color: ' + C.win.style.Alert.btn_back_color + '">' + C.win.style.Alert.btn_text + '</button>';
                html += "</div>";
                document.write(html);
            }
            else { document.querySelector(".back").remove(); document.getElementById(id).remove(); }
        },
        AlertInOut: [],
        AlertIn: function (id = "", text = "", ok = "", cancel = "")
        {
            if (text != "")
            {
                let html = "";
                let out = "";
                html += "<div class='back' style='background-color: " + C.win.style.AlertIn.back.color + ";opacity:" + C.win.style.AlertIn.back.opacity + "'></div>";
                html += "<div id='" + id + "' class='all window_alert' style='background-color: " + C.win.style.AlertIn.window_back_color + "; border-color: " + C.win.style.AlertIn.border_color + " '>";
                text = text.split("<in>");
                for (let i = 0; i < text.length; i++)
                {
                    out += text[i];
                    if (i < text.length - 1)
                    {
                        out += "<input type='text' id='w_alertIn_in" + i + "'>";
                    }
                }
                let close = "C.win.Alert('" + id + "');";
                let send = "C.win.AlertIn('" + id + "').ok(" + (text.length - 1) + ");";
                html += "<p dir='auto' style='color: " + C.win.style.AlertIn.text_color + "; width:  " + C.win.style.AlertIn.width + "; max-height:  " + C.win.style.AlertIn.max_height + " '>" + out + "</p>";
                html += '<button onclick="' + send + ok + '" style="color: ' + C.win.style.AlertIn.btn_color + '; background-color: ' + C.win.style.AlertIn.btn_back_color + '; margin-right: 5px;">' + C.win.style.AlertIn.btn_text_ok + '</button>';
                if (C.win.style.AlertIn.btn_cancel_disabled)
                { html += '<button onclick="'+ cancel + ';' + close +'" style="color: ' + C.win.style.AlertIn.btn_color + '; background-color: #777" disabled>' + C.win.style.AlertIn.btn_text_cancel + '</button>'; }
                else { html += '<button onclick="'+ cancel + ';' + close +'" style="color: ' + C.win.style.AlertIn.btn_color + '; background-color: ' + C.win.style.AlertIn.btn_back_color + '">' + C.win.style.AlertIn.btn_text_cancel + '</button>'; }
                html += "</div>";
                document.write(html);
            }
            else 
            {
                return {
                    ok: function (index)
                    {
                        if (id != "") 
                        {
                            C.win.AlertInOut = [];
                            for (let i = 0; i < index; i++)
                            { C.win.AlertInOut[i] = document.querySelector("#w_alertIn_in" + i).value; }
                            C.win.Alert(id);
                        }
                    }                    
                }
            }
        }
    },
    number:
    {
        random: function (sta, sto){ return Math.floor(Math.random() * ((sto - sta) + 1) + sta); },
        character: function (character = 6, A = null)
        {
            var text = "";
            if (A == null) 
            {
                A = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789*/%@_-.";     
                var x = A.length - 1;
                for (let i = 0; i < character; i++) { text += A[C.number.random(0, x)]; }
            } 
            else 
            {
                var x = A.length - 1;
                for (let i = 0; i < character; i++) { text += A[C.number.random(0, x)]; }
            }
            return text;
        }
    },
    key:
    {
        click: function (nameKey, ifTrue = function () { return true; }, ifFalse = function () { return false; })
        {
            document.addEventListener('keyup', function(e){
                e.preventDefault(); if(e.key == nameKey){ ifTrue(); } else { ifFalse(); };
            });
        }
    },
    date: new class _date{
        constructor(){
            var faDateYear = new Intl.DateTimeFormat("fa", { year: "numeric" }).format;

            var faDateMonth = new Intl.DateTimeFormat("fa", { month: "numeric" }).format;

            var faDateDay = new Intl.DateTimeFormat("fa", { day: "numeric" }).format;

            var faDateHour = new Intl.DateTimeFormat("fa", { hour: "numeric", }).format;

            var faDateMinute = new Intl.DateTimeFormat("fa", { minute: "numeric" }).format;

            var faDateSecond = new Intl.DateTimeFormat("fa", { second: "numeric" }).format;
            
            var now = Date.now();
            var x = "";
            var v1 = faDateHour(now);
            var v2 = faDateMinute(now);
            var v3 = faDateSecond(now);
            var v4 = faDateYear(now);
            var v5 = faDateMonth(now);
            var v6 = faDateDay(now);
            const persian = [ "۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹" ];
    
            x = "";
            for (var i = 0; i < v1.length; i++) 
            { for (var l = 0; l <= 9; l++) { if (v1[i] == persian[l]) { x += l; } } }
            this.Hour = parseInt(x);
            x = "";
            for (var i = 0; i < v2.length; i++) 
            { for (var l = 0; l <= 9; l++) { if (v2[i] == persian[l]) { x += l; } } }
            this.Minute = parseInt(x);
            x = "";
            for (var i = 0; i < v3.length; i++) 
            { for (var l = 0; l <= 9; l++) { if (v3[i] == persian[l]) { x += l; } } }
            this.Second = parseInt(x);
            x = "";
            for (var i = 0; i < v4.length; i++) 
            { for (var l = 0; l <= 9; l++) { if (v4[i] == persian[l]) { x += l; } } }
            this.Year = parseInt(x);
            x = "";
            for (var i = 0; i < v5.length; i++) 
            { for (var l = 0; l <= 9; l++) { if (v5[i] == persian[l]) { x += l; } } }
            this.Month = parseInt(x);
            x = "";
            for (var i = 0; i < v6.length; i++) 
            { for (var l = 0; l <= 9; l++) { if (v6[i] == persian[l]) { x += l; } } }
            this.Day = parseInt(x);
        }
    },
    loading:
    {
        style:
        {
            back:
            {
                color: "white",
                opacity: 0.7
            },
            ball: 
            {
                color: "rgb(34, 184, 243)"
            }
        },
        ball: function (id)
        {
            let html = "<div class='back'></div><div id='" + id + "' class='all loading ball'><i></i><a></a></div>";
            document.write(html);
            C.C(".back").setstyle("background-color: " + C.loading.style.back.color + ";opacity:" + C.loading.style.back.opacity);
            C.C("#" + id + " i").setstyle("background-color: " + C.loading.style.ball.color);
        },
        stop: function (id)
        {
            document.querySelector(".back").remove();
            document.querySelector("#" + id).remove();
        }
    },
    getMouse: {X: 0, Y: 0}
}






var isIE = document.all?true:false;
if (!isIE) document.captureEvents(Event.MOUSEMOVE);
document.onmousemove = getMousePosition;
function getMousePosition(mp) 
{
    if (!isIE) 
    {
        C.getMouse.X = mp.pageX;
        C.getMouse.Y = mp.pageY;
    }
    
    return true;
}










// | CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... |
// | ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS |
// | CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... |
// | ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS |
// | CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... |
var css_style = ".all,.all *{margin:0;padding:0;outline:none;border:none;background-color:rgba(#fff,0);font-family:Calibri;z-index:99999999999}.back{display:inline-block;width:100%;height:100vh;position:fixed;left:0;top:0;z-index:9999999999;}";
var css_window = ".window_alert{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);display:inline-block;border:3px solid cornflowerblue;border-radius:5px;padding:10px;-webkit-box-shadow:0 0 7px 2px rgba(0,0,0,0.4);box-shadow:0 0 7px 2px rgba(0,0,0,0.4);z-index:99999999999}.window_alert p{overflow:auto;overflow-wrap:break-word;line-height:1.7em}.window_alert p input{background-color:slategray;border:1px solid tan;border-radius:50px;color:white;padding:2px 8px 0px 8px}.window_alert button{padding:2px 15px;border-radius:3px;margin:10px 0 0 0;cursor:pointer}div{padding:0}";
var css_loading = ".loading{position:fixed;display:inline-block;top:50%;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.ball i{display:inline-block;background-color:#22b8f3;position:absolute;width:100px;height:100px;bottom:0;left:50%;-webkit-transform:translate(-50%, 0);transform:translate(-50%, 0);border-radius:50%;-webkit-animation-name:ball;animation-name:ball;-webkit-animation-duration:0.7s;animation-duration:0.7s;animation-direction:alternate-reverse;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.ball a{display:inline-block;width:50px;-webkit-box-shadow:0 0 30px 6px;box-shadow:0 0 30px 6px;opacity:0;position:absolute;bottom:0;left:50%;-webkit-transform:translate(-50%, 0);transform:translate(-50%, 0);-webkit-animation-name:ball_shade;animation-name:ball_shade;-webkit-animation-duration:0.7s;animation-duration:0.7s;animation-direction:alternate-reverse;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes ball{0%{bottom:0;height:75px;-webkit-box-shadow:inset -10px -13px 20px -15px #000;box-shadow:inset -10px -13px 20px -15px #000}50%{height:100px}100%{bottom:200px;-webkit-box-shadow:inset -10px -5px 20px -20px #000;box-shadow:inset -10px -5px 20px -20px #000}}@keyframes ball{0%{bottom:0;height:75px;-webkit-box-shadow:inset -10px -13px 20px -15px #000;box-shadow:inset -10px -13px 20px -15px #000}50%{height:100px}100%{bottom:200px;-webkit-box-shadow:inset -10px -5px 20px -20px #000;box-shadow:inset -10px -5px 20px -20px #000}}@-webkit-keyframes ball_shade{0%{opacity:1;left:0}100%{opacity:0.2;bottom:50px;left:50px}}@keyframes ball_shade{0%{opacity:1;left:0}100%{opacity:0.2;bottom:50px;left:50px}}";
var head = document.querySelector("head").innerHTML;
head += "<style>" + css_style + css_window + css_loading + "</style>";
document.querySelector("head").innerHTML = head;






// | SETING ...... SETING ...... SETING ...... SETING ...... SETING ...... SETING ...... SETING ...... SETING | 
// | ...... SETING ...... SETING ...... SETING ...... SETING ...... SETING ...... SETING ...... SETING ...... |
// | SETING ...... SETING ...... SETING ...... SETING ...... SETING ...... SETING ...... SETING ...... SETING | 
// | ...... SETING ...... SETING ...... SETING ...... SETING ...... SETING ...... SETING ...... SETING ...... |
// | SETING ...... SETING ...... SETING ...... SETING ...... SETING ...... SETING ...... SETING ...... SETING |
// ----> BodyStatus
/*1*/C.bodyStatus.cut(true);
/*2*/C.bodyStatus.copy(true);
/*3*/C.bodyStatus.pase(true);
/*4*/C.bodyStatus.rightClick(true);
/*5*/C.bodyStatus.select(false);
// BodyStatus <----

// ----> ALERT
/*01*/C.win.style.Alert.back.color = "white";
/*01*/C.win.style.Alert.back.opacity = 0.9;
/*02*/C.win.style.Alert.window_back_color = "#444";
/*03*/C.win.style.Alert.border_color = "cornflowerblue";
/*04*/C.win.style.Alert.text_color = "white";
/*05*/C.win.style.Alert.btn_color = "white";
/*06*/C.win.style.Alert.btn_back_color = "cornflowerblue";
/*07*/C.win.style.Alert.width = "300px";
/*08*/C.win.style.Alert.max_height = "300px";
/*09*/C.win.style.Alert.btn_text = "تایید";
// ALERT <----

// ----> ALERT IN
/*01*/C.win.style.AlertIn.back.color = "white";
/*01*/C.win.style.AlertIn.back.opacity = 0.9;
/*02*/C.win.style.AlertIn.window_back_color = "#444";
/*03*/C.win.style.AlertIn.border_color = "cornflowerblue";
/*04*/C.win.style.AlertIn.text_color = "white";
/*05*/C.win.style.AlertIn.btn_color = "white";
/*06*/C.win.style.AlertIn.btn_back_color = "cornflowerblue";
/*07*/C.win.style.AlertIn.width = "300px";
/*08*/C.win.style.AlertIn.max_height = "300px";
/*09*/C.win.style.AlertIn.btn_text_ok = "تایید";
/*10*/C.win.style.AlertIn.btn_text_cancel = "لغو";
/*11*/C.win.style.AlertIn.btn_cancel_disabled = false;
// ALERT IN <----

// ----> LOADING
/*01*/C.loading.style.back.color = "white";
/*01*/C.loading.style.back.opacity = 0.9;
/*01*/C.loading.style.ball.color = "rgb(34, 184, 243)";
// LOADING <----

