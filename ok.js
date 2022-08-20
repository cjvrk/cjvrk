// ! VIEW YOUR CURRENT AVATAR THUMBNAIL CUSTOMIZATIONS: https://avatar.roblox.com/v1/avatar/thumbnail-customizations
// ! This script is using the API of an intentional feature, it's not a bug. Roblox may disable the ability for the thumbnail generator to use thumbnail customizations **at any time**.
// ! The API was enabled two times before the Profile Picture Editor in the app was enabled; see: https://twitter.com/RobloxTrackers/status/1512460262607048715
// ! You probably would only get terminated if you get caught using the feature inappropriately.

// doing ajax because easy csrf handling w/their middleware lol
$.ajax({
  method: "POST",
  url: "https://avatar.roblox.com/v1/avatar/thumbnail-customization",
  contentType: "application/json",
  data: JSON.stringify({
    "camera": {
        // Ranges are inclusive.
        "distanceScale": 2, // 0.5 to 4
        "fieldOfViewDeg": 30, // 15 to 45
        "xRotDeg": 0, // -20 to 20
        "yRotDeg": 0 // -60 to 60
    },
    "emoteAssetId": 0, // emote asset id
    // idleAnimationAssetId used to exist here, it has since been removed.
    "thumbnailType": 1 // 1 = Closeup (headshot), 2 = FullBody (bodyshot). Closeup and FullBody can have different configurations.
  })
});