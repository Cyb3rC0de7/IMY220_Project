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
  _connectToDatabase = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          _context28.prev = 0;
          _context28.next = 3;
          return client.connect();
        case 3:
          console.log("Connected to the database");
          return _context28.abrupt("return", client.db("Amplitude"));
        case 7:
          _context28.prev = 7;
          _context28.t0 = _context28["catch"](0);
          console.error(_context28.t0);
          process.exit(1);
        case 11:
        case "end":
          return _context28.stop();
      }
    }, _callee28, null, [[0, 7]]);
  }));
  return _connectToDatabase.apply(this, arguments);
}
var db = connectToDatabase(); // Connect to the database
// API routes

// Fetch all users
app.get('/api/users', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var users;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return db;
        case 3:
          _context.next = 5;
          return _context.sent.collection("users").find().toArray();
        case 5:
          users = _context.sent;
          res.json(users);
          _context.next = 13;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          res.status(500).json({
            message: "Failed to fetch users"
          });
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 9]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

// Fetch a single user by username
app.get('/api/users/:username', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var username, user;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          username = req.params.username;
          _context2.next = 4;
          return db;
        case 4:
          _context2.next = 6;
          return _context2.sent.collection("users").findOne({
            username: username
          });
        case 6:
          user = _context2.sent;
          res.json(user);
          _context2.next = 14;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          res.status(500).json({
            message: "Failed to fetch user"
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

// Fetch a single user by username and password
app.get('/api/users/:username/:password', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var username, password, user;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          username = req.params.username;
          password = req.params.password;
          _context3.next = 5;
          return db;
        case 5:
          _context3.next = 7;
          return _context3.sent.collection("users").findOne({
            username: username,
            passwordHash: password
          });
        case 7:
          user = _context3.sent;
          res.json(user);
          _context3.next = 15;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          res.status(500).json({
            message: "Failed to fetch user"
          });
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 11]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

// Fetch all friends of a single user
app.get('/api/friends/:username', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var username, user, friends;
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
          _context4.next = 9;
          return db;
        case 9:
          _context4.next = 11;
          return _context4.sent.collection("users").find({
            username: {
              $in: user.friends
            }
          }).toArray();
        case 11:
          friends = _context4.sent;
          res.json(friends);
          _context4.next = 19;
          break;
        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);
          res.status(500).json({
            message: "Failed to fetch friends"
          });
        case 19:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 15]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

// Update a single user
app.put('/api/users/:id', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var id, updatedUser, result;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          updatedUser = req.body;
          _context5.next = 5;
          return db;
        case 5:
          _context5.next = 7;
          return _context5.sent.collection("users").updateOne({
            _id: id
          }, {
            $set: updatedUser
          });
        case 7:
          result = _context5.sent;
          res.json(result);
          _context5.next = 15;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          res.status(500).json({
            message: "Failed to update user"
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

// Create a single user
app.post('/api/users/signup', /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var newUser, existingUser, maxId, id, result;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          newUser = req.body; // Check if the user already exists
          _context6.next = 4;
          return db;
        case 4:
          _context6.next = 6;
          return _context6.sent.collection("users").findOne({
            username: newUser.username
          });
        case 6:
          existingUser = _context6.sent;
          if (!existingUser) {
            _context6.next = 9;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            message: "Username already taken"
          }));
        case 9:
          _context6.next = 11;
          return db;
        case 11:
          _context6.next = 13;
          return _context6.sent.collection('users').find().sort({
            _id: -1
          }).limit(1).toArray();
        case 13:
          maxId = _context6.sent;
          id = maxId.length > 0 ? parseInt(maxId[0]._id) + 1 : 1;
          newUser._id = id.toString();
          // Insert the new user into the database
          _context6.next = 18;
          return db;
        case 18:
          _context6.next = 20;
          return _context6.sent.collection("users").insertOne(newUser);
        case 20:
          result = _context6.sent;
          res.status(201).json({
            message: 'User created successfully'
          });
          _context6.next = 27;
          break;
        case 24:
          _context6.prev = 24;
          _context6.t0 = _context6["catch"](0);
          res.status(500).json({
            message: 'Error creating user'
          });
        case 27:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 24]]);
  }));
  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());

// Delete a single user
app["delete"]('/api/users/:id', /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var id, result;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          id = req.params.id;
          _context7.next = 4;
          return db;
        case 4:
          _context7.next = 6;
          return _context7.sent.collection("users").deleteOne({
            _id: id
          });
        case 6:
          result = _context7.sent;
          res.json(result);
          _context7.next = 14;
          break;
        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](0);
          console.error(_context7.t0);
          res.status(500).json({
            message: "Failed to delete user"
          });
        case 14:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 10]]);
  }));
  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());

// Get a users playlists
app.get('/api/playlists/user/:username', /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var username, user, playlists;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          username = req.params.username;
          _context8.next = 4;
          return db;
        case 4:
          _context8.next = 6;
          return _context8.sent.collection("users").findOne({
            username: username
          });
        case 6:
          user = _context8.sent;
          _context8.next = 9;
          return db;
        case 9:
          _context8.next = 11;
          return _context8.sent.collection("playlists").find({
            _id: {
              $in: user.playlists
            }
          }).toArray();
        case 11:
          playlists = _context8.sent;
          res.json(playlists);
          _context8.next = 19;
          break;
        case 15:
          _context8.prev = 15;
          _context8.t0 = _context8["catch"](0);
          console.error(_context8.t0);
          res.status(500).json({
            message: "Failed to fetch playlists"
          });
        case 19:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 15]]);
  }));
  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}());

// Get all playlists
app.get('/api/playlists', /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var playlists;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return db;
        case 3:
          _context9.next = 5;
          return _context9.sent.collection("playlists").find().toArray();
        case 5:
          playlists = _context9.sent;
          res.json(playlists);
          _context9.next = 13;
          break;
        case 9:
          _context9.prev = 9;
          _context9.t0 = _context9["catch"](0);
          console.error(_context9.t0);
          res.status(500).json({
            message: "Failed to fetch playlists"
          });
        case 13:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 9]]);
  }));
  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}());

// Get a single playlist
app.get('/api/playlists/:id', /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var id, playlist;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          id = req.params.id;
          _context10.next = 4;
          return db;
        case 4:
          _context10.next = 6;
          return _context10.sent.collection("playlists").findOne({
            _id: id
          });
        case 6:
          playlist = _context10.sent;
          res.json(playlist);
          _context10.next = 14;
          break;
        case 10:
          _context10.prev = 10;
          _context10.t0 = _context10["catch"](0);
          console.error(_context10.t0);
          res.status(500).json({
            message: "Failed to fetch playlist"
          });
        case 14:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 10]]);
  }));
  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}());

// Get all songs in a playlist
app.get('/api/playlists/:playlistID/songs', /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var playlistID, playlist, songs;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          playlistID = req.params.playlistID;
          _context11.next = 4;
          return db;
        case 4:
          _context11.next = 6;
          return _context11.sent.collection("playlists").findOne({
            _id: playlistID
          });
        case 6:
          playlist = _context11.sent;
          _context11.next = 9;
          return db;
        case 9:
          _context11.next = 11;
          return _context11.sent.collection("songs").find({
            _id: {
              $in: playlist.songs
            }
          }).toArray();
        case 11:
          songs = _context11.sent;
          res.json(songs);
          _context11.next = 19;
          break;
        case 15:
          _context11.prev = 15;
          _context11.t0 = _context11["catch"](0);
          console.error(_context11.t0);
          res.status(500).json({
            message: "Failed to fetch songs"
          });
        case 19:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 15]]);
  }));
  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}());

// Add a song to a playlist
app.post('/api/playlists/:playlistId/addSong/:songId', /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var _req$params, playlistId, songId, playlist, result;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _req$params = req.params, playlistId = _req$params.playlistId, songId = _req$params.songId;
          _context12.next = 4;
          return db;
        case 4:
          _context12.next = 6;
          return _context12.sent.collection("playlists").findOne({
            _id: playlistId
          });
        case 6:
          playlist = _context12.sent;
          if (playlist) {
            _context12.next = 9;
            break;
          }
          return _context12.abrupt("return", res.status(404).json({
            message: 'Playlist not found'
          }));
        case 9:
          if (!playlist.songs.includes(songId)) {
            _context12.next = 11;
            break;
          }
          return _context12.abrupt("return", res.status(400).json({
            message: 'Song is already in the playlist'
          }));
        case 11:
          _context12.next = 13;
          return db;
        case 13:
          _context12.next = 15;
          return _context12.sent.collection("playlists").updateOne({
            _id: playlistId
          }, {
            $push: {
              songs: songId
            }
          });
        case 15:
          result = _context12.sent;
          res.json({
            message: 'Song added to playlist successfully',
            result: result
          });
          _context12.next = 23;
          break;
        case 19:
          _context12.prev = 19;
          _context12.t0 = _context12["catch"](0);
          console.error('Error adding song to playlist:', _context12.t0);
          res.status(500).json({
            message: 'Failed to add song to playlist'
          });
        case 23:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 19]]);
  }));
  return function (_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}());

// Remove a song from a playlist
app["delete"]('/api/playlists/:playlistId/removeSong/:songId', /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var _req$params2, playlistId, songId, result;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _req$params2 = req.params, playlistId = _req$params2.playlistId, songId = _req$params2.songId;
          _context13.next = 4;
          return db;
        case 4:
          _context13.next = 6;
          return _context13.sent.collection("playlists").updateOne({
            _id: playlistId
          }, {
            $pull: {
              songs: songId
            }
          } // Remove the song from the playlist
          );
        case 6:
          result = _context13.sent;
          res.json(result);
          _context13.next = 14;
          break;
        case 10:
          _context13.prev = 10;
          _context13.t0 = _context13["catch"](0);
          console.error("Error removing song from playlist:", _context13.t0);
          res.status(500).json({
            message: "Failed to remove song from playlist"
          });
        case 14:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 10]]);
  }));
  return function (_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}());

// Get all comments in a playlist
app.get('/api/playlists/:playlistID/comments', /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var playlistID, playlist, comments;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          playlistID = req.params.playlistID;
          _context14.next = 4;
          return db;
        case 4:
          _context14.next = 6;
          return _context14.sent.collection("playlists").findOne({
            _id: playlistID
          });
        case 6:
          playlist = _context14.sent;
          _context14.next = 9;
          return db;
        case 9:
          _context14.next = 11;
          return _context14.sent.collection("comments").find({
            _id: {
              $in: playlist.comments
            }
          }).toArray();
        case 11:
          comments = _context14.sent;
          res.json(comments);
          _context14.next = 19;
          break;
        case 15:
          _context14.prev = 15;
          _context14.t0 = _context14["catch"](0);
          console.error(_context14.t0);
          res.status(500).json({
            message: "Failed to fetch comments"
          });
        case 19:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 15]]);
  }));
  return function (_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}());

// Update a single playlist
app.put('/api/playlists/:id', /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var id, updatedPlaylist, result;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          id = req.params.id;
          updatedPlaylist = req.body;
          _context15.next = 5;
          return db;
        case 5:
          _context15.next = 7;
          return _context15.sent.collection("playlists").updateOne({
            _id: id
          }, {
            $set: updatedPlaylist
          });
        case 7:
          result = _context15.sent;
          res.json(result);
          _context15.next = 15;
          break;
        case 11:
          _context15.prev = 11;
          _context15.t0 = _context15["catch"](0);
          console.error(_context15.t0);
          res.status(500).json({
            message: "Failed to update playlist"
          });
        case 15:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 11]]);
  }));
  return function (_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}());

// Create a single playlist
app.post('/api/playlists', /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var newPlaylist, result;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          newPlaylist = req.body;
          _context16.next = 4;
          return db;
        case 4:
          _context16.next = 6;
          return _context16.sent.collection("playlists").insertOne(newPlaylist);
        case 6:
          result = _context16.sent;
          res.json(result);
          _context16.next = 14;
          break;
        case 10:
          _context16.prev = 10;
          _context16.t0 = _context16["catch"](0);
          console.error(_context16.t0);
          res.status(500).json({
            message: "Failed to create playlist"
          });
        case 14:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[0, 10]]);
  }));
  return function (_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}());

// Delete a single playlist
app["delete"]('/api/playlists/:id', /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var id, result;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          id = req.params.id;
          _context17.next = 4;
          return db;
        case 4:
          _context17.next = 6;
          return _context17.sent.collection("playlists").deleteOne({
            _id: id
          });
        case 6:
          result = _context17.sent;
          res.json(result);
          _context17.next = 14;
          break;
        case 10:
          _context17.prev = 10;
          _context17.t0 = _context17["catch"](0);
          console.error(_context17.t0);
          res.status(500).json({
            message: "Failed to delete playlist"
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

// Get all songs
app.get('/api/songs', /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var songs;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          _context18.next = 3;
          return db;
        case 3:
          _context18.next = 5;
          return _context18.sent.collection("songs").find().toArray();
        case 5:
          songs = _context18.sent;
          res.json(songs);
          _context18.next = 13;
          break;
        case 9:
          _context18.prev = 9;
          _context18.t0 = _context18["catch"](0);
          console.error(_context18.t0);
          res.status(500).json({
            message: "Failed to fetch songs"
          });
        case 13:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[0, 9]]);
  }));
  return function (_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}());

// Get a single song
app.get('/api/songs/:id', /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var id, song;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          id = req.params.id;
          _context19.next = 4;
          return db;
        case 4:
          _context19.next = 6;
          return _context19.sent.collection("songs").findOne({
            _id: id
          });
        case 6:
          song = _context19.sent;
          res.json(song);
          _context19.next = 14;
          break;
        case 10:
          _context19.prev = 10;
          _context19.t0 = _context19["catch"](0);
          console.error(_context19.t0);
          res.status(500).json({
            message: "Failed to fetch song"
          });
        case 14:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[0, 10]]);
  }));
  return function (_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}());

// Update a single song
app.put('/api/songs/:id', /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var id, updatedSong, result;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.prev = 0;
          id = req.params.id;
          updatedSong = req.body;
          _context20.next = 5;
          return db;
        case 5:
          _context20.next = 7;
          return _context20.sent.collection("songs").updateOne({
            _id: id
          }, {
            $set: updatedSong
          });
        case 7:
          result = _context20.sent;
          res.json(result);
          _context20.next = 15;
          break;
        case 11:
          _context20.prev = 11;
          _context20.t0 = _context20["catch"](0);
          console.error(_context20.t0);
          res.status(500).json({
            message: "Failed to update song"
          });
        case 15:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[0, 11]]);
  }));
  return function (_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}());

// Create a single song
app.post('/api/songs', /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var newSong, maxId, id, result;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.prev = 0;
          newSong = req.body; // Create an ID for the new user by finding the max ID and incrementing it by 1
          _context21.next = 4;
          return db;
        case 4:
          _context21.next = 6;
          return _context21.sent.collection('songs').find().sort({
            _id: 1
          }).toArray();
        case 6:
          maxId = _context21.sent;
          id = maxId.length > 0 ? maxId.length + 1 : 1;
          newSong._id = id.toString();
          _context21.next = 11;
          return db;
        case 11:
          _context21.next = 13;
          return _context21.sent.collection("songs").insertOne(newSong);
        case 13:
          result = _context21.sent;
          res.json(result);
          _context21.next = 21;
          break;
        case 17:
          _context21.prev = 17;
          _context21.t0 = _context21["catch"](0);
          console.error(_context21.t0);
          res.status(500).json({
            message: "Failed to create song"
          });
        case 21:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[0, 17]]);
  }));
  return function (_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}());

// Delete a single song
app["delete"]('/api/songs/:id', /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var id, result;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.prev = 0;
          id = req.params.id;
          _context22.next = 4;
          return db;
        case 4:
          _context22.next = 6;
          return _context22.sent.collection("songs").deleteOne({
            _id: id
          });
        case 6:
          result = _context22.sent;
          res.json(result);
          _context22.next = 14;
          break;
        case 10:
          _context22.prev = 10;
          _context22.t0 = _context22["catch"](0);
          console.error(_context22.t0);
          res.status(500).json({
            message: "Failed to delete song"
          });
        case 14:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[0, 10]]);
  }));
  return function (_x43, _x44) {
    return _ref22.apply(this, arguments);
  };
}());

// Get all comments
app.get('/api/comments', /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
    var comments;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.prev = 0;
          _context23.next = 3;
          return db;
        case 3:
          _context23.next = 5;
          return _context23.sent.collection("comments").find().toArray();
        case 5:
          comments = _context23.sent;
          res.json(comments);
          _context23.next = 13;
          break;
        case 9:
          _context23.prev = 9;
          _context23.t0 = _context23["catch"](0);
          console.error(_context23.t0);
          res.status(500).json({
            message: "Failed to fetch comments"
          });
        case 13:
        case "end":
          return _context23.stop();
      }
    }, _callee23, null, [[0, 9]]);
  }));
  return function (_x45, _x46) {
    return _ref23.apply(this, arguments);
  };
}());

// Get a single comment
app.get('/api/comments/:id', /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    var id, comment;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.prev = 0;
          id = req.params.id;
          _context24.next = 4;
          return db;
        case 4:
          _context24.next = 6;
          return _context24.sent.collection("comments").findOne({
            _id: id
          });
        case 6:
          comment = _context24.sent;
          res.json(comment);
          _context24.next = 14;
          break;
        case 10:
          _context24.prev = 10;
          _context24.t0 = _context24["catch"](0);
          console.error(_context24.t0);
          res.status(500).json({
            message: "Failed to fetch comment"
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

// Update a single comment
app.put('/api/comments/:id', /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25(req, res) {
    var id, updatedComment, result;
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          _context25.prev = 0;
          id = req.params.id;
          updatedComment = req.body;
          _context25.next = 5;
          return db;
        case 5:
          _context25.next = 7;
          return _context25.sent.collection("comments").updateOne({
            _id: id
          }, {
            $set: updatedComment
          });
        case 7:
          result = _context25.sent;
          res.json(result);
          _context25.next = 15;
          break;
        case 11:
          _context25.prev = 11;
          _context25.t0 = _context25["catch"](0);
          console.error(_context25.t0);
          res.status(500).json({
            message: "Failed to update comment"
          });
        case 15:
        case "end":
          return _context25.stop();
      }
    }, _callee25, null, [[0, 11]]);
  }));
  return function (_x49, _x50) {
    return _ref25.apply(this, arguments);
  };
}());

// Create a single comment
app.post('/api/comments', /*#__PURE__*/function () {
  var _ref26 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26(req, res) {
    var newComment, result;
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          _context26.prev = 0;
          newComment = req.body;
          _context26.next = 4;
          return db;
        case 4:
          _context26.next = 6;
          return _context26.sent.collection("comments").insertOne(newComment);
        case 6:
          result = _context26.sent;
          res.json(result);
          _context26.next = 14;
          break;
        case 10:
          _context26.prev = 10;
          _context26.t0 = _context26["catch"](0);
          console.error(_context26.t0);
          res.status(500).json({
            message: "Failed to create comment"
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

// Delete a single comment
app["delete"]('/api/comments/:id', /*#__PURE__*/function () {
  var _ref27 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27(req, res) {
    var id, result;
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          _context27.prev = 0;
          id = req.params.id;
          _context27.next = 4;
          return db;
        case 4:
          _context27.next = 6;
          return _context27.sent.collection("comments").deleteOne({
            _id: id
          });
        case 6:
          result = _context27.sent;
          res.json(result);
          _context27.next = 14;
          break;
        case 10:
          _context27.prev = 10;
          _context27.t0 = _context27["catch"](0);
          console.error(_context27.t0);
          res.status(500).json({
            message: "Failed to delete comment"
          });
        case 14:
        case "end":
          return _context27.stop();
      }
    }, _callee27, null, [[0, 10]]);
  }));
  return function (_x53, _x54) {
    return _ref27.apply(this, arguments);
  };
}());
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../frontend/public', 'index.html'));
});
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});