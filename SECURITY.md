# Security Policy

## Supported Versions

Security updates are provided for the latest Android release.

| Version | Supported |
| --- | --- |
| 1.0.3 | Yes |
| 0.6.80 | No |
| 0.6.70 | No |
| 0.6.35 | No |
| 0.6.34 and older | No |

Install the newest release from the official [GitHub Releases page](https://github.com/KernFerm/Bubbles-Browser-Android/releases).

## Reporting A Vulnerability

Email security reports privately to **support.bubblesthedev.webbrowser@gmail.com**.

Do not open a public GitHub issue for an unpatched vulnerability. Include:

- the affected app version and Android version
- clear reproduction steps
- the expected and actual behavior
- a proof of concept, screenshots, or redacted logs when useful

Do not send passwords, authentication cookies, session tokens, private browsing data, or unredacted personal information.

## What To Expect

The maintainer will review the report, reproduce it when possible, assess its severity, and prepare an update when needed. Public disclosure should wait until users have had a reasonable opportunity to install a fix.

## Scope

This policy covers the official Bubbles Browser Android application and APK files published by `KernFerm/Bubbles-Browser-Android`. Website behavior, Android System WebView, Android itself, and third-party streaming services are maintained by their respective providers.

## Security Design

Bubbles Browser uses Android-native protections including:

- HTTPS-first navigation and blocked unsafe schemes
- Android System WebView Safe Browsing when available
- local host, phishing-pattern, and risky-download checks
- optional ad and tracker request blocking
- user-controlled, locally cached privacy-list subscriptions with supported-rule counts
- canvas, JavaScript fingerprinting, and WebRTC privacy modes
- encrypted local password and clipboard storage
- k-anonymous password breach checks that send only a five-character hash prefix
- profile-scoped bookmarks, history, downloads, and settings
- Android Keystore-backed encryption for sensitive preferences
- scoped Android storage and system-managed downloads
- no telemetry, analytics, cloud sync, or AI services

The app cannot guarantee that every malicious page, tracker, or download will be detected. Keep Android and Android System WebView updated and review downloads before opening them.

## Dependency Review

Version 1.0.3 uses the dependency set checked with Snyk. The runtime project reported no known vulnerable dependency paths at release time. Findings in development-only Android test tooling are not packaged in the installed APK and will continue to be reviewed as upstream tools are updated.
