import { useNavigate } from "react-router-dom";
import newparchment from "./assets/new-parchment.png";
import page from "./assets/page-img.JPG";
import back from "./assets/turn-back.png";
import next from "./assets/turn-next.png";
import gallery from "./assets/gallery-icon.png";
import topleft from "./assets/top-left.png";
import topright from "./assets/top-right.png";
import botleft from "./assets/bot-left.png";
import botright from "./assets/bot-right.png";
import write from "./assets/write.png";
import scroll from "./assets/scroll.png";
import jon from "./assets/jon-avatar.png";
import pra from "./assets/pra-avatar.png";
import sar from "./assets/sar-avatar.png";
import empty from "./assets/placeholder.jpeg";

import { useState } from "react";
import {Read} from "./Read";

export const Album = () => {
    const navigate = useNavigate();
    const [showRead, setShowRead] = useState(false); // State to track whether to show the Read component
    const [selectedEntry, setSelectedEntry] = useState(null); // State to store the selected entry

    const [profiles, setProfiles] = useState([
        {"name": "Jon", "contact": "jonvin123@gmail.com", "avatar": jon,
        "entries": [{"title": "Weekend Fun", "content": "Today's adventure with Jon, Prashanth, and Sarah was nothing short of exhilarating. Our soccer game kicked off the day with a burst of adrenaline, laughter, and the ever-present sense of camaraderie – truly the highlight of our weekends.Post-game, Prashanth, the culinary genius, treated us to his delectable homemade fried chicken, much to Jon's delight. The room filled with the mouthwatering aroma as Prashanth, the heart of our group, showcased not only his culinary skills but also his boundless kindness and warmth. Amid bites of the savory feast, our conversation flowed effortlessly. Sarah, the wordsmith, shared glimpses of her latest writing projects. Her remarkable talent as a writer shines through, and I, appreciative of her considerate and insightful advice, often turn to her for guidance on my articles. As the day unfolded, I couldn't help but reflect on the diverse tapestry of friendships. Jon, a true team player on the soccer field, Prashanth's culinary artistry and unwavering kindness, and Sarah's eloquence all contribute to the unique experiences and cherished memories that make our group truly special."},
        {"title": "Work and Art", "content": "Today had a bit of everything. Work was the usual mix of challenges and good times with colleagues. Had lunch with my friend Sarah, who's into photography. She shared stories about her latest project capturing street art, and her passion is infectious. Alex called later, and we got into discussing our favorite books. Turns out, she loves classic literature, and I got some great recommendations. The bookstore visit afterwards brought a random chat about novels, reminding me of the engaging book talks Sarah and I often have. The day ended with a creative session, and I appreciated how Sarah's unique interests bring color to our friendship. Grateful for these moments."},
    ]
    },
        {"name": "Prashanth", "contact": "reddy002@hotmail.com", "avatar": pra,
        "entries": [{"title": "Yum!", "content": "Today unfolded like a vibrant canvas, painted by the diverse personalities and passions of the people I encountered. The morning kicked off with a coffee catch-up with Jon, a spirited adventurer whose stories of recent hikes infused the day with a sense of wanderlust. Over lunch, Prashanth, the resident foodie, guided us to a hidden gem of a restaurant, turning an ordinary meal into a culinary journey filled with flavors and anecdotes. The afternoon brought a delightful surprise as Emily, the artistic soul, paid a visit. Armed with her sketchbook, we dove into a creative session, exploring  her latest art project and discussing the intricate details of her work. Emily's ability to find beauty in the ordinary added an artistic touch to the day. Reflecting on these interactions, I am reminded of the beautiful mosaic that unfolds when different personalities and passions converge. Jon's adventurous spirit, Prashanth's culinary expertise, and Emily's artistic flair created a day filled with unique hues and textures. Grateful for the richness these connections bring to my life."},
        {"title": "Hiking", "content": "Today's hiking expedition with Prashanth proved to be a delightful revelation, offering glimpses into facets of his personality I hadn't known before. Renowned for his culinary expertise, Prashanth exhibited an unexpected proficiency in navigating the trails, his connection to nature apparent in the ease with which he pointed out interesting flora and shared insightful anecdotes about our surroundings. Amidst the beauty of the outdoors, Prashanth opened up about his childhood spent in a serene village surrounded by nature. He spoke with nostalgia about his grandmother, an avid gardener, whose influence instilled in him a profound appreciation for the environment. Learning about this side of Prashanth—his roots deeply intertwined with the beauty of the natural world—added a new dimension to our friendship. Reaching the summit, I couldn't help but marvel at the panoramic view, which seemed to mirror the diverse layers of Prashanth's personality."},
        {"title": "Creativity", "content": "Today Prashanth and I delved into spontaneous artistry, a departure from our usual routine. Armed with canvases and paints, we created a collaborative masterpiece. Prashanth's bold strokes unveiled a side of him I hadn't seen, accompanied by stories of his childhood fascination with art. It was a refreshing exploration beyond our usual topics, a reminder of the hidden dimensions within each person waiting to be uncovered through shared expressions. Grateful for the unexpected artistry that added a new layer to our friendship."},
        {"title": "Exploring Art", "content": "Today was a vibrant journey into the artistic world with Prashanth. We decided to explore a local art fair, immersing ourselves in a world of creativity. The air was filled with the lively energy of artists showcasing their work, and each exhibit seemed to tell a unique story. Prashanth, known for his appreciation of art, shared insightful perspectives on various pieces. His passion for creativity emerged as we discussed paintings, sculptures, and installations, uncovering the diverse interpretations each artwork evoked. As we strolled through the fair, Prashanth opened up about his early experiences with art. He spoke fondly of a childhood fascination with sketching and how it evolved into a lifelong appreciation for different forms of artistic expression. The day concluded with a visit to a local gallery, where we found ourselves captivated by a stunning collection. Prashanth's commentary added depth to our experience, transforming a casual outing into an exploration of the profound impact art can have on one's perspective."}
    ]
    },
        {"name": "Sarah", "contact": "sasawwang@gmail.com", "avatar": sar,
        "entries": [{"title": "Theme Park", "content": "Today was a day filled with laughter and spontaneity with Jon. We decided to escape the daily grind and indulge in a nostalgic adventure at the amusement park. From the adrenaline rush of roller coasters to the simple joy of cotton candy, every moment was a reminder of the carefree days of our youth. Jon, typically known for his calm demeanor, surprised me with his infectious enthusiasm for thrilling rides. His laughter echoed through the park, turning each twist and turn into an exhilarating experience. It was a side of Jon I hadn't seen before, and witnessing his joy added a vibrant energy to our day. Amidst the chaos of the amusement park, Jon shared childhood stories of annual family outings to similar places. It was heartwarming to learn about the traditions that shaped his love for such adventures. His nostalgic tales created a bridge between the past and the present, turning a simple day at the park into a journey through time."},
    ]
    }
    ]);

    const [current, setCurrent] = useState(0);

    const [leftScrolls, setLeftScrolls] = useState([{"Title": "Weekend Adventure", "Text": "Content"}, {"Title": "DAY 2", "Text": "Content"}])
    const [rightScrolls, setRightScrolls] = useState([{"Title": "DAY 1", "Text": "Content"}, {"Title": "DAY 2", "Text": "Content"}])

    const handleBack = () => {
        if (!(current === 0)) { setCurrent(current-2); }
    }

    const handleNext = () => {
        if (!(current + 2 > profiles.length)) { setCurrent(current+2); }
    }

    const handleButtonClick = (entry) => {
        console.log(entry)
        setSelectedEntry(entry);
        setShowRead(true);
        console.log("hi")
    };

    return (showRead ? (<Read
                title={selectedEntry.title}
                time={selectedEntry.date}
                content={selectedEntry.content}
            />):(
        <div className="h-screen w-screen flex flex-row" style={{ backgroundImage: `url(${newparchment})` }}>
            <div className="h-full w-1/2 flex flex-col items-center border-r-2 border-[#855048]">
                <div className="h-3/4 w-10/12">
                    <div className="relative h-3/4 w-full bg-white mt-10 p-5">
                        <img src={topleft} alt="corner" className="absolute top-[-10px] left-[-10px] z-10" />
                        <img src={topright} alt="corner" className="absolute top-[-10px] right-[-10px] z-10" />
                        <img src={botleft} alt="corner" className="absolute bottom-[-10px] left-[-10px] z-10" />
                        <img src={botright} alt="corner" className="absolute bottom-[-10px] right-[-10px] z-10" />
                        <img src={profiles[current].avatar} alt="Entry Image" className="w-full max-h-full h-auto z-0" />
                    </div>

                    <div id="quattro" className="w-full h-1/3 text-xl text-left mt-10 flex flex-row">
                        <div className="w-1/2 h-full flex flex-col justify-between">
                            <div className="w-full h-full flex flex-col">
                                <span>{profiles[current].name}</span>
                                <span>{profiles[current].contact}</span>
                            </div>

                            <div className="flex flex-row items-end space-x-4">
                                <button onClick={handleBack}><img src={back} alt="Previous page" className="h-12"/></button>
                                <button onClick={() => {navigate("/journal")}}><img src={write} alt="New Journal" className="h-20"/></button>
                            </div>
                        </div>

                        <div className="w-1/2 h-full flex flex-col items-center overflow-y-auto">
                            {profiles[current].entries.map((s) => {
                                return(
                                <button className="relative" onClick={()=>handleButtonClick(s)}>
                                    <img src={scroll} alt="Rolled up scroll" />
                                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#6A482F]">{s.title}</span>
                                </button>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>

            <div className="h-full w-1/2 flex flex-col items-center">
            <div className="h-3/4 w-10/12">
                    <div className="relative h-3/4 w-full bg-white mt-10 p-5">
                        <img src={topleft} alt="corner" className="absolute top-[-10px] left-[-10px] z-10" />
                        <img src={topright} alt="corner" className="absolute top-[-10px] right-[-10px] z-10" />
                        <img src={botleft} alt="corner" className="absolute bottom-[-10px] left-[-10px] z-10" />
                        <img src={botright} alt="corner" className="absolute bottom-[-10px] right-[-10px] z-10" />
                        <img src={current < profiles.length-1 ? profiles[current+1].avatar : empty} alt="Entry Image" className="w-full max-h-full h-auto z-0" />
                    </div>

                    <div id="quattro" className="w-full h-1/3 text-xl text-left mt-10 flex flex-row">
                        <div className="w-1/2 h-full flex flex-col items-center overflow-y-auto">
                            {(current < profiles.length-1) ?
                            (profiles[current+1].entries.map((s) => {
                                return(
                                <button className="relative" onClick={() => handleButtonClick(s)}>
                                    <img src={scroll} alt="Rolled up scroll" />
                                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#6A482F]">{s.title}</span>
                                </button>
                                );
                            })) : (<div></div>)
                        }
                        </div>

                        <div className="w-1/2 h-full flex flex-col justify-between">
                            <div className="w-full h-full flex flex-col text-right">
                                <span>{current < profiles.length-1 ? profiles[current+1].name : "-"}</span>
                                <span>{current < profiles.length-1 ? profiles[current+1].contact : "-"}</span>
                            </div>

                            <div className="flex flex-row items-end justify-end space-x-4">
                                <button onClick={handleNext}><img src={next} alt="Previous page" className="h-12"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    
    )
}