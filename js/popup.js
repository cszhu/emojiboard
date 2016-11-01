window.addEventListener('load', function() {
  for (var j = 0; j < emojiJSON.length; j++) {
    var emoji = emojiJSON[j].emoji;
    var emojiID = emojiJSON[j].description;
    var emojiType = emojiJSON[j].category;
    
    if (emojiType == "People") {
      appendTextOntoDoc("People", emoji, emojiID);
    } else if (emojiType == "Nature") {
      appendTextOntoDoc("Nature", emoji, emojiID);
    } else if (emojiType == "Foods") {
      appendTextOntoDoc("Foods", emoji, emojiID);
    } else if (emojiType == "Activity") {
      appendTextOntoDoc("Activity", emoji, emojiID);
    } else if (emojiType == "Places") {
      appendTextOntoDoc("Places", emoji, emojiID);
    } else if (emojiType == "Objects") {
      appendTextOntoDoc("Objects", emoji, emojiID);
    } else if (emojiType == "Symbols") {
      appendTextOntoDoc("Symbols", emoji, emojiID);
    } else if (emojiType == "Flags") {
      appendTextOntoDoc("Flags", emoji, emojiID);
    }
  }

  var emojiClasses = document.getElementsByClassName('emoji');
  console.log(emojiClasses);

  for (var i = 0; i < emojiClasses.length; i++) {
      emojiClasses[i].addEventListener('click', copyTextToClipboard, false);
      console.log('added event listener');
  }

  function copyTextToClipboard(e) {
    var text = document.getElementById(e.target.id);
    text = text.innerText;
    console.log(text);

    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = text;
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    body.removeChild(copyFrom);
  }
});

function appendTextOntoDoc(elementId, text, textID) {
  var source = document.getElementById(elementId);
  var pNode = document.createElement("div");
  var textNode = document.createTextNode(text);
  pNode.appendChild(textNode);
  pNode.setAttribute("id", textID);
  pNode.setAttribute("class", "emoji");
  source.appendChild(pNode);
}

var emojiJSON = [
  {
    "emoji": "😀"
  , "description": "grinning face"
  , "category": "People"
  , "aliases": [
      "grinning"
    ]
  , "tags": [
      "smile"
    , "happy"
    ]
  , "unicode_version": "6.1"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😬"
  , "description": "grimacing face"
  , "category": "People"
  , "aliases": [
      "grimacing"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.1"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😁"
  , "description": "grinning face with smiling eyes"
  , "category": "People"
  , "aliases": [
      "grin"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😂"
  , "description": "face with tears of joy"
  , "category": "People"
  , "aliases": [
      "joy"
    ]
  , "tags": [
      "tears"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😃"
  , "description": "smiling face with open mouth"
  , "category": "People"
  , "aliases": [
      "smiley"
    ]
  , "tags": [
      "happy"
    , "joy"
    , "haha"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😄"
  , "description": "smiling face with open mouth & smiling eyes"
  , "category": "People"
  , "aliases": [
      "smile"
    ]
  , "tags": [
      "happy"
    , "joy"
    , "pleased"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😅"
  , "description": "smiling face with open mouth & cold sweat"
  , "category": "People"
  , "aliases": [
      "sweat_smile"
    ]
  , "tags": [
      "hot"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😆"
  , "description": "smiling face with open mouth & closed eyes"
  , "category": "People"
  , "aliases": [
      "laughing"
    , "satisfied"
    ]
  , "tags": [
      "happy"
    , "haha"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😇"
  , "description": "smiling face with halo"
  , "category": "People"
  , "aliases": [
      "innocent"
    ]
  , "tags": [
      "angel"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😉"
  , "description": "winking face"
  , "category": "People"
  , "aliases": [
      "wink"
    ]
  , "tags": [
      "flirt"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😊"
  , "description": "smiling face with smiling eyes"
  , "category": "People"
  , "aliases": [
      "blush"
    ]
  , "tags": [
      "proud"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🙂"
  , "description": "slightly smiling face"
  , "category": "People"
  , "aliases": [
      "slightly_smiling_face"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🙃"
  , "description": "upside-down face"
  , "category": "People"
  , "aliases": [
      "upside_down_face"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "☺️"
  , "description": "smiling face"
  , "category": "People"
  , "aliases": [
      "relaxed"
    ]
  , "tags": [
      "blush"
    , "pleased"
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "😋"
  , "description": "face savouring delicious food"
  , "category": "People"
  , "aliases": [
      "yum"
    ]
  , "tags": [
      "tongue"
    , "lick"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😌"
  , "description": "relieved face"
  , "category": "People"
  , "aliases": [
      "relieved"
    ]
  , "tags": [
      "whew"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😍"
  , "description": "smiling face with heart-eyes"
  , "category": "People"
  , "aliases": [
      "heart_eyes"
    ]
  , "tags": [
      "love"
    , "crush"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😘"
  , "description": "face blowing a kiss"
  , "category": "People"
  , "aliases": [
      "kissing_heart"
    ]
  , "tags": [
      "flirt"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😗"
  , "description": "kissing face"
  , "category": "People"
  , "aliases": [
      "kissing"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.1"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😙"
  , "description": "kissing face with smiling eyes"
  , "category": "People"
  , "aliases": [
      "kissing_smiling_eyes"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.1"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😚"
  , "description": "kissing face with closed eyes"
  , "category": "People"
  , "aliases": [
      "kissing_closed_eyes"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😜"
  , "description": "face with stuck-out tongue & winking eye"
  , "category": "People"
  , "aliases": [
      "stuck_out_tongue_winking_eye"
    ]
  , "tags": [
      "prank"
    , "silly"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😝"
  , "description": "face with stuck-out tongue & closed eyes"
  , "category": "People"
  , "aliases": [
      "stuck_out_tongue_closed_eyes"
    ]
  , "tags": [
      "prank"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😛"
  , "description": "face with stuck-out tongue"
  , "category": "People"
  , "aliases": [
      "stuck_out_tongue"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.1"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🤑"
  , "description": "money-mouth face"
  , "category": "People"
  , "aliases": [
      "money_mouth_face"
    ]
  , "tags": [
      "rich"
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🤓"
  , "description": "nerd face"
  , "category": "People"
  , "aliases": [
      "nerd_face"
    ]
  , "tags": [
      "geek"
    , "glasses"
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "😎"
  , "description": "smiling face with sunglasses"
  , "category": "People"
  , "aliases": [
      "sunglasses"
    ]
  , "tags": [
      "cool"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🤗"
  , "description": "hugging face"
  , "category": "People"
  , "aliases": [
      "hugs"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "😏"
  , "description": "smirking face"
  , "category": "People"
  , "aliases": [
      "smirk"
    ]
  , "tags": [
      "smug"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😶"
  , "description": "face without mouth"
  , "category": "People"
  , "aliases": [
      "no_mouth"
    ]
  , "tags": [
      "mute"
    , "silence"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😐"
  , "description": "neutral face"
  , "category": "People"
  , "aliases": [
      "neutral_face"
    ]
  , "tags": [
      "meh"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😑"
  , "description": "expressionless face"
  , "category": "People"
  , "aliases": [
      "expressionless"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.1"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😒"
  , "description": "unamused face"
  , "category": "People"
  , "aliases": [
      "unamused"
    ]
  , "tags": [
      "meh"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🙄"
  , "description": "face with rolling eyes"
  , "category": "People"
  , "aliases": [
      "roll_eyes"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🤔"
  , "description": "thinking face"
  , "category": "People"
  , "aliases": [
      "thinking"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "😳"
  , "description": "flushed face"
  , "category": "People"
  , "aliases": [
      "flushed"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😞"
  , "description": "disappointed face"
  , "category": "People"
  , "aliases": [
      "disappointed"
    ]
  , "tags": [
      "sad"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😟"
  , "description": "worried face"
  , "category": "People"
  , "aliases": [
      "worried"
    ]
  , "tags": [
      "nervous"
    ]
  , "unicode_version": "6.1"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😠"
  , "description": "angry face"
  , "category": "People"
  , "aliases": [
      "angry"
    ]
  , "tags": [
      "mad"
    , "annoyed"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😡"
  , "description": "pouting face"
  , "category": "People"
  , "aliases": [
      "rage"
    , "pout"
    ]
  , "tags": [
      "angry"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😔"
  , "description": "pensive face"
  , "category": "People"
  , "aliases": [
      "pensive"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😕"
  , "description": "confused face"
  , "category": "People"
  , "aliases": [
      "confused"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.1"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🙁"
  , "description": "slightly frowning face"
  , "category": "People"
  , "aliases": [
      "slightly_frowning_face"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "☹️"
  , "description": "frowning face"
  , "category": "People"
  , "aliases": [
      "frowning_face"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "9.1"
  }
, {
    "emoji": "😣"
  , "description": "persevering face"
  , "category": "People"
  , "aliases": [
      "persevere"
    ]
  , "tags": [
      "struggling"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😖"
  , "description": "confounded face"
  , "category": "People"
  , "aliases": [
      "confounded"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😫"
  , "description": "tired face"
  , "category": "People"
  , "aliases": [
      "tired_face"
    ]
  , "tags": [
      "upset"
    , "whine"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😩"
  , "description": "weary face"
  , "category": "People"
  , "aliases": [
      "weary"
    ]
  , "tags": [
      "tired"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😤"
  , "description": "face with steam from nose"
  , "category": "People"
  , "aliases": [
      "triumph"
    ]
  , "tags": [
      "smug"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😮"
  , "description": "face with open mouth"
  , "category": "People"
  , "aliases": [
      "open_mouth"
    ]
  , "tags": [
      "surprise"
    , "impressed"
    , "wow"
    ]
  , "unicode_version": "6.1"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😱"
  , "description": "face screaming in fear"
  , "category": "People"
  , "aliases": [
      "scream"
    ]
  , "tags": [
      "horror"
    , "shocked"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😨"
  , "description": "fearful face"
  , "category": "People"
  , "aliases": [
      "fearful"
    ]
  , "tags": [
      "scared"
    , "shocked"
    , "oops"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😰"
  , "description": "face with open mouth & cold sweat"
  , "category": "People"
  , "aliases": [
      "cold_sweat"
    ]
  , "tags": [
      "nervous"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😯"
  , "description": "hushed face"
  , "category": "People"
  , "aliases": [
      "hushed"
    ]
  , "tags": [
      "silence"
    , "speechless"
    ]
  , "unicode_version": "6.1"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😦"
  , "description": "frowning face with open mouth"
  , "category": "People"
  , "aliases": [
      "frowning"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.1"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😧"
  , "description": "anguished face"
  , "category": "People"
  , "aliases": [
      "anguished"
    ]
  , "tags": [
      "stunned"
    ]
  , "unicode_version": "6.1"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😢"
  , "description": "crying face"
  , "category": "People"
  , "aliases": [
      "cry"
    ]
  , "tags": [
      "sad"
    , "tear"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😥"
  , "description": "disappointed but relieved face"
  , "category": "People"
  , "aliases": [
      "disappointed_relieved"
    ]
  , "tags": [
      "phew"
    , "sweat"
    , "nervous"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😪"
  , "description": "sleepy face"
  , "category": "People"
  , "aliases": [
      "sleepy"
    ]
  , "tags": [
      "tired"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😓"
  , "description": "face with cold sweat"
  , "category": "People"
  , "aliases": [
      "sweat"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😭"
  , "description": "loudly crying face"
  , "category": "People"
  , "aliases": [
      "sob"
    ]
  , "tags": [
      "sad"
    , "cry"
    , "bawling"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😵"
  , "description": "dizzy face"
  , "category": "People"
  , "aliases": [
      "dizzy_face"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😲"
  , "description": "astonished face"
  , "category": "People"
  , "aliases": [
      "astonished"
    ]
  , "tags": [
      "amazed"
    , "gasp"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🤐"
  , "description": "zipper-mouth face"
  , "category": "People"
  , "aliases": [
      "zipper_mouth_face"
    ]
  , "tags": [
      "silence"
    , "hush"
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "😷"
  , "description": "face with medical mask"
  , "category": "People"
  , "aliases": [
      "mask"
    ]
  , "tags": [
      "sick"
    , "ill"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🤒"
  , "description": "face with thermometer"
  , "category": "People"
  , "aliases": [
      "face_with_thermometer"
    ]
  , "tags": [
      "sick"
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🤕"
  , "description": "face with head-bandage"
  , "category": "People"
  , "aliases": [
      "face_with_head_bandage"
    ]
  , "tags": [
      "hurt"
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "😴"
  , "description": "sleeping face"
  , "category": "People"
  , "aliases": [
      "sleeping"
    ]
  , "tags": [
      "zzz"
    ]
  , "unicode_version": "6.1"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💤"
  , "description": "zzz"
  , "category": "People"
  , "aliases": [
      "zzz"
    ]
  , "tags": [
      "sleeping"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💩"
  , "description": "pile of poo"
  , "category": "People"
  , "aliases": [
      "hankey"
    , "poop"
    , "shit"
    ]
  , "tags": [
      "crap"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😈"
  , "description": "smiling face with horns"
  , "category": "People"
  , "aliases": [
      "smiling_imp"
    ]
  , "tags": [
      "devil"
    , "evil"
    , "horns"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👿"
  , "description": "angry face with horns"
  , "category": "People"
  , "aliases": [
      "imp"
    ]
  , "tags": [
      "angry"
    , "devil"
    , "evil"
    , "horns"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👹"
  , "description": "ogre"
  , "category": "People"
  , "aliases": [
      "japanese_ogre"
    ]
  , "tags": [
      "monster"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👺"
  , "description": "goblin"
  , "category": "People"
  , "aliases": [
      "japanese_goblin"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👻"
  , "description": "ghost"
  , "category": "People"
  , "aliases": [
      "ghost"
    ]
  , "tags": [
      "halloween"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💀"
  , "description": "skull"
  , "category": "People"
  , "aliases": [
      "skull"
    ]
  , "tags": [
      "dead"
    , "danger"
    , "poison"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "☠️"
  , "description": "skull and crossbones"
  , "category": "People"
  , "aliases": [
      "skull_and_crossbones"
    ]
  , "tags": [
      "danger"
    , "pirate"
    ]
  , "unicode_version": ""
  , "ios_version": "9.1"
  }
, {
    "emoji": "👽"
  , "description": "alien"
  , "category": "People"
  , "aliases": [
      "alien"
    ]
  , "tags": [
      "ufo"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👾"
  , "description": "alien monster"
  , "category": "People"
  , "aliases": [
      "space_invader"
    ]
  , "tags": [
      "game"
    , "retro"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🤖"
  , "description": "robot face"
  , "category": "People"
  , "aliases": [
      "robot"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "😺"
  , "description": "smiling cat face with open mouth"
  , "category": "People"
  , "aliases": [
      "smiley_cat"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😸"
  , "description": "grinning cat face with smiling eyes"
  , "category": "People"
  , "aliases": [
      "smile_cat"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😹"
  , "description": "cat face with tears of joy"
  , "category": "People"
  , "aliases": [
      "joy_cat"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😻"
  , "description": "smiling cat face with heart-eyes"
  , "category": "People"
  , "aliases": [
      "heart_eyes_cat"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😼"
  , "description": "cat face with wry smile"
  , "category": "People"
  , "aliases": [
      "smirk_cat"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😽"
  , "description": "kissing cat face with closed eyes"
  , "category": "People"
  , "aliases": [
      "kissing_cat"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🙀"
  , "description": "weary cat face"
  , "category": "People"
  , "aliases": [
      "scream_cat"
    ]
  , "tags": [
      "horror"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😿"
  , "description": "crying cat face"
  , "category": "People"
  , "aliases": [
      "crying_cat_face"
    ]
  , "tags": [
      "sad"
    , "tear"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "😾"
  , "description": "pouting cat face"
  , "category": "People"
  , "aliases": [
      "pouting_cat"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🙌"
  , "description": "raising hands"
  , "category": "People"
  , "aliases": [
      "raised_hands"
    ]
  , "tags": [
      "hooray"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👏"
  , "description": "clapping hands"
  , "category": "People"
  , "aliases": [
      "clap"
    ]
  , "tags": [
      "praise"
    , "applause"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👍"
  , "description": "thumbs up"
  , "category": "People"
  , "aliases": [
      "+1"
    , "thumbsup"
    ]
  , "tags": [
      "approve"
    , "ok"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👎"
  , "description": "thumbs down"
  , "category": "People"
  , "aliases": [
      "-1"
    , "thumbsdown"
    ]
  , "tags": [
      "disapprove"
    , "bury"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👊"
  , "description": "oncoming fist"
  , "category": "People"
  , "aliases": [
      "facepunch"
    , "punch"
    ]
  , "tags": [
      "attack"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "✊"
  , "description": "raised fist"
  , "category": "People"
  , "aliases": [
      "fist"
    ]
  , "tags": [
      "power"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👋"
  , "description": "waving hand"
  , "category": "People"
  , "aliases": [
      "wave"
    ]
  , "tags": [
      "goodbye"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👈"
  , "description": "backhand index pointing left"
  , "category": "People"
  , "aliases": [
      "point_left"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👉"
  , "description": "backhand index pointing right"
  , "category": "People"
  , "aliases": [
      "point_right"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👆"
  , "description": "backhand index pointing up"
  , "category": "People"
  , "aliases": [
      "point_up_2"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👇"
  , "description": "backhand index pointing down"
  , "category": "People"
  , "aliases": [
      "point_down"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👌"
  , "description": "OK hand"
  , "category": "People"
  , "aliases": [
      "ok_hand"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "☝️"
  , "description": "index pointing up"
  , "category": "People"
  , "aliases": [
      "point_up"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "✌️"
  , "description": "victory hand"
  , "category": "People"
  , "aliases": [
      "v"
    ]
  , "tags": [
      "victory"
    , "peace"
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "✋"
  , "description": "raised hand"
  , "category": "People"
  , "aliases": [
      "hand"
    , "raised_hand"
    ]
  , "tags": [
      "highfive"
    , "stop"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🖐"
  , "description": "raised hand with fingers splayed"
  , "category": "People"
  , "aliases": [
      "raised_hand_with_fingers_splayed"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "👐"
  , "description": "open hands"
  , "category": "People"
  , "aliases": [
      "open_hands"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💪"
  , "description": "flexed biceps"
  , "category": "People"
  , "aliases": [
      "muscle"
    ]
  , "tags": [
      "flex"
    , "bicep"
    , "strong"
    , "workout"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🙏"
  , "description": "folded hands"
  , "category": "People"
  , "aliases": [
      "pray"
    ]
  , "tags": [
      "please"
    , "hope"
    , "wish"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🖖"
  , "description": "vulcan salute"
  , "category": "People"
  , "aliases": [
      "vulcan_salute"
    ]
  , "tags": [
      "prosper"
    , "spock"
    ]
  , "unicode_version": "7.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🤘"
  , "description": "sign of the horns"
  , "category": "People"
  , "aliases": [
      "metal"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🖕"
  , "description": "middle finger"
  , "category": "People"
  , "aliases": [
      "middle_finger"
    , "fu"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "✍️"
  , "description": "writing hand"
  , "category": "People"
  , "aliases": [
      "writing_hand"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "9.1"
  }
, {
    "emoji": "💅"
  , "description": "nail polish"
  , "category": "People"
  , "aliases": [
      "nail_care"
    ]
  , "tags": [
      "beauty"
    , "manicure"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👄"
  , "description": "mouth"
  , "category": "People"
  , "aliases": [
      "lips"
    ]
  , "tags": [
      "kiss"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👅"
  , "description": "tongue"
  , "category": "People"
  , "aliases": [
      "tongue"
    ]
  , "tags": [
      "taste"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👂"
  , "description": "ear"
  , "category": "People"
  , "aliases": [
      "ear"
    ]
  , "tags": [
      "hear"
    , "sound"
    , "listen"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👃"
  , "description": "nose"
  , "category": "People"
  , "aliases": [
      "nose"
    ]
  , "tags": [
      "smell"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👁"
  , "description": "eye"
  , "category": "People"
  , "aliases": [
      "eye"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "👀"
  , "description": "eyes"
  , "category": "People"
  , "aliases": [
      "eyes"
    ]
  , "tags": [
      "look"
    , "see"
    , "watch"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🗣"
  , "description": "speaking head"
  , "category": "People"
  , "aliases": [
      "speaking_head"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "👤"
  , "description": "bust in silhouette"
  , "category": "People"
  , "aliases": [
      "bust_in_silhouette"
    ]
  , "tags": [
      "user"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👥"
  , "description": "busts in silhouette"
  , "category": "People"
  , "aliases": [
      "busts_in_silhouette"
    ]
  , "tags": [
      "users"
    , "group"
    , "team"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👶"
  , "description": "baby"
  , "category": "People"
  , "aliases": [
      "baby"
    ]
  , "tags": [
      "child"
    , "newborn"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👦"
  , "description": "boy"
  , "category": "People"
  , "aliases": [
      "boy"
    ]
  , "tags": [
      "child"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👧"
  , "description": "girl"
  , "category": "People"
  , "aliases": [
      "girl"
    ]
  , "tags": [
      "child"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👨"
  , "description": "man"
  , "category": "People"
  , "aliases": [
      "man"
    ]
  , "tags": [
      "mustache"
    , "father"
    , "dad"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👩"
  , "description": "woman"
  , "category": "People"
  , "aliases": [
      "woman"
    ]
  , "tags": [
      "girls"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👱‍♀️"
  , "description": "blond-haired woman"
  , "category": "People"
  , "aliases": [
      "blonde_woman"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "👱"
  , "description": "blond-haired person"
  , "category": "People"
  , "aliases": [
      "blonde_man"
    , "person_with_blond_hair"
    ]
  , "tags": [
      "boy"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👴"
  , "description": "old man"
  , "category": "People"
  , "aliases": [
      "older_man"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👵"
  , "description": "old woman"
  , "category": "People"
  , "aliases": [
      "older_woman"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👲"
  , "description": "man with Chinese cap"
  , "category": "People"
  , "aliases": [
      "man_with_gua_pi_mao"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👳‍♀️"
  , "description": "woman wearing turban"
  , "category": "People"
  , "aliases": [
      "woman_with_turban"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "👳"
  , "description": "person wearing turban"
  , "category": "People"
  , "aliases": [
      "man_with_turban"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👮‍♀️"
  , "description": "woman police officer"
  , "category": "People"
  , "aliases": [
      "policewoman"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "👮"
  , "description": "police officer"
  , "category": "People"
  , "aliases": [
      "policeman"
    , "cop"
    ]
  , "tags": [
      "police"
    , "law"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👷‍♀️"
  , "description": "woman construction worker"
  , "category": "People"
  , "aliases": [
      "construction_worker_woman"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "👷"
  , "description": "construction worker"
  , "category": "People"
  , "aliases": [
      "construction_worker_man"
    , "construction_worker"
    ]
  , "tags": [
      "helmet"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💂‍♀️"
  , "description": "woman guard"
  , "category": "People"
  , "aliases": [
      "guardswoman"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "💂"
  , "description": "guard"
  , "category": "People"
  , "aliases": [
      "guardsman"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕵️‍♀️"
  , "description": "woman detective"
  , "category": "People"
  , "aliases": [
      "female_detective"
    ]
  , "tags": [
      "sleuth"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "🕵️"
  , "description": "detective"
  , "category": "People"
  , "aliases": [
      "male_detective"
    , "detective"
    ]
  , "tags": [
      "sleuth"
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🎅"
  , "description": "Santa Claus"
  , "category": "People"
  , "aliases": [
      "santa"
    ]
  , "tags": [
      "christmas"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👸"
  , "description": "princess"
  , "category": "People"
  , "aliases": [
      "princess"
    ]
  , "tags": [
      "blonde"
    , "crown"
    , "royal"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👰"
  , "description": "bride with veil"
  , "category": "People"
  , "aliases": [
      "bride_with_veil"
    ]
  , "tags": [
      "marriage"
    , "wedding"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👼"
  , "description": "baby angel"
  , "category": "People"
  , "aliases": [
      "angel"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🙇‍♀️"
  , "description": "woman bowing"
  , "category": "People"
  , "aliases": [
      "bowing_woman"
    ]
  , "tags": [
      "respect"
    , "thanks"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "🙇"
  , "description": "person bowing"
  , "category": "People"
  , "aliases": [
      "bowing_man"
    , "bow"
    ]
  , "tags": [
      "respect"
    , "thanks"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💁"
  , "description": "person tipping hand"
  , "category": "People"
  , "aliases": [
      "tipping_hand_woman"
    , "information_desk_person"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💁‍♂️"
  , "description": "man tipping hand"
  , "category": "People"
  , "aliases": [
      "tipping_hand_man"
    ]
  , "tags": [
      "information"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "🙅"
  , "description": "person gesturing NO"
  , "category": "People"
  , "aliases": [
      "no_good_woman"
    , "no_good"
    , "ng_woman"
    ]
  , "tags": [
      "stop"
    , "halt"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🙅‍♂️"
  , "description": "man gesturing NO"
  , "category": "People"
  , "aliases": [
      "no_good_man"
    , "ng_man"
    ]
  , "tags": [
      "stop"
    , "halt"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "🙆"
  , "description": "person gesturing OK"
  , "category": "People"
  , "aliases": [
      "ok_woman"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🙆‍♂️"
  , "description": "man gesturing OK"
  , "category": "People"
  , "aliases": [
      "ok_man"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "🙋"
  , "description": "person raising hand"
  , "category": "People"
  , "aliases": [
      "raising_hand_woman"
    , "raising_hand"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🙋‍♂️"
  , "description": "man raising hand"
  , "category": "People"
  , "aliases": [
      "raising_hand_man"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "🙎"
  , "description": "person pouting"
  , "category": "People"
  , "aliases": [
      "pouting_woman"
    , "person_with_pouting_face"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🙎‍♂️"
  , "description": "man pouting"
  , "category": "People"
  , "aliases": [
      "pouting_man"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "🙍"
  , "description": "person frowning"
  , "category": "People"
  , "aliases": [
      "frowning_woman"
    , "person_frowning"
    ]
  , "tags": [
      "sad"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🙍‍♂️"
  , "description": "man frowning"
  , "category": "People"
  , "aliases": [
      "frowning_man"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "💇"
  , "description": "person getting haircut"
  , "category": "People"
  , "aliases": [
      "haircut_woman"
    , "haircut"
    ]
  , "tags": [
      "beauty"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💇‍♂️"
  , "description": "man getting haircut"
  , "category": "People"
  , "aliases": [
      "haircut_man"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "💆"
  , "description": "person getting massage"
  , "category": "People"
  , "aliases": [
      "massage_woman"
    , "massage"
    ]
  , "tags": [
      "spa"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💆‍♂️"
  , "description": "man getting massage"
  , "category": "People"
  , "aliases": [
      "massage_man"
    ]
  , "tags": [
      "spa"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "💃"
  , "description": "woman dancing"
  , "category": "People"
  , "aliases": [
      "dancer"
    ]
  , "tags": [
      "dress"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👯"
  , "description": "people with bunny ears partying"
  , "category": "People"
  , "aliases": [
      "dancing_women"
    , "dancers"
    ]
  , "tags": [
      "bunny"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👯‍♂️"
  , "description": "men with bunny ears partying"
  , "category": "People"
  , "aliases": [
      "dancing_men"
    ]
  , "tags": [
      "bunny"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "🚶‍♀️"
  , "description": "woman walking"
  , "category": "People"
  , "aliases": [
      "walking_woman"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "🚶"
  , "description": "person walking"
  , "category": "People"
  , "aliases": [
      "walking_man"
    , "walking"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏃‍♀️"
  , "description": "woman running"
  , "category": "People"
  , "aliases": [
      "running_woman"
    ]
  , "tags": [
      "exercise"
    , "workout"
    , "marathon"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "🏃"
  , "description": "person running"
  , "category": "People"
  , "aliases": [
      "running_man"
    , "runner"
    , "running"
    ]
  , "tags": [
      "exercise"
    , "workout"
    , "marathon"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👫"
  , "description": "man and woman holding hands"
  , "category": "People"
  , "aliases": [
      "couple"
    ]
  , "tags": [
      "date"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👭"
  , "description": "two women holding hands"
  , "category": "People"
  , "aliases": [
      "two_women_holding_hands"
    ]
  , "tags": [
      "couple"
    , "date"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👬"
  , "description": "two men holding hands"
  , "category": "People"
  , "aliases": [
      "two_men_holding_hands"
    ]
  , "tags": [
      "couple"
    , "date"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💑"
  , "description": "couple with heart"
  , "category": "People"
  , "aliases": [
      "couple_with_heart_woman_man"
    , "couple_with_heart"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👩‍❤️‍👩"
  , "description": "couple with heart: woman, woman"
  , "category": "People"
  , "aliases": [
      "couple_with_heart_woman_woman"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "👨‍❤️‍👨"
  , "description": "couple with heart: man, man"
  , "category": "People"
  , "aliases": [
      "couple_with_heart_man_man"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "💏"
  , "description": "kiss"
  , "category": "People"
  , "aliases": [
      "couplekiss_man_woman"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👩‍❤️‍💋‍👩"
  , "description": "kiss: woman, woman"
  , "category": "People"
  , "aliases": [
      "couplekiss_woman_woman"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "👨‍❤️‍💋‍👨"
  , "description": "kiss: man, man"
  , "category": "People"
  , "aliases": [
      "couplekiss_man_man"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "👪"
  , "description": "family"
  , "category": "People"
  , "aliases": [
      "family_man_woman_boy"
    , "family"
    ]
  , "tags": [
      "home"
    , "parents"
    , "child"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👨‍👩‍👧"
  , "description": "family: man, woman, girl"
  , "category": "People"
  , "aliases": [
      "family_man_woman_girl"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "👨‍👩‍👧‍👦"
  , "description": "family: man, woman, girl, boy"
  , "category": "People"
  , "aliases": [
      "family_man_woman_girl_boy"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "👨‍👩‍👦‍👦"
  , "description": "family: man, woman, boy, boy"
  , "category": "People"
  , "aliases": [
      "family_man_woman_boy_boy"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "👨‍👩‍👧‍👧"
  , "description": "family: man, woman, girl, girl"
  , "category": "People"
  , "aliases": [
      "family_man_woman_girl_girl"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "👩‍👩‍👦"
  , "description": "family: woman, woman, boy"
  , "category": "People"
  , "aliases": [
      "family_woman_woman_boy"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "👩‍👩‍👧"
  , "description": "family: woman, woman, girl"
  , "category": "People"
  , "aliases": [
      "family_woman_woman_girl"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "👩‍👩‍👧‍👦"
  , "description": "family: woman, woman, girl, boy"
  , "category": "People"
  , "aliases": [
      "family_woman_woman_girl_boy"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "👩‍👩‍👦‍👦"
  , "description": "family: woman, woman, boy, boy"
  , "category": "People"
  , "aliases": [
      "family_woman_woman_boy_boy"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "👩‍👩‍👧‍👧"
  , "description": "family: woman, woman, girl, girl"
  , "category": "People"
  , "aliases": [
      "family_woman_woman_girl_girl"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "👨‍👨‍👦"
  , "description": "family: man, man, boy"
  , "category": "People"
  , "aliases": [
      "family_man_man_boy"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "👨‍👨‍👧"
  , "description": "family: man, man, girl"
  , "category": "People"
  , "aliases": [
      "family_man_man_girl"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "👨‍👨‍👧‍👦"
  , "description": "family: man, man, girl, boy"
  , "category": "People"
  , "aliases": [
      "family_man_man_girl_boy"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "👨‍👨‍👦‍👦"
  , "description": "family: man, man, boy, boy"
  , "category": "People"
  , "aliases": [
      "family_man_man_boy_boy"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "👨‍👨‍👧‍👧"
  , "description": "family: man, man, girl, girl"
  , "category": "People"
  , "aliases": [
      "family_man_man_girl_girl"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "👩‍👦"
  , "description": "family: woman, boy"
  , "category": "People"
  , "aliases": [
      "family_woman_boy"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "👩‍👧"
  , "description": "family: woman, girl"
  , "category": "People"
  , "aliases": [
      "family_woman_girl"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "👩‍👧‍👦"
  , "description": "family: woman, girl, boy"
  , "category": "People"
  , "aliases": [
      "family_woman_girl_boy"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "👩‍👦‍👦"
  , "description": "family: woman, boy, boy"
  , "category": "People"
  , "aliases": [
      "family_woman_boy_boy"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "👩‍👧‍👧"
  , "description": "family: woman, girl, girl"
  , "category": "People"
  , "aliases": [
      "family_woman_girl_girl"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "👨‍👦"
  , "description": "family: man, boy"
  , "category": "People"
  , "aliases": [
      "family_man_boy"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "👨‍👧"
  , "description": "family: man, girl"
  , "category": "People"
  , "aliases": [
      "family_man_girl"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "👨‍👧‍👦"
  , "description": "family: man, girl, boy"
  , "category": "People"
  , "aliases": [
      "family_man_girl_boy"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "👨‍👦‍👦"
  , "description": "family: man, boy, boy"
  , "category": "People"
  , "aliases": [
      "family_man_boy_boy"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "👨‍👧‍👧"
  , "description": "family: man, girl, girl"
  , "category": "People"
  , "aliases": [
      "family_man_girl_girl"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "👚"
  , "description": "woman’s clothes"
  , "category": "People"
  , "aliases": [
      "womans_clothes"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👕"
  , "description": "t-shirt"
  , "category": "People"
  , "aliases": [
      "shirt"
    , "tshirt"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👖"
  , "description": "jeans"
  , "category": "People"
  , "aliases": [
      "jeans"
    ]
  , "tags": [
      "pants"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👔"
  , "description": "necktie"
  , "category": "People"
  , "aliases": [
      "necktie"
    ]
  , "tags": [
      "shirt"
    , "formal"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👗"
  , "description": "dress"
  , "category": "People"
  , "aliases": [
      "dress"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👙"
  , "description": "bikini"
  , "category": "People"
  , "aliases": [
      "bikini"
    ]
  , "tags": [
      "beach"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👘"
  , "description": "kimono"
  , "category": "People"
  , "aliases": [
      "kimono"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💄"
  , "description": "lipstick"
  , "category": "People"
  , "aliases": [
      "lipstick"
    ]
  , "tags": [
      "makeup"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💋"
  , "description": "kiss mark"
  , "category": "People"
  , "aliases": [
      "kiss"
    ]
  , "tags": [
      "lipstick"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👣"
  , "description": "footprints"
  , "category": "People"
  , "aliases": [
      "footprints"
    ]
  , "tags": [
      "feet"
    , "tracks"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👠"
  , "description": "high-heeled shoe"
  , "category": "People"
  , "aliases": [
      "high_heel"
    ]
  , "tags": [
      "shoe"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👡"
  , "description": "woman’s sandal"
  , "category": "People"
  , "aliases": [
      "sandal"
    ]
  , "tags": [
      "shoe"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👢"
  , "description": "woman’s boot"
  , "category": "People"
  , "aliases": [
      "boot"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👞"
  , "description": "man’s shoe"
  , "category": "People"
  , "aliases": [
      "mans_shoe"
    , "shoe"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👟"
  , "description": "running shoe"
  , "category": "People"
  , "aliases": [
      "athletic_shoe"
    ]
  , "tags": [
      "sneaker"
    , "sport"
    , "running"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👒"
  , "description": "woman’s hat"
  , "category": "People"
  , "aliases": [
      "womans_hat"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎩"
  , "description": "top hat"
  , "category": "People"
  , "aliases": [
      "tophat"
    ]
  , "tags": [
      "hat"
    , "classy"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎓"
  , "description": "graduation cap"
  , "category": "People"
  , "aliases": [
      "mortar_board"
    ]
  , "tags": [
      "education"
    , "college"
    , "university"
    , "graduation"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👑"
  , "description": "crown"
  , "category": "People"
  , "aliases": [
      "crown"
    ]
  , "tags": [
      "king"
    , "queen"
    , "royal"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⛑"
  , "description": "rescue worker’s helmet"
  , "category": "People"
  , "aliases": [
      "rescue_worker_helmet"
    ]
  , "tags": [
    ]
  , "unicode_version": "5.2"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🎒"
  , "description": "school backpack"
  , "category": "People"
  , "aliases": [
      "school_satchel"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👝"
  , "description": "clutch bag"
  , "category": "People"
  , "aliases": [
      "pouch"
    ]
  , "tags": [
      "bag"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👛"
  , "description": "purse"
  , "category": "People"
  , "aliases": [
      "purse"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👜"
  , "description": "handbag"
  , "category": "People"
  , "aliases": [
      "handbag"
    ]
  , "tags": [
      "bag"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💼"
  , "description": "briefcase"
  , "category": "People"
  , "aliases": [
      "briefcase"
    ]
  , "tags": [
      "business"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👓"
  , "description": "glasses"
  , "category": "People"
  , "aliases": [
      "eyeglasses"
    ]
  , "tags": [
      "glasses"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕶"
  , "description": "sunglasses"
  , "category": "People"
  , "aliases": [
      "dark_sunglasses"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "💍"
  , "description": "ring"
  , "category": "People"
  , "aliases": [
      "ring"
    ]
  , "tags": [
      "wedding"
    , "marriage"
    , "engaged"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌂"
  , "description": "closed umbrella"
  , "category": "People"
  , "aliases": [
      "closed_umbrella"
    ]
  , "tags": [
      "weather"
    , "rain"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐶"
  , "description": "dog face"
  , "category": "Nature"
  , "aliases": [
      "dog"
    ]
  , "tags": [
      "pet"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐱"
  , "description": "cat face"
  , "category": "Nature"
  , "aliases": [
      "cat"
    ]
  , "tags": [
      "pet"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐭"
  , "description": "mouse face"
  , "category": "Nature"
  , "aliases": [
      "mouse"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐹"
  , "description": "hamster face"
  , "category": "Nature"
  , "aliases": [
      "hamster"
    ]
  , "tags": [
      "pet"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐰"
  , "description": "rabbit face"
  , "category": "Nature"
  , "aliases": [
      "rabbit"
    ]
  , "tags": [
      "bunny"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐻"
  , "description": "bear face"
  , "category": "Nature"
  , "aliases": [
      "bear"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐼"
  , "description": "panda face"
  , "category": "Nature"
  , "aliases": [
      "panda_face"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐨"
  , "description": "koala"
  , "category": "Nature"
  , "aliases": [
      "koala"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐯"
  , "description": "tiger face"
  , "category": "Nature"
  , "aliases": [
      "tiger"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🦁"
  , "description": "lion face"
  , "category": "Nature"
  , "aliases": [
      "lion"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🐮"
  , "description": "cow face"
  , "category": "Nature"
  , "aliases": [
      "cow"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐷"
  , "description": "pig face"
  , "category": "Nature"
  , "aliases": [
      "pig"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐽"
  , "description": "pig nose"
  , "category": "Nature"
  , "aliases": [
      "pig_nose"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐸"
  , "description": "frog face"
  , "category": "Nature"
  , "aliases": [
      "frog"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐙"
  , "description": "octopus"
  , "category": "Nature"
  , "aliases": [
      "octopus"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐵"
  , "description": "monkey face"
  , "category": "Nature"
  , "aliases": [
      "monkey_face"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🙈"
  , "description": "see-no-evil monkey"
  , "category": "Nature"
  , "aliases": [
      "see_no_evil"
    ]
  , "tags": [
      "monkey"
    , "blind"
    , "ignore"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🙉"
  , "description": "hear-no-evil monkey"
  , "category": "Nature"
  , "aliases": [
      "hear_no_evil"
    ]
  , "tags": [
      "monkey"
    , "deaf"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🙊"
  , "description": "speak-no-evil monkey"
  , "category": "Nature"
  , "aliases": [
      "speak_no_evil"
    ]
  , "tags": [
      "monkey"
    , "mute"
    , "hush"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐒"
  , "description": "monkey"
  , "category": "Nature"
  , "aliases": [
      "monkey"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐔"
  , "description": "chicken"
  , "category": "Nature"
  , "aliases": [
      "chicken"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐧"
  , "description": "penguin"
  , "category": "Nature"
  , "aliases": [
      "penguin"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐦"
  , "description": "bird"
  , "category": "Nature"
  , "aliases": [
      "bird"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐤"
  , "description": "baby chick"
  , "category": "Nature"
  , "aliases": [
      "baby_chick"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐣"
  , "description": "hatching chick"
  , "category": "Nature"
  , "aliases": [
      "hatching_chick"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐥"
  , "description": "front-facing baby chick"
  , "category": "Nature"
  , "aliases": [
      "hatched_chick"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐺"
  , "description": "wolf face"
  , "category": "Nature"
  , "aliases": [
      "wolf"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐗"
  , "description": "boar"
  , "category": "Nature"
  , "aliases": [
      "boar"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐴"
  , "description": "horse face"
  , "category": "Nature"
  , "aliases": [
      "horse"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🦄"
  , "description": "unicorn face"
  , "category": "Nature"
  , "aliases": [
      "unicorn"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🐝"
  , "description": "honeybee"
  , "category": "Nature"
  , "aliases": [
      "bee"
    , "honeybee"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐛"
  , "description": "bug"
  , "category": "Nature"
  , "aliases": [
      "bug"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐌"
  , "description": "snail"
  , "category": "Nature"
  , "aliases": [
      "snail"
    ]
  , "tags": [
      "slow"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐞"
  , "description": "lady beetle"
  , "category": "Nature"
  , "aliases": [
      "beetle"
    ]
  , "tags": [
      "bug"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐜"
  , "description": "ant"
  , "category": "Nature"
  , "aliases": [
      "ant"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕷"
  , "description": "spider"
  , "category": "Nature"
  , "aliases": [
      "spider"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🦂"
  , "description": "scorpion"
  , "category": "Nature"
  , "aliases": [
      "scorpion"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🦀"
  , "description": "crab"
  , "category": "Nature"
  , "aliases": [
      "crab"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🐍"
  , "description": "snake"
  , "category": "Nature"
  , "aliases": [
      "snake"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐢"
  , "description": "turtle"
  , "category": "Nature"
  , "aliases": [
      "turtle"
    ]
  , "tags": [
      "slow"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐠"
  , "description": "tropical fish"
  , "category": "Nature"
  , "aliases": [
      "tropical_fish"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐟"
  , "description": "fish"
  , "category": "Nature"
  , "aliases": [
      "fish"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐡"
  , "description": "blowfish"
  , "category": "Nature"
  , "aliases": [
      "blowfish"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐬"
  , "description": "dolphin"
  , "category": "Nature"
  , "aliases": [
      "dolphin"
    , "flipper"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐳"
  , "description": "spouting whale"
  , "category": "Nature"
  , "aliases": [
      "whale"
    ]
  , "tags": [
      "sea"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐋"
  , "description": "whale"
  , "category": "Nature"
  , "aliases": [
      "whale2"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐊"
  , "description": "crocodile"
  , "category": "Nature"
  , "aliases": [
      "crocodile"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐆"
  , "description": "leopard"
  , "category": "Nature"
  , "aliases": [
      "leopard"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐅"
  , "description": "tiger"
  , "category": "Nature"
  , "aliases": [
      "tiger2"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐃"
  , "description": "water buffalo"
  , "category": "Nature"
  , "aliases": [
      "water_buffalo"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐂"
  , "description": "ox"
  , "category": "Nature"
  , "aliases": [
      "ox"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐄"
  , "description": "cow"
  , "category": "Nature"
  , "aliases": [
      "cow2"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐪"
  , "description": "camel"
  , "category": "Nature"
  , "aliases": [
      "dromedary_camel"
    ]
  , "tags": [
      "desert"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐫"
  , "description": "two-hump camel"
  , "category": "Nature"
  , "aliases": [
      "camel"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐘"
  , "description": "elephant"
  , "category": "Nature"
  , "aliases": [
      "elephant"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐐"
  , "description": "goat"
  , "category": "Nature"
  , "aliases": [
      "goat"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐏"
  , "description": "ram"
  , "category": "Nature"
  , "aliases": [
      "ram"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐑"
  , "description": "sheep"
  , "category": "Nature"
  , "aliases": [
      "sheep"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐎"
  , "description": "horse"
  , "category": "Nature"
  , "aliases": [
      "racehorse"
    ]
  , "tags": [
      "speed"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐖"
  , "description": "pig"
  , "category": "Nature"
  , "aliases": [
      "pig2"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐀"
  , "description": "rat"
  , "category": "Nature"
  , "aliases": [
      "rat"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐁"
  , "description": "mouse"
  , "category": "Nature"
  , "aliases": [
      "mouse2"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐓"
  , "description": "rooster"
  , "category": "Nature"
  , "aliases": [
      "rooster"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🦃"
  , "description": "turkey"
  , "category": "Nature"
  , "aliases": [
      "turkey"
    ]
  , "tags": [
      "thanksgiving"
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🕊"
  , "description": "dove"
  , "category": "Nature"
  , "aliases": [
      "dove"
    ]
  , "tags": [
      "peace"
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🐕"
  , "description": "dog"
  , "category": "Nature"
  , "aliases": [
      "dog2"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐩"
  , "description": "poodle"
  , "category": "Nature"
  , "aliases": [
      "poodle"
    ]
  , "tags": [
      "dog"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐈"
  , "description": "cat"
  , "category": "Nature"
  , "aliases": [
      "cat2"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐇"
  , "description": "rabbit"
  , "category": "Nature"
  , "aliases": [
      "rabbit2"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐿"
  , "description": "chipmunk"
  , "category": "Nature"
  , "aliases": [
      "chipmunk"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🐾"
  , "description": "paw prints"
  , "category": "Nature"
  , "aliases": [
      "feet"
    , "paw_prints"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐉"
  , "description": "dragon"
  , "category": "Nature"
  , "aliases": [
      "dragon"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐲"
  , "description": "dragon face"
  , "category": "Nature"
  , "aliases": [
      "dragon_face"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌵"
  , "description": "cactus"
  , "category": "Nature"
  , "aliases": [
      "cactus"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎄"
  , "description": "Christmas tree"
  , "category": "Nature"
  , "aliases": [
      "christmas_tree"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌲"
  , "description": "evergreen tree"
  , "category": "Nature"
  , "aliases": [
      "evergreen_tree"
    ]
  , "tags": [
      "wood"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌳"
  , "description": "deciduous tree"
  , "category": "Nature"
  , "aliases": [
      "deciduous_tree"
    ]
  , "tags": [
      "wood"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌴"
  , "description": "palm tree"
  , "category": "Nature"
  , "aliases": [
      "palm_tree"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌱"
  , "description": "seedling"
  , "category": "Nature"
  , "aliases": [
      "seedling"
    ]
  , "tags": [
      "plant"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌿"
  , "description": "herb"
  , "category": "Nature"
  , "aliases": [
      "herb"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "☘"
  , "description": "shamrock"
  , "category": "Nature"
  , "aliases": [
      "shamrock"
    ]
  , "tags": [
    ]
  , "unicode_version": "4.1"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🍀"
  , "description": "four leaf clover"
  , "category": "Nature"
  , "aliases": [
      "four_leaf_clover"
    ]
  , "tags": [
      "luck"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎍"
  , "description": "pine decoration"
  , "category": "Nature"
  , "aliases": [
      "bamboo"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎋"
  , "description": "tanabata tree"
  , "category": "Nature"
  , "aliases": [
      "tanabata_tree"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍃"
  , "description": "leaf fluttering in wind"
  , "category": "Nature"
  , "aliases": [
      "leaves"
    ]
  , "tags": [
      "leaf"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍂"
  , "description": "fallen leaf"
  , "category": "Nature"
  , "aliases": [
      "fallen_leaf"
    ]
  , "tags": [
      "autumn"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍁"
  , "description": "maple leaf"
  , "category": "Nature"
  , "aliases": [
      "maple_leaf"
    ]
  , "tags": [
      "canada"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌾"
  , "description": "sheaf of rice"
  , "category": "Nature"
  , "aliases": [
      "ear_of_rice"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌺"
  , "description": "hibiscus"
  , "category": "Nature"
  , "aliases": [
      "hibiscus"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌻"
  , "description": "sunflower"
  , "category": "Nature"
  , "aliases": [
      "sunflower"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌹"
  , "description": "rose"
  , "category": "Nature"
  , "aliases": [
      "rose"
    ]
  , "tags": [
      "flower"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌷"
  , "description": "tulip"
  , "category": "Nature"
  , "aliases": [
      "tulip"
    ]
  , "tags": [
      "flower"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌼"
  , "description": "blossom"
  , "category": "Nature"
  , "aliases": [
      "blossom"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌸"
  , "description": "cherry blossom"
  , "category": "Nature"
  , "aliases": [
      "cherry_blossom"
    ]
  , "tags": [
      "flower"
    , "spring"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💐"
  , "description": "bouquet"
  , "category": "Nature"
  , "aliases": [
      "bouquet"
    ]
  , "tags": [
      "flowers"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍄"
  , "description": "mushroom"
  , "category": "Nature"
  , "aliases": [
      "mushroom"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌰"
  , "description": "chestnut"
  , "category": "Nature"
  , "aliases": [
      "chestnut"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎃"
  , "description": "jack-o-lantern"
  , "category": "Nature"
  , "aliases": [
      "jack_o_lantern"
    ]
  , "tags": [
      "halloween"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🐚"
  , "description": "spiral shell"
  , "category": "Nature"
  , "aliases": [
      "shell"
    ]
  , "tags": [
      "sea"
    , "beach"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕸"
  , "description": "spider web"
  , "category": "Nature"
  , "aliases": [
      "spider_web"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🌎"
  , "description": "globe showing Americas"
  , "category": "Nature"
  , "aliases": [
      "earth_americas"
    ]
  , "tags": [
      "globe"
    , "world"
    , "international"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌍"
  , "description": "globe showing Europe-Africa"
  , "category": "Nature"
  , "aliases": [
      "earth_africa"
    ]
  , "tags": [
      "globe"
    , "world"
    , "international"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌏"
  , "description": "globe showing Asia-Australia"
  , "category": "Nature"
  , "aliases": [
      "earth_asia"
    ]
  , "tags": [
      "globe"
    , "world"
    , "international"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌕"
  , "description": "full moon"
  , "category": "Nature"
  , "aliases": [
      "full_moon"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌖"
  , "description": "waning gibbous moon"
  , "category": "Nature"
  , "aliases": [
      "waning_gibbous_moon"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌗"
  , "description": "last quarter moon"
  , "category": "Nature"
  , "aliases": [
      "last_quarter_moon"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌘"
  , "description": "waning crescent moon"
  , "category": "Nature"
  , "aliases": [
      "waning_crescent_moon"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌑"
  , "description": "new moon"
  , "category": "Nature"
  , "aliases": [
      "new_moon"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌒"
  , "description": "waxing crescent moon"
  , "category": "Nature"
  , "aliases": [
      "waxing_crescent_moon"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌓"
  , "description": "first quarter moon"
  , "category": "Nature"
  , "aliases": [
      "first_quarter_moon"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌔"
  , "description": "waxing gibbous moon"
  , "category": "Nature"
  , "aliases": [
      "moon"
    , "waxing_gibbous_moon"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌚"
  , "description": "new moon face"
  , "category": "Nature"
  , "aliases": [
      "new_moon_with_face"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌝"
  , "description": "full moon with face"
  , "category": "Nature"
  , "aliases": [
      "full_moon_with_face"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌛"
  , "description": "first quarter moon with face"
  , "category": "Nature"
  , "aliases": [
      "first_quarter_moon_with_face"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌜"
  , "description": "last quarter moon with face"
  , "category": "Nature"
  , "aliases": [
      "last_quarter_moon_with_face"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌞"
  , "description": "sun with face"
  , "category": "Nature"
  , "aliases": [
      "sun_with_face"
    ]
  , "tags": [
      "summer"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌙"
  , "description": "crescent moon"
  , "category": "Nature"
  , "aliases": [
      "crescent_moon"
    ]
  , "tags": [
      "night"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⭐️"
  , "description": "white medium star"
  , "category": "Nature"
  , "aliases": [
      "star"
    ]
  , "tags": [
    ]
  , "unicode_version": "5.1"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌟"
  , "description": "glowing star"
  , "category": "Nature"
  , "aliases": [
      "star2"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💫"
  , "description": "dizzy"
  , "category": "Nature"
  , "aliases": [
      "dizzy"
    ]
  , "tags": [
      "star"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "✨"
  , "description": "sparkles"
  , "category": "Nature"
  , "aliases": [
      "sparkles"
    ]
  , "tags": [
      "shiny"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "☄️"
  , "description": "comet"
  , "category": "Nature"
  , "aliases": [
      "comet"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "9.1"
  }
, {
    "emoji": "☀️"
  , "description": "sun"
  , "category": "Nature"
  , "aliases": [
      "sunny"
    ]
  , "tags": [
      "weather"
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌤"
  , "description": "sun behind small cloud"
  , "category": "Nature"
  , "aliases": [
      "sun_behind_small_cloud"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⛅️"
  , "description": "sun behind cloud"
  , "category": "Nature"
  , "aliases": [
      "partly_sunny"
    ]
  , "tags": [
      "weather"
    , "cloud"
    ]
  , "unicode_version": "5.2"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌥"
  , "description": "sun behind large cloud"
  , "category": "Nature"
  , "aliases": [
      "sun_behind_large_cloud"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🌦"
  , "description": "sun behind rain cloud"
  , "category": "Nature"
  , "aliases": [
      "sun_behind_rain_cloud"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "☁️"
  , "description": "cloud"
  , "category": "Nature"
  , "aliases": [
      "cloud"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌧"
  , "description": "cloud with rain"
  , "category": "Nature"
  , "aliases": [
      "cloud_with_rain"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⛈"
  , "description": "cloud with lightning and rain"
  , "category": "Nature"
  , "aliases": [
      "cloud_with_lightning_and_rain"
    ]
  , "tags": [
    ]
  , "unicode_version": "5.2"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🌩"
  , "description": "cloud with lightning"
  , "category": "Nature"
  , "aliases": [
      "cloud_with_lightning"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⚡️"
  , "description": "high voltage"
  , "category": "Nature"
  , "aliases": [
      "zap"
    ]
  , "tags": [
      "lightning"
    , "thunder"
    ]
  , "unicode_version": "4.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔥"
  , "description": "fire"
  , "category": "Nature"
  , "aliases": [
      "fire"
    ]
  , "tags": [
      "burn"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💥"
  , "description": "collision"
  , "category": "Nature"
  , "aliases": [
      "boom"
    , "collision"
    ]
  , "tags": [
      "explode"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "❄️"
  , "description": "snowflake"
  , "category": "Nature"
  , "aliases": [
      "snowflake"
    ]
  , "tags": [
      "winter"
    , "cold"
    , "weather"
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌨"
  , "description": "cloud with snow"
  , "category": "Nature"
  , "aliases": [
      "cloud_with_snow"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "☃️"
  , "description": "snowman"
  , "category": "Nature"
  , "aliases": [
      "snowman_with_snow"
    ]
  , "tags": [
      "winter"
    , "christmas"
    ]
  , "unicode_version": ""
  , "ios_version": "9.1"
  }
, {
    "emoji": "⛄️"
  , "description": "snowman without snow"
  , "category": "Nature"
  , "aliases": [
      "snowman"
    ]
  , "tags": [
      "winter"
    ]
  , "unicode_version": "5.2"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌬"
  , "description": "wind face"
  , "category": "Nature"
  , "aliases": [
      "wind_face"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "💨"
  , "description": "dashing away"
  , "category": "Nature"
  , "aliases": [
      "dash"
    ]
  , "tags": [
      "wind"
    , "blow"
    , "fast"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌪"
  , "description": "tornado"
  , "category": "Nature"
  , "aliases": [
      "tornado"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🌫"
  , "description": "fog"
  , "category": "Nature"
  , "aliases": [
      "fog"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "☂️"
  , "description": "umbrella"
  , "category": "Nature"
  , "aliases": [
      "open_umbrella"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "9.1"
  }
, {
    "emoji": "☔️"
  , "description": "umbrella with rain drops"
  , "category": "Nature"
  , "aliases": [
      "umbrella"
    ]
  , "tags": [
      "rain"
    , "weather"
    ]
  , "unicode_version": "4.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💧"
  , "description": "droplet"
  , "category": "Nature"
  , "aliases": [
      "droplet"
    ]
  , "tags": [
      "water"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💦"
  , "description": "sweat droplets"
  , "category": "Nature"
  , "aliases": [
      "sweat_drops"
    ]
  , "tags": [
      "water"
    , "workout"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌊"
  , "description": "water wave"
  , "category": "Nature"
  , "aliases": [
      "ocean"
    ]
  , "tags": [
      "sea"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍏"
  , "description": "green apple"
  , "category": "Foods"
  , "aliases": [
      "green_apple"
    ]
  , "tags": [
      "fruit"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍎"
  , "description": "red apple"
  , "category": "Foods"
  , "aliases": [
      "apple"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍐"
  , "description": "pear"
  , "category": "Foods"
  , "aliases": [
      "pear"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍊"
  , "description": "tangerine"
  , "category": "Foods"
  , "aliases": [
      "tangerine"
    , "orange"
    , "mandarin"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍋"
  , "description": "lemon"
  , "category": "Foods"
  , "aliases": [
      "lemon"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍌"
  , "description": "banana"
  , "category": "Foods"
  , "aliases": [
      "banana"
    ]
  , "tags": [
      "fruit"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍉"
  , "description": "watermelon"
  , "category": "Foods"
  , "aliases": [
      "watermelon"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍇"
  , "description": "grapes"
  , "category": "Foods"
  , "aliases": [
      "grapes"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍓"
  , "description": "strawberry"
  , "category": "Foods"
  , "aliases": [
      "strawberry"
    ]
  , "tags": [
      "fruit"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍈"
  , "description": "melon"
  , "category": "Foods"
  , "aliases": [
      "melon"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍒"
  , "description": "cherries"
  , "category": "Foods"
  , "aliases": [
      "cherries"
    ]
  , "tags": [
      "fruit"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍑"
  , "description": "peach"
  , "category": "Foods"
  , "aliases": [
      "peach"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍍"
  , "description": "pineapple"
  , "category": "Foods"
  , "aliases": [
      "pineapple"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍅"
  , "description": "tomato"
  , "category": "Foods"
  , "aliases": [
      "tomato"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍆"
  , "description": "eggplant"
  , "category": "Foods"
  , "aliases": [
      "eggplant"
    ]
  , "tags": [
      "aubergine"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌶"
  , "description": "hot pepper"
  , "category": "Foods"
  , "aliases": [
      "hot_pepper"
    ]
  , "tags": [
      "spicy"
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🌽"
  , "description": "ear of corn"
  , "category": "Foods"
  , "aliases": [
      "corn"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍠"
  , "description": "roasted sweet potato"
  , "category": "Foods"
  , "aliases": [
      "sweet_potato"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍯"
  , "description": "honey pot"
  , "category": "Foods"
  , "aliases": [
      "honey_pot"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍞"
  , "description": "bread"
  , "category": "Foods"
  , "aliases": [
      "bread"
    ]
  , "tags": [
      "toast"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🧀"
  , "description": "cheese wedge"
  , "category": "Foods"
  , "aliases": [
      "cheese"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🍗"
  , "description": "poultry leg"
  , "category": "Foods"
  , "aliases": [
      "poultry_leg"
    ]
  , "tags": [
      "meat"
    , "chicken"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍖"
  , "description": "meat on bone"
  , "category": "Foods"
  , "aliases": [
      "meat_on_bone"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍤"
  , "description": "fried shrimp"
  , "category": "Foods"
  , "aliases": [
      "fried_shrimp"
    ]
  , "tags": [
      "tempura"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍳"
  , "description": "cooking"
  , "category": "Foods"
  , "aliases": [
      "egg"
    ]
  , "tags": [
      "breakfast"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍔"
  , "description": "hamburger"
  , "category": "Foods"
  , "aliases": [
      "hamburger"
    ]
  , "tags": [
      "burger"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍟"
  , "description": "french fries"
  , "category": "Foods"
  , "aliases": [
      "fries"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌭"
  , "description": "hot dog"
  , "category": "Foods"
  , "aliases": [
      "hotdog"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🍕"
  , "description": "pizza"
  , "category": "Foods"
  , "aliases": [
      "pizza"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍝"
  , "description": "spaghetti"
  , "category": "Foods"
  , "aliases": [
      "spaghetti"
    ]
  , "tags": [
      "pasta"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌮"
  , "description": "taco"
  , "category": "Foods"
  , "aliases": [
      "taco"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🌯"
  , "description": "burrito"
  , "category": "Foods"
  , "aliases": [
      "burrito"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🍜"
  , "description": "steaming bowl"
  , "category": "Foods"
  , "aliases": [
      "ramen"
    ]
  , "tags": [
      "noodle"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍲"
  , "description": "pot of food"
  , "category": "Foods"
  , "aliases": [
      "stew"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍥"
  , "description": "fish cake with swirl"
  , "category": "Foods"
  , "aliases": [
      "fish_cake"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍣"
  , "description": "sushi"
  , "category": "Foods"
  , "aliases": [
      "sushi"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍱"
  , "description": "bento box"
  , "category": "Foods"
  , "aliases": [
      "bento"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍛"
  , "description": "curry rice"
  , "category": "Foods"
  , "aliases": [
      "curry"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍙"
  , "description": "rice ball"
  , "category": "Foods"
  , "aliases": [
      "rice_ball"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍚"
  , "description": "cooked rice"
  , "category": "Foods"
  , "aliases": [
      "rice"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍘"
  , "description": "rice cracker"
  , "category": "Foods"
  , "aliases": [
      "rice_cracker"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍢"
  , "description": "oden"
  , "category": "Foods"
  , "aliases": [
      "oden"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍡"
  , "description": "dango"
  , "category": "Foods"
  , "aliases": [
      "dango"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍧"
  , "description": "shaved ice"
  , "category": "Foods"
  , "aliases": [
      "shaved_ice"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍨"
  , "description": "ice cream"
  , "category": "Foods"
  , "aliases": [
      "ice_cream"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍦"
  , "description": "soft ice cream"
  , "category": "Foods"
  , "aliases": [
      "icecream"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍰"
  , "description": "shortcake"
  , "category": "Foods"
  , "aliases": [
      "cake"
    ]
  , "tags": [
      "dessert"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎂"
  , "description": "birthday cake"
  , "category": "Foods"
  , "aliases": [
      "birthday"
    ]
  , "tags": [
      "party"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍮"
  , "description": "custard"
  , "category": "Foods"
  , "aliases": [
      "custard"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍬"
  , "description": "candy"
  , "category": "Foods"
  , "aliases": [
      "candy"
    ]
  , "tags": [
      "sweet"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍭"
  , "description": "lollipop"
  , "category": "Foods"
  , "aliases": [
      "lollipop"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍫"
  , "description": "chocolate bar"
  , "category": "Foods"
  , "aliases": [
      "chocolate_bar"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍿"
  , "description": "popcorn"
  , "category": "Foods"
  , "aliases": [
      "popcorn"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🍩"
  , "description": "doughnut"
  , "category": "Foods"
  , "aliases": [
      "doughnut"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍪"
  , "description": "cookie"
  , "category": "Foods"
  , "aliases": [
      "cookie"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍺"
  , "description": "beer mug"
  , "category": "Foods"
  , "aliases": [
      "beer"
    ]
  , "tags": [
      "drink"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍻"
  , "description": "clinking beer mugs"
  , "category": "Foods"
  , "aliases": [
      "beers"
    ]
  , "tags": [
      "drinks"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍷"
  , "description": "wine glass"
  , "category": "Foods"
  , "aliases": [
      "wine_glass"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍸"
  , "description": "cocktail glass"
  , "category": "Foods"
  , "aliases": [
      "cocktail"
    ]
  , "tags": [
      "drink"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍹"
  , "description": "tropical drink"
  , "category": "Foods"
  , "aliases": [
      "tropical_drink"
    ]
  , "tags": [
      "summer"
    , "vacation"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍾"
  , "description": "bottle with popping cork"
  , "category": "Foods"
  , "aliases": [
      "champagne"
    ]
  , "tags": [
      "bottle"
    , "bubbly"
    , "celebration"
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🍶"
  , "description": "sake"
  , "category": "Foods"
  , "aliases": [
      "sake"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍵"
  , "description": "teacup without handle"
  , "category": "Foods"
  , "aliases": [
      "tea"
    ]
  , "tags": [
      "green"
    , "breakfast"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "☕️"
  , "description": "hot beverage"
  , "category": "Foods"
  , "aliases": [
      "coffee"
    ]
  , "tags": [
      "cafe"
    , "espresso"
    ]
  , "unicode_version": "4.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍼"
  , "description": "baby bottle"
  , "category": "Foods"
  , "aliases": [
      "baby_bottle"
    ]
  , "tags": [
      "milk"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍴"
  , "description": "fork and knife"
  , "category": "Foods"
  , "aliases": [
      "fork_and_knife"
    ]
  , "tags": [
      "cutlery"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🍽"
  , "description": "fork and knife with plate"
  , "category": "Foods"
  , "aliases": [
      "plate_with_cutlery"
    ]
  , "tags": [
      "dining"
    , "dinner"
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⚽️"
  , "description": "soccer ball"
  , "category": "Activity"
  , "aliases": [
      "soccer"
    ]
  , "tags": [
      "sports"
    ]
  , "unicode_version": "5.2"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏀"
  , "description": "basketball"
  , "category": "Activity"
  , "aliases": [
      "basketball"
    ]
  , "tags": [
      "sports"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏈"
  , "description": "american football"
  , "category": "Activity"
  , "aliases": [
      "football"
    ]
  , "tags": [
      "sports"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⚾️"
  , "description": "baseball"
  , "category": "Activity"
  , "aliases": [
      "baseball"
    ]
  , "tags": [
      "sports"
    ]
  , "unicode_version": "5.2"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎾"
  , "description": "tennis"
  , "category": "Activity"
  , "aliases": [
      "tennis"
    ]
  , "tags": [
      "sports"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏐"
  , "description": "volleyball"
  , "category": "Activity"
  , "aliases": [
      "volleyball"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🏉"
  , "description": "rugby football"
  , "category": "Activity"
  , "aliases": [
      "rugby_football"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎱"
  , "description": "pool 8 ball"
  , "category": "Activity"
  , "aliases": [
      "8ball"
    ]
  , "tags": [
      "pool"
    , "billiards"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏓"
  , "description": "ping pong"
  , "category": "Activity"
  , "aliases": [
      "ping_pong"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🏸"
  , "description": "badminton"
  , "category": "Activity"
  , "aliases": [
      "badminton"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🏒"
  , "description": "ice hockey"
  , "category": "Activity"
  , "aliases": [
      "ice_hockey"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🏑"
  , "description": "field hockey"
  , "category": "Activity"
  , "aliases": [
      "field_hockey"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🏏"
  , "description": "cricket"
  , "category": "Activity"
  , "aliases": [
      "cricket"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🏹"
  , "description": "bow and arrow"
  , "category": "Activity"
  , "aliases": [
      "bow_and_arrow"
    ]
  , "tags": [
      "archery"
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⛳️"
  , "description": "flag in hole"
  , "category": "Activity"
  , "aliases": [
      "golf"
    ]
  , "tags": [
    ]
  , "unicode_version": "5.2"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎣"
  , "description": "fishing pole"
  , "category": "Activity"
  , "aliases": [
      "fishing_pole_and_fish"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⛸"
  , "description": "ice skate"
  , "category": "Activity"
  , "aliases": [
      "ice_skate"
    ]
  , "tags": [
      "skating"
    ]
  , "unicode_version": "5.2"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🎿"
  , "description": "skis"
  , "category": "Activity"
  , "aliases": [
      "ski"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⛷"
  , "description": "skier"
  , "category": "Activity"
  , "aliases": [
      "skier"
    ]
  , "tags": [
    ]
  , "unicode_version": "5.2"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🏂"
  , "description": "snowboarder"
  , "category": "Activity"
  , "aliases": [
      "snowboarder"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏋️‍♀️"
  , "description": "woman lifting weights"
  , "category": "Activity"
  , "aliases": [
      "weight_lifting_woman"
    ]
  , "tags": [
      "gym"
    , "workout"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "🏋️"
  , "description": "person lifting weights"
  , "category": "Activity"
  , "aliases": [
      "weight_lifting_man"
    ]
  , "tags": [
      "gym"
    , "workout"
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⛹️‍♀️"
  , "description": "woman bouncing ball"
  , "category": "Activity"
  , "aliases": [
      "basketball_woman"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "⛹️"
  , "description": "person bouncing ball"
  , "category": "Activity"
  , "aliases": [
      "basketball_man"
    ]
  , "tags": [
    ]
  , "unicode_version": "5.2"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🏌️‍♀️"
  , "description": "woman golfing"
  , "category": "Activity"
  , "aliases": [
      "golfing_woman"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "10.0"
  }
, {
    "emoji": "🏌️"
  , "description": "person golfing"
  , "category": "Activity"
  , "aliases": [
      "golfing_man"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🏄‍♀️"
  , "description": "woman surfing"
  , "category": "Activity"
  , "aliases": [
      "surfing_woman"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "🏄"
  , "description": "person surfing"
  , "category": "Activity"
  , "aliases": [
      "surfing_man"
    , "surfer"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏊‍♀️"
  , "description": "woman swimming"
  , "category": "Activity"
  , "aliases": [
      "swimming_woman"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "🏊"
  , "description": "person swimming"
  , "category": "Activity"
  , "aliases": [
      "swimming_man"
    , "swimmer"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚣‍♀️"
  , "description": "woman rowing boat"
  , "category": "Activity"
  , "aliases": [
      "rowing_woman"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "🚣"
  , "description": "person rowing boat"
  , "category": "Activity"
  , "aliases": [
      "rowing_man"
    , "rowboat"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏇"
  , "description": "horse racing"
  , "category": "Activity"
  , "aliases": [
      "horse_racing"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚴‍♀️"
  , "description": "woman biking"
  , "category": "Activity"
  , "aliases": [
      "biking_woman"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "🚴"
  , "description": "person biking"
  , "category": "Activity"
  , "aliases": [
      "biking_man"
    , "bicyclist"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚵‍♀️"
  , "description": "woman mountain biking"
  , "category": "Activity"
  , "aliases": [
      "mountain_biking_woman"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "🚵"
  , "description": "person mountain biking"
  , "category": "Activity"
  , "aliases": [
      "mountain_biking_man"
    , "mountain_bicyclist"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🛀"
  , "description": "person taking bath"
  , "category": "Activity"
  , "aliases": [
      "bath"
    ]
  , "tags": [
      "shower"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕴"
  , "description": "man in business suit levitating"
  , "category": "Activity"
  , "aliases": [
      "business_suit_levitating"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🎗"
  , "description": "reminder ribbon"
  , "category": "Activity"
  , "aliases": [
      "reminder_ribbon"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🎽"
  , "description": "running shirt"
  , "category": "Activity"
  , "aliases": [
      "running_shirt_with_sash"
    ]
  , "tags": [
      "marathon"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏅"
  , "description": "sports medal"
  , "category": "Activity"
  , "aliases": [
      "medal_sports"
    ]
  , "tags": [
      "gold"
    , "winner"
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🎖"
  , "description": "military medal"
  , "category": "Activity"
  , "aliases": [
      "medal_military"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🏆"
  , "description": "trophy"
  , "category": "Activity"
  , "aliases": [
      "trophy"
    ]
  , "tags": [
      "award"
    , "contest"
    , "winner"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏵"
  , "description": "rosette"
  , "category": "Activity"
  , "aliases": [
      "rosette"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🎯"
  , "description": "direct hit"
  , "category": "Activity"
  , "aliases": [
      "dart"
    ]
  , "tags": [
      "target"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎫"
  , "description": "ticket"
  , "category": "Activity"
  , "aliases": [
      "ticket"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎟"
  , "description": "admission tickets"
  , "category": "Activity"
  , "aliases": [
      "tickets"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🎭"
  , "description": "performing arts"
  , "category": "Activity"
  , "aliases": [
      "performing_arts"
    ]
  , "tags": [
      "theater"
    , "drama"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎨"
  , "description": "artist palette"
  , "category": "Activity"
  , "aliases": [
      "art"
    ]
  , "tags": [
      "design"
    , "paint"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎪"
  , "description": "circus tent"
  , "category": "Activity"
  , "aliases": [
      "circus_tent"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎬"
  , "description": "clapper board"
  , "category": "Activity"
  , "aliases": [
      "clapper"
    ]
  , "tags": [
      "film"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎤"
  , "description": "microphone"
  , "category": "Activity"
  , "aliases": [
      "microphone"
    ]
  , "tags": [
      "sing"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎧"
  , "description": "headphone"
  , "category": "Activity"
  , "aliases": [
      "headphones"
    ]
  , "tags": [
      "music"
    , "earphones"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎼"
  , "description": "musical score"
  , "category": "Activity"
  , "aliases": [
      "musical_score"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎹"
  , "description": "musical keyboard"
  , "category": "Activity"
  , "aliases": [
      "musical_keyboard"
    ]
  , "tags": [
      "piano"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎷"
  , "description": "saxophone"
  , "category": "Activity"
  , "aliases": [
      "saxophone"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎺"
  , "description": "trumpet"
  , "category": "Activity"
  , "aliases": [
      "trumpet"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎸"
  , "description": "guitar"
  , "category": "Activity"
  , "aliases": [
      "guitar"
    ]
  , "tags": [
      "rock"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎻"
  , "description": "violin"
  , "category": "Activity"
  , "aliases": [
      "violin"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎮"
  , "description": "video game"
  , "category": "Activity"
  , "aliases": [
      "video_game"
    ]
  , "tags": [
      "play"
    , "controller"
    , "console"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎰"
  , "description": "slot machine"
  , "category": "Activity"
  , "aliases": [
      "slot_machine"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎲"
  , "description": "game die"
  , "category": "Activity"
  , "aliases": [
      "game_die"
    ]
  , "tags": [
      "dice"
    , "gambling"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎳"
  , "description": "bowling"
  , "category": "Activity"
  , "aliases": [
      "bowling"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚗"
  , "description": "automobile"
  , "category": "Places"
  , "aliases": [
      "car"
    , "red_car"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚕"
  , "description": "taxi"
  , "category": "Places"
  , "aliases": [
      "taxi"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚙"
  , "description": "sport utility vehicle"
  , "category": "Places"
  , "aliases": [
      "blue_car"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚌"
  , "description": "bus"
  , "category": "Places"
  , "aliases": [
      "bus"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚎"
  , "description": "trolleybus"
  , "category": "Places"
  , "aliases": [
      "trolleybus"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏎"
  , "description": "racing car"
  , "category": "Places"
  , "aliases": [
      "racing_car"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🚓"
  , "description": "police car"
  , "category": "Places"
  , "aliases": [
      "police_car"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚑"
  , "description": "ambulance"
  , "category": "Places"
  , "aliases": [
      "ambulance"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚒"
  , "description": "fire engine"
  , "category": "Places"
  , "aliases": [
      "fire_engine"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚐"
  , "description": "minibus"
  , "category": "Places"
  , "aliases": [
      "minibus"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚚"
  , "description": "delivery truck"
  , "category": "Places"
  , "aliases": [
      "truck"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚛"
  , "description": "articulated lorry"
  , "category": "Places"
  , "aliases": [
      "articulated_lorry"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚜"
  , "description": "tractor"
  , "category": "Places"
  , "aliases": [
      "tractor"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏍"
  , "description": "motorcycle"
  , "category": "Places"
  , "aliases": [
      "motorcycle"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🚲"
  , "description": "bicycle"
  , "category": "Places"
  , "aliases": [
      "bike"
    ]
  , "tags": [
      "bicycle"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚨"
  , "description": "police car light"
  , "category": "Places"
  , "aliases": [
      "rotating_light"
    ]
  , "tags": [
      "911"
    , "emergency"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚔"
  , "description": "oncoming police car"
  , "category": "Places"
  , "aliases": [
      "oncoming_police_car"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚍"
  , "description": "oncoming bus"
  , "category": "Places"
  , "aliases": [
      "oncoming_bus"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚘"
  , "description": "oncoming automobile"
  , "category": "Places"
  , "aliases": [
      "oncoming_automobile"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚖"
  , "description": "oncoming taxi"
  , "category": "Places"
  , "aliases": [
      "oncoming_taxi"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚡"
  , "description": "aerial tramway"
  , "category": "Places"
  , "aliases": [
      "aerial_tramway"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚠"
  , "description": "mountain cableway"
  , "category": "Places"
  , "aliases": [
      "mountain_cableway"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚟"
  , "description": "suspension railway"
  , "category": "Places"
  , "aliases": [
      "suspension_railway"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚃"
  , "description": "railway car"
  , "category": "Places"
  , "aliases": [
      "railway_car"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚋"
  , "description": "tram car"
  , "category": "Places"
  , "aliases": [
      "train"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚝"
  , "description": "monorail"
  , "category": "Places"
  , "aliases": [
      "monorail"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚄"
  , "description": "high-speed train"
  , "category": "Places"
  , "aliases": [
      "bullettrain_side"
    ]
  , "tags": [
      "train"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚅"
  , "description": "high-speed train with bullet nose"
  , "category": "Places"
  , "aliases": [
      "bullettrain_front"
    ]
  , "tags": [
      "train"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚈"
  , "description": "light rail"
  , "category": "Places"
  , "aliases": [
      "light_rail"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚞"
  , "description": "mountain railway"
  , "category": "Places"
  , "aliases": [
      "mountain_railway"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚂"
  , "description": "locomotive"
  , "category": "Places"
  , "aliases": [
      "steam_locomotive"
    ]
  , "tags": [
      "train"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚆"
  , "description": "train"
  , "category": "Places"
  , "aliases": [
      "train2"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚇"
  , "description": "metro"
  , "category": "Places"
  , "aliases": [
      "metro"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚊"
  , "description": "tram"
  , "category": "Places"
  , "aliases": [
      "tram"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚉"
  , "description": "station"
  , "category": "Places"
  , "aliases": [
      "station"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚁"
  , "description": "helicopter"
  , "category": "Places"
  , "aliases": [
      "helicopter"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🛩"
  , "description": "small airplane"
  , "category": "Places"
  , "aliases": [
      "small_airplane"
    ]
  , "tags": [
      "flight"
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "✈️"
  , "description": "airplane"
  , "category": "Places"
  , "aliases": [
      "airplane"
    ]
  , "tags": [
      "flight"
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "🛫"
  , "description": "airplane departure"
  , "category": "Places"
  , "aliases": [
      "flight_departure"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🛬"
  , "description": "airplane arrival"
  , "category": "Places"
  , "aliases": [
      "flight_arrival"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⛵️"
  , "description": "sailboat"
  , "category": "Places"
  , "aliases": [
      "boat"
    , "sailboat"
    ]
  , "tags": [
    ]
  , "unicode_version": "5.2"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🛥"
  , "description": "motor boat"
  , "category": "Places"
  , "aliases": [
      "motor_boat"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🚤"
  , "description": "speedboat"
  , "category": "Places"
  , "aliases": [
      "speedboat"
    ]
  , "tags": [
      "ship"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⛴"
  , "description": "ferry"
  , "category": "Places"
  , "aliases": [
      "ferry"
    ]
  , "tags": [
    ]
  , "unicode_version": "5.2"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🛳"
  , "description": "passenger ship"
  , "category": "Places"
  , "aliases": [
      "passenger_ship"
    ]
  , "tags": [
      "cruise"
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🚀"
  , "description": "rocket"
  , "category": "Places"
  , "aliases": [
      "rocket"
    ]
  , "tags": [
      "ship"
    , "launch"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🛰"
  , "description": "satellite"
  , "category": "Places"
  , "aliases": [
      "artificial_satellite"
    ]
  , "tags": [
      "orbit"
    , "space"
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "💺"
  , "description": "seat"
  , "category": "Places"
  , "aliases": [
      "seat"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⚓️"
  , "description": "anchor"
  , "category": "Places"
  , "aliases": [
      "anchor"
    ]
  , "tags": [
      "ship"
    ]
  , "unicode_version": "4.1"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚧"
  , "description": "construction"
  , "category": "Places"
  , "aliases": [
      "construction"
    ]
  , "tags": [
      "wip"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⛽️"
  , "description": "fuel pump"
  , "category": "Places"
  , "aliases": [
      "fuelpump"
    ]
  , "tags": [
    ]
  , "unicode_version": "5.2"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚏"
  , "description": "bus stop"
  , "category": "Places"
  , "aliases": [
      "busstop"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚦"
  , "description": "vertical traffic light"
  , "category": "Places"
  , "aliases": [
      "vertical_traffic_light"
    ]
  , "tags": [
      "semaphore"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚥"
  , "description": "horizontal traffic light"
  , "category": "Places"
  , "aliases": [
      "traffic_light"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🗺"
  , "description": "world map"
  , "category": "Places"
  , "aliases": [
      "world_map"
    ]
  , "tags": [
      "travel"
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🚢"
  , "description": "ship"
  , "category": "Places"
  , "aliases": [
      "ship"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎡"
  , "description": "ferris wheel"
  , "category": "Places"
  , "aliases": [
      "ferris_wheel"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎢"
  , "description": "roller coaster"
  , "category": "Places"
  , "aliases": [
      "roller_coaster"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎠"
  , "description": "carousel horse"
  , "category": "Places"
  , "aliases": [
      "carousel_horse"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏗"
  , "description": "building construction"
  , "category": "Places"
  , "aliases": [
      "building_construction"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🌁"
  , "description": "foggy"
  , "category": "Places"
  , "aliases": [
      "foggy"
    ]
  , "tags": [
      "karl"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🗼"
  , "description": "Tokyo tower"
  , "category": "Places"
  , "aliases": [
      "tokyo_tower"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏭"
  , "description": "factory"
  , "category": "Places"
  , "aliases": [
      "factory"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⛲️"
  , "description": "fountain"
  , "category": "Places"
  , "aliases": [
      "fountain"
    ]
  , "tags": [
    ]
  , "unicode_version": "5.2"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎑"
  , "description": "moon viewing ceremony"
  , "category": "Places"
  , "aliases": [
      "rice_scene"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⛰"
  , "description": "mountain"
  , "category": "Places"
  , "aliases": [
      "mountain"
    ]
  , "tags": [
    ]
  , "unicode_version": "5.2"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🏔"
  , "description": "snow-capped mountain"
  , "category": "Places"
  , "aliases": [
      "mountain_snow"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🗻"
  , "description": "mount fuji"
  , "category": "Places"
  , "aliases": [
      "mount_fuji"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌋"
  , "description": "volcano"
  , "category": "Places"
  , "aliases": [
      "volcano"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🗾"
  , "description": "map of Japan"
  , "category": "Places"
  , "aliases": [
      "japan"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏕"
  , "description": "camping"
  , "category": "Places"
  , "aliases": [
      "camping"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⛺️"
  , "description": "tent"
  , "category": "Places"
  , "aliases": [
      "tent"
    ]
  , "tags": [
      "camping"
    ]
  , "unicode_version": "5.2"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏞"
  , "description": "national park"
  , "category": "Places"
  , "aliases": [
      "national_park"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🛣"
  , "description": "motorway"
  , "category": "Places"
  , "aliases": [
      "motorway"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🛤"
  , "description": "railway track"
  , "category": "Places"
  , "aliases": [
      "railway_track"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🌅"
  , "description": "sunrise"
  , "category": "Places"
  , "aliases": [
      "sunrise"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌄"
  , "description": "sunrise over mountains"
  , "category": "Places"
  , "aliases": [
      "sunrise_over_mountains"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏜"
  , "description": "desert"
  , "category": "Places"
  , "aliases": [
      "desert"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🏖"
  , "description": "beach with umbrella"
  , "category": "Places"
  , "aliases": [
      "beach_umbrella"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🏝"
  , "description": "desert island"
  , "category": "Places"
  , "aliases": [
      "desert_island"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🌇"
  , "description": "sunset"
  , "category": "Places"
  , "aliases": [
      "city_sunrise"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌆"
  , "description": "cityscape at dusk"
  , "category": "Places"
  , "aliases": [
      "city_sunset"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏙"
  , "description": "cityscape"
  , "category": "Places"
  , "aliases": [
      "cityscape"
    ]
  , "tags": [
      "skyline"
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🌃"
  , "description": "night with stars"
  , "category": "Places"
  , "aliases": [
      "night_with_stars"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌉"
  , "description": "bridge at night"
  , "category": "Places"
  , "aliases": [
      "bridge_at_night"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌌"
  , "description": "milky way"
  , "category": "Places"
  , "aliases": [
      "milky_way"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌠"
  , "description": "shooting star"
  , "category": "Places"
  , "aliases": [
      "stars"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎇"
  , "description": "sparkler"
  , "category": "Places"
  , "aliases": [
      "sparkler"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎆"
  , "description": "fireworks"
  , "category": "Places"
  , "aliases": [
      "fireworks"
    ]
  , "tags": [
      "festival"
    , "celebration"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌈"
  , "description": "rainbow"
  , "category": "Places"
  , "aliases": [
      "rainbow"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏘"
  , "description": "house"
  , "category": "Places"
  , "aliases": [
      "houses"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🏰"
  , "description": "castle"
  , "category": "Places"
  , "aliases": [
      "european_castle"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏯"
  , "description": "Japanese castle"
  , "category": "Places"
  , "aliases": [
      "japanese_castle"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏟"
  , "description": "stadium"
  , "category": "Places"
  , "aliases": [
      "stadium"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🗽"
  , "description": "Statue of Liberty"
  , "category": "Places"
  , "aliases": [
      "statue_of_liberty"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏠"
  , "description": "house"
  , "category": "Places"
  , "aliases": [
      "house"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏡"
  , "description": "house with garden"
  , "category": "Places"
  , "aliases": [
      "house_with_garden"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏚"
  , "description": "derelict house"
  , "category": "Places"
  , "aliases": [
      "derelict_house"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🏢"
  , "description": "office building"
  , "category": "Places"
  , "aliases": [
      "office"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏬"
  , "description": "department store"
  , "category": "Places"
  , "aliases": [
      "department_store"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏣"
  , "description": "Japanese post office"
  , "category": "Places"
  , "aliases": [
      "post_office"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏤"
  , "description": "post office"
  , "category": "Places"
  , "aliases": [
      "european_post_office"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏥"
  , "description": "hospital"
  , "category": "Places"
  , "aliases": [
      "hospital"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏦"
  , "description": "bank"
  , "category": "Places"
  , "aliases": [
      "bank"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏨"
  , "description": "hotel"
  , "category": "Places"
  , "aliases": [
      "hotel"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏪"
  , "description": "convenience store"
  , "category": "Places"
  , "aliases": [
      "convenience_store"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏫"
  , "description": "school"
  , "category": "Places"
  , "aliases": [
      "school"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏩"
  , "description": "love hotel"
  , "category": "Places"
  , "aliases": [
      "love_hotel"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💒"
  , "description": "wedding"
  , "category": "Places"
  , "aliases": [
      "wedding"
    ]
  , "tags": [
      "marriage"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏛"
  , "description": "classical building"
  , "category": "Places"
  , "aliases": [
      "classical_building"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⛪️"
  , "description": "church"
  , "category": "Places"
  , "aliases": [
      "church"
    ]
  , "tags": [
    ]
  , "unicode_version": "5.2"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕌"
  , "description": "mosque"
  , "category": "Places"
  , "aliases": [
      "mosque"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🕍"
  , "description": "synagogue"
  , "category": "Places"
  , "aliases": [
      "synagogue"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🕋"
  , "description": "kaaba"
  , "category": "Places"
  , "aliases": [
      "kaaba"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⛩"
  , "description": "shinto shrine"
  , "category": "Places"
  , "aliases": [
      "shinto_shrine"
    ]
  , "tags": [
    ]
  , "unicode_version": "5.2"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⌚️"
  , "description": "watch"
  , "category": "Objects"
  , "aliases": [
      "watch"
    ]
  , "tags": [
      "time"
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "📱"
  , "description": "mobile phone"
  , "category": "Objects"
  , "aliases": [
      "iphone"
    ]
  , "tags": [
      "smartphone"
    , "mobile"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📲"
  , "description": "mobile phone with arrow"
  , "category": "Objects"
  , "aliases": [
      "calling"
    ]
  , "tags": [
      "call"
    , "incoming"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💻"
  , "description": "laptop computer"
  , "category": "Objects"
  , "aliases": [
      "computer"
    ]
  , "tags": [
      "desktop"
    , "screen"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⌨️"
  , "description": "keyboard"
  , "category": "Objects"
  , "aliases": [
      "keyboard"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "9.1"
  }
, {
    "emoji": "🖥"
  , "description": "desktop computer"
  , "category": "Objects"
  , "aliases": [
      "desktop_computer"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🖨"
  , "description": "printer"
  , "category": "Objects"
  , "aliases": [
      "printer"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🖱"
  , "description": "computer mouse"
  , "category": "Objects"
  , "aliases": [
      "computer_mouse"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🖲"
  , "description": "trackball"
  , "category": "Objects"
  , "aliases": [
      "trackball"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🕹"
  , "description": "joystick"
  , "category": "Objects"
  , "aliases": [
      "joystick"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🗜"
  , "description": "clamp"
  , "category": "Objects"
  , "aliases": [
      "clamp"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "💽"
  , "description": "computer disk"
  , "category": "Objects"
  , "aliases": [
      "minidisc"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💾"
  , "description": "floppy disk"
  , "category": "Objects"
  , "aliases": [
      "floppy_disk"
    ]
  , "tags": [
      "save"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💿"
  , "description": "optical disk"
  , "category": "Objects"
  , "aliases": [
      "cd"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📀"
  , "description": "dvd"
  , "category": "Objects"
  , "aliases": [
      "dvd"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📼"
  , "description": "videocassette"
  , "category": "Objects"
  , "aliases": [
      "vhs"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📷"
  , "description": "camera"
  , "category": "Objects"
  , "aliases": [
      "camera"
    ]
  , "tags": [
      "photo"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📸"
  , "description": "camera with flash"
  , "category": "Objects"
  , "aliases": [
      "camera_flash"
    ]
  , "tags": [
      "photo"
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "📹"
  , "description": "video camera"
  , "category": "Objects"
  , "aliases": [
      "video_camera"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎥"
  , "description": "movie camera"
  , "category": "Objects"
  , "aliases": [
      "movie_camera"
    ]
  , "tags": [
      "film"
    , "video"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📽"
  , "description": "film projector"
  , "category": "Objects"
  , "aliases": [
      "film_projector"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🎞"
  , "description": "film frames"
  , "category": "Objects"
  , "aliases": [
      "film_strip"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "📞"
  , "description": "telephone receiver"
  , "category": "Objects"
  , "aliases": [
      "telephone_receiver"
    ]
  , "tags": [
      "phone"
    , "call"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "☎️"
  , "description": "telephone"
  , "category": "Objects"
  , "aliases": [
      "phone"
    , "telephone"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "📟"
  , "description": "pager"
  , "category": "Objects"
  , "aliases": [
      "pager"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📠"
  , "description": "fax machine"
  , "category": "Objects"
  , "aliases": [
      "fax"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📺"
  , "description": "television"
  , "category": "Objects"
  , "aliases": [
      "tv"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📻"
  , "description": "radio"
  , "category": "Objects"
  , "aliases": [
      "radio"
    ]
  , "tags": [
      "podcast"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎙"
  , "description": "studio microphone"
  , "category": "Objects"
  , "aliases": [
      "studio_microphone"
    ]
  , "tags": [
      "podcast"
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🎚"
  , "description": "level slider"
  , "category": "Objects"
  , "aliases": [
      "level_slider"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🎛"
  , "description": "control knobs"
  , "category": "Objects"
  , "aliases": [
      "control_knobs"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⏱"
  , "description": "stopwatch"
  , "category": "Objects"
  , "aliases": [
      "stopwatch"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⏲"
  , "description": "timer clock"
  , "category": "Objects"
  , "aliases": [
      "timer_clock"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⏰"
  , "description": "alarm clock"
  , "category": "Objects"
  , "aliases": [
      "alarm_clock"
    ]
  , "tags": [
      "morning"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕰"
  , "description": "mantelpiece clock"
  , "category": "Objects"
  , "aliases": [
      "mantelpiece_clock"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⏳"
  , "description": "hourglass with flowing sand"
  , "category": "Objects"
  , "aliases": [
      "hourglass_flowing_sand"
    ]
  , "tags": [
      "time"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⌛️"
  , "description": "hourglass"
  , "category": "Objects"
  , "aliases": [
      "hourglass"
    ]
  , "tags": [
      "time"
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "📡"
  , "description": "satellite antenna"
  , "category": "Objects"
  , "aliases": [
      "satellite"
    ]
  , "tags": [
      "signal"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔋"
  , "description": "battery"
  , "category": "Objects"
  , "aliases": [
      "battery"
    ]
  , "tags": [
      "power"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔌"
  , "description": "electric plug"
  , "category": "Objects"
  , "aliases": [
      "electric_plug"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💡"
  , "description": "light bulb"
  , "category": "Objects"
  , "aliases": [
      "bulb"
    ]
  , "tags": [
      "idea"
    , "light"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔦"
  , "description": "flashlight"
  , "category": "Objects"
  , "aliases": [
      "flashlight"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕯"
  , "description": "candle"
  , "category": "Objects"
  , "aliases": [
      "candle"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🗑"
  , "description": "wastebasket"
  , "category": "Objects"
  , "aliases": [
      "wastebasket"
    ]
  , "tags": [
      "trash"
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🛢"
  , "description": "oil drum"
  , "category": "Objects"
  , "aliases": [
      "oil_drum"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "💸"
  , "description": "money with wings"
  , "category": "Objects"
  , "aliases": [
      "money_with_wings"
    ]
  , "tags": [
      "dollar"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💵"
  , "description": "dollar banknote"
  , "category": "Objects"
  , "aliases": [
      "dollar"
    ]
  , "tags": [
      "money"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💴"
  , "description": "yen banknote"
  , "category": "Objects"
  , "aliases": [
      "yen"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💶"
  , "description": "euro banknote"
  , "category": "Objects"
  , "aliases": [
      "euro"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💷"
  , "description": "pound banknote"
  , "category": "Objects"
  , "aliases": [
      "pound"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💰"
  , "description": "money bag"
  , "category": "Objects"
  , "aliases": [
      "moneybag"
    ]
  , "tags": [
      "dollar"
    , "cream"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💳"
  , "description": "credit card"
  , "category": "Objects"
  , "aliases": [
      "credit_card"
    ]
  , "tags": [
      "subscription"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💎"
  , "description": "gem stone"
  , "category": "Objects"
  , "aliases": [
      "gem"
    ]
  , "tags": [
      "diamond"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⚖"
  , "description": "balance scale"
  , "category": "Objects"
  , "aliases": [
      "balance_scale"
    ]
  , "tags": [
    ]
  , "unicode_version": "4.1"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🔧"
  , "description": "wrench"
  , "category": "Objects"
  , "aliases": [
      "wrench"
    ]
  , "tags": [
      "tool"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔨"
  , "description": "hammer"
  , "category": "Objects"
  , "aliases": [
      "hammer"
    ]
  , "tags": [
      "tool"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⚒"
  , "description": "hammer and pick"
  , "category": "Objects"
  , "aliases": [
      "hammer_and_pick"
    ]
  , "tags": [
    ]
  , "unicode_version": "4.1"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🛠"
  , "description": "hammer and wrench"
  , "category": "Objects"
  , "aliases": [
      "hammer_and_wrench"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⛏"
  , "description": "pick"
  , "category": "Objects"
  , "aliases": [
      "pick"
    ]
  , "tags": [
    ]
  , "unicode_version": "5.2"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🔩"
  , "description": "nut and bolt"
  , "category": "Objects"
  , "aliases": [
      "nut_and_bolt"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⚙"
  , "description": "gear"
  , "category": "Objects"
  , "aliases": [
      "gear"
    ]
  , "tags": [
    ]
  , "unicode_version": "4.1"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⛓"
  , "description": "chains"
  , "category": "Objects"
  , "aliases": [
      "chains"
    ]
  , "tags": [
    ]
  , "unicode_version": "5.2"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🔫"
  , "description": "pistol"
  , "category": "Objects"
  , "aliases": [
      "gun"
    ]
  , "tags": [
      "shoot"
    , "weapon"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💣"
  , "description": "bomb"
  , "category": "Objects"
  , "aliases": [
      "bomb"
    ]
  , "tags": [
      "boom"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔪"
  , "description": "kitchen knife"
  , "category": "Objects"
  , "aliases": [
      "hocho"
    , "knife"
    ]
  , "tags": [
      "cut"
    , "chop"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🗡"
  , "description": "dagger"
  , "category": "Objects"
  , "aliases": [
      "dagger"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⚔"
  , "description": "crossed swords"
  , "category": "Objects"
  , "aliases": [
      "crossed_swords"
    ]
  , "tags": [
    ]
  , "unicode_version": "4.1"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🛡"
  , "description": "shield"
  , "category": "Objects"
  , "aliases": [
      "shield"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🚬"
  , "description": "cigarette"
  , "category": "Objects"
  , "aliases": [
      "smoking"
    ]
  , "tags": [
      "cigarette"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⚰"
  , "description": "coffin"
  , "category": "Objects"
  , "aliases": [
      "coffin"
    ]
  , "tags": [
      "funeral"
    ]
  , "unicode_version": "4.1"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⚱"
  , "description": "funeral urn"
  , "category": "Objects"
  , "aliases": [
      "funeral_urn"
    ]
  , "tags": [
    ]
  , "unicode_version": "4.1"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🏺"
  , "description": "amphora"
  , "category": "Objects"
  , "aliases": [
      "amphora"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🔮"
  , "description": "crystal ball"
  , "category": "Objects"
  , "aliases": [
      "crystal_ball"
    ]
  , "tags": [
      "fortune"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📿"
  , "description": "prayer beads"
  , "category": "Objects"
  , "aliases": [
      "prayer_beads"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "💈"
  , "description": "barber pole"
  , "category": "Objects"
  , "aliases": [
      "barber"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⚗"
  , "description": "alembic"
  , "category": "Objects"
  , "aliases": [
      "alembic"
    ]
  , "tags": [
    ]
  , "unicode_version": "4.1"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🔭"
  , "description": "telescope"
  , "category": "Objects"
  , "aliases": [
      "telescope"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔬"
  , "description": "microscope"
  , "category": "Objects"
  , "aliases": [
      "microscope"
    ]
  , "tags": [
      "science"
    , "laboratory"
    , "investigate"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕳"
  , "description": "hole"
  , "category": "Objects"
  , "aliases": [
      "hole"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "💊"
  , "description": "pill"
  , "category": "Objects"
  , "aliases": [
      "pill"
    ]
  , "tags": [
      "health"
    , "medicine"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💉"
  , "description": "syringe"
  , "category": "Objects"
  , "aliases": [
      "syringe"
    ]
  , "tags": [
      "health"
    , "hospital"
    , "needle"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌡"
  , "description": "thermometer"
  , "category": "Objects"
  , "aliases": [
      "thermometer"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🚽"
  , "description": "toilet"
  , "category": "Objects"
  , "aliases": [
      "toilet"
    ]
  , "tags": [
      "wc"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚿"
  , "description": "shower"
  , "category": "Objects"
  , "aliases": [
      "shower"
    ]
  , "tags": [
      "bath"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🛁"
  , "description": "bathtub"
  , "category": "Objects"
  , "aliases": [
      "bathtub"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🛎"
  , "description": "bellhop bell"
  , "category": "Objects"
  , "aliases": [
      "bellhop_bell"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🔑"
  , "description": "key"
  , "category": "Objects"
  , "aliases": [
      "key"
    ]
  , "tags": [
      "lock"
    , "password"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🗝"
  , "description": "old key"
  , "category": "Objects"
  , "aliases": [
      "old_key"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🚪"
  , "description": "door"
  , "category": "Objects"
  , "aliases": [
      "door"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🛋"
  , "description": "couch and lamp"
  , "category": "Objects"
  , "aliases": [
      "couch_and_lamp"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🛌"
  , "description": "person in bed"
  , "category": "Objects"
  , "aliases": [
      "sleeping_bed"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🛏"
  , "description": "bed"
  , "category": "Objects"
  , "aliases": [
      "bed"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🖼"
  , "description": "framed picture"
  , "category": "Objects"
  , "aliases": [
      "framed_picture"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⛱"
  , "description": "umbrella on ground"
  , "category": "Objects"
  , "aliases": [
      "parasol_on_ground"
    ]
  , "tags": [
      "beach_umbrella"
    ]
  , "unicode_version": "5.2"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🗿"
  , "description": "moai"
  , "category": "Objects"
  , "aliases": [
      "moyai"
    ]
  , "tags": [
      "stone"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🛍"
  , "description": "shopping bags"
  , "category": "Objects"
  , "aliases": [
      "shopping"
    ]
  , "tags": [
      "bags"
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🎁"
  , "description": "wrapped gift"
  , "category": "Objects"
  , "aliases": [
      "gift"
    ]
  , "tags": [
      "present"
    , "birthday"
    , "christmas"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎈"
  , "description": "balloon"
  , "category": "Objects"
  , "aliases": [
      "balloon"
    ]
  , "tags": [
      "party"
    , "birthday"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎏"
  , "description": "carp streamer"
  , "category": "Objects"
  , "aliases": [
      "flags"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎀"
  , "description": "ribbon"
  , "category": "Objects"
  , "aliases": [
      "ribbon"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎊"
  , "description": "confetti ball"
  , "category": "Objects"
  , "aliases": [
      "confetti_ball"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎉"
  , "description": "party popper"
  , "category": "Objects"
  , "aliases": [
      "tada"
    ]
  , "tags": [
      "party"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎐"
  , "description": "wind chime"
  , "category": "Objects"
  , "aliases": [
      "wind_chime"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏮"
  , "description": "red paper lantern"
  , "category": "Objects"
  , "aliases": [
      "izakaya_lantern"
    , "lantern"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎎"
  , "description": "Japanese dolls"
  , "category": "Objects"
  , "aliases": [
      "dolls"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "✉️"
  , "description": "envelope"
  , "category": "Objects"
  , "aliases": [
      "email"
    , "envelope"
    ]
  , "tags": [
      "letter"
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "📩"
  , "description": "envelope with arrow"
  , "category": "Objects"
  , "aliases": [
      "envelope_with_arrow"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📨"
  , "description": "incoming envelope"
  , "category": "Objects"
  , "aliases": [
      "incoming_envelope"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📧"
  , "description": "e-mail"
  , "category": "Objects"
  , "aliases": [
      "e-mail"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💌"
  , "description": "love letter"
  , "category": "Objects"
  , "aliases": [
      "love_letter"
    ]
  , "tags": [
      "email"
    , "envelope"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📥"
  , "description": "inbox tray"
  , "category": "Objects"
  , "aliases": [
      "inbox_tray"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📤"
  , "description": "outbox tray"
  , "category": "Objects"
  , "aliases": [
      "outbox_tray"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📦"
  , "description": "package"
  , "category": "Objects"
  , "aliases": [
      "package"
    ]
  , "tags": [
      "shipping"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏷"
  , "description": "label"
  , "category": "Objects"
  , "aliases": [
      "label"
    ]
  , "tags": [
      "tag"
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🔖"
  , "description": "bookmark"
  , "category": "Objects"
  , "aliases": [
      "bookmark"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📪"
  , "description": "closed mailbox with lowered flag"
  , "category": "Objects"
  , "aliases": [
      "mailbox_closed"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📫"
  , "description": "closed mailbox with raised flag"
  , "category": "Objects"
  , "aliases": [
      "mailbox"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📬"
  , "description": "open mailbox with raised flag"
  , "category": "Objects"
  , "aliases": [
      "mailbox_with_mail"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📭"
  , "description": "open mailbox with lowered flag"
  , "category": "Objects"
  , "aliases": [
      "mailbox_with_no_mail"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📮"
  , "description": "postbox"
  , "category": "Objects"
  , "aliases": [
      "postbox"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📯"
  , "description": "postal horn"
  , "category": "Objects"
  , "aliases": [
      "postal_horn"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📜"
  , "description": "scroll"
  , "category": "Objects"
  , "aliases": [
      "scroll"
    ]
  , "tags": [
      "document"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📃"
  , "description": "page with curl"
  , "category": "Objects"
  , "aliases": [
      "page_with_curl"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📄"
  , "description": "page facing up"
  , "category": "Objects"
  , "aliases": [
      "page_facing_up"
    ]
  , "tags": [
      "document"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📑"
  , "description": "bookmark tabs"
  , "category": "Objects"
  , "aliases": [
      "bookmark_tabs"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📊"
  , "description": "bar chart"
  , "category": "Objects"
  , "aliases": [
      "bar_chart"
    ]
  , "tags": [
      "stats"
    , "metrics"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📈"
  , "description": "chart increasing"
  , "category": "Objects"
  , "aliases": [
      "chart_with_upwards_trend"
    ]
  , "tags": [
      "graph"
    , "metrics"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📉"
  , "description": "chart decreasing"
  , "category": "Objects"
  , "aliases": [
      "chart_with_downwards_trend"
    ]
  , "tags": [
      "graph"
    , "metrics"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🗒"
  , "description": "spiral notepad"
  , "category": "Objects"
  , "aliases": [
      "spiral_notepad"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🗓"
  , "description": "spiral calendar"
  , "category": "Objects"
  , "aliases": [
      "spiral_calendar"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "📆"
  , "description": "tear-off calendar"
  , "category": "Objects"
  , "aliases": [
      "calendar"
    ]
  , "tags": [
      "schedule"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📅"
  , "description": "calendar"
  , "category": "Objects"
  , "aliases": [
      "date"
    ]
  , "tags": [
      "calendar"
    , "schedule"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📇"
  , "description": "card index"
  , "category": "Objects"
  , "aliases": [
      "card_index"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🗃"
  , "description": "card file box"
  , "category": "Objects"
  , "aliases": [
      "card_file_box"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🗳"
  , "description": "ballot box with ballot"
  , "category": "Objects"
  , "aliases": [
      "ballot_box"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🗄"
  , "description": "file cabinet"
  , "category": "Objects"
  , "aliases": [
      "file_cabinet"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "📋"
  , "description": "clipboard"
  , "category": "Objects"
  , "aliases": [
      "clipboard"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📁"
  , "description": "file folder"
  , "category": "Objects"
  , "aliases": [
      "file_folder"
    ]
  , "tags": [
      "directory"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📂"
  , "description": "open file folder"
  , "category": "Objects"
  , "aliases": [
      "open_file_folder"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🗂"
  , "description": "card index dividers"
  , "category": "Objects"
  , "aliases": [
      "card_index_dividers"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🗞"
  , "description": "rolled-up newspaper"
  , "category": "Objects"
  , "aliases": [
      "newspaper_roll"
    ]
  , "tags": [
      "press"
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "📰"
  , "description": "newspaper"
  , "category": "Objects"
  , "aliases": [
      "newspaper"
    ]
  , "tags": [
      "press"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📓"
  , "description": "notebook"
  , "category": "Objects"
  , "aliases": [
      "notebook"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📔"
  , "description": "notebook with decorative cover"
  , "category": "Objects"
  , "aliases": [
      "notebook_with_decorative_cover"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📒"
  , "description": "ledger"
  , "category": "Objects"
  , "aliases": [
      "ledger"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📕"
  , "description": "closed book"
  , "category": "Objects"
  , "aliases": [
      "closed_book"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📗"
  , "description": "green book"
  , "category": "Objects"
  , "aliases": [
      "green_book"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📘"
  , "description": "blue book"
  , "category": "Objects"
  , "aliases": [
      "blue_book"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📙"
  , "description": "orange book"
  , "category": "Objects"
  , "aliases": [
      "orange_book"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📚"
  , "description": "books"
  , "category": "Objects"
  , "aliases": [
      "books"
    ]
  , "tags": [
      "library"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📖"
  , "description": "open book"
  , "category": "Objects"
  , "aliases": [
      "book"
    , "open_book"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔗"
  , "description": "link"
  , "category": "Objects"
  , "aliases": [
      "link"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📎"
  , "description": "paperclip"
  , "category": "Objects"
  , "aliases": [
      "paperclip"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🖇"
  , "description": "linked paperclips"
  , "category": "Objects"
  , "aliases": [
      "paperclips"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "📐"
  , "description": "triangular ruler"
  , "category": "Objects"
  , "aliases": [
      "triangular_ruler"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📏"
  , "description": "straight ruler"
  , "category": "Objects"
  , "aliases": [
      "straight_ruler"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "✂️"
  , "description": "scissors"
  , "category": "Objects"
  , "aliases": [
      "scissors"
    ]
  , "tags": [
      "cut"
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "📌"
  , "description": "pushpin"
  , "category": "Objects"
  , "aliases": [
      "pushpin"
    ]
  , "tags": [
      "location"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📍"
  , "description": "round pushpin"
  , "category": "Objects"
  , "aliases": [
      "round_pushpin"
    ]
  , "tags": [
      "location"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚩"
  , "description": "triangular flag"
  , "category": "Objects"
  , "aliases": [
      "triangular_flag_on_post"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎌"
  , "description": "crossed flags"
  , "category": "Objects"
  , "aliases": [
      "crossed_flags"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏳️"
  , "description": "white flag"
  , "category": "Objects"
  , "aliases": [
      "white_flag"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🏴"
  , "description": "black flag"
  , "category": "Objects"
  , "aliases": [
      "black_flag"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🏁"
  , "description": "chequered flag"
  , "category": "Objects"
  , "aliases": [
      "checkered_flag"
    ]
  , "tags": [
      "milestone"
    , "finish"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏳️‍🌈"
  , "description": "rainbow flag"
  , "category": "Objects"
  , "aliases": [
      "rainbow_flag"
    ]
  , "tags": [
      "pride"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "10.0"
  }
, {
    "emoji": "🖌"
  , "description": "paintbrush"
  , "category": "Objects"
  , "aliases": [
      "paintbrush"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🖍"
  , "description": "crayon"
  , "category": "Objects"
  , "aliases": [
      "crayon"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🖊"
  , "description": "pen"
  , "category": "Objects"
  , "aliases": [
      "pen"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🖋"
  , "description": "fountain pen"
  , "category": "Objects"
  , "aliases": [
      "fountain_pen"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "✒️"
  , "description": "black nib"
  , "category": "Objects"
  , "aliases": [
      "black_nib"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "📝"
  , "description": "memo"
  , "category": "Objects"
  , "aliases": [
      "memo"
    , "pencil"
    ]
  , "tags": [
      "document"
    , "note"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "✏️"
  , "description": "pencil"
  , "category": "Objects"
  , "aliases": [
      "pencil2"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔏"
  , "description": "locked with pen"
  , "category": "Objects"
  , "aliases": [
      "lock_with_ink_pen"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔐"
  , "description": "locked with key"
  , "category": "Objects"
  , "aliases": [
      "closed_lock_with_key"
    ]
  , "tags": [
      "security"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔒"
  , "description": "locked"
  , "category": "Objects"
  , "aliases": [
      "lock"
    ]
  , "tags": [
      "security"
    , "private"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔓"
  , "description": "unlocked"
  , "category": "Objects"
  , "aliases": [
      "unlock"
    ]
  , "tags": [
      "security"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔍"
  , "description": "left-pointing magnifying glass"
  , "category": "Objects"
  , "aliases": [
      "mag"
    ]
  , "tags": [
      "search"
    , "zoom"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔎"
  , "description": "right-pointing magnifying glass"
  , "category": "Objects"
  , "aliases": [
      "mag_right"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "❤️"
  , "description": "red heart"
  , "category": "Symbols"
  , "aliases": [
      "heart"
    ]
  , "tags": [
      "love"
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "💛"
  , "description": "yellow heart"
  , "category": "Symbols"
  , "aliases": [
      "yellow_heart"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💚"
  , "description": "green heart"
  , "category": "Symbols"
  , "aliases": [
      "green_heart"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💙"
  , "description": "blue heart"
  , "category": "Symbols"
  , "aliases": [
      "blue_heart"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💜"
  , "description": "purple heart"
  , "category": "Symbols"
  , "aliases": [
      "purple_heart"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💔"
  , "description": "broken heart"
  , "category": "Symbols"
  , "aliases": [
      "broken_heart"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "❣️"
  , "description": "heavy heart exclamation"
  , "category": "Symbols"
  , "aliases": [
      "heavy_heart_exclamation"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "9.1"
  }
, {
    "emoji": "💕"
  , "description": "two hearts"
  , "category": "Symbols"
  , "aliases": [
      "two_hearts"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💞"
  , "description": "revolving hearts"
  , "category": "Symbols"
  , "aliases": [
      "revolving_hearts"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💓"
  , "description": "beating heart"
  , "category": "Symbols"
  , "aliases": [
      "heartbeat"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💗"
  , "description": "growing heart"
  , "category": "Symbols"
  , "aliases": [
      "heartpulse"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💖"
  , "description": "sparkling heart"
  , "category": "Symbols"
  , "aliases": [
      "sparkling_heart"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💘"
  , "description": "heart with arrow"
  , "category": "Symbols"
  , "aliases": [
      "cupid"
    ]
  , "tags": [
      "love"
    , "heart"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💝"
  , "description": "heart with ribbon"
  , "category": "Symbols"
  , "aliases": [
      "gift_heart"
    ]
  , "tags": [
      "chocolates"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💟"
  , "description": "heart decoration"
  , "category": "Symbols"
  , "aliases": [
      "heart_decoration"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "☮️"
  , "description": "peace symbol"
  , "category": "Symbols"
  , "aliases": [
      "peace_symbol"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "9.1"
  }
, {
    "emoji": "✝️"
  , "description": "latin cross"
  , "category": "Symbols"
  , "aliases": [
      "latin_cross"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "9.1"
  }
, {
    "emoji": "☪️"
  , "description": "star and crescent"
  , "category": "Symbols"
  , "aliases": [
      "star_and_crescent"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "9.1"
  }
, {
    "emoji": "🕉"
  , "description": "om"
  , "category": "Symbols"
  , "aliases": [
      "om"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "☸️"
  , "description": "wheel of dharma"
  , "category": "Symbols"
  , "aliases": [
      "wheel_of_dharma"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "9.1"
  }
, {
    "emoji": "✡️"
  , "description": "star of David"
  , "category": "Symbols"
  , "aliases": [
      "star_of_david"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "9.1"
  }
, {
    "emoji": "🔯"
  , "description": "dotted six-pointed star"
  , "category": "Symbols"
  , "aliases": [
      "six_pointed_star"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕎"
  , "description": "menorah"
  , "category": "Symbols"
  , "aliases": [
      "menorah"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "☯️"
  , "description": "yin yang"
  , "category": "Symbols"
  , "aliases": [
      "yin_yang"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "9.1"
  }
, {
    "emoji": "☦️"
  , "description": "orthodox cross"
  , "category": "Symbols"
  , "aliases": [
      "orthodox_cross"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "9.1"
  }
, {
    "emoji": "🛐"
  , "description": "place of worship"
  , "category": "Symbols"
  , "aliases": [
      "place_of_worship"
    ]
  , "tags": [
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⛎"
  , "description": "Ophiuchus"
  , "category": "Symbols"
  , "aliases": [
      "ophiuchus"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "♈️"
  , "description": "Aries"
  , "category": "Symbols"
  , "aliases": [
      "aries"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "♉️"
  , "description": "Taurus"
  , "category": "Symbols"
  , "aliases": [
      "taurus"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "♊️"
  , "description": "Gemini"
  , "category": "Symbols"
  , "aliases": [
      "gemini"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "♋️"
  , "description": "Cancer"
  , "category": "Symbols"
  , "aliases": [
      "cancer"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "♌️"
  , "description": "Leo"
  , "category": "Symbols"
  , "aliases": [
      "leo"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "♍️"
  , "description": "Virgo"
  , "category": "Symbols"
  , "aliases": [
      "virgo"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "♎️"
  , "description": "Libra"
  , "category": "Symbols"
  , "aliases": [
      "libra"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "♏️"
  , "description": "Scorpius"
  , "category": "Symbols"
  , "aliases": [
      "scorpius"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "♐️"
  , "description": "Sagittarius"
  , "category": "Symbols"
  , "aliases": [
      "sagittarius"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "♑️"
  , "description": "Capricorn"
  , "category": "Symbols"
  , "aliases": [
      "capricorn"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "♒️"
  , "description": "Aquarius"
  , "category": "Symbols"
  , "aliases": [
      "aquarius"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "♓️"
  , "description": "Pisces"
  , "category": "Symbols"
  , "aliases": [
      "pisces"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "🆔"
  , "description": "ID button"
  , "category": "Symbols"
  , "aliases": [
      "id"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⚛"
  , "description": "atom symbol"
  , "category": "Symbols"
  , "aliases": [
      "atom_symbol"
    ]
  , "tags": [
    ]
  , "unicode_version": "4.1"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🈳"
  , "description": "Japanese “vacancy” button"
  , "category": "Symbols"
  , "aliases": [
      "u7a7a"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🈹"
  , "description": "Japanese “discount” button"
  , "category": "Symbols"
  , "aliases": [
      "u5272"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "☢️"
  , "description": "radioactive"
  , "category": "Symbols"
  , "aliases": [
      "radioactive"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "9.1"
  }
, {
    "emoji": "☣️"
  , "description": "biohazard"
  , "category": "Symbols"
  , "aliases": [
      "biohazard"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "9.1"
  }
, {
    "emoji": "📴"
  , "description": "mobile phone off"
  , "category": "Symbols"
  , "aliases": [
      "mobile_phone_off"
    ]
  , "tags": [
      "mute"
    , "off"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📳"
  , "description": "vibration mode"
  , "category": "Symbols"
  , "aliases": [
      "vibration_mode"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🈶"
  , "description": "Japanese “not free of charge” button"
  , "category": "Symbols"
  , "aliases": [
      "u6709"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🈚️"
  , "description": "Japanese “free of charge” button"
  , "category": "Symbols"
  , "aliases": [
      "u7121"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "🈸"
  , "description": "Japanese “application” button"
  , "category": "Symbols"
  , "aliases": [
      "u7533"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🈺"
  , "description": "Japanese “open for business” button"
  , "category": "Symbols"
  , "aliases": [
      "u55b6"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🈷️"
  , "description": "Japanese “monthly amount” button"
  , "category": "Symbols"
  , "aliases": [
      "u6708"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "✴️"
  , "description": "eight-pointed star"
  , "category": "Symbols"
  , "aliases": [
      "eight_pointed_black_star"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "🆚"
  , "description": "VS button"
  , "category": "Symbols"
  , "aliases": [
      "vs"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🉑"
  , "description": "Japanese “acceptable” button"
  , "category": "Symbols"
  , "aliases": [
      "accept"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💮"
  , "description": "white flower"
  , "category": "Symbols"
  , "aliases": [
      "white_flower"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🉐"
  , "description": "Japanese “bargain” button"
  , "category": "Symbols"
  , "aliases": [
      "ideograph_advantage"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "㊙️"
  , "description": "Japanese “secret” button"
  , "category": "Symbols"
  , "aliases": [
      "secret"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "㊗️"
  , "description": "Japanese “congratulations” button"
  , "category": "Symbols"
  , "aliases": [
      "congratulations"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "🈴"
  , "description": "Japanese “passing grade” button"
  , "category": "Symbols"
  , "aliases": [
      "u5408"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🈵"
  , "description": "Japanese “no vacancy” button"
  , "category": "Symbols"
  , "aliases": [
      "u6e80"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🈲"
  , "description": "Japanese “prohibited” button"
  , "category": "Symbols"
  , "aliases": [
      "u7981"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🅰️"
  , "description": "A button (blood type)"
  , "category": "Symbols"
  , "aliases": [
      "a"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🅱️"
  , "description": "B button (blood type)"
  , "category": "Symbols"
  , "aliases": [
      "b"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🆎"
  , "description": "AB button (blood type)"
  , "category": "Symbols"
  , "aliases": [
      "ab"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🆑"
  , "description": "CL button"
  , "category": "Symbols"
  , "aliases": [
      "cl"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🅾️"
  , "description": "O button (blood type)"
  , "category": "Symbols"
  , "aliases": [
      "o2"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🆘"
  , "description": "SOS button"
  , "category": "Symbols"
  , "aliases": [
      "sos"
    ]
  , "tags": [
      "help"
    , "emergency"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⛔️"
  , "description": "no entry"
  , "category": "Symbols"
  , "aliases": [
      "no_entry"
    ]
  , "tags": [
      "limit"
    ]
  , "unicode_version": "5.2"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📛"
  , "description": "name badge"
  , "category": "Symbols"
  , "aliases": [
      "name_badge"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚫"
  , "description": "prohibited"
  , "category": "Symbols"
  , "aliases": [
      "no_entry_sign"
    ]
  , "tags": [
      "block"
    , "forbidden"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "❌"
  , "description": "cross mark"
  , "category": "Symbols"
  , "aliases": [
      "x"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⭕️"
  , "description": "heavy large circle"
  , "category": "Symbols"
  , "aliases": [
      "o"
    ]
  , "tags": [
    ]
  , "unicode_version": "5.2"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💢"
  , "description": "anger symbol"
  , "category": "Symbols"
  , "aliases": [
      "anger"
    ]
  , "tags": [
      "angry"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "♨️"
  , "description": "hot springs"
  , "category": "Symbols"
  , "aliases": [
      "hotsprings"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚷"
  , "description": "no pedestrians"
  , "category": "Symbols"
  , "aliases": [
      "no_pedestrians"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚯"
  , "description": "no littering"
  , "category": "Symbols"
  , "aliases": [
      "do_not_litter"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚳"
  , "description": "no bicycles"
  , "category": "Symbols"
  , "aliases": [
      "no_bicycles"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚱"
  , "description": "non-potable water"
  , "category": "Symbols"
  , "aliases": [
      "non-potable_water"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔞"
  , "description": "no one under eighteen"
  , "category": "Symbols"
  , "aliases": [
      "underage"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📵"
  , "description": "no mobile phones"
  , "category": "Symbols"
  , "aliases": [
      "no_mobile_phones"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "❗️"
  , "description": "exclamation mark"
  , "category": "Symbols"
  , "aliases": [
      "exclamation"
    , "heavy_exclamation_mark"
    ]
  , "tags": [
      "bang"
    ]
  , "unicode_version": "5.2"
  , "ios_version": "6.0"
  }
, {
    "emoji": "❕"
  , "description": "white exclamation mark"
  , "category": "Symbols"
  , "aliases": [
      "grey_exclamation"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "❓"
  , "description": "question mark"
  , "category": "Symbols"
  , "aliases": [
      "question"
    ]
  , "tags": [
      "confused"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "❔"
  , "description": "white question mark"
  , "category": "Symbols"
  , "aliases": [
      "grey_question"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "‼️"
  , "description": "double exclamation mark"
  , "category": "Symbols"
  , "aliases": [
      "bangbang"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "⁉️"
  , "description": "exclamation question mark"
  , "category": "Symbols"
  , "aliases": [
      "interrobang"
    ]
  , "tags": [
    ]
  , "unicode_version": "3.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💯"
  , "description": "hundred points"
  , "category": "Symbols"
  , "aliases": [
      "100"
    ]
  , "tags": [
      "score"
    , "perfect"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔅"
  , "description": "dim button"
  , "category": "Symbols"
  , "aliases": [
      "low_brightness"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔆"
  , "description": "bright button"
  , "category": "Symbols"
  , "aliases": [
      "high_brightness"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔱"
  , "description": "trident emblem"
  , "category": "Symbols"
  , "aliases": [
      "trident"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⚜"
  , "description": "fleur-de-lis"
  , "category": "Symbols"
  , "aliases": [
      "fleur_de_lis"
    ]
  , "tags": [
    ]
  , "unicode_version": "4.1"
  , "ios_version": "9.1"
  }
, {
    "emoji": "〽️"
  , "description": "part alternation mark"
  , "category": "Symbols"
  , "aliases": [
      "part_alternation_mark"
    ]
  , "tags": [
    ]
  , "unicode_version": "3.2"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⚠️"
  , "description": "warning"
  , "category": "Symbols"
  , "aliases": [
      "warning"
    ]
  , "tags": [
      "wip"
    ]
  , "unicode_version": "4.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚸"
  , "description": "children crossing"
  , "category": "Symbols"
  , "aliases": [
      "children_crossing"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔰"
  , "description": "Japanese symbol for beginner"
  , "category": "Symbols"
  , "aliases": [
      "beginner"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "♻️"
  , "description": "recycling symbol"
  , "category": "Symbols"
  , "aliases": [
      "recycle"
    ]
  , "tags": [
      "environment"
    , "green"
    ]
  , "unicode_version": "3.2"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🈯️"
  , "description": "Japanese “reserved” button"
  , "category": "Symbols"
  , "aliases": [
      "u6307"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "💹"
  , "description": "chart increasing with yen"
  , "category": "Symbols"
  , "aliases": [
      "chart"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "❇️"
  , "description": "sparkle"
  , "category": "Symbols"
  , "aliases": [
      "sparkle"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "✳️"
  , "description": "eight-spoked asterisk"
  , "category": "Symbols"
  , "aliases": [
      "eight_spoked_asterisk"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "❎"
  , "description": "cross mark button"
  , "category": "Symbols"
  , "aliases": [
      "negative_squared_cross_mark"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "✅"
  , "description": "white heavy check mark"
  , "category": "Symbols"
  , "aliases": [
      "white_check_mark"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌐"
  , "description": "globe with meridians"
  , "category": "Symbols"
  , "aliases": [
      "globe_with_meridians"
    ]
  , "tags": [
      "world"
    , "global"
    , "international"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "Ⓜ️"
  , "description": "circled M"
  , "category": "Symbols"
  , "aliases": [
      "m"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "💠"
  , "description": "diamond with a dot"
  , "category": "Symbols"
  , "aliases": [
      "diamond_shape_with_a_dot_inside"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🌀"
  , "description": "cyclone"
  , "category": "Symbols"
  , "aliases": [
      "cyclone"
    ]
  , "tags": [
      "swirl"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "➿"
  , "description": "double curly loop"
  , "category": "Symbols"
  , "aliases": [
      "loop"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🏧"
  , "description": "ATM sign"
  , "category": "Symbols"
  , "aliases": [
      "atm"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🈂️"
  , "description": "Japanese “service charge” button"
  , "category": "Symbols"
  , "aliases": [
      "sa"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🛂"
  , "description": "passport control"
  , "category": "Symbols"
  , "aliases": [
      "passport_control"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🛃"
  , "description": "customs"
  , "category": "Symbols"
  , "aliases": [
      "customs"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🛄"
  , "description": "baggage claim"
  , "category": "Symbols"
  , "aliases": [
      "baggage_claim"
    ]
  , "tags": [
      "airport"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🛅"
  , "description": "left luggage"
  , "category": "Symbols"
  , "aliases": [
      "left_luggage"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "♿️"
  , "description": "wheelchair symbol"
  , "category": "Symbols"
  , "aliases": [
      "wheelchair"
    ]
  , "tags": [
      "accessibility"
    ]
  , "unicode_version": "4.1"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚭"
  , "description": "no smoking"
  , "category": "Symbols"
  , "aliases": [
      "no_smoking"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚾"
  , "description": "water closet"
  , "category": "Symbols"
  , "aliases": [
      "wc"
    ]
  , "tags": [
      "toilet"
    , "restroom"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🅿️"
  , "description": "P button"
  , "category": "Symbols"
  , "aliases": [
      "parking"
    ]
  , "tags": [
    ]
  , "unicode_version": "5.2"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚰"
  , "description": "potable water"
  , "category": "Symbols"
  , "aliases": [
      "potable_water"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚹"
  , "description": "men’s room"
  , "category": "Symbols"
  , "aliases": [
      "mens"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚺"
  , "description": "women’s room"
  , "category": "Symbols"
  , "aliases": [
      "womens"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚼"
  , "description": "baby symbol"
  , "category": "Symbols"
  , "aliases": [
      "baby_symbol"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚻"
  , "description": "restroom"
  , "category": "Symbols"
  , "aliases": [
      "restroom"
    ]
  , "tags": [
      "toilet"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🚮"
  , "description": "litter in bin sign"
  , "category": "Symbols"
  , "aliases": [
      "put_litter_in_its_place"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎦"
  , "description": "cinema"
  , "category": "Symbols"
  , "aliases": [
      "cinema"
    ]
  , "tags": [
      "film"
    , "movie"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📶"
  , "description": "antenna bars"
  , "category": "Symbols"
  , "aliases": [
      "signal_strength"
    ]
  , "tags": [
      "wifi"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🈁"
  , "description": "Japanese “here” button"
  , "category": "Symbols"
  , "aliases": [
      "koko"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔤"
  , "description": "input latin letters"
  , "category": "Symbols"
  , "aliases": [
      "abc"
    ]
  , "tags": [
      "alphabet"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔡"
  , "description": "input latin lowercase"
  , "category": "Symbols"
  , "aliases": [
      "abcd"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔠"
  , "description": "input latin uppercase"
  , "category": "Symbols"
  , "aliases": [
      "capital_abcd"
    ]
  , "tags": [
      "letters"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔣"
  , "description": "input symbols"
  , "category": "Symbols"
  , "aliases": [
      "symbols"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "ℹ️"
  , "description": "information"
  , "category": "Symbols"
  , "aliases": [
      "information_source"
    ]
  , "tags": [
    ]
  , "unicode_version": "3.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🆖"
  , "description": "NG button"
  , "category": "Symbols"
  , "aliases": [
      "ng"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🆗"
  , "description": "OK button"
  , "category": "Symbols"
  , "aliases": [
      "ok"
    ]
  , "tags": [
      "yes"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🆙"
  , "description": "UP! button"
  , "category": "Symbols"
  , "aliases": [
      "up"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🆒"
  , "description": "COOL button"
  , "category": "Symbols"
  , "aliases": [
      "cool"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🆕"
  , "description": "NEW button"
  , "category": "Symbols"
  , "aliases": [
      "new"
    ]
  , "tags": [
      "fresh"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🆓"
  , "description": "FREE button"
  , "category": "Symbols"
  , "aliases": [
      "free"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "0️⃣"
  , "description": "keycap: 0"
  , "category": "Symbols"
  , "aliases": [
      "zero"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "1️⃣"
  , "description": "keycap: 1"
  , "category": "Symbols"
  , "aliases": [
      "one"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "2️⃣"
  , "description": "keycap: 2"
  , "category": "Symbols"
  , "aliases": [
      "two"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "3️⃣"
  , "description": "keycap: 3"
  , "category": "Symbols"
  , "aliases": [
      "three"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "4️⃣"
  , "description": "keycap: 4"
  , "category": "Symbols"
  , "aliases": [
      "four"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "5️⃣"
  , "description": "keycap: 5"
  , "category": "Symbols"
  , "aliases": [
      "five"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "6️⃣"
  , "description": "keycap: 6"
  , "category": "Symbols"
  , "aliases": [
      "six"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "7️⃣"
  , "description": "keycap: 7"
  , "category": "Symbols"
  , "aliases": [
      "seven"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "8️⃣"
  , "description": "keycap: 8"
  , "category": "Symbols"
  , "aliases": [
      "eight"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "9️⃣"
  , "description": "keycap: 9"
  , "category": "Symbols"
  , "aliases": [
      "nine"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔟"
  , "description": "keycap 10"
  , "category": "Symbols"
  , "aliases": [
      "keycap_ten"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔢"
  , "description": "input numbers"
  , "category": "Symbols"
  , "aliases": [
      "1234"
    ]
  , "tags": [
      "numbers"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "#️⃣"
  , "description": "keycap: #"
  , "category": "Symbols"
  , "aliases": [
      "hash"
    ]
  , "tags": [
      "number"
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "*️⃣"
  , "description": "keycap: *"
  , "category": "Symbols"
  , "aliases": [
      "asterisk"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "9.1"
  }
, {
    "emoji": "▶️"
  , "description": "play button"
  , "category": "Symbols"
  , "aliases": [
      "arrow_forward"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "⏸"
  , "description": "pause button"
  , "category": "Symbols"
  , "aliases": [
      "pause_button"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⏯"
  , "description": "play or pause button"
  , "category": "Symbols"
  , "aliases": [
      "play_or_pause_button"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⏹"
  , "description": "stop button"
  , "category": "Symbols"
  , "aliases": [
      "stop_button"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⏺"
  , "description": "record button"
  , "category": "Symbols"
  , "aliases": [
      "record_button"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⏭"
  , "description": "next track button"
  , "category": "Symbols"
  , "aliases": [
      "next_track_button"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⏮"
  , "description": "last track button"
  , "category": "Symbols"
  , "aliases": [
      "previous_track_button"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "⏩"
  , "description": "fast-forward button"
  , "category": "Symbols"
  , "aliases": [
      "fast_forward"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⏪"
  , "description": "fast reverse button"
  , "category": "Symbols"
  , "aliases": [
      "rewind"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⏫"
  , "description": "fast up button"
  , "category": "Symbols"
  , "aliases": [
      "arrow_double_up"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⏬"
  , "description": "fast down button"
  , "category": "Symbols"
  , "aliases": [
      "arrow_double_down"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "◀️"
  , "description": "reverse button"
  , "category": "Symbols"
  , "aliases": [
      "arrow_backward"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔼"
  , "description": "up button"
  , "category": "Symbols"
  , "aliases": [
      "arrow_up_small"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔽"
  , "description": "down button"
  , "category": "Symbols"
  , "aliases": [
      "arrow_down_small"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "➡️"
  , "description": "right arrow"
  , "category": "Symbols"
  , "aliases": [
      "arrow_right"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "⬅️"
  , "description": "left arrow"
  , "category": "Symbols"
  , "aliases": [
      "arrow_left"
    ]
  , "tags": [
    ]
  , "unicode_version": "4.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⬆️"
  , "description": "up arrow"
  , "category": "Symbols"
  , "aliases": [
      "arrow_up"
    ]
  , "tags": [
    ]
  , "unicode_version": "4.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⬇️"
  , "description": "down arrow"
  , "category": "Symbols"
  , "aliases": [
      "arrow_down"
    ]
  , "tags": [
    ]
  , "unicode_version": "4.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "↗️"
  , "description": "up-right arrow"
  , "category": "Symbols"
  , "aliases": [
      "arrow_upper_right"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "↘️"
  , "description": "down-right arrow"
  , "category": "Symbols"
  , "aliases": [
      "arrow_lower_right"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "↙️"
  , "description": "down-left arrow"
  , "category": "Symbols"
  , "aliases": [
      "arrow_lower_left"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "↖️"
  , "description": "up-left arrow"
  , "category": "Symbols"
  , "aliases": [
      "arrow_upper_left"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "↕️"
  , "description": "up-down arrow"
  , "category": "Symbols"
  , "aliases": [
      "arrow_up_down"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "↔️"
  , "description": "left-right arrow"
  , "category": "Symbols"
  , "aliases": [
      "left_right_arrow"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "↪️"
  , "description": "left arrow curving right"
  , "category": "Symbols"
  , "aliases": [
      "arrow_right_hook"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "↩️"
  , "description": "right arrow curving left"
  , "category": "Symbols"
  , "aliases": [
      "leftwards_arrow_with_hook"
    ]
  , "tags": [
      "return"
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "⤴️"
  , "description": "right arrow curving up"
  , "category": "Symbols"
  , "aliases": [
      "arrow_heading_up"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "⤵️"
  , "description": "right arrow curving down"
  , "category": "Symbols"
  , "aliases": [
      "arrow_heading_down"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔀"
  , "description": "shuffle tracks button"
  , "category": "Symbols"
  , "aliases": [
      "twisted_rightwards_arrows"
    ]
  , "tags": [
      "shuffle"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔁"
  , "description": "repeat button"
  , "category": "Symbols"
  , "aliases": [
      "repeat"
    ]
  , "tags": [
      "loop"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔂"
  , "description": "repeat single button"
  , "category": "Symbols"
  , "aliases": [
      "repeat_one"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔄"
  , "description": "anticlockwise arrows button"
  , "category": "Symbols"
  , "aliases": [
      "arrows_counterclockwise"
    ]
  , "tags": [
      "sync"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔃"
  , "description": "clockwise vertical arrows"
  , "category": "Symbols"
  , "aliases": [
      "arrows_clockwise"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎵"
  , "description": "musical note"
  , "category": "Symbols"
  , "aliases": [
      "musical_note"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎶"
  , "description": "musical notes"
  , "category": "Symbols"
  , "aliases": [
      "notes"
    ]
  , "tags": [
      "music"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "〰️"
  , "description": "wavy dash"
  , "category": "Symbols"
  , "aliases": [
      "wavy_dash"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "➰"
  , "description": "curly loop"
  , "category": "Symbols"
  , "aliases": [
      "curly_loop"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "✔️"
  , "description": "heavy check mark"
  , "category": "Symbols"
  , "aliases": [
      "heavy_check_mark"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "➕"
  , "description": "heavy plus sign"
  , "category": "Symbols"
  , "aliases": [
      "heavy_plus_sign"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "➖"
  , "description": "heavy minus sign"
  , "category": "Symbols"
  , "aliases": [
      "heavy_minus_sign"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "➗"
  , "description": "heavy division sign"
  , "category": "Symbols"
  , "aliases": [
      "heavy_division_sign"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "✖️"
  , "description": "heavy multiplication x"
  , "category": "Symbols"
  , "aliases": [
      "heavy_multiplication_x"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "💲"
  , "description": "heavy dollar sign"
  , "category": "Symbols"
  , "aliases": [
      "heavy_dollar_sign"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💱"
  , "description": "currency exchange"
  , "category": "Symbols"
  , "aliases": [
      "currency_exchange"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "™️"
  , "description": "trade mark"
  , "category": "Symbols"
  , "aliases": [
      "tm"
    ]
  , "tags": [
      "trademark"
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "©️"
  , "description": "copyright"
  , "category": "Symbols"
  , "aliases": [
      "copyright"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "®️"
  , "description": "registered"
  , "category": "Symbols"
  , "aliases": [
      "registered"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔚"
  , "description": "END arrow"
  , "category": "Symbols"
  , "aliases": [
      "end"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔙"
  , "description": "BACK arrow"
  , "category": "Symbols"
  , "aliases": [
      "back"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔛"
  , "description": "ON! arrow"
  , "category": "Symbols"
  , "aliases": [
      "on"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔝"
  , "description": "TOP arrow"
  , "category": "Symbols"
  , "aliases": [
      "top"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔜"
  , "description": "SOON arrow"
  , "category": "Symbols"
  , "aliases": [
      "soon"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "☑️"
  , "description": "ballot box with check"
  , "category": "Symbols"
  , "aliases": [
      "ballot_box_with_check"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔘"
  , "description": "radio button"
  , "category": "Symbols"
  , "aliases": [
      "radio_button"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⚪️"
  , "description": "white circle"
  , "category": "Symbols"
  , "aliases": [
      "white_circle"
    ]
  , "tags": [
    ]
  , "unicode_version": "4.1"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⚫️"
  , "description": "black circle"
  , "category": "Symbols"
  , "aliases": [
      "black_circle"
    ]
  , "tags": [
    ]
  , "unicode_version": "4.1"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔴"
  , "description": "red circle"
  , "category": "Symbols"
  , "aliases": [
      "red_circle"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔵"
  , "description": "blue circle"
  , "category": "Symbols"
  , "aliases": [
      "large_blue_circle"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔺"
  , "description": "red triangle pointed up"
  , "category": "Symbols"
  , "aliases": [
      "small_red_triangle"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔻"
  , "description": "red triangle pointed down"
  , "category": "Symbols"
  , "aliases": [
      "small_red_triangle_down"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔸"
  , "description": "small orange diamond"
  , "category": "Symbols"
  , "aliases": [
      "small_orange_diamond"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔹"
  , "description": "small blue diamond"
  , "category": "Symbols"
  , "aliases": [
      "small_blue_diamond"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔶"
  , "description": "large orange diamond"
  , "category": "Symbols"
  , "aliases": [
      "large_orange_diamond"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔷"
  , "description": "large blue diamond"
  , "category": "Symbols"
  , "aliases": [
      "large_blue_diamond"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔳"
  , "description": "white square button"
  , "category": "Symbols"
  , "aliases": [
      "white_square_button"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔲"
  , "description": "black square button"
  , "category": "Symbols"
  , "aliases": [
      "black_square_button"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "▪️"
  , "description": "black small square"
  , "category": "Symbols"
  , "aliases": [
      "black_small_square"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "▫️"
  , "description": "white small square"
  , "category": "Symbols"
  , "aliases": [
      "white_small_square"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "◾️"
  , "description": "black medium-small square"
  , "category": "Symbols"
  , "aliases": [
      "black_medium_small_square"
    ]
  , "tags": [
    ]
  , "unicode_version": "3.2"
  , "ios_version": "6.0"
  }
, {
    "emoji": "◽️"
  , "description": "white medium-small square"
  , "category": "Symbols"
  , "aliases": [
      "white_medium_small_square"
    ]
  , "tags": [
    ]
  , "unicode_version": "3.2"
  , "ios_version": "6.0"
  }
, {
    "emoji": "◼️"
  , "description": "black medium square"
  , "category": "Symbols"
  , "aliases": [
      "black_medium_square"
    ]
  , "tags": [
    ]
  , "unicode_version": "3.2"
  , "ios_version": "6.0"
  }
, {
    "emoji": "◻️"
  , "description": "white medium square"
  , "category": "Symbols"
  , "aliases": [
      "white_medium_square"
    ]
  , "tags": [
    ]
  , "unicode_version": "3.2"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⬛️"
  , "description": "black large square"
  , "category": "Symbols"
  , "aliases": [
      "black_large_square"
    ]
  , "tags": [
    ]
  , "unicode_version": "5.1"
  , "ios_version": "6.0"
  }
, {
    "emoji": "⬜️"
  , "description": "white large square"
  , "category": "Symbols"
  , "aliases": [
      "white_large_square"
    ]
  , "tags": [
    ]
  , "unicode_version": "5.1"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔇"
  , "description": "muted speaker"
  , "category": "Symbols"
  , "aliases": [
      "mute"
    ]
  , "tags": [
      "sound"
    , "volume"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔈"
  , "description": "speaker low volume"
  , "category": "Symbols"
  , "aliases": [
      "speaker"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔉"
  , "description": "speaker medium volume"
  , "category": "Symbols"
  , "aliases": [
      "sound"
    ]
  , "tags": [
      "volume"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔊"
  , "description": "speaker high volume"
  , "category": "Symbols"
  , "aliases": [
      "loud_sound"
    ]
  , "tags": [
      "volume"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔕"
  , "description": "bell with slash"
  , "category": "Symbols"
  , "aliases": [
      "no_bell"
    ]
  , "tags": [
      "volume"
    , "off"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🔔"
  , "description": "bell"
  , "category": "Symbols"
  , "aliases": [
      "bell"
    ]
  , "tags": [
      "sound"
    , "notification"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📣"
  , "description": "megaphone"
  , "category": "Symbols"
  , "aliases": [
      "mega"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "📢"
  , "description": "loudspeaker"
  , "category": "Symbols"
  , "aliases": [
      "loudspeaker"
    ]
  , "tags": [
      "announcement"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "👁‍🗨"
  , "description": "eye in speech bubble"
  , "category": "Symbols"
  , "aliases": [
      "eye_speech_bubble"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "💬"
  , "description": "speech balloon"
  , "category": "Symbols"
  , "aliases": [
      "speech_balloon"
    ]
  , "tags": [
      "comment"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "💭"
  , "description": "thought balloon"
  , "category": "Symbols"
  , "aliases": [
      "thought_balloon"
    ]
  , "tags": [
      "thinking"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🗯"
  , "description": "right anger bubble"
  , "category": "Symbols"
  , "aliases": [
      "right_anger_bubble"
    ]
  , "tags": [
    ]
  , "unicode_version": "7.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🃏"
  , "description": "joker"
  , "category": "Symbols"
  , "aliases": [
      "black_joker"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🀄️"
  , "description": "mahjong red dragon"
  , "category": "Symbols"
  , "aliases": [
      "mahjong"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "🎴"
  , "description": "flower playing cards"
  , "category": "Symbols"
  , "aliases": [
      "flower_playing_cards"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "♠️"
  , "description": "spade suit"
  , "category": "Symbols"
  , "aliases": [
      "spades"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "♣️"
  , "description": "club suit"
  , "category": "Symbols"
  , "aliases": [
      "clubs"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "♥️"
  , "description": "heart suit"
  , "category": "Symbols"
  , "aliases": [
      "hearts"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "♦️"
  , "description": "diamond suit"
  , "category": "Symbols"
  , "aliases": [
      "diamonds"
    ]
  , "tags": [
    ]
  , "unicode_version": ""
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕐"
  , "description": "one o’clock"
  , "category": "Symbols"
  , "aliases": [
      "clock1"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕑"
  , "description": "two o’clock"
  , "category": "Symbols"
  , "aliases": [
      "clock2"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕒"
  , "description": "three o’clock"
  , "category": "Symbols"
  , "aliases": [
      "clock3"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕓"
  , "description": "four o’clock"
  , "category": "Symbols"
  , "aliases": [
      "clock4"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕔"
  , "description": "five o’clock"
  , "category": "Symbols"
  , "aliases": [
      "clock5"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕕"
  , "description": "six o’clock"
  , "category": "Symbols"
  , "aliases": [
      "clock6"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕖"
  , "description": "seven o’clock"
  , "category": "Symbols"
  , "aliases": [
      "clock7"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕗"
  , "description": "eight o’clock"
  , "category": "Symbols"
  , "aliases": [
      "clock8"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕘"
  , "description": "nine o’clock"
  , "category": "Symbols"
  , "aliases": [
      "clock9"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕙"
  , "description": "ten o’clock"
  , "category": "Symbols"
  , "aliases": [
      "clock10"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕚"
  , "description": "eleven o’clock"
  , "category": "Symbols"
  , "aliases": [
      "clock11"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕛"
  , "description": "twelve o’clock"
  , "category": "Symbols"
  , "aliases": [
      "clock12"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕜"
  , "description": "one-thirty"
  , "category": "Symbols"
  , "aliases": [
      "clock130"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕝"
  , "description": "two-thirty"
  , "category": "Symbols"
  , "aliases": [
      "clock230"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕞"
  , "description": "three-thirty"
  , "category": "Symbols"
  , "aliases": [
      "clock330"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕟"
  , "description": "four-thirty"
  , "category": "Symbols"
  , "aliases": [
      "clock430"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕠"
  , "description": "five-thirty"
  , "category": "Symbols"
  , "aliases": [
      "clock530"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕡"
  , "description": "six-thirty"
  , "category": "Symbols"
  , "aliases": [
      "clock630"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕢"
  , "description": "seven-thirty"
  , "category": "Symbols"
  , "aliases": [
      "clock730"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕣"
  , "description": "eight-thirty"
  , "category": "Symbols"
  , "aliases": [
      "clock830"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕤"
  , "description": "nine-thirty"
  , "category": "Symbols"
  , "aliases": [
      "clock930"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕥"
  , "description": "ten-thirty"
  , "category": "Symbols"
  , "aliases": [
      "clock1030"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕦"
  , "description": "eleven-thirty"
  , "category": "Symbols"
  , "aliases": [
      "clock1130"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🕧"
  , "description": "twelve-thirty"
  , "category": "Symbols"
  , "aliases": [
      "clock1230"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🇦🇫"
  , "description": "Afghanistan"
  , "category": "Flags"
  , "aliases": [
      "afghanistan"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇦🇽"
  , "description": "Åland Islands"
  , "category": "Flags"
  , "aliases": [
      "aland_islands"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇦🇱"
  , "description": "Albania"
  , "category": "Flags"
  , "aliases": [
      "albania"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇩🇿"
  , "description": "Algeria"
  , "category": "Flags"
  , "aliases": [
      "algeria"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇦🇸"
  , "description": "American Samoa"
  , "category": "Flags"
  , "aliases": [
      "american_samoa"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇦🇩"
  , "description": "Andorra"
  , "category": "Flags"
  , "aliases": [
      "andorra"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇦🇴"
  , "description": "Angola"
  , "category": "Flags"
  , "aliases": [
      "angola"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇦🇮"
  , "description": "Anguilla"
  , "category": "Flags"
  , "aliases": [
      "anguilla"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇦🇶"
  , "description": "Antarctica"
  , "category": "Flags"
  , "aliases": [
      "antarctica"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇦🇬"
  , "description": "Antigua & Barbuda"
  , "category": "Flags"
  , "aliases": [
      "antigua_barbuda"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇦🇷"
  , "description": "Argentina"
  , "category": "Flags"
  , "aliases": [
      "argentina"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇦🇲"
  , "description": "Armenia"
  , "category": "Flags"
  , "aliases": [
      "armenia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇦🇼"
  , "description": "Aruba"
  , "category": "Flags"
  , "aliases": [
      "aruba"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇦🇺"
  , "description": "Australia"
  , "category": "Flags"
  , "aliases": [
      "australia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇦🇹"
  , "description": "Austria"
  , "category": "Flags"
  , "aliases": [
      "austria"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇦🇿"
  , "description": "Azerbaijan"
  , "category": "Flags"
  , "aliases": [
      "azerbaijan"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇧🇸"
  , "description": "Bahamas"
  , "category": "Flags"
  , "aliases": [
      "bahamas"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇧🇭"
  , "description": "Bahrain"
  , "category": "Flags"
  , "aliases": [
      "bahrain"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇧🇩"
  , "description": "Bangladesh"
  , "category": "Flags"
  , "aliases": [
      "bangladesh"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇧🇧"
  , "description": "Barbados"
  , "category": "Flags"
  , "aliases": [
      "barbados"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇧🇾"
  , "description": "Belarus"
  , "category": "Flags"
  , "aliases": [
      "belarus"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇧🇪"
  , "description": "Belgium"
  , "category": "Flags"
  , "aliases": [
      "belgium"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇧🇿"
  , "description": "Belize"
  , "category": "Flags"
  , "aliases": [
      "belize"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇧🇯"
  , "description": "Benin"
  , "category": "Flags"
  , "aliases": [
      "benin"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇧🇲"
  , "description": "Bermuda"
  , "category": "Flags"
  , "aliases": [
      "bermuda"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇧🇹"
  , "description": "Bhutan"
  , "category": "Flags"
  , "aliases": [
      "bhutan"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇧🇴"
  , "description": "Bolivia"
  , "category": "Flags"
  , "aliases": [
      "bolivia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇧🇶"
  , "description": "Caribbean Netherlands"
  , "category": "Flags"
  , "aliases": [
      "caribbean_netherlands"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇧🇦"
  , "description": "Bosnia & Herzegovina"
  , "category": "Flags"
  , "aliases": [
      "bosnia_herzegovina"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇧🇼"
  , "description": "Botswana"
  , "category": "Flags"
  , "aliases": [
      "botswana"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇧🇷"
  , "description": "Brazil"
  , "category": "Flags"
  , "aliases": [
      "brazil"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇮🇴"
  , "description": "British Indian Ocean Territory"
  , "category": "Flags"
  , "aliases": [
      "british_indian_ocean_territory"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇻🇬"
  , "description": "British Virgin Islands"
  , "category": "Flags"
  , "aliases": [
      "british_virgin_islands"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇧🇳"
  , "description": "Brunei"
  , "category": "Flags"
  , "aliases": [
      "brunei"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇧🇬"
  , "description": "Bulgaria"
  , "category": "Flags"
  , "aliases": [
      "bulgaria"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇧🇫"
  , "description": "Burkina Faso"
  , "category": "Flags"
  , "aliases": [
      "burkina_faso"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇧🇮"
  , "description": "Burundi"
  , "category": "Flags"
  , "aliases": [
      "burundi"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇨🇻"
  , "description": "Cape Verde"
  , "category": "Flags"
  , "aliases": [
      "cape_verde"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇰🇭"
  , "description": "Cambodia"
  , "category": "Flags"
  , "aliases": [
      "cambodia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇨🇲"
  , "description": "Cameroon"
  , "category": "Flags"
  , "aliases": [
      "cameroon"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇨🇦"
  , "description": "Canada"
  , "category": "Flags"
  , "aliases": [
      "canada"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇮🇨"
  , "description": "Canary Islands"
  , "category": "Flags"
  , "aliases": [
      "canary_islands"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇰🇾"
  , "description": "Cayman Islands"
  , "category": "Flags"
  , "aliases": [
      "cayman_islands"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇨🇫"
  , "description": "Central African Republic"
  , "category": "Flags"
  , "aliases": [
      "central_african_republic"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇹🇩"
  , "description": "Chad"
  , "category": "Flags"
  , "aliases": [
      "chad"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇨🇱"
  , "description": "Chile"
  , "category": "Flags"
  , "aliases": [
      "chile"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇨🇳"
  , "description": "China"
  , "category": "Flags"
  , "aliases": [
      "cn"
    ]
  , "tags": [
      "china"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🇨🇽"
  , "description": "Christmas Island"
  , "category": "Flags"
  , "aliases": [
      "christmas_island"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇨🇨"
  , "description": "Cocos (Keeling) Islands"
  , "category": "Flags"
  , "aliases": [
      "cocos_islands"
    ]
  , "tags": [
      "keeling"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇨🇴"
  , "description": "Colombia"
  , "category": "Flags"
  , "aliases": [
      "colombia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇰🇲"
  , "description": "Comoros"
  , "category": "Flags"
  , "aliases": [
      "comoros"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇨🇬"
  , "description": "Congo - Brazzaville"
  , "category": "Flags"
  , "aliases": [
      "congo_brazzaville"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇨🇩"
  , "description": "Congo - Kinshasa"
  , "category": "Flags"
  , "aliases": [
      "congo_kinshasa"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇨🇰"
  , "description": "Cook Islands"
  , "category": "Flags"
  , "aliases": [
      "cook_islands"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇨🇷"
  , "description": "Costa Rica"
  , "category": "Flags"
  , "aliases": [
      "costa_rica"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇭🇷"
  , "description": "Croatia"
  , "category": "Flags"
  , "aliases": [
      "croatia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇨🇺"
  , "description": "Cuba"
  , "category": "Flags"
  , "aliases": [
      "cuba"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇨🇼"
  , "description": "Curaçao"
  , "category": "Flags"
  , "aliases": [
      "curacao"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇨🇾"
  , "description": "Cyprus"
  , "category": "Flags"
  , "aliases": [
      "cyprus"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇨🇿"
  , "description": "Czech Republic"
  , "category": "Flags"
  , "aliases": [
      "czech_republic"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇩🇰"
  , "description": "Denmark"
  , "category": "Flags"
  , "aliases": [
      "denmark"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇩🇯"
  , "description": "Djibouti"
  , "category": "Flags"
  , "aliases": [
      "djibouti"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇩🇲"
  , "description": "Dominica"
  , "category": "Flags"
  , "aliases": [
      "dominica"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇩🇴"
  , "description": "Dominican Republic"
  , "category": "Flags"
  , "aliases": [
      "dominican_republic"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇪🇨"
  , "description": "Ecuador"
  , "category": "Flags"
  , "aliases": [
      "ecuador"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇪🇬"
  , "description": "Egypt"
  , "category": "Flags"
  , "aliases": [
      "egypt"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇸🇻"
  , "description": "El Salvador"
  , "category": "Flags"
  , "aliases": [
      "el_salvador"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇬🇶"
  , "description": "Equatorial Guinea"
  , "category": "Flags"
  , "aliases": [
      "equatorial_guinea"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇪🇷"
  , "description": "Eritrea"
  , "category": "Flags"
  , "aliases": [
      "eritrea"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇪🇪"
  , "description": "Estonia"
  , "category": "Flags"
  , "aliases": [
      "estonia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇪🇹"
  , "description": "Ethiopia"
  , "category": "Flags"
  , "aliases": [
      "ethiopia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇪🇺"
  , "description": "European Union"
  , "category": "Flags"
  , "aliases": [
      "eu"
    , "european_union"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇫🇰"
  , "description": "Falkland Islands"
  , "category": "Flags"
  , "aliases": [
      "falkland_islands"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇫🇴"
  , "description": "Faroe Islands"
  , "category": "Flags"
  , "aliases": [
      "faroe_islands"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇫🇯"
  , "description": "Fiji"
  , "category": "Flags"
  , "aliases": [
      "fiji"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇫🇮"
  , "description": "Finland"
  , "category": "Flags"
  , "aliases": [
      "finland"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇫🇷"
  , "description": "France"
  , "category": "Flags"
  , "aliases": [
      "fr"
    ]
  , "tags": [
      "france"
    , "french"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🇬🇫"
  , "description": "French Guiana"
  , "category": "Flags"
  , "aliases": [
      "french_guiana"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇵🇫"
  , "description": "French Polynesia"
  , "category": "Flags"
  , "aliases": [
      "french_polynesia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇹🇫"
  , "description": "French Southern Territories"
  , "category": "Flags"
  , "aliases": [
      "french_southern_territories"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇬🇦"
  , "description": "Gabon"
  , "category": "Flags"
  , "aliases": [
      "gabon"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇬🇲"
  , "description": "Gambia"
  , "category": "Flags"
  , "aliases": [
      "gambia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇬🇪"
  , "description": "Georgia"
  , "category": "Flags"
  , "aliases": [
      "georgia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇩🇪"
  , "description": "Germany"
  , "category": "Flags"
  , "aliases": [
      "de"
    ]
  , "tags": [
      "flag"
    , "germany"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🇬🇭"
  , "description": "Ghana"
  , "category": "Flags"
  , "aliases": [
      "ghana"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇬🇮"
  , "description": "Gibraltar"
  , "category": "Flags"
  , "aliases": [
      "gibraltar"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇬🇷"
  , "description": "Greece"
  , "category": "Flags"
  , "aliases": [
      "greece"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇬🇱"
  , "description": "Greenland"
  , "category": "Flags"
  , "aliases": [
      "greenland"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇬🇩"
  , "description": "Grenada"
  , "category": "Flags"
  , "aliases": [
      "grenada"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇬🇵"
  , "description": "Guadeloupe"
  , "category": "Flags"
  , "aliases": [
      "guadeloupe"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇬🇺"
  , "description": "Guam"
  , "category": "Flags"
  , "aliases": [
      "guam"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇬🇹"
  , "description": "Guatemala"
  , "category": "Flags"
  , "aliases": [
      "guatemala"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇬🇬"
  , "description": "Guernsey"
  , "category": "Flags"
  , "aliases": [
      "guernsey"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇬🇳"
  , "description": "Guinea"
  , "category": "Flags"
  , "aliases": [
      "guinea"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇬🇼"
  , "description": "Guinea-Bissau"
  , "category": "Flags"
  , "aliases": [
      "guinea_bissau"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇬🇾"
  , "description": "Guyana"
  , "category": "Flags"
  , "aliases": [
      "guyana"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇭🇹"
  , "description": "Haiti"
  , "category": "Flags"
  , "aliases": [
      "haiti"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇭🇳"
  , "description": "Honduras"
  , "category": "Flags"
  , "aliases": [
      "honduras"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇭🇰"
  , "description": "Hong Kong SAR China"
  , "category": "Flags"
  , "aliases": [
      "hong_kong"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇭🇺"
  , "description": "Hungary"
  , "category": "Flags"
  , "aliases": [
      "hungary"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇮🇸"
  , "description": "Iceland"
  , "category": "Flags"
  , "aliases": [
      "iceland"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇮🇳"
  , "description": "India"
  , "category": "Flags"
  , "aliases": [
      "india"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇮🇩"
  , "description": "Indonesia"
  , "category": "Flags"
  , "aliases": [
      "indonesia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇮🇷"
  , "description": "Iran"
  , "category": "Flags"
  , "aliases": [
      "iran"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇮🇶"
  , "description": "Iraq"
  , "category": "Flags"
  , "aliases": [
      "iraq"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇮🇪"
  , "description": "Ireland"
  , "category": "Flags"
  , "aliases": [
      "ireland"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇮🇲"
  , "description": "Isle of Man"
  , "category": "Flags"
  , "aliases": [
      "isle_of_man"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇮🇱"
  , "description": "Israel"
  , "category": "Flags"
  , "aliases": [
      "israel"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇮🇹"
  , "description": "Italy"
  , "category": "Flags"
  , "aliases": [
      "it"
    ]
  , "tags": [
      "italy"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🇨🇮"
  , "description": "Côte d’Ivoire"
  , "category": "Flags"
  , "aliases": [
      "cote_divoire"
    ]
  , "tags": [
      "ivory"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇯🇲"
  , "description": "Jamaica"
  , "category": "Flags"
  , "aliases": [
      "jamaica"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇯🇵"
  , "description": "Japan"
  , "category": "Flags"
  , "aliases": [
      "jp"
    ]
  , "tags": [
      "japan"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🇯🇪"
  , "description": "Jersey"
  , "category": "Flags"
  , "aliases": [
      "jersey"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇯🇴"
  , "description": "Jordan"
  , "category": "Flags"
  , "aliases": [
      "jordan"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇰🇿"
  , "description": "Kazakhstan"
  , "category": "Flags"
  , "aliases": [
      "kazakhstan"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇰🇪"
  , "description": "Kenya"
  , "category": "Flags"
  , "aliases": [
      "kenya"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇰🇮"
  , "description": "Kiribati"
  , "category": "Flags"
  , "aliases": [
      "kiribati"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇽🇰"
  , "description": "Kosovo"
  , "category": "Flags"
  , "aliases": [
      "kosovo"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇰🇼"
  , "description": "Kuwait"
  , "category": "Flags"
  , "aliases": [
      "kuwait"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇰🇬"
  , "description": "Kyrgyzstan"
  , "category": "Flags"
  , "aliases": [
      "kyrgyzstan"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇱🇦"
  , "description": "Laos"
  , "category": "Flags"
  , "aliases": [
      "laos"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇱🇻"
  , "description": "Latvia"
  , "category": "Flags"
  , "aliases": [
      "latvia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇱🇧"
  , "description": "Lebanon"
  , "category": "Flags"
  , "aliases": [
      "lebanon"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇱🇸"
  , "description": "Lesotho"
  , "category": "Flags"
  , "aliases": [
      "lesotho"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇱🇷"
  , "description": "Liberia"
  , "category": "Flags"
  , "aliases": [
      "liberia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇱🇾"
  , "description": "Libya"
  , "category": "Flags"
  , "aliases": [
      "libya"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇱🇮"
  , "description": "Liechtenstein"
  , "category": "Flags"
  , "aliases": [
      "liechtenstein"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇱🇹"
  , "description": "Lithuania"
  , "category": "Flags"
  , "aliases": [
      "lithuania"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇱🇺"
  , "description": "Luxembourg"
  , "category": "Flags"
  , "aliases": [
      "luxembourg"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇲🇴"
  , "description": "Macau SAR China"
  , "category": "Flags"
  , "aliases": [
      "macau"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇲🇰"
  , "description": "Macedonia"
  , "category": "Flags"
  , "aliases": [
      "macedonia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇲🇬"
  , "description": "Madagascar"
  , "category": "Flags"
  , "aliases": [
      "madagascar"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇲🇼"
  , "description": "Malawi"
  , "category": "Flags"
  , "aliases": [
      "malawi"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇲🇾"
  , "description": "Malaysia"
  , "category": "Flags"
  , "aliases": [
      "malaysia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇲🇻"
  , "description": "Maldives"
  , "category": "Flags"
  , "aliases": [
      "maldives"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇲🇱"
  , "description": "Mali"
  , "category": "Flags"
  , "aliases": [
      "mali"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇲🇹"
  , "description": "Malta"
  , "category": "Flags"
  , "aliases": [
      "malta"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇲🇭"
  , "description": "Marshall Islands"
  , "category": "Flags"
  , "aliases": [
      "marshall_islands"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇲🇶"
  , "description": "Martinique"
  , "category": "Flags"
  , "aliases": [
      "martinique"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇲🇷"
  , "description": "Mauritania"
  , "category": "Flags"
  , "aliases": [
      "mauritania"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇲🇺"
  , "description": "Mauritius"
  , "category": "Flags"
  , "aliases": [
      "mauritius"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇾🇹"
  , "description": "Mayotte"
  , "category": "Flags"
  , "aliases": [
      "mayotte"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇲🇽"
  , "description": "Mexico"
  , "category": "Flags"
  , "aliases": [
      "mexico"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇫🇲"
  , "description": "Micronesia"
  , "category": "Flags"
  , "aliases": [
      "micronesia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇲🇩"
  , "description": "Moldova"
  , "category": "Flags"
  , "aliases": [
      "moldova"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇲🇨"
  , "description": "Monaco"
  , "category": "Flags"
  , "aliases": [
      "monaco"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇲🇳"
  , "description": "Mongolia"
  , "category": "Flags"
  , "aliases": [
      "mongolia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇲🇪"
  , "description": "Montenegro"
  , "category": "Flags"
  , "aliases": [
      "montenegro"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇲🇸"
  , "description": "Montserrat"
  , "category": "Flags"
  , "aliases": [
      "montserrat"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇲🇦"
  , "description": "Morocco"
  , "category": "Flags"
  , "aliases": [
      "morocco"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇲🇿"
  , "description": "Mozambique"
  , "category": "Flags"
  , "aliases": [
      "mozambique"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇲🇲"
  , "description": "Myanmar (Burma)"
  , "category": "Flags"
  , "aliases": [
      "myanmar"
    ]
  , "tags": [
      "burma"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇳🇦"
  , "description": "Namibia"
  , "category": "Flags"
  , "aliases": [
      "namibia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇳🇷"
  , "description": "Nauru"
  , "category": "Flags"
  , "aliases": [
      "nauru"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇳🇵"
  , "description": "Nepal"
  , "category": "Flags"
  , "aliases": [
      "nepal"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇳🇱"
  , "description": "Netherlands"
  , "category": "Flags"
  , "aliases": [
      "netherlands"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇳🇨"
  , "description": "New Caledonia"
  , "category": "Flags"
  , "aliases": [
      "new_caledonia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇳🇿"
  , "description": "New Zealand"
  , "category": "Flags"
  , "aliases": [
      "new_zealand"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇳🇮"
  , "description": "Nicaragua"
  , "category": "Flags"
  , "aliases": [
      "nicaragua"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇳🇪"
  , "description": "Niger"
  , "category": "Flags"
  , "aliases": [
      "niger"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇳🇬"
  , "description": "Nigeria"
  , "category": "Flags"
  , "aliases": [
      "nigeria"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇳🇺"
  , "description": "Niue"
  , "category": "Flags"
  , "aliases": [
      "niue"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇳🇫"
  , "description": "Norfolk Island"
  , "category": "Flags"
  , "aliases": [
      "norfolk_island"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇲🇵"
  , "description": "Northern Mariana Islands"
  , "category": "Flags"
  , "aliases": [
      "northern_mariana_islands"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇰🇵"
  , "description": "North Korea"
  , "category": "Flags"
  , "aliases": [
      "north_korea"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇳🇴"
  , "description": "Norway"
  , "category": "Flags"
  , "aliases": [
      "norway"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇴🇲"
  , "description": "Oman"
  , "category": "Flags"
  , "aliases": [
      "oman"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇵🇰"
  , "description": "Pakistan"
  , "category": "Flags"
  , "aliases": [
      "pakistan"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇵🇼"
  , "description": "Palau"
  , "category": "Flags"
  , "aliases": [
      "palau"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇵🇸"
  , "description": "Palestinian Territories"
  , "category": "Flags"
  , "aliases": [
      "palestinian_territories"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇵🇦"
  , "description": "Panama"
  , "category": "Flags"
  , "aliases": [
      "panama"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇵🇬"
  , "description": "Papua New Guinea"
  , "category": "Flags"
  , "aliases": [
      "papua_new_guinea"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇵🇾"
  , "description": "Paraguay"
  , "category": "Flags"
  , "aliases": [
      "paraguay"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇵🇪"
  , "description": "Peru"
  , "category": "Flags"
  , "aliases": [
      "peru"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇵🇭"
  , "description": "Philippines"
  , "category": "Flags"
  , "aliases": [
      "philippines"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇵🇳"
  , "description": "Pitcairn Islands"
  , "category": "Flags"
  , "aliases": [
      "pitcairn_islands"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇵🇱"
  , "description": "Poland"
  , "category": "Flags"
  , "aliases": [
      "poland"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇵🇹"
  , "description": "Portugal"
  , "category": "Flags"
  , "aliases": [
      "portugal"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇵🇷"
  , "description": "Puerto Rico"
  , "category": "Flags"
  , "aliases": [
      "puerto_rico"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇶🇦"
  , "description": "Qatar"
  , "category": "Flags"
  , "aliases": [
      "qatar"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇷🇪"
  , "description": "Réunion"
  , "category": "Flags"
  , "aliases": [
      "reunion"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇷🇴"
  , "description": "Romania"
  , "category": "Flags"
  , "aliases": [
      "romania"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇷🇺"
  , "description": "Russia"
  , "category": "Flags"
  , "aliases": [
      "ru"
    ]
  , "tags": [
      "russia"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🇷🇼"
  , "description": "Rwanda"
  , "category": "Flags"
  , "aliases": [
      "rwanda"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇧🇱"
  , "description": "St. Barthélemy"
  , "category": "Flags"
  , "aliases": [
      "st_barthelemy"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇸🇭"
  , "description": "St. Helena"
  , "category": "Flags"
  , "aliases": [
      "st_helena"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇰🇳"
  , "description": "St. Kitts & Nevis"
  , "category": "Flags"
  , "aliases": [
      "st_kitts_nevis"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇱🇨"
  , "description": "St. Lucia"
  , "category": "Flags"
  , "aliases": [
      "st_lucia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇵🇲"
  , "description": "St. Pierre & Miquelon"
  , "category": "Flags"
  , "aliases": [
      "st_pierre_miquelon"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇻🇨"
  , "description": "St. Vincent & Grenadines"
  , "category": "Flags"
  , "aliases": [
      "st_vincent_grenadines"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇼🇸"
  , "description": "Samoa"
  , "category": "Flags"
  , "aliases": [
      "samoa"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇸🇲"
  , "description": "San Marino"
  , "category": "Flags"
  , "aliases": [
      "san_marino"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇸🇹"
  , "description": "São Tomé & Príncipe"
  , "category": "Flags"
  , "aliases": [
      "sao_tome_principe"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇸🇦"
  , "description": "Saudi Arabia"
  , "category": "Flags"
  , "aliases": [
      "saudi_arabia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇸🇳"
  , "description": "Senegal"
  , "category": "Flags"
  , "aliases": [
      "senegal"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇷🇸"
  , "description": "Serbia"
  , "category": "Flags"
  , "aliases": [
      "serbia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇸🇨"
  , "description": "Seychelles"
  , "category": "Flags"
  , "aliases": [
      "seychelles"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇸🇱"
  , "description": "Sierra Leone"
  , "category": "Flags"
  , "aliases": [
      "sierra_leone"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇸🇬"
  , "description": "Singapore"
  , "category": "Flags"
  , "aliases": [
      "singapore"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇸🇽"
  , "description": "Sint Maarten"
  , "category": "Flags"
  , "aliases": [
      "sint_maarten"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇸🇰"
  , "description": "Slovakia"
  , "category": "Flags"
  , "aliases": [
      "slovakia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇸🇮"
  , "description": "Slovenia"
  , "category": "Flags"
  , "aliases": [
      "slovenia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇸🇧"
  , "description": "Solomon Islands"
  , "category": "Flags"
  , "aliases": [
      "solomon_islands"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇸🇴"
  , "description": "Somalia"
  , "category": "Flags"
  , "aliases": [
      "somalia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇿🇦"
  , "description": "South Africa"
  , "category": "Flags"
  , "aliases": [
      "south_africa"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇬🇸"
  , "description": "South Georgia & South Sandwich Islands"
  , "category": "Flags"
  , "aliases": [
      "south_georgia_south_sandwich_islands"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇰🇷"
  , "description": "South Korea"
  , "category": "Flags"
  , "aliases": [
      "kr"
    ]
  , "tags": [
      "korea"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🇸🇸"
  , "description": "South Sudan"
  , "category": "Flags"
  , "aliases": [
      "south_sudan"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇪🇸"
  , "description": "Spain"
  , "category": "Flags"
  , "aliases": [
      "es"
    ]
  , "tags": [
      "spain"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🇱🇰"
  , "description": "Sri Lanka"
  , "category": "Flags"
  , "aliases": [
      "sri_lanka"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇸🇩"
  , "description": "Sudan"
  , "category": "Flags"
  , "aliases": [
      "sudan"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇸🇷"
  , "description": "Suriname"
  , "category": "Flags"
  , "aliases": [
      "suriname"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇸🇿"
  , "description": "Swaziland"
  , "category": "Flags"
  , "aliases": [
      "swaziland"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇸🇪"
  , "description": "Sweden"
  , "category": "Flags"
  , "aliases": [
      "sweden"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇨🇭"
  , "description": "Switzerland"
  , "category": "Flags"
  , "aliases": [
      "switzerland"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇸🇾"
  , "description": "Syria"
  , "category": "Flags"
  , "aliases": [
      "syria"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇹🇼"
  , "description": "Taiwan"
  , "category": "Flags"
  , "aliases": [
      "taiwan"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇹🇯"
  , "description": "Tajikistan"
  , "category": "Flags"
  , "aliases": [
      "tajikistan"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇹🇿"
  , "description": "Tanzania"
  , "category": "Flags"
  , "aliases": [
      "tanzania"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇹🇭"
  , "description": "Thailand"
  , "category": "Flags"
  , "aliases": [
      "thailand"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇹🇱"
  , "description": "Timor-Leste"
  , "category": "Flags"
  , "aliases": [
      "timor_leste"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇹🇬"
  , "description": "Togo"
  , "category": "Flags"
  , "aliases": [
      "togo"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇹🇰"
  , "description": "Tokelau"
  , "category": "Flags"
  , "aliases": [
      "tokelau"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇹🇴"
  , "description": "Tonga"
  , "category": "Flags"
  , "aliases": [
      "tonga"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇹🇹"
  , "description": "Trinidad & Tobago"
  , "category": "Flags"
  , "aliases": [
      "trinidad_tobago"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇹🇳"
  , "description": "Tunisia"
  , "category": "Flags"
  , "aliases": [
      "tunisia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇹🇷"
  , "description": "Turkey"
  , "category": "Flags"
  , "aliases": [
      "tr"
    ]
  , "tags": [
      "turkey"
    ]
  , "unicode_version": "8.0"
  , "ios_version": "9.1"
  }
, {
    "emoji": "🇹🇲"
  , "description": "Turkmenistan"
  , "category": "Flags"
  , "aliases": [
      "turkmenistan"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇹🇨"
  , "description": "Turks & Caicos Islands"
  , "category": "Flags"
  , "aliases": [
      "turks_caicos_islands"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇹🇻"
  , "description": "Tuvalu"
  , "category": "Flags"
  , "aliases": [
      "tuvalu"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇺🇬"
  , "description": "Uganda"
  , "category": "Flags"
  , "aliases": [
      "uganda"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇺🇦"
  , "description": "Ukraine"
  , "category": "Flags"
  , "aliases": [
      "ukraine"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇦🇪"
  , "description": "United Arab Emirates"
  , "category": "Flags"
  , "aliases": [
      "united_arab_emirates"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇬🇧"
  , "description": "United Kingdom"
  , "category": "Flags"
  , "aliases": [
      "gb"
    , "uk"
    ]
  , "tags": [
      "flag"
    , "british"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🇺🇸"
  , "description": "United States"
  , "category": "Flags"
  , "aliases": [
      "us"
    ]
  , "tags": [
      "flag"
    , "united"
    , "america"
    ]
  , "unicode_version": "6.0"
  , "ios_version": "6.0"
  }
, {
    "emoji": "🇻🇮"
  , "description": "U.S. Virgin Islands"
  , "category": "Flags"
  , "aliases": [
      "us_virgin_islands"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇺🇾"
  , "description": "Uruguay"
  , "category": "Flags"
  , "aliases": [
      "uruguay"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇺🇿"
  , "description": "Uzbekistan"
  , "category": "Flags"
  , "aliases": [
      "uzbekistan"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇻🇺"
  , "description": "Vanuatu"
  , "category": "Flags"
  , "aliases": [
      "vanuatu"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇻🇦"
  , "description": "Vatican City"
  , "category": "Flags"
  , "aliases": [
      "vatican_city"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇻🇪"
  , "description": "Venezuela"
  , "category": "Flags"
  , "aliases": [
      "venezuela"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇻🇳"
  , "description": "Vietnam"
  , "category": "Flags"
  , "aliases": [
      "vietnam"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇼🇫"
  , "description": "Wallis & Futuna"
  , "category": "Flags"
  , "aliases": [
      "wallis_futuna"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇪🇭"
  , "description": "Western Sahara"
  , "category": "Flags"
  , "aliases": [
      "western_sahara"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "9.0"
  }
, {
    "emoji": "🇾🇪"
  , "description": "Yemen"
  , "category": "Flags"
  , "aliases": [
      "yemen"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇿🇲"
  , "description": "Zambia"
  , "category": "Flags"
  , "aliases": [
      "zambia"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
, {
    "emoji": "🇿🇼"
  , "description": "Zimbabwe"
  , "category": "Flags"
  , "aliases": [
      "zimbabwe"
    ]
  , "tags": [
    ]
  , "unicode_version": "6.0"
  , "ios_version": "8.3"
  }
]