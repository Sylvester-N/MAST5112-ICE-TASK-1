During the setup of my React Native app, I first installed Expo, then created a new project using `expo init`. After that, I opened the project in my code editor and edited the `App.js` file by adding a few `<Text>` elements to display my name, the module title, and task details. I also used basic styles to change the background colour and font sizes.

The most difficult part of the setup was getting the text to appear nicely in the centre of the screen. At first, I used `alignItems` inside the `Text` styles, but it didn’t work. I later realised that `alignItems` only works with `View`, so I fixed it by using `textAlign: 'center'` instead. After that, everything looked good.

