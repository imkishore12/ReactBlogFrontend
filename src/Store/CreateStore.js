import React, { createContext, useState } from 'react';

export const store=createContext();
function CreateStore(props) {
    var count=1;
    let [Data,setData]=useState([{
        
        id:count++,
        category:"Bollywood",
        title:"Salaar Part 1 Ceasefire: Prithviraj Sukumaran stands tall in new poster from film unveiled on his birthday",
        imgurl:"https://www.hindustantimes.com/ht-img/img/2023/10/16/550x309/Prithviraj_Sukumaran_1697444458410_1697444496040.png",
        content:"Hombale Films, the producer of Salaar Part 1: Ceasefire, has unveiled a new poster of actor Prithviraj Sukumaran from the upcoming film. Taking to X (formerly known as Twitter) on Monday, Hombale Films released the poster on Prithviraj's 41st birthday. (Also Read | Prithviraj Sukumaran's first look from Salaar is his birthday treat for fans)",
    },{

        id:count++,
        category:"Bollywood",
        title:"Jawan Box Office Collection Day 36: Keeping Up With Shah Rukh Khan's Film",
        imgurl:"https://c.ndtvimg.com/2023-10/abfivb6g_shah-rukh-khan_625x300_13_October_23.jpg",
        content:"New Delhi: Shah Rukh Khan's Jawan, which is in its fifth week, did a business of ₹ 0.80 crore on day 36, Sacnilk reported. Jawan's total domestic collection now stands at ₹ 627.42 crore. The Atlee directorial is also the highest-grossing Hindi film in the history of cinema. It has (so far) minted ₹ 1117.39 crore worldwide. Shah Rukh Khan's Jawan is likely to witness a hike in box office numbers today (October 13), which also marks National Cinema Day.  On this special occasion, the tickets are available for ₹ 99.  The production house Red Chillies Entertainment, in a post on Instagram, announced that Jawan, the biggest blockbuster, will be available for ₹ 99 on National Cinema Day.",
    },{
        id:count++,
        category:"Bollywood",
        title:"All That Glitters Is Actually Kiara Advani",
        imgurl:"https://c.ndtvimg.com/2023-10/uterfun_priyanka-_625x300_15_October_23.jpg",
        content:"s there anything Kiara Advani can't do? We think not. From keeping us glued to the screens with her acting chops to the no-makeup looks, the actress does it all like a total pro. So, what's the latest? Kiara made heads turn at the Lakme Fashion Week. The actress turned muse for Falguni Shane Peacock. Kiara slipped into a tube cocktail dress. In the video, shared by the actress on Instagram, Kiara is seen ruling the ramp and how. Her stunning number featured heavy golden work makes it a must-pick for the festive season. She styled her hair in fancy braids and opted for bronze make-up. In one word – the look was iconic. ",
    },{
        id:count++,
        category:"Bollywood",
        title:"Singham Again First Look: Presenting Deepika Padukone As Cop Shakti Shetty",
        imgurl:"https://c.ndtvimg.com/2023-10/t1o3h0co_priyanka-_625x300_15_October_23.jpg",
        content:"New Delhi: Attention folks, the wait is finally over. Deepika Padukone just dropped the first look from upcoming Rohit Shetty directorial Singham Again and we must say it is such a treat to the eyes. On Sunday morning, the Pathaan star decided to surprise her fans with the first poster from her upcoming film Singham Again. In the poster, we can see Deeepika Padukone dressed in a police uniform while holding a gun in her hand. In the first picture, we can see see her holding a man (presumably a criminal) by hus hair and pointing a gun in his mouth. The second frame is a close up of the actress where we can see her flashing a wide smile. Deepika Padukone captioned the image, Introducing Shakti Shetty. Alia Bhatt reacted to the post with fire emojis. ",
    },{
        id:count++,
        category:"Bollywood",
        title:"The Rumours Are Untrue. Shah Rukh Khan's Dunki Will Still Clash With Prabhas' Salaar",
        imgurl:"https://c.ndtvimg.com/2023-10/d0nrin1_srk-_625x300_13_October_23.jpg",
        content:"We have good news for all Shah Rukh Khan fans. His much-awaited project Dunki, as per the original plan, will be released on Christmas, this year. Lately, it was rumoured that the release of Dunki is being pushed due to the delay in post-production timelines.” In an official statement, the makers said, “Everyone has been eagerly waiting for the release of Shah Rukh Khan's much-awaited Dunki. The film has been in talks ever since its announcement and with all the discussion around, comes along the wait of the audience for its release. While the rumours around Rajkumar Hirani's directorial release have been taking rounds, it is now been confirmed that there is no postponement in the release and the film will be released on Christmas 2023.” Dunki, directed by Rajkumar Hirani, also stars Taapsee Pannu and Vicky Kaushal. It will clash with Prashant Neel'sSalaar, headlined by Prabhas, at the box office.",
    },{
        id:count++,
        category:"Bollywood",
        title:"What To Expect From Tiger 3 Trailer: Salman Khan Spills The Beans",
        imgurl:"https://c.ndtvimg.com/2023-10/khfidie_salman-khan-_625x300_13_October_23.jpg",
        content:"Fans are eagerly waiting to see superstar Salman Khan as the spy Tiger in the upcoming action thriller film Tiger 3. Makers of the film are all set to unveil its official trailer on October 16. On Friday, actor Salman Khan took to his Instagram account and shared a new poster of the film. He wrote,'Tiger 3 Trailer. 16th October. 12 Noon. Mark kar lo calendar. #3DaysToTiger3Trailer'. Tiger 3 arriving in cinemas this Diwali. Releasing in Hindi, Tamil and Telugu. In the new poster, the Dabangg actor could be seen holding chains and with an intense look on his face.",
    },{
        id:count++,
        category:"Bollywood",
        title:"Sam Bahadur Poster: Vicky Kaushal's Eyes Do The Talking",
        imgurl:"https://c.ndtvimg.com/2023-10/lv2hs93_vicky-_625x300_12_October_23.jpg",
        content:" Ahead of the teaser release of historical drama Sam Bahadur, Vicky Kaushal treated his Instafam to two new posters from the film. Directed by Meghna Gulzar, the teaser of the film will be released on October 13. Sam Bahadur is based on the life of India's first field marshal, Sam Manekshaw. Vicky Kaushal, playing the titular role in the film, shared an image where he can be seen standing with his back to the camera. Dressed as his part, Vicky Kaushal can be seen holding a baton. The image has a caption written in Hindi over it. It says, 'Zindagi unki, Itihaas hamari (His life, our history)' Vicky Kaushal wrote in the caption, 'To a life well lived! #SamBahadur.' ",
    },{
        id:count++,
        category:"Bollywood",
        title:"Kartik Aaryan Breaks Down Chandu Champion's 'Single Shot War Scene' ",
        imgurl:"https://c.ndtvimg.com/2023-10/n55rlteg_kartik_625x300_12_October_23.jpg",
        content:" Kartik Aaryan is super busy with the shooting schedule of his upcoming film Chandu Champion in Jammu and Kashmir. The film, directed by  Kabir Khan, will be released on June 14, next year. Now, the actor has opened up about “the most challenging shot” of his career. It was an “8 minutes long single-shot war scene”. Kartik has also shared a still of his character from the war sequence on Instagram. In the pic, the actor, dressed in a uniform, is seen firing a machine gun. In the background, we can see soldiers in action. Kartik's facial expression is enough to explain the intensity of the scene. He said, “This 8 minutes long single-shot war scene turned out to be the most challenging, spectacular and yes, difficult but also the most memorable shot of my acting career. Thank you, Kabir Khan sir, for giving me a memory to cherish for a lifetime.” Kartik has also shared a still of his character from the war sequence on Instagram. ",
    },{
        id:count++,
        category:"Bollywood",
        title:"On Amitabh Bachchan's 81st Birthday, First Look Of Actor From Kalki 2898-AD",
        imgurl:"https://c.ndtvimg.com/2023-10/i0fl93go_alia-_625x300_11_October_23.jpg",
        content:"On Amitabh Bachchan's 81st birthday, the makers of Kalki 2898 - AD have unveiled the first-look poster of the megastar. It was shared by the production house, Vyjayanthi Movies, on Instagram. The poster features Big B in a never-seen-before avatar. From his face covered in layers of white cloth to the top bun, Amitabh Bachchan's character gives off a mysterious vibe. We can only see the actor's eyes as he stands inside what looks like a cave. The sunlight falling on Big B's head has added an extra edge to the pic. Sharing the poster, the production house wrote, “It's an honour to be part of your journey and witness your greatness. Happy Birthday Amitabh Bachchan sir  - Team Kalki2898AD.” ",
    },{
        id:count++,
        category:"Bollywood",
        title:"Ganapath Trailer: Tiger Shroff Vs The World With Help From Kriti Sanon",
        imgurl:"https://c.ndtvimg.com/2023-10/qdftosuo_alia-_625x300_09_October_23.jpg",
        content:"Trust Tiger Shroff to beguile you with his action stunts and he won't disappoint. The highly anticipated trailer of sci-fi dystopian action thriller Ganapath, starring Tiger Shroff and Kriti Sanon released on Monday and it is every bit as action-packed as one could expect from a Tiger Shroff film. The trailer begins with glimpses of the dystopian society as a voiceover talks about a an immortal Yoddha (Tiger Shroff), who will become the voice of the voiceless and protect people from the evil. However, Tiger AKA Guddu is not alone in his battle as we are introduced to nunchaku wielding Kriti Sanon, who stuns the audience with her high-octane action moves. We also get a glimpse of Amitabh Bachchan, dressed in all white, standing in the midst of a ring.",
    },{
        id:count++,
        category:"Fitness",
        title:"Cycling vs walking: which is better for weight loss?",
        imgurl:"https://www.happiesthealth.com/wp-content/uploads/2023/09/Cycling-vs-walking-for-weight-loss-Article-Anantha.jpg",
        content:"Cycling and walking were earlier crucial aspects of people’s daily commute. As efficient alternatives cropped up, they have become more of a hobby or exercise exertion. As more and more people face issues caused by a sedentary lifestyle, experts recommend reintroducing these activities into our regular lives. While incorporating them into an exercise regimen is great, it is even better to make them part of the daily routine — such as traveling for work or chores.",
    },{
        id:count++,
        category:"Fitness",
        title:"Want to know about fruits and nuts for a healthy heart? Let’s call them the Famous Five",
        imgurl:"https://www.happiesthealth.com/wp-content/uploads/2023/08/Apple-Fruits-Article-Image.jpg",
        content:"There is a common belief that heart diseases are triggered by a high intake of “harmful” foods. But, in fact, it is the undernutrition of protective foods that is more to be blamed, according to a study published in the July 2023 issue of the European Heart Journal.  The findings of the study suggest that the low intake of specific types of protective food — like fruits, vegetables, whole grains, nuts, legumes, full-fat dairy products and fish — increases the risk of heart attacks. The diet today is imbalanced and high in calories. It consists of processed food that is low in micronutrients, including vitamins and minerals. Instead, a balanced diet is required, which contains limited carbohydrates along with protein and fat in proper proportions,",
    },{
        id:count++,
        category:"Fitness",
        title:"Balancing the stride: Improvin",
        imgurl:"https://www.happiesthealth.com/wp-content/uploads/2023/06/Upper-body-mobility-for-running-Article-Anantha-002.jpg",
        content:"It’s a beautiful morning, you lace up your running shoes, step out and feel the sun energise you, and there you are, ready to conquer the outdoors and fitness goals, one stride at a time. There is a spring in your step, naturally reflecting in your pace. It is going to be a great run today, or so you thought, till you felt that sudden twinge in your shoulder. Catches and cramps in the upper body, leading to injuries at times, is common among runners. This brings to light the need for upper body flexibility and mobility, even though your run is primarily driven by the middle and lower part of your body.Many runners make the mistake of ignoring mobility and flexibility of the upper body. The focus falls squarely on building endurance, speed and strength in the lower body, overlooking the crucial role of upper body in the biomechanical chain that manifests into the running stride.",
    },{
        id:count++,
        category:"Fitness",
        title:"Snooze to not lose: memory boosting power of naps",
        imgurl:"https://www.happiesthealth.com/wp-content/uploads/2023/04/Green-Grey-Red-Cartoon-Stop-Climate-Change-Poster-1366-%C3%97-650px-1.png",
        content:"A team of researchers has found that a short nap will help retain information, especially when it comes to learning interdependent tasks that need to be performed in sequence.The study published in PLOS Computational Biology suggests that sleep aids in consolidating memories and boosting learning performance.When we try to recall anything, some part of the neural network is stimulated with specific patterns of brain activity. “This study helps in understanding these patterns of neural spiking,” says Dr Pavel Sanda, author of the study from the Institute of Computer Science of the Czech Academy of Sciences, Czechoslavakia.",
    },{
        id:count++,
        category:"Fitness",
        title:"Gym and tonic: Why working out makes you a sleeping beauty",
        imgurl:"https://www.happiesthealth.com/wp-content/uploads/2022/12/Sleep-Exercise-article.jpg",
        content:"Sleep and exercise are said to be perfect bedfellows. A good night’s sleep can enhance workout performance, reduce the risk of injuries, and keep the body and muscles healthy. Lack of sleep, on the other hand, can weaken one’s immunity.Raj Sipani, a 35-year-old entrepreneur and fitness enthusiast from Noida, Uttar Pradesh, recalls how he experienced the benefits of an excellent sleep pattern once he started working out regularly.",
    },{
        id:count++,
        category:"Fitness",
        title:"Forge your strength: Nine variations of push-ups for a full-body workout",
        imgurl:"https://www.happiesthealth.com/wp-content/uploads/2023/09/Nine-pushups-variations-to-power-workouts-Article-Anantha-002.jpg",
        content:"Push-ups, one of the first exercises you pick up on your fitness journey, stay with you through all the fitness regimens and workout routines you have attempted over the years. The popular upper-body strength and conditioning exercise that targets multiple muscle groups is essential for improving strength and endurance. Several variations of push-ups – from small tweaks in form or hand and feet positioning to major changes in movement – have expanded their utility. They can be used to target different muscle groups with varying loads or intensities.",
    },{
        id:count++,
        category:"Fitness",
        title:"It’s all in the posture: How to free your upper back and neck muscles",
        imgurl:"https://www.happiesthealth.com/wp-content/uploads/2023/09/How-to-free-your-upper-back-and-neck-muscles-Article-Anantha-002.jpg",
        content:"It is ironic that in the fast-paced world that we live in, most of us have slowed down or stopped moving, spending hours hunched over and glued to our screens and devices. This leads to progressive weakening of the upper back and neck muscles, forcing one into a forward head posture (where the head is leaned forward, deviating from its neutral alignment with the spine). This, in turn, causes a host of health issues, including neck pain, shoulder tension and tightness, respiratory complications and headaches. The good news is that with the right knowledge and exercises, we can actively work to strengthen these crucial muscles and improve our posture over time.",
    },{
        id:count++,
        category:"Fitness",
        title:"Fitness and intimacy: How does exercise improve libido?",
        imgurl:"https://www.happiesthealth.com/wp-content/uploads/2023/09/Which-exercise-improve-libido-and-how-Article.jpg",
        content:"Fitness is that universal variable present in every single equation that governs life. It helps in maintaining the musculoskeletal balance, building physical strength and endurance, ensuring mental well-being, and keeping common diseases and health conditions like diabetes and obesity-related cancers away. Naturally, holistic and regular exercises and ensuring physical and mental wellness are beneficial for a better sex life as well.The connection of physical health and fitness to a person’s sex life is straightforward yet intricate. A sound body and mind help avoid or reduce the risk of certain sexual dysfunctions in both men and women. Of course, this connection is governed by many complex and interconnected processes, including physiological, endocrinal, and neural. Together, they make sexual health a more complex state of being. Sex, after all, is not just about the concerned organs and reproduction.",
    },{
        id:count++,
        category:"Fitness",
        title:"How different types of squats power workouts",
        imgurl:"https://www.happiesthealth.com/wp-content/uploads/2023/09/Types-of-Squat-Article.jpg",
        content:"Much like the saying, variety adds spice to life, variations can boost your workout routine immensely. Variations in exercises can be incorporated to negate boredom and plateauing, add intensity, and to target specific muscles within the larger muscle group the base workout addresses. Squats for instance, has many variations however, the most popular version is the regular squats (free or weighted). From the basic version to sumo and pistol squats, the variations not just add to the efficiency of working the leg muscles but also work on some of the upper body muscles.",
    },{
        id:count++,
        category:"Fitness",
        title:"Refueling the body: How to plan an optimal post-workout meal",
        imgurl:"https://www.happiesthealth.com/wp-content/uploads/2023/09/How-to-plan-an-optimal-post-workout-meal-Article-1-002.jpg",
        content:"Besides satiating one’s hunger that invariably strikes after an intense workout session, a post-workout meal should also satisfy the body’s craving for nutrients like protein, carbs and fat. The meal should be balanced, which can help replenish one’s energy reserves.A post-workout meal helps you recover and replenish your fuel or energy reserve,” says Mihira Khopkar, sports nutritionist, rehabilitation and sports medicine, Sir H.N. Reliance Foundation Hospital and Research Centre, Mumbai. “If you had a heavy strength training session targeting most of the muscle groups, you will probably need more carbohydrates and protein post your session. On the contrary, if you have done a 30-minute yoga session or a long run, your protein and carbohydrate requirements will be different. These are the basics that one needs to understand before planning a post-workout meal",
    },{
        id:count++,
        category:"Food",
        title:"Vegetable soup recipe: a natural way to ease congestion",
        imgurl:"https://www.happiesthealth.com/wp-content/uploads/2023/10/Vegetable-soup.jpg",
        content:"When it comes to maintaining optimal health, vegetables are an essential part of the equation. These nutrient-packed, colourful gems offer a plethora of benefits to our bodies. One delicious and comforting way to incorporate more veggies into your diet, especially when dealing with congestion, is by making a bowl of vegetable soup. Vegetables like beetroots, sweet potatoes, and carrots provide a broad spectrum of vitamins and minerals along with good carbohydrates and proteins. “These vegetables are rich in vitamins A, B, and C, magnesium, copper, selenium, calcium, iron, and potassium. They also have antioxidant properties,” says Srishti D Chatlani, a sports nutritionist in Bengaluru. ",
    }
    ,{
        id:count++,
        category:"Food",
        title:"Healthy and delicious salad packed with protein",
        imgurl:"https://www.happiesthealth.com/wp-content/uploads/2023/02/High-protein-salad.jpg",
        content:"Happiest Health presents a protein-rich salad as a great way to get the daily dose of this important nutrient. This is a versatile recipe as one can make it with different ingredients.Do you know what is its additional benefit? It can help you to manage your weight. A 2018 study suggests that protein-rich diets help in weight loss as they reduce hunger pangs. They have higher satiety than carbohydrates and fats. They improve metabolism – which is the amount of energy one’s body spends to support all its functions – further helping with weight management.",
    }
    ,{
        id:count++,
        category:"Food",
        title:"Want to know about fruits and nuts for a healthy heart?",
        imgurl:"https://www.happiesthealth.com/wp-content/uploads/2023/08/Apple-Fruits-Article-Image.jpg",
        content:"There is a common belief that heart diseases are triggered by a high intake of “harmful” foods. But, in fact, it is the undernutrition of protective foods that is more to be blamed, according to a study published in the July 2023 issue of the European Heart Journal.  The findings of the study suggest that the low intake of specific types of protective food — like fruits, vegetables, whole grains, nuts, legumes, full-fat dairy products and fish — increases the risk of heart attacks. Dr Sunil Dwivedi, consultant, cardiology, Manipal Hospital, Millers Road, Bengaluru, says, “The diet today is imbalanced and high in calories. It consists of processed food that is low in micronutrients, including vitamins and minerals. Instead, a balanced diet is required, which contains limited carbohydrates along with protein and fat in proper proportions,” he adds. He emphasizes that this is essential to limit calorie intake and maintain metabolism. This protects us against diabetes, high cholesterol and high blood pressure. Dr Harpreet Singh Gilhotra, director and head, cardiology department, SGHS Hospital, Sohana, Mohali, too, is of the view that we need fiber to reduce calorie intake and cholesterol levels.",
    },{
        id:count++,
        category:"Food",
        title:"Stone fruits to eat during this season",
        imgurl:"https://static.toiimg.com/thumb/104498118.cms?width=680&height=512&imgsize=81940",
        content:"It’s that time of the year, when the seasonal change calls for some healthy adaptations and what can be better than tweaking the daily diet with some healthy and nourishing fruits. Here are some common stone fruits that are naturally loaded with essential nutrients that can help in boosting immunity and metabolism during the changing season.",
    },{
        id:count++,
        category:"Food",
        title:"Impact of drinking coffee on your health",
        imgurl:"https://www.happiesthealth.com/wp-content/uploads/2023/08/coffee-infographic-feature-image.png",
        content:"Coffee, rich in antioxidants like chlorogenic acid, melanoidins and phenylalanines, boosts cognition, enhances heart health and primes exercise. Often advised by sports nutritionists as a pre-workout drink, it revitalises the nervous system and reduces exercise fatigue.  Research establishes a connection between coffee consumption and its beneficial results such as reduced risk of type 2 diabetes and liver ailments, enhanced cognition and alleviation of depression. However, experts caution against overconsuming it because of its potential adverse effects.  ",
    },{
        id:count++,
        category:"Food",
        title:"Navratri Thali: Easy recipes that can be made in under-30 minutes",
        imgurl:"https://static.toiimg.com/thumb/104497240.cms?width=680&height=512&imgsize=123810",
        content:"Navratri is one of the most important festivals celebrated in India, with much pomp and show. This Hindu festival is a vibrant one and is a time for devotion, fasting, and feasting. A crucial part of Navratri celebrations is the delectable food prepared to appease the goddess and delight the taste buds. Here are six essential foods that are commonly included in a Navratri Thali, and here’s how you can easily make them at home.",
    },{
        id:count++,
        category:"Food",
        title:"Smart tips to store leafy greens for a week",
        imgurl:"https://static.toiimg.com/thumb/msid-104475678,imgsize-111192,width-400,resizemode-4/104475678.jpg",
        content:"",
    },{
        id:count++,
        category:"Food",
        title:"What Are Tandoori Chicken Puffs?",
        imgurl:"https://c.ndtvimg.com/2023-10/cq3b6jko_puff_625x300_13_October_23.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
        content:"A puff is a crispy pastry snack that is stuffed with flavourful fillings inside. It has a flaky outer layer and reveals a soft interior as soon as you take the first bite. This particular one is stuffed with a masaledaar tandoori chicken filling. Since it is cooked in an oven, it is also much healthier. It tastes great and will be a sure-shot hit among all the tandoori chicken lovers out there. This yummy snack tastes best when paired with a spicy chutney or tomato ketchup. Not only on weekends, but you can whip it up at any other time of the week when you feel like treating yourself to something indulgent.",
    },{
        id:count++,
        category:"Food",
        title:"Is Honey Better Than Sugar For Weight Loss In Diabetes Diet? Busting Some Myths",
        imgurl:"https://c.ndtvimg.com/2023-03/a3hcgs0o_honey-toast_625x300_08_March_23.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
        content:"In an attempt to eat healthy, we often find ourselves grappling with the sugar dilemma. On one hand, we hear dire warnings about sugar's impact on our health - from weight gain to diabetes and heart disease. On the other hand, we encounter a sweet alternative that seems too good to be true: honey. But is honey truly the golden answer to our sugar problems, or is it just another sweet myth? Let's dive into this sticky debate.",
    },{
        id:count++,
        category:"Food",
        title:"Woman Calls Poha “Worst Food”. Internet Wants Her To 'Upgrade Taste Buds' ",
        imgurl:"https://c.ndtvimg.com/2023-06/8eldbem8_poha_625x300_09_June_23.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
        content:"There is hardly any Indian who does not like poha. Whipping up this delight is a breeze. In a pan, heat some oil, add mustard seeds, curry leaves, and chopped onions, and saute them until the onions turn a lovely golden hue. Then, introduce turmeric, salt, and the rinsed poha. Let it cook for a few minutes, and finish by garnishing it with chopped coriander and a drizzle of refreshing lemon juice. While most people love this dish, have you heard someone being extremely vocal about their hatred for poha. One such instance unfolded on social media when a user on X (formerly known as Twitter) dared to label poha as the 'worst food' in one of her posts. This declaration stirred a frenzy among desi food enthusiasts, who couldn't resist expressing their passionate disagreement in the comments section.",
    },{
        id:count++,
        category:"Hollywood",
        title:"Wonder Woman 3: DC Has No Immediate Plans For The Film",
        imgurl:"https://c.ndtvimg.com/2023-08/1b5fdt6g_gal-gadot_625x300_11_August_23.jpg",
        content:"Despite Hollywood star Gal Gadot's recent comments about Wonder Woman 3, DC Studios is reportedly not looking to make the third chapter in the movie series anytime soon. Multiple sources told news outlet Variety that 'Wonder Woman' 3 is not in development at DC Studios. In a recent interview, Gal Gadot had claimed that DC Studios heads James Gunn and Peter Safran told her they would develop Wonder Woman 3 together.",
    },{
        id:count++,
        category:"Hollywood",
        title:"India Box Office Report: Keeping Up With Oppenheimer Vs Barbie",
        imgurl:"https://c.ndtvimg.com/2023-07/h1u1an58_-barbie-_625x300_25_July_23.jpg",
        content:" The world was watching as Greta Gerwig's Barbie and Christopher Nolan's Oppenheimer clashed at the box office last week. While one is a bubblegum drama with a feminist spin, the other documents one of the darkest periods of human history through the eyes of one of its key players. Since the release, all eyes have been on the films to gauge which of the two big projects left the other behind. Barbie's box office business shattered records worldwide, earning over $155 million in North America and $337 million globally, and Oppenheimer earned over $80.5 million in its opening weekend. However, the Indian box office has always marched to the beat of a different drummer and this is evident from the first Monday business of the two films. As per Box Office India, while Oppenheimer continued its dream run in the country and collected 7 crore nett, Barbie saw a 50% drop on Monday, making only 2.25 crore nett. With this, the collection of Oppenheimer in India has crossed 55 crore nett and Barbie has its overall business standing at 19.50 crore nett.",
    },{
        id:count++,
        category:"Hollywood",
        title:"Comic-Con 2023 Return To Roots As Stars Skip Event Amid Hollywood Strike",
        imgurl:"https://c.ndtvimg.com/2023-07/44d9ga8g_comiccon_625x300_20_July_23.jpg",
        content:"A-listers are skipping this week's Comic-Con due to a historic Hollywood strike -- but while some ticketholders are disappointed, long-standing comic book fans are delighted to have their world-famous event back.The giant pop culture gathering in San Diego, California often draws headlines for the thousands of cosplaying fans who camp in line for days to see stars from Tom Cruise to Dwayne 'The Rock' Johnson.With actors last week joining writers on strike -- and therefore banned from promoting their movies and shows -- celebrities and studios from Amazon to Warner Bros have pulled the plug on Comic-Con appearances.",
    },{
        id:count++,
        category:"Hollywood",
        title:"Priyanka Chopra's Manager Writes Of 'Navigating The Hollywood Entertainment Land' In Birthday Wish For Actor",
        imgurl:"https://c.ndtvimg.com/2023-07/fovpvi7o_-priyanka-chopra_625x300_18_July_23.jpg",
        content:"Priyanka Chopra, 41 today, got the best birthday wish from her manager Anjula Acharia. She posted throwback pictures with the birthday girl from Italy and shared an extensive note that read, 'Priyanka Chopra for your birthday I wrote you a silly little ditty 'In the realm of lights and fame, A star with an enchanting name, Priyanka, dear friend, it's your special day, A celebration of you in every way.'Anjula Acharia added in her note,'From auditions and contracts to red carpets so grand, We've navigated the Hollywood entertainment land. Through glitz and glamour, we've stood tall, Side by side, conquering it all.",
    },{
        id:count++,
        category:"Hollywood",
        title:"Animal Song Hua Main: The Heights Of Rashmika Mandanna And Ranbir Kapoor's Romance",
        imgurl:"https://upload.wikimedia.org/wikipedia/en/9/90/Animal_%282023_film%29_poster.jpg",
        content:"Does passion care for conventions and family restrictions? Ranbir Kapoor and Rashmika Mandanna's Hua Main from Animal is passion personified. Ranbir Kapoor and Rashmika Mandanna have been cast opposite each other for the first time and their on-screen chemistry will make you crave for more. The makers of Animal released the first song from the movie on Wednesday. The video begins with Rashmika's (Geetanjali in the film) family asking for an explanation from the couple (Ranbir Kapoor and Rashmika). Without giving them an answer, they seal the moment with a passionate kiss. Ranbir Kapoor then takes Rashmika inside a plane and they can't stop kissing each other. From inside a plane to the snow-clad mountains, the couple's journey of love and passion continues. The video ends with Rashmika and Ranbir taking pheras around a temple on the mountain. ",
    },{
        id:count++,
        category:"Hollywood",
        title:"Hollywood Strike: Jamie Lee Curtis, Jeremy Renner And Others 'Stand Strong' With Union",
        imgurl:"https://c.ndtvimg.com/2023-07/r93ol4vg_-jamie-lee-curtis_625x300_14_July_23.jpg",
        content:" In the wake of the strike led by the union - Screen Actors Guild-American Federation of Radio and Television Artists (SAG-AFTRA) - aimed against movie and television studios over demands for better pay and working conditions in the industry, some of the biggest names in Hollywood, including Academy Award winning actor Jamie Lee Curtis and Marvel star Jeremy Renner, sent messages of solidarity via social media posts. After the Screen Actors Guild announced that the strike is on, starting Thursday, the cast of Christopher Nolan's Oppenheimer was compelled to leave the film's London premiere.",
    },{
        id:count++,
        category:"Hollywood",
        title:"For Michael Gambon, Tributes From Harry Potter Stars Emma Watson, Rupert Grint And Others",
        imgurl:"https://c.ndtvimg.com/2023-09/5gk4em8_-michael_625x300_29_September_23.jpg",
        content:"Veteran actor Michael Gambon, who was best known for playing Professor Albus Dumbledore in six of the eight Harry Potter movies, died at the age of 82, his family announced on Thursday, reported news agency AFP. Stars of the Harry Potter films, paid tribute to the late actor. Emma Watson, who famously starred as Hermione Granger in the Harry Potter films, remembered Michael Gambon with these words, 'Kind, kind, kind Michael Gambon. You never took it too seriously but somehow delivered the most serious moments with all the gravitas. Thank you showing us what it looks like to wear greatness lightly. We will miss you.'",
    },{
        id:count++,
        category:"Hollywood",
        title:"IFFI 2023: Michael Douglas To Receive Satyajit Ray Lifetime Achievement Award",
        imgurl:"https://c.ndtvimg.com/2023-10/agaib2q8_michael-_625x300_13_October_23.jpg",
        content:"Renowned Hollywood star Michael Douglas will be honoured with the Satyajit Ray Lifetime Achievement Award at the International Film Festival of India in Goa, Union minister Anurag Thakur announced on Friday. Thakur shared the news in a post on microblogging site X, saying that the actor will also attend the 54th edition of the festival along with wife Catherine Zeta-Jones and son Dylan. The film gala will be held from November 20 to 28.",
    },
    {
        id:count++,
        category:"Hollywood",
        title:"Priyanka Chopra Shares Evidence Of The 'Blood, Sweat And Tears' That Went Into Her Citadel Role",
        imgurl:"https://c.ndtvimg.com/2023-05/svc0rs58_priyanka-_625x300_25_May_23.jpg",
        content:"Priyanka Chopra is currently basking in all the compliments and praise coming her way for her lead role in the spy drama Citadel.The action-packed show has Priyanka Chopra performing some dangerous stunts, and many of the moves even left the star with cuts and bruises. We know this because Priyanka Chopra has shared some behind-the-scenes glimpses from the sets of Citadel on Instagram. The clip begins with her saying, 'Tell me your job is glamorous, without telling me that your job is glamorous.' This is then followed by several visuals of her bruised face and body, and some clips of the actor getting medical aid. In the caption, Priyanka Chopra wrote, 'Blood, sweat, and tears, literally. So grateful for the brilliant stunt coordinators on Citadel, @don_thai , @jyou10 and @nikkipowell114 you made doing my own stunts feel like a cakewalk. Wait, what, kidding! There was nothing easy about that but having you and your excellent team around made me feel so safe. Thank you.'",
    },{
        id:count++,
        category:"Hollywood",
        title:"RRR Actor Ray Stevenson Dies At 58: 'Shocking News,' Says Team RRR",
        imgurl:"https://c.ndtvimg.com/2023-05/8i96ivmo_rrr_625x300_23_May_23.jpg",
        content:"Oscar-winning film RRR's actor Ray Stevenson passed away on Sunday in Italy at the age of 58. His reps at Independent Talent confirmed the news, Deadline reported.Further details about the actor's death are still awaited. Taking to Twitter, Team RRR shared the news on their official handle and wrote, 'What shocking news for all of us on the team! Rest in peace, Ray Stevenson. You will stay in our hearts forever, SIR SCOTT.'",
    }
    ,{
        id:count++,
        category:"Technology",
        title:"Oppo tries to flip away foldable pain points with the Find N3 Flip",
        imgurl:"https://images.indianexpress.com/2023/10/oppo-find-n3-flip-review-featured.jpg?w=640",
        content:"Oppo was quick to enter the foldable race with the Find N series. Now, it has come to a point in the development of this form factor where it wants to solve the pain points associated with foldables. And that seems to be the focus of the Find N3 Flip, its new clamshell-type foldable.The Find N3 Flip tries to do three things other foldables haven’t. One, it tries to make the cover screen much more effective by literally making it a miniature version of everything the phone can do. Two, it tries to bring in a three-camera system with a 50MP primary camera, 48MP ultra-wide and 32MP portrait camera. And finally, it tries to pack in a larger 4300mAh battery, much larger than any on a flip format phone so far. ",
    },{
        id:count++,
        category:"Technology",
        title:"Google might bring ChromeOS Flex to older Chromebooks",
        imgurl:"https://images.indianexpress.com/2023/10/ChromeOS-FlexGoogle.jpg?w=640",
        content:"Google Chromebooks are often praised by users because they offer a good combination of performance and battery life. Now, Google seems to be working on the ability to install ChromeOS Flex to extend the lifespan of Chromebooks that have reached their end-of-life support. According to ChromeUnboxed, Google recently added a new commit to the Chromium repository with a reference to ‘Flexor’, which might be a ChromeOS Flex project. The commit makes a new 10GB partition on Chromebooks which hints at Google testing ChromeOS Flex for its existing ChromeOS powered laptops.",
    },{
        id:count++,
        category:"Technology",
        title:"Artificial intelligence has discovered its first supernova",
        imgurl:"https://images.indianexpress.com/2023/10/Supernova-AI-detection-20231017.jpg?w=640",
        content:"A new artificial intelligence (AI) tool and a fully automated process have successfully detected, identified, and classified its first supernova. Such technologies could take the grunt work away from astronomers, giving them more time to develop and test new hypotheses to explain the universe.The AI tool is called BTSbot and no, the researchers were not fans of the wildly popular South Korean boy band. BTSBot stands for Bright Transient Survey Bot, and it was developed by an international group of researchers led by Northwestern University. ",
    },{
        id:count++,
        category:"Technology",
        title:" Gaganyaan mission: First test vehicle flight on October 21",
        imgurl:"https://images.indianexpress.com/2023/10/Preparations-underway-for-Gaganyaan-missions-Flight-Test-Vehicle-Abort-Mission-1-TV-D1.-PTI.jpg?w=640",
        content:"Gaganyaan’s first test vehicle mission that will see the crew module being carried to a height of 17 km to test mid-flight crew escape system will take place on October 21 between 7 am and 9 am, according to Indian Space Research Organisation. Recovery of crew module after splashdown in Bay of Bengal will also be practised during this mission.The mission will see a single-stage liquid propellant-based rocket carrying an unpressurised version of the crew module simulating the size and mass of the actual module carrying the Indian astronauts.",
    },{
        id:count++,
        category:"Technology",
        title:"Windows 7, 8 users can no longer upgrade to Windows 11 for free, here is why",
        imgurl:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1i65zy.img?w=768&h=432&m=6&x=684&y=349&s=52&d=52",
        content:"The decision to block Windows 7 and Windows 8 keys from activating Windows 11 was initially announced by Microsoft last month. However, the implementation timeline was uncertain at the time, as users were still able to activate Windows 11 with these keys. As of this week, Microsoft has confirmed that Windows 7 keys are now completely blocked from being used for clean installations of Windows 11.In practical terms, attempts to activate Windows 11 with a Windows 7 key will result in an error message stating,We can't activate Windows on this device because you don have a valid digital license or product key'.This message signifies the end of the free upgrade path for users holding onto older Windows 7 or 8 keys.",
    },{
        id:count++,
        category:"Technology",
        title:"Samsung Galaxy S24 Ultra may come with 200-megapixel primary camera setup, new leak reveals",
        imgurl:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1ih69M.img?w=768&h=432&m=6",
        content:"The Galaxy S24 Ultra, slated for release in the near future, is rumored to flaunt a camera system that could redefine the boundaries of smartphone photography. Let's delve into what's been unveiled: As per tipster Revegnus, at the heart of this camera array is an astonishing 200-megapixel primary camera. This sensor is no slouch, featuring an impressive 1/1.3-inch size and minuscule 0.6-micrometer pixel dimensions. The promise here is incredibly sharp and detailed images.Complementing the primary camera, the Galaxy S24 Ultra is expected to house a 12-megapixel ultra-wide camera. This camera reportedly incorporates the IMX564 sensor, sporting a 1/2.55-inch sensor size and generous 1.4-micrometer pixel size, potentially ensuring wide-angle shots with exceptional quality.",
    },{
        id:count++,
        category:"Technology",
        title:"What Is New IMPS Money Transfer Rule By Which You Can Send Upto Rs 5 Lakh With Mobile Number And Bank Name?",
        imgurl:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1ilwAx.img?w=1920&h=1080&q=60&m=2&f=jpg",
        content:" As the government is focusing on 'Digital India', online transactions in India have gained popularity. Now, people can quickly transfer the amount from one bank to another. Earlier, they had to face long lines to do the same.There are lots of money transfer channels in the country. IMPS is one of them. Continue reading to know about it. ",
    },{
        id:count++,
        category:"Technology",
        title:"Fraudsters make a killing as e-com sites announce special offers",
        imgurl:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1igFji.img?w=768&h=570&m=6",
        content:"Platforms such as Amazon, Flipkart, Myntra, Nykaa and Ajio are rolling out a plethora of discounts and deals in anticipation of festivals such as Dasara, Diwali, Christmas and New Year’s. These discounts often range from 10% to 90% on a variety of products and accessories. Promotional events like the Great Indian Festival on Amazon, the Big Fashion Festival on Myntra, and the Big Billion Days on Flipkart were live in the first and second weeks of October. However, on the flip side, cybercriminals are deploying phishing emails and duplicate websites to deceive unsuspecting consumers.",
    },{
        id:count++,
        category:"Technology",
        title:"Netflix may hike prices after success of password-sharing crackdown",
        imgurl:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1ik1C5.img?w=700&h=393&m=6",
        content:"Netflix's crackdown on password-sharing likely boosted subscribers by about 6 million in the third quarter and the streaming pioneer is expected to set the stage for price increases when it reports earnings on Wednesday.The only profitable major streamer, Netflix has resisted joining rivals like Walt Disney (DIS.N) in hiking ad-free prices this year and instead curbed password-sharing outside households to tap the more than 100 million viewers who use its service without subscribing.",
    },{
        id:count++,
        category:"Technology",
        title:"Aadhaar Card Scam Alert: Lock Your Aadhaar Card Immediately To Avoid This BIG Fraud",
        imgurl:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1im633.img?w=689&h=388&m=6",
        content:"Aadhaar card holders across India are taking to social media to alert citizens about a new type of scam in which your bank account may get drained to zero by scammers by using a loophole in the new Aadhaar-enabled Payment System (AePS). In this scam, there's no scope for OTP authentication and a scammer can steal money from your bank account by simply getting access to your fingerprint data, knowing your Aadhaar number and the name of the bank with whom you have an account. To make things worse, you won't even get an SMS notification when money gets debited from your account.",
    },{
        id:count++,
        category:"topHollywood",
        title:"Twitterati think Vijay starrer sought 'inspiration' from these Hollywood films",
        imgurl:"https://static.toiimg.com/thumb/msid-104582573,imgsize-74986,width-400,resizemode-4/104582573.jpg",
        content:"The Vijay-starrer 'Leo' released in theatres on Thursday, amidst much hype and anticipation and the proof is in the record box office collections.According to reports, the film earned a huge Rs 115 crore collection at the worldwide box office on just its first day, setting it up for a promising run at the ticket windows. Should it live up to the hype, it could just become one of the highest-grossing films of the year, on par with Shah Rukh Khan's Jawan, Sunny Deol's Gadar 2 and Rajinikanth's Jailer",
    },
    {
        id:count++,
        category:"topHollywood",
        title:"Jr NTR On Oscars' Academy List Of New Member Class Of Actors",
        imgurl:"https://c.ndtvimg.com/2023-10/ua30lmkg_-jr-ntr_625x300_19_October_23.jpg",
        content:"New Delhi: On Wednesday night, the Academy of Motion Picture Arts and Sciences shared the list of new member class of actors and guess who is on it? None other than Jr NTR. An Instagram post captioned,Introducing Academy's new member class of actors was shared by the Academy on its official Instagram handle. Besides Jr NTR, the list also features Ke Huy Quan, Marsha Stephanie Blake, Kerry Condon, Rosa Salazar. In the capable hands of these dedicated and gifted performers, stories transcend the confines of imagination, taking on a tangible, visceral existence that captivates viewers around the world. Through their nuanced expressions, compelling gestures, and authentic portrayals, they bridge the gap between fiction and reality, allowing us to see ourselves in the struggles, joys, and triumphs of the characters they bring to life, read the caption on the post.",
    },
    {
        id:count++,
        category:"topHollywood",
        title:"Kartik Aaryan-Tara Sutaria, Khushi Kapoor, Rasha Thadani And Sara Tendulkar Step Out For Dinner",
        imgurl:"https://c.ndtvimg.com/2023-10/vmohbc38_-kartik_625x300_22_October_23.jpg",
        content:"Kartik Aaryan scooped some time out of his busy schedule and stepped out for dinner with friends in Mumbai. The actor was clicked with actress Tara Sutaria outside a Mumbai eatery on Saturday night. The duo were pictured making an exit together. Khushi Kapoor also joined them. Raveena Tandon's daughter Rasha Thadani and Sachin Tendulkar's daughter Sara were also pictured at the dinner. We also got a glimpse of Orhan Awatramani at the Mumbai eatery. Khushi Kapoor, daughter of the late Sridevi and film producer Boney Kapoor, will soon make her Bollywood debit with Zoya Akhtar's rendition of Archies. The film will also feature Agastya Nanda and Suhana Khan in their Bollywood debuts.",
    },
    {
        id:count++,
        category:"topHollywood",
        title:"The Marvels Trailer: Three Female Superheroes Unite To Save The Universe",
        imgurl:"https://c.ndtvimg.com/2023-07/4kov887_marvel-_625x300_21_July_23.jpg",
        content:"Another day, another opportunity for a Marvel superhero to save the universe. Just this time, the highly anticipated The Marvels film has a trio of superheroes coming together to save the world from evil forces. The trailer, released on Friday, features Carol Danvers aka Captain Marvel having to take on the mantle of managing an unstable universe. This is right after she has managed to successfully complete the mammoth task of reclaiming her identity from Kree. But Carol is not alone in her endeavours. She appears to be ably supported by Captain Monica Rambeau and Kamala Khan aka Ms Marvel. ",
    },
    {
        id:count++,
        category:"topBollywood",
        title:"Tiger 3 Song Leke Prabhu Ka Naam Teaser: Salman Khan And Katrina Kaif's Chemistry Do The Talking",
        imgurl:"https://c.ndtvimg.com/2023-10/gvjnk2j8_1200_625x300_20_October_23.jpg",
        content:"Welcome to the world of Salman Khan and Katrina Kaif AKA Tiger and Zoya. Ahead of the release of the first song Leke Prabhu Ka Naam from Tiger 3, the makers shared a teaser of the song on Friday. The teaser will surely make you crave for more. In the teaser, spanning over a few seconds, we can see Katrina Kaif sporting some vibrant-coloured outfits. Salman Khan can be seen in a red shirt. The background score hints it's going to be a banger. ",
    },
    {
        id:count++,
        category:"topBollywood",
        title:"Rajinikanth Sends Best Wishes For Tiger Shroff's Ganapath. Actor Replies",
        imgurl:"https://c.ndtvimg.com/2023-10/asfe9ftg_rajinikanth_625x300_20_October_23.jpg",
        content:"Tiger Shroff, whose latest offering Ganapath hit the theatres today, received a heartwarming message from superstar Rajinikanth. The veteran actor wished Tiger and Team Ganapath good luck with these words,My hearty wishes to @iTIGERSHROFF and the entire cast and crew of #Ganapath. All the very best to you and wishing the film a grand success.#tigershroff #ganapath #jackieshroff @bindasbhidu.Tiger Shroff reacted to the post on X (formerly known as Twitter) and he wrote,Highest respect and loads of love Sir, Thank you so much for your generous words it means the world to us especially me.",
    },
    {
        id:count++,
        category:"topBollywood",
        title:"National Awards: Alia Bhatt On Wearing Her Wedding Saree To The Event - What's Special Once Can Be...",
        imgurl:"https://c.ndtvimg.com/2023-10/tmes5358_alia-_625x300_17_October_23.jpg",
        content:"National Awardee Alia Bhatt was a vision to behold at the 69th National Film Awards ceremony, that was held in Delhi on Tuesday. What made her OOTD special was however the fact that she wore her wedding saree to receive her National Award from President Droupadi Murmu. As fans wondered why the actress repeated an outfit, Alia Bhatt, on Tuesday evening, wrote a note, revealing her thought behind wearing her wedding saree. Sharing a picture of herself from the event , Alia Bhatt wrote,A special day calls for a special outfit.",
    }
    ,
    {
        id:count++,
        category:"topBollywood",
        title:"Durga Puja 2023: Sushmita Sen And Daughter Renee's Dhunuchi Dance. What's Not To Love?",
        imgurl:"https://c.ndtvimg.com/2023-10/559ucrvg_sushmita_625x300_22_October_23.jpg",
        content:"Sushmita Sen stepped out for Durga Puja festivities on Saturday night. The former Miss Universe visited a pandal in Mumbai where she was accompanied by her daughters Renee and Alisah. The actress was all smiles as she posed with her daughters for the lensmen stationed there. That's not it, the actress also performed Dhunuchi dance at the pandal. She was joined by daughter Renee. Needless to say the video is viral. For the festive occasion, Sushmita Sen was every bit stunning in a pink saree. ",
    },
    {
        id:count++,
        category:"topFitness",
        title:"Ab-Tastic Arjun Rampal Shares New Post From His Fitness Diaries",
        imgurl:"https://c.ndtvimg.com/2023-10/9pcsuid_arjun-rampal_625x300_19_October_23.jpg",
        content:"Arjun Rampal, who has quite a bit of a reputation as a fitness enthusiast, shared a video from his work out diaries. The actor posted an ab-tastic video and he captioned it,Oh yeah! Feeling good! Guess who's back? He accompanied the post with the hashtags #nopainnogain, #health, #fitness, #consistency, #everythingispossible, #100%natural and #nosupplements. In the comments section, Arjun Rampal's girlfriend Gabriella Demetriades wrote,Why don't I get video credit.In the comments section, a user wrote Indian John Wick.Another user wrote Not to forget this is him at 50. ",
    },
    {
        id:count++,
        category:"topFitness",
        title:"Is Peanut Butter An Ideal Pre-Workout Snack To Fuel Your Workout - Expert Reveals",
        imgurl:"https://c.ndtvimg.com/2020-05/s9t4166o_peanut-butter_625x300_08_May_20.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
        content:"Peanut butter for the most part was quite a westernised concept in the early 2000s. Indians consumed it but for the most part, the supply and demand for it was fairly meagre vis a vis quantity. You would find mostly imported brands in good grocery stores and that was mostly the extent of it. There was no go-to Indian brand per se and bread was mostly paired with jam or butter. And yes, we are referring to the small tubs of butter that you might now find if you are having breakfast on a train or domestic airplanes.",
    },
    {
        id:count++,
        category:"topFitness",
        title:"How To Boost Stamina Naturally Post Lockdown - Expert Reveals 5 Easy Ways",
        imgurl:"https://c.ndtvimg.com/2018-11/0kfilqjg_running-_625x300_29_November_18.jpg",
        content:"Today, as we are slowly getting out of our homes, starting to go to office, we find that the stamina to do so isn't there. We get tired easily and feel the need to push ourselves mentally and physically to do what we used to do without putting extra effort. But fret not! It's time to rewire ourselves - we just need to take small steps to reach back where we want to be and do so in a systematic manner.",
    },
    {
        id:count++,
        category:"topFitness",
        title:"Watch: The Real Reason Why Athletes Are Giving Up Meat",
        imgurl:"https://c.ndtvimg.com/2020-05/1qp42tb8_athlete-vegan_625x300_07_May_20.jpg",
        content:"The spurt of interest in giving up meat is due to various reasons, from the food safety concerns to the global Coranvirus pandemic. This trend is being seen in even sportspersons and athletes.Aditi AhujaUpdated: May 08, 2020 09:19 IST An increasing number of athletes are choosing to go vegan.HighlightsAn increasing number of athletes are choosing to give up meatThere are various health benefits to make the switchTake a look at some testimonials by renown soccer players The number of people turning or thinking of turning vegetarian are increasing manifold all over the planet. The spurt of interest in giving up meat is due to various reasons, from the food safety concerns to the global Coronavirus pandemic. This trend is being seen in individuals from various walks of life, even sportspersons and athletes. Football players who play for the Premier League, for example, are realising how important health and nutrition is for their performance in the field. For some soccer athletes in England, that means giving up meat altogether even though meat is considered an essential source of protein. This video attempts to decode this drastic shift in diet and what could be the possible reason behind it. ",
    },
    {
        id:count++,
        category:"topFood",
        title:"Watch: Hyderabad Shop Makes 10,000 Samosas In A Day - Video Goes Viral",
        imgurl:"https://c.ndtvimg.com/2023-10/rlb55nu_viral-samosa_625x300_19_October_23.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
        content:"Watch: Hyderabad Shop Makes 10,000 Samosas In A Day - Video Goes ViralViral Video: This shop in Hyderabad makes 10,000 samsoas in a day. Internet user were quite impressed with the large-scale production.हिंदी में पढ़ेंEdited by Vaishali KapilaUpdated: October 19, 2023 13:01 ISTRead Time:2 min.The video has garnered over 2.7 million views so far.Image Credit: Instagram/@hmm_nikhilHighlightsSamosa is one of the most loved street foods in India.A recent video shows the making of 10,000 samosas at a shop.Find out how internet users reacted to the video below.Let's admit, it is hard to say no to a plate of hot samosas served with spicy chutney. Most of us, at some point in the week, opt for this lip-smacking street snack to satiate our taste buds. Don't you? Well, then, you must meet this local street vendor who prepares 10,000 samosas daily. Isn't that so amusing? A video from a shop in Hyderabad is making the rounds on Instagram. While some are appreciating this culinary achievement, others didn't think of it as a big achievement and questioned the hygiene conditions at the samosa shop",
    },
    {
        id:count++,
        category:"topFood",
        title:"Viral Video Shows Skull-Shaped Pizza, Internet Calls It Bheja Fry",
        imgurl:"https://c.ndtvimg.com/2023-10/g9lrtql_skull-pizza_625x300_19_October_23.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
        content:"With Halloween just around the corner, the spooky spirit is in full swing. People are getting into the eerie vibe by decorating their homes with pumpkins, skeletons, and planning theme parties like murder mysteries and superhero gatherings. 'Trick or treat' is on the horizon, but have you ever stumbled upon food that's positively spine-chilling? If not, there's an Instagram video making waves. It showcases a dish that might make your spine tingle – a pizza skull. Yes, you read that correctly. As this video racks up lakhs of views, food enthusiasts are voicing their reactions. Some are calling it bheja fry,while others are simply asking, ",
    },
    {
        id:count++,
        category:"topFood",
        title:"Watch: How To Perfect Instant Matar Paneer Pulao: Expert Tips You Can't Miss",
        imgurl:"https://c.ndtvimg.com/2022-10/4m24mou8_pulao_625x300_31_October_22.jpg",
        content:"1. Select aromatic Basmati rice for an enhanced Pulao experience. Remember not to over-soak the rice, especially if you're using a pressure cooker. This ensures the grains retain their texture and don't get sticky.2. When frying paneer, ensure it's well-drained and dry to prevent splattering. Maintain a medium-high heat to keep the paneer soft and succulent.3. Opt for medium heat when sauteeing onions to avoid excess moisture. This small step goes a long way in achieving the perfect texture and taste.Now, let's jump into the step-by-step guide for crafting the delectable Instant Matar Paneer Pulao.",
    },
    {
        id:count++,
        category:"topFood",
        title:"Feeling Under The Weather? Try These 3 Amazing Liquid Diet Tonics For Quick Recovery",
        imgurl:"https://c.ndtvimg.com/2023-10/nc2u9qr8_liquid-diet-recovery_625x300_16_October_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
        content:"When illness strikes, eating solid food becomes a challenge, but liquid diets can prove to be a lifeline. They provide essential nutrients to keep our body healthy. But the most helpful thing the liquid diet does for recovery is hydration while being gentle on your digestive system",
    },
    {
        id:count++,
        category:"topTech",
        title:"Empowering peri-urban TN through digital payments",
        imgurl:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1iBeCa.img?w=768&h=384&m=6&x=432&y=173&s=33&d=33",
        content:"As urbanisation peaks, growth of peri-urban areas becomes an indispensable facet of this narrative, fuelling a demand for digital financial solutions.In the heart of Madhuravoyal on the outskirts of Chennai, a man in his mid-40s unfolds a captivating narrative through his recollections. He shares how deeply ingrained cultural traditions have shaped his financial decisions, offering a mere glimpse into the profound influence of digital payments’ journey into peri-urban India — a journey that holds the potential to empower millions.",
    },
    {
        id:count++,
        category:"topTech",
        title:"The new favourite wireless buds",
        imgurl:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1if56d.img?w=749&h=421&m=6",
        content:"The WF-1000XM4 marked Sony's presence in the wireless earbuds segment, which was largely dominated by the likes of Apple AirPods Pro. But with the new WF-1000XM5, Sony has pushed the envelope even further with an astoundingly good sonic experience and ANC performance.",
    },
    {
        id:count++,
        category:"topTech",
        title:"India Surpasses Europe in 5G Race: A Beacon for Global Connectivity",
        imgurl:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1iCCzK.img?w=768&h=432&m=6",
        content:"In a world where instant connectivity is no longer a luxury but a necessity, 5G technology has emerged as a beacon of hope, promising unparalleled speed and efficiency. India, a nation often perceived as trailing behind in technological advancement, has surprised the world by outpacing Europe in the 5G race. Notably, this recognition comes from none other than the CEO of Nokia, one of the global leaders in telecommunications.",
    },
    {
        id:count++,
        category:"topTech",
        title:"'Terrific Meeting': Google CEO Sundar Pichai Thanks PM Modi | What They Discussed",
        imgurl:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1ijNXF.img?w=768&h=432&m=6&x=261&y=146&s=724&d=213",
        content:" Google CEO Sundar Pichai thanked Prime Minister Narendra Modi for a “terrific meeting” to discuss Google’s ongoing commitment to India on Tuesday. PM Modi and Pichai held a virtual meeting on Monday where they discussed Google’s plan to take part in the electronics manufacturing ecosystem in India.",
    },
    
    
    

])
return (
    <div>
            <store.Provider value={[Data,setData]}>
                {props.children}
            </store.Provider>
        </div>
    );
}

export default CreateStore;