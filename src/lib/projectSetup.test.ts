import { expect, it } from "vitest";
import dev from "../../.idea/runConfigurations/dev.xml?raw";
import test from "../../.idea/runConfigurations/test.xml?raw";
import build from "../../.idea/runConfigurations/build.xml?raw";
import preview from "../../.idea/runConfigurations/preview.xml?raw";
import e2e from "../../.idea/runConfigurations/e2e.xml?raw";
import ignore from "../../.gitignore?raw";
import pages from "../../.github/workflows/pages.yml?raw";
import license from "../../LICENSE?raw";

for (const [name, xml] of Object.entries({ dev, test, build, preview, e2e }))
  it(`shared JetBrains ${name} config uses a portable npm script`, () => {
    expect(xml).toContain('type="js.build_tools.npm"');
    expect(xml).toContain(
      '<package-json value="$PROJECT_DIR$/package.json" />',
    );
    expect(xml).toContain('<command value="run" />');
    expect(xml).toContain(`<script value="${name}" />`);
    expect(xml).toContain('<node-interpreter value="project" />');
    expect(xml).not.toContain("/home/ubuntu");
  });
it("preview setup matches the browser smoke server port", () =>
  expect(preview).toContain("-- --port 4173 --host"));
it("only shared run configurations are unignored from IDE metadata", () => {
  expect(ignore).toContain(".idea/*");
  expect(ignore).toContain("!.idea/runConfigurations/*.xml");
});
it("Pages publishing is manual and uploads the production build", () => {
  expect(pages).toContain("workflow_dispatch:");
  expect(pages).not.toMatch(/^\s+(push|pull_request):/m);
  expect(pages).toContain("npm run build");
  expect(pages).toContain("path: dist");
});
it("license identifies MIT and the requested copyright holder", () => {
  expect(license).toContain("SPDX-License-Identifier: MIT");
  expect(license).toContain("Copyright (c) 2026 ZQ051031");
});
