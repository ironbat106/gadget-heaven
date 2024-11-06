import { useEffect } from 'react';

const Support = () => {

    useEffect(() => {
        document.title = 'Support - Gadget Heaven';
    }, []);

    return (
        <div>
            <div className="hero bg-purple-700 pb-20 text-white">

                <div className="hero-content flex flex-col text-center">

                    <div className="max-w-md">

                        <h1 className="text-5xl font-bold">Support!</h1>
                        <p className="py-6">
                            Welcome to our support page! Here, you can find answers to common questions, troubleshooting tips, and contact information for personalized assistance with our products.
                        </p>

                    </div>

                    <div>

                        <div>
                            <h2 className="text-4xl font-bold">Our Fast Responses!</h2>
                        </div>
                        <br />
                        <div className="chat chat-end">
                            <div className="chat-bubble chat-bubble-primary">Hello! Welcome to Gadget Heaven. How can I assist you today?</div>
                        </div>

                        <div className="chat chat-start">

                            <div className="chat-bubble chat-bubble-secondary">
                                I’m looking for a new laptop. Can you recommend one?
                            </div>
                        </div>

                        <div className="chat chat-end">
                            <div className="chat-bubble chat-bubble-accent">
                                Sure! Are you looking for a gaming laptop, ultra book, or a MacBook?
                            </div>

                        </div>

                        <div className="chat chat-start">
                            <div className="chat-bubble chat-bubble-info">I’m looking for an ultra book, preferably something lightweight for work.</div>
                        </div>

                        <div className="chat chat-end">
                            <div className="chat-bubble chat-bubble-success">I recommend the Dell XPS 13 or the MacBook Air.</div>
                        </div>

                        <div className="chat chat-end">
                            <div className="chat-bubble chat-bubble-warning"> Both are lightweight, powerful, and perfect for work. Would you like more details on them?</div>
                        </div>

                        <div className="chat chat-start">
                            <div className="chat-bubble chat-bubble-primary">Yes, please. What are the specs for the MacBook Air?</div>
                        </div>

                        <div className="chat chat-end">
                            <div className="chat-bubble chat-bubble-secondary">
                                The MacBook Air comes with the latest M2 chip, 8GB of RAM, and a 256GB SSD.
                            </div>
                        </div>

                        <div className="chat chat-end">
                            <div className="chat-bubble chat-bubble-accent">
                                It’s great for multitasking and can last up to 18 hours on a single charge.
                            </div>
                        </div>

                        <div className="chat chat-start">
                            <div className="chat-bubble chat-bubble-info">That sounds perfect. What’s the price? I’d like to add it to my cart.</div>
                        </div>
                        
                    </div>
                    <br />
                    <div>
                        <button className="btn bg-white rounded-3xl text-purple-700 font-bold mb-10">Contact Now!</button>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Support;