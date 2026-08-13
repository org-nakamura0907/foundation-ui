import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("単一クラスをそのまま返す", () => {
    expect(cn("foo")).toBe("foo");
  });

  it("複数クラスをスペース区切りで結合する", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("Tailwind の競合クラスは後勝ちで上書きする", () => {
    expect(cn("p-4", "p-8")).toBe("p-8");
  });

  it("undefined / null / false を除外する", () => {
    expect(cn("foo", undefined, null, false, "bar")).toBe("foo bar");
  });

  it("オブジェクト形式の条件付きクラスを処理する", () => {
    expect(cn("foo", { bar: true, baz: false })).toBe("foo bar");
  });

  it("呼び出し元の className をバリアントクラスにマージする", () => {
    const result = cn("font-normal text-base", "text-red-500");
    expect(result).toContain("font-normal");
    expect(result).toContain("text-red-500");
  });
});
