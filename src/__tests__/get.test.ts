import get from "../index";

test("Returns undefined if obj is invalid", () => {
  // @ts-ignore
  expect(get(undefined)).toBe(undefined);
  expect(get(false)).toBe(undefined);
  expect(get(0)).toBe(undefined);
  expect(get("obj")).toBe(undefined);
});

test("Can retrieve a deeply nested value", () => {
  const obj = {
    a: {
      b: {
        c: {
          d: "e"
        }
      }
    }
  };

  expect(get(obj, "a.b.c.d")).toBe("e");
  expect(get(obj, "a.b.c.e")).toBe(undefined);
  expect(get(obj, "a.b.c.e", "fallback")).toBe("fallback");
});

test("Can retrieve a deeply nested false value", () => {
  const obj = {
    a: {
      b: {
        c: {
          d: false
        }
      }
    }
  };

  expect(get(obj, "a.b.c.d")).toBe(false);
  expect(get(obj, "a.b.c.e")).toBe(undefined);
  expect(get(obj, "a.b.c.e", "fallback")).toBe("fallback");
});

test("Can retrieve a deeply nested null value", () => {
  const obj = {
    a: {
      b: {
        c: {
          d: null
        }
      }
    }
  };

  expect(get(obj, "a.b.c.d")).toBe(null);
  expect(get(obj, "a.b.c.e")).toBe(undefined);
  expect(get(obj, "a.b.c.e", "fallback")).toBe("fallback");
});

test("Can retrieve a deeply nested 0 value", () => {
  const obj = {
    a: {
      b: {
        c: {
          d: 0
        }
      }
    }
  };

  expect(get(obj, "a.b.c.d")).toBe(0);
  expect(get(obj, "a.b.c.e")).toBe(undefined);
  expect(get(obj, "a.b.c.e", "fallback")).toBe("fallback");
});

test("Can retrieve a shallow value", () => {
  const obj = {
    a: "b"
  };

  expect(get(obj, "a")).toBe("b");
  expect(get(obj, "a.b.c.e")).toBe(undefined);
  expect(get(obj, "a.b.c.e", "fallback")).toBe("fallback");
});

test("Can retrieve a shallow false value", () => {
  const obj = {
    a: false
  };

  expect(get(obj, "a")).toBe(false);
});

test("Can retrieve a shallow null value", () => {
  const obj = {
    a: null
  };

  expect(get(obj, "a")).toBe(null);
});

test("Can retrieve a shallow 0 value", () => {
  const obj = {
    a: 0
  };

  expect(get(obj, "a")).toBe(0);
});
