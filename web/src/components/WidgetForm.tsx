import { CloseButton } from "./CloseButton";
import bugImageURl from '../assets/bug.svg';
import ideaImageURl from '../assets/idea.svg';
import thoughtImageURl from '../assets/thought.svg';
import { useState } from "react";



const FeedBackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageURl
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source:ideaImageURl
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source:thoughtImageURl
        }
    },
};

type FeedbackType = keyof typeof FeedBackTypes


export function WidgetForm() {
    const [feedBackType, setFeedBackType] = useState<FeedbackType | null>(null)


    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex 
        flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
         
        <header>
            <span className="text-xl leanding-6" >Deixe seu FeedBack</span>

            <CloseButton />
        </header>

        <div className="flex py-8 gap-2 w-full" >
            { Object.entries(FeedBackTypes).map(([key, value]) => {
                return (
                    <button
                    key={key}
                    className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col
                     items-center gap-2 border-2 border-transparent
                     hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                    onClick={() => setFeedBackType(key as FeedbackType)}
                    type="button"
                   > 

                        <img src={value.image.source} alt="" />
                        <span>{value.title}</span>
                    </button>
                );

        }) }
        </div>

         <footer className="text-xs text-neutral-400">
            Feito com amor pela <a className="underline underline-offset-2"
             href="https://rocketseat.com.br">Rocketseat</a>
         </footer>

        </div>
    );
}