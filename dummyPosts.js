
// status flow is AWAITING_APPROVAL, SCHEDULED or REJECTED, PUBLISHED
const dummyPosts= [
  {
    message: 'by 1 of my favorite artists , Sergio Aragones',
    id: '54618571998_786900103439085',
    publishTime: '2023-08-18T21:25:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/368255546_786815863447509_1186470169543968631_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZxnfhRLBalIQ7kNvgHNI18Q&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYDVqWYPCnxhwxg3c9ez2Xj5uvETWom_g-7OOOJmKAxzNg&oe=679DEAE3',
    status: 'SCHEDULED',
    imageDescription:
      'A man visits a psychic who tells him the number "70323." He uses this number to buy a lottery ticket but loses. Upset, he confronts the psychic with a bat, and the story ends with both of them in prison uniforms with consecutive numbers, suggesting the incident led to their arrest.',
  },
  {
    message: '',
    id: '54618571998_10152023328941999',
    publishTime: '2013-12-06T05:45:55+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/468054940_10161766777626999_5027007640011443122_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=DXz4g4xlW0gQ7kNvgHgIUmh&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AGG52BA_W30qiEYKWzf-LYW&oh=00_AYDNohFDphHGjfuKeiN3lvMeQwn1Nxaeg5t5d_3xcf2q6Q&oe=679DF9DF',
    status: 'SCHEDULED',
    imageDescription:
      'The image features classic cartoon characters from Looney Tunes arranged against a bold orange background. The text above reads, "If you remember these guys..." and below it says, "Saturday mornings were worth getting up early!!!"',
  },
  {
    message: '',
    id: '54618571998_644254161037014',
    publishTime: '2023-02-12T18:12:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/330502026_1156513251514503_569978974807944228_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=C-HLt9wBEfkQ7kNvgF7CIYL&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AOWK0IeDNMQbdSLHTr-neG3&oh=00_AYA_gugH71r1i8M2UeKjmSxc4QxaZQWb2TYE-shML2b6yw&oe=679DC953',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'Elderly cartoon cat and mouse sitting in rocking chairs, reminiscing about chasing each other, with a caption appreciating them for making childhood memorable.',
  },
  {
    shares: 39143,
    reactions: 251301,
    message: 'by Kerry Callen',
    id: '54618571998_787366430059119',
    comments: 3297,
    publishTime: '2023-08-19T16:38:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/369052980_787123156750113_8404219918839281204_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sh2vyV94uVwQ7kNvgE2tDe1&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYDupi8mrLDLPHSRL5LZjZFRjl7zVQbW87LdztuL_3mlCg&oe=679DEB04',
    status: 'PUBLISHED',
    imageDescription:
      'The comic depicts a humorous interaction between a superhero resembling Superman and a superheroine resembling Wonder Woman. Superman asks why Wonder Woman blocks bullets with her bracelets despite her invulnerability. As bullets bounce off her, causing her chest to jiggle, she giggles. Superman responds with a simple "Understood," realizing the situation.',
    postUrl: 'https://www.facebook.com/54618571998_787366430059119',
    totalEngagement: 293741,
  },
  {
    message: 'A life size Hulk made from scrap metal',
    id: '54618571998_722208056574957',
    publishTime: '2023-05-21T20:21:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/348270354_1408033703101522_8451925834438476081_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mmTRLETg14UQ7kNvgEOCqp4&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ArYh5GykvSY8MnqKvLRRkWA&oh=00_AYA_p19zcmzoPXYmnThTyn2XYTiifgW_G4-7EqJUXb4oPQ&oe=679DD42A',
    status: 'SCHEDULED',
    imageDescription:
      'A large, muscular sculpture made from a metal mesh material depicts a superhero-like figure with bulging muscles and tattered shorts, standing outside a building next to trees and foliage.',
  },
  {
    message: 'by Kerry Callen',
    id: '54618571998_747732587355837',
    publishTime: '2023-06-24T16:11:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/355904145_747426834053079_8851719935915349118_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Q-LTGuLyO1YQ7kNvgGaEAFc&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ASXWjd5_HguOydGi6Cp1YcZ&oh=00_AYBBqMWHEAUpOJ-EYvVEK9sfJWMOhFmmFCjqdxoe06cGFA&oe=679DFB66',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic strip titled "Super Antics #9," depicting a humorous parody of superheroes at a meeting. A female superhero named Diana gives brutally honest opinions about her fellow heroes, criticizing them for things like being unable to grow a beard, standing in the dark to look cool, and having small hands. She reveals her lasso of truth inadvertently got wrapped around her leg, causing her bluntness.',
  },
  {
    message: 'By Rafael Sam.\n\nhttps://rafael_sam.artstation.com/',
    id: '54618571998_739763778152718',
    publishTime: '2023-06-13T16:11:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/353785684_739455421516887_2155588873031892824_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QWkguKmviNkQ7kNvgGrlQsv&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANf0kMIeMC_mKos2kMEjn4q&oh=00_AYBqMq-CY4JZ2cqeNFRhGHTnydPYiVbHpKOWCUhZuEnFfw&oe=679DDD8C',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This image is a cartoon illustration depicting two older men with halos, suggesting heavenly figures, interacting warmly with a child dressed as a superhero. The setting resembles a colorful diner with nostalgic elements. A chalkboard in the background has the phrases "I LOVE YOU 3000" and "EXCELSIOR," adding emotional and inspirational touches to the scene.',
  },
  {
    message: '',
    id: '54618571998_812668057528956',
    publishTime: '2023-09-26T13:09:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/382986572_812114877584274_3249745180222276001_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IdpX80YWCXYQ7kNvgEJGmOd&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AQ6uIXz3wArX-td61b3bq_j&oh=00_AYAgPzjQvAuH1yGj9BxLNFLktXCUK-Dhtco7wzbDHEfWZA&oe=679DE847',
    status: 'SCHEDULED',
    imageDescription:
      'The image features an animated scene with a large, white, furry creature holding and looking at a smaller character, who resembles a rabbit. The text says, "I will call him George and I will love him and pet him and squeeze him." At the bottom, there\'s a prompt to "Click Like if you remember this."',
  },
  {
    message: 'always encourage your kids',
    id: '54618571998_1100854462043646',
    publishTime: '2024-10-30T18:12:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/464606586_1098054012323691_5232726658518553200_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=x6YXJrly-4sQ7kNvgEa4fOh&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad6wxUoh2wk8IsbdMQixRCG&oh=00_AYArqAHKSwLvP8Sq-Z-ml6wl_VDlhHjhxlnDC8BUn08AyA&oe=679DBFE9',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image shows a side-by-side comparison of two illustrations of Superman. On the left is a child\u2019s drawing, and on the right is a professionally rendered artwork. The text above the images emphasizes the importance of encouraging young artists, using these two images as an example of artistic growth over time.',
  },
  {
    message: '',
    id: '54618571998_10158844029431999',
    publishTime: '2021-04-10T20:54:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/171707735_10158844029111999_4376679354312442766_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zJaLmi206HEQ7kNvgH6G4pu&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AznWKKcyUvTB23EFe2RVM0D&oh=00_AYCIUqQYI1PhhA3yylBc37AUADsrz3A4lu2yMkbPVZpoMA&oe=67BF750F',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'In the image, Spider-Man is handing an envelope to a comic artist who is drawing at a desk. Spider-Man is leaning through an open window. A poster of Spider-Man is on the wall, and the text bubble above Spider-Man says, "Here\'s this month\'s payment. Just keep drawing me the way you did when I was young."',
  },
  {
    message: 'by Kerry Callen',
    id: '54618571998_766137995515296',
    publishTime: '2023-07-19T16:11:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/361864575_766109292184833_2235003491452979349_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gwUz29CcKq4Q7kNvgEyWgki&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ATc73HRWyp02Z-tyObKGEZm&oh=00_AYCNJXVsbkLptcGMxtgZ0qYWI0zuPmwcfa17Z6U-GkUSHA&oe=679DD0ED',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'In this comic parody, various superheroes, including Aquaman and Superman-like characters, are preparing to take off with the phrase "Let\'s go!" Aquaman attempts to fly but crashes to the ground. He awkwardly explains that he forgets he\'s on land and not underwater. His blunder is mocked by other superheroes who find it amusing, leaving Aquaman embarrassed. The scene ends with everyone laughing jovially at the mishap.',
  },
  {
    shares: 8974,
    reactions: 43536,
    message: 'Merry Christmas from Superman and Lois',
    id: '54618571998_1137553188373773',
    comments: 1239,
    publishTime: '2024-12-16T15:08:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/470228953_1137276875068071_52427861538820447_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wCx-z4u7uFoQ7kNvgG4fljU&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ApXEvBg0bIfUdm-NblRBs-a&oh=00_AYANJ8wewKxkZyljJQcQ58PpYhmCW4bRfkrblVMh6HY_lQ&oe=679DC698',
    status: 'PUBLISHED',
    imageDescription:
      'Two people are standing together in a festive setting, holding a "Merry Christmas" sign. One is dressed as Superman, and the other is wearing formal attire and winking. The image is bordered with Christmas decorations.',
    postUrl: 'https://www.facebook.com/54618571998_1137553188373773',
    totalEngagement: 53749,
  },
  {
    message:
      'Classic Comic - Jonny Quest #1 (1964) - Only Issue. Comic adapted from Pilot episode of the ABC prime-time Cartoon series. Back cover Pin-Up',
    id: '54618571998_623715809757516',
    publishTime: '2023-01-20T16:11:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/326546353_858185678793255_8483677284744930734_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Q6embsD2y4QQ7kNvgHLAgaq&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AEj86Fc0xlMaisai1dICqfl&oh=00_AYDzjcoJZg6d-JEIqXZey8783gi9FUA7IUBHgNx0VLcyGw&oe=679DD47C',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a vintage comic book cover titled "Jonny Quest: The Mystery of the Lizard Men." It features characters in action against green, lizard-like creatures. The background and overall design are illustrative of classic adventure comics, produced by Hanna-Barbera and published by Gold Key.',
  },
  {
    message: 'Yvonne Craig',
    id: '54618571998_807241708071591',
    publishTime: '2023-09-18T13:13:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/380826288_807050128090749_4589768563000346404_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OUGhRVJ6HucQ7kNvgEDhtvG&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AeuYoz_Z6s18yKB-UbYSALw&oh=00_AYCfQSdw7NsnKK4-fegAKjCjpZiQ6f4YDq2Hf6AqkHVACw&oe=679DF930',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'A person in a purple Batgirl costume stands next to a car, with a purple mask and bat symbol on the chest.',
  },
  {
    message:
      'Always encourage your kids ....you just never know what might happen',
    id: '54618571998_781264067336022',
    publishTime: '2023-08-10T16:09:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/366240097_780931574035938_200747604323866109_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cESxxMeZwZ8Q7kNvgGsOG9E&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFmhw3kNsmh72LjrMEnX1-g&oh=00_AYDjX7vg_jUUkJXRUAjKFmrYAhQc0WR1Sb3h8Rlj9FZQdg&oe=679DF8F8',
    status: 'SCHEDULED',
    imageDescription:
      'The image shows a tweet contrasting two illustrations of Superman, one drawn by the artist Alex Ross at age 7 and the other at age 37. The tweet emphasizes the importance of encouraging young artists.',
  },
  {
    message:
      "Here's a great walk down memory lane. Adventures of Big Boy # 1 (1956) by Timely comics. Written by Stan Lee and art by Bill Everett (Timely's Sub-Mariner). These were given away thru the Big Boy chains and their affiliates",
    id: '54618571998_763493522446410',
    publishTime: '2023-07-15T17:55:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/360096053_763137729148656_7122025768328591303_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vNWeeMC0t9MQ7kNvgFKMTK-&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ATc73HRWyp02Z-tyObKGEZm&oh=00_AYCLYJMIjwzckwoneYscihsYfX5HUdXRSH4RFb-pDFU6Xg&oe=679DE8E4',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage comic book cover titled "The Adventures of Big Boy." It features a cartoon character in a checkered outfit with "BIG BOY" written on it, waving and smiling. The cover advertises stories, games, puzzles, and fun, priced at 10 cents.',
  },
  {
    message:
      'Classic Comic - The Jetsons #1 (1963) - 1st comic book appearance of the Jetsons. Based on the ABC TV series',
    id: '54618571998_628148482647582',
    publishTime: '2023-01-25T20:23:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/327265918_1628070760969952_4534464570924445219_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dHFLaqm8Rw4Q7kNvgGUFJMm&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Alupxj5DpbCH-SJ9oxPO6Md&oh=00_AYAQt_l3qM1SRpvRiP9cqSCeR0jMuKrroY99Z7G2UdOh0w&oe=679DE238',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'Comic cover of "The Jetsons" by Hanna-Barbera, featuring the futuristic family in a space scene with various flying gadgets. The style is classic 1960s animation, and the price is marked as 12 cents.',
  },
  {
    message: 'By Kerry Callen',
    id: '54618571998_651625556966541',
    publishTime: '2023-02-20T15:17:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/332163004_507706694776013_924727905065446978_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GvpukOxnkTIQ7kNvgFlxHDJ&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYAhKV2yM_YDBK1ysq2p9-xCjv7QdHP-5t27HKDHI7hFLQ&oe=679DC840',
    status: 'SCHEDULED',
    imageDescription:
      "A parody comic features superhero characters in a humorous discussion. Wonder Woman offers brutally honest and comedic criticisms to her superhero peers. She comments on Superman's lack of a beard, mocks Batman's tendency to stand in darkness, makes fun of Green Lantern's name, and jokes about a hero's small hands. She attributes her remarks to her lasso of truth affecting her speech.",
  },
  {
    message: 'Harvey Korman was the Great Gazoo',
    id: '54618571998_911086537687107',
    publishTime: '2024-02-14T19:12:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/427994910_910606274401800_6813466776643130113_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bSMOY2XKqBwQ7kNvgG2rmA2&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APsNzbbfu_cdkD25yK7t850&oh=00_AYCjZ4tA1ce8-m9CH9OnimzSECV-pGt9MxKINqhmfaDaug&oe=679DEA1D',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image features a cartoon character with a green helmet standing next to an older man in a light-colored suit, against a blue background.',
  },
  {
    shares: 2031,
    reactions: 22822,
    message: 'by Kerry Callen',
    id: '54618571998_888453956617032',
    comments: 584,
    publishTime: '2024-01-14T21:03:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/419693396_887982759997485_196441524123262198_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=clJ0GpV-x4EQ7kNvgHbUJIW&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AnI2vm1qwoJyPrblQR7BRtx&oh=00_AYAym0L4pXGpU7sCnt39n23XRC72m5ciPTINhGPloAQa6w&oe=679DD815',
    status: 'PUBLISHED',
    imageDescription:
      'In the comic "Super Antics #8," various superheroes discuss who the fastest man alive is, proposing a race around the world. The scene shifts to Superman humorously besting Flash by delivering a pie to his face instead, leaving everyone laughing, including Batman, Wonder Woman, Aquaman, and others.',
    postUrl: 'https://www.facebook.com/54618571998_888453956617032',
    totalEngagement: 25437,
  },
  {
    message: 'well it is Sat morning',
    id: '54618571998_624510413011389',
    publishTime: '2023-01-21T14:19:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/326460601_596051151867210_6357386183659606584_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Jr4FHPz4VSMQ7kNvgFKjKfH&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AEj86Fc0xlMaisai1dICqfl&oh=00_AYDPAgUIYMFVxW0VMOLdMdMV6I3ggEKB6v9VUH930oOrrA&oe=679DFB22',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image features a stylized illustration of "The Herculoids," showcasing a group of fantastical creatures and armored individuals posed dynamically against a rocky backdrop. The title "The Herculoids" is prominently displayed at the top in bold, jagged lettering.',
  },
  {
    message:
      'Classic Comic - Bullwinkle #1 (1962) - based on the animated TV series. Al Kilgore cover , art and story',
    id: '54618571998_637219425073821',
    publishTime: '2023-02-04T16:10:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/321666968_580987010552848_381234241299360097_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gqcqwmZ5Y3oQ7kNvgEVo7I4&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AOWK0IeDNMQbdSLHTr-neG3&oh=00_AYBjePZbtccDp7RT_bElXZpkLX-U7G2SYjmZrwDzQbCqpg&oe=679DED1E',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage comic book cover titled "Bullwinkle," published by Gold Key. It features cartoon characters, including a moose and an elephant in front of a colorful geometric background, along with a small, suspicious-looking character in a hat. The price is marked as 12 cents.',
  },
  {
    message: 'Batman Movie 1966',
    id: '54618571998_1103142355148190',
    publishTime: '2024-11-02T14:04:53+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/465062625_1102944778501281_7523285628510329217_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=T5TbCxc-n-sQ7kNvgFb8fL_&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad6wxUoh2wk8IsbdMQixRCG&oh=00_AYDrXiEwW_EBXXKobeQe5d4LOhSv3UoGttfCG8RSzayUpw&oe=679DE20C',
    status: 'SCHEDULED',
    imageDescription:
      'Four characters from the 1960s Batman series are standing together. From left to right, they are dressed as Catwoman, the Riddler, the Penguin, and the Joker. They are in colorful costumes against a background featuring an octopus design.',
  },
  {
    message: '',
    id: '54618571998_789999216462507',
    publishTime: '2023-08-23T18:22:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/369916772_789609816501447_2028635336504987447_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0ErSwpYOQpAQ7kNvgG78FKa&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYDNTj8Ty9ColxZmhAGGLMB-AR8vEl4yEbDVdnk3RwA6qQ&oe=679DF26F',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A cartoon depicts Spider-Man handing an envelope to a comic artist at a drawing desk, saying, "Here\'s this month\'s payment. Just keep drawing me the way you did when I was young." A Spider-Man poster is on the wall.',
  },
  {
    message: 'I love this\nby Kerry Callen',
    id: '54618571998_784698203659275',
    publishTime: '2023-08-15T16:11:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/367408007_784318880363874_5252096339547299311_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GJfIthKODv4Q7kNvgGrvchz&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFmhw3kNsmh72LjrMEnX1-g&oh=00_AYD1N1B3u0MDeCDeWzWtWyAbpD1qfjYXM0T5kK1xvOb_iw&oe=679DCBD6',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'A comic strip featuring a Batman-like character asking if he should kill criminals. The other character advises against it, emphasizing heroism and due process. When asked about the Joker, the advice dramatically changes, suggesting he should have been killed years ago.',
  },
  {
    message:
      "Remember Commander McBragg ? He 1st appeared in 1963 on the animated series Tennessee Tuxedo and His Tales, then on the Underdog animated television show from 1964 to 1973, and have appeared in some syndicated prints of The Bullwinkle Show, Hoppity Hooper and Uncle Waldo's Cartoon Show.",
    id: '54618571998_792492152879880',
    publishTime: '2023-08-27T17:51:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/371313655_791787006283728_2452224941971141597_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=oVPryDBpn-QQ7kNvgESFFwL&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFPZWKt5JZ1PFEs5yzutf_Z&oh=00_AYBMWyUXNzaiwCijP6DJOrAzAL-s9093Gd0LHu_CVL9Gqg&oe=679DCB83',
    status: 'SCHEDULED',
    imageDescription:
      "The image depicts an animated character, an elderly man with white hair and a mustache, sitting in a chair. He's holding a drink in one hand and gesturing with the other, while looking at a globe. The setting appears to be indoors.",
  },
  {
    message: 'was the best time to be a kid',
    id: '54618571998_1114075267388232',
    publishTime: '2024-11-16T14:09:07+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/466039123_1112902147505544_7948831644201749101_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fyVfMYVzvxUQ7kNvgGdGNIh&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFT13vH4zv0T-yKWrS8kNws&oh=00_AYAjwagVpnUb1sVHID27ckI3z823OKyxx_u-3xnkkLqPBg&oe=679DC0D3',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image features a large group of animated superheroes from various Hanna-Barbera cartoons, positioned in a circle. Each character is distinct and colorful, showcasing diverse costumes and physical features typical of classic animated television shows.',
  },
  {
    message: 'by Kerry Callen',
    id: '54618571998_935467355249025',
    publishTime: '2024-03-21T16:12:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/432544307_935086288620465_824916396901075427_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=whRFYxgUHAYQ7kNvgH9N7aq&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A1Cltn3twGkGm6VFwILAtl1&oh=00_AYBiQEtefqShIKTDej1hwM7eh6mOCP7NrWUUHmIEjOArQQ&oe=679DD0FF',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'In a comic titled "Super Antics #13," a butler is repeatedly disturbed by a sneaky figure that hides in the shadows, causing mischief. The butler is seen performing household tasks while encountering subtle pranks, like a tag warning not to be removed from a pillow. The final panel humorously shows the butler expressing frustration, thinking, "I hate when he works at home."',
  },
  {
    message:
      'Classic Comic - Hanna-Barbera TV Super Heroes #1 (1968) - Herculoids, Birdman , Mighty Mightor , Young Samson and Goliath begin. Dan Spiegle cover.',
    id: '54618571998_815598180569277',
    publishTime: '2023-09-30T15:05:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/384551963_815318597263902_9141463431499528297_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dcQUye1jac8Q7kNvgGvlGNe&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A_vnmMIHG0AfcC5NFksZQ5j&oh=00_AYBwTRM2zSWmD6UvKSPfQD1IUi3s3NoN6NHDKikd55oSKg&oe=679DCEC7',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage comic book cover titled "Hanna-Barbera Super TV Heroes" from Gold Key, featuring various characters: Herculoids, Birdman, Moby Dick, Young Samson and Goliath, and The Mighty Mightor. It\'s colorful, with text highlighting additional features like the Galaxy Trio.',
  },
  {
    message: 'always encourage your kids',
    id: '54618571998_812846484177780',
    publishTime: '2023-09-26T18:17:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/382998695_812514620877633_2857802112468416444_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pVfzuvVZ0igQ7kNvgHy1HFK&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A_vnmMIHG0AfcC5NFksZQ5j&oh=00_AYAENYByAUs8Iyg0sZUxMEKRPSfyJcuX5BNHhYZfI8bFZw&oe=679DDAF5',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      "The image is a tweet showing two side-by-side illustrations of Superman. The left side is a child's drawing, and the right side is a highly detailed illustration. The tweet encourages supporting young artists, contrasting the evolution of their artistic skills over time.",
  },
  {
    message: 'The World of Hanna-Barbera.. Best cartoons ever',
    id: '54618571998_942067171255710',
    publishTime: '2024-03-30T14:07:05+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/434328933_941102781352149_6227334393031008653_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=oROESUShPP8Q7kNvgF4BioA&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A9vJEf3b3CAjZOCTfsxGoH2&oh=00_AYBwXWsQSKi1Q9pb58IiuPByYpkGIHE9d4HUwskGQHzc0A&oe=679DBEBB',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      "The image is a colorful illustration of various classic animated characters from different television shows, gathered together in a group. It's a nostalgic scene featuring popular figures in a vibrant and playful composition.",
  },
  {
    message: 'by Kerry Callen',
    id: '54618571998_657614149701015',
    publishTime: '2023-02-27T17:15:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/332943084_767206794428609_6344911088093754075_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VZ3o5cqpdj8Q7kNvgEisg_X&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYDH2ku7WBOYefnIxWXk82vcbPiIp9giS-YlsGvQDKvptA&oe=679DEEAE',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      "In this comic parody, a man wearing a fedora attempts to shoot a superhero, but the bullets bounce off. The gun clicks empty, and the superhero calmly responds by flicking the gun into the other man's face. The superhero laughs, while another character looks on with irritation.",
  },
  {
    message: '',
    id: '54618571998_611218171007280',
    publishTime: '2023-01-05T15:22:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/324232753_881900579610473_5452547545758597968_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jHt5KkP7nzMQ7kNvgHyyk0-&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANEcB3dbg9ERQ64wxt3zug_&oh=00_AYC8CEjIkdUyDaP7DzdHdyngZ6cBdfIspN_Fixujdaz_4g&oe=679DE90B',
    status: 'SCHEDULED',
    imageDescription:
      'This is a fan-made poster featuring Superman, Wonder Woman, and Batman standing together, with the names "Christopher Reeve," "Lynda Carter," and "Adam West" at the top. A combination of the Superman and Batman logos is in the background, and the date "24.3.16" is at the bottom along with the hashtag "#BATMANVSSUPERMAN."',
  },
  {
    shares: 7781,
    reactions: 10000,
    message: "don't look back chum",
    id: '54618571998_784582433670852',
    comments: 794,
    publishTime: '2023-08-15T13:17:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/367405197_784320670363695_4560601545466265676_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fqyO5lsFpx4Q7kNvgEcPeCI&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFmhw3kNsmh72LjrMEnX1-g&oh=00_AYCO4GO5wiOmZgyE-D33tPv8CHytltv2n1kZ4Wj5n8L4FA&oe=679DE3CD',
    status: 'PUBLISHED',
    imageDescription:
      'The image depicts Batman and Robin running down a city street with a Godzilla-like monster behind them. They appear to be fleeing from the creature in a humorous or edited scene.',
    postUrl: 'https://www.facebook.com/54618571998_784582433670852',
    totalEngagement: 18575,
  },
  {
    message:
      'Classic Comic - Bullwinkle #1 (1962) - based on the animated TV series. Al Kilgore cover , art and story',
    id: '54618571998_732657392196690',
    publishTime: '2023-06-04T18:31:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/349623370_6499383166768050_4675277210955082396_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AnvnAheLHTIQ7kNvgHn5OZB&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDWRC2mfkXFbh8H3P2JVBd&oh=00_AYANAeSy2L9cFzzVwTS6nmmYja2GbM-1FjBgKwP1imOHKA&oe=679DF9A6',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage comic book cover featuring characters Bullwinkle the moose and an elephant, with a suspicious-looking man holding a paper. The background includes abstract red and green shapes, and the price is marked as 12 cents, with \u201cGold Key\u201d branding.',
  },
  {
    message: 'so true',
    id: '54618571998_746424814153281',
    publishTime: '2023-06-22T18:14:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/355670579_745393327589763_6252728456899829659_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=LP6HHSOg4H8Q7kNvgGjoYpd&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ASXWjd5_HguOydGi6Cp1YcZ&oh=00_AYDj1QIdIi7w279s0N-IZpPnkds6yoW_EwO2RDxB7qsKNw&oe=679DCC72',
    status: 'SCHEDULED',
    imageDescription:
      'The image contains a quote by Art Spiegelman: "Comics are a gateway drug to literacy."',
  },
  {
    message: '',
    id: '54618571998_879901687472259',
    publishTime: '2024-01-02T19:06:11+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/414917505_879624170833344_1636489447949408598_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jRdy8eqx0-4Q7kNvgE8pE1n&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Aq9BZLyejJs2C5ZtYhRhe9s&oh=00_AYDohH-vy90Ozo1K2OQ1pnN4bBOWsauDJKDtlTF6rOdQTQ&oe=679DE75A',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'A profile of a person with pointed ears, resembling a character from science fiction, is shown beside a quote from Leonard Nimoy. The quote reflects his thoughts on the enduring legacy of the character Spock and his hope to be remembered through it.',
  },
  {
    message: '',
    id: '54618571998_800959178699844',
    publishTime: '2023-09-09T16:03:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/374635491_800866262042469_4863824620908299749_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=LFAO5XR70UUQ7kNvgFNoDdJ&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYCqGTs3JGhtaFR2CC4xRTPtSy35oF5RHsXhw95wgsCDHg&oe=679DC417',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'Three children are at a comic book stand eagerly looking at comics. The text above and below the image reads, "Teach your kids how to read comic books, they won\'t have money for drugs."',
  },
  {
    message: 'I miss the old Mad cartoons',
    id: '54618571998_10158869207941999',
    publishTime: '2021-04-20T14:30:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/175966668_10158869207536999_5204981729745916762_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8Hw8Y7l8E6UQ7kNvgGEsKkz&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AznWKKcyUvTB23EFe2RVM0D&oh=00_AYBnxdvf4waX-3C57qFWy02VuOwNbLH0hbcvYx-7GgpMDQ&oe=67BF769B',
    status: 'SCHEDULED',
    imageDescription:
      'A woman approaches a machine labeled "GET RID OF UGLY WRINKLES" with a thought balloon imagining a youthfully transformed face. She inserts a coin, and the machine dramatically stretches her face, humorously misinterpreting the promise.',
  },
  {
    message: 'cartoon time',
    id: '54618571998_783320117130417',
    publishTime: '2023-08-13T17:05:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/367381529_783010903828005_6410220657567058865_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=e9mU3-WumNwQ7kNvgGiDefQ&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFmhw3kNsmh72LjrMEnX1-g&oh=00_AYDkT6-DM3uczq8koAOyar514hvKvYijSyAIxltbDGqaag&oe=679DCBFB',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image is a cartoon cover featuring two characters: a penguin and a walrus, both wearing hats. The title "Tennessee Tuxedo and His Tales" is prominently displayed below them on a green background.',
  },
  {
    message:
      'Classic Comic - Four Color #1067 (Yogi Bear #1 1959/60) - Based om the syndicated TV series. Harvey Eisenberg story , cover and art.',
    id: '54618571998_727432606052502',
    publishTime: '2023-05-28T18:28:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/350125183_1246326052662887_7029224738708396162_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=q4Aug1Zy8U8Q7kNvgHadTkH&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDWRC2mfkXFbh8H3P2JVBd&oh=00_AYDtaOrQCnaR1G0IQ0AzTSq2KSXr_Spx8SWW4jD-Kkj3zg&oe=679DFD19',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a comic book cover featuring Yogi Bear and a smaller bear, likely Boo Boo, standing outdoors. They are under a tree branch with a beehive dripping honey into Boo Boo\'s bowl. Yogi looks on happily, holding a piece of food. The title "Yogi Bear" is prominently displayed at the top, with branding from Dell Comics.',
  },
  {
    message: 'By Kerry Callen',
    id: '54618571998_754354870026942',
    publishTime: '2023-07-03T18:09:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/357139303_753948403400922_4228997735016176581_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=19yrTCazR_sQ7kNvgHnPi6v&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AS1qGJsq0Z9ZgV8qfukSk_U&oh=00_AYDJT2ZJmvDY83mSnX_VwhZlahWtl7IFWM4Qu_rzw2NGvQ&oe=679DF621',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'In the comic "Super Antics #8," superheroes gather to determine the fastest among them through a race. However, one hero uses a gun that distracts another, allowing him to hit the distracted hero in the face with a pie. This comedic twist has everyone laughing at the end, showcasing a humorous take on classic superhero themes.',
  },
  {
    shares: 1273,
    reactions: 15912,
    message: 'when TV shows were fun',
    id: '54618571998_1096011645861261',
    comments: 389,
    publishTime: '2024-10-24T18:14:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/463842791_1095638465898579_2930188357019689100_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ywbe-BtF_5QQ7kNvgHiQi4M&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ADDmRUtM0kuySVKVPfSiMxo&oh=00_AYBuyyrov8lmvrRJQ3PbXsiBfsXVLxZQ4FB2MS1BUCZdDw&oe=679DC653',
    status: 'PUBLISHED',
    imageDescription:
      'The image shows a man in a white lab coat holding a clipboard, standing beside a muscular green figure with a fierce expression. They are in a room with computers in the background.',
    postUrl: 'https://www.facebook.com/54618571998_1096011645861261',
    totalEngagement: 17574,
  },
  {
    message: 'Art by Melanie Gillman',
    id: '54618571998_10151772223946999',
    publishTime: '2013-08-12T16:22:41+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/469248522_10162019004896999_7246574345188461568_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=sumZIbgN7UsQ7kNvgGd_MLn&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AE0uGNnrgwYByfU5Z6oYZLy&oh=00_AYDR4w_PjkWVE8BVgUBBGC9vGZu9omOZSyr7dvOAKXOI_Q&oe=679E0211',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is a comic titled "If Other Professions Were Paid Like Artists." It humorously depicts several professionals\u2014a doctor, a lawyer, a scientist, and a CEO\u2014expressing frustrations common to artists. The doctor mentions performing surgery for exposure, the lawyer provides free legal counsel hoping for donations, the scientist considers better health insurance at Starbucks, and the CEO works multiple jobs to support their "habit."',
  },
  {
    message: 'lets start the day with some great cartoons',
    id: '54618571998_796989299096832',
    publishTime: '2023-09-03T17:26:42+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/372820154_796989209096841_8539403813862674359_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JAX21xRgA8gQ7kNvgF8fcVr&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYAzzR-x9gPLezkAwYEu6EznpFGt3JNa-A_BxGrES9qX7g&oe=679DD67E',
    status: 'SCHEDULED',
    imageDescription:
      'The image features the title card for "The Bugs Bunny Show" with an orange background. Below, it shows animated characters in colorful costumes, posing playfully with hats and canes.',
  },
  {
    message: 'There\u2019s no need to fear, Underdog is here!',
    id: '54618571998_656912583104505',
    publishTime: '2023-02-26T18:03:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/333504024_746107826915143_3908685484877441659_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pYMb7rAjEj0Q7kNvgGqaJRw&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYCzCDpzhyLe54utDsj1YVGqMC5RhqxUIUkFZLnwVL5hyw&oe=679DE0B9',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image shows an animated character dressed as a superhero dog with a blue cape and red superhero costume featuring a white "U" on the chest. The background is orange. Next to the character is the word "UNDERDOG" in bold, black letters.',
  },
  {
    message: 'theres no need to fear, Underdog is here',
    id: '54618571998_767982135330882',
    publishTime: '2023-07-22T13:07:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/362623975_767790322016730_1417962957594392716_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FTEnA59lInEQ7kNvgHp6Kdf&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ATc73HRWyp02Z-tyObKGEZm&oh=00_AYChsveoijYOzSviJ-4COte0KC3B-xAArl2cqdkS_MG4PQ&oe=679DC2F2',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image shows an animated superhero, a dog in a red suit with a blue cape, flying and holding a wolf-like character by the suit collar. The superhero looks determined, while the wolf appears startled.',
  },
  {
    message: 'its Sat , time for some cartoons',
    id: '54618571998_699709105491519',
    publishTime: '2023-04-22T13:06:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/342419875_239997105190724_5502439068487505653_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Lbc0m47nU_wQ7kNvgERDJgD&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A7jDnAwd5xQtUEgw6tdzuym&oh=00_AYA8QuCvShFnTVAoAEWvBJTT67XxK3bjN0dFh9b_AWzb8g&oe=679DF0C1',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a promotional poster for the animated series "Jonny Quest," featuring four characters: a young boy in black, a man in red holding a gun, another man in blue with a device, and a child in a turban. The "Jonny Quest" logo is prominently displayed at the bottom.',
  },
  {
    shares: 6130,
    reactions: 10000,
    message: 'I loved these cartoons',
    id: '54618571998_748442997284796',
    comments: 624,
    publishTime: '2023-06-25T17:47:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/356097776_748085773987185_6341056080535326709_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=agZbkfC5EuAQ7kNvgEvcgNX&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ASXWjd5_HguOydGi6Cp1YcZ&oh=00_AYDA_rH_MyNFsYXNUMcmF8Qm_6Guwp8VFCXkeOXDtKduoA&oe=679DC841',
    status: 'PUBLISHED',
    imageDescription:
      'The image shows an animated scene from "The Yogi Bear Show." Yogi Bear is joyfully carrying a picnic basket filled with food, while a smaller bear and a park ranger express surprise or concern. They are in a scenic, wooded area with a sign reading "Jellystone Park" in the background.',
    postUrl: 'https://www.facebook.com/54618571998_748442997284796',
    totalEngagement: 16754,
  },
  {
    message: '',
    id: '54618571998_843106481151780',
    publishTime: '2023-11-09T17:14:08+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/398973808_842788277850267_7760957055865422741_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=azVXd2sGn7QQ7kNvgF49uWp&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AR-VLF_t3tmBjH-A-DjzpPc&oh=00_AYC_OlL-A2Erugo-3xmOadPZUiI5AIrycopS1LYy1cky_Q&oe=679DE681',
    status: 'SCHEDULED',
    imageDescription:
      'In the comic from "Sunny Street," two parents are annoyed by their baby\u2019s crying. The father seems exasperated, and the mother sarcastically asks for his solution. He then sends the baby off in a rocket. In the next scene, an adult figure hears a holographic message explaining the planet\'s destruction, humorously suggesting that the baby\'s crying led to the extreme measure.',
  },
  {
    message: 'its Sat we need some cartoons',
    id: '54618571998_882548713874223',
    publishTime: '2024-01-06T15:01:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/417117443_882314720564289_4745028686423568004_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3B307gewsxUQ7kNvgGcwPgD&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Aq9BZLyejJs2C5ZtYhRhe9s&oh=00_AYCw0m4MhouPeJ6fODPc5ohzgFK8M0OI1Hp7_eK9fx47Bg&oe=679DE693',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image features a green alien character with a large helmet and antennas, standing in a colorful prehistoric setting with stone houses. The word "GAZOO" is displayed prominently above.',
  },
  {
    message: '',
    id: '54618571998_759950829467346',
    publishTime: '2023-07-10T19:17:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/358624143_759497506179345_8514350662058029413_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=05hlzJBMXFsQ7kNvgGho0dA&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AuXIsvkg1_wDUFJ6cdv22t7&oh=00_AYDnhf9qcNOiKvMpvjqjX-lj9pIohr_rlvhj9uwzxxv6cA&oe=679DC38B',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'A black and white photograph of a man with a quote attributed to George Reeves reads: "Our idea is to give children good entertainment without all the guts and blood and gore. We think the series should teach them something too. That\u2019s why I decided to do this."',
  },
  {
    shares: 5118,
    reactions: 10000,
    message: 'Sat morning Heaven',
    id: '54618571998_630756609053436',
    comments: 1316,
    publishTime: '2023-01-28T14:14:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/326535487_719803023152396_8193249743620717263_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cG3XrQy8Qt0Q7kNvgECP0bS&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Alupxj5DpbCH-SJ9oxPO6Md&oh=00_AYBzId1pDfFGyAkBMMfaCpX5B0CbQANpwxy6B7Ws5jBlrA&oe=679DD8FF',
    status: 'PUBLISHED',
    imageDescription:
      'The image features a variety of animated superheroes and characters from classic cartoons, all grouped together within a circular frame. Each character has distinct and colorful costumes, suggesting they come from different animated series. The overall style is vibrant and playful.',
    postUrl: 'https://www.facebook.com/54618571998_630756609053436',
    totalEngagement: 16434,
  },
  {
    message: 'cartoon time',
    id: '54618571998_727394849389611',
    publishTime: '2023-05-28T17:08:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/349616458_1340443759851795_3896334500378035389_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Rc43LDCSfVgQ7kNvgGmQ4jz&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDWRC2mfkXFbh8H3P2JVBd&oh=00_AYCTtGOtTk6rwFPWGMb7rJEcWAG9jWp0QBE7s9IB60MXZQ&oe=679DDFAF',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a stylized poster for "The Herculoids," featuring a group of humanoid and creature characters set against a rocky landscape. The title is prominently displayed at the top in bold, angular letters.',
  },
  {
    message:
      'Classic Comic - Flintstones #1 (Dell Giant #48-1961) - 1st appearance of the Flintstones in comics',
    id: '54618571998_650839943711769',
    publishTime: '2023-02-19T19:08:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/331141577_525860202869233_1826190754072869571_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8pQur-OumWgQ7kNvgF5LTmD&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYBfNN6hu34dK3FSBcuxew01A3NjANpX2jpPqTTPdr5qKw&oe=679DDCC7',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This image is a comic book cover titled "The Flintstones: Bedrock Bedlam." It features the main characters from "The Flintstones" animated series, including Fred Flintstone, his family, and their pet dinosaur. The price is listed as 25 cents, and it is identified as a "Dell Giant" publication. The style is colorful and cartoonish, typical of mid-20th-century comic art.',
  },
  {
    shares: 5260,
    reactions: 10000,
    message:
      'Classic Comic - Hanna-Barbera TV Super Heroes #1 (1968) -  Herculoids, Birdman , Mighty Mightor , Young Samson and Goliath begin. Dan Spiegle cover.',
    id: '54618571998_617691520359945',
    comments: 1025,
    publishTime: '2023-01-13T18:14:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/325233142_884339716145411_7116668203177759134_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JjbLGGIBuSkQ7kNvgGG6-hW&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AEj86Fc0xlMaisai1dICqfl&oh=00_AYATcm28_IuW4gkWJ2jEBfXeqzKsRWSJDguE0zekerlICQ&oe=679DD6AE',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book cover from "Gold Key" titled "Hanna-Barbera Super TV Heroes" priced at 12 cents. It features various characters including Herculoids, Birdman, Moby Dick, Young Samson and Goliath, and The Mighty Mightor. Additional heroes mentioned are Galaxy Trio, Meteor Man, Gravity Girl, and Vapor Man.',
    postUrl: 'https://www.facebook.com/54618571998_617691520359945',
    totalEngagement: 16285,
  },
  {
    shares: 3880,
    reactions: 10000,
    message: 'such a great cartoon series',
    id: '54618571998_788033796659049',
    comments: 2370,
    publishTime: '2023-08-20T17:07:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/368688860_787979113331184_5150234844468181060_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7ln1XdMaYBAQ7kNvgHz2y6K&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYDI2sxoBVvqVy0rvH7caxodPBAzKDo7spWWnrpI0P1NDA&oe=679DE04A',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a promotional artwork for the animated series "Jonny Quest." It features four characters: a young boy, an older man with a gray beard, a man with red hair and a beard, and another younger boy wearing a turban. They appear to be engaged in an adventurous scene, with the show\'s title prominently displayed at the bottom.',
    postUrl: 'https://www.facebook.com/54618571998_788033796659049',
    totalEngagement: 16250,
  },
  {
    message: 'the man behind 1 of my favorite cartoons - Jim Backus - Mr Magoo',
    id: '54618571998_836049528524142',
    publishTime: '2023-10-29T17:52:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/396734025_835930081869420_4259771259204145929_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=E6nx9VTCUi0Q7kNvgG0kY_U&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=APJaJCyVrXvQdQbZ44Kmjb9&oh=00_AYATyfC_ZHNzdrdOLYX_GGtRBXI0hiSV11_6S6QOCaaTQw&oe=679DE1EC',
    status: 'SCHEDULED',
    imageDescription:
      'A man in a suit and hat, smiling, holds a toy figure clad similarly, both holding an amused expression.',
  },
  {
    message:
      'Classic Comic - Jonny Quest #1 (1964) - Only issue. Adapted from the pilot episode from the ABC TV series',
    id: '54618571998_715811467214616',
    publishTime: '2023-05-13T15:14:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/345898458_158761510483822_3128570795125108248_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GL18klkfA0MQ7kNvgF2Gelo&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AvTk5bmSziIvFA13hRBimly&oh=00_AYAE0o2770sSVqnwElxp0LYy9gMj4NXeo5xodrOVcGBUoA&oe=679DF875',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is a comic book cover titled "Jonny Quest: The Mystery of the Lizard Men" by Hanna-Barbera, published by Gold Key. It features characters engaged in combat with green, humanoid lizard creatures on a red background. The artwork captures a dynamic and adventurous scene.',
  },
  {
    message: 'Batman Movie 1966',
    id: '54618571998_604661688329595',
    publishTime: '2022-12-28T15:19:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/322548100_651968070040017_6855856854310040311_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7aUgYWtIuQ0Q7kNvgHB_DNA&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDxNigojbm3udtT9aeWKst&oh=00_AYBBiS90i0joA5mIL0FKh4OHVKnKsBREyrwB7nLHqqILLw&oe=679DEDA5',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a colorful illustration featuring Batman and Robin in their classic costumes, standing confidently. Behind them are portraits of iconic villains: the Joker, Catwoman, the Penguin, and the Riddler. In the foreground is the Batmobile. The style is reminiscent of the 1960s Batman TV series.',
  },
  {
    message: "it's Sat , time for some cartoons",
    id: '54618571998_800864802042615',
    publishTime: '2023-09-09T13:16:24+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/374642671_800864575375971_3741012786564901727_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=SoA7XQ-Owa8Q7kNvgGk5_g_&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYAReTzaaI9WIFqkJNZHM9Xzwkb5N-qWyLN3UaU-TiSkWQ&oe=679DE2ED',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is a poster featuring cartoon characters Tennessee Tuxedo, a penguin, and his friend, a walrus, called Chumley. They are both wearing yellow hats and the background is green, with the title "Tennessee Tuxedo and His Tales" prominently displayed.',
  },
  {
    shares: 4947,
    reactions: 10000,
    message: 'such a great show',
    id: '54618571998_687322490063514',
    comments: 726,
    publishTime: '2023-04-06T13:01:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/339612349_251618190634527_6877862436889743817_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sq-luJbvP5MQ7kNvgFQUBI4&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AjtGYtRKUGGoHrazfSxAA5t&oh=00_AYADQvYzJnzDtgpKvXR1S8XMQiYsAqVp1y2g3fHtA9Vl4A&oe=679DCE30',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a collage from the classic "Batman" TV series featuring characters like Batman, Robin, the Joker, the Penguin, the Riddler, and Catwoman. It\'s styled with a colorful, retro comic book aesthetic and includes the show\'s original air dates: January 12, 1966 - March 14, 1968.',
    postUrl: 'https://www.facebook.com/54618571998_687322490063514',
    totalEngagement: 15673,
  },
  {
    message: 'By Kerry Callen',
    id: '54618571998_744282011034228',
    publishTime: '2023-06-19T16:08:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/355377644_743981581064271_5222080032785071365_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mbNXfEJU8QIQ7kNvgHq0Pu4&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ASXWjd5_HguOydGi6Cp1YcZ&oh=00_AYCBwgKcIzAZwYLzfKU3zXsXqhJZlpjvlr3KcGkPYBc9jg&oe=679DD1B6',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'A comic strip features a bulletproof superhero mocked by a gunman whose gun clicks empty. The frustrated gunman throws the gun, hitting another hero standing nearby. The superhero laughs heartily, while the other hero looks unimpressed.',
  },
  {
    message: 'by Kerry Callen',
    id: '54618571998_794346732694422',
    publishTime: '2023-08-30T16:29:05+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/371768418_794078122721283_1386428670671667621_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rI2lrGb6Ms0Q7kNvgGmczlk&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFPZWKt5JZ1PFEs5yzutf_Z&oh=00_AYChsDjVSF6sHmXgAASdzGwZ6ZCO0QVXYaDuUsrWeZTmkQ&oe=679DEC66',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'In this comic strip, Batman deflects bullets from the Penguin\'s umbrella with his cape. After punching the Penguin, Robin expresses concern. Batman notices a hole in his cape and asks, "Is it noticeable?"',
  },
  {
    shares: 5182,
    reactions: 10000,
    message: '',
    id: '54618571998_714318244030605',
    comments: 417,
    publishTime: '2023-05-11T13:45:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/345050940_258723173224734_8290271462864266556_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0_dCBhUX8zoQ7kNvgHzqbiD&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AvTk5bmSziIvFA13hRBimly&oh=00_AYDntiZEh31VOkVHpwh_jyS9J0NfbRFuhnsvM01vqYjB8A&oe=679DEF23',
    status: 'PUBLISHED',
    imageDescription:
      'The image features a black-and-white portrait of a man with a quote attributed to George Reeves. The quote emphasizes providing children with good entertainment without violence and aims to teach them something valuable.',
    postUrl: 'https://www.facebook.com/54618571998_714318244030605',
    totalEngagement: 15599,
  },
  {
    message:
      'Jonny Quest ( September 18, 1964 to March 11, 1965). Produced by Hanna-Barbera Productions for Screen Gems, and created and designed by comic book artist Doug Wildey, the series stars voice actors Tim Matheson, Mike Road, Danny Bravo, John Stephenson, and Don Messick.',
    id: '54618571998_815530607242701',
    publishTime: '2023-09-30T13:04:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/381029094_809123457883416_6032246830564158262_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=u3qCz4GustsQ7kNvgENHBVr&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A_vnmMIHG0AfcC5NFksZQ5j&oh=00_AYBxCGsO4iVsaYcavzhsZbz0i7O6Yr-Dt-lyp340VSE0-w&oe=679DC416',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A group of animated characters are sitting in a cockpit, with one person piloting. The scene shows a diverse mix of individuals, including a person in a turban and a child with a dog. The cockpit is filled with detailed equipment.',
  },
  {
    message: 'still a great show',
    id: '54618571998_931212029007891',
    publishTime: '2024-03-15T14:12:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/432499991_930852999043794_1786664054091225631_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cusEEtL7hYcQ7kNvgHBjLng&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A1Cltn3twGkGm6VFwILAtl1&oh=00_AYBGTV-Cbl51lyzzPgVK7XaQ5t1Dd7Rw4lHHI9yKSFvb9A&oe=679DD849',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is a collage of characters from the 1960s "Batman" TV series. It features Batman, Robin, Catwoman, Joker, Riddler, and Penguin, alongside the show\'s air dates: January 12, 1966 - March 14, 1968. The background has a comic book aesthetic with words like "Splat" and "Wham."',
  },
  {
    message: 'by Kerry Callen',
    id: '54618571998_808086054653823',
    publishTime: '2023-09-19T16:17:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/379864564_807750538020708_2353506836492154495_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sjx1D1y1sToQ7kNvgHMIeJI&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AQ6uIXz3wArX-td61b3bq_j&oh=00_AYBRPJvwFhpam0QsMhyXfqSsSGQ2tRssK_NrMeIwClOXUQ&oe=679DF13D',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a comic strip titled "Super Antics #11," depicting various superheroes humorously showcasing their abilities, often with exaggerated cape displays. Characters argue about originality, and one mocks others by revealing his speed. The strip ends with three characters looking disappointed, with a superhero saying "You ruin everything." The style parodies classic superhero comics.',
  },
  {
    message: 'by Kerry Callen',
    id: '54618571998_778972390898523',
    publishTime: '2023-08-07T16:11:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/366077260_778655990930163_2962899253602149384_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6sr8JNxXBvgQ7kNvgHDa97s&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ap-gkw9jU2HMot4HcT8m766&oh=00_AYD3nIdPd2tB_tY-8cx2GOL1JPlm60IIi_d64ekQ0S-TQA&oe=679DDA7D',
    status: 'SCHEDULED',
    imageDescription:
      "The comic strip humorously explains why Batman doesn't smile, showing a time in the 1980s when he laughed openly with other heroes. An unflattering photo of him laughing prompts his decision never to smile again, marking the start of his grim persona.",
  },
  {
    message: 'when cartoons were fun',
    id: '54618571998_902888441840250',
    publishTime: '2024-02-03T14:06:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/424563204_899105292218565_9001811935609881386_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=D2lFUyjvkBYQ7kNvgHbAtNN&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AiXWsGT1VmkIehz87A_CgAK&oh=00_AYAA3pzAkCqbyYecoZE7c4G2MET5f8-Evs4tUP0jkXgZHg&oe=679DE4E0',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image features a collection of classic animated superhero characters gathered together in a single illustration. They are depicted in colorful costumes and dynamic poses, evoking a sense of teamwork and adventure.',
  },
  {
    shares: 1490,
    reactions: 13333,
    message: '',
    id: '54618571998_1140755761386849',
    comments: 522,
    publishTime: '2024-12-20T15:17:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/470223225_1140495248079567_681053887184700441_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=k-Fh-hcS6BMQ7kNvgGJXSw7&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AMt5zrzWPVaUs38QfKz3F1R&oh=00_AYCBohpkEJcOJ8rPm14gRQBlbqkCyPjTA5LbtzMgVtgwhA&oe=679DEE61',
    status: 'PUBLISHED',
    imageDescription:
      'A black-and-white photograph features a man next to a quote attributed to George Reeves. The quote emphasizes providing children with good entertainment that is educational and free of violence.',
    postUrl: 'https://www.facebook.com/54618571998_1140755761386849',
    totalEngagement: 15345,
  },
  {
    message: 'oops',
    id: '54618571998_655245609937869',
    publishTime: '2023-02-24T17:15:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/333004725_592857529376080_8251122879918175810_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=msgE-1u4gD4Q7kNvgFZElIg&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYB_994QamKmRCogRVmoueZ0zYJarvy08Ns2HlRdQNuOug&oe=679DCC93',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'This image is a comic strip parody that combines "Peanuts" and Spider-Man. Charlie Brown is about to kick a football held by Lucy, as usual, but Spider-Man swings in and kicks it instead, scoring a goal and yelling "Yahoo!" Lucy and Charlie Brown are left surprised.',
  },
  {
    message: 'William Hanna and Joseph Barbera\n   and my childhood',
    id: '54618571998_649863207142776',
    publishTime: '2023-02-18T15:08:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/331731313_5347229542046561_2032683874628821623_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=W3jMm0Kj_bkQ7kNvgGjjsDG&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYCH_O7XbIcxhAfj5cw3QkUdxGxEw4_pc0sT0kni-uuv3w&oe=679DD31D',
    status: 'SCHEDULED',
    imageDescription:
      'Two men seated on a couch surrounded by stuffed cartoon characters, with Emmy awards on the table in front of them.',
  },
  {
    shares: 5131,
    reactions: 10000,
    message: 'always encourage',
    id: '54618571998_678546264274470',
    comments: 139,
    publishTime: '2023-03-25T18:19:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/337297804_1200133190631989_2273033876245536141_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2waMnu7du98Q7kNvgEgwc9E&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYA_TI0_JdkYqt-deqgpgJsO7eFaMyuDoRDSKRhsaEwkxg&oe=679DD628',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a Twitter post by Kristian Williams showing two side-by-side drawings of Superman. The left image is a child\u2019s drawing from age 7, and the right is a professional illustration from age 37, demonstrating artistic growth over time. The caption encourages supporting young artists.',
    postUrl: 'https://www.facebook.com/54618571998_678546264274470',
    totalEngagement: 15270,
  },
  {
    message: '',
    id: '54618571998_845144050948023',
    publishTime: '2023-11-12T20:57:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/401740753_844711057657989_1033757693085675893_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2qH60Mdu9OgQ7kNvgFWm77t&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A1JMZmQ38AIeooTJbQ1QLY-&oh=00_AYAnrYnLuVb5LEPxSlKlvL1Es1KC2LbbaaQ1JAwRyrg4mg&oe=679DF0FD',
    status: 'SCHEDULED',
    imageDescription:
      'A black and white photograph of a man with a serious expression is shown beside a quotation attributed to George Reeves. The quote expresses the idea of providing children with good entertainment that is educational and free from violence and gore.',
  },
  {
    message: 'by one of our favorite artists.... @Kerry Callen',
    id: '54618571998_793677022761393',
    publishTime: '2023-08-29T16:01:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/371822377_793356142793481_6874869597241761745_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EtHneWwEhaEQ7kNvgHMpTrt&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFPZWKt5JZ1PFEs5yzutf_Z&oh=00_AYDjz4gjI0XQzYM6z9sMRG5XYerZpj2wgR8KmII4elNGBg&oe=679DF5C5',
    status: 'SCHEDULED',
    imageDescription:
      'The image shows a Facebook post by Kerry Callen, featuring a comic-style reinterpretation of an iconic Avengers movie scene using 1960s character designs. Captain America, Iron Man, and other Avengers are illustrated in vintage comic art alongside a screenshot from the original movie scene.',
  },
  {
    message: 'little walk down memory lane',
    id: '54618571998_792980492831046',
    publishTime: '2023-08-28T13:11:05+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/370568825_792848456177583_4517251773569195148_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wD5_fm4TShsQ7kNvgEv5_BV&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFPZWKt5JZ1PFEs5yzutf_Z&oh=00_AYAkbpYMKM_Xb0PBLdJNRByhy-OjR3XNDgyCL6Vd3j9sEQ&oe=679DDD35',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image shows a black-and-white photograph of a magazine rack filled with comic books. The titles visible include "Mystic," "Matt Slade Gunfighter," "Casper," "Woody Woodpecker," and others. The rack is displayed in what appears to be a store setting, with more magazines in the background.',
  },
  {
    message: 'Superman & Jayne Mansfield ~ Rick',
    id: '54618571998_779774534151642',
    publishTime: '2023-08-08T18:34:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/366076819_778659197596509_210211793379842441_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ue9y5Lp1WucQ7kNvgEdH1Iz&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ap-gkw9jU2HMot4HcT8m766&oh=00_AYD_LEROaKbHJZ7OedQhDJlVQbMuL0vOYgxoRnIq1gIY6A&oe=679DC581',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'Two individuals are standing on airplane steps. One is dressed in a classic superhero costume with a cape, while the other is wearing a stylish dress. They are posing closely together in a vintage, possibly staged setting.',
  },
  {
    message: 'I always wanted this',
    id: '54618571998_782574397204989',
    publishTime: '2023-08-12T14:11:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/366843658_782250440570718_6228325420811524891_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7SAP6K12GIIQ7kNvgEtj_hW&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFmhw3kNsmh72LjrMEnX1-g&oh=00_AYDUzzIRVSu1xWGD-UBC0zQpiKCBxOKUoA7goa-MNvrSuw&oe=679DE3EE',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This image is a vintage comic-style advertisement for "The Six Million Dollar Man" action figure by Kenner. It highlights features like a powerful "bionic" arm, a back pack radio, and a transport and repair station. It promotes the realism and excitement of the bionic action with a depiction of Col. Steve Austin, the main character. A section invites fans to join the Bionic Action Club.',
  },
  {
    shares: 4700,
    reactions: 10000,
    message: '#truth',
    id: '54618571998_817008773761551',
    comments: 193,
    publishTime: '2023-10-02T16:05:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/384573039_816753293787099_2418128823924600094_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4wUz0QSGyt0Q7kNvgHsRIyd&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A_vnmMIHG0AfcC5NFksZQ5j&oh=00_AYCNNRvXeva_ad6wYBlKXACSSRc_yJj25oPP-EKB6vV6XA&oe=679DCFBB',
    status: 'PUBLISHED',
    imageDescription:
      'A quote is displayed saying, "Comics are a gateway drug to literacy," attributed to Art Spiegelman.',
    postUrl: 'https://www.facebook.com/54618571998_817008773761551',
    totalEngagement: 14893,
  },
  {
    message: 'time for some cartoons',
    id: '54618571998_898748235587604',
    publishTime: '2024-01-28T18:52:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/423225269_898364808959280_354231718992590513_n.jpg?stp=cp1_dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=CQNAwRtY_usQ7kNvgFrczZR&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A8iaG7Ke0rbRc8cA6JwlJbb&oh=00_AYBWG2xIaXUrrN_2ai1dH82cRmQZu7brFiNHzlZeN7PBVQ&oe=679DE3C0',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image is a promotional illustration for the animated series "Jonny Quest," featuring four characters and a dog. From left to right: a man in a red shirt and gray pants, a young boy with blond hair in a black shirt and blue pants, another boy with a turban and tan outfit, a white dog with a blue collar, and a man with a beard in a blue lab coat. The series title "Jonny Quest" is prominently displayed at the top.',
  },
  {
    shares: 2258,
    reactions: 11347,
    message: "don't make us use the Hoover on ya",
    id: '54618571998_627251796070584',
    comments: 1245,
    publishTime: '2023-01-24T19:17:00+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/326394461_1550022912184126_4272991057162550527_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=su9FKuHfYCUQ7kNvgG3tCO5&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Alupxj5DpbCH-SJ9oxPO6Md&oh=00_AYDIU9QVnu3VdklxCIf1XLz-cwuawoEF2fkG-mniM3nzjQ&oe=679DEBB1',
    status: 'PUBLISHED',
    imageDescription:
      'A black-and-white image depicting a person dressed as Superman confronting three individuals with bald heads. The individuals are holding a large, unusual device pointed towards Superman. The setting appears to be an outdoor area with trees and building facades in the background.',
    postUrl: 'https://www.facebook.com/54618571998_627251796070584',
    totalEngagement: 14850,
  },
  {
    message: 'my favorite Catwoman',
    id: '54618571998_737298285065934',
    publishTime: '2023-06-10T16:07:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/352968871_736104141852015_8944239104873472535_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pTGBSJNtnTwQ7kNvgHWT2wz&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANf0kMIeMC_mKos2kMEjn4q&oh=00_AYD57CwFUMl7kG3inEMLm7kVHi9aMF5yLbSr1CPPQGxVGw&oe=679DE691',
    status: 'SCHEDULED',
    imageDescription:
      'The image shows a woman wearing a sleek, black outfit with a golden belt and accessories, posing confidently with her hands behind her head. A person in a uniform stands in the background near what appears to be a cell. The setting suggests a theatrical or cinematic scene.',
  },
  {
    shares: 4273,
    reactions: 10000,
    message: 'by Sergio Aragones',
    id: '54618571998_847774720684956',
    comments: 242,
    publishTime: '2023-11-16T17:11:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/401722575_847465604049201_8794111598078205677_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IZV8Oh4p1m0Q7kNvgGkZ3tM&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A1JMZmQ38AIeooTJbQ1QLY-&oh=00_AYB1Byhj5AgU0ButgW8vO-BDIHnAcNaPZ1FIp95yFkTEsg&oe=679DCC3A',
    status: 'PUBLISHED',
    imageDescription:
      'A man visits a psychic who, after hesitation, gives him the number "70323." He excitedly buys a lottery ticket with that number. When the winning number is different, he angrily confronts the psychic. In the final panel, the man is shown in prison, suggesting his actions led to his arrest.',
    postUrl: 'https://www.facebook.com/54618571998_847774720684956',
    totalEngagement: 14515,
  },
  {
    message: 'By Kerry Callen',
    id: '54618571998_648988390563591',
    publishTime: '2023-02-17T15:22:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/331876142_639212971496204_5830332686326587295_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TJUL-dKq404Q7kNvgHK4DEu&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYAK3heBace1ZXR-P_WZhSaZPzb7o1-ZUfAiG3RomvzTow&oe=679DE1EE',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'In the comic "Super Antics #3," superheroes are sitting around a table after a meal. Flash complains about having to clean up due to his super speed. Superman acknowledges the complaint, saying it\'s more about justice and laughs along with others. The humor ends with a serious reminder for Flash to do the dishes.',
  },
  {
    message: 'Life size Hulk made out of scrap metal',
    id: '54618571998_785351640260598',
    publishTime: '2023-08-16T16:03:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/368014614_785013600294402_8231662016036607801_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DYpe0g5LBfIQ7kNvgHmsPDc&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFmhw3kNsmh72LjrMEnX1-g&oh=00_AYCLtrGvw9NJ5r9lK_6z27qngSAeq1Ph9qhrUvtgMROKwg&oe=679DD903',
    status: 'SCHEDULED',
    imageDescription:
      'The image shows a large, detailed sculpture of a muscular figure resembling a well-known comic book character in a crouched position, made from a metal mesh material. It stands outdoors near a simple building and surrounded by trees.',
  },
  {
    message:
      'Classic Comic - Hanna-Barbera TV Super Heroes #1 (1968) - Herculoids, Birdman , Mighty Mightor , Young Samson and Goliath begin. Dan Spiegle cover.',
    id: '54618571998_731854602276969',
    publishTime: '2023-06-03T15:10:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/349840609_267272485872265_4085013609294671077_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_LP0YNxmRf0Q7kNvgFIdz2o&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDWRC2mfkXFbh8H3P2JVBd&oh=00_AYBMw3YxfzAj_Z-_EJfJ82prI06OFDIBqzAQmTGzKVMFpA&oe=679DCF0E',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image is a vintage comic book cover titled "Super TV Heroes" by Hanna-Barbera, published by Gold Key. It features various characters: Herculoids, Birdman, Moby Dick, Young Samson and Goliath, and The Mighty Mightor, along with mentions of Galaxy Trio, Meteor Man, Gravity Girl, and Vapor Man. The cover is colorful, showcasing classic animation styles from 1968.',
  },
  {
    message: "It's sat morning , time for cartoons",
    id: '54618571998_672535271542236',
    publishTime: '2023-03-18T13:21:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/336383184_225494253292741_4181408798729881494_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=upSmSLGecUwQ7kNvgEYFqGI&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYAdtTEHCLdEwy3c693sbyVCTimtD4cv_oNsQ0SqYywiAQ&oe=679DE753',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image is a poster for "The Bugs Bunny Show," featuring cartoon characters Bugs Bunny and Daffy Duck in a playful pose. They\'re wearing striped jackets and straw hats, with an orange and purple background.',
  },
  {
    message: 'The Bat Boat',
    id: '54618571998_660759272719836',
    publishTime: '2023-03-03T15:22:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/334028067_771516197914784_546556793063126218_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OHAJwxRrVmoQ7kNvgFENG-d&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYBIrK30zzez0NF06HPYhVuYNoXNftZkIxNag0Qm5ZcEMg&oe=679DDFAD',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image shows a person dressed as Batman piloting a stylish speedboat decorated with bat-themed fins and logos, gliding on calm waters in black and white.',
  },
  {
    shares: 3208,
    reactions: 10000,
    message: 'Yvonne Craig',
    id: '54618571998_790452346417194',
    comments: 1108,
    publishTime: '2023-08-24T13:05:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/370263522_790237873105308_55056456728165064_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Z0FEQXW34c4Q7kNvgF91yf1&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYAu54ePs0fJ_4L5DmZsa85mGrcMeHVEkyA-d06AVYD4CQ&oe=679DE800',
    status: 'PUBLISHED',
    imageDescription:
      'The image shows two women side by side. The left figure is dressed as a superhero in a purple and yellow costume with a cape, mask, and gloves. The right figure is wearing a floral bikini and stands on a beach with a visible ocean backdrop.',
    postUrl: 'https://www.facebook.com/54618571998_790452346417194',
    totalEngagement: 14316,
  },
  {
    message: 'time for cartoons',
    id: '54618571998_752679903527772',
    publishTime: '2023-07-01T13:07:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/357034653_752439213551841_769926241869531678_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5HzYDoPlrS0Q7kNvgHYZou2&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AS1qGJsq0Z9ZgV8qfukSk_U&oh=00_AYC4usBUjJTh5E3Yi3oWZ8QkYO8cxPClve5Ir1o5sukqFw&oe=679DD1EE',
    status: 'SCHEDULED',
    imageDescription:
      'The image features the iconic title card for "The Bugs Bunny Show" with a vibrant orange background. Below, a circular illustration shows two animated characters dressed in striped jackets and hats, performing with canes against a colorful stage backdrop.',
  },
  {
    message: '',
    id: '54618571998_765541502241612',
    publishTime: '2023-07-18T18:16:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/361632040_765099845619111_5567516023760733675_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_rULN1ZUdQ4Q7kNvgE_z5tE&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ATc73HRWyp02Z-tyObKGEZm&oh=00_AYAj1Gu-g40vo_POtykWv1EUIX4ldFTiXBPkDl7HiA1IUw&oe=679DD5BB',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image shows a person smiling with a quote attributed to Patrick Stewart, expressing appreciation for the film "Galaxy Quest." He explains his initial hesitation due to concerns about it mocking "Star Trek," but after a recommendation, he found the film brilliant and touching for its tribute to dedicated fans.',
  },
  {
    message:
      'Classic Comic - Space Ghost #1 (1967) - 1st appearance of Space Ghost in Comics. Only issue. Back Cover is a pin up',
    id: '54618571998_609823527813411',
    publishTime: '2023-01-03T20:25:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/323896135_685741859701477_6515299395478871979_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2An_KY15UKsQ7kNvgGy4jxV&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANEcB3dbg9ERQ64wxt3zug_&oh=00_AYDDTaib4gtPKHF_-ex8J9NEHpBtOemb9bVTBLZAvhQxhA&oe=679DFA12',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'This is a comic book cover for "Space Ghost" by Hanna-Barbera, published by Gold Key. The design features Space Ghost in various action poses, showcasing his abilities such as "fists packed with electronic force," "incredible speed," and "the unique gift of invisibility." The cover highlights Space Ghost as the "Protector of the Universe" and includes dynamic illustrations of him flying and battling opponents.',
  },
  {
    message: 'by Kerry Callen',
    id: '54618571998_841864577942637',
    publishTime: '2023-11-07T17:11:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/399006329_841573071305121_4294725888113062098_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Yfy70vu1JewQ7kNvgFFwQNg&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AR-VLF_t3tmBjH-A-DjzpPc&oh=00_AYAre0xGenLd2g_24JBWyPPmahhN87Y4a80S9ovvIpYKwA&oe=679DC489',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'In the comic "Super Antics #15," a character approaches a wise person on a small island, seeking advice because they\'re upset that Mera cooked a flounder named Quinton, whom they considered a friend. The wise person suggests the character is feeling grief rather than anger. The character agrees, thanks the wise person, and swims away. The wise person, left alone, humorously asks if they will ever be rescued.',
  },
  {
    message: 'Hollywood, Bring them back',
    id: '54618571998_802323538563408',
    publishTime: '2023-09-11T13:52:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/377250450_802021045260324_591295350495106619_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PdSlcyq581gQ7kNvgFR_i71&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AeuYoz_Z6s18yKB-UbYSALw&oh=00_AYCEIFri4btBS-FPKYOgYkU3krGvkGGUzJS-oivk-tQKvQ&oe=679DCFB0',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a stylized illustration of "The Herculoids," featuring a group of fantastical creatures and characters set in a dynamic, rocky landscape. The title is prominently displayed at the top in bold, orange letters.',
  },
  {
    message: 'love these old comic book ads',
    id: '54618571998_649892200473210',
    publishTime: '2023-02-18T15:47:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/329649723_1844443422598208_4345799793317644769_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=oYoRg5meTx4Q7kNvgEs0ZTX&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYDjEaz1AHuQjeE0bEzaYn9DvZtzYMulXntx1gxiNLam7A&oe=679DCD36',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      "The image is a vintage advertisement for Hot Wheels by Mattel, showcasing miniature cars with features like custom engines, detailed underbody, and mag wheels. It highlights 16 California custom-styled models, each with unique designs and features, such as low friction wheel bearings. The ad emphasizes the cars' speed and introduces accessories for racing or stunting.",
  },
  {
    message:
      'Classic Comic - Hanna-Barbera Super TV Heroes #1 (1968) - First issue of original adventures of late 1960s Hanna-Barbera cartoons with Dan Spiegle art.',
    id: '54618571998_777561327706296',
    publishTime: '2023-08-05T15:28:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/364145591_777306504398445_2425274244806511365_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_YYtgae7stAQ7kNvgH5mlFz&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ap-gkw9jU2HMot4HcT8m766&oh=00_AYApWZMPT6WuaFR_h8wNwnxGaBe7FK1fzZ9pYYG2b5C8_w&oe=679DF91D',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a cover of a comic book titled "Super TV Heroes" from Gold Key Comics, featuring characters by Hanna-Barbera. The cover showcases various characters such as "Herculoids," "Birdman," "Moby Dick," "Young Samson and Goliath," and "The Mighty Mightor," along with a mention of "Galaxy Trio." The comic is priced at 12 cents and dated 1968.',
  },
  {
    message: 'good grief',
    id: '54618571998_831166682345760',
    publishTime: '2023-10-22T17:51:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/394318800_830727892389639_3824722585929264427_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7JrVXSh4rCMQ7kNvgFeCCrS&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AvEhpGDi1HQFkGgpMJudFl6&oh=00_AYDbgb8IzyMBCqRqREkmYhR3BIXDJvghwIiClJZlqAhQpQ&oe=679DF09D',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'A cartoon character dressed in a Captain America outfit stands looking at a tree with a Captain America shield stuck in its branches.',
  },
  {
    message:
      'Classic Comic - LITTLE DOT #1 (1953). 1st Appearance of Richie Rich and Little Lotta. Great Golden age piece of comic history and very hard to find in most any grade',
    id: '54618571998_782103793918716',
    publishTime: '2023-08-11T20:25:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/366829706_781615180634244_4443254257039871515_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jjly6x64HrIQ7kNvgGkuIL0&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFmhw3kNsmh72LjrMEnX1-g&oh=00_AYAytVH8hgqO6TMUQhatBWx06KjO7j2Xl0GaodtK_eOM1A&oe=679DF8AA',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'This is a comic book cover titled "Little Dot," featuring a cartoon girl with black hair in a polka dot dress painting a doghouse with similar polka dots. A small dog is sitting nearby. The cover is from Harvey Comics.',
  },
  {
    message:
      'The Jetsons #1 (1963) - 1st comic book appearance of the Jetsons. Based on the ABC TV series',
    id: '54618571998_702344238561339',
    publishTime: '2023-04-25T20:41:00+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/342960743_264984622544232_6385727641765757218_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Rl0de-CmBc0Q7kNvgGacrWi&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A7jDnAwd5xQtUEgw6tdzuym&oh=00_AYAxkPY3l5XXsrqPn6V5W9gHdh0MFBjRkhjgZvsriNgcGg&oe=679DE59F',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a cover of a Gold Key comic book featuring "The Jetsons," a futuristic family cartoon by Hanna-Barbera. It shows the family and their dog enjoying a space-themed adventure, with a vibrant, mid-century space aesthetic.',
  },
  {
    shares: 3133,
    reactions: 10000,
    message: 'The World of Hanna-Barbera.. Best cartoons ever',
    id: '54618571998_853776393418122',
    comments: 561,
    publishTime: '2023-11-25T14:14:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/403766688_853374086791686_3329714967453693738_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UfusBCM59kkQ7kNvgEexhkC&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad1ff1s2cBGYM0_gvSA37EV&oh=00_AYCdLRDkvPrnM4Xaz7TOr5y3z-bRikkAWgIdCTEd-VCftw&oe=679DCB0F',
    status: 'PUBLISHED',
    imageDescription:
      'The image features a large group of classic cartoon characters, mainly from the Hanna-Barbera universe, gathered together in a tiered arrangement. The colorful characters include animals, humans, and other fantastical beings, all in a lively and cheerful composition against a dark background.',
    postUrl: 'https://www.facebook.com/54618571998_853776393418122',
    totalEngagement: 13694,
  },
  {
    shares: 3382,
    reactions: 10000,
    message: 'by Kerry Callen',
    id: '54618571998_751404360321993',
    comments: 296,
    publishTime: '2023-06-29T16:02:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/356248505_751113557017740_499611845453297590_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yT-a9kDCj2sQ7kNvgHUOIns&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AS1qGJsq0Z9ZgV8qfukSk_U&oh=00_AYBrvJZzvrC9HJqnTfrwe2XEe4KD94eOre26yD0RI7gsvQ&oe=679DDAE0',
    status: 'PUBLISHED',
    imageDescription:
      'The comic strip "Super Antics #13" depicts an elderly butler attempting to perform household tasks like serving tea, dusting, and reading, while a superhero, disguised as the butler\u2019s shadow, distracts him by secretly interfering with each task. The superhero is shown hiding behind curtains, inside a grandfather clock, and behind furniture. The strip ends with the butler holding a cushion with the tag removed, apparently by the superhero, thinking, "I hate when he works at home."',
    postUrl: 'https://www.facebook.com/54618571998_751404360321993',
    totalEngagement: 13678,
  },
  {
    message: '',
    id: '54618571998_592799646182466',
    publishTime: '2022-12-15T21:35:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/320216531_790925455934240_588059783281395010_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Bg8u6T3xuA4Q7kNvgHLiN0T&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AuexS-KxJ4KGtQ3Cm4pz2Tg&oh=00_AYD7VlfqfIGklQQqko775QP8e4ACBtHN3CDq3NL0fZpW7Q&oe=679DCEA8',
    status: 'SCHEDULED',
    imageDescription:
      "The image is an artistic crossover featuring a character resembling Linus from the Peanuts comic, dressed as Thor, holding a small hammer. In the sky, a dog resembling Snoopy is depicted with wings, evoking the Norse mythology theme. In the background, there's a stylized cityscape, possibly Asgard, with a colorful rainbow-like road leading towards it.",
  },
  {
    shares: 3416,
    reactions: 10000,
    message: 'by Kerry Callen',
    id: '54618571998_659858979476532',
    comments: 215,
    publishTime: '2023-03-02T17:23:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/333906348_738830651293742_6065846483539910477_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5C3iIHiOvKsQ7kNvgHTv1Ws&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYCx77DRXYkqTvwrFRZ5faU591G6XT3D7KQQUU5FJa4wsQ&oe=679DF8D3',
    status: 'PUBLISHED',
    imageDescription:
      'In the comic "Super Antics #5," Batman and Robin unveil their new, technologically advanced Batcave only to discover a T-Rex inside, causing alarm. Batman is surprised and swears, while Superman finds the situation amusing, laughing in the background. The scene is lighthearted and comedic.',
    postUrl: 'https://www.facebook.com/54618571998_659858979476532',
    totalEngagement: 13631,
  },
  {
    shares: 2749,
    reactions: 10000,
    message: 'the best of times',
    id: '54618571998_805840484878380',
    comments: 861,
    publishTime: '2023-09-16T13:07:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/378522903_803738355088593_4201285966772887573_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Dvj49E2rcc0Q7kNvgEK2Ktq&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AeuYoz_Z6s18yKB-UbYSALw&oh=00_AYCymICl_KPCBNrYnHifYaP_xi3s8UWi-GwF3Pzg0e8UBA&oe=679DCA5F',
    status: 'PUBLISHED',
    imageDescription:
      'The image features a colorful group of various animated superheroes and characters from different shows, each with distinct costumes and poses, set against a simple background.',
    postUrl: 'https://www.facebook.com/54618571998_805840484878380',
    totalEngagement: 13610,
  },
  {
    message: 'time for cartoons',
    id: '54618571998_737224165073346',
    publishTime: '2023-06-10T14:11:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/352696666_737001191762310_4525271823491238362_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mRWkOnljiMAQ7kNvgF3X3UT&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ANf0kMIeMC_mKos2kMEjn4q&oh=00_AYCJ9Y3K6gEkF-lqqsly1mxXCfSkeCCLUb-B6ZEyEuHsLw&oe=679DE5B8',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image depicts the animated characters from "Jonny Quest," an adventure cartoon. The characters include a young blonde boy, an older man with white hair, another man with reddish hair, and a boy in a turban. The title "Jonny Quest" is prominently displayed at the bottom.',
  },
  {
    message: 'I can hear the theme music',
    id: '54618571998_695345942594502',
    publishTime: '2023-04-16T17:00:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/341368734_240807328440663_16201196875897712_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nX_L1E9bMJUQ7kNvgGM00M6&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AlpbJrh9swE9shsKu1FU20_&oh=00_AYDlFEcP5rQZE3rQGJIoCymlv3E00Plum9mlPXxHNaaPww&oe=679DDE1D',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image depicts cartoon characters Tennessee Tuxedo, a penguin, and Chumley, a walrus, wearing hats against a green background. The title "Tennessee Tuxedo and His Tales" is displayed prominently.',
  },
  {
    message: 'Still one of my favorite cartoons',
    id: '54618571998_643315497797547',
    publishTime: '2023-02-11T15:11:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/330096297_756351689253620_2715031257075263617_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=I-Lzm4LlZ0QQ7kNvgE7MuHo&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AOWK0IeDNMQbdSLHTr-neG3&oh=00_AYCx3NiIAy9MR0r0ePEMCfrBKyAbxSGBiNzYyZn1B3kSWw&oe=679DED8B',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image features the Pink Panther standing confidently with crossed arms, while Inspector Clouseau examines pink paw prints with a magnifying glass.',
  },
  {
    message: 'man the good ol days',
    id: '54618571998_900958565366571',
    publishTime: '2024-01-31T19:10:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/423313661_900529975409430_3820472822156953138_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=j2E6X7jBCsMQ7kNvgH93pAc&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AiXWsGT1VmkIehz87A_CgAK&oh=00_AYDAv_rU13wlbNkfE4Rb9BU5bu8d9ixtjeUzuwRoowG4jg&oe=679DD128',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image shows a black and white photograph of a comic book stand. It features various titles prominently displayed, including "Mystic," "Matt Slade Gunfighter," "Casper," "Woody Woodpecker," and others. The comics are arranged vertically in a rack, suggesting a nostalgic, mid-20th-century setting.',
  },
  {
    message: 'by Kerry Callen',
    id: '54618571998_812776197518142',
    publishTime: '2023-09-26T16:03:08+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/383357615_812499730879122_7618955102457970216_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=x9bn549DSrwQ7kNvgH5LhdW&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AQ6uIXz3wArX-td61b3bq_j&oh=00_AYDQSIEOMKjyEyYVmBEKCE-EPptanR65x1L0b6Nj-5Wnbw&oe=679DD62F',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'A parody comic titled "Super Antics #7" shows a superhero with an "S" emblem being shot at by a hat-wearing criminal, the bullets bouncing off. The superhero is unfazed while the criminal\'s gun clicks empty. The hero bends over laughing, accidentally hitting a nearby caped hero on the chin. The strip ends with the caped hero looking annoyed as the other continues to laugh heartily.',
  },
  {
    message: "the best Sat's  ever",
    id: '54618571998_731792738949822',
    publishTime: '2023-06-03T13:11:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/350521801_219569110839129_6155878286212440609_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=RGB9B_EWGGAQ7kNvgENjoPB&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDWRC2mfkXFbh8H3P2JVBd&oh=00_AYDSH1tKetaqGyJ5lmYHBOz-a48Rj582XwCbhtrZvgyCAQ&oe=679DEDC6',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image features a group of cartoon superheroes and characters, including a genie, a rhinoceros, a ghostly figure, and other diverse characters in various poses, gathered centrally in a dynamic composition.',
  },
  {
    message: '',
    id: '54618571998_871013845027710',
    publishTime: '2023-12-20T19:12:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/412420861_870709651724796_753370211765406708_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=RcJHkplEDKoQ7kNvgGqofeR&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8NHsBiIKKnXEG-EcxcTJjh&oh=00_AYDXDdqAYzuoaqXOwEaV_u9QKKkNx0628OHsQURSy9oJEw&oe=679DDB23',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A person hitchhikes on a rural road while the Batmobile approaches in the opposite lane.',
  },
  {
    message: '',
    id: '54618571998_708259087969854',
    publishTime: '2023-05-03T16:15:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/344415081_251324884071882_2356607156810929665_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lVqbWH5lwRsQ7kNvgF3QuZh&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AYoRt-zoKoYprRsbORd9AEX&oh=00_AYChrvJepifFDvzAd4hhkbtXBYzcdmhssS2H_171gBGIEQ&oe=679DF391',
    status: 'SCHEDULED',
    imageDescription:
      'The image shows a uniquely painted, curved bench. It features vibrant red sections with a black and yellow striped pattern in the center. On one side, there is an illustration of a person wearing sunglasses. The bench is situated outdoors on a concrete path, surrounded by foliage and a stone wall.',
  },
  {
    message: 'Superman and the Mole Men (1951)',
    id: '54618571998_805860508209711',
    publishTime: '2023-09-16T13:44:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/378346714_803741568421605_1355724819119116747_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ww89piKU3q4Q7kNvgE2sDhb&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AeuYoz_Z6s18yKB-UbYSALw&oh=00_AYDOTBknYInHmDdaa8jG56TSytawQOGPUbe1B3dDr4ZtOQ&oe=679DEACB',
    status: 'SCHEDULED',
    imageDescription:
      'The image shows a character dressed as Superman standing confidently with hands on hips, while three people with distinct bald caps and dark outfits are aiming a large, sci-fi style device at him in a black-and-white scene.',
  },
  {
    message: 'by Kerry Callen',
    id: '54618571998_629976485798115',
    publishTime: '2023-01-27T15:11:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/326669075_894275201615989_665533296050789255_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eRDNEkFmp0oQ7kNvgGuzVck&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Alupxj5DpbCH-SJ9oxPO6Md&oh=00_AYBq-2VyC_RgV8r7vJaV7_JMx3Yqeh8gAp8z-rrlL3ycZQ&oe=679DE3A7',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'In a humorous comic parody, superheroes debate who is the fastest. They plan a race, but one hero distracts another with a pie to the face, leading to laughter from the others.',
  },
  {
    shares: 2907,
    reactions: 10000,
    message: '',
    id: '54618571998_810880457707716',
    comments: 191,
    publishTime: '2023-09-23T21:26:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/380892171_810857791043316_1281956801045979482_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HnCygPW-LeQQ7kNvgFN4CBT&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AQ6uIXz3wArX-td61b3bq_j&oh=00_AYCqGVEZFbIVpf4QTKqW5DMuStiIVEH2v18KaX7ehLkDfg&oe=679DF10D',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic-style illustration showing Batman behind bars, looking displeased, while Robin stands outside smiling and holding keys. Robin says, "That is what you get for slapping me on Facebook all the time."',
    postUrl: 'https://www.facebook.com/54618571998_810880457707716',
    totalEngagement: 13098,
  },
  {
    shares: 2731,
    reactions: 10000,
    message:
      'I loved this show, can hear the intro song in my head...and now it will never go away lol',
    id: '54618571998_711429194319510',
    comments: 364,
    publishTime: '2023-05-07T17:08:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/344399278_1400782430773989_5008516562366166971_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lYMtZ5dx29sQ7kNvgH06NfO&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AYoRt-zoKoYprRsbORd9AEX&oh=00_AYCdS2CQrptO6heCtOUDCLyJY69EhrFoQTzZN0U4NAdACg&oe=679DFB9C',
    status: 'PUBLISHED',
    imageDescription:
      'The image features a promotional design for "The Bugs Bunny Show," with the title in bold letters on an orange background and cartoon characters wearing yellow jackets and straw hats.',
    postUrl: 'https://www.facebook.com/54618571998_711429194319510',
    totalEngagement: 13095,
  },
  {
    message:
      'Classic Comic - Johnny Quest #1 (1964) -Only 1 issue was  published',
    id: '54618571998_806705558125206',
    publishTime: '2023-09-17T18:31:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/378145638_806388344823594_6344850043155577397_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=P0rRAORGz_QQ7kNvgGxQLHB&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AeuYoz_Z6s18yKB-UbYSALw&oh=00_AYBN6j6jAvImuZkrFUguE-i6VyDlgpI14g7zki3bweyXhg&oe=679DE989',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is a graded comic book cover featuring "Jonny Quest #1" by Gold Key, titled "The Mystery of the Lizard Men." The art depicts characters in action against green lizard men. The condition is graded 5.0 with off-white to white pages.',
  },
  {
    message:
      'Classic Comic - Happy Days #1 (1979) - Photo cover. Based on the hit ABC television series. Art by Bill Williams',
    id: '54618571998_638171831645247',
    publishTime: '2023-02-05T19:24:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/328993835_956232005303522_6346379122460758718_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=oIK_hfie2OEQ7kNvgHLh0AG&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AOWK0IeDNMQbdSLHTr-neG3&oh=00_AYA3gUN_IWtM9KmeeOVbm9_256s35bB6rAsUumLY4RFbNQ&oe=679DF1A2',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is a "Happy Days" comic book cover featuring five characters in individual frames. The central figure gives a thumbs-up gesture. The text mentions "Four Hilarious Adventures with THE FONZ and Friends!" It\'s marked with a price of 35 cents.',
  },
  {
    message: 'the movie we wanted',
    id: '54618571998_758225859639843',
    publishTime: '2023-07-08T14:08:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/358624038_757906923005070_2956271588765008752_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=P0gGKdOfa4sQ7kNvgFPCINu&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AuXIsvkg1_wDUFJ6cdv22t7&oh=00_AYAzTGmxXayCq7nA1hxEYpIr9iYzl537ktwJd1aY6r34cg&oe=679DE6D0',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a fan-made poster featuring three classic superheroes: Superman, Wonder Woman, and Batman. It has a retro vibe, with each character in iconic costumes associated with older portrayals. The background shows a stylized Superman-Batman logo, and there are names of actors above each character. A date and hashtag "#BATMANVSSUPERMAN" are at the bottom.',
  },
  {
    shares: 2857,
    reactions: 10000,
    message: 'He-Man by Art Adams',
    id: '54618571998_715930883869341',
    comments: 147,
    publishTime: '2023-05-13T18:18:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/345657892_1167052607320415_2297197188634539993_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ml3Ip_sH54gQ7kNvgFDfkKS&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AvTk5bmSziIvFA13hRBimly&oh=00_AYDmsjq1MVoE53CnE1IWMt4EpOTjBEQTvitozrQ3DukrSg&oe=679DF60C',
    status: 'PUBLISHED',
    imageDescription:
      'The image depicts a group of fantasy warriors, including a muscular man with a sword, standing in front of a castle with a skull fa\u00e7ade. The scene includes a variety of characters in armor and mythical creatures, set against a rocky and mountainous backdrop.',
    postUrl: 'https://www.facebook.com/54618571998_715930883869341',
    totalEngagement: 13004,
  },
  {
    message: '',
    id: '54618571998_695365662592530',
    publishTime: '2023-04-16T17:41:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/341392927_1570817596763584_670678832683622449_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aXDdfL0vuDYQ7kNvgGqZMMy&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AlpbJrh9swE9shsKu1FU20_&oh=00_AYACfno2-DuAarKchEL6gP0pvufrRbzeWd9NxD7NKOnQBg&oe=679DC8F5',
    status: 'SCHEDULED',
    imageDescription:
      "The image shows two individuals dressed as the characters Batman and Robin, standing beside a helicopter designed to resemble the Batmobile's aesthetic. They are wearing classic superhero costumes with capes and masks, captured in a black-and-white photo.",
  },
  {
    message: 'The Amazing Julie Newmar',
    id: '54618571998_676746327787797',
    publishTime: '2023-03-23T14:07:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/337044456_4398891943568306_2319704128365353878_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5SrxBM6z9IkQ7kNvgFHIooR&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYDEaeZ2Xnf3aUSDldstsVS0oS_CKKuuz_KwIt_rljA1wA&oe=679DE633',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image shows a woman in a sleek, dark jumpsuit with a gold belt, posing with her hands behind her head. She is standing in front of a man in a dark uniform near what appears to be a cell or barred area. The scene has a vintage look.',
  },
  {
    shares: 2702,
    reactions: 10000,
    message: 'Masters of the Universe by Art Adams',
    id: '54618571998_791266756335753',
    comments: 192,
    publishTime: '2023-08-25T18:07:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/370888656_791159673013128_8728719547589269700_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XawDDxsdWRwQ7kNvgGgXrfP&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFPZWKt5JZ1PFEs5yzutf_Z&oh=00_AYDsmoscSeNUuzAf-ddvlBISEv4BoSQidC7gEiY9iURwxw&oe=679DD5EC',
    status: 'PUBLISHED',
    imageDescription:
      'The image depicts a group of fantasy characters posing in front of a castle with a skull facade. The characters, dressed in armor and wielding weapons, include a muscular sword-wielding hero, a woman in white and gold armor, a large green creature, and a giant feline beast, among others. They appear ready for battle, exuding a sense of strength and unity.',
    postUrl: 'https://www.facebook.com/54618571998_791266756335753',
    totalEngagement: 12894,
  },
  {
    message: 'by Kerry Callen',
    id: '54618571998_789322453196850',
    publishTime: '2023-08-22T18:11:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/369906721_788973396565089_7821258802746349628_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zimE_wSTQroQ7kNvgFOt6Fk&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYCKNcX2BM6ePnWqkdPgBn3XeFwsnRvdC0V4Z8jhemjM4Q&oe=679DD906',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'In a comic strip titled "Super Antics #3," several superheroes are gathered around a table after a meal. One hero, presumably Flash, is asked to clean up due to his super-speed. He expresses frustration, arguing about fairness compared to others like Wonder Woman or Batman. Superman acknowledges that speed isn\'t the core issue and discusses fairness and justice. The strip ends with laughter but concludes seriously asking Flash to do the dishes.',
  },
  {
    shares: 2577,
    reactions: 10000,
    message: 'ouch',
    id: '54618571998_798288948966867',
    comments: 301,
    publishTime: '2023-09-05T17:34:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/375658155_798248535637575_7697174422233305473_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=CvzEGHv8EIoQ7kNvgGlBq7_&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYB_XdbUdQec9HNqyINWTbRBXyJi570xY0MOUrOqyCrUHg&oe=679DF543',
    status: 'PUBLISHED',
    imageDescription:
      'In a humorous comic, Batman tells Alfred his coffee is cold. Alfred replies, "So are your parents," and then walks away nonchalantly humming when questioned by Batman.',
    postUrl: 'https://www.facebook.com/54618571998_798288948966867',
    totalEngagement: 12878,
  },
  {
    shares: 1667,
    reactions: 10477,
    message:
      'Robert Lowery and Johnny Duncan from the 1949 movie serial Batman and Robin',
    id: '54618571998_1126656682796757',
    comments: 707,
    publishTime: '2024-12-02T14:02:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/468821828_1126061169522975_4888851488123231672_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=33OgfuQrV14Q7kNvgGncYH4&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AGCaRt6IitcQ7-yAsV12fL4&oh=00_AYAg_PfhlPy_cCgtkUzB_f-eIN_jajLvHTcZXMblX1Yv4A&oe=679DD0A3',
    status: 'PUBLISHED',
    imageDescription:
      'The image shows two individuals dressed in vintage superhero costumes, resembling classic versions of Batman and Robin. They stand in front of an old car, wearing capes, masks, and gloves, indicative of early comic adaptations.',
    postUrl: 'https://www.facebook.com/54618571998_1126656682796757',
    totalEngagement: 12851,
  },
  {
    message: 'by Kerry Callen',
    id: '54618571998_739836924812070',
    publishTime: '2023-06-13T18:14:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/353645389_739459508183145_944917422462805745_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WeKi9cnzewEQ7kNvgEIbq7C&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANf0kMIeMC_mKos2kMEjn4q&oh=00_AYBuYNJ34-T1OS1IZZfUh9wakTdWPKR6eQp1Hj18ANVCqg&oe=679DDE4E',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic strip parody titled "Super Antics #11," featuring superheroes humorously attempting to conceal themselves with capes. Each character makes a dramatic introduction, only for another to mock or imitate them. The last panel shows a character comically ruining the moment by running fast with a plate, and others express frustration.',
  },
  {
    shares: 2636,
    reactions: 10000,
    message: 'the dreams of 2 guys in Cleveland',
    id: '54618571998_819107733551655',
    comments: 202,
    publishTime: '2023-10-05T18:23:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/386083136_818666663595762_510806177236543693_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=iUT-gRZ58HgQ7kNvgHpqj0f&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AT-0UBkoD-77dQORts4-Ugl&oh=00_AYAkfTtrqyuFrd9VfWMIacUp0C25rDtrKsvEH4ZgVz42lQ&oe=679DE8FF',
    status: 'PUBLISHED',
    imageDescription:
      'Two men in a 1930s office are brainstorming. One is drawing at a desk while the other gestures enthusiastically. Above them, comic-style thought bubbles depict Superman, as the ideas take visual form. This image likely celebrates the creation of Superman in 1938.',
    postUrl: 'https://www.facebook.com/54618571998_819107733551655',
    totalEngagement: 12838,
  },
  {
    message: 'Yvonne Craig',
    id: '54618571998_647944624001301',
    publishTime: '2023-02-16T14:23:06+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/330987587_853901412821931_4154381033504493140_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dIdagJnMcjAQ7kNvgFdU8kI&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYBID-6Xfq5ZLqDWIq4vHUo2vbhy773x-zj79eYov3emiA&oe=679DE8D5',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      "The image depicts a person dressed in a Batgirl costume, complete with a mask and cape, standing beside a classic Batmobile. It's a black and white photo with a vintage feel.",
  },
  {
    message: 'how about a little Batman to start off your Sunday',
    id: '54618571998_768742421921520',
    publishTime: '2023-07-23T17:05:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/362626775_768694578592971_6300207673282594712_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zzh6DmA5MQgQ7kNvgF8I84R&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ATc73HRWyp02Z-tyObKGEZm&oh=00_AYDyRtrspBteullX7AFvxAk_cqF5KLiI8vU-_OL7qteXxQ&oe=679DDC9B',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a black and white illustration depicting characters from the Batman series. Batman is in the center, flanked by Robin. Other characters include the Joker, the Penguin, and Catwoman in the background. The bottom right features the "Batman" logo.',
  },
  {
    message: 'great memories',
    id: '54618571998_831147332347695',
    publishTime: '2023-10-22T17:07:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/394553438_830729352389493_1206553212170402201_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=s06gcSWHB7cQ7kNvgGZJQFE&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AvEhpGDi1HQFkGgpMJudFl6&oh=00_AYCi0unZ_ag9mVDQApGRcoa6f7StnCGl77pyBIlQR6R-2w&oe=679DD4A7',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image depicts an animated scene inside a futuristic vehicle with four seated characters. A man with white hair and a red shirt is driving, while a bearded man, a blond boy, and a person wearing a turban with a dog riding with them, observe the surroundings. The setting is a detailed cockpit with advanced equipment.',
  },
  {
    message: 'time for cartoons',
    id: '54618571998_821093480019747',
    publishTime: '2023-10-08T17:42:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/387076274_821093360019759_3042308289446894327_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Fk06DRW1BhgQ7kNvgHVbR0j&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AT-0UBkoD-77dQORts4-Ugl&oh=00_AYDWJ-bW7mTA5yrWNKt-Z8FduvenhVhF2Y4VLsDvpAyROg&oe=679DE56B',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a poster for "The Herculoids," a Hanna-Barbera animated series. It features a group of characters, including humans and various fantastical creatures, like a dinosaur and a rock-like being, set against a dynamic background with the show\'s title at the top.',
  },
  {
    message: 'my favorite Catwoman',
    id: '54618571998_964046179057809',
    publishTime: '2024-04-30T13:10:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/438223655_963561629106264_2642802596860647916_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fhLXjX9QkqwQ7kNvgGnbpvA&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A85M5KuolsBPj4E-57EiotJ&oh=00_AYBdqke-IsK8Oha7hraUR4UxFyapo2-3vntGDeLCyDF5og&oe=679DE720',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'A person in a shiny black outfit with a gold belt strikes a confident pose with hands behind their head. They are standing in front of a barred backdrop with another person partially visible behind them wearing a suit.',
  },
  {
    message: 'Julie Newmar ...our favorite Catwoman',
    id: '54618571998_662944209168009',
    publishTime: '2023-03-06T15:22:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/334622120_6095058283865688_6663783823804218486_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yEg_m1-pzqgQ7kNvgFc-iBr&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYDhZC-8iryjrkNTsbPWch_9_FballopawMqvNy47DnDeQ&oe=679DF752',
    status: 'SCHEDULED',
    imageDescription:
      'A woman is dressed in a shiny black catsuit with cat ears and a belt. She stands confidently in an opulently decorated room with elaborate furniture and rich colors.',
  },
  {
    message: '',
    id: '54618571998_675006894628407',
    publishTime: '2023-03-21T13:15:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/337032182_673780817856091_8794827558688500466_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1R9_BZJR6kkQ7kNvgG9LwYZ&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYA5ZhAHwdFh2jFKrAnQ8NIvJbAv3HKmRq-X7w835i26DQ&oe=679DED4D',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image depicts two costumed characters, reminiscent of Batman and Robin from the 1960s TV series, climbing the side of a building using ropes. A man is looking out of a window at them. The scene is in black and white.',
  },
  {
    shares: 2049,
    reactions: 10000,
    message:
      'Classic Comic - Hanna-Barbera Super TV Heroes #3 (1968) -  - Space Ghost, Birdman, Shazzan, Young Samson & Goliath and Moby  appear. Mike Arens art',
    id: '54618571998_836138745181887',
    comments: 575,
    publishTime: '2023-10-29T20:27:00+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/396245709_836099538519141_5167274988724710006_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AWQ_0zLWn4UQ7kNvgFK7P_-&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=APJaJCyVrXvQdQbZ44Kmjb9&oh=00_AYA8hnosjAvoIEroAjRZVlV2ffOGcgVdb0v-sP2MI6wimg&oe=679DDE5C',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book cover titled "Hanna-Barbera Super TV Heroes" from Gold Key. It features Space Ghost fighting giant creatures. Below, there are additional characters: Young Samson and Goliath, Birdman, and Shazzan. The issue also includes "Moby Dick: Undersea Invasion."',
    postUrl: 'https://www.facebook.com/54618571998_836138745181887',
    totalEngagement: 12624,
  },
  {
    message:
      'Classic Comic - Walt Disney comics & Stories #112 (1950) - Christmas cover by Walt Kelly. Carl Barks story and art',
    id: '54618571998_793242429471519',
    publishTime: '2023-08-28T22:57:24+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/370334560_793242382804857_3348905312883087402_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=o3tXtkKghHwQ7kNvgFF3efv&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFPZWKt5JZ1PFEs5yzutf_Z&oh=00_AYDhV99DIT17uguW8Jw5a6-CFRvEuYoghQmqcCpiEwwi3Q&oe=679DCEC4',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image is a cover of "Walt Disney\'s Comics and Stories" from January 1950, depicting a duck character in pajamas sleeping in a chair, with a plaid robe and slippers. Nearby, three ducklings are asleep in a bed. The cover price is 10 cents, and it states, "52 pages ALL COMICS!"',
  },
  {
    message: '',
    id: '54618571998_802300598565702',
    publishTime: '2023-09-11T13:06:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/377261656_802020471927048_1882733728376998932_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hWfflLSy1cYQ7kNvgER5Gnj&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AeuYoz_Z6s18yKB-UbYSALw&oh=00_AYCtq9tuRDJRmmBRyiqUKDiz9m2qijVTzFshaksGIYrzlA&oe=679DCBC2',
    status: 'SCHEDULED',
    imageDescription:
      'Two individuals in classic Batman and Robin costumes stand in front of a Batcopter.',
  },
  {
    message: '2 of the best shows from my childhood-',
    id: '54618571998_698302355632194',
    publishTime: '2023-04-20T14:06:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/342360741_9076542142421140_399552228240878533_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Z_fwPm9Nz6oQ7kNvgE0D7fn&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A7jDnAwd5xQtUEgw6tdzuym&oh=00_AYBto4yRz2vHYrUEy6FkKZ5u79F0s25vM5JkcqrBOUh40Q&oe=679DDE35',
    status: 'SCHEDULED',
    imageDescription:
      'A person dressed as Robin from Batman is interacting with a child on what appears to be a film set, with equipment and a large rock prop in the background. The scene is in black and white.',
  },
  {
    message: 'The Bat-cycle',
    id: '54618571998_917724310356663',
    publishTime: '2024-02-24T15:14:07+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/428643107_917297303732697_6413090711126004754_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JwXu2GXp0sgQ7kNvgEgtHFK&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A5eIE02JisGgFv8ajLznD4-&oh=00_AYCPV4Fj-9JvZtWZkc5Ky7yLCfW_OwCzfNqnou0tJVQFCg&oe=679DED26',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A person dressed as a comic book superhero rides a black and white motorcycle with distinctive bat-like designs. They are wearing a black helmet, blue gloves, and boots, and are positioned on an open area with some buildings in the background.',
  },
  {
    shares: 2088,
    reactions: 10000,
    message:
      'time for sat morning cartoons\n(Moby Dick and The Mighty Mightor (1967 to 1969))',
    id: '54618571998_796209672508128',
    comments: 389,
    publishTime: '2023-09-02T13:15:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/374651531_796034912525604_1671615101997683772_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=U4HXTJWvGPEQ7kNvgG5AeHj&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYDlu1zQEnGXXdecumhKDEM_mAkkZyYxsMkPsDMFb47PKg&oe=679DDA6B',
    status: 'PUBLISHED',
    imageDescription:
      'The image depicts an animated scene with two characters riding on a large white whale. Another character swims with them, and a small blue dragon-like creature flies alongside. The background is a simple blue, suggesting an underwater or aquatic setting.',
    postUrl: 'https://www.facebook.com/54618571998_796209672508128',
    totalEngagement: 12477,
  },
  {
    message: 'TV Justice League',
    id: '54618571998_771308238331605',
    publishTime: '2023-07-27T14:22:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/363804806_771285408333888_933267039326770819_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gdScbFVFBIEQ7kNvgEobJ4K&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AxJt4ThoRXUxba1szmG7ZRv&oh=00_AYC5HKUhdDLoo9bwN3krhlfQPchuyTGQmWsaQhBLHyaDbQ&oe=679DE0D5',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      "The image features a group of classic superhero characters, including a woman in a Wonder Woman costume and men dressed as Robin, Superman, Batman, and Flash. They're standing together, showcasing their iconic costumes from various comic book stories and series.",
  },
  {
    message:
      'Classic Comic - Huckleberry Hound #1 (Four Color #990 - 1959) - 1st app. Huckleberry Hound, Yogi Bear, Pixie, Dixie & Mr. Jinks in comics',
    id: '54618571998_649914137137683',
    publishTime: '2023-02-18T16:18:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/331758673_524512629748824_15216083282081824_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=J_MNv5_VRIgQ7kNvgGywGD8&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYDZsxofZulHLunRoFAwYqnMNPDg23ekwOfJt1GB3XlJeg&oe=679DE845',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic book cover featuring "Huckleberry Hound" from May to July, issue number 990, priced at 10 cents. It depicts Huckleberry Hound performing a magic trick, pulling characters like Yogi Bear, Top Cat, and two mice out of a magician\'s hat on a table. The background is yellow, and it\'s published by Dell.',
  },
  {
    message: 'to have been a fly on the wall during this',
    id: '54618571998_746957130766716',
    publishTime: '2023-06-23T13:19:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/355122670_745487004247062_6694296702618153409_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IAQ49B17p5AQ7kNvgG6DJ0W&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ASXWjd5_HguOydGi6Cp1YcZ&oh=00_AYCisxXcoV3JdAYmtd1tcEgLSnCGO-46wgFfGiFBBIubMQ&oe=679DCCA2',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image features two iconic cars, the Batmobile and the Black Beauty, parked side by side. Several people, including characters in costume resembling superheroes, are standing near the cars. A group of onlookers is gathered in the background by a large building.',
  },
  {
    shares: 2186,
    reactions: 10000,
    message: 'by Kerry Callen',
    id: '54618571998_781972767265152',
    comments: 210,
    publishTime: '2023-08-11T16:11:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/366828097_781626473966448_2871405870068797814_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3phkWySNs6gQ7kNvgGxdBB8&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFmhw3kNsmh72LjrMEnX1-g&oh=00_AYAWzJ0UETQ_tiSMprEC5VrsoQaQRGmjMeghjKNEgSoytQ&oe=679DF0AA',
    status: 'PUBLISHED',
    imageDescription:
      'A butler goes about his chores while a superhero humorously interferes from the shadows. The butler looks frustrated as he removes a legal tag from a pillow and comments, "I hate when he works at home."',
    postUrl: 'https://www.facebook.com/54618571998_781972767265152',
    totalEngagement: 12396,
  },
  {
    message:
      'King Kong (1933)...90 years later and this is still a great movie',
    id: '54618571998_787259973403098',
    publishTime: '2023-08-19T13:03:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/369187930_787077556754673_2655684980424378423_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gLCwTqi7KoUQ7kNvgG0qXwS&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYBAy-ws72zX2qeuJQ0iSRY3wrHLYcC2CbrLCJfaU61XQw&oe=679DEAFF',
    status: 'SCHEDULED',
    imageDescription:
      'A massive gorilla towers over a group of frightened individuals on a large tree branch in a jungle setting. The scene is dramatic, with the gorilla appearing menacing and the people appearing terrified as they face the creature above a steep drop with a waterfall in the background.',
  },
  {
    shares: 2143,
    reactions: 10000,
    message: 'Batman, Batgirl and Mr Spock',
    id: '54618571998_728712145924548',
    comments: 129,
    publishTime: '2023-05-30T13:11:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/349840650_214179028032452_4247118623643532510_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IWQ035Ac9NsQ7kNvgFy21mM&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDWRC2mfkXFbh8H3P2JVBd&oh=00_AYA32M50QRFQdEjQzvQAIP1glV11ie9RB45mEsw-hP51TA&oe=679DF8DA',
    status: 'PUBLISHED',
    imageDescription:
      'The image shows three people posing together. The man on the left is wearing a suit, the woman in the middle is in a light-colored dress, and the man on the right is wearing a dark jacket with a light shirt. They appear to be at an event or gathering.',
    postUrl: 'https://www.facebook.com/54618571998_728712145924548',
    totalEngagement: 12272,
  },
  {
    shares: 1337,
    reactions: 10000,
    message: 'always loved  this show',
    id: '54618571998_786122630183499',
    comments: 923,
    publishTime: '2023-08-17T18:09:58+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/368673829_786117910183971_2231635676322166769_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2Z-rffs4EBgQ7kNvgGCg3z0&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYDD41AwJ1soFQQUqJi6201zsuhTGgBsV6C_24ps3ut7xQ&oe=679DC976',
    status: 'PUBLISHED',
    imageDescription:
      'The image shows three animated superheroes standing together: one in a yellow and red costume, one in a light blue and white metallic suit, and another in a red and blue spider-themed outfit. The background is a colorful, abstract sky with a silhouetted car and wooden platform.',
    postUrl: 'https://www.facebook.com/54618571998_786122630183499',
    totalEngagement: 12260,
  },
  {
    shares: 2083,
    reactions: 10000,
    message: '',
    id: '54618571998_685018190293944',
    comments: 162,
    publishTime: '2023-04-03T14:18:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/339604675_242342178172862_5488146018749126413_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8zIVRI_IalcQ7kNvgFduAPO&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AjtGYtRKUGGoHrazfSxAA5t&oh=00_AYBUZdFT6vsHM4lcyzWB4knjFdlRFdmq95gJXSgGeENLnA&oe=679DD0E3',
    status: 'PUBLISHED',
    imageDescription:
      'The image depicts Superman flying alongside the Batmobile, where Batman and Robin are seated. Superman appears cheerful, while Robin waves excitedly, and Batman focuses ahead.',
    postUrl: 'https://www.facebook.com/54618571998_685018190293944',
    totalEngagement: 12245,
  },
  {
    message: 'Spider-Man TV series (1977-1979)',
    id: '54618571998_1129176312544794',
    publishTime: '2024-12-05T17:10:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/469002547_1126880116107747_2351412967841335887_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Dr6YGRUjs5MQ7kNvgExhXzB&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A3nqXxoEtaEELna7Wo7ba1V&oh=00_AYA3Svra3RKUsswqHOWCEMwkgzGWlIWA9ljsCYJcO71ayQ&oe=679DE5C0',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image depicts a person wearing a classic Spider-Man costume, crouching on a ledge in a cityscape setting. The suit is red and blue with a web pattern and large eye lenses.',
  },
  {
    message:
      'Classic Comic - Green Hornet #2 (1967) - Bruce Lee and Van Williams photo cover . Art by Dan Spiegle',
    id: '54618571998_619596646836099',
    publishTime: '2023-01-15T21:31:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/325900461_706164714511683_1432503327819167947_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kGU3XQw-EtgQ7kNvgHqRhX7&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AEj86Fc0xlMaisai1dICqfl&oh=00_AYCCGCdK-EP1he-kFbvJqOsJImJZx1YbE3nAk_bOA0t4Kg&oe=679DD826',
    status: 'SCHEDULED',
    imageDescription:
      'This image is a comic book cover for "The Green Hornet." It features a masked man in a black suit and hat, with the text: "The Green Hornet must gamble Kato\'s life to fight the threat of the Red Dragons!" The background is split between red and yellow, with additional action poses of the character. The publisher is Gold Key, and the price is 12 cents.',
  },
  {
    message:
      'Classic Comic - Space Ghost #1 (1967) - 1st appearance of Space Ghost in Comics. Only issue. Back Cover is a pin up',
    id: '54618571998_721132240015872',
    publishTime: '2023-05-20T15:04:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/347090393_552393990307455_2636722778650925515_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8K7_MwEgwkcQ7kNvgFToFFE&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ArYh5GykvSY8MnqKvLRRkWA&oh=00_AYBsptrLjCMXK1NxjwZd050aORcG3uyFY9wywNl5oULW_A&oe=679DF749',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'This is a comic book cover titled "Space Ghost" by Hanna-Barbera, published by Gold Key. The cover features Space Ghost in various action poses demonstrating his powers, such as electronic force, speed, and invisibility. The text includes phrases like "Protector of the Universe," "Fists Packed with Electronic Force," "Incredible Speed!" and "The Unique Gift of Invisibility!" The price is listed as 12 cents, and the publication year is 1966.',
  },
  {
    message: 'Julie Newmar ...our favorite Catwoman',
    id: '54618571998_756635216465574',
    publishTime: '2023-07-06T14:07:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/358095442_756348593160903_4227726397814221837_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=143n3Ccl4_8Q7kNvgFCPeZ9&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AS1qGJsq0Z9ZgV8qfukSk_U&oh=00_AYDdGsah-YH6kb0e0W4nIU228dNX90VfxvZvqnrP83Ucgg&oe=679DCC27',
    status: 'SCHEDULED',
    imageDescription:
      'The image shows a person in a classic Catwoman costume. The outfit is a shiny black bodysuit with matching gloves, cat ears, and a gold belt. They are standing in an ornate room with opulent decor, including red and gold chairs and intricate wall details.',
  },
  {
    message:
      "here is a link to many of the Kellog's commercials with Clark Kent \nhttps://www.youtube.com/watch?v=h2jZ5LRIBcI&t=13s",
    id: '54618571998_603057305156700',
    publishTime: '2022-12-26T21:12:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/322274818_555223309807411_7739568728616493101_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rkf4051Q2O8Q7kNvgGKnrip&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDxNigojbm3udtT9aeWKst&oh=00_AYAaF3lKxiwzDb4SI0b0HR4mQr3siPfRH_df263ConDoYQ&oe=679DD861',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is of a vintage Kellogg\'s Corn Flakes cereal box featuring "King Size Package" labeling at the top right. It prominently displays an illustration of George Reeves, identified as the star of "Superman." Below him, the box mentions a "Superman Krypton Hydro-Jet Rocket with Launcher" offer.',
  },
  {
    message: 'cartoon time',
    id: '54618571998_759115946217501',
    publishTime: '2023-07-09T17:12:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/358454167_758704982925264_2062412615616750444_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pBMeKIA5HHgQ7kNvgGxBqMw&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AuXIsvkg1_wDUFJ6cdv22t7&oh=00_AYB5JRFgY3McBikqmLohZo0Gal_4C2u6Tf9335Yhp8zQNA&oe=679DC9D3',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a promotional poster for "The Herculoids," featuring characters from the animated series, including a group of futuristic superheroes and alien creatures on an adventure. The text "The Herculoids" is prominent at the top of the image.',
  },
  {
    shares: 1489,
    reactions: 10000,
    message:
      'Classic Comic -  Jonny Quest #1  (1964) - The only issue made at the time. Back cover is a pin up. Story based on the ABC pilot episode.',
    id: '54618571998_854568433338918',
    comments: 506,
    publishTime: '2023-11-26T19:48:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/405014029_854471783348583_2803378359962558347_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bZ2JQY3ZLAUQ7kNvgGZT338&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad1ff1s2cBGYM0_gvSA37EV&oh=00_AYDwQvQdhm2VKcvoUz9xImSfhes0XWy75FdxvhEI2dD4ww&oe=679DBF7F',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book cover titled "Jonny Quest: The Mystery of the Lizard Men," produced by Hanna-Barbera and published by Gold Key. It features characters in action against lizard-like creatures, with a predominantly red background.',
    postUrl: 'https://www.facebook.com/54618571998_854568433338918',
    totalEngagement: 11995,
  },
  {
    message: 'by Art Adams',
    id: '54618571998_648180050644425',
    publishTime: '2023-02-16T19:17:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/331481828_1691921061204862_4611542059129260574_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bzRCNHPYkSsQ7kNvgGkVAQv&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYAVE1FNlWD5Jmr9q56YsynIQYvHC9LP3UNzjqi3vgd48Q&oe=679DF446',
    status: 'SCHEDULED',
    imageDescription:
      'The image features a group of colorful, muscular fantasy characters standing together in front of a castle with a skull-like design at the top. The foreground has a warrior with a sword and a green beast, surrounded by a team of diverse characters, each with distinct armor and weapons, suggesting a fantasy or heroic theme.',
  },
  {
    shares: 1766,
    reactions: 10000,
    message:
      'Classic Comic - Rocky and his Friends #1 (1962) - 1st Gold Key Rocky and Bullwinkle. Giant size issue. Based on hit TV series',
    id: '54618571998_918525166943244',
    comments: 199,
    publishTime: '2024-02-25T19:36:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/429754103_917479817047779_6225300058853242494_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NwDigPztHwkQ7kNvgG-jl_B&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AMiFh2EetwMb3aS1X1CyXj0&oh=00_AYA1R68DDF4C9fUqA1ySfDyZbLVhAe09lNE1fJjUNce4WQ&oe=679DC3F9',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vintage comic book cover featuring "Rocky and His Fiendish Friends." It shows various cartoon characters around a spooky house, including a moose and a flying squirrel. The background is a pinkish-red with a cloudy sky. The text mentions Boris and Natasha plotting a scheme in "Pottsylvania."',
    postUrl: 'https://www.facebook.com/54618571998_918525166943244',
    totalEngagement: 11965,
  },
  {
    message: 'always my favorite',
    id: '54618571998_693728999422863',
    publishTime: '2023-04-14T14:09:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/341072622_1152140108792975_5658039821645732495_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rKlTA0l4G3sQ7kNvgEzwq_K&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AlpbJrh9swE9shsKu1FU20_&oh=00_AYBnhF-pBq8jv4K0pexLrVcuIudHUivTgVfGpd8hcx0m3w&oe=679DFAC1',
    status: 'SCHEDULED',
    imageDescription:
      'A woman in a shiny black outfit with cat ears and green-tinted sunglasses stands between two men in tiger-patterned costumes. She is adjusting her glasses with one hand, wearing long gloves and a prominent gold necklace.',
  },
  {
    shares: 1846,
    reactions: 10000,
    message:
      "Classic Comic - WALT DISNEY'S COMICS & STORIES #31 (1943. With Cover by Walt Kelly (Pogo) and story and art by Carl Barks. In fact this is the issue where Barks takes over the art for the series.",
    id: '54618571998_791943696268059',
    comments: 84,
    publishTime: '2023-08-26T21:33:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/369903945_789608943168201_1117496146152418162_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9emsKKyKKgEQ7kNvgHrjeu-&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFPZWKt5JZ1PFEs5yzutf_Z&oh=00_AYAPDZGof7IYDF0cL7L-nF59iGx6e3ra9Kvm6HwREUx82A&oe=679DE6F7',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a cover of "Walt Disney\'s Comics and Stories" from April 1943, priced at 10 cents. It features Donald Duck and his nephews buying war bonds and stamps. There is a patriotic theme typical of the World War II era.',
    postUrl: 'https://www.facebook.com/54618571998_791943696268059',
    totalEngagement: 11930,
  },
  {
    message:
      'Classic Comic - Superboy #98 (1962) - 1st appearance of Ultra Boy of the Legion of Super Heroes. Cover by Curt Swan and George Klein\n\n You can see the current value of this book (or any Comic) here on our website for free...\nhttps://www.comicspriceguide.com/titles/superboy/98/yjtpl',
    id: '54618571998_1149951650467260',
    publishTime: '2025-01-01T18:03:06+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/472233844_1149671133828645_21992906967381987_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zoG3xNjGmF4Q7kNvgFzECBO&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A3DA4TIa7W0Y0Ersp1m0Znm&oh=00_AYB5UNCZic4JWR_tK198L162ot0lYZoMUihpPP370FKaqg&oe=679DC99A',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is the cover of "Superboy" comic issue #98, featuring Superboy alongside a new character with "ultra-powers." Both figures are in civilian clothes, but their superhero costumes are revealed through thought bubbles indicating they are assessing each other\'s secret identities and powers. The cover highlights mystery and the theme of secrecy.',
  },
  {
    message: 'Adam West, Yvonne Craig and Leonard Nimoy, 1967',
    id: '54618571998_686736846788745',
    publishTime: '2023-04-05T18:15:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/339902664_1411091282971030_1651542618850651515_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eUjDAjap4EEQ7kNvgFr9TFj&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AjtGYtRKUGGoHrazfSxAA5t&oh=00_AYCZw90lZXt0lOHQ28fzuBudoVO_HV9lKli1Di5-naSTNA&oe=679DDD40',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a vintage black and white photograph of three people standing together, two men on either side of a woman. The man on the left is wearing a suit, the woman is in a light-colored dress, and the man on the right is in a dark jacket over a turtleneck.',
  },
  {
    message: 'the Amazing Yvonne Craig',
    id: '54618571998_749741020488327',
    publishTime: '2023-06-27T13:17:00+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/355869861_749528057176290_1554596503803981948_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HrzvM5uqkZsQ7kNvgFjQ4Bp&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ASXWjd5_HguOydGi6Cp1YcZ&oh=00_AYB76vRx2lkcfgHsEgxNTh_FkgQKyQuoUPVK7ece--55Pw&oe=679DD435',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image shows a person dressed in a superhero costume, consisting of a mask, cape, and tight suit, standing next to a vintage car. The setting appears to be a garage or industrial area.',
  },
  {
    message:
      'Classic Comic - Welcome Back, Kotter #1(1976) - Based on the hit TV series. Cover by Bob Oksner',
    id: '54618571998_689776809818082',
    publishTime: '2023-04-09T18:22:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/340332432_182021048012151_5680860757770796763_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_w3EbjlzgusQ7kNvgFG0XUp&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AlpbJrh9swE9shsKu1FU20_&oh=00_AYDrPmzuxvMBFt4faum7Uc4zEnO-5-KpIP5psTtyxo0qlw&oe=679DD427',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a comic book cover for "Welcome Back, Kotter" featuring cartoon characters in a classroom setting. A character performs a basketball trick, while others react with humor. The teacher, Mr. Kotter, and another man discuss the class. Promotional text mentions a bonus about Gabriel Kaplan.',
  },
  {
    shares: 1560,
    reactions: 10000,
    message:
      'Last known picture of Moe and Larry (The 3 Stooges)\n\nFrom Wende Doohan-"James Doohan (Left) volunteered at the Motion Picture Home, as did Bill Campbell (Right) which is where this was taken" (Thank you for sharing that info)',
    id: '54618571998_730474035748359',
    comments: 233,
    publishTime: '2023-06-01T18:15:56+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/348855817_3430605037152096_1820019295356460697_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7JDNLllBetAQ7kNvgFypm-6&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDWRC2mfkXFbh8H3P2JVBd&oh=00_AYDZH3U12zSL7vfi7ImQuXd_tJspcwLtWvhB62vYgBXYiQ&oe=679DFAF1',
    status: 'PUBLISHED',
    imageDescription:
      'The image shows a group of four men in a black-and-white photograph. Two men are standing behind, while two are in front. One of the men in front is seated in a wheelchair. They appear to be posing outdoors, possibly in a casual or social setting.',
    postUrl: 'https://www.facebook.com/54618571998_730474035748359',
    totalEngagement: 11793,
  },
  {
    message: 'by Kerry Callen',
    id: '54618571998_843765461085882',
    publishTime: '2023-11-10T17:11:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/398981194_842814327847662_3607543277714207802_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=igulTWFEmEMQ7kNvgEDsmj6&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AR-VLF_t3tmBjH-A-DjzpPc&oh=00_AYAyoaKaZ-9_kbXbUMyuw_Ht3c6_8Kq7xUN7fEHMAlDZ4A&oe=679DD8C4',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      "In this comic, a hero attempts to fly with other superheroes but falls flat on the ground. Embarrassed, he explains that he's used to being underwater where everyone 'flies.' The other superheroes laugh at his mistake, teasing him by suggesting he might use other powers inappropriately. The scene humorously depicts the challenges of adapting to different environments.",
  },
  {
    shares: 1557,
    reactions: 10000,
    message:
      'Classic Comic - Space Ghost #1 (1967) - 1st appearance of Space Ghost in comics. Only Issue. Based on CBS TV Series. Dan Spiegle cover and art',
    id: '54618571998_760512606077835',
    comments: 187,
    publishTime: '2023-07-11T15:14:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/358702588_760287036100392_5898958464657815254_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=arpPzwmO_BwQ7kNvgFxb18E&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AuXIsvkg1_wDUFJ6cdv22t7&oh=00_AYB2bVD6qgXCnXX5t30xmoZFcy8lMWkuSQKjr1jm73W6fQ&oe=679DCE3B',
    status: 'PUBLISHED',
    imageDescription:
      'This is a comic cover titled "Space Ghost" by Hanna-Barbera, published by Gold Key. It features Space Ghost flying toward an explosion in space, with text highlighting his abilities: "Fists Packed with Electronic Force," "Incredible Speed," and "The Unique Gift of Invisibility." The cover is colorful with dynamic illustrations.',
    postUrl: 'https://www.facebook.com/54618571998_760512606077835',
    totalEngagement: 11744,
  },
  {
    shares: 1558,
    reactions: 9995,
    message: 'by Alex Ross',
    id: '54618571998_722119566583806',
    comments: 189,
    publishTime: '2023-05-21T17:57:08+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/348571886_607895194631412_673967688758544780_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ERwY_6poXpMQ7kNvgFE5cMv&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ArYh5GykvSY8MnqKvLRRkWA&oh=00_AYB2y6dveJ4jOHF_s7Agcirvkns5w1yCHNe1e9195xIg7g&oe=679DD5D0',
    status: 'PUBLISHED',
    imageDescription:
      'The image is an illustration featuring famous superheroes. A character resembling Superman is flying above a car, which contains characters resembling Batman and Robin. Superman is in the air with a cheerful expression, while Batman and Robin are seated in a sleek, futuristic car with transparent domes. The overall style is dynamic and vibrant.',
    postUrl: 'https://www.facebook.com/54618571998_722119566583806',
    totalEngagement: 11742,
  },
  {
    shares: 1609,
    reactions: 10000,
    message: 'By Rafael Sam.\n\nhttps://rafael_sam.artstation.com/',
    id: '54618571998_963311359131291',
    comments: 128,
    publishTime: '2024-04-29T14:04:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/440878816_963109319151495_479062858664826599_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZaLrFKJ3wlMQ7kNvgEkTzwv&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A85M5KuolsBPj4E-57EiotJ&oh=00_AYAQpJvs0Evdtd00YRWKwWXDprKBLoyiAsOw7HSKBcPt7A&oe=679DC65D',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a colorful illustration featuring two elderly gentlemen with halos, reminiscent of angels, interacting warmly at a bar. One is seated next to a child dressed as Spider-Man, who is tugging on a bag with the Hulk\'s glove inside. There are superhero references like Captain America\'s shield, and a chalkboard with "EXCELSIOR" and "I LOVE YOU 3,000" written on it. The scene includes playful elements like a sundae, pencils, and a spider.',
    postUrl: 'https://www.facebook.com/54618571998_963311359131291',
    totalEngagement: 11737,
  },
  {
    message: 'Yvonne Craig was just amazing',
    id: '54618571998_799569408838821',
    publishTime: '2023-09-07T14:17:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/375808044_799282522200843_6941675088538549719_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4KEJ-4wOuBMQ7kNvgHuAp7w&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYAWMiqQwcJaffj0vRBsj9fQUBN9eEL0-WJMVdglHlQ6ew&oe=679DF297',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image shows a person in a classic Batgirl costume, featuring a purple bodysuit, yellow cape, and Batgirl emblem. They are standing with arms extended, showcasing the cape.',
  },
  {
    message: 'ok thats just showing off',
    id: '54618571998_783409983788097',
    publishTime: '2023-08-13T20:22:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/366974818_783377340458028_8918017013677773456_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5rAkB0FptG4Q7kNvgGKRJd4&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFmhw3kNsmh72LjrMEnX1-g&oh=00_AYAGeNhdQtuQoO0SZesCMaqBp8ezg2zSfdE8LLp-vu1Geg&oe=679DD22C',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image shows multiple detailed replicas of the classic Batmobile, featuring a sleek black design with red trim and bat emblems. They are parked on a gravel surface, with each car showcasing distinctive retro styling, including open tops and fins.',
  },
  {
    message:
      'Tom Tyler as the Phantom, Jeanne Bates as Diana Palmer, and Ace the Wonder Dog as Devil in the 1943 movie serial',
    id: '54618571998_741232094672553',
    publishTime: '2023-06-15T14:08:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/354061963_741052381357191_9047662271708429093_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ymJgk1_uQi0Q7kNvgGeVAKs&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ANf0kMIeMC_mKos2kMEjn4q&oh=00_AYA-mwbMXJaBltsckjduTt95NCuF4ahV88au8xC0DhfvDg&oe=679DF248',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A vintage black and white photo features a woman in a striped blouse and skirt, standing beside a man in a superhero costume with a mask and belt. A German Shepherd sits in front of them.',
  },
  {
    message:
      'Classic Comic - Jonny Quest #1 (1964) - The only issue made at the time. Back cover is a pin up. Story based on the ABC pilot episode.',
    id: '54618571998_957011999761227',
    publishTime: '2024-04-20T14:06:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/439312321_956819903113770_687798009024754023_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pfUnRd1M4mwQ7kNvgEwdoyE&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ayhl-RshheSPztt9I5rbYoz&oh=00_AYDRw_WiTEyc-j63yL9yS255CApsiAjTbWxylakiEnlW_A&oe=679DED11',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'A comic book cover for "Hanna-Barbera Jonny Quest: The Mystery of the Lizard Men" features characters battling green, humanoid lizard creatures. The title is prominent, with vibrant action depicted against a red background. The cover is from Gold Key Comics, priced at 12 cents.',
  },
  {
    message: '',
    id: '54618571998_824241043038324',
    publishTime: '2023-10-12T21:11:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/391749002_823939933068435_5036096784209467574_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ccN9x0QLJb0Q7kNvgHoFQbG&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFN0am19oe23tkLvrxzAuej&oh=00_AYCBJ64lnennISZ-_KI6loNk5onfLLioUO83EJPZQNF6uQ&oe=679DE746',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'A cartoon character, a young boy with spiky blonde hair, is holding a comic book and saying, "Comic books aren\'t just escapist fantasy, they\'re sophisticated social critiques."',
  },
  {
    shares: 1534,
    reactions: 10000,
    message: '',
    id: '54618571998_776099681185794',
    comments: 88,
    publishTime: '2023-08-03T14:11:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/364081002_775833737879055_486040509222893279_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0kVGUmzIsQoQ7kNvgHYui_I&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ap-gkw9jU2HMot4HcT8m766&oh=00_AYAPWEsL2ft4_7IJHHhv6gasNdJzAnZf0v5vgGYbnQSwvA&oe=679DCEF8',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a black-and-white photo featuring two people dressed in vintage Batman and Batgirl costumes. They stand in front of a large, smiling face. The costumes are classic and cover their entire attire, including capes and masks.',
    postUrl: 'https://www.facebook.com/54618571998_776099681185794',
    totalEngagement: 11622,
  },
  {
    message: "by Kerry Callen \n*don't forget he does commissions",
    id: '54618571998_796362539159508',
    publishTime: '2023-09-02T18:12:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/373671373_796280495834379_6178891178685957338_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hd3AEo-JwewQ7kNvgF1UsBD&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYA438e24OISepprBEm-XIaA_XcRlaZGpQixiuw7pIY56Q&oe=679DE6E0',
    status: 'SCHEDULED',
    imageDescription:
      'A comic strip titled "Super Antics #16" features a superhero meeting attended by Superman, Wonder Woman, and others. Batman is wearing Wolverine\'s costume because his was dirty, causing distraction and a humorous situation. Superman tries to regain attention but is transformed into an insect-like creature by a Red Kryptonite Cloud. The meeting is further interrupted by the arrival of a tardy superhero, adding to the comedic chaos.',
  },
  {
    message: 'Cartoon time - George of the Jungle (1967)',
    id: '54618571998_753562383439524',
    publishTime: '2023-07-02T17:09:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/356815871_753218263473936_2831761424190826480_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IdzfBSv1j9MQ7kNvgEgthH_&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AS1qGJsq0Z9ZgV8qfukSk_U&oh=00_AYBJ6YL9IzQkh9CGvARbsDLjn08QZTxkBRl1k9de-bR4Sw&oe=679DF84F',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image shows two cartoon cavemen, a man and a woman, wearing animal print clothing, standing next to a cartoon elephant. The background is pink with simple cloud and plant illustrations. The man appears to be gesturing or talking to the elephant.',
  },
  {
    message: '',
    id: '54618571998_867292652066496',
    publishTime: '2023-12-15T17:16:07+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/410690196_866854382110323_3312766594654946037_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6zkwMYWzVHUQ7kNvgEI7zcG&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AZzrPS-zIeddYgAHtM6T8Z1&oh=00_AYACehn7x6e_y6eMTeCbcZjlkUsJ2kMw20fNq9Th6clnJA&oe=679DC0C3',
    status: 'SCHEDULED',
    imageDescription:
      'A scientist in a lab coat holds a clipboard, while a large, muscular, green-skinned humanoid stands beside him, clenching a fist. They are in a room with computers in the background.',
  },
  {
    message: 'was such a great show',
    id: '54618571998_800378042091291',
    publishTime: '2023-09-08T18:35:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/376691270_800048108790951_9040220678241245824_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=s40auD92CTsQ7kNvgHg-d9S&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYCbRr82TNyzwa7D1KPIcLHHhdtblpYtDfKDJOPEXJWNwQ&oe=679DEDB7',
    status: 'SCHEDULED',
    imageDescription:
      'The image features three superhero characters in dynamic action poses. A character in a red and blue costume is in the foreground, another in a fiery yellow costume is behind, and a third character appears in icy hues above them. The background is dark with fiery and icy effects.',
  },
  {
    message: 'the show we wanted',
    id: '54618571998_805879908207771',
    publishTime: '2023-09-16T14:17:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/376233385_805615298234232_2210166196456435607_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fUPGQCimd34Q7kNvgGpCgNx&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AeuYoz_Z6s18yKB-UbYSALw&oh=00_AYBsGnDHHqkwCNAa0l8PnnwraFst4QHnkH8-WTwEXMNYkA&oe=679DC8EE',
    status: 'SCHEDULED',
    imageDescription:
      'The image features retro-styled superheroes against a neon, grid-like background. In the foreground, two women in superhero costumes stand confidently, while in the background, two male superheroes appear to be flying overhead. The overall aesthetic is colorful, with 1980s synthwave influences.',
  },
  {
    message: 'Julie Newmar ...still the best',
    id: '54618571998_654256966703400',
    publishTime: '2023-02-23T15:23:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/332288085_494958786180157_3137730866937282518_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rnDKItTAa6EQ7kNvgHM4QfB&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYCnDQUIH4DTe9NFfgBwRID_llpNleujuRy-s66om6N4jg&oe=679DEFA9',
    status: 'SCHEDULED',
    imageDescription:
      'The image shows two characters in a room. One is dressed as Batman, in a gray and blue costume with a cape and the iconic bat emblem on the chest. The other is dressed in a form-fitting black costume with a gold belt, appearing to be Catwoman. They are interacting in what seems like a dramatic scene, with Catwoman leaning back. The setting is indoors with covered furniture and a partially visible background with plants and shelves.',
  },
  {
    shares: 1224,
    reactions: 10000,
    message: 'The Original Munsters',
    id: '54618571998_936882488440845',
    comments: 227,
    publishTime: '2024-03-23T14:06:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/432955616_935152401947187_3264317318363366690_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-xuMtHZW9tYQ7kNvgHKJpS9&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A1Cltn3twGkGm6VFwILAtl1&oh=00_AYAapI04nxrZqp3iClRq27JQKxqAW93CeyGHoCZpCo8KEg&oe=679DE0D9',
    status: 'PUBLISHED',
    imageDescription:
      'The image shows a black-and-white group portrait of five individuals, each dressed in distinctive, classic gothic attire, reminiscent of characters from a mid-20th century television show with a spooky, comedic theme.',
    postUrl: 'https://www.facebook.com/54618571998_936882488440845',
    totalEngagement: 11451,
  },
  {
    message: 'By Alex Ross',
    id: '54618571998_1130032639125828',
    publishTime: '2024-12-06T19:04:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/468961154_1126833986112360_1772687748343264889_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DKudEkW08mgQ7kNvgHkUPXT&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A3nqXxoEtaEELna7Wo7ba1V&oh=00_AYDsYWC7RaTxtofe7YAjFamSSnUsG2RZ16BOiziHAVBF5w&oe=679DC0ED',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A collection of superhero characters is depicted, confidently posing together. The group features individuals wearing distinctive costumes, including emblems and masks that suggest a classic comic book style. The scene conveys a sense of unity and heroism.',
  },
  {
    message: 'By John Romita Sr (R.I.P.)',
    id: '54618571998_740589418070154',
    publishTime: '2023-06-14T18:14:06+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/354051458_740589091403520_7566541752763235073_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ckaOAnA7M9wQ7kNvgFgG2AQ&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ANf0kMIeMC_mKos2kMEjn4q&oh=00_AYCWDYrDXvZYli4MJ6uTMz_EFANTWPUcxyVRXTLeGASlpA&oe=679DD084',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a black and white comic-style drawing of two superheroes, one in a costume with "DD" on the chest, standing on a pole, while the other, wearing a webbed suit, crouches with the full moon in the background. The scene has a dramatic and dynamic composition.',
  },
  {
    message: 'by Kerry Callen',
    id: '54618571998_880584294070665',
    publishTime: '2024-01-03T19:12:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/414938128_880250290770732_5348888750920142088_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ykW0cQA0oZoQ7kNvgGgQyOC&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Aq9BZLyejJs2C5ZtYhRhe9s&oh=00_AYCy-lkCtGmdsW6i_yttBG5d3M9XNbQnApnyR_-vYawOdQ&oe=679DF43F',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A comic artist reimagines a scene from the first Avengers movie using 1960s characters. The image shows a comic panel with classic renditions of superheroes and a comparison shot from the movie. Iron Man is depicted in yellow armor, and the caption humorously notes how adjustments were made to fit the retro style.',
  },
  {
    shares: 1232,
    reactions: 9429,
    message: 'I still want this',
    id: '54618571998_853182063477555',
    comments: 674,
    publishTime: '2023-11-24T15:19:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/404928867_853148753480886_3540124410322106104_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=r-n7GP2K200Q7kNvgH_lS_t&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad1ff1s2cBGYM0_gvSA37EV&oh=00_AYB6NBMeILROBTFOmvyQBT5DmbGyKmEXjd4eJRBRKK2GGg&oe=679DD877',
    status: 'PUBLISHED',
    imageDescription:
      'This is a vintage comic-style advertisement for "The Six Million Dollar Man" action figure featuring Col. Steve Austin. It highlights the action figure\u2019s features, such as a bionic arm and a bionic eye, and includes products like a backpack radio and a bionic transport and repair station. The ad emphasizes realism and bionic action, and it promotes joining the Bionic Action Club.',
    postUrl: 'https://www.facebook.com/54618571998_853182063477555',
    totalEngagement: 11335,
  },
  {
    message: 'art by Jim Lee',
    id: '54618571998_819758633486565',
    publishTime: '2023-10-06T18:23:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/386322485_819376320191463_2447481420012979436_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Gzr_ZrBJfFoQ7kNvgHg4IfT&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AT-0UBkoD-77dQORts4-Ugl&oh=00_AYD0E8ihTiz74eUx2Oi5XryY24Nkq7q9GviimmuwcHZsgQ&oe=679DD969',
    status: 'SCHEDULED',
    imageDescription:
      'The image features three iconic comic book characters: a costumed vigilante with a skull on his chest holding a gun, a caped hero with bat-like ears, and a character with extended claws crouching in front. They pose together against a dramatic, cloudy background.',
  },
  {
    message: '',
    id: '54618571998_769276321868130',
    publishTime: '2023-07-24T13:11:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/362666810_769058778556551_8107830031386286871_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rkCIA0wwRWgQ7kNvgESnNfy&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AxJt4ThoRXUxba1szmG7ZRv&oh=00_AYDS9iQQZbdYcKSLyUehuRj70ATz5wdj97U0K14pQYRNGA&oe=679DEC06',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a stylized depiction of Batman and Robin standing beside the Batmobile, with the Batcopter in the background. The artwork uses a simplified color palette and has a retro comic book aesthetic.',
  },
  {
    message: 'Yvonne Craig...',
    id: '54618571998_913042407491520',
    publishTime: '2024-02-17T15:11:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/428627923_912857204176707_288073596985570059_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=W9yHokVGfusQ7kNvgEASee9&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A5eIE02JisGgFv8ajLznD4-&oh=00_AYD0FdtU-fw8Y8f6F8oPUGx6794GLRY1iI6vYKOFF2f83g&oe=679DCC78',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image features two women in contrasting outfits. On the left, a woman is dressed as a superhero in a tight, purple costume with a yellow cape and mask. On the right, a woman stands on a beach wearing a colorful bikini.',
  },
  {
    message:
      'Classic Comic -Time Tunnel #1 (1967) -  Based on the hit ABC TV Series. Painted cover by George Wilson',
    id: '54618571998_820517610077334',
    publishTime: '2023-10-07T22:09:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/386493859_820483033414125_3463798953231618118_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=acLqmTR2wYgQ7kNvgG-js9a&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AT-0UBkoD-77dQORts4-Ugl&oh=00_AYBEblU2LFFaJeHSOukbaVAkF0uoKwPH2qX2SnVs1LFhWQ&oe=679DDE57',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'A vintage comic cover titled "The Time Tunnel" features a dramatic scene of a triceratops and people in a vortex, with scientists looking on from a control room. The tagline reads: "Two scientists are hurled helpless into the lost world of time!"',
  },
  {
    message: 'The Original Munsters',
    id: '54618571998_857076086421486',
    publishTime: '2023-11-30T15:11:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/406866512_856629389799489_7617827114272995427_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=THuFPbVIjIcQ7kNvgG7kwBn&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AZzrPS-zIeddYgAHtM6T8Z1&oh=00_AYAKIIAe-T1sE5wHLhokILWAINlI8fNuQFNti6JlYwgFNw&oe=679DE2C2',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is a black-and-white promotional photo of the characters from the TV show "The Munsters." It features a family dressed in monster-themed costumes, including a Frankenstein-like figure, a vampire, and other gothic characters. They are posed in a typical family portrait style.',
  },
  {
    message: 'always our favorite',
    id: '54618571998_818324363629992',
    publishTime: '2023-10-04T14:28:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/385902006_818105240318571_2605544815470534382_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NgDABe4v4KkQ7kNvgHuM7AC&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AT-0UBkoD-77dQORts4-Ugl&oh=00_AYC_PIgyJXSf-jw7zByypAwfx6E0vvfaVP_lDrbWrndokg&oe=679DC455',
    status: 'SCHEDULED',
    imageDescription:
      'A person dressed in a shiny black cat-themed outfit, complete with cat ears and a gold belt, is adjusting green-tinted sunglasses. They are flanked by two individuals in tiger-print costumes and similar sunglasses, set against a backdrop of brown drapery.',
  },
  {
    message: 'by John Buscema',
    id: '54618571998_907581318037629',
    publishTime: '2024-02-09T22:23:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/426328288_906815518114209_7382694108212182444_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XJ8gNmNakQoQ7kNvgHW89tT&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=APsNzbbfu_cdkD25yK7t850&oh=00_AYCkHvImvI09YzFJL2Wm4YGm4KuEG3dmjuMkaoahdI5uKw&oe=679DDA21',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a comic book illustration featuring a large group of Marvel superheroes and villains in action poses. These characters include iconic figures like Spider-Man, Iron Man, Thor, the Hulk, Captain America, the Fantastic Four, and others, depicted in a dynamic, colorful style. The composition is busy and energetic, highlighting the diverse Marvel universe.',
  },
  {
    message:
      'Burgess Meredith (1907-1997) as the Penguin, Cesar Romero (1907-1994) as the Joker, and Adam West (1928-2017) as Bruce Wayne on the set of television\u2019s \u2018Batman\u2019,',
    id: '54618571998_929145745881186',
    publishTime: '2024-03-12T13:19:16+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/428056589_912503280878766_1288495034871310244_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=T3Bcs_ZMZzgQ7kNvgG5MAx3&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANKEXX0ECxPXGcj1EQ1GtNe&oh=00_AYB1pT9Jg2XMFAzFmoIuezi9s6Z2LBphEa4CNs9nTBJ7WQ&oe=679DEBBC',
    status: 'SCHEDULED',
    imageDescription:
      'A black and white photo showing three men standing close together, engaged in conversation. The man on the left is wearing a top hat and holding an umbrella, the middle man is smiling with theatrical makeup, and the man on the right is wearing a bow tie and looks expressive. They appear to be in a lively and animated interaction.',
  },
  {
    message: "a collector's dream",
    id: '54618571998_666702808792149',
    publishTime: '2023-03-10T21:35:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/334665401_3454938928123648_1330776059650370143_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZRf57Ne1ACAQ7kNvgGCfSla&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AxjXGRI5F_kLVcGnmbzoU2h&oh=00_AYA-f0EZGH7N5eLkrFD3OSxudUJfBzhDEvna5dAFc0JB0Q&oe=679DD4DE',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'A cartoon shows a character in an attic, surprised and happy. An unseen hand offers them stacks of valuable comics labeled "Marvel Comics #1, 1939" and "Action Comics #1, 1938," with the speech bubble saying, "You can have these old magazines if you want them!" The caption reads, "A collector\'s dream comes true in the attic."',
  },
  {
    shares: 904,
    reactions: 10000,
    message: '',
    id: '54618571998_905330324929395',
    comments: 242,
    publishTime: '2024-02-06T22:25:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/426145276_904794771649617_8922933619085340802_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=loGlRcBHDeQQ7kNvgG0B17m&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AiXWsGT1VmkIehz87A_CgAK&oh=00_AYB-PaVcUblwWfS2m-bgpUgwS_Bsnze7lcc91tEgX5svHw&oe=679DF32D',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic strip featuring two superheroes, one holding a piece of kryptonite and teasing the other. The first hero shows the kryptonite, causing the second hero to react in discomfort. The first hero laughs, suggesting it was a prank possibly suggested by another character, Batman.',
    postUrl: 'https://www.facebook.com/54618571998_905330324929395',
    totalEngagement: 11146,
  },
  {
    message: 'The amazing Yvonne Craig',
    id: '54618571998_638849718244125',
    publishTime: '2023-02-06T15:23:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/329335168_1798086793895569_7518777115818596810_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=n9Vc2Pgh_M4Q7kNvgG3q27Z&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AOWK0IeDNMQbdSLHTr-neG3&oh=00_AYDvC-Orn3mBcMvCYE8i8Lb7yVjM9n_gjrvv8iSsPUVOrQ&oe=679DFC5B',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'A person is dressed as Batgirl, wearing a sparkly purple bodysuit, yellow cape, mask, and utility belt with a bat emblem. The background is bright orange.',
  },
  {
    message: '\u201c\u200eWonder Woman\u201d Lynda Carter, 1972',
    id: '54618571998_745600037569092',
    publishTime: '2023-06-21T13:11:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/355649324_745355790926850_7328270381666192089_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gBYnCsekBucQ7kNvgGflObB&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ASXWjd5_HguOydGi6Cp1YcZ&oh=00_AYBXZvRcgZ1xLLlTk0-NUPYD_3W1C6yXm33WbF4p2njinw&oe=679DF616',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image shows a stylishly dressed woman in a form-fitting dress with a tie accent at the waist, standing confidently outdoors. The background includes a car and another person partially visible on the left. This black-and-white photograph has a vintage aesthetic.',
  },
  {
    message: 'The Phantom by Joe Jusko',
    id: '54618571998_850534920408936',
    publishTime: '2023-11-20T15:14:40+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/404063974_850191420443286_1677654601852840389_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=c5vtFOudvjQQ7kNvgER6j1l&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A1JMZmQ38AIeooTJbQ1QLY-&oh=00_AYBe3I7XCA_UcyVcDTQdLOTsotyu1SXvfwmBJwLv24UtKQ&oe=679DC738',
    status: 'SCHEDULED',
    imageDescription:
      'A masked figure dressed in purple rides a rearing white horse, wielding guns in both hands. Beside them is a snarling wolf. The background is a dense jungle with vines and stone structures.',
  },
  {
    message: 'The Munsters - 1964 - great show and a Fun Comic Book',
    id: '54618571998_836011551861273',
    publishTime: '2023-10-29T17:06:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/397123209_835958021866626_2488524284433431253_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Z1acyJEdzHEQ7kNvgHN9buS&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APJaJCyVrXvQdQbZ44Kmjb9&oh=00_AYCgWqh0FuuKYOfyOvAyIQSxTwSIM9UKbR1A6GT9ejdrbA&oe=679DDF16',
    status: 'SCHEDULED',
    imageDescription:
      'The image depicts a classic black-and-white photograph of a family of five standing in front of a gothic-style gate and building. The group features characters with a monster-themed aesthetic, reminiscent of a TV show family from the 1960s. The figures include one tall character with bolts in his neck, a woman in a long dress, an elderly man with a cape, a young boy, and a blonde woman in a floral dress.',
  },
  {
    message: 'Lynda Carter',
    id: '54618571998_672571584871938',
    publishTime: '2023-03-18T14:17:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/336356844_759857728747107_985420849386855611_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=03QyUMgFLS4Q7kNvgG-7DUq&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYBL-FSveGr-ld3MpdQWpRNlm4VE2vTKk1N0z4FbYAjzag&oe=679DE509',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image shows a person sitting confidently in a vibrant armchair with a floral design. They are wearing a floral top and blue bell-bottom jeans, with brown shoes. The setting includes indoor plants and a window, suggesting a cozy, retro-styled room.',
  },
  {
    message: 'Julie Newmar ...our favorite Catwoman',
    id: '54618571998_833272772135151',
    publishTime: '2023-10-25T13:25:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/395745145_832933235502438_5507800244222517423_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XuDgIbKXrggQ7kNvgGuWIAj&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AvEhpGDi1HQFkGgpMJudFl6&oh=00_AYA0ED5cv0slJqfjKd3P5AN5tKRZaNtGbLuLw3pSkwBUKQ&oe=679DEFB5',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image shows a person wearing a shiny black cat costume complete with ears, standing in an ornate room with elaborate decor, including red chairs and a detailed backdrop.',
  },
  {
    shares: 1539,
    reactions: 9338,
    message: '',
    id: '54618571998_718725063589923',
    comments: 122,
    publishTime: '2023-05-17T14:17:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/347425258_215252331285994_5289350964972362101_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wVe2bUC3YJwQ7kNvgHimp2q&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ArYh5GykvSY8MnqKvLRRkWA&oh=00_AYAccDPmbkx6lX5xHxVL_JbxYa28rjNYjEJ0q_z_emE3iQ&oe=679DD8E7',
    status: 'PUBLISHED',
    imageDescription:
      'Two people are dressed as Robin and Batman standing in front of a Bat-themed helicopter in a black and white photograph.',
    postUrl: 'https://www.facebook.com/54618571998_718725063589923',
    totalEngagement: 10999,
  },
  {
    message: 'By Kerry Callen',
    id: '54618571998_742154324580330',
    publishTime: '2023-06-16T16:11:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/354269344_741747814620981_5190717957138005050_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bFARrFczJXQQ7kNvgFcXBXY&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANf0kMIeMC_mKos2kMEjn4q&oh=00_AYD-TicRyUx65XcxeyH4PNcW1HXFtrjaSDse_YFwHxLi-w&oe=679DD662',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'In this comic titled "Batnuts," a character dressed as Batman asks if he should kill criminals. The other character says no, advocating for due process and a moral high ground. However, when asked about the Joker, they suggest that he should have been killed years ago, highlighting a moral contradiction.',
  },
  {
    message: 'The one and only Julie Newmar!',
    id: '54618571998_643280077801089',
    publishTime: '2023-02-11T14:22:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/330768399_1563334794166306_7940392644833086405_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QhPpDiSEGu4Q7kNvgFBMWMN&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AOWK0IeDNMQbdSLHTr-neG3&oh=00_AYCJoMuOzNnAkzqgMb7YEMeVbI5JBGNhxHB7SRZT3FTGWg&oe=679DD013',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'A woman in a shiny black outfit with cat ears stands in profile against an indoor backdrop.',
  },
  {
    message: 'some of the greatest cartoons ever',
    id: '54618571998_638123878316709',
    publishTime: '2023-02-05T18:21:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/328940794_3340751429474565_2753369128408138214_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eEqD6u0IAxQQ7kNvgHaLVCG&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AOWK0IeDNMQbdSLHTr-neG3&oh=00_AYDZvN_LxgS5ACk8xlCA0Zu2msXg5_yH8HWryZl0pTtX8w&oe=679DDBFC',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a poster for "The Herculoids," featuring several characters, including a man, a woman, and various fantasy creatures like a rhino with a horn, a dragon, and others. The style is classic animated adventure, with bold, colorful artwork.',
  },
  {
    message: 'the true 5th Beatle',
    id: '54618571998_788120823317013',
    publishTime: '2023-08-20T20:36:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/368249869_788097459986016_8474220187355492005_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=V4nCc7l0pCQQ7kNvgFWnv1q&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYBofRs0UUr8DdmTUVEdZWBbwlhXwBQy7Q1Vx6eeQxpqvw&oe=679DF212',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'A person in a Batman costume stands in the center, surrounded by four men in suits, all smiling or laughing, set against a plain curtain backdrop.',
  },
  {
    message: 'Poor Batman',
    id: '54618571998_786762506786178',
    publishTime: '2023-08-18T16:11:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/368608677_786500076812421_6321749576457142346_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aIBRNSVRIVgQ7kNvgF15KdU&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYAXIZgInHPq98kt-wg0KRfxc9ZdrG-y3i8GMbm9ht7DJQ&oe=679DDE93',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'In a four-panel comic, a character resembling Wonder Woman attempts to make a character resembling Batman smile. She teases him, and eventually he smiles. She then collects money from two other characters in the background who had bet against her success, while Batman grumpily looks on.',
  },
  {
    message: 'still the best',
    id: '54618571998_699812782147818',
    publishTime: '2023-04-22T16:11:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/342941206_178498144687333_323500752669934826_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lrbmfB9q0VsQ7kNvgHKWyBE&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A7jDnAwd5xQtUEgw6tdzuym&oh=00_AYCyRzbdAXsbo1fx1k62aDFn3vkBJjq-NuhwbnqN4xBxEA&oe=679DC8CC',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image depicts two characters in a room. One is dressed in a classic Batman costume, characterized by a gray and blue outfit with a bat emblem on the chest. The other character is in a black costume with a fur collar and gold belt, possibly resembling a feline-themed character. The scene appears to be dramatic, as the second character is leaning back over a covered table or piece of furniture. The setting is indoors with a modern aesthetic.',
  },
  {
    shares: 2383,
    reactions: 8246,
    message: 'by Kerry Callen',
    id: '54618571998_800361058759656',
    comments: 83,
    publishTime: '2023-09-08T17:54:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/376666599_800045982124497_3352777194481040467_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=S051PGv2TvcQ7kNvgEmZCV8&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYC8VKAxrJiQ5nq81OQPmOG3YU_ti8lTkwXSdIBX5zxH4g&oe=679DD661',
    status: 'PUBLISHED',
    imageDescription:
      'The cartoon titled "The Hardy-Har Side" depicts two characters resembling Batman and the Joker in a nursing home setting named "Gotham Restful Acres." They are having a mealtime confrontation, with the Joker holding mustard and Batman holding up a utensil defensively. The caption reads, "Sadly, the old enemies stayed foes until the bitter end."',
    postUrl: 'https://www.facebook.com/54618571998_800361058759656',
    totalEngagement: 10712,
  },
  {
    shares: 603,
    reactions: 10000,
    message:
      "I 've always loved this drawing of Dave Stevens hard at work by Dave Stevens",
    id: '54618571998_774092141386548',
    comments: 105,
    publishTime: '2023-07-31T18:21:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/363842339_773681454760950_1260348505499400387_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZQKOG5icHPAQ7kNvgGO235N&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AxJt4ThoRXUxba1szmG7ZRv&oh=00_AYDrJDLs6a-25_X-TmfqbVVEAC3cdiEX06TXumNuGFbUdA&oe=679DC4A4',
    status: 'PUBLISHED',
    imageDescription:
      'The image is an illustration by Dave Stevens from 1987. It depicts a man sitting at a drawing board, holding a pencil and phone. A woman in a fantasy-themed costume is standing in front of him, striking a pose. The artwork has a playful and imaginative feel.',
    postUrl: 'https://www.facebook.com/54618571998_774092141386548',
    totalEngagement: 10708,
  },
  {
    message: 'by Alex Ross',
    id: '54618571998_1090153519780407',
    publishTime: '2024-10-17T14:08:05+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/462371117_1089915949804164_8841744303668504892_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=d5D2Y69JDD4Q7kNvgFdZDUB&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ADDmRUtM0kuySVKVPfSiMxo&oh=00_AYBy1KV4UChkAIz2Ll-RmppPxWdreseifMFdgOTcIUwOBg&oe=679DD1E8',
    status: 'SCHEDULED',
    imageDescription:
      "The image depicts a comic-style illustration of Superman flying above Batman and Robin, who are seated in the Batmobile. Superman's cape flows behind him as he reaches forward, while Batman and Robin appear focused in the vehicle. The scene combines action and classic superhero imagery.",
  },
  {
    message: 'Lynda Carter',
    id: '54618571998_833382548790840',
    publishTime: '2023-10-25T16:03:00+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/395699525_832933828835712_4113394412761231441_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mpWrfGlFlhUQ7kNvgFMJOpC&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AvEhpGDi1HQFkGgpMJudFl6&oh=00_AYCTc85PcwRcPaKhnGodSkeF5jfBqt6fEFC04CWmG3zgmA&oe=679DDD4E',
    status: 'SCHEDULED',
    imageDescription:
      "A woman is standing on a street, wearing a long, elegant dress with a cut-out detail at the front, smiling slightly. She has one hand raised to her hair, and there's a car and another person blurred in the background. The image is in black and white.",
  },
  {
    message: 'Yvonne Craig',
    id: '54618571998_1100678932061199',
    publishTime: '2024-10-30T13:28:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/465048723_1100517348744024_1388079684487772127_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IVn0OccPi1sQ7kNvgGKeU77&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad6wxUoh2wk8IsbdMQixRCG&oh=00_AYCzzq4P97I51lnyb07PMdbjIfLbg7JiXzBnPv4-VNt_7Q&oe=679DF10E',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image is a black and white portrait of a person in a superhero costume with a bat-themed mask and cape. There is a handwritten message and autograph on the lower right side of the image.',
  },
  {
    message: 'man the good ol days',
    id: '54618571998_872266918235736',
    publishTime: '2023-12-22T14:00:36+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/412894556_872014001594361_2375108091430709096_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=SaVt4blY9WQQ7kNvgE7q7uU&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8NHsBiIKKnXEG-EcxcTJjh&oh=00_AYCH8WH04XBsBYfNMuuJ3KxWuubyopGBqJ7mS-SQhI3ing&oe=679DD236',
    status: 'SCHEDULED',
    imageDescription:
      'The image shows a rack of comic books on display in a store. The comics are organized in rows and feature titles like "Mystic," "Jatt Slade Gunfighter," "Casper," "Woody Woodpecker," and several others. The display appears to be in black and white.',
  },
  {
    shares: 1193,
    reactions: 7606,
    message: 'I love these old comic book ads',
    id: '54618571998_823261609802934',
    comments: 1741,
    publishTime: '2023-10-11T14:17:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/387190601_823014849827610_8138808636260820845_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5kBxAymIKtcQ7kNvgFSR8vc&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AT-0UBkoD-77dQORts4-Ugl&oh=00_AYDtqoDUGn-_6Of-4fsTD7qhPj7_tVjNKukXoC4Y39Inbg&oe=679DCCE1',
    status: 'PUBLISHED',
    imageDescription:
      'The image is an advertisement for Mattel\'s Major Matt Mason toy line, featuring space-themed action figures and equipment. It highlights various items such as the Space Crawler, Moon Suit, Jet Propulsion Pak, Space Sled, and Space Station. The ad showcases Major Matt Mason, described as "Mattel\'s Man in Space," along with his authentic, bendable equipment designed for imaginative space adventures.',
    postUrl: 'https://www.facebook.com/54618571998_823261609802934',
    totalEngagement: 10540,
  },
  {
    shares: 1183,
    reactions: 9196,
    message: '',
    id: '54618571998_10159603623051999',
    comments: 145,
    publishTime: '2022-05-02T21:55:30+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/279351076_10159603622866999_2470362016826045778_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VbPGAqPxhfsQ7kNvgFnLu0g&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A4n-WdQaWrvTjD22l3mwKVs&oh=00_AYDxzzZyCFjyEDl5vFcA-kQif6_KZ-NBo7cK3hf--ja0zg&oe=679DE8B2',
    status: 'PUBLISHED',
    imageDescription:
      'The image shows three panels: an animated character resembling Mulan, a woman in a black Marvel superhero costume, and the same woman in Star Wars attire. The text below highlights that the actress has played roles as a Disney princess, a Marvel superhero, and a Star Wars character, achieving a "Disney hat trick."',
    postUrl: 'https://www.facebook.com/54618571998_10159603623051999',
    totalEngagement: 10524,
  },
  {
    shares: 595,
    reactions: 9354,
    message: 'George Reeves...loved and still love watching this show',
    id: '54618571998_1121310243331401',
    comments: 568,
    publishTime: '2024-11-25T19:34:05+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/468217811_1120786236717135_8654088913693184319_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZjcwrBXyWNEQ7kNvgGZOBO1&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AGCaRt6IitcQ7-yAsV12fL4&oh=00_AYDE2KqwN222vWE-DWcU8NkFkHj4gPzY3TcoH1GBjcBDng&oe=679DE75F',
    status: 'PUBLISHED',
    imageDescription:
      'A man in a Superman costume stands confidently next to a vintage car, parked in a rugged outdoor setting.',
    postUrl: 'https://www.facebook.com/54618571998_1121310243331401',
    totalEngagement: 10517,
  },
  {
    message: 'Lynda Carter (1990)',
    id: '54618571998_10159618648091999',
    publishTime: '2022-05-04T19:27:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/279891271_10159618647756999_8766810746758068698_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=edLSx1n2IPIQ7kNvgHPU8GT&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A_ATjVHaG65v59uQAO3T-Cz&oh=00_AYBYR9bSSLZhPOpbXRmr2PiB8Ep0CLfMpo1OSYeRoAD4Qg&oe=679DE883',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'A woman dressed in a revealing red gown stands confidently in front of a bookshelf, holding a baby in one arm and with a child standing beside her. The setting appears to be a study or library, and the woman exudes a strong, glamorous presence.',
  },
  {
    message:
      'Bat reunion....Had to be 2005 or earlier as Frank Gorshin passed away May 17, 2005\n\nl-r) Frank Gorshin, Yvonne Craig , Adam West and Julie Newmar',
    id: '54618571998_772690411526721',
    publishTime: '2023-07-29T16:23:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/363829932_771720334957062_3107316693163578092_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=E5Kd6uek5l4Q7kNvgHGbbPT&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AxJt4ThoRXUxba1szmG7ZRv&oh=00_AYBG1MjFD7OBucJJahklj6IAMPNtclw6w_y_A9iP36BoPQ&oe=679DCDF2',
    status: 'SCHEDULED',
    imageDescription:
      'The image features four individuals posing in front of a colorful comic book-style background. The people are standing closely together, with playful expressions. The backdrop showcases illustrations of comic book characters.',
  },
  {
    message: 'John Carter, Warlord of Mars cover art. 2010 by Joe Jusko',
    id: '54618571998_903065665155861',
    publishTime: '2024-02-03T19:12:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/423584435_902606121868482_1959806463340102759_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wDIIFGGtTZIQ7kNvgFBslMV&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AiXWsGT1VmkIehz87A_CgAK&oh=00_AYA0XEx4GigEf2Qut1Ww0cWNbbGwiOyh5pcS2TPyQlVQWg&oe=679DDD8D',
    status: 'SCHEDULED',
    imageDescription:
      'A muscular warrior triumphantly raises a sword against a cosmic backdrop with planets. Beside him stands a woman adorned in exotic attire. They stand over a fallen green creature amidst a fantastical landscape with alien architecture.',
  },
  {
    message: 'never get enough Julie',
    id: '54618571998_770596551736107',
    publishTime: '2023-07-26T13:11:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/363297503_770416431754119_8554973846069162186_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EgZXWyYopDIQ7kNvgHGrG1w&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AxJt4ThoRXUxba1szmG7ZRv&oh=00_AYCecRNJO1gzGZulwGiltMPbqnRXinGQ5UmfTwLDVpoTug&oe=679DF26E',
    status: 'SCHEDULED',
    imageDescription:
      'A woman in a cat-themed costume with black cat ears and a glittery black outfit stares confidently into the camera. Her makeup includes dramatic eyeliner, accentuating her eyes. She has long wavy hair and is wearing a long necklace.',
  },
  {
    message: 'by Alex Ross',
    id: '54618571998_806688664793562',
    publishTime: '2023-09-17T17:49:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/379258017_806410394821389_7804397442312422687_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tQtz7LSD8CAQ7kNvgGByftV&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AeuYoz_Z6s18yKB-UbYSALw&oh=00_AYDQ9keOavVXVAvsuNZ2FFglcht3gXfrqI3_SfIj6Rlluw&oe=679DCBEF',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image features four comic book characters: Batman, Robin, the Green Hornet, and Kato in dynamic action poses. Batman is at the center, leaping forward with his cape spread out. Robin is seen to the left in a vibrant costume. The Green Hornet is wearing a green suit and hat, holding a weapon, while Kato is dressed in black beside him. The background has colorful words like "Wham!" and "Ouch!" for an energetic, retro comic effect.',
  },
  {
    message: 'Julie Newmar - my favorite Catwoman',
    id: '54618571998_895726752556419',
    publishTime: '2024-01-24T14:15:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/421474527_895560209239740_4620666834773720618_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=loxFtXNI8JIQ7kNvgGc6xL5&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A8iaG7Ke0rbRc8cA6JwlJbb&oh=00_AYAJXiPUEBvqLJraOqXvOr6C9BXIPV01cRBZef9jREAo2w&oe=679DDB03',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A person is dressed in a shiny black cat costume with a mask, gloves, and cat ears, wearing a gold belt and necklace, standing outdoors in front of tall grass.',
  },
  {
    shares: 1383,
    reactions: 8740,
    message: 'Magilla Gorilla #1 (1964)',
    id: '54618571998_1065356448926781',
    comments: 217,
    publishTime: '2024-09-17T16:13:06+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/460127281_1065022822293477_3045939063915637230_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=at2TnyKOgwoQ7kNvgHRYyS6&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AZX2JdnMcdzBEQiyXE9D9E5&oh=00_AYBP7mQVDF401XppQCbfW99ys9fTkRxPo-oohXa83bEV_w&oe=679DCD88',
    status: 'PUBLISHED',
    imageDescription:
      'This is a CGC-graded comic book cover of "Magilla Gorilla #1" from Gold Key Comics, published in May 1964. It features Magilla Gorilla, a cartoon character, standing next to a gumball machine filled with bananas. The comic is graded at 9.0 and priced at 12 cents.',
    postUrl: 'https://www.facebook.com/54618571998_1065356448926781',
    totalEngagement: 10340,
  },
  {
    message: '',
    id: '54618571998_793591916103237',
    publishTime: '2023-08-29T13:06:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/369952904_793414006121028_5984376238493328470_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EEDbbTfP90EQ7kNvgFI4s9y&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFPZWKt5JZ1PFEs5yzutf_Z&oh=00_AYDKwv-YL4dDcjdZzWGyHhC5fXFqi-Bdzxh9nyv5LHWzQg&oe=679DCADB',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A man wearing glasses, labeled as George Reeves, is examining a script for the "Superman" TV show. He is sitting in front of filming equipment, suggesting a break between shooting scenes.',
  },
  {
    message:
      'Classic Comic - Wild Wild West #1 (1966) - Based on the hit TV series. Robert Conrad and Ross Martin photo cover. Al McWilliams art',
    id: '54618571998_679426244186472',
    publishTime: '2023-03-26T21:53:46+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/338253860_600075041990031_9192356835332875270_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7eggMUc-QFsQ7kNvgGUHjwv&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYBqjREYQmOmBzyv0-9FxX1n1-U6cr4ssTN-7YsgxLPbEA&oe=679DF747',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage comic book cover titled "The Wild, Wild West" from Gold Key. It features a man in a vest poised to take a shot in a billiards game, identified as Robert Conrad. Below, there\'s another man, Ross Martin, holding a gun. The background has vibrant colors with the title in stylized fonts. The cover text describes a storyline involving Jim West uncovering outlaw classes.',
  },
  {
    message: 'by Kerry Callen',
    id: '54618571998_831239932338435',
    publishTime: '2023-10-22T20:05:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/394592412_830812539047841_7837861454849594350_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cdGBTU3BIJIQ7kNvgGxECDp&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AvEhpGDi1HQFkGgpMJudFl6&oh=00_AYA0crL--OeamPXcszZxWrYjtP8Z16AqpiV7KE6D2Zgc4Q&oe=679DDA9F',
    status: 'SCHEDULED',
    imageDescription:
      'In the comic "Super Antics #18," Batman charges at the Penguin, who is shooting with his umbrella. Batman punches the Penguin, but his cowl rips. Concerned, he asks Robin if the damage is noticeable.',
  },
  {
    message: 'March 1966 Life Magazine',
    id: '54618571998_781283304000765',
    publishTime: '2023-08-10T16:45:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/363932585_780934217369007_2937918355496103150_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=voV_Ze8znDMQ7kNvgGdKKLC&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFmhw3kNsmh72LjrMEnX1-g&oh=00_AYBZmZB1WZbQ5VSpMNNCh-jMX5W4Xc-79zjOJn4q3SW4Bw&oe=679DC690',
    status: 'SCHEDULED',
    imageDescription:
      "The image is a cover from LIFE magazine dated March 11, 1966, featuring Batman in a classic costume, jumping with a joyful expression. The theme includes Batman's rise in popularity and references to other iconic figures like Superman. The design includes the LIFE logo and distinct Batman insignias against a light background.",
  },
  {
    message: '',
    id: '54618571998_873015271494234',
    publishTime: '2023-12-23T15:27:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/412916715_872705528191875_398695402889115108_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=P2A8u2LBGJ8Q7kNvgE522d2&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8NHsBiIKKnXEG-EcxcTJjh&oh=00_AYBS85DEajGVbgRmwpg-MGJSjpGY9aSQz0Gp1Z-MfhmlIw&oe=679DE082',
    status: 'SCHEDULED',
    imageDescription:
      'The image features a man in a Superman costume and a woman in a Wonder Woman costume standing in front of a cityscape. The text above them reads, "THIS WILL ALWAYS BE MY SUPERMAN AND WONDER WOMAN."',
  },
  {
    message: 'by Alex Ross',
    id: '54618571998_671146281681135',
    publishTime: '2023-03-16T18:13:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/336533741_1002359744261723_5290085459087026495_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qvCrtGWdmjsQ7kNvgEROWiN&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AxjXGRI5F_kLVcGnmbzoU2h&oh=00_AYCWb2YhYHqc0WQs8PoSdUawbQ59z2_aNSi5EAZcFwvNBQ&oe=679DCE78',
    status: 'SCHEDULED',
    imageDescription:
      'The image depicts two men, both wearing suits and hats, revealing the iconic Superman logo beneath their shirts. They are facing each other, separated by a glass panel.',
  },
  {
    message: 'this would have been a great show',
    id: '54618571998_814939790635116',
    publishTime: '2023-09-29T16:07:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/384558084_814598224002606_2292284953626435176_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=invloRD3FLQQ7kNvgE9sTKE&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A_vnmMIHG0AfcC5NFksZQ5j&oh=00_AYBKIkUvQ--VRBIdYCh_3cLC3GI1eYPH8T7JbiZzBsuVmQ&oe=679DD877',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image features a group of classic superhero characters in costume, including iconic figures resembling Wonder Woman, Robin, Superman, Batman, and the Flash, standing together.',
  },
  {
    shares: 771,
    reactions: 8929,
    message:
      'like a scene from an old Plastic Man comic\n(from The House of Secrets Burbank Ca)',
    id: '54618571998_1167863025342789',
    comments: 140,
    publishTime: '2025-01-24T19:11:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/474748499_1167454545383637_5487598720063136507_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zlBtTVcSzZ8Q7kNvgH-0gpo&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AAaNRiWBPub3ip85cXc82r4&oh=00_AYBC_LClTWqnRFVaxal2oBDawyAnFqN1mR3eS15HrIfXdw&oe=679DED53',
    status: 'PUBLISHED',
    imageDescription:
      "A colorful, curved bench is painted in red with yellow and black stripes in the middle. One end features a cartoon face wearing sunglasses. It's situated on a sidewalk with a stone wall and plants in the background.",
    postUrl: 'https://www.facebook.com/54618571998_1167863025342789',
    totalEngagement: 9840,
  },
  {
    message:
      'Classic Comic - Superman vs Muhammad Ali (1978) - Man of Steel vs The Greatest to save earth. Cover by Neal Adamz',
    id: '54618571998_655375453258218',
    publishTime: '2023-02-24T21:32:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/332836916_178652701548763_6232945525646479155_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Rcyj88X28CMQ7kNvgEWF3dq&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYDUjcniOJ5qVOsYfJRhYtS7oHmJ3DfBIQXmYaXtCm061w&oe=679DE611',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic book cover featuring a boxing match between Superman and Muhammad Ali set in a boxing ring. The background shows a large crowd of spectators, including various characters. The text highlights "The Fight to Save Earth from Star-Warriors," and the price is labeled $2.50.',
  },
  {
    shares: 1702,
    reactions: 7741,
    message: 'Some of the legends in comics. Art by Thomas Key.',
    id: '54618571998_758381279624301',
    comments: 278,
    publishTime: '2023-07-08T18:31:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/358437621_758363706292725_5239771709130991850_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Jd-AjdGE22MQ7kNvgFdt4_A&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AuXIsvkg1_wDUFJ6cdv22t7&oh=00_AYDsHlEj78KDen5xaOGk6zyrHaO5LClfQ8CaSp8AkDWVvA&oe=679DF4CE',
    status: 'PUBLISHED',
    imageDescription:
      'The image features illustrated portraits of nine influential comic book artists, each accompanied by one of their notable superhero creations. These artists include Curt Swan, John Romita, Neal Adams, John Buscema, Jim Aparo, Joe Kubert, Jack Kirby, Gil Kane, and Steve Ditko. Each portrait showcases their iconic style and contributions to the comic book industry.',
    postUrl: 'https://www.facebook.com/54618571998_758381279624301',
    totalEngagement: 9721,
  },
  {
    message: 'Galactus and his Pet lol',
    id: '54618571998_1150627337066358',
    publishTime: '2025-01-02T17:09:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/471415925_1150265777102514_540767720004745766_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=MX56w9kzk-cQ7kNvgHFbYjd&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A3DA4TIa7W0Y0Ersp1m0Znm&oh=00_AYConeI_wV7dehcmXr5iq7xWp1o6Gqsehup1HV6OthYn4A&oe=679DDE88',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image depicts Galactus, a comic book character, sitting at a table with a small city model in a tank as his pet Godzilla destroys it. A treat jar labeled "People Pop\'ems" is beside him, and the caption reads "Galactus\'s pet."',
  },
  {
    message:
      'Classic Comic - Masters of the Universe #1 (1982) - 1st Full comic devoted to He-Man and the Masters of the Universe',
    id: '54618571998_859198642875897',
    publishTime: '2023-12-03T20:27:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/406631651_856656709796757_2963142202813551581_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Gsei3N-rJeEQ7kNvgFQpguv&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AZzrPS-zIeddYgAHtM6T8Z1&oh=00_AYCZdPNC85pSP_SiwpMslO9qShRe_0iFBq7ftqSyTLoPYw&oe=679DCA1B',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'This is the cover of "Masters of the Universe" comic book issue No. 1 from DC Comics. The main character, a muscular warrior, stands powerfully in the center holding a battle axe and sword, surrounded by various enemies. The backdrop features a castle and action-packed elements, with bold, vibrant colors and dynamic poses.',
  },
  {
    message: 'FF by Art Adams',
    id: '54618571998_799632288832533',
    publishTime: '2023-09-07T16:14:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/375792029_799279558867806_8883971325731327347_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OrMZRWaybIAQ7kNvgH9aDe_&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYAF2ItuxuXT_QVkr_H5PWWGqQPecw-27b_QyjKaz--VVw&oe=679DC744',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a comic book illustration featuring four superhero characters. The characters exhibit distinct powers: one with a stretching ability, one covered in flames, a rocky-skinned strong character, and a woman with an aura of energy. The background has a tech-themed design, and their outfits include the number "4," indicating a team identity.',
  },
  {
    shares: 1220,
    reactions: 8321,
    message: 'meanwhile on the mean streets of Gotham City',
    id: '54618571998_764716628990766',
    comments: 96,
    publishTime: '2023-07-17T13:19:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/361580393_764518112343951_8187526551261255955_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PAP1rj2ndXgQ7kNvgG4xp0n&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ATc73HRWyp02Z-tyObKGEZm&oh=00_AYBBffPYW6hrwOzwhVT_ZV6RGYVLkRD3_t4X4b9Tjh_qwg&oe=679DE630',
    status: 'PUBLISHED',
    imageDescription:
      'The image features a person dressed as a superhero with a bat-themed costume, including a mask and cape, riding a motorcycle with similar bat-themed designs. The setting appears to be urban, suggesting movement or action.',
    postUrl: 'https://www.facebook.com/54618571998_764716628990766',
    totalEngagement: 9637,
  },
  {
    shares: 937,
    reactions: 8522,
    message: 'time for some cartoons',
    id: '54618571998_877848134344281',
    comments: 175,
    publishTime: '2023-12-30T14:09:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/415782401_877593587703069_1359258233245159051_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5n6gDsZh4KoQ7kNvgHCWU18&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AUTqRmWWQpOaWM27__8mqtj&oh=00_AYCpPGGIUDgNQS_wqotPmN9P2ZVsvAtH3wU5SyccXfXKHQ&oe=679DE9A0',
    status: 'PUBLISHED',
    imageDescription:
      'The image features a promotional poster for "The Bugs Bunny Show" with an orange background. It includes Bugs Bunny and Daffy Duck in yellow-striped outfits, holding hats and canes, dancing together.',
    postUrl: 'https://www.facebook.com/54618571998_877848134344281',
    totalEngagement: 9634,
  },
  {
    message: '',
    id: '54618571998_789272909868471',
    publishTime: '2023-08-22T16:22:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/370176606_788967489899013_7185779225352838520_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QpY02ZiGRR8Q7kNvgHWxzaD&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYAgCLOhijCc5Md4MQLIFKprSQKaqflJ-cwcqcbScDWfpQ&oe=679DE3B1',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is a movie poster featuring the classic versions of Superman, Wonder Woman, and Batman in a stylized design. The names "Christopher Reeve," "Lynda Carter," and "Adam West" are at the top. A large, combined Batman and Superman logo is in the background, and the date "24.3.16" with the hashtag "#BATMANVSSUPERMAN" is at the bottom.',
  },
  {
    message: 'time for some cartoons\nJim Backus',
    id: '54618571998_962709239191503',
    publishTime: '2024-04-28T17:17:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/439575788_960990742696686_1444933222399683251_n.jpg?stp=cp1_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=c4m1cDiTQsQQ7kNvgG7nXmY&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A85M5KuolsBPj4E-57EiotJ&oh=00_AYD7gAI9Cr-_ITgGBUulhjgzTe2euR9AQjljrl4AGK0eeA&oe=679DC8C0',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'A man wearing a fedora and suit is holding a cartoonish puppet resembling himself, both with similar facial expressions. The image is in black and white.',
  },
  {
    message:
      'Classic Comic - Batman #15 (1943) - Catwoman appears in new costume. World War 2 cover by Jack Burnley',
    id: '54618571998_662972055831891',
    publishTime: '2023-03-06T16:13:11+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/334575600_933734868068615_4019928046395556118_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=iaF9EEbiLv8Q7kNvgHMMoc1&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYBkdwdRCSs0TRveWLaE5ZqYjAOANCok1wSAOeIDZm3jtg&oe=679DEAAA',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image is a vintage comic book cover of "Batman" No. 15. It features Batman and Robin operating a large machine gun. Robin is crouching beside Batman, assisting. The cover includes a patriotic message encouraging the purchase of war bonds and stamps, indicative of wartime promotion.',
  },
  {
    message:
      'Classic Comic - Green Hornet #3 (1967) - Bruce Lee and Van Williams photo cover. Last Issue  Art by Dan Spiegle',
    id: '54618571998_673489478113482',
    publishTime: '2023-03-19T18:18:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/336870917_5256191997816616_4366358972305548813_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_y_MeImRyvgQ7kNvgEmDdSI&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYADxx9UJc7xFLcr8Ynn-E7YVAWB7gJ6ESujvDx2dpSLHw&oe=679DE28D',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is a vintage comic book cover titled "The Green Hornet." It features The Green Hornet and Kato in a jungle setting. The text indicates a story about their involvement in capturing a visiting prince, called "The Counterplot Affair."',
  },
  {
    message: 'Marvel Poster with Fantastic art by John Buscema',
    id: '54618571998_692963622832734',
    publishTime: '2023-04-13T18:11:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/341088079_663771228843332_605016463877844754_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VLs1YZxB9sAQ7kNvgHTqNWl&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AlpbJrh9swE9shsKu1FU20_&oh=00_AYAjG6N-Jep27WtQsZ1YapSNCeBFqa34AyT0kpP80YyyIw&oe=679DED99',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'This image is a vintage comic-style poster featuring a dynamic collage of various Marvel superheroes and villains in action poses. Notable characters include Spider-Man, Thor, Iron Man, the Hulk, and Captain America, among others, depicted in colorful, classic comic art.',
  },
  {
    message: 'by Alex Ross',
    id: '54618571998_798993572229738',
    publishTime: '2023-09-06T18:11:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/375461933_798624845599944_5906682627794227214_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=H6FI5k0zivQQ7kNvgEsdoNg&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYBuoRH6Cv_LNYmsYV-A1GqV7PTp1lfaWBybQ92RYx4eTg&oe=679DF484',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image depicts two iconic superheroes, Spider-Man and Superman, standing side by side with their arms crossed against a bright yellow background.',
  },
  {
    message: 'by Kerry Callen',
    id: '54618571998_723591949769901',
    publishTime: '2023-05-23T16:11:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/348904999_6767065536654471_3660946023415036616_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=t8WRxbohvgIQ7kNvgGyMFqF&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ArYh5GykvSY8MnqKvLRRkWA&oh=00_AYA0Bnl2D_WpDozTAWXZ4sTB78UPqDH6MwQEXY1A0AgrtA&oe=679DCDE2',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'A comic titled "Super Antics #5" features Batman showing Robin their technologically advanced crime-fighting cave. When they turn on the lights, they find a dinosaur, prompting Batman to question how it got there. The scene ends with Batman noticing Superman laughing nearby, suggesting he\'s behind the chaos.',
  },
  {
    message: '',
    id: '54618571998_10158844040606999',
    publishTime: '2021-04-10T16:38:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/171527393_10158844040326999_4558795467440429084_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hVKYE8aQJXAQ7kNvgGUPMhJ&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AznWKKcyUvTB23EFe2RVM0D&oh=00_AYDPJi22CZ5yNlUn2aQvOHie-A_U6GgrDlyPSomwB8eFIw&oe=67BF8527',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is a cartoon depicting a group of superhero characters and a man in a suit standing over a defeated purple-skinned giant, who has a pencil jabbed in his head. The suited man looks surprised, asking, "WHAT?"',
  },
  {
    message: '',
    id: '54618571998_958444936284600',
    publishTime: '2024-04-22T16:08:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/437987658_957417436387350_1004060431798435669_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DKWF1spxwg0Q7kNvgFU8cnn&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ayhl-RshheSPztt9I5rbYoz&oh=00_AYDQJcCb-2XipxSXkaMrC4eoojvqB4cLbDVZgObu4lDpig&oe=679DDC4F',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic depicting a humorous scene with superheroes discussing a plan. A sign reads "The Illuminati, The Earth\'s Smartist Peeple," intentionally misspelling "Smartest People." One character suggests, "Let\'s invade the Skrull home world!" The caption humorously notes Reed Richards\'s doubts about the Illuminati.',
  },
  {
    message: '',
    id: '54618571998_1095945649201194',
    publishTime: '2024-10-24T16:26:30+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/463314585_1095636212565471_880658574302334157_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NQXQTS8UAy8Q7kNvgF0XXWt&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ADDmRUtM0kuySVKVPfSiMxo&oh=00_AYBBevp6WexrCYsgiK98uca6S-R6VSuyeWD9-aOZSwdE2g&oe=679DC538',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'A cartoon parody featuring the "Illuminati" labeled as "the earth\'s smartist peepul," with characters dressed like superheroes sitting around a table. One character suggests invading the Skrull home world. The caption humorously notes Reed Richards\' doubts about the group\'s intelligence.',
  },
  {
    message: 'by Alex Ross',
    id: '54618571998_768200281975734',
    publishTime: '2023-07-22T20:44:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/361570365_768161368646292_4489417338875587491_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AWZMT8h_t6cQ7kNvgGh4G82&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ATc73HRWyp02Z-tyObKGEZm&oh=00_AYAuAnd-IAUSgY05cC6LQlHOnOAxk7AnG6gDwVmH5aFmbA&oe=679DDD6D',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'A person is standing in front of a mirror, dressed as Clark Kent, revealing a Superman costume underneath their suit. The reflection shows the same pose with both figures adjusting ties and opening shirts to display the iconic Superman symbol.',
  },
  {
    shares: 1146,
    reactions: 7544,
    message: 'The movie we want',
    id: '54618571998_708178427977920',
    comments: 411,
    publishTime: '2023-05-03T14:07:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/344767827_1288342885226173_1283111970905751402_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Sa_Z4VX2IOwQ7kNvgFM3_8n&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AYoRt-zoKoYprRsbORd9AEX&oh=00_AYCY7t7nJwg20SCg8qNQjW96HZktwJ27dVQ_mVX4MSwaRw&oe=679DE7A2',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a fan-made poster featuring three iconic superhero characters: Superman, Wonder Woman, and Batman, portrayed by actors known for their roles in classic TV and film adaptations. The backdrop features a combined logo of Batman and Superman. The image includes names above each character and a fictional release date along with the hashtag #BATMANVSSUPERMAN.',
    postUrl: 'https://www.facebook.com/54618571998_708178427977920',
    totalEngagement: 9101,
  },
  {
    message:
      'time for some cartoons\nJonny Quest painting by Doug Wildey, 1988.',
    id: '54618571998_893675009428260',
    publishTime: '2024-01-21T18:47:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/420657655_892525586209869_673713238301973275_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vCoSD4UPmxYQ7kNvgEYbdHB&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8iaG7Ke0rbRc8cA6JwlJbb&oh=00_AYCAQzogVGOHDho3Qlcq9KjWSx108zivc737Msbp61-usw&oe=679DEF62',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image depicts a dynamic scene in a jungle setting with various characters, including a boy with blonde hair, a turbaned child, a man with white hair, and a bulldog. They are surrounded by dinosaurs, including a large carnivore and a triceratops. One person is lying on the ground, appearing unconscious or asleep. The atmosphere is tense and adventurous.',
  },
  {
    message: '',
    id: '54618571998_892094079586353',
    publishTime: '2024-01-19T17:07:09+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/420541528_890799659715795_7767684900960276836_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xtJrjPI_WNUQ7kNvgF5TPf4&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AnI2vm1qwoJyPrblQR7BRtx&oh=00_AYDhiVGyN0mqtFcP-Igeofe-LvFGCRQ-7TmfQhvmNJ75Yg&oe=679DEFE8',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      "A counselor is questioning Aquaman about why he thought there was a lot of underwater crime, suggesting a humorous misunderstanding of the hero's role.",
  },
  {
    message: 'art by Jim Lee',
    id: '54618571998_1162434869218938',
    publishTime: '2025-01-17T22:24:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/473618346_1162394189223006_7946673576755430068_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wq73uSh222sQ7kNvgGXyiWV&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AuRRKEzoP2P4qCBWI7mg21G&oh=00_AYCY0Wtl2f8pVj_sWBO09VW9RwZ_JwFY7rpgQp8Fo0H-tQ&oe=679DF221',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a dynamic comic book illustration featuring three iconic superheroes in action poses against a dramatic sky and urban background. They are standing together, exuding power and readiness.',
  },
  {
    message: 'Batman Movie 1966',
    id: '54618571998_949128693882891',
    publishTime: '2024-04-09T13:11:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/434950917_947863274009433_143764009415871592_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YajF7I-DeiMQ7kNvgFlXYYX&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AgWySNYoCQdWM2hsmdj80hA&oh=00_AYAZOFJCMcDw6Zzb2yT4C6AWdIPezV8Gj5rUEyR-luYkdg&oe=679DE5D0',
    status: 'SCHEDULED',
    imageDescription:
      'The image features four characters in colorful costumes, likely representing classic comic villains. The characters include a woman in a cat-themed outfit, a man in a green suit with a question mark, a man in a tuxedo with a monocle and a top hat, and another man with white face paint and a purple suit. They are posing in a playful manner.',
  },
  {
    message: 'The Munsters...such a great show and comic book also',
    id: '54618571998_880426400753121',
    publishTime: '2024-01-03T14:03:06+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/416101750_879623300833431_6318458666732900001_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hZv58a4hWxcQ7kNvgHCR_jq&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Aq9BZLyejJs2C5ZtYhRhe9s&oh=00_AYDb4jm5yLqK75E_aLUv39FV9Yv4bVYRqkK9jtYvbCJe-g&oe=679DD747',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image showcases a black and white photo of a family of five standing in front of an ornate wrought iron gate. The individuals are dressed in vintage-style clothing with unique, character-like features, suggesting they represent characters from a classic TV show or movie. They appear to embody a mix of gothic and traditional styles.',
  },
  {
    shares: 2046,
    reactions: 6637,
    message:
      "Lewis Wilson and Douglas Croft publicity shot from 1943's -The Batman. First live action appearance of Batman and Robin.",
    id: '54618571998_735533618575734',
    comments: 284,
    publishTime: '2023-06-08T13:11:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/352209997_1204191580296217_2201959048506803601_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IQ_dZnmJxvwQ7kNvgEvt0g3&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ANf0kMIeMC_mKos2kMEjn4q&oh=00_AYCWNxNc6vVv7bhRcRFHTJLfc4x_hOadSt5zKUnYq1KVHA&oe=679DD9E9',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a black-and-white photograph of two individuals dressed in vintage Batman and Robin costumes from a 1940s serial. They are posing dramatically with Robin holding a slingshot and Batman equipped with a gadget.',
    postUrl: 'https://www.facebook.com/54618571998_735533618575734',
    totalEngagement: 8967,
  },
  {
    message: 'by Alex Ross',
    id: '54618571998_675215751274188',
    publishTime: '2023-03-21T18:12:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/337143205_241419211642509_6281905409780976571_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9WdG1kcH4fgQ7kNvgETmEDM&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYDq7KrKeNNOYCGaqZpr2XSrRJbYhB2QzkODHhescgjFhA&oe=679DE624',
    status: 'SCHEDULED',
    imageDescription:
      'The image features two groups of iconic superheroes. The top group shows characters from one universe, wearing distinctive costumes with symbols and bold colors. The bottom group features another set of heroes, also in unique, dramatic uniforms, emphasizing powerful and commanding presences.',
  },
  {
    message:
      'Classic Comic - Space Ghot #1 (Gold Key 1967) - 1st app. of Space Ghost in comics, only issue, bc pin-up, based on CBS TV series. Dan Spiegle art',
    id: '54618571998_796269029168859',
    publishTime: '2023-09-02T15:10:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/370290677_796037685858660_6663797260535310269_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fSmZCFvWI8sQ7kNvgFwVOQy&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYATySoumuAcnz6PmNsO0gZNWdJ5kOBwM-TNGaAHpyxY4w&oe=679DD174',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic book cover for "Space Ghost" by Hanna-Barbera, published by Gold Key. It features Space Ghost prominently in various action scenes, showcasing his abilities such as flying, electronic force, and invisibility. The cover text highlights him as the "Protector of the Universe," emphasizing his incredible speed and unique powers.',
  },
  {
    message: 'Art by Frank Frazetta',
    id: '54618571998_798395158956246',
    publishTime: '2023-09-05T21:31:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/372026286_797942629001499_2960799016968764944_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nBSjPpWw9TkQ7kNvgFdgNVN&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYAS1YV3WNlDMuZr10beUz2xDcaKqHMh1KQ682B-SDuV-Q&oe=679DD255',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is a whimsical illustration featuring classic monsters and spooky characters gathered for a "Mad Monster Party." It includes figures like Frankenstein\'s monster, a witch, and other eerie creatures, in front of a spooky castle. The scene is lively and chaotic, with an overall cartoonish style.',
  },
  {
    shares: 513,
    reactions: 8303,
    message: 'Yvonne Craig.....',
    id: '54618571998_917685177027243',
    comments: 134,
    publishTime: '2024-02-24T14:08:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/429684863_917415280387566_5876441099409952059_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=j-gGzgVG7M4Q7kNvgEwApP2&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A5eIE02JisGgFv8ajLznD4-&oh=00_AYBURDvwrMaoIe6XIawTbPXJIqqLZjtHVbP7gtU6gRdHFw&oe=679DF4DF',
    status: 'PUBLISHED',
    imageDescription:
      "The image features a woman in a purple dress holding a telephone next to another woman dressed as a superhero in a purple and yellow costume with a bat insignia. They're standing in front of a wooden backdrop.",
    postUrl: 'https://www.facebook.com/54618571998_917685177027243',
    totalEngagement: 8950,
  },
  {
    shares: 860,
    reactions: 7880,
    message:
      'Batman Pin Up from Batman #181.(1st Poison Ivy)  the big reason why so many copies are missing the "poster"',
    id: '54618571998_731985635597199',
    comments: 70,
    publishTime: '2023-06-03T19:24:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/350802090_767439721585285_2702236999318545277_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=s98G0UQHjD8Q7kNvgHjGDF7&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDWRC2mfkXFbh8H3P2JVBd&oh=00_AYBH2SGJzSoYnQ1Nubs6j6w8FfFFM9Qutm1aAiUa2ms4Lw&oe=679DC962',
    status: 'PUBLISHED',
    imageDescription:
      'A classic comic-style illustration shows two superheroes, one in a bat-themed costume with a cape, and another in a colorful costume with a mask. The larger figure stands confidently with hands on hips, while the smaller figure stands with arms crossed. The background features a large bat silhouette. The text reads, "Best Bat-Wishes, Batman and Robin."',
    postUrl: 'https://www.facebook.com/54618571998_731985635597199',
    totalEngagement: 8810,
  },
  {
    message:
      'Batman Pin Up from Batman #181. the big reason why so many copies are missing the "poster"',
    id: '54618571998_639862968142800',
    publishTime: '2023-02-07T17:21:13+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/329278808_1322483585211525_2557523800717830697_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=s94ECZvtml8Q7kNvgFLd8Yu&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AOWK0IeDNMQbdSLHTr-neG3&oh=00_AYBZ5OUKUEeqcod9sKjSYSm2FaQDaYfkl0xRgbA6q611tw&oe=679DD70D',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage comic illustration featuring Batman and Robin standing confidently. Batman has a large bat emblem on his chest, and both characters are in their classic costumes. The background shows a large bat silhouette. The text reads "Best Bat-Wishes Batman and Robin."',
  },
  {
    message: 'By John Romita Sr',
    id: '54618571998_797060899089672',
    publishTime: '2023-09-03T20:04:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/372687208_796984349097327_7192624414420393198_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=douOZWeX_3IQ7kNvgGZ3xp6&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYCTV9N1FLwTJJXAODmVcHRVvr3c4FDd_9ucLlnQEmqhYQ&oe=679DC31B',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      "The image features Spider-Man in his iconic red and blue costume, dynamically posed at the center. Surrounding him are various characters, some appearing as allies and others as villains, depicted in a colorful comic book style. These figures include familiar faces from Spider-Man's universe, each with distinct and expressive features.",
  },
  {
    message: 'the best of time',
    id: '54618571998_918479036947857',
    publishTime: '2024-02-25T18:03:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/429662490_917481490380945_4408414233855775471_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dlRjLKAZo0wQ7kNvgHbn9sP&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AMiFh2EetwMb3aS1X1CyXj0&oh=00_AYDR1RleTNqB9HAA_JkwBAWtfSwFOtaKJVJOy1l-C17QsA&oe=679DD238',
    status: 'SCHEDULED',
    imageDescription:
      'The image showcases a group of animated superhero characters from classic cartoons, including a variety of figures like a large genie, a man in a white suit with a red cape, and other uniquely costumed heroes and creatures, all posed together against a plain background.',
  },
  {
    shares: 679,
    reactions: 7774,
    message: 'Batman, Batgirl and Mr Spock',
    id: '54618571998_966924365436657',
    comments: 101,
    publishTime: '2024-05-04T14:04:05+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/441378997_965959825533111_8909970940909086914_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Pn6AldS4q2AQ7kNvgEUsID0&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A85M5KuolsBPj4E-57EiotJ&oh=00_AYD8enNqfWLZP-NKR085wi8mSjP6JnrcymUI_LiIeVZRgQ&oe=679DEE92',
    status: 'PUBLISHED',
    imageDescription:
      'A black and white photograph featuring three individuals: a man in a checked suit with a tie, a woman in a dress with a decorative neckline, and another man wearing a dark suit jacket with a high-neck shirt. They are standing close together, all looking towards the camera.',
    postUrl: 'https://www.facebook.com/54618571998_966924365436657',
    totalEngagement: 8554,
  },
  {
    shares: 547,
    reactions: 7678,
    message: 'Julie Newmar - my favorite Catwoman',
    id: '54618571998_970464298415997',
    comments: 282,
    publishTime: '2024-05-09T14:10:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/441412135_970257051770055_705805427953494036_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sUr0sBr_2coQ7kNvgE4JG6d&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AM7rvDZZyH8PLOHuLO-yzzj&oh=00_AYBQWcupmfPnT6ymuLXNYry4mT5UI82J36sQYj9QA3ozVg&oe=679DC031',
    status: 'PUBLISHED',
    imageDescription:
      'A person is dressed in a shiny black cat-inspired costume, complete with cat ears, a mask, gloves, and a gold belt. They are standing in a grassy outdoor area.',
    postUrl: 'https://www.facebook.com/54618571998_970464298415997',
    totalEngagement: 8507,
  },
  {
    message:
      'Classic Comic -Time Tunnel #1 (1967) - Based on the hit ABC TV Series. Painted cover by George Wilson',
    id: '54618571998_1086304700165289',
    publishTime: '2024-10-12T23:10:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/462693420_1085695723559520_3164348657843263563_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=j-rGGKeReAMQ7kNvgEzXLGI&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AKYaoeCGwU8pX7Z0Cnvfmza&oh=00_AYArDXqGmZouKntqS_EB4irHfMund38SWbJEy6JJHNlBKQ&oe=679DBE08',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a cover of the comic "The Time Tunnel" by Gold Key. It features a triceratops, astronauts, and a spacecraft emerging from a spiraling vortex. In the foreground, scientists operate control panels in a laboratory setting. The text at the bottom reads: "Two scientists are hurled helpless into the lost world of time!"',
  },
  {
    shares: 490,
    reactions: 7616,
    message: 'one of my favorite cartoons',
    id: '54618571998_1030745322387894',
    comments: 369,
    publishTime: '2024-08-01T16:00:06+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/453633561_1030448075750952_3199906927184941333_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5txrr2Zg1V8Q7kNvgHRtF-k&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ABjR_3i60223gqtcrWbUSUT&oh=00_AYBJNdehnFSpeDoc1vu3cmDt_grnnEQKlBHCt3xtQjfwQA&oe=679DC5BE',
    status: 'PUBLISHED',
    imageDescription:
      'A classic animation scene depicting four characters and a dog inside a cockpit. One character is piloting the vehicle, another is seated beside him, and two more are seated behind, one wearing a turban and holding the dog. The setting looks like a high-tech control room.',
    postUrl: 'https://www.facebook.com/54618571998_1030745322387894',
    totalEngagement: 8475,
  },
  {
    message:
      'Cllassic Comic - Green Hornet #1 (1967) - Gold key TV Comic -featuring Bruce Lee and Van Williams photo cover',
    id: '54618571998_591513616311069',
    publishTime: '2022-12-14T16:11:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/319800942_540526354354806_8369612277320409591_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fPdiLA9r1BwQ7kNvgHruFoz&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AuexS-KxJ4KGtQ3Cm4pz2Tg&oh=00_AYBQL2rb3bZfU-SECwHd_Wm4P1Y0EBoYHUb2ejkYNrFoyg&oe=679DD36B',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a comic book cover titled "The Green Hornet" by Gold Key Comics, priced at 12 cents. It features two masked characters, the Green Hornet and Kato. The text describes their battle against a ruthless gang that enforces criminal commands.',
  },
  {
    message: 'time for cartoons',
    id: '54618571998_826312639497831',
    publishTime: '2023-10-15T17:15:21+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/391717061_826312409497854_745694821039055623_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mg2Er-TPmO4Q7kNvgH7AJHm&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFN0am19oe23tkLvrxzAuej&oh=00_AYBVbtrgvnLxkk4-sOVvCghYH7xwxZQIzoKLM5rKvOHbjw&oe=679DE2C8',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A cartoon superhero dog in a red suit and blue cape is holding a villainous wolf in a blue-striped suit by the scruff, exhibiting a dynamic pose against a cloudy backdrop.',
  },
  {
    message: 'the memories',
    id: '54618571998_803709695091459',
    publishTime: '2023-09-13T14:19:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/376244254_803439025118526_8635162163773337795_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YnrG6wzc884Q7kNvgFjn8uk&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AeuYoz_Z6s18yKB-UbYSALw&oh=00_AYDtNcmkgPSTvu10Xl8ssArnoQJUxh_EtmeSfCFXOKUCKg&oe=679DD55C',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image shows a man standing in a comic book store, arranging comics. He is surrounded by racks filled with various comic titles. The store displays a sign overhead that says, "Hey!! Kids Comics." The environment has a retro feel, likely from a past era.',
  },
  {
    message:
      'Classic Comic - Batman #8 (1941/42) - Joker appearance. 1st appearance of Professor Radium. Infinity cover. Stories by Bill Finger. Cover by Fred Ray and Jerry Robinson',
    id: '54618571998_659117342884029',
    publishTime: '2023-03-01T18:12:27+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/333912163_477588867771963_7977922212726870618_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rCaGTq_6JSsQ7kNvgF51-Au&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYCqEKbPEfcQsRT4KiJAQ8vzG1PhSTps5muqCtNmiy2Rlg&oe=679DF41C',
    status: 'SCHEDULED',
    imageDescription:
      'This is the cover of "Batman" comic book issue No. 8. It features Batman and Robin smiling while holding a copy of the same comic book, creating a recursive image. The background is red, and the price is listed as 10 cents. The publication is noted as "A Superman Publication," and the logo of DC is visible.',
  },
  {
    message: 'sit back and lets enjoy some cartoons......',
    id: '54618571998_903755921753502',
    publishTime: '2024-02-04T18:52:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/423312335_900522938743467_2669128794112321534_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HYqQPaQW7XAQ7kNvgGZzQFM&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AiXWsGT1VmkIehz87A_CgAK&oh=00_AYDhP8D8mcTrRJ-ivSYgYmbh_RrdjJaPXbZ8At2JCDBULA&oe=679DDF67',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      "The image is a cartoon of an elderly gentleman with a large nose. He's wearing glasses, a brown suit with a checkered vest, and holding a smoking pipe. His expression appears thoughtful and content.",
  },
  {
    shares: 513,
    reactions: 7610,
    message: '',
    id: '54618571998_843165807812514',
    comments: 112,
    publishTime: '2023-11-09T19:20:06+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/398978347_842790921183336_3822319619345329162_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5X8zEb1ItwoQ7kNvgFnZ2QD&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AR-VLF_t3tmBjH-A-DjzpPc&oh=00_AYBD45QlF7-m2YhGQ1B25ZBE7afDWn3RFx9JuYNdGdQVDg&oe=679DC357',
    status: 'PUBLISHED',
    imageDescription:
      'The image features a nostalgic collage of 90s superhero cartoons, including Batman Beyond, Spider-Man, the X-Men, and another silhouetted scene, with the text "You just had to be there" at the top.',
    postUrl: 'https://www.facebook.com/54618571998_843165807812514',
    totalEngagement: 8235,
  },
  {
    message: 'Lynda Carter',
    id: '54618571998_810669611062134',
    publishTime: '2023-09-23T14:31:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/382335928_810392701089825_3235661184779692902_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2Xis3OLz66cQ7kNvgGFXvq8&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AQ6uIXz3wArX-td61b3bq_j&oh=00_AYBVtPbLmNS9xEfgG4IwWTBSwQLSUKV8RdE8B6Q413LiLA&oe=679DEA4E',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image shows a split-screen comparison of a woman in two different outfits. On the left, she is dressed as a superhero with a red and gold top and star-patterned shorts. On the right, she wears a dark blue, off-the-shoulder dress. Both images feature her in a confident pose with hands on her hips. The text above reads, "Sometimes age really is just a number!"',
  },
  {
    message:
      'Jonny Quest ( September 18, 1964 to March 11, 1965). Produced by Hanna-Barbera Productions for Screen Gems, and created and designed by comic book artist Doug Wildey, the series stars voice actors Tim Matheson, Mike Road, Danny Bravo, John Stephenson, and D',
    id: '54618571998_1091754646286961',
    publishTime: '2024-10-19T13:12:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/464011456_1090723839723375_2581810231568229607_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VRg2nSiS8agQ7kNvgEXJhL1&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ADDmRUtM0kuySVKVPfSiMxo&oh=00_AYDC2oOL9Sh50te_r6YA7vrGzyG3PwhgeGLtKcxMLwuVEw&oe=679DEAC2',
    status: 'SCHEDULED',
    imageDescription:
      'The image shows an animated scene of four characters and a dog inside a cockpit. One character is piloting, and the others are seated behind, with detailed instrumentation visible.',
  },
  {
    message: '',
    id: '54618571998_788697396592689',
    publishTime: '2023-08-21T18:12:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/368810680_788686239927138_2536831136845398433_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=oGf7Qm_RxvgQ7kNvgHNr8Yy&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYALfuOoSpAk3DGcIthI1jJTMYCL0JxN_4UB4oMBBCFKwA&oe=679DC529',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image is a comic strip panel featuring a character in a red shirt walking and expressing that when they feel discouraged, reading a comic magazine is the only thing that can revive them.',
  },
  {
    message: 'Superhero Show at SeaWorld',
    id: '54618571998_1130852059043886',
    publishTime: '2024-12-07T19:14:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/468402292_1126345649494527_2685337035147550350_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PjjSdLAGS84Q7kNvgG43aLd&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A3nqXxoEtaEELna7Wo7ba1V&oh=00_AYDlGh016ivBCV9DiBjgl4mNvYcXkguIO5ydcLYQ1C27Lg&oe=679DBF8A',
    status: 'SCHEDULED',
    imageDescription:
      'A group of people dressed as superheroes is performing a water skiing pyramid, with several individuals holding American flags. They are positioned in a formation on the water, creating an impressive display.',
  },
  {
    message: '#truth #Comicbooks #comicbookcollecting',
    id: '54618571998_816402913822137',
    publishTime: '2023-10-01T18:12:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/384986647_816371457158616_8351890330063761072_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=oGaA-EmCcHoQ7kNvgGjMMNa&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A_vnmMIHG0AfcC5NFksZQ5j&oh=00_AYAiEVw4EqaySciqNDomS_Sc3Gsta4eZsZRkhBwLnB61tQ&oe=679DBFBD',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A vintage photo showing children buying comic books at a store. The caption reads: "Teach your kids how to read comic books, they won\'t have money for drugs."',
  },
  {
    message: '',
    id: '54618571998_615192437276520',
    publishTime: '2023-01-10T19:16:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/323697536_896512371793037_231190533130003705_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rta7kEiNT0AQ7kNvgF7uz4q&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ANEcB3dbg9ERQ64wxt3zug_&oh=00_AYAgATceWvcmkkB1ChEkfr5Z_Xtq8lb45ISnTgAszK3dYA&oe=679DE673',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image depicts a retro diner scene with several individuals sitting on red stools at a counter. A superhero in costume sits among them, engaging with others. The setting includes a cook, a waitress, and patrons enjoying food and drinks, with vintage advertisements on the walls. The atmosphere is casual and social.',
  },
  {
    message:
      'Classic Comic - Welcome Back, Kotter #1 (1976) - Based on the hit ABC TV series. Bob Oksner cover',
    id: '54618571998_826424442819984',
    publishTime: '2023-10-15T21:04:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/391721392_826365889492506_7746492357839855465_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2XwXCBbKjroQ7kNvgHJqcqg&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFN0am19oe23tkLvrxzAuej&oh=00_AYClZ_9zcGs53KIzuNapqtLOU1RIiyFibg9HVvFeBiNlFA&oe=679DF09B',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a cover of a comic book titled "Welcome Back, Kotter," featuring characters in a lively classroom scene. A basketball is being thrown, and several students are engaging in animated behavior. The teacher, likely Mr. Kotter, stands confidently while talking to another man. The cover highlights "The Sweat Hogs in their own comic," and advertises additional content about Gabriel Kaplan. The style is colorful and cartoonish.',
  },
  {
    shares: 658,
    reactions: 7264,
    message:
      'Batman #62  (1951/52) -  Origin of Catwoman. Catwoman cover.! First use of "Selina Kyle" name!. Bill Finger story. Win Mortimer cover',
    id: '54618571998_808048394657589',
    comments: 46,
    publishTime: '2023-09-19T15:14:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/379916655_807749728020789_5926432051877806376_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Gs2kDJe73SoQ7kNvgH6yNvp&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AQ6uIXz3wArX-td61b3bq_j&oh=00_AYDUaGcc-7ECpIxUA_VRGfpdJgwBZkNE4lyJATRURV2oWg&oe=679DD792',
    status: 'PUBLISHED',
    imageDescription:
      'This is a vintage comic book cover for "Batman" issue number 62. It features Batman and Robin facing Catwoman, who is shown with a white tiger and a black cat. The cover announces "Catwoman Returns!" and teases the story as "Exposing for the First Time The Secret Life of the Catwoman!" The background is primarily red and yellow, with bold titles and classic comic book art style.',
    postUrl: 'https://www.facebook.com/54618571998_808048394657589',
    totalEngagement: 7968,
  },
  {
    message: '45 years ago today, \u201cMork & Mindy\u201d premiered!',
    id: '54618571998_804693168326445',
    publishTime: '2023-09-15T00:01:34+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/378548098_804693064993122_4847136689115097730_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pMA6YtHkwG0Q7kNvgEID-Lz&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AeuYoz_Z6s18yKB-UbYSALw&oh=00_AYC90bkd5ySZCKy2CzRb4EO6IbK3S_v3VSX7inyHppAotQ&oe=679DD5D1',
    status: 'SCHEDULED',
    imageDescription:
      'A man in a striped shirt with rainbow suspenders is being hugged from behind by a woman in a pink blouse. The image has the "Mork & Mindy" logo in the bottom right corner.',
  },
  {
    message: '',
    id: '54618571998_675332027929227',
    publishTime: '2023-03-21T21:33:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/337169212_3721634748064272_270013399208665299_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6b2fjZgJiowQ7kNvgFl24Tj&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYAf8ugV6ZZ5sWtt8DzU3-RnT0pYaJTywDg_cOW_QtFIRA&oe=679DCCDC',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image depicts a whimsical scene of two characters, dressed as Batman and Robin, sitting at a diner counter. The setting is styled after a classic American diner with a white interior and a "Special Today" board. An older gentleman behind the counter is engaging with the duo. The atmosphere is playful and nostalgic.',
  },
  {
    message: 'still the best',
    id: '54618571998_742069151255514',
    publishTime: '2023-06-16T14:08:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/354060598_741758597953236_721579495885170013_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1_g6iXSNUVcQ7kNvgHa3Fcw&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ANf0kMIeMC_mKos2kMEjn4q&oh=00_AYBpOnuW09qdBbNPboPALqyn1YZqosLWGJeRE1wI1VKqLA&oe=679DD43E',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a black and white photograph featuring a woman sitting in an ornate chair. She is dressed in a black outfit with cat ears, reminiscent of a classic Catwoman style. The chair is elaborately carved and has a leopard print cover. The background features a fuzzy texture that adds to the vintage and theatrical feel of the image.',
  },
  {
    message:
      "so  many reasons to love the Batman TV  show and movie from the 60's",
    id: '54618571998_1122914566504302',
    publishTime: '2024-11-27T19:04:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/468531607_1122533213209104_396438226511046102_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uDO7cdi-thkQ7kNvgEPA8DF&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AGCaRt6IitcQ7-yAsV12fL4&oh=00_AYCfQajzuN4DLbtTgtVhYiboYjWMSt5m_JcaOBJ9kCC5Yg&oe=679DC83D',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a collage featuring characters from the classic "Batman" TV series, with a prominent "Batman" logo in the center. It includes Batman, Robin, Catwoman, Joker, and other iconic characters from the show in various poses and costumes.',
  },
  {
    message: 'by Kerry Callen',
    id: '54618571998_759842136144882',
    publishTime: '2023-07-10T16:04:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/359713559_759474119515017_5356072345039313401_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jGvw4x_uGwAQ7kNvgFcWVXe&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AuXIsvkg1_wDUFJ6cdv22t7&oh=00_AYCfYBpDcSUmlv9mPKRiba9ymXn1JKoim6pjYfrIwCZuDA&oe=679DDBE7',
    status: 'SCHEDULED',
    imageDescription:
      'The comic "Super Antics #5" humorously depicts a superhero showing off his high-tech cave to a sidekick. Upon turning on the lights, they find a dinosaur inside, prompting shock and confusion. The final panel shows another superhero laughing at the situation from behind a tree. The next adventure teased is "Superman and the Giant Penny."',
  },
  {
    message: 'Fantastic Four Pin up by Jack Kirby',
    id: '54618571998_626251372837293',
    publishTime: '2023-01-23T17:22:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/327171957_3068064910158350_7630886649143077156_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BX7dEs9XbjQQ7kNvgHUDPF1&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Alupxj5DpbCH-SJ9oxPO6Md&oh=00_AYAovI4NafiVfix_lxAebZJUXD75GjiKnIS3u60-HwC60g&oe=679DFA5F',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is a comic book pin-up page featuring The Fantastic Four. It shows four characters in their iconic costumes: a strong, rocky-skinned individual crouching, a man in a blue suit standing with a woman sitting next to him, and a fiery figure on the right. The top text reads "The Fantastic Four Pin-Up Page," with signatures of the characters at the bottom.',
  },
  {
    message:
      'Classic Comic - Batman #32 (1945/46) -  Joker appears. Origin of Robin retold.Bill Finger Stories. Jerry Robinson art. Sprang cover',
    id: '54618571998_727472732715156',
    publishTime: '2023-05-28T19:44:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/349895401_199551849649663_4408179793356615502_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xnPSF-Pmb3IQ7kNvgH2kLT8&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDWRC2mfkXFbh8H3P2JVBd&oh=00_AYDTFBHUnn8AzuCeAXRulYS6fO_FdskiL7mOG50ndr7TBw&oe=679DCA4D',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage comic book cover featuring Batman and Robin, alongside a character dressed as a musketeer. The title reads "BATMAN" prominently at the top, and the comic is noted to be a 52-page issue costing ten cents. It mentions an adventure involving "The Three Musketeers."',
  },
  {
    message: '',
    id: '54618571998_810722154390213',
    publishTime: '2023-09-23T16:03:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/380768531_810394367756325_2839823845292969248_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sT_FuWV9xGAQ7kNvgH--Lyi&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AQ6uIXz3wArX-td61b3bq_j&oh=00_AYD7al9VDoUCV0e0St-lQfAbt0ZRiVA0vYQAFY7IW16cEA&oe=679DE2CD',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The comic titled "Super Antics #13" depicts a butler performing various household tasks while a shadowy superhero follows him around. In each panel, the superhero\'s presence is subtly disruptive. The butler serves tea, dusts a bookshelf, reads the newspaper, and trims curtains, while reacting humorously to the unseen hero\'s antics. The butler ends by expressing frustration about the hero working from home.',
  },
  {
    shares: 359,
    reactions: 7274,
    message:
      'Classic Comic - Jonny Quest #1 (1964) - The only issue made at the time. Back cover is a pin up. Story based on the ABC pilot episode.',
    id: '54618571998_1091904026272023',
    comments: 137,
    publishTime: '2024-10-19T17:06:11+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/462580804_1089937526468673_7031261783427289991_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NRVX4Ps-wgYQ7kNvgGc7zHA&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ADDmRUtM0kuySVKVPfSiMxo&oh=00_AYAth9QF-Q723AC4HOGb8nT0A_3qB8SCOibfEQ2uRrMO2Q&oe=679DD7BC',
    status: 'PUBLISHED',
    imageDescription:
      'This image is a cover of a "Jonny Quest" comic titled "The Mystery of the Lizard Men," published by Gold Key. It features the main characters in action against two green-scaled, humanoid lizard creatures. The background is a solid red, emphasizing the dynamic conflict depicted.',
    postUrl: 'https://www.facebook.com/54618571998_1091904026272023',
    totalEngagement: 7770,
  },
  {
    message:
      'Classic Comic - Avengers #71 (1969) - 1st Appearance of the Invaders. Black Knight joins the Avengers. Cover by Sal Buscema',
    id: '54618571998_734904888638607',
    publishTime: '2023-06-07T17:12:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/352072444_242422865089768_4824364061662661070_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4olnERD6U94Q7kNvgH6yCbW&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ANf0kMIeMC_mKos2kMEjn4q&oh=00_AYBBsLbNb0c66VY7wa9FCWhjHwk1qKD4vkeQLTrN48JRdA&oe=679DD52B',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'This image depicts a vintage comic book cover of "The Avengers", issue 71. It shows several superheroes, including Captain America, engaged in an action-packed battle scene in front of the Eiffel Tower. The text at the bottom reads "The Final Battle!"',
  },
  {
    message: 'Richie Rich #1 - what a classic',
    id: '54618571998_960056586123435',
    publishTime: '2024-04-24T22:31:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/439344018_959596152836145_3183695063056367470_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XCF5fK0QXFMQ7kNvgHhZ8Nx&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ayhl-RshheSPztt9I5rbYoz&oh=00_AYCAT0zBzo0IslCvECM0vNMOFUfsVBrkitO8j_eo2dSDFg&oe=679DED74',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image is the cover of "Richie Rich" comic issue #1. It features Richie Rich in a pool, playfully surrounded by toy boats. A butler stands poolside with a towel, while a woman dives into the water. The cover is colorful with a prominent yellow background and showcases Richie Rich as the "Poor Little Rich Boy." It includes certified grading with a score of 9.6.',
  },
  {
    message: 'Batman \u201866 Meets the Green Hornet by Alex Ross',
    id: '54618571998_815618077233954',
    publishTime: '2023-09-30T15:47:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/383358285_815222737273488_8690708195291835514_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HrYngPWqCbgQ7kNvgGWquus&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A_vnmMIHG0AfcC5NFksZQ5j&oh=00_AYAzQjOqbIeC_oqfh5vqSz8wE5-schV-WbIk9zwrUCuIsg&oe=679DEA7F',
    status: 'SCHEDULED',
    imageDescription:
      "The image depicts superheroes fighting on top of a moving train. They're struggling through pink goo, and a helicopter hovers in the background, with mountainous terrain nearby. The scene is action-packed and dynamic.",
  },
  {
    message: 'Back cover to Space Ghost #1',
    id: '54618571998_747662667362829',
    publishTime: '2023-06-24T14:03:05+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/356106657_747458060716623_7536940658686014218_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qBMGJkPVu5gQ7kNvgEn1qgm&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ASXWjd5_HguOydGi6Cp1YcZ&oh=00_AYBOWLmMXrSS_OcSTqHBef85bHk9cuV5-EBIB8W2yoZDKw&oe=679DCDB4',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image shows a character in a superhero costume with a white suit, black cowl, red belt, and red cuffs. He has a yellow cape and stands confidently against a blue background. The text identifies him as "Space Ghost."',
  },
  {
    message: 'the dreams of 2 guys in Cleveland',
    id: '54618571998_936179861844441',
    publishTime: '2024-03-22T16:08:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/433853136_935122115283549_2567983210660584456_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PMh-Byqc7_YQ7kNvgERHLlr&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A1Cltn3twGkGm6VFwILAtl1&oh=00_AYCmIsI0fmCcn5sZYDnHA23-OxGYjiWKNhl2FJbGm1rxZQ&oe=679DE2B2',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image depicts two men in a room, one at a drawing desk and the other gesturing enthusiastically. Above them is a thought bubble showing scenes of Superman in action, indicating the creative conceptualization of a superhero character. The setting suggests a historical context, with a calendar on the wall displaying the year 1938.',
  },
  {
    shares: 422,
    reactions: 7038,
    message:
      'Classic Comic - Avengers #70 (1969) - Origin Squadron Sinister. Kang. Grandmaster and Black Knight appear - Cover and art by Sal Buscema and Sam Grainger',
    id: '54618571998_790041366458292',
    comments: 101,
    publishTime: '2023-08-23T19:51:31+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/368305814_790038763125219_3716694444735760750_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QfIQRYFZcE8Q7kNvgFlq0X5&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYAmDMKkubhRmEtZKN9_G-SRoTRxBMPZtvgqgCVbOjVBFw&oe=679DF140',
    status: 'PUBLISHED',
    imageDescription:
      'This is a comic book cover for "The Avengers" issue #70, published by Marvel Comics. The scene depicts a dynamic battle between The Avengers and the Squadron Sinister. Iconic characters like Captain America, Iron Man, and Thor are shown in action poses. The bold text at the bottom reads, "Enter: The Squadron Sinister!" The cover features vibrant colors and classic comic art style.',
    postUrl: 'https://www.facebook.com/54618571998_790041366458292',
    totalEngagement: 7561,
  },
  {
    message: '',
    id: '54618571998_811461334316295',
    publishTime: '2023-09-24T17:52:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/380820208_811170317678730_8667413758398801490_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=G79tHfQs5zgQ7kNvgFCKo5Q&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AQ6uIXz3wArX-td61b3bq_j&oh=00_AYCQ0NM1vZwjmUMpSoZD_ECl4d7QJc9uOl76Rp7C7HX2QQ&oe=679DD13D',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'A woman with short dark hair and an expression of surprise is reading a "Detective Comics" Batman comic against a red background.',
  },
  {
    message: '',
    id: '54618571998_904342128361548',
    publishTime: '2024-02-05T15:05:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/425657201_904114871717607_1375659195203069907_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ma-tkiEyIZwQ7kNvgG4QEiO&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AiXWsGT1VmkIehz87A_CgAK&oh=00_AYBhoaxbfMVGd-xY_GWdx75a16BO8JGh13r-fSDewTdBYg&oe=679DEDCC',
    status: 'SCHEDULED',
    imageDescription:
      'This image features a cartoon character wearing a Viking helmet and carrying a hammer, reminiscent of Thor. Above, another cartoon character, a dog wearing a superhero cape, is flying. The background depicts a vibrant, colorful landscape with a city or structure on the horizon.',
  },
  {
    message: 'our favorite Catwoman',
    id: '54618571998_853147470147681',
    publishTime: '2023-11-24T14:20:37+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/404960954_853146596814435_4725892463639571971_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DA9wReYJJE8Q7kNvgH70w3Z&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad1ff1s2cBGYM0_gvSA37EV&oh=00_AYCKh2hH502QYyBQSV7buflg-o8KQFadGSYyGoG7S9sdUQ&oe=679DD2EA',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image shows a woman in a shiny black catsuit wearing cat ears and green sunglasses, surrounded by two people in tiger-striped costumes and matching green sunglasses. She also has a gold necklace and belt.',
  },
  {
    shares: 650,
    reactions: 6715,
    message: 'The Phantom by Sy Barry',
    id: '54618571998_760615232734239',
    comments: 105,
    publishTime: '2023-07-11T18:17:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/359781410_760231889439240_5636130352179162650_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=X2A3LXTPQEsQ7kNvgEZvmgj&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AuXIsvkg1_wDUFJ6cdv22t7&oh=00_AYBgD6xtoqF6-8adRyu5qT6opoHWT27-fyzbq-NEJj_KBQ&oe=679DDD74',
    status: 'PUBLISHED',
    imageDescription:
      'A masked superhero in a purple suit sits on a skull-adorned throne, petting a dog, with a flaming torch nearby.',
    postUrl: 'https://www.facebook.com/54618571998_760615232734239',
    totalEngagement: 7470,
  },
  {
    message: 'by Art Adams',
    id: '54618571998_1019599646835795',
    publishTime: '2024-07-16T16:11:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/451319547_1019255230203570_8450989121590477551_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=l1ZEUL4s9WEQ7kNvgHWi0sU&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ar-pLjOCTS9S8Pu2xAqhP0o&oh=00_AYDqL_iMUno-5QKd2VPXnYLxem51RhsPtKlU3RIy7v7gaA&oe=679DE4DE',
    status: 'SCHEDULED',
    imageDescription:
      'The image features a group of fantasy warriors and creatures in front of a castle with a skull-like facade. The characters are diverse, clad in armor and warrior outfits, with some wielding weapons. A prominent figure in the front holds a sword, accompanied by others, including a large armored cat. A woman stands beside the lead character, and a mystical bird-like woman hovers above. The setting is a rocky, mountainous landscape.',
  },
  {
    message: '',
    id: '54618571998_887689443360150',
    publishTime: '2024-01-13T19:19:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/419564497_887213123407782_1938190250394224362_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wK7WTXhIZVcQ7kNvgH1ArpB&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AnI2vm1qwoJyPrblQR7BRtx&oh=00_AYAioHqnySmypxQreZTpetM4P3rcGZGull_gpbmB2mi7pA&oe=679DCB77',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image features a quote by Art Spiegelman: "Comics are a gateway drug to literacy."',
  },
  {
    message:
      'Classic Comic - Hot Stuff #1 (1957) - 1st appearance of Hot Stuff. Cover by Warren Kremer',
    id: '54618571998_788087383320357',
    publishTime: '2023-08-20T19:11:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/368219522_788056759990086_8404954905861201453_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=D86TAaoGwjkQ7kNvgGHXcx7&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYA9fqrJwq-hx6V4-4U_mG7dx-cFopB4-olWnD_zCxqTsA&oe=679DDC83',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic book cover titled "Hot Stuff: The Little Devil" by Harvey Comics. It features a red cartoon devil with horns and a tail, wearing a diaper and holding a trident. He is surrounded by flames, and the text at the bottom reads, "I\'M HOT STUFF...WHO ARE YOU?"',
  },
  {
    message: 'Yvonne Craig Ready for action as Batgirl',
    id: '54618571998_776816064447489',
    publishTime: '2023-08-04T13:11:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/363390066_774395224689573_3947806439615961930_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=G02w7jNRfi4Q7kNvgEi_GKd&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ap-gkw9jU2HMot4HcT8m766&oh=00_AYBZeHDaTMQfI78BOEFUxjjRlcbsFl5Vt32sr_p2XjwIiw&oe=679DE70C',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A person dressed in a vintage Batgirl costume, featuring a shiny suit with a bat symbol on the chest and utility belt, poses confidently with hands on hips.',
  },
  {
    message: 'Julie Newmar ......our all time favorite Catwoman',
    id: '54618571998_773917744737321',
    publishTime: '2023-07-31T13:05:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/364029440_773673618095067_2202160554617215164_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3VQ9uGkGlb8Q7kNvgFIqD3z&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AxJt4ThoRXUxba1szmG7ZRv&oh=00_AYDqqRLN4u7QWuJJh_ZWJOsY6UCyuZsgmYCD6UBEU40oYQ&oe=679DE189',
    status: 'SCHEDULED',
    imageDescription:
      'A woman wearing a sleek, shiny cat costume with cat ears poses playfully, sitting on a bed structure with metal finials. Her expression is lively and engaging. The image is black and white.',
  },
  {
    message:
      '1 hell of a reunion -  from New Orleans Comic Con - Michael Biehn, Lance Henriksen, Robert Patrick & Edward Furlong - TERMINATOR',
    id: '54618571998_884876440308117',
    publishTime: '2024-01-09T23:33:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/417750663_884845446977883_4921731988040563479_n.jpg?stp=cp1_dst-jpg_p720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-Z0ptCGLKZYQ7kNvgEF6A0z&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Aq9BZLyejJs2C5ZtYhRhe9s&oh=00_AYDPJe32LzVoybiqLqeZ4PHE-CqRjt0RTV74fQa0HN-66A&oe=679DED67',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      "Four men are sitting and posing together in a public area, possibly an airport lounge. They are seated close, smiling, and appear to be relaxed and enjoying each other's company. One man has headphones around his neck, and luggage is visible. The background shows other people seated and waiting.",
  },
  {
    message: 'some of the best cartoons ever',
    id: '54618571998_936847485111012',
    publishTime: '2024-03-23T13:06:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/432686624_935159341946493_9013602842461173383_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zJcR_Z3NGxoQ7kNvgEkQTW1&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A1Cltn3twGkGm6VFwILAtl1&oh=00_AYADvj_pQYBLtGlFIDZbesntIYE4wRT5U3BCJTt5cnSVzg&oe=679DD19F',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image features an ensemble of Hanna-Barbera characters styled as a superhero squad, with a central figure in a white suit and cape. The colorful lineup includes various characters, some recognizable from classic animation, in dynamic, action-ready poses. The text at the bottom reads "The Hanna-Barbera ASS-Kicking Squad!"',
  },
  {
    shares: 1187,
    reactions: 5996,
    message: 'such a great cartoon series',
    id: '54618571998_816370393825389',
    comments: 135,
    publishTime: '2023-10-01T17:23:57+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/385000020_816370213825407_5652325834569491912_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4a6kClViNUMQ7kNvgGNdE9e&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A_vnmMIHG0AfcC5NFksZQ5j&oh=00_AYAt80-77SWenMWouTYPOY05H0MvDN-RBI9JYJRfbQtCsA&oe=679DCD51',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a cartoon-style illustration of a penguin and a walrus, both wearing hats and bow ties, set against a green background. The text reads "TENNESSEE TUXEDO AND HIS TALES."',
    postUrl: 'https://www.facebook.com/54618571998_816370393825389',
    totalEngagement: 7318,
  },
  {
    message:
      'By John Trumbull\n\ncheck out more of his work here\njohntrumbull.deviantart.com',
    id: '54618571998_743634944432268',
    publishTime: '2023-06-18T17:47:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/354262316_742533267875769_100113620312248699_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=U_dqKgu8gtEQ7kNvgEWOF4o&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ASXWjd5_HguOydGi6Cp1YcZ&oh=00_AYCsQ4HSFUqrIGVWYJI3UQ1Rj78z7yhkP-XF6PewJ0EAOg&oe=679DCD04',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'In a colorful cartoon style, several superhero characters are on a planet with a crashed spaceship. One character, dressed in a white suit and red cape, is saying, "What do you mean you couldn\u2019t see me approaching?" while others examine the scene. The setting is outer space with planets visible in the background.',
  },
  {
    message:
      'Classic Comic - Fantastic Four #4 (1962) - 1st Silver age appearance of the Sub-Mariner (Last Seen in Sub Mariner #42 (1955). Jack Kirby cover and art',
    id: '54618571998_645179424277821',
    publishTime: '2023-02-13T18:21:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/330914281_1004039320571583_910952842719665755_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xBaaYxln6GwQ7kNvgGCrw9H&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AOWK0IeDNMQbdSLHTr-neG3&oh=00_AYB68jq7E6Yrogt5k08Yv7DzkAFxbS_BACKxO99S8eFXuw&oe=679DE250',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is the cover of "Fantastic Four" issue #4, featuring the team confronting the Sub-Mariner. The cover includes the characters Mr. Fantastic, Invisible Woman, Human Torch, and the Thing, with action text warning about the Sub-Mariner becoming invincible if he reaches the water.',
  },
  {
    message: '',
    id: '54618571998_912491644213263',
    publishTime: '2024-02-16T19:11:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/426601147_912098834252544_4280754963501715623_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6zEV2-iehegQ7kNvgHAS0CU&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A5eIE02JisGgFv8ajLznD4-&oh=00_AYBtKYatk5lRpWmTjdf4-CCVP7SX9n96JwrkPw2zqCkcKA&oe=679DF10E',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'A group of water skiers is performing in costumes resembling superheroes, forming a human pyramid. Some are holding American flags, and they appear to be moving swiftly across the water.',
  },
  {
    message:
      "I have said this for many years...When Stan autographed in my stores back in the 90's , he treated kids as good as he treated millionaires. ....He loved the fans, knew what it meant to dream and was this hobby's greatest Cheerleader...many will try , but none will ever have the impact on our lives or the hobby as Stan has",
    id: '54618571998_817242040404891',
    publishTime: '2023-10-02T22:35:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/385038153_817184723743956_6552423322980380392_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9jbJjOH2FOQQ7kNvgFfjEg9&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A_vnmMIHG0AfcC5NFksZQ5j&oh=00_AYAwjWVUs05eGsBhDK_zDYI9h1iH8w5ge8ZHaEdyhpU-KQ&oe=679DF6A8',
    status: 'SCHEDULED',
    imageDescription:
      'A young fan sent quarters to Marvel Comics, requesting annuals. Marvel returned the money, advising him to send payment after July. Concerned about availability, he wrote to Stan Lee. Stan Lee responded generously, providing the 1964 Marvel annuals\u2014Fantastic Four, Spider-Man, and Marvel Tales\u2014free of charge, with a personal letter, showing fan appreciation.',
  },
  {
    message:
      "LYNDA CARTER (Wonder Woman always and forever)\nIt's not like we are fan boys and smitten with you or anything....well ok we are",
    id: '54618571998_816890147106747',
    publishTime: '2023-10-02T13:03:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/386062030_816754567120305_8752534534642662570_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vHnLkpZRxO4Q7kNvgFXjGaj&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A_vnmMIHG0AfcC5NFksZQ5j&oh=00_AYAU9Nxv3vwQUDodoXaahGgGBVCgADUULjZEr6rmQlTOhQ&oe=679DE742',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This image is a collage featuring four photographs of a woman with dark hair and blue eyes, shown from different angles and in varying outfits.',
  },
  {
    message: '',
    id: '54618571998_691160053013091',
    publishTime: '2023-04-11T14:13:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/340088361_203245195760155_5625044582427267971_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qCyfnAHB4fkQ7kNvgFYFJLA&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AlpbJrh9swE9shsKu1FU20_&oh=00_AYB8Wb5lMCbygvCG2vAYdfS6WJawyYDxfOHiVGv5UZsdWA&oe=679DDB0C',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a collage featuring a woman dressed as Batgirl in a vintage style. It includes three black-and-white photographs: the top left shows her posing with the Batgirl logo, the bottom left depicts her reclining on a couch, and the right image has her standing near a "No Parking" sign. She is wearing a classic Batgirl costume with a cape, mask, and emblem.',
  },
  {
    shares: 612,
    reactions: 6396,
    message: '',
    id: '54618571998_699884378807325',
    comments: 118,
    publishTime: '2023-04-22T18:11:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/342992712_752021916422737_6789683700791871755_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=m0YnW9o3K3cQ7kNvgGFRgDb&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A7jDnAwd5xQtUEgw6tdzuym&oh=00_AYBuSe-7xS0zvtYxgPWiEZGUm8YUBmea2kZvcPvUr7mxxQ&oe=679DDFF4',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book page depicting Spider-Man holding up a large platform on which several Marvel superheroes, including Thor, Hulk, Namor, and The Thing, stand. They appear to be demonstrating strength. Spider-Man makes a humorous comment about strength, and the image includes dynamic comic book art and speech bubbles.',
    postUrl: 'https://www.facebook.com/54618571998_699884378807325',
    totalEngagement: 7126,
  },
  {
    message: '',
    id: '54618571998_10152594025766999',
    publishTime: '2014-09-04T04:02:50+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/472184029_10162107414541999_7885154922471341700_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=HZE1xHpoFJAQ7kNvgGXel5o&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AdK6mObvCHN-wGuDt2bglGd&oh=00_AYBQ2g7pnUxjQxPFt5Ir0xD8NhfdiNwz1PPbyOuudYZXEw&oe=679DE2D3',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a humorous text about crime and violence being blamed on removing phone booths, leaving Superman without a place to change.',
  },
  {
    message: 'by Alex Ross',
    id: '54618571998_847004934095268',
    publishTime: '2023-11-15T14:27:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/401717481_846647414131020_5258747170244430710_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=CndyQ9SDMg8Q7kNvgEkQgsk&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A1JMZmQ38AIeooTJbQ1QLY-&oh=00_AYBFPFyB9iqkvkqdD1pNmsHklE2iJWp2p0eGlGoiOQlDpw&oe=679DE563',
    status: 'SCHEDULED',
    imageDescription:
      'The image depicts a stylized illustration featuring Superman flying over the Batmobile with Batman and Robin inside. Batman is driving, while Robin waves. The scene has a classic comic book aesthetic.',
  },
  {
    message: 'Phantom (Gold Key) #1',
    id: '54618571998_865325205596574',
    publishTime: '2023-12-12T22:03:05+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/410667254_865279035601191_6301335781213706325_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NBHmIZKHvjwQ7kNvgEqD3W9&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AZzrPS-zIeddYgAHtM6T8Z1&oh=00_AYCmPUeAoHwUvST14Vs1vQm-f74b6jk5yTF6x8HkOmx5Yg&oe=679DE43E',
    status: 'SCHEDULED',
    imageDescription:
      'This is the cover of "The Phantom" #1 comic book by Gold Key, dated November 1962. It features "The Phantom" on a white horse, accompanied by a dog, set against a dark background. The text indicates it was an issue with the origin of Phantom. The comic is graded 7.5 by CBCS and priced at 12 cents.',
  },
  {
    shares: 612,
    reactions: 6286,
    message: 'Detective Comics #484 (June-July 1979) by Jim Aparo',
    id: '54618571998_924007073061720',
    comments: 128,
    publishTime: '2024-03-04T22:24:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/431310013_923539943108433_8910132129266040002_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Hy-kv3EJLS4Q7kNvgE0Delc&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANKEXX0ECxPXGcj1EQ1GtNe&oh=00_AYDGmW72PRbf3jctfk7pbnual6VlH9whyGT_W54vhnJkxA&oe=679DE4EB',
    status: 'PUBLISHED',
    imageDescription:
      'This image features a group of iconic super-villains gathered around a table. The central figure, a grinning villain in a purple suit, gestures towards a poster of a superhero marked with a red \'X\'. The group appears to be celebrating, holding glasses and surrounded by tools of mischief. Text above them reads "Sinisterly yours, The Super-Villains!".',
    postUrl: 'https://www.facebook.com/54618571998_924007073061720',
    totalEngagement: 7026,
  },
  {
    message:
      'Classic Comic - Batman #42 (1947) - 1st Catwoman cover in Batman title. Bill Finger story. Jack Burnley and Charles Paris cover.',
    id: '54618571998_774768401318922',
    publishTime: '2023-08-01T17:10:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/363381629_774432914685804_5151235440723583476_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cR4VW_tOCwkQ7kNvgGXzI3A&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ap-gkw9jU2HMot4HcT8m766&oh=00_AYCXnW2taSxYjh2qPO7JvB4ZeTXmF8qhv2Q-DAHrLGWncw&oe=679DD438',
    status: 'SCHEDULED',
    imageDescription:
      'This is a vintage Batman comic book cover. It features Batman and Robin in action, confronting Catwoman, with her name highlighted. The cover text mentions a 52-page magazine and is priced at ten cents.',
  },
  {
    shares: 835,
    reactions: 5666,
    message: 'I love these old comic book ads',
    id: '54618571998_775368734592222',
    comments: 358,
    publishTime: '2023-08-02T13:33:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/364105068_775108077951621_6118932906714371603_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=MqXjjS_nPUIQ7kNvgFlaYVc&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ap-gkw9jU2HMot4HcT8m766&oh=00_AYChpQ4w8IZVfBFoFxE328QXvpOkvao0L3_F5SqQbcy0ow&oe=679DE785',
    status: 'PUBLISHED',
    imageDescription:
      'The image is an advertisement for "Captain Action," a versatile superhero character who can transform into different heroes by changing his face mask and uniform. The ad highlights nine superhero identities, including Superman, Batman, Captain America, and others. The central theme is the character\'s ability to change into various heroes for diverse adventures, featuring illustrations of the different costumes and gear available.',
    postUrl: 'https://www.facebook.com/54618571998_775368734592222',
    totalEngagement: 6859,
  },
  {
    message: "Don't make us bring out the Vacuum cleaner",
    id: '54618571998_1000546062074487',
    publishTime: '2024-06-20T14:11:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/448753181_1000311308764629_5269207234678391789_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cgzHCLjD1YUQ7kNvgHB-0pl&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A5CA6tOWVD1GZib3gPCUFAO&oh=00_AYA_TGBEP5aD_9ZepiYhkTWr9AzEgy8wEizD9jAPDKriMg&oe=679DF24D',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      "The image depicts a scene with Superman standing confidently, hands on hips, facing three bald individuals pointing a device at him. The setting is an outdoor area with a building and trees in the background. The scene is in black and white, suggesting it's from a classic film or television show.",
  },
  {
    message:
      'Classic Comic - X-Men #35 (1967) - Spider-Man cover and crossover.1st appearance of the Changeling. Banshee appears. Dan Adkins cover',
    id: '54618571998_772131508249278',
    publishTime: '2023-07-28T20:16:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/363336432_772121958250233_2036565205111007138_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=x8gm52f7ltAQ7kNvgGi_yZG&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AxJt4ThoRXUxba1szmG7ZRv&oh=00_AYBqXgGtzVfpHJ_-f_ESrE9NJWre_kab4wgqBhTka9bjcw&oe=679DEB4B',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a vintage comic book cover of "The X-Men" issue #35. It features a large depiction of Spider-Man swinging across the scene as the X-Men react in surprise. The cover is colorful, with a prominent title and the tagline "Along Came a Spider!"',
  },
  {
    message:
      'Classic Comic - Tales to Astonish #93 (1967) - 1st full Silver Surfer appearance outside of Fantastic Four. Classic Hulk vs. Silver Surfer cover and story. Cover by Marie Severin and Frank Giacola',
    id: '54618571998_770209715108124',
    publishTime: '2023-07-25T22:17:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/362246522_770195321776230_8570931812451911399_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=b-8YWGJEy9kQ7kNvgFmrCtP&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AxJt4ThoRXUxba1szmG7ZRv&oh=00_AYArryTtA-4vCu1GjZy0WewxpcY6TFJ1Npum6UNxmGjScQ&oe=679DD894',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a comic book cover titled "Tales to Astonish" featuring "The Incredible Hulk" and "The Sub-Mariner." It prominently shows the Hulk on the left in a dynamic pose and the Silver Surfer on the right, standing on his surfboard surrounded by flames. The text reads, "He who strikes the Silver Surfer!" The comic is from Marvel Comics Group, priced at 12 cents, and marked with the number 93.',
  },
  {
    message: 'Art by Alex Ross',
    id: '54618571998_563542072441557',
    publishTime: '2022-11-14T20:16:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/315555909_563074675821630_5955647694191381298_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5A6_s7_ph80Q7kNvgHp7U9z&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A7gmLxgbDZG7FYGKKO6ARpD&oh=00_AYDuHh8GShRXwKX0HqxSjLYfq2jt6bOwdXvUfmp1CXr57g&oe=679DEBDF',
    status: 'SCHEDULED',
    imageDescription:
      'The image depicts a stylized scene of Superman flying above the Batmobile, which is being driven by Batman with Robin as a passenger. It captures a vibrant, comic book-style dynamic between these iconic characters.',
  },
  {
    message: 'lol',
    id: '54618571998_947761474019613',
    publishTime: '2024-04-07T17:19:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/436732634_947435437385550_8757020877926401578_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Awe2N1TULboQ7kNvgEcCAkd&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AgWySNYoCQdWM2hsmdj80hA&oh=00_AYBXo5X4byI3_o1ey8s-PtkvLXwmhqzcPGL5bJlSHTYMvA&oe=679DC272',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic-style scene featuring various superheroes on a rocky alien planet. A prominent hero in a white suit with a cape confronts a woman in a superhero costume, asking sarcastically, "What do you mean you couldn\'t see me approaching?" The background includes a crashed spaceship and planets visible in the sky, with other superheroes reacting to the situation.',
  },
  {
    message: 'Phantom by Joe Jusko',
    id: '54618571998_926097852852642',
    publishTime: '2024-03-07T22:27:05+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/431338965_923579006437860_8316976871972895504_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-PvPVwQs8kMQ7kNvgFZH49P&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANKEXX0ECxPXGcj1EQ1GtNe&oh=00_AYCquniZHbYudVfOY9uV87lgC3QXPcZhnX0iLB1vKjyrpg&oe=679DCA67',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'A masked superhero wearing a purple costume rides a white horse through a jungle, wielding two pistols. A snarling black wolf accompanies them. The scene is dynamic and set against a backdrop of lush vegetation and ancient ruins.',
  },
  {
    message:
      'Classic Comic - Batman #32 (1946) - Joker Story. Origin of Robin retold. Sprang cover',
    id: '54618571998_775412451254517',
    publishTime: '2023-08-02T14:51:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/364043647_775103407952088_4620464340267223801_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8foiGz7wYtwQ7kNvgFIbGli&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ap-gkw9jU2HMot4HcT8m766&oh=00_AYDoruvZ4is4aviNmS7e34TBsBddrfR-1aOrERrCbLUXJw&oe=679DEB5A',
    status: 'SCHEDULED',
    imageDescription:
      'This is the cover of "Batman" comic issue No. 32, featuring Batman, Robin, and a musketeer under the title "A 52-Page Magazine". It was published by DC and costs ten cents. The artwork highlights an adventure involving "The Three Musketeers."',
  },
  {
    message: 'the memories',
    id: '54618571998_725793336216429',
    publishTime: '2023-05-26T14:11:05+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/349158520_1242901556332632_3086570657647432494_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yvTS97iMI2UQ7kNvgFVxnPL&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ArYh5GykvSY8MnqKvLRRkWA&oh=00_AYA2hTdA1DnE12yDzVfc6fRAa5UUIQ0ppBWwiAmhLsjXoQ&oe=679DE561',
    status: 'SCHEDULED',
    imageDescription:
      'The image shows a black and white photograph of a comic book rack in a store. The rack is filled with various comic books, including titles like "Mystic," "Jatt Slade," "Casper," "Woody Woodpecker," and others. The comics are arranged standing up, displaying their covers prominently.',
  },
  {
    message: 'by @Kerry Callen',
    id: '54618571998_832262322236196',
    publishTime: '2023-10-24T06:58:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/395741824_832143688914726_3046763194987438255_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tSi-B1Xi4s4Q7kNvgE2Q8EB&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AvEhpGDi1HQFkGgpMJudFl6&oh=00_AYCB88M39zPw_HDYlvvOSyuwSXVrncC0xgJJnb5Ry9cGHQ&oe=679DDC34',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic strip titled "Super Antics #16." It humorously depicts superhero characters in a meeting. A character dressed as Superman attracts everyone\'s attention with his unusual behavior due to exposure to a red kryptonite cloud, which turns him into an insect-like version. Another character in a dirty costume jokes about laundry issues. The strip ends with a character bursting in, apologizing for being late. The overall tone is comedic and playful.',
  },
  {
    shares: 630,
    reactions: 5917,
    message: 'By Alex Ross',
    id: '54618571998_699040515558378',
    comments: 112,
    publishTime: '2023-04-21T14:14:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/342549694_954459065988180_8707600342797867560_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JqF7kEU-DCAQ7kNvgH3lnfV&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A7jDnAwd5xQtUEgw6tdzuym&oh=00_AYBDQph_GjTA6eKX9NjcDzMnkK-WAappilsuWn6F8bDgPg&oe=679DE82F',
    status: 'PUBLISHED',
    imageDescription:
      'The image depicts a stylized painting of four iconic superheroes in a heroic pose, with an American flag backdrop. The characters appear determined and are clad in their classic costumes.',
    postUrl: 'https://www.facebook.com/54618571998_699040515558378',
    totalEngagement: 6659,
  },
  {
    message:
      'Classic Comic - Alpha Flight #17 (1984) - X-Men appear. X-Men #109 cover swipe, John Byrne Story, cover and art',
    id: '54618571998_787461693382926',
    publishTime: '2023-08-19T20:11:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/368215306_787171973411898_4593349166620979827_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=snlGhfz_elYQ7kNvgHlMWYp&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYBwoxUTY1HxqRroVjsMBpTLD_dj1TnC7q8Q8lIIc-dAXQ&oe=679DEEA6',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is a comic book cover for "Alpha Flight" issue #17. It features a dynamic battle scene with characters from Alpha Flight and the X-Men, including a figure in a red and white suit striking another character. The cover mentions, "The X-Men and Alpha Flight: How They Met and What Happened Later" and highlights "Plus: A New Leader?" Marvel Comics branding is visible in the top left corner.',
  },
  {
    message: 'Fantastic Four by John Byrne',
    id: '54618571998_749840860478343',
    publishTime: '2023-06-27T16:15:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/356436128_749534210509008_140484134536156336_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=89TkhLMhrGsQ7kNvgHXXpm7&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ASXWjd5_HguOydGi6Cp1YcZ&oh=00_AYDqCeoOAc39D3lOB8vy0vcSEpQWwZ2nrTd1oKw6mAT7vw&oe=679DEB50',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      "The image is a comic-style illustration featuring the Fantastic Four: the Human Torch (Johnny Storm), Invisible Woman (Sue Richards), the Thing (Ben Grimm), and Mister Fantastic (Reed Richards). They're posing together with Franklin, who is holding action figures. Each superhero has a handwritten note next to them. The setting looks like a casual, friendly scene, emphasizing their team dynamic.",
  },
  {
    message: 'Art by Art Adams',
    id: '54618571998_1155292593266499',
    publishTime: '2025-01-08T22:27:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/472786189_1154879213307837_1877570649700640864_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Dz8eIAoK_vcQ7kNvgHvlY4m&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A3DA4TIa7W0Y0Ersp1m0Znm&oh=00_AYB5LAOSJQfJszzk0igU1ohubUddjP6Ho8ZsfgCFNfem2A&oe=679DE333',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image depicts a group of fantasy characters, including a muscular figure with a sword at the center, standing in front of a castle with a skull motif. The group consists of various colorful, armored characters and a large, green creature, some wielding weapons and others possessing mystical or mechanical elements. The setting is a rocky, mountainous landscape with a dramatic sky in the background.',
  },
  {
    message: 'such great cartoons',
    id: '54618571998_1113434530785639',
    publishTime: '2024-11-15T17:11:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/466415334_1112795440849548_8521371910653946441_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Cc87w7u8Z-8Q7kNvgFQ41fp&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFT13vH4zv0T-yKWrS8kNws&oh=00_AYAJ09wypPWCSUBZREdvQ9KQ_jE1FuqqoCuqpBZB1SYbGA&oe=679DDC0C',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a promotional poster for the "Marvel Super-Heroes 1966 Cartoon Series" featuring five characters: Sub-Mariner, Thor, Hulk, Iron Man, and Captain America. Each character is illustrated with their distinctive costumes and poses, surrounded by text highlighting their names. The "Marvel Comics Group" logo is prominently displayed in the center.',
  },
  {
    message: 'Space Ghost by Alex Ross',
    id: '54618571998_796227859172976',
    publishTime: '2023-09-02T13:48:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/374543824_796034045859024_116255615334827586_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mIqLcPzIvN4Q7kNvgFV2_La&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYDt59LmHs1FJmGke_zBmPKzAQtVuGglG5rV-VSEg8drDQ&oe=679DD05A',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image depicts a superhero flying through space with a determined expression, projecting fiery energy from his fists. He is surrounded by futuristic spacecraft and a starry background, conveying a dynamic and action-packed scene.',
  },
  {
    message: '',
    id: '54618571998_664684045660692',
    publishTime: '2023-03-08T15:23:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/334604903_768697701484911_5951627405490181232_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ftSrT6MQdagQ7kNvgHjK6-a&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AxjXGRI5F_kLVcGnmbzoU2h&oh=00_AYA1-B9F_Fd4jGok_HENPTNlJBB3j4fi2RMNZ4dhXQXXGA&oe=679DF1EB',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image shows a cartoon character with a winged helmet, holding a hammer, looking up towards another character flying down on skis. In the background, there is a stylized cityscape set against a dark sky with a colorful ground surface.',
  },
  {
    message: 'Space Ghost by Alex Ross',
    id: '54618571998_729671522495277',
    publishTime: '2023-05-31T18:15:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/350141251_2169469893247823_6003465839248226105_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ELngdzkYC4cQ7kNvgHG0sT6&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDWRC2mfkXFbh8H3P2JVBd&oh=00_AYB7n6YbzXtYO4Zq8tvw-pqlO33eKsPtbXg0fkpf68BPtw&oe=679DD0B1',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A superhero in a mask and cape flies through space with flaming fists, surrounded by futuristic spacecraft and stars.',
  },
  {
    message:
      'Classic Comic - Silver Surfer #4 (1969) - Thor & Loki Appear . Cover by John Buscema',
    id: '54618571998_664804685648628',
    publishTime: '2023-03-08T18:21:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/334811090_773286817178078_2532417191295654623_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_BB2KGFCVLwQ7kNvgH0kgHi&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AxjXGRI5F_kLVcGnmbzoU2h&oh=00_AYCqovZTkbkJyE54IJE8AmFCUNXLBweRGPlynt2sZLgZLQ&oe=679DD617',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic book cover titled "The Silver Surfer" issue #4. It features Silver Surfer flying on his surfboard and approaching a character with a hammer, wearing a red cape and blue outfit, set against a cosmic backdrop. The series is published by Marvel Comics.',
  },
  {
    message: '',
    id: '54618571998_1104085341720558',
    publishTime: '2024-11-03T18:49:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/465139403_1102947328501026_2148938085943790789_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=iQbO-U4lk3gQ7kNvgEysjl5&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad6wxUoh2wk8IsbdMQixRCG&oh=00_AYD2uA8mCnuD9rAxrZ54jg3ObZ1Kix2yf_iORlJ_urJuNg&oe=679DC9A5',
    status: 'SCHEDULED',
    imageDescription: 'A group of superheroes stands on',
  },
  {
    message: 'lucky Robin',
    id: '54618571998_921793039949790',
    publishTime: '2024-03-01T14:12:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/428650247_917567693705658_8441215155105890120_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DLMKHNAVRkgQ7kNvgHzXsd2&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AMiFh2EetwMb3aS1X1CyXj0&oh=00_AYArJASHeMr3EghZKK_zI5tef1SO2eg10P8v7kIMY3CCRQ&oe=679DCE20',
    status: 'SCHEDULED',
    imageDescription:
      'The image shows two individuals wearing costumes. One is dressed as Catwoman, with a black mask and cat ears, while the other is dressed as Robin, identifiable by the red and green outfit with an "R" emblem and a black mask.',
  },
  {
    message: 'Crossover Classics tpb cover art, 1991 By George Perez',
    id: '54618571998_712993184163111',
    publishTime: '2023-05-09T18:17:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/344843972_751146283419252_1166608609486952553_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=KD6HvVOpiBcQ7kNvgHh2NbB&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AvTk5bmSziIvFA13hRBimly&oh=00_AYDsBr8nOw6oPjI6PaziluNzPhRAyGUvPmk_avtB0YHkUA&oe=679DCC4E',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a comic book cover titled "Crossover Classics: The Marvel/DC Collection," featuring Marvel and DC superheroes like Superman, Spider-Man, and the Hulk in dynamic action poses against a cosmic background.',
  },
  {
    message: 'by Alex Ross',
    id: '54618571998_800440308751731',
    publishTime: '2023-09-08T21:17:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/376839701_800065365455892_660106624798518440_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HI0FdVhFER8Q7kNvgFGq3jR&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYCFrYaDiU7fOAyWlY1feQPuaKhKl92arbgyCPqsdavvXA&oe=679DD6F3',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A superhero in a blue suit with a red cape, featuring a red "S" shield logo on the chest, is sitting and surrounded by affectionate animals\u2014a horse, a dog, and a cat. The atmosphere is warm and friendly.',
  },
  {
    message: 'Yvonne Craig getting ready for work',
    id: '54618571998_670982525030844',
    publishTime: '2023-03-16T13:42:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/336548554_538655015022177_6554129841786518543_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=41Mq9aqbM_gQ7kNvgEld3ZN&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AxjXGRI5F_kLVcGnmbzoU2h&oh=00_AYAuzO0iJHrGfP1BkFZxaoh-aF6frWN5BF8ujXM8SdSypw&oe=679DE567',
    status: 'SCHEDULED',
    imageDescription:
      'A person dressed as Batgirl is adjusting their mask in front of a mirror. They are seated at a vanity table with various items, including cosmetics and a stuffed toy. The costume features a bat emblem on the chest, a cape, and a headpiece with bat ears. The scene is in black and white.',
  },
  {
    message:
      'Classic Comic - Tales to Astonish #93 (1967) - 1st Full Silver Surfer Appearance Outside of Fantastic Four. Classic Hulk vs. Silver Surfer Cover & Story!. Cover by Marie Severin and Frank Giacoia',
    id: '54618571998_834818941980534',
    publishTime: '2023-10-27T19:35:29+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/395517862_834813871981041_3216039567688863311_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ybm9vD7dM3sQ7kNvgH9fJaj&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=APJaJCyVrXvQdQbZ44Kmjb9&oh=00_AYCUa-W32fpcS8pYXvLpUZHDXJVTiixfUu-aXshjAqW4Bw&oe=679DE668',
    status: 'SCHEDULED',
    imageDescription:
      'This comic book cover features the Hulk reaching towards the Silver Surfer, who is surfing on flames. The title is "Tales to Astonish" issue #93, with both Hulk and Sub-Mariner mentioned. The cover displays dynamic action with a tagline: "He who strikes the Silver Surfer!"',
  },
  {
    message: 'The Bat-cycle',
    id: '54618571998_1134425732019852',
    publishTime: '2024-12-12T15:12:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/469969830_1134197255376033_7845423295108189333_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=02Cz1wNHvGsQ7kNvgFLgV26&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ApXEvBg0bIfUdm-NblRBs-a&oh=00_AYCSaGmfxvCzpbUZIwM_MaWCENU6mEfvEfs4nERQ95yQdw&oe=679DED1E',
    status: 'SCHEDULED',
    imageDescription:
      'A person in a Batman costume is riding a sleek black motorcycle with bat-themed designs. The motorcycle is parked on an open road, and the costume includes a cape, helmet, and utility belt.',
  },
  {
    message: 'what a great movie this could have been',
    id: '54618571998_765369055592190',
    publishTime: '2023-07-18T13:17:05+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/359804284_764526302343132_8831434963470250968_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nD-MUra_A1YQ7kNvgFGCi3d&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ATc73HRWyp02Z-tyObKGEZm&oh=00_AYCpGSEq5ba8wHZr7CdUT7_n3WKOAgRYrTcBqXesILydSg&oe=679DCD1E',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image features four iconic superhero characters in a retro, neon-lit digital landscape. Two female characters, wearing Greek and American-inspired costumes respectively, stand in the foreground. Above them, two male superheroes in capes soar across the sky.',
  },
  {
    message: 'By Alex Ross',
    id: '54618571998_632726155523148',
    publishTime: '2023-01-30T19:27:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/327611238_882722882935919_1716855829937593387_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Jd4Dk9O7x74Q7kNvgGGHzog&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Alupxj5DpbCH-SJ9oxPO6Md&oh=00_AYAUeAw8LFK74R2a-gkZqEa2q7Nq-xjvdd5W7G_PCRuChA&oe=679DEFF0',
    status: 'SCHEDULED',
    imageDescription:
      'A superhero character in a yellow suit and black mask is flying through space with fiery energy blasting from their fists. The background features futuristic spacecrafts and structures, enhancing the cosmic action scene.',
  },
  {
    message: 'time for cartoons',
    id: '54618571998_820268013435627',
    publishTime: '2023-10-07T13:38:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/386330567_820150896780672_710887299997498075_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-v28dT3GPnQQ7kNvgHcu3kP&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AT-0UBkoD-77dQORts4-Ugl&oh=00_AYC8RdeSlWJ9kUamN5eMvYmwmmmjCsJmV98oQaPQG2JFgw&oe=679DF1A6',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image shows the Pink Panther standing confidently with arms crossed, while Inspector Clouseau examines pink paw prints on the ground with a magnifying glass.',
  },
  {
    message: 'Yvonne Craig',
    id: '54618571998_769953381800424',
    publishTime: '2023-07-25T13:14:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/362690722_769658985163197_3681071187942016622_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lj4gZyxuujYQ7kNvgHaqAtT&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AxJt4ThoRXUxba1szmG7ZRv&oh=00_AYBQYBe_NPOfbWD_oI95CS1375eKMxpypzrydlVybFXyzQ&oe=679DD939',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'A person dressed as a superhero with a mask and cape stands beside a car, in a vintage, black-and-white photograph.',
  },
  {
    shares: 405,
    reactions: 5761,
    message: 'Batman by Bruce Timm',
    id: '54618571998_1102458415216584',
    comments: 42,
    publishTime: '2024-11-01T16:22:24+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/464788966_1102168401912252_3836931375754946222_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BuxhMaBla8EQ7kNvgE9bVip&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad6wxUoh2wk8IsbdMQixRCG&oh=00_AYAPsC84vQ__fA1bWgzcpJGrT7bdo4Ze5SGJKi67k6oHVg&oe=679DD089',
    status: 'PUBLISHED',
    imageDescription:
      'The image shows a stylized illustration of Batman standing on a building ledge, overlooking a cityscape with tall skyscrapers. The sky is a dramatic red and orange, giving a sense of dusk or dawn. Batman is depicted in his classic costume, with a cape billowing in the wind.',
    postUrl: 'https://www.facebook.com/54618571998_1102458415216584',
    totalEngagement: 6208,
  },
  {
    message: 'Marvel Poster by John Buscema',
    id: '54618571998_755884953207267',
    publishTime: '2023-07-05T16:11:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/357409718_755523989910030_3761298915311846939_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yvRErewLPywQ7kNvgHD4Qj0&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AS1qGJsq0Z9ZgV8qfukSk_U&oh=00_AYDaTCFb80gHpdsFpNZsHUtGzaEjIJ6LNzExmDNyrwK_UA&oe=679DE822',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      "A colorful illustration featuring a large ensemble of iconic Marvel superheroes and villains in dynamic poses, showcasing characters such as Spider-Man, Thor, Iron Man, and the Hulk, among others. The artwork is vibrant and detailed, capturing the essence of Marvel's classic comic style.",
  },
  {
    message: '',
    id: '54618571998_740452781417151',
    publishTime: '2023-06-14T14:07:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/353817934_740196831442746_4590482156945809832_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yOIVc8RgS6YQ7kNvgGR_Sip&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ANf0kMIeMC_mKos2kMEjn4q&oh=00_AYDIumeRdUl0SpgpnsM34dsKtEKNYe7WxwE7bOARDtdjvg&oe=679DE03C',
    status: 'SCHEDULED',
    imageDescription:
      'The image features a comic book cover of "The Amazing Spider-Man," with text acknowledging John Romita. It shows artwork of Spider-Man and the Green Goblin, with a portrait of John Romita overlaid and a thank you message below.',
  },
  {
    message:
      'Classic Comic -  Star Trek #1 (1967) - 1st Star Trek comic book. Nimoy , Shatner and Takei photo cover. Shatner pin up back cover. Nevio Zaccara art',
    id: '54618571998_783429190452843',
    publishTime: '2023-08-13T21:01:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/366826672_783380423791053_369219552698725452_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ik2Pgn3uMbkQ7kNvgHGwSmx&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFmhw3kNsmh72LjrMEnX1-g&oh=00_AYC2fWUmD3sjzZwYGbcWXyCROjYq5jDOZdRigh12XivuNA&oe=679DC334',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a vintage "Star Trek" comic book cover by Gold Key. It features a prominent character holding a flask, alongside other characters and a starship. The text reads: "An expedition team discovers its secret\u2014too late... K-G, Planet of Death!" The comic is priced at 12 cents.',
  },
  {
    message: 'The Original Munsters',
    id: '54618571998_957783656350728',
    publishTime: '2024-04-21T17:06:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/439338947_957416316387462_1172057878764014895_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zhbn5czyfxoQ7kNvgFd4jIb&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ayhl-RshheSPztt9I5rbYoz&oh=00_AYDzC0iM4s1hWReIT6JTvM4rTJqR7KX3z3hsSBBoqF3oug&oe=679DCA11',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image features a classic black-and-white portrait of a fictional family with distinctive, Gothic-inspired appearances. The characters are dressed in vintage, theatrical costumes, embodying a quirky, monster-themed family dynamic.',
  },
  {
    message:
      'Classic Comic - Hawkman #4 (1964) - 1st appearance and origin of Zatanna. Murphy Anderson cover',
    id: '54618571998_782064220589340',
    publishTime: '2023-08-11T18:51:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/365284706_782044370591325_8543128667562057173_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UPe3gQFFMXkQ7kNvgFnzk4Z&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFmhw3kNsmh72LjrMEnX1-g&oh=00_AYB-8QWUaKCFUjQl5AFI-o6SwhoL9C2tVQzZRqKMDgdQBg&oe=679DC327',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image is a vintage comic book cover featuring Hawkman. He is depicted flying with large, outstretched wings above a cityscape. The title "Hawkman" is prominently displayed at the top. A yellow box on the right side mentions the story: "The Machine That Magnetized Men!" Hawkman has visible muscles, wearing a helmet with a red emblem, and the overall color scheme includes bright yellows, reds, and greens.',
  },
  {
    message:
      'Classic Comic - Thor #168 (1969) - Origin of Galactus. Cover by Jack Kirby and Joe Sinnott',
    id: '54618571998_666645405464556',
    publishTime: '2023-03-10T20:22:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/334682695_766954708134691_1234376759760909674_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=s54oWptckkcQ7kNvgFphLlC&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AxjXGRI5F_kLVcGnmbzoU2h&oh=00_AYBEnPsyRAKmuH_etxAm9sp_OqR9JaRpku7-YYFuRKBgVA&oe=679DE843',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage comic book cover for "The Mighty Thor," specifically issue #168 from September, priced at 15 cents. It features Thor, holding his hammer, facing off against the colossal figure of Galactus. The text at the bottom reads "Galactus Found!" The cover is from Marvel Comics Group.',
  },
  {
    message: 'John Byrne in his studio',
    id: '54618571998_1159109732884785',
    publishTime: '2025-01-13T19:09:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/473619275_1158707359591689_6861515682972884366_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=T58nYmPEaREQ7kNvgF-aqUh&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AuRRKEzoP2P4qCBWI7mg21G&oh=00_AYAC1AOS3IQE2QRKZCdvZkxge8NeZjIgE3GCFrfwbXLulw&oe=679DBF20',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      "A person is holding a detailed, black-and-white comic book artwork. The background is filled with framed comic pages and shelves of books and action figures. A model airplane hangs from the ceiling. The scene has a creative and collector's vibe.",
  },
  {
    message: 'still the best',
    id: '54618571998_715753450553751',
    publishTime: '2023-05-13T13:41:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/346494695_962703118411427_6602263199138412906_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ot4wbQvFi0cQ7kNvgHk5YYW&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AvTk5bmSziIvFA13hRBimly&oh=00_AYAMRcTdVAkN4vQukJ-Aoz_JRhqLwdTKAo7HO7eLIrH1DQ&oe=679DCE03',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image shows a person dressed in a shiny, black cat-like costume, complete with cat ears and a mask. They are leaning back with hands behind their head, looking relaxed.',
  },
  {
    shares: 689,
    reactions: 5301,
    message: 'Mighty World of Marvel poster by John Buscema',
    id: '54618571998_630084925787271',
    comments: 27,
    publishTime: '2023-01-27T17:27:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/327338391_1030441744579119_8903730287301744851_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-IQUqwt_gqMQ7kNvgHVxI_0&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Alupxj5DpbCH-SJ9oxPO6Md&oh=00_AYA4mKV-rjIwmz9Dj2v1hN2qx_-PoxuuXbP-Zbeq4ujYKg&oe=679DD833',
    status: 'PUBLISHED',
    imageDescription:
      "The image features iconic Marvel superheroes: Spider-Man swinging, the Human Torch flying in flames, the Hulk charging forward, and the Fantastic Four members\u2014Mr. Fantastic, Invisible Woman, and the Thing\u2014posing dynamically. It's a vintage comic-style illustration.",
    postUrl: 'https://www.facebook.com/54618571998_630084925787271',
    totalEngagement: 6017,
  },
  {
    message: 'Conan by Joe Jusko',
    id: '54618571998_750000960462333',
    publishTime: '2023-06-27T21:27:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/355874318_749531433842619_6892288599720412526_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4XzyTVf5WlgQ7kNvgFF5gjb&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AS1qGJsq0Z9ZgV8qfukSk_U&oh=00_AYDDSAH0YgCsGRKIzxWIRhHLnlzqDfe3zHzNwOY_Wr0fIA&oe=679DD333',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A muscular warrior stands triumphantly in a snowy mountain pass, holding a large axe. He towers over two defeated, red-haired opponents lying on the ground, surrounded by weapons and shields. The scene conveys a sense of power and conquest.',
  },
  {
    message:
      'Classic Comic - X-Men #35 (1967) - 1st appearance of the Changeling. Spider-Man and Banshee appear. Cover by Dan Adkins',
    id: '54618571998_746452557483840',
    publishTime: '2023-06-22T19:12:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/355104423_745394604256302_2239576665551445182_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=oDsI6FfKFo4Q7kNvgHUcKCK&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ASXWjd5_HguOydGi6Cp1YcZ&oh=00_AYDpvt_hPF_WCk-ZCHSHA_feLeUKlOPmOIcCdkkRUPLcyg&oe=679DF62F',
    status: 'SCHEDULED',
    imageDescription:
      'A vintage comic book cover featuring Spider-Man entangled in a net, surrounded by the X-Men. The title reads "The X-Men" with an emphasis on "Along Came a Spider!" in bold lettering. A character with a bald head is depicted above, using mental powers.',
  },
  {
    message:
      'Classic Comic - Secret Wars #10 (1985) - Iconic Dr Doom cover by Mike Zeck and Terry Austin',
    id: '54618571998_841334474662314',
    publishTime: '2023-11-06T21:11:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/399806151_841297881332640_3520419402950801352_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JpT4uBYmzdUQ7kNvgFmfA1l&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AR-VLF_t3tmBjH-A-DjzpPc&oh=00_AYB8M2Mk2PBJHPCzJBc9CqO-M-l11BseE81ovB2Un-DVqw&oe=679DEBD6',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image is a comic book cover titled "Marvel Super Heroes Secret Wars #10." It features a powerful, armored character in a tattered green cloak, aggressively advancing with clenched fists amidst a chaotic background. The text emphasizes a battle "Against the Beyonder...To the Death!"',
  },
  {
    shares: 877,
    reactions: 4947,
    message: 'Love these old comic book ads',
    id: '54618571998_733926478736448',
    comments: 160,
    publishTime: '2023-06-06T13:12:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/351166708_129485553483089_3342396786672776199_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_5WfwrRT0KAQ7kNvgGH3tDb&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANf0kMIeMC_mKos2kMEjn4q&oh=00_AYDnT98RNkxIOf9j4v6naSAPqmqiA2fIF4eGw1SAqDWtzA&oe=679DD145',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vintage comic-style advertisement for the "Corgi Batmobile" toy car. It includes colorful illustrations of the Batmobile with features like a chain cutter blade and a turbo-jet exhaust. Batman and Robin are pictured with speech bubbles, promoting the toy. The ad highlights Corgi Toys and encourages readers to join the "Corgi Model Club." Additional toy models, like James Bond vehicles and others, are featured at the bottom.',
    postUrl: 'https://www.facebook.com/54618571998_733926478736448',
    totalEngagement: 5984,
  },
  {
    message: 'by Alex Ross',
    id: '54618571998_1014682777327482',
    publishTime: '2024-07-09T18:10:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/450322942_1014204504041976_7560324670802921034_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XTF8zqqS-pAQ7kNvgE7rSyX&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ar-pLjOCTS9S8Pu2xAqhP0o&oh=00_AYDNW34234EGhHKy0O6OBhRU7udBD3REVsvXBxpjEM6txQ&oe=679DE530',
    status: 'SCHEDULED',
    imageDescription:
      'A man in a suit and hat is revealing a Superman logo underneath his shirt, looking into a mirror. His reflection mirrors the action, both showing the superhero symbol.',
  },
  {
    message: 'by Kerry Callen',
    id: '54618571998_755938709868558',
    publishTime: '2023-07-05T17:47:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/358070178_755616016567494_8654471852564405262_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aZV3bPapvZEQ7kNvgHPmXy-&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AS1qGJsq0Z9ZgV8qfukSk_U&oh=00_AYDBZqtamiFhT5Wl1qaXNf_vgCpvgZ4biw6IfBHRjr2OcA&oe=679DD323',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'In the comic titled "Super Antics #2," a woman shopping at a store claims her son has been replaced by a stranger. A superhero investigates and discovers through X-ray vision that the son is wearing fake glasses and a nose, revealing he hasn\'t been replaced. They all laugh at the misunderstanding.',
  },
  {
    message: 'always time for a good TV show',
    id: '54618571998_976501854478908',
    publishTime: '2024-05-17T14:02:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/443699272_976235294505564_5074802351272022153_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=SK7FgtrB_nMQ7kNvgGSWhYE&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AM7rvDZZyH8PLOHuLO-yzzj&oh=00_AYDDnsDPdIvciN2UXq_1bnRdGzfJwg_ERivDdTZvUgu0Gg&oe=679DBE64',
    status: 'SCHEDULED',
    imageDescription:
      "The image depicts a person dressed in a classic Superman costume standing beside a car that's partially lifted off the ground, with a rocky backdrop and a tree visible nearby.",
  },
  {
    message: 'From Iron Man 122 by Carmine Infantino',
    id: '54618571998_799702378825524',
    publishTime: '2023-09-07T18:32:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/376699698_799661958829566_526086506151057546_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=B-TqDC1Vz5UQ7kNvgEVGU1V&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYAmUuig-zk3JD_D9JbbbfVAJpGBv18MYO__YP1awW29tQ&oe=679DDB35',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is a comic book page featuring Iron Man in various suits of armor. It illustrates his evolution and role as a superhero, battling alone or as part of a team. The background panels show him with other superheroes and engaged in a battle. Text boxes narrate his journey and technological advancements.',
  },
  {
    message:
      'Classic Comic - Avengers #103 (1972)  -  Avengers battle the  Sentinels. Cover by Don Heck and Joe Sinnott',
    id: '54618571998_789422633186832',
    publishTime: '2023-08-22T22:21:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/368347433_788700189925743_8052367704794738796_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xyL15WP1GEYQ7kNvgEGzUeD&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYDvisO7_7IpsJaC1BkllTIEoRIneEM0SIJZ7MasImAeTw&oe=679DC887',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a cover of "The Avengers" comic issue #103 from September, featuring various superheroes, including Captain America and Thor, battling a large Sentinel. The prominent title reads "THE SENTINELS STRIKE!" in bold letters at the bottom. The cover is colorful and action-packed, typical of classic comic book art.',
  },
  {
    message: 'Marvel Poster with Fantastic art by John Buscema',
    id: '54618571998_1164712262324532',
    publishTime: '2025-01-20T19:10:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/474561186_1164701602325598_364395154850061191_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3a3q6lyRrAkQ7kNvgED_JxG&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AAaNRiWBPub3ip85cXc82r4&oh=00_AYDdUyQlxB3NQsKG1F9npoVz6v70HoN_CshC-5x2JenYiw&oe=679DCD73',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vibrant collage of Marvel superheroes and villains from comic book art. Characters like Spider-Man, Hulk, Thor, and Captain America are prominently featured, showcasing a dynamic and action-packed design typical of classic comic book covers.',
  },
  {
    message:
      'Classic Comic - Fantastic Four #72 (1968) - Silver Surfer and Galactus appear. Iconic Silver Surfer cover by Jack Kirby',
    id: '54618571998_631812422281188',
    publishTime: '2023-01-29T20:22:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/327806154_5931734790227794_8212903767419401807_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2hy94-mmQvEQ7kNvgHmHdSZ&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Alupxj5DpbCH-SJ9oxPO6Md&oh=00_AYBoZSj0nwt2xrdCs1D3JfNYtpjr43uZL5KGshTto7FNNw&oe=679DF481',
    status: 'SCHEDULED',
    imageDescription:
      'This is the cover of a comic book titled "Fantastic Four," featuring the Silver Surfer prominently. The background has a cosmic theme with abstract red and black patterns, and a large figure\'s face in red behind the Surfer. The issue is from March, priced at 12 cents, and part of the Marvel Comics Group.',
  },
  {
    shares: 552,
    reactions: 5292,
    message: 'Spider-Man and the Fantastic Four by Mike Mayhew',
    id: '54618571998_793824576079971',
    comments: 27,
    publishTime: '2023-08-29T21:29:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/370550424_793702682758827_1724193447016858051_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=21Qw4s-ZNEQQ7kNvgGT4wQu&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFPZWKt5JZ1PFEs5yzutf_Z&oh=00_AYAadaU65OTzaqMq0Hxw_rfDT1umDFxLkMP5r2dscTG58g&oe=679DD829',
    status: 'PUBLISHED',
    imageDescription:
      'The image features Spider-Man and the Fantastic Four (Human Torch, Invisible Woman, Mr. Fantastic, and The Thing) in a dynamic pose in front of the Eiffel Tower.',
    postUrl: 'https://www.facebook.com/54618571998_793824576079971',
    totalEngagement: 5871,
  },
  {
    message:
      'Classic Comic - Batman #122 (1959) -  Batwoman cover and appearance. Stories by Bill finger. Cover by Curt Swan',
    id: '54618571998_665674142228349',
    publishTime: '2023-03-09T20:23:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/334783264_620731913230409_1344655967951789451_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nly_trmSCVUQ7kNvgH-jieA&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AxjXGRI5F_kLVcGnmbzoU2h&oh=00_AYBa2FiGqw-EZ2Xp9mtGqAVFwtnz5E0IahzIxUy265FhPg&oe=679DDD4F',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a comic book cover featuring Batman and Batwoman standing together in a wedding scene, titled "The Marriage of Batman and Batwoman!" Robin is in the foreground, looking surprised, with a speech bubble saying, "Gosh! What\'ll become of me now?" The cover is colorful, with an illustration of an archway and a crowd of onlookers.',
  },
  {
    message: 'remember hes just a teenager',
    id: '54618571998_853952453400516',
    publishTime: '2023-11-25T19:42:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/405780217_853878030074625_8387879535883263104_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6B34Zn8b1g8Q7kNvgFz53g_&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad1ff1s2cBGYM0_gvSA37EV&oh=00_AYBTAiwBqWIhJcWUz94B7WE0uOTyiXAzch5wzVxkpgMfQQ&oe=679DD7DA',
    status: 'SCHEDULED',
    imageDescription:
      "The image is a comic book panel featuring Spider-Man lifting a large platform on which several prominent Marvel superheroes, including Hulk, Thor, and the Thing, are standing. Spider-Man is remarking on the experience, and the text highlights the artist Larry Lieber's contribution to Spider-Man comics.",
  },
  {
    message: 'The DC Heroes Super Ski show at Sea World circa mid 1970s!',
    id: '54618571998_834666275329134',
    publishTime: '2023-10-27T14:22:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/397039515_834398865355875_1620639313764417616_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=U9W68WtumckQ7kNvgHIta-4&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AvEhpGDi1HQFkGgpMJudFl6&oh=00_AYAbNlMzZ00RujIjcqObfehkgUIplg78wehIObFzggVfmQ&oe=679DE543',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'A group of people dressed as superheroes are performing a pyramid formation while waterskiing. They are holding American flags and skiing on a water surface.',
  },
  {
    message:
      'Classic Comic - Tales to Astonish #93 (1967) - 1st Full Silver Surfer Appearance Outside of Fantastic Four. Classic Hulk vs. Silver Surfer Cover & Story!. Cover by Marie Severin and Frank Giacioa',
    id: '54618571998_897328815729546',
    publishTime: '2024-01-26T18:07:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/422240728_896927809102980_8566852746763048503_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NY4bD-pMNJ4Q7kNvgHXvcEK&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A8iaG7Ke0rbRc8cA6JwlJbb&oh=00_AYC3067cezR91wdnQcrLuwfV9wGIg1ctviEsLo7zSanJzw&oe=679DD929',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is the cover of a Marvel comic titled "Tales to Astonish #93." It features the Hulk and the Silver Surfer, with the tagline "He who strikes the Silver Surfer!" The comic was published in July for 12 cents.',
  },
  {
    message:
      'Classic Comic - Fantastic Four #50 (1966) - Silver Surfer battles Galactus. Johnny Storm goes to college. 1st appearance of Wyatt Wingfoot.. Jack Kirby over and art',
    id: '54618571998_659210689541361',
    publishTime: '2023-03-01T20:27:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/333997815_917843759566646_5361355257372139222_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xigxJ_fLEw8Q7kNvgFDEmmX&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYAzJFSKYQ0gABYpeUb6-an2-Z5EFPxktVYlJjPQz6tUEg&oe=679DFE3D',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a vintage comic book cover for "Fantastic Four" issue 50. It features the Silver Surfer prominently, gliding across the cover. Inset panels show other characters: a young man in a coat, indicating an event titled "The Human Torch in College!" The top banner proclaims it as "The World\'s Greatest Comic Magazine!" with classic Marvel Comics branding.',
  },
  {
    shares: 340,
    reactions: 5333,
    message: 'by Alex Ross',
    id: '54618571998_1109655567830202',
    comments: 59,
    publishTime: '2024-11-10T21:22:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/465221571_1108413984621027_5516539962635169069_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yvyvgtujZw0Q7kNvgGBuYTc&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AWiLMMO5XVPgpTX6RC14Hak&oh=00_AYD_0C7Tsbw53QOVaOyVZV8hdq1QaDRTGxb0tIh-Az4Nrg&oe=679DE73B',
    status: 'PUBLISHED',
    imageDescription:
      "The image depicts Superman flying above the Batmobile, with Batman and Robin inside. Superman is smiling and seems to be guiding the Batmobile mid-flight, while Robin waves enthusiastically. Batman appears focused, seated in the driver's seat. The illustration has a vintage comic-style appearance.",
    postUrl: 'https://www.facebook.com/54618571998_1109655567830202',
    totalEngagement: 5732,
  },
  {
    shares: 285,
    reactions: 5320,
    message:
      'Classic Comic - Amazing Spider-Man #62 (1968) - Spidey vs Medusa . Cover by John Romita',
    id: '54618571998_816514567144305',
    comments: 96,
    publishTime: '2023-10-01T21:36:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/385031677_816399243822504_244993596902974106_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nEd1TuF-xsQQ7kNvgEQV0dn&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A_vnmMIHG0AfcC5NFksZQ5j&oh=00_AYD1Zl3sghp3C8QB2bEaB3Px8sHqLNb-O7lT9tSeBw0mKA&oe=679DEBA6',
    status: 'PUBLISHED',
    imageDescription:
      'This is a comic book cover for "The Amazing Spider-Man" issue #62, featuring Spider-Man being captured by a character named Medusa. Medusa is depicted with long, flowing hair and a confident stance. The cover is published by Marvel Comics, priced at 12 cents.',
    postUrl: 'https://www.facebook.com/54618571998_816514567144305',
    totalEngagement: 5701,
  },
  {
    shares: 359,
    reactions: 5289,
    message: 'Fire and Ice by Frank Frazetta (1983)',
    id: '54618571998_767485658713863',
    comments: 40,
    publishTime: '2023-07-21T17:55:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/362624597_767428552052907_8975753135789131242_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=z4BiWz2d8s0Q7kNvgEVPGl3&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ATc73HRWyp02Z-tyObKGEZm&oh=00_AYDalq-CsHhnckVJy5PKsnA4xBo7DxxYaSkS6fhlwhF6GQ&oe=679DD658',
    status: 'PUBLISHED',
    imageDescription:
      'The image depicts a dramatic and dynamic fantasy scene featuring a group of primitive warriors and figures in a mountainous landscape. At the center, a muscular man stands triumphantly on a rock, brandishing an axe. Around him are several other figures, some appearing to be in distress or defeated. The vivid background features towering mountains and a dynamic sky, contributing to the epic and adventurous atmosphere of the composition.',
    postUrl: 'https://www.facebook.com/54618571998_767485658713863',
    totalEngagement: 5688,
  },
  {
    shares: 560,
    reactions: 5004,
    message: 'From Iron Man #122 by Carmine Infantino',
    id: '54618571998_677728921022871',
    comments: 84,
    publishTime: '2023-03-24T16:17:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/337004768_585797323484507_3931479089177343172_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AJicXrTuU8EQ7kNvgHwTFtU&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYDHxE1x7Xh1VhndjMH16TjYGQb_VZfDEdswKWrk3F9tMg&oe=679DE3B9',
    status: 'PUBLISHED',
    imageDescription:
      "The image is a comic book page featuring Iron Man in various iterations of his armor. It shows the progression of his suits, including a large gray suit resembling his original armor and the more advanced red-and-yellow suits. The Avengers, including Captain America and Thor, appear in the background. Text panels narrate Iron Man's journey as a superhero and leader, highlighting his technical advancements and leadership qualities.",
    postUrl: 'https://www.facebook.com/54618571998_677728921022871',
    totalEngagement: 5648,
  },
  {
    message: 'FF wedding by Alex Ross',
    id: '54618571998_828611945934567',
    publishTime: '2023-10-18T18:05:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/391703560_828563749272720_4441849525376635968_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=31WqRiU13SwQ7kNvgHfY36V&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFN0am19oe23tkLvrxzAuej&oh=00_AYBI3COIXNA-ekChUayy9fg6bPQyXNoglwRVCYLHB4wwaQ&oe=679DD7E9',
    status: 'SCHEDULED',
    imageDescription:
      'A wedding scene featuring superhero characters as guests. The bride and groom are kissing at the altar. Guests include recognizable comic characters in their iconic costumes, surrounded by photographers capturing the moment.',
  },
  {
    message:
      'Classic Comic - Marvel Feature #1 (1971) - 1st appearance and Origin of the Defenders. Dr Strange back up story. Neal Adams cover',
    id: '54618571998_646371057491991',
    publishTime: '2023-02-14T20:21:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/330326627_5846163392167560_6339758933558735685_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=SJmFPnZkJ4sQ7kNvgEYzKCW&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYAamiVUQLsFUnHBj5QrppCjwlpkTmoQxfK_by-amoUU3A&oe=679DD2E8',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image is a comic book cover titled "Marvel Feature Presents The Defenders #1." The cover features Hulk, Sub-Mariner, and Dr. Strange in action poses, with text highlighting it as the origin of the Defenders team. It is priced at 25 cents and also mentions a bonus about Dr. Strange\'s return.',
  },
  {
    message:
      'Classic Comic - Incredible Hulk #122 (1969) - FF appear. Hulk vs Thing fight Cover and art by Herb Trimpe',
    id: '54618571998_712360960893000',
    publishTime: '2023-05-08T22:09:06+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/345452058_253292123842422_2527753951687517071_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tRBBfYxtyDMQ7kNvgFOm4jY&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AvTk5bmSziIvFA13hRBimly&oh=00_AYCoiFC8DnMhhYa8aWexn6iUFX8RWDzOrDUsQScZwk7j9A&oe=679DD78E',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The comic book cover features "The Incredible Hulk" battling the Thing. The Hulk is in mid-stride, punching his foe. The scene takes place in an urban setting with debris flying around. The comic, priced at 15 cents, has an issue number 122 and guest stars the Fantastic Four, with some of its members visible in the background.',
  },
  {
    message:
      'Classic Comic -  Teen Titans #25 (1970) - Superman, Batman, Flash, Aquaman, Green Arrow and Hawk & Dove guests. 1st Lilith appearance who joins Teen Titans West in issue #50 Nick Cardy cover and art',
    id: '54618571998_830621432400285',
    publishTime: '2023-10-21T20:01:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/391707924_830603969068698_4974825650721917405_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8_QN60XXLvYQ7kNvgEP7QAC&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AvEhpGDi1HQFkGgpMJudFl6&oh=00_AYDg-K6a1RFQWtnSkVPMpOSbNqFzitUzBE6nbqWlTTh_qA&oe=679DD46D',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image is a cover of "Teen Titans" comic, issue #25, featuring several superheroes, including Batman, Robin, and Superman, surrounding a shrouded figure on the ground. Speech bubbles express shock, with one character accusing, "...and *you* killed him!" The scene conveys drama and tension.',
  },
  {
    shares: 314,
    reactions: 5191,
    message:
      'Classic Comic - Detective #171 (1951) - One of the few Golden Age Penguin covers. Scarce in high grade. Cover by Win Mortimer',
    id: '54618571998_1100887592040333',
    comments: 44,
    publishTime: '2024-10-30T19:21:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/464616312_1100481525414273_5054532197761223808_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VSeH2wrdg8cQ7kNvgFmpVAc&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad6wxUoh2wk8IsbdMQixRCG&oh=00_AYAACdoGjYYk1LglmunhMRJA4Oom0sri4BUtyl3FLpe7Pw&oe=679DCD55',
    status: 'PUBLISHED',
    imageDescription:
      'This is the cover of "Detective Comics" issue #171. It features Batman and Robin in pursuit of the Penguin, who is flying with a helicopter umbrella. The cover highlights "Batman and Robin vs. The Penguin: Man of 1,000 Umbrellas." Batman is holding a woman while jumping, with Robin following. The background includes the iconic Bat-Signal and is primarily blue and yellow.',
    postUrl: 'https://www.facebook.com/54618571998_1100887592040333',
    totalEngagement: 5549,
  },
  {
    message:
      'Classic Comic - Detective #122 (1947) - 1st Catwoman cover.. Bill Finger story. Bob Kane and Charles Paris cover',
    id: '54618571998_769417128520716',
    publishTime: '2023-07-24T17:04:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/363309761_769390358523393_7603994528580709644_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=d5c7qdDgf4UQ7kNvgF3Rn-4&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AxJt4ThoRXUxba1szmG7ZRv&oh=00_AYDmEwGLspUZc7fo5SxaFWi0dr4SAa-ZRKo-VWu0hcDIvg&oe=679DC77D',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'This is a vintage "Detective Comics" cover featuring Batman and Robin in a dynamic encounter with Catwoman. The text highlights the issue number (122), month (April), and price (ten cents), with a tagline about the storyline: "The Black Cat Crimes!" Batman and Robin are shown ready for action, while Catwoman is in a striking pose. The art style is classic and colorful, typical of the comic book era.',
  },
  {
    message: '',
    id: '54618571998_684417330354030',
    publishTime: '2023-04-02T17:08:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/339095746_1602848903517607_8494582089012602147_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xli9ugLR9Y4Q7kNvgEdfQ1P&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AjtGYtRKUGGoHrazfSxAA5t&oh=00_AYCu3P6pZ8nhWgX0igrmmKlrp7UOo_5tB7lDo1cul6sshA&oe=679DE990',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image is a stylized, illustrated poster featuring the text "The Herculoids" at the top. Below, it depicts a group of characters consisting of humanoids and various fantastical creatures, including a dragon-like figure, a rock-like beast, and blob-like entities, set against a dynamic, rocky background.',
  },
  {
    message: '80th (2019) anniversary poster from Marvel',
    id: '54618571998_635434608585636',
    publishTime: '2023-02-02T19:17:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/327925323_713805976959010_348927025382516541_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Fv2tVJZGdI0Q7kNvgFZzRsH&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Alupxj5DpbCH-SJ9oxPO6Md&oh=00_AYAeZFINbidOkxEnQruoafKKLi6yK_ur1nsrYc7QKsMY4g&oe=679DFA36',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a Marvel tribute poster featuring stylized portraits of various superheroes and villains on a yellow background. "MAKE MINE MARVEL" is prominently displayed in the center, with "est. 1939" beneath it. The top right corner marks Marvel\'s 80th anniversary.',
  },
  {
    message: '',
    id: '54618571998_10155895342281999',
    publishTime: '2018-03-11T16:58:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/29136000_10155895341186999_2028908397050462208_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JSU_hQ8etnwQ7kNvgG_FM47&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Aoc9M48vbQRK6nDYLzOzfBj&oh=00_AYA0oqJ6ioVuDIR_5pv_wFFbyzSvvcvQ328GSLFqG84FEA&oe=67BF93B4',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'A person is wearing a shirt with the humorous message: "It isn\'t really hoarding, if your stuff is cool."',
  },
  {
    message:
      'Happy Birthday to FRANK FRAZETTA, born this day in 1928....you are very much missed sir!!!',
    id: '54618571998_907801134682314',
    publishTime: '2024-02-10T05:57:35+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/426172557_907801064682321_8053990802128402506_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=RxC653oc2pIQ7kNvgHUjGGp&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=APsNzbbfu_cdkD25yK7t850&oh=00_AYAfhY_NxGYrWp_4c_G3PJX2XDr-poFjvXE5SEPIMvAw_Q&oe=679DDF1D',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      "The image depicts a dark, armored figure on horseback, brandishing a scythe. The horse and rider are silhouetted against a smoky, fiery background, creating an ominous atmosphere. Vultures circle overhead, enhancing the scene's foreboding mood.",
  },
  {
    message: "Some great ads in comics from the 60's",
    id: '54618571998_1095018232627269',
    publishTime: '2024-10-23T14:07:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/464149874_1094820222647070_6033087064207761570_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lEotAzV9ykUQ7kNvgF_f195&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ADDmRUtM0kuySVKVPfSiMxo&oh=00_AYCr8_HQLqU6u0ju1F_vlmWtEfqCRt-NRxnRmlFxtyiMsw&oe=679DDB71',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image is a vintage comic book advertisement page titled "Treasure Chest of Fun." It features a variety of novelty items for sale, such as a ventriloquism kit, magic cards, a miniature radio, X-ray specs, and a trick baseball. The ads are colorful and illustrated with descriptions and prices for each item, capturing a playful and nostalgic tone.',
  },
  {
    message: 'love these old comic book ads',
    id: '54618571998_629936272468803',
    publishTime: '2023-01-27T14:15:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/327526934_1106951974036602_1798039873994872340_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=X_OmlvjT6IwQ7kNvgFu8mOv&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Alupxj5DpbCH-SJ9oxPO6Md&oh=00_AYDIabn-bgP__ybOPUk5EEWUJ-xD15acLhgZmm_MoOlSkw&oe=679DD9E6',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This image is an advertisement for the Corgi Batmobile toy from the Corgi Model Club News. It displays a stylized illustration of the Batmobile with features like a chain-slashing blade and missile launchers. Batman and Robin are depicted, accompanied by promotional text inviting readers to "Ride with us in this crime-cracking Corgi!" The ad highlights various features of the toy set and promotes the Corgi Toys brand.',
  },
  {
    message:
      'Classic Comic - Green Hornet #1 (1967) - Van Williams and Bruce Lee cover. Art by Dan Spiegle',
    id: '54618571998_831214982340930',
    publishTime: '2023-10-22T19:20:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/394265893_830835705712191_6460747037537720886_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=W62uGGYPsp8Q7kNvgFqqRo3&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AvEhpGDi1HQFkGgpMJudFl6&oh=00_AYCEUqVYTauPY8mfvKIjrd9e5shj91tGRMikGSZ6oxrcQg&oe=679DE7B6',
    status: 'SCHEDULED',
    imageDescription:
      'This is a cover of a vintage "The Green Hornet" comic book. It features two masked characters, the Green Hornet and his sidekick Kato, wearing dark suits. They are standing by a door with a note pinned to it. The text describes their mission to combat a ruthless gang forcing victims to obey criminal commands. The cover is from Gold Key Comics and is priced at 12 cents.',
  },
  {
    message:
      'Classic Comic - Fantastic Four #57 (1966) - Dr Doom , Silver Surfer, Sandman and the Inhumans all appear in this issue.. Cover and art by Jack Kirby',
    id: '54618571998_617771517018612',
    publishTime: '2023-01-13T20:26:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/324852538_1501901873652109_265264190081848375_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3v-5ZMNiZkUQ7kNvgHoG-_b&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AEj86Fc0xlMaisai1dICqfl&oh=00_AYCDIq2169oOImreS_hmqHxekGrghYbBVyGg7rFAwq2rQQ&oe=679DEC42',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'Comic book cover featuring the "Fantastic Four" with a prominent depiction of Doctor Doom in the center. The team members are positioned dynamically around him with text reading "Enter... Doctor Doom!" The background includes cosmic elements, and the cover showcases vibrant artwork typical of Marvel Comics.',
  },
  {
    message: 'Julie Newmar and Yvonne Craig.....wow',
    id: '54618571998_805314811597614',
    publishTime: '2023-09-15T18:41:29+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/378273483_805314621597633_8810067970776380345_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nTQSKnTD1oUQ7kNvgHnn90A&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AeuYoz_Z6s18yKB-UbYSALw&oh=00_AYBqPvDy8EUoh4xXnBf6aAC7PsKmhxAZohzf1PsGwJ6xYw&oe=679DEB00',
    status: 'SCHEDULED',
    imageDescription:
      'A woman in a cat-themed costume is leaning over another woman dressed as a superhero, possibly Batgirl, who is lying on the ground. The scene suggests a dramatic or confrontational moment.',
  },
  {
    shares: 406,
    reactions: 4820,
    message: 'Frank Frazetta - Snow Giants (Conan of Cimmeria) (1968).',
    id: '54618571998_734120585383704',
    comments: 112,
    publishTime: '2023-06-06T18:11:05+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/352147591_160194293703368_251000892931308899_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=J_J6f1LKmOAQ7kNvgEzcwpY&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANf0kMIeMC_mKos2kMEjn4q&oh=00_AYA9bSry0GRZXZumULaNIbXO-97E2O7amc9bVEYXuDl1PA&oe=679DDB98',
    status: 'PUBLISHED',
    imageDescription:
      'The image depicts three Viking-like warriors wielding axes in a snowy, mountainous landscape. They wear horned helmets and armor, suggesting a scene of battle or adventure against a dramatic backdrop. The sky is a vibrant mix of blues and purples, with a snow-capped peak in the distance.',
    postUrl: 'https://www.facebook.com/54618571998_734120585383704',
    totalEngagement: 5338,
  },
  {
    message:
      'Miguel Ferrer, Jack Kirby, Frank Miller and Billy Mumy at Golden Apple Comics',
    id: '54618571998_1122774496518309',
    publishTime: '2024-11-27T15:05:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/468633850_1122523646543394_2689057800547258366_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JYdOhZtGCuUQ7kNvgEJFa3-&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AGCaRt6IitcQ7-yAsV12fL4&oh=00_AYDxwzEahBJB-jjB8mlpy5V6U5DljqPbaMSqsxxTtKil5A&oe=679DD828',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'Four men are standing in a comic book store. The older man is holding a comic book, and various comic book displays are visible in the background.',
  },
  {
    message: '',
    id: '54618571998_752727696856326',
    publishTime: '2023-07-01T14:31:00+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/356240213_748742800588149_4839962995584459897_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ag4HTewsxiUQ7kNvgH5CmnT&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AS1qGJsq0Z9ZgV8qfukSk_U&oh=00_AYAcvn-vn82gASSmnvvvG1kbF_Bw6QzxD_AY3QIHTCQHVg&oe=679DDD56',
    status: 'SCHEDULED',
    imageDescription:
      'The image depicts two people in superhero costumes, resembling Batman and Robin, climbing up the side of a building in a vintage, black-and-white style. A person is seen looking out from a window beside them.',
  },
  {
    message:
      'Classic Comic - Avengers #71 (1969) - 1st Appearance of the Invaders. Black Knight joins the Avengers. Cover by Sal Buscema',
    id: '54618571998_606407661488331',
    publishTime: '2022-12-30T16:12:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/323160723_1134092850591395_2030501713004943384_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FvWQeUyuaWAQ7kNvgHiTDgD&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDxNigojbm3udtT9aeWKst&oh=00_AYD7IM58RO4XuvsC-GMo561pYOnC91zIX2RQ5iMad8HKBg&oe=679DFABF',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is a vintage comic book cover titled "The Avengers," issue number 71 from December. It features superheroes including Captain America and others engaged in a dynamic battle scene near the Eiffel Tower, with the text "The Final Battle!" at the bottom. The cover includes the Marvel Comics Group logo and displays a price of 15 cents.',
  },
  {
    message: 'One time Substitute Fantastic Four team by Paolo Rivera',
    id: '54618571998_1102527995209626',
    publishTime: '2024-11-01T18:16:33+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/465146612_1102184085244017_3780959374626033318_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=G-3Y3FAzjbkQ7kNvgHfBTAS&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad6wxUoh2wk8IsbdMQixRCG&oh=00_AYA1TK9-tPJU2yg4pSFGEaxMGYXgR5oPzfgUlqJTLKI-Zg&oe=679DCE20',
    status: 'SCHEDULED',
    imageDescription:
      'Four iconic comic book characters are illustrated: a muscular figure in the background, a skeletal figure with a fiery skull, a red-suited character with a web pattern, and a man with claws, all positioned dynamically in a heroic composition.',
  },
  {
    message: 'time for some cartoons',
    id: '54618571998_937716705024090',
    publishTime: '2024-03-24T17:05:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/434121649_936563245139436_7788791874387028216_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dZ5b7DwPpXoQ7kNvgE9zbfi&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A9vJEf3b3CAjZOCTfsxGoH2&oh=00_AYAcQ40-E7K1f6XmARgpQaLDIp-506V5JlA_KQJisiRRBA&oe=679DF444',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image features a cartoon penguin and walrus wearing bow ties and hats, with the text "Tennessee Tuxedo and His Tales" on a green background.',
  },
  {
    message:
      "Classic Comic - World's Finest #7 (1942) -   This iconic cover shows Batman , Robin and Superman astride the big guns of a Navy Battleship. Green Arrow begins. Last Sandman . Jack Burnley cover",
    id: '54618571998_728795122582917',
    publishTime: '2023-05-30T15:11:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/350477199_1689063958216317_5282102748894525593_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=W7CAIIQneHMQ7kNvgGZa-BD&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDWRC2mfkXFbh8H3P2JVBd&oh=00_AYBq0eMCmQmzJHhE0tmvw_ksyXr4u3KapEYpq8-XHYSgiQ&oe=679DE41A',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage comic book cover titled "World\'s Finest Comics" No. 7. It features three superheroes, each sitting on a large naval cannon with a ship\'s tower in the background. The comic is priced at 15 cents and promotes 96 pages in the fall issue.',
  },
  {
    message: 'some of the legends in comics .Art by Thomas Key',
    id: '54618571998_886812573447837',
    publishTime: '2024-01-12T15:11:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/418934360_886546053474489_1666054879429856422_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=H_tKmdV_29gQ7kNvgFHqJ44&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AnI2vm1qwoJyPrblQR7BRtx&oh=00_AYAM0Wm0bTj1BsjgAvqWtXRPOeyTCI5xP4VWfg_REf9STw&oe=679DE171',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a collage of nine notable comic book artists, each with a drawn portrait and their signature comic character beside them. The artists included are Curt Swan, John Romita, Neal Adams, John Buscema, Jim Aparo, Joe Kubert, Jack Kirby, Gil Kane, and Steve Ditko. Each portrait is accompanied by a hand-drawn illustration of a well-known character, highlighting their contributions to the comic book industry.',
  },
  {
    message: 'I had to share this...well just because',
    id: '54618571998_10151549734516999',
    publishTime: '2013-04-07T16:57:44+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/468619583_10161933663981999_4884857248466331719_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=jR40rx56ON8Q7kNvgFK9Dct&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AVVuiH4cnX6qm2CI9QUpOO5&oh=00_AYDTmHw7ZeJ3VnKwQz08ag0j8ypqopHpvxjS9BrFb53SSQ&oe=679DF599',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'A promotional image featuring Bruce Campbell with text urging people to share it because it is a picture of Bruce Campbell.',
  },
  {
    message:
      'Classic Comic - Fantastic Four #55 (1966) - Iconic Silver Surfer vs. Thing cover by Jack Kirby & Joe Sinnott.',
    id: '54618571998_674303508032079',
    publishTime: '2023-03-20T17:12:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/337253021_1382896755796729_6983254738018112267_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UG40T7W83NMQ7kNvgHFWBeO&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYAz1AMcsvuzqklpAPzySelImrk7krGcnqmdFx3uvdJGng&oe=679DE68C',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is the cover of "Fantastic Four" issue #55. It features the title against a dark backdrop with "The Silver Surfer" facing off against "The Thing." The cover highlights the theme: "The Peerless Power of the Silver Surfer!"',
  },
  {
    message:
      'Classic Comic - Amazing Spider-Man #51 (1967) - 2nd appearance of the Kingpin. 1st Kingpin Cover. Cover and art by John Romita',
    id: '54618571998_623076556488108',
    publishTime: '2023-01-19T23:58:47+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/326350672_694824465651617_3620500281659069530_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TZF6nmYlLHsQ7kNvgFlnT-d&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AEj86Fc0xlMaisai1dICqfl&oh=00_AYDXMPTu01eSNqdXZsAZ7ExA0T4Y-ldqHEXIZdRMc1pCAg&oe=679DCD70',
    status: 'SCHEDULED',
    imageDescription:
      'The image is the cover of "The Amazing Spider-Man" comic, issue #51. It features Spider-Man on the ground surrounded by several men, with one central figure in a white suit described as "The Kingpin." The caption at the bottom reads, "In the clutches of... The Kingpin!"',
  },
  {
    shares: 426,
    reactions: 4572,
    message: 'FF cartoon - Hanna Barbera 1967',
    id: '54618571998_773493108113118',
    comments: 148,
    publishTime: '2023-07-30T20:27:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/363441634_773330891462673_602825411659723387_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1XCpdF5r04IQ7kNvgFjz98o&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AxJt4ThoRXUxba1szmG7ZRv&oh=00_AYCbWeWbA6PBHbG8477calmCN7TSmWPexOo6gCcOx_RZpA&oe=679DC852',
    status: 'PUBLISHED',
    imageDescription:
      'A comic-style illustration featuring four individuals. From left to right: a man in a brown suit, a woman in a pink outfit, a large figure with an orange face wearing a trench coat and hat, and another man in a brown suit with a hat. They are linked arm-in-arm.',
    postUrl: 'https://www.facebook.com/54618571998_773493108113118',
    totalEngagement: 5146,
  },
  {
    message: '',
    id: '54618571998_10159619623961999',
    publishTime: '2022-05-04T21:14:51+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/279944703_10159619623821999_6385424170725595080_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hBjFroOaHcEQ7kNvgH-zpnn&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A_ATjVHaG65v59uQAO3T-Cz&oh=00_AYBNCNpcODGpMzQEeuVT29rvtqBRo9Us5sJGOoo5yBn52Q&oe=679DF697',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A young artist seeks feedback from a well-known critic at his first exhibition. The critic harshly deems the artwork "worthless," to which the artist humorously responds, acknowledging this but still expressing interest in hearing the critique.',
  },
  {
    message:
      'Classic Comic - A-Team #1 (1984) - Based on the hit NBC TV series. Cover by John Romita. Art by Marie Severin',
    id: '54618571998_644290284366735',
    publishTime: '2023-02-12T19:11:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/329013379_879983516379904_2761859314034764573_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sNBrvGMBwfsQ7kNvgG30PsV&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AOWK0IeDNMQbdSLHTr-neG3&oh=00_AYAXqTQxlu4aapLrcY_XmRI3IxkK_x-q0qjwrPR8SmvNNA&oe=679DD253',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'This is the cover of the first issue of "The A-Team" comic by Marvel. It features a dynamic group of five characters, with the central figure prominently standing and adorned with gold chains and a distinctive hairstyle. They are framed with action poses and armed stances against a red background, promoting action and thrills.',
  },
  {
    message: 'from Journey Into Mystery #110 by Jack Kirby',
    id: '54618571998_699167938878969',
    publishTime: '2023-04-21T18:11:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/342477303_1373711760093550_4180011877505410793_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uQgYvIJ1go4Q7kNvgEcMFcS&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A7jDnAwd5xQtUEgw6tdzuym&oh=00_AYCK7j7QzxV2jPEr5Jmm4bl6n1SA4fpBIjuYTpFmRxK3lQ&oe=679DC6B1',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image features a classic comic book illustration of Thor, depicted in vibrant colors. He\'s wearing a winged helmet, holding Mjolnir, and adorned with his iconic red cape. The text reads: "May the eyes of Asgard smile down on thee... Thor," with "A Marvel Masterwork Pin-Up" at the top.',
  },
  {
    message: 'Mighty World of Marvel poster by John Buscema',
    id: '54618571998_769464688515960',
    publishTime: '2023-07-24T18:49:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/362689295_769395915189504_7915058932604471849_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7P8hwGCJ4pAQ7kNvgEyZbXb&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AxJt4ThoRXUxba1szmG7ZRv&oh=00_AYAJZwYQnAj5vJuLjkP9VGGpnrM11PLAxv3ayhw9Tzb14g&oe=679DD688',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a vibrant comic book-style poster featuring various Marvel superheroes, including a fiery figure flying, a person in a red and blue suit swinging from webbing, a large green muscular figure, and others displaying superhero poses and powers.',
  },
  {
    shares: 182,
    reactions: 4808,
    message:
      'Classic Comic - Jonny Quest #1 (1964) - Only issue. Story is based on the pilot from the ABC hit series. Back cover is a Pin-up',
    id: '54618571998_1032939952168431',
    comments: 78,
    publishTime: '2024-08-04T18:37:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/453741321_1031802822282144_4168527758662261569_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UgMmm4nLW7YQ7kNvgHyvOAL&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ABjR_3i60223gqtcrWbUSUT&oh=00_AYDKylmqHd-JsSIbWVEUKjiS3zgKHnLKU4fO3DWQmofQ3Q&oe=679DE609',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book cover for "Jonny Quest: The Mystery of the Lizard Men" by Hanna-Barbera, published by Gold Key. It features characters engaged in action against green, humanoid lizard creatures on a red background, highlighting a dramatic scene.',
    postUrl: 'https://www.facebook.com/54618571998_1032939952168431',
    totalEngagement: 5068,
  },
  {
    message: 'I need this for the office',
    id: '54618571998_10151888007141999',
    publishTime: '2013-10-08T05:13:47+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/472236399_10162114048986999_1332025868046746070_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=nqLliE8BZE8Q7kNvgGJnsOy&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AwNvqW9T4CKI57t0lY8QvpO&oh=00_AYAFrTpsGBylB4Hks-V-vt1RAc6SmtPGXPthmzqrsdYuJQ&oe=679DEA6B',
    status: 'SCHEDULED',
    imageDescription:
      'The image shows a black coffee table with a glossy finish, featuring the yellow Batman logo prominently on the top surface. The table has two rectangular glass insets on each side of the logo, a lower shelf for additional storage, and decorative yellow accents.',
  },
  {
    message: 'A life size Hulk made from scrap metal',
    id: '54618571998_1119775376818221',
    publishTime: '2024-11-23T19:11:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/467576008_1119341106861648_4536006486410491903_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sSpZv9Imw6IQ7kNvgFaoOFK&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFT13vH4zv0T-yKWrS8kNws&oh=00_AYCkNQusPVPYwEwgoEzyajHlgUm1SdSrkp8QJvsGk_0dAw&oe=679DC934',
    status: 'SCHEDULED',
    imageDescription:
      'A large, detailed sculpture of a muscular humanoid figure resembling the Hulk, made from metal, stands in an outdoor setting near a rustic building and trees.',
  },
  {
    message: '',
    id: '54618571998_669507951844968',
    publishTime: '2023-03-14T16:21:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/335893852_1398759897603689_4313977726924958786_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ca9P6MH1Mx8Q7kNvgGoi6Ia&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AxjXGRI5F_kLVcGnmbzoU2h&oh=00_AYB6nPjCNSp1QebNRYVMUCZoGiXaqHFcCLNoF0fXUGKY4w&oe=679DCA12',
    status: 'SCHEDULED',
    imageDescription:
      'Two cartoon characters are joyfully reading comic books. The text above them reads, "Happiness is," and below them, "a stack of comic books."',
  },
  {
    message: '',
    id: '54618571998_872382521557509',
    publishTime: '2023-12-22T17:17:07+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/412921243_872000141595747_6624802576917798720_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VvPgBOC-9i8Q7kNvgGbWG2y&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A8NHsBiIKKnXEG-EcxcTJjh&oh=00_AYBYiHYKlpPtDmuh4B-KivpUMeuz49j75P3WV7IZooazHg&oe=679DF468',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image shows a vintage black-and-white scene of children buying comic books at a store counter. The text humorously suggests: "Teach your kids how to read comic books; they won\'t have money for drugs."',
  },
  {
    message:
      "Classic Comic - World's Finest #71 (1954) - Batman and Superman begin as a team for the 1st time. Cover by Win Mortimer",
    id: '54618571998_674213571374406',
    publishTime: '2023-03-20T15:20:59+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/337010561_2132011720332258_7513232568770440817_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZZjWFJBvU8wQ7kNvgFbdqK8&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYCEKfOl0-jK9yj72SZw14xbP67AeowDEk7mGA_EqW00Og&oe=679DF7A0',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'Comic book cover titled "World\'s Finest Comics," featuring iconic superheroes in an action scene. They are facing a man in a green suit with a gun. The issue teases a storyline about them exchanging identities.',
  },
  {
    message:
      'Classic Comic - Batman #47 (1948) - 1st detailed origin of Batman. Catwoman appearance. Stories by Bill Finger. Cover by Bob Kane',
    id: '54618571998_734814178647678',
    publishTime: '2023-06-07T15:08:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/352191621_2544599009025067_564084567800379641_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tV7ttUv1X38Q7kNvgEX9-qG&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANf0kMIeMC_mKos2kMEjn4q&oh=00_AYDsUWCi4CYDlrqi8p26udJ-Vl0tVrmjH5NZ2KR_rKav3g&oe=679DE462',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is a vintage Batman comic book cover, "Batman No. 47," featuring a young man reading a newspaper with "Gotham Gazette" on it. Batman, a plane, and the Batmobile appear in the background. The text highlights a special story titled "The Origin of Batman."',
  },
  {
    message: 'John Byrne and friends',
    id: '54618571998_743742681088161',
    publishTime: '2023-06-18T21:38:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/354214962_743728244422938_2293880496101660714_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=weVB2YThLJAQ7kNvgEvxd5h&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ASXWjd5_HguOydGi6Cp1YcZ&oh=00_AYD0p8IPO4p2gYI4U6c0X92Mt01UicrJkqSnCJ9VZpPPRw&oe=679DD0DF',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image is a drawing depicting four superhero-like characters with a seated artist at a drawing board. The character resembling a superhero in red and yellow armor speaks to a woman with black hair and a cape, asking if someone named Byrne has taken on too much. Two other characters, dressed similarly to superheroes, stand nearby observing. The scene includes comic book pages on the floor. The style is reminiscent of traditional comic book art.',
  },
  {
    message: 'Fire and Ice by Frank Frazetta (1983)',
    id: '54618571998_1014773117318448',
    publishTime: '2024-07-09T21:33:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/450450721_1014219200707173_2503348069701302488_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dqhUzujmlsMQ7kNvgFLCakU&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ar-pLjOCTS9S8Pu2xAqhP0o&oh=00_AYDHrIwadU9gel-IvblmMx7Qyw_VomvCXJQasMKv_yWBeg&oe=679DC5D0',
    status: 'SCHEDULED',
    imageDescription:
      'The image depicts a dramatic fantasy scene where a muscular warrior with long hair stands triumphantly on rocky terrain, holding a weapon. Surrounding him are various figures, including a man crouching with a knife and a woman looking up. The background features dramatic mountains and a vivid sky, adding to the intense atmosphere.',
  },
  {
    shares: 698,
    reactions: 4153,
    message: '',
    id: '54618571998_728064205989342',
    comments: 64,
    publishTime: '2023-05-29T16:10:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/350505844_147839281615417_1789086086493774674_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1p5aXl36EZsQ7kNvgGZhMXK&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDWRC2mfkXFbh8H3P2JVBd&oh=00_AYBbCNPEoexsKl3UMuyFLuBMlWSRMiOmqEp-HSOIM_ZcYw&oe=679DE658',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a "Justice League" themed artwork featuring Superman flying, alongside Wonder Woman and Batman in a Batmobile. The backdrop is a cityscape, and text at the top reads, "They\'ve never faced us before. Not us united."',
    postUrl: 'https://www.facebook.com/54618571998_728064205989342',
    totalEngagement: 4915,
  },
  {
    shares: 431,
    reactions: 4452,
    message:
      "Classic Comic - World's Finest #11 (1943) - WW2 Victory Garden cover. Bill Finger and Jerry Siegel stories.Jack Burnley and Jerry Robinson cover",
    id: '54618571998_810694924392936',
    comments: 24,
    publishTime: '2023-09-23T15:14:00+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/380785781_810387404423688_8522698677648810043_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YTeRdCo72kcQ7kNvgGzJ9fN&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AQ6uIXz3wArX-td61b3bq_j&oh=00_AYCFX-BRdYSzDfLGs82aQ76fr4NbITWOeycbrgOeMlnqSw&oe=679DC118',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vintage comic book cover titled "World\'s Finest Comics No. 11." It features superheroes Batman, Robin, and Superman in a garden labeled "Victory Garden," with Superman holding a basket full of vegetables. The price is marked at 15 cents, and it\'s a DC publication.',
    postUrl: 'https://www.facebook.com/54618571998_810694924392936',
    totalEngagement: 4907,
  },
  {
    message: 'Art by George Perez',
    id: '54618571998_1095130962615996',
    publishTime: '2024-10-23T16:24:57+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/463842428_1094824772646615_3881894296543517358_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=phjcYPBuCToQ7kNvgFnehcz&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ADDmRUtM0kuySVKVPfSiMxo&oh=00_AYDT_NT-V9o2KYb2DP7sCNfnidELb-76LeVM_ETb_X8-BQ&oe=679DE775',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image depicts an evolution of a character from Robin to Nightwing, with Batman in the background. Each figure is shown in a dynamic running pose, illustrating the transformation through different costumes, from the classic Robin look to the modern Nightwing attire.',
  },
  {
    message: '',
    id: '54618571998_779699817492447',
    publishTime: '2023-08-08T16:40:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/366345320_779445524184543_8360611457507604383_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=n7x7uUe7D3QQ7kNvgH1NLyC&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ap-gkw9jU2HMot4HcT8m766&oh=00_AYDlUC8UqZt9-TLSR88xjfiiktGLTrY08TIfFMf0nnq4sQ&oe=679DD6C6',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A man and a woman are in a car. In the first panel, the man says, "What a beautiful day," and the woman says, "You should sell your comics." In the second panel, the woman is missing, and the man repeats, "What a beautiful day."',
  },
  {
    message: 'From Captain America #112 by Jack Kirby',
    id: '54618571998_746354200827009',
    publishTime: '2023-06-22T16:09:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/355484163_745414404254322_6075414988128835933_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jttb2659HnEQ7kNvgEQXuS0&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ASXWjd5_HguOydGi6Cp1YcZ&oh=00_AYAb8eFu8oObEWGTCrRI2Og7D7pyb8qWm-sKhvYuozTyeg&oe=679DE700',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vibrant comic panel featuring a superhero in a blue costume with a star on the chest, red boots, and a shield, prominently in action. A futuristic cityscape is in the background, with explosions and flying vehicles. A speech bubble states, "AND SO, THE LEGEND LIVED AGAIN!"',
  },
  {
    message: 'Great art by the Late Darwyn Cooke ....you are so missed - Rick',
    id: '54618571998_734058118723284',
    publishTime: '2023-06-06T16:14:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/351208101_242382688525042_3900252209847547515_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qrQf4__Za5gQ7kNvgHXJdSs&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ANf0kMIeMC_mKos2kMEjn4q&oh=00_AYDczSW4l0Vmnd5SgxPP1nCBHdjCXwyaeHyExibRQ9jP1A&oe=679DC7CB',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a vibrant, crowded collage of various cartoon and comic characters, including superheroes and animated figures, from different franchises gathered together in a single scene.',
  },
  {
    message: 'John Byrne in his studio',
    id: '54618571998_748974337231662',
    publishTime: '2023-06-26T13:07:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/356388228_748752857253810_4307519607550407651_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aHJzje9EmqEQ7kNvgEHR85Y&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ASXWjd5_HguOydGi6Cp1YcZ&oh=00_AYBdF5ZGdZWpGoaUZjUh99mtFCcBjIAJlxaQcEAI4-Pb-w&oe=679DF116',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'A person is holding a large, detailed comic book illustration in a room filled with framed artwork and shelves of action figures and comic books. A model airplane is suspended from the ceiling.',
  },
  {
    message: 'Yvonne Craig',
    id: '54618571998_736395258489570',
    publishTime: '2023-06-09T14:09:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/352556757_736100508519045_5636730354295944914_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JcoefBKjdjAQ7kNvgEnt4rw&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANf0kMIeMC_mKos2kMEjn4q&oh=00_AYD1ZSSPfIQlG9DJqEEq9ONbgU7rKLm1TnAi8O2pYmkEWw&oe=679DF48B',
    status: 'SCHEDULED',
    imageDescription:
      'A person in a Batgirl costume is looking into a mirror, adjusting their mask. The setting appears to be a dressing room with various items on the counter.',
  },
  {
    message: 'Walter Lantz and friends....some of the greatest cartoons ever',
    id: '54618571998_801747341954361',
    publishTime: '2023-09-10T17:09:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/374696660_801359428659819_8952916505774436673_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fx3a83e-b4sQ7kNvgEU3VKQ&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AeuYoz_Z6s18yKB-UbYSALw&oh=00_AYCm5NNuXUVYHNup5GSV7udIYjv96Mq8K8R7Q3YKSFzfzQ&oe=679DE0AC',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image shows a man sitting on a sofa, surrounded by Woody Woodpecker toys. Behind him, there is a painting of Woody Woodpecker holding a flower.',
  },
  {
    message:
      "Classic Comic - World's Finest #63 (1953) - Captain Compass story. Cover by Win Mortimer",
    id: '54618571998_763559052439857',
    publishTime: '2023-07-15T20:21:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/360102114_763131692482593_1050940585994739652_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Fb0xiujZU7QQ7kNvgGux9Z4&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ATc73HRWyp02Z-tyObKGEZm&oh=00_AYBjd95w9WSVuKYMm9fktlI7wp6K9e5L6A5D3mQLx4N30A&oe=679DD038',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a cover of "World\'s Finest Comics" featuring three superheroes: Superman, Robin, and Batman. They are holding newspapers with headlines about their heroic deeds. The cover promotes "America\'s Greatest Adventure Heroes" and is priced at 15 cents.',
  },
  {
    message: 'by Kerry Callen \n  we love this guy',
    id: '54618571998_845706084225153',
    publishTime: '2023-11-13T17:11:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/401662319_845362420926186_1310496750145038746_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mme398QS4gwQ7kNvgEbdHdj&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A1JMZmQ38AIeooTJbQ1QLY-&oh=00_AYAzEU8ZhbL0zYa4jYd96oIPJ1UcWrG6dCpgT_Eb3GJbXQ&oe=679DF614',
    status: 'SCHEDULED',
    imageDescription:
      'Comic parody featuring superhero characters. One hero praises others for their traits, but unintentionally compares them to farts. This misunderstanding leads to laughter among the group.',
  },
  {
    shares: 275,
    reactions: 4416,
    message:
      'Classic Comic - Fantastic Four #73 (1968) - Continued from Daredevil #38. Spider-Man , Thor and Daredevil appear. Cover and art by Jack Kirby and Joe Sinnott',
    id: '54618571998_930703919058702',
    comments: 103,
    publishTime: '2024-03-14T19:19:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/430483978_928082015987559_5075749107149629374_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=U1PS31Gd0DkQ7kNvgH2MMMA&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A1Cltn3twGkGm6VFwILAtl1&oh=00_AYCMrl4Ags6PfNj-QWKjAET4yn2nJEYXxE51JVweWZfSgQ&oe=679DC126',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book cover of "Fantastic Four" issue #73 from Marvel Comics, featuring a "Giant Guest Star Bonanza!" The artwork includes various superheroes in action poses, prominently displaying the Fantastic Four and guest characters like Spider-Man, Daredevil, and Thor. The cover exhibits vibrant colors and dynamic composition typical of classic superhero comic covers.',
    postUrl: 'https://www.facebook.com/54618571998_930703919058702',
    totalEngagement: 4794,
  },
  {
    message:
      'Classic Comic - Detective #254 (1958) - Bat-Hound cover and story. Cover by Sheldon Moldoff',
    id: '54618571998_790583986404030',
    publishTime: '2023-08-24T17:29:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/370216833_790550526407376_7179100341820154364_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=h7bWa64vyRIQ7kNvgGDuiFi&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYAhcNcEwTx962vzvOAPV3Th_H9lJYWlA2-5uZjlTLQ-yA&oe=679DEE30',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a comic book cover titled "Detective Comics." It features Batman, Robin, and Ace the Bat-Hound in a scene called "One Ounce of Doom!" Batman and Robin are on a dock, appearing to confront a man with a rope and device while Ace the Bat-Hound leaps towards him. The design and art style suggest a classic comic book theme.',
  },
  {
    shares: 205,
    reactions: 4455,
    message:
      'Classic Comic - Fantastic Four #73 (1968) - Continued from Daredevil #38. Spider-Man , Thor and Daredevil appear. Cover and art by Jack Kirby and Joe Sinnott',
    id: '54618571998_826376816158080',
    comments: 94,
    publishTime: '2023-10-15T19:27:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/391686472_826333482829080_3559420981921605648_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uTiQl5RNYhEQ7kNvgEECkyz&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFN0am19oe23tkLvrxzAuej&oh=00_AYB3ZwjQ4JKttmgJWGpjYdAXRuggEw3ldV9lJsDcyUaFsQ&oe=679DDB51',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book cover featuring "Fantastic Four" issue #73. It includes characters such as Mr. Fantastic, The Thing, Human Torch, and Spider-Man. They appear to be in a dynamic action scene with Thor and Daredevil. The cover advertises a "Giant Guest Star Bonanza" and is priced at 12 cents, published by Marvel Comics. The comic is approved by the Comics Code Authority.',
    postUrl: 'https://www.facebook.com/54618571998_826376816158080',
    totalEngagement: 4754,
  },
  {
    shares: 476,
    reactions: 4217,
    message:
      'Classic Comic - X-Man #35 (1967) - 1st appearance of the Changeling. Spider-Man and Banshee appear. Dan Adkins cover and art',
    id: '54618571998_658378229624607',
    comments: 47,
    publishTime: '2023-02-28T18:21:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/334062670_3293192067568159_2293545991807051602_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VGBfzmk7xzEQ7kNvgFeMClo&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYAbovt-KcOnHdnV7M59NkX87BW4k9YkvYhDdZHlU5YNiA&oe=679DE89A',
    status: 'PUBLISHED',
    imageDescription:
      'This comic book cover, titled "X-Men" issue #35, features Spider-Man swinging through a scene with the X-Men. The X-Men are reacting to his appearance as Professor X holds his head, possibly using telepathy. The comic is from the Marvel Comics Group, priced at 12 cents. The tagline reads "Along came a Spider!"',
    postUrl: 'https://www.facebook.com/54618571998_658378229624607',
    totalEngagement: 4740,
  },
  {
    message:
      "Classic Comic - Aquaman #1 (1962) - Aquaman's First Self-Titled Issue After 20 Years as a Back-up Feature",
    id: '54618571998_615160917279672',
    publishTime: '2023-01-10T18:15:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/324789207_1140430919992942_7269190978883779799_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Jdfw_VAWKbMQ7kNvgHnTe7w&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANEcB3dbg9ERQ64wxt3zug_&oh=00_AYDetrpP2hNyd-zFsjv12Tj_9QOe0buKJP24H21lb5MOnw&oe=679DFA34',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'This is a vintage comic book cover for "Aquaman," featuring Aquaman and Aqualad dodging fire-breathing trolls underwater. The issue is titled "The Invasion of the Fire-Trolls" and priced at 12 cents, with dynamic artwork depicting an action-packed scene.',
  },
  {
    shares: 373,
    reactions: 4329,
    message: 'Avengers and The Invaders by Alex Ross',
    id: '54618571998_791807106281718',
    comments: 28,
    publishTime: '2023-08-26T16:11:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/370548445_791451406317288_2535325760682068085_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0BJDI24zkBsQ7kNvgFvrnWM&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFPZWKt5JZ1PFEs5yzutf_Z&oh=00_AYDg71Jy1UrPLagEtoK2Qp6bR2OaPHZWibuiu6mhVXAsJQ&oe=679DDED4',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a dynamic illustration featuring a group of Marvel superheroes, including Captain America, Iron Man, and others, in action poses. The artwork is vibrant, showcasing them in a heroic charge, with various characters depicted in bold colors and dramatic poses, emphasizing movement and strength.',
    postUrl: 'https://www.facebook.com/54618571998_791807106281718',
    totalEngagement: 4730,
  },
  {
    message:
      'Classic Comic - Avengers #60 (1969) - Wasp and Yellowjacket Wedding.Guest stars Spider-Man, X-men, Fantastic Four, Daredevil, Doctor Strange and Iron Man  Cover and art by John Buscema',
    id: '54618571998_651821260280304',
    publishTime: '2023-02-20T20:21:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/332455831_508977194519797_4007766818044988529_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yL0SQ0Gl670Q7kNvgHj1mwc&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYDPz_E3l0U0sDXYQDGVjuVXOxYZcsSQW-K3FByNMtokZQ&oe=679DDA40',
    status: 'SCHEDULED',
    imageDescription:
      'This is the cover of "The Avengers" comic, issue #60. It features several Avengers characters, including ones wearing suits with notable letters and symbols. A dramatic scene unfolds with a character in a wedding dress entangled by a large snake while others appear to be in distress or trying to assist. The bold text at the bottom reads "\'Til Death Do Us Part!" indicating a tense storyline.',
  },
  {
    shares: 1050,
    reactions: 3541,
    message:
      'Hanna & Barbera with some of the greatest Sat morning cartoons ever',
    id: '54618571998_758192512976511',
    comments: 126,
    publishTime: '2023-07-08T13:12:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/358055922_755510619911367_3660029699404651395_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9OSqDGh4bwwQ7kNvgHLm65g&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AuXIsvkg1_wDUFJ6cdv22t7&oh=00_AYDKd0P0XO25BX5Fc8apQjd3jKWPeBSXKsMYFrCduT3FnA&oe=679DEBC8',
    status: 'PUBLISHED',
    imageDescription: '',
    postUrl: 'https://www.facebook.com/54618571998_758192512976511',
    totalEngagement: 4717,
  },
  {
    message: 'Good grief',
    id: '54618571998_750628750399554',
    publishTime: '2023-06-28T16:09:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/356419275_750215880440841_6793966545936368868_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gXRNdkOofWcQ7kNvgEeIl87&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AS1qGJsq0Z9ZgV8qfukSk_U&oh=00_AYCEp8cAKCWONR3y5BRKJPiASmbZXPovBEUmNB5Jc_uBbg&oe=679DD554',
    status: 'SCHEDULED',
    imageDescription:
      'The image shows a cartoon character styled as Viking Thor, complete with wings on his helmet and wielding a hammer, looking up in surprise at another character on skis in the sky. There is a bright, colorful path beneath them leading toward a cityscape in the background. The scene combines elements of Norse mythology and skiing.',
  },
  {
    message: 'would have been a great show',
    id: '54618571998_854520766677018',
    publishTime: '2023-11-26T18:09:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/404955329_854245413371220_4083161824830656006_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QDJ-zdfBxe4Q7kNvgF7LdLL&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad1ff1s2cBGYM0_gvSA37EV&oh=00_AYB34DPhJ91aoSEqP7Q6PWApwRkwMff85bhZdzfcBLzlwg&oe=679DDC11',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image features four iconic superhero characters set against a retro-futuristic background with neon grid lines and a colorful sky. Two male superheroes are depicted flying in the air, while two female superheroes stand confidently in the foreground.',
  },
  {
    message:
      'Classic Comic - Defenders #10 (1973) - Hulk vs Thor battle. Avengers crossover. Art by Sal Buscema. Cover by John Romita',
    id: '54618571998_662399889222441',
    publishTime: '2023-03-05T20:38:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/334144276_147556898181490_2485908500870148459_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZGZwi02My8UQ7kNvgGBL1s3&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYBjrKJQEsxS_dEmDSFo2CX2vRP_2iNJryE9J-vzaiU5RQ&oe=679DF983',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a comic book cover titled "The Defenders" from Marvel Comics, issue #10, published in November. It features a dramatic battle scene between the Hulk and Thor, described as a "battle to the finish." The other characters\' faces are shown on the side, with the words "BREAK-THROUGH!" at the bottom.',
  },
  {
    message: 'such a great show',
    id: '54618571998_875880827874345',
    publishTime: '2023-12-27T17:11:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/415200136_875582054570889_3818157151927619683_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VkKmzndvAvoQ7kNvgE-51Rb&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AUTqRmWWQpOaWM27__8mqtj&oh=00_AYCPWtioEVT85-5hj6tP7e4liu4glukFqxYCt7X3L9GJUw&oe=679DD8C1',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image depicts three animated superheroes in action poses: Spider-Man swinging on a web in the center, Firestar on the left with a fiery aura, and Iceman on the right generating ice. They are set against a stylized background.',
  },
  {
    message: 'Dr Doom Poop bags',
    id: '54618571998_921828669946227',
    publishTime: '2024-03-01T15:09:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/428627670_917938540335240_5696609378085383187_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=MCxaVrJ9IaIQ7kNvgE4COHQ&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AMiFh2EetwMb3aS1X1CyXj0&oh=00_AYCMjHJFiYgzytyb5ZTITXhal3mRRQ_tLcqImEaG4xy03w&oe=679DE5E1',
    status: 'SCHEDULED',
    imageDescription:
      'The image shows a package of "Doom" brand dog poop bags. The packaging features a comic-style character illustration and text stating the bags are "durable & tear-resistant" and "unscented." The package contains 60 bags, measuring 8.67 x 11.8 inches. It also includes the slogan, "Only a lowly pawn, leaves poop on the lawn."',
  },
  {
    message:
      'Classic Comic - Incredible Hulk #118 (1969) -  Syb-Mariner vs Hulk. Lady Dorma appears. Herb Trimpe cover and art',
    id: '54618571998_823450933117335',
    publishTime: '2023-10-11T20:11:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/387203310_823435899785505_4292355222724121786_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DVayUopKtYAQ7kNvgEAfGMZ&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFN0am19oe23tkLvrxzAuej&oh=00_AYAdZQ1Y0PCuSuMGM0IGRjCLfcaoGw2qXsS80M8f5G-5zQ&oe=679DCB1F',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a vintage comic book cover titled "The Incredible Hulk" issue #118 from August, priced at 15 cents. It features the Hulk and the Sub-Mariner engaged in a battle underwater, with a woman lying nearby. The cover highlights that it guest-stars the Sub-Mariner.',
  },
  {
    shares: 467,
    reactions: 3990,
    message: 'By Kerry Callen',
    id: '54618571998_940662281396199',
    comments: 175,
    publishTime: '2024-03-28T16:10:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/434279335_940368534758907_3559926749047699024_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=23VWoVDEa-sQ7kNvgE3tcqZ&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A9vJEf3b3CAjZOCTfsxGoH2&oh=00_AYA74cZXX_fXxRwlVb0M19b7CXiERF8dmZyIopZ-XM99Qw&oe=679DE860',
    status: 'PUBLISHED',
    imageDescription:
      'The image depicts a humorous scene with characters resembling superheroes and mythological figures. A character in a green suit with horns is labeled Loki, holding a "Captain Marvel" copyright, accused of theft by a superhero in a red costume. A wizard-like character introduces himself as Shazam, while another superhero and a boy watch. The scene plays on copyright disputes over the character "Captain Marvel."',
    postUrl: 'https://www.facebook.com/54618571998_940662281396199',
    totalEngagement: 4632,
  },
  {
    message: 'on the back lot for Batman the TV series',
    id: '54618571998_634371282025302',
    publishTime: '2023-02-01T14:12:06+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/327946100_1874667206265162_5285818558113211109_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=O89llf-PJPAQ7kNvgFwxxOa&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Alupxj5DpbCH-SJ9oxPO6Md&oh=00_AYAQDjXtF6AV1LzzSAZxLch8fBphfh9DPYesfND9E1UeYA&oe=679DFC26',
    status: 'SCHEDULED',
    imageDescription:
      'The image shows the classic Batmobile parked next to a vintage black and yellow truck. Above them is a billboard advertising the "Batman" TV show on ABC, airing in color on Wednesdays and Thursdays.',
  },
  {
    message: '',
    id: '54618571998_617734200355677',
    publishTime: '2023-01-13T19:26:00+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/325290913_1292970321273387_4156684250372950895_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2STC0eCsp5oQ7kNvgE32vT5&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AEj86Fc0xlMaisai1dICqfl&oh=00_AYCVrHOE7NjKKB8e-RK52-dzn3SAKT1Xxu0HyYJD98F-ow&oe=679DEFF9',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A portrait of an elderly man wearing glasses with a quote attributed to Stan Lee, discussing the value of entertainment in life, suggesting that entertaining others is a meaningful and good pursuit.',
  },
  {
    shares: 441,
    reactions: 4067,
    message: '',
    id: '54618571998_772600594869036',
    comments: 72,
    publishTime: '2023-07-29T13:47:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/364085470_772338111561951_6634730426566588688_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QouTGzXJFUMQ7kNvgGwLh4s&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AxJt4ThoRXUxba1szmG7ZRv&oh=00_AYD1bx86BBmGLFyEEbj3NoYkNICLMWS34myWNXXB9eXT4A&oe=679DEB5F',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a poster for "The Incredible Hulk" featuring a muscular, green-skinned character standing in a desert-like environment with an intense expression. The title is prominently displayed at the top.',
    postUrl: 'https://www.facebook.com/54618571998_772600594869036',
    totalEngagement: 4580,
  },
  {
    message: 'Frank Frazetta - a true Legend',
    id: '54618571998_1119588940170198',
    publishTime: '2024-11-23T14:04:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/467642078_1119335873528838_6695922080886073168_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=oC4cXWGHK0wQ7kNvgHqCgjg&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFT13vH4zv0T-yKWrS8kNws&oh=00_AYAdUkdX6Mx9HOiNUv-aEDJOcnZodxQnIX0t1wyQnYdkTQ&oe=679DE220',
    status: 'SCHEDULED',
    imageDescription:
      'A person sits in a chair, focused on painting a canvas on an easel in a well-lit room with large windows. The artwork in progress features dark abstract shapes.',
  },
  {
    message:
      'Classic Comic - Champions #1 (1975) - Black Widow, Hercules, Angel, Ghost Rider and Iceman form the Champions.Cover by Gil Kane and Dan Adkins',
    id: '54618571998_799662885496140',
    publishTime: '2023-09-07T17:12:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/376579524_799643008831461_3335105213703082893_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fQ9UjDEXwIAQ7kNvgEuZ_pu&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYDfzbmwgEeoF81E582kZbLA4mWeXKf64ni3fmShEMK2Zg&oe=679DE704',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image is a cover of the first issue of a Marvel comic titled "The Champions." It features characters like Hercules, Black Widow, Angel, Ghost Rider, and Iceman. The scene shows the heroes in action with a text bubble saying, "Onward, my comrades: the time has come to face our greatest foes!" The cover is described as action-packed and highlights the origin of this superhero group.',
  },
  {
    message:
      'Classic Comic - Batman #13 (1942) Iconic WW2 cover. Joker Appearance. Jerry Siegel and Joe Dimaggio cameos.Cover by Jerry Robinson',
    id: '54618571998_627218799407217',
    publishTime: '2023-01-24T18:20:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/326695600_563721925438438_8349949563999522970_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=euBBenkhB08Q7kNvgFJhIgT&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Alupxj5DpbCH-SJ9oxPO6Md&oh=00_AYADrr3I907K_Nv-oqAxJTAKFy-kBFm7vsegeIqvpkUgFg&oe=679DE161',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image is a vintage comic book cover featuring Batman and Robin parachuting. Batman is in the foreground with a parachute, while Robin is landing on a target. The background is dark, with the bold red "BATMAN" title at the top. The cover is from issue No. 13.',
  },
  {
    message: '',
    id: '54618571998_681497053979391',
    publishTime: '2023-03-29T14:22:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/338141930_1088681585867737_3467845675359401586_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jwGH3Eeh-TEQ7kNvgFJLDzF&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AjtGYtRKUGGoHrazfSxAA5t&oh=00_AYABisoChJ2s1nOjok-fHGrOtwN08aTutF2ylSKdL_Q_iQ&oe=679DCE9F',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'A surprised woman with short dark hair and a pink sleeveless top is holding and looking at a "Detective Batman" comic book against a red background.',
  },
  {
    shares: 902,
    reactions: 3557,
    message:
      'one of my all time favorite cartoon characters - Huckleberry Hound\nart by The Artwork of Bill Sartain  ...please check him out',
    id: '54618571998_903732421755852',
    comments: 73,
    publishTime: '2024-02-04T18:09:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/425259292_901891375273290_3812299111566565480_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PKkJtc2bM4oQ7kNvgGRr4db&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AiXWsGT1VmkIehz87A_CgAK&oh=00_AYCCQjZvVN1C7sfU8fbe9EgCO6MrhJ9cHf6ZbI4tV6KPLQ&oe=679DCBB2',
    status: 'PUBLISHED',
    imageDescription:
      "The image features a cartoon-style blue dog standing upright. It has black ears and a yellow snout, wearing a pink collar and hat with a zigzag pattern. The character's arms are open wide in a welcoming gesture.",
    postUrl: 'https://www.facebook.com/54618571998_903732421755852',
    totalEngagement: 4532,
  },
  {
    message:
      'HAPPY BATMAN DAY - Batman #47 (1948) - 1st full origin of Batman.  Catwoman appears, Story by Batman co creator Bill Finger',
    id: '54618571998_806050611524034',
    publishTime: '2023-09-16T19:53:59+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/378561798_806050571524038_9056663824384941121_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=s5OTU_I2xPgQ7kNvgGkAcSB&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AeuYoz_Z6s18yKB-UbYSALw&oh=00_AYDYpwXRNdwyQRmeoogmGZ4aT689IIXb-dwjpsY2RkGctA&oe=679DC7C1',
    status: 'SCHEDULED',
    imageDescription:
      "The image displays a CGC-graded Batman #47 comic book cover, featuring the first detailed origin of Batman. The cover shows Batman standing behind a young Bruce Wayne, who is reading a newspaper about his parents' murder. The artwork includes the Bat-Signal and the Batmobile. The comic is graded 8.5, with a yellow and red color scheme highlighting the title and key details.",
  },
  {
    message: '1st we had Supes against Ali...now Bugs against Homer',
    id: '54618571998_659988202796943',
    publishTime: '2023-03-02T21:38:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/333960129_1825705234509657_9033360748508914816_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OGyEVHX5q1MQ7kNvgFQx9ST&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYBG7TVyPWH6XYdLm2Q0w--wy9mTh1mRS3CrJ7i0JMEn3w&oe=679DD740',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image depicts an animated boxing match between two well-known cartoon characters: a bunny and a bald man in boxing gloves. They are in a ring surrounded by a diverse crowd of other animated characters from various series, all under a starry sky. The scene is vibrant and full of dynamic poses, capturing a humorous and nostalgic crossover atmosphere.',
  },
  {
    message:
      'Classic Comic - Hulk #141 (1971) - 1st appearance and origin of Doc Samson. Cover by Herb Trimpe',
    id: '54618571998_850021550460273',
    publishTime: '2023-11-19T21:41:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/403759927_849853927143702_441233376170485824_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YR9DpLBoJ3gQ7kNvgFtoD4P&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A1JMZmQ38AIeooTJbQ1QLY-&oh=00_AYDWXnRa3PZIEKZfiqftunegjAC5-QF89MKph2jMsvGvng&oe=679DE66D',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic book cover titled "The Incredible Hulk" issue #141 from July, priced at 15 cents. It features the Hulk in combat with a muscular character with long green hair and a red outfit, identified as Doc Samson. A distressed woman is in the background, urging the Hulk not to harm him. The scene is dynamic with action and tension.',
  },
  {
    message: 'The Metal Men by Kerry Callen',
    id: '54618571998_949237140538713',
    publishTime: '2024-04-09T16:09:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/436936486_948926493903111_5046340489786794505_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=K9eQKliZsVYQ7kNvgFGHSUX&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AgWySNYoCQdWM2hsmdj80hA&oh=00_AYCAbFbFfpxs5U9fgwAiFJxmPR2n_ueSPcRwCkN5YSwF-g&oe=679DE370',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A group of stylized superheroes is depicted in a comic book style. Each character is uniquely costumed in vibrant colors, including blue, red, and orange hues, with metallic and armored elements. The group poses dynamically, and each character showcases distinct features and expressions, exuding energy and personality.',
  },
  {
    message: 'by Alex Ross',
    id: '54618571998_1161531165975975',
    publishTime: '2025-01-16T19:11:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/473382869_1160337496095342_1480539555046170643_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cOghGQsIKRIQ7kNvgEDM7D2&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AuRRKEzoP2P4qCBWI7mg21G&oh=00_AYBeQV-HRMzVPfhxbj4SGgqUOCv7s-BSXXSPuHDsajyxzg&oe=679DCCCA',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'A man in a superhero costume with a red "S" on his chest, surrounded by animals including a horse, a dog, a cat, and a monkey. The atmosphere is calm and affectionate.',
  },
  {
    message: '',
    id: '54618571998_783339360461826',
    publishTime: '2023-08-13T17:49:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/366973573_783008730494889_3890706798960243260_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=z07yTRm6NUoQ7kNvgHEmd9l&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFmhw3kNsmh72LjrMEnX1-g&oh=00_AYBD5nkCVOwgMKN_Dpq6D5YOarfeWztHPLOaWfrZ_A_V_w&oe=679DED08',
    status: 'SCHEDULED',
    imageDescription:
      'A character expresses feeling discouraged and hopes a comic magazine will cheer them up as they walk toward a store.',
  },
  {
    message:
      'Classic Comic - Amazing Spider-Man #39 (1966) - Classic 1st John Romita Spider-Man. Green Goblin Battle Cover, Goblin Revealed as Norman Osborn!. Cover and art by John Romita',
    id: '54618571998_1110413557754403',
    publishTime: '2024-11-11T20:23:07+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/465871258_1110413441087748_5260874993756404450_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=egSgf6OSW7sQ7kNvgEsgk_m&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AWiLMMO5XVPgpTX6RC14Hak&oh=00_AYDbb-FjFuWQCDj6rJyopd14XtY4bAN_9yGPLgJzsNAIsg&oe=679DE8F6',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'This is the cover of "The Amazing Spider-Man" comic issue #39. It features Spider-Man captured and unmasked by the Green Goblin, who is flying on his glider above a cityscape. The cover is colorful and includes the text "Spidey and the Green Goblin...Both Unmasked!"',
  },
  {
    message:
      'Batman Pin Up from Batman #181. the big reason why so many copies are missing the "poster"',
    id: '54618571998_905958004866627',
    publishTime: '2024-02-07T19:11:05+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/426354763_905564081572686_5504248262338194018_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ExeFNCpBGO8Q7kNvgFOWr0Q&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APsNzbbfu_cdkD25yK7t850&oh=00_AYA3Zh443CtFKB7V7pod32NdVSI3NcvbtI4z50Z5i_CMZA&oe=679DE9DE',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image is a vintage-style comic book illustration featuring Batman and Robin. Batman stands confidently with his hands on his hips, wearing his classic gray and blue costume with the yellow bat emblem. Robin stands beside him with arms crossed, wearing his traditional red, green, and yellow outfit. The background features a large bat symbol, and the caption reads, "Best Bat-Wishes Batman and Robin."',
  },
  {
    message:
      'Classic Comic - Captain America #109 (1969) - Origin of Captain America retold. Nick Fury appears. Cover and art by Jack Kirby and Syd Shores',
    id: '54618571998_763455892450173',
    publishTime: '2023-07-15T17:08:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/359709468_763207679141661_8357425611255280131_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=u0iK3_aRnokQ7kNvgGNwcjl&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ATc73HRWyp02Z-tyObKGEZm&oh=00_AYAr2pW4iyH4L7BjgbIRfFLhWTCr1E97_-jBM2ifLGqu9Q&oe=679DD516',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a comic book cover featuring Captain America prominently in the center, with the headline "The Origin of Captain America!" displayed at the top. Captain America is depicted in his iconic costume with a shield, bursting through a newspaper background. The cover includes classic comic book elements, such as a logo and issue information.',
  },
  {
    shares: 600,
    reactions: 3722,
    message: 'Best of Times',
    id: '54618571998_897361009059660',
    comments: 126,
    publishTime: '2024-01-26T19:10:06+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/422234579_896303502498744_8072841878601192155_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2oWUdYT7jmEQ7kNvgGp7HTj&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A8iaG7Ke0rbRc8cA6JwlJbb&oh=00_AYB-LfvVmcqugV_jADnnBOBTMff5zmAGJtO5V32jFEVUUg&oe=679DCCC8',
    status: 'PUBLISHED',
    imageDescription:
      'Two children sit on the floor watching a vintage TV displaying the "Batman in Color" logo. Surrounding the TV are illustrated characters from the classic Batman series, including Batman, Robin, Batgirl, Catwoman, The Joker, The Penguin, and Alfred. The scene emits a nostalgic feel, capturing a 1960s pop culture atmosphere.',
    postUrl: 'https://www.facebook.com/54618571998_897361009059660',
    totalEngagement: 4448,
  },
  {
    message:
      'Classic Comic - Batman #163 (1964) - Joker , Bat-Woman and Batgirl appear. Bill finger story. Sheldon Moldoff Cover',
    id: '54618571998_927323882730039',
    publishTime: '2024-03-09T16:02:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/430609423_923915243070903_7244433041520142629_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aI32ObLD778Q7kNvgHsoiDl&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANKEXX0ECxPXGcj1EQ1GtNe&oh=00_AYAcX3njpblKxwrZzgeRCsxBN9lKquzdPD_6KgD9oRPXgg&oe=679DDCD2',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The comic cover shows Batman on trial in a courtroom with the Joker acting as both the judge and the jury. Batman is standing in front of the bench, while Robin is restrained in the background. The cover text humorously alludes to Batman getting a "fair trial" amidst the chaotic scene.',
  },
  {
    message:
      'Classic Comic - Amazing Spider-Man #10 (1964) - 1st appearance of the Big Man and the Enforcers. Cover by Steve Ditko and Jack Kirby. Art by Steve Ditko',
    id: '54618571998_651663606962736',
    publishTime: '2023-02-20T16:12:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/332485059_602180751927054_1567934611230549440_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=A1SqC9KAyoEQ7kNvgGY52VV&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYDhlZm65ODOXoLyjFNcIF_8zWmN4XC4301xExXdbG1u9Q&oe=679DF55E',
    status: 'SCHEDULED',
    imageDescription:
      'The image is the cover of "The Amazing Spider-Man" comic book, issue #10. It features Spider-Man facing a group called "The Enforcers." The cover promotes the issue\'s content, mentioning a storyline about why J. Jonah Jameson really hates Spider-Man.',
  },
  {
    shares: 225,
    reactions: 4148,
    message:
      'Classic Comic - Tales to Astonish #91 (1967)  - 1st Abomination Cover. Abomination against the Hulk. Gil Kane cover. Bill Everett and Gil Kane art',
    id: '54618571998_789380586524370',
    comments: 56,
    publishTime: '2023-08-22T20:29:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/369990833_788961766566252_5230721623649102283_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YaBOQQtUOewQ7kNvgGqW9G3&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYCh5lThj2_LIg0KaFuB-Sw-9HZ8ryIGd5BhQWm4Kq34pA&oe=679DCDCD',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vintage comic book cover featuring "The Incredible Hulk and the Sub-Mariner" from the series "Tales to Astonish." Hulk is fighting with the Abomination. The tagline reads, "Whosoever harms the Hulk...!"',
    postUrl: 'https://www.facebook.com/54618571998_789380586524370',
    totalEngagement: 4429,
  },
  {
    message: 'By John Romita Sr',
    id: '54618571998_770694275059668',
    publishTime: '2023-07-26T16:11:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/361633142_770417498420679_4212873891197086954_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=U6POQDUD3eIQ7kNvgHkNE00&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AxJt4ThoRXUxba1szmG7ZRv&oh=00_AYDVNOf5xDXv5tTSU77k3cpwXzb0fUnfqOOh-hdPdvJyGg&oe=679DC7E3',
    status: 'SCHEDULED',
    imageDescription:
      'The image depicts a comic book drawing of Spider-Man in his iconic suit, prominently featuring his web-shooting pose. Surrounding Spider-Man are illustrated faces of various characters, including allies and villains, creating a collage effect.',
  },
  {
    message:
      'Classic Comic - Avengers #100 (1972) - All current and former Avengers show up in this issue. Cover by Barry Windsor Smith',
    id: '54618571998_619543790174718',
    publishTime: '2023-01-15T19:41:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/325821157_1231887637708704_7854019889752802967_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=F6TlhXKPr4oQ7kNvgF4sE2e&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AEj86Fc0xlMaisai1dICqfl&oh=00_AYAFHlNN_t8ZmOO8HkAt-F_jq4zIeh117uDiedAfrTz4yQ&oe=679DE460',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is a vintage comic book cover for "The Avengers" Issue #100. The cover features various superheroes, including Thor, Captain America, Iron Man, and the Hulk, dynamically posed as they seemingly charge forward. It boasts "The Mightiest 100th Issue of All!!" and the phrase "Avengers Assemble!" at the bottom, emphasizing the unity and action theme of the series.',
  },
  {
    message: 'I wanted all of these',
    id: '54618571998_877144527747975',
    publishTime: '2023-12-29T14:26:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/415194232_876964464432648_4863203428887201194_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IByCzMKPREoQ7kNvgEjaiDk&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AUTqRmWWQpOaWM27__8mqtj&oh=00_AYDbSIaM4ByB4zN0-N3STF1cR2IkXM2VPnl2pDryMjk5pg&oe=679DED52',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image is a vintage advertisement showcasing a collection of superhero and villain action figures. The characters include Shazam, Captain America, Thor, Joker, Spider-Man, Batman, Robin, Penguin, Superman, Hulk, and others, each labeled with names and model numbers. The figures are arranged on a gradient orange background with the tagline "Super Heroes\u00ae is on the march."',
  },
  {
    shares: 358,
    reactions: 3917,
    message:
      'Vampirella #1 (1969) - Frank Frazetta cover; Origin and 1st Appearance of Vampirella.',
    id: '54618571998_732043738924722',
    comments: 92,
    publishTime: '2023-06-03T21:24:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/350943813_776532120537545_3038690794834522025_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-2LKbetTC4oQ7kNvgHVoeLN&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDWRC2mfkXFbh8H3P2JVBd&oh=00_AYDyaa2e2M3Plrgbxb3-24HVSrKbU8yXQn0opxowXOaoKQ&oe=679DFA4E',
    status: 'PUBLISHED',
    imageDescription:
      'This image is the cover of "Vampirella" issue #1, featuring a prominent illustration of a woman in a revealing red outfit with long dark hair. The background shows a large moon, and a skull is placed near her feet. The cover emphasizes captivating tales about fantastic females.',
    postUrl: 'https://www.facebook.com/54618571998_732043738924722',
    totalEngagement: 4367,
  },
  {
    message: 'finally',
    id: '54618571998_902370805225347',
    publishTime: '2024-02-02T19:11:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/424928982_902012711927823_1279966262378540853_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pX5Hj4t3mnkQ7kNvgEeoEbi&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AiXWsGT1VmkIehz87A_CgAK&oh=00_AYBX_iiyVDY9LX8u4_NiMQzkeYmAjAgaL2q7fAY2_JSoXQ&oe=679DEE10',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The comic strip is a parody combining "Peanuts" and "Spider-Man." Lucy holds a football for Charlie Brown, who is skeptical but eager to kick it. Just as he approaches, Spider-Man swings in and intercepts the ball with his web, yelling "Scores!!" Charlie Brown cheers the unexpected twist with delight.',
  },
  {
    shares: 479,
    reactions: 3731,
    message: 'my kind of heaven',
    id: '54618571998_768073945321701',
    comments: 142,
    publishTime: '2023-07-22T16:06:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/362643575_767839785345117_1435918525054014887_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-mD-0wVhJecQ7kNvgHxx2WR&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ATc73HRWyp02Z-tyObKGEZm&oh=00_AYAq4SLvQyuUtPyY-HW4qNRCmUbzvgToSVQlrgrZJ9lEew&oe=679DF8FE',
    status: 'PUBLISHED',
    imageDescription:
      'A person is lounging on a bed in a room filled with stacks of comic books. The walls are covered with comic and superhero posters, creating a vibrant, fan-centric environment.',
    postUrl: 'https://www.facebook.com/54618571998_768073945321701',
    totalEngagement: 4352,
  },
  {
    shares: 298,
    reactions: 3979,
    message:
      'Classic Comic - Amazing Spider-Man #20 (1965) - 1st appearance of the Scorion. Pin-up page of Peter Parker (many times missing). Steve Ditko cover and art',
    id: '54618571998_779722920823470',
    comments: 63,
    publishTime: '2023-08-08T17:19:00+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/365216383_779465454182550_8270711860946368986_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VdHNAj7koN0Q7kNvgGlU40K&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ap-gkw9jU2HMot4HcT8m766&oh=00_AYBwAaZG6vvkTJL21wgyyPPxbnX8F1odAYglblrE-Nympg&oe=679DD864',
    status: 'PUBLISHED',
    imageDescription:
      'This image is the cover of "The Amazing Spider-Man #20." It features Spider-Man being held by the Scorpion against a cityscape background. The text highlights the introduction of the Scorpion as a formidable villain.',
    postUrl: 'https://www.facebook.com/54618571998_779722920823470',
    totalEngagement: 4340,
  },
  {
    message: 'Fire and Ice by Frank Frazetta (1983)',
    id: '54618571998_1115911233871302',
    publishTime: '2024-11-18T22:22:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/467405526_1115866633875762_8047868717345301754_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kdB4mSRj5JkQ7kNvgHaH9fa&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFT13vH4zv0T-yKWrS8kNws&oh=00_AYDiqJy4gVxZtLsQmGUcUmy0luZmcTfJJr9deY-p6Ev3aA&oe=679DD227',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is a dramatic, fantasy artwork depicting a powerful, muscular warrior holding an axe, standing triumphantly atop a rocky terrain. Surrounding him are both men and women, appearing dynamic and intense, amidst a rugged landscape featuring dramatic mountains and a tumultuous sky. The style is vivid and action-oriented, consistent with classic pulp fantasy illustrations.',
  },
  {
    message:
      'Classic Comic - Fantastic Four #39 (1965) - Daredevil and Dr Doom appears. Cover and art by Jack Kirby and Wally Wood',
    id: '54618571998_830540399075055',
    publishTime: '2023-10-21T16:54:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/394307958_830191249109970_5716652217988259177_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AahUYPDSqDoQ7kNvgHj4o7C&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AvEhpGDi1HQFkGgpMJudFl6&oh=00_AYCK2g-fbrse58PcoOMCNrSj8tH--NeRnc_E-I-dQEh3og&oe=679DF432',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The comic book cover features "Fantastic Four" issue 39. The title states "A Blind Man Shall Lead Them!" Above the Fantastic Four members, Doctor Doom menacingly looms in the background. In the foreground, Daredevil leads the team through a city street. The Comics Code Authority seal is visible in the top right corner.',
  },
  {
    message:
      'Classic Comic - Batman #80 (1953/54) - Sci-Fi cover. Joker story. Bill Finger story. Win Mosrtimer cover.',
    id: '54618571998_752130780249351',
    publishTime: '2023-06-30T17:57:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/356838481_751809503614812_5845459144121397021_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=76UxCboXHScQ7kNvgFK8wI3&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AS1qGJsq0Z9ZgV8qfukSk_U&oh=00_AYAFnJI8OEk9FN53J9WuLuuEIIQElrOfJEt7EsnC0jDsQQ&oe=679DDD97',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage comic book cover featuring Batman and Robin. They are thwarting a bank robbery at the "Bank of Gotham" by stopping a red, drilling machine filled with money. The title reads "BATMAN," and it features the story "Machines of Menace!"',
  },
  {
    shares: 659,
    reactions: 3621,
    message:
      'Classic Comic - All Star #36 (1947) - Batman and Superman Guest star.1st time Batman , Superman & Wonder Woman appear together on a cover . Cover and art by Irwin Hasen',
    id: '54618571998_668811721914591',
    comments: 28,
    publishTime: '2023-03-13T17:27:27+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/336382782_2134519013413404_882312936911317083_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7-v7V2gRU7MQ7kNvgFCBL5y&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AxjXGRI5F_kLVcGnmbzoU2h&oh=00_AYB2FJ9CenJ-QRj8UXduolQqJXiChCTAtr4pIKzhxGB7RA&oe=679DF22C',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book cover for "All Star Comics" No. 36, featuring the Justice Society of America. Prominently displayed are superheroes in action poses, including Superman and Batman as guest stars. The cover announces a full-length adventure with characters like The Flash, Green Lantern, Hawkman, Dr. Mid-Nite, and Wonder Woman. The issue is priced at ten cents, dated August-September, and published by DC.',
    postUrl: 'https://www.facebook.com/54618571998_668811721914591',
    totalEngagement: 4308,
  },
  {
    message:
      "Classic Comic - Detective #157 (1950) - Gotham Police Women's Academy cover.Cover by Win Mortimer",
    id: '54618571998_793718992757196',
    publishTime: '2023-08-29T17:17:06+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/371433873_793473936115035_7558644407841179362_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1KWfTIBaQ7MQ7kNvgGSixZ1&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFPZWKt5JZ1PFEs5yzutf_Z&oh=00_AYCQcffrssctes7BrVglAEajtsbLYxLYDU8bQLuCieci0g&oe=679DF7DA',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image is a cover of Detective Comics No. 157, featuring Batman and Robin. The title suggests a story involving the Gotham City Policewomen\u2019s Academy. Robin is seen carrying Batman in a training exercise, observed by several women in uniforms. The cover also mentions "Pow-Wow Smith, Indian Lawman" and is priced at 10 cents.',
  },
  {
    message:
      'Tom Tyler as the Phantom, Jeanne Bates as Diana Palmer, and Ace the Wonder Dog as Devil in the 1943 movie serial',
    id: '54618571998_925820799547014',
    publishTime: '2024-03-07T14:07:06+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/431312300_923583816437379_3122276186891057490_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ia3r9ZfkdEAQ7kNvgH-YnBu&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ANKEXX0ECxPXGcj1EQ1GtNe&oh=00_AYB-W0vLNUBxcK-lIAK3oYLeeiWeb6dR88Oo8xhk0DwIgg&oe=679DDAED',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage black-and-white photo featuring a woman in a striped blouse and skirt standing next to a person in a superhero costume with a mask and boots. A German Shepherd dog is sitting beside them. The background seems simple with soft lighting.',
  },
  {
    message: 'X-Men Special Edition #1 cover art by Dave Cockrum, 1982.',
    id: '54618571998_792538309541931',
    publishTime: '2023-08-27T19:22:21+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/371025127_791782426284186_4980561426960898641_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=s-S23AenslMQ7kNvgH1OUBi&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFPZWKt5JZ1PFEs5yzutf_Z&oh=00_AYCN2MNWZBMlDc00ffa0WhwnQ5k_EmZEVO7g6giWVHVZTg&oe=679DE584',
    status: 'SCHEDULED',
    imageDescription:
      'This is a cover image of a "Special Edition X-Men" comic from Marvel Comics. It features various X-Men characters in dynamic, action-packed poses against a vibrant background, with a large creature in the top left corner. The text highlights "The Very First Adventure of the New X-Men" along with additional content about the "Secrets of the X-Mansion." The art style reflects a classic comic book aesthetic.',
  },
  {
    shares: 344,
    reactions: 3700,
    message: 'time for cartoons',
    id: '54618571998_849920883803673',
    comments: 187,
    publishTime: '2023-11-19T18:09:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/404105063_849605030501925_1391441609471147569_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-f_Cpy9pupoQ7kNvgF3POZh&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A1JMZmQ38AIeooTJbQ1QLY-&oh=00_AYBAGCMt2yIyMJUFc_Vxnk5KXVoms5NWtkW2wcNfuV5cVw&oe=679DF1C2',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a promotional poster for "The Herculoids," featuring various heroic characters and creatures, including a rock-like figure, a rhino-like beast with a horn, a dragon, and a gelatinous entity. The title is prominently displayed at the top.',
    postUrl: 'https://www.facebook.com/54618571998_849920883803673',
    totalEngagement: 4231,
  },
  {
    shares: 531,
    reactions: 3588,
    message:
      'Classic Comic - Green Hornet #1 (1967) - Bruce Lee Photo cover. Green Hornet & Kato Pinup back cover. Dan Spiegle art\n\nYou can see the current value of this book (or any Comic) here on our website for free\nhttps://www.comicspriceguide.com/titles/the-green-hornet/1/phpqhw',
    id: '54618571998_1158387716290320',
    comments: 106,
    publishTime: '2025-01-12T20:59:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/473099962_1158376859624739_2208149099085293976_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=B1s8C1wMw_oQ7kNvgHxFYo0&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AuRRKEzoP2P4qCBWI7mg21G&oh=00_AYBFAB71dHe9poyh9MArWbE78IZHgy7dsdRUAD45_694IA&oe=679DDAD1',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vintage comic book cover for "The Green Hornet" by Gold Key, priced at 12 cents. It features two masked characters, likely the Green Hornet and Kato, with a note on the door warning them. The text describes them battling a ruthless gang that forces victims to obey criminal commands.',
    postUrl: 'https://www.facebook.com/54618571998_1158387716290320',
    totalEngagement: 4225,
  },
  {
    shares: 293,
    reactions: 3842,
    message:
      'Classic Comic -  X-Men #19 (1966) - Origin and 1st appearance of the Mimic. Kirby, Roth and Ayers cover',
    id: '54618571998_759254486203647',
    comments: 58,
    publishTime: '2023-07-09T21:19:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/358632274_759084372887325_3645618607212481299_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nwnm9dH4lxEQ7kNvgFuGsEy&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AuXIsvkg1_wDUFJ6cdv22t7&oh=00_AYB46eWNq9UcHDqS9JOp69iEIJexBOmcJ4cRo1O-hVuIvA&oe=679DE441',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vintage comic book cover for "The X-Men" issue #19 from April. It features a character with large wings and several other characters in superhero costumes. The text reads, "IS THE MIMIC ANOTHER MUTANT? --OR SOMETHING FAR WORSE?" It\'s published by Marvel Comics.',
    postUrl: 'https://www.facebook.com/54618571998_759254486203647',
    totalEngagement: 4193,
  },
  {
    message:
      'Vampirella #1 (1969) - Frank Frazetta cover; Origin and 1st Appearance of Vampirella.',
    id: '54618571998_967196898742737',
    publishTime: '2024-05-04T23:31:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/440868292_965944185534675_5103397918225755963_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=L67JtCXXwusQ7kNvgGlQ39M&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A85M5KuolsBPj4E-57EiotJ&oh=00_AYBIDgdTquPDqcJxnmn63yZZnxsxbI-0Xbv9SA5pijhaQQ&oe=679DC388',
    status: 'AWAITING_APPROVAL',
    imageDescription: '',
  },
  {
    message:
      'Classic Comic - Avengers #110 (1973) - X-Men and Magneto appear . Story continued  in Daredevil #79. Cover by Gil Kane',
    id: '54618571998_1111227514339674',
    publishTime: '2024-11-12T21:23:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/466336010_1110765467719212_5455480471905430383_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mDH9u8SeikgQ7kNvgHzeScE&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AWiLMMO5XVPgpTX6RC14Hak&oh=00_AYCEFpoGM31VJ-2rF17_ptsAdzrQqrOPcf0GaZI0WrzKLA&oe=679DD3BE',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic book cover titled "The Avengers" from Marvel Comics, issue #110, dated April. It features a villain triumphantly standing over defeated superheroes. The text highlights, "I did it! I, Magneto, have destroyed the X-Men!" and implies an impending threat to the Avengers. Various heroes are depicted in dynamic poses.',
  },
  {
    shares: 308,
    reactions: 3739,
    message: 'Marvel Poster by John Buscema',
    id: '54618571998_989627646499662',
    comments: 110,
    publishTime: '2024-06-04T18:12:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/447881436_989309699864790_9140059915742270372_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DlB7lNstGzwQ7kNvgGi_3q8&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A9PfgubOhv55BUOFYUV6Ler&oh=00_AYCphYvYMNGbb0za0SeBqI3J5ZcTtcvSboTGftTgeq7_BQ&oe=679DCA51',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vibrant, dynamic illustration featuring a collection of Marvel superheroes and villains in action poses, showcasing characters like Spider-Man, Thor, Iron Man, and others, with a classic comic book art style. The poster was made for the 1975 Marvel Convention by John Buscema and Joe Sinnott.',
    postUrl: 'https://www.facebook.com/54618571998_989627646499662',
    totalEngagement: 4157,
  },
  {
    shares: 379,
    reactions: 3720,
    message:
      'Classic Comic - Amazing Spider-Man #62 (1968) - Spidey vs Medusa . Cover by John Romita',
    id: '54618571998_616087117187052',
    comments: 48,
    publishTime: '2023-01-11T20:26:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/323461452_1331775460955287_5553193227339243507_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=emTD0K9nL4EQ7kNvgFEsANx&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANEcB3dbg9ERQ64wxt3zug_&oh=00_AYBoGTLhJL9gnuH-TM6kR1zMUsygB8B1v1AGRWtF5z48_Q&oe=679DF117',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vintage comic book cover of "The Amazing Spider-Man" issue #62, featuring Spider-Man captured by Medusa, who is standing over him with her hair wrapped around his body. The cover artwork emphasizes Medusa\'s hair as a powerful weapon, with the text "The Name of the Dame is... Medusa!" prominently displayed.',
    postUrl: 'https://www.facebook.com/54618571998_616087117187052',
    totalEngagement: 4147,
  },
  {
    message: '',
    id: '54618571998_10158834811376999',
    publishTime: '2021-04-06T16:41:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/169461836_10158834811231999_1469957779661969698_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xTjvFXtLJQIQ7kNvgFwpR_x&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AznWKKcyUvTB23EFe2RVM0D&oh=00_AYA90v0X_CyJrF7f_F1fez39ThC8qwWuIbiHOeNR4l-BQA&oe=67BF6CB9',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image highlights Ming-Na Wen\'s roles: as a Disney princess, a Marvel superhero, and a Star Wars character, achieving a "Disney hat trick."',
  },
  {
    message:
      'Classic Comic - Detective #38 (1940) - 1st appearance and origin of Robin (Dick Grayson). Stories by Bill Finger . & Jerry Siege. Cover and art by Bob Kane & Jerry Robinson',
    id: '54618571998_691983249597438',
    publishTime: '2023-04-12T15:10:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/340942724_177070478550855_7822758991855654060_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=exUfNojcFQ0Q7kNvgE_RWQ6&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AlpbJrh9swE9shsKu1FU20_&oh=00_AYAaxrz2JV5grTuKUyT8HhBQQmh_VqP5o3qwESwXUf2jgw&oe=679DE695',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a comic book cover of "Detective Comics No. 38," featuring the introduction of Robin, the Boy Wonder. It shows Robin standing in a dynamic pose with Batman beside him. The cover text announces Robin as "The Sensational Character Find of 1940," with a backdrop of vibrant colors and classic comic book styling.',
  },
  {
    message: "Superman Kellogg's Pep Cereal Retail Standee 1947",
    id: '54618571998_911637950965299',
    publishTime: '2024-02-15T14:21:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/426400582_911436380985456_6402498413440952327_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fNdihw1crM0Q7kNvgGTH-kd&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=APsNzbbfu_cdkD25yK7t850&oh=00_AYDz3EopoTp-biB1WDIYOtmCormFTbKIDwrzm78LJ3UzYA&oe=679DDA1D',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage advertisement featuring Superman with children, promoting Kellogg\'s Pep whole wheat flakes. The phrase "Boy! it\'s SUPER" is prominently displayed. The scene includes a bowl of cereal topped with banana slices.',
  },
  {
    message:
      'Classic Comic - Six Million Dollar Man #1  (1976) - 1st appearance of Steve Austin in comics. Based on the hit ABC TV Series. Cover and art by Joe Staton',
    id: '54618571998_695387535923676',
    publishTime: '2023-04-16T18:29:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/341382714_687952729800784_5244309871091457065_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AthSOFgiW40Q7kNvgGQjJ8X&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AlpbJrh9swE9shsKu1FU20_&oh=00_AYDiR_DOJ7y74VGFmJcYoMVeD3WgylzcZ8FqZ3ftwqdDeA&oe=679DCF2C',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is a vintage comic book cover titled "The Six Million Dollar Man," published by Charlton Comics for 30 cents. It features an action scene with a man holding a damaged robotic figure amidst debris and flames.',
  },
  {
    message:
      'Classic Comic - Superman #50 (1948) - Prankster appears. Cover by Wayne Boring and Stan Kaye',
    id: '54618571998_765509845578111',
    publishTime: '2023-07-18T17:03:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/361860672_765128992282863_6794129893556204463_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JlQNcMzZSqsQ7kNvgGqq5qt&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ATc73HRWyp02Z-tyObKGEZm&oh=00_AYBLoGPwlwKy7Kn_xF_TftwW9Umhcd7XxGu03bXIz0lmCg&oe=679DF606',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a vintage comic book cover featuring Superman confidently standing in front of a lion inside a circus cage. The title "SUPERMAN" is prominently displayed at the top, with issue number 50. Two children look on in awe from behind the bars. The cover is colorful and dynamic, typical of classic superhero comics.',
  },
  {
    message:
      'Classic Comic - Amazing Spider-Man #16 (1964)- 1st meeting of Spider-Man and Daredevil. Art and cover by Steve Ditko',
    id: '54618571998_610638784398552',
    publishTime: '2023-01-04T20:18:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/324077471_2066477780408718_2875591425050103863_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=flwPsfUPSjUQ7kNvgFdkwwt&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ANEcB3dbg9ERQ64wxt3zug_&oh=00_AYDkkADhmYOWVxvMB_wdxifycG06nSKsLaUkYfhMU-wKPg&oe=679DF92F',
    status: 'SCHEDULED',
    imageDescription:
      'The cover of "The Amazing Spider-Man" issue #16 features Spider-Man and Daredevil in action, with the text "Spidey Battles Daredevil!" The Ringmaster appears in the background. Published by Marvel Comics in September, priced at 12 cents.',
  },
  {
    message: 'Jack Kirby and friends',
    id: '54618571998_577948191000945',
    publishTime: '2022-11-30T15:20:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/317356986_577652024363895_7609306556221050860_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6EXA506ha0AQ7kNvgH2vZBW&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AgeuWbsv7KaB-eO50OGO54R&oh=00_AYDBBYorgwYnEWXX7yeBT9b0CSdhowfwoLpNkUFuBgG2yg&oe=679DF853',
    status: 'SCHEDULED',
    imageDescription:
      'The image depicts a comic book artist at a drawing board surrounded by various iconic superhero characters in action poses. The heroes seem to be emerging from the drawings, creating a dynamic and lively scene.',
  },
  {
    shares: 391,
    reactions: 3625,
    message: 'Classic Vampirella Door Poster from 1972 . Art by  Jose Gonzalez',
    id: '54618571998_747128560749573',
    comments: 69,
    publishTime: '2023-06-23T18:18:05+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/355119674_745415174254245_5716407634938733065_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ctoD3PLYAOgQ7kNvgFJLfip&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ASXWjd5_HguOydGi6Cp1YcZ&oh=00_AYDflguLHhIFpIkE9__kBVkiUmJkzOWlkrcNOxn3WWhgTA&oe=679DD565',
    status: 'PUBLISHED',
    imageDescription:
      'The image depicts a woman with long dark hair wearing a red, revealing costume. She is positioned assertively, holding a bat towards the viewer. The artwork has a bold and dynamic style, typical of comic or graphic novel illustrations.',
    postUrl: 'https://www.facebook.com/54618571998_747128560749573',
    totalEngagement: 4085,
  },
  {
    message: 'I sure wish I had kept these',
    id: '54618571998_1096675765794849',
    publishTime: '2024-10-25T14:10:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/464199643_1096437529152006_6626853208898001355_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EECkZjSnTiEQ7kNvgEbEjpn&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ADDmRUtM0kuySVKVPfSiMxo&oh=00_AYAN8VtKHA2vL_cJyqrU7rgFF5YM04HMjLa1133q73qkJg&oe=679DF301',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'This is a vintage comic-style advertisement for "Captain Action," a toy that can transform into different superheroes and characters. The image showcases Captain Action at the center, with various heroes he can become, including Superman, Batman, Aquaman, Captain America, and others. The text highlights the toy\'s interchangeable face masks and uniforms, allowing fans to change Captain Action into different characters.',
  },
  {
    message:
      'Classic Comic - Superman #24 (1943) - Iconic Flag Cover by Jack Burnley. A true piece of comic book history',
    id: '54618571998_628913942571036',
    publishTime: '2023-01-26T16:10:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/327589312_695182695632578_8043385936108946285_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Pevuq-5zBZMQ7kNvgEZ_p_B&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Alupxj5DpbCH-SJ9oxPO6Md&oh=00_AYBUD7s7wPqvBXbm7AeJnm2RhLy5Z0armHGolvQvYI4DPA&oe=679DE2D1',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image is a vintage comic book cover featuring Superman standing proudly with hands on hips while holding an American flag. The background showcases a stylized city skyline. The title "Superman" is prominently displayed at the top, along with the issue number and price.',
  },
  {
    message:
      'Classic Comic - Batman #47 (1948)  - 1st comic to have the Full Origin of Batman.. Catwoman appears Stories by Bill Finger. Bob Kane cover',
    id: '54618571998_691323212996775',
    publishTime: '2023-04-11T18:45:45+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/340101805_600279025348420_4186032010369314344_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=KHIG0mb3gQYQ7kNvgHUsWep&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AlpbJrh9swE9shsKu1FU20_&oh=00_AYCmU2rfSGxZ8Mz_VqMkBWivwvMKTl2RJfxvClGbdgB62Q&oe=679DFC61',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This image is a classic comic book cover featuring Batman, titled "Batman No. 47". It is described as a 52-page magazine with a special story on "The Origin of Batman". The cover shows a young man, presumably Bruce Wayne, sitting at a desk with a newspaper headlined "Socialite Thomas Wayne Killed," while the shadow of Batman looms over him. Batman-themed vehicles, like an airplane and Batmobile, are flying around in the background. The logo of DC Comics is also visible.',
  },
  {
    message: 'the best of times',
    id: '54618571998_894561632672931',
    publishTime: '2024-01-22T22:33:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/421675270_893662769429484_8703967345412688682_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=umlYwC7gz_EQ7kNvgEv6JHf&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8iaG7Ke0rbRc8cA6JwlJbb&oh=00_AYAjtVFRDdFhLDPlJeFEDH-yroxA5GRaBhlsjZ5Woxd5ag&oe=679DED8C',
    status: 'SCHEDULED',
    imageDescription:
      'Three children excitedly approach a rack filled with comic books. One exclaims, "Ah! Comic books!!" The comics have various expressive titles like "SLAM," "BANG," and "POW."',
  },
  {
    message: "by Kerry Callen \nDon't forget folks he does commissions",
    id: '54618571998_887233403405754',
    publishTime: '2024-01-13T05:06:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/419688127_887217553407339_4876421982484280886_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=SEzXXEIQMi0Q7kNvgEjjASB&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AnI2vm1qwoJyPrblQR7BRtx&oh=00_AYDFrJ9H967K--9OQQSTQRSTeikYun1pss96nohlmogoDw&oe=679DCD2E',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic strip parody titled "Super Antics #9" where Wonder Woman humorously criticizes various superheroes like Superman, Batman, and Green Lantern. She speaks truthfully due to the effect of her lasso of truth, inadvertently blurting out embarrassing observations about them.',
  },
  {
    message: '',
    id: '54618571998_1140016988127393',
    publishTime: '2024-12-19T17:06:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/470691631_1139682888160803_3528303667701875872_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kW2e0IMdyH8Q7kNvgH73nF_&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ApXEvBg0bIfUdm-NblRBs-a&oh=00_AYAPINtKkZS148khZuhfgTxcgOyIeKl6_mTHSeZSNflnNw&oe=679DC902',
    status: 'SCHEDULED',
    imageDescription:
      'The image features a Christmas scene with superheroes riding in Santa\'s sleigh, flying across a full moon. "Merry Christmas" is written in red at the top against a snowy landscape background.',
  },
  {
    shares: 769,
    reactions: 3217,
    message: 'promotional ad for the Green Hornet TV series',
    id: '54618571998_634507638678333',
    comments: 55,
    publishTime: '2023-02-01T17:19:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/327300427_1466750750757461_6562445198128715670_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vX7JlsjSE58Q7kNvgGv-M2g&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Alupxj5DpbCH-SJ9oxPO6Md&oh=00_AYB0cLx4aEW32I97c-VECfQdfvgiKZksMJc6GQOKtEhbdw&oe=679DE987',
    status: 'PUBLISHED',
    imageDescription:
      'Two masked characters, one in a long coat and the other in a suit, stand in front of a large green hornet emblem. The text "The Green Hornet" is displayed prominently at the bottom. The background is green.',
    postUrl: 'https://www.facebook.com/54618571998_634507638678333',
    totalEngagement: 4041,
  },
  {
    message:
      'Classic Comic - Fantastic Four #28 (1964) - Early X-Men Appearance. The Puppet Master, Awesome Android and Mad Thinker appear. Cover and art by Jack Kirby',
    id: '54618571998_656996673096096',
    publishTime: '2023-02-26T20:41:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/333580110_1230989144508215_8815824952199564081_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TdZaWOtnxjMQ7kNvgGOjz2H&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYB-gHCKby5E0c93LKfJAE9QYUnoyMBQmhdzURhP0y5iWQ&oe=679DF0C7',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic book cover titled "Fantastic Four," featuring the Fantastic Four and X-Men teams in action. The cover highlights a crossover event with guest appearances, including characters such as Mr. Fantastic, Human Torch, and members of the X-Men. It mentions "The Mad Thinker," "The Puppet Master," and "The Awesome Android," accentuating a dramatic scene.',
  },
  {
    shares: 452,
    reactions: 3389,
    message: 'what a great cartoon',
    id: '54618571998_701137008682062',
    comments: 194,
    publishTime: '2023-04-24T13:05:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/342989981_1647028579064219_3469648420900978594_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ck1tKEfIeN0Q7kNvgFslnL5&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A7jDnAwd5xQtUEgw6tdzuym&oh=00_AYDlTZ0UnjxSRrfB8UHz2Gsk6dK9TrZWwLlakzxNLdXmAA&oe=679DED46',
    status: 'PUBLISHED',
    imageDescription:
      'The image features four animated superhero characters. Three are wearing blue and yellow costumes with masks, and one character is a white-suited hero with a black head covering and red accents. They are posed confidently against a background with large yellow letters.',
    postUrl: 'https://www.facebook.com/54618571998_701137008682062',
    totalEngagement: 4035,
  },
  {
    shares: 328,
    reactions: 3649,
    message:
      'Classic Comic - Batman #139 (1961) - 1st Appearance of the Original Bat-Girl. Batwoman appears. Cover by Sheldon Moldoff. Bill Finger story',
    id: '54618571998_811485720980523',
    comments: 50,
    publishTime: '2023-09-24T18:36:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/382230731_811172347678527_5718031861652716037_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XYBeQTsKM6IQ7kNvgEUzsLE&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AQ6uIXz3wArX-td61b3bq_j&oh=00_AYAJQj4bOpNQmJbOSACNJo7xhTGv-uNszOe0lWerwGSWJw&oe=679DED36',
    status: 'PUBLISHED',
    imageDescription:
      'This is the cover of a vintage Batman comic book, issue No. 139, featuring Batman, Robin, and Batwoman meeting Bat-Girl. The illustration shows Bat-Girl swinging into action to rescue Batman, Robin, and Batwoman, who are trapped by an electronic ring. The comic is priced at 10 cents and includes approval by the Comics Code Authority.',
    postUrl: 'https://www.facebook.com/54618571998_811485720980523',
    totalEngagement: 4027,
  },
  {
    message: 'by Alex Ross',
    id: '54618571998_882685110527250',
    publishTime: '2024-01-06T19:17:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/417539790_882308987231529_1825251915657967373_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Xc-fjKAIsGwQ7kNvgE-2nCf&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Aq9BZLyejJs2C5ZtYhRhe9s&oh=00_AYAD5pRWFPDr8LqH7QoYltnMLOHb8urD6xzy8kjNJn0OJQ&oe=679DCF03',
    status: 'SCHEDULED',
    imageDescription:
      'The image features Spider-Man and Superman standing back to back with arms crossed, set against a bright yellow background.',
  },
  {
    shares: 204,
    reactions: 3729,
    message: 'by John Byrne',
    id: '54618571998_901672435295184',
    comments: 77,
    publishTime: '2024-02-01T19:11:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/424716030_901326471996447_5327692714774069962_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OMKWw-6ePYEQ7kNvgE1317Q&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AiXWsGT1VmkIehz87A_CgAK&oh=00_AYAcEQ0qby9WG9ju7yfbY_f3whWJeVBQCMt5sP3kJ0WFSg&oe=679DDEB7',
    status: 'PUBLISHED',
    imageDescription:
      'The image depicts four superheroes. One is engulfed in flames, another is made of rock, a third has an elastic body stretching forward, and the fourth is a woman with blonde hair in a black suit. They appear poised and ready for action.',
    postUrl: 'https://www.facebook.com/54618571998_901672435295184',
    totalEngagement: 4010,
  },
  {
    message: 'by Alex Ross',
    id: '54618571998_851257290336699',
    publishTime: '2023-11-21T17:11:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/404105500_850860567043038_3543794861840795636_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qU3AlwpBfeQQ7kNvgFXkJ0W&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad1ff1s2cBGYM0_gvSA37EV&oh=00_AYDjTHpIIvenai8zZdpHeJakiagLhbDGWIizuozKxPZtrw&oe=679DED23',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image depicts a superhero character flying through space with futuristic structures around him. The character, in a yellow suit with a mask and cape, is emitting powerful energy blasts from his hands. The background shows a mix of spaceships and cosmic elements, suggesting a dynamic and action-packed scene.',
  },
  {
    message:
      'Classic Comic - Amazing Spider-Man #62 (1968) - Medusa appears. John Romita cover',
    id: '54618571998_962038845925209',
    publishTime: '2024-04-27T17:11:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/440852443_960978079364619_1195155389564162453_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=oXFgTk35qrMQ7kNvgFfwMjI&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A85M5KuolsBPj4E-57EiotJ&oh=00_AYD0UpwlONIEbt_vxZAG3glGGsm5d_Fc90m9F9So-HygYw&oe=679DF02C',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a comic book cover for "The Amazing Spider-Man" issue #62 by Marvel Comics, featuring Spider-Man being held by the character Medusa using her long, flowing hair. The text reads, "The name of the dame is... Medusa!"',
  },
  {
    message: 'happy kid',
    id: '54618571998_697545115707918',
    publishTime: '2023-04-19T14:07:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/342205742_1396301030911182_6467684992686662686_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mDmMeBwp30EQ7kNvgFiPyp1&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A7jDnAwd5xQtUEgw6tdzuym&oh=00_AYCM7uVXtupyclcuRize5GdCHxQKH6Gpzx-jxexB-1-gnQ&oe=679DF7C7',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      "A person is sitting on a bed surrounded by stacks of comic books. The room's walls are covered with posters of superheroes and pop culture icons. They appear to be engrossed in reading one of the comics, with a drink nearby.",
  },
  {
    message: 'Space Ghost - One of the best cartoons ever',
    id: '54618571998_786699526792476',
    publishTime: '2023-08-18T14:29:06+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/368262928_786498620145900_4290167632311209904_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PXKUxAWD_okQ7kNvgFl_R6A&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYDeiDF0B9duPwynXXvp96zi48t6IIltTNDBWcozTkplNQ&oe=679DD0B8',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image shows an illustrated superhero character in a white suit with a black mask, red accents, and a yellow cape.',
  },
  {
    message: 'Batman 66 meets Wonder Woman 77\n by Alex Ross',
    id: '54618571998_573533898109041',
    publishTime: '2022-11-25T17:22:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/317094189_572971778165253_5397913481433399607_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_BHDekw4ngQQ7kNvgFNimpW&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AF8l_PO0GjPuZN8Dk6c1BpY&oh=00_AYDVaQ6l5hBhH8Lu8cSp3vJFgVfHnumau8ZSdNZXxxSk0A&oe=679DC9A0',
    status: 'SCHEDULED',
    imageDescription:
      'The image depicts two superhero-like characters in a dynamic pose. One holds a bat-shaped shield with "BAT SHIELD" written on it, and the other is deflecting projectiles with wristbands, creating bright flashes. The scene is action-packed.',
  },
  {
    message:
      'Classic Comic -  Batman #81 (1954) - Two Face cover and story. Bill Finger and Vern stories. Win mortimer cover',
    id: '54618571998_796342192494876',
    publishTime: '2023-09-02T17:26:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/375059515_796276175834811_8549731928701820509_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EqpjiILE2pkQ7kNvgH_6v67&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYCpx93D8rfsy6fswB--0aTbJle2UUe6ZCtyB9Crarkfxg&oe=679DF84A',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a vintage comic book cover featuring Batman and Robin tied to a large coin. A menacing figure flips the coin, saying, "I\'m giving Batman and Robin a fifty-fifty chance: heads\u2014they die, tails\u2014they live." The title reads "Batman" with the subtitle "Two-Face Strikes Again!" The scene is dynamic and colorful, typical of classic comic art.',
  },
  {
    shares: 171,
    reactions: 3765,
    message: 'Kiss Comix . Cover art by Dave Stevens, 1992',
    id: '54618571998_801233252005770',
    comments: 21,
    publishTime: '2023-09-10T00:31:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/376660608_800022845460144_453952330830903120_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=75WDXzNZMO0Q7kNvgG2T3et&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYATNT-tdvbX6JWiSI4pphp_DhfTC80nv244D9w4P7uvzQ&oe=679DE7C1',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a cover of "Kiss Comix," an erotic comic magazine. It features a pin-up style illustration of a woman in lingerie, surrounded by colorful text promoting stories like "Doctor Betty & Mrs. Page" by Nicky Seas and "\u00bfQui\u00e9n mat\u00f3 a Betty Page?" by Baldazzini. The issue number is 6.',
    postUrl: 'https://www.facebook.com/54618571998_801233252005770',
    totalEngagement: 3957,
  },
  {
    shares: 275,
    reactions: 3633,
    message:
      'Classic Comic - Batman #194 (1967) - Origin of Blockbuster retold.. Mystery analyst backup story. Carmine Infantino and Murphy Anderson Cover',
    id: '54618571998_803154411813654',
    comments: 44,
    publishTime: '2023-09-12T17:29:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/378200142_803136941815401_410121230958485165_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=KnzSBAb9R9MQ7kNvgHnBRff&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AeuYoz_Z6s18yKB-UbYSALw&oh=00_AYCxZgnNQjOd6Tnb4k3BZB4rF0qYQ1WPUtfEEgfqyJ8lwQ&oe=679DD4B6',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book cover featuring Batman descending from above with a dynamic pose, breaking through a large, crumbling "BATMAN" title. Below, a muscular man in tattered clothing punches through the letters. The background is red, and the text includes phrases like "The smash hit of the year!" and "The Blockbuster goes Bat-Mad."',
    postUrl: 'https://www.facebook.com/54618571998_803154411813654',
    totalEngagement: 3952,
  },
  {
    message: 'From FF #72 by Jack Kirby',
    id: '54618571998_749906220471807',
    publishTime: '2023-06-27T18:17:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/356261107_749530610509368_8374118474789705182_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=C-AjwKlc-d4Q7kNvgG0xlJm&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ASXWjd5_HguOydGi6Cp1YcZ&oh=00_AYBJjdwT3pT4EbV4s1uxJFUPG3rhZBcdQ1Oi_UpGP-X-7Q&oe=679DE739',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image is a comic book illustration featuring a silver, muscular character on a surfboard flying over a stylized cityscape. Text bubbles express themes of time, exile, and impending turmoil and destruction without love and brotherhood.',
  },
  {
    message: 'the truth behind the Bat\nby Kerry Callen',
    id: '54618571998_1005827941546299',
    publishTime: '2024-06-27T16:13:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/449239839_1005426198253140_9188601994154544372_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZTPUj1gkKq8Q7kNvgFN4eh7&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=At5yRUrE1dOeKPW1dZAKGsG&oh=00_AYA77cRJaorrycYhurft2EOjPKnpxq2OrQYFhCQ7fUiWQQ&oe=679DEE3E',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A superhero is flying over a city and gets hit in the face by a bat, leading to comedic frustration. Meanwhile, another character, seeking a disguise to start a fight against crime, is startled by a bat crashing through his window, marking "the beginning."',
  },
  {
    message: 'Frank Frazetta - Dark Kingdom (1976)',
    id: '54618571998_927422072720220',
    publishTime: '2024-03-09T19:09:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/428667423_923593843103043_9137694823853444096_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=k4Kl7dmshBUQ7kNvgFbfUII&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ANKEXX0ECxPXGcj1EQ1GtNe&oh=00_AYCyT5oWqzfZM7NVZnT3mjvGeeKvbdbu5FvGSxn75SYuQA&oe=679DDAB5',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image features a powerful warrior in dramatic lighting, wearing a horned helmet and a red cape. He is muscular, holding an axe, and exudes a fearsome presence, walking among rubble and skeletal remains in a fantasy setting. The background is a vibrant golden sky, adding to the epic atmosphere.',
  },
  {
    message:
      'Classic Comic -  Avengers #23 (1965) - 1st John Romita Silver Age work for Marvel. 1st appearance of Ravonna Renslayer.Kang appears. Cover by Jack Kirby and John Romita',
    id: '54618571998_795084245954004',
    publishTime: '2023-08-31T18:52:07+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/373536187_795055269290235_1740778763419065481_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9JgCPd_BM_kQ7kNvgHQSuuc&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFPZWKt5JZ1PFEs5yzutf_Z&oh=00_AYAhJle5YOAHxq1ug6RFgac4g1JeHFG5ES-GoExhZ4Og4Q&oe=679DD220',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The cover of "The Avengers" comic issue #23 features the Avengers confronting a giant, menacing figure. The team, including an archer and a hero with a shield, faces this towering adversary. The atmosphere is intense, with the tagline "Once an Avenger..!" displayed at the bottom.',
  },
  {
    message:
      'Classic Comic - Fantastic Four #112 (1971) - Historic Hulk vs Thing fight by Stan Lee and John Buscema',
    id: '54618571998_599532092175888',
    publishTime: '2022-12-22T20:21:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/321327770_1334582740640023_1274718883859041604_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uUcK0dZ1mssQ7kNvgHb3AOr&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDxNigojbm3udtT9aeWKst&oh=00_AYBJ8Iv6ViCe1S18c9KPNEsr9ZgwASU9vHO_Lcn9zgNGMw&oe=679DEA45',
    status: 'SCHEDULED',
    imageDescription:
      'The image is the cover of "Fantastic Four" comic issue #112, featuring a showdown between the Hulk and the Thing. The text "HULK VS. THING" and \u201c--NUFF SAID!\u201d is prominently displayed. The cover price is 15\u00a2, and it is published by Marvel Comics.',
  },
  {
    shares: 288,
    reactions: 3585,
    message: 'by John Romita',
    id: '54618571998_713756577420105',
    comments: 38,
    publishTime: '2023-05-10T18:37:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/345588382_1170678370265958_6550147503530124109_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7XwKSTQZkN4Q7kNvgHkXfrF&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AvTk5bmSziIvFA13hRBimly&oh=00_AYAAog59IWcqGFTIJOUCaThhQ4gutajTkpi_q7qKscWXhg&oe=679DC75B',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a black and white illustration of two superheroes, Daredevil and Spider-Man, perched on a rooftop against the backdrop of a full moon. Daredevil stands confidently while Spider-Man crouches, holding onto a pole. A cityscape is visible in the background.',
    postUrl: 'https://www.facebook.com/54618571998_713756577420105',
    totalEngagement: 3911,
  },
  {
    shares: 302,
    reactions: 3554,
    message: 'Jack Kirby and ol Blue eyes',
    id: '54618571998_721063033356126',
    comments: 51,
    publishTime: '2023-05-20T13:12:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/348433556_114071791691133_5304666569803001564_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mJHJD7zWCPwQ7kNvgE3IuxD&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ArYh5GykvSY8MnqKvLRRkWA&oh=00_AYAM81j541Y_4x7ifIF5VkEwKYRs8HOHZVy_ETS_uPv8HQ&oe=679DF4EA',
    status: 'PUBLISHED',
    imageDescription:
      'An artist is drawing a large, detailed illustration of a rocky, humanoid character on an easel. The setting appears to be an indoor workspace, and the artist is wearing a collared shirt and dark pants.',
    postUrl: 'https://www.facebook.com/54618571998_721063033356126',
    totalEngagement: 3907,
  },
  {
    message:
      'Classic Comic - Batman #16 (1943) - 1st appearance of Alfred. Joker appearance',
    id: '54618571998_615090763953354',
    publishTime: '2023-01-10T16:14:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/324029008_575334614411160_1665741476916358984_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZU8Ny2C_CPMQ7kNvgERg19W&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANEcB3dbg9ERQ64wxt3zug_&oh=00_AYAQyrI52ZZ8J_P779fp9JM9N9t0wSSPDDSr4eG3OJ2zIQ&oe=679DE160',
    status: 'SCHEDULED',
    imageDescription:
      'This is the cover of "Batman No. 16," featuring Batman and Robin illuminated by a spotlight. A shadowy figure with a camera is in the foreground, suggesting someone is discovering their identities. The text teases intrigue, asking, "Who can he be?"',
  },
  {
    message: 'Universal Monsters  by Alex Ross\nHappy Halloween everybody!',
    id: '54618571998_1101581045304321',
    publishTime: '2024-10-31T16:11:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/464947106_1100866705375755_1327674289708626764_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=iSikqnQ6yhcQ7kNvgF4a4Mx&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad6wxUoh2wk8IsbdMQixRCG&oh=00_AYDtreXh--sBp3XaKhToB3Qkba1A18KcSnRsRHLSSkx-2A&oe=679DE588',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      "The image is a dramatic, monochromatic illustration featuring classic horror film monsters such as Dracula, Frankenstein's monster, the Mummy, the Wolfman, the Invisible Man, the Creature from the Black Lagoon, and the Bride of Frankenstein, depicted in a chaotic and atmospheric scene.",
  },
  {
    message:
      'Classic Comic - Amazing Spider-Man Annual #1 (1964) - 1st Sinister Six, Fantastic Four, Doctor Strange, Giant-Man, and the Wasp cameos. Cover and art by Steve Ditko',
    id: '54618571998_689004633228633',
    publishTime: '2023-04-08T17:12:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/340121102_181009031436390_858775573204334462_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zJbyw7t2RAsQ7kNvgEmitUB&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AlpbJrh9swE9shsKu1FU20_&oh=00_AYDyAcjYa6PsDKO48ZWcx7sdlJWdTuDx5rXErkv1Bqr5dg&oe=679DF4CD',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic book cover for "The Amazing Spider-Man Annual #1" from 1964. It features Spider-Man in action, surrounded by the Sinister Six villains. The cover states "72 Big Pages" and highlights a battle against the Sinister Six. It includes colorful artwork typical of Marvel Comics from that era.',
  },
  {
    message: '',
    id: '54618571998_10158856345321999',
    publishTime: '2021-07-01T19:07:55+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t1.6435-9/174038647_10158856345001999_706615159389288232_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=SsZU_giuu-4Q7kNvgEVA0KU&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=APqE97oYDIORMgY5JebgT4h&oh=00_AYDbmSCdBkvHwt_0Y9o2haonAktc8pg4xODWqDJ4kqAHPA&oe=67BF93F7',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image features a superhero in costume with text that humorously suggests leaving milk and cookies for Captain America on July 3rd, referred to as "Independence Day Eve."',
  },
  {
    shares: 616,
    reactions: 3176,
    message: 'loved these old cartoons',
    id: '54618571998_605547018241062',
    comments: 99,
    publishTime: '2022-12-29T17:26:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/322298145_838678160547690_1365812314735006895_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cDHDHpkOpBAQ7kNvgHsnh8Q&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDxNigojbm3udtT9aeWKst&oh=00_AYCCWe_nC8FNn_nf4sp6q1xuZfLyDW2cbz9QuaNmd3YVtw&oe=679DC7E2',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vintage promotional poster featuring Marvel superheroes, including Captain America at the forefront, along with Hulk, Iron Man, Thor, and others. It announces that "Marvel Super-Heroes" are coming to TV, highlighting their dynamic arrival into homes on the screen. The style is classic comic book art with vibrant colors and bold lettering.',
    postUrl: 'https://www.facebook.com/54618571998_605547018241062',
    totalEngagement: 3891,
  },
  {
    message: 'Frank Frazetta - Snow Giants (Conan of Cimmeria) (1968).',
    id: '54618571998_974320328030394',
    publishTime: '2024-05-14T18:11:05+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/442399149_974019101393850_5223540612301074665_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tSLpo1te6bwQ7kNvgGdwZAH&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AM7rvDZZyH8PLOHuLO-yzzj&oh=00_AYAlTrvkiG1491QIVJKtXaL_EeWpKIst35LbE3G_C9pyaw&oe=679DE5B1',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image portrays three Viking-like warriors with horned helmets and axes, standing boldly against a snowy mountainous backdrop. Their dynamic poses suggest readiness for battle, and the dramatic, colorful sky enhances the sense of adventure and epic action.',
  },
  {
    message: 'Dr Doom Poop bags',
    id: '54618571998_793611456101283',
    publishTime: '2023-08-29T13:45:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/369992607_793423316120097_2860128310923922217_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mn2wBMw_RUcQ7kNvgFrMaWD&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFPZWKt5JZ1PFEs5yzutf_Z&oh=00_AYAAZZqA-QPkGgfqixx9auFmW50-acv7no7I1QdJ9hbRiQ&oe=679DD241',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image shows a package of "DOOM" dog poop bags. The packaging features 60 durable and tear-resistant, unscented bags, sized 8.67 x 11.8 inches. The tagline reads, "Only a lowly pawn, leaves poop on the lawn!" The name implies a humorous take on dog waste management.',
  },
  {
    message:
      'Classic Comic - Amazing Spider-Man #87 (1970) - 1st Cover to feature both Mary Jane (MJ) and Gwen Stacy together',
    id: '54618571998_664869278975502',
    publishTime: '2023-03-08T20:22:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/334644080_510883607789802_6596678916231163251_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VZUjM2wkBvkQ7kNvgHZTKbC&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AxjXGRI5F_kLVcGnmbzoU2h&oh=00_AYB0mKwofPW0F61W-ZKlUpWsy8E6UoxpNw7BqA-RgmNxVg&oe=679DEE49',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is a cover of "The Amazing Spider-Man" comic book, issue #87. It features Spider-Man at the center, with surrounding characters reacting in surprise. The text "Unmasked at last!" suggests a revelation of Spider-Man\'s identity, with additional text indicating that Spider-Man\'s career is over. The cover uses bold colors and dynamic poses typical of superhero comics.',
  },
  {
    message: '',
    id: '54618571998_818949463567482',
    publishTime: '2023-10-05T13:07:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/386188282_818673283595100_7707003584580210328_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TQ1XczCr8VgQ7kNvgG_Dxer&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AT-0UBkoD-77dQORts4-Ugl&oh=00_AYACuhZk9gwgOMonwhLf--C5dpBXb_rxps-ZMgiNuZgAPw&oe=679DF633',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'A man in sunglasses and a suit is reading a Spider-Man book. He is standing in front of a shelf filled with other comic books.',
  },
  {
    message: 'Spidey Sketch by John Romita (SDCC 1975)',
    id: '54618571998_647161780746252',
    publishTime: '2023-02-15T17:18:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/331147186_1733794810351147_2861118548892432699_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8HXzbUkXjMIQ7kNvgHI_kjb&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYACAaRygAi9QLqJlwb6iZLLKi8HeLpFxRYkPIlslO_6qw&oe=679DE72C',
    status: 'SCHEDULED',
    imageDescription:
      'The image is an illustrated art piece by J. Romita Sr. from the 1975 San Diego Comic-Con. It features a drawing of Spider-Man in a frame and two people in front: a man standing and an elderly woman sitting. There\'s a handwritten message: "Best of wishes to all at the San Diego Comic Con 1975!" signed by John Romita.',
  },
  {
    message: 'by Jim Aparo...he always made Batman and company look  so good',
    id: '54618571998_856536859808742',
    publishTime: '2023-11-29T19:12:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/406621609_856465486482546_7268108920749935688_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DNFanaZc0T0Q7kNvgEuRw2t&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AZzrPS-zIeddYgAHtM6T8Z1&oh=00_AYBSnSoHeeiygcxfSyrcamgAXH3OLNg-_5X9vBe1Qt2bTw&oe=679DE15C',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image depicts a group of super-villains in a comic book style, gathered around a table with a picture of Batman crossed out with red paint. They appear to be celebrating or conspiring, each holding a drink. The scene conveys a sense of mischief and plot against Batman.',
  },
  {
    message:
      'Classic Comic - Spectacular Spider-Man #1 (1976) - Tarantula appears. Cover and art by Sal Buscema',
    id: '54618571998_652714063524357',
    publishTime: '2023-02-21T20:22:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/332161540_5569969233108147_8660501566355112892_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JyiiLFVLJIcQ7kNvgFWPRJ0&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYCYGxbWxz39vtt0jpFw26mrbjrVJ9lhEWGinVBtA7sZdg&oe=679DD1BA',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a comic book cover titled "Peter Parker, The Spectacular Spider-Man" issued by Marvel Comics. It features Spider-Man in action, battling the Tarantula. The cover highlights it as the first issue, a collector\'s edition. The background shows a crowd with signs, while two people react to the confrontation between Spider-Man and the Tarantula.',
  },
  {
    message:
      "Classic Comic - Incredible Hulk #340 (1988) - Hulk vs Wolverine by Todd McFarlane. When we learn a secret about Hulk's powers",
    id: '54618571998_686792996783130',
    publishTime: '2023-04-05T19:27:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/339320355_123194564003328_8519161391805922348_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Qe9KzLoA4JAQ7kNvgH6HnS5&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AjtGYtRKUGGoHrazfSxAA5t&oh=00_AYAtDqFYQPO1vfqHRQJiJ_66SG5BFZoxjK9-Gdw_Tx1JFg&oe=679DFD75',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'This is the cover of "The Incredible Hulk" comic issue #340 by Marvel. It features Wolverine prominently, with his claws extended, reflecting the Hulk\'s face. The background shows a full moon.',
  },
  {
    message: 'its Sat we need some cartoons',
    id: '54618571998_961890615940032',
    publishTime: '2024-04-27T13:06:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/439599877_960976129364814_6063995066758934053_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AAfQxhEBzTcQ7kNvgEEAEhu&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A85M5KuolsBPj4E-57EiotJ&oh=00_AYCWFRRJ0qUzm9QnvsIRpGD4UwzqGSa8BCXGdQKz81OFiA&oe=679DD023',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image features a green alien character with a large head, wearing a green outfit and a helmet with antennas. The background depicts a cartoonish prehistoric setting with stone houses, and the word "GAZOO" is displayed at the top.',
  },
  {
    shares: 383,
    reactions: 3350,
    message:
      'Classic Comic - Batman #163 (1964) -   Joker , Bat-Woman and Batgirl appear. Bill finger story. Sheldon Moldoff Cover',
    id: '54618571998_824919376303824',
    comments: 89,
    publishTime: '2023-10-13T19:19:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/387765900_824850742977354_3478784842903283492_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=P4R475q2FwUQ7kNvgHDYagD&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFN0am19oe23tkLvrxzAuej&oh=00_AYDm4wK6II5SpZPg0pAtZfGHXAdkgS0MZZ2WnNhrecSWig&oe=679DF230',
    status: 'PUBLISHED',
    imageDescription:
      'This is a comic book cover featuring Batman (#163) with Batman in a courtroom, surrounded by Joker duplicates acting as a judge and jury. Robin and another character are behind him. The Joker judge declares a "fair trial" sarcastically.',
    postUrl: 'https://www.facebook.com/54618571998_824919376303824',
    totalEngagement: 3822,
  },
  {
    message: 'Art by Alex Ross',
    id: '54618571998_586549583474139',
    publishTime: '2022-12-09T19:21:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/319153248_586033840192380_2367829417357173384_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QzxId3qZ-u4Q7kNvgEmnQJW&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AuexS-KxJ4KGtQ3Cm4pz2Tg&oh=00_AYCm2c5UBWhAhTqsq4eQ2dJ6Pziq6dIpxfkTGCmsHoDwyg&oe=679DF681',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a dynamic and colorful illustration by Alex Ross, featuring a group of Marvel superheroes in action, including Captain America, Iron Man, and Spider-Man, among others, all appearing to leap forward as if in battle or pursuit. The artwork showcases a blend of classic and modern superhero designs in a dramatic style.',
  },
  {
    shares: 702,
    reactions: 3059,
    message: '',
    id: '54618571998_1139105471551878',
    comments: 50,
    publishTime: '2024-12-18T15:03:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/470676941_1138841834911575_3047367472173030927_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2c7x5XI44SkQ7kNvgHoZInB&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ApXEvBg0bIfUdm-NblRBs-a&oh=00_AYBDbPjHiYubpq_PdHbPF2J9Sm74llC85zOi1evmVggHrA&oe=679DE4AD',
    status: 'PUBLISHED',
    imageDescription:
      'A black and white illustration of two cartoon characters sitting and reading comic books with stacks beside them. The text above them reads "HAPPINESS IS" and below, "a stack of comic books."',
    postUrl: 'https://www.facebook.com/54618571998_1139105471551878',
    totalEngagement: 3811,
  },
  {
    shares: 228,
    reactions: 3514,
    message:
      'Classic Comic - Amazing Spider-Man #39 (1966) = Classic 1st John Romita Spider-Man. Green Goblin Battle Cover, Goblin Revealed as Norman Osborn!. Cover and art by John Romita',
    id: '54618571998_903864601742634',
    comments: 69,
    publishTime: '2024-02-04T22:41:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/425331207_903469598448801_4801660442657932488_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZUV36SygxhAQ7kNvgHvVhbb&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AiXWsGT1VmkIehz87A_CgAK&oh=00_AYBFAK7anXYjOum9FVJ0KOxbZtkETnQYL5eCZDDDLeHOsA&oe=679DC00F',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book cover featuring "The Amazing Spider-Man" issue #39, depicting Spider-Man tied up and held by the Green Goblin above a city. The text highlights "Spidey and the Green Goblin... both unmasked!"',
    postUrl: 'https://www.facebook.com/54618571998_903864601742634',
    totalEngagement: 3811,
  },
  {
    shares: 404,
    reactions: 3339,
    message:
      'Jack Kirby (28 August 1917 - 6 February 1994) and ol blue eyes Ben Grimm',
    id: '54618571998_656083556520741',
    comments: 65,
    publishTime: '2023-02-25T17:21:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/332574141_1252556042326332_2359090287610953682_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=MwnA-qocYigQ7kNvgE0PSnm&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYBhD2fXlPTn_tNAVEWa9Z8u5VMOhiA3770M-0QOB9YVbQ&oe=679DDC9A',
    status: 'PUBLISHED',
    imageDescription:
      'A person is drawing a large illustration of a rock-like character on an easel using a marker. The scene is captured in black and white.',
    postUrl: 'https://www.facebook.com/54618571998_656083556520741',
    totalEngagement: 3808,
  },
  {
    message:
      'Classic Comic - Masters of the Universe #1 (1982) - 1st Full comic devoted to He-Man and the Masters of the Universe',
    id: '54618571998_937790695016691',
    publishTime: '2024-03-24T19:21:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/433194710_935139528615141_6231243708091326252_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=olPHryVoCcAQ7kNvgE9eSAl&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A9vJEf3b3CAjZOCTfsxGoH2&oh=00_AYBckG6BvJVGcUXxfPPGjTWxZGEbTmH-lP_-bh-bxWN6qg&oe=679DD3A9',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This image is a comic book cover from the "Masters of the Universe" series, specifically issue No. 1, titled "To Tempt the Gods." It features a muscular hero in the foreground wielding a sword and an axe, surrounded by various characters and creatures in a dramatic action pose. The background depicts a fantasy landscape with futuristic and ancient elements, including a castle-like structure. The cover also indicates the cost and publisher details at the top.',
  },
  {
    message:
      'HULK #130 (1970) - Hulk vs Bruce Banner.. Herb Trimpe cover and art',
    id: '54618571998_810103637785398',
    publishTime: '2023-09-22T19:07:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/381538000_810068914455537_70260114894515995_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=N__6OO3-xKoQ7kNvgFz1M3M&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AQ6uIXz3wArX-td61b3bq_j&oh=00_AYC4uh88fotFdPuMIlC4tyaGdtIX57PM-ABdldIalcT_ow&oe=679DEC93',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic book cover featuring the Incredible Hulk facing off against Bruce Banner. The text highlights a confrontation with phrases like "A NIGHTMARE comes true!" and "If I kill you... I die!" The background shows a chaotic cityscape with onlookers, emphasizing the intense and dramatic nature of the scene. The artwork depicts Hulk in a threatening pose, ready to strike.',
  },
  {
    message:
      'Classic Comic - Batman #59 (1950) -  1st appearance of Deadshot. Batman of the future cover and story. Joker from the future appears. Kane and Schwartz cover',
    id: '54618571998_786033406859088',
    publishTime: '2023-08-17T15:14:05+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/368175529_785765140219248_482773819213145297_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4IzTSaD9sysQ7kNvgHpjJFF&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYARQ_j_fx-5muqOq-wNtNBSzny8W4-XnUzs6CSG02P6tw&oe=679DCED1',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is a vintage comic book cover featuring Batman and Robin in a futuristic setting. They are flying in a spaceship through space. The Bat-Signal is shown on the moon, indicating they are needed back on Earth. The title mentions "Batman in the Future." The cover is vibrant, with a red background and various planets and stars.',
  },
  {
    message: 'I love this ...art by Brian Bolland',
    id: '54618571998_853330363462725',
    publishTime: '2023-11-24T19:17:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/403097103_853230683472693_8251025466739499875_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=faqi5kaPk-UQ7kNvgHgyblE&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad1ff1s2cBGYM0_gvSA37EV&oh=00_AYAxAnXI1pgUAsAzIuTAeOhTSiJjV1yA6XR9dXrIO6YEjw&oe=679DE228',
    status: 'SCHEDULED',
    imageDescription:
      'A superhero with a stretchy body is playfully wrapped around a green swamp creature. A nearby sign warns "DANGER, SWAMP."',
  },
  {
    shares: 292,
    reactions: 3436,
    message:
      'Classic Comic - Captain America Annual #8 (1986) - 1st appearance of Overrider. Wolverine appears. Mike Zeck cover',
    id: '54618571998_725272922935137',
    comments: 51,
    publishTime: '2023-05-25T20:29:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/348598567_1313603906030700_1301657687386455477_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gMEDK9361k8Q7kNvgE_t7fD&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ArYh5GykvSY8MnqKvLRRkWA&oh=00_AYC3fXRtePoYKK8KrqKkA_yOsw3eeGZJZgMDKpxtJNvjQw&oe=679DF4A8',
    status: 'PUBLISHED',
    imageDescription:
      'The image is the cover of "Captain America Annual #8," released in 1986. It features Captain America clashing with Wolverine, as depicted by an explosive action scene. The comic is part of Marvel\'s 25th anniversary celebration.',
    postUrl: 'https://www.facebook.com/54618571998_725272922935137',
    totalEngagement: 3779,
  },
  {
    message: 'Holy roasted marshmallows Batman',
    id: '54618571998_859717012824060',
    publishTime: '2023-12-04T15:10:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/405249155_856807426448352_7099872741005772108_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XRQPj7OEmHAQ7kNvgGvS0s0&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AZzrPS-zIeddYgAHtM6T8Z1&oh=00_AYAXntvzYJ1d6yfiqnoPnQE4KbIdZqZC1o-oqSoHszkUMQ&oe=679DD96D',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'Batman and Robin are depicted in a cave beside the Batmobile. Robin is resting his head on his hand looking bored, while Batman is roasting a marshmallow over the Batmobile\'s flaming exhaust. A box labeled "Bat Box" and some snacks are on the ground. The caption reads "Slow Day in Gotham City."',
  },
  {
    message: 'SPOILER ALERT!!!!!!!!!!!!!',
    id: '54618571998_10151558713131999',
    publishTime: '2013-04-13T20:12:37+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/468552671_10161938108526999_7998079651450666179_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=HtJepIV_b48Q7kNvgHsoQrV&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AhNO-yliPHC_FCPdMZBvu_1&oh=00_AYBSGRrHcnIcuI2iZR-sVTRQ1d7TQEhJit4S1FO8jvTRcA&oe=679E0CDD',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'A person dressed as Batman spray-paints "SUPERMAN IS CLARK KENT" on a brick wall in an urban alley.',
  },
  {
    shares: 266,
    reactions: 3415,
    message: 'sketch by Superman Co Creator Joe Shuster',
    id: '54618571998_1103308791798213',
    comments: 58,
    publishTime: '2024-11-02T18:11:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/465125431_1100504508745308_1963283791142911962_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=MPhAoWJFgzEQ7kNvgFTaSTW&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad6wxUoh2wk8IsbdMQixRCG&oh=00_AYDvH9B7lg-rdq4MTkKUlEpjLhF2PqUoSLDXJIjBJn4ALw&oe=679DCB76',
    status: 'PUBLISHED',
    imageDescription:
      "A pencil sketch of a superhero with hands on hips, wearing a cape and boots. There's a handwritten message at the bottom, signed by Joe Shuster.",
    postUrl: 'https://www.facebook.com/54618571998_1103308791798213',
    totalEngagement: 3739,
  },
  {
    message:
      'Classic Comic - Amazing Spider-man #65 (1968) - Foggy Nelson appears. Cover and art by John Romita',
    id: '54618571998_660938002701963',
    publishTime: '2023-03-03T20:27:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/334114336_2775915869209412_3462544014078645190_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=osN85tXcJZ0Q7kNvgFfleHU&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYDJp_yFNgekp7H1hlrNj0MQGAUPYTEza9fwSnGzLYPn1w&oe=679DE33E',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The cover of "The Amazing Spider-Man" issue #65, titled "Escape Impossible!", features Spider-Man clinging to a wall as he dodges a crowd of prison guards trying to capture him. He is shown in his classic red and blue costume, with a dynamic, action-filled pose.',
  },
  {
    message: 'Hulk by John Byrne',
    id: '54618571998_907490304713397',
    publishTime: '2024-02-09T19:11:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/426190773_906813918114369_8513682184155737731_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=z7r1P9eNYXwQ7kNvgH4H3OP&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APsNzbbfu_cdkD25yK7t850&oh=00_AYAkH-1WhYkccg4dU0vQ9QivKRtn3vE8ngpyNAb0huqDFw&oe=679DE040',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is a comic book panel showing two versions of a muscular, green-skinned character, known for being extremely strong. The left side depicts him in his more familiar green form with purple shorts, while the right side shows a grayer, more brutish version with ragged clothes. Both versions are placed in a futuristic or technological setting. Speech bubbles suggest a transformation or characterization explanation.',
  },
  {
    message: 'Legion of Super Heroes by Curt Swan',
    id: '54618571998_895896639206097',
    publishTime: '2024-01-24T19:15:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/421493155_894070952721999_4518551699313938224_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yySbYg7-ydUQ7kNvgGbZBXY&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8iaG7Ke0rbRc8cA6JwlJbb&oh=00_AYDjnuof4tDsTKdcYjqOFESx6HQ1Zi9iy77f9SgKqI9Psg&oe=679DE8BF',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image depicts a group of colorful comic book superheroes in various costumes, standing together in front of architectural backgrounds. The characters exhibit a range of bold color schemes and styles, with some appearing larger or in mid-action poses. The setting has a classic comic book art style.',
  },
  {
    message: "Frank Frazetta 's Death Dealer (or Molly Hatchet cover lol)",
    id: '54618571998_815114977284264',
    publishTime: '2023-09-29T21:37:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/383157668_815065997289162_9138185924289173551_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Or_bJhIm1aQQ7kNvgGbh5Lg&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A_vnmMIHG0AfcC5NFksZQ5j&oh=00_AYB9Gmfs8L7oNaMaYY6CQkiZSdRarf0R-eAD4y_muhf52Q&oe=679DD9E3',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image depicts a dark, armored warrior on horseback amidst a smoky, fiery landscape. The rider carries a scythe and has an ominous presence, highlighted by swirling smoke, scattered bones, and ravens in the sky, creating a foreboding and apocalyptic scene.',
  },
  {
    message:
      'Classic Comic - Detective #171 (1951) - One of the few Golden Age Penguin covers. Scarce in high grade.  Cover by Win Mortimer',
    id: '54618571998_822663106529451',
    publishTime: '2023-10-10T20:49:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/386763090_822646676531094_8267358981481358895_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3Hy56OCHYZ8Q7kNvgFLovCT&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AT-0UBkoD-77dQORts4-Ugl&oh=00_AYAo6Gb9jrMoZqDv3VIBsfozzmfviU0Q-p0sQUz0ApE-Fw&oe=679DD301',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is the cover of "Detective Comics" issue 171, featuring Batman and Robin against the Penguin. Batman is rescuing a woman, while Robin is mid-action. The Penguin is flying above them with a helicopter umbrella. The cover is colorful, featuring dynamic action and a spotlight-like bat emblem.',
  },
  {
    message:
      'Classic Comic - Superman #7 (1940) - 1st appearance of Perry White. Stories by Jerry Siegel, Art and cover by Joe Shuster. Great war cover (still 1 year prior to US entering the war)',
    id: '54618571998_621964963265934',
    publishTime: '2023-01-18T16:17:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/326144384_728846518660115_4849884681035578626_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OUpTQQNjMFsQ7kNvgH5JkOc&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AEj86Fc0xlMaisai1dICqfl&oh=00_AYBLSYnsTR_wz09ZrB50wWcanw3tnsScgHat3tf3w_SYMQ&oe=679DE257',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a vintage comic book cover featuring Superman in flight, dodging bullets from biplanes. The bold title reads "SUPERMAN" with the issue number "No. 7" and priced at "10\u00a2". The cover highlights Superman as the "WORLD\'S GREATEST ADVENTURE-STRIP CHARACTER".',
  },
  {
    message:
      'Classic Comic - Welcome Back, Kotter #1 (1976) - Based on the hit ABC TV series. Bob Oksner cover',
    id: '54618571998_930782419050852',
    publishTime: '2024-03-14T22:22:09+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/432436414_928084939320600_5072911080430720767_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Z5lWkTTjt2oQ7kNvgFm_8Fe&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A1Cltn3twGkGm6VFwILAtl1&oh=00_AYANBZt129cv17L3pd9Q3GeLyPgEg6OAy3h_SqPjjvJ-Zg&oe=679DD6C8',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription: '',
  },
  {
    message: 'art by John Buscema',
    id: '54618571998_916588977136863',
    publishTime: '2024-02-22T22:32:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/409047875_916100800519014_1637586522561898698_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kBKKQIVEHlYQ7kNvgG88_Sm&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A5eIE02JisGgFv8ajLznD4-&oh=00_AYBMOim2NZd7ijqQIVdqSoG1df0qBWoqhzpmocOQus5hMw&oe=679DD097',
    status: 'SCHEDULED',
    imageDescription:
      'This image is a classic comic book illustration featuring a large group of Marvel superheroes and villains, including Spider-Man, Iron Man, Thor, and Captain America, among others. They are depicted in dynamic poses, emphasizing action and camaraderie. The artwork is vibrant and colorful, typical of a 1975 Marvel Comics style by John Buscema and Joe Sinnott.',
  },
  {
    shares: 344,
    reactions: 3268,
    message:
      "Classic Comic - Amazing Spider-Man #123 (1973) - Spidey battles Luke Cage. Gwen Stacy's funeral",
    id: '54618571998_683169250478838',
    comments: 85,
    publishTime: '2023-03-31T20:33:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/339119654_560912819207810_2444573806969681409_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bglE1P1Ou3UQ7kNvgGpxcUu&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AjtGYtRKUGGoHrazfSxAA5t&oh=00_AYBXbQfy0X3I33qe6l8p3QMutoQ8PI5jJJmO4kPri5gnBQ&oe=679DC912',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a cover of "The Amazing Spider-Man" comic issue #123 from Marvel Comics. It features Spider-Man being punched by a character identified as Luke Cage, Hero for Hire. The artwork shows a dynamic action scene with buildings in the background, and the comic is priced at 20 cents.',
    postUrl: 'https://www.facebook.com/54618571998_683169250478838',
    totalEngagement: 3697,
  },
  {
    shares: 460,
    reactions: 3200,
    message:
      'Classic Comic - Captain America #76 (1954) - 1st Atlas Issue . Human Torch and Toro Story. Cover by Carl Burgos (creator of the Human Torch.',
    id: '54618571998_621119650017132',
    comments: 29,
    publishTime: '2023-01-17T16:10:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/325492570_462520505915811_7791121650191523287_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bTSLk88gH7UQ7kNvgFsG737&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AEj86Fc0xlMaisai1dICqfl&oh=00_AYCG01mdcy45S7p_Ezntn6f1nREAnQcXUQ-fG_6YA-TX7g&oe=679DF51A',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vintage comic book cover featuring Captain America, titled "Captain America...Commie Smasher," with Captain America prominently displayed in a triumphant pose, holding his shield. The background shows a defeated enemy and cheering sidekick, with industrial buildings in the backdrop. The cover highlights the theme "The Betrayers".',
    postUrl: 'https://www.facebook.com/54618571998_621119650017132',
    totalEngagement: 3689,
  },
  {
    message:
      'Classic Comic - Detective #198 (1953) - Lord of The Batmanor.. Win Mortimer cover',
    id: '54618571998_1100160955446330',
    publishTime: '2024-10-29T20:29:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/464789933_1098065445655881_913517135618125224_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Q60YEzWWEJgQ7kNvgELiMBH&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad6wxUoh2wk8IsbdMQixRCG&oh=00_AYAAstxMVyQY1HpGqvbmj-2fMZx7tyGQL93X3hg_4GpNmw&oe=679DC98D',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'This is a vintage comic book cover for "Detective Comics" No. 198, featuring Batman in a kilt swinging on a rope toward a castle. Robin stands observing, while a group of men in kilts, carrying bagpipes and wearing plaids, are lined up. The title of the story is "The Lord of Batmanor!"',
  },
  {
    message:
      'Batman Pin Up from Batman #181.(1st Poison Ivy) the big reason why so many copies are missing the "poster"',
    id: '54618571998_965654472230313',
    publishTime: '2024-05-02T18:12:06+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/440887188_965295628932864_3143300532409152550_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cuN3SBk4kNUQ7kNvgFSCqk8&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A85M5KuolsBPj4E-57EiotJ&oh=00_AYCkIjYiuih79zJ23KEUtp30k8xj2auUikb8_FDyeDQZeg&oe=679DD2E6',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a vintage comic-style illustration of Batman and Robin. Batman is standing confidently with his hands on his hips, while Robin stands with his arms crossed. Behind them is a large shadow of a bat symbol. The text at the bottom reads "Best Bat-Wishes Batman and Robin."',
  },
  {
    message:
      'Classic Comic - X-Men #16 (1966) - Gorgeous Sentinels cover battling the X-men. Jack Kirby cover and layouts.',
    id: '54618571998_772821148180314',
    publishTime: '2023-07-29T21:03:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/362233495_772793548183074_4919253430291154815_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kj3ym47yWLsQ7kNvgFhj0ti&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AxJt4ThoRXUxba1szmG7ZRv&oh=00_AYDBzVzo09iO9CKb4V84Pv4jV0Ww4XYMbHX1hOYWxXR0tA&oe=679DC904',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is a cover of "The X-Men" comic issue #16, featuring a large Sentinel robot in the background. The X-Men characters, including Iceman, Angel, and Beast, are depicted in action poses engaging with the robot. The cover is bright with prominent reds and yellows and includes text "The Supreme Sacrifice!"',
  },
  {
    message: 'The amazing Yvonne Craig',
    id: '54618571998_905895094872918',
    publishTime: '2024-02-07T17:11:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/426279940_905549501574144_7267583029608000977_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1vbDzRoN86IQ7kNvgGv6yIZ&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AiXWsGT1VmkIehz87A_CgAK&oh=00_AYBpE-aWOS01da73OUAg1g0QLVEpRKBvGFWilIS2OeIIQw&oe=679DD95C',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image shows a person dressed in a purple superhero costume with a yellow bat emblem on the chest, matching yellow cape lining, and a utility belt. They are wearing a purple mask and boots, striking a confident pose against a red background.',
  },
  {
    message:
      'Classic Comic - Avengers #56 (1968) - Bucky Barnes and Baron Zemo appear. Cover and art by John Buscema',
    id: '54618571998_637378445057919',
    publishTime: '2023-02-04T20:21:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/328987600_1173470296890415_3731985025768051999_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xe1tC1KLs4IQ7kNvgF-4jV4&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AOWK0IeDNMQbdSLHTr-neG3&oh=00_AYAJAZOOPHRnyX9tJSSbiI8BV0oixiV10RtOcTjLgFbwKQ&oe=679DED1A',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage comic book cover for "The Avengers," issue #56, priced at 12\u00a2. Captain America stands prominently with a distressed expression, holding a lifeless figure in a soldier\'s uniform. The background includes other masked Avengers\' faces, and the cover features the caption "DEATH BE NOT PROUD!"',
  },
  {
    message: '',
    id: '54618571998_651706200291810',
    publishTime: '2023-02-20T17:15:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/330214015_588840379441506_4562157215540704727_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=S-1yQgPBEDMQ7kNvgHFLRaa&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYBuS0bG1kr5AYHBXzWpa0-HYoFI663kVD_a8XEkOjhQSw&oe=679DF2B0',
    status: 'SCHEDULED',
    imageDescription:
      'This image is a promotional poster for the "Mighty Marvel Comicon 1975". It features various Marvel superheroes, including Spider-Man, Thor, and the Hulk, among others, in a colorful and dynamic composition. The event took place from Saturday, March 22 to Monday, March 24, at the Hotel Commodore in New York City. The tagline at the bottom reads "MARVEL MARCHES ON!"',
  },
  {
    message: 'ove these old comic book ads',
    id: '54618571998_833309965464765',
    publishTime: '2023-10-25T14:11:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/395804929_832937258835369_6890959373233963973_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=n9oXH0g6yR8Q7kNvgGfpDCr&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AvEhpGDi1HQFkGgpMJudFl6&oh=00_AYD0_neEEX-hqi008DnamORpc1Dy0Spg3neMWoQqNvtPGg&oe=679DF247',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image shows a vintage comic-style advertisement for action figures featuring "The Bionic Battle" between Col. Steve Austin and Maskatron. It highlights the features of "The Six Million Dollar Man" and "Maskatron," depicting their bionic abilities and accessories. The ad promotes thrilling bionic adventures and includes an offer for a Bionic Action Club. The style and presentation are typical of retro toy advertisements.',
  },
  {
    message:
      'Classic Comic - Amazing Spider-Man #25 (1965) - 1st cameo appearance of Mary Jane (MJ-Face hidden). 1st Spider Slayer and Professor Smythe. Norman Osborn cameo. Cover and art by Steve Ditko',
    id: '54618571998_624748282987602',
    publishTime: '2023-01-21T20:11:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/326401705_883301249761332_4490615296323642509_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6xGzrPWDpxIQ7kNvgGlkF_3&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AEj86Fc0xlMaisai1dICqfl&oh=00_AYBS15R3TVBXXjzojUh9xYwWYINYtpWSK3Swth1roL01Qg&oe=679DF401',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a comic book cover for "The Amazing Spider-Man" issue #25, featuring Spider-Man entangled in metallic coils. The headline reads "Captured by J. Jonah Jameson!" against a bright yellow background. A prominent figure is visible beside Spider-Man, likely Jameson, looking confrontational. The cover includes Marvel branding and a "12\u00a2" price tag.',
  },
  {
    shares: 303,
    reactions: 3300,
    message: 'Batman and Solomon Grundy by Berni Wrightson',
    id: '54618571998_849381530524275',
    comments: 51,
    publishTime: '2023-11-18T22:07:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/402960837_849341720528256_9042882695521841581_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AldF13_j5ZEQ7kNvgGsrA-h&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A1JMZmQ38AIeooTJbQ1QLY-&oh=00_AYAt3KNBA3ZWPlov0f8EFXqw3MAJPbSb_kWaK2x1mWM_xw&oe=679DF333',
    status: 'PUBLISHED',
    imageDescription:
      'The image depicts a dark, eerie scene with a shadowy figure resembling Batman perched in a tree against a full moon. In the foreground, a zombie-like creature emerges from water, its expression menacing and fierce, creating a tense and dramatic atmosphere.',
    postUrl: 'https://www.facebook.com/54618571998_849381530524275',
    totalEngagement: 3654,
  },
  {
    message: 'the good old days',
    id: '54618571998_609726721156425',
    publishTime: '2023-01-03T17:27:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/323143789_1178273126143281_7219819986609655574_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2hGOuBWt75wQ7kNvgH7eyR0&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ANEcB3dbg9ERQ64wxt3zug_&oh=00_AYDXCqJqmM50oeB2XsPVoz4wi20tZ9b-gsorgRbBwjxnKA&oe=679DEEBF',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      "The image shows a selection of Marvel Comics Group characters: Captain America, Hulk, Iron Man, Namor, and Spider-Man. Below each character, there's the Marvel Comics Group label with pricing and issue details.",
  },
  {
    shares: 239,
    reactions: 3321,
    message:
      'Classic Comic - Flash #123 (1961) - 1st Silver Age Appearance of the Earth-Two/ Golden Age Flash. Origin of both Flashes. Cover by Carmine Infantino and Murphy Anderson',
    id: '54618571998_889094936552934',
    comments: 78,
    publishTime: '2024-01-15T18:16:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/419894646_888746896587738_5415783452759832104_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ElGjkOtWdEwQ7kNvgFGWdVT&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AnI2vm1qwoJyPrblQR7BRtx&oh=00_AYDRr2q_feB609DXqTc72UWqxQdpr56Dh04-qpFd1ktk4Q&oe=679DE827',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book cover featuring "The Flash" from DC Comics. It shows two versions of The Flash running towards a man who is calling for help from a construction site. The cover advertises a story titled "Flash of Two Worlds!"',
    postUrl: 'https://www.facebook.com/54618571998_889094936552934',
    totalEngagement: 3638,
  },
  {
    shares: 281,
    reactions: 3216,
    message:
      'Classic Comic - Action #252 (1959) - 1st appearance of Supergirl. 1st appearance of Metallo and Argo city. Cover by Curt Swan and Al Plastino',
    id: '54618571998_846472864148475',
    comments: 140,
    publishTime: '2023-11-14T20:19:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/401698599_846086954187066_2541379179383995755_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dmQ6Cd4tY78Q7kNvgHa8U7I&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A1JMZmQ38AIeooTJbQ1QLY-&oh=00_AYBrfa5UOdzoTffCgiXB_8GbusBm2hdUCxRIquwuYaO9Og&oe=679DF08B',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vintage comic book cover of "Action Comics" issue No. 252 from May. It features Superman and the debut of "Supergirl from Krypton," showcased with both characters flying. The cover poses the question, "Is she friend or foe?" Additionally, it mentions "Superman meets Metallo."',
    postUrl: 'https://www.facebook.com/54618571998_846472864148475',
    totalEngagement: 3637,
  },
  {
    message:
      'Classic Comic - X-Men #1 (1963) - 1st Appearance and origin of the X-Men. 1st appearance of Magneto. Cover and art by Jack Kirby',
    id: '54618571998_750570850405344',
    publishTime: '2023-06-28T14:41:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/356411843_750226310439798_7515596436833470944_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=V0QYDzNfk9kQ7kNvgERC5l-&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AS1qGJsq0Z9ZgV8qfukSk_U&oh=00_AYAF_iXXFe9c2UwVMCVKkorCXVzQ_AkZfF7baplrc5Gh1g&oe=679DDABE',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'This is the cover of "The X-Men" Issue #1 from September, published by Marvel Comics. It features the original X-Men members in action poses, battling Magneto. The cover highlights the tagline "The Strangest Super-Heroes of All!" and invites readers to "Don\'t miss this fabulous first issue!"',
  },
  {
    shares: 423,
    reactions: 3107,
    message: "Superman Kellogg's Pep Cereal Retail Standee 1947",
    id: '54618571998_1132954108833681',
    comments: 103,
    publishTime: '2024-12-10T14:05:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/469495075_1131259175669841_4859750918624316920_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EUPr_ZobwGcQ7kNvgEsPoVd&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A3nqXxoEtaEELna7Wo7ba1V&oh=00_AYBf8PYRhfTr2edX4oc7CsbkIBC0XY9IxEMNNcPLgQZExg&oe=679DCC72',
    status: 'PUBLISHED',
    imageDescription:
      'A vintage advertisement features a superhero with three children, promoting Kellogg\'s Pep whole wheat flakes cereal. The tagline "Boy! it\u2019s SUPER" is displayed above, and a bowl of cereal with banana slices is shown in the foreground.',
    postUrl: 'https://www.facebook.com/54618571998_1132954108833681',
    totalEngagement: 3633,
  },
  {
    shares: 314,
    reactions: 3245,
    message:
      'Classic Comic - Batman #121 (1959) - 1st appearance and origin of Mr Zero (Later becomes Mr  Freeze). Ad for Flash #105. Cover by Curt Swan and Stan Kaye',
    id: '54618571998_851363233659438',
    comments: 72,
    publishTime: '2023-11-21T21:11:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/405012498_851199187009176_7391853758683448232_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VX-7hbaabJ4Q7kNvgGnh4Ma&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad1ff1s2cBGYM0_gvSA37EV&oh=00_AYDj6gx2GelULC85DukuFD2VTZxU_JtG1yrL6NrtOQGxsQ&oe=679DC985',
    status: 'PUBLISHED',
    imageDescription:
      'This is a comic book cover featuring Batman and Robin frozen in blocks of ice, with a villain holding a futuristic pistol-like device. The title at the bottom reads "The Ice Crimes of Mr. Zero."',
    postUrl: 'https://www.facebook.com/54618571998_851363233659438',
    totalEngagement: 3631,
  },
  {
    message:
      'Famous last page from Amazing Spider-Man #42 (1966) 1st time we get to see MJ - Mary Jane Watson',
    id: '54618571998_784043647058064',
    publishTime: '2023-08-14T18:32:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/367709163_783994507062978_3834582595668353520_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=38ejXVLppzQQ7kNvgHSwXIT&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFmhw3kNsmh72LjrMEnX1-g&oh=00_AYB2R6gF4mfSeWG-8eBuVdH-60JA25SfbCc38I8cTje9Hw&oe=679DDDFC',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'In the comic panel, Peter Parker reflects on Mary Jane while also thinking about Gwen. Inside, an older woman introduces Peter to her niece, Mary Jane, who surprises him with her beauty, saying, "Face it, tiger... you just hit the jackpot!" The next panel teases an upcoming story featuring "The Rhino."',
  },
  {
    message:
      'Classic Comic - Daredevil #43 (1968) - Origin of Daredevil partially retold. Captain America appearance. Cover by Jack Kirby. Interior art by Gene Colan',
    id: '54618571998_629096849219412',
    publishTime: '2023-01-26T20:13:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/327431974_760192225620157_1286477252669458978_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6COmMQKAjYwQ7kNvgGc3XKL&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Alupxj5DpbCH-SJ9oxPO6Md&oh=00_AYDKJYQIryflownb5uomqFpaY417lzRDbbCHfYT_UT5r3Q&oe=679DED21',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic book cover featuring Daredevil and Captain America in a dynamic battle pose. The title reads "Daredevil: The Man Without Fear!" with a note about a special guest appearance. The cover is from Marvel Comics, priced at 12 cents and numbered 43.',
  },
  {
    message: 'FF by John Byrne',
    id: '54618571998_610551644407266',
    publishTime: '2023-01-04T17:31:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/323711567_841753510449589_6537667216736277749_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rB7CpQ_ApGkQ7kNvgF5zMtf&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANEcB3dbg9ERQ64wxt3zug_&oh=00_AYC-ifSoX80wP2GaOOPZwvwVwV1o9wqHULV0adbYSeHY2w&oe=679DCCBA',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image is a "Marvel Masterwork Pin-Up" featuring the Fantastic Four. The characters, Johnny Storm, Sue Richards, Ben Grimm, and Reed Richards, are posed together in a casual, friendly manner. Each character has written a personalized message within the image. The child, Franklin, is also included, holding action figures and waving.',
  },
  {
    shares: 181,
    reactions: 3383,
    message: 'FF by John Byrne',
    id: '54618571998_1117405193721906',
    comments: 52,
    publishTime: '2024-11-20T19:10:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/466963899_1116988833763542_6294751710778180224_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=A2uPJMj3LEAQ7kNvgHzN_hh&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFT13vH4zv0T-yKWrS8kNws&oh=00_AYBbIOAX-mutaRC37GA6xKR4alG1yvREpsiGQAt0RBl91Q&oe=679DC99E',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a Marvel comic pin-up featuring the Fantastic Four: Johnny Storm (Human Torch), Sue Richards (Invisible Woman), Ben Grimm (The Thing), and Reed Richards (Mr. Fantastic). They are posing together, with their signatures and messages written above them. Franklin, a child, is sitting in front holding superhero toys. The background shows a cozy room with bookshelves.',
    postUrl: 'https://www.facebook.com/54618571998_1117405193721906',
    totalEngagement: 3616,
  },
  {
    message:
      'Classic Comic - Punisher #1 (1987) - Regular series begins. Story by Mike Baron. Cover and art by Klaus Janson',
    id: '54618571998_734973355298427',
    publishTime: '2023-06-07T19:19:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/351919416_1482346179259060_4016508334277659922_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qMXyODigZjsQ7kNvgGPAh3q&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ANf0kMIeMC_mKos2kMEjn4q&oh=00_AYCXsPl2Jm8lo-OqMc1hyIRDHxsADJsqNxqK3QQ8MK-5VA&oe=679DF3CD',
    status: 'SCHEDULED',
    imageDescription:
      'This image is the cover of "The Punisher" #1 by Marvel Comics from July, showcasing the character in action, swinging between buildings via a rope. The scene is dynamic and colorful, with a city backdrop visible through an open window. Bold text at the top announces it as the first issue of an unlimited series.',
  },
  {
    message:
      'Classic Comic - Batman #133 (1960) - Batwoman cover. 1st Appearance of Kite-Man, 1st Bat-Mite in title. Bill Finger Story. Sheldon Moldoff Cover',
    id: '54618571998_648401163955647',
    publishTime: '2023-02-17T00:40:23+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/331697732_555843159827257_7697365446363900249_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=oKM-uJuryXQQ7kNvgHqDl1j&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYDd2uSi9CilTd31cxYBHeaEuig_aakmv4Tu10kyOQTynA&oe=679DC8E2',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage Batman comic book cover, featuring Batman, Robin, Bat-Mite, and Batwoman. Bat-Mite is riding a dog called Bat-Hound. The cover text includes phrases like \u201cBatwoman\u2019s Publicity Agent\u201d and depicts colorful, classic comic art style typical of mid-20th century superhero comics.',
  },
  {
    message:
      'Classic Comic - Fantastic Four #39 (1965) - Daredevil and Dr Doom appears. Cover and art by Jack Kirby and Wally Wood',
    id: '54618571998_670447088417721',
    publishTime: '2023-03-15T20:06:13+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/336409248_772890304354342_8648974020120982595_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_PwfygR_oysQ7kNvgEL7X71&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AxjXGRI5F_kLVcGnmbzoU2h&oh=00_AYAEosayJsPuMUMcO8MVWyYWgemO4IW33OiTYIpcPs2yAw&oe=679DFE24',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is a vintage comic book cover displaying "Fantastic Four" with a looming figure of Doctor Doom above. The cover features several characters, including members of the Fantastic Four and Daredevil. The prominent text "A Blind Man Shall Lead Them!" is displayed, hinting at the storyline within.',
  },
  {
    message: 'by Alex Ross',
    id: '54618571998_654742779988152',
    publishTime: '2023-02-24T04:15:55+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/333231796_3437892496457293_2275286530664870523_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=thRzg8vPouQQ7kNvgFV7cFH&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYDtZ4M-2Ho9xZg0-SJ6o2dSpOf_C2SJzxYzZpC1TCDpSw&oe=679DD3A1',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A dynamic and detailed depiction of numerous Marvel superheroes, including those in iconic outfits like Captain America, Iron Man, and others, portrayed in an action-packed scene. The artwork, by Alex Ross, captures the characters in mid-motion as they charge forward together.',
  },
  {
    shares: 153,
    reactions: 3397,
    message: 'Lou Ferrigno as The Incredible Hulk\nArtwork by Rudy Massar',
    id: '54618571998_957163589746068',
    comments: 46,
    publishTime: '2024-04-20T18:16:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/437073376_953289840133443_705994584413680716_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BDRMbQswGGsQ7kNvgEriIhr&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ayhl-RshheSPztt9I5rbYoz&oh=00_AYATPpE5VB7dR3ZKuYBhNyyYipce414fT4xryoj0MQA1GQ&oe=679DECFD',
    status: 'PUBLISHED',
    imageDescription:
      'A green-colored sculptural bust of an angry, muscular figure with a tattered shirt, mounted on a stand.',
    postUrl: 'https://www.facebook.com/54618571998_957163589746068',
    totalEngagement: 3596,
  },
  {
    message: 'Such a great movie....Superman (1978)',
    id: '54618571998_770628358399593',
    publishTime: '2023-07-26T14:09:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/361616394_770425551753207_8873618790513546113_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BKP5FU9oUhwQ7kNvgE-yM3f&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AxJt4ThoRXUxba1szmG7ZRv&oh=00_AYB6u6h923MAQgLLfuu9mSzq_FpIg4qT9yF_wJ9gahGs9A&oe=679DE960',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'A person dressed as Superman is confidently flying upward, looking determined, alongside a woman who holds onto him, seemingly in flight. The image is set against a dark background, enhancing the focus on the characters.',
  },
  {
    message: 'time for some cartoons',
    id: '54618571998_811439147651847',
    publishTime: '2023-09-24T17:07:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/382189352_811167304345698_2399077297711956399_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uSf7c-EI88MQ7kNvgHGqaj5&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AQ6uIXz3wArX-td61b3bq_j&oh=00_AYAO__AL4J4Y7soGbgQy932BoAz8kqzN-vsJk08-_zqHOQ&oe=679DCD5F',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is a colorful cartoon poster for "Frankenstein Jr. and The Impossibles." It features a large robot superhero flying with three costumed superheroes below. A futuristic cityscape is in the background, and the title is prominently displayed at the top.',
  },
  {
    message: 'Spider-Man Cartoon (1967 to 1970)',
    id: '54618571998_749136377215458',
    publishTime: '2023-06-26T18:17:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/355356296_748751743920588_8201500977399916106_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Bb4ZLaILoIQQ7kNvgHn7PBU&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ASXWjd5_HguOydGi6Cp1YcZ&oh=00_AYBLT-VXTmG6rNO2i1b797aHocHkplmsTw72nzy9TAzNGQ&oe=679DE5BD',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image depicts an animated version of Spider-Man swinging through a cityscape, showcasing his classic red and blue costume with the iconic spider emblem on the chest.',
  },
  {
    message:
      'Classic Comic - Captain America #110 (1969) - 1st App of Madame Hydra. The Hulk appears and 1 of the most iconic Covers by Jim Steranko',
    id: '54618571998_685140206948409',
    publishTime: '2023-04-03T17:12:05+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/339318542_932421734771901_4912677361993142108_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BF8Yl0edV4kQ7kNvgEci-GQ&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AjtGYtRKUGGoHrazfSxAA5t&oh=00_AYDn83MezsTPB-k0lWjUNpeNFnR7BvY1_HaITnmSlnmFAQ&oe=679DCFEA',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image is the cover of "Captain America" comic issue #110 from February. It features Captain America alongside another character, seemingly in action against the Hulk, who is breaking through a wall. The artwork is dynamic, with vibrant colors and classic comic styling.',
  },
  {
    message:
      "Classic Comic - Captain America #109 (1969) - retells Captain America's origin. Sgt Fury appears",
    id: '54618571998_614375494024881',
    publishTime: '2023-01-09T18:21:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/324140990_531350185766021_5572502634587399165_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uUgzIbRFEGMQ7kNvgFLLR6-&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANEcB3dbg9ERQ64wxt3zug_&oh=00_AYBT21r2_fmufoCrPyi86JZBdgSK6NAmb4XYi1G9pEXqeA&oe=679DF137',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is a comic book cover titled "The Origin of Captain America!" featuring Captain America prominently in his iconic costume with a shield. The background resembles a newspaper, emphasizing the character\'s debut or significant storyline. The comic is from Marvel Comics Group, issue #109.',
  },
  {
    message: "Batman '66 Meets the Green Hornet #2 Cover Art by Alex Ross",
    id: '54618571998_1097626429033116',
    publishTime: '2024-10-26T18:11:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/464388244_1097304649065294_8118449988462944276_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VH5jPOU9SUMQ7kNvgEjBWbs&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ADDmRUtM0kuySVKVPfSiMxo&oh=00_AYDg5hLc_RyiHW3XW1bpH6dhEwqTboSxr0hR-3dYCGNECw&oe=679DD442',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image depicts superheroes on top of a moving train, surrounded by pink slime. There are mountains and trees in the background, as well as a helicopter flying nearby.',
  },
  {
    shares: 290,
    reactions: 3200,
    message:
      'Classic Comic - Web of Spider-Man #1 (1985) - Early Black Costume. Pre Venom. Cover by Charles Vess',
    id: '54618571998_659946059467824',
    comments: 72,
    publishTime: '2023-03-02T20:04:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/334259109_3370411056559348_3302887444196443460_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6PzNnfdsfKwQ7kNvgH9FF6m&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYC0VKQXsftw3IsgOAs6G4vVZLvKFy-WY43iBP-qGhhq3w&oe=679DE356',
    status: 'PUBLISHED',
    imageDescription:
      'The image is the cover of "Web of Spider-Man" issue #1 by Marvel Comics. It features Spider-Man in his black suit perched on a gothic building, surrounded by gargoyles, against a moonlit sky. The title is prominently displayed with an intricate web design.',
    postUrl: 'https://www.facebook.com/54618571998_659946059467824',
    totalEngagement: 3562,
  },
  {
    message:
      'Classic Comic - X-Men #1 (1963) - 1st Appearance of the X-Men and Magneto!.  Jack Kirby cover and art',
    id: '54618571998_728864029242693',
    publishTime: '2023-05-30T17:11:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/349598809_185316487468075_1582279789821593204_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5QabgN-hK_0Q7kNvgEOwVxm&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDWRC2mfkXFbh8H3P2JVBd&oh=00_AYDTbNhnQrDP8657Issr62oBxANxQLmJAy0EwqRzBsHuQA&oe=679DE966',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'This is the cover of "The X-Men" comic, issue #1, published by Marvel Comics. It features the original X-Men team (Cyclops, Marvel Girl, Angel, Beast, and Iceman) battling Magneto. The cover highlights it as the first issue with the tagline \u201cThe Strangest Super-Heroes of All!\u201d',
  },
  {
    shares: 182,
    reactions: 3301,
    message:
      'Classic Comic - Amazing Spider-Man #62 (1968) - Medusa appears. John Romita cover',
    id: '54618571998_882653667197061',
    comments: 73,
    publishTime: '2024-01-06T18:11:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/417139510_882327393896355_9054802269355932927_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=y0wQI7HnoMQQ7kNvgHkg4bD&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Aq9BZLyejJs2C5ZtYhRhe9s&oh=00_AYBqAxqjqwD27yqQb64zQIqop4eeeCTlV6YGL4wiLSCCQg&oe=679DDB63',
    status: 'PUBLISHED',
    imageDescription:
      'The cover of "The Amazing Spider-Man" #62 features Spider-Man being held down by Medusa. Her long, animated hair is entangling him, with the tagline "The Name of the Dame is... Medusa!" The comic is published by Marvel, priced at 12 cents, and was released in July.',
    postUrl: 'https://www.facebook.com/54618571998_882653667197061',
    totalEngagement: 3556,
  },
  {
    message:
      'Adventures of Superman (September 19, 1952 - April 28, 1958) - starring George Reeves, Phyllis Coates, Noel Neill, Jack Larson, John Hamilton, and Robert Shayne',
    id: '54618571998_809322741196821',
    publishTime: '2023-09-21T13:22:05+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/381056260_809127794549649_4325976222477717532_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=MKV0r55NBNkQ7kNvgFeyHxt&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AQ6uIXz3wArX-td61b3bq_j&oh=00_AYApOE5OYQOawyjvjGU6NlxqKgLgE141n0ij50AFOYMPqw&oe=679DC7D4',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'A man in a suit sits casually on a desk while talking to a woman with a notepad. The setting appears to be an office, with a certificate on the wall and a vintage telephone nearby.',
  },
  {
    message:
      'Classic Comic - Batman #70 (1947) - Penguin appears. Robot cover by Win Mortimer',
    id: '54618571998_650965440365886',
    publishTime: '2023-02-19T22:13:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/330191764_750553736302028_7262546744965078974_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wGGjvENqs5IQ7kNvgEF1Nmb&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYD3scygN-cfwptLtHl9JYIg5YkuA592GFoSdCOTIHDSSA&oe=679DE905',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This image is the cover of Batman comic issue #70. It features Batman and Robin alongside a large robot walking down a street. The text asks if a "mechanical manhunter" can replace Batman as an ace crime-fighter, introducing "The Robot Cop of Gotham City!" The scene shows the robot deflecting bullets from men in suits who are firing at it.',
  },
  {
    message:
      "Classic Comic - Amazing Spider-Man #50 (1967) - Spidey's origin retold . Classic Cover. and oh yeah 1st appearance of the Kingpin",
    id: '54618571998_712208717574891',
    publishTime: '2023-05-08T17:27:43+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/344757131_768361991615754_4198905376677630663_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pcecJWGNdC8Q7kNvgEJwmJl&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AvTk5bmSziIvFA13hRBimly&oh=00_AYAjIJa_ygnA1yU9NvwyfMqmXAzKg8yaOog3Dv0yB2GCyA&oe=679DE6F1',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a classic comic book cover of "The Amazing Spider-Man" Issue #50, featuring a large, faded Spider-Man figure in the background. In the foreground, a man walks away with his head down, casting a shadow. The text reads "Spider-Man No More!"',
  },
  {
    message:
      'Classic Comic - Strange Tales #161 (1967) - 1st Silver Age appearance of the Yellow Claw. Captain America, Mr Fantastic and Thing appear. Cover by Jim Steranko',
    id: '54618571998_793797009416061',
    publishTime: '2023-08-29T20:19:18+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/370471168_793792909416471_1814274379127253091_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=axt_OXS5jZ4Q7kNvgHAw-z6&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFPZWKt5JZ1PFEs5yzutf_Z&oh=00_AYD273w9PCrvXPUBiBT4aGpyTj4Ndzux2y7bKXy89ecKrA&oe=679DF947',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image is a vintage comic book cover titled "Strange Tales" featuring "Nick Fury, Agent of S.H.I.E.L.D." and "Doctor Strange," published by Marvel Comics. It depicts a large, menacing figure with a mechanical appearance in the background, while several superheroes, including one with a star-shaped shield, are in action poses in the foreground. The main caption reads, "The Second Doom!"',
  },
  {
    message:
      'Classic Comic - Detective #198 (1953) - Lord of The Batmanor.. Win Mortimer cover',
    id: '54618571998_812169277578834',
    publishTime: '2023-09-25T19:22:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/383089885_812125697583192_1469325761134896893_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=e-Ius3zMfMwQ7kNvgEZOQGf&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AQ6uIXz3wArX-td61b3bq_j&oh=00_AYClroXcsSwpurAGmjmajowsWbfHA-KUrXg73PD6xK9-5A&oe=679DC61A',
    status: 'SCHEDULED',
    imageDescription:
      'This is the cover of "Detective Comics" No. 198. It features a scene with Batman and Robin wearing kilts. Batman is swinging across a castle drawbridge while Robin stands among a group of bagpipers dressed similarly. The text mentions a story titled "The Lord of Batmanor!"',
  },
  {
    shares: 400,
    reactions: 3016,
    message: 'Comic book rack 1945',
    id: '54618571998_688863693242727',
    comments: 120,
    publishTime: '2023-04-08T13:08:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/340085784_243072394848334_5542745283078261283_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=CBvzXeUIdAIQ7kNvgFIRvwL&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AlpbJrh9swE9shsKu1FU20_&oh=00_AYA9f1WhqpnJifFalXVTmV_zKblZLzfYuHxNEJOQor2htA&oe=679DFBE1',
    status: 'PUBLISHED',
    imageDescription:
      'The image shows shelves filled with vintage comic books in a store or display. The comics have colorful and varied covers featuring different characters and themes. The view captures multiple rows stacked with numerous titles.',
    postUrl: 'https://www.facebook.com/54618571998_688863693242727',
    totalEngagement: 3536,
  },
  {
    message:
      'Classic Comic - Detective #247 (1957) -  Professor Milo appear. Story by Bill Finger (Batman Co-creator.)  Cover by Curt Swan',
    id: '54618571998_829246315871130',
    publishTime: '2023-10-19T16:58:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/394259236_828865649242530_8670589692271700146_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=e-VZzLl5QO4Q7kNvgHt4bE4&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AvEhpGDi1HQFkGgpMJudFl6&oh=00_AYAwt4urS5mnycMWCnCzJT-fEF6PJU8A_kHKCl7cuWwraA&oe=679DEB88',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image is a Detective Comics cover, issue #247, showing Batman dramatically removing his cape as he declares to Robin that he can never wear the Batman costume again. Robin looks shocked in the background. The cover features the tagline "The Man Who Ended Batman\'s Career."',
  },
  {
    message:
      'Classic Comic - Fantastic Four Annual #2 (1964) - Origin of Dr Doom. Includes 11 Pin Up pages. Art and cover by Jack Kirby',
    id: '54618571998_636310415164722',
    publishTime: '2023-02-03T18:17:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/329094656_702389474894644_5010359061773243249_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=90CsiNYkLpgQ7kNvgFAF8Ob&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AOWK0IeDNMQbdSLHTr-neG3&oh=00_AYAFLk6c9PZp9DpDmuQkxekcaIiG1saiCh1j9AsvEtXeqg&oe=679DD3CB',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a cover of a comic book titled "Fantastic Four Annual #2" from 1964, featuring "The Final Victory of Doctor Doom!" It shows Doctor Doom holding members of the Fantastic Four. The cover promises the first revelation of Doctor Doom\'s origin. The comic is part of the Marvel Comics Group and costs 25 cents.',
  },
  {
    shares: 131,
    reactions: 3306,
    message: 'Julie Newmar ...our favorite Catwoman',
    id: '54618571998_1004227351706358',
    comments: 78,
    publishTime: '2024-06-25T13:14:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/449162359_1003925911736502_3200300592141455125_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Vnl_DTDPFbEQ7kNvgGG_vyf&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A5CA6tOWVD1GZib3gPCUFAO&oh=00_AYCi2UAGrxwyizRybLFKZwLLk78N2duUd1DYlFSiyMrB4A&oe=679DDECC',
    status: 'PUBLISHED',
    imageDescription:
      'The image features a person dressed in a shiny black catsuit with a belt, cat ears, and long gloves, standing in an ornately decorated room with red and gold furniture and elaborate decor.',
    postUrl: 'https://www.facebook.com/54618571998_1004227351706358',
    totalEngagement: 3515,
  },
  {
    message: 'Walter Lantz and friends',
    id: '54618571998_657495756379521',
    publishTime: '2023-02-27T14:10:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/333977495_706014547935300_2460129057703430436_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zh3CNJL_6sIQ7kNvgGaMZAt&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYCNkJKDsq1E-8nA4x0PQmX_hZskleDBleaNLa6dIKAJMw&oe=679DE9BC',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A man sits on a couch surrounded by various cartoon character dolls, including one resembling a bird. Above him is a painting of a similar bird character holding a flower.',
  },
  {
    shares: 385,
    reactions: 3096,
    message: 'From Captain America #112 by Jack Kirby',
    id: '54618571998_668906261905137',
    comments: 29,
    publishTime: '2023-03-13T20:32:10+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/335062728_1291175478138746_5526345309154863331_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=i-ODcXGQQY4Q7kNvgHWUZhn&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AxjXGRI5F_kLVcGnmbzoU2h&oh=00_AYC-vebP8A-_w6vi4TKXB3wmhcqYOzpE6wlxCJJRVSwh3A&oe=679DD44F',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a dynamic comic book panel featuring a superhero charging forward with a shield, amidst an action-packed scene with explosions, vehicles, and other characters. A speech bubble states, "And so, a legend lived again!" The style is colorful and energetic, typical of classic superhero comics.',
    postUrl: 'https://www.facebook.com/54618571998_668906261905137',
    totalEngagement: 3510,
  },
  {
    shares: 341,
    reactions: 3094,
    message:
      'Classic Comic - Amazing Spider-Man #121 (1973) - Death of Gwen Stacy. Iconic battle with Green Goblin... Cover by John Romita',
    id: '54618571998_655286036600493',
    comments: 73,
    publishTime: '2023-02-24T18:21:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/332919742_3425635744348042_4048466064658151420_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gQ8ZD6OJbnwQ7kNvgG6eN3G&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYCOhHDvfRFBqtr3L8SF1mGtwsieWaIxaljbenpgVMhDug&oe=679DEE81',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book cover for "The Amazing Spider-Man" issue #121 from June, priced at 20\u00a2. It features Spider-Man in action with various characters\' faces in boxes around him. Phrases like "Someone close to me is about to die!" and "Turning Point" suggest a dramatic plotline. The cover hints at an unexpected super-villain and a major event in Spider-Man\'s life.',
    postUrl: 'https://www.facebook.com/54618571998_655286036600493',
    totalEngagement: 3508,
  },
  {
    message: 'time for some cartoons',
    id: '54618571998_764160752379687',
    publishTime: '2023-07-16T17:08:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/360092369_763806619081767_502229252126083707_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ymHAmnQn9bgQ7kNvgFnZn5d&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ATc73HRWyp02Z-tyObKGEZm&oh=00_AYCy6SzHB_o3WMxVJPsb9eDxX8ENQ47EEW_3XRUUM3ee0w&oe=679DEE68',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image features four animated superhero characters in action poses, alongside the title "Birdman & The Galaxy Trio" on a light blue background.',
  },
  {
    shares: 218,
    reactions: 3177,
    message: 'FF cartoon - Hanna Barbera 1967',
    id: '54618571998_1085967360199023',
    comments: 103,
    publishTime: '2024-10-12T14:00:12+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/462712355_1085387870256972_99241815981418590_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lazFphbmCUsQ7kNvgHE6g5f&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AKYaoeCGwU8pX7Z0Cnvfmza&oh=00_AYBbYbQsiA82uJ5DmYJlgbDIoJ8hGx0IRHVvKll1Q-BZdA&oe=679DE42A',
    status: 'PUBLISHED',
    imageDescription:
      'Four stylized cartoon figures stand side by side: three in business attire and one in a trench coat and hat, wearing a mask. Each is distinct in style and color.',
    postUrl: 'https://www.facebook.com/54618571998_1085967360199023',
    totalEngagement: 3498,
  },
  {
    shares: 195,
    reactions: 3225,
    message:
      'Classic Comic - Avengers #71 (1969) - 1st appearance of the Invaders. Black Knight Joins the Avengers. Sal Buscema and Sam Grainger cover and art',
    id: '54618571998_879397594189335',
    comments: 71,
    publishTime: '2024-01-01T21:45:09+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/414938508_879394227523005_1457487301228292867_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=SUcb7EvAgy0Q7kNvgFQp3Vw&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AUTqRmWWQpOaWM27__8mqtj&oh=00_AYC3dV6WYJAu7cBrexZL872VbFgo8Awy9RmOa-Zf3pCUVg&oe=679DDA27',
    status: 'PUBLISHED',
    imageDescription:
      'This is a vintage comic book cover for "The Avengers," issue #71, published by Marvel Comics Group. The artwork features several superheroes, including Captain America, engaged in a dynamic battle scene set in front of the Eiffel Tower. The title "The Final Battle!" is prominently displayed at the bottom.',
    postUrl: 'https://www.facebook.com/54618571998_879397594189335',
    totalEngagement: 3491,
  },
  {
    message:
      'Classic Comic - Alpha flight #1 (1983) - origin of Alpha Flight. Art and story by John Byrne',
    id: '54618571998_588534266609004',
    publishTime: '2022-12-11T18:27:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/319337498_588087026653728_6561312207424566689_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PN4L513rmZgQ7kNvgGR4ZUm&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AuexS-KxJ4KGtQ3Cm4pz2Tg&oh=00_AYAKxOIh1GN5tlFFfpm29iu5EYoaGQAz-RVMV-5X8VA39Q&oe=679DD8B4',
    status: 'SCHEDULED',
    imageDescription:
      'This image is the cover of "Alpha Flight" issue #1 from Marvel Comics, featuring a group of superheroes in dynamic poses. The text highlights it\'s a "1st dynamic double-size issue" and mentions that the team is "exploding from the pages of the X-Men." The colorful illustration showcases a variety of characters, each with distinct costumes and powers.',
  },
  {
    message:
      'Classic Comic - Silver Surfer #4 (1969) - Thor & Loki Appear . Cover by John Buscema',
    id: '54618571998_573619581433806',
    publishTime: '2022-11-25T20:00:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/316940819_573052538157177_6336719869268392573_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_Bd1bUDgQV8Q7kNvgHkeQ1F&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AF8l_PO0GjPuZN8Dk6c1BpY&oh=00_AYCcCf9Q_OwC6twuxSAs1fuXJ4_Wb0eH5mNg4eMABn2RHg&oe=679DE5D5',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is a comic book cover featuring "The Silver Surfer" from the Marvel Comics Group. The title reads "Sky-Rider of the Spaceways!" The Silver Surfer is shown on his surfboard, appearing to confront a character with a hammer and red cape. The cover is colorful, with dynamic illustrations and bold lettering.',
  },
  {
    message:
      'Classic Golden Age Comic - Detective #196 (1953) - Hard to find Detective/Batman issue. Bill Finger  stories. Win Mortimer cover',
    id: '54618571998_701387691990327',
    publishTime: '2023-04-24T20:33:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/342546203_1279360212937448_3652709017169627807_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VNeUgsvWJTEQ7kNvgFq8ifm&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A7jDnAwd5xQtUEgw6tdzuym&oh=00_AYB_T2vM-eNs6RY_yLP5E3dREwq5GSV5byvDKRlqnc8dsw&oe=679DDF41',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a comic book cover of "Detective Comics" issue #196, featuring Batman and Robin swinging onto a London bridge at night. The title "The City Without Guns!" and "BATMAN AND ROBIN BATTLE ARMED DESPERADOES" is prominently displayed. A British policeman reacts to their arrival, and the iconic Bat-Signal lights up the sky. Additional text suggests a feature on "Pow-Wow Smith, Indian Lawman."',
  },
  {
    message:
      'Classic Comic - Fantastic Four #14 (1963) - Sub-Mariner appears. 2nd Puppet Master. Bondage cover. Cover by Jack Kirby and Steve Ditko',
    id: '54618571998_673602411435522',
    publishTime: '2023-03-19T21:25:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/336562768_1176686403003379_2008042993296546142_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7WmIxNmlmuMQ7kNvgEW6Z8T&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYAYtt62MxXg0pCrlPkW6iBZnvDRu1jMOFHr8ZOU4HzE2w&oe=679DE1FF',
    status: 'SCHEDULED',
    imageDescription:
      'This is a vintage comic book cover for "The Fantastic Four" issue #14. It features the Sub-Mariner prominently in the foreground, confronting the Fantastic Four team: Mr. Fantastic, the Thing, the Human Torch, and the Invisible Woman. The text highlights the action and drama of the encounter, with phrases like "The Sub-Mariner Strikes!" and "Undersea Monarch versus America\'s greatest super-heroes!"',
  },
  {
    message: 'art by Frank Frazetta',
    id: '54618571998_962156339246793',
    publishTime: '2024-04-27T21:29:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/440150661_960990026030091_4265412220013910246_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4djyarKJGHoQ7kNvgHbHJgc&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A85M5KuolsBPj4E-57EiotJ&oh=00_AYCZ2WMM3ksREFpAEKvBMu3J87dYe3XXXBQX-G8-8cTHZA&oe=679DD531',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a black and white sketch of a woman reclining on the ground. She has long, wavy hair and is wearing a loose-fitting top and pants, with a confident expression on her face. The artwork is characterized by strong lines and shading.',
  },
  {
    shares: 379,
    reactions: 3039,
    message:
      'Classic Comic - Batman #84 (1954) - Catwoman Cover and appearance. Story by Bill Finger. Art by Dick Sprang and cover by Win Mortimer',
    id: '54618571998_646292577499839',
    comments: 28,
    publishTime: '2023-02-14T18:11:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/330991163_918115032656402_5113012151726912015_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hauCdiLVZIEQ7kNvgG7VlkO&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYAvhHU0R6cLm_NlFpbl8Zcl37f6qI6r0ic2Q7C4nO85vQ&oe=679DE81C',
    status: 'PUBLISHED',
    imageDescription:
      'This is the cover of Batman comic issue No. 84 from June, featuring Batman and Robin confronting Catwoman. The scene includes mannequins in a display and a black cat in the foreground with the headline reading "The Dynamic Duo faces the claws and cunning of the Catwoman in \'The Sleeping Beauties of Gotham City.\'"',
    postUrl: 'https://www.facebook.com/54618571998_646292577499839',
    totalEngagement: 3446,
  },
  {
    shares: 737,
    reactions: 2647,
    message: '',
    id: '54618571998_852132410249187',
    comments: 61,
    publishTime: '2023-11-23T01:17:06+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/403107678_851947323601029_5875968932148418784_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FitGjTC7-MAQ7kNvgFlTRak&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad1ff1s2cBGYM0_gvSA37EV&oh=00_AYBW1reqRyDXaA68GctsvkdsyRM_1dOATcGqQjYk-dn82g&oe=679DEB5E',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a "Dennis the Menace" comic strip. It shows Dennis lying on a bed surrounded by his toys and comic books, reading one of them. There is a speech bubble with the text: "One thing I\'ve learned in life is you can never have too many comic books!"',
    postUrl: 'https://www.facebook.com/54618571998_852132410249187',
    totalEngagement: 3445,
  },
  {
    shares: 279,
    reactions: 3061,
    message: 'Foom Poster by Jim Steranko (1973)',
    id: '54618571998_911009941028100',
    comments: 78,
    publishTime: '2024-02-14T17:09:00+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/426986285_908651891263905_7702700680237128118_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nDByvaGO8rwQ7kNvgEI0j_L&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=APsNzbbfu_cdkD25yK7t850&oh=00_AYC1ooRSJsWTBHTlCSLpItGrtJzKTmjtSXLtmy9YnARsQQ&oe=679DE0C5',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vintage comic book-style poster featuring various superheroes in dynamic poses. They are gathered in a colorful composition, breaking out from a central point, surrounded by a text that celebrates heroism and adventure. The poster evokes classic comic book art and enthusiasm.',
    postUrl: 'https://www.facebook.com/54618571998_911009941028100',
    totalEngagement: 3418,
  },
  {
    message:
      'Classic Comic - Amazing Spider-Man #20 (1965) - 1st appearance & Origin of the Scorpion. Peter Parker/Spider-Man Pin-Up. Cover and art by Steve Ditko',
    id: '54618571998_722843523178077',
    publishTime: '2023-05-22T17:12:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/348472394_1429259727839395_7542058738784469217_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Gzu0m-2BpK0Q7kNvgHMl0FC&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ArYh5GykvSY8MnqKvLRRkWA&oh=00_AYDRbDrdc6Mu21OOSFooqn5AiZNBalZQEVr9fkia3EzZQQ&oe=679DC679',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a cover of "The Amazing Spider-Man" comic, issue #20. It features Spider-Man being lifted by the villain Scorpion over a cityscape. The cover teases the introduction of the new villain. The price of the comic is 12 cents, and it\'s published by Marvel Comics.',
  },
  {
    message:
      'Classic Comic - Captain America #241 (1980) -   Punisher aopparance. Story by Mike Barr . Cover by Frank Miller',
    id: '54618571998_642655081196922',
    publishTime: '2023-02-10T20:18:11+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/330210991_745079060628404_8159449068443412509_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mXzyut_ywl4Q7kNvgENRfrQ&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AOWK0IeDNMQbdSLHTr-neG3&oh=00_AYDDKq5AXtCxrqUu8frowM2nvfQZBdhV-2dSubsIjOV2Ww&oe=679DF679',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic book cover featuring Captain America facing off against the Punisher. The title reads "Captain America," and there\'s text stating "Powerless Before the Punisher!" The background shows a cityscape with buildings.',
  },
  {
    message: 'From 80-Page Giant #4 (October 1964) art by Carmine Infantino',
    id: '54618571998_752851236843972',
    publishTime: '2023-07-01T18:10:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/357418725_752461146882981_1025589510641658530_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=i3MuxZQf514Q7kNvgGvam3U&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AS1qGJsq0Z9ZgV8qfukSk_U&oh=00_AYBcbo7Tp_m8b95XweAM8eF4YmTTkLXQPd44Qo0pFCpNEw&oe=679DCE7D',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'This image is a comic-style illustration titled "Flash\'s Rogues\' Gallery" featuring various villains from The Flash series. They are arranged in three rows, with names listed below them. A banner reading "Flash\'s Rogues\' Gallery" is at the top.',
  },
  {
    message:
      'Classic Comic - Batman #169 (1965) - 2nd appearance of the SA Penguin. Carmine Infantino cover',
    id: '54618571998_693013749494388',
    publishTime: '2023-04-13T19:22:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/341098144_615033176817336_4951787207925827081_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6C-dbZxv6XwQ7kNvgH9zrHH&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AlpbJrh9swE9shsKu1FU20_&oh=00_AYCDRmCrtlvecqLAzqdfemeSOcXnz3ZYPBLiM2UJ90Ch6g&oe=679DE532',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is a vintage comic book cover featuring Batman and Robin confronting the villain Penguin, who is escaping with a jeweled meteorite. The headline proclaims "Partners in Plunder!" and highlights Penguin\'s role as the master of fowl play. The artwork is dramatic and colorful, capturing a classic superhero confrontation.',
  },
  {
    shares: 199,
    reactions: 3141,
    message:
      'Classic Comic - X-Men #35 (1967) - Spider-Man cover and crossover. 1st appearance of the Changeling. Cover by Dan Adkins',
    id: '54618571998_872555554873539',
    comments: 52,
    publishTime: '2023-12-22T23:17:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/413905263_872110508251377_6564973047248617359_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pmfVNzX9WGMQ7kNvgF2brLa&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A8NHsBiIKKnXEG-EcxcTJjh&oh=00_AYBYIwyLLKmI_POljHWkxLXEJ0XH-2DYoSTdvT2gKH6Vig&oe=679DEE0F',
    status: 'PUBLISHED',
    imageDescription:
      'This is the cover of "The X-Men" comic book, issue #35, featuring a crossover with Spider-Man. It shows Spider-Man swinging through the air as members of the X-Men react to his presence. The tagline reads, "Along Came a Spider!" The comic is published by Marvel Comics.',
    postUrl: 'https://www.facebook.com/54618571998_872555554873539',
    totalEngagement: 3392,
  },
  {
    message:
      'Classic Comic - Brave & Bold #51 (1963/64) - Hawkman and Aquaman team up. Pre dates Hawkman #1. Cover and art by Howard Purcell',
    id: '54618571998_789349223194173',
    publishTime: '2023-08-22T19:14:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/369185761_789276393201456_937458705247541001_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zIL-hhCzqDoQ7kNvgG8yHgs&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYBsi8s2hZwXmxS3k61TVfxNj6QdH_xXVA-LGQf-ZgA9Kw&oe=679DCA89',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image depicts a comic book cover titled "The Brave and the Bold," featuring Aquaman and Hawkman. They are battling a large, green, winged sea creature emerging from the water. The cover promises an adventure with two heroes joining forces against a perilous menace.',
  },
  {
    message: 'Mighty World of Marvel poster by John Buscema',
    id: '54618571998_717323773730052',
    publishTime: '2023-05-15T16:11:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/346052053_764049502105144_8338830576961565378_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=y2a6j-JOd7YQ7kNvgENoHjB&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AvTk5bmSziIvFA13hRBimly&oh=00_AYD37Y-bWfRJ1d0VKy-SC-msdjAIELovyM-U4EhKxzCKVw&oe=679DF80B',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'This vintage Marvel poster features classic comic superheroes: Spider-Man swinging, Human Torch in mid-flight surrounded by flames, Mr. Fantastic stretching, Invisible Woman poised for action, the Thing in a strong stance, and Hulk ready to strike. The art style is dynamic and colorful, typical of 1970s comic book illustrations.',
  },
  {
    message:
      'Classic Comic - Detective #69 (1942) - Joker cover and story. Cover by Jerry Robinson.',
    id: '54618571998_666562218806208',
    publishTime: '2023-03-10T18:12:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/335088999_151074874525890_6215491084399612814_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PMI4rIZQXU8Q7kNvgFBschM&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AxjXGRI5F_kLVcGnmbzoU2h&oh=00_AYANkGozYvseMU9Tk01FpW_5DgdhQZzwm8PWAnnE8vl4sA&oe=679DCE9F',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage comic book cover for "Detective Comics" No. 69. It features a large illustration of the Joker menacingly looming over Batman and Robin, who are prepared to confront him. The Joker is depicted with a wide grin, holding guns. The text highlights a story titled "The Harlequin\'s Hoax," where the Joker challenges the iconic duo.',
  },
  {
    message:
      'Classic Comic - Marvel Tales #1 (1964) - 1st Marvel reprints of the origins of these characters. Art by Jack Kirby and Steve Ditko',
    id: '54618571998_692058369589926',
    publishTime: '2023-04-12T17:14:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/340979931_2674601406028388_4774911565939213323_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EoEuMtCL7HcQ7kNvgEZBbT9&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AlpbJrh9swE9shsKu1FU20_&oh=00_AYA8nfoD4pHs0d5d1ogXrqHUR83kB5J4uEvX6J7nPQwcKg&oe=679DD190',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a vintage comic book cover titled "Marvel Tales Annual #1" from 1964. It features bold, colorful illustrations of famous Marvel superheroes, including Spider-Man, Hulk, Giant-Man, Thor, Iron Man, and others. The cover highlights "Six Big, Thrilling, Uncut Origin Tales" and various character images, with the promise of "72 Big Pages" for 25 cents.',
  },
  {
    shares: 310,
    reactions: 3045,
    message:
      'Classic Comic - Flash #92 (1948) - 1st Black Canary Cover. 1st Black Canary solo story. Carmine Infantino cover',
    id: '54618571998_775484237914005',
    comments: 17,
    publishTime: '2023-08-02T16:57:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/363397157_775128874616208_4339027480862487543_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8qSbgzMKvdgQ7kNvgG0BzK5&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ap-gkw9jU2HMot4HcT8m766&oh=00_AYBY4CoOgEpCz9PoT3IUQio7T_klVWyF4kSCYpsUnVjkjw&oe=679DF4C3',
    status: 'PUBLISHED',
    imageDescription:
      'The image is the cover of "Flash Comics" No. 92, featuring a character called "The Black Canary." The cover showcases her prominently in the center, with two male heroes on either side breaking through a paper circle. The comic is a 52-page issue, priced at ten cents. The top left corner features "The Human," and the publication is marked as a DC Superman publication.',
    postUrl: 'https://www.facebook.com/54618571998_775484237914005',
    totalEngagement: 3372,
  },
  {
    shares: 564,
    reactions: 2743,
    message: 'the best of times',
    id: '54618571998_911665857629175',
    comments: 64,
    publishTime: '2024-02-15T15:11:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/426402202_911533544309073_6364823778378245953_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eyfjyjvx3VsQ7kNvgG4pkRu&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=APsNzbbfu_cdkD25yK7t850&oh=00_AYAX3AwJzvVWa-qpQ9oq5lNApx43pYF9ScPRu_rGExIYZg&oe=679DD431',
    status: 'PUBLISHED',
    imageDescription:
      'The image depicts two children sitting on the floor, watching a vintage television featuring the "Batman" TV show in color. Surrounding the TV are colorful, comic-style illustrations of characters from the show, including Batman, Robin, and various villains. The overall style is retro and nostalgic.',
    postUrl: 'https://www.facebook.com/54618571998_911665857629175',
    totalEngagement: 3371,
  },
  {
    message: 'Jonny Quest painting by Doug Wildey, 1988.',
    id: '54618571998_1015288237266936',
    publishTime: '2024-07-10T14:07:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/450370492_1015009663961460_5658842024597343293_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1aHbdoZ5F-0Q7kNvgHfvFe7&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ar-pLjOCTS9S8Pu2xAqhP0o&oh=00_AYCFXmECW__YgW_sm3hcvpa3XgP-Ao44ZOOtUKry_cGT5g&oe=679DCAA6',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a dynamic and colorful illustration featuring several characters in an adventurous jungle scene. The characters are interacting with two large dinosaurs: a velociraptor and a triceratops. In the foreground, a man lies on the ground unconscious, while a dog and other people, including a child, appear in various action poses. The setting has dense foliage, conveying a sense of urgency and excitement.',
  },
  {
    shares: 462,
    reactions: 2812,
    message: '',
    id: '54618571998_817725873689841',
    comments: 92,
    publishTime: '2023-10-03T16:11:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/385907017_817383967057365_5337160735020524000_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xKb5dyk2NOAQ7kNvgEoiwPO&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A_vnmMIHG0AfcC5NFksZQ5j&oh=00_AYB7a-umNnzNb5EOcqU4Q_33JwE-rw4HoZcVuztZQcOJHw&oe=679DEE2C',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a parody cover of "Action Comics No. 1" from June 1938, featuring a superhero character lifting a car. However, the car and wheels have a distinct red-and-blue web design associated with another famous superhero. People are depicted running away in surprise or fear in the foreground.',
    postUrl: 'https://www.facebook.com/54618571998_817725873689841',
    totalEngagement: 3366,
  },
  {
    shares: 561,
    reactions: 2684,
    message: 'Back Cover to Space Ghost #1 (1967) from Gold Key',
    id: '54618571998_618610250268072',
    comments: 118,
    publishTime: '2023-01-14T17:04:00+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/325630326_553404766699563_2434466030311696818_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zcgT3qwBjVwQ7kNvgEE3dB5&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AEj86Fc0xlMaisai1dICqfl&oh=00_AYC7Bz7Ydw8peHzLvLvA0OPMwJWR7moH7F-w-SR6RBmD5A&oe=679DF5CC',
    status: 'PUBLISHED',
    imageDescription:
      'The image depicts a cartoon character with a white suit, black mask, red accents, and a flowing yellow cape. The background is blue, and the text reads "SPACE GHOST PIN-UP."',
    postUrl: 'https://www.facebook.com/54618571998_618610250268072',
    totalEngagement: 3363,
  },
  {
    message: 'from Conan #36 (1973) . Art by John Buscema',
    id: '54618571998_761320235997072',
    publishTime: '2023-07-12T17:57:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/359470007_760892689373160_4310119039526419756_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sosSy6lybVAQ7kNvgHGVrI1&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AuXIsvkg1_wDUFJ6cdv22t7&oh=00_AYDW30ZRiB3EETCMFdWwy0aV9L-9AX1TJJbBACPPy0YRSg&oe=679DDED7',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      "The image is a comic book page featuring an action-packed scene with a muscular character. He\u2019s depicted practicing archery, wielding a spear, throwing a heavy battle axe, and riding a horse. The text narrates the character's training and skills, emphasizing his strength and adaptability. The artwork highlights dynamic movement and strength, characteristic of classic adventure comics.",
  },
  {
    shares: 418,
    reactions: 2878,
    message:
      'Classic Comic - Green Lantern #87 (1971/72) - 1st John Stewart. 2nd Guy Gardner appearance. Neal Adams Cover',
    id: '54618571998_674398178022612',
    comments: 49,
    publishTime: '2023-03-20T19:23:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/337227961_779166537110969_5740591592517650068_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZMz7p4PH13QQ7kNvgHkQQi1&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYBorrf3VXVbmYZ20KC-cvkpgbFHQDOADbMlEESG_TBl6g&oe=679DF37C',
    status: 'PUBLISHED',
    imageDescription:
      'This is the cover of "Green Lantern" #87, published by DC Comics. It features two Green Lanterns, with one standing assertively over the other, exclaiming, "Beware my power!" The cover highlights a new character\'s introduction and offers additional content including a Green Arrow story. The issue is priced at 25 cents and is 48 pages long.',
    postUrl: 'https://www.facebook.com/54618571998_674398178022612',
    totalEngagement: 3345,
  },
  {
    message:
      'Classic Comic - Action #351 (1967) - Cover by Curt Swan , art by Wayne Boring - 1st app of Zha Vam',
    id: '54618571998_933523572110070',
    publishTime: '2024-03-18T20:29:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/432617085_933081665487594_4790869509161043326_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ozir7WljlakQ7kNvgHq478I&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A1Cltn3twGkGm6VFwILAtl1&oh=00_AYBtvEdDRkdAnKP363VW2fXotvxSmP3wle-eprkC1C5c7Q&oe=679DD653',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage comic book cover of "Action Comics" featuring Superman in a confrontation with a muscular character named Zha-Vam, who is using one hand against him. The cover highlights a dramatic encounter and showcases vibrant colors and dynamic action typical of classic comic book art.',
  },
  {
    message:
      'Classic Comic - Amazing Spider-Man #62 (1968) - Spidey vs Medusa . Cover by John Romita',
    id: '54618571998_1097698712359221',
    publishTime: '2024-10-26T20:27:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/464571214_1097301629065596_6483775368047390977_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yxHKnNLsE7IQ7kNvgFID2kp&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad6wxUoh2wk8IsbdMQixRCG&oh=00_AYDLkqV5oR5oQ1hzOWjdx2XWcrMdKp0faIaQ0VYji_xz7Q&oe=679DEC82',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'Comic book cover titled "The Amazing Spider-Man" issue #62. It features Spider-Man being held by Medusa, who uses her long hair to restrain him. The text at the bottom reads, "The Name of the Dame is... Medusa!"',
  },
  {
    shares: 222,
    reactions: 3057,
    message:
      'Classic Comic - Amazing Spider-Man #124 (1973) - 1st appearance of The Man Wolf. Cover by John Romita',
    id: '54618571998_690633716399058',
    comments: 52,
    publishTime: '2023-04-10T19:28:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/340585269_235541115626703_4545066210240063028_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Az-PMAaxZVoQ7kNvgF9h9zl&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AlpbJrh9swE9shsKu1FU20_&oh=00_AYBqZy7WVlmcm82MLQ4rqChYzX3lW6j2MZqe0eNq_Qo2xQ&oe=679DE547',
    status: 'PUBLISHED',
    imageDescription:
      'This is a cover of "The Amazing Spider-Man" comic, issue 124 from September. It features Spider-Man confronting the Man-Wolf, who is menacingly breaking through a window. A man in green is cowering on the floor, exclaiming "It\'s my son!" The headline reads "The Mark of the Man-Wolf!"',
    postUrl: 'https://www.facebook.com/54618571998_690633716399058',
    totalEngagement: 3331,
  },
  {
    shares: 628,
    reactions: 2609,
    message: 'gotta love the co-stars lol',
    id: '54618571998_1122028653259560',
    comments: 90,
    publishTime: '2024-11-26T17:09:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/468003269_1121574299971662_1523837364385443591_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wt5NUWQG6RYQ7kNvgFSAg5E&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AGCaRt6IitcQ7-yAsV12fL4&oh=00_AYAKHMWYL4_ZE3Z2IY3BSqxU3WHHgD_hQhac1lGiunsndA&oe=679DDF78',
    status: 'PUBLISHED',
    imageDescription:
      'This image is a parody comic book cover titled "Bruce Wayne: The Poor Little Rich Boy," featuring a cartoon version of Bruce Wayne in a style reminiscent of Richie Rich. Bruce is dressed formally and looking at a bloodied figure on the ground, with dollar signs in the blood. A small bat is flying near him. The left side features caricatures of various DC superheroes like Martian Manhunter, Wonder Woman, Flash, Green Lantern, and Aquaman.',
    postUrl: 'https://www.facebook.com/54618571998_1122028653259560',
    totalEngagement: 3327,
  },
  {
    message:
      "Classic Comic - Wolverine Limited Series #1 (1982) - Wolverine's 1st Solo comic. Story by Chris Claremont. Cover and art by Frank Miller & Joe Rubinstein",
    id: '54618571998_685212606941169',
    publishTime: '2023-04-03T19:19:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/339416046_185833954220749_3307548884909463977_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=znf2MEmHIxUQ7kNvgFtfkha&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AjtGYtRKUGGoHrazfSxAA5t&oh=00_AYBkvwv5fRQoLjRyPiMHpWHqVgE8N3pyS--IK6kZj0yQ9Q&oe=679DDDEE',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'This is a comic book cover for "Wolverine" from Marvel Comics. It features Wolverine prominently, displaying his claws with a confident, menacing expression. The vibrant background highlights the character\'s iconic look, and the design includes typical elements of a comic cover, like the title and pricing details.',
  },
  {
    message:
      'see more of her mis-adventures here \nhttps://www.facebook.com/49667161749/photos/pb.100050684070486.-2207520000./10153400535071750?type=3',
    id: '54618571998_781326170663145',
    publishTime: '2023-08-10T18:05:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/363806099_780935950702167_4627907366469288254_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=L0t2ey3Lz2oQ7kNvgGHfXmy&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFmhw3kNsmh72LjrMEnX1-g&oh=00_AYBmXZs2erOjWz8GrdfdJMGkbMzm2H2ZyCVW9EAdnoLcUw&oe=679DF340',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'In the comic, a woman on an island writes "HELP" with rocks. After observing planes flying by without noticing, she changes the message to "I HAVE GRADED COMICS," prompting a flurry of parachuting individuals and aircraft to her location.',
  },
  {
    message:
      'Classic Comic - Fantastic Four #49 (1966) -  , 1st Cover with Silver Surfer & Galactus! 1st full Galactus appearance and 2nd appearance of Silver Surfer. Cover by Jack Kirby',
    id: '54618571998_884734580322303',
    publishTime: '2024-01-09T18:14:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/417200241_884411573687937_3854991904595357308_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BI4OrRb5OqQQ7kNvgGrPiAL&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Aq9BZLyejJs2C5ZtYhRhe9s&oh=00_AYAmmlLEgq82EsIkqlgah7Scq9_bTCyzMqhUjVzE0QaZEA&oe=679DEAAA',
    status: 'SCHEDULED',
    imageDescription:
      'This is a comic book cover for "Fantastic Four" issue #49 from April. It prominently features Galactus looming menacingly, with the Silver Surfer in front of him, all above the titular Fantastic Four characters running at the bottom. The text on the cover reads "If This Be Doomsday!"',
  },
  {
    message:
      'Spider-Man poster art by John Romita, 1970. Original Layout by Jack Kirby',
    id: '54618571998_702978615164568',
    publishTime: '2023-04-26T18:14:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/343219884_6082750411814290_127226467885934682_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GWRxb5smESEQ7kNvgGIdjHO&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A7jDnAwd5xQtUEgw6tdzuym&oh=00_AYCglVXOlDj0zGsgAz3gwGt_uMJJrXp3HmobtRog-kNTzQ&oe=679DD54D',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image is a vibrant comic-style illustration of Spider-Man swinging through a cityscape, with the Green Goblin and Doctor Octopus in pursuit. The title "The Amazing Spider-Man" is prominently displayed at the bottom.',
  },
  {
    message: 'Foom Poster by Jim Steranko (1973)',
    id: '54618571998_1132407395555019',
    publishTime: '2024-12-09T19:09:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/469583864_1131245102337915_2459539811015218450_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=00X_M327IvwQ7kNvgFkGIL0&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A3nqXxoEtaEELna7Wo7ba1V&oh=00_AYAyLAr3-9z0l-w_1NVAm0tIoQMxFxjNSrOHKgjkxjXYHg&oe=679DEB38',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image is a dynamic illustration of numerous superheroes in action poses, each with unique costumes and attributes. Below the characters is a text with a motivational and congratulatory message, as well as the FOOM logo, which stands for "Friends of Ol\' Marvel." The vibrant characters appear to be from a comic book universe.',
  },
  {
    message:
      'Classic Comic - Super Friends #7 (1977) - 1st Appearance of the Wonder Twins and Gleek. Cover and art by Ramona Fradon',
    id: '54618571998_594752172653880',
    publishTime: '2022-12-17T20:10:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/319547000_539073058102000_8357849069906571215_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=auvdk24xlrUQ7kNvgH4UVQn&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AuexS-KxJ4KGtQ3Cm4pz2Tg&oh=00_AYDxoj42ckqIMh8qrzj1ebHeh8bs5k836x1b8gJldSPVDQ&oe=679DE3BD',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic book cover titled "The Super Friends," marked as issue No. 7 from October. It features various superheroes, including iconic characters such as Batman and Superman, springing into action from a green backdrop. Two central figures are racing forward, while a villainous character in the foreground manipulates a control panel. The cover is vibrant and dynamic, emphasizing adventure and heroism.',
  },
  {
    message:
      'Classic Comic - Amazing Spider-Man #2 (1963) - 1st appearance of the Vulture and 1st Appearance of the Terrible Tinkerer. Cover and art by Steve Ditko',
    id: '54618571998_618652760263821',
    publishTime: '2023-01-14T18:17:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/325650598_3258414021135694_6835250713416154428_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fI-RQm2dXwgQ7kNvgFh7QFl&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AEj86Fc0xlMaisai1dICqfl&oh=00_AYBo_U0VRP8yX2Ye7jH-PKYmL4zXaBRQ-1trtNgSPSIBjw&oe=679DF279',
    status: 'SCHEDULED',
    imageDescription:
      'This is the cover of "The Amazing Spider-Man" comic book, issue #2 from May. It features Spider-Man battling the Vulture over a cityscape. The cover highlights two new super-villains and includes an inset showing Spider-Man trapped by the "Terrible Tinkerer." The Marvel logo and the 12-cent price are visible.',
  },
  {
    message: 'Batman and Robin by Sheldon Moldoff (1982)',
    id: '54618571998_894462266016201',
    publishTime: '2024-01-22T19:12:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/421238529_893950836067344_4066141740809079613_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NtWGYj9N7VUQ7kNvgFl4ytU&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8iaG7Ke0rbRc8cA6JwlJbb&oh=00_AYBF3qFiMbOSfjvbIqmzZF--eHdCsYi_E8TW5Ei3mDRkyA&oe=679DDED8',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage comic-style illustration of Batman and Robin. The title "BATMAN" in red with Batman\'s head in the letter "A" and the name "ROBIN" in yellow are displayed above them. Batman is depicted running in his classic gray and blue costume, while Robin is at his side in his traditional red, green, and yellow attire. The caption reads, "The Vintage Batman and Robin," and it\'s signed by Sheldon "Shelly" Moldoff.',
  },
  {
    message:
      'Classic Comic - Wolverine #8 (1989) - Hulk appears (Joe Fix It). Cover and art by John Buscema',
    id: '54618571998_661630445966052',
    publishTime: '2023-03-04T20:23:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/334293397_734995814961313_5085438845095529283_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Dv9aUU7X8C4Q7kNvgGOgHH7&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYDkDRvBbH10ZNYnE85ErOGXbS2vpbR9HrO18hzSgUeBKw&oe=679DDB73',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image is a comic book cover featuring Wolverine and a large green-skinned character standing together in white tuxedos against a blue background. The title "Wolverine" is prominently displayed at the top.',
  },
  {
    message: 'Crossover Classics tpb cover art, 1991 By George Perez',
    id: '54618571998_902995705162857',
    publishTime: '2024-02-03T17:04:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/425292904_902608381868256_8352048398545407403_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aL5O_5BL0VAQ7kNvgEvNgdx&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AiXWsGT1VmkIehz87A_CgAK&oh=00_AYCjtgNhlbATZa9cfz_3QLaWBSNLMkyKOxlYen5NwfNcNA&oe=679DCCE0',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic book cover titled "Crossover Classics: The Marvel/DC Collection." It features a dynamic clash of superheroes from Marvel and DC universes, including prominent characters like Superman, Spider-Man, Batman, and the Hulk, set against a vibrant cosmic background.',
  },
  {
    message:
      'Classic Comic - Detective #138 (1948) - Robotman Origin. Robotman begins. Joker appearance. Win Mortimer cover',
    id: '54618571998_770738811721881',
    publishTime: '2023-07-26T17:31:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/363363134_770474415081654_772145466904910056_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=b-UqlIQesroQ7kNvgEN03v3&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AxJt4ThoRXUxba1szmG7ZRv&oh=00_AYCTCNeJudzOsb5FLWWpQAGW17G5gfKxO83JuYFNXS-pMw&oe=679DF0A9',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is a vintage comic book cover from "Detective Comics" featuring Batman and Robin. They are confronting a shadowy figure holding a money bag in front of an open bank vault. The cover includes the title "The Invisible Crimes" and advertises a 52-page magazine, highlighting a story about a vanishing villain.',
  },
  {
    message:
      'Classic Comic - Batman #22 (1944) - Alfred solo stories begin. Catwoman and Cavalier appear. Kane, Robinson, Burnley and Paris art. Sprang cover',
    id: '54618571998_719488463513583',
    publishTime: '2023-05-18T15:09:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/346264460_627359586110475_3096472446749736019_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Fi7MqQFKRGEQ7kNvgEsr69p&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ArYh5GykvSY8MnqKvLRRkWA&oh=00_AYBoVDF4_6GNCn9nZBWJWSsXEQfTjw7oQPE0ef_uUOvk2g&oe=679DEADB',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage comic book cover of "Batman" issue No. 22. It features Batman and Robin on stage, holding a spotlight on a central character, likely Alfred, who is dressed in a suit and bowler hat. The title mentions "The Adventures of Alfred." The cover has a classic comic style with bold colors.',
  },
  {
    message: 'good grief',
    id: '54618571998_883332890462472',
    publishTime: '2024-01-07T18:12:05+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/417113912_882956447166783_4131561579545521675_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=P0UrHYh0klEQ7kNvgGS9NI_&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Aq9BZLyejJs2C5ZtYhRhe9s&oh=00_AYBwxqe6RnrF4ogekJJwXj6xe1l4eaIYoQr5Et2nS1DIFA&oe=679DE25D',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'A cartoon character dressed as a superhero stands next to a tree, looking at a shield stuck in the branches above.',
  },
  {
    message:
      'Classic Comic - Fantastic Four #13 (1963) - 1st Appearance of the Watcher and the Red Ghost. Full Page ad for Tales of Suspense #39 and Amazing Spider-Man #1',
    id: '54618571998_589418173187280',
    publishTime: '2022-12-12T16:19:39+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/319857501_589014549894309_1224708073308459149_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3sOO3VLQGf4Q7kNvgFrV1Yv&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AuexS-KxJ4KGtQ3Cm4pz2Tg&oh=00_AYDE4mr1HnjiqtQMVVdY6m2Y9Sr-POdBYseDF2GrPfvofg&oe=679DDE49',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is the cover of "The Fantastic Four" comic book issue #13, dated April. It features the team\u2014composed of Mr. Fantastic, the Invisible Woman, the Human Torch, and the Thing\u2014on the moon, facing the menace of "The Red Ghost." The cover also teases the appearance of a mysterious entity called the "Watcher." The storyline claims to contain enough fantasy and super-characters to fill three magazines.',
  },
  {
    message:
      "Classic Comic - Amazing Spider-Man Annual #5 (1968) - 1st appearance of Peter Parker's Parents. Red Skull and the Fantastic Four appear. John Romita cover. 1 of the best single stories in comics",
    id: '54618571998_750820027047093',
    publishTime: '2023-06-28T21:12:41+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/356704251_750819973713765_5257057815328519222_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=szHlZt5sMdkQ7kNvgGaB2wT&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AS1qGJsq0Z9ZgV8qfukSk_U&oh=00_AYBDoqrhFQ-cMzeBtswi18aybvtTkm0oMF6Sts8BqXR0tg&oe=679DE24E',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic book cover for "The Amazing Spider-Man" King-Size Special, issue number 5. It features Spider-Man standing against a swirling green vortex background with various floating heads of characters. The text at the bottom reads "At long last... the parents of Peter Parker!"',
  },
  {
    shares: 201,
    reactions: 2997,
    message: 'Jack Kirby autograph session',
    id: '54618571998_783882683740827',
    comments: 64,
    publishTime: '2023-08-14T13:47:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/367476650_783625357099893_1175159047993946781_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TvbzusIBtYUQ7kNvgHaf7hQ&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFmhw3kNsmh72LjrMEnX1-g&oh=00_AYC7e9GDjN_uYbb0pcL5XoukEtHNzcXMWwtDZ0M0tjGPFw&oe=679DD2A8',
    status: 'PUBLISHED',
    imageDescription:
      'A group of people is gathered around a table in a comic book store, examining various comic book pages and artworks. The shelves in the background are filled with colorful comic books. The atmosphere appears lively and engaged.',
    postUrl: 'https://www.facebook.com/54618571998_783882683740827',
    totalEngagement: 3262,
  },
  {
    shares: 465,
    reactions: 2727,
    message: '',
    id: '54618571998_890572223071872',
    comments: 69,
    publishTime: '2024-01-17T19:10:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/419899640_890116446450783_113039116701702810_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_bjKUXTfR7AQ7kNvgGGVYcQ&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AnI2vm1qwoJyPrblQR7BRtx&oh=00_AYBL6hybBYpGWbA53RbUPmOVLYbSalfX2LePSUimASplcA&oe=679DCBA8',
    status: 'PUBLISHED',
    imageDescription:
      'A boy expresses feeling discouraged and believes a comic magazine will cheer him up.',
    postUrl: 'https://www.facebook.com/54618571998_890572223071872',
    totalEngagement: 3261,
  },
  {
    message:
      'Classic Comic - Strange Tales #158 (1967) - 1st  Full appearance of the Living Tribunal. Marie Severin cover',
    id: '54618571998_791889332940162',
    publishTime: '2023-08-26T19:22:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/370001210_791524876309941_8554533082522806592_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OB_qEEMsxJMQ7kNvgEWFrAa&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFPZWKt5JZ1PFEs5yzutf_Z&oh=00_AYDFa_ZiMEIkhLzM8TR0oidl-pHAAE6--uOTWXQGqdy73g&oe=679DCE38',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image displays the cover of a "Strange Tales" comic book featuring Doctor Strange and Nick Fury, Agent of S.H.I.E.L.D. The issue number is 158, priced at 12 cents, published in July. The cover illustration is titled "The Sands of Death!" and depicts Doctor Strange in a confrontation with a dark, ominous figure who is wielding energy blasts. An hourglass is shown in the foreground.',
  },
  {
    message: 'By Brian Bolland',
    id: '54618571998_920695253392902',
    publishTime: '2024-02-28T22:22:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/428651838_917552310373863_4145230774869637577_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=a9er7jIeIToQ7kNvgFhbO32&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AMiFh2EetwMb3aS1X1CyXj0&oh=00_AYA8LQVsKRtF7mFSzcEPdeTXB5R4g-q-0kEuac9l5lYSrQ&oe=679DECC6',
    status: 'SCHEDULED',
    imageDescription:
      'The image features a group of DC Comics superheroes, led by a prominent figure in a red and blue costume flying above them. They stand in front of a large globe with the "DAILY PLANET" logo. The sky is cloudy in the background.',
  },
  {
    shares: 175,
    reactions: 3045,
    message: 'Frank Frazetta - Conan the Buccaneer (1971).',
    id: '54618571998_905240024938425',
    comments: 31,
    publishTime: '2024-02-06T19:10:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/426262938_904798161649278_4576669975219191516_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rd_8ZDh0P2YQ7kNvgHGOXU5&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AiXWsGT1VmkIehz87A_CgAK&oh=00_AYBoFSQiiZUmJEnGpQRQ8S9SWTxSYpBUgJV0ETY9LIqW9A&oe=679DE47F',
    status: 'PUBLISHED',
    imageDescription:
      'The image depicts a muscular barbarian warrior standing triumphantly atop a mound of defeated, armored figures. The setting is dark and stormy, with a dramatic, epic fantasy atmosphere. The warrior is prominently highlighted, exuding strength and dominance.',
    postUrl: 'https://www.facebook.com/54618571998_905240024938425',
    totalEngagement: 3251,
  },
  {
    message: 'Legion of Super Heroes by Curt Swan',
    id: '54618571998_947848424010918',
    publishTime: '2024-04-07T20:01:00+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/436787770_947429520719475_790573220003401460_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aBOnAvOV0-UQ7kNvgE6f-9L&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AgWySNYoCQdWM2hsmdj80hA&oh=00_AYA-K-owoNVHRx8RMi5H5y940C9luC30A1GEpkeqVMP2WA&oe=679DC2A8',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is a colorful comic illustration depicting a group of superheroes, each wearing distinct costumes. They are positioned in front of a large, smiling figure wearing a green and red outfit. One character appears to be in mid-air, while others stand or kneel. The scene is dynamic and lively, set against a cityscape background.',
  },
  {
    message: 'from SDCC 1975 by John Romita',
    id: '54618571998_795672072561888',
    publishTime: '2023-09-01T16:11:06+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/370245115_795372952591800_3307910212988487178_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eOajp9ZEVjYQ7kNvgEkblxe&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFPZWKt5JZ1PFEs5yzutf_Z&oh=00_AYC0lxoh2un4AjVtflHXOYEgSJLoV-q2R7cwy1JemrSEgg&oe=679DD9EC',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a black-and-white comic-style drawing featuring Spider-Man in a framed picture, along with two characters, a younger man and an older woman, posed together in front. A handwritten note reads: "Best of wishes to all at the San Diego Comic Con 1975! John Romita Sr." There is also a caption in Spanish mentioning the artist, J. Romita Sr., and the San Diego 1975 Convention.',
  },
  {
    shares: 2706,
    reactions: 510,
    message: '',
    id: '54618571998_10151266863826999',
    comments: 19,
    publishTime: '2012-11-02T20:12:52+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/468332740_10161798404686999_1084202507472304006_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=mXOJ5quyGg8Q7kNvgFENFbM&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AiVVX_I0jVpOznuutBI1TFS&oh=00_AYB2vnafyCy9lPo6wkNE3qA_mQ33MrKk1Vgf6TFbXQzbxg&oe=679DEBE8',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a meme featuring Darth Vader with the text "Welcome To The Dark Side We Have Disneyland."',
    postUrl: 'https://www.facebook.com/54618571998_10151266863826999',
    totalEngagement: 3235,
  },
  {
    message:
      'Classic Comic - Avengers #9 (1964) - 1st Wonder Man appearance. Baron Zemo, Enchantress and Executioner appear. Cover by Jack Kirby',
    id: '54618571998_658445929617837',
    publishTime: '2023-02-28T20:27:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/333096454_928496928497512_4981756586041412125_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=t1BJurpgqFcQ7kNvgHlhff9&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYB1PDT8eVksm0VcMIpDvJlE0Ex45S-2mSr9vqzwPhlN-w&oe=679DCD25',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is the cover of "The Avengers" comic book, issue #9, published by Marvel Comics. It prominently introduces a character named Wonder Man. The cover includes the words "Marvel proudly introduces... Wonder Man" and features various superhero heads such as Thor, Captain America, Iron Man, and Giant-Man. Wonder Man is depicted in a dynamic pose in the foreground, with other figures in the background amidst technical equipment.',
  },
  {
    message: 'art by Frank Frazetta',
    id: '54618571998_1068704171925342',
    publishTime: '2024-09-21T20:31:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/460736458_1068165868645839_2598460009889573246_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9Mym_yIP_14Q7kNvgE1b3YA&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AZX2JdnMcdzBEQiyXE9D9E5&oh=00_AYBaZL1t5FYS4Z0qxUm39k8p_pWrWTk9D3qqJeo7Fom7cA&oe=679DF2D6',
    status: 'SCHEDULED',
    imageDescription:
      'A stylized sketch of a woman reclining with curly hair and an off-shoulder top. She is depicted in a confident pose, with a subtle smile, and the drawing emphasizes flowing lines and shading.',
  },
  {
    message: 'Avengers in the Land of Doom by John Byrne',
    id: '54618571998_798249982304097',
    publishTime: '2023-09-05T16:11:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/374690774_797947925667636_6922171180379725552_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UDWvb7ta38UQ7kNvgE9P6pH&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYCt9Q_943wd8xqz4Y9G2kPsp-CxgMycJnhIGEOVvVCxZQ&oe=679DE948',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image depicts a dynamic Marvel comics scene with superheroes including Thor, Captain America, Iron Man, Vision, and others engaging in a battle against a large stone-like creature in a city setting. The composition is action-packed and features vivid colors and detailed character designs.',
  },
  {
    message:
      'Classic Comic - Detective #267 (1959) - 1st appearance and Origin of Bat-Mite.',
    id: '54618571998_672606881535075',
    publishTime: '2023-03-18T15:11:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/336395590_3507842516209662_5808199744044784717_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=w8hw5fq8z70Q7kNvgExk_Kl&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYCJlB5Feu6AORRsvgU4qW0mAgsW0TZC4sFr_XCks_5F6Q&oe=679DE66B',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A comic book cover of "Detective Comics" featuring Batman, Robin, and Bat-Mite. The scene shows Batman and Robin surprised by Bat-Mite, who declares his intention to join them. The illustration includes dialogue bubbles and a scattered scene of papers and a microscope. The cover is marked with a "10\u00a2" price and the "Comics Code Authority" seal.',
  },
  {
    message:
      'Classic Comic - Marvel Team Up #53 (1977) - 1st John Byrne art on X-men. Spidey and Banshee find the Hulk in New  Mexico',
    id: '54618571998_636570535138710',
    publishTime: '2023-02-03T21:21:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/327060435_3306136966306771_8216030404450899518_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=s95ZbV5KODcQ7kNvgHvoUHk&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AOWK0IeDNMQbdSLHTr-neG3&oh=00_AYDUD2P6QI8KGbSW4EUR9wcc-qqnA7BfMOcqnNMt5tcSkg&oe=679DF4F9',
    status: 'SCHEDULED',
    imageDescription:
      'This is a comic book cover titled "Marvel Team-Up" featuring Spider-Man and the Incredible Hulk. The Hulk is prominently displayed, looking powerful and angry, while Spider-Man is in a dynamic action pose. The cover also mentions a character named "Woodgod" and teases "Nightmare in New Mexico!"',
  },
  {
    message: 'love the Jetsons',
    id: '54618571998_811553224307106',
    publishTime: '2023-09-24T21:24:37+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/382218794_811523434310085_6430126473911187643_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0o_q2IjSLUkQ7kNvgE9bFpv&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AQ6uIXz3wArX-td61b3bq_j&oh=00_AYBmE-ka0MqUQ_SROlyZlsRVGrXNm7YH6VAghgcIXYYFUQ&oe=679DC1CF',
    status: 'SCHEDULED',
    imageDescription:
      'The image shows an animated futuristic family with a father, mother, two children, a dog, and a robot maid in a brightly colored, space-age home setting.',
  },
  {
    message:
      'Classic Comic - Avengers #60 (1968) - Wasp and Yellowjacket get married. Wedding Guests include Spider-Man, X-men, Fantastic Four, Daredevil, Doctor Strange and Iron Man',
    id: '54618571998_1105680388227720',
    publishTime: '2024-11-05T20:21:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/464808219_1100502915412134_3053696087516555898_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HjwGj4GW2l0Q7kNvgFi0UPX&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AWiLMMO5XVPgpTX6RC14Hak&oh=00_AYC90YRdw1wSGQa_yti1pREY_GWdf9009mDNut0tnQR7gQ&oe=679DC70D',
    status: 'SCHEDULED',
    imageDescription:
      'This is the cover of "The Avengers" comic issue #60, featuring various Avengers characters. A dramatic scene shows a bride and groom being attacked by a giant snake. The title at the bottom reads "\'Til Death Do Us Part!"',
  },
  {
    message:
      'Classic Comic - Action #225 (1957) -  Superman Robot cover. Art by Wayne Boring, Sherman , Jim Mooney and Stan Kaye. Cover by Al Plastino',
    id: '54618571998_887654336696994',
    publishTime: '2024-01-13T18:15:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/419089930_887266466735781_1934172321540699425_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cAARNwURZgEQ7kNvgEuQIVQ&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AnI2vm1qwoJyPrblQR7BRtx&oh=00_AYBkWqR5WZjPzKRqau4TUyafcWIdt_wFHq6K0QZjOIit_Q&oe=679DED6E',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'This image is a vintage comic book cover from "Action Comics" featuring Superman. The scene depicts Superman opening his chest to reveal mechanical components, indicating he\'s a robot. The headline reads "The Death of Superman!" with characters reacting in shock. The cover includes classic comic elements like speech bubbles and vivid colors.',
  },
  {
    shares: 333,
    reactions: 2768,
    message: 'lol',
    id: '54618571998_1088657466596679',
    comments: 74,
    publishTime: '2024-10-15T18:17:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/462961263_1086667290129030_9014562643687487075_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=h9tOHzYEzzEQ7kNvgFUIgMY&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AKYaoeCGwU8pX7Z0Cnvfmza&oh=00_AYA0tSwlY2ESPQrgNbBG_QA6SNbOO8Dqw8P3AK3TjXey2w&oe=679DDB14',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book cover titled "Action Comics," issue No. 1 from June 1938. It features a superhero in a blue suit and red cape lifting a car overhead. Several surprised individuals are depicted in the foreground and background, reacting to the scene with shock and awe.',
    postUrl: 'https://www.facebook.com/54618571998_1088657466596679',
    totalEngagement: 3175,
  },
  {
    message: 'By John Byrne and Terry Austin',
    id: '54618571998_898062622322832',
    publishTime: '2024-01-27T19:08:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/421701374_897369915725436_7452544396415901010_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=A9hWyM40NY0Q7kNvgGqys5h&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8iaG7Ke0rbRc8cA6JwlJbb&oh=00_AYDRMX39A6jeJFtDhBII9-d96Jy5dzx5qub1xBXzxFszfw&oe=679DE7FA',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      "A comic-style illustration featuring six superhero characters' faces, including ones with distinctive features such as a helmet with wings, metallic skin, glowing eyes, and a visor.",
  },
  {
    message: 'I love this ...art by Brian Bolland',
    id: '54618571998_941549217974172',
    publishTime: '2024-03-29T21:28:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/434293779_941107501351677_3439836828115963078_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=r_EszV3Q6qQQ7kNvgFUlLyJ&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A9vJEf3b3CAjZOCTfsxGoH2&oh=00_AYDCtq4PRrnRpSAffjaUrd7KgRnye6VJGtE7C8KX2wMtGQ&oe=679DC2EF',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A cartoonish scene where a flexible superhero, wearing a red and yellow costume, stretches his arms around a large green swamp creature. The creature appears agitated, standing waist-deep in water. A nearby sign warns "Danger, Swamp."',
  },
  {
    shares: 310,
    reactions: 2807,
    message:
      'Classic Comic - Detective #225 (1955) - 1st appearance and Origin of Martian Manhunter. Cover by Win Mortimer',
    id: '54618571998_696120359183727',
    comments: 42,
    publishTime: '2023-04-17T17:12:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/342170988_1010631596566537_2402184199354502500_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=W-ZcF_zXMTUQ7kNvgH66HKq&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AlpbJrh9swE9shsKu1FU20_&oh=00_AYCbE1DsxQVv28CRoeuTnEMbKWRpiApFFfmhWmr6DLKOTQ&oe=679DF3BA',
    status: 'PUBLISHED',
    imageDescription:
      'This is a vintage comic book cover from "Detective Comics" No. 225, featuring multiple characters dressed as Batman and Robin. A man in the foreground holds a camera, capturing the scene. The main headline of the issue is \u201cIf I Were Batman!\u201d and it includes a Manhunter from Mars feature. The style is classic, with bold colors and a yellow background.',
    postUrl: 'https://www.facebook.com/54618571998_696120359183727',
    totalEngagement: 3159,
  },
  {
    message:
      'Classic Comic - Action # 152 (1951) - great sci-fi cover by Wayne Boring',
    id: '54618571998_662360152559748',
    publishTime: '2023-03-05T19:19:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/333935954_5917683898345413_5315466190476916723_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tUMIOHHtvNQQ7kNvgHSw54v&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYA4UiXyGVhWos572icki-8BxBCnzVnydzL3aA-Yos5ptg&oe=679DCFD6',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'This is the cover of an Action Comics issue, featuring Superman and Lois Lane in suspended animation within glass tubes. The comic highlights the story "The Sleep That Lasted 1,000 Years!" A group of people observe them, indicating a futuristic or scientific theme. The cover also advertises other stories and features the Vigilante.',
  },
  {
    message: 'By Brian Bolland',
    id: '54618571998_1113591990769893',
    publishTime: '2024-11-15T22:24:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/467277080_1113548400774252_8733894116378487004_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cqa_cjcYIm8Q7kNvgEWtWtt&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFT13vH4zv0T-yKWrS8kNws&oh=00_AYDinqSLQwWvv3Gpa7dkmqB8iBERYNwyeknVENlkwYkZnQ&oe=679DD5D3',
    status: 'SCHEDULED',
    imageDescription:
      'A female superhero in a purple and magenta costume with a mask and cape holds a crossbow, smiling confidently. Behind her, a man in a gray and blue costume with a bat emblem, along with another masked figure in purple, appear in the doorway.',
  },
  {
    message:
      'Classic Comic - Spider-Man vs Wolverine #1 (1987) - "Death" of Ned Leeds (Original Hobgoblin)',
    id: '54618571998_615222320606865',
    publishTime: '2023-01-10T20:21:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/324905098_1820801108294019_1053115044266753942_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1unfMGXscNIQ7kNvgF_wFaY&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ANEcB3dbg9ERQ64wxt3zug_&oh=00_AYD0Iaink3URhC7McwGzc5M4Zo0UG8cWK1GdaXcPgBynCA&oe=679DE549',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'This is a comic book cover titled "Spider-Man versus Wolverine," featuring Spider-Man and Wolverine in action poses. The background includes a broken gravestone, and the cover indicates it\'s the first issue from Marvel.',
  },
  {
    message:
      'Classic Comic - Punisher #1 (1986) - Punisher mini series begins. Jigsaw appears. Mike Zeck cover',
    id: '54618571998_779847004144395',
    publishTime: '2023-08-08T20:38:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/365249172_779773054151790_33767965325797967_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lBPbrw8UwbIQ7kNvgESltbV&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ap-gkw9jU2HMot4HcT8m766&oh=00_AYC7InNSlVFL2h-CQVmmb5EUWuLmS-yTq4P_-aKMTBVRIQ&oe=679DD569',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is the cover of "The Punisher" #1 from Marvel Comics, part of a four-issue limited series. It features the character wielding firearms in action, with bullets flying. Prominent text indicates it\'s a "double-size first issue," priced at $1.25, and includes the Marvel logo with a small Punisher illustration in the corner.',
  },
  {
    message: 'Lee Merriweather and Caesar Romero from the Batman Movie (1966)',
    id: '54618571998_786065006855928',
    publishTime: '2023-08-17T16:11:06+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/368210231_785768473552248_6369329958498920766_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4L9Q_a22fkoQ7kNvgGE1CMo&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYCLf4O9Gj12_q0A_oBN05CsMCq8qWyntKZ-ZKktAahD1g&oe=679DC8CF',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image shows two people in costume: one dressed as the Joker with green hair, white face paint, and a purple suit; the other dressed as Catwoman, wearing cat ears and a dark, shiny outfit. They are both smiling and posing closely together against a red background.',
  },
  {
    message: 'by Sheldon Moldoff (1982)',
    id: '54618571998_804632971665798',
    publishTime: '2023-09-14T21:33:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/378280799_804501715012257_3193360180104534605_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JUg6JLcBglIQ7kNvgH1jVJ7&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AeuYoz_Z6s18yKB-UbYSALw&oh=00_AYBkZWn5cdb89MGBJOD0jDXJZfs6g0Pns8CHhHV06pzgFQ&oe=679DC3E7',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage comic-style illustration of Batman and Robin in action poses. Batman is in a gray and blue suit, and Robin is in a red and green outfit with a yellow cape. The title "Batman and Robin" is at the top, featuring Batman\'s face in the logo. The illustration is signed by Sheldon "Shelly" Moldoff.',
  },
  {
    message: 'the best of times',
    id: '54618571998_678372497625180',
    publishTime: '2023-03-25T13:45:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/337260605_226104846570724_887425933721951046_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IChnjeP7zfUQ7kNvgGioVfi&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYDqg6l1d2ItjDDhDocB1JaWOoKY3eidrOWbd2jPBd444g&oe=679DF4BA',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'This is an old advertisement for a TV show featuring Marvel superheroes. It highlights characters like Captain America, Sub-Mariner, Iron Man, Thor, and the Incredible Hulk. The text encourages viewers to check their local TV listings for channel information. The style is vintage, characteristic of early comic book promotions.',
  },
  {
    message: 'Jack The King Kirby by Alex Ross',
    id: '54618571998_772015198260909',
    publishTime: '2023-07-28T16:07:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/363838508_771693631626399_6096167071406936241_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vmj0GS3uHacQ7kNvgG2uSJY&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AxJt4ThoRXUxba1szmG7ZRv&oh=00_AYCv_M8RLXMICslRYq6FLBLbqaieCdE5lbyg0YjZCaJwgg&oe=679DD71E',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a painting by Alex Ross depicting a man in the foreground with arms crossed, surrounded by various shadowed superhero figures in the background. The scene has a mystical, dramatic atmosphere with strong lighting contrasts.',
  },
  {
    message:
      'Tom Tyler as the Phantom, Jeanne Bates as Diana Palmer, and Ace the Wonder Dog as Devil in the 1943 movie serial',
    id: '54618571998_977232871072473',
    publishTime: '2024-05-18T13:05:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/443711600_976992927763134_4403643518430747328_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=udR21WioFrsQ7kNvgEHSl-I&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AM7rvDZZyH8PLOHuLO-yzzj&oh=00_AYDGvnOrst_7lN7lIU6MgoTz3cec6HQ4-mEsCHPLFEI_kQ&oe=679DD8B2',
    status: 'SCHEDULED',
    imageDescription:
      'The image features a woman in vintage attire standing next to a man dressed in a superhero costume with a mask. A large dog sits beside them on a fur rug. The setting appears to be a studio with dramatic lighting.',
  },
  {
    message:
      'Classic Comic - Tales of Suspense #79 (1966) - 1st appearance of the Cosmic Cube. 1st Modern Red Skull . Iconic cover by Gene Colan',
    id: '54618571998_606590321470065',
    publishTime: '2022-12-30T20:22:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/323000001_3408797899396991_4383547036937128156_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DajurDjFJEkQ7kNvgH0Sfah&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDxNigojbm3udtT9aeWKst&oh=00_AYB69fBG_pbyv_L1GpYngd-l3kaJjmae_-qKMqaSgMA8lw&oe=679DD57E',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'This is a vintage comic book cover from "Tales of Suspense" featuring Iron Man and Captain America, issue #79. The cover shows Iron Man holding his chest in distress with another character standing in the background. The word "DISASTER!" is prominently displayed, and it is published by Marvel Comics.',
  },
  {
    message: 'Marvelmania Poster (1969). by Jack Kirby',
    id: '54618571998_768132428649186',
    publishTime: '2023-07-22T18:11:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/362628958_767856445343451_1113904086269430475_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-Q1Fb7sNSLcQ7kNvgGcNcvI&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ATc73HRWyp02Z-tyObKGEZm&oh=00_AYA_IiLZsWuZH4_8g2VSijXd31TdCvcP6vprBiBZI_zUAA&oe=679DF24D',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image is a comic book cover featuring the Silver Surfer in the foreground, riding his surfboard. Behind him is Galactus, depicted as a large, menacing figure. The vibrant illustration includes bold colors, with flames and cosmic elements in the background. The title reads "Galactus and the Silver Surfer" with the artist Jack Kirby\'s name noted.',
  },
  {
    message: 'By Brian Bolland',
    id: '54618571998_815005837295178',
    publishTime: '2023-09-29T18:07:00+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/383428715_813993650729730_309143510540468950_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9nV5DNga07EQ7kNvgHg4vk9&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A_vnmMIHG0AfcC5NFksZQ5j&oh=00_AYD0DKm-RQ01FYTIK9ltVvuBcHpPB4aC00T17jd6wwf6Dg&oe=679DD89E',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image features the Joker holding a copy of the comic "Batman: The Killing Joke" while grinning mischievously. In the background, Batman is perched on a rooftop with the Bat-Signal visible in the sky.',
  },
  {
    message: 'by Alex Ross',
    id: '54618571998_962068582588902',
    publishTime: '2024-04-27T18:12:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/439315397_960978692697891_8109418714943251902_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7IACvIITfdkQ7kNvgEpMGuH&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A85M5KuolsBPj4E-57EiotJ&oh=00_AYC0goz1D9h_5dF_9yCAaYNaKtP9QV03pq077VtSw_NLjA&oe=679DEAC2',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image features Spider-Man and Superman standing back-to-back with arms crossed, set against a bright yellow background.',
  },
  {
    shares: 198,
    reactions: 2892,
    message:
      'Classic Comic - Daredevil #77 (1971) - Spider-man and Sub-Mariner appear. Sal Buscema Cover',
    id: '54618571998_691339976328432',
    comments: 28,
    publishTime: '2023-04-11T19:22:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/340822069_6468474453188791_6981477808462748637_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cqi5awczgDMQ7kNvgGMmysi&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AlpbJrh9swE9shsKu1FU20_&oh=00_AYCNAmp-LIQiXojGm5NQ5VePs3FARidLiNHuY8QX9gUrtQ&oe=679DEABD',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book cover for "Daredevil #77" titled "The Man Without Fear!" It features Spider-Man swinging above as Namor fights another character. The cover announces a "Three-in-one triumph for magnificent Marvel" and guest stars the Sub-Mariner and Spider-Man. There\'s dynamic action and vibrant colors typical of classic comic book art.',
    postUrl: 'https://www.facebook.com/54618571998_691339976328432',
    totalEngagement: 3118,
  },
  {
    message:
      "Classic Comic - Amazing Spider-Man #122 (1973). Death of the Green Goblin . Story continued from #121. Dramatic change in Peter's life.. Cover by John Romita. Art by Gil Kane and John Romita",
    id: '54618571998_678591447603285',
    publishTime: '2023-03-25T19:29:42+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/337129997_1367608120739791_339013873094579632_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xJXkV9jW3lIQ7kNvgE-G5LW&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYBMVp3tXV9E4ImzFnwM-RMT8-iMLFIkn2bAcU_YbJ4c3w&oe=679DD842',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image is the cover of "The Amazing Spider-Man" comic, issue #122, released in July. It features Spider-Man confronting the Green Goblin, who is flying on his glider. The Green Goblin taunts Spider-Man about the death of Gwen Stacy, who is depicted in Spider-Man\'s arms. The cover text reads, "The Green Goblin\'s Last Stand!" with dramatic action and explosions in the background.',
  },
  {
    message: 'Merry Christmas Everybody',
    id: '54618571998_1143154774480281',
    publishTime: '2024-12-23T17:15:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/470874776_1142820651180360_2823307862438376775_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1a58JVw2ffgQ7kNvgG8cGFi&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AMt5zrzWPVaUs38QfKz3F1R&oh=00_AYAs8gxdTfQa75RnKLS6m7FdF_dqILnG00bLCh3FH2dvug&oe=679DD5B7',
    status: 'SCHEDULED',
    imageDescription:
      'The image features Batman and Robin standing together, with a red bat emblem filled with snowflakes in the background. They are smiling, and beneath them is a banner that reads "Happy Holidays."',
  },
  {
    message:
      'Classic Comic - Avengers #117 (1973) - Captain America vs Sub-Mariner cover. Silver Surfer & Defenders crossover..Cover by John Romita and Mike Esposito',
    id: '54618571998_891468032982291',
    publishTime: '2024-01-18T21:24:06+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/420538465_890895373039557_3615445960294217321_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dE70_IS87MYQ7kNvgFmhPFY&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AnI2vm1qwoJyPrblQR7BRtx&oh=00_AYBo4xCKa-yNcTzmeOojsgSVO0XNZ4FW1Uj2h4F63_kGxQ&oe=679DE87E',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'This image is the cover of "The Avengers" comic issue #117 from Marvel Comics Group, released in November. It features Namor fighting Captain America. Several Avengers are depicted at the top, including Thor, Iron Man, and Scarlet Witch. The text mentions the theft of the "Evil Eye" and teases a mystery super-villain.',
  },
  {
    message:
      'Classic Comic - Amazing Spider-Man #25 (195) -  1st cameo appearance of MJ (Mary Jane Watson) - Face not shown. 1st apperance of Professor Smythe and the Spider Slayer. Cover and art by Steve Ditko',
    id: '54618571998_818404730288622',
    publishTime: '2023-10-04T16:54:20+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/370046590_818396526956109_6904183358372374118_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=CcJ5QTmHTDAQ7kNvgFxI6e0&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AT-0UBkoD-77dQORts4-Ugl&oh=00_AYDWlRapUBFpVsyXiUaHOUxWkZOOj2IPKODHVLrigNznUA&oe=679DC064',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is the cover of "The Amazing Spider-Man" comic, issue #25. Spider-Man is depicted ensnared in metallic tentacles, while a man observes with a satisfied expression. Text on the cover reads, "Captured by J. Jonah Jameson!" The background is bright yellow with the logo prominently displayed.',
  },
  {
    message: 'by Alex Ross',
    id: '54618571998_788711939924568',
    publishTime: '2023-08-21T18:41:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/368748123_788689306593498_4912008700710752411_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NeTbbM1mAVgQ7kNvgFA3O4_&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYA7CSWPS1TP9pFQMpK4waiI8dYS9KSj_IA5X9dMQqdyWw&oe=679DD773',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image features a retro-style illustration where Superman is flying above the Batmobile, which is being driven by Batman. Robin is in the passenger seat, waving excitedly. The artwork has a classic comic book style, showcasing these iconic superheroes in a dynamic scene.',
  },
  {
    message:
      "Classic Comic - World's Finest #16 (1944) - Jack Burnley cover. Jerry Robinson art (Batman story)",
    id: '54618571998_722251206570642',
    publishTime: '2023-05-21T21:41:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/348291985_781646240138326_8797351914017290153_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0gJUuCcVghoQ7kNvgFhMpKT&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ArYh5GykvSY8MnqKvLRRkWA&oh=00_AYDT8GcwAhU_p1NDMsW2Quw-6ox2XCKeCzhtCUSCho0WfA&oe=679DCDE4',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic book cover titled "World\'s Finest Comics No. 16." It features two superheroes, one in a bat-inspired costume and the other with a red cape, scaling a rocky cliff. A third character in a red, yellow, and green costume is rappelling down. The background is bright yellow, and the issue is labeled as a "Winter Issue" with a price of 15 cents.',
  },
  {
    shares: 409,
    reactions: 2627,
    message: '',
    id: '54618571998_840091218119973',
    comments: 60,
    publishTime: '2023-11-04T21:31:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/398978795_839653198163775_101811964541464323_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9QfRFn92OXIQ7kNvgFAtFMJ&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AR-VLF_t3tmBjH-A-DjzpPc&oh=00_AYCddhgpeaFrEirC_roKObhaRZ1IvJeM1TRYoMXOHoxJwA&oe=679DCE71',
    status: 'PUBLISHED',
    imageDescription:
      'This is a comic-style illustration featuring Batman and Robin in action. The panels depict them fighting a villain with sound effects like "ZOK!" and "KRACK!" emphasized. In the last panel, the title "Batman Meets The Dark Knight Returns" is shown, with Batman and Robin shaking hands.',
    postUrl: 'https://www.facebook.com/54618571998_840091218119973',
    totalEngagement: 3096,
  },
  {
    message:
      'Classic Comic - Amazing Spider-Man #20  (1965) - Origin and 1st appearance of the Scorpion. Issue includes Spider-Man / Peter Parker pin-up. Cover  and art by Steve Ditko',
    id: '54618571998_814904537305308',
    publishTime: '2023-09-29T15:12:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/383840427_814609754001453_2327398891705276317_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cryGqexLWx8Q7kNvgE7ULI3&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A_vnmMIHG0AfcC5NFksZQ5j&oh=00_AYA9uAz6SSiqfr5dDn5It9TD59mdMO5eZfIa3zI7IriwHA&oe=679DC99E',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is the cover of "The Amazing Spider-Man" issue #20. It features Spider-Man being held above the city by a villain called "The Scorpion." The text asks, "How can Spidey battle a foe who is stronger than he is?" It\'s a Marvel comic priced at 12 cents.',
  },
  {
    message: 'Spidey Sketch by John Romita (SDCC 1975)',
    id: '54618571998_1156794956449596',
    publishTime: '2025-01-10T19:12:06+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/473010113_1155966979865727_3262004106921524360_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hLBBddBFfhwQ7kNvgE4L-8o&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AuRRKEzoP2P4qCBWI7mg21G&oh=00_AYBQ6Vvt9iAk8_uHzS2M2_jiDlR4E_NsNfd7Q-7UkGtxtw&oe=679DEC59',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      "The image is a black and white drawing by J. Romita Sr., featuring a man standing beside an elderly woman seated in a chair. Behind them is a framed picture of Spider-Man. There's a handwritten note addressing San Diego Comic-Con 1975 signed by John Romita.",
  },
  {
    shares: 282,
    reactions: 2651,
    message: 'we need this again',
    id: '54618571998_652798430182587',
    comments: 138,
    publishTime: '2023-02-21T23:28:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/332135311_718571896720281_6970440689582320934_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NSwvs2oFKuYQ7kNvgGcJ4-w&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYBwCXPWhYPfLFVEUv9aFL6ZK3sQtuTdomUVsoP64Dn7wQ&oe=679DDE08',
    status: 'PUBLISHED',
    imageDescription:
      'The image shows the title "Spider-Man and His Amazing Friends" above three characters: a woman in a yellow and red costume with flames, an ice-covered figure, and Spider-Man in his classic red and blue suit.',
    postUrl: 'https://www.facebook.com/54618571998_652798430182587',
    totalEngagement: 3071,
  },
  {
    message:
      'Classic Comic - Flash #11 (1940) - Last Rod Rian. Sheldon Moldoff cover',
    id: '54618571998_793652536097175',
    publishTime: '2023-08-29T15:11:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/370347785_793422072786888_1428702577014517963_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=L3eAd_La2WoQ7kNvgEwww5d&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFPZWKt5JZ1PFEs5yzutf_Z&oh=00_AYBEJQxzSd5U2aObGWgXgbKyt5gRvoanj7wWxGCHwbt_Fw&oe=679DD3B1',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a cover of "Flash Comics" No. 11 from November. It features a dynamic scene with a winged hero and a large gorilla. The hero is soaring in front of a large yellow sun or moon in the background. Below them, a woman in a yellow dress is reclining on the ground, appearing distressed. The price is listed as 10 cents.',
  },
  {
    message: 'the best of times',
    id: '54618571998_979635774165516',
    publishTime: '2024-05-21T16:19:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/441389964_979256394203454_2785990497542553053_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xjeJ0IzxarEQ7kNvgHRazXE&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AM7rvDZZyH8PLOHuLO-yzzj&oh=00_AYABA3rbE9sRa7T5IowNNB-mcQeQqp6Iu8dR69k2rggu9g&oe=679DD4B2',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'Three children excitedly look at a rack of comic books, with one exclaiming, "Ah! Comic books!!" The comics have titles like "SLAM," "BANG," and "YIPE."',
  },
  {
    message: 'By Curt Swan',
    id: '54618571998_787477053381390',
    publishTime: '2023-08-19T20:54:00+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/368626327_787087676753661_2516373977289820361_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XLX_jItg8IEQ7kNvgGrxjEC&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYBsnAvuBFFfGcdmNv9I0nZ2wA17lca18vTds6xn3e5UzQ&oe=679DF7E5',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image depicts "The Superman Family," featuring a group of characters related to or associated with Superman. They are dressed in a mix of superhero costumes and civilian clothes. The family includes a variety of figures such as Supergirl, Krypto the Superdog, and others, against a colorful, comic-style background.',
  },
  {
    shares: 161,
    reactions: 2765,
    message:
      'Classic Comic - Punisher #1 (1987) - Regular series begins. Story by Mike Baron. Cover and art by Klaus Janson',
    id: '54618571998_964256552370105',
    comments: 107,
    publishTime: '2024-04-30T19:19:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/438254797_963583522437408_5511926231456106796_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BwpKHr4UDHMQ7kNvgHM6Ykz&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A85M5KuolsBPj4E-57EiotJ&oh=00_AYCn4DERwJmYAaVLdQqm4KteG2lP3GijwLB9wJaFTnGkEg&oe=679DE7D5',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book cover for "The Punisher," marked as the first issue of an unlimited series. The art shows The Punisher in a dynamic pose, climbing a fire escape with a weapon. The background includes a cityscape and people in a room looking out the window, adding to the action-packed scene.',
    postUrl: 'https://www.facebook.com/54618571998_964256552370105',
    totalEngagement: 3033,
  },
  {
    message:
      'Classic Comic - Avengers #2 (1963) - 1st appearance of the Space Phantom. Hulk leaves the Avengers. Cover and art by Jack Kirby. Always 1 of my favorite covers',
    id: '54618571998_622135109915586',
    publishTime: '2023-01-18T20:22:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/326040931_619829986814532_4693644704668593371_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TYJP79D6-VgQ7kNvgHzdkc6&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AEj86Fc0xlMaisai1dICqfl&oh=00_AYCLk2PzWAYumM7jS1LFYNqvNoEbLdEp1HsxSRZ9hnYHTw&oe=679DE7D6',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This image is a vintage comic book cover from "The Avengers" issue #2, published by Marvel Comics. It features Giant-Man, Thor, Iron Man, and the Wasp confronting the antagonist, the Space Phantom. The text highlights the appearance of Giant-Man and the Space Phantom\'s plan to destroy the Avengers. The comic is priced at 12 cents and approved by the Comics Code Authority.',
  },
  {
    message:
      'Classic Comic - Turok, son of Stone (Four Color #596) - 1st appearance of Turok (Also considered Turok #1) . Robert Susor cover.',
    id: '54618571998_752935406835555',
    publishTime: '2023-07-01T21:19:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/356899311_752902446838851_3242312136479111527_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=N4akmVHij3sQ7kNvgGnWW0j&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AS1qGJsq0Z9ZgV8qfukSk_U&oh=00_AYBPO4eirf395LERPYSeMVEFHnX2TehmPGdd_28Y77iACg&oe=679DC9B9',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image is a cover of a Dell comic titled "Turok, Son of Stone." It features a man dressed in Native American attire, holding a spear and sitting at the entrance of a cave. In the background, there are two dinosaurs in a prehistoric landscape.',
  },
  {
    message: 'DC ad art by Neal Adams, 1978',
    id: '54618571998_720399166755846',
    publishTime: '2023-05-19T18:17:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/346841307_758304459092920_8150237711985599257_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Roh5qlhDeC0Q7kNvgF7EyxI&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ArYh5GykvSY8MnqKvLRRkWA&oh=00_AYA-ijfBjuy5Kf3SyIt1g64Rh6-MFUmOocIun9lkr3VJ6A&oe=679DCAB2',
    status: 'SCHEDULED',
    imageDescription:
      'A black-and-white illustration featuring five superheroes, including Batman, Robin, Aquaman, Wonder Woman, and Superman, standing together in a powerful, confident pose with smiles.',
  },
  {
    shares: 429,
    reactions: 2530,
    message: '',
    id: '54618571998_726538309475265',
    comments: 59,
    publishTime: '2023-05-27T14:11:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/349127136_263104243047889_3130452385088280979_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=T8Aa2dPo1JEQ7kNvgEAaoW9&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDWRC2mfkXFbh8H3P2JVBd&oh=00_AYCma4GOG33nmt-VV5OJQ6GkNHCkKrhDNKE3XGh62KqgTw&oe=679DEE34',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a collage showcasing scenes from a classic TV series featuring characters dressed as superheroes, engaged in action poses or confrontations in a stylized, vibrant setting.',
    postUrl: 'https://www.facebook.com/54618571998_726538309475265',
    totalEngagement: 3018,
  },
  {
    message: '',
    id: '54618571998_755234556605640',
    publishTime: '2023-07-04T20:11:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/357381422_754766609985768_9142168029943534980_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NnChDJvTrLsQ7kNvgEpZHb4&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AS1qGJsq0Z9ZgV8qfukSk_U&oh=00_AYC9IgsmSnRKLHqovAKRAhMRcCBWP8qnSFgLDZCAk8A8oA&oe=679DC900',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a comic book cover featuring Wonder Woman standing heroically with an eagle perched on her arm. The background includes an American flag and the U.S. Capitol building. The comic is titled "Wonder Woman" and is issue number 272, priced at 50 cents. There\'s a blurb that mentions The Huntress and an additional feature involving a battle against Solomon Grundy.',
  },
  {
    message:
      'Classic Comic - Amazing Spider-Man #4 (1963) - 1st appearance and origin of Sandman. Cover and art by Steve Ditko',
    id: '54618571998_640730578056039',
    publishTime: '2023-02-08T16:10:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/329246221_727313595606412_530427924853712539_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ApjKZSCWcl0Q7kNvgEXXbEG&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AOWK0IeDNMQbdSLHTr-neG3&oh=00_AYBrLiIHzi3MAEWREVLvxBl71sD6MvcPyl497Fndph0b5w&oe=679DE34D',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image is the cover of "The Amazing Spider-Man" comic, issue #4, featuring Spider-Man battling the Sandman. Spider-Man is shown in action as he encounters Sandman, who demonstrates his ability to transform his body into sand. The cover text teases the story: "How can Spider-Man defeat a foe who cannot be injured?? Don\'t dare miss... \'Nothing Can Stop... The Sandman!\'"',
  },
  {
    shares: 344,
    reactions: 2583,
    message: 'man to be a fly on the wall here',
    id: '54618571998_780451224083973',
    comments: 82,
    publishTime: '2023-08-09T16:09:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/366222326_780099010785861_3448525640001180439_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ovh8nQRkIzcQ7kNvgHwGrL5&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFmhw3kNsmh72LjrMEnX1-g&oh=00_AYAbCCB6fOijlQoKPuAOnIQz6Xfb_i9o89xHiDY8jBgLDA&oe=679DE9D5',
    status: 'PUBLISHED',
    imageDescription:
      'The image shows four characters in costume, resembling classic comic and TV superheroes. From left to right, there are two in similar suits with masks and caps, followed by two others with capes, one wearing a bat-like mask and logo, and the other with an "R" on their chest. They appear to be in conversation or confrontation in a studio setting.',
    postUrl: 'https://www.facebook.com/54618571998_780451224083973',
    totalEngagement: 3009,
  },
  {
    message: 'Logo  for the original Green Hornet TV show',
    id: '54618571998_722676959861400',
    publishTime: '2023-05-22T13:08:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/348464902_1874459849597903_6551816607371817803_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Mkt3x0JSaJwQ7kNvgEcVWvQ&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ArYh5GykvSY8MnqKvLRRkWA&oh=00_AYC8hwxXZa2CMK7xAuUouJL9rtrKkdiBUCOdUN1FvTpyUg&oe=679DE50E',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image features two individuals dressed as the Green Hornet and Kato in front of a large green hornet emblem. The text "The Green Hornet" is displayed prominently at the bottom. The background is green with a yellow circle behind the characters.',
  },
  {
    message:
      'Classic Comic - Iron Man #25 (1970) - Sub-Mariner battles Iron Man.. Cover by Marie Severin and Joe Giocoia',
    id: '54618571998_895332972595797',
    publishTime: '2024-01-24T00:10:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/421424482_894065519389209_3366408888637181873_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HE2r0coojRsQ7kNvgEbmVv1&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8iaG7Ke0rbRc8cA6JwlJbb&oh=00_AYAzwlNz3iLupRhFYUXygx3BJ1SiwmG2khXubnG2kaH2wA&oe=679DE657',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a vintage comic book cover titled "The Invincible Iron Man," issue 25, priced at 15 cents. Iron Man is depicted in his classic red and yellow armor, engaging in battle with the Sub-Mariner amidst a chaotic cityscape with explosions. The title emphasizes the confrontation, stating "Surrender, Iron Man\u2014or Die!" with the tagline "Up from the Seething Sea\u2026 the Sub-Mariner!" It\'s published by Marvel Comics.',
  },
  {
    shares: 470,
    reactions: 2136,
    message: 'this just never gets old',
    id: '54618571998_1037174171745009',
    comments: 397,
    publishTime: '2024-08-10T16:10:08+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/454672529_1036815318447561_7052593918331394665_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zG6DIWHc2AwQ7kNvgHuqM5q&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AuOfGLaOMHQgQzEF_sTUW8r&oh=00_AYAc-kZShdOw0jZokpBWnf4jgPaLswceUrpBrXx2Dx53UA&oe=679DE63C',
    status: 'PUBLISHED',
    imageDescription:
      'This image shows a comic book, "Amazing Spider-Man #14," in a protective case, which is notably defaced. The front cover has "GO TO HELL" written across it, while the back has an angry handwritten message. The comic is labeled as a humorous "Angry Girlfriend Variant."',
    postUrl: 'https://www.facebook.com/54618571998_1037174171745009',
    totalEngagement: 3003,
  },
  {
    message:
      'Classic Comic - Sub-Mariner #34 (1971) - Prelude to 1st Defenders story, Silver Surfer and Hulk crossover. Sal Buscema cover and art',
    id: '54618571998_680010744128022',
    publishTime: '2023-03-27T17:12:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/337302623_964158041248930_8604335644754610018_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zjbOQJxvAgAQ7kNvgFyRqkR&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYA0465VIJ_ysMRflTH1W7aOayMtJd_8klwv6ZeFIQCPdg&oe=679DE55C',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is a comic book cover of "Sub-Mariner" issue #34. It features the Hulk, Silver Surfer, and Namor (Sub-Mariner) amidst an explosive scene. The title proclaims their entrance, and speech bubbles convey a sense of urgency about saving the planet. The artwork shows dynamic action with missiles and dramatic poses.',
  },
  {
    message: 'Silver Surfer #1 re creation by Joe Jusko',
    id: '54618571998_900247182104376',
    publishTime: '2024-01-30T19:16:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/424568735_899102545552173_2540679209034602508_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yyaixXiVAmIQ7kNvgHJJame&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AiXWsGT1VmkIehz87A_CgAK&oh=00_AYDCvJAKWZIgNDYsXYB0YBQc0jtqFuozlTudX3ZiabLqCQ&oe=679DEFAE',
    status: 'SCHEDULED',
    imageDescription:
      'A muscular silver figure is standing on a board above a planet, set against a cosmic background with swirling red clouds.',
  },
  {
    message:
      'Classic Comic - The Joker #1 (1975) -  Catwoman , Two Face and Penguin appear. Cover by Giordano',
    id: '54618571998_879368294192265',
    publishTime: '2024-01-01T20:27:50+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/414942728_879368154192279_3468768288382035615_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wUxnikKCJRYQ7kNvgHscO3s&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AUTqRmWWQpOaWM27__8mqtj&oh=00_AYATNkxQNy3JkwZnEOX7Xc6W9AhN6r57FxDLHrA-Xp8xHg&oe=679DF679',
    status: 'SCHEDULED',
    imageDescription:
      "This is a comic book cover titled \"The Joker,\" featuring the Joker himself on the cover with a mischievous grin. The text highlights it as the first issue dedicated to him, proclaiming his status as Batman's number one foe. Characters like Batman, The Riddler, Catwoman, and The Penguin appear in the scene, reacting to the Joker's antics. The price is marked as 25 cents, and it's from May, issue number 1.",
  },
  {
    message:
      'Classic Comic - Batman #200 (1968) -  Scarecrow , Penguin , Killer Moth  and Joker appear. Iconic cover by Neal Adams',
    id: '54618571998_743006147828481',
    publishTime: '2023-06-17T20:37:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/354574580_742982804497482_3676696140349753131_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=woUMK5sC8m4Q7kNvgGqbIC0&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ASXWjd5_HguOydGi6Cp1YcZ&oh=00_AYChLhCG0xni3EC_GZ8Kd9fbVxP_HTF9a3kAJMAYzispIQ&oe=679DE734',
    status: 'SCHEDULED',
    imageDescription:
      'This is the cover of Batman comic issue #200. It features Batman and Robin prominently in the foreground, holding a bat-shaped sign that reads "200th Smash Issue." The background includes various panels showcasing past Batman comic covers and iconic scenes, emphasizing the milestone nature of the issue.',
  },
  {
    message: '',
    id: '54618571998_10151915849761999',
    publishTime: '2013-10-23T06:09:33+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/467678935_10161715275886999_1520623704162863499_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=X3xGJcx9IUsQ7kNvgGzoBJh&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AEdkD5VVFZBTarEvu7dmLet&oh=00_AYCQZbscZFoO23qcsWDxvfF-LdvLYJchVCtYPSLQxv5eyg&oe=679E0E48',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A man in a red shirt holds a drink. The text above him reads, "How Tough are Scotsmen?" Below, it says, "Laddie, you\'re speaking to the only guy in a red shirt who isn\u2019t dead."',
  },
  {
    shares: 432,
    reactions: 2469,
    message:
      'Classic Comic - Adventure #300 (1962) -  Tales of the Legion of Super Heroes begins. Curt Swan cover.',
    id: '54618571998_620245436771220',
    comments: 79,
    publishTime: '2023-01-16T16:11:06+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/325937721_713715680229624_7948632229474276910_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1vOXwY49zfEQ7kNvgE0lYTe&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AEj86Fc0xlMaisai1dICqfl&oh=00_AYDHsvUxWlEnpmPZUY4xck7gCnGDIvxRz05_k0HWy_SqsA&oe=679DE3EE',
    status: 'PUBLISHED',
    imageDescription:
      'This image is the cover of "Adventure Comics" issue number 300, featuring characters like Superboy, Sun Boy, Lightning Lad, Saturn Girl, Triplicate Girl, Cosmic Boy, and Mon-El. It highlights the "Tales of the Legion of Super-Heroes" and shows the "Super-Hero Club House". The issue is approved by the Comics Code Authority and priced at 12 cents.',
    postUrl: 'https://www.facebook.com/54618571998_620245436771220',
    totalEngagement: 2980,
  },
  {
    message:
      'Classic Comic - Detective #298 (1961) - 1st appearance of Silver Age Clayface and Origin. Bill Finger story. Cover by Sheldon Moldoff',
    id: '54618571998_800419352087160',
    publishTime: '2023-09-08T20:22:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/376668024_800053262123769_3129990463274742250_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jkXSPWTJKLwQ7kNvgHXSgvY&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYD-6x9WIYfbFdDVAWo7GdWMi_MxF1Rqh9pM-pmusCOPsg&oe=679DC5B5',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic book cover titled "Detective Comics," issue No. 298, priced at 12 cents. It features Batman and Robin confronting a large, menacing figure known as "Clay-Face" against a night backdrop with a full moon and a house. There\'s a speech bubble saying, "That fantastic character, Clay-Face, can mold his body into any shape!"',
  },
  {
    message:
      'Classic Comic - Captain Marvel #78 (1947) - Origin of Mr Atom.Sivanna appears. Great robot cover by C.C. Beck',
    id: '54618571998_632686952193735',
    publishTime: '2023-01-30T18:18:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/328484236_867491131183294_399011800570939949_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_o5CX72J94cQ7kNvgH5jHer&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Alupxj5DpbCH-SJ9oxPO6Md&oh=00_AYCfbhoV1OSea-rZCZEhVzEGti_6e8b9jiPmsrmIhInHig&oe=679DECB3',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage comic book cover titled "Captain Marvel Adventures." It shows Captain Marvel facing off against a metallic figure named "Mr. Atom." The background features an urban landscape with buildings and large plumes of smoke. The text on the cover states the issue number as 78 and that it costs 10 cents.',
  },
  {
    message:
      'Classic Comic - Thor #158 (1968) - Origin of Thor retold. Cover by Marie Severin and Jack Kirby. Inside art by Jack Kirby',
    id: '54618571998_577129824416115',
    publishTime: '2022-11-29T18:12:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/317554584_576608971134867_6049908543783708787_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=E4QGEgGpqCgQ7kNvgHTmVar&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AF8l_PO0GjPuZN8Dk6c1BpY&oh=00_AYDgnOa18oNRKnLsWm5JsNNO_LVjO0zbGmT7dqOW9hjuKg&oe=679DF046',
    status: 'SCHEDULED',
    imageDescription:
      'The image is the cover of "The Mighty Thor" comic book, issue #158, published by Marvel Comics. It features Thor in multiple action poses wielding Mjolnir, his hammer, with his iconic winged helmet and red cape. A large, dramatic close-up of Thor\'s face dominates the right side, with a bold, colorful title at the top. The cover is vibrant, with a dynamic design typical of classic superhero comics.',
  },
  {
    message:
      'Classic Comic - Detective #230 (1956) - 1st appearance of the Mad Hatter. Bill Finger story. Win Mortimer cover',
    id: '54618571998_762655485863547',
    publishTime: '2023-07-14T14:40:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/360103847_762385425890553_1561087717888990904_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BKUGgF9VZGwQ7kNvgHThneX&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AuXIsvkg1_wDUFJ6cdv22t7&oh=00_AYBTTKcmKgn321nSooJXbkYOJIwSCaQ_E0U1CQds9SJstA&oe=679DD888',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a cover of "Detective Comics" featuring Batman and Robin confronted by a villain called the Mad Hatter. He is eager to add Batman\'s cowl to his collection of hats.',
  },
  {
    message:
      'Jack Kirby at an in store signing...look at all that original art',
    id: '54618571998_1166044745524617',
    publishTime: '2025-01-22T14:11:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/474459928_1165864418875983_7121536095375556769_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dlVqtuCjJ78Q7kNvgEoL0ld&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AAaNRiWBPub3ip85cXc82r4&oh=00_AYAKPvrab2X1ykzx_rmR98F4LZKr3sPLVvgBl5XGWuegLQ&oe=679DBE4E',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The black and white image shows a comic book store where three people are gathered around a table filled with comic book art and comics. One person is browsing the comics, while another appears to be showing or discussing artwork. The shelves behind them are packed with various comic books.',
  },
  {
    message:
      'Classic Comic - Amazing Spider-Man #40 (1966) - Origin of the Green Goblin. Cover and art by John Romita',
    id: '54618571998_643519044443859',
    publishTime: '2023-02-11T20:29:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/330462090_712984923532778_1123062149041800293_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=KVZEOtQ8LB0Q7kNvgFDhcj1&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AOWK0IeDNMQbdSLHTr-neG3&oh=00_AYCpjdM_E3bNMJt4HmEhJ2pBm8r-DFHkr4BVDmT8vNSzjA&oe=679DFC50',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The comic cover features Spider-Man standing triumphantly over a defeated Green Goblin. The title reads "The Amazing Spider-Man," with a subheading "Spidey Saves the Day!" and "The End of the Green Goblin!" The setting is dramatic, with rubble and flames in the background.',
  },
  {
    shares: 110,
    reactions: 2806,
    message:
      'Classic Comic - Avengers #23 (1965) - 1st John Romita Silver Age work for Marvel. 1st appearance of Ravonna Renslayer.Kang appears. Cover by Jack Kirby and John Romita',
    id: '54618571998_1107210344741391',
    comments: 51,
    publishTime: '2024-11-07T18:14:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/465800834_1106894578106301_204958997406845281_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0cW3lyPcpPEQ7kNvgG7r57i&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AWiLMMO5XVPgpTX6RC14Hak&oh=00_AYD8WyQ-CrPYNLEGbmpxYricZb8IKiQIZbJIBQMqAbSksQ&oe=679DCBED',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vintage comic book cover of "The Avengers," issue #23. It features a large, menacing figure in red armor with the Avengers team, including recognizable characters in action-ready poses. The title at the bottom reads "Once an Avenger...!"',
    postUrl: 'https://www.facebook.com/54618571998_1107210344741391',
    totalEngagement: 2967,
  },
  {
    message:
      'Classic Comic - Uncanny X-Men #171 (1983) - Rogue joins the X-Men. Binary (Carol Danvers) appears. Cover by Walt Simonson',
    id: '54618571998_766219088840520',
    publishTime: '2023-07-19T18:53:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/361871700_766196745509421_7349803662408020802_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=U2BsBlvElVkQ7kNvgENUWFZ&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ATc73HRWyp02Z-tyObKGEZm&oh=00_AYDPYSVJtUfAfWDZp-vSkrBvtkwyJmogJeyg-8n2sdgcKA&oe=679DEF3B',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is the cover of "The Uncanny X-Men" comic, issue #171, featuring several Marvel superheroes, including a notable welcome to the character Rogue. The text reads, "Welcome to the X-Men, Rogue\u2026 Hope you survive the experience." The dynamic artwork showcases multiple characters in action poses.',
  },
  {
    message:
      'Classic Comic - Incredible Hulk #2 (1962)- 1st Green Hulk. 2nd Appearance of the Hulk. 1st Appearance by the Toad Men. Cover and interior art by Jack Kirby and Steve Ditko',
    id: '54618571998_630111879117909',
    publishTime: '2023-01-27T18:06:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/327817875_1137886863594480_5632465373508675370_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=CwlAr8VI9rYQ7kNvgGocsMD&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Alupxj5DpbCH-SJ9oxPO6Md&oh=00_AYBtJ0SIZXaGY8TssPEaOy1qTltZ0QvLJR4lvgHmnvrUfA&oe=679DF38B',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'This is the cover of "The Incredible Hulk" comic, issue #2 from July, priced at 12 cents. The title reads "The Terror of the Toad Men!" with a dramatic scene showing the Hulk facing off against toad-like aliens. Speech bubbles convey urgency and a sense of impending conflict.',
  },
  {
    message:
      'Classic Comic - Tales of Suspense #63 (1965) - 1st Silver Age Origin of Captain America . Cover by Dick Ayers.  Interior art by Dick Ayers , Don Heck and Jack Kirby',
    id: '54618571998_629025255893238',
    publishTime: '2023-01-26T18:21:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/327438546_3541774312776351_82287669731575669_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BGkpac6Xpy0Q7kNvgHlVDSC&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Alupxj5DpbCH-SJ9oxPO6Md&oh=00_AYB70O1pA3tNsHiVGAdZD9Pugfx619i3jBj_U4R2m0im2g&oe=679DD8A4',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is a comic book cover of "Tales of Suspense" featuring "Iron Man" and "Captain America" from Marvel Comics. It highlights "The Origin of Captain America" and includes an additional story titled "Somewhere Lurks the Phantom." Captain America is prominently depicted in action with his shield, alongside images of Iron Man and other narrative elements. The book is priced at 12 cents and is approved by the Comics Code Authority.',
  },
  {
    message: '',
    id: '54618571998_706686268127136',
    publishTime: '2023-05-01T16:55:25+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/343709328_119220787820788_7257893264863688483_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EixBNX7sDl8Q7kNvgFodL2A&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AYoRt-zoKoYprRsbORd9AEX&oh=00_AYDbzJr_0BtYjpzXYThHQ01D8VJPa7rn2jjl-KkwpK8KVg&oe=679DEB12',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image is a playful cartoon illustration featuring a character dressed as Thor with a winged helmet holding a hammer, and a flying beagle wearing a cape in a superhero pose. The background depicts a futuristic cityscape.',
  },
  {
    message: 'need that time machine',
    id: '54618571998_695965649199198',
    publishTime: '2023-04-17T13:03:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/342044261_1211209839528968_1019319397796874414_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9LqX2gQq4QkQ7kNvgHJuVUx&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AlpbJrh9swE9shsKu1FU20_&oh=00_AYA76IXBBtlap9IcIwswlkEGSazwzC60YAMrof6lN1ySWQ&oe=679DDE54',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image shows a child standing in front of a large, alphabetically-sorted rack of comic books at a store called "Comic Land." The comics, from 1948, include a variety of colorful titles, providing a wide selection of reading material.',
  },
  {
    message:
      'Classic Comic - Justice League #43 (1966) - 1st appearance of the Royal Flush Gang. Mike Sekowsky and Murphy Anderson cover',
    id: '54618571998_812909067504855',
    publishTime: '2023-09-26T20:23:09+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/380933231_812908680838227_5707433492321776612_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IXm6-i30wF4Q7kNvgGyScV9&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A_vnmMIHG0AfcC5NFksZQ5j&oh=00_AYCZPzQ5P82ZFa8zdEpVYQswheUOsOR3Lae_W8dxlgRLzA&oe=679DC648',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage comic book cover titled "Justice League of America." It features superheroes like Batman, Superman, and Wonder Woman being attacked by the Royal Flush Gang. The text bubble declares, "Nothing beats the Royal Flush Gang--not even the Justice League!" The cover is colorful and dynamic, typical of classic comic book art.',
  },
  {
    shares: 77,
    reactions: 2835,
    message: 'Lynda Carter... Wonder Woman',
    id: '54618571998_881134244015670',
    comments: 29,
    publishTime: '2024-01-04T15:19:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/417100379_880948444034250_231252408616313050_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3eD3qwjVVX8Q7kNvgHmdKNd&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Aq9BZLyejJs2C5ZtYhRhe9s&oh=00_AYDTy7m80KJvAVGRNz7gkNKJx6f_MJh1fYzyjEGwpW1A8Q&oe=679DE0BF',
    status: 'PUBLISHED',
    imageDescription:
      'A woman in a classic superhero costume is juggling balls. The costume features a star emblem on the forehead and a detailed, decorative top and skirt. The image is black and white.',
    postUrl: 'https://www.facebook.com/54618571998_881134244015670',
    totalEngagement: 2941,
  },
  {
    shares: 311,
    reactions: 2602,
    message:
      'Classic Comic - Fantastic Four #16 (1963) - 1st Ant-Man Cross over. Dr Doom Appears.Wasp Cameo. Cover and art by Jack Kirby',
    id: '54618571998_650056820456748',
    comments: 24,
    publishTime: '2023-02-18T20:21:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/329610082_3080431968769561_2672204357415906157_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gx9pbKxIzEMQ7kNvgELTpEP&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYBIJPQTLUt9ZAmSPPbiU1TG-F293nKVhla0mikN_yRdmA&oe=679DF937',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book cover titled "Fantastic Four" featuring the return of "Doctor Doom." It includes Ant-Man as a special guest star and showcases a large figure of Doctor Doom holding the Fantastic Four members in his hand. The cover announces a visit to the "Micro-World of Doctor Doom."',
    postUrl: 'https://www.facebook.com/54618571998_650056820456748',
    totalEngagement: 2937,
  },
  {
    shares: 197,
    reactions: 2705,
    message:
      'Classic Comic - Showcase #23 (1959) - 2nd appearance of the SA Green Lantern. Gil Kane and Joe Giella cover',
    id: '54618571998_790018049793957',
    comments: 30,
    publishTime: '2023-08-23T19:05:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/370313509_789962009799561_4913536756968337200_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2IwI_xaiYFAQ7kNvgFqJ6l-&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYCNkc4z2eMK5nPz5CL59mfuEwbM5v9APNQZViANSlk1Vw&oe=679DC98E',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vintage comic book cover titled "Showcase Presents Green Lantern." It features Green Lantern battling a villain with a headless body in a red costume with a yellow atomic symbol. The villain is threatening to set off an atomic bomb. Text highlights the story, "The Invisible Destroyer."',
    postUrl: 'https://www.facebook.com/54618571998_790018049793957',
    totalEngagement: 2932,
  },
  {
    message: 'from ASM #122 .......this page is so powerful',
    id: '54618571998_829919579137137',
    publishTime: '2023-10-20T18:16:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/391682037_829896685806093_6976643997921566758_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QYr5iHOvum0Q7kNvgF_4pAh&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AvEhpGDi1HQFkGgpMJudFl6&oh=00_AYBc24A2rokxw4uz1MO1SzQMukGlbSMc5JCDNAXWzoAjlA&oe=679DD86D',
    status: 'SCHEDULED',
    imageDescription:
      "The image is a comic book page featuring Mary Jane Watson and Peter Parker. Mary Jane enters an apartment and sees a distressed Peter, who's grieving. She tries to comfort him, but he lashes out, telling her to leave. Mary Jane hesitates before deciding to stay, conveying silent support amidst Peter's sorrow.",
  },
  {
    shares: 588,
    reactions: 2305,
    message: '',
    id: '54618571998_1119008213561604',
    comments: 35,
    publishTime: '2024-11-22T19:11:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/467693776_1118660536929705_526878338738206551_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bVVBwifgMrkQ7kNvgFJVaM5&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFT13vH4zv0T-yKWrS8kNws&oh=00_AYAUqR-CaLDGY--z0psIDjkX8vjah4QztmVI7oVy_BOSMg&oe=679DC10E',
    status: 'PUBLISHED',
    imageDescription:
      'Five cartoon birds dressed as superheroes are walking through a cityscape at night. The largest bird is dressed like a famous caped superhero, leading the others.',
    postUrl: 'https://www.facebook.com/54618571998_1119008213561604',
    totalEngagement: 2928,
  },
  {
    message:
      'Classic Comic - Detective #148 (1949) - Batman and Robin vs Professor Zero. Sprang Cover. Bill Finger story',
    id: '54618571998_886847190111042',
    publishTime: '2024-01-12T16:10:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/419221396_886554530140308_1648073383705812674_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sH3Ii8jX3pMQ7kNvgHGu6oM&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AnI2vm1qwoJyPrblQR7BRtx&oh=00_AYAQjndR0Br87F6okMOjFrv8fOPQf9VHvW3INQODFo-3aA&oe=679DEAB8',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage comic book cover titled "Detective Comics," featuring Batman and Robin. They are depicted inside glass domes, observed by a scientist, with a storyline called "The Experiment of Professor Zero." The cover price is ten cents, and it is branded as a DC publication.',
  },
  {
    shares: 374,
    reactions: 2536,
    message:
      'Classic Comic - Action #76 (1944) - Fantastic WW 2 cover by Wayne Boring',
    id: '54618571998_656974346431662',
    comments: 17,
    publishTime: '2023-02-26T19:52:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/332896895_565725272187456_8149558789221601885_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5FM8QHaAs-QQ7kNvgFPwW5w&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYAisRN5fbsz4cSkKJN_Enk_nqG7r8liLwRB-vn1K79VoA&oe=679DD9C2',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vintage comic book cover for "Action Comics No. 76," featuring Superman. He is depicted in action, using his super strength to disable a military motorcycle with two soldiers being knocked off. The comic is priced at ten cents and has vibrant, dynamic artwork.',
    postUrl: 'https://www.facebook.com/54618571998_656974346431662',
    totalEngagement: 2927,
  },
  {
    shares: 165,
    reactions: 2704,
    message:
      'Classic Comic - Thor #148 (1968) - Origin Black Bolt. Origin and 1st appearance of the Wrecker.. Jack Kirby and Vince Colletta cover',
    id: '54618571998_760634966065599',
    comments: 55,
    publishTime: '2023-07-11T18:58:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/358702688_760230236106072_8690942076617822635_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=c6DW0FTU4-kQ7kNvgG7LM9v&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AuXIsvkg1_wDUFJ6cdv22t7&oh=00_AYBfciUA3sg6CGd0MHDMhJCTUDEDBhSm81fMk92rVcfAsg&oe=679DE758',
    status: 'PUBLISHED',
    imageDescription:
      'The comic cover features "The Mighty Thor" in a dynamic scene where a villain, identified as "The Wrecker," is swinging a crowbar amidst ruins. Thor and two other characters are in the foreground, preparing to confront him. The text highlights "Introducing: The Pounding Power of The Wrecker."',
    postUrl: 'https://www.facebook.com/54618571998_760634966065599',
    totalEngagement: 2924,
  },
  {
    message: '',
    id: '54618571998_795607569235005',
    publishTime: '2023-09-01T14:11:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/370272262_795377302591365_7331789055341372505_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gh_QhC_RDgYQ7kNvgEN9j8-&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFPZWKt5JZ1PFEs5yzutf_Z&oh=00_AYCsHiXsq9rS_fJ9F4wPqCA8IKqkaF_vdBI1YLZf_xtd9g&oe=679DD4F7',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a black and white photo of a muscular, wild-haired man with an intense expression, posing with his arm around the neck of a smiling man dressed in a suit. They appear to be playfully interacting.',
  },
  {
    message:
      'Classic Comic - Amazing Spider-Man #14 (1964) - 1st appearance of the Green Goblin. 1st meeting between Hulk and Spider-Man. The enforcers appear. Cover and art by Steve Ditko',
    id: '54618571998_633483952114035',
    publishTime: '2023-01-31T16:14:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/327790043_568948864918785_4169589717822610378_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Qu5JcCUET60Q7kNvgGcuiqy&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Alupxj5DpbCH-SJ9oxPO6Md&oh=00_AYCGamZgCF2Si-WYpWCff2wFPpm6HoBNVF5kiQaXMYIRuQ&oe=679DCC26',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is the cover of "The Amazing Spider-Man" comic issue #14 by Marvel Comics, featuring Spider-Man battling the Green Goblin. The cover announces the Green Goblin as a dangerous new villain and guest stars the Hulk. The art style is classic 1960s comic book, with vibrant colors and dynamic action poses.',
  },
  {
    message: 'Dr Strange Pin-up by Steve Ditko',
    id: '54618571998_793123196150109',
    publishTime: '2023-08-28T18:11:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/370781840_792849832844112_3199287227878133487_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eFXUmWIq91sQ7kNvgEnt3SD&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFPZWKt5JZ1PFEs5yzutf_Z&oh=00_AYAm4CV0frFNN06MBOj6wzOxcFY0GjAWvSNZyTynx7C6Vw&oe=679DD087',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage comic book pin-up featuring "Dr. Strange, Master of the Mystic Arts," showcasing the character casting spells with mystical energy emanating from his hands. The background is filled with surreal, abstract designs, emphasizing his magical abilities.',
  },
  {
    message:
      'Classic Comic - Batman #92  (1955) - 1st Appearance and Origin of Ace the Bat- Hound. Cover by Win Mortimer',
    id: '54618571998_853906940071734',
    publishTime: '2023-11-25T18:12:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/405796015_853870030075425_486433101958233079_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=m94CJwfUeEMQ7kNvgFSFiEz&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad1ff1s2cBGYM0_gvSA37EV&oh=00_AYC9dSStTTAgDA0q1aBRfjyoByh7h7_C_aiAzBbtCg9SVQ&oe=679DEEBE',
    status: 'SCHEDULED',
    imageDescription:
      'This is the cover of "Batman" comic issue No. 92, featuring Batman, Robin, and introducing "Ace, the Bat-Hound." Batman and Robin are shown with a dog recognizing the Bat-Signal, ready for action. The Batmobile is in the background.',
  },
  {
    message:
      "Classic Comic - Secret Wars #4 (1984) -Good rule to follow, don't make Hulk angry I've always loved this cover by Bob Layton",
    id: '54618571998_847860527343042',
    publishTime: '2023-11-16T20:18:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/402910101_847810270681401_394649410863645687_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pU6QgBwP6BcQ7kNvgFi-eWz&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A1JMZmQ38AIeooTJbQ1QLY-&oh=00_AYDhhrro0JmWj9si3KzZ314-C4BU4gtdLlPFm_EJJouTrA&oe=679DF27F',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is the cover of "Marvel Super Heroes Secret Wars #4" comic. It features the title in bold letters at the top and an illustration of the Hulk holding up a massive weight beneath him, with various Marvel superheroes crowding below. The text states, "Beneath One Hundred and Fifty Billion Tons, Stands the Hulk \u2013 And He\'s Not Happy!"',
  },
  {
    shares: 159,
    reactions: 2687,
    message: 'FF cartoon - Hanna Barbera 1967',
    id: '54618571998_943514534444307',
    comments: 65,
    publishTime: '2024-04-01T14:09:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/435266771_943254314470329_7892383427871717319_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FIL7SstMU_UQ7kNvgEsVSYK&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A9vJEf3b3CAjZOCTfsxGoH2&oh=00_AYAANUAuFCN5HWjeKS34P3fjX35IHM2hBuL4wWpj75t2nQ&oe=679DC73C',
    status: 'PUBLISHED',
    imageDescription:
      'The image depicts a group of four cartoon characters. Two men and a woman are dressed in classic 60s-style suits and dresses, while the third figure, a large man in a trench coat and hat, wears a mask with a textured pattern covering his face. The characters stand closely together.',
    postUrl: 'https://www.facebook.com/54618571998_943514534444307',
    totalEngagement: 2911,
  },
  {
    message:
      'Classic Comic - Amazing Spider-Man #18 (1964) - 1st Ned Leeds. 3rd appearance of Sandman. FF crossover. Cameos by Daredevil and the Avengers. Art and cover by Steve Ditko',
    id: '54618571998_672689374860159',
    publishTime: '2023-03-18T17:12:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/336385689_3422128298065480_3397183906365501890_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4fcRqoEdOAAQ7kNvgHTpLMT&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYCCRCMRieczhDArRDPiCg5H43B3G012hxVnlwYkyfRRFA&oe=679DEBD9',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is the cover of "The Amazing Spider-Man" comic, issue #18, featuring Spider-Man crouched in fear as Sandman menaces a city street. The cover text teases "The End of Spider-Man!" with dramatic plot hints, emphasizing danger and surprise in the story.',
  },
  {
    message:
      'Classic Comic - Hulk #125 (1970) - Absorbing Man vs the Hulk.. Herb Trimpe Cover and art',
    id: '54618571998_924033173059110',
    publishTime: '2024-03-04T23:27:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/431336119_922879563174471_9168545476999167754_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Xstc_KuwRWwQ7kNvgEvsRyX&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANKEXX0ECxPXGcj1EQ1GtNe&oh=00_AYCG8yfqpUGY1MY17CXohuUQAQKNN7MKwlGVIVsTjcxMKg&oe=679DDEFA',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is a vintage comic book cover titled "The Incredible Hulk" issue #125. It shows the Hulk battling a character known as the Absorbing Man in a dynamic space setting. The cover features bold, colorful artwork typical of classic comics, with the price listed as 15 cents. Text on the cover announces "AND NOW... THE ABSORBING MAN!"',
  },
  {
    message:
      'Classic Comic - Captain America #22 (1943) - Hitler appearance. Human Torch Back up story. Cover by Syd Shores',
    id: '54618571998_633569205438843',
    publishTime: '2023-01-31T18:19:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/327332648_5609901072465104_7558310780615776391_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uR7HeKo54zcQ7kNvgEvh_iG&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Alupxj5DpbCH-SJ9oxPO6Md&oh=00_AYC86sODiI9b5n1As8cQ2p0U79nRZXKrsBY0NL4w9IEOYw&oe=679DD729',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a vintage comic book cover featuring Captain America in action, battling enemy soldiers. Explosions and military vehicles are in the background, with bold text at the top reading "Captain America." A circular inset in the bottom right announces "The Human Torch" feature inside.',
  },
  {
    shares: 1781,
    reactions: 1076,
    message: 'Supes gets a little pay back',
    id: '54618571998_10151572608466999',
    comments: 43,
    publishTime: '2013-04-22T15:38:49+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/468785008_10161947096441999_879964139351036722_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=Kv8hqimTAS4Q7kNvgG6OduN&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A3YxjTnzQrFXmNJ04sQP9HH&oh=00_AYDVNL5EDsrzVg77I-Zn2nZYfPwa1eNWKtb_B0bhnsvVRQ&oe=679E0937',
    status: 'PUBLISHED',
    imageDescription:
      'The image is divided into two panels: the top shows Batman spray-painting "Superman is Clark Kent" on a brick wall, and the bottom shows Superman flying in space with the words "Bruce Wayne is Batman" written on the moon.',
    postUrl: 'https://www.facebook.com/54618571998_10151572608466999',
    totalEngagement: 2900,
  },
  {
    message: 'Red Sonja by Bruce Timm',
    id: '54618571998_945182794277481',
    publishTime: '2024-04-03T21:27:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/435369120_944796220982805_8547795542798079686_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pbFtHpdP2oAQ7kNvgFqe5hn&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AgWySNYoCQdWM2hsmdj80hA&oh=00_AYDyAcT50KbinvSfCVtU7cgKURkQBh2-K5zK1uyGsWolPg&oe=679DF194',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a black and white illustration of a woman with long, flowing hair. She is wearing a bikini-like outfit made of circular designs and a sword is in her right hand. The background features swirling dark clouds.',
  },
  {
    message:
      'Classic Comic - Thor #145 (1967) - Ringmaster and Circus of Crime appear. Last Tales of Asgard back up story. Cover and art by Jack Kirby and Vince Colletta',
    id: '54618571998_787445446717884',
    publishTime: '2023-08-19T19:31:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/368362208_787431853385910_4764843837980208683_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vGJ-Tw8qclYQ7kNvgG0koGN&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYDp25ZInb_LVn4dHVOr0naVYzHXk-lN15-79qbW5IGEXw&oe=679DCC86',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The cover features "The Mighty Thor" comic issue #145, depicting Thor standing confidently in the foreground with a dramatic, stormy background. His hammer, Mjolnir, lies on the ground, surrounded by fallen figures. The text at the bottom reads "Abandoned on Earth!"',
  },
  {
    message:
      'Classic Comic - Avengers #70 (1969) - Origin Squadron Sinister. Kang. Grandmaster and Black Knight appear - Cover and art by Sal Buscema and Sam Grainger',
    id: '54618571998_925357452926682',
    publishTime: '2024-03-06T21:26:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/392878811_917967603665667_5138178500925808990_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zTyoQESa2aEQ7kNvgGyXtVS&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ANKEXX0ECxPXGcj1EQ1GtNe&oh=00_AYDl5D8Dt-cQ8ekz_g1GBGdI3dAYwImMtUHf2lhbux-0rA&oe=679DE6A0',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is a comic book cover from Marvel Comics titled "The Avengers," issue #70, with a price of 15 cents. It features a dynamic battle scene between two superhero teams, the Avengers and the Squadron Sinister, with characters like Captain America, Iron Man, and others engaged in combat. The background shows a cityscape, and the tagline reads "Enter: The Squadron Sinister!"',
  },
  {
    message:
      'Classic Comic - Captain America #14 (1942) - Story by Stan Lee . Cover by Al Avison. Remember Pearl Harbor Issue',
    id: '54618571998_815664377229324',
    publishTime: '2023-09-30T17:19:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/384542327_815325097263252_2141439180230828636_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=efXJltvWDzYQ7kNvgEiJaiZ&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A_vnmMIHG0AfcC5NFksZQ5j&oh=00_AYCAcii78AtJFaqpCUtfr95rTGeWMyDi2dd958fnKP7sug&oe=679DC2B1',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image is a vintage comic book cover titled "Captain America Comics No. 14," dated May, featuring Captain America in dynamic action swinging into battle against armed enemy soldiers in a lair. The cover also highlights the slogan "Remember Pearl Harbor" and includes additional stories advertised, such as about "The Imp."',
  },
  {
    shares: 361,
    reactions: 2500,
    message: "Marvel Pin up from the 60's",
    id: '54618571998_628022672660163',
    comments: 8,
    publishTime: '2023-01-25T17:11:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/327310472_730631351917909_3120124766150794789_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wckcUsiFtaoQ7kNvgHGLhOt&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Alupxj5DpbCH-SJ9oxPO6Md&oh=00_AYAMZCrZnIG2dp_qz9AXZDBMzACH8FjJh1F8OzCR70M-Lg&oe=679DE339',
    status: 'PUBLISHED',
    imageDescription:
      'The image depicts a dynamic pin-up of a superhero in a blue costume, featuring a star on the chest and a circular shield with a star design. He is poised in an action stance against a cityscape background, labeled as a Marvel Masterwork.',
    postUrl: 'https://www.facebook.com/54618571998_628022672660163',
    totalEngagement: 2869,
  },
  {
    message:
      'Classic Comic - Avengers #34 (1966) - 1st appearance of the Living Laser. Don Heck cover and art',
    id: '54618571998_789939533135142',
    publishTime: '2023-08-23T16:49:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/370305054_789641376498291_7265522363548549513_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vR_lPkww2y4Q7kNvgFrYXDf&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYDPj0hxdc5UmZFbMufYRY8_t-y-gpuIhK5gmDzwJn3HcQ&oe=679DC783',
    status: 'SCHEDULED',
    imageDescription:
      'Comic cover of "The Avengers" issue #34, featuring "The Living Laser." It shows the Avengers engaged in battle with the villain, highlighted as one of the most "deadly super-foes" in Marvel history. Published by Marvel Comics Group with a price of 12 cents.',
  },
  {
    message:
      'Classic Comic - Justice League #1 (1960) - JLA starts in their own title. Origin and 1st Appearance of Despero. Murphy Anderson Cover',
    id: '54618571998_621193896676374',
    publishTime: '2023-01-17T18:15:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/326156172_1376572233114729_2597895475795034072_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=KEz96SfY3dUQ7kNvgGh4KO-&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AEj86Fc0xlMaisai1dICqfl&oh=00_AYDpg84lboMfvhghLeIj6ncz-fHHy_6cRLx8d5Hq_CXdYg&oe=679DDC6A',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic book cover titled "Justice League of America." It features a group of superheroes, including The Flash, engaged in a strategic board game against a villain. Flash is shown making a move on a chess-like board with miniature superhero figures. The cover includes vivid colors and bold text, emphasizing a dramatic scenario with the tagline "World of No Return!"',
  },
  {
    message: 'By John Byrne',
    id: '54618571998_849558993839862',
    publishTime: '2023-11-19T05:11:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/402904773_848499153945846_1069999038885698711_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dJa1ua_aefsQ7kNvgHIYP4_&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A1JMZmQ38AIeooTJbQ1QLY-&oh=00_AYDJHJ9M-I3moyE74IZeDg__goCESnWm11TQCA0qHY8ERA&oe=679DC904',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A supervillain in a green cloak is wielding an Infinity Gauntlet, emitting a glow with various colored stones. The villain is using their other hand to lift a superhero with a "4" logo on their suit.',
  },
  {
    shares: 205,
    reactions: 2589,
    message: 'still my favorite',
    id: '54618571998_807353184727110',
    comments: 47,
    publishTime: '2023-09-18T16:17:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/380713743_807055118090250_5937021235841254932_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5qsNnnOyo2wQ7kNvgEv2_gH&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AQ6uIXz3wArX-td61b3bq_j&oh=00_AYC8XC2TcqbBjak7M8sk7_TYVohprlkwzvAJDVQ4O1jIhw&oe=679DD782',
    status: 'PUBLISHED',
    imageDescription:
      'This is a movie poster for "Batman." It prominently features Batman in his black suit with a yellow emblem, the Joker in a colorful outfit, a woman standing close to Batman, and the Batmobile. The setting includes a cityscape, with "BATMAN" written at the bottom.',
    postUrl: 'https://www.facebook.com/54618571998_807353184727110',
    totalEngagement: 2841,
  },
  {
    shares: 438,
    reactions: 2391,
    message:
      'Classic Comic - Wonder Woman #45 (1951) - Origin of Wonder Woman retold. Cover by Irwin Hasen, Stories by H.G. Peter',
    id: '54618571998_651744463621317',
    comments: 10,
    publishTime: '2023-02-20T18:18:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/332498616_5878943422161020_8110859716810569238_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=b15EpmSv8rYQ7kNvgEM-KF_&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYDZIjGQhn5p6fDI1dx-6QO-_XoV9md97mc7J1PaVlvuYg&oe=679DEFEF',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book cover titled "Wonder Woman," featuring Wonder Woman in her iconic costume. She\'s central on a vibrant red background with her lasso in hand. The cover includes comic panels in the background and text promoting "The Wonder Woman Story," highlighting answers to questions about her origin. It\'s published by DC, dated Jan-Feb, issue No. 45, priced at 10 cents.',
    postUrl: 'https://www.facebook.com/54618571998_651744463621317',
    totalEngagement: 2839,
  },
  {
    message:
      'Classic Comic - Amazing Spider-Man #59 (1968) - John Romita Cover & Art- 1st Mary Jane Watson cover',
    id: '54618571998_687531746709255',
    publishTime: '2023-04-06T18:54:57+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/339735396_966329001026343_3767485332804011133_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=x7RJEbVUQF4Q7kNvgG7c-7q&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AjtGYtRKUGGoHrazfSxAA5t&oh=00_AYDIwgM6JqzL5b14m5zK5gbrZHHlYbnp4D-cRzhMroNX1g&oe=679DE213',
    status: 'SCHEDULED',
    imageDescription:
      'This is a classic comic book cover of "The Amazing Spider-Man" issue #59, featuring Spider-Man in action, kicking two men. A woman in a short dress and high boots appears on the right, and the title of the story is "The Brand of the Brainwasher!" It includes the Marvel Comics Group logo and is priced at 12 cents.',
  },
  {
    message:
      'Classic Comic - The Joker #1 (1975) - Catwoman , Two Face and Penguin appear. Cover by Giordano',
    id: '54618571998_961385312657229',
    publishTime: '2024-04-26T19:17:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/440742481_960963196032774_6539222185686045759_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=N5a_WcAWbuYQ7kNvgHtIf0C&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A85M5KuolsBPj4E-57EiotJ&oh=00_AYDAvu5N0RJhGNiBbm2Ein7XKLZUxCvS6R7C55-hKc5JeQ&oe=679DD94F',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic book cover titled "The Joker," showcasing its first issue. The Joker is prominently featured, joyfully exclaiming about his villainous reputation. Other characters, including Batman, Catwoman, the Riddler, and the Penguin, are also present. The comic costs 25 cents and is marked as approved by the Comics Code Authority.',
  },
  {
    message:
      "Superman Kellogg's Pep Cereal Retail Standee (DC Comics/Kellogg Co., 1947)",
    id: '54618571998_721095340019562',
    publishTime: '2023-05-20T14:10:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/347124985_204348509121490_82969717411346045_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xUGB_pAAVgoQ7kNvgGOgD4X&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ArYh5GykvSY8MnqKvLRRkWA&oh=00_AYC6GXVf5byA5n5-7eFcNOr0Jl4k36kL_I2uOu8Bw1gGCw&oe=679DC7BC',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a vintage advertisement featuring a superhero and children, promoting Kellogg\'s Pep cereal. The superhero is shown smiling, with the slogan "Boy! It\u2019s SUPER" above. A bowl of cereal with sliced bananas is prominently displayed in the foreground.',
  },
  {
    shares: 268,
    reactions: 2524,
    message: "Batman '66 and the Green Hornet by Alex Ross",
    id: '54618571998_1114120410717051',
    comments: 39,
    publishTime: '2024-11-16T15:12:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/467414924_1113902400738852_8662036824724737364_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=j3fAodZA8BgQ7kNvgHcxZat&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFT13vH4zv0T-yKWrS8kNws&oh=00_AYDFP2_Gf21rADmrSQ9I_PTcm3lGwqClIMUADTaORTz5eQ&oe=679DC75B',
    status: 'PUBLISHED',
    imageDescription:
      'The image features a dynamic comic-style illustration of four characters in action poses. Batman, prominently in the center, is surrounded by Robin, the Green Hornet, and Kato. Colorful sound effects like "Whap!" and "Ouch!" are in the background, evoking a vibrant, retro comic book feel.',
    postUrl: 'https://www.facebook.com/54618571998_1114120410717051',
    totalEngagement: 2831,
  },
  {
    message: 'time for cartoons',
    id: '54618571998_931903665605394',
    publishTime: '2024-03-16T13:03:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/432445006_928079529321141_6575191948556837797_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HGI1f5opa6gQ7kNvgFtLhIM&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A1Cltn3twGkGm6VFwILAtl1&oh=00_AYBroW_Q3T6MjYi_gXHglw1bws1zc8BPPXcpYPIzUEpDyg&oe=679DDBC9',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image depicts an animated scene with a superhero dog in a red suit and blue cape, holding a villainous wolf-like character by the scruff of his neck. The superhero appears confident and assertive, while the wolf character is wearing a blue-striped suit and looks disgruntled. The background features simple cloud illustrations.',
  },
  {
    message: 'Celebrating Christmas Over the Years thru Comics',
    id: '54618571998_1141590694636689',
    publishTime: '2024-12-21T16:45:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/470227653_1136476905148068_6570493453743001402_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2WGfZyC6ehQQ7kNvgGqz8gQ&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AMt5zrzWPVaUs38QfKz3F1R&oh=00_AYAye3qI25qZ4gNJ6MKcTrzabdvlkBT11dw1LEKLt8GaFA&oe=679DE302',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is a comic book cover featuring Batman and Robin with Santa Claus. They are assisting Santa in carrying a large sack of gifts. The cover has festive elements with the text "Season\'s Greetings from Batman and Robin." The title "Batman" is prominently displayed at the top, indicating it\'s issue No. 27, priced at ten cents.',
  },
  {
    message:
      'Classic Comic - X-Men #14 (1965) - 1st Appearance of the Sentinels. Jack Kirby Cover',
    id: '54618571998_749804037148692',
    publishTime: '2023-06-27T15:10:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/355891565_749564907172605_1269463869573566402_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=f-_puvgS8hYQ7kNvgFp9yET&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ASXWjd5_HguOydGi6Cp1YcZ&oh=00_AYA0theORPZDdb9HAkMWNd0swd7kJJQYlgeo-rh9rz77og&oe=679DDE80',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'This is the cover of "The X-Men" comic issue #14 from November, featuring the team battling a Sentinel robot. The cover depicts the X-Men, including Professor Xavier, in action against the massive robot with the headline "Among Us Stalk... The Sentinels!"',
  },
  {
    shares: 389,
    reactions: 2418,
    message:
      'Classic comic - Detective Comics #33 (1939) - Origin of Batman. 1st Thomas and Martha Wayne and Joe Chill. Batman wears a gun holster on the cover. 4th Batman cover',
    id: '54618571998_627987282663702',
    comments: 11,
    publishTime: '2023-01-25T16:19:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/327444548_984629955835528_7600716866067976488_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=25c-GdUMvdkQ7kNvgEzfdaj&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Alupxj5DpbCH-SJ9oxPO6Md&oh=00_AYBl66oD1rkg0NQ5CajBPcJ8LYW_tKiSRi4M1WOM_B6oig&oe=679DE5FC',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a cover of "Detective Comics" No. 33 from November 1939. It features Batman leaping over a car with two passengers inside. The background includes a bridge and cityscape. The cover price is 10 cents.',
    postUrl: 'https://www.facebook.com/54618571998_627987282663702',
    totalEngagement: 2818,
  },
  {
    shares: 173,
    reactions: 2531,
    message: 'by Curt Swan',
    id: '54618571998_1111263564336069',
    comments: 113,
    publishTime: '2024-11-12T22:25:06+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/466362319_1110804154382010_6368157239069510527_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-zV85PGyHJkQ7kNvgG3yUqR&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AWiLMMO5XVPgpTX6RC14Hak&oh=00_AYAgaL0-He7Zr2Ha4zw780_H-lRNtrfOuphBdGH2Hp1Sfw&oe=679DD3AB',
    status: 'PUBLISHED',
    imageDescription:
      'The image depicts "The Superman Family," featuring various characters associated with Superman from DC Comics. Central figures include Superman and Supergirl in their iconic costumes. Surrounding them are characters such as Lois Lane, Jimmy Olsen, and others, including super-animals like Krypto. The background includes additional family elements and characters, symbolizing the extended superhero family. The style is classic comic book art.',
    postUrl: 'https://www.facebook.com/54618571998_1111263564336069',
    totalEngagement: 2817,
  },
  {
    message:
      'Classic Comic - Action Comics #113 (1947) - Superman Just an Ordinary guy .Cover by Wayne Boring',
    id: '54618571998_799760062153089',
    publishTime: '2023-09-07T20:23:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/376492201_799654195497009_8506545138635550159_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Op7puxgS_zYQ7kNvgHJh01S&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYCxppFosc4R72rqr_7kzr3wTP05QelZ4QLsJwQZwE6ftA&oe=679DD1F3',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image is a cover of "Action Comics" No. 113 from October 1947, priced at ten cents. It features Superman struggling to lift a barbell labeled "50," surrounded by onlookers. The cover text questions what happens to Superman\'s super-strength when he becomes "just an ordinary guy."',
  },
  {
    message: 'Death of Green Goblin - Amazing Spider-Man #122 by Gil Kane',
    id: '54618571998_800316308764131',
    publishTime: '2023-09-08T16:13:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/376663193_800010782128017_2595047177346866203_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gfrSNg2VkvYQ7kNvgHATVRS&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYAFTwyp8p6eKmjWhuT1rY11BP1B7VrpoSWBBkSmAERyMA&oe=679DD1F9',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is a three-panel comic depicting a green-skinned, purple-clad figure being struck by arrows, with smoke coming from the shaft. The text emphasizes themes of pride and humility: "So do the proud men die... crucified, not on a cross of gold, but on a stake of humble tin."',
  },
  {
    message: 'The thing Pin up by Jack Kirby',
    id: '54618571998_612066040922493',
    publishTime: '2023-01-06T17:22:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/324234541_1252704671985030_8514241406205733366_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tC8BfV261lgQ7kNvgF8PyFU&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ANEcB3dbg9ERQ64wxt3zug_&oh=00_AYAMkGBF0ebHL4CU65DnpHDIYPKuc0PfXLgmqidc_tKFrQ&oe=679DD31A',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a vintage comic book page featuring "The Thing" from the Fantastic Four. It showcases a muscular, rock-skinned creature wielding a weight with one hand. A portrait of Ben Grimm is shown in the top left corner. The text highlights "The Thing" as "the strongest man-like creature on the face of the earth" and promotes future pin-up features.',
  },
  {
    message:
      'Classic Comic - Batman #113  (1958) - The Menace of "False Face\' and the Super-Batman of Planet X. Cover by Sheldon Moldoff',
    id: '54618571998_717442130384883',
    publishTime: '2023-05-15T19:26:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/346090373_1590255028149114_2691538358649480952_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5hTcVt07xkUQ7kNvgEmE7ce&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AvTk5bmSziIvFA13hRBimly&oh=00_AYDM4wn7MCmcOjTIDjACoBO_sLSdKY6_iAV0nZBBrDOjAg&oe=679DE077',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image is a vintage comic book cover featuring Batman as "Super-Batman of Planet X." Batman is depicted flying, dodging attacks from alien figures with ray guns. The cover prominently features the title "Batman" at the top, with bright, colorful geometric backgrounds enhancing the dynamic action scene.',
  },
  {
    message: '',
    id: '54618571998_754276176701478',
    publishTime: '2023-07-03T16:09:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/357058004_753972516731844_2332642647765635400_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=O_lC4hRO5uUQ7kNvgGRTcI9&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AS1qGJsq0Z9ZgV8qfukSk_U&oh=00_AYBeBh17QomCF9SwNcxEmGRbPs-nfvLg6xtxMhpGNNeO0Q&oe=679DF036',
    status: 'SCHEDULED',
    imageDescription:
      'A plate of cookies decorated like Captain America\'s shield, with text saying, "Remember to leave milk and cookies out for Captain America tonight."',
  },
  {
    message:
      'CLASSIC COMIC - Batman #180  (1966) - 1 of my all time favorite Silver age covers.. Cover by Gil Kane and Murphy Anderson',
    id: '54618571998_814354444026984',
    publishTime: '2023-09-28T20:33:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/384795274_814324680696627_209846986812128630_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BQ8qCq-5ZiEQ7kNvgGlaiBw&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A_vnmMIHG0AfcC5NFksZQ5j&oh=00_AYClcRixzVRYpg69Z9EPwNatWSBjPG_ZZAtGfEnAv4qG3w&oe=679DF0AC',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a classic Batman comic book cover. It features Batman and Robin struggling with a villain dressed as a skeletal figure. The cover\'s dramatic title reads "Death Knocks Three Times!" A speech bubble from the villain says, "I\'ll be the death of you yet, Batman and Robin!" In the background, there\'s a tombstone inscribed with "R.I.P. Batman and Robin." The artwork is vibrant and action-packed.',
  },
  {
    message:
      'Classic Comic - Fantastic Four #76 (1968) - Silver Surfer and Galactus appearance.. Cover and art by Jack Kirby and Joe Sinnott',
    id: '54618571998_796381955824233',
    publishTime: '2023-09-02T18:59:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/374929123_796284012500694_629855577664050495_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=KELO5IcRcsAQ7kNvgHFQnv2&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYAkS9meD-g3FfIyOwAz5qAl7h6Z8DpaOCIH4a8ja1VXFw&oe=679DEED4',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is the cover of "Fantastic Four" comic issue #76 from July, featuring the tagline "Stranded in Sub-Atomica!" It depicts a dramatic scene with characters from the team confronting a large adversary. The cover is colorful, highlighting action and conflict typical of superhero comics.',
  },
  {
    message:
      'Classic Comic - Fantastic Four #33 (1964) - 1st appearance of Attuma. Sub-Mariner appears and issue includes a Subby pin-up',
    id: '54618571998_605578944904536',
    publishTime: '2022-12-29T18:19:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/322540775_454941529999600_6393079570352808917_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Z9EoJkUincUQ7kNvgE74e-J&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDxNigojbm3udtT9aeWKst&oh=00_AYAyl-dj6MoiRvZzUuLIqNGF_vlzliY4H8gCAR0GJFSTKA&oe=679DE6E2',
    status: 'SCHEDULED',
    imageDescription:
      'This is a comic book cover of "Fantastic Four" issue 33 from Marvel Comics, featuring the team and the Sub-Mariner in a dynamic underwater battle scene. The tagline reads "On the Side of.. Sub-Mariner!" with a price of 12 cents, indicating it\'s an older issue.',
  },
  {
    message: 'Spider-Man and His Amazing Friends, 1981-1983',
    id: '54618571998_1098493165613109',
    publishTime: '2024-10-27T20:15:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/464571479_1097992368996522_1824821277224825339_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AxuJ2FJF8VEQ7kNvgEJ3Htl&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad6wxUoh2wk8IsbdMQixRCG&oh=00_AYBOEF-gbug6i4syvQFmDAjZ7NQ_5Fl0X_y4fohaxgt3Xw&oe=679DEAB7',
    status: 'SCHEDULED',
    imageDescription:
      'The image features a group of comic book superheroes standing together. The characters include individuals in distinctive costumes, featuring bright colors like red, blue, and yellow, as well as a character in a wheelchair. They are drawn in a classic comic book style.',
  },
  {
    message: '',
    id: '54618571998_714297607366002',
    publishTime: '2023-05-11T13:07:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/345581416_997766221162173_5419583449139364951_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gZCd8PK9q8oQ7kNvgGt0LFR&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AvTk5bmSziIvFA13hRBimly&oh=00_AYA7q8ShBbzGSaGXIldCwJm4cEQ7OqHwLz84hyDdAPonNA&oe=679DC88C',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A woman dressed as a superhero, wearing a bat-themed costume, is riding a motorcycle with bat-themed detailing. The image is in black and white.',
  },
  {
    message:
      "Classic Comic - JUSTICE LEAGUE #3 (1987) (Alternate Cover / Variant Logo). Great comic from the 1980's series with cover art by Kevin Maguire. It was always believed only 1500 copies of this and the other Variant (Fury of Firestorm # 61) were ever made. This was a test to see reaction to the Superman Logo",
    id: '54618571998_780608537401575',
    publishTime: '2023-08-09T20:11:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/366318766_780104680785294_3051444019821289318_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EbWH_ujHvqMQ7kNvgGAWIxC&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFmhw3kNsmh72LjrMEnX1-g&oh=00_AYBg5GFJUrtnC1Kq6WwdHKCM1hPbQjS3bYRx1U3ayyP9gg&oe=679DD1F2',
    status: 'SCHEDULED',
    imageDescription:
      'This is the cover of "Justice League #3" from DC Comics, dated July 1987. It shows Captain Marvel rushing to help Batman, who is held back by Soviet characters. The cover features speech bubbles indicating urgency and a nuclear threat, and it is graded 9.6 by CGC.',
  },
  {
    message: '',
    id: '54618571998_10158834891611999',
    publishTime: '2021-04-06T19:42:00+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t1.6435-9/170022481_10158834891141999_4515441079169971227_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0jWkDWxBYNMQ7kNvgEuv1QU&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AznWKKcyUvTB23EFe2RVM0D&oh=00_AYBk0WPhKWoV0_gkUAthLINjCaCd2j2UpyICTmuSi96tkw&oe=67BF89F7',
    status: 'SCHEDULED',
    imageDescription:
      'The image humorously suggests a game called "Shatner," where someone yells "SHATNER," prompting you to overact whatever you were doing at the moment. It features a character in a dramatic pose, emphasizing the theme of overacting.',
  },
  {
    message:
      'Classic Comic - X-Men #1 (1963) - 1st appearance of the X-Men and Magneto by Stan Lee and Jack Kirby',
    id: '54618571998_696886802440416',
    publishTime: '2023-04-18T17:12:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/341176887_1414381722438257_7066037682594177579_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BYz_Jx1kENkQ7kNvgExGzGg&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A7jDnAwd5xQtUEgw6tdzuym&oh=00_AYCwybrpgjEUJ2BMp_G3hH602eVJ8dVjWybfOuWQ_at1dg&oe=679DD670',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image shows the cover of "X-Men" issue #1, published by Marvel Comics. It features several superheroes in yellow and black costumes battling a menacing figure in red. The cover text highlights it as the first issue, emphasizing the group\'s unique attributes.',
  },
  {
    message:
      'Classic Comic - Adventure Comics #137 (1949) -  Superboy Cover & Story. Aquaman, Green Arrow & Johnny Quick Stories. Cover by George Roussos',
    id: '54618571998_801858958609866',
    publishTime: '2023-09-10T20:47:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/376269636_801336788662083_7512720507726976643_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=u-McWnfbliMQ7kNvgEseAzk&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AeuYoz_Z6s18yKB-UbYSALw&oh=00_AYATT9OXjYE7jrFbH88k_btcYPfUqfFHf52xACeXKg0YBg&oe=679DEBC8',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a comic book cover titled "Adventure Comics No. 137." It features Superboy standing confidently amidst a pile of bullets while being surrounded by armed men. The caption promotes the story "The Treasure of Tondimo." The cover suggests an action-packed adventure.',
  },
  {
    message:
      'Classic Comic - Amazing Spider-Man #26 (1965) - Green Goblin cover and appears. 1st Patch and Crime Master. Cover and art by Steve Ditko',
    id: '54618571998_780514547410974',
    publishTime: '2023-08-09T17:29:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/366827967_780492490746513_1390456653398783667_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pSBPbIxAIpcQ7kNvgGNHD61&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFmhw3kNsmh72LjrMEnX1-g&oh=00_AYDjaJp4JnWwXPHyEvqpgAVIG_0tpM39_bghBLQjcbIWNA&oe=679DE958',
    status: 'SCHEDULED',
    imageDescription:
      'The comic book cover features "The Amazing Spider-Man" issue #26. Spider-Man is entangled in yellow smoke fighting a masked man with a gun on a rooftop. A green goblin-like character is in the background. The title reads \u201cThe Man in the Crime-Master\u2019s Mask!\u201d',
  },
  {
    message:
      'Classic Comic - Magnus Robot Fighter #1 (1963) - 1st appearance and Origin of Magnus Robot Fighter. 1st appearance of the Aliens. Russ Manning story, cover and art',
    id: '54618571998_1007528748042885',
    publishTime: '2024-06-29T22:18:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/449220602_1005543664908060_2685496651582851751_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JvXgwhwxDmQQ7kNvgGBAA8k&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=At5yRUrE1dOeKPW1dZAKGsG&oh=00_AYA-1E0SbgJS_y8pEbRU4DtFnzYMxi9kOkqlW1ef0oloaw&oe=679DCA25',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a comic book cover for "Magnus, Robot Fighter 4000 A.D." published by Gold Key. It features a dynamic scene with a heroic figure named Magnus in a red outfit fighting a large robot. In the background, there\'s a woman crouching and additional robots, with a futuristic city setting. Text on the cover mentions Magnus fighting evil robots who rule over humans.',
  },
  {
    message: 'This would also make a great Christmas presemt',
    id: '54618571998_10152023341131999',
    publishTime: '2013-12-06T05:54:55+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/468146170_10161766782171999_8716934242629125367_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=gHBhOhn3dFgQ7kNvgGZumgh&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AGG52BA_W30qiEYKWzf-LYW&oh=00_AYCDU28jRecH-EZSqM3JplwpMXbJg3OVxtyyQgDI85mQVQ&oe=679DF943',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image features a black coffee table with a glossy finish, showcasing the Batman logo prominently in yellow. It includes two rectangular glass sections on the top surface and has a storage compartment with door handles shaped like the Batman logo.',
  },
  {
    shares: 288,
    reactions: 2369,
    message: 'From 80-Page Giant #4 (October 1964) art by Carmine Infantino',
    id: '54618571998_663115065817590',
    comments: 104,
    publishTime: '2023-03-06T19:17:09+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/330991167_1143723119513838_1074365789628669515_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0b4pdgZs9PkQ7kNvgHCJFvi&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYBS2lf_u4aQm8t695fDkxtQ8Ljl_4M2G-lOPwWf7sU1qg&oe=679DF573',
    status: 'PUBLISHED',
    imageDescription:
      'The image depicts a comic book illustration titled "Flash\'s Rogues\' Gallery." It features a group of supervillains, each with distinctive costumes, standing in three rows. The banner overhead reads "Flash\'s Rogues\' Gallery," and the characters include names like Captain Boomerang, Pied Piper, Captain Cold, Mr. Element, and others, with Super-Gorilla Grodd in the back row.',
    postUrl: 'https://www.facebook.com/54618571998_663115065817590',
    totalEngagement: 2761,
  },
  {
    message:
      'Classic Comic - Avengers #187  (1979) - Modred appears. Beautiful cover by John Byrne and Terry Austin',
    id: '54618571998_1129312625864496',
    publishTime: '2024-12-05T21:25:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/468821635_1128781392584286_6232906835031078930_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Jq-4c3-vENUQ7kNvgHxYNOW&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A3nqXxoEtaEELna7Wo7ba1V&oh=00_AYCDG_mYM3E9MMmgdoDN0TWE79rkx2I0TwkWHFe7svo76w&oe=679DC4BD',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a comic book cover for "The Avengers" from Marvel Comics Group, issue #187. It features several superheroes held upside down by a powerful female character in red with dark hair and a cape. The cover text refers to "Earth\'s Mightiest Heroes" and mentions characters like Captain America and Ms. Marvel. The scene is titled "The Witch on Wundagor Mountain."',
  },
  {
    message:
      'Classic Comic - Incredible Hulk Annual #1 (1968) - Iconic cover by Jim Steranko and Marie Severin .  Inhumans appear',
    id: '54618571998_613658344096596',
    publishTime: '2023-01-08T20:03:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/323870952_1136740230365360_1990746810699014568_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Rj1D7FSPHQgQ7kNvgFmBnct&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ANEcB3dbg9ERQ64wxt3zug_&oh=00_AYC4m3vzIMIJQtGMtxhc1kv-m88h8M3ZB8nevoO08Us6DQ&oe=679DE3F5',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic book cover titled "The Incredible Hulk" King-Size Special #1. The cover features a dynamic illustration of the Hulk in a crouching position, set against a fiery background. Text on the cover announces "Hulk Battles the Inhumans" and highlights the increased page content with "Twice as many pages! Twice as many thrills!"',
  },
  {
    message: 'really need that time machine',
    id: '54618571998_627899919339105',
    publishTime: '2023-01-25T14:22:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/327171525_578348673781632_161786119802690727_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=n7By17z5i2MQ7kNvgGEGlM-&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Alupxj5DpbCH-SJ9oxPO6Md&oh=00_AYDSE02cH0GD9Us7NlSrRdU09LZLNBkXiYz8XDnUm35nkQ&oe=679DFCDF',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image shows a vintage comic book store display with numerous comics arranged on angled shelves. Various titles and genres are visible, creating a dense and colorful montage of covers.',
  },
  {
    shares: 119,
    reactions: 2561,
    message:
      'Classic Comic - Fantastic Four #73  (1968) - Spider-Man , Daredevil and Thor appear. Story continued from Daredevil #38. Jack Kirby and Joe Sinnott Cover and Art',
    id: '54618571998_1060107019451724',
    comments: 68,
    publishTime: '2024-09-10T21:31:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/459090239_1060041416124951_3588022469493699729_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_wk2rNtNjsQQ7kNvgFDFjcY&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AhpBms0SgBWJP0JvlmimRHv&oh=00_AYDFNYFT4hkb48alCq7jUfyHhj4FiRdOLPb4d-DOB0H1Bw&oe=679DE2E2',
    status: 'PUBLISHED',
    imageDescription:
      'This is the cover of "Fantastic Four" issue #73, featuring a "Giant Guest Star Bonanza!" It includes superheroes Like Daredevil, Thor, and Spider-Man engaging in dynamic action. The cover price is 12 cents and it is part of Marvel Comics Group, released in April. The art style is vibrant and bold, typical of classic comic aesthetics.',
    postUrl: 'https://www.facebook.com/54618571998_1060107019451724',
    totalEngagement: 2748,
  },
  {
    shares: 118,
    reactions: 2587,
    message: 'X-Men Special Edition #1 cover art by Dave Cockrum, 1982.',
    id: '54618571998_888474399948321',
    comments: 41,
    publishTime: '2024-01-14T21:49:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/419673475_887981646664263_7355652235873596242_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aTUmgH5-kywQ7kNvgE6HdP3&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AnI2vm1qwoJyPrblQR7BRtx&oh=00_AYB7VZH-38w2kSRCQJgKZYKt7kB87HcpFtE_3IjHMXmtPA&oe=679DF4CA',
    status: 'PUBLISHED',
    imageDescription:
      'This is a vintage comic book cover titled "Special Edition X-Men" by Marvel Comics. It features multiple X-Men characters in dynamic action poses, with a large green monster in the background. The cover also promotes a story about the "Secrets of the X-Mansion" and additional new pages by Claremont and Cockrum.',
    postUrl: 'https://www.facebook.com/54618571998_888474399948321',
    totalEngagement: 2746,
  },
  {
    message:
      'Classic Comic - Detective #475 (1978) - Joker cover and story . Cover and art by Marshal Rogers and Terry Austin.  Loved this series by Rogers',
    id: '54618571998_788779353251160',
    publishTime: '2023-08-21T20:58:53+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/368261437_788774773251618_5318477812888714481_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bEqD0qVZ9QQQ7kNvgEbxTvL&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYDOIM5-YN3CPKxOP7wvUdxnaegARYA6WFj6keXwldP5QA&oe=679DCE7C',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a cover of "Batman\u2019s Detective Comics" featuring Batman facing off against the Joker. The Joker is holding fish with his face on them, and there\'s a clock in the background. A text bubble next to the Joker says, "Hands up, Batman! I\'ve got you covered!" The cover asks, "What is the secret of the Joker\'s new weapon \u2013 the laughing fish?"',
  },
  {
    message:
      'Classic Comic - Batman #7 (1941) - Iconic Bullseye cover. Joker Story. Batman starts working the Police in this issue. Ad for Star Spangled Comics #1. Bill Finger story. Kane, Jerry Robinson and George Roussos art. Bob Kane Cover',
    id: '54618571998_876549984474096',
    publishTime: '2023-12-28T16:10:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/415194440_876276097834818_1232522081178462627_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OX9DnX-mFqUQ7kNvgE4a2kp&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AUTqRmWWQpOaWM27__8mqtj&oh=00_AYAaAurHy5HP389tFU6Pg6racUgqSjyiAat8Z03aL-IgKg&oe=679DC33F',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This image is a vintage comic book cover featuring Batman and Robin. They are fighting a criminal, with Batman delivering a punch and Robin assisting. The title "BATMAN" is prominently displayed at the top, with a heading that reads "The Winning Team!" The cover is marked as issue No. 7 and is priced at 10 cents.',
  },
  {
    message: 'Jack Kirby and friends',
    id: '54618571998_664763375652759',
    publishTime: '2023-03-08T17:17:32+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/334077714_753722599745203_5924658468946847289_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=z5qTt2tvZa8Q7kNvgGdZVEh&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AxjXGRI5F_kLVcGnmbzoU2h&oh=00_AYD_VACZgt6Ogltwyi-4AY0HPttKUFQnG5OyP5tLv8eClQ&oe=679DF215',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image depicts a comic book artist at a drawing board surrounded by various iconic superheroes. These characters are bursting from the page, symbolizing their creation through art. The scene is vibrant and dynamic, capturing the essence of comic book storytelling.',
  },
  {
    message: 'From Captain America #112 by Jack "The King" Kirby',
    id: '54618571998_831836412278787',
    publishTime: '2023-10-23T16:11:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/394596446_831445775651184_5679735203436833459_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Okot7FtGOoYQ7kNvgEb9j6P&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AvEhpGDi1HQFkGgpMJudFl6&oh=00_AYClooEdOIQuasSdpQVXF_XruJfQIIV461GQuTMS81YWGA&oe=679DF163',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image is a dynamic comic book panel featuring a superhero in a blue costume with a star emblem on the chest and wielding a shield emblazoned with a star. The hero is in an action pose, charging forward in an urban environment with explosions and a helicopter in the background. The text reads, "And so, the legend lived again!"',
  },
  {
    message: 'By Brian Bolland',
    id: '54618571998_771379814991114',
    publishTime: '2023-07-27T16:31:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/363824958_771277201668042_1533515893908703013_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JtSPYk8Yac4Q7kNvgELhjHC&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AxJt4ThoRXUxba1szmG7ZRv&oh=00_AYCleZC2EntTJcM6bADgAMqSVy6WYFX9hynaS8gckfoSJQ&oe=679DE4CA',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image depicts the Joker holding a comic book titled "Batman: The Killing Joke" with Batman in the background perched on a rooftop, silhouetted against the bat signal in the sky. The Joker is grinning widely, dressed in his iconic suit, and holding a Joker card.',
  },
  {
    message: 'Superman Original art by Joe Shuster - Co Creator of Superman',
    id: '54618571998_1124611643001261',
    publishTime: '2024-11-29T22:27:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/468401489_1124115559717536_4872115433013485986_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-OjaGdGR2d8Q7kNvgGFPN1T&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AGCaRt6IitcQ7-yAsV12fL4&oh=00_AYDeQs0JbaqaGI2vUJ-l_q5s2c6j75lrYQxm-iKwZUeAWA&oe=679DC276',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image is a black and white sketch of a superhero in flight. The character has a muscular build, wearing a cape and a costume with a prominent "S" emblem on the chest, with one arm raised.',
  },
  {
    shares: 354,
    reactions: 2321,
    message:
      'Classic Comic - Avengers #25 (1966) - Enter Dr Doom. Fantastic Four also appear. Cover by Jack Kirby and Dick Ayers',
    id: '54618571998_604841394978291',
    comments: 43,
    publishTime: '2022-12-28T20:21:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/322633567_480518954201289_2393721381096776921_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gbN62y1lFC8Q7kNvgEOFluK&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDxNigojbm3udtT9aeWKst&oh=00_AYAP6IAVamcd7Jbd2MbckXI00d3B2y1ClKBqcs0uYtFmWQ&oe=679DEC64',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vintage comic book cover for "The Avengers" featuring the text "Enter... Dr. Doom." It shows several superheroes, including one with a shield, facing a large figure in armor and a green cloak. The bottom text mentions a guest appearance by "The Fantastic Four." The comic is priced at 12 cents.',
    postUrl: 'https://www.facebook.com/54618571998_604841394978291',
    totalEngagement: 2718,
  },
  {
    message:
      'Classic Comic - Superman #14 (1942) - Iconic Patriotic Cover. One of the most Famous Superman Covers of all time! Cover by Fred Ray. Stories by Jerry Siegel',
    id: '54618571998_649124180550012',
    publishTime: '2023-02-17T18:21:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/332001386_536407021806070_6941017177229751661_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=98p6LuQg0e8Q7kNvgGueiL8&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYDi2u1mQtLbkVMK4LV65nIoj4q3cA5PZwuFV9I0d4Z8kA&oe=679DFBF8',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      "This image is a vintage comic book cover featuring Superman standing confidently with an American bald eagle on his arm. The background includes stars and stripes, symbolizing the American flag. The cover indicates it's issue No. 14, priced at 10 cents, published by DC.",
  },
  {
    message:
      'Classic Comic - Amazing Spider-Man #2 (1963) - 1st appearance of the Vulture. 1st appearance of the Terrible Tinkerer. Cover and art by Steve Ditko',
    id: '54618571998_714368754025554',
    publishTime: '2023-05-11T15:11:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/345570354_3390398617940125_3765911010741685981_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3hVw-W4r9TwQ7kNvgEUFO6m&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AvTk5bmSziIvFA13hRBimly&oh=00_AYATCSPvvBImAyeyMNq56gQTxcZf62Abd33u5A_hZIHUsg&oe=679DEB6F',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'This is the cover of "The Amazing Spider-Man" comic issue #2 from May, featuring Spider-Man battling the Vulture. The cover also teases a story with the villain "The Terrible Tinkerer." The price is 12 cents, and it displays the Comics Code Authority seal.',
  },
  {
    message: 'always our favorite - Julie Newmar',
    id: '54618571998_811974860931609',
    publishTime: '2023-09-25T13:11:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/380846271_810856807710081_5161118808560726114_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5LFhSfmkqsQQ7kNvgHnumsx&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AQ6uIXz3wArX-td61b3bq_j&oh=00_AYAYHX-X_ovezmW4S1Muv9KZWjxdSbSs33K7y9uf1bzEdw&oe=679DF4DE',
    status: 'SCHEDULED',
    imageDescription:
      'A woman in a dark, form-fitting outfit and gloves is leaning on a wooden structure, holding coiled rope. The setting is monochrome, suggesting it may be an older photo or designed stylistically to look vintage.',
  },
  {
    message: 'sketch by Superman Co Creator Joe Shuster',
    id: '54618571998_959941316134962',
    publishTime: '2024-04-24T18:09:05+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/439338826_959597356169358_6582953210402411491_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sNVsYGZE2B0Q7kNvgENUXOW&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ayhl-RshheSPztt9I5rbYoz&oh=00_AYC4gmmJLYFlJq7hFCEIY61fRUSCTIgpFylormKKPz5Ucg&oe=679DCCCE',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image is a pencil sketch of a superhero resembling Superman, characterized by a muscular build, a cape, and an "S" emblem on the chest. There is a handwritten note at the bottom, signed by Joe Shuster, indicating it is from the creator of Superman.',
  },
  {
    shares: 115,
    reactions: 2541,
    message:
      'Classic Comic - Space Family Robinson #1 (1962) - 1st appearance of Space Family Robinson. Painted cover by George Wilson',
    id: '54618571998_1097787249017034',
    comments: 49,
    publishTime: '2024-10-26T23:23:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/463974461_1097296929066066_3974780115196713192_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lewk1qcpQggQ7kNvgH7Y7qO&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad6wxUoh2wk8IsbdMQixRCG&oh=00_AYD4ee20lVKXnqExTjMqQNy5OycKyuRlR7HwQIePb-lRhg&oe=679DC024',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book cover titled "Space Family Robinson," published by Gold Key. It features two astronauts climbing on a rocky surface, with alien creatures approaching them. The tagline reads, "Creatures from other worlds peril the crew of Earth\'s first space station!"',
    postUrl: 'https://www.facebook.com/54618571998_1097787249017034',
    totalEngagement: 2705,
  },
  {
    message:
      'Classic Comic- Batman #11 (1942) - 1st Joker Cover in the Batman title. Joker and Penguin appearance. Cover by Fred Ray',
    id: '54618571998_613638097431954',
    publishTime: '2023-01-08T19:19:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/324187563_6005122372883045_5427525782700038276_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=S3M8c7m8FAMQ7kNvgGXSflp&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANEcB3dbg9ERQ64wxt3zug_&oh=00_AYDSVBR1TVi9_VH1HI7QhSsQ7oKUEkelJ9jTmbFcV0Y62w&oe=679DEE1A',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a vintage comic book cover of "Batman." It features Batman, Robin, and the Joker amidst a background of oversized playing cards. The title "BATMAN" is prominently displayed at the top, and the issue is number 11, priced at 10 cents, published in June-July by DC.',
  },
  {
    message: 'great memories',
    id: '54618571998_919651356830625',
    publishTime: '2024-02-27T14:02:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/428649267_917526773709750_3731605041749759270_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ARmc8t4Ynr8Q7kNvgEZSTio&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AMiFh2EetwMb3aS1X1CyXj0&oh=00_AYAKRimpRGb-sgG6zvunNtX0M3HrvzjA5x05GGs2BNhpjw&oe=679DD22B',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'A muscular man with wild hair poses behind another man, playfully putting his arm around his neck. The scene is in black and white.',
  },
  {
    message:
      'Batman #129 (1960 ) - Origin of Robin retold. 1st appearance of the Spinner. Bondage cover. Batwoman appears. Cover  by Sheldon Moldoff',
    id: '54618571998_808942314568197',
    publishTime: '2023-09-20T22:16:16+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/380927716_808942214568207_2352608350227658429_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DTKOhZ9uEU4Q7kNvgHTPyBz&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AQ6uIXz3wArX-td61b3bq_j&oh=00_AYDJ__VfSGxYF6GLysaeBnVAiaSS0hYhqCiphvQLxMVdqA&oe=679DD949',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'This is the cover of "Batman" comic issue No. 129, featuring "The Web of the Spinner!" Batman and Robin are shown confronting a villain who threatens to turn on a fan that will endanger Batwoman, who is trapped in a spinning web-like contraption. The villain stands by a control panel. The cover has a suspenseful and dramatic theme typical of vintage comics.',
  },
  {
    message:
      'Classic Comic - Masters of the Universe #1 (1982) - 1st Full comic devoted to He-Man and the Masters of the Universe',
    id: '54618571998_1098551788940580',
    publishTime: '2024-10-27T22:09:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/464820720_1098011542327938_8894901021331836641_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=w2PvTDyzkKMQ7kNvgGDY_Q4&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad6wxUoh2wk8IsbdMQixRCG&oh=00_AYCAdGJB2GGTL3v1ErzATTaRFL3HoiwdvmVui6qJxcfP0g&oe=679DDDF6',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a comic book cover titled "Masters of the Universe," featuring a muscular hero in the center, holding weapons and surrounded by action and fantastical characters. The background includes dramatic elements like a castle and skies. It is marked as issue #1 and priced at 60 cents.',
  },
  {
    message: 'from Captain America #112 by Jack Kirby',
    id: '54618571998_928678995927861',
    publishTime: '2024-03-11T18:11:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/431316156_926471289481965_5734934014648471655_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GVgN6znMKPgQ7kNvgF8UQux&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANKEXX0ECxPXGcj1EQ1GtNe&oh=00_AYATRkSPzL15S3lPPNs0iPKqsdw453Iategz1D_iqNg_tQ&oe=679DD15D',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a comic book panel featuring a superhero dressed in patriotic attire, equipped with a shield, engaged in action amidst a cityscape. Explosions, flying vehicles, and lasers fill the dynamic scene. The text states, "AND SO, A LEGEND LIVED AGAIN!"',
  },
  {
    message:
      'Classic Comic - Wolverine #1 (1982) - 1st Wolverine solo comic book; Classic Frank Miller cover and art; 1st Yukio',
    id: '54618571998_732720872190342',
    publishTime: '2023-06-04T20:38:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/352183323_986580249444309_2679765196094737270_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=l-RWpxFCex0Q7kNvgHGZi6R&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDWRC2mfkXFbh8H3P2JVBd&oh=00_AYCb97rRh0BMRdilVDlaACFn5BJqbO6oofuLl5mRD5kxRg&oe=679DE679',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image is a comic book cover of "Wolverine #1" from Marvel Comics. It features Wolverine prominently, showing his claws and wearing a menacing grin. The background is a gradient of red to yellow, highlighting the character.',
  },
  {
    shares: 321,
    reactions: 2347,
    message:
      'Classic Comic- Action #63 (1943) - Superman Loses his memory story. Amazing WW 2 cover by Jack Burnley',
    id: '54618571998_631841688944928',
    comments: 16,
    publishTime: '2023-01-29T21:25:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/327109412_1622759891488067_3006318424201060933_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=86XSipLls0sQ7kNvgH28lcZ&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Alupxj5DpbCH-SJ9oxPO6Md&oh=00_AYAXGNJTbgkyRui7A_nPBSjJ_RtRA0_KhmLM8LWegpeWTQ&oe=679DF103',
    status: 'PUBLISHED',
    imageDescription:
      'The image is the cover of Action Comics No. 63. It features Superman intercepting and punching a fighter jet mid-flight over water, with a pilot depicted inside the cockpit. The background is bright yellow, highlighting the action. The issue is priced at ten cents.',
    postUrl: 'https://www.facebook.com/54618571998_631841688944928',
    totalEngagement: 2684,
  },
  {
    message: 'some of the legends in comics art by Thomas Key.',
    id: '54618571998_952213386907755',
    publishTime: '2024-04-13T18:12:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/437755184_951828393612921_3539875932868338301_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ciwlao0tAeUQ7kNvgFCywRY&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AgWySNYoCQdWM2hsmdj80hA&oh=00_AYAwt4UBScsFS85Lbnlf-wBUeu7pfwHTkq9YzWmW9ltKgw&oe=679DF4DE',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a grid of black-and-white portrait illustrations featuring nine notable comic book artists, each depicted with a character or artwork they are known for. The names include Curt Swan, John Romita, Neal Adams, John Buscema, Jim Aparo, Joe Kubert, Jack Kirby, Gil Kane, and Steve Ditko. Each portrait is accompanied by a sketch of a famous comic character.',
  },
  {
    shares: 179,
    reactions: 2452,
    message: 'by Kerry Callen',
    id: '54618571998_963387579123669',
    comments: 47,
    publishTime: '2024-04-29T16:11:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/440889738_963107379151689_7945708993419237318_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nI9wfnwz7hIQ7kNvgGcujGD&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A85M5KuolsBPj4E-57EiotJ&oh=00_AYAgU2aEFtWNm8n3B0g0BJ5zSJ2XA1QDoltYnOUhb_Nxlw&oe=679DDD73',
    status: 'PUBLISHED',
    imageDescription:
      'The comic titled "Super Antics #11" humorously depicts various superheroes using their capes in dramatic fashion, each boasting about their uniqueness. The scene features playful exchanges, with other characters teasingly imitating or mocking each other\'s iconic lines and poses. The conclusion shows one character using their speed, while another comments "lame," ending with superheroes expressing frustration.',
    postUrl: 'https://www.facebook.com/54618571998_963387579123669',
    totalEngagement: 2678,
  },
  {
    shares: 199,
    reactions: 2419,
    message: 'during filming of I Love Lucy',
    id: '54618571998_1113325300796562',
    comments: 57,
    publishTime: '2024-11-15T14:15:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/466625735_1112392300889862_6893926556855381333_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vF_Jtyw-FF0Q7kNvgHvePFy&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFT13vH4zv0T-yKWrS8kNws&oh=00_AYAodl0JV1QUh4CFg8_5rKRaaUkrAKoqcZHMDQuvsHTXfQ&oe=679DEBF4',
    status: 'PUBLISHED',
    imageDescription:
      'The image shows a person dressed as a superhero playfully holding a pie, preparing to throw it at another person who is crouching and smiling. The setting appears to be a theatrical or film set with a backdrop and stage elements.',
    postUrl: 'https://www.facebook.com/54618571998_1113325300796562',
    totalEngagement: 2675,
  },
  {
    message: 'Sometimes a super hero moonlights',
    id: '54618571998_814123547383407',
    publishTime: '2023-09-28T13:22:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/383839892_813996600729435_2356435176583576325_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4QY6u9sxmGEQ7kNvgGDpv9h&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A_vnmMIHG0AfcC5NFksZQ5j&oh=00_AYB5rJw6pLDFPzKhxT9ElW9Am2iYb4_l6MBn9Nf56aHHOQ&oe=679DD34B',
    status: 'SCHEDULED',
    imageDescription:
      'A person in a Superman costume is sitting at a desk, typing on a typewriter in an office setting with filing cabinets and papers in the background.',
  },
  {
    shares: 167,
    reactions: 2485,
    message:
      'Classic Comic - All Select #7 (1944) -  WW 2 Battle cover by Alex Schomburg',
    id: '54618571998_789234976538931',
    comments: 21,
    publishTime: '2023-08-22T15:12:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/369881517_788951739900588_7574778757459950780_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9Ac8PvF3x7UQ7kNvgFuWOij&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYD5ATWOwT6Qwrh1xVZA3iXmxL4Beyw5p863f6g1E37kkg&oe=679DE868',
    status: 'PUBLISHED',
    imageDescription:
      'The image is the cover of a comic book titled "All Select Comics #7." It features Captain America and another superhero in action. The scene depicts them fighting on a burning ship amidst an intense battle, filled with explosions and chaos.',
    postUrl: 'https://www.facebook.com/54618571998_789234976538931',
    totalEngagement: 2673,
  },
  {
    message:
      "Classic Comic - Batman #235 (1971) - Ra's Al Ghul and Talia appear. Robin Back up story. Neal Adams cover",
    id: '54618571998_882732507189177',
    publishTime: '2024-01-06T20:33:18+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/417776840_882732463855848_7674851541560066049_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=24Mty_xIKysQ7kNvgHr2USA&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Aq9BZLyejJs2C5ZtYhRhe9s&oh=00_AYA5UeBAVLwOfnoYq8iDLrejOa0BSJ-TlppsqaY_r8P52A&oe=679DC459',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image is a comic book cover for "Batman with Robin the Teen Wonder," issue number 235, from September. It features Batman partially submerged in water, with characters above him, including a woman holding a gun and lantern, and a figure with a gas mask and weapon. The cover highlights "The Sinister Return of the Daughter of the Demon" and includes the DC and Comics Code Authority logos.',
  },
  {
    message: 'Jack Kirby and ol blue eyes',
    id: '54618571998_853398510122577',
    publishTime: '2023-11-24T22:12:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/403992864_853344426794652_2731990617804192103_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NE-G1c7ZujEQ7kNvgHy4W27&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad1ff1s2cBGYM0_gvSA37EV&oh=00_AYBhm1qGDLQ6MV4oV1YrmXLYYAdilOVa9b_Y0cftIzOdIw&oe=679DE01B',
    status: 'SCHEDULED',
    imageDescription:
      'A man is drawing a large illustration of a rocky humanoid figure on an easel.',
  },
  {
    message:
      'Julie Newmar , simply amazing!\n\nalso check out her website, you will find some amazing photos of her career as well as her days as Catwoman\nhttps://julienewmar.com/',
    id: '54618571998_878154600980301',
    publishTime: '2023-12-31T01:46:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/415767277_877596081036153_7905560830600674002_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jFsoNFXI1lMQ7kNvgGXT1mY&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AUTqRmWWQpOaWM27__8mqtj&oh=00_AYCe1FroT29DXmwsyRUzAixDaMvJG1_dyXDjy-YOhrW9ng&oe=679DF5FB',
    status: 'SCHEDULED',
    imageDescription:
      'The image features a person in a shiny black cat costume, complete with cat ears, standing in an ornate room with elegant furniture and decor.',
  },
  {
    message: 'Julie Newmar my favorite Catwoman',
    id: '54618571998_939815178147576',
    publishTime: '2024-03-27T13:05:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/434185036_938628734932887_6140673125882315447_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=o0TH2CPdj04Q7kNvgEd-AJR&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A9vJEf3b3CAjZOCTfsxGoH2&oh=00_AYDdcAfl8LNh3WLqwFj2-7bUxFU83EOp-e-jGQxjWn3nsw&oe=679DDD6C',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image depicts a woman dressed in a black shiny outfit with cat ears, sitting on a platform while holding a white cat. The setting appears to be indoors with a curtained backdrop and a decorative chair in the background. The photo is in black and white.',
  },
  {
    message:
      'Superman meets Lucy (Jan 14, 1957)\nhttps://www.youtube.com/watch?v=OkwGo4GLEtc',
    id: '54618571998_669678275161269',
    publishTime: '2023-03-14T21:09:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/336282250_546039614299842_362591510637712727_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qQMNwAiq8NcQ7kNvgHXtFGe&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AxjXGRI5F_kLVcGnmbzoU2h&oh=00_AYCwtyA0LXRcsIFKujCHLYwze7xrQCi4mF2yHKbQc8n5nQ&oe=679DC91E',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'Two people are dressed in superhero costumes, complete with an "S" emblem similar to Superman\'s logo. One person is wearing a helmet and appears to be yawning or shouting, while the other stands smiling, leaning against a wall. The image is black and white.',
  },
  {
    message:
      'Classic Comic - Captain America #14 (1942) - Story by Stan Lee . Cover by Al Avison. Remember Pearl Harbor Issue',
    id: '54618571998_617609907034773',
    publishTime: '2023-01-13T16:14:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/325540224_732318628265201_6433508683449267161_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FtvfKfqQfHAQ7kNvgG8fwTi&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AEj86Fc0xlMaisai1dICqfl&oh=00_AYCQTWegdA6NQI3baydb-DjV0vfW53sR-pVZnWZ5irPwTQ&oe=679DE47F',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image is a vintage comic book cover for "Captain America," issue number 14. It features Captain America swinging on a rope, brandishing his shield, while fighting against a group of enemies wearing military uniforms and masks. The cover includes patriotic motifs and text highlighting additional stories within the issue, such as "The Imp" and "Secret Stamp." The date indicates May, and the price is ten cents.',
  },
  {
    message:
      'Classic Comic - Fantastic Four # 58 (1967) - Iconic Dr Doom cover. Dr Doom and Silver Surfer Appearances. Cover and art by Jack Kirby',
    id: '54618571998_639123321550098',
    publishTime: '2023-02-06T22:10:43+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/329386934_1271905473360855_5245560221145200953_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FT9J0tNPIKQQ7kNvgF4NWPO&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AOWK0IeDNMQbdSLHTr-neG3&oh=00_AYCiDxX4vGaZ-VBaE17jR_FRB8k6ujGQnFIxSHgkHzUycQ&oe=679DCB65',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is the cover of a Fantastic Four comic book, titled "The Dismal Dregs of Defeat!" It features the team members, looking defeated, with Doctor Doom prominently hovering above them. The classic Marvel Comics logo and comic price details are visible on the top left.',
  },
  {
    message:
      'Classic Comic - Fantastic Four #49 (1966) - 1st Cover with Silver Surfer & Galactus! 1st full Galactus appearance! Jack Kirby and Joe Sinnott cover and art',
    id: '54618571998_859814662814295',
    publishTime: '2023-12-04T18:15:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/406740497_856818756447219_8356734286403214646_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=U9cwQNYLO_MQ7kNvgE0qIyU&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AZzrPS-zIeddYgAHtM6T8Z1&oh=00_AYDQVAkwQXsid6hsso_iZdzn4trD2TbtDfZ5jTGBKyFlBg&oe=679DD1F0',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is the cover of "Fantastic Four" comic issue #49, featuring a dramatic scene with a large figure of Galactus looming over the heroes. The Silver Surfer is depicted in the center, with the Fantastic Four team (Mr. Fantastic, Invisible Woman, Human Torch, and The Thing) at the bottom, looking distressed. The cover text includes "If This Be Doomsday!" and is published by Marvel Comics.',
  },
  {
    shares: 188,
    reactions: 2349,
    message: 'Legion of Super Heroes by Curt Swan',
    id: '54618571998_718107740318322',
    comments: 111,
    publishTime: '2023-05-16T16:19:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/346982399_142329935421284_4453701836735694289_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pWnhNyexgBYQ7kNvgG4FX8Z&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AvTk5bmSziIvFA13hRBimly&oh=00_AYD7DEzr5zgP1dqLffBMq9oBq_BO_UiFF5qzseJ4XZIaUw&oe=679DD305',
    status: 'PUBLISHED',
    imageDescription:
      'The image features a group of comic book superheroes standing together, displaying various costumes and colors. One character is significantly larger than the others, and another is flying. They are in a city setting with tall buildings in the background.',
    postUrl: 'https://www.facebook.com/54618571998_718107740318322',
    totalEngagement: 2648,
  },
  {
    shares: 405,
    reactions: 2219,
    message:
      'Classic Comic - Green Lantern #21 (1963) -  1st Appearance and Origin of Doctor Polaris (Master of Magnetism) . This was published 3 months before Magneto appeared in X-Men #1. Cover by Gil Kane',
    id: '54618571998_636544348474662',
    comments: 21,
    publishTime: '2023-02-03T20:22:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/329066883_1598227560598946_2166863363394166170_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7FrmJKABZJsQ7kNvgFh6jvz&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AOWK0IeDNMQbdSLHTr-neG3&oh=00_AYCu1N6VPaN3BQGBuAGNZfgTJb6k4ytQY1TOGV783uO6Fg&oe=679DE838',
    status: 'PUBLISHED',
    imageDescription:
      'This is a vintage comic book cover titled "Green Lantern." It features the superhero in his green costume flying through the air while metallic objects, like beams and a bucket, are suspended with magnetic force. The tagline reads: "The Man Who Mastered Magnetism!"',
    postUrl: 'https://www.facebook.com/54618571998_636544348474662',
    totalEngagement: 2645,
  },
  {
    shares: 499,
    reactions: 2097,
    message:
      'Classic Comic - The Incredible Hulk #1 (1962) - 1st App & origin of the Hulk. 1st app of Rick Jones, Betty Ross and General Ross. By Stan Lee and Jack Kirby',
    id: '54618571998_601316408664123',
    comments: 42,
    publishTime: '2022-12-24T20:24:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/321721880_876087906840128_1661591934465286295_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Y9giip_OLyQQ7kNvgGPmAel&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDxNigojbm3udtT9aeWKst&oh=00_AYD3yVZL92rP2Qb_m2ILxbPGLUI1VZc7XeO7IbvrvrxAZg&oe=679DEB7E',
    status: 'PUBLISHED',
    imageDescription:
      'This is the cover of "The Incredible Hulk" issue #1 from May, featuring the Hulk in the background and a scientist in the foreground. The cover poses the question, \u201cIs he man or monster or is he both?\u201d and includes phrases like "The strangest man of all time!!" and "Fantasy as you like it!" It has a 12-cent price and is approved by the Comics Code Authority.',
    postUrl: 'https://www.facebook.com/54618571998_601316408664123',
    totalEngagement: 2638,
  },
  {
    message:
      'Classic Comic - Uncanny X-Men #164 (1982) - Carol Danvers becomes Binary. The Brood appear. Cover by Dave Cockrum and Bob Wiacek',
    id: '54618571998_913908354071592',
    publishTime: '2024-02-18T21:51:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/428606555_913808667414894_5788844567570390937_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Oeb0xK0ixoMQ7kNvgH2ta-S&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A5eIE02JisGgFv8ajLznD4-&oh=00_AYDSCatTjJzQ9ZDAhjHS1u9HlibY--ZSSH3Be903j5zUTA&oe=679DC15F',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic book cover for "The Uncanny X-Men" issue #164 from Marvel Comics. It features a central female character in a dramatic pose, emitting fiery energy. Other characters, including Storm and Cyclops, are positioned in action stances around her against a cosmic backdrop. The cover includes classic comic book elements like the Marvel Comics Group banner and pricing details.',
  },
  {
    message:
      "Classic Comic - Hulk # 131 (1970) - Iron Man Appearance. 1st Appearance of Jim Wilson, the Hulk's New Sidekick.. Cover by Herb Trimpe",
    id: '54618571998_886301563498938',
    publishTime: '2024-01-11T21:28:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/419370542_886150173514077_3043703554901373258_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=F8K-NNuf2IcQ7kNvgFBBQ5a&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AnI2vm1qwoJyPrblQR7BRtx&oh=00_AYBvfRSVc6b6fBap8qGnWNkRiCC54Ialrz0oPzAUnrgrUA&oe=679DCE5B',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is a comic book cover for "The Incredible Hulk" issue #131 by Marvel Comics. It features Iron Man standing over a pile of rubble with the Hulk seemingly unconscious underneath. The text reads "A Titan Stalks the Tenements!" Iron Man is saying, "Hold your fire, men! It\'s all over!" and another burst states "The Hulk is... dead!"',
  },
  {
    message: 'when TV shows were fun',
    id: '54618571998_958346189627808',
    publishTime: '2024-04-22T13:10:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/438712305_957422059720221_1281285331874055458_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4X41AMqePp8Q7kNvgFaoZyB&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ayhl-RshheSPztt9I5rbYoz&oh=00_AYA3OabotebazhaM4veqLeactxV9C8AN3vE8shlUqachIQ&oe=679DCE58',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image shows a person in a white lab coat holding a clipboard, next to a green-skinned muscular person wearing shorts, with a retro computer in the background.',
  },
  {
    message:
      'Classic Comic - Marvel Comics Presents #1 (1988) - 1st Appearances of KKallakku and Sapphire Styx. Walt Simonson Wolverine cover',
    id: '54618571998_758405916288504',
    publishTime: '2023-07-08T19:16:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/358428447_758393636289732_5528682101952692897_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0UAATAPwNwoQ7kNvgGFnzPR&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AuXIsvkg1_wDUFJ6cdv22t7&oh=00_AYCIVquOULwPM-bsOr92MKPW5y9-Ag_-40sV-TSGL8wTvw&oe=679DEE53',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic book cover titled "Marvel Comics Presents Wolverine." It features Wolverine, crouching with his claws extended, set against a dynamic backdrop with plants and stylized elements. The colors are bold, with purples, reds, and greens dominating the scene. The cover is marked with the price and publication date in the top left corner.',
  },
  {
    shares: 113,
    reactions: 2426,
    message: 'Margot Kidder, so missed',
    id: '54618571998_907329668062794',
    comments: 84,
    publishTime: '2024-02-09T15:15:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/426252853_906812368114524_8515059928471162925_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mMlp-mQPD1kQ7kNvgHZRY-x&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=APsNzbbfu_cdkD25yK7t850&oh=00_AYBoGX898qwUKo-0QDp54EQD8LwcGFe-rMa4jynhfHxf_A&oe=679DF5B5',
    status: 'PUBLISHED',
    imageDescription:
      'The image depicts a woman sitting on a stool, wearing a light blue blouse and a white skirt. She is holding a notepad and a pencil, with a thoughtful expression. The Superman logo is present in the top left corner.',
    postUrl: 'https://www.facebook.com/54618571998_907329668062794',
    totalEngagement: 2623,
  },
  {
    shares: 292,
    reactions: 2295,
    message: 'FF by Joe Jusko',
    id: '54618571998_652816630180767',
    comments: 34,
    publishTime: '2023-02-22T00:03:12+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/332457628_915914056521194_6846292620367344830_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hqj4GvteyrIQ7kNvgH9akRL&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYDJjzwL4l3t_b7YTZ_ysZU-NBJrN4kyGmM-HTSBaC93sw&oe=679DDA72',
    status: 'PUBLISHED',
    imageDescription:
      'The image features the Fantastic Four, a group of superheroes, in action poses. Mr. Fantastic is stretching his arm toward the foreground, with the Human Torch flying in the background, aflame. The Thing, a rocky, muscular figure, is running beside them, and the Invisible Woman appears poised, slightly behind. They are depicted in dynamic, heroic stances.',
    postUrl: 'https://www.facebook.com/54618571998_652816630180767',
    totalEngagement: 2621,
  },
  {
    message: '',
    id: '54618571998_712060460923050',
    publishTime: '2023-05-08T13:18:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/345290903_1317344449216221_3758484162877129644_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WFY39WtTfYIQ7kNvgFdnlAx&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AYoRt-zoKoYprRsbORd9AEX&oh=00_AYDHsmInOaLXmrZ6DaE6INtHpEHl1KnxFEzv9MC4absrXQ&oe=679DF430',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'A person is sitting in a chair reading a Superman comic book, smiling. Next to him, a figure dressed as Clark Kent is reading a Marvel comic. They are in a setting with a backdrop of buildings.',
  },
  {
    shares: 181,
    reactions: 2426,
    message:
      'Classic Comic - Marvel Comics Presents #72 (1991) - Origin of Wolverine / Weapon X . Wrap around cover by Barry Windsor Smith',
    id: '54618571998_685942393534857',
    comments: 14,
    publishTime: '2023-04-04T19:21:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/339832983_745590963638306_5807316435407239052_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8JTVsg6bNPEQ7kNvgFaXSkI&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AjtGYtRKUGGoHrazfSxAA5t&oh=00_AYC-kht7w_PhA3qKCHhm-5HgsvSvqeT79eRSeVgGNV1_8Q&oe=679DF383',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book cover titled "Marvel Comics Presents" with the text "Before Wolverine There Was Weapon X." It features a muscular character with claws and a fierce expression standing in front of a large metallic abstract skull. The background is colored with flames and dynamic lines, creating a dramatic and intense visual effect.',
    postUrl: 'https://www.facebook.com/54618571998_685942393534857',
    totalEngagement: 2621,
  },
  {
    message: "New York World's Fair 1940 back cover",
    id: '54618571998_767543352041427',
    publishTime: '2023-07-21T20:05:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/361612446_767503268712102_6126398224742583157_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EUl0FKdytCUQ7kNvgFZ-GOk&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ATc73HRWyp02Z-tyObKGEZm&oh=00_AYDkk0dkVIZMdVMoXo677mKorW-e-oR5xWgkJiH26ZA8Qg&oe=679DE2A0',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a vintage comic book cover featuring portraits of characters: Robin, Superman, Batman, Red, White & Blue, Johnny Thunder, Slam Bradley, Zatara, and Hourman. It highlights "The Greatest Aggregation of Top-Flight Adventure Characters Ever Gathered Together in a Single Comic Book."',
  },
  {
    shares: 144,
    reactions: 2461,
    message:
      'Hawkman #4 (1964) -  1st appearance and origin of Zatanna. Cover and art by Murphy Anderson',
    id: '54618571998_810033561125739',
    comments: 14,
    publishTime: '2023-09-22T16:51:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/381951753_809816437814118_4021060394100765781_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YrSxh2B_zU0Q7kNvgHzMEg8&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AQ6uIXz3wArX-td61b3bq_j&oh=00_AYA5Ztoniz5S2uJd3vOIBbLLnzmwEkIxVHhU4mAGM5Ramw&oe=679DEE86',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vintage comic book cover featuring Hawkman in flight. He is depicted with large wings and a helmet, amidst an action scene with "The Machine That Magnetized Men!" emphasized. The DC Comics logo and the Comics Code Authority seal are present.',
    postUrl: 'https://www.facebook.com/54618571998_810033561125739',
    totalEngagement: 2619,
  },
  {
    message:
      'Classic Comic - Amazing Spider-Man #34 (1966) - Kraven appears. 3rd battle with Spidey. Art and cover by Steve Ditko',
    id: '54618571998_680099094119187',
    publishTime: '2023-03-27T19:28:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/337030523_915491753209506_6756386240410212280_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FFKuTf8BU1cQ7kNvgHc6C1v&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYDxgS3HFw7RfC-xmQN3SENDUGf52dUP4yMkbVoQqz71Eg&oe=679DFDA8',
    status: 'SCHEDULED',
    imageDescription:
      'The image is the cover of "The Amazing Spider-Man" issue number 34, featuring Spider-Man battling a character in a leopard print outfit. The cover, designed by Marvel Comics Group, has a vintage comic style with the headline "The Thrill of the Hunt!"',
  },
  {
    message: 'Thor pin-up by Jack "The King" Kirby',
    id: '54618571998_616815673780863',
    publishTime: '2023-01-12T17:19:05+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/325369621_880549009763781_5691139703418180482_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NJzVcFYipA4Q7kNvgE1hSCN&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AEj86Fc0xlMaisai1dICqfl&oh=00_AYD9M4EG1etSKokr0l2goEfg57p7OfJ9DXWDJBtkAUVRqg&oe=679DD8A6',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image is a comic-style illustration of Thor, a superhero from Marvel Comics. He is depicted wearing a helmet with wings, a red cape, and blue and yellow attire with circular accents. Thor is wielding his iconic hammer, Mjolnir, and is in a dynamic pose. The text at the bottom reads, "May the eyes of Asgard smile down on thee... Thor." The top labels it as "A Marvel Masterwork Pin-Up."',
  },
  {
    message:
      'Classic Comic - Batman #57 (1950) - Stories by Bill Finger. Joker appears. Centerfold is a 1950 calendar , many times missing from the book',
    id: '54618571998_622850963177334',
    publishTime: '2023-01-19T17:04:07+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/326499298_663463938907428_6215968045051129043_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zLB7SH_vpnAQ7kNvgF_11DK&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AEj86Fc0xlMaisai1dICqfl&oh=00_AYBfSP5WE3B5UtOUe-hySYk2yrWyTE0_W7jYWrEm2gKaIw&oe=679DDC36',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage "Batman" comic book cover, issue No. 57, featuring Batman using his cape to descend and save a woman hanging from a ledge. The background is bright yellow with bold text at the top and a noted special feature, a Batman and Robin pin-up calendar inside.',
  },
  {
    message: 'by George Perez',
    id: '54618571998_851314746997620',
    publishTime: '2023-11-21T19:11:56+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/404067269_850857000376728_8364122932788713944_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=W7Do6w_Ft-wQ7kNvgHzp3Qx&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad1ff1s2cBGYM0_gvSA37EV&oh=00_AYDVKxIpY-dMvcomkBBjzOAtHv77VErpztYXyzqPw-HorQ&oe=679DDA17',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image is a vintage comic book illustration featuring a large group of superheroes from the "Justice League of America" on the left and the "Justice Society of America" on the right. The characters are depicted in their classic costumes, standing together in a dynamic and colorful scene with a cosmic background, emblematic of comic book team crossovers.',
  },
  {
    shares: 214,
    reactions: 2365,
    message: 'Detective Comics #627 cover painting by Norm Breyfogle,1991',
    id: '54618571998_794397912689304',
    comments: 20,
    publishTime: '2023-08-30T18:22:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/370439193_794389186023510_4381257641807797694_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Usy4R9JH1v8Q7kNvgHkRTz9&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFPZWKt5JZ1PFEs5yzutf_Z&oh=00_AYDa_qDtc2KceNxJoQIIj7RJlv6zuX5P9d_nGDun3K9Z8g&oe=679DF58F',
    status: 'PUBLISHED',
    imageDescription:
      'The image shows a dynamic night scene with a superhero, resembling Batman, swinging through the air while apprehending a distressed person. Below, two figures look on with surprise against a cityscape backdrop.',
    postUrl: 'https://www.facebook.com/54618571998_794397912689304',
    totalEngagement: 2599,
  },
  {
    shares: 143,
    reactions: 2345,
    message: "Amazing Spider-Man #122 Page #1...Spidey's world changes forever",
    id: '54618571998_926753596120401',
    comments: 107,
    publishTime: '2024-03-08T19:11:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/431332423_923536816442079_6305961166753926083_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NfoIIEVZm8EQ7kNvgF964Hq&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ANKEXX0ECxPXGcj1EQ1GtNe&oh=00_AYBnwENAPzh4YrG8g27anUC69vNOEAZ4Um3EMgv6UWjOdg&oe=679DF0E4',
    status: 'PUBLISHED',
    imageDescription:
      'The comic cover depicts Spider-Man holding an unconscious woman, facing off against the Green Goblin on a bridge. The scene is tense, with the Green Goblin taunting Spider-Man about the woman\'s fate. The title "The Goblin\'s Last Stand!" suggests a climactic confrontation. The background features a cityscape, and dramatic dialogue adds urgency to the narrative.',
    postUrl: 'https://www.facebook.com/54618571998_926753596120401',
    totalEngagement: 2595,
  },
  {
    message: 'heaven',
    id: '54618571998_1162255379236887',
    publishTime: '2025-01-17T17:16:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/473656541_1161908505938241_3581628350532077810_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=94GtJn10y14Q7kNvgEf32jy&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AuRRKEzoP2P4qCBWI7mg21G&oh=00_AYCMptQoHEU4QxFHswGPgdKjlJcFLrizKuUv9PaEiuxRcQ&oe=679DC029',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'A person is sitting on a bed covered with piles of comic books in a room adorned with posters of superheroes and related themes.',
  },
  {
    message:
      'Classic Comic - Iron Fist #14 (1977) - 1st Appearance of Sabretooth. Story by Chris Claremont and art by John Byrne',
    id: '54618571998_684520670343696',
    publishTime: '2023-04-02T19:42:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/339309258_898245711444980_6460395684612754954_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=w24Qe-j_t6cQ7kNvgGFAGSz&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AjtGYtRKUGGoHrazfSxAA5t&oh=00_AYDkTVdYAhq2ZodC5tdP8Xurb2lSuYy1yN8QdMBltS9zqA&oe=679DE7DA',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is the cover of "Iron Fist" Issue #14 by Marvel Comics, released in August. It features Iron Fist battling Sabretooth on a snowy cliff. The text highlights "Kung Fu action in the mighty Marvel manner" and introduces Sabretooth with the tagline "White Snow... White Doom!"',
  },
  {
    message:
      'Classic Comic - SGT FURY #13 (1964)  - Fantastic cover by Jack (The King) Kirby This is the 1st meeting of Nick Fury and Captain America.',
    id: '54618571998_669538571841906',
    publishTime: '2023-03-14T17:12:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/335334582_505976971742473_6567021204308375867_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4rd6-CfxKjUQ7kNvgE416IX&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AxjXGRI5F_kLVcGnmbzoU2h&oh=00_AYD2djS674JPXhb435ekyapUeJZVLfF3z2s8tsl4-qE5zg&oe=679DD06B',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is a vintage comic book cover titled "Sgt. Fury and his Howling Commandos" issue number 13. It features Captain America and Bucky prominently in action poses, with Captain America wielding his shield. The background shows a battle scene with soldiers and explosions. The cover emphasizes dramatic, dynamic action typical of classic comics.',
  },
  {
    message:
      "LYNDA CARTER (Wonder Woman always and forever)\nIt's not like we are fan boys and smitten with you or anything....well ok we are",
    id: '54618571998_692095269586236',
    publishTime: '2023-04-12T18:11:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/340943046_935615287469541_6877873823005049214_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=thM07--EtJ8Q7kNvgFdhVye&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AlpbJrh9swE9shsKu1FU20_&oh=00_AYDjBmE3EbvmBhtHmRtY2NHGrlXB4sPS4tWFsBYR8wdNyw&oe=679DE561',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image is a collage with four photos of a woman with dark hair. The main image on the right shows her in a blue outfit, while the three on the left feature her in various poses and clothing, including a performance outfit and a red costume.',
  },
  {
    shares: 169,
    reactions: 2373,
    message:
      'Classic Comic - Justice League of America #75 (1969) - Black Canary joins the Justice League, gains her sonic powers and begins her decades long relationship with Green Arrow!. Carmine Infantino and Murphy Anderson cover.',
    id: '54618571998_758427682952994',
    comments: 39,
    publishTime: '2023-07-08T20:01:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/358143597_758410396288056_6251213957011017323_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qnWJej4UYS0Q7kNvgEDqodk&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AuXIsvkg1_wDUFJ6cdv22t7&oh=00_AYAy6hF8mNxNFQwkzPufFCIiGcQEdKT4B0F36Pq5ogMK_w&oe=679DEAA7',
    status: 'PUBLISHED',
    imageDescription:
      'The image is the cover of a "Justice League of America" comic, issue No. 75. Featured prominently are the costumed legs of a female character standing over Batman, Superman, and other heroes, who appear to be incapacitated. A text bubble asks, "Do you admit I can take Wonder Woman\'s place?" The DC logo and a price of 15\u00a2 are visible.',
    postUrl: 'https://www.facebook.com/54618571998_758427682952994',
    totalEngagement: 2581,
  },
  {
    message: 'John Byrne in his studio',
    id: '54618571998_833943895401372',
    publishTime: '2023-10-26T13:07:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/395805614_833790242083404_23026604239761902_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=q1KfQG1sltoQ7kNvgHYp0Vk&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AvEhpGDi1HQFkGgpMJudFl6&oh=00_AYD8l157oJG6Qw4lcShe5KtPimkW_HdbidlKVk_I6aiyKw&oe=679DDA20',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'An individual stands in a room filled with comic art and figurines, holding a detailed black-and-white illustration featuring dynamic, action-packed characters. Framed comic pages and model aircraft are visible in the background, and shelves are lined with books and collectible figures.',
  },
  {
    message: '',
    id: '54618571998_10158853877626999',
    publishTime: '2021-04-14T16:01:00+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t1.6435-9/173502586_10158853877256999_232677269361765689_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wLSJVRB7lmEQ7kNvgEjZWvx&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AznWKKcyUvTB23EFe2RVM0D&oh=00_AYBwdSsMfbSMuUDK0MGX3Ey4a1Q6RffY1zzZgb-z_aiavA&oe=67BF6663',
    status: 'SCHEDULED',
    imageDescription:
      'A cartoon depicts a large character resembling Galactus sitting by a table, admiring a tank with a miniature city. Inside the tank, a Godzilla-like creature is destroying buildings. A jar labeled "People Pop\'ems" is on the table. The caption reads "Galactus\u2019s pet."',
  },
  {
    message:
      'Classic Comic - Hulk #162 (1973) - 1st appearance of Wendigo. Cover and art by Herb Trimpe and Sal Trapani',
    id: '54618571998_839413804854381',
    publishTime: '2023-11-03T19:19:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/398457061_839401831522245_4486048850830102266_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UYVSUqOMY0sQ7kNvgFq-sIe&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APJaJCyVrXvQdQbZ44Kmjb9&oh=00_AYAQUA5EZ0-4U4wUEoQ27EU_iHwbq7KnV2S67Dhw-rTYfQ&oe=679DF628',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a cover of "The Incredible Hulk" comic issue #162 published by Marvel Comics. It features the Hulk battling Wendigo, a large, white creature. The scene is set in a chaotic environment with debris around, and the characters are engaged in combat. Text on the cover emphasizes their conflict and mentions the setting as Canada.',
  },
  {
    shares: 582,
    reactions: 1944,
    message: 'By Kerry Callen',
    id: '54618571998_647978893997874',
    comments: 48,
    publishTime: '2023-02-16T15:12:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/330852374_964614804949415_8477550838672990548_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GyvVWQiA2PAQ7kNvgHA1XRN&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYAWJi8rsNghH4m0Ts6vIt3-94-WDFy425yzWOC1SqH3hQ&oe=679DC9E8',
    status: 'PUBLISHED',
    imageDescription:
      "Two superheroes are having a conversation. The male superhero questions why the female superhero uses her bracelets to block bullets if she's mostly invulnerable. She demonstrates the bouncing effect, causing a humorous reaction. The male hero understands her choice.",
    postUrl: 'https://www.facebook.com/54618571998_647978893997874',
    totalEngagement: 2574,
  },
  {
    shares: 2284,
    reactions: 274,
    message:
      "Happy 4th of July to everyone\n\n   Here's to a safe and happy 4th ane especially to those who serve!",
    id: '54618571998_1959240060945465',
    comments: 10,
    publishTime: '2016-07-03T09:44:58+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/468803956_10161959217561999_8761135651364657978_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=F6sWH2c96RwQ7kNvgGNPyY1&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8c_ACGspV090zjddtw0B_E&oh=00_AYChBgUAFab219SsN6vRQ_J4QHXaJ9YsPfF59CBCmoCtHA&oe=679DCE30',
    status: 'PUBLISHED',
    imageDescription:
      'The image features a comic-style illustration of Captain America punching a character resembling Adolf Hitler. Overlaid text reads, "HAPPY 4TH OF JULY. HERE IS A PICTURE OF CAPTAIN AMERICA PUNCHING HITLER IN THE FACE."',
    postUrl: 'https://www.facebook.com/54618571998_1959240060945465',
    totalEngagement: 2568,
  },
  {
    shares: 2284,
    reactions: 274,
    message:
      "Happy 4th of July to everyone\n\n   Here's to a safe and happy 4th ane especially to those who serve!",
    id: '54618571998_1100729987216411',
    comments: 10,
    publishTime: '2015-07-04T10:19:46+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/468803956_10161959217561999_8761135651364657978_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=F6sWH2c96RwQ7kNvgGNPyY1&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ArC3bEulEW_sW8FGVO_bNpP&oh=00_AYAbzdRUjBCFUwyT-Sj3jBXRR8gZmoybMJWWNRD-UZOnIQ&oe=679DCE30',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book cover showing Captain America punching a man, with text overlaid saying \u201cHappy 4th of July. Here is a picture of Captain America punching Hitler in the face.\u201d',
    postUrl: 'https://www.facebook.com/54618571998_1100729987216411',
    totalEngagement: 2568,
  },
  {
    message:
      "Happy 4th of July to everyone\n\n   Here's to a safe and happy 4th ane especially to those who serve!",
    id: '54618571998_1439984233154550',
    publishTime: '2017-07-04T19:05:44+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/468803956_10161959217561999_8761135651364657978_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=F6sWH2c96RwQ7kNvgGNPyY1&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AMo4VKSy3RcP3GsbZCg7v_G&oh=00_AYByeZbbOFKJXYNHnELHjlOk5R91E6LvH0I8xUvvfTFApw&oe=679DCE30',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'This image is a comic illustration showing Captain America punching a figure resembling Hitler in the face. Overlaying text reads, "Happy 4th of July. Here is a picture of Captain America punching Hitler in the face."',
  },
  {
    message:
      'Classic Comic - Adventure #156 (1950) - Curt Swan cover and art. Inside cover has ad for Strange Adventures #1',
    id: '54618571998_658520776277019',
    publishTime: '2023-02-28T22:37:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/334062639_692704509271093_5726072526621643783_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-A69slH0ejUQ7kNvgG98wbg&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYDCEIwkJZFtnuPsV6up_EPYgB1b1mt1GYztdnVTDCvjiA&oe=679DDFAC',
    status: 'SCHEDULED',
    imageDescription:
      'The image depicts the cover of "Adventure Comics" No. 156. It features Superboy flying while holding a large blanket with four people on it as if it\'s a magic carpet. The scene is set against a city skyline, and the tagline mentions an exciting story of Superman when he was Superboy. The cover notes "52 Big Pages" and is priced at 10 cents.',
  },
  {
    message: 'I love these old comic book ads',
    id: '54618571998_1086972700098489',
    publishTime: '2024-10-13T17:51:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/462678856_1086617076800718_6090683866815749497_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dXkZI3kWwRgQ7kNvgGgR8TP&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AKYaoeCGwU8pX7Z0Cnvfmza&oh=00_AYAjQbr13xeEX2zbOxUt0RWzMstWRIXrSY1KepB8968gig&oe=679DDA50',
    status: 'SCHEDULED',
    imageDescription:
      'This image is an advertisement for Mattel\'s Major Matt Mason, a toy astronaut figure and his equipment. It showcases the Space Crawler, Moon Suit, Jet Propulsion Pak, Space Sled, and Space Station. Each piece of equipment is described with features emphasizing space exploration and play. The ad includes illustrations and descriptions of Major Matt Mason as "Mattel\u2019s Man in Space" and his gear.',
  },
  {
    message:
      'Classic Comic - Detective # 318 (1963) - Batwoman cover. Batwoman becomes Cat-woman. Bill Finger story',
    id: '54618571998_757590509703378',
    publishTime: '2023-07-07T17:53:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/358098393_757198619742567_8031837348531740935_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=n9iW-emg8HsQ7kNvgGvT-9y&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AuXIsvkg1_wDUFJ6cdv22t7&oh=00_AYArVYdSxqXTcm6aNBLUTY5DYSSnh6nim7Uu_jB26BwU-w&oe=679DF7EF',
    status: 'SCHEDULED',
    imageDescription:
      'This is a vintage "Detective Comics" cover featuring Batman, Robin, and two villains, Cat-Man and Cat-Woman, in a dramatic scene. Text bubbles reveal that Batwoman has joined forces with Cat-Man, becoming Cat-Woman. The comics are approved by the Comics Code Authority, priced at 12 cents, and the issue is number 318 from August. The cover indicates an extra-long Batman adventure titled "The Cat-Man Strikes Back!"',
  },
  {
    message: 'BATMAN #1 BACK COVER RE-CREATION by Batman Co-Creator , Bob Kane',
    id: '54618571998_787409223388173',
    publishTime: '2023-08-19T18:06:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/369036740_787121050083657_3908257837402577299_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TLS34EpL7T8Q7kNvgEvpUnV&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYC05VQ8dJJYodgOnl95LDlLKUrbKlumB9OTCNCbz9EGBw&oe=679DD819',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a black-and-white drawing of Batman and Robin standing side by side. Batman is on the left, in his iconic suit and cape, with the "Batman" logo above them. Robin is on the right, in his classic costume, with his arms crossed. The art style is reminiscent of early comic illustrations.',
  },
  {
    message: '',
    id: '54618571998_794327979362964',
    publishTime: '2023-08-30T15:52:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/372990514_794076926054736_3047472772034863133_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mDFZf7ludkMQ7kNvgGPGiUP&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFPZWKt5JZ1PFEs5yzutf_Z&oh=00_AYDZtixl_WwsIfyfdvEJ-FGAKuUbMHnnzCWa8RcL9bGG6Q&oe=679DC9EF',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'This image depicts a boxing match between two well-known cartoon characters in a ring, surrounded by a large crowd of various other animated and comic characters. The setting appears lively and chaotic, with characters from different universes observing the fight.',
  },
  {
    shares: 341,
    reactions: 2081,
    message: 'I always wanted all of these',
    id: '54618571998_621020443360386',
    comments: 132,
    publishTime: '2023-01-17T15:12:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/325818461_1883232218689175_6889132878332840969_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9rOJ_sHtrfAQ7kNvgHEESGW&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AEj86Fc0xlMaisai1dICqfl&oh=00_AYCpfoN3S2fYi_x-_fiCBBrIqXUew7pQEreWJZjmaccQNg&oe=679DDD1C',
    status: 'PUBLISHED',
    imageDescription:
      'The image is an advertisement for "Captain Action," a toy described as "the amazing 9-in-1 super hero." It features Captain Action in the center, surrounded by images of eight iconic heroes: Superman, Batman, Captain America, Aquaman, the Phantom, Sgt. Fury, the Lone Ranger, and Steve Canyon. The text highlights the toy\'s ability to transform into these heroes by changing a face mask and uniform.',
    postUrl: 'https://www.facebook.com/54618571998_621020443360386',
    totalEngagement: 2554,
  },
  {
    message: 'ok I just need this',
    id: '54618571998_609651307830633',
    publishTime: '2023-01-03T15:23:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/322938407_6033342570066730_241052832598071059_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=w2CDzeRpijQQ7kNvgFGJ2jf&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANEcB3dbg9ERQ64wxt3zug_&oh=00_AYAbFpvJo-OgyxxHlsI5Jpf0Qk0GbeK-YH4o6NHceqX48A&oe=679DD956',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image is a vintage advertisement featuring a Batman-themed bedspread designed to look like the Batmobile. It includes bold, colorful graphics with the text "Zowie! Z-O-O-M! Into Dreamland with Batman." The bedspread is priced at $13.88 for a twin size, and a cartoon Batman figure stands next to the text. The ad also mentions Batman curtains available for $5.88.',
  },
  {
    message:
      'Classic Comic - Action #254 (1959) - 1st appearance of Adult Bizarro. Superman -Bizarro cover by Curt Swan',
    id: '54618571998_711515300977566',
    publishTime: '2023-05-07T19:39:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/344816761_564241822522511_7809971603405461046_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ndOlUPhgccYQ7kNvgEgg1R7&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AYoRt-zoKoYprRsbORd9AEX&oh=00_AYBBMYShvTgmkkbgJik62KC7qDzN4PssfmJL7EKC50GQ0g&oe=679DF954',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage comic book cover from "Action Comics" issue #254. It features Superman and Bizarro, his imperfect clone, who is immune to Kryptonite\'s effects. Bizarro holds a large chunk of Kryptonite, while Superman has laser beams coming from his eyes. The cover text highlights a battle between the two characters.',
  },
  {
    shares: 154,
    reactions: 2355,
    message:
      'Classic Comic - All American #61 (1944) - Cover and art by Paul Reinman.Cyrus Gold was killed in a Swamp and 50 years later Solomon Grundy appears\nTough book to find especially in High Grade and always in big demand with collectors and Investors alike.',
    id: '54618571998_846416370820791',
    comments: 33,
    publishTime: '2023-11-14T18:13:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/401569538_846036630858765_2572619326121826759_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DsR8kGINKQwQ7kNvgFiNHGp&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A1JMZmQ38AIeooTJbQ1QLY-&oh=00_AYBJHCOebzo3chs3_j-hEFVNPk8g71an9NYRmmlVITsMbA&oe=679DEBDB',
    status: 'PUBLISHED',
    imageDescription:
      'This is a vintage comic book cover titled "All-American Comics" featuring the Green Lantern. The artwork depicts a dramatic scene where a monstrous creature is emerging from the ground, reaching out with large hands. Two characters, including the Green Lantern, are shown reacting to the creature. The cover also advertises a story titled "Fighters Never Quit!" and indicates a price of 10 cents. The style suggests a traditional comic book aesthetic from the mid-20th century.',
    postUrl: 'https://www.facebook.com/54618571998_846416370820791',
    totalEngagement: 2542,
  },
  {
    message: 'by Darwyn Cooke\nyou are so missed sir!',
    id: '54618571998_1117495193712906',
    publishTime: '2024-11-20T22:22:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/467497417_1117455333716892_1490458668919443628_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QJz4L06gt1oQ7kNvgFqXuzj&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFT13vH4zv0T-yKWrS8kNws&oh=00_AYB7bl93XMTblB6GeChhbXhhiFox5hxxjAu2IYCTRWy1bg&oe=679DBDDC',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vibrant, crowded collage of various iconic superheroes and animated characters from different franchises, all depicted in a colorful, comic book style.',
  },
  {
    shares: 149,
    reactions: 2333,
    message:
      "Classic Comic - Hulk #340 (1988) - Classic Hulk vs. Wolverine Cover by Todd McFarlane. McFarlane Art. When we find out about Hulk's healing powers",
    id: '54618571998_857895336339561',
    comments: 59,
    publishTime: '2023-12-01T20:15:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/406694868_856763276452767_2294179978990805109_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qrkR5ZQ6HDUQ7kNvgHAKoiM&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AZzrPS-zIeddYgAHtM6T8Z1&oh=00_AYC1_mfNq2Pjkm43lpVUJDJMKUf61LerBgp2rZ7TmVQGAw&oe=679DC21B',
    status: 'PUBLISHED',
    imageDescription:
      'This image is a cover of "The Incredible Hulk" comic, issue #340, by Marvel. It features Wolverine prominently in the foreground, with his claws extended. The reflection in the claws displays the Hulk\'s face. The background is a vibrant blue, highlighting the intense confrontation.',
    postUrl: 'https://www.facebook.com/54618571998_857895336339561',
    totalEngagement: 2541,
  },
  {
    message:
      'Classic Comic - Strange Tales #150 (1966) - 1st appearance of Umar (cameo). Very 1st John Buscema artwork for Marvel.. Cover by Bill Everett',
    id: '54618571998_788731459922616',
    publishTime: '2023-08-21T19:24:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/368332851_788712349924527_6774544637563648867_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=x_8mF89VUD4Q7kNvgGv_z_3&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYDxC22m_O54LrImMmGlnksyFPs-SkXnx6faI8318loYgw&oe=679DE96B',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'This is a comic book cover for "Strange Tales" featuring Doctor Strange. It includes Nick Fury, Agent of S.H.I.E.L.D. The artwork depicts Doctor Strange confronting a mysterious figure in green, with a dramatic scene involving magical forces. The cover headline reads "Exit Kaluu... Enter Umar!"',
  },
  {
    message: 'man I wish I had them all',
    id: '54618571998_1167672692028489',
    publishTime: '2025-01-24T14:12:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/474788896_1167462982049460_262170361698357550_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fddFK_NzoKYQ7kNvgE6e9uk&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AAaNRiWBPub3ip85cXc82r4&oh=00_AYB5GcdeHCJMhzNhjeuJDy5G1NOuPf5DW0ySr_6iTboJyg&oe=679DBE09',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The image shows a collection of vintage superhero and comic character action figures in their original packaging. There are three rows with characters like Iron Man, Batman, Spider-Man, and Thor, each displayed in clear plastic boxes with colorful backgrounds and character names at the top.',
  },
  {
    message:
      'Classic Comic - Justice League #30 (1964) - 2nd Annual JLA/JSA Team-up. JLA Battles Their Evil Counterparts from Earth-Three. Cover by Mike Sekowsky and Murphy Anderson',
    id: '54618571998_882063783922716',
    publishTime: '2024-01-05T21:36:34+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/417696602_882063717256056_4908167648775441185_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3w8Uyx_nJewQ7kNvgHSa5pL&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Aq9BZLyejJs2C5ZtYhRhe9s&oh=00_AYASuLG-cmi3yda0LsAPZsTqlDFRH9nqyDcDDoq0QkTkQA&oe=679DF256',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The comic book cover titled "Justice League of America" features superheroes engaged in combat. Prominent characters include figures resembling the Green Lantern, Batman, and Flash. The cover highlights "The Most Dangerous Earth of All!" and mentions "15 Super-Stars" participating. The art style and layout suggest a classic superhero battle scene.',
  },
  {
    shares: 642,
    reactions: 1855,
    message:
      'Classic Comic - Looney Tunes (and Merrie Melodies) #1 (1941) - Very 1st Appearance of Bugs Bunny, Daffy Duck, Porky Pig and Elmer Fudd in comic books',
    id: '54618571998_618719960257101',
    comments: 26,
    publishTime: '2023-01-14T20:21:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/324863154_5795515207162641_7545482213903074339_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7hCBuOMkn5cQ7kNvgH3av1e&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AEj86Fc0xlMaisai1dICqfl&oh=00_AYBpnLCMcWeM4J94rE1qJlIPeiNT9KLbvDef4i3AuXG1Lg&oe=679DC6A6',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vintage comic book cover featuring "Looney Tunes and Merrie Melodies Comics." It includes characters such as a rabbit and a pig, with the rabbit drumming on a large drum that the pig is emerging from. It advertises 68 pages of stories featuring characters like Porky Pig and Bugs Bunny, and it\'s priced at 10 cents.',
    postUrl: 'https://www.facebook.com/54618571998_618719960257101',
    totalEngagement: 2523,
  },
  {
    shares: 273,
    reactions: 2188,
    message: '',
    id: '54618571998_686658600129903',
    comments: 59,
    publishTime: '2023-04-05T16:17:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/339572505_1418324438954588_5033148657756737718_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WWBwAcR7Cg8Q7kNvgEed33z&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AjtGYtRKUGGoHrazfSxAA5t&oh=00_AYBF4UoFn0Q3S8ejvE3BnUFijaCD1C-BQFus2PDxfVj-Lg&oe=679DEE86',
    status: 'PUBLISHED',
    imageDescription:
      'Promotional poster for the "Marvel Super-Heroes" TV show featuring Captain America, Hulk, Iron Man, and others, with dynamic comic-style artwork and text announcing their arrival to television audiences.',
    postUrl: 'https://www.facebook.com/54618571998_686658600129903',
    totalEngagement: 2520,
  },
  {
    shares: 295,
    reactions: 2149,
    message: 'Ray Harryhausen at work..',
    id: '54618571998_902155821913512',
    comments: 76,
    publishTime: '2024-02-02T14:01:27+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/424926798_901987201930374_3672659665656940634_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xW4fJ6nBv44Q7kNvgEkQGbu&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AiXWsGT1VmkIehz87A_CgAK&oh=00_AYCznFXX1aycVCT5C1lVOxBNqy-Ku54EE1P48E6D0dVKUw&oe=679DDBD4',
    status: 'PUBLISHED',
    imageDescription:
      'A man is intricately working with a small creature model, which appears to be part of a movie setup, possibly involving stop-motion animation.',
    postUrl: 'https://www.facebook.com/54618571998_902155821913512',
    totalEngagement: 2520,
  },
  {
    shares: 340,
    reactions: 2149,
    message:
      'Classic Comic - Amazing Spider-Man #20 (1965) - 1st appearance & Origin of the Scorpion. Peter Parker/Spider-Man Pin-Up. Cover and art by Steve Ditko',
    id: '54618571998_608942227901541',
    comments: 29,
    publishTime: '2023-01-02T16:10:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/323892589_2507178279430373_3224014896150463779_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pxziN4tgaV4Q7kNvgElG-eY&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANEcB3dbg9ERQ64wxt3zug_&oh=00_AYA616ASwEuIltDOzSLoXbLd-vxRmUTxPrxPdokiqv9iqw&oe=679DD856',
    status: 'PUBLISHED',
    imageDescription:
      'This is the cover of "The Amazing Spider-Man" comic book issue #20, featuring Spider-Man being lifted by the villain Scorpion. The text highlights the introduction of Scorpion as a formidable foe. The price is 12 cents, and it is approved by the Comics Code Authority.',
    postUrl: 'https://www.facebook.com/54618571998_608942227901541',
    totalEngagement: 2518,
  },
  {
    message:
      'Classic Comic - Fantastic Four #6 (1962) - 1st Marvel Villain Team Up.2nd appearance of Dr Doom and Silver age Sub-Mariner.Cover and art by Jack Kirby',
    id: '54618571998_690564139739349',
    publishTime: '2023-04-10T17:12:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/340501999_553216403467311_148093448372654873_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Vdrpxbz23JkQ7kNvgFA5KG1&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AlpbJrh9swE9shsKu1FU20_&oh=00_AYBge2J3yiGyBA1Q-sRsi1HI5txiCTfb8SK49kiAap1CbQ&oe=679DF56C',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'This is the cover of "The Fantastic Four" comic issue #6. It features the Fantastic Four facing off against Sub-Mariner and Doctor Doom. The scene includes a bold, action-packed setup with dramatic text promising an intense battle.',
  },
  {
    shares: 354,
    reactions: 2134,
    message:
      'Classic Comic - Batman #161 (1964) - Bat-Mite and Mad Hatter appear. Sheldon Moldoff Cover',
    id: '54618571998_671909251604838',
    comments: 24,
    publishTime: '2023-03-17T17:17:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/335233730_245707334470613_6613352961508679967_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZLNX1WLFOZUQ7kNvgECcFZf&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYBNOzWqMw8nz1pkgnl2_wBvpRUQtRpT_geO4oMcAvxbOw&oe=679DE917',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vintage comic book cover for "Batman" issue #161. It features Batman and Robin observing a scene where Bat-Mite is riding a chariot pulled by horses, carrying captured criminals. The cover announces "The Bat-Mite Hero!" and promises a new Mad Hatter adventure. The style is typical of Silver Age comics, with bold colors and dynamic artwork.',
    postUrl: 'https://www.facebook.com/54618571998_671909251604838',
    totalEngagement: 2512,
  },
  {
    message: '',
    id: '54618571998_936064035189357',
    publishTime: '2024-03-22T13:08:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/432694268_935125571949870_8524067411334425993_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=b-OXzx6V2AwQ7kNvgE_tEn7&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A1Cltn3twGkGm6VFwILAtl1&oh=00_AYDEnEC9ScqdKHrlV7pFyAqxUnVLiQi-VjxoQIy0dsovSA&oe=679DCFD8',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'A man in a suit and sunglasses is reading "The Amazing Spider-Man" in front of a shelf filled with comic books.',
  },
  {
    message: '',
    id: '54618571998_926687842793643',
    publishTime: '2024-03-08T17:11:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/409088769_923906116405149_6095801076961766066_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=SSvqU4lswRUQ7kNvgEwANaU&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANKEXX0ECxPXGcj1EQ1GtNe&oh=00_AYChHyqmbZ1qXdjYgWIFBQ_Kh8nqlMKz1DuKvH3O9Lcggg&oe=679DEA93',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic panel featuring a character sitting on the grass, holding a comic book. The text above reads, "Comic books aren\'t just escapist fantasy, they\'re sophisticated social critiques."',
  },
  {
    message:
      "Classic Comic - ACTION #40 (1941) With a fantastic war cover by Fred Ray. Of course the interesting fact is , this was a few months before the bombing of Pearl harbor, the US wasn't in the war yet. This issue poor Superman becomes a babysitter for a spoiled rich girl at the urging of her Billionaire father",
    id: '54618571998_781221954006900',
    publishTime: '2023-08-10T15:09:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/366263895_780942634034832_9204571844441507829_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1MuBAj5NNmkQ7kNvgFzW46Q&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFmhw3kNsmh72LjrMEnX1-g&oh=00_AYAlb5wo7PN2GSRbnlR5ee3gCBgC1-WTR2ocfrgC_I3JjQ&oe=679DEC15',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is the cover of "Action Comics" issue No. 40, from September 1941, featuring Superman in a dynamic pose, punching a large military tank. The comic is priced at 10 cents and is labeled as the "World\'s Largest Selling Comic Magazine!" Superman is depicted in his classic costume with a blue suit and red cape, set against a dramatic backdrop of combat.',
  },
  {
    shares: 186,
    reactions: 2299,
    message:
      "Classic Golden Age Comic - America's Greatest Comics #3 (1942) - Classic Captain Marvel, Bulletman and Spy Smasher Cover by Mac Raboy",
    id: '54618571998_702961011832995',
    comments: 18,
    publishTime: '2023-04-26T17:42:24+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/343304760_116697044737301_2662443617096789046_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eiqbHLCjfpYQ7kNvgF4TNvV&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A7jDnAwd5xQtUEgw6tdzuym&oh=00_AYDEfli2CGLOoOJVCDTCtGXbVpPA7T5QjkK2KjoBcgHZgA&oe=679DDFAF',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vintage comic book cover titled "America\'s Greatest Comics" featuring three superheroes walking through a body of water with a cityscape in the background. The central figure is wearing a red costume with a lightning bolt emblem. To the right, a character in green, and to the left, a character in red and yellow with a hood. The price is listed as 15 cents, and it\'s labeled as issue number 3. The setting is marked as "Tokyo."',
    postUrl: 'https://www.facebook.com/54618571998_702961011832995',
    totalEngagement: 2503,
  },
  {
    message:
      'AVENGERS #63 (1969) - Hawkeye becomes the New  Goliath.. Gene Colan and George Klein cover and art',
    id: '54618571998_808176044644824',
    publishTime: '2023-09-19T19:17:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/378122182_808140447981717_4397680281819855607_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=n-pA2lNsMKwQ7kNvgGE4keW&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AQ6uIXz3wArX-td61b3bq_j&oh=00_AYAxCU4ZuoX1Bp-X7Z3GVLzISYVALBVR3l2uW7WtO2HYyA&oe=679DCE32',
    status: 'SCHEDULED',
    imageDescription:
      'This image depicts the cover of "The Mighty Avengers" comic issue #63, featuring a gigantic figure of Goliath dominating the scene with the title in bold red letters. Various Avengers, including those in red and blue costumes, are depicted in action poses around Goliath. The background features large, stylized letters spelling "Goliath" and rugged terrain. The comic\'s price is indicated as 12\u00a2, and it\'s part of the Marvel Comics Group.',
  },
  {
    shares: 238,
    reactions: 2217,
    message: "John Byrne's X-Men",
    id: '54618571998_745697834225979',
    comments: 41,
    publishTime: '2023-06-21T16:14:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/355092452_744691230993306_2886384175781786729_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lcIqttA7dCAQ7kNvgG1qzuV&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ASXWjd5_HguOydGi6Cp1YcZ&oh=00_AYCM55NDvSaRS5ouK7RDR7ZJPKjFW6UG23st_LoBnSwvtA&oe=679DFE23',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vibrant collage of numerous Marvel comic characters, primarily from the X-Men series, featuring a mix of heroes and villains in various costumes, all gathered together in an elaborate and colorful composition.',
    postUrl: 'https://www.facebook.com/54618571998_745697834225979',
    totalEngagement: 2496,
  },
  {
    shares: 266,
    reactions: 2191,
    message:
      'Classic Comic - Marvel Premier #28 (1976) - Legion of Monsters begins ( Man Thing , Ghost Rider, Morbius and Werewolf By Night).  Cover by Nick Cardy',
    id: '54618571998_656178873177876',
    comments: 38,
    publishTime: '2023-02-25T20:10:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/332480240_506670831543728_4854016724366920327_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OMFstdTX2NoQ7kNvgGhJ2Uy&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYBf-NjQGW4SEbwTGkhAT3uR47M58FmySpBwPFTpx4T7vA&oe=679DEE7A',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a cover of "Marvel Premiere" issue 28, featuring "The Legion of Monsters." It shows prominent Marvel characters: Ghost Rider, Man-Thing, Morbius, and Werewolf by Night, in action poses. The tagline reads, "The most spine-tingling team-up of all!" and includes text saying, "Stay back! Even we don\'t stand a chance against... THAT!" The artwork is colorful and dynamic, characteristic of classic comic book aesthetics.',
    postUrl: 'https://www.facebook.com/54618571998_656178873177876',
    totalEngagement: 2495,
  },
  {
    message:
      'Classic Comic - Flash #86 (1947) - 1st Black Canary. Dinosaur and Bondage cover by Lee Elias and Joe Kubert',
    id: '54618571998_762733015855794',
    publishTime: '2023-07-14T16:53:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/359813693_762394499222979_6261332952050401760_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pym5PZH1v8sQ7kNvgHPFzaG&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AuXIsvkg1_wDUFJ6cdv22t7&oh=00_AYCBCZ-2LoMHzD-abG_SYvhdQtDjnYDTnIDBihW25Gj1jQ&oe=679DDE89',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The cover of Flash Comics No. 86 features the superhero battling a giant, menacing dinosaur amidst flying debris. The background includes a person in white, appearing startled. The scene is dynamic and action-packed, highlighting the "Stone Age Menace."',
  },
  {
    message:
      'Classic Comic - Action #242 (1958) -Story by Otto Binder\nCover art by Curt Swan.Origin & 1st Appearance of Brainiac. 1st Appearance of the Bottle City of Kandor.',
    id: '54618571998_827703122692116',
    publishTime: '2023-10-17T16:44:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/393410572_827272686068493_5553697921437751836_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lpdhHibm9U0Q7kNvgGqk4JK&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFN0am19oe23tkLvrxzAuej&oh=00_AYDrZSo-dstePERpqA3jPBUnDj1oytZgnpwlMrGJbxAoLQ&oe=679DD51C',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is a cover of "Action Comics" issue #242 from July, depicting a confrontation between Superman and an alien character, likely Brainiac. Superman is shown preparing to engage, while the alien challenges him with a threat about an "Ultra-Force Shield." The background features a cosmic scene. The comic is priced at 10 cents and approved by the Comics Code Authority.',
  },
  {
    shares: 231,
    reactions: 2183,
    message:
      'Classic Comic - Flash #175 (1967) - 2nd Flash vs Superman race. JLA appear.  Infantino, Esposito and Plastino cover',
    id: '54618571998_689102876552142',
    comments: 79,
    publishTime: '2023-04-08T20:33:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/340104692_1659080917896256_4707126873240629072_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=58C-smjymQMQ7kNvgGImfXr&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AlpbJrh9swE9shsKu1FU20_&oh=00_AYA5a-5-Yk_RMcCFWRW_M0SWr8j7QFInoKcDeXg4QE27iA&oe=679DD147',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book cover featuring "The Flash" and "Superman." They are depicted racing in space. The Flash is saying, "Superman...I quit...I can\'t beat you..." while Superman responds, "I finally got you to admit you\'re not the fastest man alive, Flash!" The cover announces a super-speed rematch titled "Race to the End of the Universe!"',
    postUrl: 'https://www.facebook.com/54618571998_689102876552142',
    totalEngagement: 2493,
  },
  {
    shares: 196,
    reactions: 2275,
    message:
      'Classic Comic - Silver Surfer #3 (1968) - 1st appearance of Mephisto. Tales of the Watcher back up story. Cover by John Buscema',
    id: '54618571998_663079472487816',
    comments: 20,
    publishTime: '2023-03-06T18:21:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/333853787_1262065127720867_8437773639985569526_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8-b-ND4CU-sQ7kNvgEzn5d5&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYADm3jQi-ovTkFvC6itjhgx3VXp8xt82VLCQnUPIyHlVg&oe=679DD802',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vintage comic book cover titled "The Silver Surfer," featuring the hero prominently against a fiery red background. A menacing figure looms above, reaching towards the Silver Surfer, who is on his board. The text reads "The Power and the Prize!" and indicates it\'s issue number 3 from Marvel Comics Group.',
    postUrl: 'https://www.facebook.com/54618571998_663079472487816',
    totalEngagement: 2491,
  },
  {
    message:
      'Classic Comic - Detective #192 (1953) -  Bat-Cave cover . Win Mortimer cover',
    id: '54618571998_759230936206002',
    publishTime: '2023-07-09T20:35:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/358415166_759077839554645_3354018304059853158_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pZz_c5Mgv_oQ7kNvgG10CBy&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AuXIsvkg1_wDUFJ6cdv22t7&oh=00_AYDAuWsPzBYFu8j3ooGWzYO-OMLhYCFGIbg3mbXLzU2_mQ&oe=679DE326',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a cover of "Detective Comics" issue #192. It features Batman and Robin reacting to a mysterious broadcast showing their secret Bat-Cave being aired. The cover suggests a plot involving "The Phantom Eye of Gotham City" and includes other features such as "Pow-Wow Smith, Indian Lawman."',
  },
  {
    message: 'art by Steve Ditko',
    id: '54618571998_747791697349926',
    publishTime: '2023-06-24T18:11:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/355526154_747448590717570_1535932074145585022_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=KKU308zhRFoQ7kNvgG5PtTd&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ASXWjd5_HguOydGi6Cp1YcZ&oh=00_AYDzKPTkrpMcYpGK3WiVNCykL1L2Wpi_Q_ccknhsa1e27Q&oe=679DC6AA',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This image is a comic book-style grid featuring various characters, including a prominent one in the center with half of their face as a superhero masked figure and the other half as their civilian identity. It appears to be a collage of different characters, each drawn with distinct comic book aesthetics.',
  },
  {
    message:
      'Classic Comic - Iron Man #25 (1970) -  Sub-Mariner battles Iron Man. Cover by  Marie Severin and  Frank Giacoia.\n\n   You can check out the Current Value of this (or Any) Comic on our website for free at anytime https://www.comicspriceguide.com/titles/iron-man/25/ubttb',
    id: '54618571998_1135423525253406',
    publishTime: '2024-12-13T21:27:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/470204682_1135054525290306_5179725049414314917_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=LwnJTR3C_bwQ7kNvgHLAVc5&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ApXEvBg0bIfUdm-NblRBs-a&oh=00_AYBVynU85OPv1YIWgf6G0PpjwtdDzQmsLo3atAcZ8Ng_eQ&oe=679DE9F5',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a cover of a comic book titled "The Invincible Iron Man," issue number 25, priced at 15 cents. It features Iron Man in a dramatic pose, confronted by Namor the Sub-Mariner, who is attacking amidst an urban backdrop. The cover is colorful and action-packed, with the tagline: "Surrender Iron Man\u2014or die!\u201d and mentions "Up from the seething sea\u2026the Sub-Mariner!" The Marvel Comics Group logo is present on the left.',
  },
  {
    message:
      'Mighty Marvel Comicon  (1975) - art by John Buscema and Joe Sinnott',
    id: '54618571998_721170776678685',
    publishTime: '2023-05-20T16:11:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/348586447_632427938749269_6101866137794457987_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=p5UvMAzIQN8Q7kNvgFU6aV6&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ArYh5GykvSY8MnqKvLRRkWA&oh=00_AYAY4dbA-yti5ok7njFxD7vQ6pJRFkq7aiMPZHc5ucIWCw&oe=679DFE84',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a poster for the "Mighty Marvel Comicon 1975." It features a colorful collage of Marvel superheroes, including Spider-Man, Thor, Hulk, and Captain America. The event dates are from Saturday, March 22 to Monday, March 24, at the Hotel Commodore, Park Avenue & 42nd Street, with the tagline "Marvel Marches On!"',
  },
  {
    message:
      'Classic Comic -  - Iron Man #128 (1979) - Cover by Bob Layton - Demon in a Bottle Story',
    id: '54618571998_688395209956242',
    publishTime: '2023-04-07T19:22:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/339927431_733382668527904_6514650877669618137_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=B_c_LE754hwQ7kNvgHmKV5x&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AjtGYtRKUGGoHrazfSxAA5t&oh=00_AYC8nNBI5oFgtty24Owpqk8lUuR9qX4ZWoj99vFSky7A3g&oe=679DF118',
    status: 'SCHEDULED',
    imageDescription:
      'This is the cover of "Iron Man" comic issue #128, titled "Demon in a Bottle." It features a distressed man in Tony Stark\'s Iron Man suit sitting at a table with bottles of alcohol, clutching the Iron Man helmet. The background has a shattered window and Stark looks unkempt, reflecting the theme of struggling with alcoholism.',
  },
  {
    message:
      'Proposed cover for The Spirit magazine (Warren Publishing) - 1970s by Neal adams',
    id: '54618571998_709865051142591',
    publishTime: '2023-05-05T16:18:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/344439700_1959885707679329_9031523955836440286_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-RbUa9p9-6gQ7kNvgEjPFgT&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AYoRt-zoKoYprRsbORd9AEX&oh=00_AYAXucEfVyxDlJk5cFWgZ8-Nh3KXGY8ydhJXplHVQ_H8wA&oe=679DEC4C',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image depicts a man in a blue suit and hat with a red tie running through urban alleyways. He appears to be evading capture, as suggested by a "reward" poster for "The Spirit" offering $100,000. The scene is set at night, with intense colors highlighting the dramatic atmosphere. A figure in the water below the street watches the action unfold.',
  },
  {
    shares: 180,
    reactions: 2251,
    message:
      'Classic Comic - X-Men #14 (1965) - 1st Appearance of the Sentinels and 1st app of Bolivar Trask. Cover by Jack Kirby',
    id: '54618571998_685984613530635',
    comments: 38,
    publishTime: '2023-04-04T20:32:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/339440322_533735075593392_4695134340202021814_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=koUsQUs8OggQ7kNvgHEW4xQ&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AjtGYtRKUGGoHrazfSxAA5t&oh=00_AYAXJikBFnyqlwQRkkEgcPpcj9DMPOjw0cKZd8GSJqcaFg&oe=679DCAEF',
    status: 'PUBLISHED',
    imageDescription:
      'Comic cover featuring "The X-Men" issue #14 with a Sentinel towering over the X-Men team. A tagline reads, \u201cAmong Us Stalk... The Sentinels!\u201d The scene is dynamic, showing the X-Men preparing to confront the looming threat.',
    postUrl: 'https://www.facebook.com/54618571998_685984613530635',
    totalEngagement: 2469,
  },
  {
    message: 'Fantastic Four cartoons (1967 to 1970)',
    id: '54618571998_747058510756578',
    publishTime: '2023-06-23T16:16:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/355327576_746077587521337_6182461559008209646_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vwboFIzSm9MQ7kNvgHtb7Rp&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ASXWjd5_HguOydGi6Cp1YcZ&oh=00_AYB69C2QPm0TlMJ8e7MBBIifDh0_jALIXDkXNea1Tx37nw&oe=679DF204',
    status: 'SCHEDULED',
    imageDescription:
      'The image features four superheroes from a classic comic series, standing in front of a large red number "4." One character is flying and engulfed in flames, another is a rocky figure with an orange hue, and two others are wearing blue suits with a white number "4" emblem.',
  },
  {
    message:
      'Classic Comic - X-Men #40 (1968) - Origin of Cyclops and 1st time the Frankenstein Monster appears on the cover of a Marvel Comic. George Tuska cover & Art',
    id: '54618571998_692140599581703',
    publishTime: '2023-04-12T19:23:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/340777489_941217760544393_1214654311274952694_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Zanq7FJCUDQQ7kNvgEsW-WZ&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AlpbJrh9swE9shsKu1FU20_&oh=00_AYBMOidXHgWUCHaNI5iwQtxtPAI9KdpOz0dLfrItPUhWaA&oe=679DDC34',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'The comic book cover features "The X-Men" battling Frankenstein\'s monster. The monster is prominently depicted on the left, approaching the X-Men, who are gathered on the right, appearing ready for confrontation. The text highlights: "The X-Men meet Frankenstein! \'Nuff Said!" and the story title, "The Mark of the Monster!"',
  },
  {
    shares: 137,
    reactions: 2287,
    message: 'Savage Sword of Conan #222 splash art by John Buscema, 1994',
    id: '54618571998_736572435138519',
    comments: 41,
    publishTime: '2023-06-09T18:11:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/352522320_736097481852681_3289478078390633752_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1fo_-VNR4h0Q7kNvgHlfLDQ&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ANf0kMIeMC_mKos2kMEjn4q&oh=00_AYCJdeIF_hUFCVfL1Apsqhe7WI_fGSMzuWsO9qjM6gjk5w&oe=679DDAA3',
    status: 'PUBLISHED',
    imageDescription:
      'This image is an illustrated cover titled "The Coming of Conan." It features a muscular warrior in a horned helmet and fur attire holding a sword. A woman in a similar style outfit crouches beside him. The background shows mountains and lightning. Text introduces the setting as the Hyborian Age, with credits to Stan Lee, Roy Thomas, John Buscema, and John Costanza.',
    postUrl: 'https://www.facebook.com/54618571998_736572435138519',
    totalEngagement: 2465,
  },
  {
    message:
      "Classic Comic - Daredevil #181 (1982) - Iconic story and cover of Elektra's death by Frank Miller and Klaus Janson. . Kingpin and Bullseye appear. Big fan favorite storyline",
    id: '54618571998_895982099197551',
    publishTime: '2024-01-24T21:27:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/422163334_894551166007311_4966047705849485961_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rsZ4Vgz4qWkQ7kNvgGRqnIW&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8iaG7Ke0rbRc8cA6JwlJbb&oh=00_AYC8kfAlBjVJYF9eBDmkUrZizByQAvHrras2XEjWWRJ2xg&oe=679DEBA4',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'This is a comic book cover for "Daredevil: The Man Without Fear!" It\'s a special double-size issue featuring Bullseye and Elektra, with a tagline "One Wins, One Dies."  The art prominently features Daredevil in the background, with Bullseye and Elektra in an action pose. The cover also highlights Marvel Comics Group branding and pricing details.',
  },
  {
    shares: 88,
    reactions: 2328,
    message:
      "Classic Comic - Avengers #134 (1975) - Vision's Origin as the Original Human Torch (Golden Age). Mad Thinker appears. Gil Kane , Joe Sinnott and John Romita cover",
    id: '54618571998_947195944076166',
    comments: 47,
    publishTime: '2024-04-06T20:23:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/435475209_946851084110652_8100198401724885371_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bLwHBhQak_AQ7kNvgGHnJbf&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AgWySNYoCQdWM2hsmdj80hA&oh=00_AYA03pzZWtzXy1qIl2NDhFBI1cm1r50g7MbsAJmX5BtopQ&oe=679DBD6A',
    status: 'PUBLISHED',
    imageDescription:
      'This image is a comic book cover for "The Avengers" by Marvel Comics, issue #134, dated April with a price of 25 cents. The cover features superheroes Thor, Iron Man, and Vision in action against an antagonist, with text highlighting "The Origin of Vision" and a dramatic line about the Human Torch, suggesting a critical confrontation.',
    postUrl: 'https://www.facebook.com/54618571998_947195944076166',
    totalEngagement: 2463,
  },
  {
    message:
      'Classic Comic - Amazing Spider-Man #15 (1964) - 1st Appearance of Kraven the Hunter. 2nd appearance of the Chameleon, 1st mention of Mary Jane Watson (MJ) . Cover and art by Steve Ditko',
    id: '54618571998_656040476525049',
    publishTime: '2023-02-25T16:17:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/333259062_1248295016101172_221417577052947744_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zSTmN4nSZJwQ7kNvgG1_19m&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYBc4kHhpaTph82fmefwNqpmY2AlDI0yHwicqJq61xHjTg&oe=679DE349',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is the cover of "The Amazing Spider-Man" comic, issue #15, featuring Spider-Man and the title "Kraven the Hunter!" with a special appearance by The Chameleon.',
  },
  {
    message: '',
    id: '54618571998_850004957128599',
    publishTime: '2023-11-19T21:07:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/404067462_849607737168321_3167939563343665739_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1xpkNdKe5LkQ7kNvgGO2l5u&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A1JMZmQ38AIeooTJbQ1QLY-&oh=00_AYCGxPBlUvYtM5bjoLxwxWHqp3fnsahGqodmwmAwEscWLQ&oe=679DDD4E',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      "The image features three characters standing in an outdoor setting, wearing black outfits with a slightly uniform appearance. The caption humorously suggests that knowing this group is a test of being an '80s fan, despite their appearance from a famous movie rather than a band.",
  },
  {
    shares: 197,
    reactions: 2238,
    message:
      'Classic Comic - Action Comics #19 (1939) - Consecutive Superman covers bein. Ultra Humanite story. Siegel, Finger and Fox stories. Joe Shuster Cover',
    id: '54618571998_803082431820852',
    comments: 15,
    publishTime: '2023-09-12T15:15:06+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/377444765_802819288513833_3325190720292695693_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UovkpQtyRbIQ7kNvgGh1i0t&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AeuYoz_Z6s18yKB-UbYSALw&oh=00_AYDj4wvkWN_0Goeu5ZAOE7JRvSp8x3TsbtQACx_JLT_h9w&oe=679DC841',
    status: 'PUBLISHED',
    imageDescription:
      'The image is the cover of "Action Comics" issue No. 19, dated December 1939. It features a superhero in a red and blue suit with a cape, who is lifting a large artillery shell over his head. There is an explosion in the background and a biplane in the sky.',
    postUrl: 'https://www.facebook.com/54618571998_803082431820852',
    totalEngagement: 2450,
  },
  {
    shares: 294,
    reactions: 2148,
    message:
      'Classic Comic - Dr Strange #169 (1968) - Origin retold. 1st Solo title. By Roy Thomas and Dan Adkins',
    id: '54618571998_611250697670694',
    comments: 6,
    publishTime: '2023-01-05T16:18:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/324145901_727379972244576_2525128798309049911_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jlMFqVHfhIIQ7kNvgGxG-sF&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ANEcB3dbg9ERQ64wxt3zug_&oh=00_AYA4rtU8QLRmM58JJOjuP44tyATveDYYbYVedn2R5zVU3w&oe=679DE65E',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book cover for "Doctor Strange, Master of the Mystic Arts," issue number 169, published by Marvel Comics. It features Doctor Strange in his iconic costume, standing confidently with mystical elements around him. There is also a large figure looming in the background. The cover highlights his origin story.',
    postUrl: 'https://www.facebook.com/54618571998_611250697670694',
    totalEngagement: 2448,
  },
  {
    message:
      'Classic Comic - Space Ghost 1 (1987)- Includes Pin-ups by Alex Toth. Cover and art by Steve Rude',
    id: '54618571998_713120020817094',
    publishTime: '2023-05-09T22:27:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/344848376_914980096465730_8878953892632320849_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nFGGDQtXDg8Q7kNvgFmO2it&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AvTk5bmSziIvFA13hRBimly&oh=00_AYDu7NY6EzlrOuy7pmWrrj4uX3rAlBZKjn5gvJje2_Mwog&oe=679DD306',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'This image is a comic book cover featuring "Space Ghost." It shows Space Ghost, a superhero in a white suit and yellow cape, flying through space with three companions in matching outfits. The background is a cosmic scene with swirling colors. The text "SPACE GHOST" is prominently displayed at the top.',
  },
  {
    message: 'the best of times',
    id: '54618571998_1015354287260331',
    publishTime: '2024-07-10T16:10:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/450397125_1014997767295983_2621859171218413718_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=LRv-8bD3VoQQ7kNvgG-bgED&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ar-pLjOCTS9S8Pu2xAqhP0o&oh=00_AYCs2sAqm2e9ZWhvJMZVywGZCOtrj6UwoZurU-cFANXaPw&oe=679DCB9C',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'Three children excitedly look at a rack full of comic books with titles like "SLAM," "BANG," and "POW." One child exclaims, "AH! COMIC BOOKS!!"',
  },
  {
    message:
      'Classic Comic - Marvel Super Heroes #18 (1969) - Origin and 1st app of Guardians of the Galaxy. Gene Colan cover and art',
    id: '54618571998_671184968343933',
    publishTime: '2023-03-16T19:22:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/336486689_532571562391794_5250665401658993169_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WhG3FN_73r4Q7kNvgHN7bON&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AxjXGRI5F_kLVcGnmbzoU2h&oh=00_AYBPjDR-SmdILn02HuxZuqNz-im3sh3g-ITi5QRkRmUU1Q&oe=679DF519',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image is a comic book cover titled "Marvel Super-Heroes Presents: Guardians of the Galaxy." It features four characters in colorful costumes walking towards the viewer. The prominent title is in bold yellow and orange letters, set against a space-themed background.',
  },
  {
    message:
      'Classic Comic - Strange Tales Annual #2 (1963) - ,Jack Kirby Cover. Jack Kirby and Steve Ditko art. 4th appearance of Spiderman',
    id: '54618571998_620389356756828',
    publishTime: '2023-01-16T20:19:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/325487925_509397981177015_3431925502473124527_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DCe9LxT3EKgQ7kNvgGO7f8E&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AEj86Fc0xlMaisai1dICqfl&oh=00_AYBH9bKHzk59mJQQ_MV_dbtw_Xk7O6rg0e34PQx51__-qg&oe=679DD130',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic book cover for "Strange Tales Annual #2" from 1963 by Marvel Comics. It features 72 pages and showcases Spider-Man and the Human Torch facing off against each other. The cover promises an epic-length thriller among other features.',
  },
  {
    shares: 200,
    reactions: 2225,
    message:
      'Classic Comic - Adventure #136 (1949) - Love this cover by Al Wenzel',
    id: '54618571998_805898828205879',
    comments: 14,
    publishTime: '2023-09-16T14:49:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/378559819_805565004905928_7396365507973210390_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4QdMos6XaqoQ7kNvgH7x5eR&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AeuYoz_Z6s18yKB-UbYSALw&oh=00_AYAxVlzvtLyfUiToqD16mhrESAfF8t5LPhro_5Xc-obUkA&oe=679DE4FD',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a cover of "Adventure Comics" No. 136, featuring a young Superman running at super speed. The text highlights him as "speedier than a jet plane," "more powerful than a locomotive," and "faster than a bullet." The cover price is ten cents, and it notes that it\'s a 52-page magazine from DC.',
    postUrl: 'https://www.facebook.com/54618571998_805898828205879',
    totalEngagement: 2439,
  },
  {
    message: 'The Fantastic Four cartoon (1967-1970)',
    id: '54618571998_672651368197293',
    publishTime: '2023-03-18T16:16:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/336381438_175937824801567_9164060910867198494_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qOdPi8YylL8Q7kNvgG6skQx&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYCA0EobznEcnavcaR_hCQgfmFyXC8kJtEoHOtKcObCKYA&oe=679DCA8B',
    status: 'SCHEDULED',
    imageDescription:
      'The image depicts a vintage comic-style illustration of four superheroes in front of a large, red number "4." The characters include a flaming figure flying, a rocky humanoid, a woman, and a man in blue suits with the number "4" on their chests.',
  },
  {
    message: 'Marvel Pin-up from the 60s',
    id: '54618571998_807400621389033',
    publishTime: '2023-09-18T17:57:20+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/378529146_807400414722387_5538576213075367840_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nVJPDm-Z1xcQ7kNvgEopPe5&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AQ6uIXz3wArX-td61b3bq_j&oh=00_AYBCt1GtaTKP8gb8G7C78xuCfnDiZBOEPuE5HVV8IbMgWA&oe=679DC3C0',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image depicts a comic cover featuring the Incredible Hulk breaking through a wall. The Hulk is prominently shown, emphasizing his immense strength, with rubble and debris flying around. Below him, two frightened men in suits watch the destruction. The title "The Incredible Hulk" is boldly displayed at the top.',
  },
  {
    message:
      'Classic Comic - What if #1 (1977) - Brief Origin of Spider-Man and the Fantastic Four. Cover by John Romita',
    id: '54618571998_680916344037462',
    publishTime: '2023-03-28T19:22:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/337393535_921794215623926_2040342482614012752_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4ADNMI0N_Z4Q7kNvgFb8uBp&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYDI57FThtlB3eDYNpCjxCotXB1M8BYq3j39XqxEvizxfg&oe=679DFCE7',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This image is a comic book cover from Marvel Comics titled "What If Spider-Man Joined the Fantastic Four?" It features Spider-Man alongside the Fantastic Four characters. The cover announces an all-new story exploring this alternate scenario, with illustrations of Spider-Man, Human Torch, Invisible Woman, Mister Fantastic, and The Thing. The issue is the first in its series and emphasizes a unique "Fantastic Five" concept.',
  },
  {
    shares: 239,
    reactions: 2021,
    message: 'I love these old comic book ads',
    id: '54618571998_797546909041071',
    comments: 168,
    publishTime: '2023-09-04T14:18:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/375047082_797228695739559_2496343276261748515_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VYfC483HqSUQ7kNvgFRceKJ&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AaSxsPHaO2CEpT-aiINU57u&oh=00_AYCv7NiMT-dY8nk08ZNDSF-tqdLb8UGWWcOLyKhdFu7Rzw&oe=679DF979',
    status: 'PUBLISHED',
    imageDescription:
      'The comic-style advertisement is for "The Weird World of Aurora," featuring Aurora\'s Monster Scenes Custom Builder Kits. It showcases characters like a mad scientist and classic horror figures, including Frankenstein\'s monster and Vampirella. The scenes depict assembling a storyline involving a "girl victim" for a laboratory experiment. The kits allow users to create their own scary scenes by snapping together pieces with no glue needed. The ad emphasizes the fun and creativity in building and experimenting with the kits.',
    postUrl: 'https://www.facebook.com/54618571998_797546909041071',
    totalEngagement: 2428,
  },
  {
    shares: 150,
    reactions: 2154,
    message:
      'Classic Comic - Magnus, Robot Fighter #17 (1967) - Russ Manning art. Painted cover by Vic Prezio',
    id: '54618571998_1086281513500941',
    comments: 122,
    publishTime: '2024-10-12T22:25:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/462492846_1085691163559976_2759813515527269246_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qqPdmXNJ8mQQ7kNvgFTYTPz&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AKYaoeCGwU8pX7Z0Cnvfmza&oh=00_AYDCzNNxQv76ZrfvOW6TkW6WeVWrJx-Mtw903hq8kbR3Rw&oe=679DDF29',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book cover titled "Magnus Robot Fighter 4000 A.D." It shows a muscular man, Magnus, in a red outfit fighting against robots. The background features a cityscape with explosions and vibrant action. Displayed are the text "MAGNUS ROBOT FIGHTER" and a tagline about Magnus using his powers against "invading mini-robs from Sirius." The price is marked as 12 cents.',
    postUrl: 'https://www.facebook.com/54618571998_1086281513500941',
    totalEngagement: 2426,
  },
  {
    message:
      'Classic Comic - X-Men #101 (1976) - 1st appearance of Phoenix by Chris Claremont and Dave Cockrum.',
    id: '54618571998_613686320760465',
    publishTime: '2023-01-08T21:03:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/324305274_940572546928892_3341680687288488306_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=g-TwFqijULsQ7kNvgEouVuO&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ANEcB3dbg9ERQ64wxt3zug_&oh=00_AYB1nd4Dxjxb-N40K_BIw99XJ6oT80O6TmZ1scIs5c6m7g&oe=679DD5C7',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is the cover of "X-Men" Issue #101 from October 1976, featuring Phoenix emerging dramatically from water, with other characters like Storm and Cyclops visible in the scene. The tagline reads: "Enter: The Phoenix!" marking an iconic moment in the series.',
  },
  {
    shares: 355,
    reactions: 2049,
    message: "Thing Pin up from the 60's",
    id: '54618571998_666526702143093',
    comments: 16,
    publishTime: '2023-03-10T17:12:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/334578203_429286319401019_2920041734797840060_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IZZZozW8jbkQ7kNvgEl5mfp&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AxjXGRI5F_kLVcGnmbzoU2h&oh=00_AYBTmHg5AVA8-NQRcGf9hs6crOZbfn74CrA_plzKXuJ_PQ&oe=679DD897',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book illustration titled "A Marvel Masterwork Pin-Up," featuring the superhero known as The Thing from Marvel Comics. He is posed dynamically, ready for action, with the phrase "It\'s Clobberin\' Time!" displayed above him. The Thing is depicted with his characteristic rocky appearance and wearing blue shorts.',
    postUrl: 'https://www.facebook.com/54618571998_666526702143093',
    totalEngagement: 2420,
  },
  {
    shares: 217,
    reactions: 2174,
    message: '',
    id: '54618571998_1143630837766008',
    comments: 25,
    publishTime: '2024-12-24T08:04:46+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/471589165_1143630811099344_8288597071701787646_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nHuSDPuZYnAQ7kNvgG0B4Rt&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AMt5zrzWPVaUs38QfKz3F1R&oh=00_AYDriolE_9L3iur7oz6euecOEJ2clA4nWCKpIwjf8621Vw&oe=679DD70E',
    status: 'PUBLISHED',
    imageDescription:
      'Four female superheroes are gathered around a decorated Christmas tree, with the words "Merry Christmas" at the top. They are posing cheerfully with gifts and festive decorations.',
    postUrl: 'https://www.facebook.com/54618571998_1143630837766008',
    totalEngagement: 2416,
  },
  {
    message:
      'Classic Comic -  Batman #22 (1944) - Alfred solo stories begin (art by Jerry Robinson) . Catwoman and Cavalier appear. Bill Finger stories. Cover by Sprang',
    id: '54618571998_836072751855153',
    publishTime: '2023-10-29T18:31:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/397072252_836014438527651_4796905957045352035_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TaRmK6GWYfgQ7kNvgG4tIO-&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=APJaJCyVrXvQdQbZ44Kmjb9&oh=00_AYCr7GNZ4MnDF-n0K69DM6v7So33WbkJ_YBWvXKPeuck1w&oe=679DD1EC',
    status: 'SCHEDULED',
    imageDescription:
      'This is a vintage comic book cover featuring Batman, Robin, and Alfred. They\'re on stage in front of red curtains, with the title "BATMAN" prominently displayed at the top. Alfred is highlighted as part of "The Adventures of Alfred."',
  },
  {
    shares: 285,
    reactions: 2117,
    message:
      'Classic Comic - Batman #23 (1944) - 2nd Joker Cover in the Batman title. Joker appears. Alfred back up story. Bill Finger stories. Jerry Robinson art. Dick Sprang Cover and art',
    id: '54618571998_694584412670655',
    comments: 8,
    publishTime: '2023-04-15T15:10:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/341623310_937057507609196_6493622032372560055_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=j4Js6YTw9kYQ7kNvgHhWrey&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AlpbJrh9swE9shsKu1FU20_&oh=00_AYByhJUzBBgpVtViBXb5-U6yvjdm96R_x2YMhj7la6fqDQ&oe=679DEDBD',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book cover featuring Batman and Robin facing the Joker over a chessboard. Batman is holding a chess piece shaped like the Joker, while the Joker grins menacingly. Robin observes from the side. The title "Batman" is prominently displayed at the top.',
    postUrl: 'https://www.facebook.com/54618571998_694584412670655',
    totalEngagement: 2410,
  },
  {
    message:
      'Classic Comic - Avengers #181 (1979) - New Line Up. 1st appearance of Scott Lang (Later becomes the new Ant-Man. Cover by George Perez and Terry Austin',
    id: '54618571998_946484020814025',
    publishTime: '2024-04-05T19:19:07+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/434822695_946070207522073_5967445419416621874_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=CkEe6dp0tesQ7kNvgFMjX8g&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AgWySNYoCQdWM2hsmdj80hA&oh=00_AYDHnisfuY7sVHV4W3A53tN0-3eROXRHOsqLWI2faKagvw&oe=679DBD3A',
    status: 'SCHEDULED',
    imageDescription:
      'This is the cover of "The Avengers" comic issue #181 from March, featuring a large group of Avengers characters. The title, "Earth\'s Mightiest Heroes," appears prominently. A character in the foreground is declaring that only seven members will remain as Avengers, while others are being dismissed. The price is marked as 35 cents.',
  },
  {
    shares: 234,
    reactions: 2150,
    message:
      'Classic Comic - Captain America #101 (1968) - Red Skull, Nick Fury  and Sleeper appear. Jack Kirby, Syd Shores and John Romita cover',
    id: '54618571998_665614998900930',
    comments: 19,
    publishTime: '2023-03-09T18:21:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/334775121_192999386678871_6788131375377091176_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=M8H8nOE4OTAQ7kNvgG1IUSr&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AxjXGRI5F_kLVcGnmbzoU2h&oh=00_AYAHEMCLJKMA9_sTL_xnsX6Z8GutRWmYni3qkX916PN2Ug&oe=679DF9C3',
    status: 'PUBLISHED',
    imageDescription:
      'This image is the cover of Marvel Comics\' "Captain America" issue #101. It features Captain America in action, using his shield against an adversary. The bold title "CAPTAIN AMERICA" dominates the top, and the tagline "When Wakes the Sleeper!" is visible at the bottom. The artwork includes dynamic action and dramatic colors typical of comic book covers.',
    postUrl: 'https://www.facebook.com/54618571998_665614998900930',
    totalEngagement: 2403,
  },
  {
    shares: 220,
    reactions: 2173,
    message:
      'Classic Comic - Detective #228 (1956) - Outlaw Batman story. Win Mortimer cover',
    id: '54618571998_716053963857033',
    comments: 9,
    publishTime: '2023-05-13T22:08:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/346870673_741688304408166_2545145330931333809_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6M_GHFQpyv0Q7kNvgG5Y6fJ&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AvTk5bmSziIvFA13hRBimly&oh=00_AYCKpRIZ5c2RJxmJ1PHnNFUsfmHwUgxJf5jLQVMTE3qwcA&oe=679DF57C',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a cover of "Detective Comics" No. 228. It features Batman behind bars, with Robin looking at him from outside the cell. There are prisoners laughing in the background, and the cover teases the story of "The Outlaw Batman!" It also includes an extra section on "How You Can Read Fingerprints!"',
    postUrl: 'https://www.facebook.com/54618571998_716053963857033',
    totalEngagement: 2402,
  },
  {
    message:
      'Classic Comic - Detective #160 (1950) - The Globe Trotter of crim story. Cover by Win Mortimer',
    id: '54618571998_801876888608073',
    publishTime: '2023-09-10T21:33:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/377459756_801459355316493_8646716396799920298_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PmdailRqkqMQ7kNvgGWFPu0&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AeuYoz_Z6s18yKB-UbYSALw&oh=00_AYDHfvLbuKxruru2u4BWI7xeQ6lX2wfl24Cx9UmdNAdgIA&oe=679DE643',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'This is the cover of "Detective Comics" issue No. 160, featuring Batman and Robin in action on the Eiffel Tower, pursuing a villain known as "The Globe-Trotter of Crime." The cover highlights their adventurous pursuit and includes vibrant colors typical of the comic book style.',
  },
  {
    message: "I'd buy it",
    id: '54618571998_834039435391818',
    publishTime: '2023-10-26T16:02:41+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/395775624_833795568749538_3136283641029591487_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XFq9ilFIWVwQ7kNvgGAsRzH&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AvEhpGDi1HQFkGgpMJudFl6&oh=00_AYDf1js7Jzf8wo6YUTdqmCKG-qL8K4IBMNCkR7CLGnlK-Q&oe=679DD877',
    status: 'SCHEDULED',
    imageDescription:
      'This comic book cover features a young boy resembling Richie Rich labeled as "Bruce Wayne: The Poor Little Rich Boy." He is looking at the bloodied, money-covered hand of a fallen person. A bat hovers above. On the side, characters resembling superheroes like Martian Manhunter, Wonder Woman, Flash, Green Lantern, and Aquaman are depicted in a cartoony style.',
  },
  {
    shares: 92,
    reactions: 2201,
    message: 'Jim Steranko- 1 of the nicest guys in the hobby',
    id: '54618571998_744921340970295',
    comments: 106,
    publishTime: '2023-06-20T13:07:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/355162472_744686500993779_6232756816346347150_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8Na6zXPjaKMQ7kNvgHFMyHp&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ASXWjd5_HguOydGi6Cp1YcZ&oh=00_AYBnc6oypVh5V3RGvt1QnhxfR57_Bi4p7unk2Ndoo-MlUw&oe=679DFDC3',
    status: 'PUBLISHED',
    imageDescription:
      'The image shows a person wearing sunglasses and a leather jacket, standing in front of a collage of vintage comic book covers, including titles like "Nick Fury, Agent of S.H.I.E.L.D.," "Captain America," and "Strange Tales." The comics feature dynamic, colorful artwork typical of classic superhero themes.',
    postUrl: 'https://www.facebook.com/54618571998_744921340970295',
    totalEngagement: 2399,
  },
  {
    message:
      'Classic Comic - Hulk #129 (1970) - Hulk battles the Glob. The Leader appears. Herb Trimpe cover and art',
    id: '54618571998_827049676090794',
    publishTime: '2023-10-16T19:15:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/392931792_826645232797905_3940819777940452422_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aZCknqKXS44Q7kNvgGjW7ZL&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFN0am19oe23tkLvrxzAuej&oh=00_AYAhFDMxUsUcwiFkttEbAgFE62NZaEqAt_Bd_v1mvhDptw&oe=679DEF99',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic book cover featuring the Hulk, who is in battle with a large creature on a metal structure. The title reads "The Glob Writhes Again!" Hulk appears to be struggling, saying, "Can\'t hold on! Going to fall!" The comic is from the "Incredible Hulk" series, issue #129, and it costs 15 cents.',
  },
  {
    shares: 230,
    reactions: 2135,
    message:
      'Classic Comic - Batman #189 (1967) - 1st Silver Age appearance of Scarecrow.. Story by Gardner Fox. Cover by Carmine Infantino',
    id: '54618571998_714542090674887',
    comments: 25,
    publishTime: '2023-05-11T20:31:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/345467281_765088311817354_5140057162326514222_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=MZuaQtwQWWMQ7kNvgH7j8e9&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AvTk5bmSziIvFA13hRBimly&oh=00_AYCukTbZgRsvVRBZ9bREM47-DjEke0rX5y9Y8uiBwbopMA&oe=679DE9A5',
    status: 'PUBLISHED',
    imageDescription:
      'The comic book cover shows Batman being overpowered by the villain, the Scarecrow, set against a full moon and dark, eerie background. The text reads "Fright of the Scarecrow!" and "Holy cliff-hanger! The Caped Crusader in the grip of one villain he is compelled to fear!"',
    postUrl: 'https://www.facebook.com/54618571998_714542090674887',
    totalEngagement: 2390,
  },
  {
    message: 'still the best',
    id: '54618571998_683713420424421',
    publishTime: '2023-04-01T16:19:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/339116055_213457837947031_5744483780478127806_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NBZaXeKmIMEQ7kNvgGKnsLL&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AjtGYtRKUGGoHrazfSxAA5t&oh=00_AYAUaYn4iE5o9Bye0Q-9kwbZ_-jmi1O_ZtVjm_qk21RhCw&oe=679DEEE3',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image features two side-by-side pictures of a woman. On the left, she is dressed as a superhero with a tiara and cuffs, in a pose with crossed wrists. On the right, she is wearing a tied crop shirt and jeans, standing confidently.',
  },
  {
    shares: 310,
    reactions: 2054,
    message:
      "Classic Comic - Detective #45 (1940) - 1st Joker story in Detective Comics.Ad for 1940 New York World's Fair. Bill Finger and Jerry Siegel stories. Jerry Robinson and Bob Kane cover",
    id: '54618571998_655200783275685',
    comments: 15,
    publishTime: '2023-02-24T16:14:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/332941227_3013928572249335_2755317119401348641_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dZZ08TDE2zkQ7kNvgGWXce8&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYAL1reJxU6Lc-CB8L6O8-Da9ihwEK420muP2JXRwm05og&oe=679DD484',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vintage "Detective Comics" cover, issue No. 45, featuring Batman leaping with his cape spread wide in pursuit of a man binding Robin to a tree. The background is red, and there\'s a circular image of Batman\'s face in the top left corner. The artwork is attributed to Bob Kane, and the comic is priced at 10 cents.',
    postUrl: 'https://www.facebook.com/54618571998_655200783275685',
    totalEngagement: 2379,
  },
  {
    message: 'Spidey and MJ on vacation by John Romita',
    id: '54618571998_809476137848148',
    publishTime: '2023-09-21T18:39:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/381048515_809466064515822_676529151236011232_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=I8JoRrT6Rd8Q7kNvgFi_fGk&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AQ6uIXz3wArX-td61b3bq_j&oh=00_AYDfR-4_BFqX-puRZraZ5PGaiQg_A8Hh0gsVBzTCSb_q5Q&oe=679DCFD8',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'Spider-Man is perched on a wooden post, while a woman in a green bikini relaxes in a hammock made of webbing. The setting is a sandy, outdoor area with clear skies.',
  },
  {
    message:
      'Classic Comic - Amazing Spider-Man #17 (1964) - 2nd appearance of the Green Goblin. Human Torch appears. Cover and art by Steve Ditko',
    id: '54618571998_695426052586491',
    publishTime: '2023-04-16T19:44:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/341759152_212715321399287_6754783196713742244_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=52BGZMu2FyoQ7kNvgEKacBY&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AlpbJrh9swE9shsKu1FU20_&oh=00_AYCAWA2Kgi1cDQg1_SeqlJCiB-kLhh8QHqU5rFYrptCxFA&oe=679DD64E',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage comic book cover for "The Amazing Spider-Man" issue #17. It features Spider-Man and the Human Torch prominently, with the Green Goblin making a return. The cover announces a guest appearance by the Human Torch and is action-packed, showing Spider-Man using his web to intercept the Human Torch. Bystanders look on in surprise. The issue is approved by the Comics Code Authority, priced at 12 cents, and published by Marvel Comics.',
  },
  {
    message:
      'Classic Comic - DETECTIVE #267 (1959). The 1st appearance of the Bat-Mite. Over the last few years this book has bcome a great investment book as well as very popular with Collectors and Batman fans alike. Such a great piece of early Silver Age Comic Book History',
    id: '54618571998_955814893214271',
    publishTime: '2024-04-18T20:22:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/437759446_955357526593341_6111745862352609952_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=LzKwPxVl2XgQ7kNvgEqAfyX&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ayhl-RshheSPztt9I5rbYoz&oh=00_AYCBKWIunpPdNskcWH4RF_SphwgyRGiWAfxB1U71kWtN9g&oe=679DDFAC',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage cover of "Detective Comics" featuring Batman, Robin, and a character named Bat-Mite. The scene shows a messy Batcave, with papers scattered on the floor. Batman and Robin appear surprised as Bat-Mite, a small imp-like character dressed similarly to Batman, introduces himself. The cover headline reads "Batman Meets Bat-Mite!"',
  },
  {
    shares: 244,
    reactions: 2014,
    message: 'Sometimes a super hero moonlights',
    id: '54618571998_771268595002236',
    comments: 113,
    publishTime: '2023-07-27T13:09:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/363334926_770420291753733_8486311256993455117_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JI0rPlDfjoMQ7kNvgH4CqID&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AxJt4ThoRXUxba1szmG7ZRv&oh=00_AYBfIl6bZzL1R52MP3OuuAOdOVF1YcCi269XmKKl-zqs-g&oe=679DF5AF',
    status: 'PUBLISHED',
    imageDescription:
      'A person wearing a superhero outfit with a large "S" symbol is sitting at a desk using a typewriter in a vintage office setting.',
    postUrl: 'https://www.facebook.com/54618571998_771268595002236',
    totalEngagement: 2371,
  },
  {
    message:
      'Classic Comic - Action #340 (1966) - 1st appearance and origin of the Parasite. Centerfold is a Superman pin up by Curt Swan. Issue written by Jim Shooter',
    id: '54618571998_630880602374370',
    publishTime: '2023-01-28T16:37:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/327566878_1547627825706603_3091407626281416934_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DQa-AkRuXuYQ7kNvgGI1IO_&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Alupxj5DpbCH-SJ9oxPO6Md&oh=00_AYAwB1ybSfv3fMLhgqbvZ0bdyZ5QK9AasdLkKvR5I3tAZw&oe=679DC6DF',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a cover of an "Action Comics" issue, featuring Superman being attacked by a purple-skinned villain in an alley. The cover text introduces this villain as "The Parasite," who can drain energy from others, presenting a new threat to Superman. There\u2019s also a crowd reacting in the background.',
  },
  {
    message: 'Sheena by Dave Stevens',
    id: '54618571998_721239813338448',
    publishTime: '2023-05-20T18:16:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/347115099_561537276114889_2148341980844186383_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=LRX_o0LFNjQQ7kNvgHd9CW3&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ArYh5GykvSY8MnqKvLRRkWA&oh=00_AYAXkltgILHmv_aj_2qftDKPDT8ObdyD_HF9GxfCjZT2qQ&oe=679DED1C',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image depicts a comic-style illustration of a woman with long blonde hair and wearing a leopard-print outfit. She is crouched on a tree branch, holding a knife, with a parrot perched beside her. The background shows dense jungle foliage.',
  },
  {
    message: 'By Brian Bolland',
    id: '54618571998_1108134004649025',
    publishTime: '2024-11-08T22:29:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/465660509_1107692738026485_5641351566974636933_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=MfbVHR_FQY4Q7kNvgFUL26i&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AWiLMMO5XVPgpTX6RC14Hak&oh=00_AYBMGSf8NvgSWINsDLVzoC-nyJCTSfsZDK2C1VBZ1kQ0Ug&oe=679DD665',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image features a group of comic superheroes, with a prominent figure flying above them. Below the flying figure, the "Daily Planet" globe is visible, and a variety of other characters are standing on a rooftop, including iconic heroes in colorful costumes. The scene is dynamic and vibrant.',
  },
  {
    message:
      'Classic Comic - Wolverine #1 (1988) - 1st Ongoing series. John Buscema cover and art',
    id: '54618571998_677837411012022',
    publishTime: '2023-03-24T19:29:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/337414450_1301947977086246_384449815641328798_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=iQSxbHTGe08Q7kNvgGbl_A0&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYAtFvZnQnKIDQRTL-jBYQ07gH9RwKQjfMAHNMh3NJ5GUg&oe=679DE7BA',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'This is a comic book cover featuring Wolverine in a dynamic battle pose, standing over a pile of defeated opponents. The title "Wolverine" is prominently displayed at the top, indicating it is his own series by Marvel. The background has a night setting with a full moon, adding a dramatic effect.',
  },
  {
    message: '',
    id: '54618571998_1060709422724817',
    publishTime: '2024-09-11T17:08:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/459075453_1060405399421886_9028113046361548945_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=o_R74Ce4YwMQ7kNvgFx1gMW&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AhpBms0SgBWJP0JvlmimRHv&oh=00_AYDNxQZYfH4TINYKBWw3uZQ1mMFwxyW9-XpfzqEy-7VVeg&oe=679DCB6C',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'Robin is depicted locking Batman in a jail cell, with Robin smirking and saying, "That is what you get for slapping me on Facebook all the time." This humorous comic panel plays on the well-known Batman slapping Robin meme, adding a modern social media twist.',
  },
  {
    shares: 125,
    reactions: 2196,
    message:
      'Classic Comic - X-Men #39 (1967) -  X-Men in new costumes. Mastermind, Blob, Unus , Blob and Changeling and Vanisher appears. Death of Mutant Master. Origin of Cyclops',
    id: '54618571998_832733302189098',
    comments: 32,
    publishTime: '2023-10-24T19:47:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/395498784_832719358857159_125878547862392038_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Zw3j1oXTVmoQ7kNvgHGnTgx&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AvEhpGDi1HQFkGgpMJudFl6&oh=00_AYB5oQQnPSo_kKXRHNShzmYNe_93tsmmnJrS1vumneq0xw&oe=679DF478',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vintage comic book cover for "The X-Men" issue #39, featuring the team in action poses with new costumes. Bold text announces "NEW COSTUMES!! NEW THRILLS!!" and a dramatic question at the bottom reads, "The end of the dread mutant-master--or of the X-Men?? Don\'t miss \'The Fateful Finale!\'" The Marvel Comics Group logo and the Comics Code Authority stamp are visible at the top.',
    postUrl: 'https://www.facebook.com/54618571998_832733302189098',
    totalEngagement: 2353,
  },
  {
    message:
      'Classic Comic - USA #7 (1943) - Classic WW 2 cover by Alex Schomburg. Origin of Marvel Boy. Secret Stamp begins',
    id: '54618571998_682261247236305',
    publishTime: '2023-03-30T15:21:20+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/339009007_906933413907897_7087592923291197522_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=KcQG1NM9cskQ7kNvgEBSHsz&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AjtGYtRKUGGoHrazfSxAA5t&oh=00_AYAfqDxCaZb40ATusN1LfbL1LB7SX74Eq-tGvbw-iZ484A&oe=679DCB07',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a vibrant vintage comic book cover titled "Captain America," featured in USA Comics, issue number 7. It depicts Captain America and a sidekick engaged in an action-packed battle scene set on a naval carrier, complete with explosions, planes, and dramatic action poses. The cover includes bold, colorful text and imagery typical of classic comic art.',
  },
  {
    message:
      'Classic Comic - Captain America #37 (1944) - Red Skull appears. Human Torch back up story. Iconic Flag cover by Alex Schomburg',
    id: '54618571998_646213727507724',
    publishTime: '2023-02-14T16:13:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/330981606_1362501067834839_8413329661658532826_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kF4dgFq8KPAQ7kNvgEaPPx5&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYCiyrKbeLL7dX2Sf6C54wwc8G0dxj6OHw-Y-A_Xks4bjg&oe=679DC6EB',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a vintage Captain America comic book cover, numbered 37. It features Captain America and his sidekick engaging in battle against Nazi soldiers. Captain America is depicted leaping into action with his shield, set against a dramatic background of chaos, explosions, and a U.S. flag. The artwork is vibrant and dynamic, capturing a scene of wartime heroism.',
  },
  {
    message:
      'Classic Comic - X-Men #40 (1968) - Roy Thomas Story\nGeorge Tuska cover & Art. Origin of Cyclops and 1st time the Frankenstein Monster appears on the cover of a Marvel Comic',
    id: '54618571998_891338716328556',
    publishTime: '2024-01-18T18:17:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/420556826_890820109713750_642931518441558598_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JCjSEatPhPUQ7kNvgFBnh7d&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AnI2vm1qwoJyPrblQR7BRtx&oh=00_AYCMlqVKWsq4A4jxHkPh7edSZ9XfepxJ4UFXQImDOaW1vQ&oe=679DDCC8',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This image is the cover of "The X-Men" comic issue #40, published by Marvel Comics. It features a monstrous figure resembling Frankenstein menacingly advancing, while the X-Men are seen in the background, ready for action. The cover text reads "The X-Men Meet Frankenstein!" and "The Mark of the Monster!"',
  },
  {
    message: 'Amazing Spider-Man #14 the Angry GF Variant',
    id: '54618571998_1149197203876038',
    publishTime: '2024-12-31T19:39:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/472196672_1148819880580437_5499313446884573604_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sffJ8lROICcQ7kNvgGe0Bjr&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A3DA4TIa7W0Y0Ersp1m0Znm&oh=00_AYBnTyXg-OMTh_9-ExXijsKVTGL0_D7GPMvCasYKyoUj7g&oe=679DD585',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image shows a comic book titled "Amazing Spider-Man #14" with "1.8" grade, featuring the Green Goblin on the cover. Words "GO TO HELL" are written across the front in black marker. The back cover has a lengthy angry message, also written in marker, seemingly from an upset person, likely a girlfriend. It is displayed in a protective case, labeled as the "Angry Girlfriend Variant."',
  },
  {
    shares: 196,
    reactions: 2106,
    message:
      'Classic Comic - Marvel Premiere #28 (1976) - Legion of Monsters Appear (Man Thing , Morbius, Ghost Rider & Werewolf by Night)',
    id: '54618571998_683130787149351',
    comments: 38,
    publishTime: '2023-03-31T19:28:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/339108922_899816277800269_6428724539699577605_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EybvJwQUE98Q7kNvgHOcKQS&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AjtGYtRKUGGoHrazfSxAA5t&oh=00_AYCO1LVMNn_Oy2agbyHnQH79LIEI9V7n-vS__GsUBAknzw&oe=679DDD4B',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a comic book cover titled "Marvel Premiere featuring The Legion of Monsters," showcasing characters like Ghost Rider, Man-Thing, Morbius, and Werewolf by Night. The superheroes are depicted in dynamic action poses, with Ghost Rider prominently in front, warning about an unknown threat. The cover emphasizes a spine-tingling team-up and includes explosive imagery.',
    postUrl: 'https://www.facebook.com/54618571998_683130787149351',
    totalEngagement: 2340,
  },
  {
    shares: 121,
    reactions: 2180,
    message: 'Spidey Sketch by John Romita (SDCC 1975)',
    id: '54618571998_910367137759047',
    comments: 38,
    publishTime: '2024-02-13T19:15:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/426636470_908640577931703_8962965871557782407_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zVrQX7asUVsQ7kNvgEMq_EH&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APsNzbbfu_cdkD25yK7t850&oh=00_AYACcty-lZi3ogNchNoJpPvxQfWMLjmoi2kswACxb1yXew&oe=679DD490',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a black-and-white illustration by J. Romita Sr., created during the 1975 San Diego Comic-Con. It features a portrait of Spider-Man in the background and a man and an elderly woman in the foreground. There\'s a handwritten note saying "Best of wishes to all at the San Diego The Comic Con 1975! John Romita."',
    postUrl: 'https://www.facebook.com/54618571998_910367137759047',
    totalEngagement: 2339,
  },
  {
    message:
      'Classic Comic - Action #66 (1943) - Classic WW 2 Cover. Hitler appearance. last 3 Aces. Jack Burnley Cover',
    id: '54618571998_669459578516472',
    publishTime: '2023-03-14T15:10:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/336120461_1347130752795221_923716311740037850_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2LFCX5w1b4UQ7kNvgGU0MEt&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AxjXGRI5F_kLVcGnmbzoU2h&oh=00_AYDof4HM6m_dGhHhCVb82oMufejxNRi5723pJRoPKZr6RQ&oe=679DDAA4',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is the cover of "Action Comics" No. 63, featuring Superman in action. He\'s depicted stopping a bomber mid-flight, with the pilot showing panic. The comic is priced at ten cents and prominently displays the Superman logo.',
  },
  {
    message:
      'Classic Comic - Micronauts #1 (1979) - Cover by Dave Cockrum and art by Michael Golden',
    id: '54618571998_593842029411561',
    publishTime: '2022-12-16T20:27:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/320482551_541701957853453_4536137843280090551_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uuLScOyik1wQ7kNvgH6yuOn&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AuexS-KxJ4KGtQ3Cm4pz2Tg&oh=00_AYCq62BcNYHcgKyWcjLUKysax1E5g-387KGccG4n199XpQ&oe=679DDF51',
    status: 'SCHEDULED',
    imageDescription:
      'The image is the cover of the comic "The Micronauts" from Marvel Comics, featuring a dynamic group of colorful characters in action poses, with the text declaring it as the "Fantastic First Issue."',
  },
  {
    message: '',
    id: '54618571998_10152024613806999',
    publishTime: '2013-12-06T21:15:54+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/468209058_10161767515616999_7392159947212989171_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=5XAPoSeNPyAQ7kNvgGz111F&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AGG52BA_W30qiEYKWzf-LYW&oh=00_AYDs944H-ltu9SptSjWL51D8pMGK95hGO7NaW6U35HjWRA&oe=679DDA91',
    status: 'REJECTED',
    rejectionReason: 'Misleading information',
    imageDescription:
      'A yellow background with the text: "I don\'t care how old I am, I still like cartoons."',
  },
  {
    shares: 116,
    reactions: 2168,
    message:
      'Classic Comic - Action #242 (1958) -Story by Otto Binder\nCover art by Curt Swan.Origin & 1st Appearance of Brainiac. 1st Appearance of the Bottle City of Kandor.',
    id: '54618571998_930730729056021',
    comments: 51,
    publishTime: '2024-03-14T20:15:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/430647352_928091349319959_1018342650352972818_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=LdUoLMAhyikQ7kNvgFxo6wH&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A1Cltn3twGkGm6VFwILAtl1&oh=00_AYCwUrHE6CsGeKMsnTOtUa6ZmbU0xGEqdklfArM6QqKrhA&oe=679DCA05',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a cover of "Action Comics" No. 242 from July, featuring Superman. The cover shows Superman facing an alien character with green skin standing on a rocky platform. The alien challenges Superman with a speech bubble, warning of a destructive energy shield. The scene is set in space, with planets and stars in the background. The text highlights "The Super-Duel in Space!"',
    postUrl: 'https://www.facebook.com/54618571998_930730729056021',
    totalEngagement: 2335,
  },
  {
    message: 'by Alex Ross',
    id: '54618571998_718861413576288',
    publishTime: '2023-05-17T18:15:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/346666544_926824408397515_5435136208847401098_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hjJWIY3u2egQ7kNvgGcxsTP&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ArYh5GykvSY8MnqKvLRRkWA&oh=00_AYDK0JbfLjGsZN8zmANXoaqmk--3tHo0DDwMlnFBdZzHQA&oe=679DCC83',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'The image depicts two superheroes, Spider-Man and Superman, standing back-to-back with their arms crossed, set against a bright yellow background.',
  },
  {
    message: '',
    id: '54618571998_1025754432886983',
    publishTime: '2024-07-25T13:11:06+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/452140658_1022510396544720_1731781970762850521_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IrXTKyUlUHMQ7kNvgHlRd__&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AiJt7udfi2ZqOJR7039bo5l&oh=00_AYBfiHeM_Ip5hAc7monTaOhSc3YYmscf2pAWRytZmznMJw&oe=679DC6D1',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image shows a classic depiction of the Hulk, portrayed by Lou Ferrigno, with the text "My generation didn\'t need CGI. We had Lou Ferrigno." It highlights the practical effects used in earlier portrayals of the character.',
  },
  {
    shares: 441,
    reactions: 1848,
    message: '',
    id: '54618571998_820353283427100',
    comments: 42,
    publishTime: '2023-10-07T16:18:00+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/386662800_820087763453652_3324673277203179414_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=CROfrtUF5EMQ7kNvgHwFj4T&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AT-0UBkoD-77dQORts4-Ugl&oh=00_AYBOj0IVyqNcuK5Dyqkgt-mUGW77ub3S0ijHx-x3BiLSAA&oe=679DE83D',
    status: 'PUBLISHED',
    imageDescription:
      'In a two-panel comic, a man driving a car with a woman passenger first comments, "What a beautiful day." The woman suggests, "You should sell your comics." In the second panel, the man repeats, "What a beautiful day," now alone, having left the woman behind.',
    postUrl: 'https://www.facebook.com/54618571998_820353283427100',
    totalEngagement: 2331,
  },
  {
    message:
      'Classic Comic - Alpha Flight #13 (1984) - Wolverine appears. John Byrne Cover, art and story',
    id: '54618571998_713097097486053',
    publishTime: '2023-05-09T21:38:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/344744636_3403184653286489_5246941843994696058_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JG7KQ2bbFIcQ7kNvgFKlcg4&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AvTk5bmSziIvFA13hRBimly&oh=00_AYBx2kH5llYLW5VpugWRexeHFVDeAjfn-igbsJQTPPd2vA&oe=679DE16C',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is the cover of Marvel Comics\' "Alpha Flight" issue 13. It features a rugged character with pointed hair and claws protecting a woman in a forested graveyard setting. The character is shown in a defensive pose, and there is a speech bubble stating, "Okay, sucker, the only way to get to the lady is through me!" The title "Alpha Flight" is prominently displayed at the top, with the Marvel logo in the upper left corner.',
  },
  {
    message:
      'Green Lantern #5 (1961) - Origin and 1st appearance of Hector Hammond. Cover by Gil Kane and Joe Giella',
    id: '54618571998_807138428081919',
    publishTime: '2023-09-18T09:58:21+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/379265171_807138198081942_3880575549374646812_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wEDPegrCKJUQ7kNvgEgZwOn&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AeuYoz_Z6s18yKB-UbYSALw&oh=00_AYB85inMI89bbFk2kTM12W4h9OvLPcS6kc4-yAA8Ulqggg&oe=679DC5C9',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image is a comic book cover featuring Green Lantern issue number 5. Green Lantern is depicted flying over a cityscape, reaching out for his power ring, which is highlighted and appears to be slipping away. Text includes an intriguing headline about a "power ring that vanished" and a speech bubble expressing his concern about losing the ring and falling. The cover indicates a price of 10 cents and displays the Comics Code Authority seal.',
  },
  {
    message:
      'Classic Comic - Detective #196  (1953) -  Batman and Robin visit London in the "The City Without Guns" story. Cover by Win Mortimer and Ira Schnapp',
    id: '54618571998_851443650318063',
    publishTime: '2023-11-22T00:04:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/404970035_851218130340615_6491044831474512025_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0SgDf7oHTvsQ7kNvgEQ7ig-&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad1ff1s2cBGYM0_gvSA37EV&oh=00_AYCGsEXlK5sdrokHILPwoXtmrx7m_rgvWanKaNLFZAXsSw&oe=679DEFF6',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The cover of "Detective Comics" issue #196 from June features Batman and Robin swinging over a London bridge. The comic\'s tagline reads "Batman and Robin battle armed desperadoes in \'The City Without Guns!\'" The scene includes an astonished police officer and the iconic bat-signal in the background.',
  },
  {
    message: 'By Alex Ross',
    id: '54618571998_842509964544765',
    publishTime: '2023-11-08T18:09:27+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/399014890_842200894575672_2343593385963995395_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_JY0kmcBzp4Q7kNvgFJI2Nq&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AR-VLF_t3tmBjH-A-DjzpPc&oh=00_AYCmVF0dtHSfMb-o_XaXZdQ1vJC9vHn8btRPVgpO1IXfiA&oe=679DE516',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is an illustrated poster featuring Marvel superheroes in action poses, showcasing characters like Captain America, Iron Man, Spider-Man, and others in a dynamic composition. It\'s an artwork by Alex Ross, titled "Avengers/Invaders."',
  },
  {
    message:
      'Classic Comic - Marvel Mystery #20 (1941) - Origin of Angel in the text. Beautiful war cover by Alex Schomburg . Cool Plug for the New Human Torch comic on the cover.',
    id: '54618571998_642501651212265',
    publishTime: '2023-02-10T16:10:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/329917896_1489768398216664_4470470172680253976_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XSipqWzoYrYQ7kNvgGNMIjX&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AOWK0IeDNMQbdSLHTr-neG3&oh=00_AYD1fehk0j-tG89RA__9D4iGtuwnTV0TkKhutTKjB8-rHQ&oe=679DCBE5',
    status: 'SCHEDULED',
    imageDescription:
      'This is a vintage comic book cover, "Marvel Mystery Comics No. 20," featuring the Sub-Mariner fighting Nazis on a torpedo boat. The cover also promotes stories with the Human Torch and Toro, highlighting action-packed content.',
  },
  {
    message: 'Art by Superman Co-Creator Joe Shuster',
    id: '54618571998_784758086986620',
    publishTime: '2023-08-15T18:11:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/367406425_784326200363142_7735151774248340883_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=KIttA6bmTQcQ7kNvgFWYIPk&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AFmhw3kNsmh72LjrMEnX1-g&oh=00_AYDGaqrfVgeHIxuDJIa1jcbcqIw0R6I7eSAGJpOEwtWT8A&oe=679DEBB8',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a sketch of a muscular man in profile, showcasing a strong jawline and slicked-back hair. It includes an inscription "To Tommy From Superman" and is signed by Joe Shuster.',
  },
  {
    shares: 255,
    reactions: 2040,
    message: '',
    id: '54618571998_713543410774755',
    comments: 26,
    publishTime: '2023-05-10T13:14:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/345859860_273893164991845_4570477407282868463_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=v-e2R9PSpOMQ7kNvgHXhV9j&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AvTk5bmSziIvFA13hRBimly&oh=00_AYBs8hHE9zUmDxx6pmhsOLZayEmI7XiHE5E4lDkpUajeWA&oe=679DF8F2',
    status: 'PUBLISHED',
    imageDescription:
      'The image shows the classic Batmobile parked beside an older van, with a "Batman" TV show billboard in the background, advertising that it airs on ABC on Wednesdays and Thursdays.',
    postUrl: 'https://www.facebook.com/54618571998_713543410774755',
    totalEngagement: 2321,
  },
  {
    shares: 175,
    reactions: 2109,
    message:
      'Classic Comic - Amazing Spider-Man #162 (1976) - Nightcrawler and Punisher appear. 1st appearance of Jigsaw and Dr Marla Madison',
    id: '54618571998_836794805116281',
    comments: 35,
    publishTime: '2023-10-30T20:26:35+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/395575789_836794625116299_5756684678091616291_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6T6VGxSBFOQQ7kNvgFqXeCz&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APJaJCyVrXvQdQbZ44Kmjb9&oh=00_AYCFdmzJwbuJPNT6a30VRLuvZZTlP2EoftIirqjAsB9o0A&oe=679DEA1E',
    status: 'PUBLISHED',
    imageDescription:
      'The comic book cover is for \u201cThe Amazing Spider-Man #162.\u201d It features Spider-Man, Nightcrawler, and The Punisher on a cable car above Roosevelt Island. The scene is tense, with a speech bubble stating, "Only one of us is coming down from here alive!" The background shows a cityscape and bridge. The issue is labeled as 30 cents, from November.',
    postUrl: 'https://www.facebook.com/54618571998_836794805116281',
    totalEngagement: 2319,
  },
  {
    message:
      'Classic Comic - Batman #11 (1942)  - 1st Joker cover in the title Batman.. Joker and Penguin aepearance. Ad for Detective #64. Cover by Fred Ray',
    id: '54618571998_881160834013011',
    publishTime: '2024-01-04T16:09:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/414999632_880953584033736_1682567225730277503_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Az628pj-mzwQ7kNvgEFi1cs&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Aq9BZLyejJs2C5ZtYhRhe9s&oh=00_AYBOAA3zE1ju5Xk-RH3iwCB-KrtoKLWToK8av43Jpo8W5Q&oe=679DEAA7',
    status: 'SCHEDULED',
    imageDescription:
      'The image is the cover of "Batman" comic issue No. 11 from June-July, featuring Batman and Robin amidst a background of playing cards. The Joker is also prominently depicted, adding to the dynamic, action-packed scene. The comic is published by DC Comics and priced at 10 cents.',
  },
  {
    message: 'Red Sonja by Bruce Timm',
    id: '54618571998_1097730085689417',
    publishTime: '2024-10-26T21:31:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/464725003_1097303272398765_6737145518689868645_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JpFHg5yZ2EUQ7kNvgFY4FqO&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad6wxUoh2wk8IsbdMQixRCG&oh=00_AYBZvpp-xBjwPoJ9NayIQc8DO7S1tziRam4RMqa7Kby0ng&oe=679DF151',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a black-and-white illustration of a fierce, strong female warrior. She is holding a sword and wears minimal armor, consisting of strategically placed chains and circular ornaments. Her long, flowing hair and determined expression emphasize a sense of power and confidence. The background is filled with stylized, swirling shapes.',
  },
  {
    message:
      'Classic Comic - Detective #187  (1952) -  Two-Face Cover and art. Cover by Win Mortimer. Very popular issue',
    id: '54618571998_854648299997598',
    publishTime: '2023-11-26T22:58:05+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/405017857_854502123345549_637372836752154955_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PafAm4GDnXYQ7kNvgHyiqsu&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad1ff1s2cBGYM0_gvSA37EV&oh=00_AYDSNZcLhCH-TEVnfv613oYy_Dm0TpUadtKyiu7dfSbhDQ&oe=679DE2CA',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a cover of "Detective Comics" featuring Batman and Robin confronting Two-Face, who is depicted atop a clock tower. The text highlights "The Double Crimes of Two-Face," and the scene is set at two o\'clock.',
  },
  {
    message:
      'Classic Comic - Uncanny X-Men #121 (1979) - 1st full appearance of Alpha Flight. John Byrne cameo. John Byrne Terry Austin art. Dave Cockrum and Terry Austin cover',
    id: '54618571998_821862913276137',
    publishTime: '2023-10-09T19:11:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/387188753_821430343319394_2585403543105964629_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=w_ojfcYHUjoQ7kNvgGKcQPK&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AT-0UBkoD-77dQORts4-Ugl&oh=00_AYCsOZDY-8eHBrVIYNGJPQfHQSJ4hbEq_-0R5TqjSRDZiA&oe=679DD3B7',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is the cover of "The Uncanny X-Men" issue 121, published by Marvel Comics. The artwork features a dynamic battle scene between the X-Men and Alpha Flight, a Canadian superhero team. Key characters are shown in action, with bold, vibrant colors emphasizing the intense conflict. The cover highlights "Alpha Flight Attacks!" and teases the storyline involving Wolverine.',
  },
  {
    message:
      'Classic Comic - Wolverine #8 (1989) - Wolvie and Hulk  (Joe Fixit) cover . Cover and art by John Buscema',
    id: '54618571998_842035541258874',
    publishTime: '2023-11-08T00:03:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/399802336_842010271261401_404780712472961897_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=k2EOeHGGVaUQ7kNvgEt--aw&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AR-VLF_t3tmBjH-A-DjzpPc&oh=00_AYAK_vnoedOPA58fHnz0DS09kmhutUtqB7ddi5P2Q4o51g&oe=679DDDF9',
    status: 'SCHEDULED',
    imageDescription:
      'This image is the cover of "Wolverine" issue #8 featuring two characters in white tuxedos on a blue background. The title "Wolverine" is prominently displayed at the top in bold yellow letters with red outlines.',
  },
  {
    message:
      'Classic Comic - Flash #123 (1961) - Story by Gardner Fox\nCover & Art by Carmine Infantino\n1st GA Flash in the SA. Origin of Both SA & GA Flash.\n1st mention of Earth 2. 1st Silver Age (SA) Shade.',
    id: '54618571998_819732603489168',
    publishTime: '2023-10-06T17:37:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/386081881_819362213526207_2126566277904349270_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Uk2Xax5paRQQ7kNvgF5r_RM&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AT-0UBkoD-77dQORts4-Ugl&oh=00_AYCMzzOSPB_qJt1FUvfYL32YFiQ_SJorY6ewVkw4aUq_9g&oe=679DD3B7',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is the cover of "The Flash" comic book, issue No. 123. It features two versions of The Flash: the one in a red suit with yellow lighting and another in a red suit with a blue helmet. They are responding to a call for help from a man, and the cover highlights the story "Flash of Two Worlds!"',
  },
  {
    message:
      'Classic Comic - Flash #166 (1966) - Capt Cold and Heat Wave vs Flash. Cover by Carmine Infantino and Joe Giella',
    id: '54618571998_763616739100755',
    publishTime: '2023-07-15T22:31:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/360092736_763115452484217_1457601755544127690_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1FjKA0jWVTEQ7kNvgGbpDDn&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ATc73HRWyp02Z-tyObKGEZm&oh=00_AYD9bPGftpnjdj-V5iVaLnnExZA34c0N6pUnjwbj8Zjb_w&oe=679DC9A8',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The comic book cover features "The Flash" being confronted by two villains, Captain Cold and Heat Wave. The Flash is on crutches and appears injured, while Captain Cold and Heat Wave taunt him. The text highlights their rivalry as "the coolest and the hottest team of villains." The artwork includes bright colors and dynamic poses typical of superhero comics.',
  },
  {
    message:
      "Classic Comic - Batman #232 (1971) - 1st Ra's Al Ghul, Origin Batman & Robin retold, Talia cameo. Neal Adams Cover",
    id: '54618571998_657716113024152',
    publishTime: '2023-02-27T20:22:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/333900735_609590417795366_4339067621109832325_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JW4uNr_W0dYQ7kNvgE3FBgt&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=A8HhB-qJfxI52zIdOdODu1a&oh=00_AYATjYLz9VA239m_nFq9FpxCTUZmeVhdLgvwpx8jzqIbRA&oe=679DCDAD',
    status: 'SCHEDULED',
    imageDescription:
      'This is the cover of a comic book titled "Batman with Robin the Teen Wonder," issue No. 232 from June. It features a dominant green-toned image of a menacing figure in the background. Batman and Robin are depicted in action poses in the foreground. Text bubbles convey a threat against Robin. The cover promotes the story, "Daughter of the Demon!"',
  },
  {
    message:
      'Classic Comic - Action #242 (1958) - Origin & 1st Appearance of Brainiac. 1st Appearance of the Bottle City of Kandor.. Story by Otto Binder. Cover by Curt Swan',
    id: '54618571998_687567893372307',
    publishTime: '2023-04-06T19:53:52+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/339664853_230986936148339_3999890409789324701_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_QtcNUbrVNIQ7kNvgHIBYjw&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AjtGYtRKUGGoHrazfSxAA5t&oh=00_AYAD9JPPxsKfDUc_BYVlaOJDJ9IYJxiJJcvuUry2joDMUg&oe=679DC8C7',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a cover of "Action Comics" issue No. 242 from July, featuring Superman confronting a green-skinned villain. The villain challenges Superman with an "ultra-force shield," while Superman prepares to engage, noting it\'s his greatest challenge. The text highlights a "super-duel in space" and it\'s priced at 10 cents.',
  },
  {
    shares: 116,
    reactions: 2152,
    message:
      'Classic  Comic - X-Men #23 (1966) - Count Nefaria, Eel, Unicorn, Porcupine, Plant Man, and Scarecrow appear. Werner Roth and Dick Ayers Cover and art',
    id: '54618571998_802433841885711',
    comments: 23,
    publishTime: '2023-09-11T16:52:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/377451737_802088631920232_7675545028136419434_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uFYKVGi3mVUQ7kNvgFEoioJ&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AeuYoz_Z6s18yKB-UbYSALw&oh=00_AYDc7JVSxEswp8UOUPxV2uyXMVh1XdHudF6oe4HFxNbPPg&oe=679DF6BC',
    status: 'PUBLISHED',
    imageDescription:
      'This is the cover of "The X-Men" comic issue #23, published by Marvel Comics. The cover showcases several X-Men characters in dynamic action poses, engaging in a battle against villains against the backdrop of a cityscape, emphasizing heroic themes with phrases like "To save a city!" and "Action lovers! This one\'s for you!"',
    postUrl: 'https://www.facebook.com/54618571998_802433841885711',
    totalEngagement: 2291,
  },
  {
    shares: 287,
    reactions: 1855,
    message: "hey kid , this ain't no library",
    id: '54618571998_767390525390043',
    comments: 147,
    publishTime: '2023-07-21T14:31:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/362276288_767123488750080_6357015840004355374_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jioRSR8qrLIQ7kNvgHTV8Pi&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ATc73HRWyp02Z-tyObKGEZm&oh=00_AYDd6AF1Lcj6ZkAWx3Yf6k7qtVM9L9UK7kj5bSXphJgMyg&oe=679DD7B8',
    status: 'PUBLISHED',
    imageDescription:
      'A young boy is intently reading a comic book in front of a well-stocked display of various comics and magazines. The scene captures a nostalgic, possibly mid-20th-century atmosphere, with titles like "Weird Science," "Mysterious Adventures," and others visible on the shelves.',
    postUrl: 'https://www.facebook.com/54618571998_767390525390043',
    totalEngagement: 2289,
  },
  {
    message:
      'Classic Comic - Captain America #110 (1969) - 1st App of Madame Hydra. The Hulk appears and 1 of the most iconic Covers by Jim Steranko',
    id: '54618571998_580023927460038',
    publishTime: '2022-12-02T16:23:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/317817983_579586880837076_3205994460106556424_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2nGls3jeX9sQ7kNvgFfC91-&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AgeuWbsv7KaB-eO50OGO54R&oh=00_AYC1sc444dSfQrwp0b-x6J9vPHs8556aktclyaLnvLolWQ&oe=679DF416',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a vintage comic book cover of "Captain America" issue #110. It features Captain America and Rick Jones in action, confronting a powerful and enraged Hulk, who is bursting through a wall. The title is prominently displayed at the top, and the cover includes typical comic details like the issue number and price. The art style is classic comic book, colorful and dynamic.',
  },
  {
    message:
      'Classic Comic - Adventure #214 (1955) - 2nd Appearance of Krypto.. Curt Swan cover',
    id: '54618571998_678507934278303',
    publishTime: '2023-03-25T17:15:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/337144771_3312034189061863_6178740543678619026_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fbKOhW7TlD4Q7kNvgG77Hii&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYAcqU3IsbttvtK7rWmW9nWhk9XxH2uudoXQz--jeDXUzg&oe=679DE4BA',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a vintage comic book cover from "Adventure Comics" No. 214, dated July. It features a superhero flying with his canine sidekick, breaking through a wall. The superhero, with a speech bubble, is instructing the dog, who is wearing a cape, to fly over the wall instead of through it. The cover highlights an adventure with "Superboy\'s Super-Pet," described as "The Dog of Steel."',
  },
  {
    message:
      'Classic Comic - Detective #287 (1961) - Origin of Martian Manhunter retold. Sheldon Moldoff cover',
    id: '54618571998_782756143853481',
    publishTime: '2023-08-12T20:03:00+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/367029961_782282977234131_1641538830018191146_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=juIwMmm0amIQ7kNvgH-Ehwg&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AFmhw3kNsmh72LjrMEnX1-g&oh=00_AYD3Mx7u1vx79klvJLatAmIrZMJ6g7jDbvtqjUxFUe3Btw&oe=679DF0D5',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a comic book cover for "Detective Comics" featuring Batman and Robin. They are facing two villains named "The Raven and the Wasp." Batman is being attacked with a laser-like weapon, and Robin looks on. The cover includes classic comic elements like speech bubbles and bold text.',
  },
  {
    shares: 294,
    reactions: 1959,
    message:
      'Classic Comic - Superman #13 (1941) - Great WW 2 cover. Lex Luthor & jimmy Olsen appear. Jerry Siegel story. Fred Ray cover and art.',
    id: '54618571998_643370264458737',
    comments: 17,
    publishTime: '2023-02-11T16:17:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/330393154_928157565194791_4676458259224337102_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UMja-ElhwFoQ7kNvgHjgPOY&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AOWK0IeDNMQbdSLHTr-neG3&oh=00_AYA5K-bjOS_c0ZL4LXLyltwo9RSoBBUAYh8P9fhjztEikg&oe=679DD1C0',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vintage comic book cover featuring Superman. He is flying and punching a military ship with a swastika symbol on it, causing it to take damage. In the foreground, people in a lifeboat appear to be escaping. The cover includes the text "Superman," "World\u2019s Greatest Adventure-Strip Character!" and "No. 13," with a price of 10 cents for Nov.-Dec.',
    postUrl: 'https://www.facebook.com/54618571998_643370264458737',
    totalEngagement: 2270,
  },
  {
    shares: 124,
    reactions: 2081,
    message: 'MJ (Mary Jane) by John Romita Sr',
    id: '54618571998_892172826245145',
    comments: 64,
    publishTime: '2024-01-19T19:09:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/420530162_890803626382065_491468737658257868_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IX0k6mI6K0QQ7kNvgFohJC5&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AnI2vm1qwoJyPrblQR7BRtx&oh=00_AYBhCZttSCEqHhsNjMcTf2DNkhuP1JmolnvBZBlT_cCkhA&oe=679DC734',
    status: 'PUBLISHED',
    imageDescription:
      'A comic book illustration features a woman with long red hair, wearing a black sleeveless top and pants, accented with a green belt. She is standing in front of an enlarged depiction of Spider-Man\'s face. The background includes buildings, and "Romita" is signed on the right.',
    postUrl: 'https://www.facebook.com/54618571998_892172826245145',
    totalEngagement: 2269,
  },
  {
    shares: 174,
    reactions: 2061,
    message:
      'Classic Comic - Brave and Bold #72 (1967) -  Flash vs Spectre. Cover by Carmine Infantino and Murphy Anderson',
    id: '54618571998_744420681020361',
    comments: 32,
    publishTime: '2023-06-19T20:10:46+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/353456256_744411801021249_1858607313144686504_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=U2PVczSrpw0Q7kNvgHs4ggg&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ASXWjd5_HguOydGi6Cp1YcZ&oh=00_AYB8pHOPmeShwLUfCRWTqLVTdKKCzMcITmmKGxVece7rRg&oe=679DFDBC',
    status: 'PUBLISHED',
    imageDescription:
      'The comic cover depicts a dramatic scene with the Spectre and the Flash in conflict. The Spectre is shown striking the Flash, who is engulfed in fiery energy, against a cosmic background. In the foreground, a crashed biplane is visible. The title indicates "The Brave and the Bold Presents The Spectre and The Flash", with the exclamation "Phantom Flash, Cosmic Traitor!"',
    postUrl: 'https://www.facebook.com/54618571998_744420681020361',
    totalEngagement: 2267,
  },
  {
    message: 'X-men vs. the Avengers by Steve Epting',
    id: '54618571998_1066996152096144',
    publishTime: '2024-09-19T17:09:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/460501512_1066647195464373_3928633343892281573_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=M5TV86wveRQQ7kNvgG97L5d&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AZX2JdnMcdzBEQiyXE9D9E5&oh=00_AYA7pt8JrIeUSVQQbEz2knpU0zHhQXGMUGKM3Wlsnq68_Q&oe=679DD99B',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image shows a group of Marvel superheroes, including members of the X-Men and Avengers, gathered around arcade game machines labeled "X-Men" and "Avengers." They appear to be enjoying some playful competition. There\'s text promoting the upcoming "Spider-Man: The Animated Series." The scene captures a lighthearted and nostalgic moment among the characters.',
  },
  {
    shares: 147,
    reactions: 2097,
    message: 'Thor poster by Jack Kirby',
    id: '54618571998_788636176598811',
    comments: 22,
    publishTime: '2023-08-21T16:03:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/367459956_788344699961292_5204211110168363701_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=iIIH8osVwrkQ7kNvgFznJkQ&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APLqFCiDL0pg8a1LCAOn5y7&oh=00_AYBwNaVIyy4fk0iBp-k8_sDdyjl8DfnsYoiZ3_TuWKpPIA&oe=679DD31C',
    status: 'PUBLISHED',
    imageDescription:
      'The image depicts a dynamic comic book illustration of a muscular character with long blonde hair, wielding a hammer and wearing a winged helmet, blue and black costume with circular accents, red cape, and yellow boots. He stands confidently amidst a backdrop of robotic figures and a dramatic purple sky. The name "Jack Kirby" is prominently featured in the bottom right corner.',
    postUrl: 'https://www.facebook.com/54618571998_788636176598811',
    totalEngagement: 2266,
  },
  {
    message:
      'Classic Comic - Detective #120 (1947) - Penguin cover and story. Win Mortimer Cover',
    id: '54618571998_839933144802447',
    publishTime: '2023-11-04T15:10:04+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/398849725_839698718159223_4145393584916114779_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QS_9z5lSTxUQ7kNvgE3rC9T&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AR-VLF_t3tmBjH-A-DjzpPc&oh=00_AYAnbrxUfVPzyBANfoJb1T1SDZDrEAAZmbTFx9IPhkpN_g&oe=679DCE3E',
    status: 'SCHEDULED',
    imageDescription:
      'This is a cover of "Detective Comics" No. 120, featuring Batman and Robin. They are depicted holding a birdcage with The Penguin inside. The text reads "Batman and Robin give The Penguin the bird in \'Fowl Play.\'"',
  },
  {
    message:
      'Classic Comic - Shazam #8 (1973) - Reprints the 1st Appearance of Black Adam and Mr Tawny. Art by C.C. Beck',
    id: '54618571998_673565801439183',
    publishTime: '2023-03-19T20:28:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/337118916_180578428090027_6348909073551428584_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AN5_Q1U_NEcQ7kNvgFbcJxu&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AVWdZLjlcVj_WAS2RU4egO3&oh=00_AYCkz5sfbbJN-tTiKTlDeFkio9K3R7mlUWx08del66q3eg&oe=679DF882',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a comic book cover titled "Shazam! The Original Captain Marvel," featuring a large central figure of Shazam with a lightning bolt symbol on his chest. Surrounding the central character are smaller images and captions, including "Origins of The Shazam Family," "The 1st Mr. Tawny Tale," "The World\'s Mightiest Girl," and "The World\'s Mightiest Boy." It highlights multiple stories within the issue, emphasizing "The Greatest Stories of the World\'s Mightiest Mortals." The comic is labeled DC 100 Super Spectacular, priced at 50 cents.',
  },
  {
    message: 'Fan Made TV guide  by Christopher Franchi',
    id: '54618571998_1163029852492773',
    publishTime: '2025-01-18T17:04:16+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/473620554_1162392965889795_8117887306273653929_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1nZSTsSp0vwQ7kNvgGn2bQ5&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AuRRKEzoP2P4qCBWI7mg21G&oh=00_AYCEpTdkIDMjqCfvUvxUQnSnoG6Bta_OijrV8CU4NLHNDA&oe=679DE680',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a vintage TV Guide cover featuring Batman, Robin, and Batgirl in classic superhero costumes. The headline reads, "This Season, The Dynamic Duo Becomes THE TERRIFIC TRIO," with a mention of superhero adventures. The cover has a colorful and retro comic book style.',
  },
  {
    message:
      'Classic Comic - Batman #332 (1981) - Catwoman 1st Solo story. Talia cover . Marv Wolfman story. Jim Aparo cover',
    id: '54618571998_772734068189022',
    publishTime: '2023-07-29T17:46:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/364084416_772698171525945_4688085755803875713_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nXx1VQDHhawQ7kNvgECzloA&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AxJt4ThoRXUxba1szmG7ZRv&oh=00_AYCDhoOy0xzPHzkgbKyrtmdlDjEN630bF_v_aGwY8X5rxw&oe=679DCF9F',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is the cover of Batman comic issue #332, featuring "The Lazarus Affair." It depicts Batman fighting multiple assailants in a laboratory setting. Talia, dressed in a yellow outfit, is aiming a gun, posed with a caption questioning whether she will save Batman or kill him. The cover also highlights Catwoman\'s first solo story, shown in a circular inset at the bottom. The comic is priced at 50 cents and is published by DC Comics.',
  },
  {
    message:
      'Classic Comic - Detective #58 (1941) -  1st Appearance of The Penguin. Last Speed Saunders. Cover by Jerry Robinson',
    id: '54618571998_645090400953390',
    publishTime: '2023-02-13T16:07:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/330926988_1238933217003017_2547118893003828781_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3dLmEQ8ZUc4Q7kNvgElUbZd&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AOWK0IeDNMQbdSLHTr-neG3&oh=00_AYC6EjAQctMm45T1UxNlgUT_0qNridpSV_72Ugr8v1LVIg&oe=679DDEA9',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is a cover of "Detective Comics" issue No. 58. It features Batman climbing up a rope from the water, while Robin is held at gunpoint by a villain on a boat. The background has vibrant, classic comic book colors with "Detective Comics" prominently displayed at the top.',
  },
  {
    message: 'really needin that time machine',
    id: '54618571998_710531011075995',
    publishTime: '2023-05-06T13:13:05+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/343997811_621692089858064_1747107601572108982_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xsnUnHmryT8Q7kNvgF43h1X&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AYoRt-zoKoYprRsbORd9AEX&oh=00_AYCVarGaMExS4WhKEF_9b_eG6v0Dso1ZEsx4aootPzAoRA&oe=679DE33C',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'A young boy stands in a store aisle, engrossed in reading a comic book. Surrounding him are shelves and racks filled with various colorful comic books and magazines. The scene conveys a sense of curiosity and fascination.',
  },
  {
    shares: 239,
    reactions: 1970,
    message:
      'Classic Comic - All Star #58 (1976) - 1st appearance of Power Girl. 1st All Star issue since 1951 . Cover by Mike Grell',
    id: '54618571998_622048406590923',
    comments: 30,
    publishTime: '2023-01-18T18:09:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/325668935_687859389745744_1159441421777594253_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xXjNwkHzAcUQ7kNvgF5kfjW&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AEj86Fc0xlMaisai1dICqfl&oh=00_AYCIaNrYme_cxjAnZ8aOEUo9KBLivUw7RSK20-6l-PAD9A&oe=679DFE1E',
    status: 'PUBLISHED',
    imageDescription:
      'This is the cover of "All-Star Comics" issue #58, featuring the "Super Squad" and the Justice Society of America. The top banner includes headshots of various DC superheroes. Below, several heroes are shown flying and running towards the reader, while other superheroes lie defeated in the foreground. The cover text suggests a narrative about the transition from the Justice Society to the Super Squad.',
    postUrl: 'https://www.facebook.com/54618571998_622048406590923',
    totalEngagement: 2239,
  },
  {
    message:
      'Classic Comic - Flash #51 (1944) - WW2 era Hawkman cover by Sheldon Moldoff',
    id: '54618571998_805193218276440',
    publishTime: '2023-09-15T15:12:06+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/378520033_804849764977452_5162739572174437318_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lZEhJroXa1MQ7kNvgEwNqaf&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AeuYoz_Z6s18yKB-UbYSALw&oh=00_AYDymouvKUBwzxP-22bebEfJXTVD0aH0zDUfxo9QrGQ26g&oe=679DF925',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a cover of "Flash Comics" issue No. 51, featuring a dramatic scene with a hero wearing a helmet with wings and wielding a mace, breaking through a wall. He confronts a startled old man aiming a pistol inside a room filled with flying birds and scattered jewels. The comic is priced at 10 cents and highlights "The Fastest Man Alive!"',
  },
  {
    message:
      'AVENGERS #186 (1979) - Origin of Scarlet Witch and Quicksilver. Cover by John Byrne and Terry Austin',
    id: '54618571998_810920517703710',
    publishTime: '2023-09-23T23:03:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/380825630_810866087709153_6779368140149701589_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=erOQmKwyVJYQ7kNvgHnzp9-&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AQ6uIXz3wArX-td61b3bq_j&oh=00_AYDi2h0uOXcM_8eN-_9rowVQsi3dluTVzJ-wT03XH9XI7Q&oe=679DCAB2',
    status: 'REJECTED',
    rejectionReason: 'Low engagement',
    imageDescription:
      'This image is a comic book cover for "The Avengers" issue #186 from August 1979, published by Marvel Comics. It features a prominent illustration of Scarlet Witch casting a spell, with Avengers\' faces lining the left side and Modred the Mystic floating above. The tagline reads, "The most bizarre Avengers epic ever told!" and "Enter... Modred the Mystic!"',
  },
  {
    message:
      'Classic Comic - Detective #257  (1958) - Intro and 1st appearance of Whirly Bats. Cover by Curt Swan and Stan Kaye',
    id: '54618571998_814197664042662',
    publishTime: '2023-09-28T15:10:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/383847736_814000327395729_1942175546680482445_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-Sh9Ht8S9RwQ7kNvgFSXgQa&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=A_vnmMIHG0AfcC5NFksZQ5j&oh=00_AYB2ySxH6pjEJJGdaDsrUa2MOifvaNG6IeCp6RMeJViKIA&oe=679DCAFD',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a vintage comic book cover titled "Detective Comics," featuring Batman and Robin. They are confronting a foe in a futuristic setting with a flying saucer, labeled as "Batman\'s Invincible Foe!" The cover includes dynamic action visuals and old-school comic art style, emphasizing adventure and suspense.',
  },
  {
    message: 'Alpha Flight by John Byrne',
    id: '54618571998_834798348649260',
    publishTime: '2023-10-27T18:48:01+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/395857754_834400538689041_7835103498152736499_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UPKRiOtSz8sQ7kNvgEuPYPm&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=APJaJCyVrXvQdQbZ44Kmjb9&oh=00_AYCUDSARPw-DfsZ04G1aaOJUYBFlAJ6s84o8UQVXgfckUA&oe=679DDEE5',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image is a black-and-white comic book illustration featuring a dynamic group of superheroes in action poses. They are surrounded by various elements like water and energy, and each character has distinct costumes and expressions, conveying power and unity.',
  },
  {
    message:
      'Classic Comic - Action #242 (1958) - 1st appearance and origin of Braniac. 1st mention of the shrunken city of Kandor. Cover by Curt Swan',
    id: '54618571998_884032363725858',
    publishTime: '2024-01-08T18:11:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/417872538_883688437093584_830528918917575854_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kgYeJJ5WIOwQ7kNvgFF47yL&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=Aq9BZLyejJs2C5ZtYhRhe9s&oh=00_AYCiTu0r6G5_s0RRE9fh4c9W824Th9Zm3rLA80ZMh50qWQ&oe=679DCB39',
    status: 'SCHEDULED',
    imageDescription:
      'The image is a vintage comic book cover of "Action Comics" featuring Superman. It shows Superman facing an alien adversary who challenges him with a force shield. The title showcases a "Super-Duel in Space."',
  },
  {
    message:
      'Classic Comic -  X-Men #28 (1967) - 1st appearance of Banshee and 1st appearance of Ogre. Cover by Werner Roth.',
    id: '54618571998_768053225323773',
    publishTime: '2023-07-22T15:25:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/362636673_767836715345424_1868838889331775099_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kVS7YXrSKiQQ7kNvgEb5fop&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=ATc73HRWyp02Z-tyObKGEZm&oh=00_AYCZM9xjj_n-2ypT1dd60XL8VTbCVVHR4xz5dkSvuNGJGQ&oe=679DECFE',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is a comic book cover for "The X-Men" issue #28, featuring the title "The Wail of the Banshee!" It shows a character using a sonic scream, surrounded by several X-Men characters being blasted away. The background is a vibrant red with dynamic lines suggesting powerful energy or sound waves. It also teases the appearance of "The Ogre."',
  },
  {
    message: 'Batman and Swamp Thing by Berni Wrightson',
    id: '54618571998_1100952028700556',
    publishTime: '2024-10-30T21:33:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/464327369_1100484962080596_6509487298817855210_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=trjolWhfKyUQ7kNvgGY8rzn&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=Ad6wxUoh2wk8IsbdMQixRCG&oh=00_AYCWDbW-J640c3WI37RLAKRUAeaVwsSzuvifvkm_JHU-eQ&oe=679DDB9B',
    status: 'REJECTED',
    rejectionReason: 'Copyright issue',
    imageDescription:
      'The image is a black and white illustration featuring a superhero, standing with arms crossed, behind a large, powerful creature. The superhero is encased in a cape, while the creature is crouched in front with rugged features. The artwork is signed "Wrightson."',
  },
  {
    message: 'Spider-Man Pin up by Steve Ditko',
    id: '54618571998_770756965053399',
    publishTime: '2023-07-26T18:12:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/363323447_770421088420320_1218651272872883644_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=E6RUit_t-e8Q7kNvgHJJfme&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AxJt4ThoRXUxba1szmG7ZRv&oh=00_AYC4XaD8pmFuDdaYxdCzAr1iiWiQwthsCcz3U9tkPNLiiA&oe=679DC321',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'The image is a vintage comic-style pin-up featuring Spider-Man in his classic red and blue costume. He is positioned dynamically, as if climbing or leaping, against a spotlighted background. The text at the top reads "A Marvel Masterwork Pin-Up: Spider-Man."',
  },
  {
    message:
      "Classic Comic - NOT BRAND ECHH # 1 (1967). - Marvel 's very 1st Parody Comic .Origin and 1st appearance of Forbush Man.. Cover by Jack Kirby",
    id: '54618571998_646397057489391',
    publishTime: '2023-02-14T21:09:02+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/330843776_548923003882918_6643342404031422057_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kHF4oQ8otCIQ7kNvgEoF4Qf&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AsmCs4QHo0xDF09S3gJ9BMV&oh=00_AYBoOpyMofe6PrBcJXD7KLrNKznFUUC_zDolYOeUT1UprA&oe=679DFD6B',
    status: 'REJECTED',
    rejectionReason: 'Inappropriate content',
    imageDescription:
      'This is the cover of "Not Brand Echh" issue #1 by Marvel Comics, published in August. It features a humorous and satirical take on superheroes, with exaggerated characters and comedic speech bubbles. The tagline reads "The comic magazine for non-believers who hate comic magazines!" and includes various Marvel characters reacting humorously.',
  },
  {
    message:
      "LYNDA CARTER (Wonder Woman always and forever)\nIt's not like we are fan boys and smitten with you or anything....well ok we are",
    id: '54618571998_891980536264374',
    publishTime: '2024-01-19T14:11:03+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/420545597_890827903046304_1934493331182687184_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qy7Y0huKS-YQ7kNvgGCMeYD&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AnI2vm1qwoJyPrblQR7BRtx&oh=00_AYCKLhFn348d4ujpRVybPBIjEyKpUnB2n-K7b7FV6RJhmw&oe=679DD449',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This image is a collage of four portraits of a dark-haired woman in different settings and outfits, showcasing various expressions.',
  },
  {
    shares: 241,
    reactions: 1916,
    message:
      "Classic Comic - World's Finest #142 (1964) - Origin and 1st Composite Superman . Curt Swan cover",
    id: '54618571998_625489199580177',
    comments: 63,
    publishTime: '2023-01-22T18:42:03+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/326312548_974727566829081_3787400975608881213_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9gonEVhlPFYQ7kNvgFSKrLL&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AEj86Fc0xlMaisai1dICqfl&oh=00_AYAcCZ2AFvX1-ehBjZwWbK6j27voO586y873MuV-tO3PSQ&oe=679DE62E',
    status: 'PUBLISHED',
    imageDescription:
      'The image is a vintage comic book cover titled "World\'s Finest Comics" No. 142, featuring a character known as the Composite Superman. He boasts more than 20 super-powers and threatens to expose the secret identities of Batman and Superman unless they allow him to join them as a third partner. The cover shows Composite Superman confronting Batman, Superman, and Robin, with a plane in the background.',
    postUrl: 'https://www.facebook.com/54618571998_625489199580177',
    totalEngagement: 2220,
  },
  {
    shares: 141,
    reactions: 2045,
    message: '',
    id: '54618571998_947910527338041',
    comments: 33,
    publishTime: '2024-04-07T22:18:06+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/434885032_947868007342293_7982995944636232224_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=h_PzmqZCSlYQ7kNvgExKHB7&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AgWySNYoCQdWM2hsmdj80hA&oh=00_AYAkNxABcE-wmiaHH_4wRDaNO-P5HLfFT7d9vhzfzpTrxQ&oe=679DE56E',
    status: 'PUBLISHED',
    imageDescription:
      'In a comic strip, a character uses their claws to slice French bread, surprising their superhero friends. The friends look disgusted, recalling that the claws were used for fighting zombies the previous night. The character insists they washed the claws, but skepticism and humor ensue.',
    postUrl: 'https://www.facebook.com/54618571998_947910527338041',
    totalEngagement: 2219,
  },
  {
    message:
      'Classic Comic - Marvel Premiere #28 (1976) - Legion of Monsters Appear (Man Thing , Morbius, Ghost Rider & Werewolf by Night)',
    id: '54618571998_601162708679493',
    publishTime: '2022-12-24T16:19:04+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/321664962_704704081273945_8095650196374526308_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3i6NTf7ttEcQ7kNvgFBafU2&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ARDxNigojbm3udtT9aeWKst&oh=00_AYCYsoimdW6BZ4Ftn7xQgtAwwUvuw1IXM7QhPBt9sxOiBw&oe=679DFDAD',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'This is a comic book cover from "Marvel Premiere" issue #28, titled "The Legion of Monsters." It features Ghost Rider, Man-Thing, Morbius, and Werewolf by Night, with dynamic artwork showing them advancing menacingly. The text promises action in a "mysterious Marvel manner," and there\'s a dialogue bubble with Ghost Rider warning about a looming threat.',
  },
  {
    message: '',
    id: '54618571998_637277001734730',
    publishTime: '2023-02-04T17:23:02+0000',
    imageUrl:
      'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/329122236_688017049781479_5124571893163439330_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1sFBTyw7u4AQ7kNvgFtHKpR&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AOWK0IeDNMQbdSLHTr-neG3&oh=00_AYCgVN_-82EnPHEs8_PK-3eRXlk3JffFEbS6h6h2da6FJQ&oe=679DEE5C',
    status: 'AWAITING_APPROVAL',
    imageDescription:
      'The image features a quote by Art Spiegelman: "Comics are a gateway drug to literacy." The background is dark, and the text is prominently displayed.',
  },
  {
    message: '',
    id: '54618571998_705198974942532',
    publishTime: '2023-04-29T18:17:01+0000',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/343876185_3453424708233649_1676092329307033123_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mJ1MGiz3LVoQ7kNvgGqP8SF&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AYoRt-zoKoYprRsbORd9AEX&oh=00_AYD8BEOGWIZFu2iGQSRH18kya9X8VP37GaGpb2DsQ5OiWg&oe=679DCAE4',
    status: 'SCHEDULED',
    imageDescription:
      'A vintage-style illustration features a diner scene with five people sitting on red stools at a counter. They are engaging with two behind-the-counter staff members. One of the seated people is dressed in a superhero costume. The setting includes retro signage for "Tony\'s Special SUPERBURGER" and various food advertisements.',
  },
]


module.exports = dummyPosts;