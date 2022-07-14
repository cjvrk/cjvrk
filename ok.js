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
    // these can both be 0 for no animation, but both can't be non-zero at the same time
    "idleAnimationAssetId": 0, // idle animation asset id
    "thumbnailType": 1 // 1 = Closeup (headshot), 2 = FullBody (bodyshot). Closeup and FullBody can have different configurations.
  })
});