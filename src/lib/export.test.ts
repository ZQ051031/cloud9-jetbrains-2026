import { it, expect } from "vitest";
import { reportHTML } from "./export";
it("exports standalone styles and SVG without a network dependency", () => {
  const html = reportHTML(
    "<svg></svg><p>SAMPLE / DEMO DATA — fictional, seeded</p>",
    "Nova Ridge",
  );
  expect(html).toContain("<style>");
  expect(html).toContain("<svg>");
  expect(html).not.toContain("@import");
  expect(html).not.toContain("<script");
  expect(html).toContain("@media print");
  expect(html).toContain("SAMPLE / DEMO DATA");
});
it("escapes the report title against markup injection", () =>
  expect(reportHTML("", '<script>"&')).toContain("&lt;script&gt;&quot;&amp;"));
it("empty report markup is still a valid document shell", () =>
  expect(reportHTML("", "")).toContain("<!doctype html>"));
