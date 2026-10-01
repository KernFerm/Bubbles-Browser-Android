# Bubbles Browser Android 0.6.80 Build 13

Version `0.6.80` build `13` is a major mobile-browser update with a redesigned interface, broader website compatibility, expanded privacy controls, working media features, persistent profiles and settings, and no AI integration.

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
- Added true full-screen HTML5 video that hides browser and Android system controls during playback.
- Improved website image and video loading by allowing ordinary media-delivery requests that privacy lists may misclassify.
- Fixed blank-page behavior on Facebook while continuing to block Facebook tracking resources on unrelated websites.
- Added compatibility handling for websites that require mixed media content.
- Added secure website permission prompts for camera, microphone, protected media, and location.
- Location access is requested only when a secure website needs nearby search results; background location is not requested.

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
- Added optional Music and audio permission handling for local playback.

## Performance And Reliability

- Moved privacy-list downloading, parsing, and compilation away from the main interface thread.
- Reduced Settings and Privacy Lists rendering work to improve responsiveness after the browser has been open for a while.
- Added a Task Manager for tabs and memory information.
- Added Diagnostics and a refreshable performance snapshot.
- Updated the Android toolchain and security-related dependencies.
- Verified profile and setting persistence across restarts and normal future updates.
- Passed unit tests, Android lint, and all 14 connected Android tests for this build.

## Fresh Installation Notice

Version 0.6.80 installs as a new application and may appear beside an older Bubbles Browser installation. It begins with fresh profiles and settings. Data from an older installation is not transferred automatically.

Future releases can be installed over version 0.6.80 normally. Do not uninstall version 0.6.80 before updating if you want Android to retain its local app data.

## Requirements

- Android 10 or newer
- An enabled and updated Android System WebView
- Internet access for websites, streaming services, downloads, and privacy-list updates

## Installation

1. Download `Bubbles-Browser-Android-v0.6.80.apk` from the release assets.
2. Open the APK on the Android device.
3. Allow installation from the current browser or file manager if Android requests it.
4. Choose **Install**, then launch **Bubbles Browser**.
5. Grant only the optional permissions needed for the features you use.

If Android specifically says Advanced Protection blocked the APK, open **Settings**, search for **Advanced Protection**, temporarily turn off **Device protection**, and authenticate. Restart if Android requests it, install the verified APK, then return to the same screen and re-enable Device protection. Keep Google Play Protect enabled.

## Download Verification

- Version: `0.6.80`
- Build: `13`
- APK SHA-256: `97EE6AB9E3A62064D62B0794985FEC0614E15F8659289C1A35AFF53C390CE439`
- APK signature verified
- Runtime dependencies checked with Snyk at release time

## Known Limitations

- This is a directly downloaded early-access APK and is not currently available from Google Play.
- Website behavior depends on the Android System WebView installed on the device.
- Some streaming services may require an official app or may restrict DRM playback in embedded browsers.
- Music downloads require direct audio-file links and do not extract audio from video websites.
- Android limits complete cookie and website-storage isolation between browser profiles.
- Android WebView cannot apply every desktop cosmetic-filter rule or provide full DNS-level CNAME uncloaking.

## Support

Email **support.bubblesthedev.webbrowser@gmail.com**. For security concerns, follow [SECURITY.md](SECURITY.md) and do not publish private security details in a public issue.
