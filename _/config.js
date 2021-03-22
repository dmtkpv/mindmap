const MapConfig = {

    // sr - sun radius
    // ps - planet scale (sr * ps)
    // ms - moon scale (sr * ps * ms)

    sr: 120,
    si: 'images/sun.png',
    vi: 'images/video.svg',
    stroke: 10,

    orbits: [
        {
            ps: 0.7,
            ms: 0.7,
            gradient:`
            <linearGradient id="g0" x1="0" y1="0" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1B70DC" offset="0%" stop-opacity="0"/>
                <stop stop-color="#0A69D2" offset="100%"/>
            </linearGradient>`
        },
        {
            ps: 0.6,
            ms: 0.7,
            gradient:`
            <linearGradient id="g1" x1="0" y1="0" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4DA8FF" offset="15%"/>
                <stop stop-color="#FFE600" offset="70%"/>
                <stop stop-color="#FF9900" offset="100%" />
            </linearGradient>`

        },
        {
            ps: 0.5,
            ms: 0.7,
            gradient:`
            <linearGradient id="g2" x1="0" y1="0" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F305BC" offset="5%"/>
                <stop stop-color="#DCE742" offset="35%"/>
                <stop stop-color="#16B9ED" offset="100%" />
            </linearGradient>`
        }
    ],

    planets: [


        // 0

        {
            orbit: 0,
            position: {
                bottom: 0,
                right: 0
            },
            image: 'images/1.svg',
            label: 'Writing',
            note: 'Our approach to writing is multi-faceted. LightSail combines features for teaching the mechanics of writing, with modules that guide children through different writing pieces. Creativity and unlimited inspiration are fostered by the unique way LightSail integrates the books your children read and the topics they are already interested in.',
            moons: [
                {
                    image: 'planets/svg/moon-red.svg',
                    label: 'My Journal',
                    note: 'My Journal is a space especially for your child’s personal notes and thoughts. It can be both a reading journal, integrated with their library, and a regular diary '
                },
                {
                    image: 'planets/svg/moon-yellow.svg',
                    label: 'Authentic Writing',
                    note: 'LightSail’s most creative writing module is Authentic Writing. This module directly relates books to real-life writing scenarios by allowing a child to take a problem, idea, or situation from a book and write about it in an authentic format'
                },
                {
                    image: 'planets/svg/moon-blue.svg',
                    label: 'Essay',
                    note: 'LightSail’s Essay Writing module focuses on a specific prompt that a child will answer relating to a book they’re reading and is completely customizable for learners at all levels'
                },
                {
                    image: 'planets/svg/moon-purple.svg',
                    label: 'Inquiry Report',
                    note: 'LightSail’s Inquiry Writing module uses the KWL (Know - Want to Know - Learned) strategy to guide children through the fundamentals of writing a research paper.'
                },
                {
                    image: 'planets/svg/moon-red.svg',
                    label: 'Book Report',
                    note: 'LightSail has taken the age-old concept of a book report and made it fun and fresh for both parents and children. The basic premise remains the same - a child reads a book and then responds with a short essay or by answering a series of questions. Only now, with LightSail’s unparalleled content selection and cutting-edge technology, this writing format is an even more substantial tool for homeschoolers than ever before.'
                },
                {
                    image: 'planets/svg/moon-yellow.svg',
                    label: 'Writing Skills Builder',
                    note: 'Grammar and Language Skill Builder is a module that works on the mechanics of writing, allowing parents to quickly and easily craft assignments which strengthen the nuts and bolts of a child’s writing skills.'
                },
                {
                    image: 'planets/svg/moon-blue.svg',
                    label: 'Informal Writing',
                    note: 'Informal Writing Workshops are fun, gamified writing prompts that teach through real-life writing encounters that children will want to engage in. These workshops provide grade-appropriate scenarios for children to experience writing in an organic and relatable way like mock social media posts, fun and creative free-writing prompts, and even hashtag challenges.'
                },
                {
                    image: 'planets/svg/moon-purple.svg',
                    label: 'Author a Book',
                    note: 'One of LightSail’s most exciting features is Author a Book. With this feature, your child can stretch their imagination and their reading and writing skills by creating their own book and publishing it for other children around the world to read, with a parent’s permission.'
                }
            ]
        },
        {
            orbit: 0,
            position: {
                bottom: 0,
                left: 0
            },
            image: 'images/2.svg',
            label: 'Reading',
            note: 'By presenting children with a wide array of content that is both captivating and at just the right reading level, by harnessing the power of adaptive technology to monitor reading progress and assist children with accessing text, and by creating a fun, interactive reading experience - LightSail helps children grow into fully literate adults who possess a lifelong love of reading.',
            moons: [
                {
                    image: 'planets/svg/moon-blue.svg',
                    label: 'Book Library',
                    note: 'With LightSail, every child\'s book library will be different because it will be personalized just for them. With book suggestions based on both a child\'s precise Lexile reading level and their interests, no two libraries will be the same - just like no two children are the same.'
                },
                {
                    image: 'planets/svg/moon-purple.svg',
                    label: 'Audiobook Library',
                    note: 'LightSail contains over 1,500 audiobooks of three different types to suit different readers: standard audiobooks, audiobooks with text highlighting by word, and audiobooks with text highlighting by sentence. '
                },
                {
                    image: 'planets/svg/moon-red.svg',
                    label: 'World Book Encyclopedia',
                    note: 'LightSail has partnered with World Book Encyclopedia, a source parents have trusted for educational content for over 100 years, to bring over 50,000 encyclopedia articles into the platform that are all enhanced with LightSail’s seven layers of educational features.'
                },
                {
                    image: 'planets/svg/moon-yellow.svg',
                    label: 'Biography Center',
                    note: 'In LightSail’s Biography Center, children can explore books, encyclopedia articles, and other content about famous and infamous people from history and the present day.\n\nOur Biography Center contains curated biography collections and shelves of biographies organized alphabetically by last name. The search function also lets children sort by area of work or interest, nationality, ethnicity, gender, or time period.'
                },
                {
                    image: 'planets/svg/moon-blue.svg',
                    label: 'Lerner Digital Interactive Books',
                    note: 'Designed to improve literacy skills for emergent and struggling readers, Lerner Digitial Interactive Books are audio e-books with enhanced features like a comprehension quiz, a teacher\'s guide, and supplemental activities.'
                },
                {
                    image: 'planets/svg/moon-purple.svg',
                    label: 'Lerner Sports',
                    note: 'Lerner Sports explores the backgrounds, career-defining moments, and everyday lives of popular athletes. Accessible directly through the LightSail platform, the Lerner Sports module helps children develop research skills and citation experience for reports or simply provides a child-friendly space for pleasure reading.'
                },
                {
                    image: 'planets/svg/moon-red.svg',
                    label: 'Library Collections',
                    note: 'Library Collections are groups of books, encyclopedia articles, videos, images, and action clips centered around a particular topic or central theme. These collections are perfect for unit studies or thematic learning, allowing a parent to gather content of their choosing and present it to a child for self-study either indefinitely or for a certain period of time.'
                },
                {
                    image: 'planets/svg/moon-yellow.svg',
                    label: 'Classics Library',
                    note: 'LightSail has brought 3000 of the most widely acclaimed fiction and non-fiction works in history together in LightSail Classics. This curated collection of books represents the most relevant literature to Western culture, from Ancient Greece, to Medieval England, to Revolutionary Russia, to Progressive America. This collection encompasses the most thought-provoking and delightful works for readers, preschool through adult.'
                },
                {
                    image: 'planets/svg/moon-blue.svg',
                    label: 'Homework',
                    note: 'LightSail gives parents the ability to create independent study assignments, set up accountability checks, and ensure that a certain amount of reading is accomplished with the Homework feature.'
                },
                {
                    image: 'planets/svg/moon-purple.svg',
                    label: 'Buy Books',
                    note: 'The Buy Books feature is LightSail’s secure e-commerce platform, a veritable bookstore at your fingertips. Here, parents and children can directly purchase tens of thousands of individual titles and book bundles from dozens of top publishers, including popular homeschool and faith-based publishers.'
                }
            ]
        },
        {
            orbit: 0,
            position: {
                top: 0,
                left: 0
            },
            image: 'images/3.svg',
            label: 'Fluency',
            video: {
                width: 640,
                height: 360,
                src: 'https://player.vimeo.com/video/523712834'
            },
            note: 'Measuring your child’s fluency is critical to having a complete picture of their literacy skills. Other metrics, like how many pages a week they read or even how well they comprehend the content, do not give you all of the pieces. Having an objective way to measure how well your child reads aloud is the only way to gauge whether they are confident, fluent readers.',
            moons: [
                {
                    image: 'planets/svg/moon-red.svg',
                    label: 'Read-Aloud / Retelling Assignment',
                    note: 'In a Read-Aloud / Retelling assignment, a parent first chooses a selection of text for their child to read. Optionally, a parent can also add a retelling portion to the assignment. When your child is finished recording their read-aloud, LightSail will prompt them to record themselves telling you what the passage they just read was about in their own words.'
                },
                {
                    image: 'planets/svg/moon-yellow.svg',
                    label: 'Read-Aloud in a Book',
                    note: 'While reading any book or article in LightSail, the Read Aloud feature allows children to spontaneously record themselves reading a portion of text and send it to a parent for their review and feedback.'
                },
                {
                    image: 'planets/svg/moon-blue.svg',
                    label: 'Speaking / Listening / Writing Assignment',
                    note: 'A Speaking/Listening/Writing assignment is an activity-based module that can be configured in many different ways to assess and practice linguistic fluency skills. For example, a parent could ask their child to read a poem and respond with a narrative summary.'
                },
                {
                    image: 'planets/svg/moon-purple.svg',
                    label: 'Running Record',
                    note: 'Creating a running record will allow you to easily and objectively assess and track your child’s fluency and read-aloud accuracy. After a child is finished recording a Read-Aloud assignment, the parent creates a running record, which allows LightSail to calculate their WCPM (words correct per minute). '
                }
            ]
        },
        {
            orbit: 0,
            position: {
                top: 0,
                right: 0
            },
            image: 'images/4.svg',
            label: 'Vocabulary',
            video: {
                width: 640,
                height: 352,
                src: 'https://player.vimeo.com/video/523998312'
            },
            note: 'LightSail takes a spiral approach to teaching vocabulary that is immersive and individualized. We integrate vocabulary instruction into the platform in multiple ways, presenting children with new words in a variety of contexts and increasing their comprehension as they encounter these words multiple times. Additionally, the words chosen for your child are completely personalized to their individual Lexile reading comprehension and vocabulary level, which automatically adjusts as they learn.',
            moons: [
                {
                    image: 'planets/svg/moon-red.svg',
                    label: 'Clozes',
                    note: 'As a child reads a book on LightSail, they encounter a cloze, or blank, and they must choose the appropriate word from among four possible options to fill that space. These clozes take your child from being a passive consumer of the content to being an active participant, absorbing and analyzing the information. Clozes require them to think critically about the text, make inferences, and draw on prior knowledge, and as they make word choices to fill in the blanks, they learn new words and word meanings in a very organic way.'
                },
                {
                    image: 'planets/svg/moon-yellow.svg',
                    label: 'Spelling Bee',
                    note: 'Children are offered Spelling Bees whenever they finish reading a book. When a child participates in a Spelling Bee, they aren’t just learning to spell. They hear the proper pronunciation of a word, its part of speech, synonyms for the word, and its usage in a sentence.'
                },
                {
                    image: 'planets/svg/moon-blue.svg',
                    label: 'Vocabulary Assessment',
                    note: 'With Vocabulary Assignments, parents can proactively help their children practice new vocabulary words. One of the many great ways to use this tool is by assigning word lists from other subjects your child is studying like science or history.'
                },
                {
                    image: 'planets/svg/moon-purple.svg',
                    label: 'Word Work',
                    note: 'LightSail’s Word Work module does precisely what it sounds like; it helps your child work on vocabulary and spelling words they have answered incorrectly in the course of their assignments. With Word Work, you don’t have to worry that your child is senselessly practicing vocabulary they have already mastered. '
                },
                {
                    image: 'planets/svg/moon-red.svg',
                    label: 'Synonym / Definition Builder',
                    note: 'Synonym / Definition Builder is a full dictionary that a child can access either from directly inside the books and articles they read by clicking on any word or from anywhere on their dashboard. They can read definitions, see synonyms and parts of speech in a word tree, and see word translations and examples of the word used in sentences.'
                },
                {
                    image: 'planets/svg/moon-yellow.svg',
                    label: 'Parts of Speech',
                    note: 'When a child opens the Parts of Speech feature while reading a book, LightSail immediately color-codes all of the nouns on the page with a purple box - the default setting. Different parts of speech each have their own color, and children can highlight any or all of them as they read. Verbs, adjectives, conjunctions, and more can be color-coded either within the text of the book itself or shown in the side panel.'
                },
                {
                    image: 'planets/svg/moon-blue.svg',
                    label: 'Parts of Speech',
                    note: 'Parts of Speech is a feature inside books and articles that lets your child highlight and isolate words based on their part of speech. Homeschoolers and others will find Parts of Speech useful for writing lessons, diagramming sentences, or to examine the structure of classical works of literature, prose, and poetry, and it is an invaluable tool for learning grammar, vocabulary, syntax, sentence structure, and more.'
                },
                {
                    image: 'planets/svg/moon-purple.svg',
                    label: 'Word Lists',
                    note: 'LightSail provides targeted word lists for parents to choose from when creating Spelling Bees and Vocabulary Assignments. Search by Lexile level, word families, sight words, themed words, and more. Then, choose from individual words or entire lists to create personalized assignments for your child.'
                }
            ]
        },


        // 1

        {
            orbit: 1,
            position: {
                bottom: 0,
                right: 0
            },
            image: 'images/5.svg',
            label: 'Gamification',
            note: 'LightSail believes reading and writing should be fun! That is why gamification is built into every aspect of the platform with motivational badges, incentifying gifts, social sharing options, and more.',
            moons: [
                {
                    image: 'planets/svg/moon-blue.svg',
                    label: 'Badges',
                    note: 'Badges are available for dozens of different activities and achievements. Children earn badges for everything from reading a book to completing a writing assignment, and parents can attach badges to assignments or goals of their choosing as well. On-screen rolls show children their progress toward earning badges, prompting them to fill up the bar to achieve the prize.'
                },
                {
                    image: 'planets/svg/moon-purple.svg',
                    label: 'Goals',
                    note: 'Parents set reading goals based on how many minutes they would like their child to strive to read daily, weekly, or monthly. Children can see their progress toward their goal in an on-screen roll, and are rewarded for success with badges and other incentives.'
                },
                {
                    image: 'planets/svg/moon-red.svg',
                    label: 'Milestones',
                    note: 'Children set milestones for themselves, which are incremental in nature, empowering them to take ownership of their reading progress. Think of milestones as markers on a child’s road to reading success. Children can see their progress toward their milestones in an on-screen roll, and are rewarded for success with badges and other incentives.'
                },
                {
                    image: 'planets/svg/moon-yellow.svg',
                    label: 'Gifting',
                    note: 'A little extrinsic reward can be a powerful thing! LightSail gives parents the ability to offer customized “gift” rewards for reaching goals and completing assignments. With this feature, parents can creatively motivate children to read and write with meaningful rewards. Rather it’s staying up 30 minutes late or a special trip out for ice cream, parents determine what gift will provide that extra incentive to persevere.'
                },
                {
                    image: 'planets/svg/moon-blue.svg',
                    label: 'Tournaments',
                    note: 'From March Madness to video games - we all love a good tournament! LightSail incentifies reading by letting children compete in reading tournaments for badges and other prizes. '
                },
                {
                    image: 'planets/svg/moon-purple.svg',
                    label: 'Cloze Milestone Roll',
                    note: 'Extra fun and encouragement is built in with gamification features like a cloze milestone roll. For every cloze answered correctly children will see progress in the roll. Every time a child fills up their roll, they receive a new badge.'
                }
            ]
        },
        {
            orbit: 1,
            position: {
                bottom: 0,
                left: '50%'
            },
            image: 'images/6.svg',
            label: 'Parental Control',
            note: 'LightSail gives parents peace of mind knowing that they have complete oversight and control over all of their children’s content and activity like never before.',
            moons: [
                {
                    image: 'planets/svg/moon-yellow.svg',
                    label: 'Chat Control',
                    note: 'Parents choose whether children can chat only within their immediate family, with others in their grade or a range of grades, or if they can chat at all. All of a child\'s chats are reviewable by parents. And they can report or remove their child from a chat at any time.'
                },
                {
                    image: 'planets/svg/moon-blue.svg',
                    label: 'Feature Control',
                    note: 'Parents determine if their child is offered a Spelling Bee at the end of each book, if they can access the Action Clip library and, of so, at what times of the day, and more.'
                },
                {
                    image: 'planets/svg/moon-purple.svg',
                    label: 'Video Control',
                    note: 'Parents set how many minutes a child must read before unlocking a video to watch, or they can give full access or block videos altogether. They also have the option of blocking videos during certain hours of the day.'
                },
                {
                    image: 'planets/svg/moon-red.svg',
                    label: 'Audiobooks Control',
                    note: 'Parents set how many minutes a child must read before unlocking an audiobook to listen to, or they can give full access or block audiobooks altogether. They also have the option of blocking audiobooks during certain hours of the day.'
                },
                {
                    image: 'planets/svg/moon-yellow.svg',
                    label: 'Content Appropriateness Matrix',
                    note: 'LightSail has created an unparalleled content appropriateness tool that rates and tags content on dozens of factors and gives parents complete control over each child’s access. Our matrix divides categories of potentially objectionable content into highly detailed sub-categories. For example, the violence category has more than a dozen individual and highly nuanced tags. Moreover, the matrix goes beyond maturity ratings to include factors families care about based on their cultural and religious values.'
                },
                {
                    image: 'planets/svg/moon-blue.svg',
                    label: 'Grade Appropriate Content',
                    note: 'While LightSail serves content to children based on their Lexile reading level, LightSail also takes their grade level into consideration. This means that even if a child is a very advanced reader, they will not be offered content written for much more mature reader unless a parent approves it.'
                },
                {
                    image: 'planets/svg/moon-purple.svg',
                    label: 'Block Content',
                    note: 'Parents always have the ability to block individual pieces of content for individual children, holding back books or videos on a case by case basis.'
                }
            ]
        },
        {
            orbit: 1,
            position: {
                bottom: 0,
                left: 0
            },
            image: 'images/7.svg',
            label: 'Assessments',
            note: 'LightSail uses multiple assessment techniques to precisely measure a child\'s reading level and then uses that information to tailor their educational experience precisely for them. A child\'s reading library, writing prompts, spelling words, and more will be leveled for each individual child, and LightSail will grow with them - adapting as they learn and progress.',
            moons: [
                {
                    image: 'planets/svg/moon-yellow.svg',
                    label: 'Lexile',
                    note: 'Used every year by over 35 million children in the US alone, the Lexile framework is a proven tool to measure and forecast reading ability. Scientifically validated by over 1,000 external studies worldwide, including Johns Hopkins University, a Lexile assessment allows you to personalize and optimize a child’s education by finding books that are just the right “fit.”'
                },
                {
                    image: 'planets/svg/moon-blue.svg',
                    label: 'Cloze Assessment',
                    note: 'LightSail provides your child with an authentic reading experience while also collecting data through embedded cloze (fill-in-the-blank) assessments. These assessments are placed through a special engine created in partnership with MetaMetrics®. As children read, a word is covered up with a green box. Children click on the box and select the word they think best fits in the blank space from a list of four options. Children then receive immediate feedback - and continue reading.'
                },
                {
                    image: 'planets/svg/moon-purple.svg',
                    label: 'Multiple Choice Questions',
                    note: 'LightSail contains thousands of multiple choice questions embedded at logical points throughout the texts. These leveled assessments help provide parents with additional insight into their children’s reading comprehension abilities.'
                },
                {
                    image: 'planets/svg/moon-red.svg',
                    label: 'Short Response Questions',
                    note: 'LightSail has spent millions of dollars and thousands of hours hiring highly experienced teachers to add quality short response questions to their books, all aligned with commonly used standards. '
                },
                {
                    image: 'planets/svg/moon-yellow.svg',
                    label: 'Power Challenge',
                    note: 'A Power Challenge is an adaptive and unintimidating placement test that precisely determines a child’s reading level and allows LightSail to match the child with reading content that both engages and challenges them to grow as a reader.'
                }
            ]
        },
        {
            orbit: 1,
            position: {
                top: '50%',
                left: 0
            },
            image: 'images/8.svg',
            label: 'MultiMedia',
            note: 'LightSail is a complete language arts platform for the 21st Century, incorporating a vast array of multimedia resources. Explore the world\'s landmarks with full 360 [degree symbol] images. Build a digital, interactively timeline of the history of Rome. Incorporate educational videos and TED Talks into unit studies and so much more.',
            moons: [
                {
                    image: 'planets/svg/moon-blue.svg',
                    label: 'Video Library',
                    note: 'Video has the ability to engage, educate, and entertain like nothing else does. That is why LightSail places that power in the hands of parents, allowing them to integrate educational video content with reading and writing assignments.'
                },
                {
                    image: 'planets/svg/moon-purple.svg',
                    label: '360 Images / Image Library',
                    note: 'LightSail shows children the world and beyond with over 80 spectacular full 360° images, all enhanced with special features like ambient music that plays during viewing to boost engagement and interest.'
                },
                {
                    image: 'planets/svg/moon-red.svg',
                    label: 'Google Street View',
                    note: 'Bringing Google Street View into the LightSail platform provides a child-friendly, secure online space for exploring that parents can trust. Additionally, we’ve added a Randomization button kids love that transports them to unexpected and fascinating locales around the globe. '
                },
                {
                    image: 'planets/svg/moon-yellow.svg',
                    label: 'Live Streams',
                    note: 'LightSail brings homeschoolers over 1,500 live streams from around the world on high-interest, educational topics like landmarks, cities, animals, space, waterfalls, and more. '
                },
                {
                    image: 'planets/svg/moon-blue.svg',
                    label: 'World Book Maps',
                    note: 'World Book\'s Atlas feature links to articles, tables, and data about the world, helping children find maps showing political, population, economic and meteorological information. Interactive maps let children explore by continent, country, state/province/region, city, or point of interest and find related articles and other resources.'
                },
                {
                    image: 'planets/svg/moon-purple.svg',
                    label: 'World Book Timelines',
                    note: 'World Book Timelines is an interactive database of over 650 premade timelines and over 14,000 individual events. Children can use these timelines as-is, customize them for their individual lessons, or build their own from scratch. '
                },
                {
                    image: 'planets/svg/moon-red.svg',
                    label: 'Ted Talk & Ted-Ed Library ',
                    note: 'LightSail has curated over 3,000 TED Talks especially for children on more than 150 high-interest topics like sports, art, activism, history, and science. Additionally, we offer TED-Ed videos, which are stylized or animated videos that inform and entertain. '
                },
                {
                    image: 'planets/svg/moon-yellow.svg',
                    label: 'Action Clip Library',
                    note: 'LightSail brings words to life for children with action clips. While videos bring context to books as a whole, action clips add a new dimension of understanding to words and phrases. Thousands of these high-quality, 5 to 30 second, educational clips are embedded in the books and articles in the platform, providing an additional layer of contextual imagery. From a cheetah running to a baseball player hitting a homerun, action clips allow children to visually experience what they are reading. '
                }
            ]
        },
        {
            orbit: 1,
            position: {
                top: 0,
                left: 0
            },
            image: 'images/9.svg',
            label: 'Data Feedback',
            note: 'LightSail believes that meaningful data feedback is one of the most valuable tools parents and children can have to affect real literacy progress.',
            moons: [
                {
                    image: 'planets/svg/moon-red.svg',
                    label: 'Parent Dashboard',
                    note: 'With the in-depth information provided in the parent dashboard, parents know precisely how their child is progressing and where they might benefit from additional help or practice. From the Child’s Data section of a parent’s dashboard, they can view a total summary of all their child’s most important data points and then dive deeper into each one.'
                },
                {
                    image: 'planets/svg/moon-yellow.svg',
                    label: 'Child Dashboard',
                    note: 'Because LightSail believes that children also benefit from meaningful data, they have access to their own data dashboard. This encourages children to take ownership over their educational experience, set realistic goals for themselves, and feel confident knowing exactly how they are doing in their literacy growth.'
                },
                {
                    image: 'planets/svg/moon-blue.svg',
                    label: 'Lexile',
                    note: 'Used every year by over 35 million children in the US alone, the Lexile framework is a proven tool to measure and forecast reading ability. Scientifically validated by over 1,000 external studies worldwide, including Johns Hopkins University, a Lexile assessment allows you to personalize and optimize a child’s education by finding books that are just the right “fit.”'
                }
            ]
        },
        {
            orbit: 1,
            position: {
                top: 0,
                left: '50%'
            },
            image: 'images/10.svg',
            label: 'Early Learners',
            note: 'LightSail has captivating and educational content for every member of the family, from preschoolers to adults. Our features for early learners help little ones build a strong foundation of knowledge and skills, make connections, learn independently, and aquire research and navigation skills -- all while having fun!',
            moons: [
                {
                    image: 'planets/svg/moon-red.svg',
                    label: 'World Book Kids',
                    note: 'World Book Kids takes the depth and breadth of information in a full reference library and presents it in an interactive, easy to read format that is perfect for younger students. High-interest content adapted especially for this age group invites children to dig deeper into topics and make knowledge connections between different subjects. '
                },
                {
                    image: 'planets/svg/moon-yellow.svg',
                    label: 'World Book Early Learners',
                    note: 'LightSail has partnered with World Book, a trusted source for educational content for over 100 years, to bring interactive learning resources to LightSail families for every child, from the preschool years and up. World Book’s digital early learning resources, designed for the preschool and kindergarten age group, provides engaging, playful content that will delight and entertain as it builds a foundation of knowledge and skills for later learning.'
                },
                {
                    image: 'planets/svg/moon-blue.svg',
                    label: 'Lerner Digital Interactive Books',
                    note: 'Designed to improve literacy skills for emergent and struggling readers, Lerner Digitial Interactive Books are audio e-books with enhanced features like a comprehension quiz, a teacher\'s guide, and supplemental activities.'
                },
                {
                    image: 'planets/svg/moon-purple.svg',
                    label: 'Lerner Collections like Crayola, Sesame Street, etc.',
                    note: 'LightSail\'s partnership with Lerner brings branded collections of books that will delight and engage young readers from Crayola, Sesame Street, and others.'
                },
                {
                    image: 'planets/svg/moon-red.svg',
                    label: 'Syllables',
                    note: 'The Syllables feature, available in all LightSail books and articles, will, by default, break down 2-, 3-, and 4-syllable words--showing them color-coded and separated into syllables within the text of the book itself as well as hyphenated by syllable within the side panel. This feature is perfect for children still mastering phonics and decoding, struggling readers, or even more advanced readers as they encounter never-before-read vocabulary.'
                }
            ]
        },
        {
            orbit: 1,
            position: {
                top: 0,
                right: 0
            },
            image: 'images/11.svg',
            label: 'Struggling Readers',
            note: 'LightSail\'s goal is to make the world a more literate place, so it brings many one-of-a-kind features and quality content especially designed to support struggling readers.',
            moons: [
                {
                    image: 'planets/svg/moon-red.svg',
                    label: 'Personalized Reader',
                    note: 'LightSail’s one-of-a-kind Personalized Reader tool helps struggling readers unlock the magic of books. Whether a child’s reading difficulties are due to dyslexia, ADHD, CVI (cortical visual impairment), or simple distraction, Personalized Reader by LightSail allows them to fully customize their reading experience and access the content in ways no physical book or static e-reader can.'
                },
                {
                    image: 'planets/svg/moon-blue.svg',
                    label: 'Lerner Digital Interactive Books',
                    note: 'Designed to improve literacy skills for emergent and struggling readers, Lerner Digitial Interactive Books are audio e-books with enhanced features like a comprehension quiz, a teacher\'s guide, and supplemental activities.'
                },
                {
                    image: 'planets/svg/moon-purple.svg',
                    label: 'Audiobook Library',
                    note: 'LightSail contains over 1,500 audiobooks of three different types to suit different readers: standard audiobooks, audiobooks with text highlighting by word, and audiobooks with text highlighting by sentence. '
                },
                {
                    image: 'planets/svg/moon-yellow.svg',
                    label: 'Syllables',
                    note: 'The Syllables feature, available in all LightSail books and articles, will, by default, break down 2-, 3-, and 4-syllable words--showing them color-coded and separated into syllables within the text of the book itself as well as hyphenated by syllable within the side panel. This feature is perfect for children still mastering phonics and decoding, struggling readers, or even more advanced readers as they encounter never-before-read vocabulary.'
                }
            ]
        },
        {
            orbit: 1,
            position: {
                top: '50%',
                right: 0
            },
            image: 'images/12.svg',
            label: 'Grading',
            note: 'In addition to the multiple ways that LightSail automatically assesses a child’s progress, a parent can easily grade a child’s answers to short response questions using either standard grading or a simple rubric. And LightSail contains a powerful tool for objectively grading and tracking your child\'s fluency progress called a Running Record.',
            moons: [
                {
                    image: 'planets/svg/moon-blue.svg',
                    label: 'Rubrics',
                    note: 'Parents with no experience grading need not fear. LightSail provides parents with simple exemplar-based rubrics and rationales to help them provide their children with quality, actionable feedback. Parents are also able to customize and create their own rubrics.'
                },
                {
                    image: 'planets/svg/moon-purple.svg',
                    label: 'Standard grading',
                    note: 'LightSail\'s simple standard grading options give parents four possible grade choices to assign. But these are not typical letter grades. They are informative responses that give your child contextual feedback, while aligning with standard levels of "below," "approaching," "on," and "above" target.'
                },
                {
                    image: 'planets/svg/moon-red.svg',
                    label: 'LightSail\'s automatic grading',
                    note: 'LightSail automatically grades a child\'s cloze assessments, Spelling Bees, and multiple choice responses, freeing parents to focus on more important tasks.'
                },
                {
                    image: 'planets/svg/moon-yellow.svg',
                    label: 'Running Record',
                    note: 'Ever wonder how to grade your child\'s read-aloud ability or track their read-aloud growth over time? By creating Running Records, you get objective, detailed insight into another critical component, their reading confidence and accuracy. '
                }
            ]
        },


        // 2

        {
            orbit: 2,
            position: {
                bottom: 0,
                right: 0
            },
            image: 'images/13.svg',
            label: 'Parent Support',
            note: 'LightSail is serious about improving childrens literacy and is committed to helping parents build their children\'s literacy skills and fluency. To that end, we offer a variety of support options to not only help parents use LightSail to its maximum effectiveness, but answer their questions about literacy, homeschooling, and more.',
            moons: [
                {
                    image: 'planets/svg/moon-yellow.svg',
                    label: 'Help Videos',
                    note: 'We have a complete library of help videos at your fingertips within the LightSail platform. Each screen within Lightsail has a play button for the corresponding help video where you can see an explanation of how to use each feature. Looking for something specific? Search our help center and find all videos related to your question.'
                },
                {
                    image: 'planets/svg/moon-blue.svg',
                    label: 'Webinars',
                    note: 'LightSail offers a complimentary weekly webinars for subscribers.\nThese webinars are taught by experienced instructional coaches who will guide you through LightSail’s multitude of features to help you understand and use them with maximum effectiveness. Through this forum, you can chat with experienced educators and homeschoolers about your issues and challenges and get answers to your specific questions about growing your children into fully literate adults.'
                },
                {
                    image: 'planets/svg/moon-purple.svg',
                    label: 'Facebook Group',
                    note: 'We have a vibrant and engaged online community, hosted by our experienced homeschool experts who will share inside tips and tricks on using LightSail for homeschooling. Parents can interact with other LightSail homeschoolers, ask questions, share ideas, or just hang out and relax.'
                },
                {
                    image: 'planets/svg/moon-red.svg',
                    label: 'Tech Support',
                    note: '[Not sure what to specifically focus on for this one. Guidance please.]'
                }
            ]
        },
        {
            orbit: 2,
            position: {
                bottom: 0,
                left: 0
            },
            image: 'images/14.svg',
            label: 'Social Features',
            note: 'Humans are social. And since reading is a uniquely human experience, it can be even better when we share the experience with others. LightSail offers a variety of social, or community-centric, features that capitalize on the fact that shared activities and achievements or a little friendly competition can inspire excitement for reading.',
            moons: [
                {
                    image: 'planets/svg/moon-purple.svg',
                    label: 'Book Chats',
                    note: 'The Book Chat feature adds another dimension to reading by allowing children to collaborate with their peers about what they’re reading. In LightSail, every book can have a public chat for every grade level in which children can ask questions, link to text within the book, express themselves with fun emojis, engage in an existing discussion, or start one of their own.'
                },
                {
                    image: 'planets/svg/moon-red.svg',
                    label: 'Book Clubs',
                    note: 'Book clubs foster a love of reading in a positive community atmosphere. Parents and children can participate in LightSail book clubs together, which can be for the duration of a single book or an ongoing series of different books. '
                },
                {
                    image: 'planets/svg/moon-yellow.svg',
                    label: 'Clubhouse',
                    note: 'LightSail knows that sharing a good book with others makes the reading experience richer and more enjoyable, bringing different perspectives and new insights. To encourage this, LightSail has created Clubhouses. A child’s clubhouse is their personal reading-related domain in which they pick the themes and guide the discussions.'
                },
                {
                    image: 'planets/svg/moon-blue.svg',
                    label: 'Reading Tournaments',
                    note: 'From March Madness to video games - we all love a good tournament! LightSail incentifies reading by letting children compete in reading tournaments for badges and other prizes. '
                },
                {
                    image: 'planets/svg/moon-purple.svg',
                    label: 'Social Sharing of Achievements',
                    note: 'Children take pride in sharing their achievements with friends and family, so, with a parent’s permission, they can post their latest success to popular social media platforms like Facebook, Instagram, or Tiktok, or share them within the LightSail platform in Book Club and Clubhouse. Parents also have the opportunity to share their children’s achievements for them.'
                }
            ]
        },
        {
            orbit: 2,
            position: {
                top: 0,
                left: 0
            },
            image: 'images/15.svg',
            label: 'Other',
            note: '',
            moons: [
                {
                    image: 'planets/svg/moon-red.svg',
                    label: 'Assignment Module',
                    note: 'LightSail has built a comprehensive assignment module covering our four pillars of literacy: reading, writing, vocabulary, and fluency. All assignments have dedicated assignment chats, goals, commenting, highlighters and labels, a Call for Help feature if a child gets stuck, and more.'
                },
                {
                    image: 'planets/svg/moon-yellow.svg',
                    label: 'Import Content Wizard',
                    note: 'Import articles, website pages, pdfs, Word documents, or Google Docs into LightSail using the Import Content Wizard. Assign reading content from virtually any source within the safety of the LightSail platform and integrate it with LightSail’s features such as tracking reading minutes, adding cloze assessments, and more.'
                },
                {
                    image: 'planets/svg/moon-blue.svg',
                    label: 'LightSail Shared Library',
                    note: 'Content you import with the Import Content Wizard is saved to your private drive where it can be edited, redacted, shared with your child, added to Library Collections, and more. '
                },
                {
                    image: 'planets/svg/moon-purple.svg',
                    label: 'Donate a license',
                    note: 'LightSail believes that the gift of literacy is one of the most powerful, life-changing gifts you can give. That is why the LightSail Foundation will donate a license for every license a family purchases to the charity of their choice.'
                },
                {
                    image: 'planets/svg/moon-yellow.svg',
                    label: 'Donate a license',
                    note: 'LightSail believes that the gift of literacy is one of the most powerful, life-changing gifts you can give. That is why the LightSail Foundation will donate a license for every license a family purchases to the charity of their choice.'
                },
                {
                    image: 'planets/svg/moon-blue.svg',
                    label: 'Search and Advanced Search',
                    note: 'LightSail uses predictive search technology to find content based on search queries. Additionally, the user can filter results by subject, genre, topic, classification, and Lexile level, making it easy for parents and children to find the resources they need.'
                }
            ]
        },
        {
            orbit: 2,
            position: {
                top: 0,
                right: 0
            },
            image: 'images/16.svg',
            label: 'Research',
            note: '???',
            moons: []
        }


    ]
}