var fontList = ["Turret Road","Shadows Into Light","Satisfy","Saira Stencil One","Roboto Mono","Righteous","Permanent Marker","Pacifico","Mansalva","Ma Shan Zheng","Lobster","Liu Jian Mao Cao","Kaushan Script","Kalam","Indie Flower","Great Vibes","Courgette","Cormorant Garamond","Caveat","Amatic SC"];

var redWordList = ["Rose","Fire","Passion","Blood","Love","Hate","Anger","Power","Strength","Influence","Apple","Primal","Sun","Ruby","Happiness","Scarlet","Crimson","Raw","Primary","Bright","Sanguine","Confidence","Florid","Royal","Festive","Warmth","Inferno","Energize","Bold","Danger"]

var greenWordList = ["Tree","Leaf","Forest","Nature","Fresh","Sick","Verdant","Life","Earth","Envy","Luck","Compassion","Peace","Frolic","Happiness","Fertile","Safety","Proceed","Bright","Sanguine","Confidence","Floral","Optimistic","Festive","Mundane","Endurance","Abundance","Greed","Young","Inexperience","Fragile","Tangled","Naive","Simple","Callow","Trust","Serenity"]

var blueWordList = ["Cynical","Water","Sadness","Calm","Sky","Depression","Still","Tranquil","Deep","Mysterious","Sea","Sky","Freedom","Expansive","Remote","Aloof","Azure","Wise","Smart","Mechanical","Cold","Ice","Distant","Melancholy","Alone","Solitary","Deserted","Calculative","Bold","Conservative"]


var question = {
    greeting: [
        { Reply: "Are you doing well?", value: 1 },
        { Reply: "Have you eaten yet?", value: 1 },
        { Reply: "You alright man?", value: 1},
        { Reply: "You doing good?", value: 1 }
    ],
    belief: [
        { Reply: "Sometimes, I feel that lying is inevitable. Would you lie for a good cause?", value: 2 },
        { Reply: "Life sometimes feels... aimless... Still, do you want to live forever?", value: 1 },
        { Reply: "Would you still set out doing something, knowing you will fail?", value: 1},
        { Reply: "I sometimes feel ashamed, thinking I could be doing more for those suffering. Do you feel the same?", value: 1},
        { Reply: "Sometimes it feels like we have a lot of choices, but it still feel so restricted...", value: 1},
        { Reply: "Would you stand for your own believes, even if everyone opposes your idea?", value: 1},
    ],
    work: [
        { Reply: "There's so much to do... but so little time...", value: 2 },
        { Reply: "It's been tough at work recently...", value: 1 },
        { Reply: "Hey, work may be important, but don't overwork yourself", value: 1},
        { Reply: "Is there anyone at work that is bothering you?", value: 1},
        { Reply: "Maybe you should take a break...", value: 1},
        { Reply: "Are you doing what you love?", value: 1},
        { Reply: "Work feels monotonous... Don't you feel like doing something else?", value: 1},
    ],
    future: [
        { Reply: "I know, sometimes, you feel lost in life...", value: 2 },
        { Reply: "The future is so unpredictable... it scares me.", value: 1 },
        { Reply: "Are you hopeful about the future? Your future?", value: 1},
        { Reply: "I used to hate it when my parents shares their advice... but now... it's different.", value: 1},
        { Reply: "Don't you think that life used to be simpler?", value: 1},
    ],
    mental: [
        { Reply: "Recently it feels like there's no reason in getting out of bed...", value: 2 },
        { Reply: "It feels so hard to open up your feelings...", value: 1 },
        { Reply: "I'm afraid that people would judge me for who I am... Do you feel the same?", value: 1},
        { Reply: "Its not so easy to carry on...", value: 1},
        { Reply: "Life feels so difficult... but don't give up.", value: 1},
    ],
    feeling: [
        { Reply: "Do you have any lingering regrets?", value: 2 },
        { Reply: "Are you happy? With yourself now?", value: 1 },
        { Reply: "You aren't smiling as often nowadays...", value: 2},
        { Reply: "Recently I feel empty... Do you?", value: 2},
        { Reply: "Life's full of opportunity, don't you think?", value: 2 },
        { Reply: "You look great today!", value: 1 },
    ],
    interest: [
        { Reply: "Have you enjoyed yourself?", value: 2 },
        { Reply: "Do you have something you enjoy doing?", value: 1 },
        { Reply: "There's so little me time nowadays...", value: 1},
        { Reply: "Do you have anyone that shares the same interest as you?", value: 1},
        { Reply: "There's so little me time nowadays...", value: 1},
    ],
    dream: [
        { Reply: "Do you still continue dreaming?", value: 2 },
        { Reply: "Have you achieve your dreams?", value: 1 },
        { Reply: "Some days, I can't face myself in the mirror. Can you?", value: 1},
        { Reply: "How's you father doing?", value: 1},
    ],
    physical: [
        { Reply: "How's your family?", value: 2 },
        { Reply: "Have you visited your family?", value: 1 },
        { Reply: "How's you mother doing?", value: 1},
        { Reply: "How's you father doing?", value: 1},
    ],
    family: [
        { Reply: "How's your family?", value: 2 },
        { Reply: "Have you visited your family?", value: 1 },
        { Reply: "How's you mother doing?", value: 1},
        { Reply: "How's you father doing?", value: 1},
    ],
    lifestyle: [
        { Reply: "Do you feel chained? As if something is holding you back?", value: 2 },
        { Reply: "Have you visited your family?", value: 1 },
        { Reply: "How's you mother doing?", value: 1},
        { Reply: "How's you father doing?", value: 1},
    ],
    spiritual: [
        { Reply: "How's your family?", value: 2 },
        { Reply: "Have you visited your family?", value: 1 },
        { Reply: "How's you mother doing?", value: 1},
        { Reply: "How's you father doing?", value: 1},
    ],

}

var questionArr = ["feeling","work","family"] //Will be erased.
var questionBlue = ["belief","work","future","mental"]; //More stoic
var questionRed = ["feeling","interest","dream","physical"]; //More Personal
var questionGreen = ["family","lifestyle","spiritual"]; //More family

var yesArr = ["yea", "yes", "yup", "i guess", "somewhat", "mmhmm", "mhm", "totally","agreed", "ya"];
var noArr = ["nope","not really","i don't think so", "no", "nah","nae","no way","naw"];
var positiveArr = ["good","great","fantastic","not bad","not so bad"];


//Replies
var sympathyArr = ["Tell me about it.", "Yea... But I'll be here for you.", "I'm here."];
var reliefArr = ["That's good to hear!", "That's a relief...","I'm glad you're doing well.","Fantastic! I'm happy for you!","That's good."];
var concernArr = ["I hope you take care of yourself more...","Maybe you're busy... but it's important to take care of yourself.","That's too bad to hear...","I wish I could help somehow"];
var ambiguousArr = ["Uh...", "I see...", "Not sure if I get what you mean.","Ummm...","Okay...","Right..."]
var surpriseArr = ["Really? You don't think so?","Wow! I didn't expect you to disagree!","That answer was unexpected.","I thought you would've agreed!"];
var melancholyArr = ["But still, we must stay strong.","Time just flies like dust in the wind.","Tomorrow will always be a new day."]








//Assets and ending
var musicArr = ["assets/EnnoAareWaterRipples.mp3","assets/QuietResource.mp3","assets/KaineSalvationNieR.mp3","assets/SoulfulFlute.mp3"];

var blackEnd = ["Charismatic.\nIt takes other colors and changes them. It unites different colors by offering depth.","Influence.\nIt changes other colors, leaving its mark on others.","Mysterious.\nBlack is stoic and silent. Simple at first glance, but hides and infinite depth within its abyss."]

var redEnd = ["Bold.\nIt stands out amongst the crowd, the first to draw the attention of everyone.","Adrenaline.\nIt brings alertness, power, and a sense of danger.","Intensity.\nIt's the unrefined and raw energy that courses through everything"]

var blueEnd = ["Charismatic.\nIt takes other colors and changes them. It unites different colors by offering depth.","Influence.\nIt changes other colors, leaving its mark on others.","Mysterious.\nBlack is stoic and silent. Simple at first glance, but hides and infinite depth within its abyss."]

var greenEnd = ["Charismatic.\nIt takes other colors and changes them. It unites different colors by offering depth.","Influence.\nIt changes other colors, leaving its mark on others.","Mysterious.\nBlack is stoic and silent. Simple at first glance, but hides and infinite depth within its abyss."]

var yellowEnd = ["Charismatic.\nIt takes other colors and changes them. It unites different colors by offering depth.","Influence.\nIt changes other colors, leaving its mark on others.","Mysterious.\nBlack is stoic and silent. Simple at first glance, but hides and infinite depth within its abyss."]

var cyanEnd = ["Charismatic.\nIt takes other colors and changes them. It unites different colors by offering depth.","Influence.\nIt changes other colors, leaving its mark on others.","Mysterious.\nBlack is stoic and silent. Simple at first glance, but hides and infinite depth within its abyss."]

var fuchsiaEnd = ["Charismatic.\nIt takes other colors and changes them. It unites different colors by offering depth.","Influence.\nIt changes other colors, leaving its mark on others.","Mysterious.\nBlack is stoic and silent. Simple at first glance, but hides and infinite depth within its abyss."]

var whiteEnd = ["Charismatic.\nIt takes other colors and changes them. It unites different colors by offering depth.","Influence.\nIt changes other colors, leaving its mark on others.","Mysterious.\nBlack is stoic and silent. Simple at first glance, but hides and infinite depth within its abyss."]