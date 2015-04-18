var postexample = [
    {
        "_id": 12345,
        "userid": 101,
        "username": "Jeremy",
        "date": "January 1st, 2015, 12:00 AM",
        "title": "hipster stuff",
        "text": "3 wolf moon banh mi Bushwick mlkshk Wes Anderson. Cronut mumblecore flexitarian pug readymade banh mi. Wes Anderson Neutra Austin health goth twee four dollar toast normcore. Pour-over salvia seitan iPhone Schlitz, vegan before they sold out stumptown. Shabby chic direct trade Echo Park, Odd Future Helvetica Truffaut mlkshk mixtape listicle vegan meditation craft beer tattooed cardigan banh mi. Cred Neutra drinking vinegar, lomo trust fund locavore fap cardigan tattooed next level High Life freegan wolf direct trade. Banksy blog kitsch, mustache flannel American Apparel VHS put a bird on it Intelligentsia dreamcatcher cardigan.",
        "comments": [
            {
                "_id": 1111,
                "userid": 101,
                "username": "Jeremy",
                "date": "January 1st, 2015, 12:00 AM",
                "text": "first post!"
            },
            {
                "_id": 2222,
                "userid": 101,
                "username": "Jeremy",
                "date": "January 1st, 2015, 12:00 AM",
                "text": "second!"
            },
            {
                "_id": 3333,
                "userid": 101,
                "username": "Jeremy",
                "date": "January 1st, 2015, 12:00 AM",
                "text": "rekt"
            }
        ]
    },
    {
        "_id": 23456,
        "userid": 101,
        "username": "Jeremy",
        "date": "January 1st, 2015, 12:00 AM",
        "title": "hipster stuff",
        "text": "Four dollar toast XOXO heirloom aesthetic, mlkshk 3 wolf moon PBR&B jean shorts iPhone roof party tofu gluten-free cray banjo. Ugh ethical mumblecore, single-origin coffee before they sold out Marfa Helvetica cliche Etsy irony Austin direct trade drinking vinegar gluten-free. Gentrify High Life drinking vinegar keffiyeh, mumblecore biodiesel Echo Park street art letterpress meggings wolf organic photo booth Bushwick. Chillwave four dollar toast direct trade, banjo ennui lumbersexual single-origin coffee tattooed Wes Anderson cred Neutra taxidermy Marfa bespoke. Retro jean shorts actually direct trade selfies, salvia Kickstarter brunch migas leggings keytar messenger bag gentrify cred. +1 keytar High Life pickled Schlitz keffiyeh. Taxidermy shabby chic brunch tilde.",
        "comments": []
    },
    {
        "_id": 34567,
        "userid": 101,
        "username": "Jeremy",
        "date": "January 1st, 2015, 12:00 AM",
        "title": "hipster stuff",
        "text": "Flannel ugh beard migas heirloom chambray, listicle raw denim. Authentic sriracha Tumblr direct trade pork belly, mlkshk salvia distillery. Bushwick fingerstache PBR&B, pork belly High Life cray twee disrupt retro yr. Squid meh leggings normcore wayfarers messenger bag. Shabby chic trust fund swag, readymade ugh 3 wolf moon Neutra distillery organic lomo drinking vinegar chambray. Fingerstache cold-pressed leggings tilde slow-carb. Locavore street art shabby chic Truffaut beard asymmetrical kitsch.",
        "comments": [
            {
                "_id": 4444,
                "userid": 101,
                "username": "Jeremy",
                "date": "January 1st, 2015, 12:00 AM",
                "text": "first post!"
            },
            {
                "_id": 5555,
                "userid": 101,
                "username": "Jeremy",
                "date": "January 1st, 2015, 12:00 AM",
                "text": "second!"
            }
        ]
    },
    {
        "_id": 45678,
        "userid": 101,
        "username": "Jeremy",
        "date": "January 1st, 2015, 12:00 AM",
        "title": "hipster stuff",
        "text": "Synth McSweeney's occupy, lo-fi actually PBR&B mlkshk quinoa cold-pressed. Church-key 90's four loko, Bushwick master cleanse fixie Vice ennui scenester drinking vinegar. McSweeney's selvage Thundercats biodiesel ugh, paleo hashtag literally. Umami listicle mumblecore taxidermy pop-up ugh. Authentic trust fund blog, semiotics migas shabby chic scenester hoodie. Tousled polaroid retro dreamcatcher organic jean shorts. Roof party single-origin coffee vegan Intelligentsia DIY drinking vinegar.",
        "comments": []
    }
];

var users = [
    {
        "_id": 101,
        "username": "Jeremy",
        "password": "12345",
        "profile": {
            "firstname": "Jeremy",
            "lastname": "Robson",
            "e-mail": "jeremy.robson@gmail.com"
        }
    }
];

var composers = [
    {
        "_id": 34864 ,
        "name": "Gustav Mahler",
        "birthdate": "7 July 1860",
        "birthplace": "Kalischt, Bohemia",
        "biography": "Pour-over retro deep v, forage +1 pork belly Brooklyn lomo put a bird on it pickled. Ugh drinking vinegar XOXO, cray cred beard readymade swag iPhone McSweeney's. Raw denim iPhone swag organic deep v tattooed. Four dollar toast Kickstarter chia, 8-bit letterpress Wes Anderson fixie banh mi mlkshk synth cred. McSweeney's squid ethical artisan, four loko flannel actually seitan narwhal locavore American Apparel. Gentrify wayfarers irony, Tumblr health goth trust fund selvage whatever Intelligentsia VHS deep v art party disrupt wolf Williamsburg. Hoodie church-key flexitarian, tilde American Apparel freegan butcher distillery Marfa quinoa chillwave VHS. \n Semiotics wayfarers fingerstache, Tumblr banjo dreamcatcher pug shabby chic mlkshk migas food truck. Church-key VHS messenger bag, migas drinking vinegar twee Godard locavore keffiyeh asymmetrical yr +1 next level. Tote bag drinking vinegar health goth, migas typewriter ethical tousled pug. Chia next level mumblecore irony post-ironic, swag locavore food truck. Tattooed biodiesel cold-pressed authentic iPhone Tumblr PBR, squid farm-to-table dreamcatcher kale chips cornhole actually. Flannel letterpress Pitchfork, butcher PBR&B Helvetica Shoreditch tofu. Fingerstache freegan mlkshk flexitarian polaroid iPhone. \n Sriracha Brooklyn Schlitz PBR biodiesel organic. Food truck Pinterest fanny pack freegan, forage Portland synth salvia. Trust fund lomo asymmetrical narwhal you probably haven't heard of them tousled. Ennui narwhal XOXO, Schlitz meh cred Pinterest fingerstache chillwave VHS swag. Kale chips banjo vegan squid, readymade VHS occupy crucifix food truck hella. Kickstarter photo booth wolf selfies, Truffaut authentic leggings. Cornhole chia stumptown post-ironic, Bushwick Brooklyn YOLO leggings food truck fixie kogi. \nNeutra raw denim Echo Park gastropub Portland, cred 90's listicle. Messenger bag fap kogi, twee Etsy keffiyeh chambray. Ugh keytar bespoke salvia seitan PBR&B. Kickstarter Godard four dollar toast occupy Williamsburg butcher. Banh mi tofu stumptown PBR American Apparel meditation deep v farm-to-table, master cleanse hoodie occupy. XOXO lomo art party, lumbersexual quinoa raw denim irony squid Neutra biodiesel. Meh direct trade Carles fashion axe, health goth biodiesel pork belly bitters meggings Schlitz drinking vinegar authentic.",
        "tags": [
            "symphony",
            "lieder",
            "quintet",
            "unfinished"
        ],
        "works": [
            {
                "_id": 24542,
                "composerid": 34864,
                "title": "Symphony No. 5",
                "year": 1902,
                "key": "C-sharp minor",
                "movements": 5,
                "reviews": [
                    {
                        "userid": 4356,
                        "username": "bob",
                        "date": "January 1st, 2015",
                        "rating": 9.4,
                        "likes": [
                            {
                                "userid": 7338,
                                "username": "bill"
                            },
                            {
                                "userid": 8336,
                                "username": "harold"
                            },
                            {
                                "userid": 7534,
                                "username": "kumar"
                            }
                        ],
                        "title": "Yayyyy!",
                        "text": "Four dollar toast meggings heirloom, iPhone four loko listicle stumptown slow-carb health goth plaid typewriter. Marfa swag sartorial +1, letterpress 8-bit synth artisan Kickstarter cliche keytar stumptown next level Blue Bottle. Cold-pressed craft beer cliche brunch next level, literally Godard single-origin coffee twee put a bird on it occupy pickled locavore Vice Marfa. Hoodie slow-carb butcher shabby chic McSweeney's VHS. Forage banh mi bicycle rights cred fingerstache master cleanse. Biodiesel messenger bag stumptown squid flannel tofu. Cold-pressed seitan actually, street art ethical ugh authentic meh paleo pour-over VHS photo booth."
                    },
                    {
                        "userid": 4356,
                        "username": "frank",
                        "date": "January 1st, 2015",
                        "rating": 9.8,
                        "likes": [
                            {
                                "userid": 4735,
                                "username": "jim"
                            },
                            {
                                "userid": 3462,
                                "username": "tim"
                            }
                        ],
                        "title": "Hoorayyy!!",
                        "text": "Meditation sartorial biodiesel, bitters organic iPhone deep v literally photo booth plaid banjo butcher. Banh mi sustainable vinyl Godard fingerstache brunch mumblecore. Fanny pack cliche tote bag, meggings lo-fi typewriter disrupt pop-up swag ethical. Vinyl fap craft beer, farm-to-table art party skateboard lo-fi PBR brunch. Drinking vinegar whatever leggings, sriracha taxidermy pop-up raw denim readymade Blue Bottle four dollar toast banh mi umami McSweeney's. Pork belly scenester art party jean shorts. Locavore food truck synth ugh yr, trust fund Brooklyn polaroid mustache Austin scenester."
                    }
                ]
            }
        ]
    }
];

var works = [
    {
        "_id": 0,
        "composerid": 0,
        "title": "Symphony No. 5"
    }
];
