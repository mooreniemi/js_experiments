// vehicles, people, buildings
function turn(c, a, b) {}(function() {
	var F = 0;
	var z = 0;
	var f = 24;
	var y = 24;
	var D = 2;
	var m = 3;
	var i = 10;
	var L = 25;
	var q = 50;
	var M = 1 / 50;
	var G = 0;
	var O = 32;
	var I = 0;
	var N = ["john", "clement", "mike", "arnaud"];
	var b;
	var w = false;

	function e(T) {
		try {
			v(T);
			var Q = T;
			T = P(T);
			T.time = F;
			T.dollars = z;
			LMCodeChallenge.draw(T);
			t(T);
			turn(T.vehicles, T.peoples, T.buildings);
			var S = s(Q, T);
			if (S) {
				j("UNSANE! " + S);
				LMCodeChallenge.crash();
				return;
			}
			l(T);
			if (F === 1000 && z >= 10000) {
				LMCodeChallenge.win(z);
				return;
			}
			if (F % m === 0) {
				u(T);
			}
			F++;
			if (w) {
				return;
			}
			b = setTimeout(function() {
				e(T);
			}, 1 / M);
		} catch (R) {
			LMCodeChallenge.crash();
			throw R;
		}
	}

	function s(V, W) {
		if (V.buildings.length !== W.buildings.length) {
			return "The number of buildings have changed !";
		}
		if (V.vehicles.length !== W.vehicles.length) {
			return "The number of vehicles has changed!";
		}
		if (V.peoples.length !== W.peoples.length) {
			return "The number of people has changed!";
		}
		for (var aa in V.buildings) {
			var Q = V.buildings[aa];
			var Z = W.buildings[aa];
			if (r(Q, Z) > 0) {
				return "A building has moved";
			}
		}
		for (var aa in V.vehicles) {
			var T = V.vehicles[aa];
			var U = W.vehicles[aa];
			if (U.peoples.length > 4) {
				return "A vehicle is filled with more than 4 people";
			}
			if (U.peoples.length !== T.peoples.length) {
				return "People will hop on vehicles by themselves. Do not try to force them.";
			}
			if (r(T, U) > 1) {
				return "A vehicle moved of more than 1px (diagonal moves are not allowed)";
			}
			for (var Y in U.people) {
				var S = T.peoples[Y];
				var X = U.peoples[Y];
				if (S.time < X.time) {
					return "One of the people had his time messed up";
				}
			}
		}
		for (var aa in V.peoples) {
			var ab = V.peoples[aa];
			var R = W.peoples[aa];
			if (ab.time < R.time) {
				return "One of the people had his time messed up";
			}
			if (!ab.vehicle && !R.vehicle && r(ab, R) > 0) {
				return "You moved a people (you should not)";
			}
		}
		return false;
	}

	function t(R) {
		for (var Q in R.vehicles) {
			var S = R.vehicles[Q];
			S.moveUp = A;
			S.moveDown = g;
			S.moveLeft = d;
			S.moveRight = h;
			S.moveTo = c;
			S.pick = n;
		}
	}

	function v(R) {
		for (var Q in R.vehicles) {
			var S = R.vehicles[Q];
			delete S.moveUp;
			delete S.moveDown;
			delete S.moveLeft;
			delete S.moveRight;
			delete S.moveTo;
			delete S.pick;
		}
	}

	function n(Q) {
		var R = this;
		if (Q.name) {
			Q = Q.name;
		}
		if (R.picks.indexOf(Q) === -1) {
			R.picks.push(Q);
		}
	}

	function A() {
		this.y--;
	}

	function g() {
		this.y++;
	}

	function d() {
		this.x--;
	}

	function h() {
		this.x++;
	}

	function c(Q) {
		K(this, Q);
	}

	function K(R, Q) {
		if (Math.abs(R.x - Q.x) > Math.abs(R.y - Q.y)) {
			if (R.x < Q.x) {
				R.x++;
			} else {
				if (R.x > Q.x) {
					R.x--;
				}
			}
		} else {
			if (R.y < Q.y) {
				R.y++;
			} else {
				if (R.y > Q.y) {
					R.y--;
				}
			}
		}
	}

	function l(R) {
		for (var Z in R.vehicles) {
			var S = R.vehicles[Z];
			var X = null;
			for (var U in R.buildings) {
				var ab = R.buildings[U];
				if (r(ab, S) === 0) {
					X = ab;
				}
			}
			if (X) {
				for (var T = 0; T < S.peoples.length; T++) {
					var V = S.peoples[T];
					if (V.destination === X.name) {
						S.peoples.splice(T--, 1);
						V.vehicle = undefined;
						if (V.time > 0) {
							j("" + V.name + " was dropped off vehicle " + S.name + " yay! +$50 time left:" + V.time + "/" + V.time0);
							LMCodeChallenge.dollars(S);
							z += 50;
						} else {
							j("" + V.name + " was dropped off vehicle " + S.name + " but was " + (-V.time) + " late :(");
							LMCodeChallenge.sadPeople(S);
						}
					}
				}
				for (var T = 0; T < R.peoples.length; T++) {
					var aa = R.peoples[T];
					if (aa.origin === X.name) {
						var Q = S.picks.indexOf(aa.name);
						if (r(aa, X) === 0 && S.peoples.length < 4 && Q !== -1) {
							j("" + aa.name + " hoped on vehicle " + S.name);
							S.peoples.push(aa);
							S.picks.splice(Q, 1);
							aa.vehicle = S.name;
							R.peoples.splice(T--, 1);
							LMCodeChallenge.happyPeople(aa);
						}
					}
				}
			}
			S.picks = [];
			for (var T in S.peoples) {
				S.peoples[T].time--;
			}
		}
		for (var Z = 0; Z < R.peoples.length; Z++) {
			var aa = R.peoples[Z];
			aa.time--;
			var W = o(aa.destination, R.buildings);
			var Y = o(aa.origin, R.buildings);
			if (r(aa, W) === 0) {
				R.peoples.splice(Z--, 1);
				LMCodeChallenge.sadPeople(aa);
			} else {
				if (D * r(aa, W) >= aa.time) {
					if (r(aa, Y) === 0) {}
					K(aa, W);
				}
			}
		}
	}

	function u(U) {
		var R = U.buildings[x(0, U.buildings.length - 1)];
		var Q = U.buildings[x(0, U.buildings.length - 1)];
		while (Q.name === R.name) {
			Q = U.buildings[x(0, U.buildings.length - 1)];
		}
		var S = N[x(0, N.length - 1)];
		var V = r(R, Q);
		var T = V * D + x(L, q);
		U.peoples.push({
			name: S + (I++),
			x: R.x,
			y: R.y,
			origin: R.name,
			destination: Q.name,
			time: T,
			time0: T,
			img: "people" + x(0, O - 1)
		});
	}

	function o(R, T) {
		for (var Q in T) {
			var S = T[Q];
			if (S.name === R) {
				return S;
			}
		}
		return null;
	}

	function a(S, R) {
		for (var Q in R) {
			if (R[Q].name === S) {
				return R[Q];
			}
		}
		return null;
	}

	function r(R, Q) {
		return Math.abs(R.x - Q.x) + Math.abs(R.y - Q.y);
	}

	function P(Q) {
		return JSON.parse(JSON.stringify(Q));
	}

	function p(R, Q, S) {
		return {
			name: R,
			x: Q,
			y: S,
			peoples: [],
			picks: []
		};
	}

	function B(R, Q, S) {
		return {
			name: R,
			x: Q,
			y: S
		};
	}

	function j(Q) {
		if (typeof console !== "undefined") {
			console.log(Q);
		}
	}

	function C() {
		var Q = this.seed / this.Q;
		var R = this.seed % this.Q;
		var S = this.A * R - this.R * Q;
		if (S > 0) {
			this.seed = S;
		} else {
			this.seed = S + this.M;
		}
		return (this.seed * this.oneOverM);
	}

	function k(Q) {
		this.seed = 2345678901 + Q;
		this.A = 48271;
		this.M = 2147483647;
		this.Q = this.M / this.A;
		this.R = this.M % this.A;
		this.oneOverM = 1 / this.M;
		this.next = C;
		return this;
	}

	function x(Q, R) {
		return Math.round((R - Q) * E.next() + Q);
	}
	var E = new k(G);
	window.onload = function() {
		LMCodeChallenge.init(f, y, J);
	};

	function H() {
		var R = {
			vehicles: [p("one", 1, 3), p("two", 2, 3), p("three", 3, 3), p("four", 4, 3), p("five", 5, 3)],
			peoples: [],
			buildings: [B("A", 15, 16), B("B", 5, 10), B("C", 23, 2), B("D", 23, 18), B("E", 17, 20), B("F", 2, 23), B("G", 16, 10)]
		};
		for (var Q = 0; Q < i; Q++) {
			u(R);
		}
		return R;
	}

	function J() {
		w = true;
		if (b) {
			clearTimeout(b);
		}
		F = 0;
		z = 0;
		var Q = H();
		w = false;
		e(Q);
	}
})();
