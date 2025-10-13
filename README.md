# Healthcare App (React Native + Expo)

A starter that recreates the UI and basic flows from your mockups: Welcome, Login, Home, Messages, Find Doctor, and Edit Profile. It is built with Expo + React Navigation and is organized for you to easily drop in your own logos/images.

## Folder structure

- `App.tsx` – App entrypoint and navigation container
- `src/navigation/RootNavigator.tsx` – Stack + Bottom Tabs
- `src/screens/*` – All screens matching your images
- `src/components/*` – Reusable UI components (button, search, segmented control, doctor card)
- `src/theme/*` – Colors and spacing
- `src/assets/index.ts` – Central mapping of image assets (uses placeholders you can replace)
- `src/data/*` – Sample data for doctors and specialties

## Replace the images/logos

Put your files under `src/assets/images/` (create it if missing) and then update the sources in `src/assets/index.ts` to use local requires. Example:

```ts
// src/assets/index.ts
export const Assets = {
  logo: require('./images/your-logo.png'),
  doctorHero: require('./images/hero-doctor.png'),
  doctor1: require('./images/doctor-1.png'),
  doctor2: require('./images/doctor-2.png'),
  bannerDoctor: require('./images/banner-doctor.png')
};
```

> Until you replace them, the app uses web placeholders so it runs out of the box.

## Prerequisites

- Node.js 18+
- `npm i -g expo-cli` or use `npx expo`

## Install and run

```bash
# inside this folder
npm install

# start the dev server
npm run start
# press: a = Android emulator/device, i = iOS simulator (macOS), w = web
```

If you see Reanimated installation warnings, restart the dev server after the first build. The project already includes the required Babel plugin.

## Notes that map the UI to screens

- Welcome screen: `WelcomeScreen.tsx` → "Get Started" goes to Login
- Login screen: `LoginScreen.tsx` → eye toggles password; "Login" opens the main tabs
- Home screen: `HomeScreen.tsx` → blue banner, specialties, recommended doctors; "See All" opens Find Doctor
- Messages: `MessagesScreen.tsx` with chips for All/Appointment/Lab Result
- Find Doctor: `FindDoctorScreen.tsx` with search, category tiles, and top doctors
- Edit Profile: `ProfileScreen.tsx` with editable fields and Update button
- Bottom tabs: Home, Messages, Appointments (placeholder), Notifications (placeholder), Profile

## Customization tips

- Colors: edit `src/theme/colors.ts`
- Spacing: edit `src/theme/spacing.ts`
- Sample doctor data: `src/data/sampleDoctors.ts`
- Icons: we use `@expo/vector-icons` (Ionicons). Replace names as you like.

## Production builds

```bash
# Android APK/AAB
npx expo run:android

# iOS
npx expo run:ios
```

## Troubleshooting

- If Metro bundler fails on missing local assets, ensure you kept the web placeholder URLs or updated `src/assets/index.ts` to use `require(...)` with actual files present.
- Clear cache with `npm run start` then press `c` to clear, or run `expo start -c`.
