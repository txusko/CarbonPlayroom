# CarbonPlayroom
Add the Sage Carbon Library into Seek's Playroom.

![Screenshot 2019-07-26 at 14 21 42](https://user-images.githubusercontent.com/2463933/61951250-bf4b5180-afb0-11e9-8411-8a332180fbd3.png)

- Code: https://github.com/txusko/CarbonPlayroom
- URL: https://txusko.github.io/CarbonPlayroom/

## Chrome Extension
Add a link to a carbon component page to see the example in Playroom.

![Screenshot 2019-07-26 at 09 38 52](https://user-images.githubusercontent.com/2463933/61951156-70052100-afb0-11e9-8de3-52883cedfe74.png)

- Code: https://github.com/txusko/CarbonPlayroomExtension/
- URL: https://chrome.google.com/webstore/detail/carbon-playroom-extension/cfebajcbfhglacbhbfoknakbancodbbp

#### - How to?
Install the extension and navigate to any carbon component (eg. [https://carbon.sage.com/components/carousel](https://carbon.sage.com/components/carousel)). You'll be able to see a new link in the top-right corner near the `View on Github` link.
Just click it!

## Bookmarklet
Add a bookmarklet in your bookmarks to view the current carbon component example in Playroom.

#### - Install it
Make a new bookmark in your browser (right-click on the [bookmarks bar](https://support.google.com/chrome/answer/95745?hl=en) and click `Add Page...`)
  - For the "Name" you might put "CarbonPlayroom".
  - Copy the code block below, paste this into the "Location" of a new bookmark.

```
javascript:try {window.open('https://txusko.github.io/CarbonPlayroom/#?code='+btoa(document.getElementsByClassName('demo-code')[0].innerText).replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, ''));}catch(e) { }void(0);
```

#### - How to?
Navigate to any carbon component (eg. [https://carbon.sage.com/components/carousel](https://carbon.sage.com/components/carousel)) and click the bookmarklet.
