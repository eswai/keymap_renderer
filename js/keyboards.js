const keyboards = {
  "Crkbd": "[{x:3,a:7},\"3\",{x:6.85},\"8\"],[{y:-0.9,x:2},\"2\"],[{y:-1,x:4},\"4\"],[{y:-1,x:9.85},\"7\"],[{y:-1,x:11.85},\"9\"],[{y:-0.9,x:5},\"5\"],[{y:-1,x:8.85},\"6\"],[{y:-0.8},\"0\",\"1\",{x:10.85},\"10\",\"11\"],[{y:-0.4,x:3},\"15\",{x:6.85},\"20\"],[{y:-0.9,x:2},\"14\",{x:1},\"16\",{x:4.85},\"19\",{x:1},\"21\"],[{y:-0.9,x:5},\"17\",{x:2.85},\"18\"],[{y:-0.8},\"12\",\"13\",{x:10.85},\"22\",\"23\"],[{y:-0.4,x:3},\"27\",{x:6.85},\"32\"],[{y:-0.9,x:2},\"26\",{x:1},\"28\",{x:4.85},\"31\",{x:1},\"33\"],[{y:-0.9,x:5},\"29\",{x:2.85},\"30\"],[{y:-0.8},\"24\",\"25\",{x:10.85},\"34\",\"35\"],[{y:-0.2,x:3.5},\"36\",{x:5.85},\"41\"],[{r:15,rx:7.5,ry:4,y:-0.05,x:-2.8},\"37\"],[{r:30,y:-1.05,x:-1.5,h:1.5},\"38\"],[{r:-30,y:-1.1,x:0.35,h:1.5},\"39\"],[{r:-15,y:-0.9,x:1.65},\"40\"]",
  "Planck": "[{a:7},\"0\",\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\",\"9\",\"10\",\"11\"],\n[\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",\"18\",\"19\",\"20\",\"21\",\"22\",\"23\"],\n[\"24\",\"25\",\"26\",\"27\",\"28\",\"29\",\"30\",\"31\",\"32\",\"33\",\"34\",\"35\"],\n[\"36\",\"37\",\"38\",\"39\",\"40\",\"41\",\"42\",\"43\",\"44\",\"45\",\"46\",\"47\"]\n",
  "Atreus": "[{r:10,rx:1,y:-0.1,x:2},\"2\"],\n[{y:-0.65,x:1},\"1\",{x:1},\"3\"],\n[{y:-0.75},\"0\"],\n[{y:-0.9,x:4},\"4\"],\n[{y:-0.7,x:2},\"12\"],\n[{y:-0.65,x:1},\"11\",{x:1},\"13\"],\n[{y:-0.75},\"10\"],\n[{y:-0.9,x:4},\"14\"],\n[{y:-0.7,x:2},\"22\"],\n[{y:-0.65,x:1},\"21\",{x:1},\"23\"],\n[{y:-0.75},\"20\"],\n[{y:-0.9,x:4},\"24\"],\n[{y:-0.75,x:5,h:1.5},\"35\"],\n[{y:-0.95,x:2},\"32\"],\n[{y:-0.65,x:1},\"31\",{x:1},\"33\"],\n[{y:-0.75},\"30\"],\n[{y:-0.9,x:4},\"34\"],\n[{r:-10,rx:7,ry:0.965,y:-0.2,x:2},\"7\"],\n[{y:-0.65,x:1},\"6\",{x:1},\"8\"],\n[{y:-0.75,x:4},\"9\"],\n[{y:-0.9},\"5\"],\n[{y:-0.7,x:2},\"17\"],\n[{y:-0.65,x:1},\"16\",{x:1},\"18\"],\n[{y:-0.75,x:4},\"19\"],\n[{y:-0.9},\"15\"],\n[{y:-0.7,x:2},\"27\"],\n[{y:-0.65,x:1},\"26\",{x:1},\"28\"],\n[{y:-0.75,x:4},\"29\"],\n[{y:-0.9},\"25\"],\n[{y:-0.75,x:-1,h:1.5},\"36\"],\n[{y:-0.95,x:2},\"39\"],\n[{y:-0.65,x:1},\"38\",{x:1},\"40\"],\n[{y:-0.75,x:4},\"41\"],\n[{y:-0.9},\"37\"]\n",
  "Fortitude60": "[{x:2},\"2\",\"3\",{x:7.9},\"8\",\"9\"],\n[{y:-0.75,x:1},\"1\",{x:2},\"4\",\"5\",{x:3.9},\"6\",\"7\",{x:2},\"10\"],\n[{y:-0.75},\"0\",{x:13.9},\"11\"],\n[{y:-0.5,x:2},\"14\",\"15\",{x:7.9},\"20\",\"21\"],\n[{y:-0.75,x:1},\"13\",{x:2},\"16\",\"17\",{x:3.9},\"18\",\"19\",{x:2},\"22\"],\n[{y:-0.75},\"12\",{x:13.9},\"23\"],\n[{y:-0.5,x:2},\"26\",\"27\",{x:7.9},\"32\",\"33\"],\n[{y:-0.75,x:1},\"25\",{x:2},\"28\",\"29\",{x:3.9},\"30\",\"31\",{x:2},\"34\"],\n[{y:-0.75},\"24\",{x:13.9},\"35\"],\n[{y:-0.5,x:2},\"38\",\"39\",{x:7.9},\"46\",\"47\"],\n[{y:-0.75,x:1},\"37\",{x:2},\"40\",\"41\",{x:3.9},\"44\",\"45\",{x:2},\"48\"],\n[{y:-0.75},\"36\",{x:13.9},\"49\"],\n[{y:-0.5,x:2},\"50\",\"51\",{x:7.9},\"58\",\"59\"],\n[{y:-0.75,x:4},\"52\",{x:5.9},\"57\"],\n[{r:15,rx:8,ry:4,x:-1.5},\"42\"],\n[{x:-2.5},\"53\",\"54\"],\n[{r:-15,y:-2,x:0.4},\"43\"],\n[{x:0.4},\"55\",\"56\"]\n",
  "Ergo42": "[{a:7},\"0\",\"1\",\"2\",\"3\",{f:4},\"4\",{f:5},\"5\",{f:3},\"6\",{x:2},\"7\",\"8\",\"9\",\"10\",\"11\",\"12\",\"13\"],\n[\"14\",\"15\",\"16\",\"17\",\"18\",\"19\",\"20\",{x:2},\"21\",\"22\",\"23\",\"24\",\"25\",\"26\",\"27\"],\n[\"28\",\"29\",\"30\",\"31\",\"32\",\"33\",\"34\",{x:2},\"35\",\"36\",\"37\",\"38\",\"39\",\"40\",\"41\"],\n[\"42\",\"43\",\"44\",\"45\",\"46\",\"47\",\"48\",{x:2},\"49\",\"50\",\"51\",\"52\",\"53\",\"54\",\"55\"]\n",
  "Helix (4rows)": "[{a:7},\"0\",\"1\",\"2\",\"3\",\"4\",\"5\",{x:4},\"6\",\"7\",\"8\",\"9\",\"10\",\"11\"],\n[\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",{x:4},\"18\",\"19\",\"20\",\"21\",\"22\",\"23\"],\n[\"24\",\"25\",\"26\",\"27\",\"28\",\"29\",{x:4},\"30\",\"31\",\"32\",\"33\",\"34\",\"35\"],\n[\"36\",\"37\",\"38\",\"39\",\"40\",\"41\",\"42\",{x:2},\"43\",\"44\",\"45\",\"46\",\"47\",\"48\",\"49\"]",
  "Helix (5rows)": "[{a:7},\"0\",\"1\",\"2\",\"3\",\"4\",\"5\",{x:4},\"6\",\"7\",\"8\",\"9\",\"10\",\"11\"],\n[\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",{x:4},\"18\",\"19\",\"20\",\"21\",\"22\",\"23\"],\n[\"24\",\"25\",\"26\",\"27\",\"28\",\"29\",{x:4},\"30\",\"31\",\"32\",\"33\",\"34\",\"35\"],\n[\"36\",\"37\",\"38\",\"39\",\"40\",\"41\",\"42\",{x:2},\"43\",\"44\",\"45\",\"46\",\"47\",\"48\",\"49\"],\n[\"50\",\"51\",\"52\",\"53\",\"54\",\"55\",\"56\",{x:2},\"57\",\"58\",\"59\",\"60\",\"61\",\"62\",\"63\"]\n",
  "Mint60": "[\"0\",\"1\",\"2\",\"3\",\"4\",\"5\",{x:1.5},\"6\",\"7\",\"8\",\"9\",\"10\",\"11\",\"12\",{w:2},\"13\"],\n[{w:1.5},\"14\",\"15\",\"16\",\"17\",\"18\",\"19\",{x:1.5},\"20\",\"21\",\"22\",\"23\",\"24\",\"25\",\"26\",{w:1.5},\"27\"],\n[{w:1.75},\"28\",\"29\",\"30\",\"31\",\"32\",\"33\",{x:1.5},\"34\",\"35\",\"36\",\"37\",\"38\",\"39\",{w:2.25},\"40\"],\n[{w:2},\"41\",\"42\",\"43\",\"44\",\"45\",\"46\",{x:1.5},\"47\",\"48\",\"49\",\"50\",\"51\",\"52\",\"53\",\"54\"],\n[\"55\",{w:1.25},\"56\",{w:1.25},\"57\",{w:1.25},\"58\",{w:2.25},\"59\",{x:1.25,w:1.25},\"60\",{w:1.25},\"61\",{w:2.75},\"62\",\"63\",\"64\",\"65\"]\n",
  "Treadstone32": "[{a:7},\"0\",\"1\",\"2\",\"3\",\"4\",{x:0.5},\"5\",\"6\",\"7\",\"8\",\"9\"],\n[{x:0.25},\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",\"18\",\"19\"],\n[\"20\",\"21\",\"22\",\"23\",\"24\",{x:0.5},\"25\",\"26\",\"27\",\"28\",\"29\"],\n[{x:3.375,w:1.75},\"30\",{w:2.25},\"31\"]\n",
  "ATTACK25": "[{a:7},\"0\",\"1\",\"2\",\"3\",\"4\"],\n[\"5\",\"6\",\"7\",\"8\",\"9\"],\n[\"10\",\"11\",\"12\",\"13\",\"14\"],\n[\"15\",\"16\",\"17\",\"18\",\"19\"],\n[\"20\",\"21\",\"22\",\"23\",\"24\"]\n",
  "Nomu30": "[{x:0.5},\"0\",\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\",\"9\",{a:7},\"10\"],\n[{a:4},\"11\",\"12\",\"13\",\"14\",\"15\",\"16\",\"16\",\"18\",\"19\",\"20\",{x:0.25,w:1.25,h:2,w2:1.5,h2:1,x2:-0.25},\"21\"],\n[{w:1.5},\"22\",\"23\",\"24\",\"25\",\"26\",\"27\",\"28\",\"29\",{w:1.75},\"30\"]\n",
  "Cocoa60": "[{a:7},\"0\",\"1\",\"2\",\"3\",\"4\",\"5\",{x:1},\"6\",\"7\",\"8\",\"9\",\"10\",\"11\",\"12\",\"13\",\"14\"],\n[{w:1.5},\"15\",\"16\",\"17\",\"18\",\"19\",\"20\",{x:1},\"21\",\"22\",\"23\",\"24\",\"25\",\"26\",\"27\",{w:1.5},\"28\"],\n[{w:1.75},\"29\",\"30\",\"31\",\"32\",\"33\",\"34\",{x:1},\"35\",\"36\",\"37\",\"38\",\"39\",\"40\",{w:2.25},\"41\"],\n[{w:2.25},\"42\",\"43\",\"44\",\"45\",\"46\",\"47\",{x:1},\"48\",\"49\",\"50\",\"51\",\"52\",{w:1.75},\"53\",{a:7},\"54\"],\n[{x:1.5,a:4},\"55\",{w:1.5},\"56\",{w:2.75},\"57\",{x:1},\"58\",{w:2.25},\"59\",{w:1.5},\"60\",\"61\"]\n",
  "meishi": "[{a:7},\"0\",\"1\",\"2\",\"3\"]\n",
  "Dozen0": "[{a:7},\"0\",\"1\",\"2\",\"3\",\"4\",\"5\"],\n[\"6\",\"7\",\"8\",\"9\",\"10\",\"11\"]\n",
  "Let's Split": "[{a:7},\"0\",\"1\",\"2\",\"3\",\"4\",\"5\",{x:2},\"6\",\"7\",\"8\",\"9\",\"10\",\"11\"],\n[\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",{x:2},\"18\",\"19\",\"20\",\"21\",\"22\",\"23\"],\n[\"24\",\"25\",\"26\",\"27\",\"28\",\"29\",{x:2},\"30\",\"31\",\"32\",\"33\",\"34\",\"35\"],\n[\"36\",\"37\",\"38\",\"39\",\"40\",\"41\",{x:2},\"42\",\"43\",\"44\",\"45\",\"46\",\"47\"]",
  "Zinc": "[{a:7},\"0\",\"1\",\"2\",\"3\",\"4\",\"5\",{x:2},\"6\",\"7\",\"8\",\"9\",\"10\",\"11\"],\n[{x:0.25},\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",{x:2},\"18\",\"19\",\"20\",\"21\",\"22\",\"23\"],\n[{x:0.5},\"24\",\"25\",\"26\",\"27\",\"28\",\"29\",{x:2},\"30\",\"31\",\"32\",\"33\",\"34\",\"35\"],\n[{x:0.75},\"36\",\"37\",\"38\",\"39\",\"40\",\"41\",{x:2},\"42\",\"43\",\"44\",\"45\",\"46\",\"47\"]",
  "MiniAxe": "[{a:7},\"0\",\"1\",\"2\",\"3\",\"4\",{x:2},\"5\",\"6\",\"7\",\"8\",\"9\"],\n[\"10\",\"11\",\"12\",\"13\",\"14\",{x:2},\"15\",\"16\",\"17\",\"18\",\"19\"],\n[\"20\",\"21\",\"22\",\"23\",\"24\",{x:2},\"25\",\"26\",\"27\",\"28\",\"29\"],\n[{x:2},\"30\",\"31\",\"32\",{x:2},\"33\",\"34\",\"35\"]",
  "Gerkin": "[\"0\",\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\",\"9\"],[\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",\"18\",\"19\"],[\"20\",\"21\",\"22\",\"23\",\"24\",\"25\",\"26\",\"27\",\"28\",\"29\"]",
}

function getKeyboard(kb){
  return keyboards[kb]
}

function getKeyboardList(){
  return Object.keys(keyboards).sort()
}