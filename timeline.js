/* DEAD AIR v0.27: intact glass and restrained mechanical micro-scratches. */
window.TIMELINE = {
  "version": "0.27",
  "duration": 213.68,
  "music": "assets/bgm.mp3",
  "art": {
    "city": "assets/props/city.webp",
    "emptyWindows": "assets/backgrounds/empty-windows.webp",
    "blackStrings": "assets/backgrounds/black-strings.webp",
    "memoryCut": "assets/backgrounds/print/memory-cut.webp",
    "archiveCut": "assets/backgrounds/print/archive-cut.webp",
    "voidCut": "assets/backgrounds/print/void-cut.webp",
    "petalRoad": "assets/backgrounds/petal-road.webp",
    "paperVault": "assets/backgrounds/paper-vault.webp",
    "morningVault": "assets/backgrounds/morning-vault.webp"
  },
  "props": {
    "frame": "assets/props/frame.webp",
    "faceA": "assets/props/face-a.webp",
    "faceB": "assets/props/face-b.webp",
    "faceC": "assets/props/face-c.webp",
    "faceEmpty": "assets/props/face-empty.webp",
    "frameCut": "assets/props/print/frame-cut.webp",
    "printShutter": "assets/props/print/print-shutter.webp",
    "sobClose": "assets/character/details/covered-face.png",
    "letterClose": "assets/character/details/gripped-envelope.png",
    "reachClose": "assets/character/details/reach-dark.png",
    "keysClose": "assets/character/details/clasped-keys.png",
    "absenceClose": "assets/character/details/open-hands.png",
    "roomKeys": "assets/props/kept/room-keys.png",
    "repairLedger": "assets/props/kept/repair-ledger.png",
    "residentNote": "assets/props/kept/resident-note.png",
    "emptyCup": "assets/props/kept/empty-cup.png",
    "letterStudyClose": "assets/character/details/held-letter.png",
    "reachStudyClose": "assets/character/details/reach-light.png",
    "petalRose": "assets/props/fragments/petal-rose.webp",
    "petalBlush": "assets/props/fragments/petal-blush.webp",
    "petalDust": "assets/props/fragments/petal-dust.webp",
    "petalIvory": "assets/props/fragments/petal-ivory.webp",
    "petalFold": "assets/props/fragments/petal-fold.webp",
    "petalCup": "assets/props/fragments/petal-cup.webp",
    "petalWide": "assets/props/fragments/petal-wide.webp",
    "petalCurl": "assets/props/fragments/petal-curl.webp",
    "rentReceipt": "assets/props/fragments/rent-receipt.webp",
    "bluePen": "assets/props/fragments/blue-pen.webp",
    "roomTag": "assets/props/fragments/room-tag.webp",
    "pressedNote": "assets/props/fragments/pressed-note.webp",
    "envelope": "assets/props/envelope.webp",
    "looseKeys": "assets/props/keys.webp",
    "pressedFlower": "assets/props/pressed-flower.webp",
    "memoryTrace": "assets/props/print/memory-trace.webp",
    "vacantDoor": "assets/props/kept/vacant-door.png",
    "archiveSleeve": "assets/props/kept/archive-sleeve.png"
  },
  "portraits": {
    "standShadow": "assets/character/shadows/stand-bowed.png",
    "standBowed": "assets/character/shadows/stand-bowed.png",
    "standReachShadow": "assets/character/shadows/stand-reaching-profile.png",
    "standReachProfile": "assets/character/shadows/stand-reaching-profile.png",
    "standReachOpen": "assets/character/shadows/stand-reaching-open.png",
    "standReachHigh": "assets/character/shadows/stand-reaching-high.png",
    "reachShadow": "assets/character/shadows/kneel-reaching.png",
    "reachSoftShadow": "assets/character/shadows/kneel-reaching-soft.png",
    "sobShadow": "assets/character/shadows/sit-sobbing.png",
    "letterSit": "assets/character/shadows/sit-letter.webp",
    "coveredFace": "assets/character/details/covered-face.png",
    "openPalms": "assets/character/details/open-hands.png"
  },
  "animations": {
    "walk": {
      "src": "assets/character/animations/walk/{frame}.webp",
      "frameCount": 30,
      "fps": 10,
      "loop": true,
      "posterFrame": 0,
      "registration": {
        "x": 8,
        "y": 0,
        "width": 694,
        "height": 1239
      }
    },
    "walk2": {
      "src": "assets/character/animations/walk2/{frame}.webp",
      "frameCount": 30,
      "fps": 10,
      "loop": true,
      "posterFrame": 0,
      "registration": {
        "x": 8,
        "y": 0,
        "width": 694,
        "height": 1239
      }
    },
    "cry": {
      "src": "assets/character/animations/cry/{frame}.webp",
      "frameCount": 72,
      "fps": 10,
      "loop": false,
      "posterFrame": 71,
      "width": 684,
      "height": 1167,
      "sourceSize": [
        720,
        1280
      ],
      "crop": {
        "x": 36,
        "y": 94,
        "width": 684,
        "height": 1167
      },
      "sourceName": "cry.mov",
      "sourceSha256": "63f2acdef99059aeff8389da8ec99f45b40b9e87de92bd79d4c0913b453149b8",
      "duration": 7.2,
      "bytes": 23407264
    },
    "lookback": {
      "src": "assets/character/animations/lookback/{frame}.webp",
      "frameCount": 55,
      "fps": 10,
      "loop": false,
      "posterFrame": 54,
      "width": 612,
      "height": 1211,
      "sourceSize": [
        720,
        1280
      ],
      "crop": {
        "x": 85,
        "y": 44,
        "width": 612,
        "height": 1211
      },
      "sourceName": "lookback.mov",
      "sourceSha256": "93409fd22bcfea7adc6ba1c743e041c70f14af6388561aecae21e19c108310bd",
      "duration": 5.5,
      "bytes": 18720928
    },
    "lowhead": {
      "src": "assets/character/animations/lowhead/{frame}.webp",
      "frameCount": 79,
      "fps": 10,
      "loop": false,
      "posterFrame": 78,
      "width": 660,
      "height": 1250,
      "sourceSize": [
        720,
        1280
      ],
      "crop": {
        "x": 57,
        "y": 17,
        "width": 660,
        "height": 1250
      },
      "registration": {
        "x": 12,
        "y": 12,
        "width": 636,
        "height": 1226
      },
      "sourceName": "lowhead.mov",
      "sourceSha256": "c4545e18207af8f007d9871b22131507d163c0b2ad06c00739670a380ca4fb0d",
      "duration": 7.9,
      "bytes": 32061886
    }
  },
  "scenes": [
    {
      "t": 0,
      "id": "rain-and-departure",
      "stage": "rain",
      "pose": "walk",
      "action": "恢复走路动画，以统一深色剪影呈现在雨站；背景运动继续沿用原有设置。",
      "x": 77,
      "y": -3,
      "scale": 1.01,
      "opacity": 1,
      "treatment": "silhouette",
      "silhouetteColor": "#150009",
      "camera": 2,
      "pan": 0.02,
      "subtitleAlign": "left",
      "subtitleX": 6,
      "subtitleY": 8,
      "transition": "fade",
      "background": "city",
      "backgroundMotion": {
        "zoom": 2,
        "fromX": 22,
        "toX": -22,
        "startTime": 0,
        "duration": 31,
        "ease": "linear"
      },
      "stickers": [],
      "framing": "full",
      "motion": 0,
      "followExpressions": false,
      "animationLoop": true,
      "animationSpeed": 0.7,
      "weather": "rain",
      "rainIntensity": 1
    },
    {
      "t": 17,
      "id": "half-in-the-light",
      "stage": "departure",
      "pose": null,
      "action": "同一站台的光收窄，人物退场。只留下半明半暗的空框，不把歌词中的 you 具体化。",
      "x": 77,
      "y": -3,
      "scale": 1.01,
      "opacity": 1,
      "treatment": "color",
      "camera": 2,
      "pan": 0.02,
      "subtitleAlign": "left",
      "subtitleX": 6,
      "subtitleY": 8,
      "transition": "fade",
      "background": "city",
      "backgroundMotion": {
        "zoom": 2.8,
        "fromX": -20,
        "toX": -19,
        "fromY": -18,
        "toY": -17,
        "startTime": 17,
        "duration": 3,
        "ease": "linear"
      },
      "stickers": [],
      "weather": "rain",
      "rainIntensity": 0.8,
      "followExpressions": false
    },
    {
      "t": 21,
      "id": "half-in-the-light-2",
      "stage": "departure",
      "pose": null,
      "action": "同一站台的光收窄，人物退场。只留下半明半暗的空框，不把歌词中的 you 具体化。",
      "x": 77,
      "y": -3,
      "scale": 1.01,
      "opacity": 1,
      "treatment": "color",
      "camera": 2,
      "pan": 0.02,
      "subtitleAlign": "left",
      "subtitleX": 6,
      "subtitleY": 8,
      "transition": "fade",
      "background": "city",
      "backgroundMotion": {
        "zoom": 2.8,
        "fromX": 45,
        "toX": 50,
        "fromY": 60,
        "toY": 65,
        "startTime": 21,
        "duration": 10,
        "ease": "linear"
      },
      "stickers": [],
      "weather": "rain",
      "rainIntensity": 0.8,
      "followExpressions": false
    },
    {
      "t": 24.5,
      "id": "half-in-the-light-return",
      "stage": "departure",
      "pose": "walk",
      "action": "You turned your face：重新开始深色步行剪影；27.6 秒由一道窄光扫过，衔接完整转身。",
      "x": 75,
      "y": 5,
      "scale": 0.86,
      "opacity": 1,
      "treatment": "silhouette",
      "silhouetteColor": "#170b17",
      "camera": 2,
      "pan": 0.02,
      "subtitleAlign": "left",
      "subtitleX": 6,
      "subtitleY": 8,
      "transition": "cut",
      "background": "city",
      "backgroundMotion": {
        "zoom": 1.5,
        "fromX": -22,
        "toX": -24,
        "startTime": 25,
        "duration": 6,
        "ease": "linear"
      },
      "stickers": [],
      "framing": "full",
      "motion": 0,
      "followExpressions": false,
      "animationLoop": true,
      "animationSpeed": 0.72,
      "animationTimeStart": 24.5,
      "weather": "rain",
      "rainIntensity": 0.8,
      "printShadow": false,
      "rimColor": "#bc7b91",
      "fitVisible": true,
      "animationStart": 0
    },
    {
      "t": 27.6,
      "id": "first-realisation-through-light",
      "stage": "departure",
      "pose": "lowhead",
      "action": "窄光转场后使用原片尾 lowhead，保持深色剪影。28 秒 And I knew then 起动作，以 10 帧/秒的画面节奏播放，31 秒收至末帧，过渡开始前段保持首帧。",
      "x": 75,
      "y": 5,
      "scale": 0.86,
      "opacity": 1,
      "treatment": "silhouette",
      "silhouetteColor": "#170b17",
      "camera": 2,
      "pan": 0.02,
      "subtitleAlign": "left",
      "subtitleX": 6,
      "subtitleY": 8,
      "transition": "light-cut",
      "background": "city",
      "backgroundMotion": {
        "zoom": 1.5,
        "fromX": -22,
        "toX": -24,
        "startTime": 25,
        "duration": 6,
        "ease": "linear"
      },
      "stickers": [],
      "framing": "full",
      "motion": 0,
      "followExpressions": false,
      "animationLoop": false,
      "animationSpeed": 0.1,
      "animationTimeStart": 28,
      "weather": "rain",
      "rainIntensity": 0.8,
      "printShadow": false,
      "rimColor": "#bc7b91",
      "fitVisible": true,
      "animationStart": 0,
      "animationEndTime": 31,
      "animationFps": 10,
      "transitionDuration": 0.32
    },
    {
      "t": 31.5,
      "id": "first-plea",
      "stage": "memory",
      "pose": "cry",
      "action": "第一遍 Falling flowers, stay 保留 MOV 的举手起始帧。39 秒开始收手到胸前，人物、镜头和站位连续。",
      "x": 75,
      "y": 5,
      "scale": 0.86,
      "framing": "full",
      "printShadow": false,
      "motion": 0,
      "opacity": 1,
      "treatment": "color",
      "camera": 1,
      "subtitleAlign": "left",
      "subtitleX": 6,
      "subtitleY": 8,
      "transition": "cut",
      "background": "memoryCut",
      "stickers": [],
      "backgroundMotion": {
        "zoom": 1.02,
        "zoomTo": 1.06,
        "fromX": 0.8,
        "toX": -0.8,
        "startTime": 31,
        "duration": 30,
        "ease": "smooth"
      },
      "petals": {
        "startTime": 31,
        "end": 61,
        "count": 7,
        "drift": -0.1
      },
      "followExpressions": false,
      "animationTimeStart": 31,
      "animationStart": 0,
      "animationSpeed": 0,
      "animationLoop": false
    },
    {
      "t": 39,
      "id": "first-you-were-here",
      "stage": "memory",
      "pose": "cry",
      "action": "You were here 开始慢放完整的收手到胸口动作；首帧与前一节点相同，61 秒人物退场。",
      "x": 75,
      "y": 5,
      "scale": 0.86,
      "framing": "full",
      "printShadow": false,
      "motion": 0,
      "opacity": 1,
      "treatment": "color",
      "camera": 1,
      "subtitleAlign": "left",
      "subtitleX": 6,
      "subtitleY": 8,
      "transition": "cut",
      "background": "memoryCut",
      "stickers": [],
      "backgroundMotion": {
        "zoom": 1.02,
        "zoomTo": 1.06,
        "fromX": 0.8,
        "toX": -0.8,
        "startTime": 31,
        "duration": 30,
        "ease": "smooth"
      },
      "petals": {
        "startTime": 31,
        "end": 61,
        "count": 7,
        "drift": -0.1
      },
      "followExpressions": false,
      "animationTimeStart": 39,
      "animationStart": 0,
      "animationSpeed": 1,
      "animationLoop": false,
      "animationEndTime": 61
    },
    {
      "t": 61,
      "id": "the-folded-name",
      "stage": "keepsakes",
      "pose": null,
      "action": "只保留信封、住客便条、钥匙、账单和蓝笔；移除拿信人物与所有人物局部。",
      "x": 73,
      "y": 7,
      "scale": 0.76,
      "framing": "full",
      "printShadow": false,
      "motion": 0,
      "opacity": 1,
      "treatment": "color",
      "camera": 1,
      "subtitleAlign": "left",
      "subtitleX": 6,
      "subtitleY": 8,
      "transition": "fade",
      "background": "memoryCut",
      "stickers": [
        {
          "id": "pocket-mount",
          "asset": "frameCut",
          "start": 61,
          "end": 69,
          "x": 78,
          "y": 37,
          "height": 55,
          "rotation": -3,
          "opacity": 0.35,
          "layer": "back"
        },
        {
          "id": "kept-repair-ledger",
          "asset": "repairLedger",
          "x": 58,
          "y": 55,
          "height": 30,
          "rotation": -8,
          "start": 61,
          "end": 69,
          "opacity": 0.95,
          "layer": "front",
          "fadeIn": 0.7,
          "fadeOut": 0.4
        },
        {
          "id": "kept-room-keys",
          "asset": "roomKeys",
          "x": 54,
          "y": 69,
          "height": 19,
          "rotation": 11,
          "start": 61,
          "end": 69,
          "opacity": 0.95,
          "layer": "front",
          "fadeIn": 0.7,
          "fadeOut": 0.4
        },
        {
          "id": "kept-resident-note",
          "asset": "residentNote",
          "x": 42,
          "y": 49,
          "height": 27,
          "rotation": 5,
          "start": 61,
          "end": 69,
          "opacity": 0.95,
          "layer": "front",
          "fadeIn": 0.7,
          "fadeOut": 0.4
        },
        {
          "id": "kept-empty-cup",
          "asset": "emptyCup",
          "x": 44,
          "y": 74,
          "height": 12,
          "rotation": -2,
          "start": 61,
          "end": 69,
          "opacity": 0.95,
          "layer": "front",
          "fadeIn": 0.7,
          "fadeOut": 0.4
        },
        {
          "id": "folded-old-rent-receipt",
          "asset": "rentReceipt",
          "start": 65,
          "end": 69,
          "x": 32,
          "y": 62,
          "height": 24,
          "rotation": 8,
          "opacity": 0.94,
          "layer": "front",
          "fadeIn": 0.7,
          "fadeOut": 0.4
        },
        {
          "id": "cracked-blue-pen",
          "asset": "bluePen",
          "start": 65,
          "end": 69,
          "x": 44,
          "y": 68,
          "height": 20,
          "rotation": -12,
          "opacity": 0.94,
          "layer": "front",
          "fadeIn": 0.7,
          "fadeOut": 0.4
        },
        {
          "id": "folded-envelope",
          "asset": "envelope",
          "x": 77,
          "y": 46,
          "height": 55,
          "rotation": -5,
          "start": 61,
          "end": 69,
          "opacity": 0.95,
          "layer": "back",
          "fadeIn": 0.35
        }
      ],
      "backgroundMotion": {
        "zoom": 1.1,
        "fromX": -1,
        "toX": -2,
        "startTime": 61,
        "duration": 8,
        "ease": "smooth"
      },
      "followExpressions": false
    },
    {
      "t": 69,
      "id": "faces-in-transit",
      "stage": "faces",
      "pose": "walk2",
      "action": "列车窗段走路。匿名黑脸画框以更快的固定速度流过，不再逐渐加速；76.5 秒换背景时步行动作与站位不重置。",
      "x": 79,
      "y": 5,
      "scale": 0.86,
      "framing": "full",
      "printShadow": false,
      "motion": 0,
      "opacity": 1,
      "treatment": "silhouette",
      "camera": 1,
      "subtitleAlign": "left",
      "subtitleX": 6,
      "subtitleY": 8,
      "transition": "fade",
      "background": "emptyWindows",
      "stickers": [
        {
          "id": "masked-window-1",
          "asset": "frame",
          "content": "faceA",
          "start": 69,
          "end": 76.5,
          "x": -20,
          "y": 32,
          "height": 63,
          "rotation": -7,
          "opacity": 0.92,
          "layer": "back",
          "motion": {
            "preset": "faces",
            "index": 0,
            "count": 6,
            "depth": 1,
            "anchorX": -20,
            "startTime": 69,
            "duration": 8,
            "speed": 0.14
          }
        },
        {
          "id": "masked-window-2",
          "asset": "frame",
          "content": "faceB",
          "start": 69,
          "end": 76.5,
          "x": 4.166666666666668,
          "y": 39,
          "height": 56,
          "rotation": 6,
          "opacity": 0.92,
          "layer": "back",
          "motion": {
            "preset": "faces",
            "index": 1,
            "count": 6,
            "depth": 0.97,
            "anchorX": 4.166666666666668,
            "startTime": 69,
            "duration": 8,
            "speed": 0.14
          }
        },
        {
          "id": "masked-window-3",
          "asset": "frame",
          "content": "faceC",
          "start": 69,
          "end": 76.5,
          "x": 28.333333333333336,
          "y": 31,
          "height": 65,
          "rotation": -4,
          "opacity": 0.92,
          "layer": "back",
          "motion": {
            "preset": "faces",
            "index": 2,
            "count": 6,
            "depth": 1.03,
            "anchorX": 28.333333333333336,
            "startTime": 69,
            "duration": 8,
            "speed": 0.14
          }
        },
        {
          "id": "masked-window-4",
          "asset": "frame",
          "content": "faceA",
          "start": 69,
          "end": 76.5,
          "x": 52.5,
          "y": 38,
          "height": 58,
          "rotation": 8,
          "opacity": 0.92,
          "layer": "back",
          "motion": {
            "preset": "faces",
            "index": 3,
            "count": 6,
            "depth": 1,
            "anchorX": 52.5,
            "startTime": 69,
            "duration": 8,
            "speed": 0.14
          }
        },
        {
          "id": "masked-window-5",
          "asset": "frame",
          "content": "faceB",
          "start": 69,
          "end": 76.5,
          "x": 76.66666666666667,
          "y": 34,
          "height": 62,
          "rotation": -6,
          "opacity": 0.92,
          "layer": "back",
          "motion": {
            "preset": "faces",
            "index": 4,
            "count": 6,
            "depth": 0.96,
            "anchorX": 76.66666666666667,
            "startTime": 69,
            "duration": 8,
            "speed": 0.14
          }
        },
        {
          "id": "masked-window-6",
          "asset": "frame",
          "content": "faceC",
          "start": 69,
          "end": 76.5,
          "x": 100.83333333333333,
          "y": 41,
          "height": 54,
          "rotation": 3,
          "opacity": 0.92,
          "layer": "back",
          "motion": {
            "preset": "faces",
            "index": 5,
            "count": 6,
            "depth": 1.04,
            "anchorX": 100.83333333333333,
            "startTime": 69,
            "duration": 8,
            "speed": 0.14
          }
        }
      ],
      "backgroundTint": "#17131b60",
      "backgroundMotion": {
        "zoom": 1.1,
        "fromX": 2,
        "toX": -2,
        "startTime": 69,
        "duration": 8,
        "ease": "linear"
      },
      "followExpressions": false,
      "silhouetteColor": "#170f1c",
      "rimColor": "#d69aa4",
      "animationTimeStart": 69,
      "animationLoop": true,
      "animationSpeed": 0.72,
      "fitVisible": true,
      "animationStart": 0
    },
    {
      "t": 76.5,
      "id": "wind-in-the-wires",
      "stage": "wind",
      "pose": "walk2",
      "action": "76.5 秒用列车窗框扫过背景，从匿名相片过渡到电线风景；步行前景只绘制一次，保持动作连续。",
      "camera": 1,
      "transition": "window-wipe",
      "subtitleAlign": "left",
      "subtitleX": 6,
      "subtitleY": 8,
      "background": "blackStrings",
      "backgroundMotion": {
        "zoom": 1.12,
        "fromX": 1.5,
        "toX": -1.5,
        "fromY": 0,
        "toY": 0.7,
        "startTime": 76.5,
        "duration": 13.5,
        "ease": "smooth"
      },
      "stickers": [],
      "petals": {
        "startTime": 76.5,
        "end": 90,
        "count": 8,
        "drift": -0.27
      },
      "followExpressions": false,
      "x": 79,
      "y": 5,
      "scale": 0.86,
      "framing": "full",
      "printShadow": false,
      "motion": 0,
      "opacity": 1,
      "fitVisible": true,
      "animationTimeStart": 69,
      "animationStart": 0,
      "animationSpeed": 0.72,
      "animationLoop": true,
      "treatment": "silhouette",
      "silhouetteColor": "#170f1c",
      "rimColor": "#d69aa4",
      "transitionDuration": 0.72
    },
    {
      "t": 83,
      "id": "second-turn-through-light",
      "stage": "wind",
      "pose": "lookback",
      "action": "You turned your head：窄光扫过后接回头 MOV。动作从头到尾慢放到 90 秒，不在 moment broke 重新开始。",
      "camera": 1,
      "transition": "light-cut",
      "subtitleAlign": "left",
      "subtitleX": 6,
      "subtitleY": 8,
      "background": "blackStrings",
      "backgroundMotion": {
        "zoom": 1.12,
        "fromX": 1.5,
        "toX": -1.5,
        "fromY": 0,
        "toY": 0.7,
        "startTime": 76.5,
        "duration": 13.5,
        "ease": "smooth"
      },
      "stickers": [],
      "petals": {
        "startTime": 76.5,
        "end": 90,
        "count": 8,
        "drift": -0.27
      },
      "followExpressions": false,
      "x": 79,
      "y": 5,
      "scale": 0.86,
      "framing": "full",
      "printShadow": false,
      "motion": 0,
      "opacity": 1,
      "fitVisible": false,
      "animationTimeStart": 83,
      "animationStart": 0,
      "animationSpeed": 0.72,
      "animationLoop": false,
      "treatment": "silhouette",
      "silhouetteColor": "#170f1c",
      "rimColor": "#d69aa4",
      "animationEndTime": 90,
      "transitionDuration": 0.28
    },
    {
      "t": 90,
      "id": "second-plea",
      "stage": "possession",
      "pose": "cry",
      "action": "第二遍副歌先停在举手姿态，98 秒同一人物开始收手；不插入盘腿素材。",
      "x": 75,
      "y": 5,
      "scale": 0.86,
      "framing": "full",
      "printShadow": false,
      "motion": 0,
      "opacity": 1,
      "treatment": "color",
      "camera": 1,
      "subtitleAlign": "left",
      "subtitleX": 6,
      "subtitleY": 8,
      "transition": "fade",
      "background": "memoryCut",
      "stickers": [],
      "backgroundMotion": {
        "zoom": 1.1,
        "zoomTo": 1.16,
        "fromX": 0,
        "toX": -2,
        "startTime": 90,
        "duration": 22,
        "ease": "smooth"
      },
      "petals": {
        "startTime": 90,
        "end": 112,
        "count": 8,
        "drift": -0.1
      },
      "followExpressions": false,
      "animationTimeStart": 90,
      "animationStart": 0,
      "animationSpeed": 0,
      "animationLoop": false
    },
    {
      "t": 98,
      "id": "second-you-were-here",
      "stage": "possession",
      "pose": "cry",
      "action": "You were here 后把手收至胸前，106 秒转入空掌与离开的信件。",
      "x": 75,
      "y": 5,
      "scale": 0.86,
      "framing": "full",
      "printShadow": false,
      "motion": 0,
      "opacity": 1,
      "treatment": "color",
      "camera": 1,
      "subtitleAlign": "left",
      "subtitleX": 6,
      "subtitleY": 8,
      "transition": "cut",
      "background": "memoryCut",
      "stickers": [],
      "backgroundMotion": {
        "zoom": 1.1,
        "zoomTo": 1.16,
        "fromX": 0,
        "toX": -2,
        "startTime": 90,
        "duration": 22,
        "ease": "smooth"
      },
      "petals": {
        "startTime": 90,
        "end": 112,
        "count": 8,
        "drift": -0.1
      },
      "followExpressions": false,
      "animationTimeStart": 98,
      "animationStart": 0,
      "animationSpeed": 1,
      "animationLoop": false,
      "animationEndTime": 106
    },
    {
      "t": 106,
      "id": "nothing-left-in-the-palms",
      "stage": "afterimage",
      "pose": "reachShadow",
      "followExpressions": false,
      "background": "voidCut",
      "backgroundTint": "#17131b33",
      "transition": "cut",
      "subtitleAlign": "left",
      "subtitleX": 6,
      "subtitleY": 8,
      "backgroundMotion": {
        "zoom": 1.08,
        "fromX": 0.5,
        "toX": -1,
        "startTime": 106,
        "duration": 6,
        "ease": "smooth"
      },
      "action": "106–112 秒只保留跪姿举手的人物与背景，不再出现信封或其他前景物件。",
      "stickers": [],
      "petals": {
        "startTime": 106,
        "end": 112,
        "count": 5,
        "drift": -0.18
      },
      "x": 70,
      "y": 6,
      "scale": 0.86,
      "framing": "full",
      "treatment": "color",
      "printShadow": false,
      "motion": 0,
      "opacity": 1
    },
    {
      "t": 112,
      "id": "solo-memory-flashback",
      "stage": "flashback",
      "pose": null,
      "action": "112–135.5 秒纯物件硬切记忆，约每秒 3.4 张，不出现 Koharu 或她的身体局部。",
      "x": 75,
      "y": 8,
      "scale": 0.68,
      "framing": "full",
      "printShadow": false,
      "motion": 0,
      "opacity": 1,
      "treatment": "color",
      "camera": 1,
      "subtitleAlign": "left",
      "subtitleX": 6,
      "subtitleY": 8,
      "transition": "cut",
      "background": "archiveCut",
      "stickers": [],
      "backgroundTint": "#17131b9c",
      "flashbacks": [
        {
          "t": 112,
          "id": "memory-cut-001",
          "background": "city",
          "layout": "strips",
          "layers": [
            {
              "asset": "emptyCup",
              "x": 67,
              "y": 65,
              "height": 22.32,
              "rotation": 0,
              "opacity": 1
            },
            {
              "asset": "rentReceipt",
              "x": 47,
              "y": 54,
              "height": 27.9,
              "rotation": 11,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.8,
            "fromX": -18,
            "fromY": -2
          },
          "weather": "rain",
          "rainIntensity": 0.8
        },
        {
          "t": 112.29375,
          "id": "memory-cut-002",
          "background": "emptyWindows",
          "layout": "strips",
          "layers": [
            {
              "asset": "frame",
              "x": 29,
              "y": 43,
              "height": 76.25999999999999,
              "rotation": -6,
              "opacity": 1,
              "content": "faceB"
            },
            {
              "asset": "frame",
              "x": 68,
              "y": 41,
              "height": 90.21,
              "rotation": 5,
              "opacity": 1,
              "content": "faceA"
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": 0,
            "fromY": -2
          }
        },
        {
          "t": 112.5875,
          "id": "memory-cut-003",
          "background": "emptyWindows",
          "layout": "strips",
          "layers": [
            {
              "asset": "frame",
              "x": 35,
              "y": 43,
              "height": 76.25999999999999,
              "rotation": -5,
              "opacity": 1,
              "content": "faceEmpty"
            },
            {
              "asset": "archiveSleeve",
              "x": 71,
              "y": 46,
              "height": 71.61,
              "rotation": 7,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": 0,
            "fromY": -2
          }
        },
        {
          "t": 112.88125,
          "id": "memory-cut-004",
          "background": "morningVault",
          "layout": "aperture",
          "layers": [
            {
              "asset": "vacantDoor",
              "x": 66,
              "y": 48,
              "height": 79.97999999999999,
              "rotation": -2,
              "opacity": 1
            },
            {
              "asset": "roomTag",
              "x": 34,
              "y": 63,
              "height": 26.97,
              "rotation": 9,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": 0,
            "fromY": -2
          }
        },
        {
          "t": 113.175,
          "id": "memory-cut-005",
          "background": "paperVault",
          "layout": "contact",
          "layers": [],
          "splice": 0,
          "cells": [
            "envelope",
            "roomTag",
            "emptyCup",
            "pressedNote",
            "looseKeys",
            "archiveSleeve"
          ],
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": 0,
            "fromY": -2
          }
        },
        {
          "t": 113.46875,
          "id": "memory-cut-006",
          "background": "petalRoad",
          "layout": "aperture",
          "layers": [
            {
              "asset": "envelope",
              "x": 66,
              "y": 44,
              "height": 67.89,
              "rotation": -7,
              "opacity": 1
            },
            {
              "asset": "roomTag",
              "x": 34,
              "y": 63,
              "height": 23.25,
              "rotation": 8,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": 0,
            "fromY": -2
          }
        },
        {
          "t": 113.7625,
          "id": "memory-cut-007",
          "background": "paperVault",
          "layout": "aperture",
          "layers": [
            {
              "asset": "vacantDoor",
              "x": 61,
              "y": 48,
              "height": 84.63,
              "rotation": 0,
              "opacity": 1
            },
            {
              "asset": "roomKeys",
              "x": 32,
              "y": 63,
              "height": 29.759999999999998,
              "rotation": 13,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": 0,
            "fromY": -2
          }
        },
        {
          "t": 114.05625,
          "id": "memory-cut-008",
          "background": "blackStrings",
          "layout": "split",
          "layers": [
            {
              "asset": "roomKeys",
              "x": 62,
              "y": 51,
              "height": 53.01,
              "rotation": -9,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": 0,
            "fromY": -2
          }
        },
        {
          "t": 114.35,
          "id": "memory-cut-009",
          "background": "voidCut",
          "layout": "strips",
          "layers": [
            {
              "asset": "looseKeys",
              "x": 58,
              "y": 47,
              "height": 84.63,
              "rotation": -11,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": 0,
            "fromY": -2
          }
        },
        {
          "t": 114.64375,
          "id": "memory-cut-010",
          "background": "morningVault",
          "layout": "split",
          "layers": [
            {
              "asset": "rentReceipt",
              "x": 60,
              "y": 48,
              "height": 80.91,
              "rotation": 7,
              "opacity": 1
            },
            {
              "asset": "bluePen",
              "x": 31,
              "y": 66,
              "height": 21.389999999999997,
              "rotation": -15,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": 0,
            "fromY": -2
          }
        },
        {
          "t": 114.9375,
          "id": "memory-cut-011",
          "background": "emptyWindows",
          "layout": "split",
          "layers": [
            {
              "asset": "frame",
              "x": 32,
              "y": 42,
              "height": 80.91,
              "rotation": -7,
              "opacity": 1,
              "content": "faceA"
            },
            {
              "asset": "frame",
              "x": 70,
              "y": 45,
              "height": 68.82,
              "rotation": 7,
              "opacity": 1,
              "content": "faceC"
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": 0,
            "fromY": -2
          }
        },
        {
          "t": 115.23125,
          "id": "memory-cut-012",
          "background": "petalRoad",
          "layout": "split",
          "layers": [
            {
              "asset": "pressedFlower",
              "x": 63,
              "y": 47,
              "height": 64.17,
              "rotation": -8,
              "opacity": 1
            },
            {
              "asset": "residentNote",
              "x": 31,
              "y": 57,
              "height": 29.759999999999998,
              "rotation": 8,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": 0,
            "fromY": -2
          }
        },
        {
          "t": 115.525,
          "id": "memory-cut-013",
          "background": "voidCut",
          "layout": "aperture",
          "layers": [
            {
              "asset": "petalBlush",
              "x": 62,
              "y": 49,
              "height": 32.55,
              "rotation": -18,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": 0,
            "fromY": -2
          }
        },
        {
          "t": 115.81875,
          "id": "memory-cut-014",
          "background": "archiveCut",
          "layout": "split",
          "layers": [
            {
              "asset": "memoryTrace",
              "x": 59,
              "y": 48,
              "height": 80.91,
              "rotation": 6,
              "opacity": 1
            },
            {
              "asset": "pressedNote",
              "x": 26,
              "y": 62,
              "height": 27.9,
              "rotation": -9,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": 0,
            "fromY": -2
          }
        },
        {
          "t": 116.1125,
          "id": "memory-cut-015",
          "background": "petalRoad",
          "layout": "aperture",
          "layers": [
            {
              "asset": "envelope",
              "x": 60,
              "y": 49,
              "height": 81.83999999999999,
              "rotation": -5,
              "opacity": 1
            },
            {
              "asset": "pressedFlower",
              "x": 28,
              "y": 65,
              "height": 26.97,
              "rotation": 9,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": 0,
            "fromY": -2
          }
        },
        {
          "t": 116.40625,
          "id": "memory-cut-016",
          "background": "paperVault",
          "layout": "contact",
          "layers": [],
          "splice": 0,
          "cells": [
            "repairLedger",
            "rentReceipt",
            "roomKeys",
            "bluePen",
            "residentNote",
            "pressedFlower"
          ],
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": 0,
            "fromY": -2
          }
        },
        {
          "t": 116.7,
          "id": "memory-cut-017",
          "background": "voidCut",
          "layout": "aperture",
          "layers": [
            {
              "asset": "emptyCup",
              "x": 61,
              "y": 49,
              "height": 68.82,
              "rotation": -3,
              "opacity": 1
            },
            {
              "asset": "bluePen",
              "x": 33,
              "y": 66,
              "height": 20.459999999999997,
              "rotation": -12,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": 0,
            "fromY": -2
          }
        },
        {
          "t": 116.99375,
          "id": "memory-cut-018",
          "background": "paperVault",
          "layout": "contact",
          "layers": [],
          "splice": 0,
          "cells": [
            "rentReceipt",
            "roomKeys",
            "bluePen",
            "residentNote",
            "pressedFlower",
            "repairLedger"
          ],
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": -2,
            "fromY": 0
          }
        },
        {
          "t": 117.2875,
          "id": "memory-cut-019",
          "background": "voidCut",
          "layout": "aperture",
          "layers": [
            {
              "asset": "emptyCup",
              "x": 64,
              "y": 53,
              "height": 74,
              "rotation": -1,
              "opacity": 1
            },
            {
              "asset": "bluePen",
              "x": 36,
              "y": 70,
              "height": 22,
              "rotation": -10,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": 2,
            "fromY": 0
          }
        },
        {
          "t": 117.58125,
          "id": "memory-cut-020",
          "background": "city",
          "layout": "strips",
          "layers": [
            {
              "asset": "emptyCup",
              "x": 64,
              "y": 69,
              "height": 24,
              "rotation": -2,
              "opacity": 1
            },
            {
              "asset": "rentReceipt",
              "x": 44,
              "y": 58,
              "height": 30,
              "rotation": 9,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.8800000000000001,
            "fromX": -20,
            "fromY": 0
          },
          "weather": "rain",
          "rainIntensity": 0.8
        },
        {
          "t": 117.875,
          "id": "memory-cut-021",
          "background": "emptyWindows",
          "layout": "strips",
          "layers": [
            {
              "asset": "frame",
              "x": 32,
              "y": 47,
              "height": 82,
              "rotation": -4,
              "opacity": 1,
              "content": "faceB"
            },
            {
              "asset": "frame",
              "x": 71,
              "y": 45,
              "height": 97,
              "rotation": 7,
              "opacity": 1,
              "content": "faceA"
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": 2,
            "fromY": 0
          }
        },
        {
          "t": 118.16875,
          "id": "memory-cut-022",
          "background": "emptyWindows",
          "layout": "strips",
          "layers": [
            {
              "asset": "frame",
              "x": 32,
              "y": 47,
              "height": 82,
              "rotation": -7,
              "opacity": 1,
              "content": "faceEmpty"
            },
            {
              "asset": "archiveSleeve",
              "x": 68,
              "y": 50,
              "height": 77,
              "rotation": 5,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": -2,
            "fromY": 0
          }
        },
        {
          "t": 118.4625,
          "id": "memory-cut-023",
          "background": "morningVault",
          "layout": "aperture",
          "layers": [
            {
              "asset": "vacantDoor",
              "x": 69,
              "y": 52,
              "height": 86,
              "rotation": 0,
              "opacity": 1
            },
            {
              "asset": "roomTag",
              "x": 37,
              "y": 67,
              "height": 29,
              "rotation": 11,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": 2,
            "fromY": 0
          }
        },
        {
          "t": 118.75625,
          "id": "memory-cut-024",
          "background": "paperVault",
          "layout": "contact",
          "layers": [],
          "splice": 0,
          "cells": [
            "roomTag",
            "emptyCup",
            "pressedNote",
            "looseKeys",
            "archiveSleeve",
            "envelope"
          ],
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": -2,
            "fromY": 0
          }
        },
        {
          "t": 119.05,
          "id": "memory-cut-025",
          "background": "petalRoad",
          "layout": "aperture",
          "layers": [
            {
              "asset": "envelope",
              "x": 69,
              "y": 48,
              "height": 73,
              "rotation": -5,
              "opacity": 1
            },
            {
              "asset": "roomTag",
              "x": 37,
              "y": 67,
              "height": 25,
              "rotation": 10,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": 2,
            "fromY": 0
          }
        },
        {
          "t": 119.34375,
          "id": "memory-cut-026",
          "background": "paperVault",
          "layout": "aperture",
          "layers": [
            {
              "asset": "vacantDoor",
              "x": 58,
              "y": 52,
              "height": 91,
              "rotation": -2,
              "opacity": 1
            },
            {
              "asset": "roomKeys",
              "x": 29,
              "y": 67,
              "height": 32,
              "rotation": 11,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": -2,
            "fromY": 0
          }
        },
        {
          "t": 119.6375,
          "id": "memory-cut-027",
          "background": "blackStrings",
          "layout": "split",
          "layers": [
            {
              "asset": "roomKeys",
              "x": 65,
              "y": 55,
              "height": 57,
              "rotation": -7,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": 2,
            "fromY": 0
          }
        },
        {
          "t": 119.93125,
          "id": "memory-cut-028",
          "background": "voidCut",
          "layout": "strips",
          "layers": [
            {
              "asset": "looseKeys",
              "x": 55,
              "y": 51,
              "height": 91,
              "rotation": -13,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": -2,
            "fromY": 0
          }
        },
        {
          "t": 120.225,
          "id": "memory-cut-029",
          "background": "morningVault",
          "layout": "split",
          "layers": [
            {
              "asset": "rentReceipt",
              "x": 63,
              "y": 52,
              "height": 87,
              "rotation": 9,
              "opacity": 1
            },
            {
              "asset": "bluePen",
              "x": 34,
              "y": 70,
              "height": 23,
              "rotation": -13,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": 2,
            "fromY": 0
          }
        },
        {
          "t": 120.51875,
          "id": "memory-cut-030",
          "background": "emptyWindows",
          "layout": "split",
          "layers": [
            {
              "asset": "frame",
              "x": 29,
              "y": 46,
              "height": 87,
              "rotation": -9,
              "opacity": 1,
              "content": "faceA"
            },
            {
              "asset": "frame",
              "x": 67,
              "y": 49,
              "height": 74,
              "rotation": 5,
              "opacity": 1,
              "content": "faceC"
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": -2,
            "fromY": 0
          }
        },
        {
          "t": 120.8125,
          "id": "memory-cut-031",
          "background": "petalRoad",
          "layout": "split",
          "layers": [
            {
              "asset": "pressedFlower",
              "x": 66,
              "y": 51,
              "height": 69,
              "rotation": -6,
              "opacity": 1
            },
            {
              "asset": "residentNote",
              "x": 34,
              "y": 61,
              "height": 32,
              "rotation": 10,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": 2,
            "fromY": 0
          }
        },
        {
          "t": 121.10625,
          "id": "memory-cut-032",
          "background": "voidCut",
          "layout": "aperture",
          "layers": [
            {
              "asset": "petalBlush",
              "x": 59,
              "y": 53,
              "height": 35,
              "rotation": -20,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": -2,
            "fromY": 0
          }
        },
        {
          "t": 121.4,
          "id": "memory-cut-033",
          "background": "archiveCut",
          "layout": "split",
          "layers": [
            {
              "asset": "memoryTrace",
              "x": 62,
              "y": 52,
              "height": 87,
              "rotation": 8,
              "opacity": 1
            },
            {
              "asset": "pressedNote",
              "x": 29,
              "y": 66,
              "height": 30,
              "rotation": -7,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": 2,
            "fromY": 0
          }
        },
        {
          "t": 121.69375,
          "id": "memory-cut-034",
          "background": "petalRoad",
          "layout": "aperture",
          "layers": [
            {
              "asset": "envelope",
              "x": 57,
              "y": 53,
              "height": 88,
              "rotation": -7,
              "opacity": 1
            },
            {
              "asset": "pressedFlower",
              "x": 25,
              "y": 69,
              "height": 29,
              "rotation": 7,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": -2,
            "fromY": 0
          }
        },
        {
          "t": 121.9875,
          "id": "memory-cut-035",
          "background": "archiveCut",
          "layout": "split",
          "layers": [
            {
              "asset": "memoryTrace",
              "x": 65,
              "y": 56,
              "height": 93.09,
              "rotation": 10,
              "opacity": 1
            },
            {
              "asset": "pressedNote",
              "x": 32,
              "y": 70,
              "height": 32.1,
              "rotation": -5,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.24,
            "fromX": 4,
            "fromY": 2
          }
        },
        {
          "t": 122.28125,
          "id": "memory-cut-036",
          "background": "petalRoad",
          "layout": "aperture",
          "layers": [
            {
              "asset": "envelope",
              "x": 54,
              "y": 57,
              "height": 94.16000000000001,
              "rotation": -9,
              "opacity": 1
            },
            {
              "asset": "pressedFlower",
              "x": 22,
              "y": 73,
              "height": 31.03,
              "rotation": 5,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.24,
            "fromX": -4,
            "fromY": 2
          }
        },
        {
          "t": 122.575,
          "id": "memory-cut-037",
          "background": "paperVault",
          "layout": "contact",
          "layers": [],
          "splice": 0,
          "cells": [
            "roomKeys",
            "bluePen",
            "residentNote",
            "pressedFlower",
            "repairLedger",
            "rentReceipt"
          ],
          "backgroundMotion": {
            "zoom": 1.24,
            "fromX": 4,
            "fromY": 2
          }
        },
        {
          "t": 122.86875,
          "id": "memory-cut-038",
          "background": "voidCut",
          "layout": "aperture",
          "layers": [
            {
              "asset": "emptyCup",
              "x": 55,
              "y": 57,
              "height": 79.18,
              "rotation": -7,
              "opacity": 1
            },
            {
              "asset": "bluePen",
              "x": 27,
              "y": 74,
              "height": 23.540000000000003,
              "rotation": -16,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.24,
            "fromX": -4,
            "fromY": 2
          }
        },
        {
          "t": 123.1625,
          "id": "memory-cut-039",
          "background": "city",
          "layout": "strips",
          "layers": [
            {
              "asset": "emptyCup",
              "x": 73,
              "y": 73,
              "height": 25.68,
              "rotation": 4,
              "opacity": 1
            },
            {
              "asset": "rentReceipt",
              "x": 53,
              "y": 62,
              "height": 32.1,
              "rotation": 15,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.96,
            "fromX": -14,
            "fromY": 2
          },
          "weather": "rain",
          "rainIntensity": 0.8
        },
        {
          "t": 123.45625,
          "id": "memory-cut-040",
          "background": "emptyWindows",
          "layout": "strips",
          "layers": [
            {
              "asset": "frame",
              "x": 23,
              "y": 51,
              "height": 87.74000000000001,
              "rotation": -10,
              "opacity": 1,
              "content": "faceB"
            },
            {
              "asset": "frame",
              "x": 62,
              "y": 49,
              "height": 103.79,
              "rotation": 1,
              "opacity": 1,
              "content": "faceA"
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.24,
            "fromX": -4,
            "fromY": 2
          }
        },
        {
          "t": 123.75,
          "id": "memory-cut-041",
          "background": "emptyWindows",
          "layout": "strips",
          "layers": [
            {
              "asset": "frame",
              "x": 41,
              "y": 51,
              "height": 87.74000000000001,
              "rotation": -1,
              "opacity": 1,
              "content": "faceEmpty"
            },
            {
              "asset": "archiveSleeve",
              "x": 77,
              "y": 54,
              "height": 82.39,
              "rotation": 11,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.24,
            "fromX": 4,
            "fromY": 2
          }
        },
        {
          "t": 124.04375,
          "id": "memory-cut-042",
          "background": "morningVault",
          "layout": "aperture",
          "layers": [
            {
              "asset": "vacantDoor",
              "x": 60,
              "y": 56,
              "height": 92.02000000000001,
              "rotation": -6,
              "opacity": 1
            },
            {
              "asset": "roomTag",
              "x": 28,
              "y": 71,
              "height": 31.03,
              "rotation": 5,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.24,
            "fromX": -4,
            "fromY": 2
          }
        },
        {
          "t": 124.3375,
          "id": "memory-cut-043",
          "background": "paperVault",
          "layout": "contact",
          "layers": [],
          "splice": 0,
          "cells": [
            "emptyCup",
            "pressedNote",
            "looseKeys",
            "archiveSleeve",
            "envelope",
            "roomTag"
          ],
          "backgroundMotion": {
            "zoom": 1.24,
            "fromX": 4,
            "fromY": 2
          }
        },
        {
          "t": 124.63125,
          "id": "memory-cut-044",
          "background": "petalRoad",
          "layout": "aperture",
          "layers": [
            {
              "asset": "envelope",
              "x": 60,
              "y": 52,
              "height": 78.11,
              "rotation": -11,
              "opacity": 1
            },
            {
              "asset": "roomTag",
              "x": 28,
              "y": 71,
              "height": 26.75,
              "rotation": 4,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.24,
            "fromX": -4,
            "fromY": 2
          }
        },
        {
          "t": 124.925,
          "id": "memory-cut-045",
          "background": "paperVault",
          "layout": "aperture",
          "layers": [
            {
              "asset": "vacantDoor",
              "x": 67,
              "y": 56,
              "height": 97.37,
              "rotation": 4,
              "opacity": 1
            },
            {
              "asset": "roomKeys",
              "x": 38,
              "y": 71,
              "height": 34.24,
              "rotation": 17,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.24,
            "fromX": 4,
            "fromY": 2
          }
        },
        {
          "t": 125.21875,
          "id": "memory-cut-046",
          "background": "blackStrings",
          "layout": "split",
          "layers": [
            {
              "asset": "roomKeys",
              "x": 56,
              "y": 59,
              "height": 60.99,
              "rotation": -13,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.24,
            "fromX": -4,
            "fromY": 2
          }
        },
        {
          "t": 125.5125,
          "id": "memory-cut-047",
          "background": "voidCut",
          "layout": "strips",
          "layers": [
            {
              "asset": "looseKeys",
              "x": 64,
              "y": 55,
              "height": 97.37,
              "rotation": -7,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.24,
            "fromX": 4,
            "fromY": 2
          }
        },
        {
          "t": 125.80625,
          "id": "memory-cut-048",
          "background": "morningVault",
          "layout": "split",
          "layers": [
            {
              "asset": "rentReceipt",
              "x": 54,
              "y": 56,
              "height": 93.09,
              "rotation": 3,
              "opacity": 1
            },
            {
              "asset": "bluePen",
              "x": 25,
              "y": 74,
              "height": 24.610000000000003,
              "rotation": -19,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.24,
            "fromX": -4,
            "fromY": 2
          }
        },
        {
          "t": 126.1,
          "id": "memory-cut-049",
          "background": "emptyWindows",
          "layout": "split",
          "layers": [
            {
              "asset": "frame",
              "x": 38,
              "y": 50,
              "height": 93.09,
              "rotation": -3,
              "opacity": 1,
              "content": "faceA"
            },
            {
              "asset": "frame",
              "x": 76,
              "y": 53,
              "height": 79.18,
              "rotation": 11,
              "opacity": 1,
              "content": "faceC"
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.24,
            "fromX": 4,
            "fromY": 2
          }
        },
        {
          "t": 126.39375,
          "id": "memory-cut-050",
          "background": "petalRoad",
          "layout": "split",
          "layers": [
            {
              "asset": "pressedFlower",
              "x": 57,
              "y": 55,
              "height": 73.83,
              "rotation": -12,
              "opacity": 1
            },
            {
              "asset": "residentNote",
              "x": 25,
              "y": 65,
              "height": 34.24,
              "rotation": 4,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.24,
            "fromX": -4,
            "fromY": 2
          }
        },
        {
          "t": 126.6875,
          "id": "memory-cut-051",
          "background": "voidCut",
          "layout": "aperture",
          "layers": [
            {
              "asset": "petalBlush",
              "x": 68,
              "y": 57,
              "height": 37.45,
              "rotation": -14,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.24,
            "fromX": 4,
            "fromY": 2
          }
        },
        {
          "t": 126.98125,
          "id": "memory-cut-052",
          "background": "petalRoad",
          "layout": "split",
          "layers": [
            {
              "asset": "pressedFlower",
              "x": 54,
              "y": 47,
              "height": 64.17,
              "rotation": -8,
              "opacity": 1
            },
            {
              "asset": "residentNote",
              "x": 22,
              "y": 57,
              "height": 29.759999999999998,
              "rotation": 8,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": -6,
            "fromY": -2
          }
        },
        {
          "t": 127.275,
          "id": "memory-cut-053",
          "background": "voidCut",
          "layout": "aperture",
          "layers": [
            {
              "asset": "petalBlush",
              "x": 71,
              "y": 49,
              "height": 32.55,
              "rotation": -18,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": 6,
            "fromY": -2
          }
        },
        {
          "t": 127.56875,
          "id": "memory-cut-054",
          "background": "archiveCut",
          "layout": "split",
          "layers": [
            {
              "asset": "memoryTrace",
              "x": 50,
              "y": 48,
              "height": 80.91,
              "rotation": 6,
              "opacity": 1
            },
            {
              "asset": "pressedNote",
              "x": 17,
              "y": 62,
              "height": 27.9,
              "rotation": -9,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": -6,
            "fromY": -2
          }
        },
        {
          "t": 127.8625,
          "id": "memory-cut-055",
          "background": "petalRoad",
          "layout": "aperture",
          "layers": [
            {
              "asset": "envelope",
              "x": 69,
              "y": 49,
              "height": 81.83999999999999,
              "rotation": -5,
              "opacity": 1
            },
            {
              "asset": "pressedFlower",
              "x": 37,
              "y": 65,
              "height": 26.97,
              "rotation": 9,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": 6,
            "fromY": -2
          }
        },
        {
          "t": 128.15625,
          "id": "memory-cut-056",
          "background": "paperVault",
          "layout": "contact",
          "layers": [],
          "splice": 0,
          "cells": [
            "bluePen",
            "residentNote",
            "pressedFlower",
            "repairLedger",
            "rentReceipt",
            "roomKeys"
          ],
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": -6,
            "fromY": -2
          }
        },
        {
          "t": 128.45,
          "id": "memory-cut-057",
          "background": "voidCut",
          "layout": "aperture",
          "layers": [
            {
              "asset": "emptyCup",
              "x": 70,
              "y": 49,
              "height": 68.82,
              "rotation": -3,
              "opacity": 1
            },
            {
              "asset": "bluePen",
              "x": 42,
              "y": 66,
              "height": 20.459999999999997,
              "rotation": -12,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": 6,
            "fromY": -2
          }
        },
        {
          "t": 128.74375,
          "id": "memory-cut-058",
          "background": "city",
          "layout": "strips",
          "layers": [
            {
              "asset": "emptyCup",
              "x": 58,
              "y": 65,
              "height": 22.32,
              "rotation": 0,
              "opacity": 1
            },
            {
              "asset": "rentReceipt",
              "x": 38,
              "y": 54,
              "height": 27.9,
              "rotation": 11,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.8,
            "fromX": -24,
            "fromY": -2
          },
          "weather": "rain",
          "rainIntensity": 0.8
        },
        {
          "t": 129.0375,
          "id": "memory-cut-059",
          "background": "emptyWindows",
          "layout": "strips",
          "layers": [
            {
              "asset": "frame",
              "x": 38,
              "y": 43,
              "height": 76.25999999999999,
              "rotation": -6,
              "opacity": 1,
              "content": "faceB"
            },
            {
              "asset": "frame",
              "x": 77,
              "y": 41,
              "height": 90.21,
              "rotation": 5,
              "opacity": 1,
              "content": "faceA"
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": 6,
            "fromY": -2
          }
        },
        {
          "t": 129.33125,
          "id": "memory-cut-060",
          "background": "emptyWindows",
          "layout": "strips",
          "layers": [
            {
              "asset": "frame",
              "x": 26,
              "y": 43,
              "height": 76.25999999999999,
              "rotation": -5,
              "opacity": 1,
              "content": "faceEmpty"
            },
            {
              "asset": "archiveSleeve",
              "x": 62,
              "y": 46,
              "height": 71.61,
              "rotation": 7,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": -6,
            "fromY": -2
          }
        },
        {
          "t": 129.625,
          "id": "memory-cut-061",
          "background": "morningVault",
          "layout": "aperture",
          "layers": [
            {
              "asset": "vacantDoor",
              "x": 75,
              "y": 48,
              "height": 79.97999999999999,
              "rotation": -2,
              "opacity": 1
            },
            {
              "asset": "roomTag",
              "x": 43,
              "y": 63,
              "height": 26.97,
              "rotation": 9,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": 6,
            "fromY": -2
          }
        },
        {
          "t": 129.91875,
          "id": "memory-cut-062",
          "background": "paperVault",
          "layout": "contact",
          "layers": [],
          "splice": 0,
          "cells": [
            "pressedNote",
            "looseKeys",
            "archiveSleeve",
            "envelope",
            "roomTag",
            "emptyCup"
          ],
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": -6,
            "fromY": -2
          }
        },
        {
          "t": 130.2125,
          "id": "memory-cut-063",
          "background": "petalRoad",
          "layout": "aperture",
          "layers": [
            {
              "asset": "envelope",
              "x": 75,
              "y": 44,
              "height": 67.89,
              "rotation": -7,
              "opacity": 1
            },
            {
              "asset": "roomTag",
              "x": 43,
              "y": 63,
              "height": 23.25,
              "rotation": 8,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": 6,
            "fromY": -2
          }
        },
        {
          "t": 130.50625,
          "id": "memory-cut-064",
          "background": "paperVault",
          "layout": "aperture",
          "layers": [
            {
              "asset": "vacantDoor",
              "x": 52,
              "y": 48,
              "height": 84.63,
              "rotation": 0,
              "opacity": 1
            },
            {
              "asset": "roomKeys",
              "x": 23,
              "y": 63,
              "height": 29.759999999999998,
              "rotation": 13,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": -6,
            "fromY": -2
          }
        },
        {
          "t": 130.8,
          "id": "memory-cut-065",
          "background": "blackStrings",
          "layout": "split",
          "layers": [
            {
              "asset": "roomKeys",
              "x": 71,
              "y": 51,
              "height": 53.01,
              "rotation": -9,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": 6,
            "fromY": -2
          }
        },
        {
          "t": 131.09375,
          "id": "memory-cut-066",
          "background": "voidCut",
          "layout": "strips",
          "layers": [
            {
              "asset": "looseKeys",
              "x": 49,
              "y": 47,
              "height": 84.63,
              "rotation": -11,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": -6,
            "fromY": -2
          }
        },
        {
          "t": 131.3875,
          "id": "memory-cut-067",
          "background": "morningVault",
          "layout": "split",
          "layers": [
            {
              "asset": "rentReceipt",
              "x": 69,
              "y": 48,
              "height": 80.91,
              "rotation": 7,
              "opacity": 1
            },
            {
              "asset": "bluePen",
              "x": 40,
              "y": 66,
              "height": 21.389999999999997,
              "rotation": -15,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": 6,
            "fromY": -2
          }
        },
        {
          "t": 131.68125,
          "id": "memory-cut-068",
          "background": "emptyWindows",
          "layout": "split",
          "layers": [
            {
              "asset": "frame",
              "x": 23,
              "y": 42,
              "height": 80.91,
              "rotation": -7,
              "opacity": 1,
              "content": "faceA"
            },
            {
              "asset": "frame",
              "x": 61,
              "y": 45,
              "height": 68.82,
              "rotation": 7,
              "opacity": 1,
              "content": "faceC"
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.08,
            "fromX": -6,
            "fromY": -2
          }
        },
        {
          "t": 131.975,
          "id": "memory-cut-069",
          "background": "morningVault",
          "layout": "split",
          "layers": [
            {
              "asset": "rentReceipt",
              "x": 60,
              "y": 52,
              "height": 87,
              "rotation": 9,
              "opacity": 1
            },
            {
              "asset": "bluePen",
              "x": 31,
              "y": 70,
              "height": 23,
              "rotation": -13,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": 0,
            "fromY": 0
          }
        },
        {
          "t": 132.26875,
          "id": "memory-cut-070",
          "background": "emptyWindows",
          "layout": "split",
          "layers": [
            {
              "asset": "frame",
              "x": 32,
              "y": 46,
              "height": 87,
              "rotation": -9,
              "opacity": 1,
              "content": "faceA"
            },
            {
              "asset": "frame",
              "x": 70,
              "y": 49,
              "height": 74,
              "rotation": 5,
              "opacity": 1,
              "content": "faceC"
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": 0,
            "fromY": 0
          }
        },
        {
          "t": 132.5625,
          "id": "memory-cut-071",
          "background": "petalRoad",
          "layout": "split",
          "layers": [
            {
              "asset": "pressedFlower",
              "x": 63,
              "y": 51,
              "height": 69,
              "rotation": -6,
              "opacity": 1
            },
            {
              "asset": "residentNote",
              "x": 31,
              "y": 61,
              "height": 32,
              "rotation": 10,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": 0,
            "fromY": 0
          }
        },
        {
          "t": 132.85625,
          "id": "memory-cut-072",
          "background": "voidCut",
          "layout": "aperture",
          "layers": [
            {
              "asset": "petalBlush",
              "x": 62,
              "y": 53,
              "height": 35,
              "rotation": -20,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": 0,
            "fromY": 0
          }
        },
        {
          "t": 133.15,
          "id": "memory-cut-073",
          "background": "archiveCut",
          "layout": "split",
          "layers": [
            {
              "asset": "memoryTrace",
              "x": 59,
              "y": 52,
              "height": 87,
              "rotation": 8,
              "opacity": 1
            },
            {
              "asset": "pressedNote",
              "x": 26,
              "y": 66,
              "height": 30,
              "rotation": -7,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": 0,
            "fromY": 0
          }
        },
        {
          "t": 133.44375,
          "id": "memory-cut-074",
          "background": "petalRoad",
          "layout": "aperture",
          "layers": [
            {
              "asset": "envelope",
              "x": 60,
              "y": 53,
              "height": 88,
              "rotation": -7,
              "opacity": 1
            },
            {
              "asset": "pressedFlower",
              "x": 28,
              "y": 69,
              "height": 29,
              "rotation": 7,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": 0,
            "fromY": 0
          }
        },
        {
          "t": 133.7375,
          "id": "memory-cut-075",
          "background": "paperVault",
          "layout": "contact",
          "layers": [],
          "splice": 0,
          "cells": [
            "residentNote",
            "pressedFlower",
            "repairLedger",
            "rentReceipt",
            "roomKeys",
            "bluePen"
          ],
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": 0,
            "fromY": 0
          }
        },
        {
          "t": 134.03125,
          "id": "memory-cut-076",
          "background": "voidCut",
          "layout": "aperture",
          "layers": [
            {
              "asset": "emptyCup",
              "x": 61,
              "y": 53,
              "height": 74,
              "rotation": -5,
              "opacity": 1
            },
            {
              "asset": "bluePen",
              "x": 33,
              "y": 70,
              "height": 22,
              "rotation": -14,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": 0,
            "fromY": 0
          }
        },
        {
          "t": 134.325,
          "id": "memory-cut-077",
          "background": "city",
          "layout": "strips",
          "layers": [
            {
              "asset": "emptyCup",
              "x": 67,
              "y": 69,
              "height": 24,
              "rotation": 2,
              "opacity": 1
            },
            {
              "asset": "rentReceipt",
              "x": 47,
              "y": 58,
              "height": 30,
              "rotation": 13,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.8800000000000001,
            "fromX": -18,
            "fromY": 0
          },
          "weather": "rain",
          "rainIntensity": 0.8
        },
        {
          "t": 134.61875,
          "id": "memory-cut-078",
          "background": "emptyWindows",
          "layout": "strips",
          "layers": [
            {
              "asset": "frame",
              "x": 29,
              "y": 47,
              "height": 82,
              "rotation": -8,
              "opacity": 1,
              "content": "faceB"
            },
            {
              "asset": "frame",
              "x": 68,
              "y": 45,
              "height": 97,
              "rotation": 3,
              "opacity": 1,
              "content": "faceA"
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": 0,
            "fromY": 0
          }
        },
        {
          "t": 134.9125,
          "id": "memory-cut-079",
          "background": "emptyWindows",
          "layout": "strips",
          "layers": [
            {
              "asset": "frame",
              "x": 35,
              "y": 47,
              "height": 82,
              "rotation": -3,
              "opacity": 1,
              "content": "faceEmpty"
            },
            {
              "asset": "archiveSleeve",
              "x": 71,
              "y": 50,
              "height": 77,
              "rotation": 9,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": 0,
            "fromY": 0
          }
        },
        {
          "t": 135.20625,
          "id": "memory-cut-080",
          "background": "morningVault",
          "layout": "aperture",
          "layers": [
            {
              "asset": "vacantDoor",
              "x": 66,
              "y": 52,
              "height": 86,
              "rotation": -4,
              "opacity": 1
            },
            {
              "asset": "roomTag",
              "x": 34,
              "y": 67,
              "height": 29,
              "rotation": 7,
              "opacity": 1
            }
          ],
          "splice": 0,
          "backgroundMotion": {
            "zoom": 1.1600000000000001,
            "fromX": 0,
            "fromY": 0
          }
        }
      ],
      "flashbackStyle": "hard",
      "followExpressions": false
    },
    {
      "t": 135.5,
      "id": "reach-into-absence",
      "stage": "fracture",
      "pose": "openPalms",
      "action": "135.5 秒 Black strings crying 进入强段，改用之前 106 秒的摊手细节图；146 秒接掩面痛哭。",
      "x": 74,
      "y": -9,
      "scale": 1.04,
      "framing": "portrait",
      "printShadow": false,
      "motion": 0,
      "opacity": 1,
      "treatment": "color",
      "camera": 1,
      "subtitleAlign": "left",
      "subtitleX": 6,
      "subtitleY": 8,
      "transition": "cut",
      "background": "voidCut",
      "stickers": [],
      "followExpressions": false,
      "backgroundMotion": {
        "zoom": 1.03,
        "zoomTo": 1.1,
        "fromX": 0,
        "toX": -1,
        "startTime": 135.5,
        "duration": 10.5,
        "ease": "smooth"
      },
      "petals": {
        "startTime": 135.5,
        "end": 146,
        "count": 4,
        "drift": -0.2
      }
    },
    {
      "t": 146,
      "id": "one-soft-hum",
      "stage": "quiet",
      "pose": "coveredFace",
      "action": "But the night just answers：保留现有掩面痛哭特写，接住上一段强情绪。",
      "x": 66,
      "y": -5,
      "scale": 1.04,
      "framing": "portrait",
      "printShadow": false,
      "motion": 0,
      "opacity": 1,
      "treatment": "color",
      "camera": 1,
      "subtitleAlign": "left",
      "subtitleX": 6,
      "subtitleY": 8,
      "transition": "fade",
      "background": "voidCut",
      "stickers": [],
      "followExpressions": false,
      "backgroundTint": "#17131b28",
      "backgroundMotion": {
        "zoom": 1.02,
        "zoomTo": 1.05,
        "fromX": 0,
        "toX": -0.7,
        "startTime": 135,
        "duration": 16,
        "ease": "smooth"
      }
    },
    {
      "t": 151,
      "id": "unreachable-collection",
      "stage": "collection",
      "pose": "reachShadow",
      "action": "151–167.5 秒保持同一跪姿伸手；159 秒 You were here 与 163 秒都不换人物。",
      "x": 61,
      "y": 7,
      "scale": 0.81,
      "framing": "full",
      "printShadow": false,
      "motion": 0,
      "opacity": 1,
      "treatment": "color",
      "camera": 1,
      "subtitleAlign": "left",
      "subtitleX": 6,
      "subtitleY": 8,
      "transition": "fade",
      "background": "voidCut",
      "stickers": [],
      "backgroundMotion": {
        "zoom": 1.05,
        "zoomTo": 1.08,
        "fromX": -0.7,
        "toX": -1,
        "startTime": 151,
        "duration": 16.5,
        "ease": "smooth"
      },
      "petals": {
        "startTime": 151,
        "end": 167.5,
        "count": 7,
        "drift": -0.13
      },
      "followExpressions": false
    },
    {
      "t": 167.5,
      "id": "walk-beyond-the-last-plea",
      "stage": "road",
      "pose": "walk2",
      "followExpressions": false,
      "x": 78,
      "y": 5,
      "scale": 0.9,
      "framing": "full",
      "printShadow": false,
      "motion": 0,
      "opacity": 1,
      "fitVisible": true,
      "treatment": "silhouette",
      "animationTimeStart": 167.5,
      "animationStart": 0,
      "animationSpeed": 0.7,
      "animationLoop": true,
      "background": "petalRoad",
      "backgroundTint": "#17131b20",
      "transition": "cut",
      "subtitleAlign": "left",
      "subtitleX": 6,
      "subtitleY": 8,
      "action": "167.5 秒改为较自然的 walk2 深色剪影，不再显示黑白印刷立绘。步行持续到 188 秒。",
      "backgroundMotion": {
        "zoom": 1.25,
        "fromX": 8,
        "toX": -9,
        "startTime": 167.5,
        "duration": 20.5,
        "ease": "linear"
      },
      "stickers": [],
      "petals": {
        "startTime": 167.5,
        "end": 188,
        "count": 5,
        "drift": -0.22
      },
      "silhouetteColor": "#211426",
      "rimColor": "#be879c"
    },
    {
      "t": 182,
      "id": "walking-past-the-records",
      "stage": "road",
      "pose": "walk2",
      "followExpressions": false,
      "x": 78,
      "y": 5,
      "scale": 0.9,
      "framing": "full",
      "printShadow": false,
      "motion": 0,
      "opacity": 1,
      "fitVisible": true,
      "treatment": "silhouette",
      "animationTimeStart": 167.5,
      "animationStart": 0,
      "animationSpeed": 0.7,
      "animationLoop": true,
      "background": "emptyWindows",
      "backgroundTint": "#17131b45",
      "transition": "cut",
      "subtitleAlign": "left",
      "subtitleX": 6,
      "subtitleY": 8,
      "action": "182 秒换背景，继续相同 walk2 剪影及步行相位；记忆画框从身后流过。",
      "backgroundMotion": {
        "zoom": 1.12,
        "fromX": 2,
        "toX": -2,
        "startTime": 182,
        "duration": 6,
        "ease": "linear"
      },
      "stickers": [
        {
          "id": "passing-record-1",
          "asset": "frame",
          "content": "faceA",
          "start": 182,
          "end": 188,
          "x": 50,
          "y": 31,
          "height": 57,
          "rotation": -5,
          "opacity": 0.88,
          "layer": "back",
          "motion": {
            "preset": "passing",
            "index": 0,
            "count": 7,
            "speed": 0.15,
            "depth": 0.9,
            "startTime": 182,
            "duration": 6
          }
        },
        {
          "id": "passing-record-2",
          "asset": "frame",
          "content": "envelope",
          "start": 182,
          "end": 188,
          "x": 50,
          "y": 41,
          "height": 65,
          "rotation": 6,
          "opacity": 0.88,
          "layer": "back",
          "motion": {
            "preset": "passing",
            "index": 1,
            "count": 7,
            "speed": 0.15,
            "depth": 0.99,
            "startTime": 182,
            "duration": 6
          }
        },
        {
          "id": "passing-record-3",
          "asset": "frame",
          "content": "faceB",
          "start": 182,
          "end": 188,
          "x": 50,
          "y": 51,
          "height": 57,
          "rotation": -5,
          "opacity": 0.88,
          "layer": "back",
          "motion": {
            "preset": "passing",
            "index": 2,
            "count": 7,
            "speed": 0.15,
            "depth": 1.08,
            "startTime": 182,
            "duration": 6
          }
        },
        {
          "id": "passing-record-4",
          "asset": "frame",
          "content": "repairLedger",
          "start": 182,
          "end": 188,
          "x": 50,
          "y": 31,
          "height": 65,
          "rotation": 6,
          "opacity": 0.88,
          "layer": "back",
          "motion": {
            "preset": "passing",
            "index": 3,
            "count": 7,
            "speed": 0.15,
            "depth": 0.9,
            "startTime": 182,
            "duration": 6
          }
        },
        {
          "id": "passing-record-5",
          "asset": "frame",
          "content": "pressedNote",
          "start": 182,
          "end": 188,
          "x": 50,
          "y": 41,
          "height": 57,
          "rotation": -5,
          "opacity": 0.88,
          "layer": "back",
          "motion": {
            "preset": "passing",
            "index": 4,
            "count": 7,
            "speed": 0.15,
            "depth": 0.99,
            "startTime": 182,
            "duration": 6
          }
        },
        {
          "id": "passing-record-6",
          "asset": "frame",
          "content": "roomKeys",
          "start": 182,
          "end": 188,
          "x": 50,
          "y": 51,
          "height": 65,
          "rotation": 6,
          "opacity": 0.88,
          "layer": "back",
          "motion": {
            "preset": "passing",
            "index": 5,
            "count": 7,
            "speed": 0.15,
            "depth": 1.08,
            "startTime": 182,
            "duration": 6
          }
        },
        {
          "id": "passing-record-7",
          "asset": "frame",
          "content": "faceEmpty",
          "start": 182,
          "end": 188,
          "x": 50,
          "y": 31,
          "height": 57,
          "rotation": -5,
          "opacity": 0.88,
          "layer": "back",
          "motion": {
            "preset": "passing",
            "index": 6,
            "count": 7,
            "speed": 0.15,
            "depth": 0.9,
            "startTime": 182,
            "duration": 6
          }
        }
      ],
      "petals": {
        "startTime": 167.5,
        "end": 188,
        "count": 5,
        "drift": -0.22
      },
      "silhouetteColor": "#211426",
      "rimColor": "#be879c"
    },
    {
      "t": 188,
      "id": "one-second-of-black",
      "stage": "black",
      "pose": null,
      "followExpressions": false,
      "transition": "cut",
      "hideLyrics": true,
      "subtitleAlign": "left",
      "subtitleX": 6,
      "subtitleY": 8,
      "stickers": [],
      "action": "188–189 秒纯黑间断，歌曲继续，不显示字幕与雪花。"
    },
    {
      "t": 189,
      "id": "the-things-remain",
      "stage": "outro",
      "pose": null,
      "action": "189 秒结束黑屏，直接接空框、钥匙、便条和杯子的段落。",
      "x": 73,
      "y": 7,
      "scale": 0.76,
      "framing": "full",
      "printShadow": false,
      "motion": 0,
      "opacity": 1,
      "treatment": "color",
      "camera": 1,
      "subtitleAlign": "left",
      "subtitleX": 6,
      "subtitleY": 8,
      "transition": "cut",
      "background": "memoryCut",
      "stickers": [
        {
          "id": "remaining-empty-mount",
          "asset": "frameCut",
          "start": 189,
          "end": 213.68,
          "x": 73,
          "y": 49,
          "height": 78,
          "rotation": 2,
          "opacity": 0.78,
          "layer": "back"
        },
        {
          "id": "remaining-house-keys",
          "asset": "roomKeys",
          "x": 80,
          "y": 66,
          "height": 15,
          "rotation": 5,
          "start": 189,
          "end": 213.68,
          "opacity": 0.9,
          "layer": "back",
          "fadeIn": 1.4
        },
        {
          "id": "remaining-note",
          "asset": "residentNote",
          "x": 71,
          "y": 63,
          "height": 22,
          "rotation": -7,
          "start": 189,
          "end": 213.68,
          "opacity": 0.9,
          "layer": "back",
          "fadeIn": 1.4
        },
        {
          "id": "remaining-cup",
          "asset": "emptyCup",
          "x": 68,
          "y": 70,
          "height": 12,
          "rotation": -2,
          "start": 189,
          "end": 213.68,
          "opacity": 0.9,
          "layer": "back",
          "fadeIn": 1.4
        }
      ],
      "backgroundTint": "#17131b78",
      "backgroundMotion": {
        "zoom": 1.06,
        "fromX": 0,
        "toX": -0.8,
        "startTime": 170,
        "duration": 43.68,
        "ease": "smooth"
      },
      "followExpressions": false
    },
    {
      "t": 204,
      "id": "last-platform-lookback",
      "stage": "rain",
      "pose": "lookback",
      "action": "204 秒回到站台，使用原前段的 lookback 原色动画；第 0 帧对齐 204 秒，第 54 帧对齐曲终 213.68 秒。",
      "x": 77,
      "y": 5,
      "scale": 0.87,
      "opacity": 1,
      "treatment": "color",
      "camera": 2,
      "pan": 0.02,
      "subtitleAlign": "left",
      "subtitleX": 6,
      "subtitleY": 8,
      "transition": "cut",
      "background": "city",
      "backgroundMotion": {
        "zoom": 1.05,
        "fromX": 1,
        "toX": -1,
        "startTime": 204,
        "duration": 9.680000000000007,
        "ease": "linear"
      },
      "stickers": [],
      "framing": "full",
      "motion": 0,
      "followExpressions": false,
      "animationLoop": false,
      "animationSpeed": 1,
      "weather": "rain",
      "rainIntensity": 0.6,
      "printShadow": false,
      "fitVisible": false,
      "animationTimeStart": 204,
      "animationStart": 0,
      "animationEndTime": 213.68,
      "backgroundTint": "#17131b20"
    }
  ],
  "lyrics": [
    {
      "time": 0.5,
      "section": "VERSE 1",
      "text": "I caught your sleeve in the rain\nBy the bus stop rail",
      "end": 5.5
    },
    {
      "time": 5.5,
      "section": "VERSE 1",
      "text": "Paper cups in the gutter\nAnd a threadbare trail",
      "end": 9.5
    },
    {
      "time": 9.5,
      "section": "VERSE 1",
      "text": "Your laugh drifted past me\nLike smoke from a train",
      "end": 13
    },
    {
      "time": 13,
      "section": "VERSE 1",
      "text": "I held it too long\nNow it’s falling again",
      "end": 17
    },
    {
      "time": 17,
      "section": "PRE 1",
      "text": "Wind in the alley\nTugging my coat",
      "end": 21
    },
    {
      "time": 21,
      "section": "PRE 1",
      "text": "Cherry bloom bruised\nOn the curb and the stones",
      "end": 24.5
    },
    {
      "time": 24.5,
      "section": "PRE 1",
      "text": "You turned your face\nJust half in the light",
      "end": 28
    },
    {
      "time": 28,
      "section": "PRE 1",
      "text": "And I knew then\nIt was leaving time",
      "end": 31
    },
    {
      "time": 31.5,
      "section": "CHORUS 1",
      "text": "Falling flowers, stay\nJust a little while",
      "end": 35
    },
    {
      "time": 35,
      "section": "CHORUS 1",
      "text": "Falling flowers, stay\nOn this crooked mile",
      "end": 39
    },
    {
      "time": 39,
      "section": "CHORUS 1",
      "text": "You were here, you were here\nThen you slipped away",
      "end": 42
    },
    {
      "time": 42,
      "section": "CHORUS 1",
      "text": "Falling flowers, stay\nIn my hands today",
      "end": 49
    },
    {
      "time": 49,
      "section": "CHORUS 1",
      "text": "(falling flowers)",
      "end": 52
    },
    {
      "time": 61,
      "section": "VERSE 2",
      "text": "Your name in my pocket\nFolded small and thin",
      "end": 65
    },
    {
      "time": 65,
      "section": "VERSE 2",
      "text": "Beside old receipts\nAnd a cracked blue pen",
      "end": 69
    },
    {
      "time": 69,
      "section": "VERSE 2",
      "text": "The train windows shimmer\nWith somebody’s past",
      "end": 73.5
    },
    {
      "time": 73.5,
      "section": "VERSE 2",
      "text": "I watch every face\nBut they move too fast",
      "end": 76.5
    },
    {
      "time": 76.5,
      "section": "PRE 2",
      "text": "Wind in the wires\nSoft through the trees",
      "end": 80
    },
    {
      "time": 80,
      "section": "PRE 2",
      "text": "Somewhere a memory\nKeeps calling to me",
      "end": 83
    },
    {
      "time": 83,
      "section": "PRE 2",
      "text": "You turned your head\nLike you knew my song",
      "end": 87
    },
    {
      "time": 87,
      "section": "PRE 2",
      "text": "Then the moment broke\nAnd the road rolled on",
      "end": 90
    },
    {
      "time": 90,
      "section": "CHORUS 2",
      "text": "Falling flowers, stay\nJust a little while",
      "end": 95
    },
    {
      "time": 95,
      "section": "CHORUS 2",
      "text": "Falling flowers, stay\nOn this crooked mile",
      "end": 98
    },
    {
      "time": 98,
      "section": "CHORUS 2",
      "text": "You were here, you were here\nThen you slipped away",
      "end": 102
    },
    {
      "time": 102,
      "section": "CHORUS 2",
      "text": "Falling flowers, stay\nIn my hands today",
      "end": 108
    },
    {
      "time": 108,
      "section": "CHORUS 2",
      "text": "(falling flowers)",
      "end": 112
    },
    {
      "time": 135.5,
      "section": "BRIDGE",
      "text": "Black strings crying\nThrough the open air",
      "end": 139
    },
    {
      "time": 139,
      "section": "BRIDGE",
      "text": "Concrete and moon dust\nSpinning everywhere",
      "end": 142
    },
    {
      "time": 142,
      "section": "BRIDGE",
      "text": "I reach for the shape\nYou left on my tongue",
      "end": 146
    },
    {
      "time": 146,
      "section": "BRIDGE",
      "text": "But the night just answers\nWith one soft hum",
      "end": 151
    },
    {
      "time": 151,
      "section": "FINAL CHORUS",
      "text": "Falling flowers, stay\nJust a little while",
      "end": 155
    },
    {
      "time": 155,
      "section": "FINAL CHORUS",
      "text": "Falling flowers, stay\nOn this crooked mile",
      "end": 159
    },
    {
      "time": 159,
      "section": "FINAL CHORUS",
      "text": "You were here, you were here\nThen you slipped away",
      "end": 163
    },
    {
      "time": 163,
      "section": "FINAL CHORUS",
      "text": "Falling flowers, stay\nIn my hands today",
      "end": 170
    },
    {
      "time": 170,
      "section": "FINAL CHORUS",
      "text": "Falling flowers, stay\nWhile the wind still sings",
      "end": 178
    },
    {
      "time": 178,
      "section": "FINAL CHORUS",
      "text": "Falling flowers, stay\nUntil morning brings",
      "end": 182
    },
    {
      "time": 182,
      "section": "FINAL CHORUS",
      "text": "You were here, you were here\nThen you slipped away",
      "end": 186
    },
    {
      "time": 186,
      "section": "FINAL CHORUS",
      "text": "Falling flowers, stay\nIn my hands today",
      "end": 193
    }
  ],
  "originalText": "[Verse 1]\nI caught your sleeve in the rain\nBy the bus stop rail\nPaper cups in the gutter\nAnd a threadbare trail\nYour laugh drifted past me\nLike smoke from a train\nI held it too long\nNow it’s falling again\n\n[Pre-Chorus]\nWind in the alley\nTugging my coat\nCherry bloom bruised\nOn the curb and the stones\nYou turned your face\nJust half in the light\nAnd I knew then\nIt was leaving time\n\n[Chorus]\nFalling flowers, stay\nJust a little while\nFalling flowers, stay\nOn this crooked mile\nYou were here, you were here\nThen you slipped away\nFalling flowers, stay\nIn my hands today\n(falling flowers)\n\n[小solo]\n\n[Verse 2]\nYour name in my pocket\nFolded small and thin\nBeside old receipts\nAnd a cracked blue pen\nThe train windows shimmer\nWith somebody’s past\nI watch every face\nBut they move too fast\n\n[Pre-Chorus]\nWind in the wires\nSoft through the trees\nSomewhere a memory\nKeeps calling to me\nYou turned your head\nLike you knew my song\nThen the moment broke\nAnd the road rolled on\n\n[Chorus]\nFalling flowers, stay\nJust a little while\nFalling flowers, stay\nOn this crooked mile\nYou were here, you were here\nThen you slipped away\nFalling flowers, stay\nIn my hands today\n(falling flowers)\n\n[Bridge]\n[Distortion Solo]\n[strong]\nBlack strings crying\nThrough the open air\nConcrete and moon dust\nSpinning everywhere\nI reach for the shape\nYou left on my tongue\n[weak]\nBut the night just answers\nWith one soft hum\n\n[Final Chorus][weak]\nFalling flowers, stay\nJust a little while\nFalling flowers, stay\nOn this crooked mile\nYou were here, you were here\nThen you slipped away\nFalling flowers, stay\nIn my hands today\n[strong]\n(falling flowers)\nFalling flowers, stay\nWhile the wind still sings\nFalling flowers, stay\nUntil morning brings\nYou were here, you were here\nThen you slipped away\nFalling flowers, stay\nIn my hands today",
  "settings": {
    "volume": 0.75,
    "transitionSeconds": 0.6,
    "motion": 1,
    "lyricFontScale": 1,
    "expressionTransitionSeconds": 0.22,
    "characterHD": true,
    "printTransitions": [],
    "intro": {
      "insertMs": 850,
      "closeMs": 680,
      "pullbackMs": 1500,
      "settleMs": 160
    },
    "petalAssets": [
      "petalRose",
      "petalBlush",
      "petalDust",
      "petalIvory",
      "petalFold",
      "petalCup",
      "petalWide",
      "petalCurl"
    ],
    "signalAutomation": {
      "intro": [
        {
          "t": 0,
          "tracking": 0,
          "restoration": 0
        },
        {
          "t": 0.55,
          "tracking": 0.18,
          "restoration": 0.1
        },
        {
          "t": 1.6,
          "tracking": 0.5,
          "restoration": 0.3
        },
        {
          "t": 16.5,
          "tracking": 0.5,
          "restoration": 0.3
        },
        {
          "t": 17,
          "tracking": 0.8,
          "restoration": 1
        }
      ],
      "sustain": {
        "tracking": 0.8,
        "restoration": 1
      },
      "rearmTimes": [
        17,
        204.5
      ],
      "outro": [
        {
          "t": 204.5,
          "tracking": 0.8,
          "restoration": 1
        },
        {
          "t": 207.5,
          "tracking": 0.72,
          "restoration": 0.85
        },
        {
          "t": 210,
          "tracking": 0.38,
          "restoration": 0.42
        },
        {
          "t": 212.3,
          "tracking": 0.06,
          "restoration": 0.04
        },
        {
          "t": 213.68,
          "tracking": 0,
          "restoration": 0
        }
      ]
    },
    "eq": {
      "hi": 0,
      "mid": 0,
      "lo": 0
    }
  },
  "seatedSprites": {
    "standShadow": "assets/character/shadows/stand-bowed.png",
    "standBowed": "assets/character/shadows/stand-bowed.png",
    "standReachShadow": "assets/character/shadows/stand-reaching-profile.png",
    "standReachProfile": "assets/character/shadows/stand-reaching-profile.png",
    "standReachOpen": "assets/character/shadows/stand-reaching-open.png",
    "standReachHigh": "assets/character/shadows/stand-reaching-high.png",
    "reachShadow": "assets/character/shadows/kneel-reaching.png",
    "reachSoftShadow": "assets/character/shadows/kneel-reaching-soft.png",
    "sobShadow": "assets/character/shadows/sit-sobbing.png",
    "letterSit": "assets/character/shadows/sit-letter.webp",
    "coveredFace": "assets/character/details/covered-face.png"
  },
  "character": {
    "name": "Koharu",
    "design": "保留甜妹身份与硬线条图形画风。抬手沿用原上半身动作，下半身修正为自然侧坐；所有当前遮面图采用暖米白露肤、玫瑰色头发和深梅阴影。电台与磁带属于演出装置。",
    "expressions": {
      "stand": "站姿",
      "neutral": "平静",
      "sweet": "开心",
      "defensive": "抵触",
      "withdrawn": "蜷缩",
      "pleading": "恳求",
      "wistful": "失落",
      "reachShadow": "仰头抬手，完整侧坐姿",
      "sobShadow": "蜷坐掩面痛哭",
      "letterSit": "跪坐握信",
      "keysHeld": "侧坐攥紧房间钥匙"
    }
  },
  "expressions": [],
  "shadowSprites": {
    "standShadow": "assets/character/shadows/stand-bowed.png",
    "standBowed": "assets/character/shadows/stand-bowed.png",
    "standReachShadow": "assets/character/shadows/stand-reaching-profile.png",
    "standReachProfile": "assets/character/shadows/stand-reaching-profile.png",
    "standReachOpen": "assets/character/shadows/stand-reaching-open.png",
    "standReachHigh": "assets/character/shadows/stand-reaching-high.png",
    "reachShadow": "assets/character/shadows/kneel-reaching.png",
    "reachSoftShadow": "assets/character/shadows/kneel-reaching-soft.png",
    "sobShadow": "assets/character/shadows/sit-sobbing.png",
    "letterSit": "assets/character/shadows/sit-letter.webp",
    "coveredFace": "assets/character/details/covered-face.png"
  },
  "hdSprites": {},
  "cassette": {
    "title": "KOHARU",
    "subtitle": "FALLING FLOWERS",
    "decal": "assets/ui/koharu-tape-decal.png"
  }
};
