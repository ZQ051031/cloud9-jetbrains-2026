import appCSS from "../styles.css?raw";
import reportCSS from "../report.css?raw";
const escapeHTML = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );
export function reportHTML(markup: string, team: string) {
  const styles = appCSS.replace(/@import\s+[^;]+;/g, "") + reportCSS;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHTML(team)} — Cloud9 Scout Report</title><style>${styles}</style></head><body style="padding:24px"><div class="report-paper">${markup}</div></body></html>`;
}
export function downloadFile(content: string, filename: string, type: string) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
