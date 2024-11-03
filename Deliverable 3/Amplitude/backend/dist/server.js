"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
//u21669849, Qwinton Knocklein
var path = require('path');
var express = require('express');
var _require = require("mongodb"),
  MongoClient = _require.MongoClient;
var uri = "mongodb+srv://u21669849:1LESJq7aveLKqK8s@imy220.hspd6.mongodb.net/?retryWrites=true&w=majority&appName=IMY220";
var client = new MongoClient(uri);
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express["static"](path.join(__dirname, '../../frontend/public')));
app.use(express.json()); // For handling JSON data in request body
function connectToDatabase() {
  return _connectToDatabase.apply(this, arguments);
}
function _connectToDatabase() {
  _connectToDatabase = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee36() {
    return _regeneratorRuntime().wrap(function _callee36$(_context36) {
      while (1) switch (_context36.prev = _context36.next) {
        case 0:
          _context36.prev = 0;
          _context36.next = 3;
          return client.connect();
        case 3:
          console.log("Connected to the database");
          return _context36.abrupt("return", client.db("Amplitude"));
        case 7:
          _context36.prev = 7;
          _context36.t0 = _context36["catch"](0);
          console.error(_context36.t0);
          process.exit(1);
        case 11:
        case "end":
          return _context36.stop();
      }
    }, _callee36, null, [[0, 7]]);
  }));
  return _connectToDatabase.apply(this, arguments);
}
var db = connectToDatabase(); // Connect to the database
// API routes

// Make user an admin
app.post('/api/admin/makeAdmin/:username', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var username, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          username = req.params.username;
          _context.next = 4;
          return db;
        case 4:
          _context.next = 6;
          return _context.sent.collection("users").updateOne({
            username: username
          }, {
            $set: {
              isAdmin: true
            }
          });
        case 6:
          result = _context.sent;
          res.json(result);
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          res.status(500).json({
            message: "Failed to make user an admin"
          });
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

// Remove admin status from user
app.post('/api/admin/removeAdmin/:username', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var username, result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          username = req.params.username;
          _context2.next = 4;
          return db;
        case 4:
          _context2.next = 6;
          return _context2.sent.collection("users").updateOne({
            username: username
          }, {
            $set: {
              isAdmin: false
            }
          });
        case 6:
          result = _context2.sent;
          res.json(result);
          _context2.next = 14;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          res.status(500).json({
            message: "Failed to remove admin status from user"
          });
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

// Fetch all users
app.get('/api/users', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var users;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return db;
        case 3:
          _context3.next = 5;
          return _context3.sent.collection("users").find().toArray();
        case 5:
          users = _context3.sent;
          res.json(users);
          _context3.next = 13;
          break;
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          res.status(500).json({
            message: "Failed to fetch users"
          });
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

// Fetch a single user by username
app.get('/api/users/:username', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var username, user;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          username = req.params.username;
          _context4.next = 4;
          return db;
        case 4:
          _context4.next = 6;
          return _context4.sent.collection("users").findOne({
            username: username
          });
        case 6:
          user = _context4.sent;
          res.json(user);
          _context4.next = 14;
          break;
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);
          res.status(500).json({
            message: "Failed to fetch user"
          });
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

// Fetch a single user by username and password
app.get('/api/users/:username/:password', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var username, password, user;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          username = req.params.username;
          password = req.params.password;
          _context5.next = 5;
          return db;
        case 5:
          _context5.next = 7;
          return _context5.sent.collection("users").findOne({
            username: username,
            passwordHash: password
          });
        case 7:
          user = _context5.sent;
          res.json(user);
          _context5.next = 15;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          res.status(500).json({
            message: "Failed to fetch user"
          });
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 11]]);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

// Fetch all friends of a single user
app.get('/api/friends/:username', /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var username, user, friends;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          username = req.params.username;
          _context6.next = 4;
          return db;
        case 4:
          _context6.next = 6;
          return _context6.sent.collection("users").findOne({
            username: username
          });
        case 6:
          user = _context6.sent;
          _context6.next = 9;
          return db;
        case 9:
          _context6.next = 11;
          return _context6.sent.collection("users").find({
            username: {
              $in: user.friends
            }
          }).toArray();
        case 11:
          friends = _context6.sent;
          res.json(friends);
          _context6.next = 19;
          break;
        case 15:
          _context6.prev = 15;
          _context6.t0 = _context6["catch"](0);
          console.error(_context6.t0);
          res.status(500).json({
            message: "Failed to fetch friends"
          });
        case 19:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 15]]);
  }));
  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());

// Add a friend to a user
app.post('/api/friends/:username/addFriend/:friendUsername', /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$params, username, friendUsername, user, friend, result;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _req$params = req.params, username = _req$params.username, friendUsername = _req$params.friendUsername;
          _context7.next = 4;
          return db;
        case 4:
          _context7.next = 6;
          return _context7.sent.collection("users").findOne({
            username: username
          });
        case 6:
          user = _context7.sent;
          _context7.next = 9;
          return db;
        case 9:
          _context7.next = 11;
          return _context7.sent.collection("users").findOne({
            username: friendUsername
          });
        case 11:
          friend = _context7.sent;
          if (!(!user || !friend)) {
            _context7.next = 14;
            break;
          }
          return _context7.abrupt("return", res.status(404).json({
            message: 'User or friend not found'
          }));
        case 14:
          if (!user.friends.includes(friendUsername)) {
            _context7.next = 16;
            break;
          }
          return _context7.abrupt("return", res.status(400).json({
            message: 'User is already friends with this user'
          }));
        case 16:
          _context7.next = 18;
          return db;
        case 18:
          _context7.next = 20;
          return _context7.sent.collection("users").updateOne({
            username: username
          }, {
            $push: {
              friends: friendUsername
            }
          });
        case 20:
          result = _context7.sent;
          _context7.next = 23;
          return db;
        case 23:
          _context7.next = 25;
          return _context7.sent.collection("users").updateOne({
            username: friendUsername
          }, {
            $push: {
              friends: username
            }
          });
        case 25:
          res.json({
            message: 'Friend added successfully',
            result: result
          });
          _context7.next = 32;
          break;
        case 28:
          _context7.prev = 28;
          _context7.t0 = _context7["catch"](0);
          console.error('Error adding friend:', _context7.t0);
          res.status(500).json({
            message: 'Failed to add friend'
          });
        case 32:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 28]]);
  }));
  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());

// Remove a friend from a user
app["delete"]('/api/friends/:username/removeFriend/:friendUsername', /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$params2, username, friendUsername, result;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _req$params2 = req.params, username = _req$params2.username, friendUsername = _req$params2.friendUsername; // Remove the friend from the user's friends, and the user from the friend's friends
          _context8.next = 4;
          return db;
        case 4:
          _context8.next = 6;
          return _context8.sent.collection("users").updateOne({
            username: username
          }, {
            $pull: {
              friends: friendUsername
            }
          });
        case 6:
          result = _context8.sent;
          _context8.next = 9;
          return db;
        case 9:
          _context8.next = 11;
          return _context8.sent.collection("users").updateOne({
            username: friendUsername
          }, {
            $pull: {
              friends: username
            }
          });
        case 11:
          res.json(result);
          _context8.next = 18;
          break;
        case 14:
          _context8.prev = 14;
          _context8.t0 = _context8["catch"](0);
          console.error('Error removing friend:', _context8.t0);
          res.status(500).json({
            message: 'Failed to remove friend'
          });
        case 18:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 14]]);
  }));
  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}());

// Update a single user
app.put('/api/users/:username', /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var username, updatedUser, result;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          username = req.params.username;
          updatedUser = req.body;
          _context9.next = 5;
          return db;
        case 5:
          _context9.next = 7;
          return _context9.sent.collection("users").updateOne({
            username: username
          }, {
            $set: updatedUser
          });
        case 7:
          result = _context9.sent;
          res.json(result);
          _context9.next = 15;
          break;
        case 11:
          _context9.prev = 11;
          _context9.t0 = _context9["catch"](0);
          console.error(_context9.t0);
          res.status(500).json({
            message: "Failed to update user"
          });
        case 15:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 11]]);
  }));
  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}());

// Create a single user
app.post('/api/users/signup', /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var newUser, existingUser, maxId, id, result;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          newUser = req.body; // Check if the user already exists
          _context10.next = 4;
          return db;
        case 4:
          _context10.next = 6;
          return _context10.sent.collection("users").findOne({
            username: newUser.username
          });
        case 6:
          existingUser = _context10.sent;
          if (!existingUser) {
            _context10.next = 9;
            break;
          }
          return _context10.abrupt("return", res.status(400).json({
            message: "Username already taken"
          }));
        case 9:
          _context10.next = 11;
          return db;
        case 11:
          _context10.next = 13;
          return _context10.sent.collection('users').find().sort({
            _id: -1
          }).limit(1).toArray();
        case 13:
          maxId = _context10.sent;
          id = maxId.length > 0 ? parseInt(maxId[0]._id) + 1 : 1;
          newUser._id = id.toString();
          // Insert the new user into the database
          _context10.next = 18;
          return db;
        case 18:
          _context10.next = 20;
          return _context10.sent.collection("users").insertOne(newUser);
        case 20:
          result = _context10.sent;
          res.status(201).json({
            message: 'User created successfully'
          });
          _context10.next = 27;
          break;
        case 24:
          _context10.prev = 24;
          _context10.t0 = _context10["catch"](0);
          res.status(500).json({
            message: 'Error creating user'
          });
        case 27:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 24]]);
  }));
  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}());

// Delete a single user
app["delete"]('/api/users/:id', /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var id, result;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          id = req.params.id;
          _context11.next = 4;
          return db;
        case 4:
          _context11.next = 6;
          return _context11.sent.collection("users").deleteOne({
            _id: id
          });
        case 6:
          result = _context11.sent;
          res.json(result);
          _context11.next = 14;
          break;
        case 10:
          _context11.prev = 10;
          _context11.t0 = _context11["catch"](0);
          console.error(_context11.t0);
          res.status(500).json({
            message: "Failed to delete user"
          });
        case 14:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 10]]);
  }));
  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}());

// Get a users created playlists
app.get('/api/playlists/user/:username', /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var username, user, playlists;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          username = req.params.username;
          _context12.next = 4;
          return db;
        case 4:
          _context12.next = 6;
          return _context12.sent.collection("users").findOne({
            username: username
          });
        case 6:
          user = _context12.sent;
          _context12.next = 9;
          return db;
        case 9:
          _context12.next = 11;
          return _context12.sent.collection("playlists").find({
            _id: {
              $in: user.playlists
            }
          }).toArray();
        case 11:
          playlists = _context12.sent;
          res.json(playlists);
          _context12.next = 19;
          break;
        case 15:
          _context12.prev = 15;
          _context12.t0 = _context12["catch"](0);
          console.error(_context12.t0);
          res.status(500).json({
            message: "Failed to fetch playlists"
          });
        case 19:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 15]]);
  }));
  return function (_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}());

// Get a users liked playlists
app.get('/api/playlists/liked/:username', /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var username, user, playlists;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          username = req.params.username;
          _context13.next = 4;
          return db;
        case 4:
          _context13.next = 6;
          return _context13.sent.collection("users").findOne({
            username: username
          });
        case 6:
          user = _context13.sent;
          _context13.next = 9;
          return db;
        case 9:
          _context13.next = 11;
          return _context13.sent.collection("playlists").find({
            _id: {
              $in: user.likes
            }
          }).toArray();
        case 11:
          playlists = _context13.sent;
          res.json(playlists);
          _context13.next = 19;
          break;
        case 15:
          _context13.prev = 15;
          _context13.t0 = _context13["catch"](0);
          console.error(_context13.t0);
          res.status(500).json({
            message: "Failed to fetch playlists"
          });
        case 19:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 15]]);
  }));
  return function (_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}());

// Like a playlist
app.post('/api/playlists/:id/like', /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var userId, playlistId;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          userId = req.body.userId;
          playlistId = req.params.id;
          _context14.prev = 2;
          _context14.next = 5;
          return db;
        case 5:
          _context14.next = 7;
          return _context14.sent.collection("users").updateOne({
            _id: userId
          }, {
            $addToSet: {
              likes: playlistId
            }
          });
        case 7:
          _context14.next = 9;
          return db;
        case 9:
          _context14.next = 11;
          return _context14.sent.collection("playlists").updateOne({
            _id: playlistId
          }, {
            $addToSet: {
              likedBy: userId
            }
          });
        case 11:
          res.status(200).json({
            message: "Playlist liked successfully"
          });
          _context14.next = 18;
          break;
        case 14:
          _context14.prev = 14;
          _context14.t0 = _context14["catch"](2);
          console.error("Error liking playlist:", _context14.t0);
          res.status(500).json({
            message: "Failed to like playlist"
          });
        case 18:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[2, 14]]);
  }));
  return function (_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}());

// Unlike a playlist
app.post('/api/playlists/:id/unlike', /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var userId, playlistId;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          userId = req.body.userId;
          playlistId = req.params.id;
          _context15.prev = 2;
          _context15.next = 5;
          return db;
        case 5:
          _context15.next = 7;
          return _context15.sent.collection("users").updateOne({
            _id: userId
          }, {
            $pull: {
              likes: playlistId
            }
          });
        case 7:
          _context15.next = 9;
          return db;
        case 9:
          _context15.next = 11;
          return _context15.sent.collection("playlists").updateOne({
            _id: playlistId
          }, {
            $pull: {
              likedBy: userId
            }
          });
        case 11:
          res.status(200).json({
            message: "Playlist unliked successfully"
          });
          _context15.next = 18;
          break;
        case 14:
          _context15.prev = 14;
          _context15.t0 = _context15["catch"](2);
          console.error("Error unliking playlist:", _context15.t0);
          res.status(500).json({
            message: "Failed to unlike playlist"
          });
        case 18:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[2, 14]]);
  }));
  return function (_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}());

// Get all playlists
app.get('/api/playlists', /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var playlists;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          _context16.next = 3;
          return db;
        case 3:
          _context16.next = 5;
          return _context16.sent.collection("playlists").find().toArray();
        case 5:
          playlists = _context16.sent;
          res.json(playlists);
          _context16.next = 13;
          break;
        case 9:
          _context16.prev = 9;
          _context16.t0 = _context16["catch"](0);
          console.error(_context16.t0);
          res.status(500).json({
            message: "Failed to fetch playlists"
          });
        case 13:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[0, 9]]);
  }));
  return function (_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}());

// Get a single playlist
app.get('/api/playlists/:id', /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var id, playlist;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          id = req.params.id;
          _context17.next = 4;
          return db;
        case 4:
          _context17.next = 6;
          return _context17.sent.collection("playlists").findOne({
            _id: id
          });
        case 6:
          playlist = _context17.sent;
          res.json(playlist);
          _context17.next = 14;
          break;
        case 10:
          _context17.prev = 10;
          _context17.t0 = _context17["catch"](0);
          console.error(_context17.t0);
          res.status(500).json({
            message: "Failed to fetch playlist"
          });
        case 14:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[0, 10]]);
  }));
  return function (_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}());

// Get all songs in a playlist
app.get('/api/playlists/:playlistID/songs', /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var playlistID, playlist, songs;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          playlistID = req.params.playlistID;
          _context18.next = 4;
          return db;
        case 4:
          _context18.next = 6;
          return _context18.sent.collection("playlists").findOne({
            _id: playlistID
          });
        case 6:
          playlist = _context18.sent;
          _context18.next = 9;
          return db;
        case 9:
          _context18.next = 11;
          return _context18.sent.collection("songs").find({
            _id: {
              $in: playlist.songs
            }
          }).toArray();
        case 11:
          songs = _context18.sent;
          res.json(songs);
          _context18.next = 19;
          break;
        case 15:
          _context18.prev = 15;
          _context18.t0 = _context18["catch"](0);
          console.error(_context18.t0);
          res.status(500).json({
            message: "Failed to fetch songs"
          });
        case 19:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[0, 15]]);
  }));
  return function (_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}());

// Add a song to a playlist
app.post('/api/playlists/:playlistId/addSong/:songId', /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var _req$params3, playlistId, songId, playlist, result;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          _req$params3 = req.params, playlistId = _req$params3.playlistId, songId = _req$params3.songId;
          _context19.next = 4;
          return db;
        case 4:
          _context19.next = 6;
          return _context19.sent.collection("playlists").findOne({
            _id: playlistId
          });
        case 6:
          playlist = _context19.sent;
          if (playlist) {
            _context19.next = 9;
            break;
          }
          return _context19.abrupt("return", res.status(404).json({
            message: 'Playlist not found'
          }));
        case 9:
          if (!playlist.songs.includes(songId)) {
            _context19.next = 11;
            break;
          }
          return _context19.abrupt("return", res.status(400).json({
            message: 'Song is already in the playlist'
          }));
        case 11:
          _context19.next = 13;
          return db;
        case 13:
          _context19.next = 15;
          return _context19.sent.collection("playlists").updateOne({
            _id: playlistId
          }, {
            $push: {
              songs: songId
            }
          });
        case 15:
          result = _context19.sent;
          res.json({
            message: 'Song added to playlist successfully',
            result: result
          });
          _context19.next = 23;
          break;
        case 19:
          _context19.prev = 19;
          _context19.t0 = _context19["catch"](0);
          console.error('Error adding song to playlist:', _context19.t0);
          res.status(500).json({
            message: 'Failed to add song to playlist'
          });
        case 23:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[0, 19]]);
  }));
  return function (_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}());

// Remove a song from a playlist
app["delete"]('/api/playlists/:playlistId/removeSong/:songId', /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var _req$params4, playlistId, songId, result;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.prev = 0;
          _req$params4 = req.params, playlistId = _req$params4.playlistId, songId = _req$params4.songId;
          _context20.next = 4;
          return db;
        case 4:
          _context20.next = 6;
          return _context20.sent.collection("playlists").updateOne({
            _id: playlistId
          }, {
            $pull: {
              songs: songId
            }
          } // Remove the song from the playlist
          );
        case 6:
          result = _context20.sent;
          res.json(result);
          _context20.next = 14;
          break;
        case 10:
          _context20.prev = 10;
          _context20.t0 = _context20["catch"](0);
          console.error("Error removing song from playlist:", _context20.t0);
          res.status(500).json({
            message: "Failed to remove song from playlist"
          });
        case 14:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[0, 10]]);
  }));
  return function (_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}());

// Get all comments in a playlist
app.get('/api/playlists/:playlistID/comments', /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var playlistID, playlist, comments;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.prev = 0;
          playlistID = req.params.playlistID;
          _context21.next = 4;
          return db;
        case 4:
          _context21.next = 6;
          return _context21.sent.collection("playlists").findOne({
            _id: playlistID
          });
        case 6:
          playlist = _context21.sent;
          _context21.next = 9;
          return db;
        case 9:
          _context21.next = 11;
          return _context21.sent.collection("comments").find({
            _id: {
              $in: playlist.comments
            }
          }).toArray();
        case 11:
          comments = _context21.sent;
          res.json(comments);
          _context21.next = 19;
          break;
        case 15:
          _context21.prev = 15;
          _context21.t0 = _context21["catch"](0);
          console.error(_context21.t0);
          res.status(500).json({
            message: "Failed to fetch comments"
          });
        case 19:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[0, 15]]);
  }));
  return function (_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}());

// Update a single playlist
app.put('/api/playlists/:id', /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var id, updatedPlaylist, result;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.prev = 0;
          id = req.params.id;
          updatedPlaylist = req.body;
          _context22.next = 5;
          return db;
        case 5:
          _context22.next = 7;
          return _context22.sent.collection("playlists").updateOne({
            _id: id
          }, {
            $set: updatedPlaylist
          });
        case 7:
          result = _context22.sent;
          res.json(result);
          _context22.next = 15;
          break;
        case 11:
          _context22.prev = 11;
          _context22.t0 = _context22["catch"](0);
          console.error(_context22.t0);
          res.status(500).json({
            message: "Failed to update playlist"
          });
        case 15:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[0, 11]]);
  }));
  return function (_x43, _x44) {
    return _ref22.apply(this, arguments);
  };
}());

// Create a single playlist
app.post('/api/playlists', /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
    var newPlaylist, maxId, id, result;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.prev = 0;
          newPlaylist = req.body; // Create an ID for the new user by finding the max ID and incrementing it by 1
          _context23.next = 4;
          return db;
        case 4:
          _context23.next = 6;
          return _context23.sent.collection('playlists').find().sort({
            _id: 1
          }).toArray();
        case 6:
          maxId = _context23.sent;
          id = maxId.length > 0 ? maxId.length + 1 : 1;
          newPlaylist._id = id.toString();
          _context23.next = 11;
          return db;
        case 11:
          _context23.next = 13;
          return _context23.sent.collection("playlists").insertOne(newPlaylist);
        case 13:
          result = _context23.sent;
          _context23.next = 16;
          return db;
        case 16:
          _context23.next = 18;
          return _context23.sent.collection("users").updateOne({
            username: newPlaylist.creator
          }, {
            $push: {
              playlists: newPlaylist._id
            }
          });
        case 18:
          res.json(result);
          _context23.next = 25;
          break;
        case 21:
          _context23.prev = 21;
          _context23.t0 = _context23["catch"](0);
          console.error(_context23.t0);
          res.status(500).json({
            message: "Failed to create playlist"
          });
        case 25:
        case "end":
          return _context23.stop();
      }
    }, _callee23, null, [[0, 21]]);
  }));
  return function (_x45, _x46) {
    return _ref23.apply(this, arguments);
  };
}());

// Delete a single playlist
app["delete"]('/api/playlists/:id', /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    var id, result;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.prev = 0;
          id = req.params.id;
          _context24.next = 4;
          return db;
        case 4:
          _context24.next = 6;
          return _context24.sent.collection("playlists").deleteOne({
            _id: id
          });
        case 6:
          result = _context24.sent;
          res.json(result);
          _context24.next = 14;
          break;
        case 10:
          _context24.prev = 10;
          _context24.t0 = _context24["catch"](0);
          console.error(_context24.t0);
          res.status(500).json({
            message: "Failed to delete playlist"
          });
        case 14:
        case "end":
          return _context24.stop();
      }
    }, _callee24, null, [[0, 10]]);
  }));
  return function (_x47, _x48) {
    return _ref24.apply(this, arguments);
  };
}());

// Get all songs
app.get('/api/songs', /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25(req, res) {
    var songs;
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          _context25.prev = 0;
          _context25.next = 3;
          return db;
        case 3:
          _context25.next = 5;
          return _context25.sent.collection("songs").find().toArray();
        case 5:
          songs = _context25.sent;
          res.json(songs);
          _context25.next = 13;
          break;
        case 9:
          _context25.prev = 9;
          _context25.t0 = _context25["catch"](0);
          console.error(_context25.t0);
          res.status(500).json({
            message: "Failed to fetch songs"
          });
        case 13:
        case "end":
          return _context25.stop();
      }
    }, _callee25, null, [[0, 9]]);
  }));
  return function (_x49, _x50) {
    return _ref25.apply(this, arguments);
  };
}());

// Get a single song
app.get('/api/songs/:id', /*#__PURE__*/function () {
  var _ref26 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26(req, res) {
    var id, song;
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          _context26.prev = 0;
          id = req.params.id;
          _context26.next = 4;
          return db;
        case 4:
          _context26.next = 6;
          return _context26.sent.collection("songs").findOne({
            _id: id
          });
        case 6:
          song = _context26.sent;
          res.json(song);
          _context26.next = 14;
          break;
        case 10:
          _context26.prev = 10;
          _context26.t0 = _context26["catch"](0);
          console.error(_context26.t0);
          res.status(500).json({
            message: "Failed to fetch song"
          });
        case 14:
        case "end":
          return _context26.stop();
      }
    }, _callee26, null, [[0, 10]]);
  }));
  return function (_x51, _x52) {
    return _ref26.apply(this, arguments);
  };
}());

// Update a single song
app.put('/api/songs/:id', /*#__PURE__*/function () {
  var _ref27 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27(req, res) {
    var id, updatedSong, result;
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          _context27.prev = 0;
          id = req.params.id;
          updatedSong = req.body;
          _context27.next = 5;
          return db;
        case 5:
          _context27.next = 7;
          return _context27.sent.collection("songs").updateOne({
            _id: id
          }, {
            $set: updatedSong
          });
        case 7:
          result = _context27.sent;
          res.json(result);
          _context27.next = 15;
          break;
        case 11:
          _context27.prev = 11;
          _context27.t0 = _context27["catch"](0);
          console.error(_context27.t0);
          res.status(500).json({
            message: "Failed to update song"
          });
        case 15:
        case "end":
          return _context27.stop();
      }
    }, _callee27, null, [[0, 11]]);
  }));
  return function (_x53, _x54) {
    return _ref27.apply(this, arguments);
  };
}());

// Create a single song
app.post('/api/songs', /*#__PURE__*/function () {
  var _ref28 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28(req, res) {
    var newSong, maxId, id, result;
    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          _context28.prev = 0;
          newSong = req.body; // Create an ID for the new user by finding the max ID and incrementing it by 1
          _context28.next = 4;
          return db;
        case 4:
          _context28.next = 6;
          return _context28.sent.collection('songs').find().sort({
            _id: 1
          }).toArray();
        case 6:
          maxId = _context28.sent;
          id = maxId.length > 0 ? maxId.length + 1 : 1;
          newSong._id = id.toString();
          _context28.next = 11;
          return db;
        case 11:
          _context28.next = 13;
          return _context28.sent.collection("songs").insertOne(newSong);
        case 13:
          result = _context28.sent;
          res.json(result);
          _context28.next = 21;
          break;
        case 17:
          _context28.prev = 17;
          _context28.t0 = _context28["catch"](0);
          console.error(_context28.t0);
          res.status(500).json({
            message: "Failed to create song"
          });
        case 21:
        case "end":
          return _context28.stop();
      }
    }, _callee28, null, [[0, 17]]);
  }));
  return function (_x55, _x56) {
    return _ref28.apply(this, arguments);
  };
}());

// Delete a single song
app["delete"]('/api/songs/:songId', /*#__PURE__*/function () {
  var _ref29 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee29(req, res) {
    var songId, result;
    return _regeneratorRuntime().wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          _context29.prev = 0;
          songId = req.params.songId;
          _context29.next = 4;
          return db;
        case 4:
          _context29.next = 6;
          return _context29.sent.collection('songs').deleteOne({
            _id: songId
          });
        case 6:
          result = _context29.sent;
          _context29.next = 9;
          return db;
        case 9:
          _context29.next = 11;
          return _context29.sent.collection('playlists').updateMany({}, {
            $pull: {
              songs: songId
            }
          });
        case 11:
          res.status(200).json(result);
          _context29.next = 17;
          break;
        case 14:
          _context29.prev = 14;
          _context29.t0 = _context29["catch"](0);
          res.status(500).json({
            message: "Failed to remove song from database"
          });
        case 17:
        case "end":
          return _context29.stop();
      }
    }, _callee29, null, [[0, 14]]);
  }));
  return function (_x57, _x58) {
    return _ref29.apply(this, arguments);
  };
}());

// Get all comments
app.get('/api/comments', /*#__PURE__*/function () {
  var _ref30 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee30(req, res) {
    var comments;
    return _regeneratorRuntime().wrap(function _callee30$(_context30) {
      while (1) switch (_context30.prev = _context30.next) {
        case 0:
          _context30.prev = 0;
          _context30.next = 3;
          return db;
        case 3:
          _context30.next = 5;
          return _context30.sent.collection("comments").find().toArray();
        case 5:
          comments = _context30.sent;
          res.json(comments);
          _context30.next = 13;
          break;
        case 9:
          _context30.prev = 9;
          _context30.t0 = _context30["catch"](0);
          console.error(_context30.t0);
          res.status(500).json({
            message: "Failed to fetch comments"
          });
        case 13:
        case "end":
          return _context30.stop();
      }
    }, _callee30, null, [[0, 9]]);
  }));
  return function (_x59, _x60) {
    return _ref30.apply(this, arguments);
  };
}());

// Get a single comment
app.get('/api/comments/:id', /*#__PURE__*/function () {
  var _ref31 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee31(req, res) {
    var id, comment;
    return _regeneratorRuntime().wrap(function _callee31$(_context31) {
      while (1) switch (_context31.prev = _context31.next) {
        case 0:
          _context31.prev = 0;
          id = req.params.id;
          _context31.next = 4;
          return db;
        case 4:
          _context31.next = 6;
          return _context31.sent.collection("comments").findOne({
            _id: id
          });
        case 6:
          comment = _context31.sent;
          res.json(comment);
          _context31.next = 14;
          break;
        case 10:
          _context31.prev = 10;
          _context31.t0 = _context31["catch"](0);
          console.error(_context31.t0);
          res.status(500).json({
            message: "Failed to fetch comment"
          });
        case 14:
        case "end":
          return _context31.stop();
      }
    }, _callee31, null, [[0, 10]]);
  }));
  return function (_x61, _x62) {
    return _ref31.apply(this, arguments);
  };
}());

// Update a single comment
app.put('/api/comments/:id', /*#__PURE__*/function () {
  var _ref32 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee32(req, res) {
    var id, updatedComment, result;
    return _regeneratorRuntime().wrap(function _callee32$(_context32) {
      while (1) switch (_context32.prev = _context32.next) {
        case 0:
          _context32.prev = 0;
          id = req.params.id;
          updatedComment = req.body;
          _context32.next = 5;
          return db;
        case 5:
          _context32.next = 7;
          return _context32.sent.collection("comments").updateOne({
            _id: id
          }, {
            $set: updatedComment
          });
        case 7:
          result = _context32.sent;
          res.json(result);
          _context32.next = 15;
          break;
        case 11:
          _context32.prev = 11;
          _context32.t0 = _context32["catch"](0);
          console.error(_context32.t0);
          res.status(500).json({
            message: "Failed to update comment"
          });
        case 15:
        case "end":
          return _context32.stop();
      }
    }, _callee32, null, [[0, 11]]);
  }));
  return function (_x63, _x64) {
    return _ref32.apply(this, arguments);
  };
}());

// Create a single comment
app.post('/api/comments', /*#__PURE__*/function () {
  var _ref33 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee33(req, res) {
    var newComment, maxId, id, result;
    return _regeneratorRuntime().wrap(function _callee33$(_context33) {
      while (1) switch (_context33.prev = _context33.next) {
        case 0:
          _context33.prev = 0;
          newComment = req.body; // Create an ID for the new comment by finding the max ID and incrementing it by 1
          _context33.next = 4;
          return db;
        case 4:
          _context33.next = 6;
          return _context33.sent.collection('comments').find().sort({
            _id: 1
          }).toArray();
        case 6:
          maxId = _context33.sent;
          id = maxId.length > 0 ? maxId.length + 1 : 1;
          newComment._id = id.toString();
          _context33.next = 11;
          return db;
        case 11:
          _context33.next = 13;
          return _context33.sent.collection("comments").insertOne(newComment);
        case 13:
          result = _context33.sent;
          _context33.next = 16;
          return db;
        case 16:
          _context33.next = 18;
          return _context33.sent.collection("playlists").updateOne({
            _id: newComment.playlistId
          }, {
            $push: {
              comments: newComment._id
            }
          });
        case 18:
          res.json(result);
          _context33.next = 25;
          break;
        case 21:
          _context33.prev = 21;
          _context33.t0 = _context33["catch"](0);
          console.error(_context33.t0);
          res.status(500).json({
            message: "Failed to create comment"
          });
        case 25:
        case "end":
          return _context33.stop();
      }
    }, _callee33, null, [[0, 21]]);
  }));
  return function (_x65, _x66) {
    return _ref33.apply(this, arguments);
  };
}());

// Delete a single comment
app["delete"]('/api/comments/:id', /*#__PURE__*/function () {
  var _ref34 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee34(req, res) {
    var id, result;
    return _regeneratorRuntime().wrap(function _callee34$(_context34) {
      while (1) switch (_context34.prev = _context34.next) {
        case 0:
          _context34.prev = 0;
          id = req.params.id;
          _context34.next = 4;
          return db;
        case 4:
          _context34.next = 6;
          return _context34.sent.collection("comments").deleteOne({
            _id: id
          });
        case 6:
          result = _context34.sent;
          _context34.next = 9;
          return db;
        case 9:
          _context34.next = 11;
          return _context34.sent.collection("playlists").updateMany({}, {
            $pull: {
              comments: id
            }
          });
        case 11:
          res.json(result);
          _context34.next = 18;
          break;
        case 14:
          _context34.prev = 14;
          _context34.t0 = _context34["catch"](0);
          console.error(_context34.t0);
          res.status(500).json({
            message: "Failed to delete comment"
          });
        case 18:
        case "end":
          return _context34.stop();
      }
    }, _callee34, null, [[0, 14]]);
  }));
  return function (_x67, _x68) {
    return _ref34.apply(this, arguments);
  };
}());

// Search API to search playlists, songs, and friends
app.get('/api/search', /*#__PURE__*/function () {
  var _ref35 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee35(req, res) {
    var query, dbInstance, playlists, songs, friends, tagQuery;
    return _regeneratorRuntime().wrap(function _callee35$(_context35) {
      while (1) switch (_context35.prev = _context35.next) {
        case 0:
          _context35.prev = 0;
          query = req.query.q; // Get search query from query parameters
          _context35.next = 4;
          return db;
        case 4:
          dbInstance = _context35.sent;
          playlists = [];
          songs = [];
          friends = []; // Check if the query starts with #
          if (!query.startsWith('@')) {
            _context35.next = 18;
            break;
          }
          tagQuery = query.slice(1); // Remove @ symbol
          // Search only in tags fields for playlists and songs
          _context35.next = 12;
          return dbInstance.collection('playlists').find({
            tags: {
              $regex: tagQuery,
              $options: 'i'
            }
          }).toArray();
        case 12:
          playlists = _context35.sent;
          _context35.next = 15;
          return dbInstance.collection('songs').find({
            genre: {
              $regex: tagQuery,
              $options: 'i'
            }
          }).toArray();
        case 15:
          songs = _context35.sent;
          _context35.next = 27;
          break;
        case 18:
          _context35.next = 20;
          return dbInstance.collection('playlists').find({
            $or: [{
              name: {
                $regex: query,
                $options: 'i'
              }
            }, {
              description: {
                $regex: query,
                $options: 'i'
              }
            }, {
              creator: {
                $regex: query,
                $options: 'i'
              }
            }, {
              genre: {
                $regex: query,
                $options: 'i'
              }
            }, {
              tags: {
                $regex: query,
                $options: 'i'
              }
            }]
          }).toArray();
        case 20:
          playlists = _context35.sent;
          _context35.next = 23;
          return dbInstance.collection('songs').find({
            $or: [{
              name: {
                $regex: query,
                $options: 'i'
              }
            }, {
              artist: {
                $regex: query,
                $options: 'i'
              }
            }, {
              genre: {
                $regex: query,
                $options: 'i'
              }
            }, {
              tags: {
                $regex: query,
                $options: 'i'
              }
            }]
          }).toArray();
        case 23:
          songs = _context35.sent;
          _context35.next = 26;
          return dbInstance.collection('users').find({
            $or: [{
              username: {
                $regex: query,
                $options: 'i'
              }
            }, {
              name: {
                $regex: query,
                $options: 'i'
              }
            }]
          }).toArray();
        case 26:
          friends = _context35.sent;
        case 27:
          res.json({
            playlists: playlists,
            songs: songs,
            friends: friends
          });
          _context35.next = 34;
          break;
        case 30:
          _context35.prev = 30;
          _context35.t0 = _context35["catch"](0);
          console.error('Error searching:', _context35.t0);
          res.status(500).json({
            message: 'Error performing search'
          });
        case 34:
        case "end":
          return _context35.stop();
      }
    }, _callee35, null, [[0, 30]]);
  }));
  return function (_x69, _x70) {
    return _ref35.apply(this, arguments);
  };
}());
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../frontend/public', 'index.html'));
});
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});