import { CloseButton } from "../CloseButton";
import bugImageURl from '../../assets/bug.svg';
import ideaImageURl from '../../assets/idea.svg';
import thoughtImageURl from '../../assets/thought.svg';
import { useState } from "react";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageURl
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageURl
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageURl
        }
    },
};

export type FeedbackType = keyof typeof feedbackTypes


export function WidgetForm() {
    const [feedBackType, setFeedBackType] = useState<FeedbackType | null>(null)

function handleRestartFeedback() {
    setFeedBackType(null);

}


    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex 
        flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">



            {!feedBackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedBackType} />
            ) : (
                <FeedbackContentStep
                 feedbackType={feedBackType} 
                 onFeedbackRestartRequested = {handleRestartFeedback}
                 />
            )}
            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2"
                    href="https://rocketseat.com.br">Rocketseat</a>
            </footer>

        </div>
    );
}