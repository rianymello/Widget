import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
interface FeedbackContentStepProps {
    feedbackType: FeedbackType
}

export function FeedbackContentStep({ feedbackType }: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType]
    return (
        <>
            <header>
                <button type="button" className="top-5 left-5 absolute mr-4 text-zinc-400 hover:text-zinc-100">
                    <ArrowLeft weight="bold" className="w-4 h4"/>
                </button>

                <span className="text-xl leading-6 flex items-center gap-2 flex-row" >
                    <img src={feedbackTypeInfo.image.source} className="w-6 h-6" alt="" />
                    {feedbackTypeInfo.title} 
                 
<CloseButton />
                </span>
   
            
            </header>

            <div className="flex py-8 gap-2 w-full" >
   
            </div>
        </>
    )


}