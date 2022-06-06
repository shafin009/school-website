import React from 'react';
import UseTools from '../../../Hooks/UseTools';
import HomeToolDetails from './HomeToolDetails';

const HomeTools = () => {

    const [tools, setTools] = UseTools();


    return (
        <div>
            <h1 className='text-center font-bold text-2xl font-serif underline text-stone-900'>GAMES COLLECTIONS</h1>

            <br />
            <section className="text-gray-700 bg-white body-font">

                <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center overflow-hidden">



                    {
                        tools.map(tool => <HomeToolDetails
                            key={tools._id}
                            tool={tool}
                        ></HomeToolDetails>)
                    }


                </div>


            </section >





        </div >
    );
};

export default HomeTools;