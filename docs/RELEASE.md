# Bubbles Browser Android 0.6.35

Version `0.6.35` is an early Android release of Bubbles Browser with a native, touch-friendly interface and no AI integration.

## Highlights

- Modern Material 3 mobile interface with correct status-bar and navigation-bar spacing.
- A single start-page search and address field with complete **Bubbles Browser** branding.
- Responsive controls that remain inside the screen at larger Android font sizes.
- Multiple tabs, bookmarks, history, downloads, profiles, guest mode, and profile backups.
- Settings wired to browser behavior, including privacy, accessibility, focus, reading, and performance options.
- Local safe-browsing checks and optional ad and tracker blocking.
- Expanded Streaming Hub covering subscription, live TV, sports, specialty, free, creator-video, personal-media, and audio services.
- Android-native music playback and direct audio-file downloads.
- Download completion notifications and Android runtime permission handling.
- Task Manager, Diagnostics, Trust Center, and scrollable About screen.
- AI-free operation with no telemetry, analytics, or cloud synchronization.

## Fixes In 0.6.35

- Removed the duplicate search field from the home screen.
- Corrected the home title from **Bubbles** to **Bubbles Browser**.
- Added a clearly visible light-gray and blue background blend with playful rounded typography.
- Removed the unnecessary start-page description to keep the browser home screen focused.
- Added true full-screen HTML5 video with browser and Android system controls hidden during playback.
- Added HTTPS-only WebView protected-media handling plus Android camera and microphone permission prompts when requested by a website.
- Added on-demand approximate or precise location permission for secure websites that provide nearby restaurant, store, and local search results; no background location access is requested.
- Kept notification permission for download completion alerts and music/audio permission for selecting and playing downloaded device audio.
- Enabled third-party cookies only inside Streaming Hub tabs to improve account sign-in without changing the default browsing policy.
- Allowed secure HTTPS authentication redirects in streaming sessions while continuing to block unsafe URLs and non-secure redirects.
- Prevented Music controls and long button labels from extending beyond the display.
- Removed package, repository, organization, desktop-source, and exact build-time details from About.
- Added the support email and a direct **Email support** action.
- Made release notes scrollable so the complete text remains accessible.
- Updated the Android toolchain and security-related dependencies.
- Fixed blank Facebook pages with a narrowly scoped Chrome-compatible Facebook fallback.
- Kept Facebook-owned resources available on Facebook while continuing to block Facebook trackers embedded by unrelated sites.
- Renamed the home counter to **Ads & trackers blocked** so its purpose is clear.
- Added live, category-specific privacy statistics to the Trust Center with accurate capability and protection-source labels.
- Added user-controlled, cached privacy-list subscriptions for EasyList, EasyPrivacy, AdGuard Base, AdGuard Tracking, AdGuard URL Tracking, Peter Lowe, DuckDuckGo Tracker Radar, Fanboy Annoyance/Social, URLHaus, and NoCoin-compatible rules.
- Automatically downloads enabled privacy lists when a fresh install has no local cache, instead of showing misleading zero-rule counts indefinitely.
- Fixed URLHaus hosts-file parsing so tab-separated malicious-domain entries are compiled and enforced correctly.
- Confirmed NoCoin-compatible rules are downloaded, parsed, cached, and compiled on first launch.
- Added canvas and JavaScript fingerprint-protection modes and WebRTC local-IP protection modes.
- Added encrypted saved passwords, a strong-password generator, k-anonymous password-breach checks, and user-controlled encrypted clipboard history.
- Kept privacy-list parsing and compilation off the main thread so updates do not freeze the interface.
- Reduced Settings and Privacy Lists rendering work for smoother navigation during longer browser sessions.

## Requirements

- Android 10 or newer (`minSdk 29`)
- Android System WebView

## Installation

1. Download `Bubbles-Browser-Android-v0.6.35.apk` from the release assets.
2. Open the APK on the Android device.
3. Allow installation from the current browser or file manager if Android requests it.
4. Choose **Install**, then launch **Bubbles Browser**.
5. Allow notifications for download alerts and music access only when using local audio features.

## Verification

- Version name: `0.6.35`
- Version code: `11`
- Package: `org.fnbubbles420.bubblesbrowser`
- APK SHA-256: `FE69646D2C7B09754BA948FF98BC4BE7178C86255D590EE8473EBF00AFDDA858`
- APK signature: Android APK Signature Scheme v2, one signer
- Device test: Motorola moto g stylus 2025, Android 16
- Automated verification: unit tests, Android lint, and 11 connected-device tests passed
- Snyk: no known vulnerable paths in the runtime project at release time

## Known Limitations

- This GitHub asset is a developer-signed early-access APK and is not a Google Play release.
- Website behavior depends on the installed Android System WebView version.
- Some streaming services may require an official app or may limit DRM playback in WebView.
- Music downloads require direct audio-file URLs and do not use the desktop extraction pipeline.
- Full WebView cookie and storage isolation between profiles is limited by Android WebView architecture.
- Android WebView cannot enforce every desktop cosmetic-filter rule or expose DNS details for CNAME uncloaking; the app reports these limits explicitly.

## Support

Email **support.bubblesthedev.webbrowser@gmail.com**. For security issues, follow [SECURITY.md](SECURITY.md) and do not publish exploit details in a public issue.
