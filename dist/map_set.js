"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
//Map é uma estrututa sicionario (conjunto de valore)
var meuMap = new Map();

//adicionando um item (SET) - recupera toda a estrutura 
meuMap.set("nome", "Caio");
meuMap.set("stack", "html, css, js");
console.log(meuMap);

// recuperacao de um item (GET) de uma determinada chave
var nome = meuMap.get("nome");
console.log(nome);

//recuperando a quantidades de item dentro de uma estrutura
console.log(meuMap.size);

//verificando se determinada chave existe dentro de um map
console.log(meuMap.has("nome"));

//faz a limpeza do map, removendo todos os itens
// meuMap.clear()
console.log(meuMap.size);

//Fazendo uma iteração com map (recupera nome das chaves)
var _iterator = _createForOfIteratorHelper(meuMap.keys()),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var chave = _step.value;
    console.log(chave);
  }

  //Fazendo uma iteração com map (recupera valores das chaves)
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
var _iterator2 = _createForOfIteratorHelper(meuMap.values()),
  _step2;
try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var valor = _step2.value;
    console.log(valor);
  }

  // visao de tabela
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}
var _iterator3 = _createForOfIteratorHelper(meuMap.entries()),
  _step3;
try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var entrada = _step3.value;
    console.log(entrada);
  }
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}
var _iterator4 = _createForOfIteratorHelper(meuMap.entries()),
  _step4;
try {
  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
    var _step4$value = _slicedToArray(_step4.value, 2),
      _chave = _step4$value[0],
      _valor = _step4$value[1];
    console.log("".concat(_chave, ": ").concat(_valor));
  }

  //removendo um item dentro de um map
} catch (err) {
  _iterator4.e(err);
} finally {
  _iterator4.f();
}
meuMap.delete("stack");
console.log(meuMap);

//Set - estrutura mais rigida, os valores nao se repetem.
var cpfs = new Set();

//adicionando um item denttro de um set
cpfs.add('66953790083');
cpfs.add('56773790084');
cpfs.add('66953790085');
console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());

//iterando com o forEach
cpfs.forEach(function (valor) {
  console.log(valor);
});

//criando uma listagem de itens unicos , removendo item duplicados de um array
var array = ['Carlos Souza', 'Jose Paulo', 'Maria Izabel', 'Maria Izabel', 'Carlos Souza'];
var arraySemItensDuplicados = [].concat(array);
console.log(arraySemItensDuplicados);
var arrayComoSet = new Set([].concat(array));
console.log(arrayComoSet);