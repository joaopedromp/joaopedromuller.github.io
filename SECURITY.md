# Security

This repository is a public, static portfolio. The résumé and career information are intentionally public. Do not commit credentials, private student data, calendar tokens, or TutorTrack application databases.

## Controls

- No server-side application, dependencies, external scripts, analytics, forms, or authentication.
- CSP permits scripts, styles and images only from the same origin. Script-initiated network access, embedded objects, frames, inline script, and form submission are disabled.
- External links use HTTPS. The referrer policy limits cross-origin referrer disclosure.
- Dynamic HTML consists only of trusted, repository-authored content. URL parameters, storage, and user input are not rendered into HTML.
- Browser storage is limited to the theme preference.
- The published résumé was rebuilt from its pages to exclude embedded attachments and metadata. Its visible content and hyperlinks are preserved.
- Automated checks validate the CSP, local asset links, file types, JavaScript syntax, and network port assignments. Gitleaks is used for release secret scans.

## Limits

No security scan guarantees a site is free of vulnerabilities. GitHub Pages controls HTTP headers and TLS; repository files cannot set arbitrary response headers. In particular, a meta CSP cannot enforce `frame-ancestors`, and this site does not claim to prevent framing. No sensitive operations depend on the UI.

The résumé contains intentional professional contact information. Previously published content can remain in Git history and third-party caches even after removal from the current site.

Report security concerns privately through the LinkedIn link in the contact window. Do not include secrets in public issues.
