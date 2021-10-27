// CC
// Code City   V 0.0.0.3 
// Built in 2021
// Writer Mohammad rajabi 1999/june/27

class CodeCity{
    constructor($ = "") {
        this.el = $;
    }

    parent(){ return document.querySelector(this.el).parentNode; }
    html(html = ""){ document.querySelector(this.el).innerHTML = html; }
    text(text = ""){ document.querySelector(this.el).innerText = text; }


    hide(time = 0){
        var _time = time / 100;
        var i = 1;
        if (time > 0) {
            var t1 = setInterval(() => {
                document.querySelector(this.el).style.opacity = i;
                i -= 0.01;
                if (i == 0) {
                    document.querySelector(this.el).style.display = "none";
                    clearInterval(t1);
                }
            }, _time);
        } else { document.querySelector(this.el).style.display = "none"; }
    }

    show(time = 0){
        document.querySelector(this.el).style.display = "inline-block";
        var _time = time / 100;
        var i = 0;
        if (time > 0) {
            document.querySelector(this.el).style.opacity = 0;
            if (time > 0) {
                var t1 = setInterval(() => {
                    document.querySelector(this.el).style.opacity = i;
                    i += 0.01;
                    if (i >= 1) {
                        document.querySelector(this.el).style.opacity = 1;
                        clearInterval(t1);
                    }
                }, _time);
            }
        } else { document.querySelector(this.el).style.opacity = 1; }
    }

    click(code) { document.querySelector(this.el).onclick = code; }
    mousedown(code) { document.querySelector(this.el).onmousedown = code; }
    mouseup(code) { document.querySelector(this.el).onmouseup = code; }
    mouseenter(code) { document.querySelector(this.el).onmouseenter = code; }
    mousemove(code) { document.querySelector(this.el).onmousemove = code; }
    mouseout(code) { document.querySelector(this.el).onmouseout = code; }
    addClass(addClass = "") { document.querySelector(this.el).classList.add(addClass); }
    removeClass(removeClass = "") { document.querySelector(this.el).classList.remove(removeClass); }
    getStyle(style) { return getComputedStyle(document.querySelector(this.el)).getPropertyValue(style); }
    setstyle(setstyle = "", success = true) {
        if (success) {
            document.querySelector(this.el).setAttribute("style", setstyle);
        } else {
            let getStyle = document.querySelector(this.el).getAttribute("style");
            document.querySelector(this.el).setAttribute("style", getStyle + "; " + setstyle);
        }
    }
    setAttr(nameAttr, setAttr) {
        let getAttr = document.querySelector(this.el).getAttribute(nameAttr);
        if (getAttr == null) {
            document.querySelector(this.el).setAttribute(nameAttr, setAttr);
        } else {
            document.querySelector(this.el).setAttribute(nameAttr, getAttr + " " + setAttr);
        }
    }
    getAttr(nameAttr) { return document.querySelector(this.el).getAttribute(nameAttr); }
    removeAttr(nameAttr) { return document.querySelector(this.el).removeAttribute(nameAttr); }
}


class typ
{
    constructor(element){
        this.el = element;
        document.querySelector(this.el).innerHTML = "<a class='text'></a><a class='l'></a>"
    }

    text(t, time = 150, time_start = 0){
        var text = "";
        var i = 0;
        setTimeout(() => {
            var t1 = setInterval(() => {
                text += t[i];
                document.querySelector(this.el + " .text").innerHTML = text;
                i++;
                if (i >= t.length) {
                    clearInterval(t1);
                }
            }, time);
        }, time_start);
        return (t.length * time) + time_start;
    }

    textBlink(t, time = 150, time_start = 0, time_end = false){
        document.querySelector(this.el + " .text").innerHTML = t;
        var i = 0;
        var sh = 0;
        setTimeout(() => {
            var t1 = setInterval(() => {
                if (sh == 0) {
                    $.CC(this.el).hide(0);
                    sh = 1;
                } else if (sh == 1) {
                    $.CC(this.el).show(0);
                    sh = 0;
                }
            }, time);
            if (time_end) {
                var t2 = setInterval(() => {
                    i++;
                    if (i >= time_end) {
                        clearInterval(t1);
                        clearInterval(t2);
                    }
                }, 1);
            }
        }, time_start);
        // return (t.length * time) + time_start;
    }

    textShow(t, time_show = 200, time_start_show = 100, time_start = 0){
        var text = "";
        var i = 0;
        var g = 0;
        for (var l = 0; l < t.length; l++) {
            if (t[l] != " ") {
                text += "<a class='opacity_0 textShow" + g + "'>" + t[l] + "</a>";
                g++;
            } else {
                text += "<a> </a>";
            }
        }
        document.querySelector(this.el + " .text").innerHTML = text;
        // document.querySelector(this.el + " .text").style.display = "none";
        setTimeout(() => {
            var t1 = setInterval(() => {
                $.CC(this.el + " .textShow" + i).show(time_show);
                i++;
                if (i >= g) {
                    clearInterval(t1);
                }
            }, time_start_show);
        }, time_start);
        return (t.length * (time_show + time_start_show)) + time_start;
    }

    l(time_out = 0, time = 250){
        var l = document.querySelector(this.el + " .l");
        var ll = 0;
        var t = 0;
        if (time_out > 0) {
            var t1 = setInterval(() => {
                if (ll == 0) {
                    l.innerHTML = "";
                    ll = 1;
                } else if (ll == 1) {
                    l.innerHTML = "|";
                    ll = 0;
                }
            }, time);
            var t2 =setTimeout(() => {
                l.innerHTML = "";
                clearInterval(t1);
                clearTimeout(t2);
            }, time_out);
        } else if (time_out < 0) {
            l.innerHTML = "";
        } else {
            setInterval(() => {
                if (ll == 0) {
                    l.innerHTML = "";
                    ll = 1;
                } else if (ll == 1) {
                    l.innerHTML = "|";
                    ll = 0;
                }
            }, time);
        }
    }
}
class txt
{
    constructor(){
        this.CLIPBOARD = new class cb1{
            copy(text){ navigator.clipboard.writeText(text); }
        };
        this.BodyStatus = new class cb2{
            constructor(){
                function clickIE4() {
                    if (event.button == 2) {
                        return false;
                    }
                }
                function clickNS4(e) {
                    if (document.layers || document.getElementById && !document.all) {
                        if (e.which == 2 || e.which == 3) {
                            return false;
                        }
                    }
                }
                if (document.layers) {
                    document.captureEvents(Event.MOUSEDOWN);
                    document.onmousedown = clickNS4;
                }
                else if (document.all && !document.getElementById) {
                    document.onmousedown = clickIE4;
                }
            }
            rightClick(status){
                if (status) {
                    document.oncontextmenu = new Function("return true");
                } else {
                    document.oncontextmenu = new Function("return false");
                }
            }
            cut(status){
                if (status) {
                    document.body.oncut = new Function("return true");
                } else {
                    document.body.oncut = new Function("return false");
                }
            }
            copy(status){
                if (status) {
                    document.body.oncopy = new Function("return true");
                } else {
                    document.body.oncopy = new Function("return false");
                }
            }
            pase(status){
                if (status) {
                    document.body.onpaste = new Function("return true");
                } else {
                    document.body.onpaste = new Function("return false");
                }
            }
            select(status){
                if (status) {
                    document.onselectstart = new Function("return true");
                } else {
                    document.onselectstart = new Function("return false");
                }
            }
        };
    }
    type(el) { return new typ(el); }
}


class w_alert {
    constructor() {
        this.back = "rgba(white, 0.8)";
        this.window_back_color = "#444";
        this.border_color = "cornflowerblue";
        this.text_color = "white";
        this.btn_color = "white";
        this.btn_back_color = "cornflowerblue";
        this.width = "300px";
        this.max_height = "300px";
        this.btn_text = "تایید";
    }

    text(id, text = ""){
        let close = "$.WINAlert.close(" + "'#" + id + "'" + ")";
        let html = "";
        html += "<div class='back' style='background-color: " + this.back + "'></div>";
        html += "<div id='" + id + "' class='all window_alert' style='background-color: " + this.window_back_color + "; border-color: " + this.border_color + " '>";
        html += "<p dir='auto' style='color: " + this.text_color + "; width:  " + this.width + "; max-height:  " + this.max_height + " '>" + text + "</p>";
        html += '<button onclick="'+ close +'" style="color: ' + this.btn_color + '; background-color: ' + this.btn_back_color + '">' + this.btn_text + '</button>';
        html += "</div>";
        document.write(html);
    }
    close(id){
        document.querySelector(".back").remove();
        document.querySelector(id).remove();
    }
}
class w_alertIn {
    constructor() {
        this.back = "rgba(white, 0.8)";
        this.window_back_color = "#444";
        this.border_color = "cornflowerblue";
        this.text_color = "white";
        this.btn_color = "white";
        this.btn_back_color = "cornflowerblue";
        this.width = "300px";
        this.max_height = "300px";
        this.btn_text_ok = "تایید";
        this.btn_text_cancel = "لغو";
        this.btn_cancel_disabled = false;
        this.output = [];
    }

    text(id, text = "", ok, cancel)
    {
        let html = "";
        let out = "";
        html += "<div class='back' style='background-color: " + this.back + "'></div>";
        html += "<div id='" + id + "' class='all window_alert' style='background-color: " + this.window_back_color + "; border-color: " + this.border_color + " '>";
        text = text.split("<in>");
        for (let i = 0; i < text.length; i++)
        {
            out += text[i];
            if (i < text.length - 1)
            {
                out += "<input type='text' id='w_alertIn_in" + i + "'>";
            }
        }
        let close = "$.WINAlertIn.ok(" + "'#" + id + "');";
        let send = "$.WINAlertIn.ok(" + "'#" + id + "', " + (text.length - 1) + ");";
        html += "<p dir='auto' style='color: " + this.text_color + "; width:  " + this.width + "; max-height:  " + this.max_height + " '>" + out + "</p>";
        html += '<button onclick="' + send + ok + '" style="color: ' + this.btn_color + '; background-color: ' + this.btn_back_color + '; margin-right: 5px;">' + this.btn_text_ok + '</button>';
        if (this.btn_cancel_disabled)
        {
            html += '<button onclick="'+ cancel + ';' + close +'" style="color: ' + this.btn_color + '; background-color: #777" disabled>' + this.btn_text_cancel + '</button>';
        }
        else
        {
            html += '<button onclick="'+ cancel + ';' + close +'" style="color: ' + this.btn_color + '; background-color: ' + this.btn_back_color + '">' + this.btn_text_cancel + '</button>';
        }
        html += "</div>";
        document.write(html);
    }
    close(id)
    {
        document.querySelector(".back").remove();
        document.querySelector(id).remove();
    }
    ok(id, index)
    {
        for (let i = 0; i < index; i++) {
            this.output[i] = document.querySelector("#w_alertIn_in" + i).value;
        }
        $.WINAlertIn.close(id);
    }
}
class WINDOW {
    isOnline(){ if(navigator.onLine){ return true; } else{ return false } }
    refresh(){ location.reload(true); }
    goto(src) { window.location = src; }
    back() { history.back(); }
    W(select){
        if (select == "window") {
            return window.innerWidth;    
        } else if (select == "body") {
            return document.body.clientWidth;
        } else {
            return document.querySelector(select).clientWidth;
        } 
    }
    H(select){
        if (select == "window") {
            return window.innerHeight;    
        } else if (select == "body") {
            return document.body.clientHeight;
        } else {
            return document.querySelector(select).clientHeight;
        } 
    }
}


class num 
{
    constructor()
    {
    }


    random(sta, sto){ return Math.floor(Math.random() * ((sto - sta) + 1) + sta); }

    character(character = 6, A = null){
        var text = "";
        if (A == null) {
            A = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789*/%@_-.";     
            var x = A.length - 1;
            for (let i = 0; i < character; i++) {
                text += A[$.NUMBER.random(0, x)];
            }
        } else {
            var x = A.length - 1;
            for (let i = 0; i < character; i++) {
                text += A[$.NUMBER.random(0, x)];
            }
        }
        return text;
    }
}


class K {
    key(nameKey, ifTrue = function () { return true; }, ifFalse = function () { return false; }) {
        document.addEventListener('keyup', function(e){
            e.preventDefault();
            if(e.key == nameKey){ ifTrue(); } else { ifFalse(); };
        });
    }
}


class _date{
    constructor(){
        var faDateYear = new Intl.DateTimeFormat("fa", {
            year: "numeric"
        }).format;
        var faDateMonth = new Intl.DateTimeFormat("fa", {
            month: "numeric"
        }).format;
        var faDateDay = new Intl.DateTimeFormat("fa", {
            day: "numeric"
        }).format;
        var faDateHour = new Intl.DateTimeFormat("fa", {
            hour: "numeric",
            // timeZone: "Asia/Tehran"
        }).format;
        var faDateMinute = new Intl.DateTimeFormat("fa", {
            minute: "numeric"
        }).format;
        var faDateSecond = new Intl.DateTimeFormat("fa", {
            second: "numeric"
        }).format;
        
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
        for (var i = 0; i < v1.length; i++) {
            for (var l = 0; l <= 9; l++) {
                if (v1[i] == persian[l]) {
                    x += l;
                }
            }
        }
        this.Hour = parseInt(x);
        x = "";
        for (var i = 0; i < v2.length; i++) {
            for (var l = 0; l <= 9; l++) {
                if (v2[i] == persian[l]) {
                    x += l;
                }
            }
        }
        this.Minute = parseInt(x);
        x = "";
        for (var i = 0; i < v3.length; i++) {
            for (var l = 0; l <= 9; l++) {
                if (v3[i] == persian[l]) {
                    x += l;
                }
            }
        }
        this.Second = parseInt(x);
        x = "";
        for (var i = 0; i < v4.length; i++) {
            for (var l = 0; l <= 9; l++) {
                if (v4[i] == persian[l]) {
                    x += l;
                }
            }
        }
        this.Year = parseInt(x);
        x = "";
        for (var i = 0; i < v5.length; i++) {
            for (var l = 0; l <= 9; l++) {
                if (v5[i] == persian[l]) {
                    x += l;
                }
            }
        }
        this.Month = parseInt(x);
        x = "";
        for (var i = 0; i < v6.length; i++) {
            for (var l = 0; l <= 9; l++) {
                if (v6[i] == persian[l]) {
                    x += l;
                }
            }
        }
        this.Day = parseInt(x);
    }
}


class loading
{
    constructor()
    {
        this.background = "rgba(#fff, 0.7)";
        this.ball_css =
        {
            color: "rgb(34, 184, 243)"
        }
    }

    ball(id)
    {
        let html = "<div class='back'></div><div id='" + id + "' class='all loading ball'><i></i><a></a></div>";
        document.write(html);
        $.CC(".back").setstyle("background-color: " + this.background);
        $.CC("#" + id + " i").setstyle("background-color: " + this.ball_css.color);
    }
    stop(id)
    {
        document.querySelector(".back").remove();
        document.querySelector("#" + id).remove();
    }
}











var isIE = document.all?true:false;
if (!isIE) document.captureEvents(Event.MOUSEMOVE);
document.onmousemove = getMousePosition;
var getMouseXY = {x: 0, y: 0};
function getMousePosition(mp) 
{
    if (!isIE) 
    {
        getMouseXY.x = mp.pageX;
        getMouseXY.y = mp.pageY;
    }
    
    return true;
}


const $ = 
{
    version: "0.0.0.3",
    CC: function (el) { return new CodeCity(el); },
    TEXT: new txt(),
    WIN: new WINDOW(),
    WINAlertIn: new w_alertIn(),
    WINAlert: new w_alert(),
    NUMBER: new num(),
    KEY: new K(),
    NewDate$FA: new _date(),
    LOADING: new loading()
};








// | CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... |
// | ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS |
// | CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... |
// | ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS |
// | CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... CSS ... |
var css_style = ".all,.all *{margin:0;padding:0;outline:none;border:none;background-color:rgba(0,0,0,0);font-family:Calibri;z-index:99999999999}.back{display:inline-block;width:100%;height:100vh;position:fixed;left:0;top:0;z-index:9999999999}";
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
/*1*/$.TEXT.BodyStatus.cut(true);
/*2*/$.TEXT.BodyStatus.copy(true);
/*3*/$.TEXT.BodyStatus.pase(true);
/*4*/$.TEXT.BodyStatus.rightClick(true);
/*5*/$.TEXT.BodyStatus.select(false);
// BodyStatus <----

// ----> ALERT
/*01*/$.WINAlert.back = "rgba(white, 0.8)";
/*02*/$.WINAlert.window_back_color = "#444";
/*03*/$.WINAlert.border_color = "cornflowerblue";
/*04*/$.WINAlert.text_color = "white";
/*05*/$.WINAlert.btn_color = "white";
/*06*/$.WINAlert.btn_back_color = "cornflowerblue";
/*07*/$.WINAlert.width = "300px";
/*08*/$.WINAlert.max_height = "300px";
/*09*/$.WINAlert.btn_text = "تایید";
// ALERT <----

// ----> ALERT IN
/*01*/$.WINAlertIn.back = "rgba(white, 0.8)";
/*02*/$.WINAlertIn.window_back_color = "#444";
/*03*/$.WINAlertIn.border_color = "cornflowerblue";
/*04*/$.WINAlertIn.text_color = "white";
/*05*/$.WINAlertIn.btn_color = "white";
/*06*/$.WINAlertIn.btn_back_color = "cornflowerblue";
/*07*/$.WINAlertIn.width = "300px";
/*08*/$.WINAlertIn.max_height = "300px";
/*09*/$.WINAlertIn.btn_text_ok = "تایید";
/*10*/$.WINAlertIn.btn_text_cancel = "لغو";
/*11*/$.WINAlertIn.btn_cancel_disabled = false;
// ALERT IN <----

// ----> LOADING
/*01*/$.LOADING.ball_css = { color: "rgb(34, 184, 243)" }
// LOADING <----



