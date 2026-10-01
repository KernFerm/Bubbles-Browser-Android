# Installing Bubbles Browser for Android

## Requirements

- Android 10 or newer
- Android System WebView enabled and updated
- The official Bubbles Browser APK from the project release page

## Install On Your Phone

1. On the Android device, open the [Bubbles Browser Android releases page](https://github.com/KernFerm/Bubbles-Browser-Android/releases).
2. Open the newest release and download `Bubbles-Browser-Android-v0.6.70.apk`.
3. Open the download from the browser notification or the Android **Files** app.
4. If Android blocks the installation, select **Settings** on the warning and enable **Allow from this source** for the browser or file manager you used.
5. Return to the installer and select **Install**.
6. Select **Open**, or launch **Bubbles Browser** from the app drawer.

Only allow APK installation for an app you trust. You can turn **Allow from this source** off again after installation. Do not disable Google Play Protect.

## First Launch Permissions

Bubbles Browser works for normal browsing without granting every optional permission.

- **Notifications:** allows download-completion and failure alerts.
- **Music and audio:** allows the music player to load audio already stored on the device.
- **Location:** allows a secure website to request location for nearby restaurants, stores, and local results. The app does not request background location.
- **Camera and microphone:** requested only when a secure website needs calls, recording, or media capture.

Choose **While using the app** or the closest available option when you want a feature to work. Deny permissions that you do not need.

## Verify The Download

The expected SHA-256 checksum for the version 0.6.70 APK is:

```text
1155B74B4137F8BC638238571820128658B964A1E0E0672EE20EE52354E7F598
```

On Windows PowerShell, verify a downloaded copy with:

```powershell
Get-FileHash -Algorithm SHA256 ".\Bubbles-Browser-Android-v0.6.70.apk"
```

The displayed hash must match the value above exactly.

## Install From A Windows Computer With USB

This method is optional and requires Android SDK Platform Tools plus USB debugging.

1. Enable **Developer options** and **USB debugging** on the Android device.
2. Connect the phone by USB and approve the computer on the phone.
3. Open PowerShell in the folder containing the APK.
4. Confirm the phone is detected:

```powershell
adb devices
```

5. Install or update the application:

```powershell
adb install -r ".\Bubbles-Browser-Android-v0.6.70.apk"
```

When `adb` is not on PATH, use the full path to `platform-tools\adb.exe`.

## Updating

Download the newer official APK and install it over the existing application. Android retains local app data when the package name and signing certificate match. Export important profile data before an update.

## Troubleshooting

### Android Says The App Cannot Be Installed

- Confirm the device runs Android 10 or newer.
- Download the APK again in case the file is incomplete.
- Make sure the app opening the APK has **Allow from this source** enabled.
- If Android reports a signature conflict, the installed copy was signed differently. Export any needed data, uninstall that copy, and install the official release APK.

### Android Warns About An Unknown App

This warning is normal for an APK installed outside Google Play. Confirm that the APK came from the official repository and verify its SHA-256 checksum before continuing.

### The App Opens But Websites Do Not Load

- Confirm Wi-Fi or mobile data works.
- Update Android System WebView through Google Play.
- Reload the page or try an `https://` address.
- Temporarily turn off ad and tracker blocking to test whether a site requires a compatibility exception.

### A Permission Was Denied

Open **Android Settings > Apps > Bubbles Browser > Permissions**, select the permission, and change its access. Android menu wording varies by manufacturer and Android version.

## Support

Email **support.bubblesthedev.webbrowser@gmail.com** with the app version, Android version, device model, and steps that reproduce the problem. Remove personal information from screenshots and logs.
