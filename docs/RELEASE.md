# Bubbles Browser Android 1.0.10 Build 40

Version `1.0.10` build `40` adds direct bookmark controls, Android default-browser support, and automatic device-language support for the core interface while retaining mobile-site compatibility, privacy protections, profile isolation, uploads, downloads, page restoration, media behavior, and the browser's AI-free design.

## New In Build 40

- Added a bookmark button beside the address bar for saving or removing the current page with one tap.
- Shows a filled bookmark icon when the current page is already saved in the active profile.
- Keeps bookmark actions disabled on the local start page and in private tabs.
- Added **Set as default browser** and **Manage default browser** actions under **Settings > Browsing**.
- Registered Bubbles Browser as an Android web-browser candidate for supported HTTP and HTTPS links.
- Routes links opened from other Android apps into the active Bubbles Browser tab.
- Uses Android's official browser-role chooser and does not change the device default without user approval.
- Added automatic device-language selection for core browser controls, the start page, bookmarks, history, permission prompts, duplicate-app cleanup, and primary settings.
- Expanded automatic device-language support to 29 locales: English, Spanish, French, German, Brazilian Portuguese, Japanese, Simplified Chinese, Arabic, Hindi, Indonesian, Italian, Korean, Russian, Dutch, Polish, Thai, Turkish, Ukrainian, Vietnamese, Czech, Danish, Finnish, Norwegian Bokmål, Romanian, Swedish, Greek, Hungarian, Slovak, and Croatian. Each locale includes the complete 99-string core interface set, with English fallback for text outside that set.
- Updated the in-app About screen to show the complete 29-language list instead of a shortened summary.
- Added physical-device tests that verify Android selects the correct translated resources and formats protection counters in the active locale.
- Updated the spoken accessibility preview to use the device language instead of forcing US English.
- Retains the targeted YouTube advertising and tracking request protections introduced in Build 34.

## Features Retained From Earlier Builds

- Added separate WebView cookie, website-storage, geolocation, and Service Worker containers for every saved profile when Android System WebView supports multi-profile mode.
- Added a disposable isolated WebView container for every private tab, removed when that tab closes without clearing normal-profile data.
- Added website-requested video recording alongside image camera capture and Android's document picker.
- Preserved complete `window.open()` and `about:blank` popup documents inside real browser tabs.
- Added saved per-tab favicons and favicon display in the tab strip.
- Added on-disk WebView state restoration for normal tabs to improve form, history, and active-page recovery.
- Enabled browser-grade WebAuthn/passkey and back-forward cache support when available in Android System WebView.
- Configured Service Worker caching and network behavior for isolated profiles.
- Kept active website audio running when the app is backgrounded, subject to Android memory and battery limits.
- Added live byte-level download progress, percentages, transferred size, and automatic status refresh.
- Kept fullscreen video active across screen rotation without recreating the activity.
- Forwarded cookies from the active WebView profile for authenticated Android Download Manager requests.

## Interface And Navigation

- Redesigned the browser with a modern light-gray and blue interface, rounded typography, responsive spacing, and touch-friendly controls.
- Corrected status-bar and navigation-bar spacing so controls are not hidden behind Android system areas.
- Removed the duplicate top search box and kept one clear search and address field.
- Updated the home title to **Bubbles Browser** and removed unnecessary introductory text.
- Prevented long labels, Music controls, profile controls, and accessibility layouts from extending beyond the screen.
- Made About and Release Notes fully scrollable so content is not cut off.
- Added complete tab controls with back, forward, home, reload, new-tab, close-tab, and menu actions.
- Added bookmarks, searchable history, downloads, profiles, guest browsing, and local profile backup and restore.

## Website And Media Compatibility

- Uses mobile website layouts by default.
- Added a global **Desktop mode** toggle in Settings and a remembered **Desktop site** control for individual websites.
- Uses the installed Android WebView provider's current mobile and Chromium versions instead of an obsolete hardcoded browser identity.
- Added per-tab WebView history and state restoration, including correct Android back-button navigation and renderer recovery.
- Added requested popup and new-window handling that opens legitimate links in Bubbles Browser tabs while rejecting popup spam.
- Added safe handling for phone, SMS, email, map, and validated app links, plus an option to open authentication pages in another installed browser.
- Added website file uploads through Android's system file picker, including single and multiple selections, website MIME restrictions, and permission-gated camera capture when a secure upload field requests it.
- Added true full-screen HTML5 video that hides browser and Android system controls during playback.
- Restored secure image, font, stylesheet, script, iframe, audio, video, storage, zoom, and JavaScript window behavior expected by modern sites.
- Fixed privacy-list parsing so path-specific, resource-specific, domain-scoped, and URL-parameter rules are not incorrectly promoted into whole-domain blocks.
- Added support for unconditional filter-list exceptions and retained supported host-only ad, tracker, malicious-site, and cryptomining rules.
- Improved website image, stylesheet, font, script, audio, and video loading by allowing legitimate first-party-owned CDNs and ordinary media-delivery requests without globally disabling protection.
- Fixed application loading on Instagram, Amazon, Walmart, Reddit, Facebook, and other sites that depend on separately hosted first-party resources; actual third-party ad and tracker requests remain eligible for blocking.
- Fixed blank-page behavior on Facebook with a narrowly scoped compatibility identity and viewport while continuing to block Facebook tracking resources on unrelated websites.
- Kept insecure mixed content blocked by default instead of weakening HTTPS protections for compatibility.
- Added secure website permission prompts for camera, microphone, protected media, and location.
- Location access is requested only when a secure website needs nearby search results; background location is not requested.
- Web pages now pause and resume with the Android activity instead of being unnecessarily recreated when the app is temporarily backgrounded.

## Streaming Hub

- Expanded the Streaming Hub with subscription video, live TV, sports, free video, creator platforms, specialty services, personal media, and audio services.
- Improved account sign-in by allowing third-party cookies only inside Streaming Hub tabs.
- Allowed secure authentication redirects while continuing to block unsafe addresses and insecure redirects.
- Added full-screen playback and website permission handling for supported streaming services.
- Some services may still require a paid account, compatible DRM support, or their official Android app.

## Privacy And Security

- Renamed the home counter to **Ads & trackers blocked**.
- Added separate Trust Center statistics for ads, trackers, fingerprinting attempts, removed tracking parameters, tracking cookies, detected CNAME trackers, malicious requests, cryptomining requests, and compatibility protections.
- Added locally cached EasyList, EasyPrivacy, AdGuard Base, AdGuard Tracking Protection, AdGuard URL Tracking Protection, Peter Lowe's list, DuckDuckGo Tracker Radar, Fanboy Annoyance, Fanboy Social, URLHaus, and NoCoin-compatible protection lists.
- Added enable and disable controls plus supported-rule counts and update status for each privacy list.
- Enabled automatic first-run downloads for recommended lists when no local cache exists.
- Fixed URLHaus parsing and NoCoin-compatible rule downloading, caching, and enforcement.
- Added per-site **Block ads and trackers for this site** controls.
- Added strict, balanced, and off modes for canvas and JavaScript fingerprint protection.
- Added recommended, strict, and off WebRTC local-IP protection modes.
- Added local safe-browsing checks for websites and risky downloads.
- Added encrypted saved passwords, strong-password generation, private password-breach checks, and user-controlled encrypted clipboard history.
- Keeps normal browsing cookies restricted while applying compatibility allowances only where needed.
- Includes no Ollama, generative AI, telemetry, analytics, or cloud synchronization.

## Profiles And Saved Settings

- Added standard, guest, child, work, and streaming profile types.
- Keeps bookmarks, history, downloads, and browser settings scoped to the selected profile.
- Preserves created and renamed profiles after app restarts and normal future APK updates.
- Preserves each profile's enabled and disabled setting choices.
- Fixed startup behavior that could overwrite a renamed default profile.
- Added local profile export and import without including profile PINs.

## Settings And Accessibility

- Connected the settings controls to real browser behavior instead of displaying inactive switches.
- Added controls for third-party cookies, safe browsing, ad and tracker blocking, and Desktop mode.
- Added large text, high contrast, reduced motion, dyslexia-friendly text, simplified UI, Focus mode, and a reading ruler.
- Added battery saver, background-tab suspension, and local diagnostics controls.
- Added a spoken accessibility preview.
- Added current-site controls and clear explanations where Android WebView limits a feature.

## Music, Downloads, And Notifications

- Added local audio playback using Android's media system.
- Added device-music loading and Android file-picker support.
- Added play and stop controls with responsive layouts.
- Added direct audio-file downloading after responsible-use consent.
- Added Android download-manager integration with active, completed, cancelled, and failed download states.
- Added download completion and failure notifications.
- Added authenticated download support by forwarding the active site's cookies, current page referrer, and WebView identity to Android Download Manager.
- Added optional Music and audio permission handling for local playback.

## Performance And Reliability

- Moved privacy-list downloading, parsing, and compilation away from the main interface thread.
- Reduced Settings and Privacy Lists rendering work to improve responsiveness after the browser has been open for a while.
- Added a Task Manager for tabs and memory information.
- Added Diagnostics and a refreshable performance snapshot.
- Updated the Android toolchain and security-related dependencies.
- Verified profile and setting persistence across restarts and normal future updates.
- Passed unit tests, Android lint, and all 16 connected Android tests for this build.

## Fresh Installation Notice

Version 1.0.10 updates the current Bubbles Browser installation when it was installed from the compatible official APK. Android retains its local profiles and settings during a normal update.

- When an older installation is detected, Bubbles Browser now offers **Remove old app** and opens Android's official uninstall confirmation.
- The prompt reminds you to back up anything needed before removal because uninstalling permanently deletes the older app's local data.
- Choose **Keep for now** when you still need time to export information from the older app.

Do not uninstall the current app before updating if you want Android to retain its local app data. Export important profile data before any update as an extra precaution.

## Requirements

- Android 10 or newer
- An enabled and updated Android System WebView
- Internet access for websites, streaming services, downloads, and privacy-list updates

## Installation

1. Download `Bubbles-Browser-Android-v1.0.10.apk` from the release assets.
2. Open the APK on the Android device.
3. Allow installation from the current browser or file manager if Android requests it.
4. Choose **Install**, then launch **Bubbles Browser**.
5. Grant only the optional permissions needed for the features you use.

If Android specifically says Advanced Protection blocked the APK, open **Settings**, search for **Advanced Protection**, temporarily turn off **Device protection**, and authenticate. Restart if Android requests it, install the verified APK, then return to the same screen and re-enable Device protection. Keep Google Play Protect enabled.

## Download Verification

- Version: `1.0.10`
- Build: `40`
- APK SHA-256: `F6C6A31E7E657AC416C622725F0212DDFA8E1431409002869372BDED125B2645`
- APK signature verified
- Runtime dependencies checked with Snyk at release time

## Known Limitations

- This is a directly downloaded early-access APK and is not currently available from Google Play.
- Website behavior depends on the Android System WebView installed on the device.
- Some streaming services may require an official app or may restrict DRM playback in embedded browsers.
- Music downloads require direct audio-file links and do not extract audio from video websites.
- Isolated profile storage requires multi-profile support in Android System WebView. Older providers use Android's shared fallback container.
- Passkeys require support from Android System WebView, the Android credential provider, and the website.
- OAuth providers can refuse embedded WebViews; use **Open in another browser** when a provider requires a browser or app-managed sign-in flow.
- Video codecs, Widevine/DRM levels, account playback, and provider restrictions are controlled by the device, Android System WebView, and each service.
- Android WebView cannot apply every desktop cosmetic-filter rule or provide full DNS-level CNAME uncloaking.
- YouTube can change its request formats at any time. The blocker intentionally favors working playback over broad rules, and server-selected advertisements may not always be identifiable through Android WebView request interception.

## Support

Email **support.bubblesthedev.webbrowser@gmail.com**. For security concerns, follow [SECURITY.md](SECURITY.md) and do not publish private security details in a public issue.
