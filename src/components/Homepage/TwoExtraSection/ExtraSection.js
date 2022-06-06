import React from 'react';
import Extra from './Extra1.jpg'

const ExtraSection = () => {
    return (
        <div>

            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-6 items-center justify-center flex-col">
                    <img className="lg:w-5/6 md:w-5/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={Extra} />
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Here are the best pc games you'll need to know....</h1>
                        <p className="mb-8 leading-relaxed">There may not be such a thing as a free lunch, but fortunately, there are still free PC games! From classic 90s point-and-click adventure games to cutting edge new indie games, you can have a blast playing these without spending a dime. Share your favorite sites for downloading free PC games!</p>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExtraSection;