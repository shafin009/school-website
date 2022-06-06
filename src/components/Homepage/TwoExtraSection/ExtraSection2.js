import React from 'react';
import Extra2 from './Extra2.jpg'
import card1 from './card1.jpg'
import card2 from './card2.jpg'
import card3 from './card3.jpg'


const ExtraSection2 = () => {
    return (
        <div>
            <br />
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={Extra2} />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">These sites can vary in their approaches, so the exact method for using them can vary from site to site.  </h1>
                        <p class="mb-8 leading-relaxed">Gaming has become increasingly popular in the modern world, and many gamers are searching for the best sites to download free PC games and add them to their personal gaming collection. If you're an online video game fan looking for some fun new titles, our list of the top 10 sites to download free PC games should be able to help out.</p>
                    </div>
                </div>
            </section>
            <br />
            <h1 className='text-center text-5xl font-serif underline text-stone-700'>Helpful Articles</h1>
            <br />
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={card1} alt="blog" />
                                <div class="p-6">

                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The best free games on Steam</h1>
                                    <p class="leading-relaxed mb-3">Hunting out the best free Steam games to add to your list? Steam has you covered, with free games of all kinds, across all the genres. Even if the budget is tight and you can't swing a new game, you can swap some space on your drives for a new experience. There's a staggering number of free games on Steam, so we'll take you to the best picks to let your wallet relax and prepare for the next sale.There are free-to-play heavyweights in online games like Path Of Exile and Destiny 2 of course, but there are fertile fields of indie games to work with too. We've rounded up a list of the best games you can add to your Steam library entirely free. The free games section includes games the are totally free. You download the game and play it without any microtransactions or extra strings. There might be DLC available.</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={card2} alt="blog" />
                                <div class="p-6">

                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The best Minecraft seeds for 1.18</h1>
                                    <p class="leading-relaxed mb-3">If you're looking for the best Minecraft seeds for your new world, look no further! Thanks to procedural generation, Minecraft always has some lovely new geography to find, and that's only become more true since the 1.18 update that fundamentally changed how mountains and caves are formed. If you want a lush jungle concealing temple ruins, an isolated island village, or just a rare biome close to spawn, we can show you all that and more.With Minecraft 1.19 imminent, there will be plenty to discover in your freshly-generated worlds. Above ground, you’ll find new Mangrove swamps, populated with bees, frogs, and the twisting roots of waterlogged Mangrove trees. Below ground, you’ll be able to explore the ruined corridors of the new Ancient City structure in deep dark biomes.</p>

                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={card3} alt="blog" />
                                <div class="p-6">

                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">SNIPER ELITE 5 REVIEW</h1>
                                    <p class="leading-relaxed mb-3">Five games deep, Sniper Elite delivers what I consider to be its best instalment since the original—thanks largely to the influence of games like Metal Gear Solid V: The Phantom Pain and the Hitman reboots. Yet a lack of confidence in its core sniping conceit, as well as a truly dire story, drag down an enjoyable stealth game. It's probably not what a lot of people coming to Sniper Elite 5 care about but someone at Rebellion was intent on cramming numerous cutscenes into this thing and they are all, without exception, duller than the dead eyes of the Nazis left in the wake of protagonist Karl Fairburne. This macho American commando and sniper is a videogame gruff-man so generic he feels like he didn't even get to the end of the assembly line of the factory where they make these cookie cutter men.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default ExtraSection2;